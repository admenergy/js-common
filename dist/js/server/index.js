(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("json5"));
	else if(typeof define === 'function' && define.amd)
		define(["json5"], factory);
	else if(typeof exports === 'object')
		exports["@admenergy/js-common"] = factory(require("json5"));
	else
		root["@admenergy/js-common"] = factory(root["json5"]);
})(global, (__WEBPACK_EXTERNAL_MODULE__741__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
  getEnv: () => (/* reexport */ getEnv)
});

// EXTERNAL MODULE: external "json5"
var external_json5_ = __webpack_require__(741);
var external_json5_default = /*#__PURE__*/__webpack_require__.n(external_json5_);
;// CONCATENATED MODULE: ./src/server/getEnv.ts


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
;// CONCATENATED MODULE: ./src/server/index.ts

/******/ 	return __webpack_exports__;
/******/ })()
;
});