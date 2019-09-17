import styles from './index.css';
import htmlTemplate from './index.html';
import liTemplate from './list-item.html';
import renderView from '../../services/view-render-service';
import {locales} from './locale';
import localeProviderFn from '../../services/locale-provider-fn';
import loader from '../../services/loader-service';
const USERCARD = 'wc-responsive-user-card';
const USERFORM = 'wc-user-form';
const ACTIVE = 'active';

class ResponsiveUserList extends HTMLElement {
  static get observedAttributes() {
    return ['groupid'];
  }
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.state = {
      users: [],
      selectedItem: null
    };
    this.handleSelectItem = this.handleSelectItem.bind(this);
  }
  connectedCallback() {
    this.fetchUsers();
  }
  disconnectedCallback() {
    //TODO:
  }
  attributeChangedCallback(attrName, oldVal, newVal) {
    if (attrName === 'groupid' && oldVal != newVal && newVal) {
      const groupid = newVal;
      this.fetchUsers(groupid);
    }
  }

  fetchUsers(id) {
    loader.start();
    let url = '/api/users';
    if (id) {
      url = `/api/usersbygroup/${id}`;
    }
    fetch(url)
    .then(res => {
      if (res.ok) {
        return res.json()
      } else {
        const err = new Error(res.statusText);
        err.status = res.status;
        return Promise.reject(err);
      }
    })
    .then(users => {
      this.state.users = users;
      this.state.selectedItem = null;
      this.render();
      loader.stop();
    })
    .catch(err => {
      this.state.users = [];
      this.state.selectedItem = null;
      this.render();
      loader.stop();
    })
  }

  removeUser(id) {
    loader.start();
    let url = `/api/users/${id}`;
    fetch(url, {method: 'DELETE'})
    .then(res => {
      if (res.ok) {
        return res.json()
      } else {
        const err = new Error(res.statusText);
        err.status = res.status;
        return Promise.reject(err);
      }
    })
    .then(user => {
      loader.stop();
      const msg = this.shadowRoot.querySelector('wc-message-box');
      const handleMsgOk = e => {
        msg.removeEventListener('ok', handleMsgOk);
        msg.removeEventListener('cancel', handleMsgOk);
        this.fetchUsers();
      };
      msg.addEventListener('ok', handleMsgOk);
      msg.addEventListener('cancel', handleMsgOk);
      this.showMessageBox('Confirm',
      'User deleted Successfully.',
      'GO BACK');
    })
    .catch(err => {
      loader.stop();
      this.showMessageBox('Confirm',
      'Can not delete User due to following: ' + err.message,
      'Retry');
    })
  }

  getLocaleFn() {
    const localeName = this.getAttribute('locale') || 'en';
    const locale = locales[localeName] || {};
    return localeProviderFn(locale);
  }
  toggleSelectItem(li, select, user, isForm) {
    if (select === true) {
      li.classList.add(ACTIVE);
      this.state.selectedItem = user;
      //Add user card
      const cardOrForm = document.createElement(isForm ? USERFORM : USERCARD);
      cardOrForm.setAttribute('userid', user.id);
      const userCardContainer = li.querySelector('.user-card-container');
      userCardContainer.appendChild(cardOrForm);
      //toggle up and down arrow
      const close = li.querySelector('a.btn-close i.ic');
      close.classList.add('arrow-up');
      close.classList.remove('arrow-down');
      //scroll in view
      window.scrollTo({
        top: li.offsetTop,
        left: 0,
        behavior: 'smooth'});
    } else {
      li.classList.remove(ACTIVE);
      //remove user card
      const card = li.querySelector(USERCARD);
      const form = li.querySelector(USERFORM);
      card && card.remove();
      form && form.remove();
      this.state.selectedItem = null;
      //toggle up and down arrow
      const close = li.querySelector('a.btn-close i.ic');
      close.classList.add('arrow-down');
      close.classList.remove('arrow-up');
    }
  }
  handleSelectItem(e) {
    let li;
    let userId;
    let user;
    const isForm = e.data && e.data.isForm || false;
    if (e.currentTarget.tagName.toLowerCase() === 'li') {
      li = e.currentTarget;
      userId = li.getAttribute('id');
    } else {
      userId = e.currentTarget.getAttribute('userid');
      li = this.shadowRoot.getElementById(userId);
    }
    user = this.state.users.find(u => u.id === userId);
    if (li.classList.contains(ACTIVE)) {
      this.toggleSelectItem(li, false);
    } else {
      //Mark Active and unmark previous if any. and hide/show User-card
      if (this.state.selectedItem) {
        const selectedItemEl = this.shadowRoot.getElementById(this.state.selectedItem.id);
        this.toggleSelectItem(selectedItemEl, false);
      }
      this.toggleSelectItem(li, true, user, isForm);
      //dispatch event selected
      const clickEvent = new Event('selected');
      clickEvent.data = user;
      this.dispatchEvent(clickEvent);
    }
  }
  showMessageBox(title, message, actionText) {
    const msg = this.shadowRoot.querySelector('wc-message-box');
    msg.setAttribute('header-text', title);
    msg.setAttribute('message', message);
    msg.setAttribute('ok-label', actionText);
    msg.setAttribute('show', true);
  }

  addEventHandlers(liEl) {
    liEl.addEventListener('click', this.handleSelectItem);
    const del = liEl.querySelector('.btn-delete');
    const edit = liEl.querySelector('.btn-edit');
    const close = liEl.querySelector('.btn-close');

    del.addEventListener('click', e => {
      e.stopPropagation();
      const userId = e.currentTarget.getAttribute('userid');
      const msg = this.shadowRoot.querySelector('wc-message-box');
      const handleMsgOk = e => {
        this.removeUser(userId);
        msg.removeEventListener('ok', handleMsgOk);
        msg.removeEventListener('cancel', handleMsgCancel);
      };
      const handleMsgCancel = e => {
        msg.removeEventListener('ok', handleMsgOk);
        msg.removeEventListener('cancel', handleMsgCancel);
      };
      msg.addEventListener('ok', handleMsgOk);
      msg.addEventListener('cancel', handleMsgCancel);

      this.showMessageBox('Confirm User removal',
      "This will remove user from all memberships and remove user permanantly. Do you want to continue?",
      "continue...");
    });

    edit.addEventListener('click', e => {
      e.stopPropagation();
      e.data = e.data || {};
      e.data.isForm = true;
      this.handleSelectItem(e);
    });

    close.addEventListener('click', e => {
      e.stopPropagation();
      this.handleSelectItem(e);
    });
  }
  addSearchHandlers() {
    const input = this.shadowRoot.querySelector('input[type="search"]');
    input.addEventListener('input', e => {
      let searchTerm = e.target.value || '';
      searchTerm = searchTerm.toLowerCase();
      if (this.inputTimeout) {
        clearTimeout(this.inputTimeout);
      }
      this.inputTimeout = setTimeout(() => {
        const filteredUsers = this.state.users.filter(u => {
          const fullName = `${u.lastName}, ${u.firstName}`;
          if ((fullName && fullName.toLowerCase().includes(searchTerm)) ||
          (u.email && u.email.toLowerCase().includes(searchTerm))) {
            return u;
          }
        });
        this.renderList(filteredUsers);
      }, 100);
    });

    const add = this.shadowRoot.querySelector('.btn-add');
    add.addEventListener('click', e => {
      e.stopPropagation();
      // Add User
    });
  }
  renderResultCount(count) {
    const resultEl = this.shadowRoot.querySelector('.search-result');
    resultEl.innerHTML = `${count || '0'} of ${this.state.users && this.state.users.length || '0'}`;
  }
  renderList(users) {
    const list = this.shadowRoot.querySelector('ul.list');
    this.state.selectedItem = null;
    //update result count
    this.renderResultCount(users && users.length);
    list.innerHTML = '';
    users.map((u, i) => {
      const li = document.createElement('li');
      li.setAttribute('id', u.id);
      li.innerHTML = renderView(liTemplate, u, this.getLocaleFn());
      this.addEventHandlers(li);
      list.appendChild(li);
    });
  }
  render() {
    const sRoot = this.shadowRoot;
    sRoot.innerHTML = '';
    const html = renderView(htmlTemplate, this.state, this.getLocaleFn());
    const styleEl = document.createElement('style');
    styleEl.textContent = styles;
    sRoot.appendChild(styleEl);
    sRoot.innerHTML += html;
    this.addSearchHandlers();
    this.renderList(this.state.users);
  }
}

customElements.define('wc-responsive-user-list', ResponsiveUserList);