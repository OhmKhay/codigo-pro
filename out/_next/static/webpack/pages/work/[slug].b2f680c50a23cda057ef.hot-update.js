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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    className: "detail-section",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "title",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
        children: data && data.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "detail-layout",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "left",
        children: [isDesktop ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
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
              lineNumber: 20,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "label",
              children: "Available on"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 21,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "app-title",
              children: "App store"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 22,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 19,
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
              lineNumber: 25,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "label",
              children: "Available on"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 26,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "app-title",
              children: "Google play"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 36
        }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
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
              lineNumber: 32,
              columnNumber: 23
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "CTAgrid__labelItem",
              children: "Available on"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 25
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "CTAgrid__copyItem",
              children: "App store"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 25
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 31,
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
              lineNumber: 40,
              columnNumber: 21
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "CTAgrid__labelItem",
              children: "Available on"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 25
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "CTAgrid__copyItem",
              children: "Google play"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 25
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 21
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 29
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "about-business",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: data && data.description
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "feature",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "Key Features"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            dangerouslySetInnerHTML: {
              __html: data.key_features
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 16,
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
            lineNumber: 62,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudC9Xcm9rRGV0YWlsU2VjdGlvbi9pbmRleC5qcyJdLCJuYW1lcyI6WyJXb3JrRGV0YWlsU2VjdGlvbiIsImRhdGEiLCJ3aW5kb3dTaXplIiwidXNlV2luZG93U2l6ZSIsImlzRGVza3RvcCIsIndpZHRoIiwibmFtZSIsImJhY2tncm91bmRJbWFnZSIsImRlc2NyaXB0aW9uIiwiX19odG1sIiwia2V5X2ZlYXR1cmVzIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3VyX3NjaGVtZSIsImdhbGxlcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNQSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLE9BQVk7QUFBQTs7QUFBQSxNQUFWQyxJQUFVLFFBQVZBLElBQVU7QUFDbEMsTUFBTUMsVUFBVSxHQUFHQywwRUFBYSxFQUFoQztBQUNBLE1BQU1DLFNBQVMsR0FBR0YsVUFBVSxDQUFDRyxLQUFYLElBQW9CLEdBQXRDO0FBQ0Esc0JBQ0k7QUFBUyxhQUFTLEVBQUMsZ0JBQW5CO0FBQUEsNEJBQ0k7QUFBSyxlQUFTLEVBQUMsT0FBZjtBQUFBLDZCQUNJO0FBQUEsa0JBQUtKLElBQUksSUFBSUEsSUFBSSxDQUFDSztBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBSUk7QUFBSyxlQUFTLEVBQUMsZUFBZjtBQUFBLDhCQUNJO0FBQUssaUJBQVMsRUFBQyxNQUFmO0FBQUEsbUJBRUtGLFNBQVMsZ0JBQUs7QUFBSyxtQkFBUyxFQUFDLGVBQWY7QUFBQSxrQ0FDWDtBQUFHLGdCQUFJLEVBQUMsK0VBQVI7QUFBQSxvQ0FDSTtBQUFLLHVCQUFTLEVBQUMsVUFBZjtBQUEwQixtQkFBSyxFQUFFO0FBQUNHLCtCQUFlLGdCQUFTLG1EQUFUO0FBQWhCO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEs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QTtBQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBM0NKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBNkRILENBaEVEOztHQUFNYixpQjtVQUNpQkcsa0U7OztLQURqQkgsaUI7QUFrRVNBLGdGQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3dvcmsvW3NsdWddLmIyZjY4MGM1MGEyM2NkYTA1N2VmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VXaW5kb3dTaXplIH0gZnJvbSAnLi4vLi4vaG9va3MvdXNlV2luZG93U2l6ZSc7XHJcbmltcG9ydCBNeVNsaWRlciBmcm9tICcuL1NsaWRlcic7XHJcbiBcclxuaW1wb3J0ICcuL3dvcmstZGV0YWlsLXNlY3Rpb24uc2Nzcyc7XHJcblxyXG5jb25zdCBXb3JrRGV0YWlsU2VjdGlvbiA9ICh7ZGF0YX0pID0+IHtcclxuICAgIGNvbnN0IHdpbmRvd1NpemUgPSB1c2VXaW5kb3dTaXplKCk7XHJcbiAgICBjb25zdCBpc0Rlc2t0b3AgPSB3aW5kb3dTaXplLndpZHRoID49IDkwMDtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZGV0YWlsLXNlY3Rpb25cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgPGg0PntkYXRhICYmIGRhdGEubmFtZX08L2g0PiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsLWxheW91dFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAge2lzRGVza3RvcD8oICAgPGRpdiBjbGFzc05hbWU9XCJhcHAtYXZhaWxhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2l0dW5lcy5hcHBsZS5jb20vdXMvYXBwLzdyZXdhcmRzLTctZWxldmVuLXNpbmdhcG9yZS9pZDEyMjM5NTcyMzc/bXQ9OFwiPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcC1pY29uXCIgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHsnaHR0cHM6Ly93d3cuY29kaWdvLmNvL2ltZy91aS9pY28tYXBwX3N0b3JlQDJ4LnBuZyd9KWB9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsYWJlbFwiPkF2YWlsYWJsZSBvbjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFwcC10aXRsZVwiPkFwcCBzdG9yZTwvcD4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3BsYXkuZ29vZ2xlLmNvbS9zdG9yZS9hcHBzL2RldGFpbHM/aWQ9c2cuY29tLnNldmVuZWxldmVuLnNldmVucmV3YXJkcyZobD1lblwiPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcC1pY29uXCIgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHsnaHR0cHM6Ly93d3cuY29kaWdvLmNvL2ltZy91aS9pY28tZ29vZ2xlX3BsYXktc3RvcmVAMngucG5nJ30pYH19Lz4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImxhYmVsXCI+QXZhaWxhYmxlIG9uPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYXBwLXRpdGxlXCI+R29vZ2xlIHBsYXk8L3A+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+KTo8ZGl2IGNsYXNzTmFtZT1cIkNUQWdyaWRfX21haW5XcmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgIGhyZWY9XCJodHRwczovL2FwcHMuYXBwbGUuY29tL3VzL2FwcC9md2Qtc2cvaWQxNTM4NTM1NjgyXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcC1pY29uXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2JhY2tncm91bmRJbWFnZTogYHVybCgkeydodHRwczovL3d3dy5jb2RpZ28uY28vaW1nL3VpL2ljby1hcHBfc3RvcmVAMngucG5nJ30pYH19Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiQ1RBZ3JpZF9fbGFiZWxJdGVtXCI+QXZhaWxhYmxlIG9uPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJDVEFncmlkX19jb3B5SXRlbVwiPkFwcCBzdG9yZTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJDVEFncmlkX19ncmlkR3JvdXBXcmFwcGVyIGlzLS1sb2FkZWRTdGF0ZVwiIGhyZWY9XCJodHRwczovL3BsYXkuZ29vZ2xlLmNvbS9zdG9yZS9hcHBzL2RldGFpbHM/aWQ9Y29tLmZ3ZC5jb2RpZ28mYW1wO2hsPWVuX1VTJmFtcDtnbD1VU1wiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXBwLWljb25cIiBzdHlsZT17e2JhY2tncm91bmRJbWFnZTogYHVybCgkeydodHRwczovL3d3dy5jb2RpZ28uY28vaW1nL3VpL2ljby1nb29nbGVfcGxheS1zdG9yZUAyeC5wbmcnfSlgfX0vPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJDVEFncmlkX19sYWJlbEl0ZW1cIj5BdmFpbGFibGUgb248L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIkNUQWdyaWRfX2NvcHlJdGVtXCI+R29vZ2xlIHBsYXk8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhYm91dC1idXNpbmVzcyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YSAmJiBkYXRhLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmZWF0dXJlXCI+ICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5LZXkgRmVhdHVyZXM8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBkYXRhLmtleV9mZWF0dXJlcyB9fSAvPiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJiYWNrLWxheW91dFwiIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAoZGF0YSAmJiBkYXRhLmNvbG91cl9zY2hlbWUpID8gZGF0YS5jb2xvdXJfc2NoZW1lOiAncmdiKDI3LCAxNjQsIDg1KSd9fT5cclxuICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE15U2xpZGVyIGdhbGxlcnk9e2RhdGEuZ2FsbGVyeX0gLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgKTtcclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IFdvcmtEZXRhaWxTZWN0aW9uOyJdLCJzb3VyY2VSb290IjoiIn0=