(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static\\development\\pages\\about.js"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fabout&absolutePagePath=C%3A%5CUsers%5Ctsr%5CDesktop%5Cnextjs-tst%5Cpages%5Cabout.js!./":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fabout&absolutePagePath=C%3A%5CUsers%5Ctsr%5CDesktop%5Cnextjs-tst%5Cpages%5Cabout.js ***!
  \******************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/about",
      function () {
        return __webpack_require__(/*! ./pages/about.js */ "./pages/about.js");
      }
    ]);
  

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_5030f387d328e4415785 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_5030f387d328e4415785 */ "dll-reference dll_5030f387d328e4415785"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\tsr\\Desktop\\nextjs-tst\\pages\\about.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var About = function About() {
  return __jsx("section", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2,
      columnNumber: 5
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 9
    }
  }, "About Nextjs"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, " A Next.js application can be easily exported as a static site, which can be deployed on one of the super fast static site hosts, like Netlify or Firebase Hosting, without the need to set up a Node environment. The process requires you to declare the URLs that compose the site, but it\u2019s a straightforward process."), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, "A Next.js application can be easily exported as a static site, which can be deployed on one of the super fast static site hosts, like Netlify or Firebase Hosting, without the need to set up a Node environment. The process requires you to declare the URLs that compose the site, but it\u2019s a straightforward process. A Next.js application can be easily exported as a static site, which can be deployed on one of the super fast static site hosts, like Netlify or Firebase Hosting, without the need to set up a Node environment. The process requires you to declare the URLs that compose the site, but it\u2019s a straightforward processA Next.js application can be easily exported as a static site, which can be deployed on one of the super fast static site hosts, like Netlify or Firebase Hosting, without the need to set up a Node environment. The process requires you to declare the URLs that compose the site, but it\u2019s a straightforward process...A Next.js application can be easily exported as a static site, which can be deployed on one of the super fast static site hosts, like Netlify or Firebase Hosting, without the need to set up a Node environment. The process requires you to declare the URLs that compose the site, but it\u2019s a straightforward process"));
};

_c = About;
/* harmony default export */ __webpack_exports__["default"] = (About);

var _c;

$RefreshReg$(_c, "About");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ 2:
/*!**********************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2Fabout&absolutePagePath=C%3A%5CUsers%5Ctsr%5CDesktop%5Cnextjs-tst%5Cpages%5Cabout.js ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2Fabout&absolutePagePath=C%3A%5CUsers%5Ctsr%5CDesktop%5Cnextjs-tst%5Cpages%5Cabout.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fabout&absolutePagePath=C%3A%5CUsers%5Ctsr%5CDesktop%5Cnextjs-tst%5Cpages%5Cabout.js!./");


/***/ }),

/***/ "dll-reference dll_5030f387d328e4415785":
/*!*******************************************!*\
  !*** external "dll_5030f387d328e4415785" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_5030f387d328e4415785;

/***/ })

},[[2,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgZGxsXzUwMzBmMzg3ZDMyOGU0NDE1Nzg1Iiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9oYXJtb255LW1vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9hYm91dC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkbGxfNTAzMGYzODdkMzI4ZTQ0MTU3ODVcIiJdLCJuYW1lcyI6WyJBYm91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUJBQU8sQ0FBQywwQ0FBc0Q7QUFDN0U7QUFDQTs7Ozs7Ozs7Ozs7O0FDTkEsZ0s7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkJBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRO0FBQUEsU0FDVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFESixFQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdVVBSkosRUFPSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGl3Q0FQSixDQURVO0FBQUEsQ0FBZDs7S0FBTUEsSztBQWlCU0Esb0VBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCQSwwQyIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcYWJvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAod2luZG93Ll9fTkVYVF9QID0gd2luZG93Ll9fTkVYVF9QIHx8IFtdKS5wdXNoKFtcbiAgICAgIFwiL2Fib3V0XCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcdHNyXFxcXERlc2t0b3BcXFxcbmV4dGpzLXRzdFxcXFxwYWdlc1xcXFxhYm91dC5qc1wiKTtcbiAgICAgIH1cbiAgICBdKTtcbiAgIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgZGxsLXJlZmVyZW5jZSBkbGxfNTAzMGYzODdkMzI4ZTQ0MTU3ODUgKi8gXCJkbGwtcmVmZXJlbmNlIGRsbF81MDMwZjM4N2QzMjhlNDQxNTc4NVwiKSkoXCIuL25vZGVfbW9kdWxlcy9yZWFjdC9pbmRleC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9yaWdpbmFsTW9kdWxlKSB7XG5cdGlmICghb3JpZ2luYWxNb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XG5cdFx0dmFyIG1vZHVsZSA9IE9iamVjdC5jcmVhdGUob3JpZ2luYWxNb2R1bGUpO1xuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxuXHRcdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImV4cG9ydHNcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZVxuXHRcdH0pO1xuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xuXHR9XG5cdHJldHVybiBtb2R1bGU7XG59O1xuIiwiY29uc3QgQWJvdXQgPSAoKSA9PiAoXHJcbiAgICA8c2VjdGlvbj5cclxuICAgICAgICA8aDE+XHJcbiAgICAgICAgICAgQWJvdXQgTmV4dGpzIFxyXG4gICAgICAgIDwvaDE+XHJcbiAgICAgICAgPHA+IEEgTmV4dC5qcyBhcHBsaWNhdGlvbiBjYW4gYmUgZWFzaWx5IGV4cG9ydGVkIGFzIGEgc3RhdGljIHNpdGUsIHdoaWNoIGNhbiBiZSBkZXBsb3llZCBvbiBvbmUgb2YgdGhlIHN1cGVyIGZhc3Qgc3RhdGljIHNpdGUgaG9zdHMsIGxpa2UgTmV0bGlmeSBvciBGaXJlYmFzZSBIb3N0aW5nLCB3aXRob3V0IHRoZSBuZWVkIHRvIHNldCB1cCBhIE5vZGUgZW52aXJvbm1lbnQuXHJcbiAgICAgICAgVGhlIHByb2Nlc3MgcmVxdWlyZXMgeW91IHRvIGRlY2xhcmUgdGhlIFVSTHMgdGhhdCBjb21wb3NlIHRoZSBzaXRlLCBidXQgaXTigJlzIGEgc3RyYWlnaHRmb3J3YXJkIHByb2Nlc3MuXHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgIEEgTmV4dC5qcyBhcHBsaWNhdGlvbiBjYW4gYmUgZWFzaWx5IGV4cG9ydGVkIGFzIGEgc3RhdGljIHNpdGUsIHdoaWNoIGNhbiBiZSBkZXBsb3llZCBvbiBvbmUgb2YgdGhlIHN1cGVyIGZhc3Qgc3RhdGljIHNpdGUgaG9zdHMsIGxpa2UgTmV0bGlmeSBvciBGaXJlYmFzZSBIb3N0aW5nLCB3aXRob3V0IHRoZSBuZWVkIHRvIHNldCB1cCBhIE5vZGUgZW52aXJvbm1lbnQuXHJcbiAgICAgICAgVGhlIHByb2Nlc3MgcmVxdWlyZXMgeW91IHRvIGRlY2xhcmUgdGhlIFVSTHMgdGhhdCBjb21wb3NlIHRoZSBzaXRlLCBidXQgaXTigJlzIGEgc3RyYWlnaHRmb3J3YXJkIHByb2Nlc3MuIEEgTmV4dC5qcyBhcHBsaWNhdGlvbiBjYW4gYmUgZWFzaWx5IGV4cG9ydGVkIGFzIGEgc3RhdGljIHNpdGUsIHdoaWNoIGNhbiBiZSBkZXBsb3llZCBvbiBvbmUgb2YgdGhlIHN1cGVyIGZhc3Qgc3RhdGljIHNpdGUgaG9zdHMsIGxpa2UgTmV0bGlmeSBvciBGaXJlYmFzZSBIb3N0aW5nLCB3aXRob3V0IHRoZSBuZWVkIHRvIHNldCB1cCBhIE5vZGUgZW52aXJvbm1lbnQuXHJcbiAgICAgICAgVGhlIHByb2Nlc3MgcmVxdWlyZXMgeW91IHRvIGRlY2xhcmUgdGhlIFVSTHMgdGhhdCBjb21wb3NlIHRoZSBzaXRlLCBidXQgaXTigJlzIGEgc3RyYWlnaHRmb3J3YXJkIHByb2Nlc3NBIE5leHQuanMgYXBwbGljYXRpb24gY2FuIGJlIGVhc2lseSBleHBvcnRlZCBhcyBhIHN0YXRpYyBzaXRlLCB3aGljaCBjYW4gYmUgZGVwbG95ZWQgb24gb25lIG9mIHRoZSBzdXBlciBmYXN0IHN0YXRpYyBzaXRlIGhvc3RzLCBsaWtlIE5ldGxpZnkgb3IgRmlyZWJhc2UgSG9zdGluZywgd2l0aG91dCB0aGUgbmVlZCB0byBzZXQgdXAgYSBOb2RlIGVudmlyb25tZW50LlxyXG4gICAgICAgIFRoZSBwcm9jZXNzIHJlcXVpcmVzIHlvdSB0byBkZWNsYXJlIHRoZSBVUkxzIHRoYXQgY29tcG9zZSB0aGUgc2l0ZSwgYnV0IGl04oCZcyBhIHN0cmFpZ2h0Zm9yd2FyZCBwcm9jZXNzLi4uQSBOZXh0LmpzIGFwcGxpY2F0aW9uIGNhbiBiZSBlYXNpbHkgZXhwb3J0ZWQgYXMgYSBzdGF0aWMgc2l0ZSwgd2hpY2ggY2FuIGJlIGRlcGxveWVkIG9uIG9uZSBvZiB0aGUgc3VwZXIgZmFzdCBzdGF0aWMgc2l0ZSBob3N0cywgbGlrZSBOZXRsaWZ5IG9yIEZpcmViYXNlIEhvc3RpbmcsIHdpdGhvdXQgdGhlIG5lZWQgdG8gc2V0IHVwIGEgTm9kZSBlbnZpcm9ubWVudC5cclxuICAgICAgICBUaGUgcHJvY2VzcyByZXF1aXJlcyB5b3UgdG8gZGVjbGFyZSB0aGUgVVJMcyB0aGF0IGNvbXBvc2UgdGhlIHNpdGUsIGJ1dCBpdOKAmXMgYSBzdHJhaWdodGZvcndhcmQgcHJvY2Vzc1xyXG4gICAgICAgIDwvcD5cclxuICAgIDwvc2VjdGlvbj5cclxuKVxyXG5leHBvcnQgZGVmYXVsdCBBYm91dDsiLCJtb2R1bGUuZXhwb3J0cyA9IGRsbF81MDMwZjM4N2QzMjhlNDQxNTc4NTsiXSwic291cmNlUm9vdCI6IiJ9