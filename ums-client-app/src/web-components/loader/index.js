import styles from './index.css';
import htmlTemplate from './index.html';
import renderView from '../../services/view-render-service';
import {locales} from './locale';
import localeProviderFn from '../../services/locale-provider-fn';

class Loader extends HTMLElement {
  static get observedAttributes() {
    return ['loading'];
  }
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.state = {
      loading: false
    };
  }
  connectedCallback() {
    this.render();
  }
  disconnectedCallback() {
    //TODO:
  }
  attributeChangedCallback(attrName, oldVal, newVal) {
    if (attrName === 'loading' && oldVal != newVal) {
      this.state.loading = newVal;
      this.render();
    }
  }

  getLocaleFn() {
    const localeName = this.getAttribute('locale') || 'en';
    const locale = locales[localeName] || {};
    return localeProviderFn(locale);
  }

  render() {
    const sRoot = this.shadowRoot;
    sRoot.innerHTML = '';
    const html = renderView(htmlTemplate, this.state, this.getLocaleFn());
    const styleEl = document.createElement('style');
    styleEl.textContent = styles;
    sRoot.appendChild(styleEl);
    sRoot.innerHTML += html;
    if (this.state.loading == 'true') {
      this.classList.remove('hidden');
    } else {
      this.classList.add('hidden');
    }
  }
}
customElements.define('wc-loader', Loader);