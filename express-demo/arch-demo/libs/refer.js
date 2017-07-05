(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Refer"] = factory();
	else
		root["Refer"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _createDispatch2 = __webpack_require__(3);

	var _createDispatch3 = _interopRequireDefault(_createDispatch2);

	exports.createDispatch = _createDispatch3['default'];

	var _createStore2 = __webpack_require__(6);

	var _createStore3 = _interopRequireDefault(_createStore2);

	exports.createStore = _createStore3['default'];

	var _combineHandlers2 = __webpack_require__(5);

	var _combineHandlers3 = _interopRequireDefault(_combineHandlers2);

	exports.combineHandlers = _combineHandlers3['default'];

	var _constants2 = __webpack_require__(2);

	var _constants3 = _interopRequireDefault(_constants2);

	exports.constants = _constants3['default'];

	var _mapValues2 = __webpack_require__(4);

	var _mapValues3 = _interopRequireDefault(_mapValues2);

	exports.mapValues = _mapValues3['default'];

	var _types2 = __webpack_require__(1);

	var _types = _interopRequireWildcard(_types2);

	exports.types = _types;

/***/ },
/* 1 */
/***/ function(module, exports) {

	//types.js
	'use strict';

	exports.__esModule = true;
	var isType = function isType(type) {
	  return function (obj) {
	    return obj != null && Object.prototype.toString.call(obj) === '[object ' + type + ']';
	  };
	};
	exports.isType = isType;
	var isObj = isType('Object');
	exports.isObj = isObj;
	var isStr = isType('String');
	exports.isStr = isStr;
	var isNum = isType('Number');
	exports.isNum = isNum;
	var isFn = isType('Function');
	exports.isFn = isFn;
	var isArr = Array.isArray || isType('Array');
	exports.isArr = isArr;
	var isThenable = function isThenable(obj) {
	  return obj != null && isFn(obj.then);
	};
	exports.isThenable = isThenable;

/***/ },
/* 2 */
/***/ function(module, exports) {

	//life cycle key
	'use strict';

	exports.__esModule = true;
	exports['default'] = {
		GET_TABLE: 'GET_TABLE',
		DISPATCH: 'DISPATCH',
		SHOULD_DISPATCH: 'SHOULD_DISPATCH',
		WILL_UPDATE: 'WILL_UPDATE',
		SHOULD_UPDATE: 'SHOULD_UPDATE',
		DID_UPDATE: 'DID_UPDATE',
		THROW_ERROR: 'THROW_ERROR',
		ASYNC_START: 'ASYNC_START',
		ASYNC_END: 'ASYNC_END',
		SYNC: 'SYNC'
	};
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _types = __webpack_require__(1);

	var _mapValues = __webpack_require__(4);

	var _mapValues2 = _interopRequireDefault(_mapValues);

	var _constants = __webpack_require__(2);

	var createDispatche = function createDispatche(table) {
		if (!_types.isObj(table)) {
			throw new Error('createDispatche(table): Expected table to be an object which is ' + table);
		}
		var dispatch = function dispatch(_x, _x2) {
			var _again = true;

			_function: while (_again) {
				var key = _x,
				    value = _x2;
				handler = undefined;
				_again = false;

				var handler = undefined;
				switch (true) {
					case key === null:
						return value;
					case key === undefined:
						throw new Error('dispatch(key, value): Expected the key not to be undefined');
					case key === _constants.GET_TABLE:
						return table; // special key to get table
					case _types.isStr(key) || _types.isNum(key):
						handler = table[key];
						break;
					default:
						handler = key;
				}

				switch (true) {
					case handler == null:
						return value;
					case _types.isFn(handler):
						return _types.isThenable(value) ? value.then(handler) : handler(value);
					case _types.isStr(handler) || _types.isNum(handler):
						_x = handler;
						_x2 = value;
						_again = true;
						continue _function;

					case _types.isArr(handler):
						return dispatchOnList(handler, value);
					case _types.isThenable(handler):
						return handler.then(function (asyncHandler) {
							return dispatch(asyncHandler, value);
						});
					case _types.isObj(handler):
						return _mapValues2['default'](handler, function (item) {
							return dispatch(item, value);
						});
					default:
						return value;
				}
			}
		};
		var dispatchOnList = function dispatchOnList(handlers, value) {
			for (var i = 0, len = handlers.length; i < len; i++) {
				value = dispatch(handlers[i], value);
				if (_types.isThenable(value)) {
					return i === len - 1 ? value : value.then(function (result) {
						return dispatch(handlers.slice(i + 1), result);
					});
				}
			}
			return value;
		};

		return dispatch;
	};

	exports['default'] = createDispatche;
	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports) {

	/**
	 * Applies a function to every key-value pair inside an object.
	 *
	 * @param {Object} obj The source object.
	 * @param {Function} fn The mapper function that receives the value and the key.
	 * @returns {Object} A new object that contains the mapped values for the keys.
	 */
	"use strict";

	exports.__esModule = true;
	var mapValues = function mapValues(obj, fn) {
	  return Object.keys(obj).reduce(function (result, key) {
	    result[key] = fn(obj[key], key);
	    return result;
	  }, {});
	};

	exports["default"] = mapValues;
	module.exports = exports["default"];

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _createDispatch = __webpack_require__(3);

	var _createDispatch2 = _interopRequireDefault(_createDispatch);

	var _types = __webpack_require__(1);

	var combineHandlers = function combineHandlers() {
		for (var _len = arguments.length, handlers = Array(_len), _key = 0; _key < _len; _key++) {
			handlers[_key] = arguments[_key];
		}

		return handlers.reduce(function (rootHandler, handler) {
			if (_types.isArr(handler)) {
				handler = combineHandlers.apply(undefined, handler);
			}
			var dispatch = _createDispatch2['default'](handler);
			return Object.keys(handler).reduce(function (rootHandler, key) {
				if (!rootHandler[key]) {
					rootHandler[key] = [];
				}
				rootHandler[key].push(function (value) {
					return dispatch(key, value);
				});
				return rootHandler;
			}, rootHandler);
		}, {});
	};

	exports['default'] = combineHandlers;
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _types = __webpack_require__(1);

	var _combineHandlers = __webpack_require__(5);

	var _combineHandlers2 = _interopRequireDefault(_combineHandlers);

	var _createDispatch = __webpack_require__(3);

	var _createDispatch2 = _interopRequireDefault(_createDispatch);

	var _mapValues = __webpack_require__(4);

	var _mapValues2 = _interopRequireDefault(_mapValues);

	var _constants = __webpack_require__(2);

	var LIFE_CYCLE = _interopRequireWildcard(_constants);

	var GET_TABLE = LIFE_CYCLE.GET_TABLE;
	var SHOULD_DISPATCH = LIFE_CYCLE.SHOULD_DISPATCH;
	var DISPATCH = LIFE_CYCLE.DISPATCH;
	var WILL_UPDATE = LIFE_CYCLE.WILL_UPDATE;
	var SHOULD_UPDATE = LIFE_CYCLE.SHOULD_UPDATE;
	var DID_UPDATE = LIFE_CYCLE.DID_UPDATE;
	var THROW_ERROR = LIFE_CYCLE.THROW_ERROR;
	var ASYNC_START = LIFE_CYCLE.ASYNC_START;
	var ASYNC_END = LIFE_CYCLE.ASYNC_END;
	var SYNC = LIFE_CYCLE.SYNC;

	var createStore = function createStore(innerDispatch) {
		var initialState = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

		if (_types.isArr(innerDispatch)) {
			innerDispatch = _createDispatch2['default'](_combineHandlers2['default'].apply(undefined, innerDispatch));
		} else if (_types.isObj(innerDispatch)) {
			innerDispatch = _createDispatch2['default'](innerDispatch);
		}

		if (!_types.isFn(innerDispatch)) {
			throw new Error('Expected the innerDispatch to be a function which is ' + innerDispatch);
		}

		var listeners = [];
		var subscribe = function subscribe(listener) {
			listeners.push(listener);
			return function () {
				var index = listeners.indexOf(listener);
				if (index !== -1) {
					listeners.splice(index, 1);
				}
			};
		};

		var currentState = initialState;
		var replaceState = function replaceState(nextState, silent) {
			for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
				args[_key - 2] = arguments[_key];
			}

			currentState = nextState;
			if (!silent) {
				listeners.forEach(function (listener) {
					return listener.apply(undefined, args);
				});
			}
		};
		var updateCurrentState = function updateCurrentState(data) {
			if (innerDispatch(SHOULD_UPDATE, data) !== false) {
				innerDispatch(WILL_UPDATE, data);
				replaceState(data.nextState, null, data);
				innerDispatch(DID_UPDATE, data);
			}
		};

		var getState = function getState() {
			return currentState;
		};
		var dispatchError = function dispatchError(error) {
			return typeof Promise !== 'undefined' && Promise.reject(innerDispatch(THROW_ERROR, error));
		};

		var isDispatching = false;
		var dispatch = function dispatch(key, value) {
			if (isDispatching) {
				throw new Error('store.dispatch(key, value): handler may not dispatch');
			}

			var currentData = { currentState: currentState, key: key, value: value };

			if (innerDispatch(SHOULD_DISPATCH, currentData) === false) {
				return currentState;
			}

			innerDispatch(DISPATCH, currentData);

			var nextState = undefined;
			var isAsync = false;
			var getNextState = function getNextState(f) {
				var nextState = f(currentState);
				var data = undefined;
				if (isAsync) {
					data = { currentState: currentState, nextState: nextState, key: key, value: value };
					updateCurrentState(data);
					innerDispatch(ASYNC_END, data);
				}
				return nextState;
			};

			try {
				isDispatching = true;
				nextState = innerDispatch([key, getNextState], value);
			} catch (error) {
				return dispatchError(error);
			} finally {
				isDispatching = false;
			}

			if (nextState === currentState) {
				return currentState;
			}

			var data = { currentState: currentState, nextState: nextState, key: key, value: value };

			if (!_types.isThenable(nextState)) {
				updateCurrentState(data);
				innerDispatch(SYNC, data);
				return currentState;
			}

			innerDispatch(ASYNC_START, data);
			isAsync = true;
			return nextState['catch'](function (error) {
				innerDispatch(ASYNC_END, { currentState: currentState, key: key, value: value, error: error });
				return dispatchError(error);
			});
		};

		var createActions = function createActions(obj) {
			return _mapValues2['default'](obj, function (_, key) {
				return function (value) {
					return LIFE_CYCLE.hasOwnProperty(key) ? innerDispatch(key, value) : dispatch(key, value);
				};
			});
		};
		var actions = createActions(innerDispatch(GET_TABLE));

		return {
			dispatch: dispatch,
			actions: actions,
			getState: getState,
			replaceState: replaceState,
			subscribe: subscribe,
			createActions: createActions
		};
	};

	exports['default'] = createStore;
	module.exports = exports['default'];

/***/ }
/******/ ])
});
;