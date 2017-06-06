webpackJsonp([0],[,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),o=n(23),i=function(e){return e&&e.__esModule?e:{default:e}}(o),a=(0,r.combineReducers)({counter:i.default});t.default=a},,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.increase=function(e){return{type:"INCREASE",text:e}},t.decrease=function(e){return{type:"DECREASE",text:e}}},,,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=t.repeat=function(e,t){return new Array(t+1).join(e)},o=t.pad=function(e,t){return r("0",t-e.toString().length)+e};t.formatTime=function(e){return o(e.getHours(),2)+":"+o(e.getMinutes(),2)+":"+o(e.getSeconds(),2)+"."+o(e.getMilliseconds(),3)},t.timer="undefined"!=typeof performance&&null!==performance&&"function"==typeof performance.now?performance:Date},,,,function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){return{count:e.counter.count}}function i(e){return(0,l.bindActionCreators)(f,e)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),u=(r(a),n(0),n(2)),l=n(1),c=n(8),f=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(c),s=n(21),p=r(s),d=(0,u.connect)(o,i)(p.default);t.default=d},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(t){var r=f(c.default,t);return e.hot.accept(3,function(){var e=n(3);r.replaceReducer(e)}),r}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var i=n(1),a=n(50),u=r(a),l=n(3),c=r(l),f=(0,i.applyMiddleware)(u.default)(i.createStore)},function(e,t,n){!function(){"use strict";function t(){}function n(e,n){var r,o,i,a,u=P;for(a=arguments.length;a-- >2;)M.push(arguments[a]);for(n&&null!=n.children&&(M.length||M.push(n.children),delete n.children);M.length;)if((o=M.pop())&&void 0!==o.pop)for(a=o.length;a--;)M.push(o[a]);else!0!==o&&!1!==o||(o=null),(i="function"!=typeof e)&&(null==o?o="":"number"==typeof o?o=String(o):"string"!=typeof o&&(i=!1)),i&&r?u[u.length-1]+=o:u===P?u=[o]:u.push(o),r=i;var l=new t;return l.nodeName=e,l.children=u,l.attributes=null==n?void 0:n,l.key=null==n?void 0:n.key,void 0!==D.vnode&&D.vnode(l),l}function r(e,t){for(var n in t)e[n]=t[n];return e}function o(e,t){return n(e.nodeName,r(r({},e.attributes),t),arguments.length>2?[].slice.call(arguments,2):e.children)}function i(e){!e.__d&&(e.__d=!0)&&1==L.push(e)&&(D.debounceRendering||setTimeout)(a)}function a(){var e,t=L;for(L=[];e=t.pop();)e.__d&&N(e)}function u(e,t,n){return"string"==typeof t||"number"==typeof t?void 0!==e.splitText:"string"==typeof t.nodeName?!e._componentConstructor&&l(e,t.nodeName):n||e._componentConstructor===t.nodeName}function l(e,t){return e.__n===t||e.nodeName.toLowerCase()===t.toLowerCase()}function c(e){var t=r({},e.attributes);t.children=e.children;var n=e.nodeName.defaultProps;if(void 0!==n)for(var o in n)void 0===t[o]&&(t[o]=n[o]);return t}function f(e,t){var n=t?document.createElementNS("http://www.w3.org/2000/svg",e):document.createElement(e);return n.__n=e,n}function s(e){e.parentNode&&e.parentNode.removeChild(e)}function p(e,t,n,r,o){if("className"===t&&(t="class"),"key"===t);else if("ref"===t)n&&n(null),r&&r(e);else if("class"!==t||o)if("style"===t){if(r&&"string"!=typeof r&&"string"!=typeof n||(e.style.cssText=r||""),r&&"object"==typeof r){if("string"!=typeof n)for(var i in n)i in r||(e.style[i]="");for(var i in r)e.style[i]="number"==typeof r[i]&&!1===T.test(i)?r[i]+"px":r[i]}}else if("dangerouslySetInnerHTML"===t)r&&(e.innerHTML=r.__html||"");else if("o"==t[0]&&"n"==t[1]){var a=t!==(t=t.replace(/Capture$/,""));t=t.toLowerCase().substring(2),r?n||e.addEventListener(t,h,a):e.removeEventListener(t,h,a),(e.__l||(e.__l={}))[t]=r}else if("list"!==t&&"type"!==t&&!o&&t in e)d(e,t,null==r?"":r),null!=r&&!1!==r||e.removeAttribute(t);else{var u=o&&t!==(t=t.replace(/^xlink\:?/,""));null==r||!1===r?u?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.removeAttribute(t):"function"!=typeof r&&(u?e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),r):e.setAttribute(t,r))}else e.className=r||""}function d(e,t,n){try{e[t]=n}catch(e){}}function h(e){return this.__l[e.type](D.event&&D.event(e)||e)}function _(){for(var e;e=U.pop();)D.afterMount&&D.afterMount(e),e.componentDidMount&&e.componentDidMount()}function v(e,t,n,r,o,i){R++||(W=null!=o&&void 0!==o.ownerSVGElement,F=null!=e&&!("__preactattr_"in e));var a=g(e,t,n,r,i);return o&&a.parentNode!==o&&o.appendChild(a),--R||(F=!1,i||_()),a}function g(e,t,n,r,o){var i=e,a=W;if(null==t&&(t=""),"string"==typeof t)return e&&void 0!==e.splitText&&e.parentNode&&(!e._component||o)?e.nodeValue!=t&&(e.nodeValue=t):(i=document.createTextNode(t),e&&(e.parentNode&&e.parentNode.replaceChild(i,e),y(e,!0))),i.__preactattr_=!0,i;if("function"==typeof t.nodeName)return S(e,t,n,r);if(W="svg"===t.nodeName||"foreignObject"!==t.nodeName&&W,(!e||!l(e,String(t.nodeName)))&&(i=f(String(t.nodeName),W),e)){for(;e.firstChild;)i.appendChild(e.firstChild);e.parentNode&&e.parentNode.replaceChild(i,e),y(e,!0)}var u=i.firstChild,c=i.__preactattr_||(i.__preactattr_={}),s=t.children;return!F&&s&&1===s.length&&"string"==typeof s[0]&&null!=u&&void 0!==u.splitText&&null==u.nextSibling?u.nodeValue!=s[0]&&(u.nodeValue=s[0]):(s&&s.length||null!=u)&&m(i,s,n,r,F||null!=c.dangerouslySetInnerHTML),w(i,t.attributes,c),W=a,i}function m(e,t,n,r,o){var i,a,l,c,f=e.childNodes,p=[],d={},h=0,_=0,v=f.length,m=0,b=t?t.length:0;if(0!==v)for(var w=0;w<v;w++){var x=f[w],k=x.__preactattr_,E=b&&k?x._component?x._component.__k:k.key:null;null!=E?(h++,d[E]=x):(k||(void 0!==x.splitText?!o||x.nodeValue.trim():o))&&(p[m++]=x)}if(0!==b)for(var w=0;w<b;w++){l=t[w],c=null;var E=l.key;if(null!=E)h&&void 0!==d[E]&&(c=d[E],d[E]=void 0,h--);else if(!c&&_<m)for(i=_;i<m;i++)if(void 0!==p[i]&&u(a=p[i],l,o)){c=a,p[i]=void 0,i===m-1&&m--,i===_&&_++;break}c=g(c,l,n,r),c&&c!==e&&(w>=v?e.appendChild(c):c!==f[w]&&(c===f[w+1]?s(f[w]):e.insertBefore(c,f[w]||null)))}if(h)for(var w in d)void 0!==d[w]&&y(d[w],!1);for(;_<=m;)void 0!==(c=p[m--])&&y(c,!1)}function y(e,t){var n=e._component;n?C(n):(null!=e.__preactattr_&&e.__preactattr_.ref&&e.__preactattr_.ref(null),!1!==t&&null!=e.__preactattr_||s(e),b(e))}function b(e){for(e=e.lastChild;e;){var t=e.previousSibling;y(e,!0),e=t}}function w(e,t,n){var r;for(r in n)t&&null!=t[r]||null==n[r]||p(e,r,n[r],n[r]=void 0,W);for(r in t)"children"===r||"innerHTML"===r||r in n&&t[r]===("value"===r||"checked"===r?e[r]:n[r])||p(e,r,n[r],n[r]=t[r],W)}function x(e){var t=e.constructor.name;(H[t]||(H[t]=[])).push(e)}function k(e,t,n){var r,o=H[e.name];if(e.prototype&&e.prototype.render?(r=new e(t,n),O.call(r,t,n)):(r=new O(t,n),r.constructor=e,r.render=E),o)for(var i=o.length;i--;)if(o[i].constructor===e){r.__b=o[i].__b,o.splice(i,1);break}return r}function E(e,t,n){return this.constructor(e,n)}function j(e,t,n,r,o){e.__x||(e.__x=!0,(e.__r=t.ref)&&delete t.ref,(e.__k=t.key)&&delete t.key,!e.base||o?e.componentWillMount&&e.componentWillMount():e.componentWillReceiveProps&&e.componentWillReceiveProps(t,r),r&&r!==e.context&&(e.__c||(e.__c=e.context),e.context=r),e.__p||(e.__p=e.props),e.props=t,e.__x=!1,0!==n&&(1!==n&&!1===D.syncComponentUpdates&&e.base?i(e):N(e,1,o)),e.__r&&e.__r(e))}function N(e,t,n,o){if(!e.__x){var i,a,u,l=e.props,f=e.state,s=e.context,p=e.__p||l,d=e.__s||f,h=e.__c||s,g=e.base,m=e.__b,b=g||m,w=e._component,x=!1;if(g&&(e.props=p,e.state=d,e.context=h,2!==t&&e.shouldComponentUpdate&&!1===e.shouldComponentUpdate(l,f,s)?x=!0:e.componentWillUpdate&&e.componentWillUpdate(l,f,s),e.props=l,e.state=f,e.context=s),e.__p=e.__s=e.__c=e.__b=null,e.__d=!1,!x){i=e.render(l,f,s),e.getChildContext&&(s=r(r({},s),e.getChildContext()));var E,S,O=i&&i.nodeName;if("function"==typeof O){var A=c(i);a=w,a&&a.constructor===O&&A.key==a.__k?j(a,A,1,s,!1):(E=a,e._component=a=k(O,A,s),a.__b=a.__b||m,a.__u=e,j(a,A,0,s,!1),N(a,1,n,!0)),S=a.base}else u=b,E=w,E&&(u=e._component=null),(b||1===t)&&(u&&(u._component=null),S=v(u,i,s,n||!g,b&&b.parentNode,!0));if(b&&S!==b&&a!==w){var M=b.parentNode;M&&S!==M&&(M.replaceChild(S,b),E||(b._component=null,y(b,!1)))}if(E&&C(E),e.base=S,S&&!o){for(var P=e,T=e;T=T.__u;)(P=T).base=S;S._component=P,S._componentConstructor=P.constructor}}if(!g||n?U.unshift(e):x||(_(),e.componentDidUpdate&&e.componentDidUpdate(p,d,h),D.afterUpdate&&D.afterUpdate(e)),null!=e.__h)for(;e.__h.length;)e.__h.pop().call(e);R||o||_()}}function S(e,t,n,r){for(var o=e&&e._component,i=o,a=e,u=o&&e._componentConstructor===t.nodeName,l=u,f=c(t);o&&!l&&(o=o.__u);)l=o.constructor===t.nodeName;return o&&l&&(!r||o._component)?(j(o,f,3,n,r),e=o.base):(i&&!u&&(C(i),e=a=null),o=k(t.nodeName,f,n),e&&!o.__b&&(o.__b=e,a=null),j(o,f,1,n,r),e=o.base,a&&e!==a&&(a._component=null,y(a,!1))),e}function C(e){D.beforeUnmount&&D.beforeUnmount(e);var t=e.base;e.__x=!0,e.componentWillUnmount&&e.componentWillUnmount(),e.base=null;var n=e._component;n?C(n):t&&(t.__preactattr_&&t.__preactattr_.ref&&t.__preactattr_.ref(null),e.__b=t,s(t),x(e),b(t)),e.__r&&e.__r(null)}function O(e,t){this.__d=!0,this.context=t,this.props=e,this.state=this.state||{}}function A(e,t,n){return v(n,e,{},!1,t,!1)}var D={},M=[],P=[],T=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,L=[],U=[],R=0,W=!1,F=!1,H={};r(O.prototype,{setState:function(e,t){var n=this.state;this.__s||(this.__s=r({},n)),r(n,"function"==typeof e?e(n,this.props):e),t&&(this.__h=this.__h||[]).push(t),i(this)},forceUpdate:function(e){e&&(this.__h=this.__h||[]).push(e),N(this,2)},render:function(){}});var I={h:n,createElement:n,cloneElement:o,Component:O,render:A,rerender:a,options:D};e.exports=I}()},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(0),c=r(l),f=n(5),s=r(f),p=(n(1),n(8)),d=(function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);t.default=e}(p),function(e){function t(e){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return a(t,e),u(t,[{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){}},{key:"componentWillUpdate",value:function(e,t){}},{key:"componentDidUpdate",value:function(e,t){}},{key:"componentWillUnmount",value:function(){}},{key:"componentWillReceiveProps",value:function(e){}},{key:"shouldComponentUpdate",value:function(e,t){}},{key:"render",value:function(){var e=this.props;return c.default.createElement(h,{params:e})}}]),t}(c.default.Component)),h=function(e){function t(){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),u(t,[{key:"hasData",value:function(){var e=this.props.params,t=e.count,n=e.increase,r=e.decrease;return c.default.createElement("div",null,c.default.createElement("div",{className:"title"},"计时器"),c.default.createElement("span",null,t),c.default.createElement("button",{onClick:n.bind("add")},"Increase"),c.default.createElement("button",{onClick:r.bind("dec")},"decrease"))}},{key:"noData",value:function(){return c.default.createElement("div",null,c.default.createElement("div",{className:"title"},"这是一个大肉包"))}},{key:"render",value:function(){return"number"==typeof this.props.params.count?this.hasData():this.noData()}}]),t}(c.default.Component);d.propTypes={increase:s.default.func.isRequired,decrease:s.default.func.isRequired,count:s.default.number.isRequired},t.default=d},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o=n(0),i=r(o),a=n(0),u=n(2),l=n(19),c=r(l),f=n(18),s=r(f),p=(n(20),document.getElementById("root")),d=(0,c.default)();(0,a.render)(i.default.createElement(u.Provider,{store:d},i.default.createElement(s.default,null)),p)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{count:10},t=arguments[1],n=e.count;switch(t.type){case"INCREASE":return{count:n+1};case"DECREASE":return{count:n-1};default:return e}}},function(e,t,n){(function(n){var r,o;!function(n,i){"use strict";r=[],void 0!==(o=function(){return i()}.apply(t,r))&&(e.exports=o)}(0,function(e){"use strict";function t(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}function r(e,t){Object.defineProperty(this,"kind",{value:e,enumerable:!0}),t&&t.length&&Object.defineProperty(this,"path",{value:t,enumerable:!0})}function o(e,t,n){o.super_.call(this,"E",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0}),Object.defineProperty(this,"rhs",{value:n,enumerable:!0})}function i(e,t){i.super_.call(this,"N",e),Object.defineProperty(this,"rhs",{value:t,enumerable:!0})}function a(e,t){a.super_.call(this,"D",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0})}function u(e,t,n){u.super_.call(this,"A",e),Object.defineProperty(this,"index",{value:t,enumerable:!0}),Object.defineProperty(this,"item",{value:n,enumerable:!0})}function l(e,t,n){var r=e.slice((n||t)+1||e.length);return e.length=t<0?e.length+t:t,e.push.apply(e,r),e}function c(e){var t=typeof e;return"object"!==t?t:e===Math?"math":null===e?"null":Array.isArray(e)?"array":"[object Date]"===Object.prototype.toString.call(e)?"date":void 0!==e.toString&&/^\/.*\//.test(e.toString())?"regexp":"object"}function f(t,n,r,s,p,d,h){p=p||[];var _=p.slice(0);if(void 0!==d){if(s){if("function"==typeof s&&s(_,d))return;if("object"==typeof s){if(s.prefilter&&s.prefilter(_,d))return;if(s.normalize){var v=s.normalize(_,d,t,n);v&&(t=v[0],n=v[1])}}}_.push(d)}"regexp"===c(t)&&"regexp"===c(n)&&(t=t.toString(),n=n.toString());var g=typeof t,m=typeof n;if("undefined"===g)"undefined"!==m&&r(new i(_,n));else if("undefined"===m)r(new a(_,t));else if(c(t)!==c(n))r(new o(_,t,n));else if("[object Date]"===Object.prototype.toString.call(t)&&"[object Date]"===Object.prototype.toString.call(n)&&t-n!=0)r(new o(_,t,n));else if("object"===g&&null!==t&&null!==n){if(h=h||[],h.indexOf(t)<0){if(h.push(t),Array.isArray(t)){var y;t.length;for(y=0;y<t.length;y++)y>=n.length?r(new u(_,y,new a(e,t[y]))):f(t[y],n[y],r,s,_,y,h);for(;y<n.length;)r(new u(_,y,new i(e,n[y++])))}else{var b=Object.keys(t),w=Object.keys(n);b.forEach(function(o,i){var a=w.indexOf(o);a>=0?(f(t[o],n[o],r,s,_,o,h),w=l(w,a)):f(t[o],e,r,s,_,o,h)}),w.forEach(function(t){f(e,n[t],r,s,_,t,h)})}h.length=h.length-1}}else t!==n&&("number"===g&&isNaN(t)&&isNaN(n)||r(new o(_,t,n)))}function s(t,n,r,o){return o=o||[],f(t,n,function(e){e&&o.push(e)},r),o.length?o:e}function p(e,t,n){if(n.path&&n.path.length){var r,o=e[t],i=n.path.length-1;for(r=0;r<i;r++)o=o[n.path[r]];switch(n.kind){case"A":p(o[n.path[r]],n.index,n.item);break;case"D":delete o[n.path[r]];break;case"E":case"N":o[n.path[r]]=n.rhs}}else switch(n.kind){case"A":p(e[t],n.index,n.item);break;case"D":e=l(e,t);break;case"E":case"N":e[t]=n.rhs}return e}function d(e,t,n){if(e&&t&&n&&n.kind){for(var r=e,o=-1,i=n.path?n.path.length-1:0;++o<i;)void 0===r[n.path[o]]&&(r[n.path[o]]="number"==typeof n.path[o]?[]:{}),r=r[n.path[o]];switch(n.kind){case"A":p(n.path?r[n.path[o]]:r,n.index,n.item);break;case"D":delete r[n.path[o]];break;case"E":case"N":r[n.path[o]]=n.rhs}}}function h(e,t,n){if(n.path&&n.path.length){var r,o=e[t],i=n.path.length-1;for(r=0;r<i;r++)o=o[n.path[r]];switch(n.kind){case"A":h(o[n.path[r]],n.index,n.item);break;case"D":case"E":o[n.path[r]]=n.lhs;break;case"N":delete o[n.path[r]]}}else switch(n.kind){case"A":h(e[t],n.index,n.item);break;case"D":case"E":e[t]=n.lhs;break;case"N":e=l(e,t)}return e}function _(e,t,n){if(e&&t&&n&&n.kind){var r,o,i=e;for(o=n.path.length-1,r=0;r<o;r++)void 0===i[n.path[r]]&&(i[n.path[r]]={}),i=i[n.path[r]];switch(n.kind){case"A":h(i[n.path[r]],n.index,n.item);break;case"D":case"E":i[n.path[r]]=n.lhs;break;case"N":delete i[n.path[r]]}}}function v(e,t,n){if(e&&t){f(e,t,function(r){n&&!n(e,t,r)||d(e,t,r)})}}var g,m,y=[];return g="object"==typeof n&&n?n:"undefined"!=typeof window?window:{},m=g.DeepDiff,m&&y.push(function(){void 0!==m&&g.DeepDiff===s&&(g.DeepDiff=m,m=e)}),t(o,r),t(i,r),t(a,r),t(u,r),Object.defineProperties(s,{diff:{value:s,enumerable:!0},observableDiff:{value:f,enumerable:!0},applyDiff:{value:v,enumerable:!0},applyChange:{value:d,enumerable:!0},revertChange:{value:_,enumerable:!0},isConflict:{value:function(){return void 0!==m},enumerable:!0},noConflict:{value:function(){return y&&(y.forEach(function(e){e()}),y=null),s},enumerable:!0}}),s})}).call(t,n(7))},,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function o(e,t,n,o){switch(void 0===e?"undefined":u(e)){case"object":return"function"==typeof e[o]?e[o].apply(e,r(n)):e[o];case"function":return e(t);default:return e}}function i(e){var t=e.timestamp,n=e.duration;return function(e,r,o){var i=["action"];return i.push("%c"+String(e.type)),t&&i.push("%c@ "+r),n&&i.push("%c(in "+o.toFixed(2)+" ms)"),i.join(" ")}}function a(e,t){var n=t.logger,r=t.actionTransformer,a=t.titleFormatter,u=void 0===a?i(t):a,c=t.collapsed,s=t.colors,p=t.level,d=t.diff,h=void 0===t.titleFormatter;e.forEach(function(i,a){var _=i.started,v=i.startedTime,g=i.action,m=i.prevState,y=i.error,b=i.took,w=i.nextState,x=e[a+1];x&&(w=x.prevState,b=x.started-_);var k=r(g),E="function"==typeof c?c(function(){return w},g,i):c,j=(0,l.formatTime)(v),N=s.title?"color: "+s.title(k)+";":"",S=["color: gray; font-weight: lighter;"];S.push(N),t.timestamp&&S.push("color: gray; font-weight: lighter;"),t.duration&&S.push("color: gray; font-weight: lighter;");var C=u(k,j,b);try{E?s.title&&h?n.groupCollapsed.apply(n,["%c "+C].concat(S)):n.groupCollapsed(C):s.title&&h?n.group.apply(n,["%c "+C].concat(S)):n.group(C)}catch(e){n.log(C)}var O=o(p,k,[m],"prevState"),A=o(p,k,[k],"action"),D=o(p,k,[y,m],"error"),M=o(p,k,[w],"nextState");O&&(s.prevState?n[O]("%c prev state","color: "+s.prevState(m)+"; font-weight: bold",m):n[O]("prev state",m)),A&&(s.action?n[A]("%c action    ","color: "+s.action(k)+"; font-weight: bold",k):n[A]("action    ",k)),y&&D&&(s.error?n[D]("%c error     ","color: "+s.error(y,m)+"; font-weight: bold;",y):n[D]("error     ",y)),M&&(s.nextState?n[M]("%c next state","color: "+s.nextState(w)+"; font-weight: bold",w):n[M]("next state",w)),d&&(0,f.default)(m,w,n,E);try{n.groupEnd()}catch(e){n.log("—— log end ——")}})}Object.defineProperty(t,"__esModule",{value:!0});var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.printBuffer=a;var l=n(14),c=n(49),f=function(e){return e&&e.__esModule?e:{default:e}}(c)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={level:"log",logger:console,logErrors:!0,collapsed:void 0,predicate:void 0,duration:!1,timestamp:!0,stateTransformer:function(e){return e},actionTransformer:function(e){return e},errorTransformer:function(e){return e},colors:{title:function(){return"inherit"},prevState:function(){return"#9E9E9E"},action:function(){return"#03A9F4"},nextState:function(){return"#4CAF50"},error:function(){return"#F20404"}},diff:!1,diffPredicate:void 0,transformer:void 0},e.exports=t.default},function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function o(e){return"color: "+c[e].color+"; font-weight: bold"}function i(e){var t=e.kind,n=e.path,r=e.lhs,o=e.rhs,i=e.index,a=e.item;switch(t){case"E":return[n.join("."),r,"→",o];case"N":return[n.join("."),o];case"D":return[n.join(".")];case"A":return[n.join(".")+"["+i+"]",a];default:return[]}}function a(e,t,n,a){var u=(0,l.default)(e,t);try{a?n.groupCollapsed("diff"):n.group("diff")}catch(e){n.log("diff")}u?u.forEach(function(e){var t=e.kind,a=i(e);n.log.apply(n,["%c "+c[t].text,o(t)].concat(r(a)))}):n.log("—— no diff ——");try{n.groupEnd()}catch(e){n.log("—— diff end —— ")}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=a;var u=n(24),l=function(e){return e&&e.__esModule?e:{default:e}}(u),c={E:{color:"#2196F3",text:"CHANGED:"},N:{color:"#4CAF50",text:"ADDED:"},D:{color:"#F44336",text:"DELETED:"},A:{color:"#2196F3",text:"ARRAY:"}};e.exports=t.default},function(e,t,n){"use strict";function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=o({},l.default,e),n=t.logger,r=t.stateTransformer,u=t.errorTransformer,c=t.predicate,f=t.logErrors,s=t.diffPredicate;if(void 0===n)return function(){return function(e){return function(t){return e(t)}}};if(e.getState&&e.dispatch)return console.error("[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:\n// Logger with default options\nimport { logger } from 'redux-logger'\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n// Or you can create your own logger with custom options http://bit.ly/redux-logger-options\nimport createLogger from 'redux-logger'\nconst logger = createLogger({\n  // ...options\n});\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n"),function(){return function(e){return function(t){return e(t)}}};var p=[];return function(e){var n=e.getState;return function(e){return function(l){if("function"==typeof c&&!c(n,l))return e(l);var d={};p.push(d),d.started=a.timer.now(),d.startedTime=new Date,d.prevState=r(n()),d.action=l;var h=void 0;if(f)try{h=e(l)}catch(e){d.error=u(e)}else h=e(l);d.took=a.timer.now()-d.started,d.nextState=r(n());var _=t.diff&&"function"==typeof s?s(n,l):t.diff;if((0,i.printBuffer)(p,o({},t,{diff:_})),p.length=0,d.error)throw d.error;return h}}}}Object.defineProperty(t,"__esModule",{value:!0}),t.logger=t.createLogger=t.defaults=void 0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=n(47),a=n(14),u=n(48),l=function(e){return e&&e.__esModule?e:{default:e}}(u),c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.dispatch,n=e.getState;if("function"==typeof t||"function"==typeof n)return r()({dispatch:t,getState:n});console.error("\n[redux-logger v3] BREAKING CHANGE\n[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.\n[redux-logger v3] Change\n[redux-logger v3] import createLogger from 'redux-logger'\n[redux-logger v3] to\n[redux-logger v3] import { createLogger } from 'redux-logger'\n")};t.defaults=l.default,t.createLogger=r,t.logger=c,t.default=c}],[22]);