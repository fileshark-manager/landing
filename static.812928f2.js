(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "https://fileshark-manager.github.io/landing/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 28);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var subject = 'Bug report or a feature request';
var body = '\nAre you submitting a bug report or a feature request?\n\n%0D%0A\n%0D%0A\n%0D%0A\n%0D%0A\n%0D%0A\n%0D%0A\n\nWhat is the current behavior? %0D%0A\n(If this is a bug, please include steps to reproduce.)\n\n%0D%0A\n%0D%0A\n%0D%0A\n%0D%0A\n%0D%0A\n%0D%0A\n\nWhat is the expected behavior?\n\n%0D%0A\n%0D%0A\n%0D%0A\n%0D%0A\n%0D%0A\n%0D%0A\n\nWhat\'s your environment? %0D%0A\n(OS/browser version, Node version, etc.)\n\n%0D%0A\n%0D%0A\n%0D%0A\n%0D%0A\n%0D%0A\n%0D%0A\n\nOther information %0D%0A\n(Include here any detailed explanation, stacktraces, etc.)\n\n%0D%0A\n%0D%0A\n%0D%0A\n\n';

exports.default = {
    purchaseLink: 'http://ya.ru',
    contactLink: 'mailto:fileshark.mm@gmail.com?subject=' + subject + '&body=' + body,
    demoLink: 'https://media-manager-front.herokuapp.com/'
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(4);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

__webpack_require__(51);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Renders Button component
 * @param {Object}
 * @returns {JSX}
 */
var Button = function Button(_ref) {
    var href = _ref.href,
        text = _ref.text,
        title = _ref.title,
        target = _ref.target,
        onClick = _ref.onClick,
        theme = _ref.theme,
        size = _ref.size,
        disabled = _ref.disabled;

    var buttonClass = (0, _classnames2.default)({
        Button: true,

        Button_theme_super: theme === 'super',
        Button_theme_alert: theme === 'alert',
        Button_theme_primary: theme === 'primary',
        Button_theme_secondary: theme === 'secondary',
        Button_theme_disabled: theme === 'disabled',
        Button_theme_light: theme === 'light',
        Button_theme_dark: theme === 'dark',
        Button_theme_pale: theme === 'pale',

        Button_size_small: size === 'small',
        Button_size_medium: size === 'medium',
        Button_size_big: size === 'big',
        Button_size_full: size === 'full',

        Button_disabled: disabled
    });
    var Tag = href ? 'a' : 'button';

    return _react2.default.createElement(
        Tag,
        {
            className: buttonClass,
            href: href,
            title: title,
            target: target,
            onClick: onClick },
        text
    );
};

Button.propTypes = {
    href: _propTypes2.default.string,
    text: _propTypes2.default.string.isRequired,
    title: _propTypes2.default.string,
    target: _propTypes2.default.oneOf(['_blank', '_parent', '_self', '_top']),
    onClick: _propTypes2.default.func,
    theme: _propTypes2.default.oneOf(['alert', 'primary', 'secondary', 'disabled', 'super', 'light', 'dark', 'pale']),
    size: _propTypes2.default.oneOf(['small', 'medium', 'big', 'full']),
    disabled: _propTypes2.default.bool
};

Button.defaultProps = {
    theme: 'primary',
    size: 'small'
};

exports.default = Button;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

__webpack_require__(127);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Renders DocumentationSection component
 * @param {Object}
 * @returns {JSX}
 */
var DocumentationSection = function DocumentationSection(_ref) {
    var id = _ref.id,
        children = _ref.children;
    return _react2.default.createElement(
        'div',
        { className: 'DocumentationSection' },
        _react2.default.createElement('div', { id: id, className: 'DocumentationSection__anchor' }),
        children
    );
};

DocumentationSection.propTypes = {
    id: _propTypes2.default.string,
    children: _propTypes2.default.node
};

exports.default = DocumentationSection;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("lodash/flow");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactSyntaxHighlighter = __webpack_require__(129);

var _reactSyntaxHighlighter2 = _interopRequireDefault(_reactSyntaxHighlighter);

var _hljs = __webpack_require__(130);

__webpack_require__(131);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Renders DocumentationCode component
 * @param {Object}
 * @returns {JSX}
 */
var DocumentationCode = function DocumentationCode(_ref) {
    var children = _ref.children,
        language = _ref.language;
    return _react2.default.createElement(
        _reactSyntaxHighlighter2.default,
        {
            className: 'DocumentationCode',
            language: language,
            style: _hljs.tomorrowNight },
        children
    );
};

DocumentationCode.propTypes = {
    children: _propTypes2.default.node,
    language: _propTypes2.default.string
};

DocumentationCode.defaultProps = {
    language: 'javascript'
};

exports.default = DocumentationCode;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

__webpack_require__(133);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Renders DocumentationTable component
 * @param {Object}
 * @returns {JSX}
 */
var DocumentationTable = function DocumentationTable(_ref) {
    var children = _ref.children;
    return _react2.default.createElement(
        'div',
        { className: 'DocumentationTable' },
        _react2.default.createElement(
            'table',
            { className: 'DocumentationTable__table' },
            _react2.default.createElement(
                'tbody',
                null,
                children
            )
        )
    );
};

DocumentationTable.propTypes = {
    children: _propTypes2.default.node
};

exports.default = DocumentationTable;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createElement = exports.findExport = exports.resolveExport = exports.requireById = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};
var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod.default : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return _react2.default.createElement(
    'div',
    null,
    'Loading...'
  );
};
var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return _react2.default.createElement(
    'div',
    null,
    'Error: ',
    error && error.message
  );
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return requireById(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {
      console.warn('chunk not available for synchronous require yet: ' + id + ': ' + err.message, err.stack);
    }
  }

  return null;
};

var requireById = exports.requireById = function requireById(id) {
  if (!isWebpack() && typeof id === 'string') {
    return module.require(id);
  }

  return __webpack_require__(id);
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, context, modCache) {
  var isSync = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;

  var exp = findExport(mod, key);
  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';
    var info = { isServer: _isServer, isSync: isSync };
    onLoad(mod, info, props, context);
  }
  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

var createElement = exports.createElement = function createElement(Component, props) {
  return _react2.default.isValidElement(Component) ? _react2.default.cloneElement(Component, props) : _react2.default.createElement(Component, props);
};

var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)(module)))

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(3);

var _flow = __webpack_require__(9);

var _flow2 = _interopRequireDefault(_flow);

var _Layout = __webpack_require__(15);

var _Layout2 = _interopRequireDefault(_Layout);

var _Hero = __webpack_require__(63);

var _Hero2 = _interopRequireDefault(_Hero);

var _Features = __webpack_require__(75);

var _Features2 = _interopRequireDefault(_Features);

var _Technologies = __webpack_require__(85);

var _Technologies2 = _interopRequireDefault(_Technologies);

var _Steps = __webpack_require__(93);

var _Steps2 = _interopRequireDefault(_Steps);

var _Reviews = __webpack_require__(100);

var _Reviews2 = _interopRequireDefault(_Reviews);

var _RoadMap = __webpack_require__(111);

var _RoadMap2 = _interopRequireDefault(_RoadMap);

var _CtaBox = __webpack_require__(120);

var _CtaBox2 = _interopRequireDefault(_CtaBox);

var _TrackedComponent = __webpack_require__(19);

var _TrackedComponent2 = _interopRequireDefault(_TrackedComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Renders Home component
 * @returns {JSX}
 */
var Home = function Home() {
    return _react2.default.createElement(
        _Layout2.default,
        null,
        _react2.default.createElement(_Hero2.default, null),
        _react2.default.createElement(_Features2.default, null),
        _react2.default.createElement(_Technologies2.default, null),
        _react2.default.createElement(_Steps2.default, null),
        _react2.default.createElement(_Reviews2.default, null),
        _react2.default.createElement(_RoadMap2.default, null),
        _react2.default.createElement(_CtaBox2.default, null)
    );
};

exports.default = (0, _flow2.default)(_TrackedComponent2.default, _reactStatic.withSiteData)(Home);

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Head = __webpack_require__(44);

var _Head2 = _interopRequireDefault(_Head);

var _Header = __webpack_require__(50);

var _Header2 = _interopRequireDefault(_Header);

var _Main = __webpack_require__(59);

var _Main2 = _interopRequireDefault(_Main);

var _Footer = __webpack_require__(60);

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Renders Layout component
 * @param {Object}
 * @returns {JSX}
 */
var Layout = function Layout(_ref) {
    var title = _ref.title,
        metaDescription = _ref.metaDescription,
        metaKeywords = _ref.metaKeywords,
        children = _ref.children;
    return _react2.default.createElement(
        'div',
        { className: 'Layout' },
        _react2.default.createElement(_Head2.default, {
            title: title,
            metaDescription: metaDescription,
            metaKeywords: metaKeywords }),
        _react2.default.createElement(
            'div',
            { className: 'Layout__header' },
            _react2.default.createElement(_Header2.default, null)
        ),
        _react2.default.createElement(
            'div',
            { className: 'Layout__main' },
            _react2.default.createElement(
                _Main2.default,
                null,
                children
            )
        ),
        _react2.default.createElement(
            'div',
            { className: 'Layout__footer' },
            _react2.default.createElement(_Footer2.default, null)
        )
    );
};

Layout.propTypes = {
    title: _propTypes2.default.string,
    metaDescription: _propTypes2.default.string,
    metaKeywords: _propTypes2.default.string,
    children: _propTypes2.default.node
};

Layout.defaultProps = {
    title: 'File.Shark Media manager - Custom interface solution for file management in your content management system.',
    metaDescription: 'File.Shark Media manager - Custom interface solution for file management in your content management system.',
    metaKeywords: 'File.Shark, media manage, interface solution, upload files, create folders, make descriptions, filters, cms, content management system, javascript, buy'
};

exports.default = Layout;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = [{
    title: 'Documentation',
    url: '/documentation'
}];

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(4);

var _classnames2 = _interopRequireDefault(_classnames);

__webpack_require__(94);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Renders Pagination component
 * @param {Object}
 * @returns {JSX}
 */
var Pagination = function Pagination(_ref) {
    var current = _ref.current,
        total = _ref.total,
        onPrev = _ref.onPrev,
        onNext = _ref.onNext;

    var prevButtonClass = (0, _classnames2.default)({
        Pagination__prev: true,
        Pagination__button: true,
        Pagination__button_disabled: current === 1
    });
    var nextButtonClass = (0, _classnames2.default)({
        Pagination__next: true,
        Pagination__button: true,
        Pagination__button_disabled: current === total
    });

    return _react2.default.createElement(
        'div',
        { className: 'Pagination' },
        _react2.default.createElement(
            'button',
            { type: 'button', className: prevButtonClass, onClick: onPrev },
            _react2.default.createElement(
                'svg',
                { version: '1.1', width: '35px', height: '13px', viewBox: '0 0 35 13' },
                _react2.default.createElement('polygon', {
                    fill: '#333333',
                    points: '6.266,0.214 7.732,1.573 3.631,6 34.499,6 34.499,8 4.046,8 7.68,11.373 6.318,12.84 0,6.975' })
            )
        ),
        _react2.default.createElement(
            'div',
            { className: 'Pagination__pos' },
            _react2.default.createElement(
                'div',
                { className: 'Pagination__num' },
                current
            ),
            _react2.default.createElement(
                'span',
                null,
                '/'
            ),
            _react2.default.createElement(
                'div',
                { className: 'Pagination__num' },
                total
            )
        ),
        _react2.default.createElement(
            'button',
            { type: 'button', className: nextButtonClass, onClick: onNext },
            _react2.default.createElement(
                'svg',
                { version: '1.1', width: '35px', height: '13px', viewBox: '0 0 35 13' },
                _react2.default.createElement('polygon', {
                    fill: '#333333',
                    points: '28.233,0.214 26.767,1.573 30.868,6 0,6 0,8 30.453,8 26.819,11.373 28.181,12.84 34.499,6.975' })
            )
        )
    );
};

Pagination.propTypes = {
    current: _propTypes2.default.number,
    total: _propTypes2.default.number,
    onPrev: _propTypes2.default.func,
    onNext: _propTypes2.default.func
};

Pagination.defaultProps = {
    current: 0,
    total: 0,
    onPrev: function onPrev(f) {
        return f;
    },
    onNext: function onNext(f) {
        return f;
    }
};

exports.default = Pagination;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactGa = __webpack_require__(20);

var _reactGa2 = _interopRequireDefault(_reactGa);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Renders TrackedComponent HOC
 * @param {Function} ComposedComponent
 * @returns {Tracked} class
 */
var TrackedComponent = function TrackedComponent(ComposedComponent) {
    /**
     * Creates a new Tracked class
     */
    var Tracked = function (_Component) {
        _inherits(Tracked, _Component);

        function Tracked() {
            _classCallCheck(this, Tracked);

            return _possibleConstructorReturn(this, (Tracked.__proto__ || Object.getPrototypeOf(Tracked)).apply(this, arguments));
        }

        _createClass(Tracked, [{
            key: 'componentWillMount',

            /**
             * Handles componentDidMount event
             */
            value: function componentWillMount() {
                if (typeof window !== 'undefined') {
                    _reactGa2.default.pageview(window.location.pathname + window.location.search);
                }
            }

            /**
             * Renders component
             * @returns {JSX}
             */

        }, {
            key: 'render',
            value: function render() {
                return _react2.default.createElement(ComposedComponent, _extends({}, this.state, this.props));
            }
        }]);

        return Tracked;
    }(_react.Component);

    return Tracked;
};

TrackedComponent.propTypes = {
    component: _propTypes2.default.func
};

exports.default = TrackedComponent;

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("react-ga");

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(3);

var _flow = __webpack_require__(9);

var _flow2 = _interopRequireDefault(_flow);

var _Layout = __webpack_require__(15);

var _Layout2 = _interopRequireDefault(_Layout);

var _Documentation = __webpack_require__(124);

var _Documentation2 = _interopRequireDefault(_Documentation);

var _TrackedComponent = __webpack_require__(19);

var _TrackedComponent2 = _interopRequireDefault(_TrackedComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Renders Documentation component
 * @returns {JSX}
 */
var Documentation = function Documentation() {
    return _react2.default.createElement(
        _Layout2.default,
        { title: 'File.Shark Media manager - Documentation' },
        _react2.default.createElement(_Documentation2.default, null)
    );
};

exports.default = (0, _flow2.default)(_TrackedComponent2.default, _reactStatic.withSiteData)(Documentation);

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = "/fonts/montserrat/bold/bold.eot";

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = "/fonts/montserrat/italic/italic.eot";

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = "/fonts/montserrat/light/light.eot";

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = "/fonts/montserrat/medium/medium.eot";

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = "/fonts/montserrat/regular/regular.eot";

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = "/fonts/montserrat/semibold/semibold.eot";

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(29);

var _reactDom2 = _interopRequireDefault(_reactDom);

__webpack_require__(30);

__webpack_require__(31);

__webpack_require__(32);

var _Root = __webpack_require__(33);

var _Root2 = _interopRequireDefault(_Root);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Export your top level component as JSX (for static rendering)
exports.default = _Root2.default;

// Render your app

if (typeof document !== 'undefined') {
    var renderMethod =  false ? _reactDom2.default.render : _reactDom2.default.hydrate || _reactDom2.default.render;

    var render = function render(Comp) {
        renderMethod(_react2.default.createElement(Comp, null), document.getElementById('root'));
    };

    // Render!
    render(_Root2.default);
}

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("core-js/es6/object");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("core-js/es6/string");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("core-js/fn/promise");

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(3);

var _reactHotLoader = __webpack_require__(34);

var _reactStaticRoutes = __webpack_require__(35);

var _reactStaticRoutes2 = _interopRequireDefault(_reactStaticRoutes);

var _reactGa = __webpack_require__(20);

var _reactGa2 = _interopRequireDefault(_reactGa);

__webpack_require__(139);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
    _inherits(App, _Component);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    _createClass(App, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            if (typeof window !== 'undefined') {
                _reactGa2.default.initialize('UA-128053424-1');
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _reactStatic.Router,
                null,
                _react2.default.createElement(_reactStaticRoutes2.default, null)
            );
        }
    }]);

    return App;
}(_react.Component);

exports.default = (0, _reactHotLoader.hot)(module)(App);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)(module)))

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path2 = __webpack_require__(36);

var _path3 = _interopRequireDefault(_path2);

var _importCss2 = __webpack_require__(37);

var _importCss3 = _interopRequireDefault(_importCss2);

var _universalImport2 = __webpack_require__(38);

var _universalImport3 = _interopRequireDefault(_universalImport2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(39);

var _reactUniversalComponent = __webpack_require__(40);

var _reactUniversalComponent2 = _interopRequireDefault(_reactUniversalComponent);

var _reactStatic = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(0, _reactUniversalComponent.setHasBabelPlugin)();

var universalOptions = {
  loading: function loading() {
    return null;
  },
  error: function error(props) {
    console.error(props.error);
    return _react2.default.createElement(
      'div',
      null,
      'An error occurred loading this page\'s template. More information is available in the console.'
    );
  }
};

var t_0 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/pages/Home',
  file: '/Users/dmitrijmalofeev/Documents/Work/geekon/media-manager/landing/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 14)), (0, _importCss3.default)('src/pages/Home', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/pages/Home');
  },
  resolve: function resolve() {
    return /*require.resolve*/(14);
  },
  chunkName: function chunkName() {
    return 'src/pages/Home';
  }
}), universalOptions);
var t_1 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/pages/Documentation',
  file: '/Users/dmitrijmalofeev/Documents/Work/geekon/media-manager/landing/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 21)), (0, _importCss3.default)('src/pages/Documentation', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/pages/Documentation');
  },
  resolve: function resolve() {
    return /*require.resolve*/(21);
  },
  chunkName: function chunkName() {
    return 'src/pages/Documentation';
  }
}), universalOptions);

// Template Map
global.componentsByTemplateID = global.componentsByTemplateID || [t_0, t_1];

// Template Tree
global.templateIDsByPath = global.templateIDsByPath || {
  '404': undefined

  // Get template for given path
};var getComponentForPath = function getComponentForPath(path) {
  path = (0, _reactStatic.cleanPath)(path);
  return global.componentsByTemplateID[global.templateIDsByPath[path]];
};

global.reactStaticGetComponentForPath = getComponentForPath;
global.reactStaticRegisterTemplateIDForPath = function (path, id) {
  global.templateIDsByPath[path] = id;
};

var Routes = function (_Component) {
  _inherits(Routes, _Component);

  function Routes() {
    _classCallCheck(this, Routes);

    return _possibleConstructorReturn(this, (Routes.__proto__ || Object.getPrototypeOf(Routes)).apply(this, arguments));
  }

  _createClass(Routes, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          Comp = _props.component,
          render = _props.render,
          children = _props.children;


      var getFullComponentForPath = function getFullComponentForPath(path) {
        var Comp = getComponentForPath(path);
        var is404 = path === '404';
        if (!Comp) {
          is404 = true;
          Comp = getComponentForPath('404');
        }
        return function (newProps) {
          return Comp ? _react2.default.createElement(Comp, _extends({}, newProps, is404 ? { is404: true } : {})) : null;
        };
      };

      var renderProps = {
        componentsByTemplateID: global.componentsByTemplateID,
        templateIDsByPath: global.templateIDsByPath,
        getComponentForPath: getFullComponentForPath
      };

      if (Comp) {
        return _react2.default.createElement(Comp, renderProps);
      }

      if (render || children) {
        return (render || children)(renderProps);
      }

      // This is the default auto-routing renderer
      return _react2.default.createElement(_reactRouterDom.Route, { path: '*', render: function render(props) {
          var Comp = getFullComponentForPath(props.location.pathname);
          // If Comp is used as a component here, it triggers React to re-mount the entire
          // component tree underneath during reconciliation, losing all internal state.
          // By unwrapping it here we keep the real, static component exposed directly to React.
          return Comp && Comp(_extends({}, props, { key: props.location.pathname }));
        } });
    }
  }]);

  return Routes;
}(_react.Component);

exports.default = Routes;
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/importCss");

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _requireUniversalModule = __webpack_require__(41);

Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});

var _reportChunks = __webpack_require__(42);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks).default;
  }
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(43);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _utils = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (
    // $FlowIgnore
    module.hot && (module.hot.data || module.hot.status() === 'apply')
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(component) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var _opts$loading = opts.loading,
      Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
      _opts$error = opts.error,
      Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
      _opts$minDelay = opts.minDelay,
      minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
      _opts$alwaysDelay = opts.alwaysDelay,
      alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
      _opts$testBabelPlugin = opts.testBabelPlugin,
      testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
      _opts$loadingTransiti = opts.loadingTransition,
      loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
      options = _objectWithoutProperties(opts, ['loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.modCache = {};
  options.promCache = {};

  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, null, [{
      key: 'preload',

      /* eslint-enable react/sort-comp */

      /* eslint-disable react/sort-comp */
      value: function preload(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        props = props || {};

        var _req = (0, _requireUniversalModule2.default)(component, options, props),
            requireAsync = _req.requireAsync,
            requireSync = _req.requireSync;

        var Component = void 0;

        try {
          Component = requireSync(props, context);
        } catch (error) {
          return Promise.reject(error);
        }

        return Promise.resolve().then(function () {
          if (Component) return Component;
          return requireAsync(props, context);
        }).then(function (Component) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, Component, { preload: true });
          return Component;
        });
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

        if (!_this._mounted) return;
        if (!state.error) state.error = null;

        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = { error: null };
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this._mounted = true;

        var _req2 = (0, _requireUniversalModule2.default)(component, options, this.props),
            addModule = _req2.addModule,
            requireSync = _req2.requireSync,
            requireAsync = _req2.requireAsync,
            asyncOnly = _req2.asyncOnly;

        var Component = void 0;

        try {
          Component = requireSync(this.props, this.context);
        } catch (error) {
          return this.update({ error: error });
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(this.props); // record the module for SSR flushing :)

        if (this.context.report) {
          this.context.report(chunkName);
        }

        if (Component || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          this.update({ Component: Component }, true, true, _utils.isServer);
          return;
        }

        this.handleBefore(true, false);
        this.requireAsync(requireAsync, this.props, true);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._mounted = false;
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        var _this2 = this;

        if (isDynamic || this._asyncOnly) {
          var _req3 = (0, _requireUniversalModule2.default)(component, options, nextProps, this.props),
              requireSync = _req3.requireSync,
              requireAsync = _req3.requireAsync,
              shouldUpdate = _req3.shouldUpdate;

          if (shouldUpdate(nextProps, this.props)) {
            var Component = void 0;

            try {
              Component = requireSync(nextProps, this.context);
            } catch (error) {
              return this.update({ error: error });
            }

            this.handleBefore(false, !!Component);

            if (!Component) {
              return this.requireAsync(requireAsync, nextProps);
            }

            var state = { Component: Component };

            if (alwaysDelay) {
              if (loadingTransition) this.update({ Component: null }); // display `loading` during componentWillReceiveProps
              setTimeout(function () {
                return _this2.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          } else if (isHMR()) {
            var _Component = requireSync(nextProps, this.context);
            this.setState({ Component: function Component() {
                return null;
              } }); // HMR /w Redux and HOCs can be finicky, so we
            setTimeout(function () {
              return _this2.setState({ Component: _Component });
            }); // toggle components to insure updates occur
          }
        }
      }
    }, {
      key: 'requireAsync',
      value: function requireAsync(_requireAsync, props, isMount) {
        var _this3 = this;

        if (this.state.Component && loadingTransition) {
          this.update({ Component: null }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();

        _requireAsync(props, this.context).then(function (Component) {
          var state = { Component: Component };

          var timeLapsed = new Date() - time;
          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this3.update(state, isMount);
            }, extraDelay);
          }

          _this3.update(state, isMount);
        }).catch(function (error) {
          return _this3.update({ error: error });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;

          var info = { isMount: isMount, isSync: isSync, isServer: isServer };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var Component = state.Component,
            error = state.error;


        if (Component && !error) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, Component, { preload: true });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;

            var info = { isMount: isMount, isSync: isSync, isServer: isServer };
            onAfter(info, Component);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      }
    }, {
      key: 'render',
      value: function render() {
        var _state = this.state,
            error = _state.error,
            Component = _state.Component;

        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        // user-provided props (e.g. for data-fetching loading):


        if (isLoading) {
          return (0, _utils.createElement)(Loading, props);
        } else if (userError) {
          return (0, _utils.createElement)(Err, _extends({}, props, { error: userError }));
        } else if (error) {
          return (0, _utils.createElement)(Err, _extends({}, props, { error: error }));
        } else if (Component) {
          // primary usage (for async import loading + errors):
          return (0, _utils.createElement)(Component, props);
        }

        return (0, _utils.createElement)(Loading, props);
      }
    }]);

    return UniversalComponent;
  }(_react2.default.Component), _class.contextTypes = {
    store: _propTypes2.default.object,
    report: _propTypes2.default.func
  }, _temp;
}
exports.default = universal;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)(module)))

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;
exports.default = requireUniversalModule;

var _utils = __webpack_require__(13);

var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 15000 : _options$timeout,
      onLoad = options.onLoad,
      onError = options.onError,
      isDynamic = options.isDynamic,
      modCache = options.modCache,
      promCache = options.promCache;


  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;

  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      var mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);

    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;

    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);
        if (onError) {
          var _isServer = typeof window === 'undefined';
          var info = { isServer: _isServer };
          onError(error, info);
        }
        rej(error);
      };

      // const timer = timeout && setTimeout(reject, timeout)
      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);

        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache);
        if (exp) return res(exp);

        reject(new Error('export not found'));
      };

      var request = load(props, { resolve: resolve, reject: reject });

      // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.
      if (!request || typeof request.then !== 'function') return;
      request.then(resolve).catch(reject);
    });

    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);
        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);

    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);

    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}

var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    return typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;
  }

  var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
  function () {
    return universalConfig;
  };

  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load
  };
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks() {
    _classCallCheck(this, ReportChunks);

    return _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).apply(this, arguments));
  }

  _createClass(ReportChunks, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        report: this.props.report
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.Children.only(this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2.default.Component);

ReportChunks.propTypes = {
  report: _propTypes2.default.func.isRequired
};
ReportChunks.childContextTypes = {
  report: _propTypes2.default.func.isRequired
};
exports.default = ReportChunks;

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactStatic = __webpack_require__(3);

var _appleTouchIcon = __webpack_require__(45);

var _appleTouchIcon2 = _interopRequireDefault(_appleTouchIcon);

var _favicon32x = __webpack_require__(46);

var _favicon32x2 = _interopRequireDefault(_favicon32x);

var _favicon16x = __webpack_require__(47);

var _favicon16x2 = _interopRequireDefault(_favicon16x);

var _safariPinnedTab = __webpack_require__(48);

var _safariPinnedTab2 = _interopRequireDefault(_safariPinnedTab);

var _favicon = __webpack_require__(49);

var _favicon2 = _interopRequireDefault(_favicon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Renders HeadContainer component
 * @param {Object}
 * @returns {JSX}
 */
var HeadContainer = function HeadContainer(_ref) {
    var title = _ref.title,
        metaDescription = _ref.metaDescription,
        metaKeywords = _ref.metaKeywords;
    return _react2.default.createElement(
        _reactStatic.Head,
        null,
        _react2.default.createElement('meta', { name: 'Description', content: metaDescription }),
        _react2.default.createElement('meta', { name: 'Keywords', content: metaKeywords }),
        _react2.default.createElement('meta', { name: 'yandex-verification', content: 'f7b9309755c878c7' }),
        _react2.default.createElement(
            'title',
            null,
            title
        ),
        _react2.default.createElement('link', { rel: 'apple-touch-icon', sizes: '180x180', href: _appleTouchIcon2.default }),
        _react2.default.createElement('link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: _favicon32x2.default }),
        _react2.default.createElement('link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: _favicon16x2.default }),
        _react2.default.createElement('link', { rel: 'manifest', href: '/static/images/favicon/site.webmanifest' }),
        _react2.default.createElement('link', { rel: 'mask-icon', href: _safariPinnedTab2.default, color: '#5bbad5' }),
        _react2.default.createElement('link', { rel: 'shortcut icon', href: _favicon2.default }),
        _react2.default.createElement('meta', { name: 'msapplication-TileColor', content: '#da532c' }),
        _react2.default.createElement('meta', { name: 'msapplication-config', content: '/static/images/favicon/browserconfig.xml' }),
        _react2.default.createElement('meta', { name: 'theme-color', content: '#FFFFFF' })
    );
};

HeadContainer.propTypes = {
    title: _propTypes2.default.string,
    metaDescription: _propTypes2.default.string,
    metaKeywords: _propTypes2.default.string
};

exports.default = HeadContainer;

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABO1BMVEX/////Vlr9V1n+V1n+V1n/TU39WFn+V1n+Zmj/tbX/39//6en/trf+cnT+ZGX+nZ//x8j/3d3/7+//2dn/u7z+nZ7+f4H+Wlz+WFr/29v/////4eL/+/v/5OT+hoj+a23/z8/+enz/+fn/+vr+fn//ra7/8/P+aGr+XF7/6+v/t7f+o6X/8fH+YmP/9PT//v7+iYr+pab/4+P/9/f/s7P/wcL+bnD+iov/wMH/2Nn/0ND+mpv/29z/sLH+WVv/y8z/1NX+pqf+cHL+goP+Y2X+X2H/0NH+oKH+b3H/ysv/3t7/vr//xMT+lpf/1dX+amz/8vL//Pz/9vb/8vP+q6z+jI7+qar+l5j/6er+XmD+jpD+bG7+cXL+c3T+kZL/1NT/4+T+cXP/2dr/9PX+YGH/tbb/0tP+qKn+YWPiPJ8+AAAAB3RSTlMAR6TY/gqadBG0pgAAAAFiS0dEAIgFHUgAAAAJcEhZcwAAAN0AAADdAXBTogcAAAAHdElNRQfiCgwTNzuoUuMJAAABWElEQVQ4y4WTZ1/CMBDG0xYIiqC2KjUiqKAUFxYXLnBvcYLiwD2+/ycwXeHa0vZ5k+Sef++X5u4QQojjhRB2KSTwHNIUjmBPRcIU8PEpQfNjX3GI9wd4JGhLtKs71hPHid6+flEaGBxKMkBA2v3lYaJpJEVMjabZvyB9yYjEobG4SRgAHp9wEtmcDcCTToBM5SGgFFwAmYbAjNsnswCYm+8AFJNtYKGDTwogg8qiqdKitV0CwLIZk3IKlldW1bK0tr4hA2DT8Lcq7mIYQFX3t2XsBezowC72BPY0XwThfQdwUKTAIQCOjrXnBS95QoFTAJydKxe1SwBErwi5VtpA6eaW3NmqWacpGsy/p6eHpg3AZfr4j+Y+Tbsj9mRe0hqZipqlL1F/br60Xun3b3mr5QSW9/2DVeSz8cWaFrS93Pqu0bqLP79/LMa7BieTsB254NELHt6A8f8HZUNCj94Nx+UAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTgtMTAtMTJUMTk6NTU6NTkrMDI6MDBczqMNAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE4LTEwLTEyVDE5OjU1OjU5KzAyOjAwLZMbsQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAQdEVYdFRpdGxlAEFydGJvYXJkIDKDsWvqAAAAV3pUWHRSYXcgcHJvZmlsZSB0eXBlIGlwdGMAAHic4/IMCHFWKCjKT8vMSeVSAAMjCy5jCxMjE0uTFAMTIESANMNkAyOzVCDL2NTIxMzEHMQHy4BIoEouAOoXEXTyQjWVAAAAAElFTkSuQmCC"

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAq1BMVEX/VVX/Vln+V1n+V1n+WFr+e3z+k5T+XmD+YGL+hoj+nJ3+gIH+fX7/+/v/////+Pj//v7+qqv+m5z/z8//urv+jI7+Zmj//Pz+kJL+hIX/0tP+pab/vL3/2Nn/7Oz/2tv+bG7+kpT//f3+d3n+dHb/zs7+Wlz/8vL+o6X+Z2n+dXf+j5D/4eH/9fX/3+D/r7D/4uL/9vf+cHL+fH3/zs//8fH/wsL+b3D+X2EsWki+AAAAA3RSTlMDVr44CB7eAAAAAWJLR0QOb70wTwAAAAlwSFlzAAAAbwAAAG8B8aLcQwAAAAd0SU1FB+IKDBM3Ot9V058AAACXSURBVBjTXc9ZEoIwEATQhEGDoA0q4oKKO+K+6/1PZhggVdpfk1dJTVoIaZGJJYWQ9BMpLLJrdeU0XM/hO4Ko2YIfAPDbSosG6qBMt4SwAvQYor6BAcNQT8EoHk+myYxhDiyWZq+GFbDmeVOCnWLLEGe7Ysseh/wcHU+qADoHoZe5l+stf8LV7o8n0tebv16V+1Tl/ut/ARgfCurVVxvlAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE4LTEwLTEyVDE5OjU1OjU4KzAyOjAw+rmouQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOC0xMC0xMlQxOTo1NTo1OCswMjowMIvkEAUAAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAEHRFWHRUaXRsZQBBcnRib2FyZCAyg7Fr6gAAAFd6VFh0UmF3IHByb2ZpbGUgdHlwZSBpcHRjAAB4nOPyDAhxVigoyk/LzEnlUgADIwsuYwsTIxNLkxQDEyBEgDTDZAMjs1Qgy9jUyMTMxBzEB8uASKBKLgDqFxF08kI1lQAAAABJRU5ErkJggg=="

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDIwMDEwOTA0Ly9FTiIKICJodHRwOi8vd3d3LnczLm9yZy9UUi8yMDAxL1JFQy1TVkctMjAwMTA5MDQvRFREL3N2ZzEwLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4wIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiB3aWR0aD0iNzAwLjAwMDAwMHB0IiBoZWlnaHQ9IjcwMC4wMDAwMDBwdCIgdmlld0JveD0iMCAwIDcwMC4wMDAwMDAgNzAwLjAwMDAwMCIKIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIG1lZXQiPgo8bWV0YWRhdGE+CkNyZWF0ZWQgYnkgcG90cmFjZSAxLjExLCB3cml0dGVuIGJ5IFBldGVyIFNlbGluZ2VyIDIwMDEtMjAxMwo8L21ldGFkYXRhPgo8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCw3MDAuMDAwMDAwKSBzY2FsZSgwLjEwMDAwMCwtMC4xMDAwMDApIgpmaWxsPSIjMDAwMDAwIiBzdHJva2U9Im5vbmUiPgo8cGF0aCBkPSJNMTE4MCA2OTg1IGMtNDI5IC01OSAtODEyIC0zMjUgLTEwMTUgLTcwNyAtODQgLTE1OCAtMTI3IC0yOTIgLTE1MQotNDY4IC0yMCAtMTU2IC0yMCAtNDQ2NCAwIC00NjIwIDc1IC01NTQgNDYyIC05OTQgMTAxMCAtMTE0NSAxNjIgLTQ1IDE0NyAtNDUKMjQ3NiAtNDUgMjMyOSAwIDIzMTQgMCAyNDc2IDQ1IDM3NiAxMDQgNjgyIDM0NSA4NTkgNjc3IDg0IDE1OCAxMjcgMjkyIDE1MQo0NjggMjEgMTU3IDIwIDQ0NjMgLTEgNDYyMSAtMzkgMjk1IC0xNjUgNTU2IC0zNzIgNzcwIC0yMTkgMjI2IC00OTAgMzYzIC04MDMKNDA1IC0xNDkgMjAgLTQ0ODQgMTkgLTQ2MzAgLTF6IG04NzUgLTExMzAgYzEwOCAtMjggMjcxIC0xMDEgNDAxIC0xNzggbDgwCi00NyA4NSAzOSBjMTgxIDg1IDQ0MSAxNjEgNjc5IDE5OCAxNjEgMjUgNTQ3IDI1IDcxMCAwIDgwNCAtMTI1IDE1MDkgLTU1OQoxNzg3IC0xMTAwIDQ5IC05NSA5OCAtMjM3IDExMyAtMzI4IDEzIC04MiAxMyAtMjU2IDAgLTMzNyAtMjYgLTE1OSAtMTE0IC0zNTgKLTE4OCAtNDIyIC05MyAtODIgLTI3MSAtMTI5IC01MjQgLTEzNyAtMzI2IC0xMSAtNjk0IDM3IC0xMTM4IDE0NyAtMjU2IDY0Ci0zMDAgNzEgLTQzOSA3MSAtMzM3IDAgLTY0NyAtMTI4IC04OTUgLTM2OSAtMTkzIC0xODggLTMzMSAtNDUyIC0zNzcgLTcyMQotMTYgLTkwIC0xNSAtMzI5IDAgLTQyMSAyOCAtMTU3IDEwMCAtMzMzIDE4NyAtNDU2IDU0IC03NSAxOTAgLTIwNiAyNjcgLTI1NwozOTkgLTI2NCAxMDE1IC0yOTQgMTQ4MiAtNzMgMzQ4IDE2NCA1NzAgNDQ3IDYzNiA4MDYgMTUgODUgMTUgMzA4IDAgMzg5IC03CjM0IC0xMCA2NiAtNyA2OSAzIDMgMzUgLTI2IDcxIC02MyA1MiAtNTQgNzggLTkyIDEyMCAtMTc5IDUwIC0xMDMgMTA1IC0yNzIKMTA1IC0zMjMgMCAtMzcgMTYgLTM1IDkwIDEzIDg4IDU3IDIyNSAxMjIgMzUzIDE2OSAxMDIgMzYgMzM2IDk5IDM0NCA5MiAxNQotMTYgLTEzNiAtMzEzIC0yMzcgLTQ2NCAtMjU0IC0zODIgLTU4MyAtNjc0IC05ODIgLTg3MSAtMzY5IC0xODMgLTcxMyAtMjYzCi0xMTI3IC0yNjIgLTI2NSAwIC00OTAgMzIgLTcxNiAxMDEgLTQxMCAxMjUgLTc2MiAzMzUgLTEwNjEgNjM0IC0zOTYgMzk2Ci02NDcgOTA1IC03MjUgMTQ3NSAtMTcgMTIxIC0xNyA0ODUgMCA2MTAgMzggMjkyIDEyNyA1OTMgMjQ3IDgzMyA0OCA5NiAxNDUKMjU1IDIxMiAzNDUgMjkgNDAgNTUgNzkgNTggODcgNiAxNSAtMTAyIDE3NCAtMjE0IDMxNSAtNDIgNTIgLTE0MyAxNjIgLTIyNAoyNDMgLTgxIDgxIC0xNDggMTUwIC0xNDggMTUzIDAgMTEgMTQ5IDEwMCAyNDMgMTQ0IDE3OCA4NSAyOTggMTEwIDQ5NyAxMDUKMTA2IC0yIDE1NiAtOSAyMzUgLTMweiIvPgo8L2c+Cjwvc3ZnPgo="

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/favicon.2b8e146f.ico";

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(3);

var _Button = __webpack_require__(6);

var _Button2 = _interopRequireDefault(_Button);

var _Logo = __webpack_require__(52);

var _Logo2 = _interopRequireDefault(_Logo);

var _Burger = __webpack_require__(53);

var _Burger2 = _interopRequireDefault(_Burger);

var _headerNavigation = __webpack_require__(16);

var _headerNavigation2 = _interopRequireDefault(_headerNavigation);

var _config = __webpack_require__(5);

var _config2 = _interopRequireDefault(_config);

__webpack_require__(58);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _config$purchaseLink = _config2.default.purchaseLink,
    purchaseLink = _config$purchaseLink === undefined ? '' : _config$purchaseLink;

/**
 * Renders Header component
 * @returns {JSX}
 */

var Header = function Header() {
    return _react2.default.createElement(
        'header',
        { className: 'Header' },
        _react2.default.createElement(
            'div',
            { className: 'Header__container' },
            _react2.default.createElement(
                'div',
                { className: 'Header__wrapper' },
                _react2.default.createElement(
                    'div',
                    { className: 'Header__logo' },
                    _react2.default.createElement(
                        _reactStatic.Link,
                        { exact: true, to: '/' },
                        _react2.default.createElement(_Logo2.default, null)
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'Header__content' },
                    _react2.default.createElement(
                        'div',
                        { className: 'Header__nav' },
                        _react2.default.createElement(
                            'ul',
                            { className: 'Header__list' },
                            _headerNavigation2.default.map(function (link, idx) {
                                var _link$title = link.title,
                                    title = _link$title === undefined ? '' : _link$title,
                                    _link$url = link.url,
                                    url = _link$url === undefined ? '' : _link$url;


                                return _react2.default.createElement(
                                    'li',
                                    { key: idx, className: 'Header__item' },
                                    _react2.default.createElement(
                                        _reactStatic.Link,
                                        { to: url, className: 'Header__link' },
                                        title
                                    )
                                );
                            })
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'Header__cta' },
                        _react2.default.createElement(_Button2.default, {
                            href: purchaseLink,
                            text: 'Buy',
                            size: 'small' })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'Header__burger' },
                        _react2.default.createElement(_Burger2.default, null)
                    )
                )
            )
        )
    );
};

exports.default = Header;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".Button,a.Button{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:.85em 2.2em;font-family:montserratmedium,Helvetica,Arial,sans-serif;font-size:18px;line-height:1;color:#3f3a57;text-decoration:none;outline:none;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:1px solid #fff;border-radius:4px;background-color:#fff;-webkit-transition:color .2s ease,border-color .2s ease,background-color .2s ease;transition:color .2s ease,border-color .2s ease,background-color .2s ease}.Button:hover,a.Button:hover{color:#fff;background-color:transparent}.Button.Button_size_full,a.Button.Button_size_full{width:100%}.Button.Button_size_medium,a.Button.Button_size_medium{min-width:212px}.Button.Button_size_small,a.Button.Button_size_small{max-width:104px;padding-top:.65em;padding-bottom:.65em;font-size:15px}.Button.Button_theme_primary,a.Button.Button_theme_primary{border-color:#fff;background-color:#fff}.Button.Button_theme_primary:hover,a.Button.Button_theme_primary:hover{color:#fff;background-color:transparent}.Button.Button_theme_alert,a.Button.Button_theme_alert{color:#fff;border-color:#fe5759;background-color:#fe5759}.Button.Button_theme_alert:hover,a.Button.Button_theme_alert:hover{color:#fe5759;background:transparent}.Button.Button_theme_secondary,a.Button.Button_theme_secondary{color:#fff;border-color:#fff;background-color:transparent}.Button.Button_theme_secondary:hover,a.Button.Button_theme_secondary:hover{color:#fff;background-color:transparent}", ""]);

// exports


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Renders Logo component
 * @returns {JSX}
 */
var Logo = function Logo() {
  return _react2.default.createElement(
    "svg",
    { version: "1.1", width: "168px", height: "41px", viewBox: "-297.5 420.5 168 41" },
    _react2.default.createElement("path", {
      fill: "#FFFFFF",
      d: "M-244.09,437.24v3.33h5.832v2.34h-5.832v4.59h-2.916v-12.6h9.522v2.34H-244.09z M-234.64,434.9h2.916v12.6h-2.916V434.9z M-227.872,434.9h2.916v10.224h6.318v2.376h-9.234V434.9z M-206.38,445.16v2.34h-9.756 v-12.6h9.523v2.34h-6.625v2.736h5.849v2.268h-5.849v2.916H-206.38z M-203.393,447.141c-0.336-0.336-0.504-0.757-0.504-1.261 c0-0.516,0.168-0.933,0.504-1.251s0.75-0.477,1.242-0.477s0.906,0.158,1.242,0.477s0.504,0.735,0.504,1.251 c0,0.504-0.168,0.925-0.504,1.261s-0.75,0.504-1.242,0.504S-203.057,447.477-203.393,447.141z M-196.146,447.311 c-0.931-0.27-1.678-0.621-2.242-1.053l0.99-2.195c0.541,0.396,1.183,0.713,1.926,0.953c0.744,0.24,1.488,0.36,2.232,0.36 c0.828,0,1.44-0.123,1.836-0.369c0.396-0.246,0.594-0.573,0.594-0.981c0-0.299-0.117-0.549-0.351-0.746 c-0.233-0.198-0.534-0.357-0.899-0.478c-0.367-0.12-0.861-0.252-1.485-0.396c-0.96-0.229-1.746-0.456-2.358-0.684 c-0.611-0.229-1.137-0.595-1.574-1.099c-0.438-0.504-0.658-1.176-0.658-2.017c0-0.731,0.199-1.395,0.595-1.988 s0.993-1.064,1.791-1.413s1.772-0.522,2.925-0.522c0.805,0,1.59,0.097,2.358,0.289c0.768,0.191,1.44,0.467,2.016,0.827l-0.899,2.214 c-1.164-0.66-2.328-0.99-3.492-0.99c-0.816,0-1.42,0.133-1.809,0.396c-0.391,0.264-0.586,0.612-0.586,1.044 c0,0.433,0.225,0.753,0.676,0.963c0.449,0.21,1.137,0.417,2.061,0.621c0.96,0.228,1.746,0.456,2.357,0.685 c0.612,0.228,1.138,0.588,1.576,1.08c0.438,0.492,0.656,1.157,0.656,1.998c0,0.72-0.201,1.377-0.604,1.971 c-0.401,0.594-1.004,1.064-1.809,1.412c-0.804,0.349-1.781,0.522-2.934,0.522C-194.254,447.716-195.217,447.581-196.146,447.311z M-173.639,434.9v12.6h-2.916v-5.166h-5.723v5.166h-2.916v-12.6h2.916v4.968h5.723V434.9H-173.639z M-161.632,444.8h-5.851 l-1.115,2.7h-2.988l5.615-12.6h2.881l5.634,12.6h-3.06L-161.632,444.8z M-162.55,442.586l-1.998-4.824l-1.998,4.824H-162.55z M-147.395,447.5l-2.43-3.51h-2.682v3.51h-2.916v-12.6h5.454c1.116,0,2.085,0.186,2.907,0.558s1.455,0.899,1.898,1.584 c0.444,0.685,0.666,1.494,0.666,2.431c0,0.936-0.225,1.742-0.675,2.42s-1.089,1.197-1.917,1.558l2.826,4.05H-147.395z M-148.132,437.843c-0.456-0.378-1.122-0.567-1.998-0.567h-2.376v4.393h2.376c0.876,0,1.542-0.191,1.998-0.576 c0.456-0.384,0.685-0.924,0.685-1.619C-147.447,438.764-147.676,438.221-148.132,437.843z M-136.882,442.55l-1.692,1.765v3.186 h-2.898v-12.6h2.898v5.886l5.58-5.886h3.24l-5.221,5.615l5.527,6.984h-3.402L-136.882,442.55z" }),
    _react2.default.createElement("path", {
      fill: "#FFA2A1",
      d: "M-293.5,420.5h28.786l8.214,8v29c0,2.209-1.791,4-4,4h-33c-2.209,0-4-1.791-4-4v-33 C-297.5,422.291-295.709,420.5-293.5,420.5z" }),
    _react2.default.createElement("path", { fill: "#FFFFFF", d: "M-264.5,420.5l8,8h-6c-1.104,0-2-0.896-2-2V420.5z" }),
    _react2.default.createElement("path", {
      fill: "#FFFFFF",
      d: "M-281.242,431.766c-1.654-1.103-3.908-2.068-6.683-0.053 c1.083,0.932,2.008,2.016,2.776,3.251c-1.542,1.976-2.449,4.47-2.415,7.17c0.079,6.308,5.257,11.358,11.566,11.28 c4.794-0.061,8.855-3.07,10.498-7.277c-1.297,0.266-2.736,0.803-3.576,1.473c0,0-0.205-1.943-1.398-2.782 c0.08,0.376,0.127,0.766,0.132,1.165c0.04,3.256-2.565,5.928-5.82,5.967c-3.255,0.041-5.926-2.564-5.967-5.819 c-0.04-3.255,2.565-5.927,5.82-5.968c0.711-0.008,1.373,0.165,2.018,0.352c1.385,0.398,6.854,1.458,7.807-0.328 c2.671-5.006-3.978-9.701-9.799-9.629C-278.065,430.589-279.748,431.019-281.242,431.766z" })
  );
};

exports.default = Logo;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(4);

var _classnames2 = _interopRequireDefault(_classnames);

var _flow = __webpack_require__(9);

var _flow2 = _interopRequireDefault(_flow);

var _recompose = __webpack_require__(54);

var _BurgerContent = __webpack_require__(55);

var _BurgerContent2 = _interopRequireDefault(_BurgerContent);

__webpack_require__(57);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Renders Burger component
 * @param {Object}
 * @returns {JSX}
 */
var Burger = function Burger(_ref) {
    var isExpanded = _ref.isExpanded,
        onToggle = _ref.onToggle;

    var componentClass = (0, _classnames2.default)({
        Burger: true,
        Burger_isExpanded: isExpanded
    });

    return _react2.default.createElement(
        'div',
        { className: componentClass },
        _react2.default.createElement(
            'button',
            { type: 'button', className: 'Burger__wrapper', onClick: onToggle },
            _react2.default.createElement('div', { className: 'Burger__line' }),
            _react2.default.createElement('div', { className: 'Burger__line' }),
            _react2.default.createElement('div', { className: 'Burger__line' })
        ),
        isExpanded && _react2.default.createElement(_BurgerContent2.default, null)
    );
};

Burger.propTypes = {
    isExpanded: _propTypes2.default.bool,
    onToggle: _propTypes2.default.func
};

exports.default = (0, _flow2.default)((0, _recompose.withStateHandlers)(function () {
    return {
        isExpanded: false
    };
}, {
    onToggle: function onToggle(state) {
        return function () {
            return {
                isExpanded: !state.isExpanded
            };
        };
    }
}))(Burger);

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = require("recompose");

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(3);

var _Button = __webpack_require__(6);

var _Button2 = _interopRequireDefault(_Button);

var _headerNavigation = __webpack_require__(16);

var _headerNavigation2 = _interopRequireDefault(_headerNavigation);

__webpack_require__(56);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Renders BurgerContent component
 * @returns {JSX}
 */
var BurgerContent = function BurgerContent() {
    return _react2.default.createElement(
        'div',
        { className: 'BurgerContent' },
        _react2.default.createElement(
            'div',
            { className: 'BurgerContent__wrapper' },
            _react2.default.createElement(
                'div',
                { className: 'BurgerContent__content' },
                _react2.default.createElement(
                    'ul',
                    { className: 'BurgerContent__list' },
                    _headerNavigation2.default.map(function (link, idx) {
                        var _link$title = link.title,
                            title = _link$title === undefined ? '' : _link$title,
                            _link$url = link.url,
                            url = _link$url === undefined ? '' : _link$url;


                        return _react2.default.createElement(
                            'li',
                            { key: idx, className: 'BurgerContent__item' },
                            _react2.default.createElement(
                                _reactStatic.Link,
                                { to: url, className: 'BurgerContent__link' },
                                title
                            )
                        );
                    })
                )
            ),
            _react2.default.createElement(
                'div',
                { className: 'BurgerContent__footer' },
                _react2.default.createElement(_Button2.default, {
                    text: 'Buy',
                    size: 'full' })
            )
        )
    );
};

exports.default = BurgerContent;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".BurgerContent{padding:58px 40px 105px;position:fixed;display:block;width:100%;height:calc(100% - 60px);bottom:0;left:0;background-color:#fe5759}@media screen and (max-width:767px){.BurgerContent{padding-left:15px;padding-right:15px}}.BurgerContent__item,.BurgerContent__list{list-style:none;margin:0;padding:0}.BurgerContent__item{margin-bottom:36px;text-align:center}.BurgerContent__item:nth-last-child(-n+1){margin-bottom:0}.BurgerContent__link{font-family:montserratregular,Helvetica,Arial,sans-serif;font-size:25px;line-height:1;color:#fff;text-decoration:none}.BurgerContent__footer{padding-left:40px;padding-right:40px;position:absolute;display:block;width:100%;bottom:32px;left:0}@media screen and (max-width:767px){.BurgerContent__footer{padding-left:15px;padding-right:15px}}", ""]);

// exports


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".Burger__wrapper{position:relative;display:block;width:40px;height:40px}.Burger__line{position:absolute;width:22px;height:2px;top:50%;left:50%;margin-left:-11px;margin-top:-1px;background-color:#fff;-webkit-transition:-webkit-transform .2s ease;transition:-webkit-transform .2s ease;transition:transform .2s ease;transition:transform .2s ease,-webkit-transform .2s ease}.Burger__line:first-child{-webkit-transform:translateY(-7px);-ms-transform:translateY(-7px);transform:translateY(-7px)}.Burger__line:nth-last-child(-n+1){-webkit-transform:translateY(7px);-ms-transform:translateY(7px);transform:translateY(7px)}.Burger.Burger_isExpanded .Burger__line{-webkit-transform:scaleX(.1);-ms-transform:scaleX(.1);transform:scaleX(.1)}.Burger.Burger_isExpanded .Burger__line:first-child{-webkit-transform:translateY(0) rotate(45deg) scale(1);-ms-transform:translateY(0) rotate(45deg) scale(1);transform:translateY(0) rotate(45deg) scale(1)}.Burger.Burger_isExpanded .Burger__line:nth-last-child(-n+1){-webkit-transform:translateY(0) rotate(-45deg) scale(1);-ms-transform:translateY(0) rotate(-45deg) scale(1);transform:translateY(0) rotate(-45deg) scale(1)}", ""]);

// exports


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".Header{position:relative;z-index:100}.Header,.Header__container{height:60px;background-color:#fe5759}.Header__container{padding-left:40px;padding-right:40px;position:fixed;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;width:100%;min-width:320px}@media screen and (max-width:767px){.Header__container{padding-left:15px;padding-right:15px}}.Header__wrapper{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;width:100%;max-width:1220px;margin-left:auto;margin-right:auto}.Header__wrapper:after{content:\" \";display:block;clear:both}.Header__logo svg{display:block;width:168px;height:41px}@media screen and (max-width:767px){.Header__logo svg{width:151px;height:36px}}.Header__content{-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-left:auto}.Header__content,.Header__nav{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.Header__nav{-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin-right:30px}@media screen and (max-width:767px){.Header__nav{display:none}}.Header__item,.Header__list{list-style:none;margin:0;padding:0}.Header__list{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.Header__item{margin-right:50px}@media screen and (max-width:960px){.Header__item{margin-right:30px}}@media screen and (max-width:767px){.Header__item{margin-bottom:5px}}.Header__item:nth-last-child(-n+1){margin-right:0}.Header__link{font-family:montserratregular,Helvetica,Arial,sans-serif;font-size:14px;line-height:1;color:#fff;text-decoration:none;-webkit-transition:color .2s ease;transition:color .2s ease}.Header__link:hover{color:hsla(0,0%,100%,.8)}.Header__link.active{text-decoration:underline}@media screen and (max-width:767px){.Header__cta{display:none}}.Header__burger{display:none}@media screen and (max-width:767px){.Header__burger{display:block}}", ""]);

// exports


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Renders Main component
 * @param {Object}
 * @returns {JSX}
 */
var Main = function Main(_ref) {
    var children = _ref.children;
    return _react2.default.createElement(
        'main',
        { className: 'Main' },
        children
    );
};

Main.propTypes = {
    children: _propTypes2.default.node
};

exports.default = Main;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(3);

var _footerNavigation = __webpack_require__(61);

var _footerNavigation2 = _interopRequireDefault(_footerNavigation);

__webpack_require__(62);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Renders Footer component
 */
var Footer = function Footer() {
    return _react2.default.createElement(
        'footer',
        { className: 'Footer' },
        _react2.default.createElement(
            'div',
            { className: 'Footer__wrapper' },
            _react2.default.createElement(
                'div',
                { className: 'Footer__copy' },
                '\xA9 2018 \xABFile.Shark\xBB'
            ),
            _react2.default.createElement(
                'div',
                { className: 'Footer__nav' },
                _react2.default.createElement(
                    'ul',
                    { className: 'Footer__list' },
                    _footerNavigation2.default.map(function (link, idx) {
                        var _link$title = link.title,
                            title = _link$title === undefined ? '' : _link$title,
                            _link$url = link.url,
                            url = _link$url === undefined ? '' : _link$url;


                        return _react2.default.createElement(
                            'li',
                            { key: idx, className: 'Footer__item' },
                            _react2.default.createElement(
                                _reactStatic.Link,
                                { to: url, className: 'Footer__link' },
                                title
                            )
                        );
                    })
                )
            )
        )
    );
};

exports.default = Footer;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _config = __webpack_require__(5);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _config$contactLink = _config2.default.contactLink,
    contactLink = _config$contactLink === undefined ? '' : _config$contactLink;
exports.default = [{
    title: 'Contact us',
    url: contactLink
}, {
    title: 'Documentation',
    url: '/documentation'
}];

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".Footer{padding:33px 40px;border-top:1px solid hsla(0,0%,100%,.2);background-color:#fe5759}@media screen and (max-width:767px){.Footer{padding-left:15px;padding-right:15px;padding-top:28px;padding-bottom:28px}}.Footer__wrapper{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;max-width:1220px;margin-left:auto;margin-right:auto}.Footer__wrapper:after{content:\" \";display:block;clear:both}.Footer__copy{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;font-family:montserratregular,Helvetica,Arial,sans-serif;font-size:14px;line-height:1;color:hsla(0,0%,100%,.8)}.Footer__nav{margin-left:auto}@media screen and (max-width:767px){.Footer__nav{width:100%;margin-left:0;margin-bottom:21px;-webkit-box-ordinal-group:0;-webkit-order:-1;-ms-flex-order:-1;order:-1}}.Footer__item,.Footer__list{list-style:none;margin:0;padding:0}.Footer__list{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.Footer__item{margin-right:50px}@media screen and (max-width:960px){.Footer__item{margin-right:30px}}@media screen and (max-width:767px){.Footer__item{margin-bottom:5px}}.Footer__item:nth-last-child(-n+1){margin-right:0}.Footer__link{font-family:montserratregular,Helvetica,Arial,sans-serif;font-size:14px;line-height:1;color:#fff;text-decoration:none;-webkit-transition:color .2s ease;transition:color .2s ease}.Footer__link:hover{color:hsla(0,0%,100%,.8)}", ""]);

// exports


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Button = __webpack_require__(6);

var _Button2 = _interopRequireDefault(_Button);

var _Video = __webpack_require__(64);

var _Video2 = _interopRequireDefault(_Video);

var _visHero = __webpack_require__(65);

var _visHero2 = _interopRequireDefault(_visHero);

var _heroVideo = __webpack_require__(66);

var _heroVideo2 = _interopRequireDefault(_heroVideo);

var _config = __webpack_require__(5);

var _config2 = _interopRequireDefault(_config);

__webpack_require__(72);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _config$purchaseLink = _config2.default.purchaseLink,
    purchaseLink = _config$purchaseLink === undefined ? '' : _config$purchaseLink,
    _config$demoLink = _config2.default.demoLink,
    demoLink = _config$demoLink === undefined ? '' : _config$demoLink;

/**
 * Renders Hero component
 * @returns {JSX}
 */

var Hero = function Hero() {
    return _react2.default.createElement(
        'section',
        { className: 'Hero' },
        _react2.default.createElement(
            'div',
            { className: 'Hero__wrapper' },
            _react2.default.createElement(
                'div',
                { className: 'Hero__columns' },
                _react2.default.createElement(
                    'div',
                    { className: 'Hero__data' },
                    _react2.default.createElement(
                        'div',
                        { className: 'Hero__info' },
                        _react2.default.createElement(
                            'div',
                            { className: 'Hero__title' },
                            _react2.default.createElement(
                                'h1',
                                null,
                                'Media manager for\xA0your CMS'
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'Hero__subtitle' },
                            _react2.default.createElement(
                                'h5',
                                null,
                                'Custom interface solution for file management in your content management system.'
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'Hero__cta' },
                            _react2.default.createElement(_Button2.default, {
                                href: purchaseLink,
                                text: 'Buy',
                                size: 'medium' }),
                            _react2.default.createElement(_Button2.default, {
                                href: demoLink,
                                target: '_blank',
                                text: 'Live demo',
                                theme: 'secondary',
                                size: 'medium' })
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'Hero__graphics' },
                    _react2.default.createElement(
                        'div',
                        { className: 'Hero__image' },
                        _react2.default.createElement('img', { src: _visHero2.default, alt: 'Media manager' }),
                        _react2.default.createElement(
                            'div',
                            { className: 'Hero__video' },
                            _react2.default.createElement(_Video2.default, _heroVideo2.default)
                        )
                    )
                )
            )
        ),
        _react2.default.createElement(
            'div',
            { className: 'Hero__border' },
            _react2.default.createElement(
                'svg',
                { version: '1.1', viewBox: '0 0 1920 226' },
                _react2.default.createElement('path', {
                    fill: '#FFFFFF',
                    d: 'M0,89c281.237,67.967,606.978,101.949,977.218,101.949 c370.241,0,684.502-63.596,942.782-190.788V226H0V89z M0,89c281.237,67.967,606.978,101.949,977.218,101.949 c370.241,0,684.502-63.596,942.782-190.788V226H0V89z' })
            )
        )
    );
};

exports.default = Hero;

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Renders Video component
 * @param {Object}
 * @returns {JSX}
 */
var Video = function Video(_ref) {
    var source = _ref.source,
        poster = _ref.poster,
        fallback = _ref.fallback;
    return _react2.default.createElement(
        'div',
        { className: 'Video' },
        _react2.default.createElement(
            'video',
            { width: '100%', height: '100%', poster: poster, autoPlay: true, loop: true, muted: true },
            source.map(function (sourceItem, idx) {
                return _react2.default.createElement('source', { key: idx, src: sourceItem.src, type: sourceItem.type });
            }),
            _react2.default.createElement('img', { src: fallback, alt: 'media manager video' })
        )
    );
};

Video.propTypes = {
    source: _propTypes2.default.array,
    poster: _propTypes2.default.string,
    fallback: _propTypes2.default.string
};

Video.defaultProps = {
    source: []
};

exports.default = Video;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/vis-hero.d4dd0ae4.png";

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _visPoster = __webpack_require__(67);

var _visPoster2 = _interopRequireDefault(_visPoster);

var _visFallback = __webpack_require__(68);

var _visFallback2 = _interopRequireDefault(_visFallback);

var _hero = __webpack_require__(69);

var _hero2 = _interopRequireDefault(_hero);

var _hero3 = __webpack_require__(70);

var _hero4 = _interopRequireDefault(_hero3);

var _hero5 = __webpack_require__(71);

var _hero6 = _interopRequireDefault(_hero5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    poster: _visPoster2.default,
    fallback: _visFallback2.default,
    source: [{
        src: _hero2.default,
        type: 'video/mp4'
    }, {
        src: _hero4.default,
        type: 'video/ogg'
    }, {
        src: _hero6.default,
        type: 'video/webm'
    }]
};

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/vis-poster.a3d01c76.jpg";

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/vis-fallback.45a68008.jpg";

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/hero.2ec28dff.mp4";

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/hero.dbb5c9bb.ogv";

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/hero.d3b88441.webm";

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(10);
exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".Hero{padding:50px 40px 100px;position:relative;background-color:#fe5759;background-image:url(" + escape(__webpack_require__(73)) + "),url(" + escape(__webpack_require__(74)) + ");background-position:calc(50% - 78px) 0,calc(50% + 777px) 0;background-repeat:no-repeat,no-repeat;overflow:hidden}@media screen and (max-width:767px){.Hero{padding-left:15px;padding-right:15px}}@media screen and (max-width:1024px){.Hero{padding-bottom:50px}}@media screen and (max-width:767px){.Hero{padding-bottom:30px}}@media screen and (max-width:1024px){.Hero{background:#fe5759}}.Hero__wrapper{max-width:1220px;margin-left:auto;margin-right:auto;position:relative;z-index:1}.Hero__wrapper:after{content:\" \";display:block;clear:both}.Hero__columns{-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;width:100%}.Hero__columns,.Hero__data{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.Hero__data{-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;width:43.03797%}@media screen and (max-width:1024px){.Hero__data{width:100%}}@media screen and (max-width:767px){.Hero__data{padding-bottom:40px}}.Hero__info{display:block;width:100%}.Hero__graphics{position:relative;width:55.6962%;height:502px}@media screen and (max-width:1024px){.Hero__graphics{width:100%;height:auto}}@media screen and (max-width:767px){.Hero__graphics{width:auto;margin-left:-45px;margin-right:-45px}}.Hero__image{position:absolute;width:1016px;height:502px;left:-66px}@media screen and (max-width:1024px){.Hero__image{position:relative;width:100%;height:auto;top:auto;left:auto}}.Hero__image img{margin-bottom:0}.Hero__video{position:absolute;display:block;width:70%;top:52%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}@media screen and (max-width:1024px){.Hero__video{top:48%}}.Hero__title{margin-bottom:20px}@media screen and (max-width:1024px){.Hero__title{text-align:center}}@media screen and (max-width:767px){.Hero__title{margin-bottom:8px}}.Hero__title h1{color:#fff}.Hero__subtitle{margin-bottom:68px}@media screen and (max-width:1024px){.Hero__subtitle{margin-bottom:45px;text-align:center}}.Hero__subtitle h5{font-size:22px;color:hsla(0,0%,100%,.8)}.Hero__cta{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}@media screen and (max-width:1024px){.Hero__cta{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}}@media screen and (max-width:550px){.Hero__cta{-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}}.Hero__cta .Button{margin-right:20px}@media screen and (max-width:550px){.Hero__cta .Button{margin:0 10px 20px}}.Hero__cta .Button:nth-last-child(-n+1){margin-right:0}@media screen and (max-width:550px){.Hero__cta .Button:nth-last-child(-n+1){margin-right:10px;margin-bottom:0}}.Hero__border{position:absolute;bottom:0;left:0}.Hero__border,.Hero__border svg{display:block;width:100%}", ""]);

// exports


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/bg-hero-left.d7d435b3.svg";

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/bg-hero-right.51334e6c.svg";

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Feature = __webpack_require__(76);

var _Feature2 = _interopRequireDefault(_Feature);

var _features = __webpack_require__(78);

var _features2 = _interopRequireDefault(_features);

var _bgFeatures = __webpack_require__(83);

var _bgFeatures2 = _interopRequireDefault(_bgFeatures);

__webpack_require__(84);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Renders Features component
 * @returns {JSX}
 */
var Features = function Features() {
    return _react2.default.createElement(
        'section',
        { className: 'Features' },
        _react2.default.createElement(
            'div',
            { className: 'Features__wrapper' },
            _react2.default.createElement(
                'div',
                { className: 'Features__header' },
                _react2.default.createElement(
                    'h2',
                    null,
                    'All you need in one place'
                )
            ),
            _react2.default.createElement(
                'div',
                { className: 'Features__content' },
                _react2.default.createElement(
                    'div',
                    { className: 'Features__graphics' },
                    _react2.default.createElement(
                        'div',
                        { className: 'Features__image' },
                        _react2.default.createElement('img', { src: _bgFeatures2.default, alt: 'All you need in one place' })
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'Features__data' },
                    _react2.default.createElement(
                        'ul',
                        { className: 'Features__list' },
                        _features2.default.map(function (feature, idx) {
                            return _react2.default.createElement(
                                'li',
                                { key: idx, className: 'Features__item' },
                                _react2.default.createElement(_Feature2.default, feature)
                            );
                        })
                    )
                )
            )
        )
    );
};

exports.default = Features;

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

__webpack_require__(77);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Renders Feature component
 * @param {Object}
 * @returns {JSX}
 */
var Feature = function Feature(_ref) {
    var Icon = _ref.Icon,
        title = _ref.title,
        description = _ref.description;
    return _react2.default.createElement(
        'div',
        { className: 'Feature' },
        _react2.default.createElement(
            'div',
            { className: 'Feature__wrapper' },
            _react2.default.createElement(
                'div',
                { className: 'Feature__header' },
                _react2.default.createElement(
                    'div',
                    { className: 'Feature__icon' },
                    _react2.default.createElement(Icon, null)
                )
            ),
            _react2.default.createElement(
                'div',
                { className: 'Feature__content' },
                _react2.default.createElement(
                    'div',
                    { className: 'Feature__title' },
                    _react2.default.createElement(
                        'h4',
                        null,
                        title
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'Feature__description' },
                    description
                )
            )
        )
    );
};

Feature.propTypes = {
    Icon: _propTypes2.default.func,
    title: _propTypes2.default.string,
    description: _propTypes2.default.string
};

exports.default = Feature;

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".Feature__icon{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;width:40px;height:32px;margin-bottom:15px}.Feature__icon svg{display:block;max-width:100%;max-height:100%}.Feature__title{margin-bottom:11px}.Feature__description{opacity:.8}", ""]);

// exports


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _IconUpload = __webpack_require__(79);

var _IconUpload2 = _interopRequireDefault(_IconUpload);

var _IconFolder = __webpack_require__(80);

var _IconFolder2 = _interopRequireDefault(_IconFolder);

var _IconText = __webpack_require__(81);

var _IconText2 = _interopRequireDefault(_IconText);

var _IconFilter = __webpack_require__(82);

var _IconFilter2 = _interopRequireDefault(_IconFilter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [{
    Icon: _IconUpload2.default,
    title: 'Upload files',
    description: 'You can upload more than 70 file types'
}, {
    Icon: _IconFolder2.default,
    title: 'Create folders',
    description: 'Group your files and manage it in the easiest way'
}, {
    Icon: _IconText2.default,
    title: 'Make descriptions',
    description: 'Create unique descriptions for files and folders'
}, {
    Icon: _IconFilter2.default,
    title: 'Filters',
    description: 'Find your files quickly by date or file extension'
}];

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Renders IconUpload component
 * @returns {JSX}
 */
var IconUpload = function IconUpload() {
    return _react2.default.createElement(
        "svg",
        { version: "1.1", width: "40px", height: "32px", viewBox: "-297.5 420.5 40 32" },
        _react2.default.createElement("path", {
            fill: "#FE5759",
            d: "M-263.5,430.5c0-6.636-3.701-10-11-10c-3.857,0-7.474,2.411-9,6c-1.008-0.427-2.039-0.643-3.063-0.643 c-3.08,0-5.632,1.996-5.937,4.643c-2.991,1.315-5,4.129-5,7c0,4.559,3.439,7.998,8,8h11.997v5.989 c-0.003,0.29,0.128,0.579,0.503,0.579c0.375,0,0.503-0.279,0.5-0.568v-6h12c3.305,0,7-2.993,7-7 C-257.5,433.754-259.519,431.062-263.5,430.5z M-264.5,444.5h-12v-8.258l2.282,2.597c0.321,0.321,0.896,0.981,1.218,0.661 c0.32-0.32-0.185-0.818-0.506-1.139l-3.494-3.859l-3.675,3.859c-0.321,0.32-0.827,0.736-0.606,1.139 c0.221,0.402,0.822-0.081,1.143-0.402l2.636-2.855v8.258H-289.5c-3.991-0.002-7-3.011-7-7c0-2.442,1.811-4.944,4.402-6.084 l0.526-0.231l0.065-0.57c0.247-2.142,2.372-3.757,4.944-3.757c0.89,0,1.79,0.189,2.673,0.563l0.919,0.39l0.391-0.919 c1.372-3.226,4.619-5.392,8.08-5.392c6.822,0,10,2.859,10,9v0.868l0.859,0.122c3.507,0.496,5.141,2.723,5.141,7.01 C-258.5,441.934-261.668,444.5-264.5,444.5z" })
    );
};

exports.default = IconUpload;

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Renders IconFolder component
 * @returns {JSX}
 */
var IconFolder = function IconFolder() {
    return _react2.default.createElement(
        "svg",
        { version: "1.1", width: "35px", height: "31px", viewBox: "0 0 35 31" },
        _react2.default.createElement(
            "g",
            null,
            _react2.default.createElement("path", {
                fill: "#FE5759",
                d: "M31,18.502V5c0-1.402-0.598-2-2-2H12.009c-0.055-0.141-0.146-0.315-0.27-0.551 c-0.179-0.34-0.385-0.654-0.612-0.932C10.304,0.51,9.252,0,8,0H2C0.916,0,0,0.916,0,2v24c0,1.084,0.916,2,2,2h21.031 c1.157,1.801,3.174,3,5.469,3c3.584,0,6.5-2.916,6.5-6.5C35,21.802,33.347,19.483,31,18.502z M1,2c0-0.542,0.458-1,1-1h6 c0.951,0,1.72,0.376,2.352,1.149c0.188,0.23,0.352,0.48,0.502,0.766c0.069,0.132,0.216,0.45,0.245,0.515l-0.001,0L11.369,4H29 c0.851,0,1,0.149,1,1v2H1V2z M2,27c-0.542,0-1-0.458-1-1V8h29v10.182C29.518,18.067,29.017,18,28.5,18c-3.584,0-6.5,2.916-6.5,6.5 c0,0.886,0.18,1.729,0.502,2.5H2z M28.5,30c-3.032,0-5.5-2.468-5.5-5.5s2.468-5.5,5.5-5.5s5.5,2.468,5.5,5.5S31.532,30,28.5,30z" }),
            _react2.default.createElement("polygon", { fill: "#FE5759", points: "29,21 28,21 28,24 25,24 25,25 28,25 28,28 29,28 29,25 32,25 32,24 29,24" })
        )
    );
};

exports.default = IconFolder;

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Renders IconText component
 * @returns {JSX}
 */
var IconText = function IconText() {
    return _react2.default.createElement(
        "svg",
        { version: "1.1", width: "35px", height: "29px", viewBox: "0 0 35 29" },
        _react2.default.createElement(
            "g",
            null,
            _react2.default.createElement("polygon", { fill: "#FE5759", points: "31,28 4,28 4,17.375 3,17.375 3,29 32,29 32,17.062 31,17.062" }),
            _react2.default.createElement("polygon", { fill: "#FE5759", points: "3,0 3,12.938 4,12.938 4,1 31,1 31,12.625 32,12.625 32,0" })
        ),
        _react2.default.createElement(
            "g",
            null,
            _react2.default.createElement(
                "g",
                null,
                _react2.default.createElement("rect", { x: "0.5", y: "12.5", fill: "#FFFFFF", width: "5", height: "5" }),
                _react2.default.createElement("path", { fill: "#FE5759", d: "M6,18H0v-6h6V18z M1,17h4v-4H1V17z" })
            ),
            _react2.default.createElement(
                "g",
                null,
                _react2.default.createElement("rect", { x: "29.5", y: "12.5", fill: "#FFFFFF", width: "5", height: "5" }),
                _react2.default.createElement("path", { fill: "#FE5759", d: "M35,18h-6v-6h6V18z M30,17h4v-4h-4V17z" })
            ),
            _react2.default.createElement(
                "g",
                null,
                _react2.default.createElement("polygon", { fill: "#FFFFFF", points: "11.5,10.5 16.5,10.5 16.5,21.5 19.5,21.5 19.5,10.5 24.5,10.5 24.5,7.5 11.5,7.5" }),
                _react2.default.createElement("path", { fill: "#FE5759", d: "M20,22h-4V11h-5V7h14v4h-5V22z M17,21h2V10h5V8H12v2h5V21z" })
            )
        )
    );
};

exports.default = IconText;

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Renders IconFilter component
 * @returns {JSX}
 */
var IconFilter = function IconFilter() {
    return _react2.default.createElement(
        "svg",
        { version: "1.1", width: "28px", height: "28px", viewBox: "0 0 28 28" },
        _react2.default.createElement("path", { fill: "#FE5759", d: "M28,28H0V0h28V28z M1,27h26V1H1V27z" }),
        _react2.default.createElement("path", { fill: "#FE5759", d: "M9,8H7.5V5h-1v3H5v4h1.5v11h1V12H9V8z M8,11H6V9h2V11z" }),
        _react2.default.createElement("path", { fill: "#FE5759", d: "M16,18h-1.5V5h-1v13H12v4h1.5v1h1v-1H16V18z M15,21h-2v-2h2V21z" }),
        _react2.default.createElement("path", { fill: "#FE5759", d: "M23,11h-1.5V5h-1v6H19v4h1.5v8h1v-8H23V11z M22,14h-2v-2h2V14z" })
    );
};

exports.default = IconFilter;

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/bg-features.df9487ca.jpg";

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".Features{padding:100px 40px 60px;background-color:#fff;overflow:hidden}@media screen and (max-width:767px){.Features{padding-left:15px;padding-right:15px}}@media screen and (max-width:1024px){.Features{padding-top:50px}}@media screen and (max-width:767px){.Features{padding-top:30px;padding-bottom:30px}}.Features__wrapper{max-width:1220px;margin-left:auto;margin-right:auto}.Features__wrapper:after{content:\" \";display:block;clear:both}.Features__header{margin-bottom:40px;text-align:center}@media screen and (max-width:1024px){.Features__header{margin-bottom:20px}}.Features__content{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;width:100%;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}@media screen and (max-width:1024px){.Features__content{margin-top:-20px}}.Features__graphics{position:relative;width:49.36709%;height:624px}@media screen and (max-width:1024px){.Features__graphics{width:100%;height:auto}}.Features__image{position:absolute;display:block;width:818px;height:100%;top:-15px;right:-38px}@media screen and (max-width:1024px){.Features__image{position:relative;width:100%;height:auto;top:auto;right:auto}}.Features__data{width:43.67089%;padding-top:30px}@media screen and (max-width:1024px){.Features__data{width:100%;padding-top:0}}.Features__item,.Features__list{list-style:none;margin:0;padding:0}.Features__list{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.Features__item{width:43.03797%;margin-bottom:54px}@media screen and (max-width:1024px){.Features__item:nth-last-child(-n+2){margin-bottom:0}}@media screen and (max-width:640px){.Features__item{width:100%}.Features__item,.Features__item:nth-last-child(-n+2){margin-bottom:30px}.Features__item:nth-last-child(-n+1){margin-bottom:0}}", ""]);

// exports


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Technology = __webpack_require__(86);

var _Technology2 = _interopRequireDefault(_Technology);

var _technologies = __webpack_require__(88);

var _technologies2 = _interopRequireDefault(_technologies);

__webpack_require__(92);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Renders Technologies component
 * @returns {JSX}
 */
var Technologies = function Technologies() {
    return _react2.default.createElement(
        'section',
        { className: 'Technologies' },
        _react2.default.createElement(
            'div',
            { className: 'Technologies__wrapper' },
            _react2.default.createElement(
                'div',
                { className: 'Technologies__header' },
                _react2.default.createElement(
                    'h2',
                    null,
                    'Our technologies'
                )
            ),
            _react2.default.createElement(
                'div',
                { className: 'Technologies__content' },
                _react2.default.createElement(
                    'ul',
                    { className: 'Technologies__list' },
                    _technologies2.default.map(function (technology, idx) {
                        return _react2.default.createElement(
                            'li',
                            { key: idx, className: 'Technologies__item' },
                            _react2.default.createElement(_Technology2.default, technology)
                        );
                    })
                )
            )
        )
    );
};

exports.default = Technologies;

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(4);

var _classnames2 = _interopRequireDefault(_classnames);

__webpack_require__(87);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Renders Technology component
 * @param {Object}
 * @returns {JSX}
 */
var Technology = function Technology(_ref) {
    var Icon = _ref.Icon,
        title = _ref.title,
        description = _ref.description,
        theme = _ref.theme;

    var componentClass = (0, _classnames2.default)({
        Technology: true,
        Technology_theme_react: theme === 'react',
        Technology_theme_redux: theme === 'redux',
        Technology_theme_styled: theme === 'styled'
    });

    return _react2.default.createElement(
        'div',
        { className: componentClass },
        _react2.default.createElement(
            'div',
            { className: 'Technology__icon' },
            _react2.default.createElement(Icon, null)
        ),
        _react2.default.createElement(
            'div',
            { className: 'Technology__content' },
            _react2.default.createElement(
                'div',
                { className: 'Technology__title' },
                _react2.default.createElement(
                    'h4',
                    null,
                    title
                )
            ),
            _react2.default.createElement(
                'div',
                { className: 'Technology__description' },
                description
            )
        )
    );
};

Technology.propTypes = {
    Icon: _propTypes2.default.func,
    title: _propTypes2.default.string,
    description: _propTypes2.default.string,
    theme: _propTypes2.default.string
};

exports.default = Technology;

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".Technology{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;width:100%;padding:36px 10px;border:1px solid rgba(63,58,87,.1);background-color:#fff;border-radius:4px}@media screen and (max-width:960px){.Technology{padding-left:15px;padding-right:15px}}.Technology__icon{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;width:80px;padding-right:10px}@media screen and (max-width:960px){.Technology__icon{width:100%;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding-right:0}}.Technology__content{width:calc(100% - 80px);padding-top:6px}@media screen and (max-width:960px){.Technology__content{width:100%;text-align:center}}.Technology__title{margin-bottom:7px}.Technology__description{max-width:83%}@media screen and (max-width:1024px){.Technology__description{max-width:100%}}.Technology.Technology_theme_react .Technology__title h4{color:#00ccf1}.Technology.Technology_theme_redux .Technology__title h4{color:#764abc}.Technology.Technology_theme_styled .Technology__title h4{color:#ff6a8e}", ""]);

// exports


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _IconReact = __webpack_require__(89);

var _IconReact2 = _interopRequireDefault(_IconReact);

var _IconRedux = __webpack_require__(90);

var _IconRedux2 = _interopRequireDefault(_IconRedux);

var _IconStyled = __webpack_require__(91);

var _IconStyled2 = _interopRequireDefault(_IconStyled);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [{
    Icon: _IconReact2.default,
    title: 'React',
    description: 'React makes it painless to create interactive UIs',
    theme: 'react'
}, {
    Icon: _IconRedux2.default,
    title: 'Redux',
    description: 'Redux helps you write applications that behave consistently and are easy to test',
    theme: 'redux'
}, {
    Icon: _IconStyled2.default,
    title: 'Styled-components',
    description: 'Styled-components helps to use the best bits of ES6 and CSS to style apps without stress',
    theme: 'styled'
}];

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Renders IconReact component
 * @returns {JSX}
 */
var IconReact = function IconReact() {
  return _react2.default.createElement(
    "svg",
    { version: "1.1", width: "40px", height: "36px", viewBox: "-297.5 420.5 40 36" },
    _react2.default.createElement("path", {
      fill: "#00CCF1",
      d: "M-269.195,420.503c-0.678-0.022-1.387,0.093-2.098,0.319c-1.423,0.453-2.914,1.336-4.443,2.558 c-0.6,0.479-1.204,1.026-1.811,1.607c-0.594-0.566-1.186-1.099-1.772-1.567c-1.528-1.221-3.015-2.104-4.434-2.556 c-1.419-0.452-2.832-0.466-3.991,0.192c-1.16,0.657-1.854,1.864-2.165,3.297c-0.312,1.434-0.277,3.139,0.036,5.05 c0.108,0.663,0.263,1.359,0.439,2.068c-0.663,0.197-1.306,0.405-1.903,0.634c-1.801,0.69-3.292,1.518-4.376,2.5 c-1.085,0.984-1.786,2.178-1.786,3.488s0.701,2.502,1.786,3.485c1.085,0.983,2.575,1.812,4.376,2.503 c0.638,0.244,1.329,0.465,2.042,0.673c-0.256,0.941-0.464,1.854-0.606,2.721c-0.312,1.912-0.346,3.618-0.034,5.055 c0.312,1.437,1.005,2.649,2.171,3.311s2.584,0.645,4.007,0.192c1.422-0.453,2.911-1.334,4.441-2.557 c0.594-0.475,1.195-1.016,1.796-1.59c0.604,0.578,1.208,1.122,1.805,1.599c1.528,1.221,3.017,2.103,4.437,2.554 c1.419,0.452,2.831,0.466,3.99-0.191c1.16-0.658,1.852-1.865,2.163-3.297c0.312-1.434,0.276-3.139-0.036-5.049 c-0.142-0.868-0.35-1.784-0.607-2.729c0.737-0.213,1.449-0.439,2.107-0.691c1.801-0.691,3.291-1.52,4.376-2.503 s1.786-2.175,1.786-3.485s-0.701-2.504-1.786-3.488c-1.085-0.982-2.575-1.81-4.376-2.5c-0.605-0.232-1.26-0.442-1.932-0.643 c0.178-0.713,0.335-1.414,0.444-2.082c0.312-1.911,0.346-3.619,0.034-5.056c-0.312-1.437-1.008-2.648-2.174-3.31 C-267.871,420.686-268.518,420.525-269.195,420.503z M-269.275,422.24c0.426,0.011,0.789,0.11,1.1,0.286 c0.62,0.353,1.078,1.037,1.323,2.164s0.236,2.649-0.052,4.416c-0.1,0.604-0.243,1.245-0.406,1.901 c-1.778-0.42-3.727-0.731-5.803-0.914c-1.043-1.418-2.113-2.711-3.193-3.856c0.571-0.548,1.139-1.06,1.693-1.502 c1.412-1.129,2.75-1.896,3.867-2.252C-270.188,422.306-269.7,422.229-269.275,422.24z M-285.769,422.244 c0.428-0.012,0.917,0.066,1.477,0.244c1.12,0.356,2.46,1.124,3.874,2.254c0.543,0.434,1.098,0.936,1.657,1.471 c-1.088,1.154-2.168,2.458-3.217,3.889c-2.067,0.187-4.008,0.5-5.777,0.922c-0.162-0.652-0.306-1.291-0.404-1.893 c-0.289-1.768-0.296-3.29-0.051-4.42c0.246-1.131,0.708-1.82,1.334-2.176C-286.563,422.357-286.197,422.256-285.769,422.244z M-277.521,427.466c0.708,0.757,1.417,1.585,2.118,2.476c-0.689-0.028-1.389-0.045-2.098-0.045c-0.724,0-1.436,0.018-2.139,0.047 C-278.937,429.052-278.229,428.223-277.521,427.466z M-277.5,431.62c1.182,0,2.334,0.048,3.455,0.128 c0.771,1.088,1.524,2.242,2.242,3.463c0.631,1.073,1.201,2.145,1.722,3.203c-0.525,1.071-1.106,2.157-1.745,3.245 c-0.563,0.958-1.151,1.867-1.749,2.744c-1.266,0.104-2.577,0.161-3.925,0.161c-1.38,0-2.721-0.061-4.015-0.17 c-0.587-0.863-1.166-1.76-1.72-2.702c-0.638-1.085-1.216-2.169-1.74-3.239c0.526-1.076,1.106-2.166,1.749-3.257 c0.714-1.215,1.465-2.362,2.232-3.444C-279.861,431.67-278.696,431.62-277.5,431.62z M-271.808,431.962 c1.433,0.176,2.778,0.419,4.03,0.712c-0.371,1.195-0.829,2.445-1.384,3.734c-0.36-0.682-0.733-1.365-1.136-2.051 C-270.785,433.527-271.293,432.735-271.808,431.962z M-283.286,431.976c-0.503,0.759-0.999,1.535-1.477,2.349 c-0.408,0.693-0.789,1.387-1.152,2.077c-0.55-1.281-1.005-2.523-1.374-3.712C-286.046,432.396-284.708,432.152-283.286,431.976z M-266.058,433.127c0.616,0.184,1.211,0.375,1.757,0.584c1.66,0.637,2.974,1.391,3.824,2.162c0.852,0.771,1.221,1.507,1.221,2.221 c0,0.713-0.369,1.449-1.221,2.221c-0.851,0.771-2.164,1.525-3.824,2.162c-0.606,0.232-1.273,0.443-1.966,0.643 c-0.494-1.501-1.125-3.066-1.876-4.666C-267.279,436.618-266.582,434.828-266.058,433.127z M-288.971,433.136 c0.518,1.685,1.207,3.456,2.058,5.272c-0.755,1.608-1.39,3.184-1.886,4.693c-0.668-0.195-1.312-0.4-1.9-0.625 c-1.66-0.637-2.974-1.391-3.825-2.162s-1.221-1.508-1.221-2.221c0-0.714,0.37-1.449,1.221-2.221s2.165-1.525,3.825-2.162 C-290.162,433.505-289.577,433.316-288.971,433.136z M-277.5,434.172c-2.39,0-4.346,1.922-4.346,4.269s1.956,4.268,4.346,4.268 c2.391,0,4.346-1.921,4.346-4.268S-275.109,434.172-277.5,434.172z M-285.895,440.459c0.366,0.693,0.746,1.39,1.156,2.087 c0.321,0.546,0.648,1.077,0.981,1.599c-1.167-0.158-2.277-0.359-3.319-0.598C-286.745,442.55-286.349,441.516-285.895,440.459z M-269.139,440.459c0.455,1.059,0.852,2.095,1.185,3.094c-1.046,0.238-2.158,0.439-3.329,0.598c0.337-0.529,0.67-1.066,0.994-1.619 C-269.881,441.839-269.502,441.147-269.139,440.459z M-287.577,445.203c1.573,0.366,3.278,0.647,5.086,0.83 c1.207,1.715,2.464,3.255,3.73,4.602c-0.566,0.541-1.127,1.051-1.676,1.488c-1.413,1.129-2.752,1.896-3.869,2.251 c-1.117,0.355-1.95,0.309-2.57-0.044c-0.621-0.352-1.078-1.036-1.323-2.164c-0.245-1.127-0.238-2.647,0.051-4.414 C-288.017,446.951-287.821,446.094-287.577,445.203z M-267.451,445.21c0.245,0.896,0.441,1.757,0.573,2.562 c0.289,1.768,0.296,3.29,0.052,4.421c-0.246,1.131-0.705,1.822-1.332,2.178c-0.626,0.354-1.467,0.4-2.587,0.045 c-1.12-0.357-2.46-1.125-3.874-2.254c-0.553-0.441-1.117-0.955-1.688-1.501c1.273-1.352,2.54-2.899,3.756-4.624 C-270.738,445.855-269.029,445.576-267.451,445.21z M-280.223,446.209c0.893,0.047,1.797,0.08,2.723,0.08 c0.896,0,1.771-0.031,2.635-0.075c-0.883,1.17-1.783,2.233-2.681,3.192C-278.442,448.445-279.341,447.38-280.223,446.209z" })
  );
};

exports.default = IconReact;

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Renders IconRedux component
 * @returns {JSX}
 */
var IconRedux = function IconRedux() {
  return _react2.default.createElement(
    "svg",
    { version: "1.1", width: "40px", height: "38px", viewBox: "-297.5 420.5 40 38" },
    _react2.default.createElement("path", {
      fill: "#764ABC",
      d: "M-270.409,446.44c1.442-0.149,2.537-1.395,2.487-2.888c-0.049-1.494-1.293-2.689-2.786-2.689 h-0.1c-1.542,0.051-2.736,1.345-2.687,2.889c0.05,0.746,0.348,1.394,0.796,1.842c-1.691,3.336-4.278,5.775-8.159,7.816 c-2.637,1.395-5.374,1.893-8.11,1.544c-2.239-0.299-3.98-1.294-5.075-2.938c-1.592-2.439-1.741-5.079-0.398-7.718 c0.945-1.892,2.438-3.285,3.383-3.982c-0.199-0.647-0.498-1.743-0.647-2.539c-7.214,5.228-6.468,12.297-4.279,15.633 c1.642,2.49,4.976,4.033,8.657,4.033c0.995,0,1.99-0.1,2.985-0.348C-277.972,455.851-273.146,452.066-270.409,446.44z M-261.652,440.267c-3.781-4.432-9.354-6.871-15.723-6.871h-0.796c-0.448-0.896-1.393-1.493-2.438-1.493h-0.1 c-1.542,0.049-2.736,1.344-2.687,2.887c0.05,1.494,1.293,2.689,2.786,2.689h0.1c1.094-0.051,2.04-0.747,2.438-1.693h0.896 c3.781,0,7.363,1.096,10.598,3.236c2.487,1.643,4.279,3.784,5.273,6.373c0.846,2.092,0.797,4.133-0.1,5.875 c-1.393,2.639-3.73,4.083-6.816,4.083c-1.99,0-3.881-0.598-4.875-1.046c-0.548,0.498-1.543,1.295-2.239,1.793 c2.14,0.996,4.329,1.543,6.418,1.543c4.776,0,8.31-2.639,9.652-5.277C-257.822,449.478-257.922,444.498-261.652,440.267z M-286.928,447.287c0.05,1.493,1.294,2.688,2.786,2.688h0.1c1.542-0.049,2.736-1.344,2.687-2.887 c-0.049-1.494-1.293-2.689-2.786-2.689h-0.099c-0.1,0-0.249,0-0.348,0.05c-2.04-3.386-2.886-7.069-2.587-11.053 c0.199-2.987,1.194-5.577,2.936-7.718c1.443-1.842,4.229-2.738,6.12-2.788c5.273-0.1,7.513,6.473,7.662,9.111 c0.646,0.149,1.741,0.498,2.488,0.747c-0.598-8.065-5.573-12.248-10.35-12.248c-4.478,0-8.607,3.236-10.249,8.016 c-2.289,6.373-0.796,12.498,1.99,17.327C-286.828,446.191-286.978,446.738-286.928,447.287L-286.928,447.287z" })
  );
};

exports.default = IconRedux;

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Renders IconStyled component
 * @returns {JSX}
 */
var IconStyled = function IconStyled() {
    return _react2.default.createElement(
        "svg",
        { width: "70px", height: "39px", viewBox: "0 0 70 39", version: "1.1" },
        _react2.default.createElement(
            "g",
            { stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd" },
            _react2.default.createElement(
                "g",
                { id: "Main-2", transform: "translate(-1218.000000, -1822.000000)" },
                _react2.default.createElement(
                    "g",
                    { id: "Group-27", transform: "translate(1183.000000, 1788.000000)" },
                    _react2.default.createElement(
                        "g",
                        { id: "Group-3", transform: "translate(35.000000, 34.000000)" },
                        _react2.default.createElement("image", {
                            x: "17.8688028",
                            y: "0.480392157",
                            width: "37.0298103",
                            height: "37.9166667",
                            xlinkHref: "data:image/png;base64,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" }),
                        _react2.default.createElement("polyline", {
                            stroke: "#323748",
                            fillRule: "nonzero",
                            transform: "translate(8.921569, 26.078431) rotate(-315.000000) translate(-8.921569, -26.078431)",
                            points: "15.0980392 28.3727471 2.74509804 32.254902 6.62725292 19.9019608" }),
                        _react2.default.createElement("polyline", {
                            stroke: "#323748",
                            fillRule: "nonzero",
                            transform: "translate(61.078431, 26.078431) scale(-1, 1) rotate(-315.000000) translate(-61.078431, -26.078431)",
                            points: "67.254902 28.3727471 54.9019608 32.254902 58.7841157 19.9019608" })
                    )
                )
            )
        )
    );
};

exports.default = IconStyled;

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".Technologies{padding:100px 40px;background-color:#fcfcfe}@media screen and (max-width:1024px){.Technologies{padding-top:50px;padding-bottom:50px}}@media screen and (max-width:767px){.Technologies{padding-top:30px;padding-bottom:30px;padding-left:15px;padding-right:15px}}.Technologies__wrapper{max-width:1220px;margin-left:auto;margin-right:auto}.Technologies__wrapper:after{content:\" \";display:block;clear:both}.Technologies__header{margin-bottom:40px;text-align:center}@media screen and (max-width:1024px){.Technologies__header{margin-bottom:20px}}.Technologies__item,.Technologies__list{list-style:none;margin:0;padding:0}.Technologies__list{-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.Technologies__item,.Technologies__list{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.Technologies__item{width:31.8%}@media screen and (max-width:640px){.Technologies__item{width:100%;margin-bottom:15px}.Technologies__item:nth-last-child(-n+1){margin-bottom:0}}", ""]);

// exports


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactSlick = __webpack_require__(17);

var _reactSlick2 = _interopRequireDefault(_reactSlick);

var _classnames = __webpack_require__(4);

var _classnames2 = _interopRequireDefault(_classnames);

var _Button = __webpack_require__(6);

var _Button2 = _interopRequireDefault(_Button);

var _Pagination = __webpack_require__(18);

var _Pagination2 = _interopRequireDefault(_Pagination);

var _steps = __webpack_require__(95);

var _steps2 = _interopRequireDefault(_steps);

var _config = __webpack_require__(5);

var _config2 = _interopRequireDefault(_config);

__webpack_require__(99);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _config$purchaseLink = _config2.default.purchaseLink,
    purchaseLink = _config$purchaseLink === undefined ? '' : _config$purchaseLink;


var sliderSettings = {
    adaptiveHeight: true,
    fade: true,
    infinite: false,
    swipeToSlide: false,
    swipe: false
};

/**
 * Creates a new Steps class
 */

var Steps = function (_Component) {
    _inherits(Steps, _Component);

    /**
     * Constructor
     */
    function Steps(props) {
        _classCallCheck(this, Steps);

        var _this = _possibleConstructorReturn(this, (Steps.__proto__ || Object.getPrototypeOf(Steps)).call(this, props));

        _this.onNext = _this.onNext.bind(_this);
        _this.onPrev = _this.onPrev.bind(_this);
        _this.onChange = _this.onChange.bind(_this);
        _this.onAfterChange = _this.onAfterChange.bind(_this);

        _this.state = {
            currentSlide: 0,
            sliding: false
        };
        return _this;
    }

    /**
     * Navigates to next slide
     */


    _createClass(Steps, [{
        key: 'onNext',
        value: function onNext() {
            var _state = this.state,
                _state$currentSlide = _state.currentSlide,
                currentSlide = _state$currentSlide === undefined ? 0 : _state$currentSlide,
                _state$sliding = _state.sliding,
                sliding = _state$sliding === undefined ? false : _state$sliding;


            if (sliding) {
                return;
            }

            var newSlide = currentSlide + 1;

            this.slider.slickGoTo(newSlide);

            this.setState({ currentSlide: newSlide, sliding: true });
        }

        /**
         * Navigates to prev slide
         */

    }, {
        key: 'onPrev',
        value: function onPrev() {
            var _state2 = this.state,
                _state2$currentSlide = _state2.currentSlide,
                currentSlide = _state2$currentSlide === undefined ? 0 : _state2$currentSlide,
                _state2$sliding = _state2.sliding,
                sliding = _state2$sliding === undefined ? false : _state2$sliding;


            if (sliding) {
                return;
            }

            var newSlide = currentSlide - 1;

            this.slider.slickGoTo(newSlide);

            this.setState({ currentSlide: newSlide, sliding: true });
        }

        /**
         * Changes current slide
         * @param {Number} currentSlide
         */

    }, {
        key: 'onChange',
        value: function onChange() {
            var currentSlide = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            var _state$sliding2 = this.state.sliding,
                sliding = _state$sliding2 === undefined ? false : _state$sliding2;


            if (currentSlide === this.state.currentSlide) {
                return;
            }

            if (sliding) {
                return;
            }

            this.slider.slickGoTo(currentSlide);

            this.setState({ currentSlide: currentSlide, sliding: true });
        }

        /**
         * Handles afterChange event
         */

    }, {
        key: 'onAfterChange',
        value: function onAfterChange() {
            this.setState({ sliding: false });
        }

        /**
         * Renders component
         * @returns {JSX}
         */

    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _state$currentSlide2 = this.state.currentSlide,
                currentSlide = _state$currentSlide2 === undefined ? 0 : _state$currentSlide2;


            return _react2.default.createElement(
                'section',
                { className: 'Steps' },
                _react2.default.createElement(
                    'div',
                    { className: 'Steps__wrapper' },
                    _react2.default.createElement(
                        'div',
                        { className: 'Steps__header' },
                        _react2.default.createElement(
                            'div',
                            { className: 'Steps__title' },
                            _react2.default.createElement(
                                'h2',
                                null,
                                'Steps'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'Steps__content' },
                        _react2.default.createElement(
                            'div',
                            { className: 'Steps__graphics' },
                            _react2.default.createElement(
                                _reactSlick2.default,
                                _extends({}, sliderSettings, {
                                    afterChange: this.onAfterChange,
                                    ref: function ref(slider) {
                                        return _this2.slider = slider;
                                    } }),
                                _steps2.default.map(function (step, idx) {
                                    var _step$image = step.image,
                                        image = _step$image === undefined ? '' : _step$image,
                                        _step$title = step.title,
                                        title = _step$title === undefined ? '' : _step$title,
                                        _step$description = step.description,
                                        description = _step$description === undefined ? '' : _step$description;

                                    var itemClass = (0, _classnames2.default)({
                                        Steps__graphicsItem: true,
                                        Steps__graphicsItem_active: currentSlide === idx
                                    });

                                    return _react2.default.createElement(
                                        'div',
                                        { key: idx, className: itemClass },
                                        _react2.default.createElement('img', { src: image, alt: title, className: 'Steps__graphicsImage' }),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'Steps__navTitle' },
                                            _react2.default.createElement(
                                                'h3',
                                                null,
                                                idx + 1 + '. ' + title
                                            )
                                        ),
                                        _react2.default.createElement('div', { className: 'Steps__navDescription', dangerouslySetInnerHTML: { __html: description } })
                                    );
                                })
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'Steps__nav' },
                            _react2.default.createElement(
                                'ul',
                                { className: 'Steps__navList' },
                                _steps2.default.map(function (step, idx) {
                                    var _step$title2 = step.title,
                                        title = _step$title2 === undefined ? '' : _step$title2,
                                        _step$description2 = step.description,
                                        description = _step$description2 === undefined ? '' : _step$description2;

                                    var itemClass = (0, _classnames2.default)({
                                        Steps__navItem: true,
                                        Steps__navItem_active: currentSlide === idx
                                    });

                                    return _react2.default.createElement(
                                        'li',
                                        { key: idx, className: itemClass },
                                        _react2.default.createElement(
                                            'button',
                                            { type: 'button', className: 'Steps__navButton', onClick: function onClick() {
                                                    return _this2.onChange(idx);
                                                } },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'Steps__navTitle' },
                                                _react2.default.createElement(
                                                    'h3',
                                                    null,
                                                    title
                                                )
                                            ),
                                            _react2.default.createElement('div', { className: 'Steps__navDescription', dangerouslySetInnerHTML: { __html: description } })
                                        )
                                    );
                                })
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'Steps__cta' },
                                _react2.default.createElement(_Button2.default, {
                                    href: purchaseLink,
                                    theme: 'alert',
                                    size: 'medium',
                                    text: 'Buy' })
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'Steps__footer' },
                        _react2.default.createElement(_Pagination2.default, {
                            current: currentSlide + 1,
                            total: _steps2.default.length,
                            onPrev: this.onPrev,
                            onNext: this.onNext })
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'Steps__border' },
                    _react2.default.createElement(
                        'svg',
                        { version: '1.1', viewBox: '0 0 1920 226' },
                        _react2.default.createElement('path', {
                            fill: '#FFFFFF',
                            d: 'M0,89c281.237,67.967,606.978,101.949,977.218,101.949 c370.241,0,684.502-63.596,942.782-190.788V226H0V89z M0,89c281.237,67.967,606.978,101.949,977.218,101.949 c370.241,0,684.502-63.596,942.782-190.788V226H0V89z' })
                    )
                )
            );
        }
    }]);

    return Steps;
}(_react.Component);

exports.default = Steps;

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".Pagination{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-family:montserratmedium,Helvetica,Arial,sans-serif;font-size:15px;line-height:1;color:#333}.Pagination__button{cursor:pointer;-webkit-transition:opacity .2s ease;transition:opacity .2s ease}.Pagination__button polygon{-webkit-transition:fill .2s ease;transition:fill .2s ease}.Pagination__button:hover polygon{fill:#fe5759}.Pagination__button_disabled{pointer-events:none;opacity:.2}.Pagination__pos{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:0 36px}.Pagination__pos span{padding:0 5px}.Pagination__num{min-width:10px;text-align:center}", ""]);

// exports


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _visStep = __webpack_require__(96);

var _visStep2 = _interopRequireDefault(_visStep);

var _visStep3 = __webpack_require__(97);

var _visStep4 = _interopRequireDefault(_visStep3);

var _visStep5 = __webpack_require__(98);

var _visStep6 = _interopRequireDefault(_visStep5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [{
    title: 'Download archive with files ',
    description: 'In this archive you will find all the necessary HTML and JS files',
    image: _visStep2.default
}, {
    title: 'Include all required files',
    description: 'Include the <strong>main.js</strong> file into your page',
    image: _visStep4.default
}, {
    title: 'Initiate media manager',
    description: 'You can copy example code from our documentation and use it',
    image: _visStep6.default
}];

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/vis-step-1.f70277b4.jpg";

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/vis-step-2.00693845.jpg";

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/vis-step-3.4a968735.jpg";

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".Steps{padding-left:40px;padding-right:40px;padding-bottom:100px;position:relative;background-color:#fcfcfe;overflow:hidden}@media screen and (max-width:767px){.Steps{padding-left:15px;padding-right:15px}}@media screen and (max-width:1024px){.Steps{padding-bottom:50px}}@media screen and (max-width:767px){.Steps{padding-bottom:30px}}.Steps__wrapper{max-width:1220px;margin-left:auto;margin-right:auto;position:relative;z-index:1}.Steps__wrapper:after{content:\" \";display:block;clear:both}.Steps__header{text-align:center;margin-bottom:40px}@media screen and (max-width:1024px){.Steps__header{margin-bottom:20px}}.Steps__content{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}@media screen and (max-width:1024px){.Steps__content{margin-top:-20px}}.Steps__graphics{width:62.02532%}@media screen and (max-width:960px){.Steps__graphics{width:100%}}.Steps__graphicsItem{text-align:center}.Steps__graphicsItem .Steps__navTitle{display:none}@media screen and (max-width:960px){.Steps__graphicsItem .Steps__navTitle{display:block}}.Steps__graphicsItem .Steps__navDescription{display:none}@media screen and (max-width:960px){.Steps__graphicsItem .Steps__navDescription{display:block}}.Steps__graphicsItem_active .Steps__navTitle h3{color:#333}.Steps__graphicsImage{margin-bottom:0}.Steps__nav{width:36.70886%}@media screen and (max-width:960px){.Steps__nav{display:none}}.Steps__navItem,.Steps__navList{list-style:none;margin:0;padding:0}.Steps__navList{margin-bottom:66px;padding-top:56px;counter-reset:a}.Steps__navItem{position:relative;margin-bottom:68px;cursor:pointer;counter-increment:a;-webkit-tap-highlight-color:transparent}.Steps__navItem:nth-last-child(-n+1){margin-bottom:0}.Steps__navItem_active .Steps__navButton:after{color:#fe5759;border-color:#fe5759}.Steps__navItem_active .Steps__navTitle h3{color:#fe5759}.Steps__navButton{position:relative;padding-left:75px;font-size:15px;text-align:left;cursor:pointer;-webkit-tap-highlight-color:transparent}.Steps__navButton:after{content:counter(a);position:absolute;display:block;width:56px;height:84px;padding-left:15px;top:-16px;left:3px;font-family:montserratbold,Helvetica,Arial,sans-serif;font-size:64px;color:rgba(51,51,51,.1);text-align:center;border-left:2px solid transparent}.Steps__navTitle{margin-bottom:6px}.Steps__navTitle h3{color:rgba(51,51,51,.7)}.Steps__navDescription{font-family:montserratlight,Helvetica,Arial,sans-serif;line-height:1.4}.Steps__cta{padding-left:20px}.Steps__footer{display:none;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding-top:50px;padding-bottom:20px}@media screen and (max-width:960px){.Steps__footer{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}}.Steps__border{position:absolute;bottom:0;left:0}.Steps__border,.Steps__border svg{display:block;width:100%}", ""]);

// exports


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactSlick = __webpack_require__(17);

var _reactSlick2 = _interopRequireDefault(_reactSlick);

var _Review = __webpack_require__(101);

var _Review2 = _interopRequireDefault(_Review);

var _reviews = __webpack_require__(103);

var _reviews2 = _interopRequireDefault(_reviews);

var _Pagination = __webpack_require__(18);

var _Pagination2 = _interopRequireDefault(_Pagination);

__webpack_require__(110);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var sliderSettings = {
    adaptiveHeight: true,
    fade: true,
    infinite: false,
    swipeToSlide: false,
    swipe: false
};

/**
 * Creates a new Reviews class
 */

var Reviews = function (_Component) {
    _inherits(Reviews, _Component);

    /**
     * Constructor
     * @param {Object} props
     */
    function Reviews(props) {
        _classCallCheck(this, Reviews);

        var _this = _possibleConstructorReturn(this, (Reviews.__proto__ || Object.getPrototypeOf(Reviews)).call(this, props));

        _this.onNext = _this.onNext.bind(_this);
        _this.onPrev = _this.onPrev.bind(_this);
        _this.onChange = _this.onChange.bind(_this);

        _this.state = {
            currentSlide: 1
        };
        return _this;
    }

    /**
     * Navigates to next slide
     */


    _createClass(Reviews, [{
        key: 'onNext',
        value: function onNext() {
            this.slider.slickNext();
        }

        /**
         * Navigates to prev slide
         */

    }, {
        key: 'onPrev',
        value: function onPrev() {
            this.slider.slickPrev();
        }

        /**
         * Handles change event
         * @param {Number} current
         * @param {Number} next
         */

    }, {
        key: 'onChange',
        value: function onChange(current) {
            var next = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

            var currentSlide = next + 1;

            this.setState({ currentSlide: currentSlide });
        }

        /**
         * Renders component
         * @returns {JSX}
         */

    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _state$currentSlide = this.state.currentSlide,
                currentSlide = _state$currentSlide === undefined ? 0 : _state$currentSlide;


            return _react2.default.createElement(
                'section',
                { className: 'Reviews' },
                _react2.default.createElement(
                    'div',
                    { className: 'Reviews__wrapper' },
                    _react2.default.createElement(
                        'div',
                        { className: 'Reviews__content' },
                        _react2.default.createElement(
                            'div',
                            { className: 'Reviews__slider' },
                            _react2.default.createElement(
                                _reactSlick2.default,
                                _extends({}, sliderSettings, {
                                    beforeChange: this.onChange,
                                    ref: function ref(slider) {
                                        return _this2.slider = slider;
                                    } }),
                                _reviews2.default.map(function (review, idx) {
                                    return _react2.default.createElement(
                                        'div',
                                        { key: idx },
                                        _react2.default.createElement(_Review2.default, review)
                                    );
                                })
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'Reviews__nav' },
                            _react2.default.createElement(_Pagination2.default, {
                                current: currentSlide,
                                total: _reviews2.default.length,
                                onPrev: this.onPrev,
                                onNext: this.onNext })
                        )
                    )
                )
            );
        }
    }]);

    return Reviews;
}(_react.Component);

exports.default = Reviews;

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

__webpack_require__(102);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Renders Review component
 * @param {Object}
 * @returns {JSX}
 */
var Review = function Review(_ref) {
    var preview = _ref.preview,
        title = _ref.title,
        description = _ref.description,
        logo = _ref.logo,
        name = _ref.name;
    return _react2.default.createElement(
        'div',
        { className: 'Review' },
        _react2.default.createElement(
            'div',
            { className: 'Review__wrapper' },
            _react2.default.createElement(
                'div',
                { className: 'Review__data' },
                _react2.default.createElement(
                    'div',
                    { className: 'Review__title' },
                    _react2.default.createElement(
                        'h2',
                        null,
                        title
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'Review__description' },
                    '\xAB',
                    description,
                    '\xBB'
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'Review__logo' },
                    _react2.default.createElement('img', { src: logo, alt: name })
                )
            ),
            _react2.default.createElement(
                'div',
                { className: 'Review__graphics' },
                _react2.default.createElement('img', { src: preview, alt: name })
            )
        )
    );
};

Review.propTypes = {
    preview: _propTypes2.default.string,
    title: _propTypes2.default.string,
    description: _propTypes2.default.string,
    logo: _propTypes2.default.string,
    name: _propTypes2.default.string
};

exports.default = Review;

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".Review{width:100%;background-color:#fff}.Review__wrapper{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;width:100%}.Review__data{width:43.03797%;margin-left:11.39241%;padding-bottom:140px}@media screen and (max-width:1024px){.Review__data{margin-left:0;padding-top:0}}@media screen and (max-width:767px){.Review__data{width:100%;margin-bottom:30px;padding-bottom:0;text-align:center}}.Review__title{margin-bottom:40px}@media screen and (max-width:1024px){.Review__title{margin-bottom:20px}}.Review__description{margin-bottom:26px;font-family:montserratitalic,Helvetica,Arial,sans-serif;font-size:24px;line-height:1.5;color:rgba(51,51,51,.9)}@media screen and (max-width:1024px){.Review__description{font-size:20px}}@media screen and (max-width:767px){.Review__description{margin-bottom:15px;font-size:15px}}.Review__logo img{margin-left:0;margin-bottom:0}@media screen and (max-width:767px){.Review__logo img{margin-left:auto}}.Review__graphics{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;width:43.03797%}@media screen and (max-width:1024px){.Review__graphics{width:55.6962%}}@media screen and (max-width:767px){.Review__graphics{width:100%}.Review__graphics img{max-width:80%}}@media screen and (max-width:767px) and (max-width:550px){.Review__graphics img{max-width:100%}}.Review__graphics img{margin-bottom:0}", ""]);

// exports


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _visSlide = __webpack_require__(104);

var _visSlide2 = _interopRequireDefault(_visSlide);

var _visSlide3 = __webpack_require__(105);

var _visSlide4 = _interopRequireDefault(_visSlide3);

var _visSlide5 = __webpack_require__(106);

var _visSlide6 = _interopRequireDefault(_visSlide5);

var _logo = __webpack_require__(107);

var _logo2 = _interopRequireDefault(_logo);

var _logo3 = __webpack_require__(108);

var _logo4 = _interopRequireDefault(_logo3);

var _logo5 = __webpack_require__(109);

var _logo6 = _interopRequireDefault(_logo5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [{
    preview: _visSlide2.default,
    title: 'Comments',
    description: 'I have custom CMS solution with default media manager with very poor functionality. That\'s why I decided to use File.Shark. It saved my life!',
    logo: _logo2.default,
    name: 'Naturalsleep'
}, {
    preview: _visSlide4.default,
    title: 'Comments',
    description: 'My team develops our own content management system and we needed a media manager. The functionality of File.Shark is more than enough for us.',
    logo: _logo4.default,
    name: 'Fanbook'
}, {
    preview: _visSlide6.default,
    title: 'Comments',
    description: 'The convenient and fast interface of this media manager allowed me to do my work faster and more comfortable.',
    logo: _logo6.default,
    name: 'ShopTechnology'
}];

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/vis-slide-1.14cee321.jpg";

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/vis-slide-2.83928884.jpg";

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/vis-slide-3.b52f56bd.jpg";

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/logo-1.900ae715.svg";

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/logo-2.3f0e6f30.svg";

/***/ }),
/* 109 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTc5cHgiIGhlaWdodD0iMzZweCIgdmlld0JveD0iMCAwIDE3OSAzNiIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTEuMyAoNTc1NDQpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPHRpdGxlPmxvZ28tMjwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIG9wYWNpdHk9IjAuNSI+CiAgICAgICAgPGcgaWQ9ImxvZ28tMyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsIDguMDAwMDAwKSIgZmlsbD0iIzMzMzMzMyIgZmlsbC1ydWxlPSJub256ZXJvIj4KICAgICAgICAgICAgPGcgaWQ9ImFjY291bnQiPgogICAgICAgICAgICAgICAgPGcgaWQ9Ik1NLUxlbmRpbmctbWFpbiI+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTE3Ij4KICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTM3Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0zMS45MDQsNC4yNzQgTDMyLjA0OCw0LjI3NCBDMzMuODMsNC4yNzQgMzUuNjEyLDUuMTM4IDM2LjkwOCw2LjM2MiBMMzUuMjg4LDcuODU2IEMzNC4zNTIsNy4xIDMyLjk2Niw2LjYxNCAzMi4wNDgsNi42MTQgTDMxLjkwNCw2LjYxNCBDMzEuMDc2LDYuNjE0IDI5LjcyNiw2LjkyIDI5LjcyNiw4LjAxOCBDMjkuNzI2LDguODY0IDMwLjY5OCw5LjExNiAzMS44MzIsOS4yNiBMMzIuODQsOS4zNjggQzM1LjM5Niw5LjY3NCAzNy4zMDQsMTAuNjI4IDM3LjMwNCwxMy4yMzggQzM3LjMwNCwxNS42MzIgMzUuMTk4LDE3LjEwOCAzMi40MDgsMTcuMTI2IEwzMi4zLDE3LjEyNiBDMjkuNzgsMTcuMTI2IDI3Ljk0NCwxNS45MzggMjYuOTU0LDE0LjU4OCBMMjguNTc0LDEzLjA5NCBDMjkuMTMyLDEzLjg4NiAzMC40MjgsMTQuNzg2IDMyLjMsMTQuNzg2IEwzMi40MDgsMTQuNzg2IEMzMy44NjYsMTQuNzY4IDM0LjgyLDE0LjE5MiAzNC44MiwxMy4yMzggQzM0LjgyLDEyLjE0IDMzLjc5NCwxMS44MzQgMzIuNDk4LDExLjY3MiBMMzEuNTA4LDExLjU2NCBDMjkuMDk2LDExLjI3NiAyNy4yNDIsMTAuMzIyIDI3LjI0Miw4LjEwOCBDMjcuMjQyLDUuNzUgMjkuMjk0LDQuMzEgMzEuOTA0LDQuMjc0IFogTTQ0LjY0OCw3Ljg3NCBDNDcuMjQsNy44NzQgNDguNTcyLDkuNjM4IDQ4LjU3MiwxMi4yNDggTDQ4LjU3MiwxNyBMNDYuMjg2LDE3IEw0Ni4yODYsMTIuMzkyIEM0Ni4yODYsMTAuNzE4IDQ1LjQ5NCwxMC4wODggNDQuMjg4LDEwLjA4OCBDNDIuOTc0LDEwLjA4OCA0Mi4xNDYsMTAuODYyIDQyLjE0NiwxMi41OSBMNDIuMTQ2LDE3IEwzOS44NiwxNyBMMzkuODYsNC40IEw0Mi4xNDYsNC40IEw0Mi4xNDYsOC45MzYgQzQyLjcyMiw4LjE5OCA0My42NzYsNy44NzQgNDQuNjQ4LDcuODc0IFogTTU1LjYyOCw3Ljg3NCBDNTguMTg0LDcuODc0IDYwLjI1NCw5Ljk0NCA2MC4yNTQsMTIuNSBDNjAuMjU0LDE1LjA1NiA1OC4xODQsMTcuMTA4IDU1LjYyOCwxNy4xMDggQzUzLjA3MiwxNy4xMDggNTEuMDIsMTUuMDU2IDUxLjAyLDEyLjUgQzUxLjAyLDkuOTQ0IDUzLjA3Miw3Ljg3NCA1NS42MjgsNy44NzQgWiBNNTUuNjI4LDEwLjA4OCBDNTQuNDIyLDEwLjA4OCA1My4zMDYsMTEuMDI0IDUzLjMwNiwxMi41IEM1My4zMDYsMTMuOTc2IDU0LjQyMiwxNC44OTQgNTUuNjI4LDE0Ljg5NCBDNTYuODE2LDE0Ljg5NCA1Ny45NSwxMy45NzYgNTcuOTUsMTIuNSBDNTcuOTUsMTEuMDI0IDU2LjgxNiwxMC4wODggNTUuNjI4LDEwLjA4OCBaIE02Ny4zMSw3Ljg5MiBDNjkuODY2LDcuODkyIDcxLjY4NCw5Ljk0NCA3MS42ODQsMTIuNSBDNzEuNjg0LDE1LjA1NiA2OS44NjYsMTcuMTI2IDY3LjMxLDE3LjEyNiBDNjYuMzM4LDE3LjEyNiA2NS40NzQsMTYuNzEyIDY0LjkzNCwxNi4xMTggTDY0LjkzNCwyMC4zMTIgTDYyLjY0OCwyMC4zMTIgTDYyLjY0OCw4IEw2NC4xNzgsOCBMNjQuMzA0LDkuMjc4IEM2NC45ODgsOC40MzIgNjYuMDUsNy44OTIgNjcuMzEsNy44OTIgWiBNNjcuMDk0LDEwLjEwNiBDNjUuOTA2LDEwLjEwNiA2NC43NzIsMTEuMDI0IDY0Ljc3MiwxMi41IEM2NC43NzIsMTMuOTc2IDY1LjkwNiwxNC45MTIgNjcuMDk0LDE0LjkxMiBDNjguMywxNC45MTIgNjkuNDE2LDEzLjk3NiA2OS40MTYsMTIuNSBDNjkuNDE2LDExLjAyNCA2OC4zLDEwLjEwNiA2Ny4wOTQsMTAuMTA2IFogTTc5LjQwNiw2Ljc0IEw3OS40MDYsMTcgTDc2LjkyMiwxNyBMNzYuOTIyLDYuNzQgTDczLjQ2Niw2Ljc0IEw3My40NjYsNC40IEw4Mi44NjIsNC40IEw4Mi44NjIsNi43NCBMNzkuNDA2LDYuNzQgWiBNODkuMTYyLDcuODc0IEM5MS4wODgsNy44NzQgOTIuNDM4LDguNzkyIDkzLjEyMiwxMC4zMDQgQzkzLjUsMTEuMTMyIDkzLjUxOCwxMi4zNTYgOTMuMjY2LDEzLjEzIEw4Ni45ODQsMTMuMTMgQzg2Ljk4NCwxNC4zNTQgODcuOTkyLDE1LjAyIDg5LjIxNiwxNS4wMiBDOTAuMTUyLDE1LjAyIDkxLjEyNCwxNC44MDQgOTEuOTM0LDE0LjM5IEw5My4xNCwxNS43MDQgQzkyLjE2OCwxNi40MjQgOTAuODE4LDE3LjEwOCA4OS4yMTYsMTcuMTA4IEM4Ni40OCwxNy4xMDggODQuNjI2LDE1LjEyOCA4NC42MjYsMTIuNSBDODQuNjI2LDkuOTQ0IDg2LjM1NCw3Ljg3NCA4OS4xNjIsNy44NzQgWiBNODkuMTYyLDkuOTYyIEM4Ny45MzgsOS45NjIgODcuMTEsMTAuODI2IDg3LjA3NCwxMS42OSBMOTEuMTk2LDExLjY5IEM5MS4xOTYsMTEuNDc0IDkxLjEyNCwxMS4xODYgOTAuOTgsMTAuOTcgQzkwLjY3NCwxMC4zOTQgOTAuMDI2LDkuOTYyIDg5LjE2Miw5Ljk2MiBaIE05OS45NDQsNy44OTIgQzEwMS4zNjYsNy44OTIgMTAyLjY0NCw4LjU0IDEwMy40OSw5LjU0OCBMMTAyLjEyMiwxMS4wMjQgQzEwMS4zODQsMTAuMzQgMTAwLjczNiwxMC4xMDYgOTkuOTQ0LDEwLjEwNiBDOTguNzM4LDEwLjEwNiA5Ny42MjIsMTEuMDI0IDk3LjYyMiwxMi41IEM5Ny42MjIsMTMuOTc2IDk4LjczOCwxNC44OTQgOTkuOTQ0LDE0Ljg5NCBDMTAwLjczNiwxNC44OTQgMTAxLjM4NCwxNC42NiAxMDIuMTIyLDEzLjk3NiBMMTAzLjQ5LDE1LjQ1MiBDMTAyLjY0NCwxNi40NiAxMDEuMzY2LDE3LjEwOCA5OS45NDQsMTcuMTA4IEM5Ny4zODgsMTcuMTA4IDk1LjMzNiwxNS4wNTYgOTUuMzM2LDEyLjUgQzk1LjMzNiw5Ljk0NCA5Ny4zODgsNy44OTIgOTkuOTQ0LDcuODkyIFogTTExMC44MTYsNy44NzQgQzExMy40MDgsNy44NzQgMTE0Ljc0LDkuNjM4IDExNC43NCwxMi4yNDggTDExNC43NCwxNyBMMTEyLjQ1NCwxNyBMMTEyLjQ1NCwxMi4zOTIgQzExMi40NTQsMTAuNzE4IDExMS42NjIsMTAuMDg4IDExMC40NTYsMTAuMDg4IEMxMDkuMTQyLDEwLjA4OCAxMDguMzE0LDEwLjg2MiAxMDguMzE0LDEyLjU5IEwxMDguMzE0LDE3IEwxMDYuMDI4LDE3IEwxMDYuMDI4LDQuNCBMMTA4LjMxNCw0LjQgTDEwOC4zMTQsOC45MzYgQzEwOC44OSw4LjE5OCAxMDkuODQ0LDcuODc0IDExMC44MTYsNy44NzQgWiBNMTIyLjUxNiw3Ljg3NCBDMTI1LjEwOCw3Ljg3NCAxMjYuNDQsOS42MzggMTI2LjQ0LDEyLjI0OCBMMTI2LjQ0LDE3IEwxMjQuMTU0LDE3IEwxMjQuMTU0LDEyLjM5MiBDMTI0LjE1NCwxMC43MTggMTIzLjM2MiwxMC4wODggMTIyLjE1NiwxMC4wODggQzEyMC44NDIsMTAuMDg4IDEyMC4wMTQsMTAuODYyIDEyMC4wMTQsMTIuNTkgTDEyMC4wMTQsMTcgTDExNy43MjgsMTcgTDExNy43MjgsOCBMMTE5LjI1OCw4IEwxMTkuNDIsOS40MDQgQzEyMC4wMzIsOC4zOTYgMTIxLjE4NCw3Ljg3NCAxMjIuNTE2LDcuODc0IFogTTEzMy40OTYsNy44NzQgQzEzNi4wNTIsNy44NzQgMTM4LjEyMiw5Ljk0NCAxMzguMTIyLDEyLjUgQzEzOC4xMjIsMTUuMDU2IDEzNi4wNTIsMTcuMTA4IDEzMy40OTYsMTcuMTA4IEMxMzAuOTQsMTcuMTA4IDEyOC44ODgsMTUuMDU2IDEyOC44ODgsMTIuNSBDMTI4Ljg4OCw5Ljk0NCAxMzAuOTQsNy44NzQgMTMzLjQ5Niw3Ljg3NCBaIE0xMzMuNDk2LDEwLjA4OCBDMTMyLjI5LDEwLjA4OCAxMzEuMTc0LDExLjAyNCAxMzEuMTc0LDEyLjUgQzEzMS4xNzQsMTMuOTc2IDEzMi4yOSwxNC44OTQgMTMzLjQ5NiwxNC44OTQgQzEzNC42ODQsMTQuODk0IDEzNS44MTgsMTMuOTc2IDEzNS44MTgsMTIuNSBDMTM1LjgxOCwxMS4wMjQgMTM0LjY4NCwxMC4wODggMTMzLjQ5NiwxMC4wODggWiBNMTQwLjczMiwxNyBMMTQwLjczMiw0LjQgTDE0My4wMzYsNC40IEwxNDMuMDM2LDE3IEwxNDAuNzMyLDE3IFogTTE1MC4wOTIsNy44NzQgQzE1Mi42NDgsNy44NzQgMTU0LjcxOCw5Ljk0NCAxNTQuNzE4LDEyLjUgQzE1NC43MTgsMTUuMDU2IDE1Mi42NDgsMTcuMTA4IDE1MC4wOTIsMTcuMTA4IEMxNDcuNTM2LDE3LjEwOCAxNDUuNDg0LDE1LjA1NiAxNDUuNDg0LDEyLjUgQzE0NS40ODQsOS45NDQgMTQ3LjUzNiw3Ljg3NCAxNTAuMDkyLDcuODc0IFogTTE1MC4wOTIsMTAuMDg4IEMxNDguODg2LDEwLjA4OCAxNDcuNzcsMTEuMDI0IDE0Ny43NywxMi41IEMxNDcuNzcsMTMuOTc2IDE0OC44ODYsMTQuODk0IDE1MC4wOTIsMTQuODk0IEMxNTEuMjgsMTQuODk0IDE1Mi40MTQsMTMuOTc2IDE1Mi40MTQsMTIuNSBDMTUyLjQxNCwxMS4wMjQgMTUxLjI4LDEwLjA4OCAxNTAuMDkyLDEwLjA4OCBaIE0xNjEsNy44NzQgQzE2Mi4yNDIsNy44NzQgMTYzLjMyMiw4LjQxNCAxNjMuOTg4LDkuMjYgTDE2NC4xMTQsOCBMMTY1LjY0NCw4IEwxNjUuNjQ0LDE1Ljg0OCBDMTY1LjY0NCwxOC40NzYgMTYzLjkzNCwyMC40MzggMTYxLjEyNiwyMC40MzggQzE1OS40NywyMC40MzggMTU4LjEyLDE5Ljg0NCAxNTcuMTQ4LDE5LjAzNCBMMTU4LjQ0NCwxNy42NDggQzE1OS4zMDgsMTguMDggMTYwLjExOCwxOC4zNjggMTYxLjEyNiwxOC4zNSBDMTYyLjQ0LDE4LjM1IDE2My4zMjIsMTcuNjg0IDE2My4zMjIsMTYuMzcgTDE2My4zMjIsMTUuODY2IEMxNjIuNzgyLDE2LjQ2IDE2MS45MzYsMTYuODM4IDE2MSwxNi44MzggQzE1OC40NDQsMTYuODM4IDE1Ni42MDgsMTQuNzg2IDE1Ni42MDgsMTIuMzc0IEMxNTYuNjA4LDkuOTQ0IDE1OC40NDQsNy44NzQgMTYxLDcuODc0IFogTTE2MS4yMTYsMTAuMDg4IEMxNjAuMDEsMTAuMDg4IDE1OC44OTQsMTEuMDI0IDE1OC44OTQsMTIuMzc0IEMxNTguODk0LDEzLjcwNiAxNjAuMDEsMTQuNjI0IDE2MS4yMTYsMTQuNjI0IEMxNjIuNDA0LDE0LjYyNCAxNjMuNTM4LDEzLjcwNiAxNjMuNTM4LDEyLjM3NCBDMTYzLjUzOCwxMS4wMjQgMTYyLjQwNCwxMC4wODggMTYxLjIxNiwxMC4wODggWiBNMTc3LjQzNCw4IEwxNzcuNDM0LDE1Ljg0OCBDMTc3LjQzNCwxOC40NzYgMTc1LjcyNCwyMC40MzggMTcyLjkzNCwyMC40MzggQzE3MS4yNzgsMjAuNDM4IDE2OS45MSwxOS44NDQgMTY4LjkzOCwxOS4wMzQgTDE3MC4yMzQsMTcuNjQ4IEMxNzEuMDk4LDE4LjA4IDE3MS45MDgsMTguMzY4IDE3Mi45MzQsMTguMzUgQzE3NC4yMywxOC4zNSAxNzUuMTMsMTcuNjg0IDE3NS4xMywxNi4zNyBMMTc1LjEzLDE1Ljc5NCBDMTc0LjU1NCwxNi41MzIgMTczLjYsMTYuODU2IDE3Mi42NjQsMTYuODU2IEMxNzAuMDU0LDE2Ljg1NiAxNjguNzIyLDE1LjA3NCAxNjguNzIyLDEyLjQ2NCBMMTY4LjcyMiw4IEwxNzEuMDA4LDggTDE3MS4wMDgsMTIuMzM4IEMxNzEuMDA4LDEzLjk5NCAxNzEuOCwxNC42NDIgMTczLjAyNCwxNC42NDIgQzE3NC4zMiwxNC42NDIgMTc1LjE0OCwxMy44NjggMTc1LjE0OCwxMi4xNCBMMTc1LjE0OCw4IEwxNzcuNDM0LDggWiIgaWQ9IlNob3BUZWNobm9sb2d5Ij48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMSwwIEMwLjQ0NzczODEyNCw1LjUyMTc5MDUzZS0wNSA1LjUyMTc5MDUzZS0wNSwwLjQ0NzczODEyNCAwLDEgTDAsNSBDNS41MjE3OTA1M2UtMDUsNS41NTIyNjE4OCAwLjQ0NzczODEyNCw1Ljk5OTk0NDc4IDEsNiBMNSw2IEM1LjU1MjI2MTg4LDUuOTk5OTQ0NzggNS45OTk5NDQ3OCw1LjU1MjI2MTg4IDYsNSBMNiw0IEw4LDQgTDgsMiBMNiwyIEw2LDEgQzUuOTk5OTQ0NzgsMC40NDc3MzgxMjQgNS41NTIyNjE4OCw1LjUyMTc5MDUzZS0wNSA1LDAgTDEsMCBaIE0xNSwwIEMxNC40NDc3MzgxLDUuNTIxNzkwNTNlLTA1IDE0LjAwMDA1NTIsMC40NDc3MzgxMjQgMTQsMSBMMTQsNSBDMTQuMDAwMDU1Miw1LjU1MjI2MTg4IDE0LjQ0NzczODEsNS45OTk5NDQ3OCAxNSw2IEwxNiw2IEwxNiw4IEwxOCw4IEwxOCw2IEwxOSw2IEMxOS41NTIyNjE5LDUuOTk5OTQ0NzggMTkuOTk5OTQ0OCw1LjU1MjI2MTg4IDIwLDUgTDIwLDEgQzE5Ljk5OTk0NDgsMC40NDc3MzgxMjQgMTkuNTUyMjYxOSw1LjUyMTc5MDUzZS0wNSAxOSwwIEwxNSwwIFogTTIsMiBMNCwyIEw0LDQgTDIsNCBMMiwyIFogTTEwLDIgTDEwLDQgTDEyLDQgTDEyLDIgTDEwLDIgWiBNMTYsMiBMMTgsMiBMMTgsNCBMMTYsNCBMMTYsMiBaIE0yLDggTDIsMTAgTDQsMTAgTDQsOCBMMiw4IFogTTE2LDEwIEwxNiwxMiBMMTgsMTIgTDE4LDEwIEwxNiwxMCBaIE0yLDEyIEwyLDE0IEwxLDE0IEMwLjQ0NzczODEyNCwxNC4wMDAwNTUyIDUuNTIxNzkwNTNlLTA1LDE0LjQ0NzczODEgMCwxNSBMMCwxOSBDNS41MjE3OTA1M2UtMDUsMTkuNTUyMjYxOSAwLjQ0NzczODEyNCwxOS45OTk5NDQ4IDEsMjAgTDUsMjAgQzUuNTUyMjYxODgsMTkuOTk5OTQ0OCA1Ljk5OTk0NDc4LDE5LjU1MjI2MTkgNiwxOSBMNiwxNSBDNS45OTk5NDQ3OCwxNC40NDc3MzgxIDUuNTUyMjYxODgsMTQuMDAwMDU1MiA1LDE0IEw0LDE0IEw0LDEyIEwyLDEyIFogTTE1LDE0IEMxNC40NDc3MzgxLDE0LjAwMDA1NTIgMTQuMDAwMDU1MiwxNC40NDc3MzgxIDE0LDE1IEwxNCwxNiBMMTIsMTYgTDEyLDE4IEwxNCwxOCBMMTQsMTkgQzE0LjAwMDA1NTIsMTkuNTUyMjYxOSAxNC40NDc3MzgxLDE5Ljk5OTk0NDggMTUsMjAgTDE5LDIwIEMxOS41NTIyNjE5LDE5Ljk5OTk0NDggMTkuOTk5OTQ0OCwxOS41NTIyNjE5IDIwLDE5IEwyMCwxNSBDMTkuOTk5OTQ0OCwxNC40NDc3MzgxIDE5LjU1MjI2MTksMTQuMDAwMDU1MiAxOSwxNCBMMTUsMTQgWiBNMiwxNiBMNCwxNiBMNCwxOCBMMiwxOCBMMiwxNiBaIE04LDE2IEw4LDE4IEwxMCwxOCBMMTAsMTYgTDgsMTYgWiBNMTYsMTYgTDE4LDE2IEwxOCwxOCBMMTYsMTggTDE2LDE2IFoiIGlkPSJTaGFwZSI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4="

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";.slick-slider{box-sizing:border-box;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-ms-touch-action:pan-y;touch-action:pan-y;-webkit-tap-highlight-color:transparent}.slick-list,.slick-slider{position:relative;display:block}.slick-list{overflow:hidden;margin:0;padding:0}.slick-list:focus{outline:none}.slick-list.dragging{cursor:pointer;cursor:hand}.slick-slider .slick-list,.slick-slider .slick-track{-webkit-transform:translateZ(0);-ms-transform:translateZ(0);transform:translateZ(0)}.slick-track{position:relative;left:0;top:0;display:block;margin-left:auto;margin-right:auto}.slick-track:after,.slick-track:before{content:\"\";display:table}.slick-track:after{clear:both}.slick-loading .slick-track{visibility:hidden}.slick-slide{float:left;height:100%;min-height:1px;display:none}[dir=rtl] .slick-slide{float:right}.slick-slide img{display:block}.slick-slide.slick-loading img{display:none}.slick-slide.dragging img{pointer-events:none}.slick-initialized .slick-slide{display:block}.slick-loading .slick-slide{visibility:hidden}.slick-vertical .slick-slide{display:block;height:auto;border:1px solid transparent}.slick-arrow.slick-hidden{display:none}.slick-list,.slick-slider{outline:none}.slick-next,.slick-prev{position:absolute;display:block;height:20px;width:20px;line-height:0;font-size:0;cursor:pointer;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);padding:0;border:none}.slick-next,.slick-next:focus,.slick-next:hover,.slick-prev,.slick-prev:focus,.slick-prev:hover{background:transparent;color:transparent;outline:none}.slick-next:focus:before,.slick-next:hover:before,.slick-prev:focus:before,.slick-prev:hover:before{opacity:1}.slick-next.slick-disabled:before,.slick-prev.slick-disabled:before{opacity:.25}.slick-next:before,.slick-prev:before{font-family:slick;font-size:20px;line-height:1;color:#fff;opacity:.75;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.slick-prev{left:-25px}[dir=rtl] .slick-prev{left:auto;right:-25px}.slick-prev:before{content:\"\\2190\"}[dir=rtl] .slick-prev:before{content:\"\\2192\"}.slick-next{right:-25px}[dir=rtl] .slick-next{left:-25px;right:auto}.slick-next:before{content:\"\\2192\"}[dir=rtl] .slick-next:before{content:\"\\2190\"}.slick-dotted.slick-slider{margin-bottom:30px}.slick-dots{position:absolute;bottom:-25px;list-style:none;display:block;text-align:center;padding:0;margin:0;width:100%}.slick-dots li{position:relative;display:inline-block;margin:0 5px;padding:0}.slick-dots li,.slick-dots li button{height:20px;width:20px;cursor:pointer}.slick-dots li button{border:0;background:transparent;display:block;outline:none;line-height:0;font-size:0;color:transparent;padding:5px}.slick-dots li button:focus,.slick-dots li button:hover{outline:none}.slick-dots li button:focus:before,.slick-dots li button:hover:before{opacity:1}.slick-dots li button:before{position:absolute;top:0;left:0;content:\"\\2022\";width:20px;height:20px;font-family:slick;font-size:6px;line-height:20px;text-align:center;color:#000;opacity:.25;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.slick-dots li.slick-active button:before{color:#000;opacity:.75}.Reviews{padding-left:40px;padding-right:40px;padding-top:100px;background-color:#fff;overflow:hidden}@media screen and (max-width:767px){.Reviews{padding-left:15px;padding-right:15px}}@media screen and (max-width:1024px){.Reviews{padding-top:50px}}@media screen and (max-width:767px){.Reviews{padding-top:30px}}.Reviews__wrapper{max-width:1220px;margin-left:auto;margin-right:auto}.Reviews__wrapper:after{content:\" \";display:block;clear:both}.Reviews__content{position:relative}.Reviews__content *{outline:none}.Reviews__slider{border-bottom:1px solid rgba(51,51,51,.05)}@media screen and (max-width:767px){.Reviews__slider{margin-bottom:30px}}.Reviews__nav{position:absolute;display:block;width:100%;left:0;bottom:65px;padding-left:11.39241%}@media screen and (max-width:1024px){.Reviews__nav{padding-left:0}}@media screen and (max-width:767px){.Reviews__nav{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;left:auto;bottom:auto;padding-left:0}}", ""]);

// exports


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _RoadMapItem = __webpack_require__(112);

var _RoadMapItem2 = _interopRequireDefault(_RoadMapItem);

var _roadmap = __webpack_require__(114);

var _roadmap2 = _interopRequireDefault(_roadmap);

__webpack_require__(119);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Renders RoadMap component
 * @returns {JSX}
 */
var RoadMap = function RoadMap() {
    return _react2.default.createElement(
        'section',
        { className: 'RoadMap' },
        _react2.default.createElement(
            'div',
            { className: 'RoadMap__wrapper' },
            _react2.default.createElement(
                'div',
                { className: 'RoadMap__header' },
                _react2.default.createElement(
                    'div',
                    { className: 'RoadMap__title' },
                    _react2.default.createElement(
                        'h2',
                        null,
                        'Road map'
                    )
                )
            ),
            _react2.default.createElement(
                'div',
                { className: 'RoadMap__content' },
                _react2.default.createElement(
                    'ul',
                    { className: 'RoadMap__list' },
                    _roadmap2.default.map(function (dataItem, idx) {
                        return _react2.default.createElement(
                            'li',
                            { key: idx, className: 'RoadMap__item' },
                            _react2.default.createElement(_RoadMapItem2.default, dataItem)
                        );
                    })
                )
            )
        )
    );
};

exports.default = RoadMap;

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(4);

var _classnames2 = _interopRequireDefault(_classnames);

var _config = __webpack_require__(5);

var _config2 = _interopRequireDefault(_config);

__webpack_require__(113);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _config$contactLink = _config2.default.contactLink,
    contactLink = _config$contactLink === undefined ? '' : _config$contactLink;

/**
 * Renders RoadMapItem component
 * @param {Object}
 * @returns {JSX}
 */

var RoadMapItem = function RoadMapItem(_ref) {
    var Icon = _ref.Icon,
        title = _ref.title,
        description = _ref.description,
        isDefault = _ref.isDefault;

    var componentClass = (0, _classnames2.default)({
        RoadMapItem: true,
        RoadMapItem_default: isDefault
    });

    return _react2.default.createElement(
        'div',
        { className: componentClass },
        _react2.default.createElement(
            'div',
            { className: 'RoadMapItem__wrapper' },
            _react2.default.createElement(
                'div',
                { className: 'RoadMapItem__header' },
                _react2.default.createElement(
                    'div',
                    { className: 'RoadMapItem__icon' },
                    _react2.default.createElement(Icon, null)
                )
            ),
            _react2.default.createElement(
                'div',
                { className: 'RoadMapItem__content' },
                !isDefault && _react2.default.createElement(
                    'div',
                    { className: 'RoadMapItem__title' },
                    _react2.default.createElement(
                        'h5',
                        null,
                        title
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'RoadMapItem__description' },
                    description
                )
            ),
            isDefault && _react2.default.createElement(
                'div',
                { className: 'RoadMapItem__footer' },
                _react2.default.createElement(
                    'a',
                    { href: contactLink, className: 'RoadMapItem__link' },
                    'Write suggest'
                )
            )
        )
    );
};

RoadMapItem.propTypes = {
    Icon: _propTypes2.default.func,
    title: _propTypes2.default.string,
    description: _propTypes2.default.string,
    isDefault: _propTypes2.default.bool
};

RoadMapItem.defaultProps = {
    isDefault: false
};

exports.default = RoadMapItem;

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".RoadMapItem{width:100%;padding:30px;background-color:#fcfcfe;border-radius:4px}.RoadMapItem__icon{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;width:40px;height:40px;margin-bottom:8px}.RoadMapItem__icon svg{display:block;max-width:100%;max-height:100%}.RoadMapItem__description{padding-top:5px;opacity:.8}.RoadMapItem__footer{padding-top:10px}.RoadMapItem__link{position:relative;padding-right:14px;font-size:13px;color:#fe5759;text-decoration:none;text-transform:uppercase}.RoadMapItem__link:hover:after{right:-2px}.RoadMapItem__link:after{content:\"\";position:absolute;display:block;width:8px;height:8px;top:50%;right:0;margin-top:-4px;border:1px solid transparent;border-color:#fe5759 #fe5759 transparent transparent;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);-webkit-transition:right .2s ease;transition:right .2s ease}.RoadMapItem.RoadMapItem_default{background-color:#fff;border:1px solid rgba(63,58,87,.1)}", ""]);

// exports


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _IconImage = __webpack_require__(115);

var _IconImage2 = _interopRequireDefault(_IconImage);

var _IconVideo = __webpack_require__(116);

var _IconVideo2 = _interopRequireDefault(_IconVideo);

var _IconResponsive = __webpack_require__(117);

var _IconResponsive2 = _interopRequireDefault(_IconResponsive);

var _IconBubble = __webpack_require__(118);

var _IconBubble2 = _interopRequireDefault(_IconBubble);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [{
    Icon: _IconImage2.default,
    title: 'Image processing',
    description: 'Process your images (crop, resize etc.) right in media manager'
}, {
    Icon: _IconVideo2.default,
    title: 'Supporting video services',
    description: 'Save links to useful videos (youtube, vimeo etc.)'
}, {
    Icon: _IconResponsive2.default,
    title: 'Responsive',
    description: 'Responsive versions for small screens'
}, {
    Icon: _IconBubble2.default,
    description: 'Add your tips to expand the functionality',
    isDefault: true
}];

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Renders IconImage component
 * @returns {JSX}
 */
var IconImage = function IconImage() {
    return _react2.default.createElement(
        "svg",
        { version: "1.1", width: "41px", height: "37px", viewBox: "0 0 41 37" },
        _react2.default.createElement(
            "g",
            null,
            _react2.default.createElement("path", {
                fill: "#00CCF1",
                d: "M5.699,3.495c-1.377,0-2.498,1.121-2.498,2.498S4.322,8.49,5.699,8.49c1.377,0,2.498-1.121,2.498-2.498 S7.077,3.495,5.699,3.495z M5.699,7.49c-0.826,0-1.498-0.672-1.498-1.498s0.672-1.498,1.498-1.498c0.826,0,1.498,0.672,1.498,1.498 S6.525,7.49,5.699,7.49z" }),
            _react2.default.createElement("path", {
                fill: "#00CCF1",
                d: "M39.867,23.492c-0.707-1.708-3.426-4.321-5.032-2.972L33,22.35V2.5C33,1.122,31.879,0,30.5,0h-28 C1.122,0,0,1.122,0,2.5v23C0,26.879,1.122,28,2.5,28h24.833l-2.731,2.723l-0.778,3.954l-0.473,2.223l6.177-1.251l10.201-10.232 C39.976,25.169,40.322,24.591,39.867,23.492z M1,2.5C1,1.673,1.673,1,2.5,1h28C31.327,1,32,1.673,32,2.5v14.108l-8.793-8.881 l-8.089,8.737l-5.847-6.379L1,19.407V2.5z M2.5,27C1.673,27,1,26.327,1,25.5v-4.586l8.282-9.335l5.153,5.623L5.364,27H2.5z M6.727,27L23.23,9.173L32,18.03v5.317L28.336,27H6.727z M25.364,35.448l-0.715,0.152l0.696-3.494l2.628,2.829L25.364,35.448z M29.092,34.67l-3.383-3.641l8.032-8.009l3.359,3.615L29.092,34.67z M39.021,24.71l-1.213,1.217l-3.357-3.613l1.058-1.055 c0.712-0.593,2.803,1.086,3.436,2.616C39.105,24.267,39.137,24.594,39.021,24.71z" })
        )
    );
};

exports.default = IconImage;

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Renders IconVideo component
 * @returns {JSX}
 */
var IconVideo = function IconVideo() {
    return _react2.default.createElement(
        "svg",
        { version: "1.1", width: "34px", height: "31px", viewBox: "0 0 34 31" },
        _react2.default.createElement("path", {
            fill: "#764ABC",
            d: "M7.5,0C6.674,0,6,0.674,6,1.5V2H4.5C3.674,2,3,2.674,3,3.5V4H1.5C0.674,4,0,4.674,0,5.5v24 C0,30.326,0.674,31,1.5,31h31c0.826,0,1.5-0.674,1.5-1.5v-24C34,4.674,33.326,4,32.5,4h-1.514C30.988,3.986,30.994,3.819,31,3.5 C31,2.674,30.326,2,29.5,2h-1.514C27.988,1.986,27.994,1.819,28,1.5C28,0.674,27.326,0,26.5,0H7.5z M7.5,1h19 C26.775,1,27,1.225,27,1.5v0.438C27,1.959,27.01,1.979,27.014,2H7V1.5C7,1.225,7.225,1,7.5,1z M4.5,3h25C29.775,3,30,3.225,30,3.5 v0.438C30,3.959,30.01,3.979,30.014,4H4V3.5C4,3.225,4.225,3,4.5,3z M1.5,5h31C32.775,5,33,5.225,33,5.5v24 c0,0.275-0.225,0.5-0.5,0.5h-31C1.225,30,1,29.775,1,29.5v-24C1,5.225,1.225,5,1.5,5z M4.5,6C4.225,6,4,6.225,4,6.5v1 C4,7.775,4.225,8,4.5,8S5,7.775,5,7.5v-1C5,6.225,4.775,6,4.5,6z M7,6C6.725,6,6.5,6.225,6.5,6.5v1C6.5,7.775,6.725,8,7,8 s0.5-0.225,0.5-0.5v-1C7.5,6.225,7.275,6,7,6z M9.5,6C9.225,6,9,6.225,9,6.5v1C9,7.775,9.225,8,9.5,8S10,7.775,10,7.5v-1 C10,6.225,9.775,6,9.5,6z M12,6c-0.275,0-0.5,0.225-0.5,0.5v1C11.5,7.775,11.725,8,12,8s0.5-0.225,0.5-0.5v-1 C12.5,6.225,12.275,6,12,6z M14.5,6C14.225,6,14,6.225,14,6.5v1C14,7.775,14.225,8,14.5,8S15,7.775,15,7.5v-1 C15,6.225,14.775,6,14.5,6z M17,6c-0.275,0-0.5,0.225-0.5,0.5v1C16.5,7.775,16.725,8,17,8s0.5-0.225,0.5-0.5v-1 C17.5,6.225,17.275,6,17,6z M19.5,6C19.225,6,19,6.225,19,6.5v1C19,7.775,19.225,8,19.5,8S20,7.775,20,7.5v-1 C20,6.225,19.775,6,19.5,6z M22,6c-0.275,0-0.5,0.225-0.5,0.5v1C21.5,7.775,21.725,8,22,8s0.5-0.225,0.5-0.5v-1 C22.5,6.225,22.275,6,22,6z M24.5,6C24.225,6,24,6.225,24,6.5v1C24,7.775,24.225,8,24.5,8S25,7.775,25,7.5v-1 C25,6.225,24.775,6,24.5,6z M27,6c-0.275,0-0.5,0.225-0.5,0.5v1C26.5,7.775,26.725,8,27,8s0.5-0.225,0.5-0.5v-1 C27.5,6.225,27.275,6,27,6z M29.5,6C29.225,6,29,6.225,29,6.5v1C29,7.775,29.225,8,29.5,8S30,7.775,30,7.5v-1 C30,6.225,29.775,6,29.5,6z M13.994,11.881c-0.174-0.004-0.348,0.041-0.506,0.131C13.17,12.191,13,12.518,13,12.883v9.234 c0,0.365,0.17,0.691,0.488,0.871c0.154,0.088,0.324,0.131,0.494,0.131c0.178,0,0.354-0.047,0.512-0.143l7.713-4.617 c0.305-0.184,0.488-0.504,0.488-0.859s-0.184-0.676-0.488-0.859l-7.713-4.617C14.338,11.93,14.168,11.883,13.994,11.881z M13.982,12.883l7.711,4.617l-7.711,4.619V12.883z M4.5,27C4.225,27,4,27.225,4,27.5v1C4,28.775,4.225,29,4.5,29S5,28.775,5,28.5v-1 C5,27.225,4.775,27,4.5,27z M7,27c-0.275,0-0.5,0.225-0.5,0.5v1C6.5,28.775,6.725,29,7,29s0.5-0.225,0.5-0.5v-1 C7.5,27.225,7.275,27,7,27z M9.5,27C9.225,27,9,27.225,9,27.5v1C9,28.775,9.225,29,9.5,29s0.5-0.225,0.5-0.5v-1 C10,27.225,9.775,27,9.5,27z M12,27c-0.275,0-0.5,0.225-0.5,0.5v1c0,0.275,0.225,0.5,0.5,0.5s0.5-0.225,0.5-0.5v-1 C12.5,27.225,12.275,27,12,27z M14.5,27c-0.275,0-0.5,0.225-0.5,0.5v1c0,0.275,0.225,0.5,0.5,0.5s0.5-0.225,0.5-0.5v-1 C15,27.225,14.775,27,14.5,27z M17,27c-0.275,0-0.5,0.225-0.5,0.5v1c0,0.275,0.225,0.5,0.5,0.5s0.5-0.225,0.5-0.5v-1 C17.5,27.225,17.275,27,17,27z M19.5,27c-0.275,0-0.5,0.225-0.5,0.5v1c0,0.275,0.225,0.5,0.5,0.5s0.5-0.225,0.5-0.5v-1 C20,27.225,19.775,27,19.5,27z M22,27c-0.275,0-0.5,0.225-0.5,0.5v1c0,0.275,0.225,0.5,0.5,0.5s0.5-0.225,0.5-0.5v-1 C22.5,27.225,22.275,27,22,27z M24.5,27c-0.275,0-0.5,0.225-0.5,0.5v1c0,0.275,0.225,0.5,0.5,0.5s0.5-0.225,0.5-0.5v-1 C25,27.225,24.775,27,24.5,27z M27,27c-0.275,0-0.5,0.225-0.5,0.5v1c0,0.275,0.225,0.5,0.5,0.5s0.5-0.225,0.5-0.5v-1 C27.5,27.225,27.275,27,27,27z M29.5,27c-0.275,0-0.5,0.225-0.5,0.5v1c0,0.275,0.225,0.5,0.5,0.5s0.5-0.225,0.5-0.5v-1 C30,27.225,29.775,27,29.5,27z" })
    );
};

exports.default = IconVideo;

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Renders IconResponsive component
 * @returns {JSX}
 */
var IconResponsive = function IconResponsive() {
    return _react2.default.createElement(
        "svg",
        { version: "1.1", width: "32px", height: "33px", viewBox: "0 0 32 33" },
        _react2.default.createElement(
            "g",
            null,
            _react2.default.createElement("circle", { fill: "#00C759", cx: "3", cy: "9", r: "0.5" }),
            _react2.default.createElement("circle", { fill: "#00C759", cx: "3", cy: "11", r: "0.5" }),
            _react2.default.createElement("circle", { fill: "#00C759", cx: "3", cy: "13", r: "0.5" }),
            _react2.default.createElement("circle", { fill: "#00C759", cx: "3", cy: "15", r: "0.5" }),
            _react2.default.createElement("circle", { fill: "#00C759", cx: "3", cy: "17", r: "0.5" }),
            _react2.default.createElement("circle", { fill: "#00C759", cx: "3", cy: "21", r: "0.5" }),
            _react2.default.createElement("circle", { fill: "#00C759", cx: "3", cy: "23", r: "0.5" }),
            _react2.default.createElement("circle", { fill: "#00C759", cx: "3", cy: "25", r: "0.5" }),
            _react2.default.createElement("circle", { fill: "#00C759", cx: "3", cy: "7", r: "0.5" }),
            _react2.default.createElement("circle", { fill: "#00C759", cx: "3", cy: "19", r: "0.5" }),
            _react2.default.createElement("path", {
                fill: "#00C759",
                d: "M1,30V2c0-0.559,0.441-1,1-1h20c0.559,0,1,0.441,1,1v2h1V2c0-1.1-0.9-2-2-2H2C0.9,0,0,0.9,0,2v28 c0,1.1,0.9,2,2,2h13v-1H2C1.441,31,1,30.559,1,30z" }),
            _react2.default.createElement("circle", { fill: "#00C759", cx: "12", cy: "28.5", r: "1" }),
            _react2.default.createElement("circle", { fill: "#00C759", cx: "8.5", cy: "2.5", r: "0.5" }),
            _react2.default.createElement("path", {
                fill: "#00C759",
                d: "M13.939,2.752c0.09-0.156,0.09-0.348,0-0.504C13.848,2.092,13.68,1.998,13.5,2h-3 c-0.18-0.002-0.348,0.092-0.439,0.248c-0.09,0.156-0.09,0.348,0,0.504C10.152,2.908,10.32,3.002,10.5,3h3 C13.68,3.002,13.848,2.908,13.939,2.752z" }),
            _react2.default.createElement("path", {
                fill: "#00C759",
                d: "M30,5H18c-1.1,0-2,0.9-2,2v24c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V7C32,5.9,31.1,5,30,5z M31,31 c0,0.559-0.441,1-1,1H18c-0.559,0-1-0.441-1-1V7c0-0.559,0.441-1,1-1h12c0.559,0,1,0.441,1,1V31z" }),
            _react2.default.createElement("path", {
                fill: "#00C759",
                d: "M25,7h-2c-0.18-0.002-0.348,0.092-0.439,0.248c-0.09,0.156-0.09,0.348,0,0.504 C22.652,7.908,22.82,8.002,23,8h2c0.18,0.002,0.348-0.092,0.439-0.248c0.09-0.156,0.09-0.348,0-0.504 C25.348,7.092,25.18,6.998,25,7z" }),
            _react2.default.createElement("circle", { fill: "#00C759", cx: "21", cy: "7.5", r: "0.5" }),
            _react2.default.createElement("circle", { fill: "#00C759", cx: "24", cy: "30", r: "1" })
        )
    );
};

exports.default = IconResponsive;

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Renders IconBubble component
 * @returns {JSX}
 */
var IconBubble = function IconBubble() {
    return _react2.default.createElement(
        "svg",
        { version: "1.1", width: "33px", height: "36px", viewBox: "0 0 33 36" },
        _react2.default.createElement(
            "g",
            null,
            _react2.default.createElement("path", {
                fill: "#FE5759",
                d: "M30.119,23.468C32.004,20.967,33,18.039,33,15c0-8.271-7.402-15-16.5-15C7.402,0,0,6.729,0,15 c0,4.479,2.217,8.7,6.084,11.58c-0.392,1.403-1,2.501-1.975,3.559c-0.056,0.062-0.196,0.208-0.354,0.372 c-0.247,0.259-0.535,0.561-0.632,0.671L3.057,31.26C2.781,31.588,2.5,31.991,2.5,32.5V33H3c2.648,0,5.561-1.18,8.907-3.607 c1.738,0.461,3.516,0.65,5.242,0.592C17.839,33.411,20.872,36,24.5,36c4.136,0,7.5-3.364,7.5-7.5c0-2.023-0.809-3.858-2.115-5.209 L30.119,23.468z M12.162,28.426l-0.459-0.121l-0.383,0.279c-2.835,2.057-5.312,3.168-7.543,3.379 c0.03-0.038,0.064-0.079,0.101-0.124c0.091-0.104,0.366-0.391,0.601-0.637c0.164-0.172,0.31-0.324,0.367-0.387 c1.072-1.164,1.771-2.424,2.201-3.967l0.185-0.661l-0.55-0.409C3.071,23.089,1,19.16,1,15C1,7.28,7.953,1,16.5,1S32,7.28,32,15 c0,2.795-0.913,5.49-2.636,7.803C28.054,21.682,26.356,21,24.5,21c-4.136,0-7.5,3.364-7.5,7.5c0,0.163,0.014,0.323,0.024,0.484 C15.422,29.033,13.775,28.854,12.162,28.426z M24.5,35c-3.584,0-6.5-2.916-6.5-6.5s2.916-6.5,6.5-6.5s6.5,2.916,6.5,6.5 S28.084,35,24.5,35z" }),
            _react2.default.createElement("polygon", {
                fill: "#FE5759",
                points: "25,25 24,25 24,28.5 20.5,28.5 20.5,29.5 24,29.5 24,33 25,33 25,29.5 28.5,29.5 28.5,28.5 25,28.5" })
        )
    );
};

exports.default = IconBubble;

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".RoadMap{padding:100px 40px;background-color:#fff}@media screen and (max-width:767px){.RoadMap{padding-left:15px;padding-right:15px}}@media screen and (max-width:1024px){.RoadMap{padding-top:50px;padding-bottom:50px}}@media screen and (max-width:767px){.RoadMap{padding-top:30px;padding-bottom:30px}}.RoadMap__wrapper{max-width:1220px;margin-left:auto;margin-right:auto}.RoadMap__wrapper:after{content:\" \";display:block;clear:both}.RoadMap__header{margin-bottom:40px;text-align:center}@media screen and (max-width:1024px){.RoadMap__header{margin-bottom:20px}}.RoadMap__item,.RoadMap__list{list-style:none;margin:0;padding:0}.RoadMap__list{-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.RoadMap__item,.RoadMap__list{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.RoadMap__item{width:24.05063%}@media screen and (max-width:1024px){.RoadMap__item{width:49.36709%;margin-bottom:15px}}@media screen and (max-width:640px){.RoadMap__item{width:100%}.RoadMap__item:nth-last-child(-n+1){margin-bottom:0}}", ""]);

// exports


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Button = __webpack_require__(6);

var _Button2 = _interopRequireDefault(_Button);

var _config = __webpack_require__(5);

var _config2 = _interopRequireDefault(_config);

__webpack_require__(121);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _config$purchaseLink = _config2.default.purchaseLink,
    purchaseLink = _config$purchaseLink === undefined ? '' : _config$purchaseLink;

/**
 * Renders CtaBox component
 * @returns {JSX}
 */

var CtaBox = function CtaBox() {
    return _react2.default.createElement(
        'section',
        { className: 'CtaBox' },
        _react2.default.createElement(
            'div',
            { className: 'CtaBox__wrapper' },
            _react2.default.createElement(
                'div',
                { className: 'CtaBox__header' },
                _react2.default.createElement(
                    'h2',
                    null,
                    'Media manager for your CMS'
                )
            ),
            _react2.default.createElement(
                'div',
                { className: 'CtaBox__content' },
                _react2.default.createElement(_Button2.default, {
                    href: purchaseLink,
                    text: 'Buy',
                    size: 'medium' })
            )
        )
    );
};

exports.default = CtaBox;

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(10);
exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".CtaBox{padding:100px 40px;background-color:#fe5759;background-image:url(" + escape(__webpack_require__(122)) + "),url(" + escape(__webpack_require__(123)) + ");background-position:calc(50% - 538px) 50%,calc(50% + 538px) 50%;background-repeat:no-repeat,no-repeat}@media screen and (max-width:1024px){.CtaBox{padding-top:50px;padding-bottom:50px}}@media screen and (max-width:767px){.CtaBox{padding-top:30px;padding-bottom:30px;padding-left:15px;padding-right:15px}}.CtaBox__header{margin-bottom:40px;text-align:center}@media screen and (max-width:1024px){.CtaBox__header{margin-bottom:20px}}.CtaBox__header h2{color:#fff}.CtaBox__content{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;width:100%;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}", ""]);

// exports


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/bg-cta-left.44327e03.svg";

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/bg-cta-right.3b32218e.svg";

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(3);

var _Data = __webpack_require__(125);

var _Data2 = _interopRequireDefault(_Data);

__webpack_require__(138);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Renders Documentation component
 * @returns {JSX}
 */
var Documentation = function Documentation() {
    return _react2.default.createElement(
        'section',
        { className: 'Documentation' },
        _react2.default.createElement(
            'div',
            { className: 'Documentation__wrapper' },
            _react2.default.createElement(
                'div',
                { className: 'Documentation__content' },
                _react2.default.createElement(
                    'div',
                    { className: 'Documentation__aside' },
                    _react2.default.createElement(
                        'div',
                        { className: 'Documentation__panel' },
                        _react2.default.createElement(
                            'div',
                            { className: 'Documentation__title' },
                            _react2.default.createElement(
                                'h2',
                                null,
                                'Documentation'
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'Documentation__content' },
                            _react2.default.createElement(
                                'ul',
                                { className: 'Documentation__list' },
                                _react2.default.createElement(
                                    'li',
                                    { className: 'Documentation__item' },
                                    _react2.default.createElement(
                                        _reactStatic.Link,
                                        { to: '#getting-started', className: 'Documentation__link' },
                                        _react2.default.createElement(
                                            'h4',
                                            null,
                                            'Getting Started'
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'li',
                                    { className: 'Documentation__item' },
                                    _react2.default.createElement(
                                        _reactStatic.Link,
                                        { to: '#setup' },
                                        _react2.default.createElement(
                                            'h4',
                                            null,
                                            'Setup'
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'li',
                                    { className: 'Documentation__item' },
                                    _react2.default.createElement(
                                        _reactStatic.Link,
                                        { to: '#usage' },
                                        _react2.default.createElement(
                                            'h4',
                                            null,
                                            'Usage'
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'li',
                                    { className: 'Documentation__item' },
                                    _react2.default.createElement(
                                        _reactStatic.Link,
                                        { to: '#server' },
                                        _react2.default.createElement(
                                            'h4',
                                            null,
                                            'Server'
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'li',
                                    { className: 'Documentation__item' },
                                    _react2.default.createElement(
                                        _reactStatic.Link,
                                        { to: '#browsers-support' },
                                        _react2.default.createElement(
                                            'h4',
                                            null,
                                            'Browsers support'
                                        )
                                    )
                                )
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'Documentation__main' },
                    _react2.default.createElement(_Data2.default, null)
                )
            )
        )
    );
};

exports.default = Documentation;

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _GettingStarted = __webpack_require__(126);

var _GettingStarted2 = _interopRequireDefault(_GettingStarted);

var _Setup = __webpack_require__(128);

var _Setup2 = _interopRequireDefault(_Setup);

var _Usage = __webpack_require__(132);

var _Usage2 = _interopRequireDefault(_Usage);

var _Server = __webpack_require__(134);

var _Server2 = _interopRequireDefault(_Server);

var _BrowsersSupport = __webpack_require__(137);

var _BrowsersSupport2 = _interopRequireDefault(_BrowsersSupport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Renders Data component
 * @returns {JSX}
 */
var Data = function Data() {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_GettingStarted2.default, null),
        _react2.default.createElement(_Setup2.default, null),
        _react2.default.createElement(_Usage2.default, null),
        _react2.default.createElement(_Server2.default, null),
        _react2.default.createElement(_BrowsersSupport2.default, null)
    );
};

exports.default = Data;

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _DocumentationSection = __webpack_require__(7);

var _DocumentationSection2 = _interopRequireDefault(_DocumentationSection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Renders GettingStarted component
 * @returns {JSX}
 */
var GettingStarted = function GettingStarted() {
    return _react2.default.createElement(
        _DocumentationSection2.default,
        { id: 'getting-started' },
        _react2.default.createElement(
            'h1',
            null,
            'Getting Started'
        ),
        _react2.default.createElement(
            'p',
            null,
            'To start using \xABFile.Shark\xBB media manager it is necessary to do the next things:'
        ),
        _react2.default.createElement(
            'ul',
            null,
            _react2.default.createElement(
                'li',
                null,
                'download archive with files'
            ),
            _react2.default.createElement(
                'li',
                null,
                'include all required assets'
            ),
            _react2.default.createElement(
                'li',
                null,
                'initialize \xABFile.Shark\xBB media manager'
            ),
            _react2.default.createElement(
                'li',
                null,
                'configure the server to work with media manager'
            )
        )
    );
};

exports.default = GettingStarted;

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".DocumentationSection{position:relative;margin-bottom:3em;padding-bottom:2.4em;border-bottom:1px solid rgba(0,0,0,.05)}.DocumentationSection:nth-last-child(-n+1){margin-bottom:0;border-bottom:none}.DocumentationSection__anchor{position:absolute;top:-90px}", ""]);

// exports


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _DocumentationSection = __webpack_require__(7);

var _DocumentationSection2 = _interopRequireDefault(_DocumentationSection);

var _DocumentationCode = __webpack_require__(11);

var _DocumentationCode2 = _interopRequireDefault(_DocumentationCode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Renders Setup component
 * @returns {JSX}
 */
var Setup = function Setup() {
    return _react2.default.createElement(
        _DocumentationSection2.default,
        { id: 'setup' },
        _react2.default.createElement(
            'h1',
            null,
            'Setup'
        ),
        _react2.default.createElement(
            'p',
            null,
            'Include the ',
            _react2.default.createElement(
                'strong',
                null,
                'main.js'
            ),
            ' file into your page. You can find this file in the archive, in the ',
            _react2.default.createElement(
                'strong',
                null,
                'js'
            ),
            ' folder.'
        ),
        _react2.default.createElement(
            _DocumentationCode2.default,
            { language: 'html' },
            '<script src="/js/main.js"></script>'
        )
    );
};

exports.default = Setup;

/***/ }),
/* 129 */
/***/ (function(module, exports) {

module.exports = require("react-syntax-highlighter");

/***/ }),
/* 130 */
/***/ (function(module, exports) {

module.exports = require("react-syntax-highlighter/styles/hljs");

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".DocumentationCode{border-radius:3px;overflow:hidden}", ""]);

// exports


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _DocumentationSection = __webpack_require__(7);

var _DocumentationSection2 = _interopRequireDefault(_DocumentationSection);

var _DocumentationCode = __webpack_require__(11);

var _DocumentationCode2 = _interopRequireDefault(_DocumentationCode);

var _DocumentationTable = __webpack_require__(12);

var _DocumentationTable2 = _interopRequireDefault(_DocumentationTable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Renders Usage component
 * @returns {JSX}
 */
var Usage = function Usage() {
    return _react2.default.createElement(
        _DocumentationSection2.default,
        { id: 'usage' },
        _react2.default.createElement(
            'h1',
            null,
            'Usage'
        ),
        _react2.default.createElement(
            _DocumentationCode2.default,
            null,
            '\nnew Fileshark({\n    root: document.getElementById(\'root\'),\n    host: \'http://localhost:3500\',\n    endpoints: {\n        folder: \'/folder\',\n        file: \'/file\'\n    },\n    headers: {\n        \'Content-Type\': \'application/json\'\n    },\n    onInsertFile: function(data) {\n        console.log(\'data:\', data);\n    }\n});\n'
        ),
        _react2.default.createElement(
            _DocumentationTable2.default,
            null,
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'th',
                    null,
                    'Param'
                ),
                _react2.default.createElement(
                    'th',
                    null,
                    'Type and Description'
                )
            ),
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'td',
                    null,
                    'root'
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                        'p',
                        null,
                        'Type: HTMLElement'
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        'Description: Media manager code will be inserted into this html element.'
                    )
                )
            ),
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'td',
                    null,
                    'host'
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                        'p',
                        null,
                        'Type: String'
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        'Description: Host address for queries.'
                    )
                )
            ),
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'td',
                    null,
                    'endpoints'
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                        'p',
                        null,
                        'Type: Object'
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        'Description: Object with properties where each property is an endpoint url.'
                    )
                )
            ),
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'td',
                    null,
                    'endpoints.folder'
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                        'p',
                        null,
                        'Type: String'
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        'Description: Endpoint for working with folders.'
                    )
                )
            ),
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'td',
                    null,
                    'endpoints.file'
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                        'p',
                        null,
                        'Type: String'
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        'Description: Endpoint for working with files.'
                    )
                )
            ),
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'td',
                    null,
                    'headers'
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                        'p',
                        null,
                        'Type: Object'
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        'Description: Used to send custom headers to the server.'
                    )
                )
            ),
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'td',
                    null,
                    'onInsertFile'
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                        'p',
                        null,
                        'Type: Function'
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        'Description: Callback function needed to insert media file into the post. Since our product is not designed for any particular CMS, you need to determine the way to add a file into the post by yourself.'
                    )
                )
            )
        ),
        _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement(
                'strong',
                null,
                'onInsertFile'
            ),
            ' function receives the object with data about current selected file. This object contains the following properties:'
        ),
        _react2.default.createElement(
            _DocumentationTable2.default,
            null,
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'th',
                    null,
                    'Param'
                ),
                _react2.default.createElement(
                    'th',
                    null,
                    'Type and Description'
                )
            ),
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'td',
                    null,
                    'id'
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                        'p',
                        null,
                        'Type: String'
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        'Description: file id'
                    )
                )
            ),
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'td',
                    null,
                    'title'
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                        'p',
                        null,
                        'Type: String'
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        'Description: file title'
                    )
                )
            ),
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'td',
                    null,
                    'url'
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                        'p',
                        null,
                        'Type: String'
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        'Description: file url'
                    )
                )
            ),
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'td',
                    null,
                    'description'
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                        'p',
                        null,
                        'Type: String'
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        'Description: file description'
                    )
                )
            ),
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'td',
                    null,
                    'alt'
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                        'p',
                        null,
                        'Type: String'
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        'Description: file alt text'
                    )
                )
            ),
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'td',
                    null,
                    'created'
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                        'p',
                        null,
                        'Type: String'
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        'Description: file creation date'
                    )
                )
            ),
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'td',
                    null,
                    'dimensions'
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                        'p',
                        null,
                        'Type: String'
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        'Description: file dimensions'
                    )
                )
            ),
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'td',
                    null,
                    'extension'
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                        'p',
                        null,
                        'Type: String'
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        'Description: file extension'
                    )
                )
            ),
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'td',
                    null,
                    'size'
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                        'p',
                        null,
                        'Type: String'
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        'Description: file size'
                    )
                )
            ),
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'td',
                    null,
                    'folder'
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                        'p',
                        null,
                        'Type: String'
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        'Description: id of the folder to which the file belongs'
                    )
                )
            ),
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'td',
                    null,
                    'filename'
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                        'p',
                        null,
                        'Type: String'
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        'Description: real filename'
                    )
                )
            )
        ),
        _react2.default.createElement(
            'p',
            null,
            'File insertion functionality will not be available if ',
            _react2.default.createElement(
                'strong',
                null,
                'onInsertFile'
            ),
            ' callback function is not defined.'
        )
    );
};

exports.default = Usage;

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".DocumentationTable{border:1px solid rgba(142,155,169,.23);border-radius:3px;overflow:hidden}.DocumentationTable__table{width:100%;border-collapse:collapse}.DocumentationTable tr:nth-last-child(-n+1) td,.DocumentationTable tr:nth-last-child(-n+1) th{border-bottom:none}.DocumentationTable td,.DocumentationTable th{border-left:1px solid rgba(142,155,169,.23);border-bottom:1px solid rgba(142,155,169,.23)}.DocumentationTable td:first-child,.DocumentationTable th:first-child{width:200px;border-left:none}.DocumentationTable th{padding:20px;font-family:montserratbold,Helvetica,Arial,sans-serif;font-size:14px;line-height:1;color:rgba(51,51,51,.9);text-align:left;text-transform:uppercase}.DocumentationTable td{padding:24px 20px;font-family:montserratregular,Helvetica,Arial,sans-serif;font-size:16px;line-height:1.2;color:#333;text-align:left}.DocumentationTable td:first-child{font-family:montserratsemibold,Helvetica,Arial,sans-serif}.DocumentationTable td p{margin-bottom:.4em}", ""]);

// exports


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _DocumentationSection = __webpack_require__(7);

var _DocumentationSection2 = _interopRequireDefault(_DocumentationSection);

var _DocumentationCode = __webpack_require__(11);

var _DocumentationCode2 = _interopRequireDefault(_DocumentationCode);

var _DocumentationInfo = __webpack_require__(135);

var _DocumentationInfo2 = _interopRequireDefault(_DocumentationInfo);

var _DocumentationTable = __webpack_require__(12);

var _DocumentationTable2 = _interopRequireDefault(_DocumentationTable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Renders Server component
 * @returns {JSX}
 */
var Server = function Server() {
    return _react2.default.createElement(
        _DocumentationSection2.default,
        { id: 'server' },
        _react2.default.createElement(
            'h1',
            null,
            'Server'
        ),
        _react2.default.createElement(
            'p',
            null,
            '\xABFile.Shark\xBB media manager is only an ui solution at current moment, so you will have to write the server part by yourself. Here you can find the list with request formats that our media manager will send to your server and response format that media manager expects to receive in response.'
        ),
        _react2.default.createElement(
            'h3',
            null,
            'Folders'
        ),
        _react2.default.createElement(
            'p',
            null,
            'This functionality allows you to create, edit and delete folders. If you are sure that you do not need this functionality, you can skip this part and then you will have one folder by default.'
        ),
        _react2.default.createElement(
            'h4',
            null,
            _react2.default.createElement(
                'ul',
                null,
                _react2.default.createElement(
                    'li',
                    null,
                    'POST /yourFolderEndpoint - create a new folder'
                )
            )
        ),
        _react2.default.createElement(
            'p',
            null,
            'Request parameters:'
        ),
        _react2.default.createElement(
            _DocumentationTable2.default,
            null,
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'th',
                    null,
                    'Param'
                ),
                _react2.default.createElement(
                    'th',
                    null,
                    'Type and Description'
                )
            ),
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'td',
                    null,
                    'title'
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                        'p',
                        null,
                        'Type: String'
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        'Description: folder name'
                    )
                )
            )
        ),
        _react2.default.createElement(
            'p',
            null,
            'Expected response:'
        ),
        _react2.default.createElement(
            _DocumentationCode2.default,
            null,
            '\n    {\n        created: "15.10.2018",\n        description: "",\n        id: "dfd8c3e4-45b3-4278-acba-467b42dae5f9",\n        title: "Nature",\n        total: "0"\n    }\n                '
        ),
        _react2.default.createElement(
            _DocumentationTable2.default,
            null,
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'th',
                    null,
                    'Param'
                ),
                _react2.default.createElement(
                    'th',
                    null,
                    'Type and Description'
                )
            ),
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'td',
                    null,
                    'created'
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                        'p',
                        null,
                        'Type: String'
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        'Description: creation date'
                    )
                )
            ),
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'td',
                    null,
                    'description'
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                        'p',
                        null,
                        'Type: String'
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        'Description: folder description'
                    )
                )
            ),
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'td',
                    null,
                    'id'
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                        'p',
                        null,
                        'Type: String'
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        'Description: created folder id'
                    )
                )
            ),
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'td',
                    null,
                    'title'
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                        'p',
                        null,
                        'Type: String'
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        'Description: created folder title'
                    )
                )
            ),
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'td',
                    null,
                    'total'
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                        'p',
                        null,
                        'Type: String'
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        'Description: number of files in folder'
                    )
                )
            )
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
            'h4',
            null,
            _react2.default.createElement(
                'ul',
                null,
                _react2.default.createElement(
                    'li',
                    null,
                    'PUT /yourFolderEndpoint - edit folder'
                )
            )
        ),
        _react2.default.createElement(
            'p',
            null,
            'Request parameters:'
        ),
        _react2.default.createElement(
            _DocumentationTable2.default,
            null,
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'th',
                    null,
                    'Param'
                ),
                _react2.default.createElement(
                    'th',
                    null,
                    'Type and Description'
                )
            ),
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'td',
                    null,
                    'title'
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                        'p',
                        null,
                        'Type: String'
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        'Description: folder name'
                    )
                )
            ),
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'td',
                    null,
                    'description'
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                        'p',
                        null,
                        'Type: String'
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        'Description: folder description'
                    )
                )
            )
        ),
        _react2.default.createElement(
            'p',
            null,
            'Expected response:'
        ),
        _react2.default.createElement(
            _DocumentationCode2.default,
            null,
            '\n    {\n        created: "15.10.2018",\n        description: "",\n        id: "dfd8c3e4-45b3-4278-acba-467b42dae5f9",\n        title: "Nature",\n        total: "0"\n    }\n                '
        ),
        _react2.default.createElement(
            _DocumentationTable2.default,
            null,
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'th',
                    null,
                    'Param'
                ),
                _react2.default.createElement(
                    'th',
                    null,
                    'Type and Description'
                )
            ),
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'td',
                    null,
                    'created'
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                        'p',
                        null,
                        'Type: String'
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        'Description: creation date'
                    )
                )
            ),
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'td',
                    null,
                    'description'
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                        'p',
                        null,
                        'Type: String'
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        'Description: folder description'
                    )
                )
            ),
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'td',
                    null,
                    'id'
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                        'p',
                        null,
                        'Type: String'
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        'Description: edited folder id'
                    )
                )
            ),
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'td',
                    null,
                    'title'
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                        'p',
                        null,
                        'Type: String'
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        'Description: edited folder title'
                    )
                )
            ),
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'td',
                    null,
                    'total'
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                        'p',
                        null,
                        'Type: String'
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        'Description: number of files in folder'
                    )
                )
            )
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
            'h4',
            null,
            _react2.default.createElement(
                'ul',
                null,
                _react2.default.createElement(
                    'li',
                    null,
                    'DELETE /yourFolderEndpoint/idOfDeletedFolder - delete folder'
                )
            )
        ),
        _react2.default.createElement(
            'p',
            null,
            'No request parameters.'
        ),
        _react2.default.createElement(
            'p',
            null,
            'Expected response:'
        ),
        _react2.default.createElement(
            _DocumentationCode2.default,
            null,
            'dfd8c3e4-45b3-4278-acba-467b42dae5f9'
        ),
        _react2.default.createElement(_DocumentationInfo2.default, { type: 'String', description: 'id of deleted folder' }),
        _react2.default.createElement(
            'h3',
            null,
            'Files'
        ),
        _react2.default.createElement(
            'p',
            null,
            'This functionality allows you to upload, edit and delete files.'
        ),
        _react2.default.createElement(
            'h4',
            null,
            _react2.default.createElement(
                'ul',
                null,
                _react2.default.createElement(
                    'li',
                    null,
                    'GET /yourFileEndpoint - get the list of files'
                )
            )
        ),
        _react2.default.createElement(
            'p',
            null,
            'Request parameters:'
        ),
        _react2.default.createElement(
            _DocumentationTable2.default,
            null,
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'th',
                    null,
                    'Param'
                ),
                _react2.default.createElement(
                    'th',
                    null,
                    'Type and Description'
                )
            ),
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'td',
                    null,
                    'folder'
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                        'p',
                        null,
                        'Type: String'
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        'Description: current folder id'
                    )
                )
            ),
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'td',
                    null,
                    'page'
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                        'p',
                        null,
                        'Type: String'
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        'Description: current page (offset)'
                    )
                )
            ),
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'td',
                    null,
                    'type'
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                        'p',
                        null,
                        'Type: String'
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        'Description: files extension (from filters)'
                    )
                )
            ),
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'td',
                    null,
                    'startDate'
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                        'p',
                        null,
                        'Type: String'
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        'Description: file creation start date in ISO format (from filters)'
                    )
                )
            ),
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'td',
                    null,
                    'endDate'
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                        'p',
                        null,
                        'Type: String'
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        'Description: file creation end date in ISO format (from filters)'
                    )
                )
            )
        ),
        _react2.default.createElement(
            'p',
            null,
            'Expected response:'
        ),
        _react2.default.createElement(
            _DocumentationCode2.default,
            null,
            '\n    {\n        hasMore: false,\n        list: [\n            {\n                alt: "",\n                created: "15.10.2018",\n                description: "",\n                dimensions: "",\n                extension: "zip",\n                filename: "favicon_package_v0.16.zip",\n                folder: "7f55583d-d42f-4bc3-9853-7f64b93f3c76",\n                id: "b713c14b-9fea-49fd-bda7-e4c5e9045a46",\n                size: "49.22 KB",\n                title: "favicon_package_v0.16.zip",\n                url: "http://localhost:3500/assets/images/b713c14b-9fea-49fd-bda7-e4c5e9045a46/file/favicon_package_v0.16.zip"\n            }\n        ]\n    }\n                '
        ),
        _react2.default.createElement(
            _DocumentationTable2.default,
            null,
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'th',
                    null,
                    'Param'
                ),
                _react2.default.createElement(
                    'th',
                    null,
                    'Type and Description'
                )
            ),
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'td',
                    null,
                    'hasMore'
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                        'p',
                        null,
                        'Type: String'
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        'Description: Determines if there are more files to show. If true then media manager will do a request to get new files when user scrolls to the end of the current file list. If false, there will be no request.'
                    )
                )
            ),
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'td',
                    null,
                    'list'
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                        'p',
                        null,
                        'Type: String'
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        'Description: List of files to be shown.'
                    )
                )
            )
        ),
        _react2.default.createElement(
            'p',
            null,
            'Each file in the received list should be an object with the following properties:'
        ),
        _react2.default.createElement(
            _DocumentationTable2.default,
            null,
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'th',
                    null,
                    'Param'
                ),
                _react2.default.createElement(
                    'th',
                    null,
                    'Type and Description'
                )
            ),
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'td',
                    null,
                    'alt'
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                        'p',
                        null,
                        'Type: String'
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        'Description: alt text if the file is image'
                    )
                )
            ),
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'td',
                    null,
                    'created'
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                        'p',
                        null,
                        'Type: String'
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        'Description: file creation date'
                    )
                )
            ),
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'td',
                    null,
                    'description'
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                        'p',
                        null,
                        'Type: String'
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        'Description: file description'
                    )
                )
            ),
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'td',
                    null,
                    'dimensions'
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                        'p',
                        null,
                        'Type: String'
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        'Description: file dimensions if the file is image'
                    )
                )
            ),
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'td',
                    null,
                    'extension'
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                        'p',
                        null,
                        'Type: String'
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        'Description: file extension'
                    )
                )
            ),
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'td',
                    null,
                    'filename'
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                        'p',
                        null,
                        'Type: String'
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        'Description: real filename'
                    )
                )
            ),
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'td',
                    null,
                    'folder'
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                        'p',
                        null,
                        'Type: String'
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        'Description: the id of folder in which the file was uploaded'
                    )
                )
            ),
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'td',
                    null,
                    'id'
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                        'p',
                        null,
                        'Type: String'
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        'Description: file id'
                    )
                )
            ),
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'td',
                    null,
                    'size'
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                        'p',
                        null,
                        'Type: String'
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        'Description: file size'
                    )
                )
            ),
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'td',
                    null,
                    'title'
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                        'p',
                        null,
                        'Type: String'
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        'Description: file title'
                    )
                )
            ),
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'td',
                    null,
                    'url'
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                        'p',
                        null,
                        'Type: String'
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        'Description: file url'
                    )
                )
            )
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
            'h4',
            null,
            _react2.default.createElement(
                'ul',
                null,
                _react2.default.createElement(
                    'li',
                    null,
                    'POST /yourFileEndpoint - upload file'
                )
            )
        ),
        _react2.default.createElement(
            'p',
            null,
            'Request parameters:'
        ),
        _react2.default.createElement(
            _DocumentationTable2.default,
            null,
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'th',
                    null,
                    'Param'
                ),
                _react2.default.createElement(
                    'th',
                    null,
                    'Type and Description'
                )
            ),
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'td',
                    null,
                    'folder'
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                        'p',
                        null,
                        'Type: String'
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        'Description: id of the folder in which the file will be uploaded'
                    )
                )
            ),
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'td',
                    null,
                    'file'
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                        'p',
                        null,
                        'Type: Binary'
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        'Description: We use \xABdropzone.js\xBB library to upload files to the server. Checkout their documentation to handle ',
                        _react2.default.createElement(
                            'a',
                            { target: '_blank', href: 'http://www.dropzonejs.com/#server-side-implementation' },
                            'basic file uploads on the server'
                        )
                    )
                )
            )
        ),
        _react2.default.createElement(
            'p',
            null,
            'Expected response:'
        ),
        _react2.default.createElement(
            _DocumentationCode2.default,
            null,
            '\n    {\n        alt: "",\n        created: "15.10.2018",\n        description: "",\n        dimensions: "1200x900",\n        extension: "webp",\n        filename: "s1.webp",\n        folder: "7f55583d-d42f-4bc3-9853-7f64b93f3c76",\n        id: "af638588-2e61-4005-915b-f7a6eb22d3b7",\n        size: "214.59 KB",\n        title: "s1.webp",\n        url: "http://localhost:3500/assets/images/af638588-2e61-4005-915b-f7a6eb22d3b7/file/s1.webp"\n    }\n\n                '
        ),
        _react2.default.createElement(
            _DocumentationTable2.default,
            null,
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'th',
                    null,
                    'Param'
                ),
                _react2.default.createElement(
                    'th',
                    null,
                    'Type and Description'
                )
            ),
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'td',
                    null,
                    'alt'
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                        'p',
                        null,
                        'Type: String'
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        'Description: alt text if the file is image'
                    )
                )
            ),
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'td',
                    null,
                    'created'
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                        'p',
                        null,
                        'Type: String'
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        'Description: file creation date'
                    )
                )
            ),
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'td',
                    null,
                    'description'
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                        'p',
                        null,
                        'Type: String'
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        'Description: file description'
                    )
                )
            ),
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'td',
                    null,
                    'dimensions'
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                        'p',
                        null,
                        'Type: String'
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        'Description: file dimensions if the file is image'
                    )
                )
            ),
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'td',
                    null,
                    'extension'
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                        'p',
                        null,
                        'Type: String'
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        'Description: file extension'
                    )
                )
            ),
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'td',
                    null,
                    'filename'
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                        'p',
                        null,
                        'Type: String'
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        'Description: real filename'
                    )
                )
            ),
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'td',
                    null,
                    'folder'
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                        'p',
                        null,
                        'Type: String'
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        'Description: the id of the folder in which the file was uploaded'
                    )
                )
            ),
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'td',
                    null,
                    'id'
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                        'p',
                        null,
                        'Type: String'
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        'Description: file id'
                    )
                )
            ),
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'td',
                    null,
                    'size'
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                        'p',
                        null,
                        'Type: String'
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        'Description: file size'
                    )
                )
            ),
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'td',
                    null,
                    'title'
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                        'p',
                        null,
                        'Type: String'
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        'Description: file title'
                    )
                )
            ),
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'td',
                    null,
                    'url'
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                        'p',
                        null,
                        'Type: String'
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        'Description: file url'
                    )
                )
            )
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
            'h4',
            null,
            _react2.default.createElement(
                'ul',
                null,
                _react2.default.createElement(
                    'li',
                    null,
                    'PUT /yourFileEndpoint - edit file'
                )
            )
        ),
        _react2.default.createElement(
            'p',
            null,
            'Request parameters:'
        ),
        _react2.default.createElement(
            _DocumentationTable2.default,
            null,
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'th',
                    null,
                    'Param'
                ),
                _react2.default.createElement(
                    'th',
                    null,
                    'Type and Description'
                )
            ),
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'td',
                    null,
                    'title'
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                        'p',
                        null,
                        'Type: String'
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        'Description: file title'
                    )
                )
            ),
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'td',
                    null,
                    'description'
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                        'p',
                        null,
                        'Type: String'
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        'Description: file description'
                    )
                )
            ),
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'td',
                    null,
                    'alt'
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                        'p',
                        null,
                        'Type: String'
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        'Description: file alt text'
                    )
                )
            )
        ),
        _react2.default.createElement(
            'p',
            null,
            'Expected response:'
        ),
        _react2.default.createElement(
            _DocumentationCode2.default,
            null,
            '\n    {\n        alt: "",\n        created: "15.10.2018",\n        description: "",\n        dimensions: "1200x900",\n        extension: "webp",\n        filename: "s1.webp",\n        folder: "7f55583d-d42f-4bc3-9853-7f64b93f3c76",\n        id: "af638588-2e61-4005-915b-f7a6eb22d3b7",\n        size: "214.59 KB",\n        title: "s1.webp",\n        url: "http://localhost:3500/assets/images/af638588-2e61-4005-915b-f7a6eb22d3b7/file/s1.webp"\n    }\n\n                '
        ),
        _react2.default.createElement(
            _DocumentationTable2.default,
            null,
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'th',
                    null,
                    'Param'
                ),
                _react2.default.createElement(
                    'th',
                    null,
                    'Type and Description'
                )
            ),
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'td',
                    null,
                    'alt'
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                        'p',
                        null,
                        'Type: String'
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        'Description: alt text if the file is image'
                    )
                )
            ),
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'td',
                    null,
                    'created'
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                        'p',
                        null,
                        'Type: String'
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        'Description: file creation date'
                    )
                )
            ),
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'td',
                    null,
                    'description'
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                        'p',
                        null,
                        'Type: String'
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        'Description: file description'
                    )
                )
            ),
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'td',
                    null,
                    'dimensions'
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                        'p',
                        null,
                        'Type: String'
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        'Description: file dimensions if the file is image'
                    )
                )
            ),
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'td',
                    null,
                    'extension'
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                        'p',
                        null,
                        'Type: String'
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        'Description: file extension'
                    )
                )
            ),
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'td',
                    null,
                    'filename'
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                        'p',
                        null,
                        'Type: String'
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        'Description: real filename'
                    )
                )
            ),
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'td',
                    null,
                    'folder'
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                        'p',
                        null,
                        'Type: String'
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        'Description: the id of the folder in which the file was uploaded'
                    )
                )
            ),
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'td',
                    null,
                    'id'
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                        'p',
                        null,
                        'Type: String'
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        'Description: file id'
                    )
                )
            ),
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'td',
                    null,
                    'size'
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                        'p',
                        null,
                        'Type: String'
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        'Description: file size'
                    )
                )
            ),
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'td',
                    null,
                    'title'
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                        'p',
                        null,
                        'Type: String'
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        'Description: file title'
                    )
                )
            ),
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'td',
                    null,
                    'url'
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                        'p',
                        null,
                        'Type: String'
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        'Description: file url'
                    )
                )
            )
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
            'h4',
            null,
            _react2.default.createElement(
                'ul',
                null,
                _react2.default.createElement(
                    'li',
                    null,
                    'DELETE /yourFileEndpoint/idOfDeletedFile - delete file'
                )
            )
        ),
        _react2.default.createElement(
            'p',
            null,
            'No request parameters.'
        ),
        _react2.default.createElement(
            'p',
            null,
            'Expected response:'
        ),
        _react2.default.createElement(
            _DocumentationCode2.default,
            null,
            'dfd8c3e4-45b3-4278-acba-467b42dae5f9'
        ),
        _react2.default.createElement(_DocumentationInfo2.default, { type: 'String', description: 'id of deleted file' })
    );
};

exports.default = Server;

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

__webpack_require__(136);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Renders DocumentationInfo component
 * @param {Object}
 * @returns {JSX}
 */
var DocumentationInfo = function DocumentationInfo(_ref) {
    var title = _ref.title,
        type = _ref.type,
        description = _ref.description;
    return _react2.default.createElement(
        'div',
        { className: 'DocumentationInfo' },
        _react2.default.createElement(
            'div',
            { className: 'DocumentationInfo__header' },
            title
        ),
        _react2.default.createElement(
            'div',
            { className: 'DocumentationInfo__content' },
            type && _react2.default.createElement(
                'div',
                { className: 'DocumentationInfo__item' },
                'Type:',
                ' ',
                type
            ),
            description && _react2.default.createElement(
                'div',
                { className: 'DocumentationInfo__item' },
                'Description:',
                ' ',
                description
            )
        )
    );
};

DocumentationInfo.propTypes = {
    title: _propTypes2.default.string,
    type: _propTypes2.default.string,
    description: _propTypes2.default.string
};

exports.default = DocumentationInfo;

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".DocumentationInfo__header{margin-bottom:10px;font-family:montserratsemibold,Helvetica,Arial,sans-serif;font-size:16px;line-height:1;color:#333}.DocumentationInfo__content{padding:20px 25px;background:rgba(63,58,87,.03);border-radius:4px;overflow:hidden}.DocumentationInfo__item{margin-bottom:5px}.DocumentationInfo__item:nth-last-child(-n+1){margin-bottom:0}", ""]);

// exports


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _DocumentationSection = __webpack_require__(7);

var _DocumentationSection2 = _interopRequireDefault(_DocumentationSection);

var _DocumentationTable = __webpack_require__(12);

var _DocumentationTable2 = _interopRequireDefault(_DocumentationTable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Renders BrowsersSupport component
 * @returns {JSX}
 */
var BrowsersSupport = function BrowsersSupport() {
    return _react2.default.createElement(
        _DocumentationSection2.default,
        { id: 'browsers-support' },
        _react2.default.createElement(
            'h1',
            null,
            'Browsers support'
        ),
        _react2.default.createElement(
            _DocumentationTable2.default,
            null,
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'th',
                    null,
                    'Browser'
                ),
                _react2.default.createElement(
                    'th',
                    null,
                    'Versions'
                )
            ),
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'td',
                    null,
                    'Chrome'
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    'last 10 versions'
                )
            ),
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'td',
                    null,
                    'Firefox'
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    'last 10 versions'
                )
            ),
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'td',
                    null,
                    'Opera'
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    'last 5 versions'
                )
            ),
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'td',
                    null,
                    'Safari'
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    'last 4 versions'
                )
            ),
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'td',
                    null,
                    'Edge'
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    'last 3 versions'
                )
            ),
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'td',
                    null,
                    'IE'
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    '11'
                )
            )
        )
    );
};

exports.default = BrowsersSupport;

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".Documentation{padding-left:40px;padding-right:40px;font-family:montserratregular,Helvetica,Arial,sans-serif;font-size:15px;line-height:1.6}@media screen and (max-width:767px){.Documentation{padding-left:15px;padding-right:15px}}.Documentation h1{margin-bottom:.5em;font-size:34px}.Documentation h2{font-size:22px}.Documentation h3{margin-bottom:.5em;font-size:20px}.Documentation h4{margin-bottom:1em;font-size:16px}.Documentation .DocumentationInfo,.Documentation .DocumentationTable,.Documentation ol,.Documentation p,.Documentation pre,.Documentation ul{margin-bottom:1.5em}.Documentation .DocumentationInfo:nth-last-child(-n+1),.Documentation .DocumentationTable:nth-last-child(-n+1),.Documentation ol:nth-last-child(-n+1),.Documentation p:nth-last-child(-n+1),.Documentation pre:nth-last-child(-n+1),.Documentation ul:nth-last-child(-n+1){margin-bottom:0}.Documentation ol li,.Documentation ul li{margin-bottom:.3em}.Documentation ol li:nth-last-child(-n+1),.Documentation ul li:nth-last-child(-n+1){margin-bottom:0}.Documentation__wrapper{max-width:1220px;margin-left:auto;margin-right:auto}.Documentation__wrapper:after{content:\" \";display:block;clear:both}.Documentation__content{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.Documentation__aside{position:relative;width:24.05063%;padding-top:40px;box-shadow:17px 0 17px -17px rgba(63,58,87,.2)}@media screen and (max-width:1024px){.Documentation__aside{display:none}}.Documentation__panel{position:fixed;max-width:200px}.Documentation__title{margin-bottom:1.6em}.Documentation__item,.Documentation__list{list-style:none;margin:0;padding:0}.Documentation__list li{margin-bottom:1em!important}.Documentation__list li:nth-last-child(-n+1){margin-bottom:0!important}.Documentation__list li a{text-decoration:none}.Documentation__list li h4{font-family:montserratregular,Helvetica,Arial,sans-serif}.Documentation__main{width:71.83544%;padding-top:54px}@media screen and (max-width:1024px){.Documentation__main{width:100%}}", ""]);

// exports


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(10);
exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "*,:after,:before{box-sizing:border-box}html{position:relative;min-width:320px}body,html{height:100%}body{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:100%;background:#fff}img{max-width:100%;height:auto}button{margin:0;padding:0;background:none;border:0;text-decoration:none;line-height:normal;outline:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}@font-face{font-family:montserratbold;src:url(" + escape(__webpack_require__(22)) + ");src:url(" + escape(__webpack_require__(22)) + "?#iefix) format(\"embedded-opentype\"),url(" + escape(__webpack_require__(140)) + "#montserratbold) format(\"svg\"),url(" + escape(__webpack_require__(141)) + ") format(\"woff2\"),url(" + escape(__webpack_require__(142)) + ") format(\"woff\"),url(" + escape(__webpack_require__(143)) + ") format(\"truetype\");font-weight:400;font-style:normal}@font-face{font-family:montserratitalic;src:url(" + escape(__webpack_require__(23)) + ");src:url(" + escape(__webpack_require__(23)) + "?#iefix) format(\"embedded-opentype\"),url(" + escape(__webpack_require__(144)) + "#montserratitalic) format(\"svg\"),url(" + escape(__webpack_require__(145)) + ") format(\"woff2\"),url(" + escape(__webpack_require__(146)) + ") format(\"woff\"),url(" + escape(__webpack_require__(147)) + ") format(\"truetype\");font-weight:400;font-style:normal}@font-face{font-family:montserratlight;src:url(" + escape(__webpack_require__(24)) + ");src:url(" + escape(__webpack_require__(24)) + "?#iefix) format(\"embedded-opentype\"),url(" + escape(__webpack_require__(148)) + "#montserratlight) format(\"svg\"),url(" + escape(__webpack_require__(149)) + ") format(\"woff2\"),url(" + escape(__webpack_require__(150)) + ") format(\"woff\"),url(" + escape(__webpack_require__(151)) + ") format(\"truetype\");font-weight:400;font-style:normal}@font-face{font-family:montserratmedium;src:url(" + escape(__webpack_require__(25)) + ");src:url(" + escape(__webpack_require__(25)) + "?#iefix) format(\"embedded-opentype\"),url(" + escape(__webpack_require__(152)) + "#montserratmedium) format(\"svg\"),url(" + escape(__webpack_require__(153)) + ") format(\"woff2\"),url(" + escape(__webpack_require__(154)) + ") format(\"woff\"),url(" + escape(__webpack_require__(155)) + ") format(\"truetype\");font-weight:400;font-style:normal}@font-face{font-family:montserratregular;src:url(" + escape(__webpack_require__(26)) + ");src:url(" + escape(__webpack_require__(26)) + "?#iefix) format(\"embedded-opentype\"),url(" + escape(__webpack_require__(156)) + "#montserratregular) format(\"svg\"),url(" + escape(__webpack_require__(157)) + ") format(\"woff2\"),url(" + escape(__webpack_require__(158)) + ") format(\"woff\"),url(" + escape(__webpack_require__(159)) + ") format(\"truetype\");font-weight:400;font-style:normal}@font-face{font-family:montserratsemibold;src:url(" + escape(__webpack_require__(27)) + ");src:url(" + escape(__webpack_require__(27)) + "?#iefix) format(\"embedded-opentype\"),url(" + escape(__webpack_require__(160)) + "#montserratsemibold) format(\"svg\"),url(" + escape(__webpack_require__(161)) + ") format(\"woff2\"),url(" + escape(__webpack_require__(162)) + ") format(\"woff\"),url(" + escape(__webpack_require__(163)) + ") format(\"truetype\");font-weight:400;font-style:normal}a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{margin:0;padding:0;border:0;font:inherit;font-size:100%;vertical-align:baseline}body{font-weight:400;font-family:montserratlight,Helvetica,Arial,sans-serif;font-size:15px;line-height:1.4;color:#333;-webkit-font-smoothing:antialiased}iframe,img,p{margin-bottom:1.3em}iframe,img{position:relative;display:block;max-width:100%;margin-left:auto;margin-right:auto}h1,h2,h3,h4,h5,h6{color:rgba(51,51,51,.9)}h1{font-family:montserratsemibold,Helvetica,Arial,sans-serif;font-size:54px;line-height:1.1}@media screen and (max-width:1024px){h1{font-size:44px;line-height:1.2}}@media screen and (max-width:767px){h1{font-size:30px;line-height:1.2}}h2{font-family:montserratsemibold,Helvetica,Arial,sans-serif;font-size:44px;line-height:1.2}@media screen and (max-width:1024px){h2{font-size:30px;line-height:1.2}}@media screen and (max-width:767px){h2{font-size:25px;line-height:1.2}}h3{font-family:montserratsemibold,Helvetica,Arial,sans-serif;font-size:20px;line-height:1.2}@media screen and (max-width:767px){h3{font-size:18px;line-height:1.2}}h4{font-family:montserratsemibold,Helvetica,Arial,sans-serif;font-size:18px;line-height:1.2}@media screen and (max-width:767px){h4{font-size:16px;line-height:1.2}}h5{font-family:montserratlight,Helvetica,Arial,sans-serif;font-size:18px;line-height:1.5}@media screen and (max-width:767px){h5{font-size:15px}}h6{font-size:12px;line-height:1.3}a{color:#333;text-decoration:underline}ol,ul{margin-bottom:1.3em;padding-left:25.2px}ul li{list-style:disc;list-style-position:outside}strong{font-family:montserratbold,Helvetica,Arial,sans-serif}i{font-family:montserratitalic,Helvetica,Arial,sans-serif}", ""]);

// exports


/***/ }),
/* 140 */
/***/ (function(module, exports) {

module.exports = "/fonts/montserrat/bold/bold.svg";

/***/ }),
/* 141 */
/***/ (function(module, exports) {

module.exports = "/fonts/montserrat/bold/bold.woff2";

/***/ }),
/* 142 */
/***/ (function(module, exports) {

module.exports = "/fonts/montserrat/bold/bold.woff";

/***/ }),
/* 143 */
/***/ (function(module, exports) {

module.exports = "/fonts/montserrat/bold/bold.ttf";

/***/ }),
/* 144 */
/***/ (function(module, exports) {

module.exports = "/fonts/montserrat/italic/italic.svg";

/***/ }),
/* 145 */
/***/ (function(module, exports) {

module.exports = "/fonts/montserrat/italic/italic.woff2";

/***/ }),
/* 146 */
/***/ (function(module, exports) {

module.exports = "/fonts/montserrat/italic/italic.woff";

/***/ }),
/* 147 */
/***/ (function(module, exports) {

module.exports = "/fonts/montserrat/italic/italic.ttf";

/***/ }),
/* 148 */
/***/ (function(module, exports) {

module.exports = "/fonts/montserrat/light/light.svg";

/***/ }),
/* 149 */
/***/ (function(module, exports) {

module.exports = "/fonts/montserrat/light/light.woff2";

/***/ }),
/* 150 */
/***/ (function(module, exports) {

module.exports = "/fonts/montserrat/light/light.woff";

/***/ }),
/* 151 */
/***/ (function(module, exports) {

module.exports = "/fonts/montserrat/light/light.ttf";

/***/ }),
/* 152 */
/***/ (function(module, exports) {

module.exports = "/fonts/montserrat/medium/medium.svg";

/***/ }),
/* 153 */
/***/ (function(module, exports) {

module.exports = "/fonts/montserrat/medium/medium.woff2";

/***/ }),
/* 154 */
/***/ (function(module, exports) {

module.exports = "/fonts/montserrat/medium/medium.woff";

/***/ }),
/* 155 */
/***/ (function(module, exports) {

module.exports = "/fonts/montserrat/medium/medium.ttf";

/***/ }),
/* 156 */
/***/ (function(module, exports) {

module.exports = "/fonts/montserrat/regular/regular.svg";

/***/ }),
/* 157 */
/***/ (function(module, exports) {

module.exports = "/fonts/montserrat/regular/regular.woff2";

/***/ }),
/* 158 */
/***/ (function(module, exports) {

module.exports = "/fonts/montserrat/regular/regular.woff";

/***/ }),
/* 159 */
/***/ (function(module, exports) {

module.exports = "/fonts/montserrat/regular/regular.ttf";

/***/ }),
/* 160 */
/***/ (function(module, exports) {

module.exports = "/fonts/montserrat/semibold/semibold.svg";

/***/ }),
/* 161 */
/***/ (function(module, exports) {

module.exports = "/fonts/montserrat/semibold/semibold.woff2";

/***/ }),
/* 162 */
/***/ (function(module, exports) {

module.exports = "/fonts/montserrat/semibold/semibold.woff";

/***/ }),
/* 163 */
/***/ (function(module, exports) {

module.exports = "/fonts/montserrat/semibold/semibold.ttf";

/***/ })
/******/ ]);
});
//# sourceMappingURL=static.812928f2.js.map