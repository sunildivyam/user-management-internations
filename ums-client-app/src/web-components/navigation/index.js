import styles from './index.css';
import {locales} from './locale';
import localeProviderFn from '../../services/locale-provider-fn';
import router from '../../services/router';

class Navigation extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    document.addEventListener('appload', e => {
      this.render();
    });
    router.subscribe((route) => {
      const navLinks = this.shadowRoot.querySelectorAll('a');
      navLinks && navLinks.length && navLinks.forEach(a => {
        const href = a.getAttribute('href');
        if (route.path === href) {
          a.classList.add('active');
        } else {
          a.classList.remove('active');
        }
      })
    })
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

  handleLinkClick(e) {
    e.preventDefault();
    const href = e.target.getAttribute('href');
    router.navigate(href);
  }

  render() {
    const sRoot = this.shadowRoot;
    sRoot.innerHTML = '';
    const nav = document.createElement('nav');    
    router.routes.map(r => {
      const a = document.createElement('a');
      a.classList.add('link');
      a.setAttribute('href', r.path);
      a.innerHTML = r.title;
      a.addEventListener('click', this.handleLinkClick);
      if (r.path === router.activeRoute.path) {
        a.classList.add('active');
      }
      nav.appendChild(a);
    });
    const styleEl = document.createElement('style');
    styleEl.textContent = styles;
    sRoot.appendChild(styleEl);
    sRoot.appendChild(nav);
  }
}

customElements.define('wc-navigation', Navigation);