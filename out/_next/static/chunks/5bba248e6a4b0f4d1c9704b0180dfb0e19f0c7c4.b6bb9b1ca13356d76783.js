(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[4],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=s,t.useAmp=function(){return s(o.default.useContext(r.AmpStateContext))};var i,o=(i=n("q1tI"))&&i.__esModule?i:{default:i},r=n("lwAK");function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,i=e.hybrid,o=void 0!==i&&i,r=e.hasQuery,s=void 0!==r&&r;return n||o&&s}},"/eHF":function(e,t,n){"use strict";function i(e,t){var n={};for(var i in e)t.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n}function o(e,t){var n=t.distance,i=t.left,o=t.right,r=t.up,s=t.down,a=t.top,c=t.bottom,u=t.big,d=t.mirror,f=t.opposite,h=(n?n.toString():0)+((i?1:0)|(o?2:0)|(a||s?4:0)|(c||r?8:0)|(d?16:0)|(f?32:0)|(e?64:0)|(u?128:0));if(p.hasOwnProperty(h))return p[h];var v=i||o||r||s||a||c,m=void 0,b=void 0;if(v){if(!d!=!(e&&f)){var y=[o,i,c,a,s,r];i=y[0],o=y[1],a=y[2],c=y[3],r=y[4],s=y[5]}var w=n||(u?"2000px":"100%");m=i?"-"+w:o?w:"0",b=s||a?"-"+w:r||c?w:"0"}return p[h]=(0,l.animation)((e?"to":"from")+" {opacity: 0;"+(v?" transform: translate3d("+m+", "+b+", 0);":"")+"}\n     "+(e?"from":"to")+" {opacity: 1;transform: none;} "),p[h]}function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l.defaults,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e.children,r=(e.out,e.forever),s=e.timeout,a=e.duration,c=void 0===a?l.defaults.duration:a,d=e.delay,p=void 0===d?l.defaults.delay:d,f=e.count,h=void 0===f?l.defaults.count:f,v=i(e,["children","out","forever","timeout","duration","delay","count"]),m={make:o,duration:void 0===s?c:s,delay:p,forever:r,count:h,style:{animationFillMode:"both"},reverse:v.left};return t?(0,u.default)(v,m,m,n):m}Object.defineProperty(t,"__esModule",{value:!0});var s,a=n("17x9"),l=n("ar19"),c=n("eH+L"),u=(s=c)&&s.__esModule?s:{default:s},d={out:a.bool,left:a.bool,right:a.bool,top:a.bool,bottom:a.bool,big:a.bool,mirror:a.bool,opposite:a.bool,duration:a.number,timeout:a.number,distance:a.string,delay:a.number,count:a.number,forever:a.bool},p={};r.propTypes=d,t.default=r,e.exports=t.default},"1h7F":function(e,t,n){},"20a2":function(e,t,n){e.exports=n("nOHt")},"28nh":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],i=!0,o=!1,r=void 0;try{for(var s,a=e[Symbol.iterator]();!(i=(s=a.next()).done)&&(n.push(s.value),!t||n.length!==t);i=!0);}catch(e){o=!0,r=e}finally{try{!i&&a.return&&a.return()}finally{if(o)throw r}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),l=n("q1tI"),c=(i=l)&&i.__esModule?i:{default:i},u=n("17x9"),d=n("ar19"),p=(0,u.shape)({make:u.func,duration:u.number.isRequired,delay:u.number.isRequired,forever:u.bool,count:u.number.isRequired,style:u.object.isRequired,reverse:u.bool}),f={collapse:u.bool,collapseEl:u.element,cascade:u.bool,wait:u.number,force:u.bool,disabled:u.bool,appear:u.bool,enter:u.bool,exit:u.bool,fraction:u.number,refProp:u.string,innerRef:u.func,onReveal:u.func,unmountOnExit:u.bool,mountOnEnter:u.bool,inEffect:p.isRequired,outEffect:(0,u.oneOfType)([p,(0,u.oneOf)([!1])]).isRequired,ssrReveal:u.bool,collapseOnly:u.bool,ssrFadeout:u.bool},h={transitionGroup:u.object},v=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var i=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return i.isOn=void 0===e.when||!!e.when,i.state={collapse:e.collapse?t.getInitialCollapseStyle(e):void 0,style:{opacity:i.isOn&&!e.ssrReveal||!e.outEffect?void 0:0}},i.savedChild=!1,i.isShown=!1,d.observerMode?i.handleObserve=i.handleObserve.bind(i):(i.revealHandler=i.makeHandler(i.reveal),i.resizeHandler=i.makeHandler(i.resize)),i.saveRef=i.saveRef.bind(i),i}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"saveRef",value:function(e){this.childRef&&this.childRef(e),this.props.innerRef&&this.props.innerRef(e),this.el!==e&&(this.el=e&&"offsetHeight"in e?e:void 0,this.observe(this.props,!0))}},{key:"invisible",value:function(){this&&this.el&&(this.savedChild=!1,this.isShown||(this.setState({hasExited:!0,collapse:this.props.collapse?s({},this.state.collapse,{visibility:"hidden"}):null,style:{opacity:0}}),!d.observerMode&&this.props.collapse&&window.document.dispatchEvent(d.collapseend)))}},{key:"animationEnd",value:function(e,t,n){var i=this,o=n.forever,r=n.count,s=n.delay,a=n.duration;if(!o){this.animationEndTimeout=window.setTimeout((function(){i&&i.el&&(i.animationEndTimeout=void 0,e.call(i))}),s+(a+(t?a:0)*r))}}},{key:"getDimensionValue",value:function(){return this.el.offsetHeight+parseInt(window.getComputedStyle(this.el,null).getPropertyValue("margin-top"),10)+parseInt(window.getComputedStyle(this.el,null).getPropertyValue("margin-bottom"),10)}},{key:"collapse",value:function(e,t,n){var i=n.duration+(t.cascade?n.duration:0),o=this.isOn?this.getDimensionValue():0,r=void 0,s=void 0;if(t.collapseOnly)r=n.duration/3,s=n.delay;else{var a=i>>2,l=a>>1;r=a,s=n.delay+(this.isOn?0:i-a-l),e.style.animationDuration=i-a+(this.isOn?l:-l)+"ms",e.style.animationDelay=n.delay+(this.isOn?a-l:0)+"ms"}return e.collapse={height:o,transition:"height "+r+"ms ease "+s+"ms",overflow:t.collapseOnly?"hidden":void 0},e}},{key:"animate",value:function(e){if(this&&this.el&&(this.unlisten(),this.isShown!==this.isOn)){this.isShown=this.isOn;var t=!this.isOn&&e.outEffect,n=e[t?"outEffect":"inEffect"],i="style"in n&&n.style.animationName||void 0,o=void 0;e.collapseOnly?o={hasAppeared:!0,hasExited:!1,style:{opacity:1}}:((e.outEffect||this.isOn)&&n.make&&(i=n.make),o={hasAppeared:!0,hasExited:!1,collapse:void 0,style:s({},n.style,{animationDuration:n.duration+"ms",animationDelay:n.delay+"ms",animationIterationCount:n.forever?"infinite":n.count,opacity:1,animationName:i}),className:n.className}),this.setState(e.collapse?this.collapse(o,e,n):o),t?(this.savedChild=c.default.cloneElement(this.getChild()),this.animationEnd(this.invisible,e.cascade,n)):this.savedChild=!1,this.onReveal(e)}}},{key:"onReveal",value:function(e){e.onReveal&&this.isOn&&(this.onRevealTimeout&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)),e.wait?this.onRevealTimeout=window.setTimeout(e.onReveal,e.wait):e.onReveal())}},{key:"componentWillUnmount",value:function(){this.unlisten(),d.ssr&&(0,d.disableSsr)()}},{key:"handleObserve",value:function(e,t){r(e,1)[0].intersectionRatio>0&&(t.disconnect(),this.observer=null,this.reveal(this.props,!0))}},{key:"observe",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(this.el&&d.observerMode){if(this.observer){if(!t)return;this.observer.disconnect()}else if(t)return;this.observer=new IntersectionObserver(this.handleObserve,{threshold:e.fraction}),this.observer.observe(this.el)}}},{key:"reveal",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];d.globalHide||(0,d.hideAll)(),this&&this.el&&(e||(e=this.props),d.ssr&&(0,d.disableSsr)(),this.isOn&&this.isShown&&void 0!==e.spy?(this.isShown=!1,this.setState({style:{}}),window.setTimeout((function(){return t.reveal(e)}),200)):n||this.inViewport(e)||e.force?this.animate(e):d.observerMode?this.observe(e):this.listen())}},{key:"componentDidMount",value:function(){var e=this;if(this.el&&!this.props.disabled){this.props.collapseOnly||("make"in this.props.inEffect&&this.props.inEffect.make(!1,this.props),void 0!==this.props.when&&this.props.outEffect&&"make"in this.props.outEffect&&this.props.outEffect.make(!0,this.props));var n=this.context.transitionGroup,i=n&&!n.isMounting?!("enter"in this.props&&!1===this.props.enter):this.props.appear;return this.isOn&&((void 0!==this.props.when||void 0!==this.props.spy)&&!i||d.ssr&&!d.fadeOutEnabled&&!this.props.ssrFadeout&&this.props.outEffect&&!this.props.ssrReveal&&t.getTop(this.el)<window.pageYOffset+window.innerHeight)?(this.isShown=!0,this.setState({hasAppeared:!0,collapse:this.props.collapse?{height:this.getDimensionValue()}:this.state.collapse,style:{opacity:1}}),void this.onReveal(this.props)):d.ssr&&(d.fadeOutEnabled||this.props.ssrFadeout)&&this.props.outEffect&&t.getTop(this.el)<window.pageYOffset+window.innerHeight?(this.setState({style:{opacity:0,transition:"opacity 1000ms 1000ms"}}),void window.setTimeout((function(){return e.reveal(e.props,!0)}),2e3)):void(this.isOn&&(this.props.force?this.animate(this.props):this.reveal(this.props)))}}},{key:"cascade",value:function(e){var t=this,n=void 0;n="string"==typeof e?e.split("").map((function(e,t){return c.default.createElement("span",{key:t,style:{display:"inline-block",whiteSpace:"pre"}},e)})):c.default.Children.toArray(e);var i=this.props[this.isOn||!this.props.outEffect?"inEffect":"outEffect"],r=i.duration,a=i.reverse,l=n.length,u=2*r;this.props.collapse&&(u=parseInt(this.state.style.animationDuration,10),r=u/2);var p=a?l:0;return n.map((function(e){return"object"===(void 0===e?"undefined":o(e))&&e?c.default.cloneElement(e,{style:s({},e.props.style,t.state.style,{animationDuration:Math.round((0,d.cascade)(a?p--:p++,0,l,r,u))+"ms"})}):e}))}},{key:"componentWillReceiveProps",value:function(e){void 0!==e.when&&(this.isOn=!!e.when),e.fraction!==this.props.fraction&&this.observe(e,!0),!this.isOn&&e.onExited&&"exit"in e&&!1===e.exit?e.onExited():e.disabled||(e.collapse&&!this.props.collapse&&(this.setState({style:{},collapse:t.getInitialCollapseStyle(e)}),this.isShown=!1),e.when===this.props.when&&e.spy===this.props.spy||this.reveal(e),this.onRevealTimeout&&!this.isOn&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)))}},{key:"getChild",value:function(){if(this.savedChild&&!this.props.disabled)return this.savedChild;if("object"===o(this.props.children)){var e=c.default.Children.only(this.props.children);return"type"in e&&"string"==typeof e.type||"ref"!==this.props.refProp?e:c.default.createElement("div",null,e)}return c.default.createElement("div",null,this.props.children)}},{key:"render",value:function(){var e;e=this.state.hasAppeared?!this.props.unmountOnExit||!this.state.hasExited||this.isOn:!this.props.mountOnEnter||this.isOn;var t=this.getChild();"function"==typeof t.ref&&(this.childRef=t.ref);var n=!1,i=t.props,o=i.style,r=i.className,a=i.children,l=this.props.disabled?r:(this.props.outEffect?d.namespace:"")+(this.state.className?" "+this.state.className:"")+(r?" "+r:"")||void 0,u=void 0;"function"==typeof this.state.style.animationName&&(this.state.style.animationName=this.state.style.animationName(!this.isOn,this.props)),this.props.cascade&&!this.props.disabled&&a&&this.state.style.animationName?(n=this.cascade(a),u=s({},o,{opacity:1})):u=this.props.disabled?o:s({},o,this.state.style);var p=s({},this.props.props,function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({className:l,style:u},this.props.refProp,this.saveRef)),f=c.default.cloneElement(t,p,e?n||a:void 0);return void 0!==this.props.collapse?this.props.collapseEl?c.default.cloneElement(this.props.collapseEl,{style:s({},this.props.collapseEl.style,this.props.disabled?void 0:this.state.collapse),children:f}):c.default.createElement("div",{style:this.props.disabled?void 0:this.state.collapse,children:f}):f}},{key:"makeHandler",value:function(e){var t=this,n=function(){e.call(t,t.props),t.ticking=!1};return function(){t.ticking||((0,d.raf)(n),t.ticking=!0)}}},{key:"inViewport",value:function(e){if(!this.el||window.document.hidden)return!1;var n=this.el.offsetHeight,i=window.pageYOffset-t.getTop(this.el),o=Math.min(n,window.innerHeight)*(d.globalHide?e.fraction:0);return i>o-window.innerHeight&&i<n-o}},{key:"resize",value:function(e){this&&this.el&&this.isOn&&this.inViewport(e)&&(this.unlisten(),this.isShown=this.isOn,this.setState({hasExited:!this.isOn,hasAppeared:!0,collapse:void 0,style:{opacity:this.isOn||!e.outEffect?1:0}}),this.onReveal(e))}},{key:"listen",value:function(){d.observerMode||this.isListener||(this.isListener=!0,window.addEventListener("scroll",this.revealHandler,{passive:!0}),window.addEventListener("orientationchange",this.revealHandler,{passive:!0}),window.document.addEventListener("visibilitychange",this.revealHandler,{passive:!0}),window.document.addEventListener("collapseend",this.revealHandler,{passive:!0}),window.addEventListener("resize",this.resizeHandler,{passive:!0}))}},{key:"unlisten",value:function(){!d.observerMode&&this.isListener&&(window.removeEventListener("scroll",this.revealHandler,{passive:!0}),window.removeEventListener("orientationchange",this.revealHandler,{passive:!0}),window.document.removeEventListener("visibilitychange",this.revealHandler,{passive:!0}),window.document.removeEventListener("collapseend",this.revealHandler,{passive:!0}),window.removeEventListener("resize",this.resizeHandler,{passive:!0}),this.isListener=!1),this.onRevealTimeout&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)),this.animationEndTimeout&&(this.animationEndTimeout=window.clearTimeout(this.animationEndTimeout))}}],[{key:"getInitialCollapseStyle",value:function(e){return{height:0,visibility:e.when?void 0:"hidden"}}},{key:"getTop",value:function(e){for(;void 0===e.offsetTop;)e=e.parentNode;for(var t=e.offsetTop;e.offsetParent;t+=e.offsetTop)e=e.offsetParent;return t}}]),t}(c.default.Component);v.propTypes=f,v.defaultProps={fraction:.2,refProp:"ref"},v.contextTypes=h,v.displayName="RevealBase",t.default=v,e.exports=t.default},"5fIB":function(e,t,n){var i=n("7eYB");e.exports=function(e){if(Array.isArray(e))return i(e)}},"86jE":function(e,t,n){},"8Kt/":function(e,t,n){"use strict";var i=n("oI91");function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}t.__esModule=!0,t.defaultHead=p,t.default=void 0;var r,s=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=d();if(t&&t.has(e))return t.get(e);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var r=i?Object.getOwnPropertyDescriptor(e,o):null;r&&(r.get||r.set)?Object.defineProperty(n,o,r):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),a=(r=n("Xuae"))&&r.__esModule?r:{default:r},l=n("lwAK"),c=n("FYa8"),u=n("/0+H");function d(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return d=function(){return e},e}function p(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[s.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(s.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===s.default.Fragment?e.concat(s.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var h=["name","httpEquiv","charSet","itemProp"];function v(e,t){return e.reduce((function(e,t){var n=s.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(p(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,i={};return function(o){var r=!0,s=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){s=!0;var a=o.key.slice(o.key.indexOf("$")+1);e.has(a)?r=!1:e.add(a)}switch(o.type){case"title":case"base":t.has(o.type)?r=!1:t.add(o.type);break;case"meta":for(var l=0,c=h.length;l<c;l++){var u=h[l];if(o.props.hasOwnProperty(u))if("charSet"===u)n.has(u)?r=!1:n.add(u);else{var d=o.props[u],p=i[u]||new Set;"name"===u&&s||!p.has(d)?(p.add(d),i[u]=p):r=!1}}}return r}}()).reverse().map((function(e,n){var r=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var a=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return a["data-href"]=a.href,a.href=void 0,a["data-optimized-fonts"]=!0,s.default.cloneElement(e,a)}return s.default.cloneElement(e,{key:r})}))}function m(e){var t=e.children,n=(0,s.useContext)(l.AmpStateContext),i=(0,s.useContext)(c.HeadManagerContext);return s.default.createElement(a.default,{reduceComponentsToState:v,headManager:i,inAmpMode:(0,u.isInAmpMode)(n)},t)}m.rewind=function(){};var b=m;t.default=b},Xuae:function(e,t,n){"use strict";var i=n("mPvQ"),o=n("/GRZ"),r=n("i2R6"),s=(n("qXWd"),n("48fX")),a=n("tCBg"),l=n("T0f4");function c(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=l(e);if(t){var o=l(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return a(this,n)}}t.__esModule=!0,t.default=void 0;var u=n("q1tI"),d=function(e){s(n,e);var t=c(n);function n(e){var r;return o(this,n),(r=t.call(this,e))._hasHeadManager=void 0,r.emitChange=function(){r._hasHeadManager&&r.props.headManager.updateHead(r.props.reduceComponentsToState(i(r.props.headManager.mountedInstances),r.props))},r._hasHeadManager=r.props.headManager&&r.props.headManager.mountedInstances,r}return r(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(u.Component);t.default=d},YFqc:function(e,t,n){e.exports=n("cTJO")},ar19:function(e,t,n){"use strict";function i(e){try{return h.insertRule(e,h.cssRules.length)}catch(e){console.warn("react-reveal - animation failed")}}function o(){u||(t.globalHide=u=!0,window.removeEventListener("scroll",o,!0),i("."+r+" { opacity: 0; }"),window.removeEventListener("orientationchange",o,!0),window.document.removeEventListener("visibilitychange",o))}Object.defineProperty(t,"__esModule",{value:!0}),t.insertRule=i,t.cascade=function(e,t,n,i,o){var r=Math.log(i),s=(Math.log(o)-r)/(n-t);return Math.exp(r+s*(e-t))},t.animation=function(e){if(!h)return"";var t="@keyframes "+(v+p)+"{"+e+"}",n=f[e];return n?""+v+n:(h.insertRule(t,h.cssRules.length),f[e]=p,""+v+p++)},t.hideAll=o,t.default=function(e){var n=e.ssrFadeout;t.fadeOutEnabled=n};var r=t.namespace="react-reveal",s=(t.defaults={duration:1e3,delay:0,count:1},t.ssr=!0),a=t.observerMode=!1,l=t.raf=function(e){return window.setTimeout(e,66)},c=t.disableSsr=function(){return t.ssr=s=!1},u=(t.fadeOutEnabled=!1,t.ssrFadeout=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return t.fadeOutEnabled=e},t.globalHide=!1),d=(t.ie10=!1,t.collapseend=void 0),p=1,f={},h=!1,v=r+"-"+Math.floor(1e15*Math.random())+"-";if("undefined"!=typeof window&&"nodejs"!==window.name&&window.document&&"undefined"!=typeof navigator){t.observerMode=a="IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype&&/\{\s*\[native code\]\s*\}/.test(""+IntersectionObserver),t.raf=l=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||l,t.ssr=s=window.document.querySelectorAll("div[data-reactroot]").length>0,-1!==navigator.appVersion.indexOf("MSIE 10")&&(t.ie10=!0),s&&"performance"in window&&"timing"in window.performance&&"domContentLoadedEventEnd"in window.performance.timing&&window.performance.timing.domLoading&&Date.now()-window.performance.timing.domLoading<300&&(t.ssr=s=!1),s&&window.setTimeout(c,1500),a||(t.collapseend=d=document.createEvent("Event"),d.initEvent("collapseend",!0,!0));var m=document.createElement("style");document.head.appendChild(m),m.sheet&&m.sheet.cssRules&&m.sheet.insertRule&&(h=m.sheet,window.addEventListener("scroll",o,!0),window.addEventListener("orientationchange",o,!0),window.document.addEventListener("visibilitychange",o))}},cTJO:function(e,t,n){"use strict";var i=n("zoAU"),o=n("7KCV");t.__esModule=!0,t.default=void 0;var r=o(n("q1tI")),s=n("elyg"),a=n("nOHt"),l=n("vNVm"),c={};function u(e,t,n,i){if(e&&(0,s.isLocalURL)(t)){e.prefetch(t,n,i).catch((function(e){0}));var o=i&&"undefined"!==typeof i.locale?i.locale:e&&e.locale;c[t+"%"+n+(o?"%"+o:"")]=!0}}var d=function(e){var t=!1!==e.prefetch,n=(0,a.useRouter)(),o=n&&n.asPath||"/",d=r.default.useMemo((function(){var t=(0,s.resolveHref)(o,e.href,!0),n=i(t,2),r=n[0],a=n[1];return{href:r,as:e.as?(0,s.resolveHref)(o,e.as):a||r}}),[o,e.href,e.as]),p=d.href,f=d.as,h=e.children,v=e.replace,m=e.shallow,b=e.scroll,y=e.locale;"string"===typeof h&&(h=r.default.createElement("a",null,h));var w=r.Children.only(h),O=w&&"object"===typeof w&&w.ref,g=(0,l.useIntersection)({rootMargin:"200px"}),j=i(g,2),x=j[0],E=j[1],k=r.default.useCallback((function(e){x(e),O&&("function"===typeof O?O(e):"object"===typeof O&&(O.current=e))}),[O,x]);(0,r.useEffect)((function(){var e=E&&t&&(0,s.isLocalURL)(p),i="undefined"!==typeof y?y:n&&n.locale,o=c[p+"%"+f+(i?"%"+i:"")];e&&!o&&u(n,p,f,{locale:i})}),[f,p,E,y,t,n]);var C={ref:k,onClick:function(e){w.props&&"function"===typeof w.props.onClick&&w.props.onClick(e),e.defaultPrevented||function(e,t,n,i,o,r,a,l){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,s.isLocalURL)(n))&&(e.preventDefault(),null==a&&(a=i.indexOf("#")<0),t[o?"replace":"push"](n,i,{shallow:r,locale:l,scroll:a}))}(e,n,p,f,v,m,b,y)},onMouseEnter:function(e){(0,s.isLocalURL)(p)&&(w.props&&"function"===typeof w.props.onMouseEnter&&w.props.onMouseEnter(e),u(n,p,f,{priority:!0}))}};if(e.passHref||"a"===w.type&&!("href"in w.props)){var M="undefined"!==typeof y?y:n&&n.locale,S=n&&n.isLocaleDomain&&(0,s.getDomainLocale)(f,M,n&&n.locales,n&&n.domainLocales);C.href=S||(0,s.addBasePath)((0,s.addLocale)(f,M,n&&n.defaultLocale))}return r.default.cloneElement(w,C)};t.default=d},"eH+L":function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e};t.default=function(e,t,n,i){return"in"in e&&(e.when=e.in),r.default.Children.count(i)<2?r.default.createElement(s.default,o({},e,{inEffect:t,outEffect:n,children:i})):(i=r.default.Children.map(i,(function(i){return r.default.createElement(s.default,o({},e,{inEffect:t,outEffect:n,children:i}))})),"Fragment"in r.default?r.default.createElement(r.default.Fragment,null,i):r.default.createElement("span",null,i))};var r=i(n("q1tI")),s=i(n("28nh"));e.exports=t.default},fPYM:function(e,t,n){},g4pe:function(e,t,n){e.exports=n("8Kt/")},jeCR:function(e,t,n){"use strict";n.d(t,"a",(function(){return O}));var i=n("nKUr"),o=n("q1tI"),r=n.n(o),s=n("g4pe"),a=n.n(s),l=n("cpVT");function c(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=n("20a2"),d=n("YFqc"),p=n.n(d);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var v=Object(u.withRouter)((function(e){var t=e.router,n=e.children,s=c(e,["router","children"]),a=o.Children.only(n),l=a.props.className||null;return t.pathname===s.href&&s.activeClassName&&(l="".concat(null!==l?l:""," ").concat(s.activeClassName).trim()),delete s.activeClassName,Object(i.jsx)(p.a,h(h({},s),{},{children:r.a.cloneElement(a,{className:l})}))})),m=(n("fPYM"),function(){var e,t=Object(o.useState)(!1),n=t[0],r=t[1],s=Object(o.useState)(!1),a=s[0],c=s[1],d=Object(u.useRouter)(),p=function(){return"/work"===d.pathname||"/"===d.pathname};return Object(i.jsx)("header",{children:Object(i.jsxs)("div",{className:"app-nav",children:[Object(i.jsx)("a",{href:"/work?tags=all",children:Object(i.jsx)("div",{className:"logo",children:p()?Object(i.jsx)("img",{src:"https://www.codigo.co/img/ui/logo-codigo-red.svg",className:"App-logo",alt:"logo"}):Object(i.jsxs)("div",{className:"back-icon",children:[Object(i.jsx)("div",{className:"icon"}),Object(i.jsx)("p",{className:"back-txt",children:"back to work"})]})})}),Object(i.jsxs)("nav",{className:"nav-list",children:[Object(i.jsx)("div",{className:n?"ci_show":"ci_none"}),Object(i.jsx)("selection",{className:"hbg_menu",onClick:function(){return r(!n)},children:Object(i.jsx)("div",{className:"circle",onClick:function(){return r(!n)},children:Object(i.jsxs)("div",(e={id:"nav-icon",onClick:function(){c(!a)}},Object(l.a)(e,"onClick",(function(){return r(!n)})),Object(l.a)(e,"className","".concat(n?"op":"")),Object(l.a)(e,"children",[Object(i.jsx)("span",{}),Object(i.jsx)("span",{}),Object(i.jsx)("span",{}),Object(i.jsx)("span",{})]),e))})}),Object(i.jsxs)("ul",{className:n?"open":"",children:[Object(i.jsx)("li",{className:p()?"":"detail",children:Object(i.jsx)(v,{href:"/work",activeClassName:"active",children:Object(i.jsx)("a",{children:" Work "})})}),Object(i.jsx)("li",{className:p()?"":"detail",children:Object(i.jsx)(v,{href:"/solutions",activeClassName:"active",children:Object(i.jsx)("a",{children:"Solutions"})})}),Object(i.jsx)("li",{className:p()?"":"detail",children:Object(i.jsx)(v,{href:"/services",activeClassName:"active",children:Object(i.jsx)("a",{children:"Services"})})}),Object(i.jsx)("li",{className:p()?"":"detail",children:Object(i.jsx)("a",{href:"/about",children:"About us"})}),Object(i.jsx)("li",{className:p()?"":"detail",children:Object(i.jsx)("a",{href:"/blog",children:"Blog"})}),Object(i.jsx)("li",{className:p()?"mobile":"detail mobile",children:Object(i.jsx)("a",{href:"/",children:"Request a quote"})}),Object(i.jsx)("li",{className:p()?"mobile":"detail mobile",children:Object(i.jsx)("a",{href:"/",children:"Let's chat"})}),Object(i.jsx)("li",{className:"quote",children:Object(i.jsx)("a",{href:"/blog",children:Object(i.jsx)("button",{children:"Request a quote"})})})]})]})]})})}),b=(n("86jE"),function(){return Object(i.jsx)("section",{style:{width:"100%",backgroundColor:"#fafafafa"},children:Object(i.jsxs)("footer",{className:"footer_con footer",children:[Object(i.jsx)("div",{children:Object(i.jsx)("h5",{className:"title",children:"Let\u2019s have a chat"})}),Object(i.jsx)("div",{className:"step-layout",children:w.map((function(e,t){return Object(i.jsxs)("div",{className:"step-item",children:[Object(i.jsx)("h5",{className:"item-title",children:e.title}),Object(i.jsx)("p",{className:"item-txt",children:e.txt})]},t)}))}),Object(i.jsx)("div",{className:"social-info",children:y.map((function(e,t){return Object(i.jsx)("div",{children:Object(i.jsx)("a",{href:e.link,className:"social__item",children:Object(i.jsx)("img",{src:e.url,alt:"socail logo"})})},t)}))}),Object(i.jsxs)("div",{className:"address",children:[Object(i.jsx)("p",{children:"Copyright \xa9 Codigo - Mobile App Developer Singapore"}),Object(i.jsx)("p",{children:"+65 6455 9790 \u2022 26 Sin Ming Lane, Midview City #07-115 Singapore 573971"})]})]})})}),y=[{url:"https://www.codigo.co/img/icons/social-facebook.svg",link:"https://www.facebook.com/codigo.co/"},{url:"https://www.codigo.co/img/icons/social-twitter.svg",link:"https://twitter.com/CodigoApps"},{url:"https://www.codigo.co/img/icons/social-instagram.svg",link:"https://www.instagram.com/hellocodigo"},{url:"https://www.codigo.co/img/icons/social-linkedIn.svg",link:"https://www.linkedin.com/company/codigo-pte-ltd"}],w=[{title:"Build",txt:"Help you build something"},{title:"Co-incubate",txt:"Co-incubate an idea together"},{title:"Customise",txt:"Customise a solution for your business"},{title:"Organise",txt:"Organise learning sessions with us"}],O=(n("1h7F"),function(e){var t=e.name,n=void 0===t?"Our iOS, Android & Web Development Work":t,o=e.children;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)(a.a,{children:[Object(i.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),Object(i.jsx)("meta",{"http-equiv":"X-UA-Compatible",content:"ie=edge"}),Object(i.jsxs)("title",{children:[" ",n," | Codigo "]}),Object(i.jsx)("meta",{name:"description",content:"Award winning Singapore based mobile app development company. iOS, Android, Web, Social, Games, UI, UX & SEO. 300 apps developed since 2010."}),Object(i.jsx)("meta",{property:"og:image",content:"https://www.codigo.co/img/social.jpg"}),Object(i.jsx)("link",{rel:"shortcut icon",href:"favicon.ico"}),Object(i.jsx)("link",{as:"font",crossorigin:"anonymous",href:"https://www.codigo.co/css/type/13ZL4D5.woff2",rel:"preload"}),Object(i.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),Object(i.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossorigin:!0}),Object(i.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Questrial&display=swap",rel:"stylesheet"})]}),Object(i.jsx)(m,{}),o,Object(i.jsx)(b,{})]})})},kG2m:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},lwAK:function(e,t,n){"use strict";var i;t.__esModule=!0,t.AmpStateContext=void 0;var o=((i=n("q1tI"))&&i.__esModule?i:{default:i}).default.createContext({});t.AmpStateContext=o},mPvQ:function(e,t,n){var i=n("5fIB"),o=n("rlHP"),r=n("KckH"),s=n("kG2m");e.exports=function(e){return i(e)||o(e)||r(e)||s()}},oI91:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},rlHP:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},vNVm:function(e,t,n){"use strict";var i=n("zoAU");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!s,l=(0,o.useRef)(),c=(0,o.useState)(!1),u=i(c,2),d=u[0],p=u[1],f=(0,o.useCallback)((function(e){l.current&&(l.current(),l.current=void 0),n||d||e&&e.tagName&&(l.current=function(e,t,n){var i=function(e){var t=e.rootMargin||"",n=a.get(t);if(n)return n;var i=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=i.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return a.set(t,n={id:t,observer:o,elements:i}),n}(n),o=i.id,r=i.observer,s=i.elements;return s.set(e,t),r.observe(e),function(){s.delete(e),r.unobserve(e),0===s.size&&(r.disconnect(),a.delete(o))}}(e,(function(e){return e&&p(e)}),{rootMargin:t}))}),[n,t,d]);return(0,o.useEffect)((function(){if(!s&&!d){var e=(0,r.requestIdleCallback)((function(){return p(!0)}));return function(){return(0,r.cancelIdleCallback)(e)}}}),[d]),[f,d]};var o=n("q1tI"),r=n("0G5g"),s="undefined"!==typeof IntersectionObserver;var a=new Map}}]);