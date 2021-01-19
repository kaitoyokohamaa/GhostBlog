module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/posts/[id].tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/index.tsx":
/*!***********************!*\
  !*** ./lib/index.tsx ***!
  \***********************/
/*! exports provided: client, getAllPosts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"client\", function() { return client; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAllPosts\", function() { return getAllPosts; });\n/* harmony import */ var contentful__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! contentful */ \"contentful\");\n/* harmony import */ var contentful__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(contentful__WEBPACK_IMPORTED_MODULE_0__);\n\nconst client = contentful__WEBPACK_IMPORTED_MODULE_0__[\"createClient\"]({\n  space: \"i3nyh8bsdwg1\",\n  accessToken: \"XroXvHukN3ny7LTcuDRRT7E1QoKJHCOA8RDblveeoRw\"\n});\nconst getAllPosts = async () => {\n  const entries = await client.getEntries({\n    content_type: \"post\"\n  });\n\n  if (entries.items) {\n    return entries.items;\n  }\n\n  console.log(`Error getting .`);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvY2xpZW50LnRzeD8wYWQ1Il0sIm5hbWVzIjpbImNsaWVudCIsImNvbnRlbnRmdWwiLCJzcGFjZSIsInByb2Nlc3MiLCJhY2Nlc3NUb2tlbiIsIk5FWFRfUFVCTElDX0NPTlRFTlRGVUxfQUNDRVNTX1RPS0VOIiwiZ2V0QWxsUG9zdHMiLCJlbnRyaWVzIiwiZ2V0RW50cmllcyIsImNvbnRlbnRfdHlwZSIsIml0ZW1zIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sTUFBTUEsTUFBTSxHQUFHQyx1REFBQSxDQUF3QjtBQUM1Q0MsT0FBSyxFQUFFQyxjQURxQztBQUU1Q0MsYUFBVyxFQUFFRCw2Q0FBK0NFO0FBRmhCLENBQXhCLENBQWY7QUFJQSxNQUFNQyxXQUFXLEdBQUcsWUFBWTtBQUNyQyxRQUFNQyxPQUFPLEdBQUcsTUFBTVAsTUFBTSxDQUFDUSxVQUFQLENBQWtCO0FBQ3RDQyxnQkFBWSxFQUFFO0FBRHdCLEdBQWxCLENBQXRCOztBQUlBLE1BQUlGLE9BQU8sQ0FBQ0csS0FBWixFQUFtQjtBQUNqQixXQUFPSCxPQUFPLENBQUNHLEtBQWY7QUFDRDs7QUFDREMsU0FBTyxDQUFDQyxHQUFSLENBQWEsaUJBQWI7QUFDRCxDQVRNIiwiZmlsZSI6Ii4vbGliL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGNvbnRlbnRmdWwgZnJvbSBcImNvbnRlbnRmdWxcIjtcblxuZXhwb3J0IGNvbnN0IGNsaWVudCA9IGNvbnRlbnRmdWwuY3JlYXRlQ2xpZW50KHtcbiAgc3BhY2U6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0NPTlRFTlRGVUxfU1BBQ0VfSUQsXG4gIGFjY2Vzc1Rva2VuOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19DT05URU5URlVMX0FDQ0VTU19UT0tFTixcbn0pO1xuZXhwb3J0IGNvbnN0IGdldEFsbFBvc3RzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBlbnRyaWVzID0gYXdhaXQgY2xpZW50LmdldEVudHJpZXMoe1xuICAgIGNvbnRlbnRfdHlwZTogXCJwb3N0XCIsXG4gIH0pO1xuXG4gIGlmIChlbnRyaWVzLml0ZW1zKSB7XG4gICAgcmV0dXJuIGVudHJpZXMuaXRlbXM7XG4gIH1cbiAgY29uc29sZS5sb2coYEVycm9yIGdldHRpbmcgLmApO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/index.tsx\n");

/***/ }),

/***/ "./pages/posts/[id].tsx":
/*!******************************!*\
  !*** ./pages/posts/[id].tsx ***!
  \******************************/
/*! exports provided: getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib */ \"./lib/index.tsx\");\n\nvar _jsxFileName = \"/Users/yoko/Desktop/GhostBlog/pages/posts/[id].tsx\";\n\nasync function getStaticProps() {\n  const posts = await Object(_lib__WEBPACK_IMPORTED_MODULE_1__[\"getAllPosts\"])();\n  return {\n    revalidate: 1,\n    props: {\n      posts\n    }\n  };\n}\n\nconst Post = ({\n  posts\n}) => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 12,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wb3N0cy8udHN4P2JiYjQiXSwibmFtZXMiOlsiZ2V0U3RhdGljUHJvcHMiLCJwb3N0cyIsImdldEFsbFBvc3RzIiwicmV2YWxpZGF0ZSIsInByb3BzIiwiUG9zdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVBO0FBRU8sZUFBZUEsY0FBZixHQUFnQztBQUNyQyxRQUFNQyxLQUFLLEdBQUcsTUFBTUMsd0RBQVcsRUFBL0I7QUFDQSxTQUFPO0FBQUVDLGNBQVUsRUFBRSxDQUFkO0FBQWlCQyxTQUFLLEVBQUU7QUFBRUg7QUFBRjtBQUF4QixHQUFQO0FBQ0Q7O0FBRUQsTUFBTUksSUFBSSxHQUFHLENBQUM7QUFBRUo7QUFBRixDQUFELEtBQWU7QUFDMUIsc0JBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBT0QsQ0FSRDs7QUFVZUksbUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy9baWRdLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IEVycm9yUGFnZSBmcm9tIFwibmV4dC9lcnJvclwiO1xuaW1wb3J0IHsgZ2V0QWxsUG9zdHMgfSBmcm9tIFwiLi4vLi4vbGliXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgY29uc3QgcG9zdHMgPSBhd2FpdCBnZXRBbGxQb3N0cygpO1xuICByZXR1cm4geyByZXZhbGlkYXRlOiAxLCBwcm9wczogeyBwb3N0cyB9IH07XG59XG5cbmNvbnN0IFBvc3QgPSAoeyBwb3N0cyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHsvKiB7cG9zdHM/Lm1hcCgoeyBmaWVsZHMgfSkgPT4ge1xuICAgICAgICByZXR1cm4gPGgxPntmaWVsZHMudGl0bGV9PC9oMT47XG4gICAgICB9KX0gKi99XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb3N0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/posts/[id].tsx\n");

/***/ }),

/***/ "contentful":
/*!*****************************!*\
  !*** external "contentful" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"contentful\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb250ZW50ZnVsXCI/OWU0YSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJjb250ZW50ZnVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29udGVudGZ1bFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///contentful\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });