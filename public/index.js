/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _web_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _styles_index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70);
/* harmony import */ var _styles_index_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_index_less__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _page_views_home_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74);
/* harmony import */ var _page_views_user_details_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(75);
/* harmony import */ var _page_views_group_details_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(76);
/* harmony import */ var _services_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16);
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(22);








const main = () => {
  const routes = [{
    path: '/home',
    template: _page_views_home_html__WEBPACK_IMPORTED_MODULE_2__["default"],
    title: 'Home'
  }, {
    path: '/userdetail',
    template: _page_views_user_details_html__WEBPACK_IMPORTED_MODULE_3__["default"],
    title: 'Users'
  }, {
    path: '/groupdetail',
    template: _page_views_group_details_html__WEBPACK_IMPORTED_MODULE_4__["default"],
    title: 'Groups'
  }, {
    path: '/managegroup',
    template: '<wc-group-form></wc-group-form>',
    title: ''
  }, {
    path: '/manageuser',
    template: '<wc-user-form></wc-user-form>',
    title: ''
  }]; // loader subscription

  _services_loader_service__WEBPACK_IMPORTED_MODULE_6__["default"].subscribe(loading => {
    const loaderEl = document.querySelector('wc-loader');
    loaderEl.setAttribute('loading', loading);
  }); //Routes init

  _services_router__WEBPACK_IMPORTED_MODULE_5__["default"].routes = routes;
  _services_router__WEBPACK_IMPORTED_MODULE_5__["default"].viewTargetElementId = 'route-view'; //loads the first route

  _services_router__WEBPACK_IMPORTED_MODULE_5__["default"].navigate(location.pathname); //triggers the appload event

  const appload = new Event('appload');
  document.dispatchEvent(appload);
}; // Bootstraping the application


main();

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _models_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20);
/* harmony import */ var _services_view_render_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10);
/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4);
/* harmony import */ var _services_locale_provider_fn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(12);
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(22);








class ResponsiveUserCard extends HTMLElement {
  static get observedAttributes() {
    return ['userid'];
  }

  constructor() {
    super();
    this.attachShadow({
      mode: 'open'
    });
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

  disconnectedCallback() {//TODO:
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    if (attrName === 'userid' && oldVal != newVal && newVal) {
      this.fetchUser(newVal);
    }
  }

  fetchUser(id) {
    _services_loader_service__WEBPACK_IMPORTED_MODULE_6__["default"].start();
    fetch(`/api/users/${id}`).then(res => {
      if (res.ok) {
        return res.json();
      } else {
        const err = new Error(res.statusText);
        err.status = res.status;
        return Promise.reject(err);
      }
    }).then(user => {
      this.state.user = user;
      this.render();
      _services_loader_service__WEBPACK_IMPORTED_MODULE_6__["default"].stop();
    }).catch(err => {
      console.log("Error: ", err.message);
      this.state.user = null;
      this.state.error = err.message;
      this.render();
      _services_loader_service__WEBPACK_IMPORTED_MODULE_6__["default"].stop();
    });
  }

  getLocaleFn() {
    const localeName = this.getAttribute('locale') || 'en';
    const locale = _locale__WEBPACK_IMPORTED_MODULE_4__["locales"][localeName] || {};
    return Object(_services_locale_provider_fn__WEBPACK_IMPORTED_MODULE_5__["default"])(locale);
  }

  addEventHandlers() {
    const btns = this.shadowRoot.querySelectorAll('.controls .btn');
    btns && btns.forEach(btn => {
      btn.addEventListener('click', e => {
        e.preventDefault(); //dispatch event user-action

        const actionName = e.target.getAttribute('action-name');
        const clickEvent = new Event('user-action');
        clickEvent.data = {
          action: actionName,
          user: this.state.user
        };
        this.dispatchEvent(clickEvent);
      });
    });
    this.addEventListener('click', e => {
      e.stopPropagation();
    });
  }

  render() {
    const sRoot = this.shadowRoot;
    sRoot.innerHTML = '';
    const html = Object(_services_view_render_service__WEBPACK_IMPORTED_MODULE_3__["default"])(_index_html__WEBPACK_IMPORTED_MODULE_1__["default"], this.state, this.getLocaleFn());
    const styleEl = document.createElement('style');
    styleEl.textContent = _index_css__WEBPACK_IMPORTED_MODULE_0__["default"];
    sRoot.appendChild(styleEl);
    sRoot.innerHTML += html;
    this.addEventHandlers();
  }

}

customElements.define('wc-responsive-user-card', ResponsiveUserCard);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\r\n    width: auto;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    justify-content: flex-start;\r\n    /* border: 1px solid var(--primary-light); */\r\n    padding: 0px 15px;\r\n    border-radius: 10px;\r\n    cursor: default;\r\n}\r\n\r\n* {\r\n    box-sizing: border-box;\r\n}\r\n\r\nh1 {\r\n    margin-bottom: 0px;\r\n    width: 100%;\r\n    border-bottom: 5px solid var(--primary-light);\r\n    font-size: 22px;\r\n}\r\n.email {\r\n    font-size: 18px;\r\n    color: var(--primary);\r\n}\r\n\r\n.name h3, .email h3 {\r\n    margin-bottom: 0px;\r\n}\r\n\r\n.name span, .email span {\r\n    color: var(--primary);\r\n}\r\n\r\n.hidden {\r\n    display: none!important;\r\n}\r\n.groups {\r\n    width: 100%;\r\n}\r\n.info {\r\n    width: 100%;\r\n}\r\n.info-container {\r\n    width: 100%;\r\n}\r\n.controls {\r\n    display: block;\r\n    text-align: center;\r\n    width: 100%;\r\n}\r\na.btn, a.btn:active, a.btn:visited {\r\n    display: inline-block;\r\n    margin: 0px;\r\n    margin-bottom: 2px;\r\n    padding: 10px 19px;\r\n    text-decoration: none;\r\n    background: var(--primary-light);\r\n    transition: 0.4s all;\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n}\r\n.btn:hover {\r\n    background: var(--secondary-light);\r\n}\r\n\r\n@media only screen and (min-width: 768px) {\r\n    .info-container {\r\n        flex-direction: row;\r\n        display: flex;\r\n    }\r\n    .groups {\r\n        padding-left: 15px;\r\n    }\r\n    .info, .groups {\r\n        width: 50%;\r\n    }\r\n    a.btn, a.btn:active, a.btn:visited {\r\n        width: auto;\r\n        margin-left: 10px;\r\n        font-size: 16px;\r\n        padding-left: 15px;\r\n        padding-right: 15px;\r\n    }\r\n}");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n    <div class=\"info-container {{!d.user || !d.user.id ? 'hidden': ''}}\">\r\n        <div class=\"info\">\r\n            <div class=\"name\">\r\n                <h3>{{l('usercard.label.id')}}</h3>\r\n                <span>{{d.user.id}}</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"groups\">\r\n            <h3>{{l('usercard.label.groups')}}</h3>\r\n            <wc-group-list disable-search=\"true\" userid=\"{{d.user.id}}\"></wc-group-list>\r\n        </div>\r\n    </div>\r\n    <wc-error-box hide=\"{{!d.user || !d.user.id ?false:true}}\" message=\"{{d.error}}\"></wc-error-box>\r\n</div>\r\n");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locales", function() { return locales; });
const locales = {
  en: {
    'usercard.title': 'User Information',
    'usercard.label.id': 'User ID',
    'usercard.label.firstname': 'First Name',
    'usercard.label.lastname': 'Last Name',
    'usercard.label.email': 'Email Address',
    'usercard.label.groups': 'You are member of groups',
    'usercard.delete': 'Delete User',
    'usercard.edit': 'Edit User',
    'usercard.add': 'Add new User'
  },
  gb: {
    'usercard.title': ''
  }
};

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78);
/* harmony import */ var _services_view_render_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79);
/* harmony import */ var _services_locale_provider_fn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12);






class MessageBox extends HTMLElement {
  static get observedAttributes() {
    return ['header-text', 'message', 'show', 'ok-label'];
  }

  constructor() {
    super();
    this.attachShadow({
      mode: 'open'
    });
    this.state = {
      headerText: '',
      message: '',
      show: false
    };
  }

  connectedCallback() {
    this.render();
  }

  disconnectedCallback() {//TODO:
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
    const locale = _locale__WEBPACK_IMPORTED_MODULE_3__["locales"][localeName] || {};
    return Object(_services_locale_provider_fn__WEBPACK_IMPORTED_MODULE_4__["default"])(locale);
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
    const html = Object(_services_view_render_service__WEBPACK_IMPORTED_MODULE_2__["default"])(_index_html__WEBPACK_IMPORTED_MODULE_1__["default"], this.state, this.getLocaleFn());
    const styleEl = document.createElement('style');
    styleEl.textContent = _index_css__WEBPACK_IMPORTED_MODULE_0__["default"];
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

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _message_box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13);
/* harmony import */ var _user_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17);
/* harmony import */ var _group_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23);
/* harmony import */ var _error_box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(27);
/* harmony import */ var _user_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(31);
/* harmony import */ var _group_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(36);
/* harmony import */ var _user_dashboard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(41);
/* harmony import */ var _group_dashboard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(45);
/* harmony import */ var _group_form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(49);
/* harmony import */ var _user_form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(53);
/* harmony import */ var _page_footer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(57);
/* harmony import */ var _responsive_user_dashboard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(61);
/* harmony import */ var _responsive_user_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(65);
/* harmony import */ var _responsive_user_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1);












 //responsive Web components





/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var _services_view_render_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11);
/* harmony import */ var _services_locale_provider_fn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12);






class Loader extends HTMLElement {
  static get observedAttributes() {
    return ['loading'];
  }

  constructor() {
    super();
    this.attachShadow({
      mode: 'open'
    });
    this.state = {
      loading: false
    };
  }

  connectedCallback() {
    this.render();
  }

  disconnectedCallback() {//TODO:
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    if (attrName === 'loading' && oldVal != newVal) {
      this.state.loading = newVal;
      this.render();
    }
  }

  getLocaleFn() {
    const localeName = this.getAttribute('locale') || 'en';
    const locale = _locale__WEBPACK_IMPORTED_MODULE_3__["locales"][localeName] || {};
    return Object(_services_locale_provider_fn__WEBPACK_IMPORTED_MODULE_4__["default"])(locale);
  }

  render() {
    const sRoot = this.shadowRoot;
    sRoot.innerHTML = '';
    const html = Object(_services_view_render_service__WEBPACK_IMPORTED_MODULE_2__["default"])(_index_html__WEBPACK_IMPORTED_MODULE_1__["default"], this.state, this.getLocaleFn());
    const styleEl = document.createElement('style');
    styleEl.textContent = _index_css__WEBPACK_IMPORTED_MODULE_0__["default"];
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

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\r\n    background: rgba(0,0,0, 0.2);\r\n    position: fixed;\r\n    z-index: 9999;\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0px;\r\n    left: 0px;\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n.loader, .loader:before, .loader:after {\r\n  border-radius: 50%;\r\n  width: 2.5em;\r\n  height: 2.5em;\r\n  -webkit-animation-fill-mode: both;\r\n  animation-fill-mode: both;\r\n  -webkit-animation: load7 1.8s infinite ease-in-out;\r\n  animation: load7 1.8s infinite ease-in-out;\r\n}\r\n.loader {\r\n  color: var(--primary);\r\n  font-size: 15px;\r\n  margin: 80px auto;\r\n  position: relative;\r\n  text-indent: -9999em;\r\n  -webkit-transform: translateZ(0);\r\n  -ms-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  -webkit-animation-delay: -0.16s;\r\n  animation-delay: -0.16s;\r\n}\r\n.loader:before, .loader:after {\r\n  content: '';\r\n  position: absolute;\r\n  top: 0;\r\n}\r\n.loader:before {\r\n  left: -3.5em;\r\n  -webkit-animation-delay: -0.32s;\r\n  animation-delay: -0.32s;\r\n}\r\n.loader:after {\r\n  left: 3.5em;\r\n}\r\n@-webkit-keyframes load7 {\r\n  0%,\r\n  80%,\r\n  100% {\r\n    box-shadow: 0 2.5em 0 -1.3em;\r\n  }\r\n  40% {\r\n    box-shadow: 0 2.5em 0 0;\r\n  }\r\n}\r\n@keyframes load7 {\r\n  0%,\r\n  80%,\r\n  100% {\r\n    box-shadow: 0 2.5em 0 -1.3em;\r\n  }\r\n  40% {\r\n    box-shadow: 0 2.5em 0 0;\r\n  }\r\n}\r\n");

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n    <div class=\"loader\">Loading...</div>\r\n</div>\r\n");

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
    This function parses the html or any string, for Interpolator symbols and 
    evaluates the placeholders and replaces them within the string/html.
    @d: data object whose properties will be rendered in placeholders
    @l: the Locale Labels or Text to be rendered in the template
*/
/* harmony default export */ __webpack_exports__["default"] = ((htmlStr, d, l) => {
  if (!htmlStr) {
    return '';
  }

  if (typeof htmlStr != 'string') {
    console.error('View renderer ERROR: ', 'The first argument must be of type string');
  }

  let arrL1 = htmlStr.split('{{');
  let ResultArray = [];
  arrL1.map(str => {
    let arrL2 = str.split('}}');
    let staticStr;
    let expression;
    let expresionValue = '';

    if (arrL2.length === 1) {
      staticStr = arrL2[0];
    } else {
      staticStr = arrL2[1];
      expression = arrL2[0];

      try {
        expresionValue = eval(expression);
      } catch (err) {// console.error(err);
      }
    }

    ResultArray.push(expresionValue);
    ResultArray.push(staticStr);
  });
  return ResultArray.join('');
});

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locales", function() { return locales; });
const locales = {
  en: {
    'loader.title': 'loading...'
  },
  gb: {
    'loader.title': ''
  }
};

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (locale => {
  // return a function to that can be used as i(keyName) to get value.
  return key => {
    const val = locale[key];

    if (val) {
      return val;
    } else {
      return key;
    }
  };
});

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);
/* harmony import */ var _services_locale_provider_fn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);
/* harmony import */ var _services_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16);





class Navigation extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({
      mode: 'open'
    });
    document.addEventListener('appload', e => {
      this.render();
    });
    _services_router__WEBPACK_IMPORTED_MODULE_3__["default"].subscribe(route => {
      if (!route) return;
      const navLinks = this.shadowRoot.querySelectorAll('a');
      navLinks && navLinks.length && navLinks.forEach(a => {
        const href = a.getAttribute('href');

        if (route.path === href) {
          a.classList.add('active');
        } else {
          a.classList.remove('active');
        }
      });
    });
  }

  connectedCallback() {
    this.render();
  }

  disconnectedCallback() {//TODO:
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    this.render();
  }

  getLocaleFn() {
    const localeName = this.getAttribute('locale') || 'en';
    const locale = _locale__WEBPACK_IMPORTED_MODULE_1__["locales"][localeName] || {};
    return Object(_services_locale_provider_fn__WEBPACK_IMPORTED_MODULE_2__["default"])(locale);
  }

  handleLinkClick(e) {
    e.preventDefault();
    const href = e.target.getAttribute('href');
    _services_router__WEBPACK_IMPORTED_MODULE_3__["default"].navigate(href);
  }

  render() {
    const sRoot = this.shadowRoot;
    sRoot.innerHTML = '';
    const nav = document.createElement('nav');
    _services_router__WEBPACK_IMPORTED_MODULE_3__["default"].routes.map(r => {
      if (r.title) {
        const a = document.createElement('a');
        a.classList.add('link');
        a.setAttribute('href', r.path);
        a.innerHTML = r.title;
        a.addEventListener('click', this.handleLinkClick);

        if (r.path === _services_router__WEBPACK_IMPORTED_MODULE_3__["default"].activeRoute.path) {
          a.classList.add('active');
        }

        nav.appendChild(a);
      }
    });
    const styleEl = document.createElement('style');
    styleEl.textContent = _index_css__WEBPACK_IMPORTED_MODULE_0__["default"];
    sRoot.appendChild(styleEl);
    sRoot.appendChild(nav);
  }

}

customElements.define('wc-navigation', Navigation);

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("nav {\r\n    margin: 0px;\r\n    padding: 0px;\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: flex-start;\r\n    justify-content: flex-start;\r\n    background-color: var(--primary-light);\r\n}\r\na, a:visited, a:active {        \r\n    margin: 0px;\r\n    padding: 10px 15px;\r\n    margin-left: 2px;\r\n    margin-right: 2px;\r\n    width: auto;\r\n    text-decoration: none;\r\n    font-family: var(--font-family);\r\n    font-size: var(--font-size);\r\n    font-weight: bold;\r\n    color: var(--secondary-dark);\r\n}\r\na:hover, a.active {\r\n    background-color: var(--primary-lighter);\r\n}\r\n\r\na:first-child {        \r\n    margin-left: -15px;\r\n}\r\n");

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locales", function() { return locales; });
const locales = {
  en: {},
  gb: {}
};

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const viewElementId = 'root';
const DEFAULT_PATH = '/home';

class Router {
  constructor() {
    this._activeRoute = {};
    this._viewElmId = viewElementId;
    this._routes = [];
    this.subscribers = [];
    window.addEventListener('popstate', () => {
      const route = this.getRoute(window.location.pathname);
      this._activeRoute = route;
      this.renderView(route.template);
      this.notifySubscribers();
    });
  }

  get activeRoute() {
    return this._activeRoute;
  }

  get viewTargetElementId() {
    return this._viewElmId;
  }

  set viewTargetElementId(selectorId) {
    this._viewElmId = selectorId || viewElementId;
  }

  get routes() {
    return this._routes;
  }

  set routes(rts) {
    this._routes = rts;
  }

  static getInstance() {
    if (!Router.instance) {
      Router.instance = new Router();
    }

    return Router.instance;
  }

  getRoute(pathName) {
    return this._routes.find(p => p.path === pathName);
  }

  subscribe(cb) {
    typeof cb === 'function' && this.subscribers.push(cb);
  }

  notifySubscribers(route) {
    this.subscribers.map(cb => cb(route));
  }

  navigate(path, options, cb) {
    const op = options || {};
    let route = this.getRoute(path);

    if (!route) {
      route = this.getRoute(DEFAULT_PATH);
      path = DEFAULT_PATH;
    }

    const pathName = `${path}`;
    this._activeRoute = route; //render the template

    this.renderView(route.template); //push to history

    window.history.pushState(op.data, document.title, pathName); //notify the subscribers

    this.notifySubscribers(route);
  }

  renderView(html) {
    const viewElement = document.getElementById(this.viewTargetElementId);

    if (!viewElement) {
      return;
    }

    viewElement.innerHTML = html;
  }

  unsubscribe(cb) {
    subscriberIndex = this.subscribers.indexOf(cb);

    if (subscriberIndex >= 0) {
      this.subscribers.splice(subscriberIndex, 1);
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Router.getInstance());

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
/* harmony import */ var _models_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20);
/* harmony import */ var _services_view_render_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10);
/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21);
/* harmony import */ var _services_locale_provider_fn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(12);
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(22);








class UserCard extends HTMLElement {
  static get observedAttributes() {
    return ['userid'];
  }

  constructor() {
    super();
    this.attachShadow({
      mode: 'open'
    });
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

  disconnectedCallback() {//TODO:
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    if (attrName === 'userid' && oldVal != newVal && newVal) {
      this.fetchUser(newVal);
    }
  }

  fetchUser(id) {
    _services_loader_service__WEBPACK_IMPORTED_MODULE_6__["default"].start();
    fetch(`/api/users/${id}`).then(res => {
      if (res.ok) {
        return res.json();
      } else {
        const err = new Error(res.statusText);
        err.status = res.status;
        return Promise.reject(err);
      }
    }).then(user => {
      this.state.user = user;
      this.render();
      _services_loader_service__WEBPACK_IMPORTED_MODULE_6__["default"].stop();
    }).catch(err => {
      console.log("Error: ", err.message);
      this.state.user = null;
      this.state.error = err.message;
      this.render();
      _services_loader_service__WEBPACK_IMPORTED_MODULE_6__["default"].stop();
    });
  }

  getLocaleFn() {
    const localeName = this.getAttribute('locale') || 'en';
    const locale = _locale__WEBPACK_IMPORTED_MODULE_4__["locales"][localeName] || {};
    return Object(_services_locale_provider_fn__WEBPACK_IMPORTED_MODULE_5__["default"])(locale);
  }

  addEventHandlers() {
    const btns = this.shadowRoot.querySelectorAll('.controls .btn');
    btns && btns.forEach(btn => {
      btn.addEventListener('click', e => {
        e.preventDefault(); //dispatch event user-action

        const actionName = e.target.getAttribute('action-name');
        const clickEvent = new Event('user-action');
        clickEvent.data = {
          action: actionName,
          user: this.state.user
        };
        this.dispatchEvent(clickEvent);
      });
    });
  }

  render() {
    const sRoot = this.shadowRoot;
    sRoot.innerHTML = '';
    const html = Object(_services_view_render_service__WEBPACK_IMPORTED_MODULE_3__["default"])(_index_html__WEBPACK_IMPORTED_MODULE_1__["default"], this.state, this.getLocaleFn());
    const styleEl = document.createElement('style');
    styleEl.textContent = _index_css__WEBPACK_IMPORTED_MODULE_0__["default"];
    sRoot.appendChild(styleEl);
    sRoot.innerHTML += html;
    this.addEventHandlers();
  }

}

customElements.define('wc-user-card', UserCard);

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\r\n    width: auto;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    justify-content: flex-start;\r\n    border: 1px solid var(--primary-light);\r\n    padding: 0px 15px;\r\n    border-radius: 10px;\r\n}\r\n\r\n* {\r\n    box-sizing: border-box;\r\n}\r\n\r\nh1 {\r\n    margin-bottom: 0px;\r\n    width: 100%;\r\n    border-bottom: 5px solid var(--primary-light);\r\n    font-size: 22px;\r\n}\r\n.email {\r\n    font-size: 18px;\r\n    color: var(--primary);\r\n}\r\n\r\n.name h3, .email h3 {\r\n    margin-bottom: 0px;\r\n}\r\n\r\n.name span, .email span {\r\n    color: var(--primary);\r\n}\r\n\r\n.hidden {\r\n    display: none!important;\r\n}\r\n.groups {\r\n    width: 100%;\r\n}\r\n.info {\r\n    width: 100%;\r\n}\r\n.info-container {\r\n    width: 100%;\r\n}\r\n.controls {\r\n    display: block;\r\n    text-align: center;\r\n    width: 100%;\r\n}\r\na.btn, a.btn:active, a.btn:visited {\r\n    display: inline-block;\r\n    margin: 0px;\r\n    margin-bottom: 2px;\r\n    padding: 10px 19px;\r\n    text-decoration: none;\r\n    background: var(--primary-light);\r\n    transition: 0.4s all;\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n}\r\n.btn:hover {\r\n    background: var(--secondary-light);\r\n}\r\n\r\n@media only screen and (min-width: 768px) {\r\n    .info-container {\r\n        flex-direction: row;\r\n        display: flex;\r\n    }\r\n    .groups {\r\n        padding-left: 15px;\r\n    }\r\n    .info, .groups {\r\n        width: 50%;\r\n    }\r\n    a.btn, a.btn:active, a.btn:visited {\r\n        width: auto;\r\n        margin-left: 10px;\r\n        font-size: 16px;\r\n        padding-left: 15px;\r\n        padding-right: 15px;\r\n    }\r\n}");

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n    <h1>{{l('usercard.title')}}</h1>\r\n    <section class=\"controls {{!d.user || !d.user.id ? 'hidden': ''}}\">\r\n        <a action-name=\"delete\" class=\"btn\" id=\"delete-btn\" href=\"#\">{{l('usercard.delete')}}</a>\r\n        <a action-name=\"edit\" class=\"btn\" id=\"edit-btn\" href=\"#\">{{l('usercard.edit')}}</a>\r\n        <a action-name=\"add\" class=\"btn\" id=\"add-btn\" href=\"#\">{{l('usercard.add')}}</a>\r\n    </section>\r\n    <div class=\"info-container {{!d.user || !d.user.id ? 'hidden': ''}}\">\r\n        <div class=\"info\">\r\n            <div class=\"name\">\r\n                <h3>{{l('usercard.label.id')}}</h3>\r\n                <span>{{d.user.id}}</span>\r\n                <h3>{{l('usercard.label.firstname')}}</h3>\r\n                <span>{{d.user.firstName}}</span>\r\n                <h3>{{l('usercard.label.lastname')}}</h3>\r\n                <span>{{d.user.lastName}}</span>\r\n            </div>\r\n            <div class=\"email\">\r\n                <h3>{{l('usercard.label.email')}}</h3>\r\n                <span>{{d.user.email.toLowerCase()}}</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"groups\">\r\n            <h3>{{l('usercard.label.groups')}}</h3>\r\n            <wc-group-list disable-search=\"true\" userid=\"{{d.user.id}}\"></wc-group-list>\r\n        </div>\r\n    </div>\r\n    <wc-error-box hide=\"{{!d.user || !d.user.id ?false:true}}\" message=\"{{d.error}}\"></wc-error-box>\r\n</div>\r\n");

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Group", function() { return Group; });
class Group {
  constructor(id, name, description) {
    this.id = id || '', this.name = name || '';
    this.description = description || '';
  }

}

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locales", function() { return locales; });
const locales = {
  en: {
    'usercard.title': 'User Information',
    'usercard.label.id': 'User ID',
    'usercard.label.firstname': 'First Name',
    'usercard.label.lastname': 'Last Name',
    'usercard.label.email': 'Email Address',
    'usercard.label.groups': 'You are member of groups',
    'usercard.delete': 'Delete User',
    'usercard.edit': 'Edit User',
    'usercard.add': 'Add new User'
  },
  gb: {
    'usercard.title': ''
  }
};

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
    This Service is, which any component can subscribe, and it lets 
    know the current status of something is loading, and any loader can be shown.
    It quees any coming loading requests, and notifies the subscribers when no Loading requests are pending.
*/
class LoaderService {
  constructor() {
    this.activeLoadingRequests = 0;
    this.subscribers = [];
  }

  static getInstance() {
    if (!LoaderService.instance) {
      LoaderService.instance = new LoaderService();
    }

    return LoaderService.instance;
  }

  subscribe(cb) {
    typeof cb === 'function' && this.subscribers.push(cb);
  }

  notifySubscribers(status) {
    this.subscribers.map(cb => cb(status));
  }

  unsubscribe(cb) {
    subscriberIndex = this.subscribers.indexOf(cb);

    if (subscriberIndex >= 0) {
      this.subscribers.splice(subscriberIndex, 1);
    }
  }

  start() {
    this.activeLoadingRequests++;
    this.notifySubscribers(true);
  }

  stop() {
    this.activeLoadingRequests--;

    if (this.activeLoadingRequests === 0) {
      this.notifySubscribers(false);
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (LoaderService.getInstance());

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25);
/* harmony import */ var _services_view_render_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26);
/* harmony import */ var _services_locale_provider_fn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12);
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(22);







class GroupCard extends HTMLElement {
  static get observedAttributes() {
    return ['groupid'];
  }

  constructor() {
    super();
    this.attachShadow({
      mode: 'open'
    });
    this.state = {
      group: null,
      users: null,
      error: 'No Group Selected or No data available.'
    };
  }

  connectedCallback() {
    const id = this.getAttribute('groupid') || '';
    this.fetchGroup(id);
  }

  disconnectedCallback() {//TODO:
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    if (attrName === 'groupid' && oldVal != newVal && newVal) {
      this.fetchGroup(newVal);
    }
  }

  fetchGroup(id) {
    _services_loader_service__WEBPACK_IMPORTED_MODULE_5__["default"].start();
    fetch(`/api/groups/${id}`).then(res => {
      if (res.ok) {
        return res.json();
      } else {
        const err = new Error(res.statusText);
        err.status = res.status;
        return Promise.reject(err);
      }
    }).then(group => {
      this.state.group = group;
      this.render();
      _services_loader_service__WEBPACK_IMPORTED_MODULE_5__["default"].stop();
    }).catch(err => {
      console.log("Error: ", err.message);
      this.state.group = null;
      this.state.error = err.message;
      this.render();
      _services_loader_service__WEBPACK_IMPORTED_MODULE_5__["default"].stop();
    });
  }

  getLocaleFn() {
    const localeName = this.getAttribute('locale') || 'en';
    const locale = _locale__WEBPACK_IMPORTED_MODULE_3__["locales"][localeName] || {};
    return Object(_services_locale_provider_fn__WEBPACK_IMPORTED_MODULE_4__["default"])(locale);
  }

  addEventHandlers() {
    const btns = this.shadowRoot.querySelectorAll('.controls .btn');
    btns && btns.forEach(btn => {
      btn.addEventListener('click', e => {
        e.preventDefault(); //dispatch event user-action

        const actionName = e.target.getAttribute('action-name');
        const clickEvent = new Event('group-action');
        clickEvent.data = {
          action: actionName,
          user: this.state.user
        };
        this.dispatchEvent(clickEvent);
      });
    });
  }

  render() {
    const sRoot = this.shadowRoot;
    sRoot.innerHTML = '';
    const html = Object(_services_view_render_service__WEBPACK_IMPORTED_MODULE_2__["default"])(_index_html__WEBPACK_IMPORTED_MODULE_1__["default"], this.state, this.getLocaleFn());
    const styleEl = document.createElement('style');
    styleEl.textContent = _index_css__WEBPACK_IMPORTED_MODULE_0__["default"];
    sRoot.appendChild(styleEl);
    sRoot.innerHTML += html;
    this.addEventHandlers();
  }

}

customElements.define('wc-group-card', GroupCard);

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\r\n    width: auto;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    justify-content: flex-start;\r\n    border: 1px solid var(--primary-light);\r\n    padding: 0px 15px;\r\n    border-radius: 10px;\r\n    padding-bottom: 15px;\r\n}\r\n\r\n* {\r\n    box-sizing: border-box;\r\n}\r\n\r\nh1 {\r\n    margin-bottom: 0px;\r\n    width: 100%;\r\n    border-bottom: 5px solid var(--primary-light);\r\n    font-size: 22px;\r\n}\r\n.description {\r\n    font-size: 18px;\r\n    color: var(--primary);\r\n}\r\n\r\n.name h3, .description h3 {\r\n    margin-bottom: 0px;\r\n}\r\n\r\n.name span, .description span {\r\n    color: var(--primary);\r\n}\r\n\r\n.hidden {\r\n    display: none!important;\r\n}\r\n.users {\r\n    width: 100%;\r\n}\r\n.info {\r\n    width: 100%;\r\n}\r\n.info-container {\r\n    width: 100%;\r\n}\r\n.controls {\r\n    display: block;\r\n    text-align: center;\r\n    width: 100%;\r\n}\r\na.btn, a.btn:active, a.btn:visited {\r\n    display: inline-block;\r\n    margin: 0px;\r\n    margin-bottom: 2px;\r\n    padding: 10px 19px;\r\n    text-decoration: none;\r\n    background: var(--primary-light);\r\n    transition: 0.4s all;\r\n    font-size: 14px;\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n}\r\n.btn:hover {\r\n    background: var(--secondary-light);\r\n}\r\n\r\n@media only screen and (min-width: 768px) {\r\n    .info-container {\r\n        flex-direction: row;\r\n        display: flex;\r\n    }\r\n    .users {\r\n        padding-left: 15px;\r\n    }\r\n    .info, .users {\r\n        width: 50%;\r\n    }\r\n    a.btn, a.btn:active, a.btn:visited {\r\n        width: auto;\r\n        margin-left: 10px;\r\n        font-size: 16px;\r\n        padding-left: 15px;\r\n        padding-right: 15px;\r\n    }\r\n}");

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n    <h1>{{l('groupcard.title')}}</h1>\r\n    <section class=\"controls {{!d.group || !d.group.id ? 'hidden': ''}}\">\r\n        <a action-name=\"delete\" class=\"btn\" id=\"delete-btn\" href=\"#\">{{l('groupcard.delete')}}</a>\r\n        <a action-name=\"edit\" class=\"btn\" id=\"edit-btn\" href=\"#\">{{l('groupcard.edit')}}</a>\r\n        <a action-name=\"add\" class=\"btn\" id=\"add-btn\" href=\"#\">{{l('groupcard.add')}}</a>\r\n    </section>\r\n    <div class=\"info-container {{!d.group || !d.group.id ? 'hidden': ''}}\">\r\n        <div class=\"info\">\r\n            <div class=\"name\">\r\n                <h3>{{l('groupcard.label.id')}}</h3>\r\n                <span>{{d.group.id}}</span>\r\n                <h3>{{l('groupcard.label.name')}}</h3>\r\n                <span>{{d.group.name}}</span>\r\n            </div>\r\n            <div class=\"description\">\r\n                <h3>{{l('groupcard.label.description')}}</h3>\r\n                <span>{{d.group.description}}</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"users\">\r\n            <h3>{{l('groupcard.label.users')}}</h3>\r\n            <wc-user-list groupid=\"{{d.group.id}}\"></wc-user-list>\r\n        </div>\r\n    </div>\r\n    <wc-error-box hide=\"{{!d.group || !d.group.id ?false:true}}\" message=\"{{d.error}}\"></wc-error-box>\r\n</div>\r\n");

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locales", function() { return locales; });
const locales = {
  en: {
    'groupcard.title': 'Group Information',
    'groupcard.label.id': 'Group ID',
    'groupcard.label.name': 'Group Name',
    'groupcard.label.description': 'Group Description',
    'groupcard.label.users': 'Group Members',
    'groupcard.delete': 'Delete Group',
    'groupcard.edit': 'Edit Group',
    'groupcard.add': 'Add new Group'
  },
  gb: {
    'groupcard.title': ''
  }
};

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29);
/* harmony import */ var _services_view_render_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30);
/* harmony import */ var _services_locale_provider_fn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12);






class ErrorBox extends HTMLElement {
  static get observedAttributes() {
    return ['hide', 'message', 'title'];
  }

  constructor() {
    super();
    this.attachShadow({
      mode: 'open'
    });
    this.state = {
      hide: false,
      title: '',
      message: ''
    };
  }

  connectedCallback() {
    this.render();
  }

  disconnectedCallback() {//TODO:
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    this.render();
  }

  getLocaleFn() {
    const localeName = this.getAttribute('locale') || 'en';
    const locale = _locale__WEBPACK_IMPORTED_MODULE_3__["locales"][localeName] || {};
    return Object(_services_locale_provider_fn__WEBPACK_IMPORTED_MODULE_4__["default"])(locale);
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

    const html = Object(_services_view_render_service__WEBPACK_IMPORTED_MODULE_2__["default"])(_index_html__WEBPACK_IMPORTED_MODULE_1__["default"], this.state, this.getLocaleFn());
    const styleEl = document.createElement('style');
    styleEl.textContent = _index_css__WEBPACK_IMPORTED_MODULE_0__["default"];
    sRoot.appendChild(styleEl);
    sRoot.innerHTML += html;
  }

}

customElements.define('wc-error-box', ErrorBox);

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    justify-content: flex-start;\r\n    padding: 15px;\r\n}\r\n.title {\r\n    font-family: var(--font-family);\r\n    font-size: var(--font-size);\r\n    font-weight: bold;\r\n    color: var(--secondary-dark);\r\n    padding: 5px 0px;\r\n    margin: 0px;\r\n}\r\n.message {\r\n    font-family: var(--font-family);\r\n    font-size: var(--font-size);\r\n    color: var(--secondary);\r\n    padding: 5px 0px;\r\n    margin: 0px;\r\n}\r\n");

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n    <h1 class=\"title {{!d.title ? 'hidden': ''}}\">{{d.title}}</h1>\r\n    <p class=\"message\">{{d.message}}</p>\r\n</div>\r\n");

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locales", function() { return locales; });
const locales = {
  en: {},
  gb: {}
};

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33);
/* harmony import */ var _list_item_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);
/* harmony import */ var _services_view_render_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10);
/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(35);
/* harmony import */ var _services_locale_provider_fn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(12);
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(22);








class UserList extends HTMLElement {
  static get observedAttributes() {
    return ['groupid'];
  }

  constructor() {
    super();
    this.attachShadow({
      mode: 'open'
    });
    this.state = {
      users: []
    };
  }

  connectedCallback() {
    this.fetchUsers();
  }

  disconnectedCallback() {//TODO:
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    if (attrName === 'groupid' && oldVal != newVal && newVal) {
      const groupid = newVal;
      this.fetchUsers(groupid);
    }
  }

  fetchUsers(id) {
    _services_loader_service__WEBPACK_IMPORTED_MODULE_6__["default"].start();
    let url = '/api/users';

    if (id) {
      url = `/api/usersbygroup/${id}`;
    }

    fetch(url).then(res => res.json()).then(users => {
      this.state.users = users;
      this.render();
      _services_loader_service__WEBPACK_IMPORTED_MODULE_6__["default"].stop();
    }).catch(err => {
      this.state.users = [];
      this.render();
      _services_loader_service__WEBPACK_IMPORTED_MODULE_6__["default"].stop();
    });
  }

  getLocaleFn() {
    const localeName = this.getAttribute('locale') || 'en';
    const locale = _locale__WEBPACK_IMPORTED_MODULE_4__["locales"][localeName] || {};
    return Object(_services_locale_provider_fn__WEBPACK_IMPORTED_MODULE_5__["default"])(locale);
  }

  addEventHandlers(liEl) {
    liEl.addEventListener('click', e => {
      const li = e.currentTarget; //mark active li

      const allLis = this.shadowRoot.querySelectorAll('li');
      allLis.forEach(l => l.classList.remove('active'));
      li.classList.add('active'); //dispatch event selected

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
          if (u.firstName && u.firstName.toLowerCase().includes(searchTerm) || u.lastName && u.lastName.toLowerCase().includes(searchTerm) || u.email && u.email.toLowerCase().includes(searchTerm)) {
            return u;
          }
        });
        this.renderList(filteredUsers);
      }, 100);
    });
  }

  renderList(users) {
    const list = this.shadowRoot.querySelector('ul.list');
    list.innerHTML = '';
    users.map((u, i) => {
      const li = document.createElement('li');
      li.setAttribute('id', u.id);
      li.innerHTML = Object(_services_view_render_service__WEBPACK_IMPORTED_MODULE_3__["default"])(_list_item_html__WEBPACK_IMPORTED_MODULE_2__["default"], u, this.getLocaleFn());
      this.addEventHandlers(li);
      list.appendChild(li);
    });
  }

  render() {
    const sRoot = this.shadowRoot;
    sRoot.innerHTML = '';
    const html = Object(_services_view_render_service__WEBPACK_IMPORTED_MODULE_3__["default"])(_index_html__WEBPACK_IMPORTED_MODULE_1__["default"], this.state, this.getLocaleFn());
    const styleEl = document.createElement('style');
    styleEl.textContent = _index_css__WEBPACK_IMPORTED_MODULE_0__["default"];
    sRoot.appendChild(styleEl);
    sRoot.innerHTML += html;
    this.addSearchHandlers();
    this.renderList(this.state.users);
  }

}

customElements.define('wc-user-list', UserList);

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\r\n    width: auto;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    justify-content: flex-start;\r\n}\r\n* {\r\n    box-sizing: border-box;\r\n}\r\n\r\n.search-container{\r\n    width: 100%;\r\n    position: relative;\r\n}\r\n.search {\r\n    position: relative;\r\n    width: 100%;\r\n    border: 1px solid var(--primary-lighter);\r\n    border-radius: 5px;\r\n    padding: 10px 30px 10px 10px;\r\n    font-size: var(--font-size);\r\n}\r\n.icon {\r\n    display: block;\r\n    position: absolute;\r\n    right: 0px;\r\n    top: 0px;\r\n    width: 65px;\r\n    height: 40px;\r\n    line-height: 37px;\r\n    background: var(--primary-dark);\r\n    text-align: center;\r\n    color: var(--primary-lighter);\r\n    border-top-right-radius: 5px;\r\n    border-bottom-right-radius: 5px;\r\n}\r\n\r\nul {\r\n    list-style: none;\r\n    width: 100%;\r\n    max-height: 188px;\r\n    padding: 0px;\r\n    overflow-y: scroll;\r\n    overflow-x: hidden;\r\n    border: 1px solid var(--primary-lighter);\r\n}\r\nli {\r\n    width: 100%;\r\n    margin: 5px 0px;\r\n    padding: 5px;\r\n    cursor: pointer;\r\n}\r\nli:hover {\r\n    background-color: var(--primary-lighter);\r\n}\r\n\r\nli.active {\r\n    background-color: var(--secondary-light);\r\n}\r\n.email {\r\n    color: var(--primary);\r\n}\r\n\r\n@media only screen and (min-width: 768px) {\r\n    ul {\r\n        max-height: 500px;\r\n    }\r\n}");

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n    <div class=\"search-container\">\r\n        <input class=\"search\" type=\"search\" placeholder=\"{{l('userlist.search.placeholder')}}\"/>\r\n        <span class=\"icon\">Search</span>\r\n    </div>\r\n    <ul class=\"list\">\r\n        \r\n    </ul>\r\n</div>\r\n");

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"name\">\r\n    {{d.lastName}}, {{d.firstName}}\r\n</div>\r\n<div class=\"email\">\r\n    {{d.email.toLowerCase()}}\r\n</div>");

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locales", function() { return locales; });
const locales = {
  en: {
    'userlist.search.placeholder': 'Search User...'
  },
  gb: {
    'userlist.search.placeholder': ''
  }
};

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38);
/* harmony import */ var _list_item_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39);
/* harmony import */ var _services_view_render_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10);
/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(40);
/* harmony import */ var _services_locale_provider_fn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(12);
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(22);








class GroupList extends HTMLElement {
  static get observedAttributes() {
    return ['userid', 'disable-search'];
  }

  constructor() {
    super();
    this.attachShadow({
      mode: 'open'
    });
    this.state = {
      users: []
    };
  }

  connectedCallback() {
    this.fetchGroups();
  }

  disconnectedCallback() {//TODO:
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
    _services_loader_service__WEBPACK_IMPORTED_MODULE_6__["default"].start();
    let url = '/api/groups';

    if (id) {
      url = `/api/groupsbyuser/${id}`;
    }

    fetch(url).then(res => res.json()).then(groups => {
      this.state.groups = groups;
      this.render();
      _services_loader_service__WEBPACK_IMPORTED_MODULE_6__["default"].stop();
    }).catch(err => {
      this.state.groups = [];
      this.render();
      _services_loader_service__WEBPACK_IMPORTED_MODULE_6__["default"].stop();
    });
  }

  getLocaleFn() {
    const localeName = this.getAttribute('locale') || 'en';
    const locale = _locale__WEBPACK_IMPORTED_MODULE_4__["locales"][localeName] || {};
    return Object(_services_locale_provider_fn__WEBPACK_IMPORTED_MODULE_5__["default"])(locale);
  }

  addEventHandlers(liEl) {
    liEl.addEventListener('click', e => {
      const li = e.currentTarget; //mark active li

      const allLis = this.shadowRoot.querySelectorAll('li');
      allLis.forEach(l => l.classList.remove('active'));
      li.classList.add('active'); //dispatch event selected

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
      searchTerm = searchTerm.toLowerCase(); //adds little delay

      if (this.inputTimeout) {
        clearTimeout(this.inputTimeout);
      }

      this.inputTimeout = setTimeout(() => {
        const filteredGroups = this.state.groups.filter(g => {
          if (g.id && g.id.toLowerCase().includes(searchTerm) || g.name && g.name.toLowerCase().includes(searchTerm)) {
            return g;
          }
        });
        this.renderList(filteredGroups);
      }, 100);
    });
  }

  renderList(groups) {
    const list = this.shadowRoot.querySelector('ul.list');
    list.innerHTML = '';
    groups.map((u, i) => {
      const li = document.createElement('li');
      li.setAttribute('id', u.id);
      li.innerHTML = Object(_services_view_render_service__WEBPACK_IMPORTED_MODULE_3__["default"])(_list_item_html__WEBPACK_IMPORTED_MODULE_2__["default"], u, this.getLocaleFn());
      this.addEventHandlers(li);
      list.appendChild(li);
    });
  }

  render() {
    const sRoot = this.shadowRoot;
    sRoot.innerHTML = '';
    const html = Object(_services_view_render_service__WEBPACK_IMPORTED_MODULE_3__["default"])(_index_html__WEBPACK_IMPORTED_MODULE_1__["default"], this.state, this.getLocaleFn());
    const styleEl = document.createElement('style');
    styleEl.textContent = _index_css__WEBPACK_IMPORTED_MODULE_0__["default"];
    sRoot.appendChild(styleEl);
    sRoot.innerHTML += html;
    this.addSearchHandlers();
    this.renderList(this.state.groups);
    const readMode = this.getAttribute('disable-search');
    this.setReadOnlyMode(readMode);
  }

}

customElements.define('wc-group-list', GroupList);

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\r\n    width: auto;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    justify-content: flex-start;\r\n}\r\n* {\r\n    box-sizing: border-box;\r\n}\r\n.container * {\r\n    box-sizing: border-box;\r\n}\r\n.search-container{\r\n    width: 100%;\r\n    position: relative;\r\n}\r\n.search {\r\n    position: relative;\r\n    width: 100%;\r\n    border: 1px solid var(--primary-lighter);\r\n    border-radius: 5px;\r\n    padding: 10px 30px 10px 10px;\r\n    font-size: var(--font-size);\r\n}\r\n.icon {\r\n    display: block;\r\n    position: absolute;\r\n    right: 0px;\r\n    top: 0px;\r\n    width: 65px;\r\n    height: 40px;\r\n    line-height: 37px;\r\n    background: var(--primary-dark);\r\n    text-align: center;\r\n    color: var(--primary-lighter);\r\n    border-top-right-radius: 5px;\r\n    border-bottom-right-radius: 5px;\r\n}\r\n\r\nul {\r\n    list-style: none;\r\n    width: 100%;\r\n    max-height: 188px;\r\n    padding: 0px;\r\n    overflow-y: scroll;\r\n    overflow-x: hidden;\r\n    border: 1px solid var(--primary-lighter);\r\n}\r\nli {\r\n    width: 100%;\r\n    margin: 5px 0px;\r\n    padding: 5px;\r\n    cursor: pointer;\r\n}\r\nli:hover {\r\n    background-color: var(--primary-lighter);\r\n}\r\nli.active {\r\n    background-color: var(--secondary-light);\r\n}\r\n.name {\r\n    font-weight: bold;\r\n}\r\n.description {\r\n    color: var(--secondary);\r\n}\r\n\r\n.readonly .search-container {\r\n    display: none;\r\n}\r\n\r\n.readonly ul {\r\n    overflow-y: auto;\r\n    border: none;\r\n    margin-top: -20px;\r\n    max-height: none;\r\n}\r\n\r\n.readonly li {\r\n    border: 1px solid var(--primary-lighter);\r\n    border-radius: 5px;\r\n    margin-bottom: 15px;\r\n    padding: 10px 15px;\r\n    background-color: var(--primary-lighter);\r\n}\r\n.groups h3 {\r\n    margin-bottom: 0px;\r\n}\r\n\r\n@media only screen and (min-width: 768px) {\r\n    ul {\r\n        max-height: 500px;\r\n    }\r\n        \r\n    .readonly ul {        \r\n        max-height: none;\r\n    }\r\n\r\n}");

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n    <div class=\"search-container\">\r\n        <input class=\"search\" type=\"search\" placeholder=\"{{l('grouplist.search.placeholder')}}\"/>\r\n        <span class=\"icon\">Search</span>\r\n    </div>\r\n    <ul class=\"list\">\r\n        \r\n    </ul>\r\n</div>\r\n");

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"name\">\r\n    {{d.name}}\r\n</div>\r\n<div class=\"description\">\r\n    {{d.description}}\r\n</div>");

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locales", function() { return locales; });
const locales = {
  en: {
    'grouplist.search.placeholder': 'Search Group...'
  },
  gb: {
    'grouplist.search.placeholder': ''
  }
};

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43);
/* harmony import */ var _services_view_render_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44);
/* harmony import */ var _services_locale_provider_fn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12);
/* harmony import */ var _services_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16);







class UserDashboard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({
      mode: 'open'
    });
    this.state = {
      selectedUser: null
    };
  }

  connectedCallback() {
    this.render();
  }

  disconnectedCallback() {//TODO:
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    this.render();
  }

  getLocaleFn() {
    const localeName = this.getAttribute('locale') || 'en';
    const locale = _locale__WEBPACK_IMPORTED_MODULE_3__["locales"][localeName] || {};
    return Object(_services_locale_provider_fn__WEBPACK_IMPORTED_MODULE_4__["default"])(locale);
  }

  createEventHandlers() {
    const userList = this.shadowRoot.querySelector('wc-user-list');
    userList.addEventListener('selected', e => {
      this.state.selectedUser = e.data;
      const userCard = this.shadowRoot.querySelector('wc-user-card');
      userCard.setAttribute('userid', this.state.selectedUser && this.state.selectedUser.id || '');
    });
    const userCard = this.shadowRoot.querySelector('wc-user-card');
    userCard.addEventListener('user-action', e => {
      _services_router__WEBPACK_IMPORTED_MODULE_5__["default"].navigate('/manageuser');
    });
  }

  render() {
    const sRoot = this.shadowRoot;
    const html = Object(_services_view_render_service__WEBPACK_IMPORTED_MODULE_2__["default"])(_index_html__WEBPACK_IMPORTED_MODULE_1__["default"], this.state, this.getLocaleFn());
    const styleEl = document.createElement('style');
    styleEl.textContent = _index_css__WEBPACK_IMPORTED_MODULE_0__["default"];
    sRoot.appendChild(styleEl);
    sRoot.innerHTML += html;
    this.createEventHandlers();
  }

}

customElements.define('wc-user-dashboard', UserDashboard);

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\r\n    width: auto;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    justify-content: flex-start;    \r\n}\r\n\r\n.top, .bottom {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    justify-content: flex-start;\r\n}\r\n\r\n.left {\r\n    width: 100%;\r\n}\r\n\r\n.right {\r\n    width: 100%;\r\n    padding: 15px;\r\n}\r\nh1 {\r\n    border-bottom: 10px solid var(--secondary-light);\r\n}\r\n.hidden {\r\n    display: none!important;\r\n}\r\n\r\n.top, .bottom, .left, .right {\r\n    /* border: 1px solid var(--primary-lighter); */\r\n}\r\n\r\n@media only screen and (min-width: 768px) {\r\n    .left {\r\n        width: 30%;\r\n    }\r\n    \r\n    .right {\r\n        width: 70%;\r\n    }\r\n    .bottom {\r\n        flex-direction: row;\r\n    }\r\n}");

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"container\">        \r\n    <section class=\"top\"> \r\n        <h1>{{l('userdashboard.title')}}</h1>\r\n    </section>\r\n    <section class=\"bottom\"> \r\n        <section class=\"left\">\r\n            <wc-user-list></wc-user-list>\r\n        </section>\r\n        <section class=\"right\">\r\n            <wc-user-card></wc-user-card>\r\n        </section>\r\n    </section>\r\n</section>\r\n");

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locales", function() { return locales; });
const locales = {
  en: {
    'userdashboard.title': 'User Dashboard'
  },
  gb: {
    'userdashboard.title': ''
  }
};

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47);
/* harmony import */ var _services_view_render_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48);
/* harmony import */ var _services_locale_provider_fn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12);
/* harmony import */ var _services_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16);







class GroupDashboard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({
      mode: 'open'
    });
    this.state = {
      selectedGroup: null
    };
  }

  connectedCallback() {
    this.render();
  }

  disconnectedCallback() {//TODO:
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    this.render();
  }

  getLocaleFn() {
    const localeName = this.getAttribute('locale') || 'en';
    const locale = _locale__WEBPACK_IMPORTED_MODULE_3__["locales"][localeName] || {};
    return Object(_services_locale_provider_fn__WEBPACK_IMPORTED_MODULE_4__["default"])(locale);
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
      _services_router__WEBPACK_IMPORTED_MODULE_5__["default"].navigate('/managegroup');
    });
  }

  render() {
    const sRoot = this.shadowRoot;
    const html = Object(_services_view_render_service__WEBPACK_IMPORTED_MODULE_2__["default"])(_index_html__WEBPACK_IMPORTED_MODULE_1__["default"], this.state, this.getLocaleFn());
    const styleEl = document.createElement('style');
    styleEl.textContent = _index_css__WEBPACK_IMPORTED_MODULE_0__["default"];
    sRoot.appendChild(styleEl);
    sRoot.innerHTML += html;
    this.createEventHandlers();
  }

}

customElements.define('wc-group-dashboard', GroupDashboard);

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\r\n    width: auto;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    justify-content: flex-start;    \r\n}\r\n\r\n.top, .bottom {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    justify-content: flex-start;\r\n}\r\n\r\n.left {\r\n    width: 100%;\r\n}\r\n\r\n.right {\r\n    width: 100%;\r\n    padding: 15px;\r\n}\r\nh1 {\r\n    border-bottom: 10px solid var(--secondary-light);\r\n}\r\n.hidden {\r\n    display: none!important;\r\n}\r\n\r\n.top, .bottom, .left, .right {\r\n    /* border: 1px solid var(--primary-lighter); */\r\n}\r\n\r\n@media only screen and (min-width: 768px) {\r\n    .left {\r\n        width: 30%;\r\n    }\r\n    \r\n    .right {\r\n        width: 70%;\r\n    }\r\n    .bottom {\r\n        flex-direction: row;\r\n    }\r\n}");

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"container\">        \r\n    <section class=\"top\"> \r\n        <h1>{{l('groupdashboard.title')}}</h1>\r\n    </section>\r\n    <section class=\"bottom\"> \r\n        <section class=\"left\">\r\n            <wc-group-list></wc-group-list>\r\n        </section>\r\n        <section class=\"right\">\r\n            <wc-group-card groupid=\"\"></wc-group-card>\r\n        </section>\r\n    </section>\r\n</section>\r\n");

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locales", function() { return locales; });
const locales = {
  en: {
    'groupdashboard.title': 'Group Dashboard'
  },
  gb: {
    'groupdashboard.title': ''
  }
};

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(51);
/* harmony import */ var _services_view_render_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52);
/* harmony import */ var _services_locale_provider_fn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12);






class GroupForm extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({
      mode: 'open'
    });
    this.state = {
      group: null,
      users: null
    };
  }

  connectedCallback() {
    this.render();
  }

  disconnectedCallback() {//TODO:
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    this.render();
  }

  getLocaleFn() {
    const localeName = this.getAttribute('locale') || 'en';
    const locale = _locale__WEBPACK_IMPORTED_MODULE_3__["locales"][localeName] || {};
    return Object(_services_locale_provider_fn__WEBPACK_IMPORTED_MODULE_4__["default"])(locale);
  }

  render() {
    const sRoot = this.shadowRoot;
    const html = Object(_services_view_render_service__WEBPACK_IMPORTED_MODULE_2__["default"])(_index_html__WEBPACK_IMPORTED_MODULE_1__["default"], this.state, this.getLocaleFn());
    const styleEl = document.createElement('style');
    styleEl.textContent = _index_css__WEBPACK_IMPORTED_MODULE_0__["default"];
    sRoot.appendChild(styleEl);
    sRoot.innerHTML += html;
  }

}

customElements.define('wc-group-form', GroupForm);

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\r\n    box-sizing: border-box;\r\n}\r\n.container {\r\n    width: auto;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    background-color: var(--secondary-lighter);\r\n    padding-bottom: 15px;\r\n}\r\n\r\n.form-container {\r\n    width: 100%;\r\n    max-width: 768px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    justify-content: flex-start;\r\n    background-color: var(--primary-lighter);\r\n    border: 2px solid var(--primary-light);\r\n    padding: 15px;\r\n    border-radius: 10px;\r\n}\r\nform {\r\n    width: 100%;\r\n}\r\n.field {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    justify-content: flex-start;\r\n}\r\nlabel {\r\n    width: 100%;\r\n    padding: 10px 0px;\r\n    font-size: var(--font-size);\r\n    font-weight: bold;\r\n    color: var(--primary-dark);\r\n}\r\ninput, textarea {\r\n    width: 100%;\r\n    border: 1px solid var(--primary-light);\r\n    padding: 10px;\r\n    font-size: var(--font-size);\r\n}\r\n\r\nbutton {\r\n    margin-top: 30px;\r\n    background-color: var(--primary-dark);\r\n    color: var(--primary-lighter);\r\n    border: 1px solid var(--primary-light);\r\n    padding: 10px 15px;\r\n    font-size: var(--font-size);\r\n    cursor: pointer;\r\n}\r\nbutton:hover {\r\n    background-color: var(--primary);\r\n}\r\n\r\nhr {\r\n    margin-top: 30px;\r\n}");

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n        <h1>{{l('groupform.title')}}</h1>\r\n        <p>This feature is IN-PROGRESS</p>\r\n        <section class=\"form-container\">\r\n            <form method=\"POST\">\r\n                <div class=\"field\">\r\n                    <label>{{l('groupform.label.id')}}: </label>\r\n                    <span class=\"{{d.group && d.group.id ? '':'hidden'}}\"> {{d.group.id}}</span>\r\n                    <span class=\"{{d.group && d.group.id ? 'hidden':''}}\"> {{l('groupform.label.newgroup')}}</span>\r\n                </div>\r\n                <div class=\"field\">\r\n                    <label>{{l('groupform.label.name')}}</label>\r\n                    <input required maxlength=\"50\" type=\"text\" name=\"name\" value=\"{{d.group.name}}\"/>\r\n                </div>\r\n                <div class=\"field\">\r\n                    <label>{{l('groupform.label.description')}}</label>\r\n                    <textarea maxlength=\"500\" name=\"description\" value=\"{{d.group.description}}\"></textarea>\r\n                </div>\r\n                <div class=\"field\">\r\n                    <label>{{l('groupform.label.users')}}</label>\r\n                    <button type=\"button\">{{l('groupform.addusers')}}</button>\r\n                </div>\r\n            <hr/>\r\n                <button type=\"submit\">{{l('groupform.submit')}}</button>\r\n            </form>\r\n        </section>\r\n    </div>\r\n");

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locales", function() { return locales; });
const locales = {
  en: {
    'groupform.title': 'User Group Form',
    'groupform.label.id': 'Group ID',
    'groupform.label.name': 'Group Name',
    'groupform.label.description': 'Group Description',
    'groupform.label.users': 'Add or remove Member users to/from this Group',
    'groupform.label.newgroup': 'NA (ID will be created, once you save the form for this new Group)',
    'groupform.delete': 'Delete Group',
    'groupform.edit': 'Edit Group',
    'groupform.add': 'Add new Group',
    'groupform.submit': 'Save Group',
    'groupform.addusers': 'Add Member Users'
  },
  gb: {
    'groupform.title': ''
  }
};

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(55);
/* harmony import */ var _services_view_render_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56);
/* harmony import */ var _services_locale_provider_fn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12);
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(22);







class UserForm extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({
      mode: 'open'
    });
    this.state = {
      user: null,
      groups: null
    };
  }

  connectedCallback() {
    const id = this.getAttribute('userid') || '';
    this.fetchUser(id);
  }

  disconnectedCallback() {//TODO:
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    if (attrName === 'userid' && oldVal != newVal && newVal) {
      this.fetchUser(newVal);
    }
  }

  fetchUser(id) {
    _services_loader_service__WEBPACK_IMPORTED_MODULE_5__["default"].start();
    fetch(`/api/users/${id}`).then(res => {
      if (res.ok) {
        return res.json();
      } else {
        const err = new Error(res.statusText);
        err.status = res.status;
        return Promise.reject(err);
      }
    }).then(user => {
      this.state.user = user;
      this.render();
      _services_loader_service__WEBPACK_IMPORTED_MODULE_5__["default"].stop();
    }).catch(err => {
      console.log("Error: ", err.message);
      this.state.user = null;
      this.state.error = err.message;
      this.render();
      _services_loader_service__WEBPACK_IMPORTED_MODULE_5__["default"].stop();
    });
  }

  getLocaleFn() {
    const localeName = this.getAttribute('locale') || 'en';
    const locale = _locale__WEBPACK_IMPORTED_MODULE_3__["locales"][localeName] || {};
    return Object(_services_locale_provider_fn__WEBPACK_IMPORTED_MODULE_4__["default"])(locale);
  }

  render() {
    const sRoot = this.shadowRoot;
    const html = Object(_services_view_render_service__WEBPACK_IMPORTED_MODULE_2__["default"])(_index_html__WEBPACK_IMPORTED_MODULE_1__["default"], this.state, this.getLocaleFn());
    const styleEl = document.createElement('style');
    styleEl.textContent = _index_css__WEBPACK_IMPORTED_MODULE_0__["default"];
    sRoot.appendChild(styleEl);
    sRoot.innerHTML += html;
    this.addEventListener('click', e => {
      e.stopPropagation();
    });
  }

}

customElements.define('wc-user-form', UserForm);

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\r\n    box-sizing: border-box;\r\n}\r\n.container {\r\n    width: auto;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    background-color: var(--secondary-lighter);\r\n    padding-bottom: 15px;\r\n}\r\n\r\n.form-container {\r\n    width: 100%;\r\n    max-width: 768px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    justify-content: flex-start;\r\n    background-color: var(--primary-lighter);\r\n    border: 2px solid var(--primary-light);\r\n    padding: 15px;\r\n    border-radius: 10px;\r\n}\r\nform {\r\n    width: 100%;\r\n}\r\n.field {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    justify-content: flex-start;\r\n}\r\nlabel {\r\n    width: 100%;\r\n    padding: 10px 0px;\r\n    font-size: var(--font-size);\r\n    font-weight: bold;\r\n    color: var(--primary-dark);\r\n}\r\ninput {\r\n    width: 100%;\r\n    border: 1px solid var(--primary-light);\r\n    padding: 10px;\r\n    font-size: var(--font-size);\r\n}\r\n\r\nbutton {\r\n    margin-top: 30px;\r\n    background-color: var(--primary-dark);\r\n    color: var(--primary-lighter);\r\n    border: 1px solid var(--primary-light);\r\n    padding: 10px 15px;\r\n    font-size: var(--font-size);\r\n    cursor: pointer;\r\n}\r\nbutton:hover {\r\n    background-color: var(--primary);\r\n}\r\nhr {\r\n    margin-top: 30px;\r\n}\r\n\r\n.hidden {\r\n    display: none!important;\r\n}\r\n.group-selection {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    justify-content: flex-start;\r\n    background-color: var(--primary-lighter);\r\n    border: 2px solid var(--primary-light);\r\n    padding: 15px;\r\n    border-radius: 10px;\r\n}\r\n\r\n.source, .target {\r\n    width: 100%;\r\n}\r\n.mid-controls {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n}\r\n.btn-remove {\r\n    margin-top: 0px;\r\n}\r\n\r\n.ic {\r\n    display: inline-block;\r\n    border: 1px solid transparent;\r\n    border-radius: 5px;\r\n    cursor: pointer;\r\n}\r\n.ic:hover {\r\n    border-color: var(--shadow);\r\n    /* background-color: var(--secondary-lighter); */\r\n}\r\n.ic:after {\r\n    content: \" \";\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    width: 30px;\r\n    height: 30px;\r\n    font-size: 20px;\r\n    font-style: normal;\r\n}\r\n.close.ic:after {\r\n    content: \"\\2716\";\r\n    color: var(--danger);\r\n}\r\n.edit.ic:after {\r\n    content: \"\\270E\";\r\n    transform: scaleX(-1);\r\n    color: var(--success);\r\n}\r\n.arrow-up.ic:after {\r\n    content: \"\\276F\";\r\n    transform: rotate(-90deg);\r\n    margin-left: -2px;\r\n    width: 32px;\r\n}\r\n.arrow-down.ic:after {\r\n    content: \"\\276F\";\r\n    transform: rotate(90deg);\r\n    margin-left: 2px;\r\n    width: 28px;\r\n}\r\n.arrow-left.ic:after {\r\n    content: \"\\276F\";\r\n    transform: scaleX(-1);\r\n    margin-bottom: 2px;\r\n    height: 28px;\r\n}\r\n.arrow-right.ic:after {\r\n    content: \"\\276F\";\r\n    margin-bottom: -2px;\r\n    height: 32px;\r\n}\r\n.add.ic:after {\r\n    content: \"\\271A\";\r\n    color: var(--success);\r\n}\r\n\r\n\r\n@media only screen and (min-width: 768px) {\r\n    .group-selection {\r\n        flex-direction: row;\r\n    }\r\n    .source, .target {\r\n        width: 40%;\r\n    }\r\n    .target {\r\n        margin-top: 50px;\r\n    }\r\n    .mid-controls {\r\n        width: 20%;\r\n        flex-direction: column;\r\n    }\r\n    .btn-remove {\r\n        margin-top: 15px;\r\n    }\r\n\r\n    .arrow-down.ic:after {\r\n        content: \"\\276F\";\r\n        margin-bottom: -2px;\r\n        height: 32px;\r\n        transform: rotate(180deg);\r\n    }\r\n    .arrow-up.ic:after {\r\n        content: \"\\276F\";\r\n        transform: scaleX(-1);\r\n        margin-bottom: 2px;\r\n        height: 28px;\r\n    }\r\n    .mid-controls {\r\n        margin-top: 46px;\r\n    }\r\n\r\n}");

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n    <!-- <h1>{{l('userform.title')}}</h1> -->\r\n    <p>This feature is IN-PROGRESS</p>\r\n    <section class=\"form-container\">\r\n        <form method=\"POST\">\r\n            <div class=\"field\">\r\n                <label>{{l('userform.label.id')}}: </label>\r\n                <span class=\"{{d.user && d.user.id ? '':'hidden'}}\"> {{d.user.id}}</span>\r\n                <span class=\"{{d.user && d.user.id ? 'hidden':''}}\"> {{l('userform.label.newuser')}}</span>\r\n            </div>\r\n            <div class=\"field\">\r\n                <label>{{l('userform.label.firstname')}}</label>\r\n                <input required maxlength=\"50\" type=\"text\" name=\"firstName\" value=\"{{d.user.firstName}}\"/>\r\n            </div>\r\n            <div class=\"field\">\r\n                <label>{{l('userform.label.lastname')}}</label>\r\n                <input required maxlength=\"50\" type=\"text\" name=\"lastName\" value=\"{{d.user.lastName}}\"/>\r\n            </div>\r\n            <div class=\"field\">\r\n                <label>{{l('userform.label.email')}}</label>\r\n                <input required maxlength=\"100\" type=\"email\" name=\"email\" value=\"{{d.user.email}}\"/>\r\n            </div>\r\n            <div class=\"field\">\r\n                <label>{{l('userform.label.groups')}}</label>\r\n                <div class=\"group-selection\">\r\n                    <wc-group-list class='source'></wc-group-list>\r\n                    <div class=\"mid-controls\">\r\n                        <a class=\"btn-add\" href=\"javascript:void(0)\" action=\"add\"><i class=\"ic arrow-down\"></i></a>\r\n                        <a class=\"btn-remove\" href=\"javascript:void(0)\" action=\"remove\"><i class=\"ic arrow-up\"></i></a>\r\n                    </div>\r\n                    <wc-group-list class='target' disable-search=\"true\" userid=\"{{d.user.id}}\"></wc-group-list>\r\n                </div>\r\n            </div>\r\n            <hr/>\r\n            <button type=\"submit\">{{l('userform.submit')}}</button>\r\n        </form>\r\n    </section>\r\n</div>\r\n");

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locales", function() { return locales; });
const locales = {
  en: {
    'userform.title': 'User Form',
    'userform.label.id': 'User ID',
    'userform.label.firstname': 'First Name',
    'userform.label.lastname': 'Last Name',
    'userform.label.email': 'Email Address',
    'userform.label.groups': 'Add or remove Groups for this User',
    'userform.label.newuser': 'NA (ID will be created, once you save the form for this new user)',
    'userform.delete': 'Delete User',
    'userform.edit': 'Edit User',
    'userform.add': 'Add new User',
    'userform.submit': 'Save User',
    'userform.addgroups': 'Add Groups to this User'
  },
  gb: {
    'userform.title': ''
  }
};

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59);
/* harmony import */ var _services_view_render_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60);
/* harmony import */ var _services_locale_provider_fn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12);






class PageFooter extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({
      mode: 'open'
    });
    this.state = {};
  }

  connectedCallback() {
    this.render();
  }

  disconnectedCallback() {//TODO:
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    this.render();
  }

  getLocaleFn() {
    const localeName = this.getAttribute('locale') || 'en';
    const locale = _locale__WEBPACK_IMPORTED_MODULE_3__["locales"][localeName] || {};
    return Object(_services_locale_provider_fn__WEBPACK_IMPORTED_MODULE_4__["default"])(locale);
  }

  render() {
    const sRoot = this.shadowRoot;
    const html = Object(_services_view_render_service__WEBPACK_IMPORTED_MODULE_2__["default"])(_index_html__WEBPACK_IMPORTED_MODULE_1__["default"], this.state, this.getLocaleFn());
    const styleEl = document.createElement('style');
    styleEl.textContent = _index_css__WEBPACK_IMPORTED_MODULE_0__["default"];
    sRoot.appendChild(styleEl);
    sRoot.innerHTML += html;
  }

}

customElements.define('wc-page-footer', PageFooter);

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\r\n    box-sizing: border-box;\r\n}\r\n.container {\r\n    position: relative;\r\n    bottom: 0px;\r\n    left: 0px;\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    background-color: var(--secondary-dark);\r\n    color: var(--primary-lighter);\r\n    padding: 20px 15px;\r\n    margin: 0px;\r\n    text-align: center;    \r\n}\r\n.description {\r\n    font-size: 12px;\r\n}\r\n\r\n@media only screen and (min-width: 768px) {\r\n    .container {\r\n        position: fixed;\r\n    }\r\n}");

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n    <span>{{l('pagefooter.title')}}</span>\r\n    <span class=\"description\">{{l('pagefooter.description')}}</span>\r\n</div>\r\n");

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locales", function() { return locales; });
const locales = {
  en: {
    'pagefooter.title': 'InterNations User Management Application',
    'pagefooter.description': 'The App has been developed as part of the Hiring Interview Process. For any queries, Please connect, Sunil Kumar, email: sunil.divyam@gmail.com, Phone: +91-9910129602 (Inida). Great Thanks.'
  },
  gb: {
    'pagefootter.title': ''
  }
};

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63);
/* harmony import */ var _services_view_render_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(64);
/* harmony import */ var _services_locale_provider_fn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12);
/* harmony import */ var _services_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16);







class ResponsiveUserDashboard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({
      mode: 'open'
    });
    this.state = {
      selectedUser: null
    };
  }

  connectedCallback() {
    this.render();
  }

  disconnectedCallback() {//TODO:
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    this.render();
  }

  getLocaleFn() {
    const localeName = this.getAttribute('locale') || 'en';
    const locale = _locale__WEBPACK_IMPORTED_MODULE_3__["locales"][localeName] || {};
    return Object(_services_locale_provider_fn__WEBPACK_IMPORTED_MODULE_4__["default"])(locale);
  }

  createEventHandlers() {// const userList = this.shadowRoot.querySelector('wc-user-list');
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
    const html = Object(_services_view_render_service__WEBPACK_IMPORTED_MODULE_2__["default"])(_index_html__WEBPACK_IMPORTED_MODULE_1__["default"], this.state, this.getLocaleFn());
    const styleEl = document.createElement('style');
    styleEl.textContent = _index_css__WEBPACK_IMPORTED_MODULE_0__["default"];
    sRoot.appendChild(styleEl);
    sRoot.innerHTML += html;
    this.createEventHandlers();
  }

}

customElements.define('wc-responsive-user-dashboard', ResponsiveUserDashboard);

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\r\n    width: auto;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    justify-content: flex-start;    \r\n}\r\n\r\n.top, .bottom {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: flex-start;\r\n    justify-content: flex-start;\r\n}\r\n\r\nwc-responsive-user-list {\r\n    width: 100%;\r\n}\r\n\r\nh1 {\r\n    border-bottom: 10px solid var(--secondary-light);\r\n}\r\n.hidden {\r\n    display: none!important;\r\n}\r\n\r\n@media only screen and (min-width: 768px) {\r\n   \r\n}");

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"container\">\r\n    <section class=\"top\">\r\n        <h1>{{l('userdashboard.title')}}</h1>\r\n    </section>\r\n    <section class=\"bottom\">\r\n        <wc-responsive-user-list></wc-responsive-user-list>\r\n    </section>\r\n</section>\r\n");

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locales", function() { return locales; });
const locales = {
  en: {
    'userdashboard.title': 'User Dashboard'
  },
  gb: {
    'userdashboard.title': ''
  }
};

/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67);
/* harmony import */ var _list_item_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(68);
/* harmony import */ var _services_view_render_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10);
/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(69);
/* harmony import */ var _services_locale_provider_fn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(12);
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(22);







const USERCARD = 'wc-responsive-user-card';
const USERFORM = 'wc-user-form';
const ACTIVE = 'active';

class ResponsiveUserList extends HTMLElement {
  static get observedAttributes() {
    return ['groupid'];
  }

  constructor() {
    super();
    this.attachShadow({
      mode: 'open'
    });
    this.state = {
      users: [],
      selectedItem: null
    };
    this.handleSelectItem = this.handleSelectItem.bind(this);
  }

  connectedCallback() {
    this.fetchUsers();
  }

  disconnectedCallback() {//TODO:
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    if (attrName === 'groupid' && oldVal != newVal && newVal) {
      const groupid = newVal;
      this.fetchUsers(groupid);
    }
  }

  fetchUsers(id) {
    _services_loader_service__WEBPACK_IMPORTED_MODULE_6__["default"].start();
    let url = '/api/users';

    if (id) {
      url = `/api/usersbygroup/${id}`;
    }

    fetch(url).then(res => {
      if (res.ok) {
        return res.json();
      } else {
        const err = new Error(res.statusText);
        err.status = res.status;
        return Promise.reject(err);
      }
    }).then(users => {
      this.state.users = users;
      this.state.selectedItem = null;
      this.render();
      _services_loader_service__WEBPACK_IMPORTED_MODULE_6__["default"].stop();
    }).catch(err => {
      this.state.users = [];
      this.state.selectedItem = null;
      this.render();
      _services_loader_service__WEBPACK_IMPORTED_MODULE_6__["default"].stop();
    });
  }

  removeUser(id) {
    _services_loader_service__WEBPACK_IMPORTED_MODULE_6__["default"].start();
    let url = `/api/users/${id}`;
    fetch(url, {
      method: 'DELETE'
    }).then(res => {
      if (res.ok) {
        return res.json();
      } else {
        const err = new Error(res.statusText);
        err.status = res.status;
        return Promise.reject(err);
      }
    }).then(user => {
      _services_loader_service__WEBPACK_IMPORTED_MODULE_6__["default"].stop();
      const msg = this.shadowRoot.querySelector('wc-message-box');

      const handleMsgOk = e => {
        msg.removeEventListener('ok', handleMsgOk);
        msg.removeEventListener('cancel', handleMsgOk);
        this.fetchUsers();
      };

      msg.addEventListener('ok', handleMsgOk);
      msg.addEventListener('cancel', handleMsgOk);
      this.showMessageBox('Confirm', 'User deleted Successfully.', 'GO BACK');
    }).catch(err => {
      _services_loader_service__WEBPACK_IMPORTED_MODULE_6__["default"].stop();
      this.showMessageBox('Confirm', 'Can not delete User due to following: ' + err.message, 'Retry');
    });
  }

  getLocaleFn() {
    const localeName = this.getAttribute('locale') || 'en';
    const locale = _locale__WEBPACK_IMPORTED_MODULE_4__["locales"][localeName] || {};
    return Object(_services_locale_provider_fn__WEBPACK_IMPORTED_MODULE_5__["default"])(locale);
  }

  toggleSelectItem(li, select, user, isForm) {
    if (select === true) {
      li.classList.add(ACTIVE);
      this.state.selectedItem = user; //Add user card

      const cardOrForm = document.createElement(isForm ? USERFORM : USERCARD);
      cardOrForm.setAttribute('userid', user.id);
      const userCardContainer = li.querySelector('.user-card-container');
      userCardContainer.appendChild(cardOrForm); //toggle up and down arrow

      const close = li.querySelector('a.btn-close i.ic');
      close.classList.add('arrow-up');
      close.classList.remove('arrow-down'); //scroll in view

      window.scrollTo({
        top: li.offsetTop,
        left: 0,
        behavior: 'smooth'
      });
    } else {
      li.classList.remove(ACTIVE); //remove user card

      const card = li.querySelector(USERCARD);
      const form = li.querySelector(USERFORM);
      card && card.remove();
      form && form.remove();
      this.state.selectedItem = null; //toggle up and down arrow

      const close = li.querySelector('a.btn-close i.ic');
      close.classList.add('arrow-down');
      close.classList.remove('arrow-up');
    }
  }

  handleSelectItem(e) {
    let li;
    let userId;
    let user;
    const isForm = e.data && e.data.isForm || false;

    if (e.currentTarget.tagName.toLowerCase() === 'li') {
      li = e.currentTarget;
      userId = li.getAttribute('id');
    } else {
      userId = e.currentTarget.getAttribute('userid');
      li = this.shadowRoot.getElementById(userId);
    }

    user = this.state.users.find(u => u.id === userId);

    if (li.classList.contains(ACTIVE)) {
      this.toggleSelectItem(li, false);
    } else {
      //Mark Active and unmark previous if any. and hide/show User-card
      if (this.state.selectedItem) {
        const selectedItemEl = this.shadowRoot.getElementById(this.state.selectedItem.id);
        this.toggleSelectItem(selectedItemEl, false);
      }

      this.toggleSelectItem(li, true, user, isForm); //dispatch event selected

      const clickEvent = new Event('selected');
      clickEvent.data = user;
      this.dispatchEvent(clickEvent);
    }
  }

  showMessageBox(title, message, actionText) {
    const msg = this.shadowRoot.querySelector('wc-message-box');
    msg.setAttribute('header-text', title);
    msg.setAttribute('message', message);
    msg.setAttribute('ok-label', actionText);
    msg.setAttribute('show', true);
  }

  addEventHandlers(liEl) {
    liEl.addEventListener('click', this.handleSelectItem);
    const del = liEl.querySelector('.btn-delete');
    const edit = liEl.querySelector('.btn-edit');
    const close = liEl.querySelector('.btn-close');
    del.addEventListener('click', e => {
      e.stopPropagation();
      const userId = e.currentTarget.getAttribute('userid');
      const msg = this.shadowRoot.querySelector('wc-message-box');

      const handleMsgOk = e => {
        this.removeUser(userId);
        msg.removeEventListener('ok', handleMsgOk);
        msg.removeEventListener('cancel', handleMsgCancel);
      };

      const handleMsgCancel = e => {
        msg.removeEventListener('ok', handleMsgOk);
        msg.removeEventListener('cancel', handleMsgCancel);
      };

      msg.addEventListener('ok', handleMsgOk);
      msg.addEventListener('cancel', handleMsgCancel);
      this.showMessageBox('Confirm User removal', "This will remove user from all memberships and remove user permanantly. Do you want to continue?", "continue...");
    });
    edit.addEventListener('click', e => {
      e.stopPropagation();
      e.data = e.data || {};
      e.data.isForm = true;
      this.handleSelectItem(e);
    });
    close.addEventListener('click', e => {
      e.stopPropagation();
      this.handleSelectItem(e);
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
          const fullName = `${u.lastName}, ${u.firstName}`;

          if (fullName && fullName.toLowerCase().includes(searchTerm) || u.email && u.email.toLowerCase().includes(searchTerm)) {
            return u;
          }
        });
        this.renderList(filteredUsers);
      }, 100);
    });
    const add = this.shadowRoot.querySelector('.btn-add');
    add.addEventListener('click', e => {
      e.stopPropagation(); // Add User
    });
  }

  renderResultCount(count) {
    const resultEl = this.shadowRoot.querySelector('.search-result');
    resultEl.innerHTML = `${count || '0'} of ${this.state.users && this.state.users.length || '0'}`;
  }

  renderList(users) {
    const list = this.shadowRoot.querySelector('ul.list');
    this.state.selectedItem = null; //update result count

    this.renderResultCount(users && users.length);
    list.innerHTML = '';
    users.map((u, i) => {
      const li = document.createElement('li');
      li.setAttribute('id', u.id);
      li.innerHTML = Object(_services_view_render_service__WEBPACK_IMPORTED_MODULE_3__["default"])(_list_item_html__WEBPACK_IMPORTED_MODULE_2__["default"], u, this.getLocaleFn());
      this.addEventHandlers(li);
      list.appendChild(li);
    });
  }

  render() {
    const sRoot = this.shadowRoot;
    sRoot.innerHTML = '';
    const html = Object(_services_view_render_service__WEBPACK_IMPORTED_MODULE_3__["default"])(_index_html__WEBPACK_IMPORTED_MODULE_1__["default"], this.state, this.getLocaleFn());
    const styleEl = document.createElement('style');
    styleEl.textContent = _index_css__WEBPACK_IMPORTED_MODULE_0__["default"];
    sRoot.appendChild(styleEl);
    sRoot.innerHTML += html;
    this.addSearchHandlers();
    this.renderList(this.state.users);
  }

}

customElements.define('wc-responsive-user-list', ResponsiveUserList);

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\r\n    width: auto;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    justify-content: flex-start;\r\n}\r\n* {\r\n    box-sizing: border-box;\r\n}\r\n\r\n.search-container{\r\n    width: 100%;\r\n    position: relative;\r\n}\r\n.search {\r\n    position: relative;\r\n    width: 100%;\r\n    border: 1px solid var(--primary-lighter);\r\n    border-radius: 5px;\r\n    padding: 10px 30px 10px 10px;\r\n    font-size: var(--font-size);\r\n}\r\n.icon {\r\n    display: block;\r\n    position: absolute;\r\n    right: 0px;\r\n    top: 0px;\r\n    width: 65px;\r\n    height: 40px;\r\n    line-height: 37px;\r\n    background: var(--primary-dark);\r\n    text-align: center;\r\n    color: var(--primary-lighter);\r\n    border-top-right-radius: 5px;\r\n    border-bottom-right-radius: 5px;\r\n}\r\n.li-container {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    justify-content: flex-start;\r\n}\r\n.user-card-container {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: flex-start;\r\n    justify-content: flex-start;\r\n}\r\nwc-responsive-user-card {\r\n    width: 100%;\r\n}\r\nwc-user-form {\r\n    cursor: default;\r\n    width: 100%;\r\n}\r\n.controls-container {\r\n    display: block;\r\n    width: 100%;\r\n}\r\n\r\n.li-controls {\r\n    width: 100%;\r\n    text-align: right;\r\n}\r\nul {\r\n    list-style: none;\r\n    width: 100%;\r\n    height: auto;\r\n    padding: 0px;\r\n    overflow: hidden;\r\n    border: 1px solid var(--primary-lighter);\r\n}\r\nli {\r\n    width: 100%;\r\n    margin: 5px 0px;\r\n    padding: 10px 15px;\r\n    cursor: pointer;\r\n    transition: background-color 0.5s;\r\n    transition: height 2s;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    justify-content: flex-start;\r\n}\r\nli:hover {\r\n    background-color: var(--primary-lighter);\r\n}\r\n\r\nli.active {\r\n    background-color: var(--secondary-light);\r\n}\r\n.email {\r\n    color: var(--primary);\r\n}\r\n\r\nlabel {\r\n    font-weight: bold;\r\n}\r\n\r\n.btn-add {\r\n    float: right;\r\n}\r\n.hidden {\r\n    display: none!important;\r\n}\r\n\r\n@media only screen and (min-width: 768px) {\r\n    .search-container{\r\n        width: 50%;\r\n        margin: auto;\r\n    }\r\n    .li-container {\r\n        flex-direction: row;\r\n        align-items: center;\r\n        justify-content: space-between;\r\n    }\r\n    .li-controls {\r\n        width: auto;\r\n    }\r\n}\r\n\r\n.ic {\r\n    display: inline-block;\r\n    border: 1px solid transparent;\r\n    border-radius: 5px;\r\n    cursor: pointer;\r\n}\r\n.ic:hover {\r\n    border-color: var(--shadow);\r\n    /* background-color: var(--secondary-lighter); */\r\n}\r\n.ic:after {\r\n    content: \" \";\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    width: 30px;\r\n    height: 30px;\r\n    font-size: 20px;\r\n    font-style: normal;\r\n}\r\n.close.ic:after {\r\n    content: \"\\2716\";\r\n    color: var(--danger);\r\n}\r\n.edit.ic:after {\r\n    content: \"\\270E\";\r\n    transform: scaleX(-1);\r\n    color: var(--success);\r\n}\r\n.arrow-up.ic:after {\r\n    content: \"\\276F\";\r\n    transform: rotate(-90deg);\r\n    margin-left: -2px;\r\n    width: 32px;\r\n}\r\n.arrow-down.ic:after {\r\n    content: \"\\276F\";\r\n    transform: rotate(90deg);\r\n    margin-left: 2px;\r\n    width: 28px;\r\n}\r\n.arrow-left.ic:after {\r\n    content: \"\\276F\";\r\n    transform: scaleX(-1);\r\n    margin-bottom: 2px;\r\n    height: 28px;\r\n}\r\n.arrow-right.ic:after {\r\n    content: \"\\276F\";\r\n    margin-bottom: -2px;\r\n    height: 32px;\r\n}\r\n.add.ic:after {\r\n    content: \"\\271A\";\r\n    color: var(--success);\r\n}");

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n    <div class=\"search-container\">\r\n        <input class=\"search\" type=\"search\" placeholder=\"{{l('userlist.search.placeholder')}}\"/>\r\n        <span class=\"icon\">Search</span>\r\n    </div>\r\n    <div class=\"controls-container\">\r\n        <label class=\"search-result-label\">{{l('userlist.label.searcresults')}}</label> <span class=\"search-result\"></span>\r\n        <a class=\"btn-add\" href=\"javascript:void(0)\" action=\"add\" userid={{d.id}}><i class=\"ic add\"></i></a>\r\n    </div>\r\n    <ul class=\"list\">\r\n\r\n    </ul>\r\n    <wc-message-box show=\"false\" header-text=\"Confirm\" message=\"Are you sure?\" ok-label=\"Yes\"></wc-message-box>\r\n</div>\r\n");

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"li-container\">\r\n    <div class=\"info-container\">\r\n        <div class=\"name\">\r\n            {{d.lastName}}, {{d.firstName}}\r\n        </div>\r\n        <div class=\"email\">\r\n            {{d.email.toLowerCase()}}\r\n        </div>\r\n    </div>\r\n    <div class=\"li-controls\">\r\n        <a class=\"btn-delete\" href=\"javascript:void(0)\" action=\"delete\" userid={{d.id}}><i class=\"ic close\"></i></a>\r\n        <a class=\"btn-edit\" href=\"javascript:void(0)\" action=\"Edit\" userid={{d.id}}><i class=\"ic edit\"></i></a>\r\n        <a class=\"btn-close\" href=\"javascript:void(0)\" action=\"Close\" userid={{d.id}}><i class=\"ic arrow-down\"></i></a>\r\n    </div>\r\n</div>\r\n<div class=\"user-card-container\">\r\n\r\n</div>");

/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locales", function() { return locales; });
const locales = {
  en: {
    'userlist.search.placeholder': 'Search User...',
    'userlist.label.searcresults': 'Results'
  },
  gb: {
    'userlist.search.placeholder': ''
  }
};

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(71);

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(73)(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(72)(false);
// Module
exports.push([module.i, ":root {\n  --primary: #55a4fd;\n  --primary-dark: #004391;\n  --primary-light: #a6cffd;\n  --primary-lighter: #d9ebff;\n  --secondary: #666666;\n  --secondary-dark: #1b1b1b;\n  --secondary-light: #8cfcb7;\n  --secondary-lighter: #bbffd5;\n  --danger: red;\n  --success: green;\n  --warning: orange;\n  --info: #a4d3e2;\n  --shadow: #e6e6e6;\n  --font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n  --font-size: 1em;\n  --font-size-small: 0.8em;\n}\n:root {\n  --main-bg-color: coral;\n}\n* {\n  box-sizing: border-box;\n}\nbody {\n  margin: 0px;\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n  font-size: 16px;\n  letter-spacing: 0.1ch;\n  line-height: 1.4;\n  color: #004391;\n  margin-bottom: 0px;\n}\n@media only screen and (min-width: 768px) {\n  body {\n    margin-bottom: 200px;\n  }\n}\n.container-fluid {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.container {\n  width: 100%;\n  max-width: 1200px;\n  display: flex;\n  flex-direction: column;\n  margin: auto;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n.row {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.page-header {\n  background-color: var(--primary-light);\n}\n.hidden {\n  display: none!important;\n}\n", ""]);


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>InterNations</h1>\r\n<h2>User management Application</h2>\r\n<div>\r\n    <div><strong>Front End: </strong>ES6/JavaScript only, no external libraries/framework used. No NPM packages used as dependencies.</div>\r\n    <ul>\r\n        <li>Created <strong>Custom Web components.</strong></li>\r\n        <li>Created own <strong>Custom HTML template rendering</strong> service</li>\r\n        <li>Created own <strong>Custom Internationalization and language</strong> service</li>\r\n        <li>Created own <strong>Router</strong> service</li>\r\n        <li>Created own <strong>Loader</strong> service, that shows loaders across application components.</li>\r\n        <li>Application <strong>Theming</strong> implemented using CSS variables</li>\r\n        <li>ES Linting</li>\r\n        <li>Webpack: Build and Bundling</li>\r\n    </ul>\r\n    <div><strong>Back End: </strong>Node & Express js</div>\r\n    <div><strong>Database: </strong>json-server (No-SQL)</div>\r\n</div>");

/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<wc-responsive-user-dashboard></wc-responsive-user-dashboard>");

/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<wc-group-dashboard></wc-group-dashboard>");

/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\r\n  box-sizing: border-box;\r\n}\r\n.backdrop {\r\n    background: rgba(0,0,0, 0.2);\r\n    position: fixed;\r\n    z-index: 9999;\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0px;\r\n    left: 0px;\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n.container {\r\n  width: 97%;\r\n  height: auto;  \r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-start;\r\n  justify-content: flex-start;\r\n  background-color: white;\r\n  padding: 0px;\r\n  border-radius: 10px;\r\n}\r\n\r\nheader {\r\n  background: var(--primary-dark);\r\n  color: white;\r\n  display: flex;\r\n  align-items: flex-start;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  width: 100%;\r\n  padding: 15px;\r\n  border-top-left-radius: 10px;\r\n  border-top-right-radius: 10px;\r\n}\r\n\r\nsummary {  \r\n  display: flex;\r\n  align-items: flex-start;\r\n  flex-direction: row;\r\n  justify-content: flex-start;\r\n  width: 100%;\r\n  padding: 15px;\r\n}\r\n\r\nfooter {  \r\n  display: flex;\r\n  align-items: center;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  width: 100%;\r\n  padding: 15px;\r\n  border-top: 2px solid var(--primary-lighter);\r\n}\r\n\r\nh1 {\r\n  margin: 0px;\r\n  font-size: 1.4em;\r\n}\r\n\r\n.btn-close {\r\n  float: right;\r\n}\r\n\r\n.btn-ok, .btn-ok:active, .btn-ok:visited {\r\n  display: inline-block;\r\n  width: auto;\r\n  padding: 10px 15px;\r\n  background-color: var(--primary-dark);\r\n  color: white;\r\n  border-radius: 5px;\r\n  text-decoration: none;\r\n}\r\n.btn-ok:hover {\r\n  background-color: var(--primary);\r\n}\r\n.hidden {\r\n  display: none!important;\r\n}\r\n\r\n.ic {\r\n  display: inline-block;\r\n  border: 1px solid transparent;\r\n  border-radius: 5px;\r\n  cursor: pointer;\r\n}\r\n.ic:hover {\r\n  border-color: var(--shadow);\r\n  /* background-color: var(--secondary-lighter); */\r\n}\r\n.ic:after {\r\n  content: \" \";\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 30px;\r\n  height: 30px;\r\n  font-size: 20px;\r\n  font-style: normal;\r\n}\r\n.close.ic:after {\r\n  content: \"\\2716\";\r\n  color: var(--danger);\r\n}\r\n\r\n\r\n@media only screen and (min-width: 768px) {\r\n  .container{\r\n      width: 70%;\r\n  }\r\n}");

/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"backdrop\">\r\n    <div class=\"container\">\r\n        <header>\r\n            <h1 class=\"title\">{{d.headerText}}</h1>\r\n            <a class=\"btn-close\" href=\"javascript:void(0)\" action=\"close\"><i class=\"ic close\"></i></a>\r\n        </header>\r\n        <summary>\r\n            <p class='message'>{{d.message}}</p>\r\n        </summary>\r\n        <footer>\r\n            <a class=\"btn-ok\" href=\"javascript:void(0)\" action=\"add\">{{d.okLabel || l('messagebox.label.ok')}}</a>\r\n        </footer>\r\n    </div>\r\n</div>\r\n");

/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locales", function() { return locales; });
const locales = {
  en: {
    'messagebox.label.ok': 'OK'
  },
  gb: {
    'messagebox.label.ok': ''
  }
};

/***/ })
/******/ ]);