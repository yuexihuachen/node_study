webpackJsonp([0],{18:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){return{count:e.counter.count}}function i(e){return(0,s.bindActionCreators)(c,e)}Object.defineProperty(t,"__esModule",{value:!0});var a=r(0),u=(n(a),r(0),r(2)),s=r(1),l=r(8),c=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(l),f=r(21),d=n(f),p=(0,u.connect)(o,i)(d.default);t.default=p},19:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(t){var n=c(l.default,t);return e.hot.accept(3,function(){var e=r(3);n.replaceReducer(e)}),n}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var i=r(1),a=r(48),u=n(a),s=r(3),l=n(s),c=(0,i.applyMiddleware)(u.default)(i.createStore)},20:function(e,t,r){!function(){"use strict";function t(){}function r(e,r){var n,o,i,a,u=T;for(a=arguments.length;a-- >2;)D.push(arguments[a]);for(r&&null!=r.children&&(D.length||D.push(r.children),delete r.children);D.length;)if((o=D.pop())&&void 0!==o.pop)for(a=o.length;a--;)D.push(o[a]);else!0!==o&&!1!==o||(o=null),(i="function"!=typeof e)&&(null==o?o="":"number"==typeof o?o=String(o):"string"!=typeof o&&(i=!1)),i&&n?u[u.length-1]+=o:u===T?u=[o]:u.push(o),n=i;var s=new t;return s.nodeName=e,s.children=u,s.attributes=null==r?void 0:r,s.key=null==r?void 0:r.key,void 0!==P.vnode&&P.vnode(s),s}function n(e,t){for(var r in t)e[r]=t[r];return e}function o(e,t){return r(e.nodeName,n(n({},e.attributes),t),arguments.length>2?[].slice.call(arguments,2):e.children)}function i(e){!e.__d&&(e.__d=!0)&&1==B.push(e)&&(P.debounceRendering||setTimeout)(a)}function a(){var e,t=B;for(B=[];e=t.pop();)e.__d&&k(e)}function u(e,t,r){return"string"==typeof t||"number"==typeof t?void 0!==e.splitText:"string"==typeof t.nodeName?!e._componentConstructor&&s(e,t.nodeName):r||e._componentConstructor===t.nodeName}function s(e,t){return e.__n===t||e.nodeName.toLowerCase()===t.toLowerCase()}function l(e){var t=n({},e.attributes);t.children=e.children;var r=e.nodeName.defaultProps;if(void 0!==r)for(var o in r)void 0===t[o]&&(t[o]=r[o]);return t}function c(e,t){var r=t?document.createElementNS("http://www.w3.org/2000/svg",e):document.createElement(e);return r.__n=e,r}function f(e){e.parentNode&&e.parentNode.removeChild(e)}function d(e,t,r,n,o){if("className"===t&&(t="class"),"key"===t);else if("ref"===t)r&&r(null),n&&n(e);else if("class"!==t||o)if("style"===t){if(n&&"string"!=typeof n&&"string"!=typeof r||(e.style.cssText=n||""),n&&"object"==typeof n){if("string"!=typeof r)for(var i in r)i in n||(e.style[i]="");for(var i in n)e.style[i]="number"==typeof n[i]&&!1===U.test(i)?n[i]+"px":n[i]}}else if("dangerouslySetInnerHTML"===t)n&&(e.innerHTML=n.__html||"");else if("o"==t[0]&&"n"==t[1]){var a=t!==(t=t.replace(/Capture$/,""));t=t.toLowerCase().substring(2),n?r||e.addEventListener(t,h,a):e.removeEventListener(t,h,a),(e.__l||(e.__l={}))[t]=n}else if("list"!==t&&"type"!==t&&!o&&t in e)p(e,t,null==n?"":n),null!=n&&!1!==n||e.removeAttribute(t);else{var u=o&&t!==(t=t.replace(/^xlink\:?/,""));null==n||!1===n?u?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.removeAttribute(t):"function"!=typeof n&&(u?e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),n):e.setAttribute(t,n))}else e.className=n||""}function p(e,t,r){try{e[t]=r}catch(e){}}function h(e){return this.__l[e.type](P.event&&P.event(e)||e)}function y(){for(var e;e=R.pop();)P.afterMount&&P.afterMount(e),e.componentDidMount&&e.componentDidMount()}function v(e,t,r,n,o,i){M++||(L=null!=o&&void 0!==o.ownerSVGElement,I=null!=e&&!("__preactattr_"in e));var a=_(e,t,r,n,i);return o&&a.parentNode!==o&&o.appendChild(a),--M||(I=!1,i||y()),a}function _(e,t,r,n,o){var i=e,a=L;if(null==t&&(t=""),"string"==typeof t)return e&&void 0!==e.splitText&&e.parentNode&&(!e._component||o)?e.nodeValue!=t&&(e.nodeValue=t):(i=document.createTextNode(t),e&&(e.parentNode&&e.parentNode.replaceChild(i,e),b(e,!0))),i.__preactattr_=!0,i;if("function"==typeof t.nodeName)return C(e,t,r,n);if(L="svg"===t.nodeName||"foreignObject"!==t.nodeName&&L,(!e||!s(e,String(t.nodeName)))&&(i=c(String(t.nodeName),L),e)){for(;e.firstChild;)i.appendChild(e.firstChild);e.parentNode&&e.parentNode.replaceChild(i,e),b(e,!0)}var u=i.firstChild,l=i.__preactattr_||(i.__preactattr_={}),f=t.children;return!I&&f&&1===f.length&&"string"==typeof f[0]&&null!=u&&void 0!==u.splitText&&null==u.nextSibling?u.nodeValue!=f[0]&&(u.nodeValue=f[0]):(f&&f.length||null!=u)&&m(i,f,r,n,I||null!=l.dangerouslySetInnerHTML),w(i,t.attributes,l),L=a,i}function m(e,t,r,n,o){var i,a,s,l,c=e.childNodes,d=[],p={},h=0,y=0,v=c.length,m=0,g=t?t.length:0;if(0!==v)for(var w=0;w<v;w++){var E=c[w],x=E.__preactattr_,A=g&&x?E._component?E._component.__k:x.key:null;null!=A?(h++,p[A]=E):(x||(void 0!==E.splitText?!o||E.nodeValue.trim():o))&&(d[m++]=E)}if(0!==g)for(var w=0;w<g;w++){s=t[w],l=null;var A=s.key;if(null!=A)h&&void 0!==p[A]&&(l=p[A],p[A]=void 0,h--);else if(!l&&y<m)for(i=y;i<m;i++)if(void 0!==d[i]&&u(a=d[i],s,o)){l=a,d[i]=void 0,i===m-1&&m--,i===y&&y++;break}l=_(l,s,r,n),l&&l!==e&&(w>=v?e.appendChild(l):l!==c[w]&&(l===c[w+1]?f(c[w]):e.insertBefore(l,c[w]||null)))}if(h)for(var w in p)void 0!==p[w]&&b(p[w],!1);for(;y<=m;)void 0!==(l=d[m--])&&b(l,!1)}function b(e,t){var r=e._component;r?j(r):(null!=e.__preactattr_&&e.__preactattr_.ref&&e.__preactattr_.ref(null),!1!==t&&null!=e.__preactattr_||f(e),g(e))}function g(e){for(e=e.lastChild;e;){var t=e.previousSibling;b(e,!0),e=t}}function w(e,t,r){var n;for(n in r)t&&null!=t[n]||null==r[n]||d(e,n,r[n],r[n]=void 0,L);for(n in t)"children"===n||"innerHTML"===n||n in r&&t[n]===("value"===n||"checked"===n?e[n]:r[n])||d(e,n,r[n],r[n]=t[n],L)}function E(e){var t=e.constructor.name;(F[t]||(F[t]=[])).push(e)}function x(e,t,r){var n,o=F[e.name];if(e.prototype&&e.prototype.render?(n=new e(t,r),O.call(n,t,r)):(n=new O(t,r),n.constructor=e,n.render=A),o)for(var i=o.length;i--;)if(o[i].constructor===e){n.__b=o[i].__b,o.splice(i,1);break}return n}function A(e,t,r){return this.constructor(e,r)}function S(e,t,r,n,o){e.__x||(e.__x=!0,(e.__r=t.ref)&&delete t.ref,(e.__k=t.key)&&delete t.key,!e.base||o?e.componentWillMount&&e.componentWillMount():e.componentWillReceiveProps&&e.componentWillReceiveProps(t,n),n&&n!==e.context&&(e.__c||(e.__c=e.context),e.context=n),e.__p||(e.__p=e.props),e.props=t,e.__x=!1,0!==r&&(1!==r&&!1===P.syncComponentUpdates&&e.base?i(e):k(e,1,o)),e.__r&&e.__r(e))}function k(e,t,r,o){if(!e.__x){var i,a,u,s=e.props,c=e.state,f=e.context,d=e.__p||s,p=e.__s||c,h=e.__c||f,_=e.base,m=e.__b,g=_||m,w=e._component,E=!1;if(_&&(e.props=d,e.state=p,e.context=h,2!==t&&e.shouldComponentUpdate&&!1===e.shouldComponentUpdate(s,c,f)?E=!0:e.componentWillUpdate&&e.componentWillUpdate(s,c,f),e.props=s,e.state=c,e.context=f),e.__p=e.__s=e.__c=e.__b=null,e.__d=!1,!E){i=e.render(s,c,f),e.getChildContext&&(f=n(n({},f),e.getChildContext()));var A,C,O=i&&i.nodeName;if("function"==typeof O){var N=l(i);a=w,a&&a.constructor===O&&N.key==a.__k?S(a,N,1,f,!1):(A=a,e._component=a=x(O,N,f),a.__b=a.__b||m,a.__u=e,S(a,N,0,f,!1),k(a,1,r,!0)),C=a.base}else u=g,A=w,A&&(u=e._component=null),(g||1===t)&&(u&&(u._component=null),C=v(u,i,f,r||!_,g&&g.parentNode,!0));if(g&&C!==g&&a!==w){var D=g.parentNode;D&&C!==D&&(D.replaceChild(C,g),A||(g._component=null,b(g,!1)))}if(A&&j(A),e.base=C,C&&!o){for(var T=e,U=e;U=U.__u;)(T=U).base=C;C._component=T,C._componentConstructor=T.constructor}}if(!_||r?R.unshift(e):E||(y(),e.componentDidUpdate&&e.componentDidUpdate(d,p,h),P.afterUpdate&&P.afterUpdate(e)),null!=e.__h)for(;e.__h.length;)e.__h.pop().call(e);M||o||y()}}function C(e,t,r,n){for(var o=e&&e._component,i=o,a=e,u=o&&e._componentConstructor===t.nodeName,s=u,c=l(t);o&&!s&&(o=o.__u);)s=o.constructor===t.nodeName;return o&&s&&(!n||o._component)?(S(o,c,3,r,n),e=o.base):(i&&!u&&(j(i),e=a=null),o=x(t.nodeName,c,r),e&&!o.__b&&(o.__b=e,a=null),S(o,c,1,r,n),e=o.base,a&&e!==a&&(a._component=null,b(a,!1))),e}function j(e){P.beforeUnmount&&P.beforeUnmount(e);var t=e.base;e.__x=!0,e.componentWillUnmount&&e.componentWillUnmount(),e.base=null;var r=e._component;r?j(r):t&&(t.__preactattr_&&t.__preactattr_.ref&&t.__preactattr_.ref(null),e.__b=t,f(t),E(e),g(t)),e.__r&&e.__r(null)}function O(e,t){this.__d=!0,this.context=t,this.props=e,this.state=this.state||{}}function N(e,t,r){return v(r,e,{},!1,t,!1)}var P={},D=[],T=[],U=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,B=[],R=[],M=0,L=!1,I=!1,F={};n(O.prototype,{setState:function(e,t){var r=this.state;this.__s||(this.__s=n({},r)),n(r,"function"==typeof e?e(r,this.props):e),t&&(this.__h=this.__h||[]).push(t),i(this)},forceUpdate:function(e){e&&(this.__h=this.__h||[]).push(e),k(this,2)},render:function(){}});var H={h:r,createElement:r,cloneElement:o,Component:O,render:N,rerender:a,options:P};e.exports=H}()},21:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),s=r(0),l=n(s),c=r(5),f=n(c),d=(r(1),r(8)),p=(function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);t.default=e}(d),function(e){function t(e){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return a(t,e),u(t,[{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){}},{key:"componentWillUpdate",value:function(e,t){}},{key:"componentDidUpdate",value:function(e,t){}},{key:"componentWillUnmount",value:function(){}},{key:"componentWillReceiveProps",value:function(e){}},{key:"shouldComponentUpdate",value:function(e,t){}},{key:"render",value:function(){var e=this.props;return l.default.createElement(h,{params:e})}}]),t}(l.default.Component)),h=function(e){function t(){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),u(t,[{key:"hasData",value:function(){var e=this.props.params,t=e.count,r=e.increase,n=e.decrease;return l.default.createElement("div",null,l.default.createElement("div",{className:"title"},"计时器"),l.default.createElement("span",null,t),l.default.createElement("button",{onClick:r.bind("add")},"Increase"),l.default.createElement("button",{onClick:n.bind("dec")},"decrease"))}},{key:"noData",value:function(){return l.default.createElement("div",null,l.default.createElement("div",{className:"title"},"这是一个大肉包"))}},{key:"render",value:function(){return"number"==typeof this.props.params.count?this.hasData():this.noData()}}]),t}(l.default.Component);p.propTypes={increase:f.default.func.isRequired,decrease:f.default.func.isRequired,count:f.default.number.isRequired},t.default=p},22:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var o=r(0),i=n(o),a=r(0),u=r(2),s=r(19),l=n(s),c=r(18),f=n(c),d=(r(20),document.getElementById("root")),p=(0,l.default)();(0,a.render)(i.default.createElement(u.Provider,{store:p},i.default.createElement(f.default,null)),d)},23:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(9);t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{count:10},t=arguments[1],r=e.count;switch(t.type){case n.INCREASE:return{count:r+1};case n.DECREASE:return{count:r-1};default:return e}}},28:function(e,t,r){r(56),e.exports=self.fetch.bind(self)},3:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(1),o=r(23),i=function(e){return e&&e.__esModule?e:{default:e}}(o),a=(0,n.combineReducers)({counter:i.default});t.default=a},48:function(e,t,r){(function(e){!function(e,r){r(t)}(0,function(t){"use strict";function r(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}function n(e,t){Object.defineProperty(this,"kind",{value:e,enumerable:!0}),t&&t.length&&Object.defineProperty(this,"path",{value:t,enumerable:!0})}function o(e,t,r){o.super_.call(this,"E",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0}),Object.defineProperty(this,"rhs",{value:r,enumerable:!0})}function i(e,t){i.super_.call(this,"N",e),Object.defineProperty(this,"rhs",{value:t,enumerable:!0})}function a(e,t){a.super_.call(this,"D",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0})}function u(e,t,r){u.super_.call(this,"A",e),Object.defineProperty(this,"index",{value:t,enumerable:!0}),Object.defineProperty(this,"item",{value:r,enumerable:!0})}function s(e,t,r){var n=e.slice((r||t)+1||e.length);return e.length=t<0?e.length+t:t,e.push.apply(e,n),e}function l(e){var t=void 0===e?"undefined":N(e);return"object"!==t?t:e===Math?"math":null===e?"null":Array.isArray(e)?"array":"[object Date]"===Object.prototype.toString.call(e)?"date":"function"==typeof e.toString&&/^\/.*\//.test(e.toString())?"regexp":"object"}function c(e,t,r,n,f,d,p){f=f||[],p=p||[];var h=f.slice(0);if(void 0!==d){if(n){if("function"==typeof n&&n(h,d))return;if("object"===(void 0===n?"undefined":N(n))){if(n.prefilter&&n.prefilter(h,d))return;if(n.normalize){var y=n.normalize(h,d,e,t);y&&(e=y[0],t=y[1])}}}h.push(d)}"regexp"===l(e)&&"regexp"===l(t)&&(e=e.toString(),t=t.toString());var v=void 0===e?"undefined":N(e),_=void 0===t?"undefined":N(t),m="undefined"!==v||p&&p[p.length-1].lhs&&p[p.length-1].lhs.hasOwnProperty(d),b="undefined"!==_||p&&p[p.length-1].rhs&&p[p.length-1].rhs.hasOwnProperty(d);if(!m&&b)r(new i(h,t));else if(!b&&m)r(new a(h,e));else if(l(e)!==l(t))r(new o(h,e,t));else if("date"===l(e)&&e-t!=0)r(new o(h,e,t));else if("object"===v&&null!==e&&null!==t)if(p.filter(function(t){return t.lhs===e}).length)e!==t&&r(new o(h,e,t));else{if(p.push({lhs:e,rhs:t}),Array.isArray(e)){var g;for(e.length,g=0;g<e.length;g++)g>=t.length?r(new u(h,g,new a(void 0,e[g]))):c(e[g],t[g],r,n,h,g,p);for(;g<t.length;)r(new u(h,g,new i(void 0,t[g++])))}else{var w=Object.keys(e),E=Object.keys(t);w.forEach(function(o,i){var a=E.indexOf(o);a>=0?(c(e[o],t[o],r,n,h,o,p),E=s(E,a)):c(e[o],void 0,r,n,h,o,p)}),E.forEach(function(e){c(void 0,t[e],r,n,h,e,p)})}p.length=p.length-1}else e!==t&&("number"===v&&isNaN(e)&&isNaN(t)||r(new o(h,e,t)))}function f(e,t,r,n){return n=n||[],c(e,t,function(e){e&&n.push(e)},r),n.length?n:void 0}function d(e,t,r){if(r.path&&r.path.length){var n,o=e[t],i=r.path.length-1;for(n=0;n<i;n++)o=o[r.path[n]];switch(r.kind){case"A":d(o[r.path[n]],r.index,r.item);break;case"D":delete o[r.path[n]];break;case"E":case"N":o[r.path[n]]=r.rhs}}else switch(r.kind){case"A":d(e[t],r.index,r.item);break;case"D":e=s(e,t);break;case"E":case"N":e[t]=r.rhs}return e}function p(e,t,r){if(e&&t&&r&&r.kind){for(var n=e,o=-1,i=r.path?r.path.length-1:0;++o<i;)void 0===n[r.path[o]]&&(n[r.path[o]]="number"==typeof r.path[o]?[]:{}),n=n[r.path[o]];switch(r.kind){case"A":d(r.path?n[r.path[o]]:n,r.index,r.item);break;case"D":delete n[r.path[o]];break;case"E":case"N":n[r.path[o]]=r.rhs}}}function h(e,t,r){if(r.path&&r.path.length){var n,o=e[t],i=r.path.length-1;for(n=0;n<i;n++)o=o[r.path[n]];switch(r.kind){case"A":h(o[r.path[n]],r.index,r.item);break;case"D":case"E":o[r.path[n]]=r.lhs;break;case"N":delete o[r.path[n]]}}else switch(r.kind){case"A":h(e[t],r.index,r.item);break;case"D":case"E":e[t]=r.lhs;break;case"N":e=s(e,t)}return e}function y(e,t,r){if(e&&t&&r&&r.kind){var n,o,i=e;for(o=r.path.length-1,n=0;n<o;n++)void 0===i[r.path[n]]&&(i[r.path[n]]={}),i=i[r.path[n]];switch(r.kind){case"A":h(i[r.path[n]],r.index,r.item);break;case"D":case"E":i[r.path[n]]=r.lhs;break;case"N":delete i[r.path[n]]}}}function v(e,t,r){if(e&&t){c(e,t,function(n){r&&!r(e,t,n)||p(e,t,n)})}}function _(e){return"color: "+T[e].color+"; font-weight: bold"}function m(e){var t=e.kind,r=e.path,n=e.lhs,o=e.rhs,i=e.index,a=e.item;switch(t){case"E":return[r.join("."),n,"→",o];case"N":return[r.join("."),o];case"D":return[r.join(".")];case"A":return[r.join(".")+"["+i+"]",a];default:return[]}}function b(e,t,r,n){var o=f(e,t);try{n?r.groupCollapsed("diff"):r.group("diff")}catch(e){r.log("diff")}o?o.forEach(function(e){var t=e.kind,n=m(e);r.log.apply(r,["%c "+T[t].text,_(t)].concat(P(n)))}):r.log("—— no diff ——");try{r.groupEnd()}catch(e){r.log("—— diff end —— ")}}function g(e,t,r,n){switch(void 0===e?"undefined":N(e)){case"object":return"function"==typeof e[n]?e[n].apply(e,P(r)):e[n];case"function":return e(t);default:return e}}function w(e){var t=e.timestamp,r=e.duration;return function(e,n,o){var i=["action"];return i.push("%c"+String(e.type)),t&&i.push("%c@ "+n),r&&i.push("%c(in "+o.toFixed(2)+" ms)"),i.join(" ")}}function E(e,t){var r=t.logger,n=t.actionTransformer,o=t.titleFormatter,i=void 0===o?w(t):o,a=t.collapsed,u=t.colors,s=t.level,l=t.diff,c=void 0===t.titleFormatter;e.forEach(function(o,f){var d=o.started,p=o.startedTime,h=o.action,y=o.prevState,v=o.error,_=o.took,m=o.nextState,w=e[f+1];w&&(m=w.prevState,_=w.started-d);var E=n(h),x="function"==typeof a?a(function(){return m},h,o):a,A=j(p),S=u.title?"color: "+u.title(E)+";":"",k=["color: gray; font-weight: lighter;"];k.push(S),t.timestamp&&k.push("color: gray; font-weight: lighter;"),t.duration&&k.push("color: gray; font-weight: lighter;");var C=i(E,A,_);try{x?u.title&&c?r.groupCollapsed.apply(r,["%c "+C].concat(k)):r.groupCollapsed(C):u.title&&c?r.group.apply(r,["%c "+C].concat(k)):r.group(C)}catch(e){r.log(C)}var O=g(s,E,[y],"prevState"),N=g(s,E,[E],"action"),P=g(s,E,[v,y],"error"),D=g(s,E,[m],"nextState");if(O)if(u.prevState){var T="color: "+u.prevState(y)+"; font-weight: bold";r[O]("%c prev state",T,y)}else r[O]("prev state",y);if(N)if(u.action){var U="color: "+u.action(E)+"; font-weight: bold";r[N]("%c action    ",U,E)}else r[N]("action    ",E);if(v&&P)if(u.error){var B="color: "+u.error(v,y)+"; font-weight: bold;";r[P]("%c error     ",B,v)}else r[P]("error     ",v);if(D)if(u.nextState){var R="color: "+u.nextState(m)+"; font-weight: bold";r[D]("%c next state",R,m)}else r[D]("next state",m);l&&b(y,m,r,x);try{r.groupEnd()}catch(e){r.log("—— log end ——")}})}function x(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object.assign({},U,e),r=t.logger,n=t.stateTransformer,o=t.errorTransformer,i=t.predicate,a=t.logErrors,u=t.diffPredicate;if(void 0===r)return function(){return function(e){return function(t){return e(t)}}};if(e.getState&&e.dispatch)return console.error("[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:\n// Logger with default options\nimport { logger } from 'redux-logger'\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n// Or you can create your own logger with custom options http://bit.ly/redux-logger-options\nimport createLogger from 'redux-logger'\nconst logger = createLogger({\n  // ...options\n});\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n"),function(){return function(e){return function(t){return e(t)}}};var s=[];return function(e){var r=e.getState;return function(e){return function(l){if("function"==typeof i&&!i(r,l))return e(l);var c={};s.push(c),c.started=O.now(),c.startedTime=new Date,c.prevState=n(r()),c.action=l;var f=void 0;if(a)try{f=e(l)}catch(e){c.error=o(e)}else f=e(l);c.took=O.now()-c.started,c.nextState=n(r());var d=t.diff&&"function"==typeof u?u(r,l):t.diff;if(E(s,Object.assign({},t,{diff:d})),s.length=0,c.error)throw c.error;return f}}}}var A,S,k=function(e,t){return new Array(t+1).join(e)},C=function(e,t){return k("0",t-e.toString().length)+e},j=function(e){return C(e.getHours(),2)+":"+C(e.getMinutes(),2)+":"+C(e.getSeconds(),2)+"."+C(e.getMilliseconds(),3)},O="undefined"!=typeof performance&&null!==performance&&"function"==typeof performance.now?performance:Date,N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P=function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)},D=[];A="object"===(void 0===e?"undefined":N(e))&&e?e:"undefined"!=typeof window?window:{},S=A.DeepDiff,S&&D.push(function(){void 0!==S&&A.DeepDiff===f&&(A.DeepDiff=S,S=void 0)}),r(o,n),r(i,n),r(a,n),r(u,n),Object.defineProperties(f,{diff:{value:f,enumerable:!0},observableDiff:{value:c,enumerable:!0},applyDiff:{value:v,enumerable:!0},applyChange:{value:p,enumerable:!0},revertChange:{value:y,enumerable:!0},isConflict:{value:function(){return void 0!==S},enumerable:!0},noConflict:{value:function(){return D&&(D.forEach(function(e){e()}),D=null),f},enumerable:!0}});var T={E:{color:"#2196F3",text:"CHANGED:"},N:{color:"#4CAF50",text:"ADDED:"},D:{color:"#F44336",text:"DELETED:"},A:{color:"#2196F3",text:"ARRAY:"}},U={level:"log",logger:console,logErrors:!0,collapsed:void 0,predicate:void 0,duration:!1,timestamp:!0,stateTransformer:function(e){return e},actionTransformer:function(e){return e},errorTransformer:function(e){return e},colors:{title:function(){return"inherit"},prevState:function(){return"#9E9E9E"},action:function(){return"#03A9F4"},nextState:function(){return"#4CAF50"},error:function(){return"#F20404"}},diff:!1,diffPredicate:void 0,transformer:void 0},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.dispatch,r=e.getState;return"function"==typeof t||"function"==typeof r?x()({dispatch:t,getState:r}):void console.error("\n[redux-logger v3] BREAKING CHANGE\n[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.\n[redux-logger v3] Change\n[redux-logger v3] import createLogger from 'redux-logger'\n[redux-logger v3] to\n[redux-logger v3] import { createLogger } from 'redux-logger'\n")};t.defaults=U,t.createLogger=x,t.logger=B,t.default=B,Object.defineProperty(t,"__esModule",{value:!0})})}).call(t,r(7))},56:function(e,t){!function(e){"use strict";function t(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function r(e){return"string"!=typeof e&&(e=String(e)),e}function n(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return _.iterable&&(t[Symbol.iterator]=function(){return t}),t}function o(e){this.map={},e instanceof o?e.forEach(function(e,t){this.append(t,e)},this):Array.isArray(e)?e.forEach(function(e){this.append(e[0],e[1])},this):e&&Object.getOwnPropertyNames(e).forEach(function(t){this.append(t,e[t])},this)}function i(e){if(e.bodyUsed)return Promise.reject(new TypeError("Already read"));e.bodyUsed=!0}function a(e){return new Promise(function(t,r){e.onload=function(){t(e.result)},e.onerror=function(){r(e.error)}})}function u(e){var t=new FileReader,r=a(t);return t.readAsArrayBuffer(e),r}function s(e){var t=new FileReader,r=a(t);return t.readAsText(e),r}function l(e){for(var t=new Uint8Array(e),r=new Array(t.length),n=0;n<t.length;n++)r[n]=String.fromCharCode(t[n]);return r.join("")}function c(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function f(){return this.bodyUsed=!1,this._initBody=function(e){if(this._bodyInit=e,e)if("string"==typeof e)this._bodyText=e;else if(_.blob&&Blob.prototype.isPrototypeOf(e))this._bodyBlob=e;else if(_.formData&&FormData.prototype.isPrototypeOf(e))this._bodyFormData=e;else if(_.searchParams&&URLSearchParams.prototype.isPrototypeOf(e))this._bodyText=e.toString();else if(_.arrayBuffer&&_.blob&&b(e))this._bodyArrayBuffer=c(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!_.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(e)&&!g(e))throw new Error("unsupported BodyInit type");this._bodyArrayBuffer=c(e)}else this._bodyText="";this.headers.get("content-type")||("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):_.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},_.blob&&(this.blob=function(){var e=i(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?i(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(u)}),this.text=function(){var e=i(this);if(e)return e;if(this._bodyBlob)return s(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(l(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},_.formData&&(this.formData=function(){return this.text().then(h)}),this.json=function(){return this.text().then(JSON.parse)},this}function d(e){var t=e.toUpperCase();return w.indexOf(t)>-1?t:e}function p(e,t){t=t||{};var r=t.body;if(e instanceof p){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new o(e.headers)),this.method=e.method,this.mode=e.mode,r||null==e._bodyInit||(r=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"omit",!t.headers&&this.headers||(this.headers=new o(t.headers)),this.method=d(t.method||this.method||"GET"),this.mode=t.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&r)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(r)}function h(e){var t=new FormData;return e.trim().split("&").forEach(function(e){if(e){var r=e.split("="),n=r.shift().replace(/\+/g," "),o=r.join("=").replace(/\+/g," ");t.append(decodeURIComponent(n),decodeURIComponent(o))}}),t}function y(e){var t=new o;return e.split(/\r?\n/).forEach(function(e){var r=e.split(":"),n=r.shift().trim();if(n){var o=r.join(":").trim();t.append(n,o)}}),t}function v(e,t){t||(t={}),this.type="default",this.status="status"in t?t.status:200,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in t?t.statusText:"OK",this.headers=new o(t.headers),this.url=t.url||"",this._initBody(e)}if(!e.fetch){var _={searchParams:"URLSearchParams"in e,iterable:"Symbol"in e&&"iterator"in Symbol,blob:"FileReader"in e&&"Blob"in e&&function(){try{return new Blob,!0}catch(e){return!1}}(),formData:"FormData"in e,arrayBuffer:"ArrayBuffer"in e};if(_.arrayBuffer)var m=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],b=function(e){return e&&DataView.prototype.isPrototypeOf(e)},g=ArrayBuffer.isView||function(e){return e&&m.indexOf(Object.prototype.toString.call(e))>-1};o.prototype.append=function(e,n){e=t(e),n=r(n);var o=this.map[e];this.map[e]=o?o+","+n:n},o.prototype.delete=function(e){delete this.map[t(e)]},o.prototype.get=function(e){return e=t(e),this.has(e)?this.map[e]:null},o.prototype.has=function(e){return this.map.hasOwnProperty(t(e))},o.prototype.set=function(e,n){this.map[t(e)]=r(n)},o.prototype.forEach=function(e,t){for(var r in this.map)this.map.hasOwnProperty(r)&&e.call(t,this.map[r],r,this)},o.prototype.keys=function(){var e=[];return this.forEach(function(t,r){e.push(r)}),n(e)},o.prototype.values=function(){var e=[];return this.forEach(function(t){e.push(t)}),n(e)},o.prototype.entries=function(){var e=[];return this.forEach(function(t,r){e.push([r,t])}),n(e)},_.iterable&&(o.prototype[Symbol.iterator]=o.prototype.entries);var w=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];p.prototype.clone=function(){return new p(this,{body:this._bodyInit})},f.call(p.prototype),f.call(v.prototype),v.prototype.clone=function(){return new v(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new o(this.headers),url:this.url})},v.error=function(){var e=new v(null,{status:0,statusText:""});return e.type="error",e};var E=[301,302,303,307,308];v.redirect=function(e,t){if(-1===E.indexOf(t))throw new RangeError("Invalid status code");return new v(null,{status:t,headers:{location:e}})},e.Headers=o,e.Request=p,e.Response=v,e.fetch=function(e,t){return new Promise(function(r,n){var o=new p(e,t),i=new XMLHttpRequest;i.onload=function(){var e={status:i.status,statusText:i.statusText,headers:y(i.getAllResponseHeaders()||"")};e.url="responseURL"in i?i.responseURL:e.headers.get("X-Request-URL");var t="response"in i?i.response:i.responseText;r(new v(t,e))},i.onerror=function(){n(new TypeError("Network request failed"))},i.ontimeout=function(){n(new TypeError("Network request failed"))},i.open(o.method,o.url,!0),"include"===o.credentials&&(i.withCredentials=!0),"responseType"in i&&_.blob&&(i.responseType="blob"),o.headers.forEach(function(e,t){i.setRequestHeader(t,e)}),i.send(void 0===o._bodyInit?null:o._bodyInit)})},e.fetch.polyfill=!0}}("undefined"!=typeof self?self:this)},8:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.decrease=t.increase=void 0;var n=r(28),o=(function(e){e&&e.__esModule}(n),r(9));t.increase=function(e){return{type:o.INCREASE,text:e}},t.decrease=function(e){return{type:o.DECREASE,text:e}}},9:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.INCREASE="INCREASE",t.DECREASE="DECREASE"}},[22]);
//# sourceMappingURL=app.js.map