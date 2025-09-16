(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("json5"));
	else if(typeof define === 'function' && define.amd)
		define(["json5"], factory);
	else if(typeof exports === 'object')
		exports["@admenergy/js-common"] = factory(require("json5"));
	else
		root["@admenergy/js-common"] = factory(root["json5"]);
})(this, (__WEBPACK_EXTERNAL_MODULE__741__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 550:
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

/***/ }),

/***/ 741:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__741__;

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
  getEnv: () => (/* reexport */ getEnv),
  runProcess: () => (/* reexport */ runProcess),
  sanitizePath: () => (/* reexport */ sanitizePath)
});

// EXTERNAL MODULE: external "json5"
var external_json5_ = __webpack_require__(741);
var external_json5_default = /*#__PURE__*/__webpack_require__.n(external_json5_);
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
const external_path_namespaceObject = require("path");
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



/******/ 	return __webpack_exports__;
/******/ })()
;
});