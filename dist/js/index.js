(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lodash"), require("json5"));
	else if(typeof define === 'function' && define.amd)
		define(["lodash", "json5"], factory);
	else if(typeof exports === 'object')
		exports["@admenergy/js-common"] = factory(require("lodash"), require("json5"));
	else
		root["@admenergy/js-common"] = factory(root["lodash"], root["json5"]);
})(this, (__WEBPACK_EXTERNAL_MODULE__773__, __WEBPACK_EXTERNAL_MODULE__741__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 6:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  getEnv: () => (/* reexport */ getEnv),
  runProcess: () => (/* reexport */ runProcess),
  sanitizePath: () => (/* reexport */ sanitizePath)
});

// EXTERNAL MODULE: external "json5"
var external_json5_ = __webpack_require__(741);
var external_json5_default = /*#__PURE__*/__webpack_require__.n(external_json5_);
;// ./src/server/getEnv.ts


/**
 * Get environment variable and parse it if applicable.
 * If ends in ".json5", it will be parsed as JSON5.
 *
 * @param variableName - Name of the environment variable. Case sensitive.
 * @returns The parsed environment variable, or null if not found or on parsing errors.
 *
 * @throws TypeError if the parameter types are bad.
 *
 * @example
 * const config = getEnv("CONFIG");
 * -> "Test value"
 *
 * @example
 * const config = getEnv("config.json5");
 * -> { foo: "Test value" }
 */
function getEnv(variableName) {
  if (typeof variableName !== "string") {
    throw new TypeError("getEnv(variableName) : 'variableName' must be a string.");
  }
  var envValue = process.env[variableName];
  if (typeof envValue !== "string") {
    console.log("\u26A0\uFE0F ", "Missing or invalid type for ".concat(variableName, " environment variable"));
    return null;
  }
  var parsedConfig = envValue.trim();
  if (!parsedConfig) {
    console.log("\u26A0\uFE0F ", "Variable ".concat(variableName, " is empty"));
    return null;
  }
  if (variableName.endsWith(".json5")) {
    try {
      // Check if the content needs to be base64 decoded
      var firstChar = parsedConfig[0];
      if (firstChar !== "{" && firstChar !== "[" && firstChar !== '"') {
        parsedConfig = Buffer.from(parsedConfig, "base64").toString("utf8");
      }

      // Parse JSON5
      return external_json5_default().parse(parsedConfig);
    } catch (error) {
      console.log("\u26A0\uFE0F ", "Failed to parse ".concat(variableName));
      return null;
    }
  }
  return parsedConfig;
}
;// external "child_process"
const external_child_process_namespaceObject = require("child_process");
// EXTERNAL MODULE: ./src/common/createPromise.ts
var createPromise = __webpack_require__(937);
;// ./src/server/runProcess.ts
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }


/**
 * Runs a script with parameters.
 *
 * @param script - The path to the script to run.
 * @param params - An array of parameters to pass to the script.
 *
 * @returns Resolves to an object containing the output of the script.
 *
 * @throws TypeError if the parameter types are incorrect.
 *
 * @example
 * const { log, stdout, stderr } = await runProcess("ls", ["-1", "~/"]);
 */
function runProcess(_x) {
  return _runProcess.apply(this, arguments);
}
function _runProcess() {
  _runProcess = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(script) {
    var params,
      log,
      stdout,
      stderr,
      pr,
      child,
      _args = arguments;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          params = _args.length > 1 && _args[1] !== undefined ? _args[1] : [];
          if (!(typeof script !== "string")) {
            _context.n = 1;
            break;
          }
          throw new TypeError("runProcess(script, params?) : 'script' must be a string.");
        case 1:
          if (Array.isArray(params)) {
            _context.n = 2;
            break;
          }
          throw new TypeError("runProcess(script, params?) : 'params' is optional, but must be an array of strings.");
        case 2:
          log = ""; // Both out/err in the order they appeared in
          stdout = "";
          stderr = "";
          pr = (0,createPromise.createPromise)();
          child = (0,external_child_process_namespaceObject.spawn)(script, params);
          child.on("exit", function (code) {
            var data = {
              log: log,
              stdout: stdout,
              stderr: stderr
            };
            if (code === 0) {
              pr.resolve(data);
            } else {
              console.log(log);
              pr.reject(new Error("Process exited with code ".concat(code)));
            }
          });
          child.stdout.setEncoding("utf8");
          child.stderr.setEncoding("utf8");
          child.stdout.on("data", function (data) {
            stdout += data;
            log += data;
          });
          child.stderr.on("data", function (data) {
            stderr += data;
            log += data;
          });
          return _context.a(2, pr.promise);
      }
    }, _callee);
  }));
  return _runProcess.apply(this, arguments);
}
;// external "path"
const external_path_namespaceObject = require("path");
;// ./src/server/sanitizePath.ts


/**
 * Sanitize Path
 *
 * Paths are only allowed to contain:
 *     spaces
 *     a-z
 *     A-Z
 *     0-9
 *     _
 *     ,
 *     .
 *     -
 *
 * @param workingDir - The working directory to resolve paths from.
 * @param filePath - The relative path to sanitize.
 *
 * @returns The resolved path.
 *
 * @throws TypeError if the parameter types are incorrect.
 * @throws Error if the path is outside the working directory.
 *
 * @example
 * const safePath = sanitizePath("/var/data", "Foo̵̔̐Bã̸r?.txt");
 * -> "/var/data/FooBar.txt"
 */
function sanitizePath(workingDir, filePath) {
  if (typeof workingDir !== "string") {
    throw new TypeError("sanitizePath(workingDir, filePath) : 'workingDir' must be a string.");
  }
  if (typeof filePath !== "string") {
    throw new TypeError("sanitizePath(workingDir, filePath) : 'filePath' must be a string.");
  }
  var resolvedPath = (0,external_path_namespaceObject.normalize)((0,external_path_namespaceObject.join)(workingDir, filePath
  // Protocol
  .replace(/^\w+:\/\//, "")

  // Split by path separator
  .split(/[\\/]/)

  // Remove invalid characters:
  //   - Decode URI encodings
  //   - Remove strange characters
  //   - Trim whitespace
  //   - Resolve . and ..
  .map(function (s) {
    return (0,external_path_namespaceObject.normalize)(decodeURIComponent(s).replace(/[^a-zA-Z0-9 _,.()-]/g, "").trim());
  }).join("/")));
  if (!resolvedPath.startsWith(workingDir)) {
    console.log("\u26D4 ", "Path traversal detected\n       Working Path: ".concat(workingDir, "\n      Resolved Path: ").concat(resolvedPath));
    throw new Error("Stay in your sandbox like a good kid!");
  }
  return resolvedPath;
}
;// ./src/server/index.ts




/***/ }),

/***/ 568:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

;// ./src/client/encodeForm.ts
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
;// ./src/client/encodeQueryString.ts
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
var external_lodash_ = __webpack_require__(773);
var external_lodash_default = /*#__PURE__*/__webpack_require__.n(external_lodash_);
// EXTERNAL MODULE: ./src/ErrorTypes/index.ts
var ErrorTypes = __webpack_require__(878);
;// ./src/client/fetchJSON.ts
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
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
  _fetchJSON = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(url, data) {
    var options,
      asForm,
      fetchData,
      formData,
      res,
      json,
      _json$message,
      _args = arguments,
      _t;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          options = _args.length > 2 && _args[2] !== undefined ? _args[2] : {};
          if (!(typeof url !== "string")) {
            _context.n = 1;
            break;
          }
          throw new TypeError("fetchJSON(url, data?, options?) : 'url' must be a string.");
        case 1:
          if (!(data !== undefined && (fetchJSON_typeof(data) !== "object" || data === null))) {
            _context.n = 2;
            break;
          }
          throw new TypeError("fetchJSON(url, data?, options?) : 'data' is optional, but must be an object.");
        case 2:
          if (!(options !== undefined && (fetchJSON_typeof(options) !== "object" || options === null))) {
            _context.n = 3;
            break;
          }
          throw new TypeError("fetchJSON(url, data?, options?) : 'options' is optional, but must be an object.");
        case 3:
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
          _context.n = 4;
          return fetch(url, fetchData);
        case 4:
          res = _context.v;
          _context.p = 5;
          _context.n = 6;
          return res.clone().json();
        case 6:
          json = _context.v;
          _context.n = 8;
          break;
        case 7:
          _context.p = 7;
          _t = _context.v;
          return _context.a(2, res.text().then(function (unexpectedText) {
            if (res.status === 401) {
              throw new ErrorTypes.UnauthorizedError(unexpectedText);
            }
            if (res.status === 403) {
              throw new ErrorTypes.AccessDeniedError(unexpectedText);
            }
            console.error(_t);
            throw new Error("[".concat(res.status, "] Unexpected non-json response: ") + unexpectedText);
          }));
        case 8:
          if (!(200 <= res.status && res.status < 300)) {
            _context.n = 9;
            break;
          }
          return _context.a(2, json);
        case 9:
          if (!(res.status === 401)) {
            _context.n = 10;
            break;
          }
          throw new ErrorTypes.UnauthorizedError(json.message);
        case 10:
          if (!(res.status === 403)) {
            _context.n = 11;
            break;
          }
          throw new ErrorTypes.AccessDeniedError(json.message);
        case 11:
          throw new Error((_json$message = json.message) !== null && _json$message !== void 0 ? _json$message : JSON.stringify(json));
        case 12:
          return _context.a(2);
      }
    }, _callee, null, [[5, 7]]);
  }));
  return _fetchJSON.apply(this, arguments);
}
;// ./src/client/sget.ts
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
;// ./src/client/sset.ts
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
;// ./src/client/index.ts






/***/ }),

/***/ 698:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  AccessDeniedError: () => (/* reexport */ ErrorTypes.AccessDeniedError),
  ConversionResult: () => (/* reexport */ ConversionResult),
  EventDispatcher: () => (/* reexport */ EventDispatcher),
  Limiter: () => (/* reexport */ Limiter),
  NotFoundError: () => (/* reexport */ ErrorTypes.NotFoundError),
  UnauthorizedError: () => (/* reexport */ ErrorTypes.UnauthorizedError),
  benchmark: () => (/* reexport */ benchmark),
  bestByteUnit: () => (/* reexport */ bestByteUnit),
  bestConversionHelper: () => (/* reexport */ bestConversionHelper),
  bestTimeUnitMS: () => (/* reexport */ bestTimeUnitMS),
  createPromise: () => (/* reexport */ createPromise.createPromise),
  getIn: () => (/* reexport */ getIn),
  getMime: () => (/* reexport */ getMime),
  isISODateString: () => (/* reexport */ isISODateString),
  performance: () => (/* reexport */ performance),
  removeDiacritics: () => (/* reexport */ removeDiacritics),
  sanitizeJSON: () => (/* reexport */ sanitizeJSON),
  sanitizeStringDisplay: () => (/* reexport */ sanitizeStringDisplay),
  sanitizeStringKey: () => (/* reexport */ sanitizeStringKey),
  setIn: () => (/* reexport */ setIn)
});

// EXTERNAL MODULE: ./src/ErrorTypes/index.ts
var ErrorTypes = __webpack_require__(878);
;// ./src/common/bestConversionHelper.ts
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
var ConversionResult = /*#__PURE__*/_createClass(function ConversionResult(value, round, unit) {
  _classCallCheck(this, ConversionResult);
  this.value = value;
  this.round = round;
  this.unit = unit;

  // Define the toString method as non-enumerable
  Object.defineProperty(this, "toString", {
    value: function value() {
      return "".concat(this.round, " ").concat(this.unit);
    },
    enumerable: false
  });
});

/**
 * Best Conversion Helper
 *
 * Helper to convert to human readable units
 *
 * @param startingNumber - Value to convert.
 * @param threshold - Multiplier before converting to the next unit (recommended: 1.2).
 * @param conversions - Array of conversions.
 * @param startingConversionsIndex - Which index in `conversions` represents `startingNumber`.
 *
 * @returns The best conversion in the conversion table.
 *
 * @throws TypeError if the parameter types are bad.
 *
 * @example
 * See bestByteUnit.js and bestTimeUnitMS.js
 */
function bestConversionHelper(startingNumber, threshold, conversions, startingConversionsIndex) {
  if (typeof startingNumber !== "number") {
    throw new TypeError("bestConversionHelper(startingNumber, threshold, conversions, startingConversionsIndex) : 'startingNumber' must be a number.");
  }
  if (typeof threshold !== "number") {
    throw new TypeError("bestConversionHelper(startingNumber, threshold, conversions, startingConversionsIndex) : 'threshold' must be a number.");
  }
  if (!Array.isArray(conversions)) {
    throw new TypeError("bestConversionHelper(startingNumber, threshold, conversions, startingConversionsIndex) : 'conversions' must be an array.");
  }
  if (typeof startingConversionsIndex !== "number") {
    throw new TypeError("bestConversionHelper(startingNumber, threshold, conversions, startingConversionsIndex) : 'startingConversionsIndex' must be a number.");
  }
  startingNumber = Math.abs(startingNumber);
  var i = startingConversionsIndex;
  while (0 < i && startingNumber <= conversions[i - 1].value * threshold) {
    i--;
  }
  while (i < conversions.length - 1 && conversions[i + 1].value * threshold <= startingNumber) {
    i++;
  }
  return conversions[i];
}
;// ./src/common/benchmark.ts
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }


/**
 * Runs a benchmark test on a function.
 *
 * @param {Function} f - The function to test.
 * @param {number} count - The number of times to run the function.
 *
 * @returns {Promise<string>} The result of the benchmark test.
 *
 * @throws {TypeError} If 'f' is not a function.
 * @throws {TypeError} If 'count' is not a number. Or less than 1.
 *
 * @example
 * console.log(`Date.now:`, await benchmark(
 *     () => { for (let i = 0; i < 100000; i++) Date.now(); },
 *     1000, true
 * ));
 * console.log(`performance.now:`, await benchmark(
 *     () => { for (let i = 0; i < 100000; i++) performance.now(); },
 *     1000, true
 * ));
 * -> Date.now: "2.53 K/s"
 * -> performance.now: "492.37 /s"
 */
function benchmark(_x, _x2) {
  return _benchmark.apply(this, arguments);
}
function _benchmark() {
  _benchmark = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(f, count) {
    var conversions, s, i, _i, e, ms, opsPerSec, conversion, value, round, unit;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          if (!(typeof f !== "function")) {
            _context.n = 1;
            break;
          }
          throw new TypeError("benchmark(f, count) : 'f' must be a function.");
        case 1:
          if (!(typeof count !== "number")) {
            _context.n = 2;
            break;
          }
          throw new TypeError("benchmark(f, count) : 'count' must be a number.");
        case 2:
          if (!(count < 1)) {
            _context.n = 3;
            break;
          }
          throw new TypeError("benchmark(f, count) : 'count' must be greater than 0.");
        case 3:
          conversions = [{
            unit: "/s",
            value: 1
          }, {
            unit: "K/s",
            value: 1000
          }, {
            unit: "M/s",
            value: 1000 * 1000
          }, {
            unit: "B/s",
            value: 1000 * 1000 * 1000
          }, {
            unit: "T/s",
            value: 1000 * 1000 * 1000 * 1000
          }];
          s = new Date();
          if (!(f.constructor.name === "AsyncFunction")) {
            _context.n = 7;
            break;
          }
          i = 0;
        case 4:
          if (!(i < count)) {
            _context.n = 6;
            break;
          }
          _context.n = 5;
          return f();
        case 5:
          i++;
          _context.n = 4;
          break;
        case 6:
          _context.n = 8;
          break;
        case 7:
          for (_i = 0; _i < count; _i++) f();
        case 8:
          e = new Date();
          ms = e.getTime() - s.getTime();
          opsPerSec = count / (ms / 1000);
          conversion = bestConversionHelper(opsPerSec, 1.2, conversions, 0);
          value = opsPerSec / conversion.value;
          round = Math.round(value * 100) / 100;
          unit = conversion.unit;
          return _context.a(2, "".concat(round, " ").concat(unit));
      }
    }, _callee);
  }));
  return _benchmark.apply(this, arguments);
}
;// ./src/common/bestByteUnit.ts


/**
 * Convert a byte number to human readable units.
 *
 * @param byte - Value to convert.
 *
 * @returns An instance of ConversionResult with value, round, unit, and a toString method that flattens the output.
 *
 * @throws TypeError if the parameter types are incorrect.
 *
 * @example
 * const result = bestByteUnit(2000000);
 * console.log(result.toString());
 * -> "1.91 MB"
 */
function bestByteUnit(_byte) {
  if (typeof _byte !== "number") {
    throw new TypeError("bestByteUnit(byte) : 'byte' must be a number.");
  }
  var conversions = [{
    unit: "B",
    value: 1
  }, {
    unit: "KB",
    value: 1 * 1024
  }, {
    unit: "MB",
    value: 1 * 1024 * 1024
  }, {
    unit: "GB",
    value: 1 * 1024 * 1024 * 1024
  }, {
    unit: "TB",
    value: 1 * 1024 * 1024 * 1024 * 1024
  }, {
    unit: "PB",
    value: 1 * 1024 * 1024 * 1024 * 1024 * 1024
  }, {
    unit: "EB",
    value: 1 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024
  }];
  var conversion = bestConversionHelper(_byte, 1.2, conversions, 0);
  var value = _byte / conversion.value;
  var round = Math.round(value * 100) / 100;
  return new ConversionResult(value, round, conversion.unit);
}
;// ./src/common/bestTimeUnitMS.ts


/**
 * Convert a millisecond number to human readable units.
 *
 * @param ms - Value to convert.
 *
 * @returns An instance of ConversionResult with value, round, unit, and a toString method that flattens the output.
 *
 * @throws TypeError if the parameter types are incorrect.
 *
 * @example
 * bestTimeUnitMS(4500000);
 * console.log(result.toString());
 * -> "1.25 h"
 */
function bestTimeUnitMS(ms) {
  if (typeof ms !== "number") {
    throw new TypeError("bestTimeUnitMS(ms) : 'ms' must be a number.");
  }
  var conversions = [{
    unit: "μs",
    value: 1 / 1000
  }, {
    unit: "ms",
    value: 1
  }, {
    unit: "s",
    value: 1 * 1000
  }, {
    unit: "m",
    value: 1 * 1000 * 60
  }, {
    unit: "h",
    value: 1 * 1000 * 60 * 60
  }, {
    unit: "d",
    value: 1 * 1000 * 60 * 60 * 24
  }];
  var conversion = bestConversionHelper(ms, 1.2, conversions, 1);
  var value = ms / conversion.value;
  var round = Math.round(value * 100) / 100;
  return new ConversionResult(value, round, conversion.unit);
}
// EXTERNAL MODULE: ./src/common/createPromise.ts
var createPromise = __webpack_require__(937);
;// ./src/common/EventDispatcher.ts
function EventDispatcher_typeof(o) { "@babel/helpers - typeof"; return EventDispatcher_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, EventDispatcher_typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function EventDispatcher_classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function EventDispatcher_defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, EventDispatcher_toPropertyKey(o.key), o); } }
function EventDispatcher_createClass(e, r, t) { return r && EventDispatcher_defineProperties(e.prototype, r), t && EventDispatcher_defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = EventDispatcher_toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function EventDispatcher_toPropertyKey(t) { var i = EventDispatcher_toPrimitive(t, "string"); return "symbol" == EventDispatcher_typeof(i) ? i : i + ""; }
function EventDispatcher_toPrimitive(t, r) { if ("object" != EventDispatcher_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != EventDispatcher_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * Event Dispatcher
 *
 * @example
 * // Using EventDispatcher directly
 * const dispatcher = new EventDispatcher<{ foo: number }>();
 * dispatcher.on("myevent", event => console.log(event));
 * dispatcher.trigger("myevent", { foo: 42 });
 * -> { foo: 42 }
 *
 * @example
 * // Extending EventDispatcher in a custom class
 * class MyClass extends EventDispatcher<{ foo: number }> {
 *     constructor() {
 *         super();
 *         this.on("myevent", this.handleMyEvent);
 *     }
 *
 *     handleMyEvent(event: { foo: number }) {
 *         console.log('Handled in MyClass:', event);
 *     }
 * }
 * const myClass = new MyClass();
 * myClass.trigger("myevent", { foo: 42 });
 * -> { foo: 42 }
 */
var EventDispatcher = /*#__PURE__*/function () {
  function EventDispatcher() {
    EventDispatcher_classCallCheck(this, EventDispatcher);
    _defineProperty(this, "handlers", new Map());
    _defineProperty(this, "batchedHandlers", new Map());
  }
  return EventDispatcher_createClass(EventDispatcher, [{
    key: "trigger",
    value: function trigger(type) {
      var _this = this;
      var event = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var handlers = this.handlers.get(type);
      if (!handlers) return Promise.resolve([]);
      var handlerPromises = [];
      var stopPropagation = function stopPropagation() {
        handlerPromises.splice(0, handlerPromises.length);
      };
      var eventData = _objectSpread(_objectSpread({}, event), {}, {
        stopPropagation: stopPropagation
      });
      handlers.forEach(function (handler) {
        if (_this.matchFilters(eventData, handler.filters)) {
          if (handler.batched) {
            if (!_this.batchedHandlers.has(type)) {
              _this.batchedHandlers.set(type, new Map());
              setTimeout(function () {
                var batchedHandlers = _this.batchedHandlers.get(type);
                if (batchedHandlers) {
                  batchedHandlers.forEach(function (events, handler) {
                    handlerPromises.push(handler.callback(events));
                  });
                  _this.batchedHandlers["delete"](type);
                }
              });
            }
            if (!_this.batchedHandlers.get(type).has(handler)) {
              _this.batchedHandlers.get(type).set(handler, []);
            }
            _this.batchedHandlers.get(type).get(handler).push(eventData);
          } else {
            handlerPromises.push(handler.callback(eventData));
          }
        }
      });
      return Promise.all(handlerPromises);
    }
  }, {
    key: "on",
    value: function on(type, callback) {
      var _this2 = this;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
        batched: false,
        filters: {}
      };
      var typeKeys = type.split(/\s+/);
      if (1 < typeKeys.length) {
        typeKeys.forEach(function (type) {
          if (type) _this2.on(type, callback, options);
        });
        return this;
      }
      var handlers = this.handlers.get(type);
      if (!handlers) {
        this.handlers.set(type, new Set());
      }
      this.handlers.get(type).add({
        callback: callback,
        filters: options.filters,
        batched: options.batched
      });
      return this;
    }
  }, {
    key: "off",
    value: function off(type, callback) {
      var _this3 = this;
      var typeKeys = type.split(/\s+/);
      if (1 < typeKeys.length) {
        typeKeys.forEach(function (type) {
          if (type) _this3.off(type, callback);
        });
        return this;
      }
      var handlers = this.handlers.get(type);
      if (handlers) {
        var removals = [];
        handlers.forEach(function (handler) {
          if (handler.callback === callback) {
            removals.push(handler);
          }
        });
        removals.forEach(function (handler) {
          return handlers["delete"](handler);
        });
        if (!handlers.size) {
          this.handlers["delete"](type);
        }
      }
      return this;
    }
  }, {
    key: "matchFilters",
    value: function matchFilters(event, filters) {
      for (var key in filters) {
        var filter = filters[key];
        var value = event[key];
        if (Array.isArray(filter)) {
          if (!filter.includes(value)) {
            return false;
          }
        } else if (filter instanceof RegExp) {
          if (!filter.test(value)) {
            return false;
          }
        } else {
          if (value !== filter) {
            return false;
          }
        }
      }
      return true;
    }
  }]);
}();

// Old JavaScript Code:
/*
const OldDeprecatedEventDispatcher = {
  trigger: function (type, e = {}) {
    if (typeof type !== "string") throw `Expected string for parameter: "type"`;

    const handlersBatchKey = `_handlers_${type}_batch`;
    const handlersKey = `_handlers_${type}`;
    const handlers = this[String(handlersKey)];

    if (handlers) {
      const handlerPromises = [];
      const originalStop = e.stopPropagation;
      let keepGoing = true;

      e.stopPropagation = () => {
        keepGoing = false;
        if (originalStop) originalStop();
      };

      handlers.forEach((f) => {
        if (!keepGoing) return;

        const match = (value, filter) => {
          if (typeof filter === "object" && filter instanceof RegExp) {
            return filter.test(value);
          } else if (Array.isArray(filter)) {
            let ret = false;
            for (let t of filter) {
              ret = ret || match(value, t);
              if (ret) break;
            }
            return ret;
          } else {
            return value === filter;
          }
        };

        let matched = true;
        for (let key in f.filters) {
          matched &= match(e[String(key)], f.filters[String(key)]);
          if (!matched) break;
        }
        if (!matched) return;
        if (f.batched) {
          if (!this[String(handlersBatchKey)]) {
            handlerPromises.push(
              new Promise((resolve, reject) => {
                this[String(handlersBatchKey)] = new Map();
                setTimeout(() => {
                  this[String(handlersBatchKey)].forEach((events, f) => {
                    resolve(f.callback(events));
                  });
                  this[String(handlersBatchKey)] = null;
                });
              }),
            );
          }
          if (!this[String(handlersBatchKey)].get(f))
            this[String(handlersBatchKey)].set(f, []);
          this[String(handlersBatchKey)].get(f).push({ target: this, ...e });
        } else {
          handlerPromises.push(f.callback(e));
        }
      });

      return Promise.all(handlerPromises);
    }
  },

  on: function (
    type,
    f,
    { batched, filters } = { batched: false, filters: {} },
  ) {
    if (typeof type !== "string") throw `Expected string for parameter: "type"`;
    if (typeof f !== "function") throw `Expected function for parameter: "f"`;

    if (type.split(" ").length > 1) {
      type.split(" ").forEach((type) => {
        this.on(type, f);
      });
      return;
    }

    const handlersKey = `_handlers_${type}`;
    let handlers = this[String(handlersKey)];

    if (!handlers) {
      handlers = this[String(handlersKey)] = new Set();
    }

    handlers.add({ callback: f, filters, batched });

    return this;
  },

  off: function (type, f) {
    if (typeof type !== "string") throw `Expected string for parameter: "type"`;
    if (typeof f !== "function") throw `Expected function for parameter: "f"`;

    if (type.split(" ").length > 1) {
      type.split(" ").forEach((type) => {
        this.off(type, f);
      });
      return;
    }

    const handlersKey = `_handlers_${type}`;
    const handlers = this[String(handlersKey)];

    if (handlers) {
      const removals = [];
      handlers.forEach((h) => {
        if (h.callback === f) removals.push(h);
      });
      removals.forEach((h) => handlers.delete(h));

      if (!handlers.size) {
        delete this[String(handlersKey)];
      }
    }

    return this;
  },
};
*/
;// ./src/common/getIn.ts
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function getIn(object, path, defaultValue) {
  var _iterator = _createForOfIteratorHelper(path),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var p = _step.value;
      if (object === null) {
        object = undefined;
        break;
      }
      var v = object[String(p)];
      if (typeof v === "undefined") {
        object = undefined;
        break;
      }
      object = v;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  if (typeof object === "undefined") return defaultValue;
  return object;
}
;// ./src/common/getMime.ts
/**
 * Returns the MIME type of a file based on its extension.
 *
 * @param fileName - The name of the file.
 * @returns The MIME type of the file.
 * @throws TypeError if the parameter types are bad.
 *
 * @example
 * const mime = getMime("Gachi.mp3");
 * -> "audio/mpeg"
 */
function getMime(fileName) {
  if (typeof fileName !== "string") {
    throw new TypeError("getMime(fileName) : 'fileName' must be a string.");
  }
  var name = fileName.toLowerCase();
  if (/(^|\.)(txt)$/.test(name)) return "text/plain";
  if (/(^|\.)(html|htm)$/.test(name)) return "text/html";
  if (/(^|\.)(js)$/.test(name)) return "text/javascript";
  if (/(^|\.)(json)$/.test(name)) return "application/json";
  if (/(^|\.)(pdf)$/.test(name)) return "application/pdf";
  if (/(^|\.)(bmp)$/.test(name)) return "image/bmp";
  if (/(^|\.)(gif)$/.test(name)) return "image/gif";
  if (/(^|\.)(jpg|jpeg)$/.test(name)) return "image/jpeg";
  if (/(^|\.)(png|apng)$/.test(name)) return "image/png";
  if (/(^|\.)(svg)$/.test(name)) return "image/svg+xml";
  if (/(^|\.)(webp)$/.test(name)) return "image/webp";
  if (/(^|\.)(ico)$/.test(name)) return "file/x-icon";
  if (/(^|\.)(aac)$/.test(name)) return "audio/aac";
  if (/(^|\.)(mp3)$/.test(name)) return "audio/mpeg";
  if (/(^|\.)(ogg)$/.test(name)) return "audio/ogg";
  if (/(^|\.)(wav)$/.test(name)) return "audio/wav";
  if (/(^|\.)(webm)$/.test(name)) return "audio/webm";
  if (/(^|\.)(mp4)$/.test(name)) return "video/mp4";
  if (/(^|\.)(mkv)$/.test(name)) return "video/x-matroska";
  if (/(^|\.)(otf)$/.test(name)) return "font/otf";
  if (/(^|\.)(ttf)$/.test(name)) return "font/ttf";
  if (/(^|\.)(woff)$/.test(name)) return "font/woff";
  if (/(^|\.)(woff2)$/.test(name)) return "font/woff2";
  return "application/octet-stream";
}
;// ./src/common/isISODateString.ts
/**
 * Checks if a given string looks like a valid ISO date string.
 *
 * @param str - The string to be checked.
 * @returns Looks like an ISO date string.
 *
 * @example
 * if (isISODateString("2020-01-01T00:00:00.000Z"))
 */
function isISODateString(str) {
  // JavaScript regex for ISO datetime: https://stackoverflow.com/a/3143231/1258524
  return /^(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))$/.test(str);
}
;// ./src/common/Limiter.ts
function Limiter_typeof(o) { "@babel/helpers - typeof"; return Limiter_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, Limiter_typeof(o); }
function _regeneratorValues(e) { if (null != e) { var t = e["function" == typeof Symbol && Symbol.iterator || "@@iterator"], r = 0; if (t) return t.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) return { next: function next() { return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e }; } }; } throw new TypeError(Limiter_typeof(e) + " is not iterable"); }
function Limiter_regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return Limiter_regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (Limiter_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, Limiter_regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, Limiter_regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), Limiter_regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", Limiter_regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), Limiter_regeneratorDefine2(u), Limiter_regeneratorDefine2(u, o, "Generator"), Limiter_regeneratorDefine2(u, n, function () { return this; }), Limiter_regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (Limiter_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function Limiter_regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } Limiter_regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { Limiter_regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, Limiter_regeneratorDefine2(e, r, n, t); }
function Limiter_asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function Limiter_asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { Limiter_asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { Limiter_asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function Limiter_classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function Limiter_defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, Limiter_toPropertyKey(o.key), o); } }
function Limiter_createClass(e, r, t) { return r && Limiter_defineProperties(e.prototype, r), t && Limiter_defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function Limiter_toPropertyKey(t) { var i = Limiter_toPrimitive(t, "string"); return "symbol" == Limiter_typeof(i) ? i : i + ""; }
function Limiter_toPrimitive(t, r) { if ("object" != Limiter_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != Limiter_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var Limiter = /*#__PURE__*/function () {
  function Limiter(limit) {
    Limiter_classCallCheck(this, Limiter);
    this.isRunning = false;
    this.limit = limit;
    this.queue = [];
    this.running = [];
  }
  return Limiter_createClass(Limiter, [{
    key: "waitForSlot",
    value: function () {
      var _waitForSlot = Limiter_asyncToGenerator(/*#__PURE__*/Limiter_regenerator().m(function _callee() {
        var promises;
        return Limiter_regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              if (!(this.running.length < this.limit)) {
                _context.n = 1;
                break;
              }
              return _context.a(2);
            case 1:
              promises = this.running.map(function (p) {
                return p.promise;
              });
              _context.n = 2;
              return Promise.any(promises);
            case 2:
              this.running = this.running.filter(function (p) {
                return !p.isDone;
              });
            case 3:
              return _context.a(2);
          }
        }, _callee, this);
      }));
      function waitForSlot() {
        return _waitForSlot.apply(this, arguments);
      }
      return waitForSlot;
    }()
  }, {
    key: "run",
    value: function () {
      var _run = Limiter_asyncToGenerator(/*#__PURE__*/Limiter_regenerator().m(function _callee2(callback) {
        var promise, tr, finishedPromise;
        return Limiter_regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              if (!(this.running.length < this.limit)) {
                _context2.n = 2;
                break;
              }
              promise = callback();
              tr = new TrackablePromise(promise);
              this.running.push(tr);
              _context2.n = 1;
              return promise;
            case 1:
              _context2.n = 3;
              break;
            case 2:
              finishedPromise = {
                callback: callback,
                promise: (0,createPromise.createPromise)()
              };
              this.queue.push(finishedPromise);
              this.processQueue();
              _context2.n = 3;
              return finishedPromise.promise.promise;
            case 3:
              return _context2.a(2);
          }
        }, _callee2, this);
      }));
      function run(_x) {
        return _run.apply(this, arguments);
      }
      return run;
    }()
  }, {
    key: "processQueue",
    value: function () {
      var _processQueue = Limiter_asyncToGenerator(/*#__PURE__*/Limiter_regenerator().m(function _callee3() {
        var _this = this;
        var _loop;
        return Limiter_regenerator().w(function (_context4) {
          while (1) switch (_context4.n) {
            case 0:
              if (!this.isRunning) {
                _context4.n = 1;
                break;
              }
              return _context4.a(2);
            case 1:
              this.isRunning = true;
              _loop = /*#__PURE__*/Limiter_regenerator().m(function _loop() {
                var finishedPromise, promise, tr;
                return Limiter_regenerator().w(function (_context3) {
                  while (1) switch (_context3.n) {
                    case 0:
                      finishedPromise = _this.queue.shift();
                      _context3.n = 1;
                      return _this.waitForSlot();
                    case 1:
                      promise = finishedPromise.callback();
                      tr = new TrackablePromise(promise);
                      _this.running.push(tr);
                      promise.then(function () {
                        finishedPromise.promise.resolve();
                      });
                    case 2:
                      return _context3.a(2);
                  }
                }, _loop);
              });
            case 2:
              if (!this.queue.length) {
                _context4.n = 4;
                break;
              }
              return _context4.d(_regeneratorValues(_loop()), 3);
            case 3:
              _context4.n = 2;
              break;
            case 4:
              this.isRunning = false;
            case 5:
              return _context4.a(2);
          }
        }, _callee3, this);
      }));
      function processQueue() {
        return _processQueue.apply(this, arguments);
      }
      return processQueue;
    }()
  }]);
}();
var TrackablePromise = /*#__PURE__*/function () {
  function TrackablePromise(promise) {
    var _this2 = this;
    Limiter_classCallCheck(this, TrackablePromise);
    this.pr = (0,createPromise.createPromise)();
    promise.then(function (value) {
      _this2.isResolved = true;
      _this2.isDone = true;
      _this2.pr.resolve(value);
    });
    promise["catch"](function (error) {
      _this2.isRejected = true;
      _this2.isDone = true;
      _this2.pr.reject(error);
    });
  }
  return Limiter_createClass(TrackablePromise, [{
    key: "promise",
    get: function get() {
      return this.pr.promise;
    }
  }]);
}();
;// ./src/common/performance.ts
function performance_regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return performance_regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (performance_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, performance_regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, performance_regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), performance_regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", performance_regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), performance_regeneratorDefine2(u), performance_regeneratorDefine2(u, o, "Generator"), performance_regeneratorDefine2(u, n, function () { return this; }), performance_regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (performance_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function performance_regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } performance_regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { performance_regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, performance_regeneratorDefine2(e, r, n, t); }
function performance_asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function performance_asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { performance_asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { performance_asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var performanceNames = {};

/**
 * Measures the performance of a given function or promise and logs the time taken to execute it.
 *
 * @param name - The name of the performance measurement.
 * @param fn - The function or promise to measure the performance of.
 * @returns A promise that resolves when the performance measurement is complete.
 * @throws TypeError If the name parameter is not a string or if the fn parameter is not a function or promise.
 *
 * @example
 * await performance("dosomething", async () => {
 *    // Do something.
 * });
 * -> dosomething: 0.0400390625 ms
 */
function performance(_x, _x2) {
  return _performance.apply(this, arguments);
}
function _performance() {
  _performance = performance_asyncToGenerator(/*#__PURE__*/performance_regenerator().m(function _callee(name, fn) {
    var n, count;
    return performance_regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          if (!(typeof name !== "string")) {
            _context.n = 1;
            break;
          }
          throw new TypeError("performance(name, fn) : 'name' must be a string.");
        case 1:
          if (typeof fn === "function") {
            _context.n = 2;
            break;
          }
          throw new TypeError("performance(name, fn) : 'fn' must be a function or a function returning a promise.");
        case 2:
          n = name;
          count = 1;
          while (n in performanceNames) {
            n = "".concat(name, " ").concat(count++);
          }
          performanceNames[n] = true;
          console.time(n);
          _context.p = 3;
          _context.n = 4;
          return fn();
        case 4:
          _context.p = 4;
          console.timeEnd(n);
          delete performanceNames[n];
          return _context.f(4);
        case 5:
          return _context.a(2);
      }
    }, _callee, null, [[3,, 4, 5]]);
  }));
  return _performance.apply(this, arguments);
}
;// ./src/common/removeDiacritics.ts
/**
 * Remove Diacritics
 *
 * Removes diacritics and other symbols, like Microsoft Smart Quotes.
 * For old JS compatibility, this function does not throw errors. It just returns the input if it's not a string.
 *
 * @param str The string to remove diacritics from
 *
 * @returns The string without diacritics
 *
 * @example
 * console.log(removeDiacritics("Héllö Wörld"));
 * -> "Hello World"
 */
function removeDiacritics(str) {
  //	http://stackoverflow.com/questions/286921/efficiently-replace-all-accented-characters-in-a-string

  if (typeof str !== "string") return str;
  for (var i = 0; i < defaultDiacriticsRemovalMap.length; i++) {
    str = str.replace(defaultDiacriticsRemovalMap[i].letters, defaultDiacriticsRemovalMap[i].base);
  }
  return str;
}
var defaultDiacriticsRemovalMap = [
// Breaks /r/n -> /n
{
  base: "\n",
  letters: /\r\n/g
},
// Unicode spaces and tabs
{
  base: " ",
  letters: /[\u0009\u00A0\u2000-\u200A\u202F\u205F\u3000]/g
},
// Microsoft smart quotes
{
  base: '"',
  letters: /[\u201C\u201D\u201E\u201F\u2033\u2036]/g
}, {
  base: "'",
  letters: /[`\u2018\u2019\u201A\u201B\u2032\u2035]/g
},
// Dashes
{
  base: "-",
  letters: /[\u002D\u2010-\u2015\u2212]/g
},
// Underscores
{
  base: "_",
  letters: /[\u005F\uFE4D-\uFE4F]/g
},
// Invisible formatting characters
{
  base: "",
  letters: /[\u0002\u0003]/g
},
// Letters
{
  base: "A",
  letters: /[\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F]/g
}, {
  base: "AA",
  letters: /[\uA732]/g
}, {
  base: "AE",
  letters: /[\u00C6\u01FC\u01E2]/g
}, {
  base: "AO",
  letters: /[\uA734]/g
}, {
  base: "AU",
  letters: /[\uA736]/g
}, {
  base: "AV",
  letters: /[\uA738\uA73A]/g
}, {
  base: "AY",
  letters: /[\uA73C]/g
}, {
  base: "B",
  letters: /[\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181]/g
}, {
  base: "C",
  letters: /[\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E]/g
}, {
  base: "D",
  letters: /[\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779]/g
}, {
  base: "DZ",
  letters: /[\u01F1\u01C4]/g
}, {
  base: "Dz",
  letters: /[\u01F2\u01C5]/g
}, {
  base: "E",
  letters: /[\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E]/g
}, {
  base: "F",
  letters: /[\u0046\u24BB\uFF26\u1E1E\u0191\uA77B]/g
}, {
  base: "G",
  letters: /[\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E]/g
}, {
  base: "H",
  letters: /[\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D]/g
}, {
  base: "I",
  letters: /[\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197]/g
}, {
  base: "J",
  letters: /[\u004A\u24BF\uFF2A\u0134\u0248]/g
}, {
  base: "K",
  letters: /[\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2]/g
}, {
  base: "L",
  letters: /[\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780]/g
}, {
  base: "LJ",
  letters: /[\u01C7]/g
}, {
  base: "Lj",
  letters: /[\u01C8]/g
}, {
  base: "M",
  letters: /[\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C]/g
}, {
  base: "N",
  letters: /[\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4]/g
}, {
  base: "NJ",
  letters: /[\u01CA]/g
}, {
  base: "Nj",
  letters: /[\u01CB]/g
}, {
  base: "O",
  letters: /[\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C]/g
}, {
  base: "OI",
  letters: /[\u01A2]/g
}, {
  base: "OO",
  letters: /[\uA74E]/g
}, {
  base: "OU",
  letters: /[\u0222]/g
}, {
  base: "P",
  letters: /[\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754]/g
}, {
  base: "Q",
  letters: /[\u0051\u24C6\uFF31\uA756\uA758\u024A]/g
}, {
  base: "R",
  letters: /[\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782]/g
}, {
  base: "S",
  letters: /[\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784]/g
}, {
  base: "T",
  letters: /[\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786]/g
}, {
  base: "TZ",
  letters: /[\uA728]/g
}, {
  base: "U",
  letters: /[\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244]/g
}, {
  base: "V",
  letters: /[\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245]/g
}, {
  base: "VY",
  letters: /[\uA760]/g
}, {
  base: "W",
  letters: /[\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72]/g
}, {
  base: "X",
  letters: /[\u0058\u24CD\uFF38\u1E8A\u1E8C]/g
}, {
  base: "Y",
  letters: /[\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE]/g
}, {
  base: "Z",
  letters: /[\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762]/g
}, {
  base: "a",
  letters: /[\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250]/g
}, {
  base: "aa",
  letters: /[\uA733]/g
}, {
  base: "ae",
  letters: /[\u00E6\u01FD\u01E3]/g
}, {
  base: "ao",
  letters: /[\uA735]/g
}, {
  base: "au",
  letters: /[\uA737]/g
}, {
  base: "av",
  letters: /[\uA739\uA73B]/g
}, {
  base: "ay",
  letters: /[\uA73D]/g
}, {
  base: "b",
  letters: /[\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253]/g
}, {
  base: "c",
  letters: /[\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184]/g
}, {
  base: "d",
  letters: /[\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A]/g
}, {
  base: "dz",
  letters: /[\u01F3\u01C6]/g
}, {
  base: "e",
  letters: /[\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD]/g
}, {
  base: "f",
  letters: /[\u0066\u24D5\uFF46\u1E1F\u0192\uA77C]/g
}, {
  base: "g",
  letters: /[\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F]/g
}, {
  base: "h",
  letters: /[\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265]/g
}, {
  base: "hv",
  letters: /[\u0195]/g
}, {
  base: "i",
  letters: /[\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131]/g
}, {
  base: "j",
  letters: /[\u006A\u24D9\uFF4A\u0135\u01F0\u0249]/g
}, {
  base: "k",
  letters: /[\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3]/g
}, {
  base: "l",
  letters: /[\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747]/g
}, {
  base: "lj",
  letters: /[\u01C9]/g
}, {
  base: "m",
  letters: /[\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F]/g
}, {
  base: "n",
  letters: /[\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5]/g
}, {
  base: "nj",
  letters: /[\u01CC]/g
}, {
  base: "o",
  letters: /[\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275]/g
}, {
  base: "oi",
  letters: /[\u01A3]/g
}, {
  base: "ou",
  letters: /[\u0223]/g
}, {
  base: "oo",
  letters: /[\uA74F]/g
}, {
  base: "p",
  letters: /[\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755]/g
}, {
  base: "q",
  letters: /[\u0071\u24E0\uFF51\u024B\uA757\uA759]/g
}, {
  base: "r",
  letters: /[\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783]/g
}, {
  base: "s",
  letters: /[\u0073\u24E2\uFF53\u00DF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B]/g
}, {
  base: "t",
  letters: /[\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787]/g
}, {
  base: "tz",
  letters: /[\uA729]/g
}, {
  base: "u",
  letters: /[\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289]/g
}, {
  base: "v",
  letters: /[\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C]/g
}, {
  base: "vy",
  letters: /[\uA761]/g
}, {
  base: "w",
  letters: /[\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73]/g
}, {
  base: "x",
  letters: /[\u0078\u24E7\uFF58\u1E8B\u1E8D]/g
}, {
  base: "y",
  letters: /[\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF]/g
}, {
  base: "z",
  letters: /[\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763]/g
}];
;// ./src/common/sanitizeJSON.ts
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || sanitizeJSON_unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function sanitizeJSON_createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = sanitizeJSON_unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function sanitizeJSON_unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return sanitizeJSON_arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? sanitizeJSON_arrayLikeToArray(r, a) : void 0; } }
function sanitizeJSON_arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function sanitizeJSON_typeof(o) { "@babel/helpers - typeof"; return sanitizeJSON_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, sanitizeJSON_typeof(o); }
/**
 * Creates a safe copy of a JSON-like object:
 * - No prototype chain (prevents prototype pollution)
 * - Removes dangerous keys (__proto__, constructor, prototype)
 * - No circular references
 * - Converts special objects to JSON-compatible formats:
 *   - Dates -> ISO strings
 *   - Sets -> Arrays
 *   - Maps -> Objects
 *
 * @param {*} obj - Any JavaScript value to sanitize
 * @param {Object} [options] - Optional configuration
 * @param {WeakMap<Object,boolean>} [options.seen=new WeakMap()] - WeakMap of seen objects to prevent circular refs
 * @returns {*} A clean copy safe for JSON operations and database queries
 * @throws {Error} If circular reference is detected
 */

function sanitizeJSON(obj) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _options$seen = options.seen,
    seen = _options$seen === void 0 ? new WeakSet() : _options$seen;

  // Handle null/undefined
  if (obj === null || obj === undefined) {
    return obj;
  }

  // Handle primitives
  if (sanitizeJSON_typeof(obj) !== "object") {
    return obj;
  }

  // Handle special objects
  if (obj instanceof Date) {
    return obj.toISOString();
  }
  if (obj instanceof Set) {
    return Array.from(obj).map(function (item) {
      return sanitizeJSON(item, {
        seen: seen
      });
    });
  }
  if (obj instanceof Map) {
    var _cleanObj = Object.create(null);
    var _iterator = sanitizeJSON_createForOfIteratorHelper(obj.entries()),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _step$value = _slicedToArray(_step.value, 2),
          _key = _step$value[0],
          value = _step$value[1];
        // Handle different key types
        if (sanitizeJSON_typeof(_key) === "symbol") {
          var _key$toString$match;
          var regexSymbolLabel = /^Symbol\((.*)\)$/;
          var desc = (_key$toString$match = _key.toString().match(regexSymbolLabel)) === null || _key$toString$match === void 0 ? void 0 : _key$toString$match[1];
          if (desc) {
            _cleanObj[desc] = sanitizeJSON(value, {
              seen: seen
            });
          }
        } else if (sanitizeJSON_typeof(_key) !== "object" && typeof _key !== "function") {
          // Handle other primitive types
          _cleanObj[String(_key)] = sanitizeJSON(value, {
            seen: seen
          });
        }
        // Skip objects and functions
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return _cleanObj;
  }

  // Detect circular references (only check objects)
  if (seen.has(obj)) {
    throw new Error("Circular reference detected");
  }
  seen.add(obj);

  // Handle arrays
  if (Array.isArray(obj)) {
    return obj.map(function (item) {
      return sanitizeJSON(item, {
        seen: seen
      });
    });
  }

  // Handle objects
  var cleanObj = Object.create(null);
  for (var _i = 0, _Object$keys = Object.keys(obj); _i < _Object$keys.length; _i++) {
    var _key2 = _Object$keys[_i];
    if (_key2 === "__proto__" || _key2 === "constructor" || _key2 === "prototype") {
      continue;
    }
    try {
      cleanObj[_key2] = sanitizeJSON(obj[_key2], {
        seen: seen
      });
    } catch (error) {
      if (false) // removed by dead control flow
{}
      continue;
    }
  }
  return cleanObj;
}
;// ./src/common/sanitizeStringDisplay.ts


/**
 * Sanitize String Display
 *
 * Removes unicode and most symbols from a string for data sanity.
 *
 * @param str The string to sanitize
 *
 * @returns The sanitized string
 *
 * @example
 * console.log(sanitizeStringDisplay("   Héllö  “Wörld”!\t\t\t");
 * -> 'Hello  "World"!'
 */
function sanitizeStringDisplay(str) {
  // Demote diacritic characters, like: é -> e
  str = removeDiacritics(str);

  // Remove uncommon symbols
  str = str.replace(/[^a-zA-Z0-9 \\/()[\]{}<>\-_+="';:,.?!@#$%^&*]+/g, "");

  // Trim begin and end of string
  str = str.trim();
  return str;
}
;// ./src/common/sanitizeStringKey.ts


/**
 * Sanitize String Key
 *
 * Removes all unicode and symbols from a string for use as a key.
 * It also camelCases the string.
 *
 * @param str The string to sanitize
 *
 * @returns The sanitized string
 *
 * @example
 * console.log(sanitizeStringKey("   Héllö  “Wörld”!\t\t\t");
 * -> 'helloWorld'
 */
function sanitizeStringKey(str) {
  // Demote diacritic characters, like: é -> e
  str = sanitizeStringDisplay(str);

  // Replace symbols with "|"
  str = str.replace(/[^a-zA-Z0-9]+/g, "|");

  // Trim begin and end of string
  str = str.replace(/^\|+|\|+$/g, "");

  // Split for map with camelCase()
  str = str.split("|").map(camelCase).join("");

  // Lower first character
  str = str[0].toLowerCase() + str.slice(1);
  return str;
}
function camelCase(word) {
  return word[0].toUpperCase() + word.slice(1);
}
;// ./src/common/setIn.ts
function setIn_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function setIn_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? setIn_ownKeys(Object(t), !0).forEach(function (r) { setIn_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : setIn_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function setIn_defineProperty(e, r, t) { return (r = setIn_toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function setIn_toPropertyKey(t) { var i = setIn_toPrimitive(t, "string"); return "symbol" == setIn_typeof(i) ? i : i + ""; }
function setIn_toPrimitive(t, r) { if ("object" != setIn_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != setIn_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || setIn_unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return setIn_arrayLikeToArray(r); }
function _toArray(r) { return setIn_arrayWithHoles(r) || _iterableToArray(r) || setIn_unsupportedIterableToArray(r) || setIn_nonIterableRest(); }
function setIn_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function setIn_unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return setIn_arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? setIn_arrayLikeToArray(r, a) : void 0; } }
function setIn_arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function setIn_arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function setIn_typeof(o) { "@babel/helpers - typeof"; return setIn_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, setIn_typeof(o); }
function setIn(source, path, value) {
  if (typeof source === "undefined") {
    throw new TypeError("Can't use setIn on undefined.");
  }
  if (source === null) {
    throw new TypeError("Can't use setIn on null.");
  }
  if (setIn_typeof(source) !== "object") {
    throw new TypeError("setIn doesn't operate on ".concat(setIn_typeof(source), "."));
  }
  if (path.length === 0) {
    throw new TypeError("Can't use setIn to replace the root.");
  }
  return traverse(source, path, value).node;
  function traverse(source, path, value) {
    var _path = _toArray(path),
      p = _path[0],
      pathRest = _path.slice(1);
    if (pathRest.length === 0) {
      if (source[String(p)] === value) {
        return {
          node: source,
          changed: false
        };
      } else {
        var ret;
        if (source) {
          ret = Array.isArray(source) ? _toConsumableArray(source) : setIn_objectSpread({}, source);
        } else {
          ret = Number.isInteger(Number(p)) ? [] : {};
        }
        if (typeof value === "undefined") {
          if (Array.isArray(ret) && Number.isInteger(Number(p))) {
            ret.splice(Number(p), 1);
          } else {
            delete ret[String(p)];
          }
        } else {
          ret[String(p)] = value;
        }
        return {
          node: ret,
          changed: true
        };
      }
    } else {
      if (typeof source[String(p)] === "undefined" || source[String(p)] === null) {
        var np = pathRest[0];
        var temp = Number.isInteger(Number(np)) ? [] : {};
        var _traverse = traverse(temp, pathRest, value),
          node = _traverse.node,
          changed = _traverse.changed;
        var newsource;
        if (source) {
          newsource = Array.isArray(source) ? _toConsumableArray(source) : setIn_objectSpread({}, source);
        } else {
          newsource = Number.isInteger(Number(np)) ? _toConsumableArray(source) : setIn_objectSpread({}, source);
        }
        newsource[String(p)] = node;
        return {
          node: newsource,
          changed: changed
        };
      } else {
        var _traverse2 = traverse(source[String(p)], pathRest, value),
          _node = _traverse2.node,
          _changed = _traverse2.changed;
        if (_changed) {
          var _ret = Array.isArray(source) ? _toConsumableArray(source) : setIn_objectSpread({}, source);
          _ret[String(p)] = _node;
          return {
            node: _ret,
            changed: true
          };
        } else {
          return {
            node: source,
            changed: _changed
          };
        }
      }
    }
  }
}
;// ./src/common/index.ts
 // TODO: move one scope higher

















/***/ }),

/***/ 741:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__741__;

/***/ }),

/***/ 773:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__773__;

/***/ }),

/***/ 878:
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

/***/ 937:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createPromise: () => (/* binding */ createPromise)
/* harmony export */ });
/**
 * Promise Helper
 *
 * Returns an object with an unresolved promise, resolve(), & reject() exposed to you. Suitable for non-promise code, like FileReader.
 *
 * @returns An object with properties: promise, a Promise<any> that can be awaited; resolve, a function to resolve the promise; and reject, a function to reject the promise.
 *
 * @example
 * const pr = createPromise();
 * const reader = new FileReader();
 * reader.addEventListener("loadend", pr.resolve);
 * reader.readAsArrayBuffer(file);
 * await pr.promise;
 * return stuff;
 */
function createPromise() {
  var resolve;
  var reject;
  var promise = new Promise(function (rs, rj) {
    resolve = rs;
    reject = rj;
  });
  return {
    promise: promise,
    resolve: resolve,
    reject: reject
  };
}

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
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ErrorTypes: () => (/* reexport module object */ _ErrorTypes__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   client: () => (/* reexport module object */ _client__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   common: () => (/* reexport module object */ _common__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   server: () => (/* reexport module object */ _server__WEBPACK_IMPORTED_MODULE_3__)
/* harmony export */ });
/* harmony import */ var _ErrorTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(878);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(568);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(698);
/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);








/******/ 	return __webpack_exports__;
/******/ })()
;
});