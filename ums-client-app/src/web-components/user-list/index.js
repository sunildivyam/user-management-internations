import styles from './index.css';
import htmlTemplate from './index.html';
import liTemplate from './list-item.html';
import renderView from '../../services/view-render-service';
import {locales} from './locale';
import localeProviderFn from '../../services/locale-provider-fn';

class UserList extends HTMLElement {
  static get observedAttributes() {
    return ['groupid'];
  }
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.state = {
      users: []
    };
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
    let url = '/api/users';
    if (id) {
      url = `/api/usersbygroup/${id}`;
    }
    fetch(url)
    .then(res => res.json())
    .then(users => {
      this.state.users = users;
      this.render();
    })
    .catch(err => {
      this.state.users = [];
      this.render();
    })
  }

  getLocaleFn() {
    const localeName = this.getAttribute('locale') || 'en';
    const locale = locales[localeName] || {};
    return localeProviderFn(locale);
  }

  addEventHandlers(liEl) {
    liEl.addEventListener('click', e => {
      const li = e.currentTarget;
      //mark active li
      const allLis = this.shadowRoot.querySelectorAll('li');
      allLis.forEach(l => l.classList.remove('active'));
      li.classList.add('active');
      //dispatch event selected
      const clickEvent = new Event('selected');
      const userId = li.getAttribute('id');
      clickEvent.data = this.state.users.find(u => u.id === userId);
      this.dispatchEvent(clickEvent);
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
          if ((u.firstName && u.firstName.toLowerCase().includes(searchTerm)) ||
          (u.lastName && u.lastName.toLowerCase().includes(searchTerm)) ||
          (u.email && u.email.toLowerCase().includes(searchTerm))) {
            return u;
          }
        });
        this.renderList(filteredUsers);
      }, 100);
    })
  }
  renderList(users) {
    const list = this.shadowRoot.querySelector('ul.list');
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

customElements.define('wc-user-list', UserList);