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
        children: [!!isDesktop ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
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
              lineNumber: 22,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "label",
              children: "Available on"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 23,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "app-title",
              children: "App store"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 21,
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
              lineNumber: 27,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "label",
              children: "Available on"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "app-title",
              children: "Google play"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 38
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
              lineNumber: 34,
              columnNumber: 23
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "CTAgrid__labelItem",
              children: "Available on"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 25
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "CTAgrid__copyItem",
              children: "App store"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 25
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 33,
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
              lineNumber: 42,
              columnNumber: 21
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "CTAgrid__labelItem",
              children: "Available on"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 25
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "CTAgrid__copyItem",
              children: "Google play"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 25
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 21
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 29
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudC9Xcm9rRGV0YWlsU2VjdGlvbi9pbmRleC5qcyJdLCJuYW1lcyI6WyJXb3JrRGV0YWlsU2VjdGlvbiIsImRhdGEiLCJ3aW5kb3dTaXplIiwidXNlV2luZG93U2l6ZSIsImlzRGVza3RvcCIsIndpZHRoIiwiY29uc29sZSIsImxvZyIsIm5hbWUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJkZXNjcmlwdGlvbiIsIl9faHRtbCIsImtleV9mZWF0dXJlcyIsImJhY2tncm91bmRDb2xvciIsImNvbG91cl9zY2hlbWUiLCJnYWxsZXJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixPQUFZO0FBQUE7O0FBQUEsTUFBVkMsSUFBVSxRQUFWQSxJQUFVO0FBQ2xDLE1BQU1DLFVBQVUsR0FBR0MsMEVBQWEsRUFBaEM7QUFDQSxNQUFNQyxTQUFTLEdBQUdGLFVBQVUsQ0FBQ0csS0FBWCxJQUFvQixHQUF0QztBQUNBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxnQkFBWixFQUE4QkgsU0FBOUI7QUFDQSxzQkFDSTtBQUFTLGFBQVMsRUFBQyxnQkFBbkI7QUFBQSw0QkFDSTtBQUFLLGVBQVMsRUFBQyxPQUFmO0FBQUEsNkJBQ0k7QUFBQSxrQkFBS0gsSUFBSSxJQUFJQSxJQUFJLENBQUNPO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFJSTtBQUFLLGVBQVMsRUFBQyxlQUFmO0FBQUEsOEJBQ0k7QUFBSyxpQkFBUyxFQUFDLE1BQWY7QUFBQSxtQkFFSyxDQUFDLENBQUNKLFNBQUYsZ0JBQWdCO0FBQUssbUJBQVMsRUFBQyxlQUFmO0FBQUEsa0NBQ2I7QUFBRyxnQkFBSSxFQUFDLCtFQUFSO0FBQUEsb0NBQ0k7QUFBSyx1QkFBUyxFQUFDLFVBQWY7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QUFBLGlDQUdJLHFFQUFDLCtDQUFEO0FBQVUsbUJBQU8sRUFBRWIsSUFBSSxDQUFDYztBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUEzQ0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUE2REgsQ0FqRUQ7O0dBQU1mLGlCO1VBQ2lCRyxrRTs7O0tBRGpCSCxpQjtBQW1FU0EsZ0ZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvd29yay9bc2x1Z10uZDBmZDdmZGI1YjEzMjY2ZWM5NmEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VXaW5kb3dTaXplIH0gZnJvbSAnLi4vLi4vaG9va3MvdXNlV2luZG93U2l6ZSc7XHJcbmltcG9ydCBNeVNsaWRlciBmcm9tICcuL1NsaWRlcic7XHJcbiBcclxuaW1wb3J0ICcuL3dvcmstZGV0YWlsLXNlY3Rpb24uc2Nzcyc7XHJcblxyXG5jb25zdCBXb3JrRGV0YWlsU2VjdGlvbiA9ICh7ZGF0YX0pID0+IHtcclxuICAgIGNvbnN0IHdpbmRvd1NpemUgPSB1c2VXaW5kb3dTaXplKCk7XHJcbiAgICBjb25zdCBpc0Rlc2t0b3AgPSB3aW5kb3dTaXplLndpZHRoID49IDkwMDtcclxuICAgIGNvbnNvbGUubG9nKFwiaGVyZSBpcyB3aW5kb3dcIiwgaXNEZXNrdG9wKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJkZXRhaWwtc2VjdGlvblwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICA8aDQ+e2RhdGEgJiYgZGF0YS5uYW1lfTwvaDQ+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWwtbGF5b3V0XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnRcIj5cclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB7ISFpc0Rlc2t0b3A/KCAgIDxkaXYgY2xhc3NOYW1lPVwiYXBwLWF2YWlsYWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9pdHVuZXMuYXBwbGUuY29tL3VzL2FwcC83cmV3YXJkcy03LWVsZXZlbi1zaW5nYXBvcmUvaWQxMjIzOTU3MjM3P210PThcIj4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcHAtaWNvblwiIHN0eWxlPXt7YmFja2dyb3VuZEltYWdlOiBgdXJsKCR7J2h0dHBzOi8vd3d3LmNvZGlnby5jby9pbWcvdWkvaWNvLWFwcF9zdG9yZUAyeC5wbmcnfSlgfX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibGFiZWxcIj5BdmFpbGFibGUgb248L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhcHAtdGl0bGVcIj5BcHAgc3RvcmU8L3A+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9wbGF5Lmdvb2dsZS5jb20vc3RvcmUvYXBwcy9kZXRhaWxzP2lkPXNnLmNvbS5zZXZlbmVsZXZlbi5zZXZlbnJld2FyZHMmaGw9ZW5cIj4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcHAtaWNvblwiIHN0eWxlPXt7YmFja2dyb3VuZEltYWdlOiBgdXJsKCR7J2h0dHBzOi8vd3d3LmNvZGlnby5jby9pbWcvdWkvaWNvLWdvb2dsZV9wbGF5LXN0b3JlQDJ4LnBuZyd9KWB9fS8+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsYWJlbFwiPkF2YWlsYWJsZSBvbjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFwcC10aXRsZVwiPkdvb2dsZSBwbGF5PC9wPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2Pik6PGRpdiBjbGFzc05hbWU9XCJDVEFncmlkX19tYWluV3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhICBocmVmPVwiaHR0cHM6Ly9hcHBzLmFwcGxlLmNvbS91cy9hcHAvZndkLXNnL2lkMTUzODUzNTY4MlwiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcHAtaWNvblwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHsnaHR0cHM6Ly93d3cuY29kaWdvLmNvL2ltZy91aS9pY28tYXBwX3N0b3JlQDJ4LnBuZyd9KWB9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIkNUQWdyaWRfX2xhYmVsSXRlbVwiPkF2YWlsYWJsZSBvbjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiQ1RBZ3JpZF9fY29weUl0ZW1cIj5BcHAgc3RvcmU8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiQ1RBZ3JpZF9fZ3JpZEdyb3VwV3JhcHBlciBpcy0tbG9hZGVkU3RhdGVcIiBocmVmPVwiaHR0cHM6Ly9wbGF5Lmdvb2dsZS5jb20vc3RvcmUvYXBwcy9kZXRhaWxzP2lkPWNvbS5md2QuY29kaWdvJmFtcDtobD1lbl9VUyZhbXA7Z2w9VVNcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcC1pY29uXCIgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHsnaHR0cHM6Ly93d3cuY29kaWdvLmNvL2ltZy91aS9pY28tZ29vZ2xlX3BsYXktc3RvcmVAMngucG5nJ30pYH19Lz4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiQ1RBZ3JpZF9fbGFiZWxJdGVtXCI+QXZhaWxhYmxlIG9uPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJDVEFncmlkX19jb3B5SXRlbVwiPkdvb2dsZSBwbGF5PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYWJvdXQtYnVzaW5lc3MnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEgJiYgZGF0YS5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmVhdHVyZVwiPiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+S2V5IEZlYXR1cmVzPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogZGF0YS5rZXlfZmVhdHVyZXMgfX0gLz4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYmFjay1sYXlvdXRcIiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogKGRhdGEgJiYgZGF0YS5jb2xvdXJfc2NoZW1lKSA/IGRhdGEuY29sb3VyX3NjaGVtZTogJ3JnYigyNywgMTY0LCA4NSknfX0+XHJcbiAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNeVNsaWRlciBnYWxsZXJ5PXtkYXRhLmdhbGxlcnl9IC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICk7XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBXb3JrRGV0YWlsU2VjdGlvbjsiXSwic291cmNlUm9vdCI6IiJ9