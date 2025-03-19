/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 317:
/***/ ((module) => {

module.exports = require("child_process");

/***/ }),

/***/ 369:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _getEnv = __webpack_require__(430);
Object.keys(_getEnv).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _getEnv[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _getEnv[key];
    }
  });
});
var _runProcess = __webpack_require__(839);
Object.keys(_runProcess).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _runProcess[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _runProcess[key];
    }
  });
});
var _sanitizePath = __webpack_require__(509);
Object.keys(_sanitizePath).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _sanitizePath[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _sanitizePath[key];
    }
  });
});

/***/ }),

/***/ 430:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getEnv = getEnv;
var _json = _interopRequireDefault(__webpack_require__(899));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
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
      return _json["default"].parse(parsedConfig);
    } catch (error) {
      console.log("\u26A0\uFE0F ", "Failed to parse ".concat(variableName));
      return null;
    }
  }
  return parsedConfig;
}

/***/ }),

/***/ 509:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.sanitizePath = sanitizePath;
var _path = __webpack_require__(928);
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
  var resolvedPath = (0, _path.normalize)((0, _path.join)(workingDir, filePath
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
    return (0, _path.normalize)(decodeURIComponent(s).replace(/[^a-zA-Z0-9 _,.()-]/g, "").trim());
  }).join("/")));
  if (!resolvedPath.startsWith(workingDir)) {
    console.log("\u26D4 ", "Path traversal detected\n       Working Path: ".concat(workingDir, "\n      Resolved Path: ").concat(resolvedPath));
    throw new Error("Stay in your sandbox like a good kid!");
  }
  return resolvedPath;
}

/***/ }),

/***/ 550:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.createPromise = createPromise;
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

/***/ 839:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.runProcess = runProcess;
var _child_process = __webpack_require__(317);
var _createPromise = __webpack_require__(550);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
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
  _runProcess = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(script) {
    var params,
      log,
      stdout,
      stderr,
      pr,
      child,
      _args = arguments;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          params = _args.length > 1 && _args[1] !== undefined ? _args[1] : [];
          if (!(typeof script !== "string")) {
            _context.next = 3;
            break;
          }
          throw new TypeError("runProcess(script, params?) : 'script' must be a string.");
        case 3:
          if (Array.isArray(params)) {
            _context.next = 5;
            break;
          }
          throw new TypeError("runProcess(script, params?) : 'params' is optional, but must be an array of strings.");
        case 5:
          log = ""; // Both out/err in the order they appeared in
          stdout = "";
          stderr = "";
          pr = (0, _createPromise.createPromise)();
          child = (0, _child_process.spawn)(script, params);
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
          return _context.abrupt("return", pr.promise);
        case 16:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _runProcess.apply(this, arguments);
}

/***/ }),

/***/ 899:
/***/ ((module) => {

module.exports = require("json5");

/***/ }),

/***/ 928:
/***/ ((module) => {

module.exports = require("path");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(369);
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;