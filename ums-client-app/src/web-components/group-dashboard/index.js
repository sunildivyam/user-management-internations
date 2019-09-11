import styles from './index.css';
import htmlTemplate from './index.html';
import renderView from '../../services/view-render-service';
import {locales} from './locale';
import localeProviderFn from '../../services/locale-provider-fn';
import router from '../../services/router';

class GroupDashboard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.state = {
      selectedGroup: null
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
    const groupList = this.shadowRoot.querySelector('wc-group-list');
    groupList.addEventListener('selected', e => {
      this.state.selectedGroup = e.data;
      const groupCard = this.shadowRoot.querySelector('wc-group-card');
      groupCard.setAttribute('groupid', this.state.selectedGroup && this.state.selectedGroup.id || '');
    });

    const groupCard = this.shadowRoot.querySelector('wc-group-card');
    groupCard.addEventListener('group-action', e => {
      router.navigate('/managegroup');
    });

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

customElements.define('wc-group-dashboard', GroupDashboard);