(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ReferLogger"] = factory();
	else
		root["ReferLogger"] = factory();
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
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	var attr = 'info' in console ? 'info' : "log";
	var pad = function pad(num) {
		return ('0' + num).slice(-2);
	};

	var timeStore = {};
	var getTime = typeof performance !== 'undefined' && performance.now ? function () {
		return performance.now();
	} : function () {
		return new Date().getTime();
	};

	var createLogger = function createLogger(_ref) {
		var _ref$scope = _ref.scope;
		var scope = _ref$scope === undefined ? "ROOT" : _ref$scope;
		var debug = _ref.debug;

		var logger = {
			DISPATCH: function DISPATCH(data) {
				timeStore[data.key] = getTime();
				return data;
			},
			DID_UPDATE: function DID_UPDATE(data) {
				var key = data.key;
				var value = data.value;
				var currentState = data.currentState;
				var nextState = data.nextState;

				var time = new Date();
				var formattedTime = time.getHours() + ':' + pad(time.getMinutes()) + ':' + pad(time.getSeconds());
				var takeTime = (getTime() - timeStore[key]).toFixed(2);
				var message = scope + ': action [' + key + '] end at ' + formattedTime + ', take ' + takeTime + 'ms';

				try {
					console.groupCollapsed(message);
				} catch (e) {
					try {
						console.group(message);
					} catch (e) {
						console.log(message);
					}
				}

				if (attr === 'log') {
					console[attr](value);
					console[attr](currentState);
					console[attr](nextState);
				} else {
					console[attr]('%c value', 'color: #03A9F4; font-weight: bold', value);
					console[attr]('%c prev state', 'color: #9E9E9E; font-weight: bold', currentState);
					console[attr]('%c next state', 'color: #4CAF50; font-weight: bold', nextState);
				}

				try {
					console.groupEnd();
				} catch (e) {
					console.log('-- log end --');
				}

				return data;
			},
			THROW_ERROR: function THROW_ERROR(error) {
				if (debug) {
					throw error;
				}
				return error;
			}
		};
		return logger;
	};

	exports['default'] = createLogger;
	module.exports = exports['default'];

/***/ }
/******/ ])
});
;