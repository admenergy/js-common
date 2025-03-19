/******/ var __webpack_modules__ = ({

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

/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  encodeForm: () => (/* reexport */ client_encodeForm),
  encodeQueryString: () => (/* reexport */ client_encodeQueryString),
  fetchJSON: () => (/* reexport */ client_fetchJSON),
  sget: () => (/* reexport */ client_sget),
  sset: () => (/* reexport */ client_sset)
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
function client_encodeForm(htmlFormElement) {
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
function client_slicedToArray(r, e) { return client_arrayWithHoles(r) || client_iterableToArrayLimit(r, e) || client_unsupportedIterableToArray(r, e) || client_nonIterableRest(); }
function client_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function client_unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return client_arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? client_arrayLikeToArray(r, a) : void 0; } }
function client_arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function client_iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function client_arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function client_typeof(o) { "@babel/helpers - typeof"; return client_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, client_typeof(o); }
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
function client_encodeQueryString(data, url) {
  if (client_typeof(data) !== "object" || data === null) {
    throw new TypeError("encodeQueryString(data, url?) : 'data' must be an object.");
  }
  if (url !== undefined && typeof url !== "string") {
    throw new TypeError("encodeQueryString(data, url?) : 'url' is optional, but must be a string.");
  }
  var query = Object.entries(data).filter(function (_ref) {
    var _ref2 = client_slicedToArray(_ref, 2),
      key = _ref2[0],
      value = _ref2[1];
    return value !== undefined && value !== null;
  }).map(function (_ref3) {
    var _ref4 = client_slicedToArray(_ref3, 2),
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
;// ./node_modules/lodash-es/_listCacheClear.js
/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function client_listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

/* harmony default export */ const app_client_listCacheClear = (client_listCacheClear);

;// ./node_modules/lodash-es/eq.js
/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function client_eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/* harmony default export */ const client_lodash_es_eq = (client_eq);

;// ./node_modules/lodash-es/_assocIndexOf.js


/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function client_assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (client_lodash_es_eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/* harmony default export */ const app_client_assocIndexOf = (client_assocIndexOf);

;// ./node_modules/lodash-es/_listCacheDelete.js


/** Used for built-in method references. */
var client_arrayProto = Array.prototype;

/** Built-in value references. */
var client_splice = client_arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function client_listCacheDelete(key) {
  var data = this.__data__,
      index = app_client_assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    client_splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

/* harmony default export */ const app_client_listCacheDelete = (client_listCacheDelete);

;// ./node_modules/lodash-es/_listCacheGet.js


/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function client_listCacheGet(key) {
  var data = this.__data__,
      index = app_client_assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/* harmony default export */ const app_client_listCacheGet = (client_listCacheGet);

;// ./node_modules/lodash-es/_listCacheHas.js


/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function client_listCacheHas(key) {
  return app_client_assocIndexOf(this.__data__, key) > -1;
}

/* harmony default export */ const app_client_listCacheHas = (client_listCacheHas);

;// ./node_modules/lodash-es/_listCacheSet.js


/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function client_listCacheSet(key, value) {
  var data = this.__data__,
      index = app_client_assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

/* harmony default export */ const app_client_listCacheSet = (client_listCacheSet);

;// ./node_modules/lodash-es/_ListCache.js






/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function client_ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
client_ListCache.prototype.clear = app_client_listCacheClear;
client_ListCache.prototype['delete'] = app_client_listCacheDelete;
client_ListCache.prototype.get = app_client_listCacheGet;
client_ListCache.prototype.has = app_client_listCacheHas;
client_ListCache.prototype.set = app_client_listCacheSet;

/* harmony default export */ const app_client_ListCache = (client_ListCache);

;// ./node_modules/lodash-es/_stackClear.js


/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function client_stackClear() {
  this.__data__ = new app_client_ListCache;
  this.size = 0;
}

/* harmony default export */ const app_client_stackClear = (client_stackClear);

;// ./node_modules/lodash-es/_stackDelete.js
/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function client_stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

/* harmony default export */ const app_client_stackDelete = (client_stackDelete);

;// ./node_modules/lodash-es/_stackGet.js
/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function client_stackGet(key) {
  return this.__data__.get(key);
}

/* harmony default export */ const app_client_stackGet = (client_stackGet);

;// ./node_modules/lodash-es/_stackHas.js
/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function client_stackHas(key) {
  return this.__data__.has(key);
}

/* harmony default export */ const app_client_stackHas = (client_stackHas);

;// ./node_modules/lodash-es/_freeGlobal.js
/** Detect free variable `global` from Node.js. */
var client_freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/* harmony default export */ const app_client_freeGlobal = (client_freeGlobal);

;// ./node_modules/lodash-es/_root.js


/** Detect free variable `self`. */
var client_freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var client_root = app_client_freeGlobal || client_freeSelf || Function('return this')();

/* harmony default export */ const app_client_root = (client_root);

;// ./node_modules/lodash-es/_Symbol.js


/** Built-in value references. */
var client_Symbol_Symbol = app_client_root.Symbol;

/* harmony default export */ const client_Symbol = (client_Symbol_Symbol);

;// ./node_modules/lodash-es/_getRawTag.js


/** Used for built-in method references. */
var client_objectProto = Object.prototype;

/** Used to check objects for own properties. */
var client_getRawTag_hasOwnProperty = client_objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var client_nativeObjectToString = client_objectProto.toString;

/** Built-in value references. */
var client_symToStringTag = client_Symbol ? client_Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function client_getRawTag(value) {
  var isOwn = client_getRawTag_hasOwnProperty.call(value, client_symToStringTag),
      tag = value[client_symToStringTag];

  try {
    value[client_symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = client_nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[client_symToStringTag] = tag;
    } else {
      delete value[client_symToStringTag];
    }
  }
  return result;
}

/* harmony default export */ const app_client_getRawTag = (client_getRawTag);

;// ./node_modules/lodash-es/_objectToString.js
/** Used for built-in method references. */
var client_objectToString_objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var client_objectToString_nativeObjectToString = client_objectToString_objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function client_objectToString(value) {
  return client_objectToString_nativeObjectToString.call(value);
}

/* harmony default export */ const app_client_objectToString = (client_objectToString);

;// ./node_modules/lodash-es/_baseGetTag.js




/** `Object#toString` result references. */
var client_nullTag = '[object Null]',
    client_undefinedTag = '[object Undefined]';

/** Built-in value references. */
var client_baseGetTag_symToStringTag = client_Symbol ? client_Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function client_baseGetTag(value) {
  if (value == null) {
    return value === undefined ? client_undefinedTag : client_nullTag;
  }
  return (client_baseGetTag_symToStringTag && client_baseGetTag_symToStringTag in Object(value))
    ? app_client_getRawTag(value)
    : app_client_objectToString(value);
}

/* harmony default export */ const app_client_baseGetTag = (client_baseGetTag);

;// ./node_modules/lodash-es/isObject.js
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function client_isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

/* harmony default export */ const client_lodash_es_isObject = (client_isObject);

;// ./node_modules/lodash-es/isFunction.js



/** `Object#toString` result references. */
var client_asyncTag = '[object AsyncFunction]',
    client_funcTag = '[object Function]',
    client_genTag = '[object GeneratorFunction]',
    client_proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function client_isFunction(value) {
  if (!client_lodash_es_isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = app_client_baseGetTag(value);
  return tag == client_funcTag || tag == client_genTag || tag == client_asyncTag || tag == client_proxyTag;
}

/* harmony default export */ const client_lodash_es_isFunction = (client_isFunction);

;// ./node_modules/lodash-es/_coreJsData.js


/** Used to detect overreaching core-js shims. */
var client_coreJsData = app_client_root['__core-js_shared__'];

/* harmony default export */ const app_client_coreJsData = (client_coreJsData);

;// ./node_modules/lodash-es/_isMasked.js


/** Used to detect methods masquerading as native. */
var client_maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(app_client_coreJsData && app_client_coreJsData.keys && app_client_coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function client_isMasked(func) {
  return !!client_maskSrcKey && (client_maskSrcKey in func);
}

/* harmony default export */ const app_client_isMasked = (client_isMasked);

;// ./node_modules/lodash-es/_toSource.js
/** Used for built-in method references. */
var client_funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var client_funcToString = client_funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function client_toSource(func) {
  if (func != null) {
    try {
      return client_funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/* harmony default export */ const app_client_toSource = (client_toSource);

;// ./node_modules/lodash-es/_baseIsNative.js





/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var client_reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var client_reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var client_baseIsNative_funcProto = Function.prototype,
    client_baseIsNative_objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var client_baseIsNative_funcToString = client_baseIsNative_funcProto.toString;

/** Used to check objects for own properties. */
var client_baseIsNative_hasOwnProperty = client_baseIsNative_objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var client_reIsNative = RegExp('^' +
  client_baseIsNative_funcToString.call(client_baseIsNative_hasOwnProperty).replace(client_reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function client_baseIsNative(value) {
  if (!client_lodash_es_isObject(value) || app_client_isMasked(value)) {
    return false;
  }
  var pattern = client_lodash_es_isFunction(value) ? client_reIsNative : client_reIsHostCtor;
  return pattern.test(app_client_toSource(value));
}

/* harmony default export */ const app_client_baseIsNative = (client_baseIsNative);

;// ./node_modules/lodash-es/_getValue.js
/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function client_getValue(object, key) {
  return object == null ? undefined : object[key];
}

/* harmony default export */ const app_client_getValue = (client_getValue);

;// ./node_modules/lodash-es/_getNative.js



/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function client_getNative(object, key) {
  var value = app_client_getValue(object, key);
  return app_client_baseIsNative(value) ? value : undefined;
}

/* harmony default export */ const app_client_getNative = (client_getNative);

;// ./node_modules/lodash-es/_Map.js



/* Built-in method references that are verified to be native. */
var client_Map = app_client_getNative(app_client_root, 'Map');

/* harmony default export */ const app_client_Map = (client_Map);

;// ./node_modules/lodash-es/_nativeCreate.js


/* Built-in method references that are verified to be native. */
var client_nativeCreate = app_client_getNative(Object, 'create');

/* harmony default export */ const app_client_nativeCreate = (client_nativeCreate);

;// ./node_modules/lodash-es/_hashClear.js


/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function client_hashClear() {
  this.__data__ = app_client_nativeCreate ? app_client_nativeCreate(null) : {};
  this.size = 0;
}

/* harmony default export */ const app_client_hashClear = (client_hashClear);

;// ./node_modules/lodash-es/_hashDelete.js
/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function client_hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

/* harmony default export */ const app_client_hashDelete = (client_hashDelete);

;// ./node_modules/lodash-es/_hashGet.js


/** Used to stand-in for `undefined` hash values. */
var client_HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var client_hashGet_objectProto = Object.prototype;

/** Used to check objects for own properties. */
var client_hashGet_hasOwnProperty = client_hashGet_objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function client_hashGet(key) {
  var data = this.__data__;
  if (app_client_nativeCreate) {
    var result = data[key];
    return result === client_HASH_UNDEFINED ? undefined : result;
  }
  return client_hashGet_hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/* harmony default export */ const app_client_hashGet = (client_hashGet);

;// ./node_modules/lodash-es/_hashHas.js


/** Used for built-in method references. */
var client_hashHas_objectProto = Object.prototype;

/** Used to check objects for own properties. */
var client_hashHas_hasOwnProperty = client_hashHas_objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function client_hashHas(key) {
  var data = this.__data__;
  return app_client_nativeCreate ? (data[key] !== undefined) : client_hashHas_hasOwnProperty.call(data, key);
}

/* harmony default export */ const app_client_hashHas = (client_hashHas);

;// ./node_modules/lodash-es/_hashSet.js


/** Used to stand-in for `undefined` hash values. */
var client_hashSet_HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function client_hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (app_client_nativeCreate && value === undefined) ? client_hashSet_HASH_UNDEFINED : value;
  return this;
}

/* harmony default export */ const app_client_hashSet = (client_hashSet);

;// ./node_modules/lodash-es/_Hash.js






/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function client_Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
client_Hash.prototype.clear = app_client_hashClear;
client_Hash.prototype['delete'] = app_client_hashDelete;
client_Hash.prototype.get = app_client_hashGet;
client_Hash.prototype.has = app_client_hashHas;
client_Hash.prototype.set = app_client_hashSet;

/* harmony default export */ const app_client_Hash = (client_Hash);

;// ./node_modules/lodash-es/_mapCacheClear.js




/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function client_mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new app_client_Hash,
    'map': new (app_client_Map || app_client_ListCache),
    'string': new app_client_Hash
  };
}

/* harmony default export */ const app_client_mapCacheClear = (client_mapCacheClear);

;// ./node_modules/lodash-es/_isKeyable.js
/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function client_isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/* harmony default export */ const app_client_isKeyable = (client_isKeyable);

;// ./node_modules/lodash-es/_getMapData.js


/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function client_getMapData(map, key) {
  var data = map.__data__;
  return app_client_isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/* harmony default export */ const app_client_getMapData = (client_getMapData);

;// ./node_modules/lodash-es/_mapCacheDelete.js


/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function client_mapCacheDelete(key) {
  var result = app_client_getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

/* harmony default export */ const app_client_mapCacheDelete = (client_mapCacheDelete);

;// ./node_modules/lodash-es/_mapCacheGet.js


/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function client_mapCacheGet(key) {
  return app_client_getMapData(this, key).get(key);
}

/* harmony default export */ const app_client_mapCacheGet = (client_mapCacheGet);

;// ./node_modules/lodash-es/_mapCacheHas.js


/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function client_mapCacheHas(key) {
  return app_client_getMapData(this, key).has(key);
}

/* harmony default export */ const app_client_mapCacheHas = (client_mapCacheHas);

;// ./node_modules/lodash-es/_mapCacheSet.js


/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function client_mapCacheSet(key, value) {
  var data = app_client_getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

/* harmony default export */ const app_client_mapCacheSet = (client_mapCacheSet);

;// ./node_modules/lodash-es/_MapCache.js






/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function client_MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
client_MapCache.prototype.clear = app_client_mapCacheClear;
client_MapCache.prototype['delete'] = app_client_mapCacheDelete;
client_MapCache.prototype.get = app_client_mapCacheGet;
client_MapCache.prototype.has = app_client_mapCacheHas;
client_MapCache.prototype.set = app_client_mapCacheSet;

/* harmony default export */ const app_client_MapCache = (client_MapCache);

;// ./node_modules/lodash-es/_stackSet.js




/** Used as the size to enable large array optimizations. */
var client_LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function client_stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof app_client_ListCache) {
    var pairs = data.__data__;
    if (!app_client_Map || (pairs.length < client_LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new app_client_MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

/* harmony default export */ const app_client_stackSet = (client_stackSet);

;// ./node_modules/lodash-es/_Stack.js







/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function client_Stack(entries) {
  var data = this.__data__ = new app_client_ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
client_Stack.prototype.clear = app_client_stackClear;
client_Stack.prototype['delete'] = app_client_stackDelete;
client_Stack.prototype.get = app_client_stackGet;
client_Stack.prototype.has = app_client_stackHas;
client_Stack.prototype.set = app_client_stackSet;

/* harmony default export */ const app_client_Stack = (client_Stack);

;// ./node_modules/lodash-es/_defineProperty.js


var client_defineProperty = (function() {
  try {
    var func = app_client_getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

/* harmony default export */ const app_client_defineProperty = (client_defineProperty);

;// ./node_modules/lodash-es/_baseAssignValue.js


/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function client_baseAssignValue(object, key, value) {
  if (key == '__proto__' && app_client_defineProperty) {
    app_client_defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

/* harmony default export */ const app_client_baseAssignValue = (client_baseAssignValue);

;// ./node_modules/lodash-es/_assignMergeValue.js



/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function client_assignMergeValue(object, key, value) {
  if ((value !== undefined && !client_lodash_es_eq(object[key], value)) ||
      (value === undefined && !(key in object))) {
    app_client_baseAssignValue(object, key, value);
  }
}

/* harmony default export */ const app_client_assignMergeValue = (client_assignMergeValue);

;// ./node_modules/lodash-es/_createBaseFor.js
/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function client_createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

/* harmony default export */ const app_client_createBaseFor = (client_createBaseFor);

;// ./node_modules/lodash-es/_baseFor.js


/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var client_baseFor = app_client_createBaseFor();

/* harmony default export */ const app_client_baseFor = (client_baseFor);

;// ./node_modules/lodash-es/_cloneBuffer.js


/** Detect free variable `exports`. */
var client_freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var client_freeModule = client_freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var client_moduleExports = client_freeModule && client_freeModule.exports === client_freeExports;

/** Built-in value references. */
var client_Buffer = client_moduleExports ? app_client_root.Buffer : undefined,
    client_allocUnsafe = client_Buffer ? client_Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function client_cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = client_allocUnsafe ? client_allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

/* harmony default export */ const app_client_cloneBuffer = (client_cloneBuffer);

;// ./node_modules/lodash-es/_Uint8Array.js


/** Built-in value references. */
var client_Uint8Array = app_client_root.Uint8Array;

/* harmony default export */ const app_client_Uint8Array = (client_Uint8Array);

;// ./node_modules/lodash-es/_cloneArrayBuffer.js


/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function client_cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new app_client_Uint8Array(result).set(new app_client_Uint8Array(arrayBuffer));
  return result;
}

/* harmony default export */ const app_client_cloneArrayBuffer = (client_cloneArrayBuffer);

;// ./node_modules/lodash-es/_cloneTypedArray.js


/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function client_cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? app_client_cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

/* harmony default export */ const app_client_cloneTypedArray = (client_cloneTypedArray);

;// ./node_modules/lodash-es/_copyArray.js
/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function client_copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

/* harmony default export */ const app_client_copyArray = (client_copyArray);

;// ./node_modules/lodash-es/_baseCreate.js


/** Built-in value references. */
var client_objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var client_baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!client_lodash_es_isObject(proto)) {
      return {};
    }
    if (client_objectCreate) {
      return client_objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

/* harmony default export */ const app_client_baseCreate = (client_baseCreate);

;// ./node_modules/lodash-es/_overArg.js
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function client_overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/* harmony default export */ const app_client_overArg = (client_overArg);

;// ./node_modules/lodash-es/_getPrototype.js


/** Built-in value references. */
var client_getPrototype = app_client_overArg(Object.getPrototypeOf, Object);

/* harmony default export */ const app_client_getPrototype = (client_getPrototype);

;// ./node_modules/lodash-es/_isPrototype.js
/** Used for built-in method references. */
var client_isPrototype_objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function client_isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || client_isPrototype_objectProto;

  return value === proto;
}

/* harmony default export */ const app_client_isPrototype = (client_isPrototype);

;// ./node_modules/lodash-es/_initCloneObject.js




/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function client_initCloneObject(object) {
  return (typeof object.constructor == 'function' && !app_client_isPrototype(object))
    ? app_client_baseCreate(app_client_getPrototype(object))
    : {};
}

/* harmony default export */ const app_client_initCloneObject = (client_initCloneObject);

;// ./node_modules/lodash-es/isObjectLike.js
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function client_isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/* harmony default export */ const client_lodash_es_isObjectLike = (client_isObjectLike);

;// ./node_modules/lodash-es/_baseIsArguments.js



/** `Object#toString` result references. */
var client_argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function client_baseIsArguments(value) {
  return client_lodash_es_isObjectLike(value) && app_client_baseGetTag(value) == client_argsTag;
}

/* harmony default export */ const app_client_baseIsArguments = (client_baseIsArguments);

;// ./node_modules/lodash-es/isArguments.js



/** Used for built-in method references. */
var client_isArguments_objectProto = Object.prototype;

/** Used to check objects for own properties. */
var client_isArguments_hasOwnProperty = client_isArguments_objectProto.hasOwnProperty;

/** Built-in value references. */
var client_propertyIsEnumerable = client_isArguments_objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var client_isArguments = app_client_baseIsArguments(function() { return arguments; }()) ? app_client_baseIsArguments : function(value) {
  return client_lodash_es_isObjectLike(value) && client_isArguments_hasOwnProperty.call(value, 'callee') &&
    !client_propertyIsEnumerable.call(value, 'callee');
};

/* harmony default export */ const client_lodash_es_isArguments = (client_isArguments);

;// ./node_modules/lodash-es/isArray.js
/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var client_isArray = Array.isArray;

/* harmony default export */ const client_lodash_es_isArray = (client_isArray);

;// ./node_modules/lodash-es/isLength.js
/** Used as references for various `Number` constants. */
var client_MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function client_isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= client_MAX_SAFE_INTEGER;
}

/* harmony default export */ const client_lodash_es_isLength = (client_isLength);

;// ./node_modules/lodash-es/isArrayLike.js



/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function client_isArrayLike(value) {
  return value != null && client_lodash_es_isLength(value.length) && !client_lodash_es_isFunction(value);
}

/* harmony default export */ const client_lodash_es_isArrayLike = (client_isArrayLike);

;// ./node_modules/lodash-es/isArrayLikeObject.js



/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function client_isArrayLikeObject(value) {
  return client_lodash_es_isObjectLike(value) && client_lodash_es_isArrayLike(value);
}

/* harmony default export */ const client_lodash_es_isArrayLikeObject = (client_isArrayLikeObject);

;// ./node_modules/lodash-es/stubFalse.js
/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function client_stubFalse() {
  return false;
}

/* harmony default export */ const client_lodash_es_stubFalse = (client_stubFalse);

;// ./node_modules/lodash-es/isBuffer.js



/** Detect free variable `exports`. */
var client_isBuffer_freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var client_isBuffer_freeModule = client_isBuffer_freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var client_isBuffer_moduleExports = client_isBuffer_freeModule && client_isBuffer_freeModule.exports === client_isBuffer_freeExports;

/** Built-in value references. */
var client_isBuffer_Buffer = client_isBuffer_moduleExports ? app_client_root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var client_nativeIsBuffer = client_isBuffer_Buffer ? client_isBuffer_Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var client_isBuffer = client_nativeIsBuffer || client_lodash_es_stubFalse;

/* harmony default export */ const client_lodash_es_isBuffer = (client_isBuffer);

;// ./node_modules/lodash-es/isPlainObject.js




/** `Object#toString` result references. */
var client_objectTag = '[object Object]';

/** Used for built-in method references. */
var client_isPlainObject_funcProto = Function.prototype,
    client_isPlainObject_objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var client_isPlainObject_funcToString = client_isPlainObject_funcProto.toString;

/** Used to check objects for own properties. */
var client_isPlainObject_hasOwnProperty = client_isPlainObject_objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var client_objectCtorString = client_isPlainObject_funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function client_isPlainObject(value) {
  if (!client_lodash_es_isObjectLike(value) || app_client_baseGetTag(value) != client_objectTag) {
    return false;
  }
  var proto = app_client_getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = client_isPlainObject_hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    client_isPlainObject_funcToString.call(Ctor) == client_objectCtorString;
}

/* harmony default export */ const client_lodash_es_isPlainObject = (client_isPlainObject);

;// ./node_modules/lodash-es/_baseIsTypedArray.js




/** `Object#toString` result references. */
var client_baseIsTypedArray_argsTag = '[object Arguments]',
    client_arrayTag = '[object Array]',
    client_boolTag = '[object Boolean]',
    client_dateTag = '[object Date]',
    client_errorTag = '[object Error]',
    client_baseIsTypedArray_funcTag = '[object Function]',
    client_mapTag = '[object Map]',
    client_numberTag = '[object Number]',
    client_baseIsTypedArray_objectTag = '[object Object]',
    client_regexpTag = '[object RegExp]',
    client_setTag = '[object Set]',
    client_stringTag = '[object String]',
    client_weakMapTag = '[object WeakMap]';

var client_arrayBufferTag = '[object ArrayBuffer]',
    client_dataViewTag = '[object DataView]',
    client_float32Tag = '[object Float32Array]',
    client_float64Tag = '[object Float64Array]',
    client_int8Tag = '[object Int8Array]',
    client_int16Tag = '[object Int16Array]',
    client_int32Tag = '[object Int32Array]',
    client_uint8Tag = '[object Uint8Array]',
    client_uint8ClampedTag = '[object Uint8ClampedArray]',
    client_uint16Tag = '[object Uint16Array]',
    client_uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var client_typedArrayTags = {};
client_typedArrayTags[client_float32Tag] = client_typedArrayTags[client_float64Tag] =
client_typedArrayTags[client_int8Tag] = client_typedArrayTags[client_int16Tag] =
client_typedArrayTags[client_int32Tag] = client_typedArrayTags[client_uint8Tag] =
client_typedArrayTags[client_uint8ClampedTag] = client_typedArrayTags[client_uint16Tag] =
client_typedArrayTags[client_uint32Tag] = true;
client_typedArrayTags[client_baseIsTypedArray_argsTag] = client_typedArrayTags[client_arrayTag] =
client_typedArrayTags[client_arrayBufferTag] = client_typedArrayTags[client_boolTag] =
client_typedArrayTags[client_dataViewTag] = client_typedArrayTags[client_dateTag] =
client_typedArrayTags[client_errorTag] = client_typedArrayTags[client_baseIsTypedArray_funcTag] =
client_typedArrayTags[client_mapTag] = client_typedArrayTags[client_numberTag] =
client_typedArrayTags[client_baseIsTypedArray_objectTag] = client_typedArrayTags[client_regexpTag] =
client_typedArrayTags[client_setTag] = client_typedArrayTags[client_stringTag] =
client_typedArrayTags[client_weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function client_baseIsTypedArray(value) {
  return client_lodash_es_isObjectLike(value) &&
    client_lodash_es_isLength(value.length) && !!client_typedArrayTags[app_client_baseGetTag(value)];
}

/* harmony default export */ const app_client_baseIsTypedArray = (client_baseIsTypedArray);

;// ./node_modules/lodash-es/_baseUnary.js
/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function client_baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

/* harmony default export */ const app_client_baseUnary = (client_baseUnary);

;// ./node_modules/lodash-es/_nodeUtil.js


/** Detect free variable `exports`. */
var client_nodeUtil_freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var client_nodeUtil_freeModule = client_nodeUtil_freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var client_nodeUtil_moduleExports = client_nodeUtil_freeModule && client_nodeUtil_freeModule.exports === client_nodeUtil_freeExports;

/** Detect free variable `process` from Node.js. */
var client_freeProcess = client_nodeUtil_moduleExports && app_client_freeGlobal.process;

/** Used to access faster Node.js helpers. */
var client_nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = client_nodeUtil_freeModule && client_nodeUtil_freeModule.require && client_nodeUtil_freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return client_freeProcess && client_freeProcess.binding && client_freeProcess.binding('util');
  } catch (e) {}
}());

/* harmony default export */ const app_client_nodeUtil = (client_nodeUtil);

;// ./node_modules/lodash-es/isTypedArray.js




/* Node.js helper references. */
var client_nodeIsTypedArray = app_client_nodeUtil && app_client_nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var client_isTypedArray = client_nodeIsTypedArray ? app_client_baseUnary(client_nodeIsTypedArray) : app_client_baseIsTypedArray;

/* harmony default export */ const client_lodash_es_isTypedArray = (client_isTypedArray);

;// ./node_modules/lodash-es/_safeGet.js
/**
 * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function client_safeGet(object, key) {
  if (key === 'constructor' && typeof object[key] === 'function') {
    return;
  }

  if (key == '__proto__') {
    return;
  }

  return object[key];
}

/* harmony default export */ const app_client_safeGet = (client_safeGet);

;// ./node_modules/lodash-es/_assignValue.js



/** Used for built-in method references. */
var client_assignValue_objectProto = Object.prototype;

/** Used to check objects for own properties. */
var client_assignValue_hasOwnProperty = client_assignValue_objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function client_assignValue(object, key, value) {
  var objValue = object[key];
  if (!(client_assignValue_hasOwnProperty.call(object, key) && client_lodash_es_eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    app_client_baseAssignValue(object, key, value);
  }
}

/* harmony default export */ const app_client_assignValue = (client_assignValue);

;// ./node_modules/lodash-es/_copyObject.js



/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function client_copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      app_client_baseAssignValue(object, key, newValue);
    } else {
      app_client_assignValue(object, key, newValue);
    }
  }
  return object;
}

/* harmony default export */ const app_client_copyObject = (client_copyObject);

;// ./node_modules/lodash-es/_baseTimes.js
/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function client_baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/* harmony default export */ const app_client_baseTimes = (client_baseTimes);

;// ./node_modules/lodash-es/_isIndex.js
/** Used as references for various `Number` constants. */
var client_isIndex_MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var client_reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function client_isIndex(value, length) {
  var type = typeof value;
  length = length == null ? client_isIndex_MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && client_reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

/* harmony default export */ const app_client_isIndex = (client_isIndex);

;// ./node_modules/lodash-es/_arrayLikeKeys.js







/** Used for built-in method references. */
var client_arrayLikeKeys_objectProto = Object.prototype;

/** Used to check objects for own properties. */
var client_arrayLikeKeys_hasOwnProperty = client_arrayLikeKeys_objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function client_arrayLikeKeys(value, inherited) {
  var isArr = client_lodash_es_isArray(value),
      isArg = !isArr && client_lodash_es_isArguments(value),
      isBuff = !isArr && !isArg && client_lodash_es_isBuffer(value),
      isType = !isArr && !isArg && !isBuff && client_lodash_es_isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? app_client_baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || client_arrayLikeKeys_hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           app_client_isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

/* harmony default export */ const app_client_arrayLikeKeys = (client_arrayLikeKeys);

;// ./node_modules/lodash-es/_nativeKeysIn.js
/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function client_nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

/* harmony default export */ const app_client_nativeKeysIn = (client_nativeKeysIn);

;// ./node_modules/lodash-es/_baseKeysIn.js




/** Used for built-in method references. */
var client_baseKeysIn_objectProto = Object.prototype;

/** Used to check objects for own properties. */
var client_baseKeysIn_hasOwnProperty = client_baseKeysIn_objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function client_baseKeysIn(object) {
  if (!client_lodash_es_isObject(object)) {
    return app_client_nativeKeysIn(object);
  }
  var isProto = app_client_isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !client_baseKeysIn_hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

/* harmony default export */ const app_client_baseKeysIn = (client_baseKeysIn);

;// ./node_modules/lodash-es/keysIn.js




/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function client_keysIn(object) {
  return client_lodash_es_isArrayLike(object) ? app_client_arrayLikeKeys(object, true) : app_client_baseKeysIn(object);
}

/* harmony default export */ const client_lodash_es_keysIn = (client_keysIn);

;// ./node_modules/lodash-es/toPlainObject.js



/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */
function client_toPlainObject(value) {
  return app_client_copyObject(value, client_lodash_es_keysIn(value));
}

/* harmony default export */ const client_lodash_es_toPlainObject = (client_toPlainObject);

;// ./node_modules/lodash-es/_baseMergeDeep.js
















/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function client_baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = app_client_safeGet(object, key),
      srcValue = app_client_safeGet(source, key),
      stacked = stack.get(srcValue);

  if (stacked) {
    app_client_assignMergeValue(object, key, stacked);
    return;
  }
  var newValue = customizer
    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
    : undefined;

  var isCommon = newValue === undefined;

  if (isCommon) {
    var isArr = client_lodash_es_isArray(srcValue),
        isBuff = !isArr && client_lodash_es_isBuffer(srcValue),
        isTyped = !isArr && !isBuff && client_lodash_es_isTypedArray(srcValue);

    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (client_lodash_es_isArray(objValue)) {
        newValue = objValue;
      }
      else if (client_lodash_es_isArrayLikeObject(objValue)) {
        newValue = app_client_copyArray(objValue);
      }
      else if (isBuff) {
        isCommon = false;
        newValue = app_client_cloneBuffer(srcValue, true);
      }
      else if (isTyped) {
        isCommon = false;
        newValue = app_client_cloneTypedArray(srcValue, true);
      }
      else {
        newValue = [];
      }
    }
    else if (client_lodash_es_isPlainObject(srcValue) || client_lodash_es_isArguments(srcValue)) {
      newValue = objValue;
      if (client_lodash_es_isArguments(objValue)) {
        newValue = client_lodash_es_toPlainObject(objValue);
      }
      else if (!client_lodash_es_isObject(objValue) || client_lodash_es_isFunction(objValue)) {
        newValue = app_client_initCloneObject(srcValue);
      }
    }
    else {
      isCommon = false;
    }
  }
  if (isCommon) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack['delete'](srcValue);
  }
  app_client_assignMergeValue(object, key, newValue);
}

/* harmony default export */ const app_client_baseMergeDeep = (client_baseMergeDeep);

;// ./node_modules/lodash-es/_baseMerge.js








/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function client_baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  app_client_baseFor(source, function(srcValue, key) {
    stack || (stack = new app_client_Stack);
    if (client_lodash_es_isObject(srcValue)) {
      app_client_baseMergeDeep(object, source, key, srcIndex, client_baseMerge, customizer, stack);
    }
    else {
      var newValue = customizer
        ? customizer(app_client_safeGet(object, key), srcValue, (key + ''), object, source, stack)
        : undefined;

      if (newValue === undefined) {
        newValue = srcValue;
      }
      app_client_assignMergeValue(object, key, newValue);
    }
  }, client_lodash_es_keysIn);
}

/* harmony default export */ const app_client_baseMerge = (client_baseMerge);

;// ./node_modules/lodash-es/identity.js
/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function client_identity(value) {
  return value;
}

/* harmony default export */ const client_lodash_es_identity = (client_identity);

;// ./node_modules/lodash-es/_apply.js
/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function client_apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

/* harmony default export */ const app_client_apply = (client_apply);

;// ./node_modules/lodash-es/_overRest.js


/* Built-in method references for those with the same name as other `lodash` methods. */
var client_nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function client_overRest(func, start, transform) {
  start = client_nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = client_nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return app_client_apply(func, this, otherArgs);
  };
}

/* harmony default export */ const app_client_overRest = (client_overRest);

;// ./node_modules/lodash-es/constant.js
/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function client_constant(value) {
  return function() {
    return value;
  };
}

/* harmony default export */ const client_lodash_es_constant = (client_constant);

;// ./node_modules/lodash-es/_baseSetToString.js




/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var client_baseSetToString = !app_client_defineProperty ? client_lodash_es_identity : function(func, string) {
  return app_client_defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': client_lodash_es_constant(string),
    'writable': true
  });
};

/* harmony default export */ const app_client_baseSetToString = (client_baseSetToString);

;// ./node_modules/lodash-es/_shortOut.js
/** Used to detect hot functions by number of calls within a span of milliseconds. */
var client_HOT_COUNT = 800,
    client_HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var client_nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function client_shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = client_nativeNow(),
        remaining = client_HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= client_HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

/* harmony default export */ const app_client_shortOut = (client_shortOut);

;// ./node_modules/lodash-es/_setToString.js



/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var client_setToString = app_client_shortOut(app_client_baseSetToString);

/* harmony default export */ const app_client_setToString = (client_setToString);

;// ./node_modules/lodash-es/_baseRest.js




/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function client_baseRest(func, start) {
  return app_client_setToString(app_client_overRest(func, start, client_lodash_es_identity), func + '');
}

/* harmony default export */ const app_client_baseRest = (client_baseRest);

;// ./node_modules/lodash-es/_isIterateeCall.js





/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function client_isIterateeCall(value, index, object) {
  if (!client_lodash_es_isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (client_lodash_es_isArrayLike(object) && app_client_isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return client_lodash_es_eq(object[index], value);
  }
  return false;
}

/* harmony default export */ const app_client_isIterateeCall = (client_isIterateeCall);

;// ./node_modules/lodash-es/_createAssigner.js



/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function client_createAssigner(assigner) {
  return app_client_baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && app_client_isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

/* harmony default export */ const app_client_createAssigner = (client_createAssigner);

;// ./node_modules/lodash-es/merge.js



/**
 * This method is like `_.assign` except that it recursively merges own and
 * inherited enumerable string keyed properties of source objects into the
 * destination object. Source properties that resolve to `undefined` are
 * skipped if a destination value exists. Array and plain object properties
 * are merged recursively. Other objects and value types are overridden by
 * assignment. Source objects are applied from left to right. Subsequent
 * sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 0.5.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = {
 *   'a': [{ 'b': 2 }, { 'd': 4 }]
 * };
 *
 * var other = {
 *   'a': [{ 'c': 3 }, { 'e': 5 }]
 * };
 *
 * _.merge(object, other);
 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
 */
var client_merge = app_client_createAssigner(function(object, source, srcIndex) {
  app_client_baseMerge(object, source, srcIndex);
});

/* harmony default export */ const client_lodash_es_merge = (client_merge);

// EXTERNAL MODULE: ./app/ErrorTypes/index.ts
var client_ErrorTypes = __webpack_require__(85);
;// ./app/client/fetchJSON.ts
function client_regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ client_regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == client_fetchJSON_typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(client_fetchJSON_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function client_createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = client_fetchJSON_unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function client_fetchJSON_slicedToArray(r, e) { return client_fetchJSON_arrayWithHoles(r) || client_fetchJSON_iterableToArrayLimit(r, e) || client_fetchJSON_unsupportedIterableToArray(r, e) || client_fetchJSON_nonIterableRest(); }
function client_fetchJSON_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function client_fetchJSON_unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return client_fetchJSON_arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? client_fetchJSON_arrayLikeToArray(r, a) : void 0; } }
function client_fetchJSON_arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function client_fetchJSON_iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function client_fetchJSON_arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function client_fetchJSON_typeof(o) { "@babel/helpers - typeof"; return client_fetchJSON_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, client_fetchJSON_typeof(o); }
function client_asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function client_asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { client_asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { client_asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }


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
function client_fetchJSON(_x, _x2) {
  return app_client_fetchJSON.apply(this, arguments);
}
function app_client_fetchJSON() {
  app_client_fetchJSON = client_asyncToGenerator(/*#__PURE__*/client_regeneratorRuntime().mark(function _callee(url, data) {
    var options,
      asForm,
      fetchData,
      formData,
      res,
      json,
      _json$message,
      _args = arguments;
    return client_regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          options = _args.length > 2 && _args[2] !== undefined ? _args[2] : {};
          if (!(typeof url !== "string")) {
            _context.next = 3;
            break;
          }
          throw new TypeError("fetchJSON(url, data?, options?) : 'url' must be a string.");
        case 3:
          if (!(data !== undefined && (client_fetchJSON_typeof(data) !== "object" || data === null))) {
            _context.next = 5;
            break;
          }
          throw new TypeError("fetchJSON(url, data?, options?) : 'data' is optional, but must be an object.");
        case 5:
          if (!(options !== undefined && (client_fetchJSON_typeof(options) !== "object" || options === null))) {
            _context.next = 7;
            break;
          }
          throw new TypeError("fetchJSON(url, data?, options?) : 'options' is optional, but must be an object.");
        case 7:
          asForm = !!options.form;
          if (asForm) {
            fetchData = client_lodash_es_merge({
              method: "post"
            }, options);
          } else {
            fetchData = client_lodash_es_merge({
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
              var _ref2 = client_fetchJSON_slicedToArray(_ref, 2),
                key = _ref2[0],
                value = _ref2[1];
              if (value instanceof FileList || Array.isArray(value)) {
                var _iterator = client_createForOfIteratorHelper(value),
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
              throw new client_ErrorTypes.UnauthorizedError(unexpectedText);
            }
            if (res.status === 403) {
              throw new client_ErrorTypes.AccessDeniedError(unexpectedText);
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
          throw new client_ErrorTypes.UnauthorizedError(json.message);
        case 28:
          if (!(res.status === 403)) {
            _context.next = 30;
            break;
          }
          throw new client_ErrorTypes.AccessDeniedError(json.message);
        case 30:
          throw new Error((_json$message = json.message) !== null && _json$message !== void 0 ? _json$message : JSON.stringify(json));
        case 31:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[13, 19]]);
  }));
  return app_client_fetchJSON.apply(this, arguments);
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
function client_sget(key, defaultValue) {
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
function client_sset(key, value) {
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





var __webpack_exports__encodeForm = __webpack_exports__.encodeForm;
var __webpack_exports__encodeQueryString = __webpack_exports__.encodeQueryString;
var __webpack_exports__fetchJSON = __webpack_exports__.fetchJSON;
var __webpack_exports__sget = __webpack_exports__.sget;
var __webpack_exports__sset = __webpack_exports__.sset;
export { __webpack_exports__encodeForm as encodeForm, __webpack_exports__encodeQueryString as encodeQueryString, __webpack_exports__fetchJSON as fetchJSON, __webpack_exports__sget as sget, __webpack_exports__sset as sset };
