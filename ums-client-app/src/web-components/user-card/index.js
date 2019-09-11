import styles from './index.css';
import htmlTemplate from './index.html';
import Group from '../../models/group';
import renderView from '../../services/view-render-service';
import {locales} from './locale';
import localeProviderFn from '../../services/locale-provider-fn';
import loader from '../../services/loader-service';

class UserCard extends HTMLElement { 
  static get observedAttributes() {
    return ['userid'];
  }
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.state = {
      user: null,
      groups: null,
      error: 'No User Selected or No data available.'
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
    if (attrName === 'userid' && oldVal != newVal && newVal) {
      this.fetchUser(newVal);
    }
  }

  fetchUser(id) {
    loader.start();
    fetch(`/api/users/${id}`)
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
      this.state.user = user;
      this.render();
      loader.stop();
    })
    .catch(err => {
      console.log("Error: ", err.message);
      this.state.user = null;
      this.state.error = err.message;
      this.render();
      loader.stop();
    })
  }

  getLocaleFn() {
    const localeName = this.getAttribute('locale') || 'en';
    const locale = locales[localeName] || {};
    return localeProviderFn(locale);
  }
  addEventHandlers() {
    const btns = this.shadowRoot.querySelectorAll('.controls .btn');
    btns && btns.forEach(btn => {
      btn.addEventListener('click', e => {
        e.preventDefault();
        //dispatch event user-action
        const actionName = e.target.getAttribute('action-name');
        const clickEvent = new Event('user-action');
        clickEvent.data = {action: actionName, user: this.state.user};
        this.dispatchEvent(clickEvent);
      });
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
    this.addEventHandlers();
  }
}

customElements.define('wc-user-card', UserCard);