import styles from './index.css';
import htmlTemplate from './index.html';
import renderView from '../../services/view-render-service';
import {locales} from './locale';
import localeProviderFn from '../../services/locale-provider-fn';

class MessageBox extends HTMLElement {
  static get observedAttributes() {
    return ['header-text', 'message', 'show', 'ok-label'];
  }
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.state = {
      headerText: '',
      message: '',
      show: false
    };
  }
  connectedCallback() {
    this.render();
  }
  disconnectedCallback() {
    //TODO:
  }
  attributeChangedCallback(attrName, oldVal, newVal) {
    if (attrName === 'show' && oldVal != newVal) {
      this.state.show = newVal;
      if (newVal == 'true') {
        this.classList.remove('hidden');
      } else {
        this.classList.add('hidden');
      }
    }
    if (attrName === 'header-text' && oldVal != newVal) {
      this.state.headerText = newVal;
      const title = this.shadowRoot.querySelector('.title');
      title && (title.innerHTML = newVal);
    }
    if (attrName === 'message' && oldVal != newVal) {
      this.state.message = newVal;
      const message = this.shadowRoot.querySelector('.message');
      message && (message.innerHTML = newVal);
    }
    if (attrName === 'ok-label' && oldVal != newVal) {
      this.state.okLabel = newVal;
      const ok = this.shadowRoot.querySelector('.btn-ok');
      ok && (ok.innerHTML = newVal);
    }
  }

  getLocaleFn() {
    const localeName = this.getAttribute('locale') || 'en';
    const locale = locales[localeName] || {};
    return localeProviderFn(locale);
  }
  addEventListeners() {
    const sRoot = this.shadowRoot;
    const close = sRoot.querySelector('.btn-close');
    const ok = sRoot.querySelector('.btn-ok');
    ok.addEventListener('click', e => {
      const event = new Event('ok');
      this.dispatchEvent(event);
      this.setAttribute('show', false);
    });
    close.addEventListener('click', e => {
      const event = new Event('cancel');
      this.dispatchEvent(event);
      this.setAttribute('show', false);
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
    if (this.state.show == 'true') {
      this.classList.remove('hidden');
    } else {
      this.classList.add('hidden');
    }
    this.addEventListeners();
  }
}
customElements.define('wc-message-box', MessageBox);