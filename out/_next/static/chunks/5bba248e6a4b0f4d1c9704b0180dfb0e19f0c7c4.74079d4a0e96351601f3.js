(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[4],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=a,t.useAmp=function(){return a(o.default.useContext(c.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},c=n("lwAK");function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,c=e.hasQuery,a=void 0!==c&&c;return n||o&&a}},"1h7F":function(e,t,n){},"20a2":function(e,t,n){e.exports=n("nOHt")},"5fIB":function(e,t,n){var r=n("7eYB");e.exports=function(e){if(Array.isArray(e))return r(e)}},"86jE":function(e,t,n){},"8Kt/":function(e,t,n){"use strict";var r=n("oI91");function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.__esModule=!0,t.defaultHead=f,t.default=void 0;var c,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=d();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var c=r?Object.getOwnPropertyDescriptor(e,o):null;c&&(c.get||c.set)?Object.defineProperty(n,o,c):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),i=(c=n("Xuae"))&&c.__esModule?c:{default:c},s=n("lwAK"),l=n("FYa8"),u=n("/0+H");function d(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return d=function(){return e},e}function f(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var h=["name","httpEquiv","charSet","itemProp"];function j(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(p,[]).reverse().concat(f(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var c=!0,a=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){a=!0;var i=o.key.slice(o.key.indexOf("$")+1);e.has(i)?c=!1:e.add(i)}switch(o.type){case"title":case"base":t.has(o.type)?c=!1:t.add(o.type);break;case"meta":for(var s=0,l=h.length;s<l;s++){var u=h[s];if(o.props.hasOwnProperty(u))if("charSet"===u)n.has(u)?c=!1:n.add(u);else{var d=o.props[u],f=r[u]||new Set;"name"===u&&a||!f.has(d)?(f.add(d),r[u]=f):c=!1}}}return c}}()).reverse().map((function(e,n){var c=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var i=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return i["data-href"]=i.href,i.href=void 0,i["data-optimized-fonts"]=!0,a.default.cloneElement(e,i)}return a.default.cloneElement(e,{key:c})}))}function b(e){var t=e.children,n=(0,a.useContext)(s.AmpStateContext),r=(0,a.useContext)(l.HeadManagerContext);return a.default.createElement(i.default,{reduceComponentsToState:j,headManager:r,inAmpMode:(0,u.isInAmpMode)(n)},t)}b.rewind=function(){};var m=b;t.default=m},Xuae:function(e,t,n){"use strict";var r=n("mPvQ"),o=n("/GRZ"),c=n("i2R6"),a=(n("qXWd"),n("48fX")),i=n("tCBg"),s=n("T0f4");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return i(this,n)}}t.__esModule=!0,t.default=void 0;var u=n("q1tI"),d=function(e){a(n,e);var t=l(n);function n(e){var c;return o(this,n),(c=t.call(this,e))._hasHeadManager=void 0,c.emitChange=function(){c._hasHeadManager&&c.props.headManager.updateHead(c.props.reduceComponentsToState(r(c.props.headManager.mountedInstances),c.props))},c._hasHeadManager=c.props.headManager&&c.props.headManager.mountedInstances,c}return c(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(u.Component);t.default=d},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("zoAU"),o=n("7KCV");t.__esModule=!0,t.default=void 0;var c=o(n("q1tI")),a=n("elyg"),i=n("nOHt"),s=n("vNVm"),l={};function u(e,t,n,r){if(e&&(0,a.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(o?"%"+o:"")]=!0}}var d=function(e){var t=!1!==e.prefetch,n=(0,i.useRouter)(),o=n&&n.asPath||"/",d=c.default.useMemo((function(){var t=(0,a.resolveHref)(o,e.href,!0),n=r(t,2),c=n[0],i=n[1];return{href:c,as:e.as?(0,a.resolveHref)(o,e.as):i||c}}),[o,e.href,e.as]),f=d.href,p=d.as,h=e.children,j=e.replace,b=e.shallow,m=e.scroll,v=e.locale;"string"===typeof h&&(h=c.default.createElement("a",null,h));var O=c.Children.only(h),g=O&&"object"===typeof O&&O.ref,y=(0,s.useIntersection)({rootMargin:"200px"}),x=r(y,2),w=x[0],k=x[1],C=c.default.useCallback((function(e){w(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,w]);(0,c.useEffect)((function(){var e=k&&t&&(0,a.isLocalURL)(f),r="undefined"!==typeof v?v:n&&n.locale,o=l[f+"%"+p+(r?"%"+r:"")];e&&!o&&u(n,f,p,{locale:r})}),[p,f,k,v,t,n]);var M={ref:C,onClick:function(e){O.props&&"function"===typeof O.props.onClick&&O.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,c,i,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(n))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:c,locale:s,scroll:i}))}(e,n,f,p,j,b,m,v)},onMouseEnter:function(e){(0,a.isLocalURL)(f)&&(O.props&&"function"===typeof O.props.onMouseEnter&&O.props.onMouseEnter(e),u(n,f,p,{priority:!0}))}};if(e.passHref||"a"===O.type&&!("href"in O.props)){var N="undefined"!==typeof v?v:n&&n.locale,P=n&&n.isLocaleDomain&&(0,a.getDomainLocale)(p,N,n&&n.locales,n&&n.domainLocales);M.href=P||(0,a.addBasePath)((0,a.addLocale)(p,N,n&&n.defaultLocale))}return c.default.cloneElement(O,M)};t.default=d},fPYM:function(e,t,n){},g4pe:function(e,t,n){e.exports=n("8Kt/")},jeCR:function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var r=n("nKUr"),o=n("q1tI"),c=n.n(o),a=n("g4pe"),i=n.n(a),s=n("cpVT");function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=n("20a2"),d=n("YFqc"),f=n.n(d);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){Object(s.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var j=Object(u.withRouter)((function(e){var t=e.router,n=e.children,a=l(e,["router","children"]),i=o.Children.only(n),s=i.props.className||null;return t.pathname===a.href&&a.activeClassName&&(s="".concat(null!==s?s:""," ").concat(a.activeClassName).trim()),delete a.activeClassName,Object(r.jsx)(f.a,h(h({},a),{},{children:c.a.cloneElement(i,{className:s})}))})),b=(n("fPYM"),n.p,n.p,function(){var e,t=Object(o.useState)(!1),n=t[0],c=t[1],a=Object(o.useState)(!1),i=a[0],l=a[1],d=Object(u.useRouter)(),f=function(){return"/work"===d.pathname||"/"===d.pathname};return Object(r.jsx)("header",{children:Object(r.jsxs)("div",{className:"app-nav",children:[Object(r.jsx)("a",{href:"/work?tags=all",children:Object(r.jsx)("div",{className:"logo",children:f()?Object(r.jsx)("img",{src:"https://www.codigo.co/img/ui/logo-codigo-red.svg",className:"App-logo",alt:"logo"}):Object(r.jsxs)("div",{className:"back-icon",children:[Object(r.jsx)("div",{className:"icon"}),Object(r.jsx)("p",{className:"back-txt",children:"back to work"})]})})}),Object(r.jsxs)("nav",{className:"nav-list",children:[Object(r.jsx)("div",{className:n?"ci_show":"ci_none"}),Object(r.jsx)("selection",{className:"hbg_menu",onClick:function(){return c(!n)},children:Object(r.jsx)("div",{className:"circle",onClick:function(){return c(!n)},children:Object(r.jsxs)("div",(e={id:"nav-icon",onClick:function(){l(!i)}},Object(s.a)(e,"onClick",(function(){return c(!n)})),Object(s.a)(e,"className","".concat(n?"op":"")),Object(s.a)(e,"children",[Object(r.jsx)("span",{}),Object(r.jsx)("span",{}),Object(r.jsx)("span",{}),Object(r.jsx)("span",{})]),e))})}),Object(r.jsxs)("ul",{className:n?"open":"",children:[Object(r.jsx)("li",{className:f()?"":"detail",children:Object(r.jsx)(j,{href:"/work",activeClassName:"active",children:Object(r.jsx)("a",{children:" Work "})})}),Object(r.jsx)("li",{className:f()?"":"detail",children:Object(r.jsx)(j,{href:"/solutions",activeClassName:"active",children:Object(r.jsx)("a",{children:"Solutions"})})}),Object(r.jsx)("li",{className:f()?"":"detail",children:Object(r.jsx)(j,{href:"/services",activeClassName:"active",children:Object(r.jsx)("a",{children:"Services"})})}),Object(r.jsx)("li",{className:f()?"":"detail",children:Object(r.jsx)("a",{href:"/about",children:"about us"})}),Object(r.jsx)("li",{className:f()?"":"detail",children:Object(r.jsx)("a",{href:"/blog",children:"Blog"})}),Object(r.jsx)("li",{className:f()?"mobile":"detail mobile",children:Object(r.jsx)("a",{href:"/",children:"Request a quote"})}),Object(r.jsx)("li",{className:f()?"mobile":"detail mobile",children:Object(r.jsx)("a",{href:"/",children:"Let's chat"})}),Object(r.jsx)("li",{className:"quote",children:Object(r.jsx)("a",{href:"/blog",children:Object(r.jsx)("button",{children:"Request a quote"})})})]})]})]})})}),m=(n("86jE"),function(){return Object(r.jsxs)("footer",{className:"footer_con footer",children:[Object(r.jsx)("div",{children:Object(r.jsx)("h5",{className:"title",children:"Let\u2019s have a chat"})}),Object(r.jsx)("div",{className:"step-layout",children:O.map((function(e,t){return Object(r.jsxs)("div",{className:"step-item",children:[Object(r.jsx)("h5",{className:"item-title",children:e.title}),Object(r.jsx)("p",{className:"item-txt",children:e.txt})]},t)}))}),Object(r.jsx)("div",{className:"social-info",children:v.map((function(e,t){return Object(r.jsx)("div",{children:Object(r.jsx)("a",{href:e.link,className:"social__item",children:Object(r.jsx)("img",{src:e.url,alt:"socail logo"})})},t)}))}),Object(r.jsxs)("div",{className:"address",children:[Object(r.jsx)("p",{children:"Copyright \xa9 Codigo - Mobile App Developer Singapore"}),Object(r.jsx)("p",{children:"+65 6455 9790 \u2022 26 Sin Ming Lane, Midview City #07-115 Singapore 573971"})]})]})}),v=[{url:"https://www.codigo.co/img/icons/social-facebook.svg",link:"https://www.facebook.com/codigo.co/"},{url:"https://www.codigo.co/img/icons/social-twitter.svg",link:"https://twitter.com/CodigoApps"},{url:"https://www.codigo.co/img/icons/social-instagram.svg",link:"https://www.instagram.com/hellocodigo"},{url:"https://www.codigo.co/img/icons/social-linkedIn.svg",link:"https://www.linkedin.com/company/codigo-pte-ltd"}],O=[{title:"Build",txt:"Help you build something"},{title:"Co-incubate",txt:"Co-incubate an idea together"},{title:"Customise",txt:"Customise a solution for your business"},{title:"Organise",txt:"Organise learning sessions with us"}],g=(n("1h7F"),function(e){var t=e.name,n=void 0===t?"Our iOS, Android & Web Development Work":t,o=e.children;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(i.a,{children:[Object(r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),Object(r.jsx)("meta",{"http-equiv":"X-UA-Compatible",content:"ie=edge"}),Object(r.jsxs)("title",{children:["  ",n," | Codigo "]}),Object(r.jsx)("meta",{name:"description",content:"Award winning Singapore based mobile app development company. iOS, Android, Web, Social, Games, UI, UX & SEO. 300 apps developed since 2010."}),Object(r.jsx)("meta",{property:"og:image",content:"https://www.codigo.co/img/social.jpg"}),Object(r.jsx)("link",{rel:"shortcut icon",href:"favicon.ico"}),Object(r.jsx)("meta",{name:"pinterest",content:"nopin"})]}),Object(r.jsx)(b,{}),o,Object(r.jsx)(m,{})]})})},kG2m:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},mPvQ:function(e,t,n){var r=n("5fIB"),o=n("rlHP"),c=n("KckH"),a=n("kG2m");e.exports=function(e){return r(e)||o(e)||c(e)||a()}},oI91:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},rlHP:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},vNVm:function(e,t,n){"use strict";var r=n("zoAU");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!a,s=(0,o.useRef)(),l=(0,o.useState)(!1),u=r(l,2),d=u[0],f=u[1],p=(0,o.useCallback)((function(e){s.current&&(s.current(),s.current=void 0),n||d||e&&e.tagName&&(s.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=i.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return i.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,c=r.observer,a=r.elements;return a.set(e,t),c.observe(e),function(){a.delete(e),c.unobserve(e),0===a.size&&(c.disconnect(),i.delete(o))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,d]);return(0,o.useEffect)((function(){if(!a&&!d){var e=(0,c.requestIdleCallback)((function(){return f(!0)}));return function(){return(0,c.cancelIdleCallback)(e)}}}),[d]),[p,d]};var o=n("q1tI"),c=n("0G5g"),a="undefined"!==typeof IntersectionObserver;var i=new Map}}]);