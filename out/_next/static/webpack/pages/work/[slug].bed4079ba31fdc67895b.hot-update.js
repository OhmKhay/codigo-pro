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
              lineNumber: 80,
              columnNumber: 23
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "CTAgrid__labelItem",
              children: "Available on"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 25
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "CTAgrid__copyItem",
              children: "App store"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 25
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 79,
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
              lineNumber: 88,
              columnNumber: 21
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "CTAgrid__labelItem",
              children: "Available on"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 25
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "CTAgrid__copyItem",
              children: "Google play"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 25
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 21
          }, _this)]
        }, void 0, true, {
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
              lineNumber: 97,
              columnNumber: 25
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 23
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 23
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "feature",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "Key Features"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            dangerouslySetInnerHTML: {
              __html: data === null || data === void 0 ? void 0 : data.key_features
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 102,
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
                lineNumber: 115,
                columnNumber: 29
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 35
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 23
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 23
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 108,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudC9Xcm9rRGV0YWlsU2VjdGlvbi9pbmRleC5qcyJdLCJuYW1lcyI6WyJXb3JrRGV0YWlsU2VjdGlvbiIsImRhdGEiLCJsaXN0ZW5lciIsInVzZVN0YXRlIiwidGltbWVyIiwic2V0VGltZXIiLCJ0b3BTdGF0ZSIsInNldFRvcFN0YXRlIiwidXNlRWZmZWN0Iiwic2Nyb2xsTnVtIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInNjcm9sbGVkIiwic2Nyb2xsaW5nRWxlbWVudCIsInNjcm9sbFRvcCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzZXRJbnRlcnZhbCIsIm5hbWUiLCJSb3V0ZXIiLCJwdXNoIiwicHJldl9wb3N0X3NsdWciLCJuZXh0X3Bvc3Rfc2x1ZyIsImJhY2tncm91bmRJbWFnZSIsImRlc2NyaXB0aW9uIiwiX19odG1sIiwia2V5X2ZlYXR1cmVzIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3VyX3NjaGVtZSIsImdhbGxlcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNQSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLE9BQVk7QUFBQTs7QUFBQSxNQUFWQyxJQUFVLFFBQVZBLElBQVU7QUFDbEMsTUFBSUMsUUFBUSxHQUFHLElBQWY7O0FBRGtDLGtCQUVQQyxzREFBUSxDQUFDLEtBQUQsQ0FGRDtBQUFBLE1BRTNCQyxNQUYyQjtBQUFBLE1BRW5CQyxRQUZtQjs7QUFBQSxtQkFHRkYsc0RBQVEsQ0FBQyxLQUFELENBSE47QUFBQSxNQUczQkcsUUFIMkI7QUFBQSxNQUdqQkMsV0FIaUI7O0FBT2xDQyx5REFBUyxDQUFDLFlBQU07QUFDWixRQUFJQyxTQUFTLEdBQUcsSUFBaEI7QUFFQVAsWUFBUSxHQUFHUSxRQUFRLENBQUNDLGdCQUFULENBQTBCLFFBQTFCLEVBQW9DLFVBQUFD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dEUsYUFBeEM7QUFBQSxzQkFHR3hCLE1BQU0saUJBQUcscUVBQUMsd0RBQUQ7QUFBQSxxQ0FFTixxRUFBQywrQ0FBRDtBQUFVLHVCQUFPLEVBQUVILElBQUYsYUFBRUEsSUFBRix1QkFBRUEsSUFBSSxDQUFFNEI7QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUROO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFqQ0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBekJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBK0VILENBdkhEOztHQUFNN0IsaUI7O0tBQUFBLGlCO0FBeUhTQSxnRkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy93b3JrL1tzbHVnXS5iZWQ0MDc5YmEzMWZkYzY3ODk1Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgRmFkZSBmcm9tICdyZWFjdC1yZXZlYWwvRmFkZSc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgTXlTbGlkZXIgZnJvbSAnLi9TbGlkZXInO1xyXG4gXHJcbmltcG9ydCAnLi93b3JrLWRldGFpbC1zZWN0aW9uLnNjc3MnO1xyXG5cclxuY29uc3QgV29ya0RldGFpbFNlY3Rpb24gPSAoe2RhdGF9KSA9PiB7XHJcbiAgICBsZXQgbGlzdGVuZXIgPSBudWxsO1xyXG4gICAgY29uc3QgW3RpbW1lciwgc2V0VGltZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3RvcFN0YXRlLCBzZXRUb3BTdGF0ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIFxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IHNjcm9sbE51bSA9IHRydWU7XHJcbiAgICBcclxuICAgICAgICBsaXN0ZW5lciA9IGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGUgPT4ge1xyXG4gICAgICAgICAgbGV0IHNjcm9sbGVkID0gZG9jdW1lbnQuc2Nyb2xsaW5nRWxlbWVudC5zY3JvbGxUb3A7XHJcbiAgICAgICAgICBcclxuICAgICBcclxuICAgICAgICAgIGlmIChzY3JvbGxlZCA8PSAxMjAgfHwgc2Nyb2xsZWQgPT09IDApIHtcclxuICAgICAgICAgXHJcbiAgICAgICAgICAgIHNjcm9sbE51bSAmJiBzZXRUb3BTdGF0ZSh0cnVlKVxyXG4gICAgICBcclxuICAgICAgICAgIH0gXHJcbiAgICAgICAgICBpZihzY3JvbGxlZCA+PSA4MDApIHtcclxuICAgICAgICAgICAgICBzY3JvbGxOdW0gJiYgc2V0VG9wU3RhdGUoZmFsc2UpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICBcclxuICAgICAgICAgIFxyXG4gICAgICAgIH0pO1xyXG4gICAgXHJcbiAgICBcclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgbGlzdGVuZXIpO1xyXG4gICAgICAgICAgc2Nyb2xsTnVtID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgIH0sIFt0b3BTdGF0ZV0pO1xyXG5cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldEludGVydmFsKGZ1bmN0aW9uKCl7IFxyXG4gICAgICAgICAgICAgIHNldFRpbWVyKHRydWUpO1xyXG4gICAgICAgIH0sIDIwMDApO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZGV0YWlsLXNlY3Rpb25cIj5cclxuICAgICAgICAgICAgPEZhZGUgYm90dG9tPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cclxuICAgICAgICAgICAgICAgIDxoND57ZGF0YSAmJiBkYXRhPy5uYW1lfTwvaDQ+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0ZhZGU+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRvcFN0YXRlJiY8PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8RmFkZSBsZWZ0PlxyXG4gICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBSb3V0ZXIucHVzaChgL3dvcmsvJHtkYXRhLnByZXZfcG9zdF9zbHVnfWApXHJcbiAgICAgICAgICAgIH19IGNsYXNzTmFtZT17J3ByZXYgYnRuX3dyYXBwZXInfT5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0ZhZGU+XHJcbiAgICAgICAgICAgIDxGYWRlIHJpZ2h0PlxyXG4gICAgICAgICAgICAgIDxkaXYgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBSb3V0ZXIucHVzaChgL3dvcmsvJHtkYXRhLm5leHRfcG9zdF9zbHVnfWApXHJcbiAgICAgICAgICAgIH19IGNsYXNzTmFtZT17J25leHQgYnRuX3dyYXBwZXInfT5cclxuXHJcbiAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9GYWRlPlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWwtbGF5b3V0XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnRcIj5cclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkNUQWdyaWRfX21haW5XcmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgIGhyZWY9XCJodHRwczovL2FwcHMuYXBwbGUuY29tL3VzL2FwcC9md2Qtc2cvaWQxNTM4NTM1NjgyXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcC1pY29uXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2JhY2tncm91bmRJbWFnZTogYHVybCgkeydodHRwczovL3d3dy5jb2RpZ28uY28vaW1nL3VpL2ljby1hcHBfc3RvcmVAMngucG5nJ30pYH19Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiQ1RBZ3JpZF9fbGFiZWxJdGVtXCI+QXZhaWxhYmxlIG9uPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJDVEFncmlkX19jb3B5SXRlbVwiPkFwcCBzdG9yZTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJDVEFncmlkX19ncmlkR3JvdXBXcmFwcGVyIGlzLS1sb2FkZWRTdGF0ZVwiIGhyZWY9XCJodHRwczovL3BsYXkuZ29vZ2xlLmNvbS9zdG9yZS9hcHBzL2RldGFpbHM/aWQ9Y29tLmZ3ZC5jb2RpZ28mYW1wO2hsPWVuX1VTJmFtcDtnbD1VU1wiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXBwLWljb25cIiBzdHlsZT17e2JhY2tncm91bmRJbWFnZTogYHVybCgkeydodHRwczovL3d3dy5jb2RpZ28uY28vaW1nL3VpL2ljby1nb29nbGVfcGxheS1zdG9yZUAyeC5wbmcnfSlgfX0vPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJDVEFncmlkX19sYWJlbEl0ZW1cIj5BdmFpbGFibGUgb248L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIkNUQWdyaWRfX2NvcHlJdGVtXCI+R29vZ2xlIHBsYXk8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICA8RmFkZSBib3R0b20+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYWJvdXQtYnVzaW5lc3MnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEgJiYgZGF0YT8uZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9GYWRlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmVhdHVyZVwiPiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+S2V5IEZlYXR1cmVzPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogZGF0YT8ua2V5X2ZlYXR1cmVzIH19IC8+ICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEZhZGUgdG9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYmFjay1sYXlvdXRcIiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogKGRhdGEgJiYgZGF0YT8uY29sb3VyX3NjaGVtZSkgPyBkYXRhLmNvbG91cl9zY2hlbWU6ICdyZ2IoMjcsIDE2NCwgODUpJ319PlxyXG4gICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGltbWVyJiYoPEZhZGU+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE15U2xpZGVyIGdhbGxlcnk9e2RhdGE/LmdhbGxlcnl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRmFkZT4pfVxyXG5cclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0ZhZGU+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICk7XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBXb3JrRGV0YWlsU2VjdGlvbjsiXSwic291cmNlUm9vdCI6IiJ9