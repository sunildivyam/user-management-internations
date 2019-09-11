import styles from './index.css';
import htmlTemplate from './index.html';
import Group from '../../models/group';
import renderView from '../../services/view-render-service';
import {locales} from './locale';
import localeProviderFn from '../../services/locale-provider-fn';

class UserCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.state = {
      user: null,
      groups: null
    };
  }
  connectedCallback() {
    const id = this.getAttribute('userid') || '';
    this.fetchUser(id);
  }
  disconnectedCallback() {
    //TODO:
  }
  attributeChangedCallback(attrName, oldVal, newVal) {
    this.render();
  }

  fetchUser(id) {
    fetch(`/api/users/${id}`)
    .then(res => res.json())
    .then(user => {
      this.state.user = user;
      this.render();      
    })
    .catch(err => {
      console.log('Failed', err)
      this.state.user = null;
      this.render();
    })
  }

  fetchUserGroups() {
    this.state.groups = new Group();
  }

  getLocaleFn() {
    const localeName = this.getAttribute('locale') || 'en';
    const locale = locales[localeName] || {};
    return localeProviderFn(locale);
  }

  render() {
    const sRoot = this.shadowRoot;
    if (!this.state.user) {
      const errEl = document.createElement('span');
      errEl.innerHTML = 'No User Found';
      sRoot.appendChild(errEl);
      return;
    }
    const html = renderView(htmlTemplate, this.state, this.getLocaleFn());
    const styleEl = document.createElement('style');
    styleEl.textContent = styles;
    sRoot.appendChild(styleEl);
    sRoot.innerHTML += html;
  }
}

customElements.define('user-card', UserCard);