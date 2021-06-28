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
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-reveal/Fade */ "./node_modules/react-reveal/Fade.js");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Slider */ "./src/component/WrokDetailSection/Slider.js");
/* harmony import */ var _work_detail_section_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./work-detail-section.scss */ "./src/component/WrokDetailSection/work-detail-section.scss");
/* harmony import */ var _work_detail_section_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_work_detail_section_scss__WEBPACK_IMPORTED_MODULE_5__);



var _jsxFileName = "E:\\codigo-project\\src\\component\\WrokDetailSection\\index.js",
    _this = undefined,
    _s = $RefreshSig$();







var WorkDetailSection = function WorkDetailSection(_ref) {
  _s();

  var data = _ref.data;
  var listener = null;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      timmer = _useState[0],
      setTimer = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      topState = _useState2[0],
      setTopState = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var scrollNum = true;
    listener = document.addEventListener('scroll', function (e) {
      var scrolled = document.scrollingElement.scrollTop;

      if (scrolled <= 120 || scrolled === 0) {
        scrollNum && setTopState(true);
      }

      if (scrolled >= 800) {
        scrollNum && setTopState(false);
      }
    });
    return function () {
      document.removeEventListener('scroll', listener);
      scrollNum = false;
    };
  }, [topState]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setInterval(function () {
      setTimer(true);
    }, 2000);
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    className: "detail-section",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {
      bottom: true,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "title",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
          children: data && (data === null || data === void 0 ? void 0 : data.name)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 15
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }, _this), topState && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {
        left: true,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          onClick: function onClick() {
            return next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push("/work/".concat(data.prev_post_slug));
          },
          className: 'prev btn_wrapper'
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {
        right: true,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          onClick: function onClick() {
            return next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push("/work/".concat(data.next_post_slug));
          },
          className: 'next btn_wrapper'
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 15
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 13
      }, _this)]
    }, void 0, true), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "detail-layout",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "left",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "CTAgrid__mainWrapper",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {
            bottom: true,
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
                lineNumber: 81,
                columnNumber: 23
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "CTAgrid__labelItem",
                children: "Available on"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 83,
                columnNumber: 25
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "CTAgrid__copyItem",
                children: "App store"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 84,
                columnNumber: 25
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 26
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
                lineNumber: 89,
                columnNumber: 24
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "CTAgrid__labelItem",
                children: "Available on"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 90,
                columnNumber: 25
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "CTAgrid__copyItem",
                children: "Google play"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 91,
                columnNumber: 25
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 21
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 26
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {
          bottom: true,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "about-business",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: data && (data === null || data === void 0 ? void 0 : data.description)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 25
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 23
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 23
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {
          bottom: true,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "feature",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "Key Features"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 25
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              dangerouslySetInnerHTML: {
                __html: data === null || data === void 0 ? void 0 : data.key_features
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 108,
              columnNumber: 25
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 23
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "right",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {
          top: true,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
            className: "back-layout",
            style: {
              backgroundColor: data && data !== null && data !== void 0 && data.colour_scheme ? data.colour_scheme : 'rgb(27, 164, 85)'
            },
            children: timmer && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Slider__WEBPACK_IMPORTED_MODULE_4__["default"], {
                gallery: data === null || data === void 0 ? void 0 : data.gallery
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 119,
                columnNumber: 29
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 117,
              columnNumber: 35
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 23
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 23
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 9
  }, _this);
};

_s(WorkDetailSection, "ohPr+LQF2TAYw3huJjqN2/m/Wj8=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudC9Xcm9rRGV0YWlsU2VjdGlvbi9pbmRleC5qcyJdLCJuYW1lcyI6WyJXb3JrRGV0YWlsU2VjdGlvbiIsImRhdGEiLCJsaXN0ZW5lciIsInVzZVN0YXRlIiwidGltbWVyIiwic2V0VGltZXIiLCJ0b3BTdGF0ZSIsInNldFRvcFN0YXRlIiwidXNlRWZmZWN0Iiwic2Nyb2xsTnVtIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInNjcm9sbGVkIiwic2Nyb2xsaW5nRWxlbWVudCIsInNjcm9sbFRvcCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzZXRJbnRlcnZhbCIsIm5hbWUiLCJSb3V0ZXIiLCJwdXNoIiwicHJldl9wb3N0X3NsdWciLCJuZXh0X3Bvc3Rfc2x1ZyIsImJhY2tncm91bmRJbWFnZSIsImRlc2NyaXB0aW9uIiwiX19odG1sIiwia2V5X2ZlYXR1cmVzIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3VyX3NjaGVtZSIsImdhbGxlcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNQSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLE9BQVk7QUFBQTs7QUFBQSxNQUFWQyxJQUFVLFFBQVZBLElBQVU7QUFDbEMsTUFBSUMsUUFBUSxHQUFHLElBQWY7O0FBRGtDLGtCQUVQQyxzREFBUSxDQUFDLEtBQUQsQ0FGRDtBQUFBLE1BRTNCQyxNQUYyQjtBQUFBLE1BRW5CQyxRQUZtQjs7QUFBQSxtQkFHRkYsc0RBQVEsQ0FBQyxLQUFELENBSE47QUFBQSxNQUczQkcsUUFIMkI7QUFBQSxNQUdqQkMsV0FIaUI7O0FBT2xDQyx5REFBUyxDQUFDLFlBQU07QUFDWixRQUFJQyxTQUFTLEdBQUcsSUFBaEI7QUFFQVAsWUFBUSxHQUFHUSxRQUFRLENBQUNDLGdCQUFULENBQTBCLFFBQTFCLEVBQW9DLFVBQUFD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LGFBQW5CO0FBQWlDLGlCQUFLLEVBQUU7QUFBQ0MsNkJBQWUsRUFBRzFCLElBQUksSUFBSUEsSUFBSixhQUFJQSxJQUFKLGVBQUlBLElBQUksQ0FBRTJCLGFBQWYsR0FBZ0MzQixJQUFJLENBQUMyQixhQUFyQyxHQUFvRDtBQUF0RSxhQUF4QztBQUFBLHNCQUdHeEIsTUFBTSxpQkFBRyxxRUFBQyx3REFBRDtBQUFBLHFDQUVOLHFFQUFDLCtDQUFEO0FBQVUsdUJBQU8sRUFBRUgsSUFBRixhQUFFQSxJQUFGLHVCQUFFQSxJQUFJLENBQUU0QjtBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRk07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRE47QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXJDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF6Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFtRkgsQ0EzSEQ7O0dBQU03QixpQjs7S0FBQUEsaUI7QUE2SFNBLGdGQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3dvcmsvW3NsdWddLjE3OGYwYTBkOTBkOGRlNTg1NjVhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBGYWRlIGZyb20gJ3JlYWN0LXJldmVhbC9GYWRlJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBNeVNsaWRlciBmcm9tICcuL1NsaWRlcic7XHJcbiBcclxuaW1wb3J0ICcuL3dvcmstZGV0YWlsLXNlY3Rpb24uc2Nzcyc7XHJcblxyXG5jb25zdCBXb3JrRGV0YWlsU2VjdGlvbiA9ICh7ZGF0YX0pID0+IHtcclxuICAgIGxldCBsaXN0ZW5lciA9IG51bGw7XHJcbiAgICBjb25zdCBbdGltbWVyLCBzZXRUaW1lcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbdG9wU3RhdGUsIHNldFRvcFN0YXRlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBsZXQgc2Nyb2xsTnVtID0gdHJ1ZTtcclxuICAgIFxyXG4gICAgICAgIGxpc3RlbmVyID0gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZSA9PiB7XHJcbiAgICAgICAgICBsZXQgc2Nyb2xsZWQgPSBkb2N1bWVudC5zY3JvbGxpbmdFbGVtZW50LnNjcm9sbFRvcDtcclxuICAgICAgICAgIFxyXG4gICAgIFxyXG4gICAgICAgICAgaWYgKHNjcm9sbGVkIDw9IDEyMCB8fCBzY3JvbGxlZCA9PT0gMCkge1xyXG4gICAgICAgICBcclxuICAgICAgICAgICAgc2Nyb2xsTnVtICYmIHNldFRvcFN0YXRlKHRydWUpXHJcbiAgICAgIFxyXG4gICAgICAgICAgfSBcclxuICAgICAgICAgIGlmKHNjcm9sbGVkID49IDgwMCkge1xyXG4gICAgICAgICAgICAgIHNjcm9sbE51bSAmJiBzZXRUb3BTdGF0ZShmYWxzZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgfSk7XHJcbiAgICBcclxuICAgIFxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBsaXN0ZW5lcik7XHJcbiAgICAgICAgICBzY3JvbGxOdW0gPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgfSwgW3RvcFN0YXRlXSk7XHJcblxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXsgXHJcbiAgICAgICAgICAgICAgc2V0VGltZXIodHJ1ZSk7XHJcbiAgICAgICAgfSwgMjAwMCk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJkZXRhaWwtc2VjdGlvblwiPlxyXG4gICAgICAgICAgICA8RmFkZSBib3R0b20+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgPGg0PntkYXRhICYmIGRhdGE/Lm5hbWV9PC9oND4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvRmFkZT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdG9wU3RhdGUmJjw+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxGYWRlIGxlZnQ+XHJcbiAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFJvdXRlci5wdXNoKGAvd29yay8ke2RhdGEucHJldl9wb3N0X3NsdWd9YClcclxuICAgICAgICAgICAgfX0gY2xhc3NOYW1lPXsncHJldiBidG5fd3JhcHBlcid9PlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvRmFkZT5cclxuICAgICAgICAgICAgPEZhZGUgcmlnaHQ+XHJcbiAgICAgICAgICAgICAgPGRpdiAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFJvdXRlci5wdXNoKGAvd29yay8ke2RhdGEubmV4dF9wb3N0X3NsdWd9YClcclxuICAgICAgICAgICAgfX0gY2xhc3NOYW1lPXsnbmV4dCBidG5fd3JhcHBlcid9PlxyXG5cclxuICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0ZhZGU+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbC1sYXlvdXRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQ1RBZ3JpZF9fbWFpbldyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxGYWRlIGJvdHRvbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxhICBocmVmPVwiaHR0cHM6Ly9hcHBzLmFwcGxlLmNvbS91cy9hcHAvZndkLXNnL2lkMTUzODUzNTY4MlwiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcHAtaWNvblwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHsnaHR0cHM6Ly93d3cuY29kaWdvLmNvL2ltZy91aS9pY28tYXBwX3N0b3JlQDJ4LnBuZyd9KWB9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIkNUQWdyaWRfX2xhYmVsSXRlbVwiPkF2YWlsYWJsZSBvbjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiQ1RBZ3JpZF9fY29weUl0ZW1cIj5BcHAgc3RvcmU8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJDVEFncmlkX19ncmlkR3JvdXBXcmFwcGVyIGlzLS1sb2FkZWRTdGF0ZVwiIGhyZWY9XCJodHRwczovL3BsYXkuZ29vZ2xlLmNvbS9zdG9yZS9hcHBzL2RldGFpbHM/aWQ9Y29tLmZ3ZC5jb2RpZ28mYW1wO2hsPWVuX1VTJmFtcDtnbD1VU1wiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXBwLWljb25cIiBzdHlsZT17e2JhY2tncm91bmRJbWFnZTogYHVybCgkeydodHRwczovL3d3dy5jb2RpZ28uY28vaW1nL3VpL2ljby1nb29nbGVfcGxheS1zdG9yZUAyeC5wbmcnfSlgfX0vPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJDVEFncmlkX19sYWJlbEl0ZW1cIj5BdmFpbGFibGUgb248L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIkNUQWdyaWRfX2NvcHlJdGVtXCI+R29vZ2xlIHBsYXk8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9GYWRlPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgPEZhZGUgYm90dG9tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Fib3V0LWJ1c2luZXNzJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhICYmIGRhdGE/LmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9GYWRlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGYWRlIGJvdHRvbT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmVhdHVyZVwiPiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+S2V5IEZlYXR1cmVzPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogZGF0YT8ua2V5X2ZlYXR1cmVzIH19IC8+ICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0ZhZGU+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxGYWRlIHRvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImJhY2stbGF5b3V0XCIgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IChkYXRhICYmIGRhdGE/LmNvbG91cl9zY2hlbWUpID8gZGF0YS5jb2xvdXJfc2NoZW1lOiAncmdiKDI3LCAxNjQsIDg1KSd9fT5cclxuICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RpbW1lciYmKDxGYWRlPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNeVNsaWRlciBnYWxsZXJ5PXtkYXRhPy5nYWxsZXJ5fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ZhZGU+KX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9GYWRlPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICBcclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICApO1xyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgV29ya0RldGFpbFNlY3Rpb247Il0sInNvdXJjZVJvb3QiOiIifQ==