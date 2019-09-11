import styles from './index.css';
import htmlTemplate from './index.html';
import liTemplate from './list-item.html';
import renderView from '../../services/view-render-service';
import {locales} from './locale';
import localeProviderFn from '../../services/locale-provider-fn';
import loader from '../../services/loader-service';

class GroupList extends HTMLElement {
  static get observedAttributes() {
    return ['userid', 'disable-search'];
  }
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.state = {
      users: []
    };
  }
  connectedCallback() {
    this.fetchGroups();
  }
  disconnectedCallback() {
    //TODO:
  }
  attributeChangedCallback(attrName, oldVal, newVal) {
    if (attrName === 'userid' && oldVal != newVal && newVal) {
      const userid = newVal;
      this.fetchGroups(userid);
    }
    if (attrName === 'disable-search' && oldVal != newVal && newVal) {
      this.setReadOnlyMode(newVal);
    }
  }
  setReadOnlyMode(newVal) {
    const container = this.shadowRoot.querySelector('.container');
    if (container) {
      if (newVal == "true") {
        container.classList.add('readonly');
      } else {
        container.classList.remove('readonly');
      }
    }
  }
  fetchGroups(id) {
    loader.start();
    let url = '/api/groups';
    if (id) {
      url = `/api/groupsbyuser/${id}`;
    }
    fetch(url)
    .then(res => res.json())
    .then(groups => {
      this.state.groups = groups;
      this.render();
      loader.stop();
    })
    .catch(err => {
      this.state.groups = [];
      this.render();
      loader.stop();
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
      const groupId = li.getAttribute('id');
      clickEvent.data = this.state.groups.find(g => g.id === groupId);
      this.dispatchEvent(clickEvent);
    });
  }
  addSearchHandlers() {
    const input = this.shadowRoot.querySelector('input[type="search"]');
    input.addEventListener('input', e => {
      let searchTerm = e.target.value || '';
      searchTerm = searchTerm.toLowerCase();
      //adds little delay
      if (this.inputTimeout) {
        clearTimeout(this.inputTimeout);
      }
      this.inputTimeout = setTimeout(() => {
        const filteredGroups = this.state.groups.filter(g => {
          if ((g.id && g.id.toLowerCase().includes(searchTerm)) ||
          (g.name && g.name.toLowerCase().includes(searchTerm))) {
            return g;
          }
        });
        this.renderList(filteredGroups);
      }, 100);
    })
  }
  renderList(groups) {
    const list = this.shadowRoot.querySelector('ul.list');
    list.innerHTML = '';
    groups.map((u, i) => {
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
    this.renderList(this.state.groups);
    const readMode = this.getAttribute('disable-search');
    this.setReadOnlyMode(readMode);
  }
}

customElements.define('wc-group-list', GroupList);