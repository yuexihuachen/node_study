webpackHotUpdate(0,{97:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(0),a=n(1),f=function(e){return e&&e.__esModule?e:{default:e}}(a),p="history",s=function(e){function t(e,n){o(this,t);var r=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return console.log(e,n),r[p]=e.history,r}return u(t,e),l(t,[{key:"getChildContext",value:function(){var e;return e={},r(e,p,this[p]),r(e,"Subscription",null),e}}]),l(t,[{key:"render",value:function(){return c.Children.only(this.props.children)}}]),t}(c.Component);s.propTypes={children:f.default.element.isRequired},t.default=s}});
//# sourceMappingURL=0.41955f8afd2c2d2b5c75.hot-update.js.map