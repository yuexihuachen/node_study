webpackHotUpdate(0,{63:function(module,exports,__webpack_require__){"use strict";eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(0);\n\nvar _reactRedux = __webpack_require__(2);\n\nvar _redux = __webpack_require__(1);\n\nvar _actions = __webpack_require__(8);\n\nvar actions = _interopRequireWildcard(_actions);\n\nvar _increase = __webpack_require__(59);\n\nvar _increase2 = _interopRequireDefault(_increase);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction mapStateToProps(state) {\n  return {\n    content: state.counter.count\n  };\n}\n//import {increase,decrease} from '../actions';\n\n\nfunction mapDispatchToProps(dispatch) {\n  //   return {\n  //     increase:inc\n  //   }\n  console.log(actions);\n  return (0, _redux.bindActionCreators)(actions, dispatch);\n}\n\nvar Content = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_increase2.default);\n\nexports.default = _increase2.default;\n\n//////////////////\n// WEBPACK FOOTER\n// ./public/client/containers/increase.js\n// module id = 63\n// module chunks = 0\n\n//# sourceURL=webpack:///./public/client/containers/increase.js?")}});