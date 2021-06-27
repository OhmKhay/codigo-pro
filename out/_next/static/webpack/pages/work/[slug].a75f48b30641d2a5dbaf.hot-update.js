webpackHotUpdate_N_E("pages/work/[slug]",{

/***/ "./src/component/WrokDetailSection/index.js":
/*!**************************************************!*\
  !*** ./src/component/WrokDetailSection/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useWindowSize */ "./src/hooks/useWindowSize.js");
/* harmony import */ var _Slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Slider */ "./src/component/WrokDetailSection/Slider.js");
/* harmony import */ var _work_detail_section_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./work-detail-section.scss */ "./src/component/WrokDetailSection/work-detail-section.scss");
/* harmony import */ var _work_detail_section_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_work_detail_section_scss__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "E:\\codigo-project\\src\\component\\WrokDetailSection\\index.js",
    _this = undefined,
    _s = $RefreshSig$();






var WorkDetailSection = function WorkDetailSection(_ref) {
  _s();

  var data = _ref.data;
  var windowSize = Object(_hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_2__["useWindowSize"])();
  var isDesktop = windowSize.width >= 900;
  console.log("here is window", isDesktop);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    className: "detail-section",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "title",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
        children: data && data.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "detail-layout",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "left",
        children: [!isDesktop ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "CTAgrid__mainWrapper",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "https://apps.apple.com/us/app/fwd-sg/id1538535682",
            target: "_blank",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "app-icon",
              style: {
                backgroundImage: "url(".concat('https://www.codigo.co/img/ui/ico-app_store@2x.png', ")")
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 22,
              columnNumber: 23
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "CTAgrid__labelItem",
              children: "Available on"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 25
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "CTAgrid__copyItem",
              children: "App store"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 25,
              columnNumber: 25
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 21
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "CTAgrid__gridGroupWrapper is--loadedState",
            href: "https://play.google.com/store/apps/details?id=com.fwd.codigo&hl=en_US&gl=US",
            target: "_blank",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "app-icon",
              style: {
                backgroundImage: "url(".concat('https://www.codigo.co/img/ui/ico-google_play-store@2x.png', ")")
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 30,
              columnNumber: 21
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "CTAgrid__labelItem",
              children: "Available on"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 25
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "CTAgrid__copyItem",
              children: "Google play"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 25
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 21
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 33
        }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "app-available",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "https://itunes.apple.com/us/app/7rewards-7-eleven-singapore/id1223957237?mt=8",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "app-icon",
              style: {
                backgroundImage: "url(".concat('https://www.codigo.co/img/ui/ico-app_store@2x.png', ")")
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "label",
              children: "Available on"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "app-title",
              children: "App store"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "https://play.google.com/store/apps/details?id=sg.com.seveneleven.sevenrewards&hl=en",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "app-icon",
              style: {
                backgroundImage: "url(".concat('https://www.codigo.co/img/ui/ico-google_play-store@2x.png', ")")
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "label",
              children: "Available on"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "app-title",
              children: "Google play"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 32
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "about-business",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: data && data.description
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "feature",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "Key Features"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            dangerouslySetInnerHTML: {
              __html: data.key_features
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "right",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
          className: "back-layout",
          style: {
            backgroundColor: data && data.colour_scheme ? data.colour_scheme : 'rgb(27, 164, 85)'
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Slider__WEBPACK_IMPORTED_MODULE_3__["default"], {
            gallery: data.gallery
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 9
  }, _this);
};

_s(WorkDetailSection, "TnpA2swiaCW/ySTBotAIncz9ms8=", false, function () {
  return [_hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_2__["useWindowSize"]];
});

_c = WorkDetailSection;
/* harmony default export */ __webpack_exports__["default"] = (WorkDetailSection);

var _c;

$RefreshReg$(_c, "WorkDetailSection");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
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
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudC9Xcm9rRGV0YWlsU2VjdGlvbi9pbmRleC5qcyJdLCJuYW1lcyI6WyJXb3JrRGV0YWlsU2VjdGlvbiIsImRhdGEiLCJ3aW5kb3dTaXplIiwidXNlV2luZG93U2l6ZSIsImlzRGVza3RvcCIsIndpZHRoIiwiY29uc29sZSIsImxvZyIsIm5hbWUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJkZXNjcmlwdGlvbiIsIl9faHRtbCIsImtleV9mZWF0dXJlcyIsImJhY2tncm91bmRDb2xvciIsImNvbG91cl9zY2hlbWUiLCJnYWxsZXJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixPQUFZO0FBQUE7O0FBQUEsTUFBVkMsSUFBVSxRQUFWQSxJQUFVO0FBQ2xDLE1BQU1DLFVBQVUsR0FBR0MsMEVBQWEsRUFBaEM7QUFDQSxNQUFNQyxTQUFTLEdBQUdGLFVBQVUsQ0FBQ0csS0FBWCxJQUFvQixHQUF0QztBQUNBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxnQkFBWixFQUE4QkgsU0FBOUI7QUFDQSxzQkFDSTtBQUFTLGFBQVMsRUFBQyxnQkFBbkI7QUFBQSw0QkFDSTtBQUFLLGVBQVMsRUFBQyxPQUFmO0FBQUEsNkJBQ0k7QUFBQSxrQkFBS0gsSUFBSSxJQUFJQSxJQUFJLENBQUNPO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFJSTtBQUFLLGVBQVMsRUFBQyxlQUFmO0FBQUEsOEJBQ0k7QUFBSyxpQkFBUyxFQUFDLE1BQWY7QUFBQSxtQkFFSyxDQUFDSixTQUFELGdCQUFXO0FBQUssbUJBQVMsRUFBQyxzQkFBZjtBQUFBLGtDQUNaO0FBQUksZ0JBQUksRUFBQyxtREFBVDtBQUE2RCxrQkFBTSxFQUFDLFFBQXBFO0FBQUEsb0NBQ0U7QUFB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QUdJLHFFQUFDLCtDQUFEO0FBQVUsbUJBQU8sRUFBRWIsSUFBSSxDQUFDYztBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUEzQ0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUE2REgsQ0FqRUQ7O0dBQU1mLGlCO1VBQ2lCRyxrRTs7O0tBRGpCSCxpQjtBQW1FU0EsZ0ZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvd29yay9bc2x1Z10uYTc1ZjQ4YjMwNjQxZDJhNWRiYWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VXaW5kb3dTaXplIH0gZnJvbSAnLi4vLi4vaG9va3MvdXNlV2luZG93U2l6ZSc7XHJcbmltcG9ydCBNeVNsaWRlciBmcm9tICcuL1NsaWRlcic7XHJcbiBcclxuaW1wb3J0ICcuL3dvcmstZGV0YWlsLXNlY3Rpb24uc2Nzcyc7XHJcblxyXG5jb25zdCBXb3JrRGV0YWlsU2VjdGlvbiA9ICh7ZGF0YX0pID0+IHtcclxuICAgIGNvbnN0IHdpbmRvd1NpemUgPSB1c2VXaW5kb3dTaXplKCk7XHJcbiAgICBjb25zdCBpc0Rlc2t0b3AgPSB3aW5kb3dTaXplLndpZHRoID49IDkwMDtcclxuICAgIGNvbnNvbGUubG9nKFwiaGVyZSBpcyB3aW5kb3dcIiwgaXNEZXNrdG9wKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJkZXRhaWwtc2VjdGlvblwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICA8aDQ+e2RhdGEgJiYgZGF0YS5uYW1lfTwvaDQ+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWwtbGF5b3V0XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnRcIj5cclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB7IWlzRGVza3RvcD88ZGl2IGNsYXNzTmFtZT1cIkNUQWdyaWRfX21haW5XcmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgIGhyZWY9XCJodHRwczovL2FwcHMuYXBwbGUuY29tL3VzL2FwcC9md2Qtc2cvaWQxNTM4NTM1NjgyXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcC1pY29uXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2JhY2tncm91bmRJbWFnZTogYHVybCgkeydodHRwczovL3d3dy5jb2RpZ28uY28vaW1nL3VpL2ljby1hcHBfc3RvcmVAMngucG5nJ30pYH19Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiQ1RBZ3JpZF9fbGFiZWxJdGVtXCI+QXZhaWxhYmxlIG9uPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJDVEFncmlkX19jb3B5SXRlbVwiPkFwcCBzdG9yZTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJDVEFncmlkX19ncmlkR3JvdXBXcmFwcGVyIGlzLS1sb2FkZWRTdGF0ZVwiIGhyZWY9XCJodHRwczovL3BsYXkuZ29vZ2xlLmNvbS9zdG9yZS9hcHBzL2RldGFpbHM/aWQ9Y29tLmZ3ZC5jb2RpZ28mYW1wO2hsPWVuX1VTJmFtcDtnbD1VU1wiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXBwLWljb25cIiBzdHlsZT17e2JhY2tncm91bmRJbWFnZTogYHVybCgkeydodHRwczovL3d3dy5jb2RpZ28uY28vaW1nL3VpL2ljby1nb29nbGVfcGxheS1zdG9yZUAyeC5wbmcnfSlgfX0vPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJDVEFncmlkX19sYWJlbEl0ZW1cIj5BdmFpbGFibGUgb248L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIkNUQWdyaWRfX2NvcHlJdGVtXCI+R29vZ2xlIHBsYXk8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PjooICAgPGRpdiBjbGFzc05hbWU9XCJhcHAtYXZhaWxhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2l0dW5lcy5hcHBsZS5jb20vdXMvYXBwLzdyZXdhcmRzLTctZWxldmVuLXNpbmdhcG9yZS9pZDEyMjM5NTcyMzc/bXQ9OFwiPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcC1pY29uXCIgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHsnaHR0cHM6Ly93d3cuY29kaWdvLmNvL2ltZy91aS9pY28tYXBwX3N0b3JlQDJ4LnBuZyd9KWB9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsYWJlbFwiPkF2YWlsYWJsZSBvbjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFwcC10aXRsZVwiPkFwcCBzdG9yZTwvcD4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3BsYXkuZ29vZ2xlLmNvbS9zdG9yZS9hcHBzL2RldGFpbHM/aWQ9c2cuY29tLnNldmVuZWxldmVuLnNldmVucmV3YXJkcyZobD1lblwiPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcC1pY29uXCIgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHsnaHR0cHM6Ly93d3cuY29kaWdvLmNvL2ltZy91aS9pY28tZ29vZ2xlX3BsYXktc3RvcmVAMngucG5nJ30pYH19Lz4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImxhYmVsXCI+QXZhaWxhYmxlIG9uPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYXBwLXRpdGxlXCI+R29vZ2xlIHBsYXk8L3A+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+KVxyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhYm91dC1idXNpbmVzcyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YSAmJiBkYXRhLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmZWF0dXJlXCI+ICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5LZXkgRmVhdHVyZXM8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBkYXRhLmtleV9mZWF0dXJlcyB9fSAvPiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJiYWNrLWxheW91dFwiIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAoZGF0YSAmJiBkYXRhLmNvbG91cl9zY2hlbWUpID8gZGF0YS5jb2xvdXJfc2NoZW1lOiAncmdiKDI3LCAxNjQsIDg1KSd9fT5cclxuICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE15U2xpZGVyIGdhbGxlcnk9e2RhdGEuZ2FsbGVyeX0gLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgKTtcclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IFdvcmtEZXRhaWxTZWN0aW9uOyJdLCJzb3VyY2VSb290IjoiIn0=