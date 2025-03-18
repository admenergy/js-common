(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lodash"));
	else if(typeof define === 'function' && define.amd)
		define(["lodash"], factory);
	else if(typeof exports === 'object')
		exports["@admenergy/js-common"] = factory(require("lodash"));
	else
		root["@admenergy/js-common"] = factory(root["lodash"]);
})(this, (__WEBPACK_EXTERNAL_MODULE__154__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 85:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccessDeniedError: () => (/* binding */ AccessDeniedError),
/* harmony export */   NotFoundError: () => (/* binding */ NotFoundError),
/* harmony export */   UnauthorizedError: () => (/* binding */ UnauthorizedError)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _wrapNativeSuper(t) { var r = "function" == typeof Map ? new Map() : void 0; return _wrapNativeSuper = function _wrapNativeSuper(t) { if (null === t || !_isNativeFunction(t)) return t; if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function"); if (void 0 !== r) { if (r.has(t)) return r.get(t); r.set(t, Wrapper); } function Wrapper() { return _construct(t, arguments, _getPrototypeOf(this).constructor); } return Wrapper.prototype = Object.create(t.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, t); }, _wrapNativeSuper(t); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _isNativeFunction(t) { try { return -1 !== Function.toString.call(t).indexOf("[native code]"); } catch (n) { return "function" == typeof t; } }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
/**
 * Unauthorized Error
 *
 * A request did not provide the required authentication.
 *
 * @extends Error
 */
var UnauthorizedError = /*#__PURE__*/function (_Error) {
  /**
   * Create an UnauthorizedError.
   *
   * @param {string} [message] - The error message. Pass a message to override the default.
   */
  function UnauthorizedError() {
    var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "[401] Unauthorized. Please sign in and try again.";
    _classCallCheck(this, UnauthorizedError);
    return _callSuper(this, UnauthorizedError, [message]);
  }
  _inherits(UnauthorizedError, _Error);
  return _createClass(UnauthorizedError);
}(/*#__PURE__*/_wrapNativeSuper(Error));

/**
 * Access Denied Error
 *
 * The authenticated user does not have permissions for the request.
 *
 * @extends Error
 */
var AccessDeniedError = /*#__PURE__*/function (_Error2) {
  /**
   * Create an AccessDeniedError.
   *
   * @param {string} [message] - The error message. Pass a message to override the default.
   */
  function AccessDeniedError() {
    var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "[403] Access Denied. You do not have permission to access this resource.";
    _classCallCheck(this, AccessDeniedError);
    return _callSuper(this, AccessDeniedError, [message]);
  }
  _inherits(AccessDeniedError, _Error2);
  return _createClass(AccessDeniedError);
}(/*#__PURE__*/_wrapNativeSuper(Error));

/**
 * Not Found Error
 *
 * The requested resource was not found.
 *
 * @extends Error
 */
var NotFoundError = /*#__PURE__*/function (_Error3) {
  /**
   * Create a NotFoundError.
   *
   * @param {string} [message] - The error message. Pass a message to override the default.
   */
  function NotFoundError() {
    var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "[404] Not Found.";
    _classCallCheck(this, NotFoundError);
    return _callSuper(this, NotFoundError, [message]);
  }
  _inherits(NotFoundError, _Error3);
  return _createClass(NotFoundError);
}(/*#__PURE__*/_wrapNativeSuper(Error));

/***/ }),

/***/ 154:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__154__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  encodeForm: () => (/* reexport */ encodeForm),
  encodeQueryString: () => (/* reexport */ encodeQueryString),
  fetchJSON: () => (/* reexport */ fetchJSON),
  sget: () => (/* reexport */ sget),
  sset: () => (/* reexport */ sset)
});

;// ./app/client/encodeForm.ts
/**
 * @todo Not done. Needs to support: checkbox, radio, select
 *
 * Encode HTML Form
 *
 * Encodes a Form element as a plain JavaScript object
 *
 * @param {HTMLFormElement}  form  Form to encode the values of.
 * @returns {Object}  Object containing the `{ name: value }`
 *
 * @example
 * onSubmit = event => {
 *   event.preventDefault();
 *   console.log(encodeForm(event.target));
 * }
 */
function encodeForm(htmlFormElement) {
  var ret = {};
  var valueOfElement = function valueOfElement(element) {
    var type = element.getAttribute("type");
    var asNum;
    var value;
    switch (element.tagName) {
      case "INPUT":
        switch (type) {
          case "number":
            asNum = Number(element.value);
            return isNaN(asNum) ? NaN : asNum;
          case "checkbox":
            return element.checked;
          default:
            return element.value;
        }
      case "TEXTAREA":
        return element.value;
      case "SELECT":
        {
          // WONT FIX: Multi not supported.
          var selectElement = element;
          if (~selectElement.selectedIndex) {
            return selectElement.options[selectElement.selectedIndex].value;
          } else {
            return "";
          }
        }
      default:
        value = element.getAttribute("data-value");
        return typeof value === "string" ? JSON.parse(value) : "";
    }
  };
  htmlFormElement.querySelectorAll("[name]").forEach(function (element) {
    var name = element.getAttribute("name");
    if (!name) return; // only if name has content

    var arrayMode = false;
    var checkboxLike = element instanceof HTMLInputElement && (element.type === "checkbox" || element.type === "radio");
    var value = valueOfElement(element);
    if (checkboxLike) {
      arrayMode = true;
      value = element.value;
    }
    if (arrayMode) {
      if (typeof ret[name] === "undefined") ret[name] = [];
      if (!Array.isArray(ret[name])) {
        // skip this erroneous case
        console.warn("[SKIP] Data was set to store an array, but encountered a non-array element: ".concat(element.tagName, "[name=").concat(name, "]") + (element.tagName === "INPUT" ? "[type=".concat(element.type, "]") : ""));
        return;
      }
      ret[name].push(value);
    } else {
      if (Array.isArray(ret[name])) {
        // skip this erroneous case
        console.warn("Data was set to store a string, but encountered an array element: ".concat(element.tagName, "[name=").concat(name, "]") + (element.tagName === "INPUT" ? "[type=".concat(element.type, "]") : ""));
        return;
      }
      ret[name] = value;
    }
  });
  return ret;
}
;// ./app/client/encodeQueryString.ts
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/**
 * Encodes an object into a query string or returns a string as is.
 *
 * @param data - The object to encode into a query string.
 * @param url - Optional URL to append the query string to.
 *
 * @returns The encoded query string or the original string if `data` is not an object.
 *
 * @throws {TypeError} If the parameter types are bad.
 *
 * @example
 * const url = encodeQueryString({ foo: "bar" }, "https://example.com");
 * -> "https://example.com?foo=bar"
 */
function encodeQueryString(data, url) {
  if (_typeof(data) !== "object" || data === null) {
    throw new TypeError("encodeQueryString(data, url?) : 'data' must be an object.");
  }
  if (url !== undefined && typeof url !== "string") {
    throw new TypeError("encodeQueryString(data, url?) : 'url' is optional, but must be a string.");
  }
  var query = Object.entries(data).filter(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      key = _ref2[0],
      value = _ref2[1];
    return value !== undefined && value !== null;
  }).map(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
      key = _ref4[0],
      value = _ref4[1];
    return "".concat(encodeURIComponent(key), "=").concat(encodeURIComponent(value));
  }).join("&");
  if (url) {
    return "".concat(url, "?").concat(query);
  } else {
    return query;
  }
}
// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(154);
var external_lodash_default = /*#__PURE__*/__webpack_require__.n(external_lodash_);
// EXTERNAL MODULE: ./app/ErrorTypes/index.ts
var ErrorTypes = __webpack_require__(85);
;// ./app/client/fetchJSON.ts
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == fetchJSON_typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(fetchJSON_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = fetchJSON_unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function fetchJSON_slicedToArray(r, e) { return fetchJSON_arrayWithHoles(r) || fetchJSON_iterableToArrayLimit(r, e) || fetchJSON_unsupportedIterableToArray(r, e) || fetchJSON_nonIterableRest(); }
function fetchJSON_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function fetchJSON_unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return fetchJSON_arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? fetchJSON_arrayLikeToArray(r, a) : void 0; } }
function fetchJSON_arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function fetchJSON_iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function fetchJSON_arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function fetchJSON_typeof(o) { "@babel/helpers - typeof"; return fetchJSON_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, fetchJSON_typeof(o); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }


/**
 * Fetch [GET|POST] JSON.
 * Formats a fetch call to send & accept JSON.
 * Sets the method to POST if JSON data is provided.
 *
 * @param url The URL to fetch.
 * @param data Optional JSON data to send.
 * @param options Optional fetch options.
 *
 * @returns A Promise resolving to the JSON response.
 *
 * @throws {TypeError} If the parameter types are bad.
 * @throws {UnauthorizedError} If the response status is 401.
 * @throws {AccessDeniedError} If the response status is 403.
 * @throws {Error} If the response status is not 200-299.
 * @throws {Error} If the response is not JSON.
 *
 * @example
 * const data = await fetchJSON(`/api/session/login`, { email, password });
 * -> { success: true, message: "Login successful." }
 */
function fetchJSON(_x, _x2) {
  return _fetchJSON.apply(this, arguments);
}
function _fetchJSON() {
  _fetchJSON = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(url, data) {
    var options,
      asForm,
      fetchData,
      formData,
      res,
      json,
      _json$message,
      _args = arguments;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          options = _args.length > 2 && _args[2] !== undefined ? _args[2] : {};
          if (!(typeof url !== "string")) {
            _context.next = 3;
            break;
          }
          throw new TypeError("fetchJSON(url, data?, options?) : 'url' must be a string.");
        case 3:
          if (!(data !== undefined && (fetchJSON_typeof(data) !== "object" || data === null))) {
            _context.next = 5;
            break;
          }
          throw new TypeError("fetchJSON(url, data?, options?) : 'data' is optional, but must be an object.");
        case 5:
          if (!(options !== undefined && (fetchJSON_typeof(options) !== "object" || options === null))) {
            _context.next = 7;
            break;
          }
          throw new TypeError("fetchJSON(url, data?, options?) : 'options' is optional, but must be an object.");
        case 7:
          asForm = !!options.form;
          if (asForm) {
            fetchData = external_lodash_default().merge({
              method: "post"
            }, options);
          } else {
            fetchData = external_lodash_default().merge({
              method: typeof data === "undefined" ? "get" : "post",
              headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
              }
            }, options);
          }
          if (asForm && data) {
            formData = new FormData();
            Object.entries(data).forEach(function (_ref) {
              var _ref2 = fetchJSON_slicedToArray(_ref, 2),
                key = _ref2[0],
                value = _ref2[1];
              if (value instanceof FileList || Array.isArray(value)) {
                var _iterator = _createForOfIteratorHelper(value),
                  _step;
                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    var v = _step.value;
                    formData.append(key, v);
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }
              } else {
                formData.append(key, value);
              }
            });
            fetchData.body = formData;
          } else {
            if (data !== undefined) {
              fetchData.body = JSON.stringify(data);
            }
          }
          _context.next = 12;
          return fetch(url, fetchData);
        case 12:
          res = _context.sent;
          _context.prev = 13;
          _context.next = 16;
          return res.clone().json();
        case 16:
          json = _context.sent;
          _context.next = 22;
          break;
        case 19:
          _context.prev = 19;
          _context.t0 = _context["catch"](13);
          return _context.abrupt("return", res.text().then(function (unexpectedText) {
            if (res.status === 401) {
              throw new ErrorTypes.UnauthorizedError(unexpectedText);
            }
            if (res.status === 403) {
              throw new ErrorTypes.AccessDeniedError(unexpectedText);
            }
            console.error(_context.t0);
            throw new Error("[".concat(res.status, "] Unexpected non-json response: ") + unexpectedText);
          }));
        case 22:
          if (!(200 <= res.status && res.status < 300)) {
            _context.next = 26;
            break;
          }
          return _context.abrupt("return", json);
        case 26:
          if (!(res.status === 401)) {
            _context.next = 28;
            break;
          }
          throw new ErrorTypes.UnauthorizedError(json.message);
        case 28:
          if (!(res.status === 403)) {
            _context.next = 30;
            break;
          }
          throw new ErrorTypes.AccessDeniedError(json.message);
        case 30:
          throw new Error((_json$message = json.message) !== null && _json$message !== void 0 ? _json$message : JSON.stringify(json));
        case 31:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[13, 19]]);
  }));
  return _fetchJSON.apply(this, arguments);
}
;// ./app/client/sget.ts
/**
 * Get from storage as JSON
 *
 * @param key - The key to retrieve.
 * @param defaultValue - The default value to return if the key is not found.
 * @param storage - The storage object to retrieve the value from, defaults to localStorage.
 *
 * @returns The JSON.parsed value for the key, or the default value if not found.
 *
 * @throws TypeError If the parameter types are bad.
 *
 * @example
 * const value = sget("foo", 42);
 * -> 42
 */
function sget(key, defaultValue) {
  var storage = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : localStorage;
  if (!(storage instanceof Storage)) {
    throw new TypeError("sget(key, defaultValue, storage) : 'storage' must be a Storage object.");
  }
  if (typeof key !== "string") {
    throw new TypeError("sget(key, defaultValue, storage) : 'key' must be a string.");
  }
  var stored = storage.getItem(key);
  if (stored === null) return defaultValue;
  return JSON.parse(stored);
}
;// ./app/client/sset.ts
/**
 * Set to Storage as JSON
 *
 * @param key - The key to set.
 * @param value - The value to set. Will be stringified as JSON.
 * @param storage - The storage object to set the value in, defaults to localStorage.
 *
 * @returns The value that was set.
 *
 * @throws TypeError If the parameter types are bad.
 *
 * @example
 * const value = sset("foo", 42);
 * -> 42
 */
function sset(key, value) {
  var storage = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : localStorage;
  if (!(storage instanceof Storage)) {
    throw new TypeError("sset(key, value, storage) : 'storage' must be a Storage object.");
  }
  if (typeof key !== "string") {
    throw new TypeError("sset(key, value, storage) : 'key' must be a string.");
  }
  storage.setItem(key, JSON.stringify(value));
  return value;
}
;// ./app/client/index.ts





/******/ 	return __webpack_exports__;
/******/ })()
;
});