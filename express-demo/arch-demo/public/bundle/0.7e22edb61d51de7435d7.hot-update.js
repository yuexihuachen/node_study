webpackHotUpdate(0,{58:function(module,exports,__webpack_require__){"use strict";eval('\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(3);\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _redux = __webpack_require__(1);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n//UI 组件\nvar Content = function (_React$Component) {\n  _inherits(Content, _React$Component);\n\n  function Content(props) {\n    _classCallCheck(this, Content);\n\n    // 类构造函数(class constructor) 初始化 \n    return _possibleConstructorReturn(this, (Content.__proto__ || Object.getPrototypeOf(Content)).call(this, props));\n  }\n\n  _createClass(Content, [{\n    key: \'content\',\n    value: function content() {\n      var content = this.props.content;\n\n      return _react2.default.createElement(\n        \'span\',\n        null,\n        content\n      );\n    }\n  }, {\n    key: \'render\',\n    value: function render() {\n      return this.content();\n    }\n  }]);\n\n  return Content;\n}(_react2.default.Component);\n\nContent.propTypes = {\n  content: propTypes.number.isRequired\n};\n\nexports.default = Content;\n\n//////////////////\n// WEBPACK FOOTER\n// ./public/client/components/content.js\n// module id = 58\n// module chunks = 0\n\n//# sourceURL=webpack:///./public/client/components/content.js?')}});