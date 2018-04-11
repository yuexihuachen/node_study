webpackHotUpdate(0,{21:function(module,exports,__webpack_require__){"use strict";eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(3);\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _redux = __webpack_require__(1);\n\nvar _actions = __webpack_require__(8);\n\nvar actions = _interopRequireWildcard(_actions);\n\nvar _title = __webpack_require__(22);\n\nvar _title2 = _interopRequireDefault(_title);\n\nvar _content = __webpack_require__(62);\n\nvar _content2 = _interopRequireDefault(_content);\n\nvar _increase = __webpack_require__(59);\n\nvar _increase2 = _interopRequireDefault(_increase);\n\nvar _decrease = __webpack_require__(60);\n\nvar _decrease2 = _interopRequireDefault(_decrease);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n//UI 组件\nvar Counter = function (_React$Component) {\n  _inherits(Counter, _React$Component);\n\n  function Counter(props) {\n    _classCallCheck(this, Counter);\n\n    // 类构造函数(class constructor) 初始化 \n    return _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));\n    //组件需要与用户互动，React 就是将组件看成是一个状态机，\n    //一开始有一个初始状态this.state，然后和用户互动，导致状态变化，从而触发重新渲染 UI \n    //当用户点击组件，导致状态变化，this.setState 方法就是修改状态值，每次修改以后，自动调用 this.render 方法，再次渲染组件。\n    //设置默认的state\n    //不能直接修改 state(状态)，唯一可以分配 this.state 的地方是构造函数。\n  }\n\n  _createClass(Counter, [{\n    key: 'componentWillMount',\n    value: function componentWillMount() {//在组件装载发生之前立即被调用。 \n      //它在 render() 之前调用，因此在此方法中的设置 state(状态) 不会触发重新渲染。 \n\n    }\n  }, {\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      //在第一次渲染后调用，只在客户端。之后组件已经生成了对应的DOM结构，可以通过this.getDOMNode()来进行访问。 \n      //如果你想和其他JavaScript框架一起使用，可以在这个方法中调用setTimeout, setInterval或者发送AJAX请求等操作(防止异部操作阻塞UI)。\n    }\n  }, {\n    key: 'componentWillUpdate',\n    value: function componentWillUpdate(nextProps, nextState) {\n      //在组件接收到新的props或者state但还没有render时被调用。在初始化时不会被调用。\n    }\n  }, {\n    key: 'componentDidUpdate',\n    value: function componentDidUpdate(prevProps, prevState) {\n      //在组件完成更新后立即调用。在初始化时不会被调用。\n    }\n  }, {\n    key: 'componentWillUnmount',\n    value: function componentWillUnmount() {\n      //在组件从 DOM 中移除的时候立刻被调用。\n    }\n  }, {\n    key: 'componentWillReceiveProps',\n    value: function componentWillReceiveProps(nextProps) {\n      //在组件接收到一个新的prop时被调用。这个方法在初始化render时不会被调用。\n    }\n  }, {\n    key: 'shouldComponentUpdate',\n    value: function shouldComponentUpdate(nextProps, nextState) {\n      //返回一个布尔值,组件判断是否重新渲染时调用.\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      //输出逻辑：用户发出的动作如何变为 Action 对象，从 UI 组件传出去。它可以是一个函数，也可以是一个对象。做出不同的处理\n      //const { count, onIncreaseClick,onDecreaseClick } = this.props //对象\n      var parentState = this.props; //函数\n      return _react2.default.createElement(CountContent, { params: parentState });\n    }\n  }]);\n\n  return Counter;\n}(_react2.default.Component);\n\nvar CountContent = function (_React$Component2) {\n  _inherits(CountContent, _React$Component2);\n\n  function CountContent() {\n    _classCallCheck(this, CountContent);\n\n    return _possibleConstructorReturn(this, (CountContent.__proto__ || Object.getPrototypeOf(CountContent)).apply(this, arguments));\n  }\n\n  _createClass(CountContent, [{\n    key: 'hasData',\n    value: function hasData() {\n      var _props$params = this.props.params,\n          count = _props$params.count,\n          increase = _props$params.increase,\n          decrease = _props$params.decrease;\n\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(_title2.default, { title: '\\u8BA1\\u65F6\\u5668' }),\n        _react2.default.createElement(_content2.default, null),\n        _react2.default.createElement(_increase2.default, null),\n        _react2.default.createElement(_decrease2.default, { decrease: decrease })\n      );\n    }\n  }, {\n    key: 'noData',\n    value: function noData() {\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          'div',\n          { className: 'title' },\n          '\\u8FD9\\u662F\\u4E00\\u4E2A\\u5927\\u8089\\u5305'\n        )\n      );\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var count = this.props.params.count;\n\n      if (typeof count === \"number\") {\n        return this.hasData();\n      } else {\n        return this.noData();\n      }\n    }\n  }]);\n\n  return CountContent;\n}(_react2.default.Component);\n\nCounter.propTypes = {\n  increase: _propTypes2.default.func.isRequired,\n  decrease: _propTypes2.default.func.isRequired,\n  count: _propTypes2.default.number.isRequired\n};\n\nexports.default = Counter;\n\n//////////////////\n// WEBPACK FOOTER\n// ./public/client/components/Counter.js\n// module id = 21\n// module chunks = 0\n\n//# sourceURL=webpack:///./public/client/components/Counter.js?")}});