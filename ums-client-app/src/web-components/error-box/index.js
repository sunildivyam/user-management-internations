import styles from './index.css';
import htmlTemplate from './index.html';
import renderView from '../../services/view-render-service';
import {locales} from './locale';
import localeProviderFn from '../../services/locale-provider-fn';

class ErrorBox extends HTMLElement {
  static get observedAttributes() {
    return ['hide', 'message', 'title'];
  }
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.state = {
      hide: false,
      title: '',
      message: ''
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

  getStateFromProps() {
    this.state = {
      hide: this.getAttribute('hide') || false,
      title: this.getAttribute('title') || '',
      message: this.getAttribute('message') || ''
    };
  }
  render() {
    const sRoot = this.shadowRoot;
    sRoot.innerHTML = '';
    this.getStateFromProps();
    if (this.state.hide == 'true') {
      this.classList.add('hidden');
    } else {
      this.classList.remove('hidden');
    }
    const html = renderView(htmlTemplate, this.state, this.getLocaleFn());
    const styleEl = document.createElement('style');
    styleEl.textContent = styles;
    sRoot.appendChild(styleEl);
    sRoot.innerHTML += html;
  }
}

customElements.define('wc-error-box', ErrorBox);