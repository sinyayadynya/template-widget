/*! For license information please see main.js.LICENSE.txt */
!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="https://sinyayadynya.github.io/template-widget/",n(n.s=11)}([function(e,t,n){"use strict";e.exports=n(8)},function(e,t){e.exports=ReactIntl},function(e,t){e.exports=React},function(e,t){e.exports=ReactDOM},function(e){e.exports=JSON.parse('{"widget.welcome-msg":"Welcome!","widget.welcome-paragraph":"This is a template for creating widgets."}')},function(e){e.exports=JSON.parse('{"widget.welcome-msg":"\xa1Bienvenido!","widget.welcome-paragraph":"Esta es una plantilla para crear widgets."}')},function(e){e.exports=JSON.parse('{"widget.welcome-msg":"Bienvenu!","widget.welcome-paragraph":"Ceci est un mod\xe8le pour cr\xe9er des widgets."}')},function(e){e.exports=JSON.parse('{"widget.welcome-msg":"\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c!","widget.welcome-paragraph":"\u042d\u0442\u043e \u0448\u0430\u0431\u043b\u043e\u043d \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u0432\u0438\u0434\u0436\u0435\u0442\u043e\u0432."}')},function(e,t,n){"use strict";n(9);var r=n(2),a=60103;if(t.Fragment=60107,"function"===typeof Symbol&&Symbol.for){var o=Symbol.for;a=o("react.element"),t.Fragment=o("react.fragment")}var i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,o={},l=null,u=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)s.call(t,r)&&!c.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:a,type:e,key:l,ref:u,props:o,_owner:i.current}}t.jsx=l,t.jsxs=l},function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function i(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(a){return!1}}()?Object.assign:function(e,t){for(var n,s,c=i(e),l=1;l<arguments.length;l++){for(var u in n=Object(arguments[l]))a.call(n,u)&&(c[u]=n[u]);if(r){s=r(n);for(var d=0;d<s.length;d++)o.call(n,s[d])&&(c[s[d]]=n[s[d]])}}return c}},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(2),o=n.n(a),i=n(3),s=n.n(i),c=(n(10),n(1));var l=function(e){var t=e.element;return Object(r.jsxs)("div",{className:"Widget template-widget",children:[Object(r.jsx)("h1",{className:"is-size-4 pb-2",children:Object(r.jsx)(c.FormattedMessage,{id:"widget.welcome-msg",defaultMessage:"Welcome!"})}),Object(r.jsx)("p",{className:"is-size-6 pb-2",children:Object(r.jsx)(c.FormattedMessage,{id:"widget.welcome-paragraph",defaultMessage:"This is a template for creating widgets."})}),Object(r.jsx)("p",{className:"is-size-7 pb-4",children:Object(r.jsx)(c.FormattedMessage,{id:"widget.details-paragraph",defaultMessage:"It is not very complex, but it has a button with configurable text (added by the editors while embedding in the CMS), some CSS, some JS, some media, it is translatable, \u2026"})}),Object(r.jsx)("p",{className:"is-size-6 pb-4",children:Object(r.jsx)("button",{className:"button is-primary",children:t.getAttribute("data-button-text")})}),Object(r.jsx)("p",{children:Object(r.jsx)("img",{src:"data:image/png;base64,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",alt:"Logo",width:"48",height:"*"})})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var d={en:n(4),es:n(5),fr:n(6),ru:n(7)},f=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.locale=t}var t,n,r;return t=e,(n=[{key:"mapLocale",value:function(e){if("undefined"!==typeof d[e.toLowerCase()])return e.toLowerCase();var t=e.split("-",2);return"undefined"!==typeof d[t[0]]?t[0]:"en"}},{key:"locale",set:function(e){this._locale=this.mapLocale(e||"en")},get:function(){return this._locale}},{key:"messages",get:function(){return d[this.locale]}}])&&u(t.prototype,n),r&&u(t,r),e}();window.renderExampleWidget=function(e,t,n,a){var i=document.getElementById(e),u=new f(t||function(){var e=new RegExp("[\\?&]data-locale=([^&#]*)").exec(window.location.search);return null===e?null:decodeURIComponent(e[1].replace(/\+/g," "))}());s.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(c.IntlProvider,{locale:u.locale,messages:u.messages,children:Object(r.jsx)(l,{element:i})})}),i,(function(){return a(i)})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}}]);
//# sourceMappingURL=main.js.map