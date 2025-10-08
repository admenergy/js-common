import * as __WEBPACK_EXTERNAL_MODULE_json5__ from "json5";
import { createRequire as __WEBPACK_EXTERNAL_createRequire } from "node:module";
const __WEBPACK_EXTERNAL_createRequire_require = __WEBPACK_EXTERNAL_createRequire(import.meta.url);
/******/ var __webpack_modules__ = ({

/***/ 550:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createPromise: () => (/* binding */ createPromise)
/* harmony export */ });
/* harmony import */ var _common_bestTimeUnitMS__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(738);

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
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    timeout = _ref.timeout;
  var resolve;
  var reject;
  var timeoutId;
  var promise = new Promise(function (rs, rj) {
    resolve = function resolve(value) {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      rs(value);
    };
    reject = function reject(reason) {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      rj(reason);
    };
  });
  if (timeout) {
    var timeoutValue;
    if (typeof timeout === "number") {
      timeoutValue = timeout;
    } else {
      timeoutValue = new Date(timeout).getTime() - Date.now();
    }
    var t = (0,_common_bestTimeUnitMS__WEBPACK_IMPORTED_MODULE_0__.bestTimeUnitMS)(timeoutValue);
    var error = new Error("Promise timed out after ".concat(t.round, " ").concat(t.unit, "."));
    timeoutId = setTimeout(function () {
      reject(error);
    }, timeoutValue);
  }
  return {
    promise: promise,
    resolve: resolve,
    reject: reject
  };
}

/***/ }),

/***/ 738:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bestTimeUnitMS: () => (/* binding */ bestTimeUnitMS)
/* harmony export */ });
/* harmony import */ var _bestConversionHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(777);


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
  var conversion = (0,_bestConversionHelper__WEBPACK_IMPORTED_MODULE_0__.bestConversionHelper)(ms, 1.2, conversions, 1);
  var value = ms / conversion.value;
  var round = Math.round(value * 100) / 100;
  return new _bestConversionHelper__WEBPACK_IMPORTED_MODULE_0__.ConversionResult(value, round, conversion.unit);
}

/***/ }),

/***/ 777:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConversionResult: () => (/* binding */ ConversionResult),
/* harmony export */   bestConversionHelper: () => (/* binding */ bestConversionHelper)
/* harmony export */ });
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

;// external "json5"
const external_json5_namespaceObject = __WEBPACK_EXTERNAL_MODULE_json5__;
;// ./app/server/getEnv.ts


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
      return external_json5_namespaceObject["default"].parse(parsedConfig);
    } catch (error) {
      console.log("\u26A0\uFE0F ", "Failed to parse ".concat(variableName));
      return null;
    }
  }
  return parsedConfig;
}
;// external "child_process"
const external_child_process_namespaceObject = __WEBPACK_EXTERNAL_createRequire_require("child_process");
// EXTERNAL MODULE: ./app/common/createPromise.ts
var createPromise = __webpack_require__(550);
;// ./app/server/runProcess.ts
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
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
const external_path_namespaceObject = __WEBPACK_EXTERNAL_createRequire_require("path");
;// ./app/server/sanitizePath.ts


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
;// ./app/server/index.ts



export { getEnv, runProcess, sanitizePath };
