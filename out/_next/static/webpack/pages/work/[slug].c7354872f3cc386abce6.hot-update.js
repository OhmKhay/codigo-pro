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
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {
          bottom: true,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "feature",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "Key Features"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 104,
              columnNumber: 25
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              dangerouslySetInnerHTML: {
                __html: data === null || data === void 0 ? void 0 : data.key_features
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 105,
              columnNumber: 25
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 23
          }, _this)
        }, void 0, false, {
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
                lineNumber: 116,
                columnNumber: 29
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 114,
              columnNumber: 35
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 23
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 23
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 109,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudC9Xcm9rRGV0YWlsU2VjdGlvbi9pbmRleC5qcyJdLCJuYW1lcyI6WyJXb3JrRGV0YWlsU2VjdGlvbiIsImRhdGEiLCJsaXN0ZW5lciIsInVzZVN0YXRlIiwidGltbWVyIiwic2V0VGltZXIiLCJ0b3BTdGF0ZSIsInNldFRvcFN0YXRlIiwidXNlRWZmZWN0Iiwic2Nyb2xsTnVtIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInNjcm9sbGVkIiwic2Nyb2xsaW5nRWxlbWVudCIsInNjcm9sbFRvcCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzZXRJbnRlcnZhbCIsIm5hbWUiLCJSb3V0ZXIiLCJwdXNoIiwicHJldl9wb3N0X3NsdWciLCJuZXh0X3Bvc3Rfc2x1ZyIsImJhY2tncm91bmRJbWFnZSIsImRlc2NyaXB0aW9uIiwiX19odG1sIiwia2V5X2ZlYXR1cmVzIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3VyX3NjaGVtZSIsImdhbGxlcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNQSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLE9BQVk7QUFBQTs7QUFBQSxNQUFWQyxJQUFVLFFBQVZBLElBQVU7QUFDbEMsTUFBSUMsUUFBUSxHQUFHLElBQWY7O0FBRGtDLGtCQUVQQyxzREFBUSxDQUFDLEtBQUQsQ0FGRDtBQUFBLE1BRTNCQyxNQUYyQjtBQUFBLE1BRW5CQyxRQUZtQjs7QUFBQSxtQkFHRkYsc0RBQVEsQ0FBQyxLQUFELENBSE47QUFBQSxNQUczQkcsUUFIMkI7QUFBQSxNQUdqQkMsV0FIaUI7O0FBT2xDQyx5REFBUyxDQUFDLFlBQU07QUFDWixRQUFJQyxTQUFTLEdBQUcsSUFBaEI7QUFFQVAsWUFBUSxHQUFHUSxRQUFRLENBQUNDLGdCQUFULENBQTBCLFFBQTFCLEVBQW9DLFVBQUFD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LElBQUosZUFBSUEsSUFBSSxDQUFFMkIsYUFBZixHQUFnQzNCLElBQUksQ0FBQzJCLGFBQXJDLEdBQW9EO0FBQXRFLGFBQXhDO0FBQUEsc0JBR0d4QixNQUFNLGlCQUFHLHFFQUFDLHdEQUFEO0FBQUEscUNBRU4scUVBQUMsK0NBQUQ7QUFBVSx1QkFBTyxFQUFFSCxJQUFGLGFBQUVBLElBQUYsdUJBQUVBLElBQUksQ0FBRTRCO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFETjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBbENKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXpCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQWdGSCxDQXhIRDs7R0FBTTdCLGlCOztLQUFBQSxpQjtBQTBIU0EsZ0ZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvd29yay9bc2x1Z10uYzczNTQ4NzJmM2NjMzg2YWJjZTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEZhZGUgZnJvbSAncmVhY3QtcmV2ZWFsL0ZhZGUnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IE15U2xpZGVyIGZyb20gJy4vU2xpZGVyJztcclxuIFxyXG5pbXBvcnQgJy4vd29yay1kZXRhaWwtc2VjdGlvbi5zY3NzJztcclxuXHJcbmNvbnN0IFdvcmtEZXRhaWxTZWN0aW9uID0gKHtkYXRhfSkgPT4ge1xyXG4gICAgbGV0IGxpc3RlbmVyID0gbnVsbDtcclxuICAgIGNvbnN0IFt0aW1tZXIsIHNldFRpbWVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFt0b3BTdGF0ZSwgc2V0VG9wU3RhdGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxldCBzY3JvbGxOdW0gPSB0cnVlO1xyXG4gICAgXHJcbiAgICAgICAgbGlzdGVuZXIgPSBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBlID0+IHtcclxuICAgICAgICAgIGxldCBzY3JvbGxlZCA9IGRvY3VtZW50LnNjcm9sbGluZ0VsZW1lbnQuc2Nyb2xsVG9wO1xyXG4gICAgICAgICAgXHJcbiAgICAgXHJcbiAgICAgICAgICBpZiAoc2Nyb2xsZWQgPD0gMTIwIHx8IHNjcm9sbGVkID09PSAwKSB7XHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgICBzY3JvbGxOdW0gJiYgc2V0VG9wU3RhdGUodHJ1ZSlcclxuICAgICAgXHJcbiAgICAgICAgICB9IFxyXG4gICAgICAgICAgaWYoc2Nyb2xsZWQgPj0gODAwKSB7XHJcbiAgICAgICAgICAgICAgc2Nyb2xsTnVtICYmIHNldFRvcFN0YXRlKGZhbHNlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgXHJcbiAgICAgICAgICBcclxuICAgICAgICB9KTtcclxuICAgIFxyXG4gICAgXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGxpc3RlbmVyKTtcclxuICAgICAgICAgIHNjcm9sbE51bSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICB9LCBbdG9wU3RhdGVdKTtcclxuXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRJbnRlcnZhbChmdW5jdGlvbigpeyBcclxuICAgICAgICAgICAgICBzZXRUaW1lcih0cnVlKTtcclxuICAgICAgICB9LCAyMDAwKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImRldGFpbC1zZWN0aW9uXCI+XHJcbiAgICAgICAgICAgIDxGYWRlIGJvdHRvbT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICA8aDQ+e2RhdGEgJiYgZGF0YT8ubmFtZX08L2g0PiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9GYWRlPlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0b3BTdGF0ZSYmPD5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPEZhZGUgbGVmdD5cclxuICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUm91dGVyLnB1c2goYC93b3JrLyR7ZGF0YS5wcmV2X3Bvc3Rfc2x1Z31gKVxyXG4gICAgICAgICAgICB9fSBjbGFzc05hbWU9eydwcmV2IGJ0bl93cmFwcGVyJ30+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9GYWRlPlxyXG4gICAgICAgICAgICA8RmFkZSByaWdodD5cclxuICAgICAgICAgICAgICA8ZGl2ICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUm91dGVyLnB1c2goYC93b3JrLyR7ZGF0YS5uZXh0X3Bvc3Rfc2x1Z31gKVxyXG4gICAgICAgICAgICB9fSBjbGFzc05hbWU9eyduZXh0IGJ0bl93cmFwcGVyJ30+XHJcblxyXG4gICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvRmFkZT5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsLWxheW91dFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJDVEFncmlkX19tYWluV3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhICBocmVmPVwiaHR0cHM6Ly9hcHBzLmFwcGxlLmNvbS91cy9hcHAvZndkLXNnL2lkMTUzODUzNTY4MlwiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcHAtaWNvblwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHsnaHR0cHM6Ly93d3cuY29kaWdvLmNvL2ltZy91aS9pY28tYXBwX3N0b3JlQDJ4LnBuZyd9KWB9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIkNUQWdyaWRfX2xhYmVsSXRlbVwiPkF2YWlsYWJsZSBvbjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiQ1RBZ3JpZF9fY29weUl0ZW1cIj5BcHAgc3RvcmU8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiQ1RBZ3JpZF9fZ3JpZEdyb3VwV3JhcHBlciBpcy0tbG9hZGVkU3RhdGVcIiBocmVmPVwiaHR0cHM6Ly9wbGF5Lmdvb2dsZS5jb20vc3RvcmUvYXBwcy9kZXRhaWxzP2lkPWNvbS5md2QuY29kaWdvJmFtcDtobD1lbl9VUyZhbXA7Z2w9VVNcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcC1pY29uXCIgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHsnaHR0cHM6Ly93d3cuY29kaWdvLmNvL2ltZy91aS9pY28tZ29vZ2xlX3BsYXktc3RvcmVAMngucG5nJ30pYH19Lz4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiQ1RBZ3JpZF9fbGFiZWxJdGVtXCI+QXZhaWxhYmxlIG9uPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJDVEFncmlkX19jb3B5SXRlbVwiPkdvb2dsZSBwbGF5PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgPEZhZGUgYm90dG9tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Fib3V0LWJ1c2luZXNzJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhICYmIGRhdGE/LmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9GYWRlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGYWRlIGJvdHRvbT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmVhdHVyZVwiPiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+S2V5IEZlYXR1cmVzPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogZGF0YT8ua2V5X2ZlYXR1cmVzIH19IC8+ICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0ZhZGU+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxGYWRlIHRvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImJhY2stbGF5b3V0XCIgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IChkYXRhICYmIGRhdGE/LmNvbG91cl9zY2hlbWUpID8gZGF0YS5jb2xvdXJfc2NoZW1lOiAncmdiKDI3LCAxNjQsIDg1KSd9fT5cclxuICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RpbW1lciYmKDxGYWRlPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNeVNsaWRlciBnYWxsZXJ5PXtkYXRhPy5nYWxsZXJ5fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ZhZGU+KX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9GYWRlPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICBcclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICApO1xyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgV29ya0RldGFpbFNlY3Rpb247Il0sInNvdXJjZVJvb3QiOiIifQ==