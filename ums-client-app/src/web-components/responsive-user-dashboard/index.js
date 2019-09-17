import styles from './index.css';
import htmlTemplate from './index.html';
import renderView from '../../services/view-render-service';
import {locales} from './locale';
import localeProviderFn from '../../services/locale-provider-fn';
import router from '../../services/router';
class ResponsiveUserDashboard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.state = {
      selectedUser: null
    };
  }
  connectedCallback() {
    this.render();
  }
  disconnectedCallback() {
    //TODO:
  }
  attributeChangedCallback(attrName, oldVal, newVal) {
    this.render();
  }

  getLocaleFn() {
    const localeName = this.getAttribute('locale') || 'en';
    const locale = locales[localeName] || {};
    return localeProviderFn(locale);
  }
  createEventHandlers() {
    // const userList = this.shadowRoot.querySelector('wc-user-list');
    // userList.addEventListener('selected', e => {
    //   // todo
    // });

    // const userCard = this.shadowRoot.querySelector('wc-user-card');
    // userCard.addEventListener('user-action', e => {
    //   // router.navigate('/manageuser');
    // });

  }
  render() {
    const sRoot = this.shadowRoot;
    const html = renderView(htmlTemplate, this.state, this.getLocaleFn());
    const styleEl = document.createElement('style');
    styleEl.textContent = styles;
    sRoot.appendChild(styleEl);
    sRoot.innerHTML += html;
    this.createEventHandlers();
  }
}

customElements.define('wc-responsive-user-dashboard', ResponsiveUserDashboard);