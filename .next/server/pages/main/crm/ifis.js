module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"pages/main/crm/ifis": 0
/******/ 	};
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../../../" + ({}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/main/crm/ifis.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./app/components/AppNotification/NotificationItem.js":
/*!************************************************************!*\
  !*** ./app/components/AppNotification/NotificationItem.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const NotificationItem = ({
  notification
}) => {
  const {
    icon,
    image,
    title,
    time
  } = notification;
  return __jsx("li", {
    className: "gx-media"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
    className: "gx-size-40 gx-mr-3",
    alt: image,
    src: image
  }), __jsx("div", {
    className: "gx-media-body gx-align-self-center"
  }, __jsx("p", {
    className: "gx-fs-sm gx-mb-0"
  }, title), __jsx("i", {
    className: `icon icon-${icon} gx-pr-2`
  }), " ", __jsx("span", {
    className: "gx-meta-date"
  }, __jsx("small", null, time))));
};

/* harmony default export */ __webpack_exports__["default"] = (NotificationItem);

/***/ }),

/***/ "./app/components/AppNotification/data.js":
/*!************************************************!*\
  !*** ./app/components/AppNotification/data.js ***!
  \************************************************/
/*! exports provided: notifications */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notifications", function() { return notifications; });
const notifications = [{
  image: 'https://via.placeholder.com/150x150',
  title: "Stella Johnson has recently posted an album",
  time: "4:10 PM",
  icon: "thumb-up gx-text-blue"
}, {
  image: 'https://via.placeholder.com/150x150',
  title: "Alex Brown has shared Martin Guptil's post",
  time: "5:18 PM",
  icon: "chat gx-text-grey"
}, {
  image: 'https://via.placeholder.com/640x420',
  title: "Domnic Brown has sent you a group invitation for Global Health",
  time: "5:36 PM",
  icon: "birthday text-info"
}, {
  image: 'https://via.placeholder.com/150x150',
  title: "John Smith has birthday today",
  time: "5:54 PM",
  icon: "birthday gx-text-warning"
}, {
  image: 'https://via.placeholder.com/150x150',
  title: "Chris has updated his profile picture",
  time: "5:25 PM",
  icon: "profile gx-text-grey"
}];

/***/ }),

/***/ "./app/components/AppNotification/index.js":
/*!*************************************************!*\
  !*** ./app/components/AppNotification/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NotificationItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NotificationItem */ "./app/components/AppNotification/NotificationItem.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data */ "./app/components/AppNotification/data.js");
/* harmony import */ var _util_CustomScrollbars__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../util/CustomScrollbars */ "./util/CustomScrollbars.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const AppNotification = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "gx-popover-header"
  }, __jsx("h3", {
    className: "gx-mb-0"
  }, "Notifications"), __jsx("i", {
    className: "gx-icon-btn icon icon-charvlet-down"
  })), __jsx(_util_CustomScrollbars__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "gx-popover-scroll"
  }, __jsx("ul", {
    className: "gx-sub-popover"
  }, _data__WEBPACK_IMPORTED_MODULE_2__["notifications"].map((notification, index) => __jsx(_NotificationItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
    key: index,
    notification: notification
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (AppNotification);

/***/ }),

/***/ "./app/components/CircularProgress/index.js":
/*!**************************************************!*\
  !*** ./app/components/CircularProgress/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const CircularProgress = ({
  className
}) => __jsx("div", {
  className: `loader ${className}`
}, __jsx("img", {
  src: "/images/loader.svg",
  alt: "loader",
  style: {
    height: 60
  }
}));

/* harmony default export */ __webpack_exports__["default"] = (CircularProgress);
CircularProgress.defaultProps = {
  className: ''
};

/***/ }),

/***/ "./app/components/MailNotification/NotificationItem.js":
/*!*************************************************************!*\
  !*** ./app/components/MailNotification/NotificationItem.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const NotificationItem = ({
  notification
}) => {
  const {
    image,
    badge,
    name,
    time,
    message
  } = notification;
  return __jsx("li", {
    className: "gx-media"
  }, __jsx("div", {
    className: "gx-user-thumb gx-mr-3"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
    className: "gx-size-40",
    alt: image,
    src: image
  }), badge > 0 ? __jsx("span", {
    className: "gx-badge gx-badge-danger gx-text-white gx-rounded-circle"
  }, badge) : null), __jsx("div", {
    className: "gx-media-body"
  }, __jsx("div", {
    className: "gx-flex-row gx-justify-content-between gx-align-items-center"
  }, __jsx("h5", {
    className: "gx-text-capitalize gx-user-name gx-mb-0"
  }, __jsx("span", {
    className: "gx-link"
  }, name)), __jsx("span", {
    className: "gx-meta-date"
  }, __jsx("small", null, time))), __jsx("p", {
    className: "gx-fs-sm"
  }, message), __jsx("span", {
    className: "gx-btn gx-btn-sm gx-top2 gx-text-muted"
  }, __jsx("i", {
    className: "icon icon-reply gx-pr-2"
  }), "Reply"), __jsx("span", {
    className: "gx-btn gx-btn-sm gx-top2 gx-text-muted"
  }, __jsx("i", {
    className: "icon icon-custom-view gx-pr-2"
  }), "Read")));
};

/* harmony default export */ __webpack_exports__["default"] = (NotificationItem);

/***/ }),

/***/ "./app/components/MailNotification/data.js":
/*!*************************************************!*\
  !*** ./app/components/MailNotification/data.js ***!
  \*************************************************/
/*! exports provided: notifications */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notifications", function() { return notifications; });
const notifications = [{
  id: 1,
  image: "https://via.placeholder.com/150",
  name: "Domnic Brown",
  time: "6:19 PM",
  message: "There are many variations of passages of...",
  badge: 5
}, {
  id: 2,
  image: "https://via.placeholder.com/150",
  name: "John Smith",
  time: "4:18 PM",
  message: "Lorem Ipsum is simply dummy text of the..."
}, {
  id: 3,
  image: "https://via.placeholder.com/150",
  name: "John Smith",
  time: "7:10 PM",
  message: "The point of using Lorem Ipsum is that it has a...",
  badge: 8
}, {
  id: 4,
  image: "https://via.placeholder.com/150",
  name: "alex dolgove",
  time: "5:10 PM",
  message: "It is a long established fact that a reader will..."
}, {
  id: 5,
  image: "https://via.placeholder.com/150",
  name: "Domnic Harris",
  time: "7:35 PM",
  message: "All the Lorem Ipsum generators on the...",
  badge: 3
}];

/***/ }),

/***/ "./app/components/MailNotification/index.js":
/*!**************************************************!*\
  !*** ./app/components/MailNotification/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NotificationItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NotificationItem */ "./app/components/MailNotification/NotificationItem.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data */ "./app/components/MailNotification/data.js");
/* harmony import */ var _util_CustomScrollbars__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../util/CustomScrollbars */ "./util/CustomScrollbars.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const MailNotification = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "gx-popover-header"
  }, __jsx("h3", {
    className: "gx-mb-0"
  }, "Messages"), __jsx("i", {
    className: "gx-icon-btn icon icon-charvlet-down"
  })), __jsx(_util_CustomScrollbars__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "gx-popover-scroll"
  }, __jsx("ul", {
    className: "gx-sub-popover"
  }, _data__WEBPACK_IMPORTED_MODULE_2__["notifications"].map((notification, index) => __jsx(_NotificationItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
    key: index,
    notification: notification
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (MailNotification);

/***/ }),

/***/ "./app/components/SearchBox/index.js":
/*!*******************************************!*\
  !*** ./app/components/SearchBox/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const SearchBox = ({
  styleName,
  placeholder,
  onChange,
  value
}) => {
  return __jsx("div", {
    className: `gx-search-bar ${styleName}`
  }, __jsx("div", {
    className: "gx-form-group"
  }, __jsx("input", {
    className: "ant-input",
    type: "search",
    placeholder: placeholder,
    onChange: onChange,
    value: value
  }), __jsx("span", {
    className: "gx-search-icon gx-pointer"
  }, __jsx("i", {
    className: "icon icon-search"
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (SearchBox);
SearchBox.defaultProps = {
  styleName: "",
  value: ""
};

/***/ }),

/***/ "./app/components/UserInfo/index.js":
/*!******************************************!*\
  !*** ./app/components/UserInfo/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_actions_Auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../redux/actions/Auth */ "./redux/actions/Auth.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





class UserInfo extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const userMenuOptions = __jsx("ul", {
      className: "gx-user-popover"
    }, __jsx("li", null, "My Account"), __jsx("li", null, "Connections"), __jsx("li", {
      onClick: () => this.props.userSignOut()
    }, "Logout"));

    return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Popover"], {
      overlayClassName: "gx-popover-horizantal",
      placement: "bottomRight",
      content: userMenuOptions,
      trigger: "click"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {
      src: "/images/images/avatar/domnic-harris.png",
      className: "gx-avatar gx-pointer",
      alt: ""
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(null, {
  userSignOut: _redux_actions_Auth__WEBPACK_IMPORTED_MODULE_3__["userSignOut"]
})(UserInfo));

/***/ }),

/***/ "./app/core/Customizer/index.js":
/*!**************************************!*\
  !*** ./app/core/Customizer/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// import React, {useState} from "react";
// import {Button, Drawer, Radio} from "antd";
// import {useDispatch, useSelector} from "react-redux";
// import CustomScrollbars from "../../../util/CustomScrollbars";
// import {setThemeType} from "../../../redux/actions/Setting";
//
// import {
//   BLUE,
//   BLUE_DARK_TEXT_COLOR,
//   BLUE_SEC,
//   DARK_BLUE,
//   DARK_BLUE_DARK_TEXT_COLOR,
//   DARK_BLUE_SEC,
//   DEEP_ORANGE,
//   DEEP_ORANGE_DARK_TEXT_COLOR,
//   DEEP_ORANGE_SEC,
//   LAYOUT_TYPE_BOXED,
//   LAYOUT_TYPE_FRAMED,
//   LAYOUT_TYPE_FULL,
//   LIGHT_BLUE,
//   LIGHT_BLUE_DARK_TEXT_COLOR,
//   LIGHT_BLUE_SEC,
//   LIGHT_PURPLE,
//   LIGHT_PURPLE_1,
//   LIGHT_PURPLE_1_DARK_TEXT_COLOR,
//   LIGHT_PURPLE_1_SEC,
//   LIGHT_PURPLE_2,
//   LIGHT_PURPLE_2_DARK_TEXT_COLOR,
//   LIGHT_PURPLE_2_SEC,
//   LIGHT_PURPLE_DARK_TEXT_COLOR,
//   LIGHT_PURPLE_SEC,
//   NAV_STYLE_ABOVE_HEADER,
//   NAV_STYLE_BELOW_HEADER,
//   NAV_STYLE_DARK_HORIZONTAL,
//   NAV_STYLE_DEFAULT_HORIZONTAL,
//   NAV_STYLE_DRAWER,
//   NAV_STYLE_FIXED,
//   NAV_STYLE_INSIDE_HEADER_HORIZONTAL,
//   NAV_STYLE_MINI_SIDEBAR,
//   NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR,
//   NAV_STYLE_NO_HEADER_MINI_SIDEBAR,
//   ORANGE,
//   ORANGE_DARK_TEXT_COLOR,
//   ORANGE_SEC,
//   RED,
//   RED_DARK_TEXT_COLOR,
//   RED_SEC,
//   THEME_TYPE_DARK,
//   THEME_TYPE_LITE,
//   THEME_TYPE_SEMI_DARK
// } from "../../../constants/ThemeSetting";
// import {onNavStyleChange} from "../../../redux/actions";
//
// const CustomizerSystem = () => {
//
//   const [isCustomizerOpened, setIsCustomizerOpened] = useState(false);
//   const dispatch = useDispatch();
//
//   const themeType = useSelector(({settings}) => settings.themeType);
//   const themeColor = useSelector(({settings}) => settings.themeColor);
//   const navStyle = useSelector(({settings}) => settings.navStyle);
//   const layoutType = useSelector(({settings}) => settings.layoutType);
//
//   console.log(" in  customizer", themeColor);
//
//   const handleColorChange = (filename) => {
//     // console.log("filename", filename);
//     // let link = document.createElement('link');
//     // link.type = 'text/css';
//     // link.rel = 'stylesheet';
//     // link.className = 'gx-style';
//     // link.href = `/css/${filename}.css`;
//
//     // setTimeout(() => {
//     //   const children = document.getElementsByClassName('gx-style');
//     //
//     //   if (children.length > 1) {
//     //     for (let index = 0; index < children.length; index++) {
//     //       if ((index + 1) < children.length) {
//     //         const child = children[index];
//     //         child.parentNode.removeChild(child);
//     //       }
//     //     }
//     //   }
//     // }, 10000);
//     // console.log("my link ",link);
//     // document.body.appendChild(link);
//     // dispatch(setThemeColor(filename));
//   };
//
//   const toggleCustomizer = () => {
//     setIsCustomizerOpened(!isCustomizerOpened);
//   };
//
//   const onThemeTypeChange = (e) => {
//     dispatch(setThemeType(e.target.value));
//   };
//
//   const onNavStyleChanges = (navStyle) => {
//     dispatch(onNavStyleChange(navStyle));
//   };
//
//   const getCustomizerContent = () => {
//
//     // if (themeType === THEME_TYPE_DARK) {
//     //   document.body.classList.add('dark-theme');
//     //   let link = document.createElement('link');
//     //   link.type = 'text/css';
//     //   link.rel = 'stylesheet';
//     //   link.href = "/css/dark_theme.css";
//     //   link.className = 'style_dark_theme';
//     //   document.body.appendChild(link);
//     // } else if (document.body.classList.contains('dark-theme')) {
//     //   document.body.classList.remove('dark-theme');
//     //   const children = document.getElementsByClassName('style_dark_theme');
//     //   if (children.length > 1) {
//     //     for (let index = 0; index < children.length; index++) {
//     //       if (index < children.length) {
//     //         const child = children[index];
//     //         child.parentNode.removeChild(child);
//     //       }
//     //     }
//     //   }
//     }
//
//     return <CustomScrollbars className="gx-customizer">
//       <div className="gx-customizer-item">
//         <h6 className="gx-mb-3 gx-text-uppercase">Theme</h6>
//         <Radio.Group value={themeType} onChange={onThemeTypeChange}>
//           <Radio.Button value={THEME_TYPE_LITE}>Lite</Radio.Button>
//           <Radio.Button value={THEME_TYPE_SEMI_DARK}>Semi Dark</Radio.Button>
//           <Radio.Button value={THEME_TYPE_DARK}>Dark</Radio.Button>
//         </Radio.Group>
//       </div>
//       <div className="gx-customizer-item">
//         {getPresetColors(themeColor)}
//       </div>
//
//       <h6 className="gx-mb-3 gx-text-uppercase">Nav Style</h6>
//
//       {getNavStyles(navStyle)}
//
//       <h6 className="gx-mb-3 gx-text-uppercase">Layout</h6>
//
//       {getLayoutsTypes(layoutType)}
//     </CustomScrollbars>
//   };
//
//   const handleThemeColor = (fileName) => {
//     // handleColorChange(fileName);
//   };
//
//   const handleLayoutTypes = (layoutType) => {
//     // dispatch(onLayoutTypeChange(layoutType));
//   };
//
//   const getPresetColors = (themeColor) => {
//     return <ul className="gx-color-option gx-list-inline">
//
//       <li>
//         <span
//           onClick={() => handleThemeColor("light_purple")}
//           style={{backgroundColor: LIGHT_PURPLE_SEC, color: LIGHT_PURPLE_DARK_TEXT_COLOR}}
//           className={`gx-link gx-color-light-purple ${themeColor === LIGHT_PURPLE && 'active'}`}/>
//       </li>
//       <li>
//         <span
//           onClick={() => handleThemeColor("red")}
//           style={{backgroundColor: RED_SEC, color: RED_DARK_TEXT_COLOR}}
//           className={`gx-link gx-color-red ${themeColor === RED && 'active'}`}/>
//       </li>
//       <li>
//         <span
//           onClick={() => handleThemeColor("blue")}
//           style={{backgroundColor: BLUE_SEC, color: BLUE_DARK_TEXT_COLOR}}
//           className={`gx-link gx-color-blue ${themeColor === BLUE && 'active'}`}/>
//       </li>
//       <li>
//         <span
//           onClick={() => handleThemeColor("dark_blue")}
//           style={{backgroundColor: DARK_BLUE_SEC, color: DARK_BLUE_DARK_TEXT_COLOR}}
//           className={`gx-link gx-color-dark-blue ${themeColor === DARK_BLUE && 'active'}`}/>
//       </li>
//
//       <li>
//         <span
//           onClick={() => handleThemeColor("orange")}
//           style={{backgroundColor: ORANGE_SEC, color: ORANGE_DARK_TEXT_COLOR}}
//           className={`gx-link gx-color-orange ${themeColor === ORANGE && 'active'}`}/>
//       </li>
//
//       <li>
//         <span
//           onClick={() => handleThemeColor("light_blue")}
//           style={{backgroundColor: LIGHT_BLUE_SEC, color: LIGHT_BLUE_DARK_TEXT_COLOR}}
//           className={`gx-link gx-color-light-blue ${themeColor === LIGHT_BLUE && 'active'}`}/>
//       </li>
//
//       <li>
//         <span
//           onClick={() => handleThemeColor("deep_orange")}
//           style={{backgroundColor: DEEP_ORANGE_SEC, color: DEEP_ORANGE_DARK_TEXT_COLOR}}
//           className={`gx-link gx-color-deep-orange ${themeColor === DEEP_ORANGE && 'active'}`}/>
//       </li>
//
//       <li>
//         <span
//           onClick={() => handleThemeColor("light_purple_1")}
//           style={{
//             backgroundColor: LIGHT_PURPLE_1_SEC,
//             color: LIGHT_PURPLE_1_DARK_TEXT_COLOR
//           }}
//           className={`gx-link gx-color-light-purple1 ${themeColor === LIGHT_PURPLE_1 && 'active'}`}/>
//       </li>
//
//       <li>
//         <span
//           onClick={() => handleThemeColor("light_purple_2")}
//           style={{
//             backgroundColor: LIGHT_PURPLE_2_SEC,
//             color: LIGHT_PURPLE_2_DARK_TEXT_COLOR
//           }}
//           className={`gx-link gx-color-light-purple2 ${themeColor === LIGHT_PURPLE_2 && 'active'}`}/>
//       </li>
//     </ul>
//   };
//
//   const getLayoutsTypes = (layoutType) => {
//     return <ul className="gx-layout-option gx-list-inline">
//       <li>
//         <span onClick={() => handleLayoutTypes(LAYOUT_TYPE_FRAMED)}
//               className={`gx-pointer ${layoutType === LAYOUT_TYPE_FRAMED && 'active'}`}>
//         <img src={('/images/layouts/framed.png')} alt='framed'/>
//         </span>
//       </li>
//       <li>
//         <span onClick={() => handleLayoutTypes(LAYOUT_TYPE_FULL)}
//               className={`gx-pointer ${layoutType === LAYOUT_TYPE_FULL && 'active'}`}>
//         <img src={('/images/layouts/full width.png')} alt='full width'/>
//         </span>
//       </li>
//       <li>
//         <span onClick={() => handleLayoutTypes(LAYOUT_TYPE_BOXED)}
//               className={`gx-pointer ${layoutType === LAYOUT_TYPE_BOXED && 'active'}`}>
//         <img src={('/images/layouts/boxed.png')} alt='boxed'/>
//         </span>
//       </li>
//     </ul>
//   };
//
//   const getNavStyles = (navStyle) => {
//     return <ul className="gx-nav-option gx-list-inline">
//       <li>
//         <span onClick={() => onNavStyleChanges(NAV_STYLE_FIXED)}
//               className={`gx-pointer ${navStyle === NAV_STYLE_FIXED && 'active'}`}>
//         <img src={('/images/layouts/fixed.png')} alt='fixed'/>
//         </span>
//       </li>
//       <li>
//         <span onClick={() => onNavStyleChanges(NAV_STYLE_MINI_SIDEBAR)}
//               className={`gx-pointer ${navStyle === NAV_STYLE_MINI_SIDEBAR && 'active'}`}>
//         <img src={('/images/layouts/mini sidebar.png')} alt='mini sidebar'/>
//         </span>
//       </li>
//       <li>
//         <span onClick={() => onNavStyleChanges(NAV_STYLE_DRAWER)}
//               className={`gx-pointer ${navStyle === NAV_STYLE_DRAWER && 'active'}`}>
//         <img src={('/images/layouts/drawer nav.png')} alt='drawer nav'/>
//         </span>
//       </li>
//       <li>
//         <span onClick={() => onNavStyleChanges(NAV_STYLE_NO_HEADER_MINI_SIDEBAR)}
//               className={`gx-pointer ${navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR && 'active'}`}>
//         <img src={('/images/layouts/no header mini sidebar.png')} alt='no hader mini sidebar'/>
//         </span>
//       </li>
//       <li>
//         <span onClick={() => onNavStyleChanges(NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR)}
//               className={`gx-pointer ${navStyle === NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR && 'active'}`}>
//         <img src={('/images/layouts/vertical no header.png')} alt='vertical no header'/>
//         </span>
//       </li>
//       <li>
//         <span onClick={() => onNavStyleChanges(NAV_STYLE_DEFAULT_HORIZONTAL)}
//               className={`gx-pointer ${navStyle === NAV_STYLE_DEFAULT_HORIZONTAL && 'active'}`}>
//         <img src={('/images/layouts/default horizontal.png')} alt='default horizontal'/>
//         </span>
//       </li>
//       <li>
//         <span onClick={() => onNavStyleChanges(NAV_STYLE_DARK_HORIZONTAL)}
//               className={`gx-pointer ${navStyle === NAV_STYLE_DARK_HORIZONTAL && 'active'}`}>
//         <img src={('/images/layouts/dark horizontal.png')} alt='dark horizontal'/>
//         </span>
//       </li>
//       <li>
//         <span onClick={() => onNavStyleChanges(NAV_STYLE_INSIDE_HEADER_HORIZONTAL)}
//               className={`gx-pointer ${navStyle === NAV_STYLE_INSIDE_HEADER_HORIZONTAL && 'active'}`}>
//         <img src={('/images/layouts/inside header horizontal.png')} alt='inside header horizontal'/>
//         </span>
//       </li>
//       <li>
//         <span onClick={() => onNavStyleChanges(NAV_STYLE_BELOW_HEADER)}
//               className={`gx-pointer ${navStyle === NAV_STYLE_BELOW_HEADER && 'active'}`}>
//         <img src={('/images/layouts/below header.png')} alt='below header'/>
//         </span>
//       </li>
//
//       <li>
//         <span onClick={() => onNavStyleChanges(NAV_STYLE_ABOVE_HEADER)}
//               className={`gx-pointer ${navStyle === NAV_STYLE_ABOVE_HEADER && 'active'}`}>
//         <img src={('/images/layouts/top to header.png')} alt='top to header'/>
//         </span>
//       </li>
//     </ul>
//   };
//
//   return (
//     <>
//       <Drawer
//         placement="right"
//         closable={false}
//         onClose={toggleCustomizer}
//         visible={isCustomizerOpened}>
//         {
//           getCustomizerContent()
//         }
//       </Drawer>
//       <div className="gx-customizer-option">
//         <Button type="primary" onClick={toggleCustomizer}>
//           <i className="icon icon-setting fxicon-hc-spin gx-d-block"/>
//         </Button>
//       </div>
//     </>
//   );
// };
//
// export default CustomizerSystem;


const Index = () => {
  return __jsx("div", null);
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./app/core/Layout/index.js":
/*!**********************************!*\
  !*** ./app/core/Layout/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Sidebar */ "./app/core/Sidebar/index.js");
/* harmony import */ var _Topbar_HorizontalDefault__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Topbar/HorizontalDefault */ "./app/core/Topbar/HorizontalDefault/index.js");
/* harmony import */ var _Topbar_HorizontalDark__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Topbar/HorizontalDark */ "./app/core/Topbar/HorizontalDark/index.js");
/* harmony import */ var _Topbar_InsideHeader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Topbar/InsideHeader */ "./app/core/Topbar/InsideHeader/index.js");
/* harmony import */ var _Topbar_AboveHeader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Topbar/AboveHeader */ "./app/core/Topbar/AboveHeader/index.js");
/* harmony import */ var _Topbar_BelowHeader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Topbar/BelowHeader */ "./app/core/Topbar/BelowHeader/index.js");
/* harmony import */ var _Topbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Topbar */ "./app/core/Topbar/index.js");
/* harmony import */ var _util_config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../util/config */ "./util/config.js");
/* harmony import */ var _util_config__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_util_config__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../constants/ThemeSetting */ "./constants/ThemeSetting.js");
/* harmony import */ var _Topbar_NoHeaderNotification__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Topbar/NoHeaderNotification */ "./app/core/Topbar/NoHeaderNotification/index.js");
/* harmony import */ var _lngProvider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../lngProvider */ "./lngProvider/index.js");
/* harmony import */ var _Customizer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../Customizer */ "./app/core/Customizer/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
















const {
  Content,
  Footer
} = antd__WEBPACK_IMPORTED_MODULE_1__["Layout"];

const AppLayout = ({
  children
}) => {
  const {
    width,
    themeType,
    layoutType,
    locale,
    navStyle
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(({
    settings
  }) => settings);

  const getContainerClass = navStyle => {
    switch (navStyle) {
      case _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_12__["NAV_STYLE_DARK_HORIZONTAL"]:
        return "gx-container-wrap";

      case _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_12__["NAV_STYLE_DEFAULT_HORIZONTAL"]:
        return "gx-container-wrap";

      case _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_12__["NAV_STYLE_INSIDE_HEADER_HORIZONTAL"]:
        return "gx-container-wrap";

      case _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_12__["NAV_STYLE_BELOW_HEADER"]:
        return "gx-container-wrap";

      case _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_12__["NAV_STYLE_ABOVE_HEADER"]:
        return "gx-container-wrap";

      default:
        return '';
    }
  };

  const getNavStyles = navStyle => {
    switch (navStyle) {
      case _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_12__["NAV_STYLE_DEFAULT_HORIZONTAL"]:
        return __jsx(_Topbar_HorizontalDefault__WEBPACK_IMPORTED_MODULE_5__["default"], null);

      case _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_12__["NAV_STYLE_DARK_HORIZONTAL"]:
        return __jsx(_Topbar_HorizontalDark__WEBPACK_IMPORTED_MODULE_6__["default"], null);

      case _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_12__["NAV_STYLE_INSIDE_HEADER_HORIZONTAL"]:
        return __jsx(_Topbar_InsideHeader__WEBPACK_IMPORTED_MODULE_7__["default"], null);

      case _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_12__["NAV_STYLE_ABOVE_HEADER"]:
        return __jsx(_Topbar_AboveHeader__WEBPACK_IMPORTED_MODULE_8__["default"], null);

      case _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_12__["NAV_STYLE_BELOW_HEADER"]:
        return __jsx(_Topbar_BelowHeader__WEBPACK_IMPORTED_MODULE_9__["default"], null);

      case _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_12__["NAV_STYLE_FIXED"]:
        return __jsx(_Topbar__WEBPACK_IMPORTED_MODULE_10__["default"], null);

      case _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_12__["NAV_STYLE_DRAWER"]:
        return __jsx(_Topbar__WEBPACK_IMPORTED_MODULE_10__["default"], null);

      case _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_12__["NAV_STYLE_MINI_SIDEBAR"]:
        return __jsx(_Topbar__WEBPACK_IMPORTED_MODULE_10__["default"], null);

      case _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_12__["NAV_STYLE_NO_HEADER_MINI_SIDEBAR"]:
        return __jsx(_Topbar_NoHeaderNotification__WEBPACK_IMPORTED_MODULE_13__["default"], null);

      case _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_12__["NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR"]:
        return __jsx(_Topbar_NoHeaderNotification__WEBPACK_IMPORTED_MODULE_13__["default"], null);

      default:
        return null;
    }
  };

  const getSidebar = (navStyle, width) => {
    if (width < _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_12__["TAB_SIZE"]) {
      return __jsx(_Sidebar__WEBPACK_IMPORTED_MODULE_4__["default"], null);
    }

    switch (navStyle) {
      case _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_12__["NAV_STYLE_FIXED"]:
        return __jsx(_Sidebar__WEBPACK_IMPORTED_MODULE_4__["default"], null);

      case _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_12__["NAV_STYLE_DRAWER"]:
        return __jsx(_Sidebar__WEBPACK_IMPORTED_MODULE_4__["default"], null);

      case _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_12__["NAV_STYLE_MINI_SIDEBAR"]:
        return __jsx(_Sidebar__WEBPACK_IMPORTED_MODULE_4__["default"], null);

      case _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_12__["NAV_STYLE_NO_HEADER_MINI_SIDEBAR"]:
        return __jsx(_Sidebar__WEBPACK_IMPORTED_MODULE_4__["default"], null);

      case _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_12__["NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR"]:
        return __jsx(_Sidebar__WEBPACK_IMPORTED_MODULE_4__["default"], null);

      default:
        return null;
    }
  };

  let bodyClass = "";

  if (themeType === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_12__["THEME_TYPE_DARK"]) {
    bodyClass = "dark-theme";
  }

  const currentAppLocale = _lngProvider__WEBPACK_IMPORTED_MODULE_14__["default"][locale.locale];
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["ConfigProvider"], {
    locale: currentAppLocale.antd
  }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__["IntlProvider"], {
    locale: currentAppLocale.locale,
    messages: currentAppLocale.messages
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Layout"], {
    className: `gx-app-layout ${bodyClass}`
  }, getSidebar(navStyle, width), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Layout"], null, getNavStyles(navStyle), __jsx(Content, {
    className: `gx-layout-content ${getContainerClass(navStyle)}`
  }, __jsx("div", {
    className: "gx-main-content-wrapper"
  }, children), __jsx(Footer, null, __jsx("div", {
    className: "gx-layout-footer-content"
  }, _util_config__WEBPACK_IMPORTED_MODULE_11__["footerText"])))), __jsx(_Customizer__WEBPACK_IMPORTED_MODULE_15__["default"], null))));
};

const mapStateToProps = ({
  settings
}) => {
  const {
    width,
    themeType,
    layoutType,
    navStyle,
    locale
  } = settings;
  return {
    width,
    themeType,
    layoutType,
    navStyle,
    locale
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps)(AppLayout));

/***/ }),

/***/ "./app/core/Sidebar/AppsNavigation.js":
/*!********************************************!*\
  !*** ./app/core/Sidebar/AppsNavigation.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const AppsNavigation = () => __jsx("ul", {
  className: "gx-app-nav"
}, __jsx("li", null, __jsx("i", {
  className: "icon icon-search-new"
})), __jsx("li", null, __jsx("i", {
  className: "icon icon-notification"
})), __jsx("li", null, __jsx("i", {
  className: "icon icon-chat-new"
})));

/* harmony default export */ __webpack_exports__["default"] = (AppsNavigation);

/***/ }),

/***/ "./app/core/Sidebar/SidebarContent.js":
/*!********************************************!*\
  !*** ./app/core/Sidebar/SidebarContent.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _util_CustomScrollbars__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../util/CustomScrollbars */ "./util/CustomScrollbars.js");
/* harmony import */ var _SidebarLogo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SidebarLogo */ "./app/core/Sidebar/SidebarLogo.js");
/* harmony import */ var _UserProfile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./UserProfile */ "./app/core/Sidebar/UserProfile.js");
/* harmony import */ var _AppsNavigation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AppsNavigation */ "./app/core/Sidebar/AppsNavigation.js");
/* harmony import */ var _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../constants/ThemeSetting */ "./constants/ThemeSetting.js");
/* harmony import */ var _util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../util/IntlMessages */ "./util/IntlMessages.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../redux/actions */ "./redux/actions/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












const SubMenu = antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].SubMenu;
const MenuItemGroup = antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].ItemGroup;

const SidebarContent = () => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["useDispatch"])();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  let {
    navStyle,
    themeType,
    pathname
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["useSelector"])(({
    settings
  }) => settings);

  const getNoHeaderClass = navStyle => {
    if (navStyle === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_8__["NAV_STYLE_NO_HEADER_MINI_SIDEBAR"] || navStyle === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_8__["NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR"]) {
      return "gx-no-header-notifications";
    }

    return "";
  };

  const getNavStyleSubMenuClass = navStyle => {
    if (navStyle === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_8__["NAV_STYLE_NO_HEADER_MINI_SIDEBAR"]) {
      return "gx-no-header-submenu-popup";
    }

    return "";
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_11__["setPathName"])(router.pathname));
  }, [router.pathname]);
  const selectedKeys = pathname.substr(1);
  const defaultOpenKeys = selectedKeys.split('/')[1];
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_SidebarLogo__WEBPACK_IMPORTED_MODULE_5__["default"], null), __jsx("div", {
    className: "gx-sidebar-content"
  }, __jsx("div", {
    className: `gx-sidebar-notifications ${getNoHeaderClass(navStyle)}`
  }, __jsx(_UserProfile__WEBPACK_IMPORTED_MODULE_6__["default"], null), __jsx(_AppsNavigation__WEBPACK_IMPORTED_MODULE_7__["default"], null)), __jsx(_util_CustomScrollbars__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "gx-layout-sider-scrollbar"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
    defaultOpenKeys: [defaultOpenKeys],
    selectedKeys: [selectedKeys],
    theme: themeType === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_8__["THEME_TYPE_LITE"] ? 'lite' : 'dark',
    mode: "inline"
  }, __jsx(MenuItemGroup, {
    key: "main",
    className: "gx-menu-group",
    title: __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
      id: "sidebar.main"
    })
  }, __jsx(SubMenu, {
    key: "dashboard",
    popupClassName: getNavStyleSubMenuClass(navStyle),
    title: __jsx("span", null, __jsx("i", {
      className: "icon icon-dasbhoard"
    }), __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
      id: "sidebar.dashboard"
    })))
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "main/dashboard/crypto"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/main/dashboard/crypto"
  }, __jsx("a", null, __jsx("i", {
    className: "icon icon-crypto"
  }), __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "sidebar.dashboard.crypto"
  }))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "main/dashboard/crm"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/main/dashboard/crm"
  }, __jsx("a", null, __jsx("i", {
    className: "icon icon-crm"
  }), __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "sidebar.dashboard.crm"
  }))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "main/dashboard/listing"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/main/dashboard/listing"
  }, __jsx("a", null, __jsx("i", {
    className: "icon icon-listing-dbrd"
  }), __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "sidebar.dashboard.listing"
  })))))), __jsx(SubMenu, {
    key: "crm",
    popupClassName: getNavStyleSubMenuClass(navStyle),
    title: __jsx("span", null, __jsx("i", {
      className: "icon icon-crm"
    }), __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
      id: "sidebar.dashboard.crm"
    })))
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "main/crm/ifis"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/main/crm/ifis"
  }, __jsx("a", null, __jsx("i", {
    className: "icon icon-widgets"
  }), __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "sidebar.ifis"
  }))))))))));
};

SidebarContent.propTypes = {};
/* harmony default export */ __webpack_exports__["default"] = (SidebarContent);

/***/ }),

/***/ "./app/core/Sidebar/SidebarLogo.js":
/*!*****************************************!*\
  !*** ./app/core/Sidebar/SidebarLogo.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_actions_Setting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../redux/actions/Setting */ "./redux/actions/Setting.js");
/* harmony import */ var _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../constants/ThemeSetting */ "./constants/ThemeSetting.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const SidebarLogo = () => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const {
    width,
    themeType,
    navCollapsed
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(({
    settings
  }) => settings);
  let navStyle = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(({
    settings
  }) => settings.navStyle);

  if (width < _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_4__["TAB_SIZE"] && navStyle === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_4__["NAV_STYLE_FIXED"]) {
    navStyle = _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_4__["NAV_STYLE_DRAWER"];
  }

  return __jsx("div", {
    className: "gx-layout-sider-header"
  }, navStyle === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_4__["NAV_STYLE_FIXED"] || navStyle === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_4__["NAV_STYLE_MINI_SIDEBAR"] ? __jsx("div", {
    className: "gx-linebar"
  }, __jsx("i", {
    className: `gx-icon-btn icon icon-${navStyle === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_4__["NAV_STYLE_MINI_SIDEBAR"] ? 'menu-unfold' : 'menu-fold'} ${themeType !== _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_4__["THEME_TYPE_LITE"] ? 'gx-text-white' : ''}`,
    onClick: () => {
      if (navStyle === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_4__["NAV_STYLE_DRAWER"]) {
        dispatch(Object(_redux_actions_Setting__WEBPACK_IMPORTED_MODULE_3__["toggleCollapsedSideNav"])(!navCollapsed));
      } else if (navStyle === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_4__["NAV_STYLE_FIXED"]) {
        dispatch(Object(_redux_actions_Setting__WEBPACK_IMPORTED_MODULE_3__["onNavStyleChange"])(_constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_4__["NAV_STYLE_MINI_SIDEBAR"]));
      } else if (navStyle === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_4__["NAV_STYLE_NO_HEADER_MINI_SIDEBAR"]) {
        dispatch(Object(_redux_actions_Setting__WEBPACK_IMPORTED_MODULE_3__["toggleCollapsedSideNav"])(!navCollapsed));
      } else {
        dispatch(Object(_redux_actions_Setting__WEBPACK_IMPORTED_MODULE_3__["onNavStyleChange"])(_constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_4__["NAV_STYLE_FIXED"]));
      }
    }
  })) : null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/"
  }, __jsx("a", {
    className: "gx-site-logo"
  }, navStyle === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_4__["NAV_STYLE_NO_HEADER_MINI_SIDEBAR"] && width >= _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_4__["TAB_SIZE"] ? __jsx("img", {
    alt: "lo",
    src: "/images/w-logo.png"
  }) : themeType === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_4__["THEME_TYPE_LITE"] ? __jsx("img", {
    alt: "logo1",
    src: "/images/logo-white.png"
  }) : __jsx("img", {
    alt: "logo2",
    src: "/images/logo.png"
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (SidebarLogo);

/***/ }),

/***/ "./app/core/Sidebar/UserProfile.js":
/*!*****************************************!*\
  !*** ./app/core/Sidebar/UserProfile.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_actions_Auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../redux/actions/Auth */ "./redux/actions/Auth.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const UserProfile = () => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();

  const userMenuOptions = __jsx("ul", {
    className: "gx-user-popover"
  }, __jsx("li", null, "My Account"), __jsx("li", null, "Connections"), __jsx("li", {
    onClick: () => dispatch(Object(_redux_actions_Auth__WEBPACK_IMPORTED_MODULE_3__["userSignOut"])())
  }, "Logout"));

  return __jsx("div", {
    className: "gx-flex-row gx-align-items-center gx-mb-4 gx-avatar-row"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Popover"], {
    placement: "bottomRight",
    content: userMenuOptions,
    trigger: "click"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {
    src: "/images/avatar/domnic-harris.png",
    className: "gx-size-40 gx-pointer gx-mr-3",
    alt: ""
  }), __jsx("span", {
    className: "gx-avatar-name"
  }, "Rob Farnandies", __jsx("i", {
    className: "icon icon-chevron-down gx-fs-xxs gx-ml-2"
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (UserProfile);

/***/ }),

/***/ "./app/core/Sidebar/index.js":
/*!***********************************!*\
  !*** ./app/core/Sidebar/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _SidebarContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SidebarContent */ "./app/core/Sidebar/SidebarContent.js");
/* harmony import */ var _redux_actions_Setting__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../redux/actions/Setting */ "./redux/actions/Setting.js");
/* harmony import */ var _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../constants/ThemeSetting */ "./constants/ThemeSetting.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const {
  Sider
} = antd__WEBPACK_IMPORTED_MODULE_2__["Layout"];

const Sidebar = () => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const {
    themeType,
    navCollapsed,
    width,
    navStyle
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(({
    settings
  }) => settings);

  const onToggleCollapsedNav = () => {
    dispatch(Object(_redux_actions_Setting__WEBPACK_IMPORTED_MODULE_4__["toggleCollapsedSideNav"])(!navCollapsed));
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    window.addEventListener('resize', () => {
      dispatch(Object(_redux_actions_Setting__WEBPACK_IMPORTED_MODULE_4__["updateWindowWidth"])(window.innerWidth));
    });
  }, [dispatch]);
  let drawerStyle = "gx-collapsed-sidebar";

  if (navStyle === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_5__["NAV_STYLE_FIXED"]) {
    drawerStyle = "";
  } else if (navStyle === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_5__["NAV_STYLE_NO_HEADER_MINI_SIDEBAR"]) {
    drawerStyle = "gx-mini-sidebar gx-mini-custom-sidebar";
  } else if (navStyle === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_5__["NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR"]) {
    drawerStyle = "gx-custom-sidebar";
  } else if (navStyle === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_5__["NAV_STYLE_MINI_SIDEBAR"]) {
    drawerStyle = "gx-mini-sidebar";
  } else if (navStyle === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_5__["NAV_STYLE_DRAWER"]) {
    drawerStyle = "gx-collapsed-sidebar";
  }

  if ((navStyle === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_5__["NAV_STYLE_FIXED"] || navStyle === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_5__["NAV_STYLE_MINI_SIDEBAR"] || navStyle === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_5__["NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR"]) && width < _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_5__["TAB_SIZE"]) {
    drawerStyle = "gx-collapsed-sidebar";
  }

  return __jsx(Sider, {
    className: `gx-app-sidebar ${drawerStyle} ${themeType !== _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_5__["THEME_TYPE_LITE"] ? 'gx-layout-sider-dark' : null}`,
    trigger: null,
    collapsed: width < _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_5__["TAB_SIZE"] ? false : navStyle === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_5__["NAV_STYLE_MINI_SIDEBAR"] || navStyle === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_5__["NAV_STYLE_NO_HEADER_MINI_SIDEBAR"],
    theme: themeType === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_5__["THEME_TYPE_LITE"] ? "lite" : "dark",
    collapsible: true
  }, navStyle === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_5__["NAV_STYLE_DRAWER"] || width < _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_5__["TAB_SIZE"] ? __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Drawer"], {
    className: `gx-drawer-sidebar ${themeType !== _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_5__["THEME_TYPE_LITE"] ? 'gx-drawer-sidebar-dark' : null}`,
    placement: "left",
    closable: false,
    onClose: onToggleCollapsedNav,
    visible: navCollapsed
  }, __jsx(_SidebarContent__WEBPACK_IMPORTED_MODULE_3__["default"], null)) : __jsx(_SidebarContent__WEBPACK_IMPORTED_MODULE_3__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

/***/ }),

/***/ "./app/core/Topbar/AboveHeader/index.js":
/*!**********************************************!*\
  !*** ./app/core/Topbar/AboveHeader/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _util_CustomScrollbars__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../util/CustomScrollbars */ "./util/CustomScrollbars.js");
/* harmony import */ var _languageData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../languageData */ "./app/core/Topbar/languageData.js");
/* harmony import */ var _components_SearchBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/SearchBox */ "./app/components/SearchBox/index.js");
/* harmony import */ var _components_UserInfo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/UserInfo */ "./app/components/UserInfo/index.js");
/* harmony import */ var _components_AppNotification__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/AppNotification */ "./app/components/AppNotification/index.js");
/* harmony import */ var _components_MailNotification__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/MailNotification */ "./app/components/MailNotification/index.js");
/* harmony import */ var _redux_actions_Setting__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../redux/actions/Setting */ "./redux/actions/Setting.js");
/* harmony import */ var _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../constants/ThemeSetting */ "./constants/ThemeSetting.js");
/* harmony import */ var _HorizontalNav__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../HorizontalNav */ "./app/core/Topbar/HorizontalNav.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _util_IntlMessages__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../util/IntlMessages */ "./util/IntlMessages.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;















const {
  Header
} = antd__WEBPACK_IMPORTED_MODULE_1__["Layout"];
const Option = antd__WEBPACK_IMPORTED_MODULE_1__["Select"].Option;

const menu = __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
  onClick: handleMenuClick
}, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
  key: "1"
}, "Products"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
  key: "2"
}, "Blog"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
  key: "3"
}, "Apps"));

function handleMenuClick() {
  antd__WEBPACK_IMPORTED_MODULE_1__["message"].info('Click on menu item.');
}

function handleChange(value) {
  console.log(`selected ${value}`);
}

const AboveHeader = () => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  const {
    0: searchText,
    1: setSearchText
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const locale = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(({
    settings
  }) => settings.locale);
  const navCollapsed = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(({
    settings
  }) => settings.navCollapsed);
  const width = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(({
    settings
  }) => settings.width);

  const languageMenu = () => __jsx(_util_CustomScrollbars__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "gx-popover-lang-scroll"
  }, __jsx("ul", {
    className: "gx-sub-popover"
  }, _languageData__WEBPACK_IMPORTED_MODULE_5__["default"].map(language => __jsx("li", {
    className: "gx-media gx-pointer",
    key: JSON.stringify(language),
    onClick: e => dispatch(Object(_redux_actions_Setting__WEBPACK_IMPORTED_MODULE_10__["switchLanguage"])(language))
  }, __jsx("i", {
    className: `flag flag-24 gx-mr-2 flag-${language.icon}`
  }), __jsx("span", {
    className: "gx-language-text"
  }, language.name)))));

  const updateSearchChatUser = evt => {
    setSearchText(evt.target.value);
  };

  return __jsx("div", {
    className: "gx-header-horizontal gx-header-horizontal-dark gx-above-header-horizontal"
  }, __jsx("div", {
    className: "gx-header-horizontal-nav gx-header-horizontal-nav-curve gx-d-none gx-d-lg-block"
  }, __jsx("div", {
    className: "gx-container"
  }, __jsx("div", {
    className: "gx-header-horizontal-nav-flex"
  }, __jsx(_HorizontalNav__WEBPACK_IMPORTED_MODULE_12__["default"], null), __jsx("ul", {
    className: "gx-header-notifications gx-ml-auto"
  }, __jsx("li", null, __jsx("span", {
    className: "gx-pointer gx-d-block"
  }, __jsx("i", {
    className: "icon icon-menu-lines"
  }))), __jsx("li", null, __jsx("span", {
    className: "gx-pointer gx-d-block"
  }, __jsx("i", {
    className: "icon icon-setting"
  }))), __jsx("li", null, __jsx("span", {
    className: "gx-pointer gx-d-block"
  }, __jsx("i", {
    className: "icon icon-apps-new"
  }))))))), __jsx("div", {
    className: "gx-header-horizontal-top"
  }, __jsx("div", {
    className: "gx-container"
  }, __jsx("div", {
    className: "gx-header-horizontal-top-flex"
  }, __jsx("div", {
    className: "gx-header-horizontal-top-left"
  }, __jsx("i", {
    className: "icon icon-alert gx-mr-3"
  }), __jsx("p", {
    className: "gx-mb-0 gx-text-truncate"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_14__["default"], {
    id: "app.announced"
  }))), __jsx("ul", {
    className: "gx-login-list"
  }, __jsx("li", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_14__["default"], {
    id: "app.userAuth.login"
  })), __jsx("li", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_14__["default"], {
    id: "app.userAuth.signUp"
  })))))), __jsx(Header, {
    className: "gx-header-horizontal-main"
  }, __jsx("div", {
    className: "gx-container"
  }, __jsx("div", {
    className: "gx-header-horizontal-main-flex"
  }, __jsx("div", {
    className: "gx-d-block gx-d-lg-none gx-linebar gx-mr-xs-3"
  }, __jsx("i", {
    className: "gx-icon-btn icon icon-menu",
    onClick: () => {
      if (width <= _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_11__["TAB_SIZE"]) {
        dispatch(Object(_redux_actions_Setting__WEBPACK_IMPORTED_MODULE_10__["toggleCollapsedSideNav"])(!navCollapsed));
      }
    }
  })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_13___default.a, {
    href: "/"
  }, __jsx("img", {
    alt: "",
    className: "gx-d-block gx-d-lg-none gx-pointer gx-mr-xs-3 gx-pt-xs-1 gx-w-logo",
    src: "/images/w-logo.png"
  })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_13___default.a, {
    href: "/"
  }, __jsx("img", {
    alt: "",
    className: "gx-d-none gx-d-lg-block gx-pointer gx-mr-xs-5 gx-logo",
    src: "/images/logo.png"
  })), __jsx("div", {
    className: "gx-header-search gx-d-none gx-d-lg-flex"
  }, __jsx(_components_SearchBox__WEBPACK_IMPORTED_MODULE_6__["default"], {
    styleName: "gx-lt-icon-search-bar-lg",
    placeholder: "Search in app...",
    onChange: updateSearchChatUser,
    value: searchText
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    defaultValue: "lucy",
    style: {
      width: 120
    },
    onChange: handleChange
  }, __jsx(Option, {
    value: "jack"
  }, "Products"), __jsx(Option, {
    value: "lucy"
  }, "Apps"), __jsx(Option, {
    value: "Yiminghe"
  }, "Blogs"))), __jsx("ul", {
    className: "gx-header-notifications gx-ml-auto"
  }, __jsx("li", {
    className: "gx-notify gx-notify-search gx-d-inline-block gx-d-lg-none"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
    overlayClassName: "gx-popover-horizantal",
    placement: "bottomRight",
    content: __jsx("div", {
      className: "gx-d-flex"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Dropdown"], {
      overlay: menu
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], null, "Category ", __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default.a, {
      type: "down"
    }))), __jsx(_components_SearchBox__WEBPACK_IMPORTED_MODULE_6__["default"], {
      styleName: "gx-popover-search-bar",
      placeholder: "Search in app...",
      onChange: updateSearchChatUser,
      value: searchText
    })),
    trigger: "click"
  }, __jsx("span", {
    className: "gx-pointer gx-d-block"
  }, __jsx("i", {
    className: "icon icon-search-new"
  })))), __jsx("li", {
    className: "gx-notify"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
    overlayClassName: "gx-popover-horizantal",
    placement: "bottomRight",
    content: __jsx(_components_AppNotification__WEBPACK_IMPORTED_MODULE_8__["default"], null),
    trigger: "click"
  }, __jsx("span", {
    className: "gx-pointer gx-d-block"
  }, __jsx("i", {
    className: "icon icon-notification"
  })))), __jsx("li", {
    className: "gx-msg"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
    overlayClassName: "gx-popover-horizantal",
    placement: "bottomRight",
    content: __jsx(_components_MailNotification__WEBPACK_IMPORTED_MODULE_9__["default"], null),
    trigger: "click"
  }, __jsx("span", {
    className: "gx-pointer gx-status-pos gx-d-block"
  }, __jsx("i", {
    className: "icon icon-chat-new"
  }), __jsx("span", {
    className: "gx-status gx-status-rtl gx-small gx-orange"
  })))), __jsx("li", {
    className: "gx-language"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
    overlayClassName: "gx-popover-horizantal",
    placement: "bottomRight",
    content: languageMenu(),
    trigger: "click"
  }, __jsx("span", {
    className: "gx-pointer gx-flex-row gx-align-items-center"
  }, __jsx("i", {
    className: `flag flag-24 flag-${locale.icon}`
  })))), __jsx("li", {
    className: "gx-user-nav"
  }, __jsx(_components_UserInfo__WEBPACK_IMPORTED_MODULE_7__["default"], null)))))));
};

/* harmony default export */ __webpack_exports__["default"] = (AboveHeader);

/***/ }),

/***/ "./app/core/Topbar/BelowHeader/index.js":
/*!**********************************************!*\
  !*** ./app/core/Topbar/BelowHeader/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _util_CustomScrollbars__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../util/CustomScrollbars */ "./util/CustomScrollbars.js");
/* harmony import */ var _languageData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../languageData */ "./app/core/Topbar/languageData.js");
/* harmony import */ var _components_SearchBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/SearchBox */ "./app/components/SearchBox/index.js");
/* harmony import */ var _components_UserInfo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/UserInfo */ "./app/components/UserInfo/index.js");
/* harmony import */ var _components_AppNotification__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/AppNotification */ "./app/components/AppNotification/index.js");
/* harmony import */ var _components_MailNotification__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/MailNotification */ "./app/components/MailNotification/index.js");
/* harmony import */ var _redux_actions_Setting__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../redux/actions/Setting */ "./redux/actions/Setting.js");
/* harmony import */ var _HorizontalNav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../HorizontalNav */ "./app/core/Topbar/HorizontalNav.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _util_IntlMessages__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../util/IntlMessages */ "./util/IntlMessages.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;














const {
  Header
} = antd__WEBPACK_IMPORTED_MODULE_1__["Layout"];
const Option = antd__WEBPACK_IMPORTED_MODULE_1__["Select"].Option;

const menu = __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
  onClick: handleMenuClick
}, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
  key: "1"
}, "Products"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
  key: "2"
}, "Apps"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
  key: "3"
}, "Blogs"));

function handleMenuClick(e) {
  antd__WEBPACK_IMPORTED_MODULE_1__["message"].info('Click on menu item.');
}

function handleChange(value) {
  console.log(`selected ${value}`);
}

const BelowHeader = () => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  const {
    0: searchText,
    1: setSearchText
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const locale = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(({
    settings
  }) => settings.locale);
  const navCollapsed = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(({
    settings
  }) => settings.navCollapsed);

  const languageMenu = () => __jsx(_util_CustomScrollbars__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "gx-popover-lang-scroll"
  }, __jsx("ul", {
    className: "gx-sub-popover"
  }, _languageData__WEBPACK_IMPORTED_MODULE_5__["default"].map(language => __jsx("li", {
    className: "gx-media gx-pointer",
    key: JSON.stringify(language),
    onClick: e => dispatch(Object(_redux_actions_Setting__WEBPACK_IMPORTED_MODULE_10__["switchLanguage"])(language))
  }, __jsx("i", {
    className: `flag flag-24 gx-mr-2 flag-${language.icon}`
  }), __jsx("span", {
    className: "gx-language-text"
  }, language.name)))));

  const updateSearchChatUser = evt => {
    setSearchText(evt.target.value);
  };

  return __jsx("div", {
    className: "gx-header-horizontal gx-header-horizontal-dark gx-below-header-horizontal"
  }, __jsx("div", {
    className: "gx-header-horizontal-top"
  }, __jsx("div", {
    className: "gx-container"
  }, __jsx("div", {
    className: "gx-header-horizontal-top-flex"
  }, __jsx("div", {
    className: "gx-header-horizontal-top-left"
  }, __jsx("i", {
    className: "icon icon-alert gx-mr-3"
  }), __jsx("p", {
    className: "gx-mb-0 gx-text-truncate"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_13__["default"], {
    id: "app.announced"
  }))), __jsx("ul", {
    className: "gx-login-list"
  }, __jsx("li", null, "Login"), __jsx("li", null, "Signup"))))), __jsx(Header, {
    className: "gx-header-horizontal-main"
  }, __jsx("div", {
    className: "gx-container"
  }, __jsx("div", {
    className: "gx-header-horizontal-main-flex"
  }, __jsx("div", {
    className: "gx-d-block gx-d-lg-none gx-linebar gx-mr-xs-3"
  }, __jsx("i", {
    className: "gx-icon-btn icon icon-menu",
    onClick: () => {
      dispatch(Object(_redux_actions_Setting__WEBPACK_IMPORTED_MODULE_10__["toggleCollapsedSideNav"])(!navCollapsed));
    }
  })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
    href: "/"
  }, __jsx("img", {
    alt: "",
    className: "gx-d-block gx-d-lg-none gx-pointer gx-mr-xs-3 gx-pt-xs-1 gx-w-logo",
    src: "/images/w-logo.png"
  })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
    href: "/"
  }, __jsx("img", {
    alt: "",
    className: "gx-d-none gx-d-lg-block gx-pointer gx-mr-xs-5 gx-logo",
    src: "/images/logo.png"
  })), __jsx("div", {
    className: "gx-header-search gx-d-none gx-d-lg-flex"
  }, __jsx(_components_SearchBox__WEBPACK_IMPORTED_MODULE_6__["default"], {
    styleName: "gx-lt-icon-search-bar-lg",
    placeholder: "Search in app...",
    onChange: updateSearchChatUser,
    value: searchText
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    defaultValue: "lucy",
    style: {
      width: 120
    },
    onChange: handleChange
  }, __jsx(Option, {
    value: "jack"
  }, "Products"), __jsx(Option, {
    value: "lucy"
  }, "Apps"), __jsx(Option, {
    value: "Yiminghe"
  }, "Blogs"))), __jsx("ul", {
    className: "gx-header-notifications gx-ml-auto"
  }, __jsx("li", {
    className: "gx-notify gx-notify-search gx-d-inline-block gx-d-lg-none"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
    overlayClassName: "gx-popover-horizantal",
    placement: "bottomRight",
    content: __jsx("div", {
      className: "gx-d-flex"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Dropdown"], {
      overlay: menu
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], null, "Category ", __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default.a, {
      type: "down"
    }))), __jsx(_components_SearchBox__WEBPACK_IMPORTED_MODULE_6__["default"], {
      styleName: "gx-popover-search-bar",
      placeholder: "Search in app...",
      onChange: updateSearchChatUser,
      value: searchText
    })),
    trigger: "click"
  }, __jsx("span", {
    className: "gx-pointer gx-d-block"
  }, __jsx("i", {
    className: "icon icon-search-new"
  })))), __jsx("li", {
    className: "gx-notify"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
    overlayClassName: "gx-popover-horizantal",
    placement: "bottomRight",
    content: __jsx(_components_AppNotification__WEBPACK_IMPORTED_MODULE_8__["default"], null),
    trigger: "click"
  }, __jsx("span", {
    className: "gx-pointer gx-d-block"
  }, __jsx("i", {
    className: "icon icon-notification"
  })))), __jsx("li", {
    className: "gx-msg"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
    overlayClassName: "gx-popover-horizantal",
    placement: "bottomRight",
    content: __jsx(_components_MailNotification__WEBPACK_IMPORTED_MODULE_9__["default"], null),
    trigger: "click"
  }, __jsx("span", {
    className: "gx-pointer gx-status-pos gx-d-block"
  }, __jsx("i", {
    className: "icon icon-chat-new"
  }), __jsx("span", {
    className: "gx-status gx-status-rtl gx-small gx-orange"
  })))), __jsx("li", {
    className: "gx-language"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
    overlayClassName: "gx-popover-horizantal",
    placement: "bottomRight",
    content: languageMenu(),
    trigger: "click"
  }, __jsx("span", {
    className: "gx-pointer gx-flex-row gx-align-items-center"
  }, __jsx("i", {
    className: `flag flag-24 flag-${locale.icon}`
  })))), __jsx("li", {
    className: "gx-user-nav"
  }, __jsx(_components_UserInfo__WEBPACK_IMPORTED_MODULE_7__["default"], null)))))), __jsx("div", {
    className: "gx-header-horizontal-nav gx-header-horizontal-nav-curve gx-d-none gx-d-lg-block"
  }, __jsx("div", {
    className: "gx-container"
  }, __jsx("div", {
    className: "gx-header-horizontal-nav-flex"
  }, __jsx(_HorizontalNav__WEBPACK_IMPORTED_MODULE_11__["default"], null), __jsx("ul", {
    className: "gx-header-notifications gx-ml-auto"
  }, __jsx("li", null, __jsx("span", {
    className: "gx-pointer gx-d-block"
  }, __jsx("i", {
    className: "icon icon-menu-lines"
  }))), __jsx("li", null, __jsx("span", {
    className: "gx-pointer gx-d-block"
  }, __jsx("i", {
    className: "icon icon-setting"
  }))), __jsx("li", null, __jsx("span", {
    className: "gx-pointer gx-d-block"
  }, __jsx("i", {
    className: "icon icon-apps-new"
  }))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (BelowHeader);

/***/ }),

/***/ "./app/core/Topbar/HorizontalDark/index.js":
/*!*************************************************!*\
  !*** ./app/core/Topbar/HorizontalDark/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _util_CustomScrollbars__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../util/CustomScrollbars */ "./util/CustomScrollbars.js");
/* harmony import */ var _languageData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../languageData */ "./app/core/Topbar/languageData.js");
/* harmony import */ var _components_SearchBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/SearchBox */ "./app/components/SearchBox/index.js");
/* harmony import */ var _components_UserInfo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/UserInfo */ "./app/components/UserInfo/index.js");
/* harmony import */ var _components_AppNotification__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/AppNotification */ "./app/components/AppNotification/index.js");
/* harmony import */ var _components_MailNotification__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/MailNotification */ "./app/components/MailNotification/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _HorizontalNav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../HorizontalNav */ "./app/core/Topbar/HorizontalNav.js");
/* harmony import */ var _redux_actions_Setting__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../redux/actions/Setting */ "./redux/actions/Setting.js");
/* harmony import */ var _util_IntlMessages__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../util/IntlMessages */ "./util/IntlMessages.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;














const {
  Header
} = antd__WEBPACK_IMPORTED_MODULE_1__["Layout"];
const Option = antd__WEBPACK_IMPORTED_MODULE_1__["Select"].Option;

const menu = __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
  onClick: handleMenuClick
}, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
  key: "1"
}, "Products"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
  key: "2"
}, "Apps"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
  key: "3"
}, "Blogs"));

function handleMenuClick(e) {
  antd__WEBPACK_IMPORTED_MODULE_1__["message"].info('Click on menu item.');
}

function handleChange(value) {
  console.log(`selected ${value}`);
}

const HorizontalDark = () => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  const {
    0: searchText,
    1: setSearchText
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const locale = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(({
    settings
  }) => settings.locale);
  const navCollapsed = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(({
    settings
  }) => settings.navCollapsed);

  const languageMenu = () => __jsx(_util_CustomScrollbars__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "gx-popover-lang-scroll"
  }, __jsx("ul", {
    className: "gx-sub-popover"
  }, _languageData__WEBPACK_IMPORTED_MODULE_5__["default"].map(language => __jsx("li", {
    className: "gx-media gx-pointer",
    key: JSON.stringify(language),
    onClick: e => dispatch(Object(_redux_actions_Setting__WEBPACK_IMPORTED_MODULE_12__["switchLanguage"])(language))
  }, __jsx("i", {
    className: `flag flag-24 gx-mr-2 flag-${language.icon}`
  }), __jsx("span", {
    className: "gx-language-text"
  }, language.name)))));

  const updateSearchChatUser = evt => {
    setSearchText(evt.target.value);
  };

  return __jsx("div", {
    className: "gx-header-horizontal gx-header-horizontal-dark"
  }, __jsx("div", {
    className: "gx-header-horizontal-top"
  }, __jsx("div", {
    className: "gx-container"
  }, __jsx("div", {
    className: "gx-header-horizontal-top-flex"
  }, __jsx("div", {
    className: "gx-header-horizontal-top-left"
  }, __jsx("i", {
    className: "icon icon-alert gx-mr-3"
  }), __jsx("p", {
    className: "gx-mb-0 gx-text-truncate"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_13__["default"], {
    id: "app.announced"
  }))), __jsx("ul", {
    className: "gx-login-list"
  }, __jsx("li", null, "Login"), __jsx("li", null, "Signup"))))), __jsx(Header, {
    className: "gx-header-horizontal-main"
  }, __jsx("div", {
    className: "gx-container"
  }, __jsx("div", {
    className: "gx-header-horizontal-main-flex"
  }, __jsx("div", {
    className: "gx-d-block gx-d-lg-none gx-linebar gx-mr-xs-3"
  }, __jsx("i", {
    className: "gx-icon-btn icon icon-menu",
    onClick: () => {
      dispatch(Object(_redux_actions_Setting__WEBPACK_IMPORTED_MODULE_12__["toggleCollapsedSideNav"])(!navCollapsed));
    }
  })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
    href: "/"
  }, __jsx("img", {
    alt: "",
    className: "gx-d-block gx-d-lg-none gx-pointer gx-mr-xs-3 gx-pt-xs-1 gx-w-logo",
    src: "/images/w-logo.png"
  })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
    href: "/"
  }, __jsx("img", {
    alt: "",
    className: "gx-d-none gx-d-lg-block gx-pointer gx-mr-xs-5 gx-logo",
    src: "/images/logo.png"
  })), __jsx("div", {
    className: "gx-header-search gx-d-none gx-d-lg-flex"
  }, __jsx(_components_SearchBox__WEBPACK_IMPORTED_MODULE_6__["default"], {
    styleName: "gx-lt-icon-search-bar-lg",
    placeholder: "Search in app...",
    onChange: updateSearchChatUser,
    value: searchText
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    defaultValue: "lucy",
    style: {
      width: 120
    },
    onChange: handleChange
  }, __jsx(Option, {
    value: "jack"
  }, "Products"), __jsx(Option, {
    value: "lucy"
  }, "Apps"), __jsx(Option, {
    value: "Yiminghe"
  }, "Blogs"))), __jsx("ul", {
    className: "gx-header-notifications gx-ml-auto"
  }, __jsx("li", {
    className: "gx-notify gx-notify-search gx-d-inline-block gx-d-lg-none"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
    overlayClassName: "gx-popover-horizantal",
    placement: "bottomRight",
    content: __jsx("div", {
      className: "gx-d-flex"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Dropdown"], {
      overlay: menu
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], null, "Category ", __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default.a, {
      type: "down"
    }))), __jsx(_components_SearchBox__WEBPACK_IMPORTED_MODULE_6__["default"], {
      styleName: "gx-popover-search-bar",
      placeholder: "Search in app...",
      onChange: updateSearchChatUser,
      value: searchText
    })),
    trigger: "click"
  }, __jsx("span", {
    className: "gx-pointer gx-d-block"
  }, __jsx("i", {
    className: "icon icon-search-new"
  })))), __jsx("li", {
    className: "gx-notify"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
    overlayClassName: "gx-popover-horizantal",
    placement: "bottomRight",
    content: __jsx(_components_AppNotification__WEBPACK_IMPORTED_MODULE_8__["default"], null),
    trigger: "click"
  }, __jsx("span", {
    className: "gx-pointer gx-d-block"
  }, __jsx("i", {
    className: "icon icon-notification"
  })))), __jsx("li", {
    className: "gx-msg"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
    overlayClassName: "gx-popover-horizantal",
    placement: "bottomRight",
    content: __jsx(_components_MailNotification__WEBPACK_IMPORTED_MODULE_9__["default"], null),
    trigger: "click"
  }, __jsx("span", {
    className: "gx-pointer gx-status-pos gx-d-block"
  }, __jsx("i", {
    className: "icon icon-chat-new"
  }), __jsx("span", {
    className: "gx-status gx-status-rtl gx-small gx-orange"
  })))), __jsx("li", {
    className: "gx-language"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
    overlayClassName: "gx-popover-horizantal",
    placement: "bottomRight",
    content: languageMenu(),
    trigger: "click"
  }, __jsx("span", {
    className: "gx-pointer gx-flex-row gx-align-items-center"
  }, __jsx("i", {
    className: `flag flag-24 flag-${locale.icon}`
  })))), __jsx("li", {
    className: "gx-user-nav"
  }, __jsx(_components_UserInfo__WEBPACK_IMPORTED_MODULE_7__["default"], null)))))), __jsx("div", {
    className: "gx-header-horizontal-nav gx-d-none gx-d-lg-block"
  }, __jsx("div", {
    className: "gx-container"
  }, __jsx("div", {
    className: "gx-header-horizontal-nav-flex"
  }, __jsx(_HorizontalNav__WEBPACK_IMPORTED_MODULE_11__["default"], null), __jsx("ul", {
    className: "gx-header-notifications gx-ml-auto"
  }, __jsx("li", null, __jsx("span", {
    className: "gx-pointer gx-d-block"
  }, __jsx("i", {
    className: "icon icon-menu-lines"
  }))), __jsx("li", null, __jsx("span", {
    className: "gx-pointer gx-d-block"
  }, __jsx("i", {
    className: "icon icon-setting"
  }))), __jsx("li", null, __jsx("span", {
    className: "gx-pointer gx-d-block"
  }, __jsx("i", {
    className: "icon icon-apps-new"
  }))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (HorizontalDark);

/***/ }),

/***/ "./app/core/Topbar/HorizontalDefault/index.js":
/*!****************************************************!*\
  !*** ./app/core/Topbar/HorizontalDefault/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _util_CustomScrollbars__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../util/CustomScrollbars */ "./util/CustomScrollbars.js");
/* harmony import */ var _languageData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../languageData */ "./app/core/Topbar/languageData.js");
/* harmony import */ var _components_SearchBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/SearchBox */ "./app/components/SearchBox/index.js");
/* harmony import */ var _components_UserInfo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/UserInfo */ "./app/components/UserInfo/index.js");
/* harmony import */ var _components_AppNotification__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/AppNotification */ "./app/components/AppNotification/index.js");
/* harmony import */ var _components_MailNotification__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/MailNotification */ "./app/components/MailNotification/index.js");
/* harmony import */ var _HorizontalNav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../HorizontalNav */ "./app/core/Topbar/HorizontalNav.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _redux_actions_Setting__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../redux/actions/Setting */ "./redux/actions/Setting.js");
/* harmony import */ var _util_IntlMessages__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../util/IntlMessages */ "./util/IntlMessages.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;














const {
  Header
} = antd__WEBPACK_IMPORTED_MODULE_1__["Layout"];
const Option = antd__WEBPACK_IMPORTED_MODULE_1__["Select"].Option;

const menu = __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
  onClick: handleMenuClick
}, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
  key: "1"
}, "Products"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
  key: "2"
}, "Apps"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
  key: "3"
}, "Blogs"));

function handleMenuClick(e) {
  antd__WEBPACK_IMPORTED_MODULE_1__["message"].info('Click on menu item.');
}

function handleChange(value) {
  console.log(`selected ${value}`);
}

const HorizontalDefault = () => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  const {
    0: searchText,
    1: setSearchText
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const locale = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(({
    settings
  }) => settings.locale);
  const navCollapsed = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(({
    settings
  }) => settings.navCollapsed);

  const languageMenu = () => __jsx(_util_CustomScrollbars__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "gx-popover-lang-scroll"
  }, __jsx("ul", {
    className: "gx-sub-popover"
  }, _languageData__WEBPACK_IMPORTED_MODULE_5__["default"].map(language => __jsx("li", {
    className: "gx-media gx-pointer",
    key: JSON.stringify(language),
    onClick: e => dispatch(Object(_redux_actions_Setting__WEBPACK_IMPORTED_MODULE_12__["switchLanguage"])(language))
  }, __jsx("i", {
    className: `flag flag-24 gx-mr-2 flag-${language.icon}`
  }), __jsx("span", {
    className: "gx-language-text"
  }, language.name)))));

  const updateSearchChatUser = evt => {
    setSearchText(evt.target.value);
  };

  return __jsx("div", {
    className: "gx-header-horizontal"
  }, __jsx("div", {
    className: "gx-header-horizontal-top"
  }, __jsx("div", {
    className: "gx-container"
  }, __jsx("div", {
    className: "gx-header-horizontal-top-flex"
  }, __jsx("div", {
    className: "gx-header-horizontal-top-left"
  }, __jsx("i", {
    className: "icon icon-alert gx-mr-3"
  }), __jsx("p", {
    className: "gx-mb-0 gx-text-truncate"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_13__["default"], {
    id: "app.announced"
  }))), __jsx("ul", {
    className: "gx-login-list"
  }, __jsx("li", null, "Login"), __jsx("li", null, "Signup"))))), __jsx(Header, {
    className: "gx-header-horizontal-main"
  }, __jsx("div", {
    className: "gx-container"
  }, __jsx("div", {
    className: "gx-header-horizontal-main-flex"
  }, __jsx("div", {
    className: "gx-d-block gx-d-lg-none gx-linebar gx-mr-xs-3"
  }, __jsx("i", {
    className: "gx-icon-btn icon icon-menu",
    onClick: () => {
      console.log("navCollapsed", !navCollapsed);
      dispatch(Object(_redux_actions_Setting__WEBPACK_IMPORTED_MODULE_12__["toggleCollapsedSideNav"])(!navCollapsed));
    }
  })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
    href: "/"
  }, __jsx("img", {
    alt: "",
    className: "gx-d-block gx-d-lg-none gx-pointer gx-w-logo",
    src: "/images/w-logo.png"
  })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
    href: "/"
  }, __jsx("img", {
    alt: "",
    className: "gx-d-none gx-d-lg-block gx-pointer gx-mr-xs-5 gx-logo",
    src: "/images/logo-white.png"
  })), __jsx("div", {
    className: "gx-header-search gx-d-none gx-d-lg-flex"
  }, __jsx(_components_SearchBox__WEBPACK_IMPORTED_MODULE_6__["default"], {
    styleName: "gx-lt-icon-search-bar-lg",
    placeholder: "Search in app...",
    onChange: updateSearchChatUser,
    value: searchText
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    defaultValue: "lucy",
    style: {
      width: 120
    },
    onChange: handleChange
  }, __jsx(Option, {
    value: "jack"
  }, "Products"), __jsx(Option, {
    value: "lucy"
  }, "Apps"), __jsx(Option, {
    value: "Yiminghe"
  }, "Blogs"))), __jsx("ul", {
    className: "gx-header-notifications gx-ml-auto"
  }, __jsx("li", {
    className: "gx-notify gx-notify-search gx-d-inline-block gx-d-lg-none"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
    overlayClassName: "gx-popover-horizantal",
    placement: "bottomRight",
    content: __jsx("div", {
      className: "gx-d-flex"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Dropdown"], {
      overlay: menu
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], null, "Category ", __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default.a, {
      type: "down"
    }))), __jsx(_components_SearchBox__WEBPACK_IMPORTED_MODULE_6__["default"], {
      styleName: "gx-popover-search-bar",
      z: true,
      placeholder: "Search in app...",
      onChange: updateSearchChatUser,
      value: searchText
    })),
    trigger: "click"
  }, __jsx("span", {
    className: "gx-pointer gx-d-block"
  }, __jsx("i", {
    className: "icon icon-search-new"
  })))), __jsx("li", {
    className: "gx-notify"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
    overlayClassName: "gx-popover-horizantal",
    placement: "bottomRight",
    content: __jsx(_components_AppNotification__WEBPACK_IMPORTED_MODULE_8__["default"], null),
    trigger: "click"
  }, __jsx("span", {
    className: "gx-pointer gx-d-block"
  }, __jsx("i", {
    className: "icon icon-notification"
  })))), __jsx("li", {
    className: "gx-msg"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
    overlayClassName: "gx-popover-horizantal",
    placement: "bottomRight",
    content: __jsx(_components_MailNotification__WEBPACK_IMPORTED_MODULE_9__["default"], null),
    trigger: "click"
  }, __jsx("span", {
    className: "gx-pointer gx-status-pos gx-d-block"
  }, __jsx("i", {
    className: "icon icon-chat-new"
  }), __jsx("span", {
    className: "gx-status gx-status-rtl gx-small gx-orange"
  })))), __jsx("li", {
    className: "gx-language"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
    overlayClassName: "gx-popover-horizantal",
    placement: "bottomRight",
    content: languageMenu(),
    trigger: "click"
  }, __jsx("span", {
    className: "gx-pointer gx-flex-row gx-align-items-center"
  }, __jsx("i", {
    className: `flag flag-24 flag-${locale.icon}`
  })))), __jsx("li", {
    className: "gx-user-nav"
  }, __jsx(_components_UserInfo__WEBPACK_IMPORTED_MODULE_7__["default"], null)))))), __jsx("div", {
    className: "gx-header-horizontal-nav gx-header-horizontal-nav-curve gx-d-none gx-d-lg-block"
  }, __jsx("div", {
    className: "gx-container"
  }, __jsx("div", {
    className: "gx-header-horizontal-nav-flex"
  }, __jsx(_HorizontalNav__WEBPACK_IMPORTED_MODULE_10__["default"], null), __jsx("ul", {
    className: "gx-header-notifications gx-ml-auto"
  }, __jsx("li", null, __jsx("span", {
    className: "gx-pointer gx-d-block"
  }, __jsx("i", {
    className: "icon icon-menu-lines"
  }))), __jsx("li", null, __jsx("span", {
    className: "gx-pointer gx-d-block"
  }, __jsx("i", {
    className: "icon icon-setting"
  }))), __jsx("li", null, __jsx("span", {
    className: "gx-pointer gx-d-block"
  }, __jsx("i", {
    className: "icon icon-apps-new"
  }))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (HorizontalDefault);

/***/ }),

/***/ "./app/core/Topbar/HorizontalNav.js":
/*!******************************************!*\
  !*** ./app/core/Topbar/HorizontalNav.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../util/IntlMessages */ "./util/IntlMessages.js");
/* harmony import */ var _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../constants/ThemeSetting */ "./constants/ThemeSetting.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const SubMenu = antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].SubMenu;
const MenuItemGroup = antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].ItemGroup;

const HorizontalNav = () => {
  const navStyle = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(({
    settings
  }) => settings.navStyle);
  const pathname = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(({
    settings
  }) => settings.pathname);

  const getNavStyleSubMenuClass = navStyle => {
    switch (navStyle) {
      case _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_5__["NAV_STYLE_DEFAULT_HORIZONTAL"]:
        return "gx-menu-horizontal gx-submenu-popup-curve";

      case _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_5__["NAV_STYLE_INSIDE_HEADER_HORIZONTAL"]:
        return "gx-menu-horizontal gx-submenu-popup-curve gx-inside-submenu-popup-curve";

      case _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_5__["NAV_STYLE_BELOW_HEADER"]:
        return "gx-menu-horizontal gx-submenu-popup-curve gx-below-submenu-popup-curve";

      case _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_5__["NAV_STYLE_ABOVE_HEADER"]:
        return "gx-menu-horizontal gx-submenu-popup-curve gx-above-submenu-popup-curve";

      default:
        return "gx-menu-horizontal";
    }
  };

  const selectedKeys = pathname.substr(1);
  const defaultOpenKeys = selectedKeys.split('/')[1];
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"], {
    defaultOpenKeys: [defaultOpenKeys],
    selectedKeys: [selectedKeys],
    mode: "horizontal"
  }, __jsx(SubMenu, {
    popupClassName: getNavStyleSubMenuClass(navStyle),
    key: "main",
    title: __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
      id: "sidebar.main"
    })
  }, __jsx(SubMenu, {
    popupClassName: "gx-menu-horizontal",
    key: "dashboard",
    title: __jsx("span", null, " ", __jsx("i", {
      className: "icon icon-dasbhoard"
    }), __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
      id: "sidebar.dashboard"
    }))
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "main/dashboard/crypto"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/main/dashboard/crypto"
  }, __jsx("i", {
    className: "icon icon-crypto"
  }), __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.dashboard.crypto"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "main/dashboard/crm"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/main/dashboard/crm"
  }, __jsx("i", {
    className: "icon icon-crm"
  }), __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.dashboard.crm"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "main/dashboard/listing"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/main/dashboard/listing"
  }, __jsx("i", {
    className: "icon icon-listing-dbrd"
  }), __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.dashboard.listing"
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "main/widgets"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/main/widgets"
  }, __jsx("i", {
    className: "icon icon-widgets"
  }), __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.widgets"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "main/metrics"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/main/metrics"
  }, __jsx("i", {
    className: "icon icon-apps"
  }), __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.metrics"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "main/algolia"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/main/algolia"
  }, __jsx("i", {
    className: "icon icon-shopping-cart "
  }), __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.algolia"
  })))), __jsx(SubMenu, {
    popupClassName: getNavStyleSubMenuClass(navStyle),
    key: "in-built-apps",
    title: __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
      id: "sidebar.inBuiltApp"
    })
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "in-built-apps/mail"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/in-built-apps/mail"
  }, __jsx("i", {
    className: "icon icon-email"
  }), __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.mailApp"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "in-built-apps/todo"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/in-built-apps/todo"
  }, __jsx("i", {
    className: "icon icon-check-square-o"
  }), __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.todoApp"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "in-built-apps/contacts"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/in-built-apps/contacts"
  }, __jsx("i", {
    className: "icon icon-contacts"
  }), __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.contactsApp"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "in-built-apps/chat"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/in-built-apps/chat"
  }, __jsx("i", {
    className: "icon icon-chat-bubble -flex-column-reverse"
  }), __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.chatApp"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "social-apps/profile"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/social-apps/profile"
  }, __jsx("i", {
    className: "icon icon-profile2"
  }), __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.extensions.profile"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "social-apps/wall"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/social-apps/wall"
  }, __jsx("i", {
    className: "icon icon-avatar -flex-column-reverse"
  }), __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.wall"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "in-built-apps/notes"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/in-built-apps/notes"
  }, __jsx("i", {
    className: "icon icon-copy"
  }), __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.notes"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "in-built-apps/firebase-crud"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/in-built-apps/firebase-crud"
  }, __jsx("i", {
    className: "icon icon-icon"
  }), __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.crud"
  })))), __jsx(SubMenu, {
    popupClassName: getNavStyleSubMenuClass(navStyle),
    key: "components",
    title: __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
      id: "sidebar.components"
    })
  }, __jsx(SubMenu, {
    popupClassName: "gx-menu-horizontal",
    key: "general",
    title: __jsx("span", null, __jsx("i", {
      className: "icon icon-all-contacts"
    }), __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
      id: "sidebar.components.general"
    }))
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "components/general/button"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/components/general/button"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.general.button"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "components/general/icon"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/components/general/icon"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.general.icon"
  })))), __jsx(SubMenu, {
    popupClassName: "gx-menu-horizontal",
    key: "navigation",
    title: __jsx("span", null, __jsx("i", {
      className: "icon icon-navigation"
    }), __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
      id: "sidebar.components.navigation"
    }))
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "components/navigation/affix"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/components/navigation/affix"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.navigation.affix"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "components/navigation/breadcrumb"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/components/navigation/breadcrumb"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.navigation.breadcrumb"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "components/navigation/dropdown"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/components/navigation/dropdown"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.navigation.dropdown"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "components/navigation/menu"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/components/navigation/menu"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.navigation.menu"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "components/navigation/pagination"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/components/navigation/pagination"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.navigation.pagination"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "components/navigation/steps"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/components/navigation/steps"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.navigation.steps"
  })))), __jsx(SubMenu, {
    popupClassName: "gx-menu-horizontal",
    key: "dataEntry",
    title: __jsx("span", null, __jsx("i", {
      className: "icon icon-data-entry"
    }), __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
      id: "sidebar.components.dataEntry"
    }))
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "components/dataEntry/autoComplete"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/components/dataEntry/autoComplete"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.dataEntry.autoComplete"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "components/dataEntry/checkbox"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/components/dataEntry/checkbox"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.dataEntry.checkbox"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "components/dataEntry/cascader"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/components/dataEntry/cascader"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.dataEntry.cascader"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "components/dataEntry/datePicker"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/components/dataEntry/datePicker"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.dataEntry.datePicker"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "components/dataEntry/form"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/components/dataEntry/form"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.dataEntry.form"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "components/dataEntry/inputNumber"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/components/dataEntry/inputNumber"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.dataEntry.inputNumber"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "components/dataEntry/input"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/components/dataEntry/input"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.dataEntry.input"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "components/dataEntry/mention"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/components/dataEntry/mention"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.dataEntry.mention"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "components/dataEntry/rate"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/components/dataEntry/rate"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.dataEntry.rate"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "components/dataEntry/radio"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/components/dataEntry/radio"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.dataEntry.radio"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "components/dataEntry/switch"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/components/dataEntry/switch"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.dataEntry.switch"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "components/dataEntry/slider"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/components/dataEntry/slider"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.dataEntry.slider"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "components/dataEntry/select"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/components/dataEntry/select"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.dataEntry.select"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "components/dataEntry/treeSelect"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/components/dataEntry/treeSelect"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.dataEntry.treeSelect"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "components/dataEntry/transfer"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/components/dataEntry/transfer"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.dataEntry.transfer"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "components/dataEntry/timePicker"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/components/dataEntry/timePicker"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.dataEntry.timePicker"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "components/dataEntry/upload"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/components/dataEntry/upload"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.dataEntry.upload"
  })))), __jsx(SubMenu, {
    popupClassName: "gx-menu-horizontal",
    key: "dataDisplay",
    title: __jsx("span", null, __jsx("i", {
      className: "icon icon-data-display"
    }), __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
      id: "sidebar.components.dataDisplay"
    }))
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "components/dataDisplay/avatar"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/components/dataDisplay/avatar"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.dataDisplay.avatar"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "components/dataDisplay/badge"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/components/dataDisplay/badge"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.dataDisplay.badge"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "components/dataDisplay/collapse"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/components/dataDisplay/collapse"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.dataDisplay.collapse"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "components/dataDisplay/carousel"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/components/dataDisplay/carousel"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.dataDisplay.carousel"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "components/dataDisplay/card"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/components/dataDisplay/card"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.dataDisplay.card"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "components/dataDisplay/calendar"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/components/dataDisplay/calendar"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.dataDisplay.calender"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "components/dataDisplay/popover"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/components/dataDisplay/popover"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.dataDisplay.popover"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "components/dataDisplay/tree"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/components/dataDisplay/tree"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.dataDisplay.tree"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "components/dataDisplay/tooltip"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/components/dataDisplay/tooltip"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.dataDisplay.toolTips"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "components/dataDisplay/timeline"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/components/dataDisplay/timeline"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.dataDisplay.timeLine"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "components/dataDisplay/tag"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/components/dataDisplay/tag"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.dataDisplay.tag"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "components/dataDisplay/tabs"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/components/dataDisplay/tabs"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.dataDisplay.tabs"
  })))), __jsx(SubMenu, {
    popupClassName: "gx-menu-horizontal",
    key: "feedBack",
    title: __jsx("span", null, __jsx("i", {
      className: "icon icon-feedback"
    }), __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
      id: "sidebar.components.feedBack"
    }))
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "components/feedBack/alert"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/components/feedBack/alert"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.feedBack.alert"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "components/feedBack/modal"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/components/feedBack/modal"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.feedBack.modal"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "components/feedBack/message"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/components/feedBack/message"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.feedBack.message"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "components/feedBack/notification"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/components/feedBack/notification"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.feedBack.notification"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "components/feedBack/progress"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/components/feedBack/progress"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.feedBack.progress"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "components/feedBack/popconfirm"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/components/feedBack/popconfirm"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.feedBack.popConfirm"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "components/feedBack/spin"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/components/feedBack/spin"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.feedBack.spin"
  })))), __jsx(SubMenu, {
    popupClassName: "gx-menu-horizontal",
    key: "others",
    title: __jsx("span", null, __jsx("i", {
      className: "icon icon-inbox"
    }), __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
      id: "sidebar.components.other"
    }))
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "components/others/anchor"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/components/others/anchor"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.other.anchor"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "components/others/backtop"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/components/others/backtop"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.other.backTop"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "components/others/divider"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/components/others/divider"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.other.divider"
  })))), __jsx(SubMenu, {
    popupClassName: "gx-menu-horizontal",
    key: "table",
    title: __jsx("span", null, __jsx("i", {
      className: "icon icon-table"
    }), __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
      id: "sidebar.dataDisplay.table"
    }))
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "components/table/basic"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/components/table/basic"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.view.basicTable"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "components/table/data"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/components/table/data"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.view.dataTable"
  }))))), __jsx(SubMenu, {
    popupClassName: getNavStyleSubMenuClass(navStyle),
    key: "extraComponents",
    title: __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
      id: "sidebar.extraComponents"
    })
  }, __jsx(SubMenu, {
    popupClassName: "gx-menu-horizontal",
    key: "editor",
    title: __jsx("span", null, __jsx("i", {
      className: "icon icon-editor"
    }), __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
      id: "sidebar.editors"
    }))
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "extra-components/editor/ck"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/extra-components/editor/ck"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.editors.CKEditor"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "extra-components/editor/wysiswyg"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/extra-components/editor/wysiswyg"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.editors.WYSISWYGEditor"
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "extra-components/color-picker"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/extra-components/color-picker"
  }, __jsx("i", {
    className: "icon icon-picker"
  }), __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.pickers.colorPickers"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "extra-components/dnd"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/extra-components/dnd"
  }, __jsx("i", {
    className: "icon icon-drag-and-drop"
  }), __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.extensions.dragNDrop"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "extra-components/sweet-alert"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/extra-components/sweet-alert"
  }, __jsx("i", {
    className: "icon icon-sweet-alert"
  }), __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.extensions.sweetAlert"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "extra-components/notification"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/extra-components/notification"
  }, __jsx("i", {
    className: "icon icon-notification"
  }), __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.extensions.notification"
  }))), __jsx(SubMenu, {
    popupClassName: "gx-menu-horizontal",
    key: "time-line",
    title: __jsx("span", null, __jsx("i", {
      className: "icon icon-timeline"
    }), __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
      id: "sidebar.timeLine"
    }))
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "extra-components/time-line/default"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/extra-components/time-line/default"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.timeLine.default"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "extra-components/time-line/default-with-icon"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/extra-components/time-line/default-with-icon"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.timeLine.defaultwithIcons"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "extra-components/time-line/left-align"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/extra-components/time-line/left-align"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.timeLine.leftAligned"
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "extra-components/shuffle"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/extra-components/shuffle"
  }, __jsx("i", {
    className: "icon icon-shuffle"
  }), __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.extensions.shuffle"
  })))), __jsx(SubMenu, {
    popupClassName: getNavStyleSubMenuClass(navStyle),
    key: "extensions",
    title: __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
      id: "sidebar.extensions"
    })
  }, __jsx(MenuItemGroup, {
    key: "map",
    title: __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
      id: "sidebar.map"
    })
  }, __jsx(SubMenu, {
    popupClassName: "gx-menu-horizontal",
    key: "google",
    title: __jsx("span", null, __jsx("i", {
      className: "icon icon-map-google"
    }), __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
      id: "sidebar.google.map"
    }))
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "extensions/map/google/simple"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/extensions/map/google/simple"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.map.simple"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "extensions/map/google/styled"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/extensions/map/google/styled"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.map.styled"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "extensions/map/google/geo-location"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/extensions/map/google/geo-location"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.map.geoLocation"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "extensions/map/google/directions"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/extensions/map/google/directions"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.map.mapDirection"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "extensions/map/google/overlay"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/extensions/map/google/overlay"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.map.overlay"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "extensions/map/google/kml"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/extensions/map/google/kml"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.map.kmLayer"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "extensions/map/google/popup-info"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/extensions/map/google/popup-info"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.map.popupInfo"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "extensions/map/google/traffic"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/extensions/map/google/traffic"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.map.trafficLayer"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "extensions/map/google/street-view"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/extensions/map/google/street-view"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.map.streetView"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "extensions/map/google/event"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/extensions/map/google/event"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.map.eventListener"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "extensions/map/google/drawing"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/extensions/map/google/drawing"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.map.mapDrawing"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "extensions/map/google/clustering"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/extensions/map/google/clustering"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.map.mapClustering"
  })))), __jsx(SubMenu, {
    popupClassName: "gx-menu-horizontal",
    key: "ammap",
    title: __jsx("span", null, __jsx("i", {
      className: "icon icon-amchart"
    }), __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
      id: "sidebar.ammap"
    }))
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "extensions/map/ammap/animations-lines"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/extensions/map/ammap/animations-lines"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.map.animations.lines"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "extensions/map/ammap/curved-lines"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/extensions/map/ammap/curved-lines"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.map.curved.lines"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "extensions/map/ammap/zooming-countries"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/extensions/map/ammap/zooming-countries"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.map.zooming.countries"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "extensions/map/ammap/patterns"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/extensions/map/ammap/patterns"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.map.patterns"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "extensions/map/ammap/capitals-map"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/extensions/map/ammap/capitals-map"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.map.capitals.map"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "extensions/map/ammap/map-markers"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/extensions/map/ammap/map-markers"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.map.markers"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "extensions/map/ammap/flight-routes"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/extensions/map/ammap/flight-routes"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.map.flight.routes"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "extensions/map/ammap/choropleth"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/extensions/map/ammap/choropleth"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.map.choropleth"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "extensions/map/ammap/grouped-countries"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/extensions/map/ammap/grouped-countries"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.map.grouped.countries"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "extensions/map/ammap/bubbles"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/extensions/map/ammap/bubbles"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.map.bubbles"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "extensions/map/ammap/drill-down"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/extensions/map/ammap/drill-down"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.map.drill.down"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "extensions/map/ammap/multiple-areas"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/extensions/map/ammap/multiple-areas"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.map.multiple.areas"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "extensions/map/ammap/weather"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/extensions/map/ammap/weather"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.map.weather"
  }))))), __jsx(MenuItemGroup, {
    key: "chart",
    title: __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
      id: "sidebar.chart"
    }))
  }, __jsx(SubMenu, {
    popupClassName: "gx-menu-horizontal",
    key: "rechart",
    title: __jsx("span", null, __jsx("i", {
      className: "icon icon-chart-area-new"
    }), __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
      id: "sidebar.components.rechart"
    }))
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "extensions/chart/recharts/area"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/extensions/chart/recharts/area"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.chart.area"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "extensions/chart/recharts/bar"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/extensions/chart/recharts/bar"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.chart.bar"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "extensions/chart/recharts/composed"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/extensions/chart/recharts/composed"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.chart.composed"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "extensions/chart/recharts/line"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/extensions/chart/recharts/line"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.chart.line"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "extensions/chart/recharts/pie"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/extensions/chart/recharts/pie"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.chart.pie"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "extensions/chart/recharts/radar"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/extensions/chart/recharts/radar"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.chart.radar"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "extensions/chart/recharts/radial"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/extensions/chart/recharts/radial"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.chart.radial"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "extensions/chart/recharts/scatter"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/extensions/chart/recharts/scatter"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.chart.scatter"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "extensions/chart/recharts/treemap"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/extensions/chart/recharts/treemap"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.chart.tree"
  })))), __jsx(SubMenu, {
    popupClassName: "gx-menu-horizontal",
    key: "amchart",
    title: __jsx("span", null, __jsx("i", {
      className: "icon icon-amchart"
    }), __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
      id: "sidebar.components.amchart"
    }))
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "extensions/chart/amchart/area"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/extensions/chart/amchart/area"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.chart.area"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "extensions/chart/amchart/bar"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/extensions/chart/amchart/bar"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.chart.bar"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "extensions/chart/amchart/line"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/extensions/chart/amchart/line"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.chart.line"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "extensions/chart/amchart/pie"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/extensions/chart/amchart/pie"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.chart.pie"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "extensions/chart/amchart/composed"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/extensions/chart/amchart/composed"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.chart.composed"
  }))))), __jsx(SubMenu, {
    popupClassName: "gx-menu-horizontal",
    key: "calendar",
    title: __jsx("span", null, __jsx("i", {
      className: "icon icon-calendar"
    }), __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
      id: "sidebar.calendar"
    }))
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "extensions/calendar/basic"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/extensions/calendar/basic"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.calendar.basic"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "extensions/calendar/cultures"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/extensions/calendar/cultures"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.calendar.cultures"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "extensions/calendar/popup"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/extensions/calendar/popup"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.calendar.popup"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "extensions/calendar/rendering"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/extensions/calendar/rendering"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.calendar.rendering"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "extensions/calendar/selectable"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/extensions/calendar/selectable"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.calendar.selectable"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "extensions/calendar/timeslots"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/extensions/calendar/timeslots"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.calendar.timeslots"
  }))))), __jsx(SubMenu, {
    popupClassName: getNavStyleSubMenuClass(navStyle),
    key: "custom-views",
    title: __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
      id: "sidebar.customViews"
    })
  }, __jsx(SubMenu, {
    popupClassName: "gx-menu-horizontal",
    key: "user-auth",
    title: __jsx("span", null, __jsx("i", {
      className: "icon icon-auth-screen"
    }), __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
      id: "app.userAuth"
    }))
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "custom-views/user-auth/sign-in"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/custom-views/user-auth/sign-in"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "app.userAuth.signIn"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "custom-views/user-auth/forgot-password"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/custom-views/user-auth/forgot-password"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "app.userAuth.forgotPassword"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "custom-views/user-auth/sign-up"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/custom-views/user-auth/sign-up"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "app.userAuth.signUp"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "custom-views/user-auth/lock-screen"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/custom-views/user-auth/lock-screen"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "app.userAuth.lockScreen"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "custom-views/user-auth/reset-password"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/custom-views/user-auth/reset-password"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "app.userAuth.resetPassword"
  })))), __jsx(SubMenu, {
    popupClassName: "gx-menu-horizontal",
    key: "list-type",
    title: __jsx("span", null, __jsx("i", {
      className: "icon icon-all-contacts"
    }), __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
      id: "sidebar.listType"
    }))
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "custom-views/list-type/simple-list"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/custom-views/list-type/simple-list"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.listType.plainListView"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "custom-views/list-type/strip-list"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/custom-views/list-type/strip-list"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.listType.withDivider"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "custom-views/list-type/card-list"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/custom-views/list-type/card-list"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.listType.cardListView"
  })))), __jsx(SubMenu, {
    popupClassName: "gx-menu-horizontal",
    key: "eCommerce",
    title: __jsx("span", null, __jsx("i", {
      className: "icon icon-shopping-cart"
    }), __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
      id: "sidebar.eCommerce"
    }))
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "custom-views/eCommerce/product-grid"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/custom-views/eCommerce/product-grid"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.eCommerce.productGrid"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "custom-views/eCommerce/product-list"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/custom-views/eCommerce/product-list"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.eCommerce.productList"
  })))), __jsx(SubMenu, {
    popupClassName: "gx-menu-horizontal",
    key: "errorPages",
    title: __jsx("span", null, __jsx("i", {
      className: "icon icon-error"
    }), __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
      id: "sidebar.extraPages"
    }))
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "custom-views/error-pages/error-404"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/custom-views/error-pages/error-404"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.extraPages.404"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "custom-views/error-pages/error-500"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/custom-views/error-pages/error-500"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.extraPages.500"
  })))), __jsx(SubMenu, {
    popupClassName: "gx-menu-horizontal",
    key: "extra-elements",
    title: __jsx("span", null, __jsx("i", {
      className: "icon icon-ellipse-h"
    }), __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
      id: "sidebar.listType.extras"
    }))
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "custom-views/extras/pricing-table"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/custom-views/extras/pricing-table"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.extraElements.pricingTable"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "custom-views/extras/callouts"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/custom-views/extras/callouts"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.extraElements.callouts"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "custom-views/extras/testimonials"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/custom-views/extras/testimonials"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.extraElements.testimonials"
  }))))));
};

HorizontalNav.propTypes = {};
/* harmony default export */ __webpack_exports__["default"] = (HorizontalNav);

/***/ }),

/***/ "./app/core/Topbar/InsideHeader/index.js":
/*!***********************************************!*\
  !*** ./app/core/Topbar/InsideHeader/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _util_CustomScrollbars__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../util/CustomScrollbars */ "./util/CustomScrollbars.js");
/* harmony import */ var _languageData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../languageData */ "./app/core/Topbar/languageData.js");
/* harmony import */ var _components_SearchBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/SearchBox */ "./app/components/SearchBox/index.js");
/* harmony import */ var _components_UserInfo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/UserInfo */ "./app/components/UserInfo/index.js");
/* harmony import */ var _components_AppNotification__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/AppNotification */ "./app/components/AppNotification/index.js");
/* harmony import */ var _components_MailNotification__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/MailNotification */ "./app/components/MailNotification/index.js");
/* harmony import */ var _HorizontalNav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../HorizontalNav */ "./app/core/Topbar/HorizontalNav.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _redux_actions_Setting__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../redux/actions/Setting */ "./redux/actions/Setting.js");
/* harmony import */ var _util_IntlMessages__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../util/IntlMessages */ "./util/IntlMessages.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;














const {
  Header
} = antd__WEBPACK_IMPORTED_MODULE_1__["Layout"];

const menu = __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
  onClick: handleMenuClick
}, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
  key: "1"
}, "Products"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
  key: "2"
}, "Apps"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
  key: "3"
}, "Blogs"));

function handleMenuClick(e) {
  antd__WEBPACK_IMPORTED_MODULE_1__["message"].info('Click on menu item.');
}

const InsideHeader = () => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  const {
    0: searchText,
    1: setSearchText
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const locale = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(({
    settings
  }) => settings.locale);
  const navCollapsed = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(({
    settings
  }) => settings.navCollapsed);

  const languageMenu = () => __jsx(_util_CustomScrollbars__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "gx-popover-lang-scroll"
  }, __jsx("ul", {
    className: "gx-sub-popover"
  }, _languageData__WEBPACK_IMPORTED_MODULE_5__["default"].map(language => __jsx("li", {
    className: "gx-media gx-pointer",
    key: JSON.stringify(language),
    onClick: e => dispatch(Object(_redux_actions_Setting__WEBPACK_IMPORTED_MODULE_12__["switchLanguage"])(language))
  }, __jsx("i", {
    className: `flag flag-24 gx-mr-2 flag-${language.icon}`
  }), __jsx("span", {
    className: "gx-language-text"
  }, language.name)))));

  const updateSearchChatUser = evt => {
    setSearchText(evt.target.value);
  };

  return __jsx("div", {
    className: "gx-header-horizontal gx-header-horizontal-dark gx-inside-header-horizontal"
  }, __jsx("div", {
    className: "gx-header-horizontal-top"
  }, __jsx("div", {
    className: "gx-container"
  }, __jsx("div", {
    className: "gx-header-horizontal-top-flex"
  }, __jsx("div", {
    className: "gx-header-horizontal-top-left"
  }, __jsx("i", {
    className: "icon icon-alert gx-mr-3"
  }), __jsx("p", {
    className: "gx-mb-0 gx-text-truncate"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_13__["default"], {
    id: "app.announced"
  }))), __jsx("ul", {
    className: "gx-login-list"
  }, __jsx("li", null, "Login"), __jsx("li", null, "Signup"))))), __jsx(Header, {
    className: "gx-header-horizontal-main"
  }, __jsx("div", {
    className: "gx-container"
  }, __jsx("div", {
    className: "gx-header-horizontal-main-flex"
  }, __jsx("div", {
    className: "gx-d-block gx-d-lg-none gx-linebar gx-mr-xs-3 6e"
  }, __jsx("i", {
    className: "gx-icon-btn icon icon-menu",
    onClick: () => {
      dispatch(Object(_redux_actions_Setting__WEBPACK_IMPORTED_MODULE_12__["toggleCollapsedSideNav"])(!navCollapsed));
    }
  })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
    href: "/"
  }, __jsx("img", {
    alt: "",
    className: "gx-d-block gx-d-lg-none gx-pointer gx-mr-xs-3 gx-pt-xs-1 gx-w-logo",
    src: "/images/w-logo.png"
  })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
    href: "/"
  }, __jsx("img", {
    alt: "",
    className: "gx-d-none gx-d-lg-block gx-pointer gx-mr-xs-5 gx-logo",
    src: "/images/logo.png"
  })), __jsx("div", {
    className: "gx-header-horizontal-nav gx-header-horizontal-nav-curve gx-d-none gx-d-lg-block"
  }, __jsx(_HorizontalNav__WEBPACK_IMPORTED_MODULE_10__["default"], null)), __jsx("ul", {
    className: "gx-header-notifications gx-ml-auto"
  }, __jsx("li", {
    className: "gx-notify gx-notify-search"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
    overlayClassName: "gx-popover-horizantal",
    placement: "bottomRight",
    content: __jsx("div", {
      className: "gx-d-flex"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Dropdown"], {
      overlay: menu
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], null, "Category ", __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default.a, {
      type: "down"
    }))), __jsx(_components_SearchBox__WEBPACK_IMPORTED_MODULE_6__["default"], {
      styleName: "gx-popover-search-bar",
      placeholder: "Search in app...",
      onChange: updateSearchChatUser,
      value: searchText
    })),
    trigger: "click"
  }, __jsx("span", {
    className: "gx-pointer gx-d-block"
  }, __jsx("i", {
    className: "icon icon-search-new"
  })))), __jsx("li", {
    className: "gx-notify"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
    overlayClassName: "gx-popover-horizantal",
    placement: "bottomRight",
    content: __jsx(_components_AppNotification__WEBPACK_IMPORTED_MODULE_8__["default"], null),
    trigger: "click"
  }, __jsx("span", {
    className: "gx-pointer gx-d-block"
  }, __jsx("i", {
    className: "icon icon-notification"
  })))), __jsx("li", {
    className: "gx-msg"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
    overlayClassName: "gx-popover-horizantal",
    placement: "bottomRight",
    content: __jsx(_components_MailNotification__WEBPACK_IMPORTED_MODULE_9__["default"], null),
    trigger: "click"
  }, __jsx("span", {
    className: "gx-pointer gx-status-pos gx-d-block"
  }, __jsx("i", {
    className: "icon icon-chat-new"
  }), __jsx("span", {
    className: "gx-status gx-status-rtl gx-small gx-orange"
  })))), __jsx("li", {
    className: "gx-language"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
    overlayClassName: "gx-popover-horizantal",
    placement: "bottomRight",
    content: languageMenu(),
    trigger: "click"
  }, __jsx("span", {
    className: "gx-pointer gx-flex-row gx-align-items-center"
  }, __jsx("i", {
    className: `flag flag-24 flag-${locale.icon}`
  })))), __jsx("li", {
    className: "gx-user-nav"
  }, __jsx(_components_UserInfo__WEBPACK_IMPORTED_MODULE_7__["default"], null)))))));
};

const mapStateToProps = ({
  settings
}) => {
  const {
    locale,
    navCollapsed
  } = settings;
  return {
    locale,
    navCollapsed
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, {
  toggleCollapsedSideNav: _redux_actions_Setting__WEBPACK_IMPORTED_MODULE_12__["toggleCollapsedSideNav"],
  switchLanguage: _redux_actions_Setting__WEBPACK_IMPORTED_MODULE_12__["switchLanguage"]
})(InsideHeader));

/***/ }),

/***/ "./app/core/Topbar/NoHeaderNotification/index.js":
/*!*******************************************************!*\
  !*** ./app/core/Topbar/NoHeaderNotification/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redux_actions_Setting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../redux/actions/Setting */ "./redux/actions/Setting.js");
/* harmony import */ var _util_IntlMessages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../util/IntlMessages */ "./util/IntlMessages.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const NoHeaderNotification = () => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const navCollapsed = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(({
    settings
  }) => settings.navCollapsed);
  return __jsx("div", {
    className: "gx-no-header-horizontal"
  }, __jsx("div", {
    className: "gx-d-block gx-d-lg-none gx-linebar gx-mr-xs-3"
  }, __jsx("i", {
    className: "gx-icon-btn icon icon-menu",
    onClick: () => {
      dispatch(Object(_redux_actions_Setting__WEBPACK_IMPORTED_MODULE_2__["toggleCollapsedSideNav"])(!navCollapsed));
    }
  })), __jsx("div", {
    className: "gx-no-header-horizontal-top"
  }, __jsx("div", {
    className: "gx-no-header-horizontal-top-center"
  }, __jsx("i", {
    className: "icon icon-alert gx-mr-3"
  }), __jsx("p", {
    className: "gx-mb-0 gx-text-truncate"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: "app.announced"
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (NoHeaderNotification);

/***/ }),

/***/ "./app/core/Topbar/index.js":
/*!**********************************!*\
  !*** ./app/core/Topbar/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _util_CustomScrollbars__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../util/CustomScrollbars */ "./util/CustomScrollbars.js");
/* harmony import */ var _languageData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./languageData */ "./app/core/Topbar/languageData.js");
/* harmony import */ var _redux_actions_Setting__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../redux/actions/Setting */ "./redux/actions/Setting.js");
/* harmony import */ var _components_SearchBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/SearchBox */ "./app/components/SearchBox/index.js");
/* harmony import */ var _components_UserInfo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/UserInfo */ "./app/components/UserInfo/index.js");
/* harmony import */ var _components_AppNotification__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/AppNotification */ "./app/components/AppNotification/index.js");
/* harmony import */ var _components_MailNotification__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/MailNotification */ "./app/components/MailNotification/index.js");
/* harmony import */ var _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../constants/ThemeSetting */ "./constants/ThemeSetting.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_11__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












const {
  Header
} = antd__WEBPACK_IMPORTED_MODULE_1__["Layout"];

const Topbar = () => {
  const {
    locale,
    width,
    navCollapsed,
    navStyle
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["useSelector"])(({
    settings
  }) => settings);
  const {
    searchText,
    setSearchText
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["useDispatch"])();

  const languageMenu = () => __jsx(_util_CustomScrollbars__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "gx-popover-lang-scroll"
  }, __jsx("ul", {
    className: "gx-sub-popover"
  }, _languageData__WEBPACK_IMPORTED_MODULE_4__["default"].map(language => __jsx("li", {
    className: "gx-media gx-pointer",
    key: JSON.stringify(language),
    onClick: e => dispatch(Object(_redux_actions_Setting__WEBPACK_IMPORTED_MODULE_5__["switchLanguage"])(language))
  }, __jsx("i", {
    className: `flag flag-24 gx-mr-2 flag-${language.icon}`
  }), __jsx("span", {
    className: "gx-language-text"
  }, language.name)))));

  const updateSearchChatUser = evt => {
    setSearchText(evt.target.value);
  };

  return __jsx(Header, null, navStyle === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_10__["NAV_STYLE_DRAWER"] || (navStyle === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_10__["NAV_STYLE_FIXED"] || navStyle === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_10__["NAV_STYLE_MINI_SIDEBAR"]) && width < _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_10__["TAB_SIZE"] ? __jsx("div", {
    className: "gx-linebar gx-mr-3"
  }, __jsx("i", {
    className: "gx-icon-btn icon icon-menu",
    onClick: () => {
      dispatch(Object(_redux_actions_Setting__WEBPACK_IMPORTED_MODULE_5__["toggleCollapsedSideNav"])(!navCollapsed));
    }
  })) : null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/"
  }, __jsx("img", {
    alt: "",
    className: "gx-d-block gx-d-lg-none gx-pointer",
    src: "/images/w-logo.png"
  })), __jsx(_components_SearchBox__WEBPACK_IMPORTED_MODULE_6__["default"], {
    styleName: "gx-d-none gx-d-lg-block gx-lt-icon-search-bar-lg",
    placeholder: "Search in app...",
    onChange: updateSearchChatUser,
    value: searchText
  }), __jsx("ul", {
    className: "gx-header-notifications gx-ml-auto"
  }, __jsx("li", {
    className: "gx-notify gx-notify-search gx-d-inline-block gx-d-lg-none"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
    overlayClassName: "gx-popover-horizantal",
    placement: "bottomRight",
    content: __jsx(_components_SearchBox__WEBPACK_IMPORTED_MODULE_6__["default"], {
      styleName: "gx-popover-search-bar",
      placeholder: "Search in app...",
      onChange: updateSearchChatUser,
      value: searchText
    }),
    trigger: "click"
  }, __jsx("span", {
    className: "gx-pointer gx-d-block"
  }, __jsx("i", {
    className: "icon icon-search-new"
  })))), width >= _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_10__["TAB_SIZE"] ? null : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("li", {
    className: "gx-notify"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
    overlayClassName: "gx-popover-horizantal",
    placement: "bottomRight",
    content: __jsx(_components_AppNotification__WEBPACK_IMPORTED_MODULE_8__["default"], null),
    trigger: "click"
  }, __jsx("span", {
    className: "gx-pointer gx-d-block"
  }, __jsx("i", {
    className: "icon icon-notification"
  })))), __jsx("li", {
    className: "gx-msg"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
    overlayClassName: "gx-popover-horizantal",
    placement: "bottomRight",
    content: __jsx(_components_MailNotification__WEBPACK_IMPORTED_MODULE_9__["default"], null),
    trigger: "click"
  }, __jsx("span", {
    className: "gx-pointer gx-status-pos gx-d-block"
  }, __jsx("i", {
    className: "icon icon-chat-new"
  }), __jsx("span", {
    className: "gx-status gx-status-rtl gx-small gx-orange"
  }))))), __jsx("li", {
    className: "gx-language"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
    overlayClassName: "gx-popover-horizantal",
    placement: "bottomRight",
    content: languageMenu(),
    trigger: "click"
  }, __jsx("span", {
    className: "gx-pointer gx-flex-row gx-align-items-center"
  }, __jsx("i", {
    className: `flag flag-24 flag-${locale.icon}`
  }), __jsx("span", {
    className: "gx-pl-2 gx-language-name"
  }, locale.name), __jsx("i", {
    className: "icon icon-chevron-down gx-pl-2"
  })))), width >= _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_10__["TAB_SIZE"] ? null : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("li", {
    className: "gx-user-nav"
  }, __jsx(_components_UserInfo__WEBPACK_IMPORTED_MODULE_7__["default"], null)))));
};

/* harmony default export */ __webpack_exports__["default"] = (Topbar);

/***/ }),

/***/ "./app/core/Topbar/languageData.js":
/*!*****************************************!*\
  !*** ./app/core/Topbar/languageData.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const languageData = [{
  languageId: 'russian',
  // Unique ID for language
  locale: 'ru',
  // locale name to link with the previously named locale
  name: 'Русский',
  // Display name of the language
  icon: 'ru' // To choose the flag of the country

}, {
  languageId: 'english',
  locale: 'en',
  name: 'English',
  icon: 'us'
}, {
  languageId: 'chinese',
  locale: 'zh',
  name: 'Chinese',
  icon: 'cn'
}, {
  languageId: 'spanish',
  locale: 'es',
  name: 'Spanish',
  icon: 'es'
}, {
  languageId: 'french',
  locale: 'fr',
  name: 'French',
  icon: 'fr'
}, {
  languageId: 'italian',
  locale: 'it',
  name: 'Italian',
  icon: 'it'
}, {
  languageId: 'saudi-arabia',
  locale: 'ar',
  name: 'Arabic',
  icon: 'sa'
}];
/* harmony default export */ __webpack_exports__["default"] = (languageData);

/***/ }),

/***/ "./app/hoc/securedPage/index.js":
/*!**************************************!*\
  !*** ./app/hoc/securedPage/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _withData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./withData */ "./app/hoc/securedPage/withData.js");
/* harmony import */ var _withLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./withLayout */ "./app/hoc/securedPage/withLayout.js");



/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["compose"])(_withData__WEBPACK_IMPORTED_MODULE_1__["default"], _withLayout__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ }),

/***/ "./app/hoc/securedPage/withData.js":
/*!*****************************************!*\
  !*** ./app/hoc/securedPage/withData.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_session__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/session */ "./util/session.js");
/* harmony import */ var _util_redirect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/redirect */ "./util/redirect.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



/* harmony default export */ __webpack_exports__["default"] = (ComposedComponent => class WithData extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  static async getInitialProps(context) {
    const isLoggedIn = Object(_util_session__WEBPACK_IMPORTED_MODULE_1__["getCookie"])('user_id', context.req);

    if (!isLoggedIn) {
      Object(_util_redirect__WEBPACK_IMPORTED_MODULE_2__["default"])(context, '/signin');
    }

    return {
      isLoggedIn
    };
  }

  render() {
    return __jsx(ComposedComponent, this.props);
  }

});

/***/ }),

/***/ "./app/hoc/securedPage/withLayout.js":
/*!*******************************************!*\
  !*** ./app/hoc/securedPage/withLayout.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Layout */ "./app/core/Layout/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = (ComposedComponent => props => __jsx(_core_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], null, __jsx(ComposedComponent, props)));

/***/ }),

/***/ "./constants/ActionTypes.js":
/*!**********************************!*\
  !*** ./constants/ActionTypes.js ***!
  \**********************************/
/*! exports provided: TOGGLE_COLLAPSED_NAV, WINDOW_WIDTH, SWITCH_LANGUAGE, FETCH_START, FETCH_SUCCESS, FETCH_ERROR, SHOW_MESSAGE, HIDE_MESSAGE, ON_SHOW_LOADER, ON_HIDE_LOADER, SIGNUP_USER, SIGNUP_USER_SUCCESS, SIGNIN_GOOGLE_USER, SIGNIN_GOOGLE_USER_SUCCESS, SIGNIN_FACEBOOK_USER, SIGNIN_FACEBOOK_USER_SUCCESS, SIGNIN_TWITTER_USER, SIGNIN_TWITTER_USER_SUCCESS, SIGNIN_GITHUB_USER, SIGNIN_GITHUB_USER_SUCCESS, SIGNIN_USER, SIGNIN_USER_SUCCESS, SIGNOUT_USER, SIGNOUT_USER_SUCCESS, INIT_URL, GET_STICKY, NOTES_UPDATE, FETCH_ALL_NOTES_SUCCESS, UPDATE_ALL_NOTES_SUCCESS, GET_All_CONTACT_SUCCESS, ON_ADD_CONTACT_SUCCESS, UPDATE_CONTACT_SUCCESS, DELETE_CONTACT_SUCCESS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOGGLE_COLLAPSED_NAV", function() { return TOGGLE_COLLAPSED_NAV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WINDOW_WIDTH", function() { return WINDOW_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SWITCH_LANGUAGE", function() { return SWITCH_LANGUAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_START", function() { return FETCH_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_SUCCESS", function() { return FETCH_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_ERROR", function() { return FETCH_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOW_MESSAGE", function() { return SHOW_MESSAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HIDE_MESSAGE", function() { return HIDE_MESSAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_SHOW_LOADER", function() { return ON_SHOW_LOADER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_HIDE_LOADER", function() { return ON_HIDE_LOADER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNUP_USER", function() { return SIGNUP_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNUP_USER_SUCCESS", function() { return SIGNUP_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNIN_GOOGLE_USER", function() { return SIGNIN_GOOGLE_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNIN_GOOGLE_USER_SUCCESS", function() { return SIGNIN_GOOGLE_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNIN_FACEBOOK_USER", function() { return SIGNIN_FACEBOOK_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNIN_FACEBOOK_USER_SUCCESS", function() { return SIGNIN_FACEBOOK_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNIN_TWITTER_USER", function() { return SIGNIN_TWITTER_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNIN_TWITTER_USER_SUCCESS", function() { return SIGNIN_TWITTER_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNIN_GITHUB_USER", function() { return SIGNIN_GITHUB_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNIN_GITHUB_USER_SUCCESS", function() { return SIGNIN_GITHUB_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNIN_USER", function() { return SIGNIN_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNIN_USER_SUCCESS", function() { return SIGNIN_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNOUT_USER", function() { return SIGNOUT_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNOUT_USER_SUCCESS", function() { return SIGNOUT_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INIT_URL", function() { return INIT_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_STICKY", function() { return GET_STICKY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NOTES_UPDATE", function() { return NOTES_UPDATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_ALL_NOTES_SUCCESS", function() { return FETCH_ALL_NOTES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_ALL_NOTES_SUCCESS", function() { return UPDATE_ALL_NOTES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_All_CONTACT_SUCCESS", function() { return GET_All_CONTACT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_ADD_CONTACT_SUCCESS", function() { return ON_ADD_CONTACT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_CONTACT_SUCCESS", function() { return UPDATE_CONTACT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_CONTACT_SUCCESS", function() { return DELETE_CONTACT_SUCCESS; });
// Customizer const
const TOGGLE_COLLAPSED_NAV = 'TOGGLE_COLLAPSE_MENU';
const WINDOW_WIDTH = 'WINDOW-WIDTH';
const SWITCH_LANGUAGE = 'SWITCH-LANGUAGE'; //Contact Module const

const FETCH_START = 'fetch_start';
const FETCH_SUCCESS = 'fetch_success';
const FETCH_ERROR = 'fetch_error';
const SHOW_MESSAGE = 'SHOW_MESSAGE';
const HIDE_MESSAGE = 'HIDE_MESSAGE';
const ON_SHOW_LOADER = 'ON_SHOW_LOADER';
const ON_HIDE_LOADER = 'ON_HIDE_LOADER'; //Auth const

const SIGNUP_USER = 'SIGNUP_USER';
const SIGNUP_USER_SUCCESS = 'SIGNUP_USER_SUCCESS';
const SIGNIN_GOOGLE_USER = 'SIGNIN_GOOGLE_USER';
const SIGNIN_GOOGLE_USER_SUCCESS = 'SIGNIN_GOOGLE_USER_SUCCESS';
const SIGNIN_FACEBOOK_USER = 'SIGNIN_FACEBOOK_USER';
const SIGNIN_FACEBOOK_USER_SUCCESS = 'SIGNIN_FACEBOOK_USER_SUCCESS';
const SIGNIN_TWITTER_USER = 'SIGNIN_TWITTER_USER';
const SIGNIN_TWITTER_USER_SUCCESS = 'SIGNIN_TWITTER_USER_SUCCESS';
const SIGNIN_GITHUB_USER = 'SIGNIN_GITHUB_USER';
const SIGNIN_GITHUB_USER_SUCCESS = 'signin_github_user_success';
const SIGNIN_USER = 'SIGNIN_USER';
const SIGNIN_USER_SUCCESS = 'SIGNIN_USER_SUCCESS';
const SIGNOUT_USER = 'SIGNOUT_USER';
const SIGNOUT_USER_SUCCESS = 'SIGNOUT_USER_SUCCESS';
const INIT_URL = 'INIT_URL'; //Sticky

const GET_STICKY = 'GET_STICKY';
const NOTES_UPDATE = 'NOTES_UPDATE';
const FETCH_ALL_NOTES_SUCCESS = 'FETCH_ALL_NOTES_SUCCESS';
const UPDATE_ALL_NOTES_SUCCESS = 'UPDATE_ALL_NOTES_SUCCESS'; //Contact

const GET_All_CONTACT_SUCCESS = 'GET_All_CONTACT_SUCCESS';
const ON_ADD_CONTACT_SUCCESS = 'ON_ADD_CONTACT_SUCCESS';
const UPDATE_CONTACT_SUCCESS = 'UPDATE_CONTACT_SUCCESS';
const DELETE_CONTACT_SUCCESS = 'DELETE_CONTACT_SUCCESS';

/***/ }),

/***/ "./constants/ThemeSetting.js":
/*!***********************************!*\
  !*** ./constants/ThemeSetting.js ***!
  \***********************************/
/*! exports provided: THEME_TYPE, THEME_TYPE_LITE, THEME_TYPE_DARK, THEME_TYPE_SEMI_DARK, THEME_COLOR_SELECTION, THEME_COLOR_SELECTION_PRESET, THEME_COLOR_SELECTION_CUSTOMIZE, HORIZONTAL_NAVIGATION, HORIZONTAL_MENU_POSITION, ABOVE_THE_HEADER, INSIDE_THE_HEADER, BELOW_THE_HEADER, VERTICAL_NAVIGATION, NAV_STYLE_MINI, LAYOUT_TYPE, SET_PATH_NAME, LAYOUT_TYPE_FRAMED, LAYOUT_TYPE_BOXED, LAYOUT_TYPE_FULL, NAV_STYLE, NAV_STYLE_FIXED, NAV_STYLE_MINI_SIDEBAR, NAV_STYLE_DRAWER, NAV_STYLE_NO_HEADER_MINI_SIDEBAR, NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR, NAV_STYLE_DEFAULT_HORIZONTAL, NAV_STYLE_DARK_HORIZONTAL, NAV_STYLE_INSIDE_HEADER_HORIZONTAL, NAV_STYLE_BELOW_HEADER, NAV_STYLE_ABOVE_HEADER, LIGHT_PURPLE, LIGHT_PURPLE_SEC, LIGHT_PURPLE_NAV_DARK_BG, LIGHT_PURPLE_DARK_TEXT_COLOR, RED, RED_SEC, RED_NAV_DARK_BG, RED_DARK_TEXT_COLOR, BLUE, BLUE_SEC, BLUE_NAV_DARK_BG, BLUE_DARK_TEXT_COLOR, DARK_BLUE, DARK_BLUE_SEC, DARK_BLUE_NAV_DARK_BG, DARK_BLUE_DARK_TEXT_COLOR, ORANGE, ORANGE_SEC, ORANGE_NAV_DARK_BG, ORANGE_DARK_TEXT_COLOR, LIGHT_BLUE, LIGHT_BLUE_SEC, LIGHT_BLUE_NAV_DARK_BG, LIGHT_BLUE_DARK_TEXT_COLOR, DEEP_ORANGE, DEEP_ORANGE_SEC, DEEP_ORANGE_NAV_DARK_BG, DEEP_ORANGE_DARK_TEXT_COLOR, LIGHT_PURPLE_1, LIGHT_PURPLE_1_SEC, LIGHT_PURPLE_1_NAV_DARK_BG, LIGHT_PURPLE_1_DARK_TEXT_COLOR, LIGHT_PURPLE_2, LIGHT_PURPLE_2_SEC, LIGHT_PURPLE_2_NAV_DARK_BG, LIGHT_PURPLE_2_DARK_TEXT_COLOR, TAB_SIZE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "THEME_TYPE", function() { return THEME_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "THEME_TYPE_LITE", function() { return THEME_TYPE_LITE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "THEME_TYPE_DARK", function() { return THEME_TYPE_DARK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "THEME_TYPE_SEMI_DARK", function() { return THEME_TYPE_SEMI_DARK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "THEME_COLOR_SELECTION", function() { return THEME_COLOR_SELECTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "THEME_COLOR_SELECTION_PRESET", function() { return THEME_COLOR_SELECTION_PRESET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "THEME_COLOR_SELECTION_CUSTOMIZE", function() { return THEME_COLOR_SELECTION_CUSTOMIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HORIZONTAL_NAVIGATION", function() { return HORIZONTAL_NAVIGATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HORIZONTAL_MENU_POSITION", function() { return HORIZONTAL_MENU_POSITION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ABOVE_THE_HEADER", function() { return ABOVE_THE_HEADER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INSIDE_THE_HEADER", function() { return INSIDE_THE_HEADER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BELOW_THE_HEADER", function() { return BELOW_THE_HEADER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERTICAL_NAVIGATION", function() { return VERTICAL_NAVIGATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAV_STYLE_MINI", function() { return NAV_STYLE_MINI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAYOUT_TYPE", function() { return LAYOUT_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_PATH_NAME", function() { return SET_PATH_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAYOUT_TYPE_FRAMED", function() { return LAYOUT_TYPE_FRAMED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAYOUT_TYPE_BOXED", function() { return LAYOUT_TYPE_BOXED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAYOUT_TYPE_FULL", function() { return LAYOUT_TYPE_FULL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAV_STYLE", function() { return NAV_STYLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAV_STYLE_FIXED", function() { return NAV_STYLE_FIXED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAV_STYLE_MINI_SIDEBAR", function() { return NAV_STYLE_MINI_SIDEBAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAV_STYLE_DRAWER", function() { return NAV_STYLE_DRAWER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAV_STYLE_NO_HEADER_MINI_SIDEBAR", function() { return NAV_STYLE_NO_HEADER_MINI_SIDEBAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR", function() { return NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAV_STYLE_DEFAULT_HORIZONTAL", function() { return NAV_STYLE_DEFAULT_HORIZONTAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAV_STYLE_DARK_HORIZONTAL", function() { return NAV_STYLE_DARK_HORIZONTAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAV_STYLE_INSIDE_HEADER_HORIZONTAL", function() { return NAV_STYLE_INSIDE_HEADER_HORIZONTAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAV_STYLE_BELOW_HEADER", function() { return NAV_STYLE_BELOW_HEADER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAV_STYLE_ABOVE_HEADER", function() { return NAV_STYLE_ABOVE_HEADER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIGHT_PURPLE", function() { return LIGHT_PURPLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIGHT_PURPLE_SEC", function() { return LIGHT_PURPLE_SEC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIGHT_PURPLE_NAV_DARK_BG", function() { return LIGHT_PURPLE_NAV_DARK_BG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIGHT_PURPLE_DARK_TEXT_COLOR", function() { return LIGHT_PURPLE_DARK_TEXT_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RED", function() { return RED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RED_SEC", function() { return RED_SEC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RED_NAV_DARK_BG", function() { return RED_NAV_DARK_BG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RED_DARK_TEXT_COLOR", function() { return RED_DARK_TEXT_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BLUE", function() { return BLUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BLUE_SEC", function() { return BLUE_SEC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BLUE_NAV_DARK_BG", function() { return BLUE_NAV_DARK_BG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BLUE_DARK_TEXT_COLOR", function() { return BLUE_DARK_TEXT_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DARK_BLUE", function() { return DARK_BLUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DARK_BLUE_SEC", function() { return DARK_BLUE_SEC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DARK_BLUE_NAV_DARK_BG", function() { return DARK_BLUE_NAV_DARK_BG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DARK_BLUE_DARK_TEXT_COLOR", function() { return DARK_BLUE_DARK_TEXT_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORANGE", function() { return ORANGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORANGE_SEC", function() { return ORANGE_SEC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORANGE_NAV_DARK_BG", function() { return ORANGE_NAV_DARK_BG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORANGE_DARK_TEXT_COLOR", function() { return ORANGE_DARK_TEXT_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIGHT_BLUE", function() { return LIGHT_BLUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIGHT_BLUE_SEC", function() { return LIGHT_BLUE_SEC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIGHT_BLUE_NAV_DARK_BG", function() { return LIGHT_BLUE_NAV_DARK_BG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIGHT_BLUE_DARK_TEXT_COLOR", function() { return LIGHT_BLUE_DARK_TEXT_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEEP_ORANGE", function() { return DEEP_ORANGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEEP_ORANGE_SEC", function() { return DEEP_ORANGE_SEC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEEP_ORANGE_NAV_DARK_BG", function() { return DEEP_ORANGE_NAV_DARK_BG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEEP_ORANGE_DARK_TEXT_COLOR", function() { return DEEP_ORANGE_DARK_TEXT_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIGHT_PURPLE_1", function() { return LIGHT_PURPLE_1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIGHT_PURPLE_1_SEC", function() { return LIGHT_PURPLE_1_SEC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIGHT_PURPLE_1_NAV_DARK_BG", function() { return LIGHT_PURPLE_1_NAV_DARK_BG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIGHT_PURPLE_1_DARK_TEXT_COLOR", function() { return LIGHT_PURPLE_1_DARK_TEXT_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIGHT_PURPLE_2", function() { return LIGHT_PURPLE_2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIGHT_PURPLE_2_SEC", function() { return LIGHT_PURPLE_2_SEC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIGHT_PURPLE_2_NAV_DARK_BG", function() { return LIGHT_PURPLE_2_NAV_DARK_BG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIGHT_PURPLE_2_DARK_TEXT_COLOR", function() { return LIGHT_PURPLE_2_DARK_TEXT_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TAB_SIZE", function() { return TAB_SIZE; });
// Customizer const
const THEME_TYPE = 'THEME_TYPE';
const THEME_TYPE_LITE = 'THEME_TYPE_LITE';
const THEME_TYPE_DARK = 'THEME_TYPE_DARK';
const THEME_TYPE_SEMI_DARK = 'THEME_TYPE_SEMI_DARK';
const THEME_COLOR_SELECTION = 'THEME_COLOR_SELECTION';
const THEME_COLOR_SELECTION_PRESET = 'THEME_COLOR_SELECTION_PRESET';
const THEME_COLOR_SELECTION_CUSTOMIZE = 'THEME_COLOR_SELECTION_CUSTOMIZE';
const HORIZONTAL_NAVIGATION = 'HORIZONTAL_NAVIGATION';
const HORIZONTAL_MENU_POSITION = 'HORIZONTAL_MENU_POSITION';
const ABOVE_THE_HEADER = 'ABOVE_THE_HEADER';
const INSIDE_THE_HEADER = 'INSIDE_THE_HEADER';
const BELOW_THE_HEADER = 'BELOW_THE_HEADER';
const VERTICAL_NAVIGATION = 'VERTICAL_NAVIGATION';
const NAV_STYLE_MINI = 'NAV_STYLE_MINI';
const LAYOUT_TYPE = 'LAYOUT_TYPE';
const SET_PATH_NAME = 'SET_PATH_NAME';
const LAYOUT_TYPE_FRAMED = 'LAYOUT_TYPE_FRAMED';
const LAYOUT_TYPE_BOXED = 'LAYOUT_TYPE_BOXED';
const LAYOUT_TYPE_FULL = 'LAYOUT_TYPE_FULL';
const NAV_STYLE = 'NAV_STYLE';
const NAV_STYLE_FIXED = 'NAV_STYLE_FIXED';
const NAV_STYLE_MINI_SIDEBAR = 'NAV_STYLE_MINI_SIDEBAR';
const NAV_STYLE_DRAWER = 'NAV_STYLE_DRAWER';
const NAV_STYLE_NO_HEADER_MINI_SIDEBAR = 'NAV_STYLE_NO_HEADER_MINI_SIDEBAR';
const NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR = 'NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR';
const NAV_STYLE_DEFAULT_HORIZONTAL = 'NAV_STYLE_DEFAULT_HORIZONTAL';
const NAV_STYLE_DARK_HORIZONTAL = 'NAV_STYLE_DARK_HORIZONTAL';
const NAV_STYLE_INSIDE_HEADER_HORIZONTAL = 'NAV_STYLE_INSIDE_HEADER_HORIZONTAL';
const NAV_STYLE_BELOW_HEADER = 'NAV_STYLE_BELOW_HEADER';
const NAV_STYLE_ABOVE_HEADER = 'NAV_STYLE_ABOVE_HEADER';
const LIGHT_PURPLE = '#8A2BE2';
const LIGHT_PURPLE_SEC = '#00B378';
const LIGHT_PURPLE_NAV_DARK_BG = '#32394F';
const LIGHT_PURPLE_DARK_TEXT_COLOR = '#9799AC';
const RED = '#FF2B7A';
const RED_SEC = '#00D9C9';
const RED_NAV_DARK_BG = '#3C3766';
const RED_DARK_TEXT_COLOR = '#878BAB';
const BLUE = '#3DA4E6';
const BLUE_SEC = '#FCB53B';
const BLUE_NAV_DARK_BG = '#444342';
const BLUE_DARK_TEXT_COLOR = '#AAA59A';
const DARK_BLUE = '#0469B9';
const DARK_BLUE_SEC = '#17BDE5';
const DARK_BLUE_NAV_DARK_BG = '#086880';
const DARK_BLUE_DARK_TEXT_COLOR = '#9DDAE9';
const ORANGE = '#F18805';
const ORANGE_SEC = '#F1D065';
const ORANGE_NAV_DARK_BG = '#272932';
const ORANGE_DARK_TEXT_COLOR = '#ABA895';
const LIGHT_BLUE = '#6A95FF';
const LIGHT_BLUE_SEC = '#59DCFF';
const LIGHT_BLUE_NAV_DARK_BG = '#1B2642';
const LIGHT_BLUE_DARK_TEXT_COLOR = '#92A2C8';
const DEEP_ORANGE = '#F87060';
const DEEP_ORANGE_SEC = '#70A288';
const DEEP_ORANGE_NAV_DARK_BG = '#08415C';
const DEEP_ORANGE_DARK_TEXT_COLOR = '#97B8C7';
const LIGHT_PURPLE_1 = '#A172E7';
const LIGHT_PURPLE_1_SEC = '#E14594';
const LIGHT_PURPLE_1_NAV_DARK_BG = '#182952';
const LIGHT_PURPLE_1_DARK_TEXT_COLOR = '#8288B4';
const LIGHT_PURPLE_2 = '#956FE7';
const LIGHT_PURPLE_2_SEC = '#64D7D6';
const LIGHT_PURPLE_2_NAV_DARK_BG = '#284C7C';
const LIGHT_PURPLE_2_DARK_TEXT_COLOR = '#5782BB';
const TAB_SIZE = 992;

/***/ }),

/***/ "./firebaseConfig/index.js":
/*!*********************************!*\
  !*** ./firebaseConfig/index.js ***!
  \*********************************/
/*! exports provided: database, auth, googleAuthProvider, githubAuthProvider, facebookAuthProvider, twitterAuthProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "database", function() { return database; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auth", function() { return auth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "googleAuthProvider", function() { return googleAuthProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "githubAuthProvider", function() { return githubAuthProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "facebookAuthProvider", function() { return facebookAuthProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "twitterAuthProvider", function() { return twitterAuthProvider; });
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase */ "firebase");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_0__);
 // Initialize Firebase

const config = {
  apiKey: "AIzaSyAz-GPfA-hN74oFh3XvXsF9vQrlE5xpU10",
  authDomain: "wieldy-4f59c.firebaseapp.com",
  databaseURL: "https://wieldy-4f59c.firebaseio.com",
  projectId: "wieldy-4f59c",
  storageBucket: "wieldy-4f59c.appspot.com",
  messagingSenderId: "81949884261"
};

if (!firebase__WEBPACK_IMPORTED_MODULE_0___default.a.apps.length) {
  firebase__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp(config);
}

const auth = firebase__WEBPACK_IMPORTED_MODULE_0___default.a.auth();
const googleAuthProvider = new firebase__WEBPACK_IMPORTED_MODULE_0___default.a.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase__WEBPACK_IMPORTED_MODULE_0___default.a.auth.FacebookAuthProvider();
const githubAuthProvider = new firebase__WEBPACK_IMPORTED_MODULE_0___default.a.auth.GithubAuthProvider();
const twitterAuthProvider = new firebase__WEBPACK_IMPORTED_MODULE_0___default.a.auth.TwitterAuthProvider();
const database = firebase__WEBPACK_IMPORTED_MODULE_0___default.a.database();


/***/ }),

/***/ "./lngProvider/entries/ar_SA.js":
/*!**************************************!*\
  !*** ./lngProvider/entries/ar_SA.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_locale_provider_en_US__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/locale-provider/en_US */ "antd/lib/locale-provider/en_US");
/* harmony import */ var antd_lib_locale_provider_en_US__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_locale_provider_en_US__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _locales_ar_SA_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../locales/ar_SA.json */ "./lngProvider/locales/ar_SA.json");
var _locales_ar_SA_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../locales/ar_SA.json */ "./lngProvider/locales/ar_SA.json", 1);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const saLang = {
  messages: _objectSpread({}, _locales_ar_SA_json__WEBPACK_IMPORTED_MODULE_1__),
  antd: antd_lib_locale_provider_en_US__WEBPACK_IMPORTED_MODULE_0___default.a,
  locale: 'ar'
};
/* harmony default export */ __webpack_exports__["default"] = (saLang);

/***/ }),

/***/ "./lngProvider/entries/en-US.js":
/*!**************************************!*\
  !*** ./lngProvider/entries/en-US.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_locale_provider_en_US__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/locale-provider/en_US */ "antd/lib/locale-provider/en_US");
/* harmony import */ var antd_lib_locale_provider_en_US__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_locale_provider_en_US__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _locales_en_US_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../locales/en_US.json */ "./lngProvider/locales/en_US.json");
var _locales_en_US_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../locales/en_US.json */ "./lngProvider/locales/en_US.json", 1);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const EnLang = {
  messages: _objectSpread({}, _locales_en_US_json__WEBPACK_IMPORTED_MODULE_1__),
  antd: antd_lib_locale_provider_en_US__WEBPACK_IMPORTED_MODULE_0___default.a,
  locale: 'en-US'
};
/* harmony default export */ __webpack_exports__["default"] = (EnLang);

/***/ }),

/***/ "./lngProvider/entries/es_ES.js":
/*!**************************************!*\
  !*** ./lngProvider/entries/es_ES.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_locale_provider_ca_ES__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/locale-provider/ca_ES */ "antd/lib/locale-provider/ca_ES");
/* harmony import */ var antd_lib_locale_provider_ca_ES__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_locale_provider_ca_ES__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _locales_es_ES_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../locales/es_ES.json */ "./lngProvider/locales/es_ES.json");
var _locales_es_ES_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../locales/es_ES.json */ "./lngProvider/locales/es_ES.json", 1);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const saLang = {
  messages: _objectSpread({}, _locales_es_ES_json__WEBPACK_IMPORTED_MODULE_1__),
  antd: antd_lib_locale_provider_ca_ES__WEBPACK_IMPORTED_MODULE_0___default.a,
  locale: 'es'
};
/* harmony default export */ __webpack_exports__["default"] = (saLang);

/***/ }),

/***/ "./lngProvider/entries/fr_FR.js":
/*!**************************************!*\
  !*** ./lngProvider/entries/fr_FR.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_locale_provider_fr_FR__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/locale-provider/fr_FR */ "antd/lib/locale-provider/fr_FR");
/* harmony import */ var antd_lib_locale_provider_fr_FR__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_locale_provider_fr_FR__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _locales_fr_FR_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../locales/fr_FR.json */ "./lngProvider/locales/fr_FR.json");
var _locales_fr_FR_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../locales/fr_FR.json */ "./lngProvider/locales/fr_FR.json", 1);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const saLang = {
  messages: _objectSpread({}, _locales_fr_FR_json__WEBPACK_IMPORTED_MODULE_1__),
  antd: antd_lib_locale_provider_fr_FR__WEBPACK_IMPORTED_MODULE_0___default.a,
  locale: 'fr-FR'
};
/* harmony default export */ __webpack_exports__["default"] = (saLang);

/***/ }),

/***/ "./lngProvider/entries/it_IT.js":
/*!**************************************!*\
  !*** ./lngProvider/entries/it_IT.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_locale_provider_it_IT__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/locale-provider/it_IT */ "antd/lib/locale-provider/it_IT");
/* harmony import */ var antd_lib_locale_provider_it_IT__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_locale_provider_it_IT__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _locales_it_IT_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../locales/it_IT.json */ "./lngProvider/locales/it_IT.json");
var _locales_it_IT_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../locales/it_IT.json */ "./lngProvider/locales/it_IT.json", 1);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const saLang = {
  messages: _objectSpread({}, _locales_it_IT_json__WEBPACK_IMPORTED_MODULE_1__),
  antd: antd_lib_locale_provider_it_IT__WEBPACK_IMPORTED_MODULE_0___default.a,
  locale: 'it-IT'
};
/* harmony default export */ __webpack_exports__["default"] = (saLang);

/***/ }),

/***/ "./lngProvider/entries/ru_RU.js":
/*!**************************************!*\
  !*** ./lngProvider/entries/ru_RU.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_locale_provider_ru_RU__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/locale-provider/ru_RU */ "antd/lib/locale-provider/ru_RU");
/* harmony import */ var antd_lib_locale_provider_ru_RU__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_locale_provider_ru_RU__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _locales_ru_RU_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../locales/ru_RU.json */ "./lngProvider/locales/ru_RU.json");
var _locales_ru_RU_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../locales/ru_RU.json */ "./lngProvider/locales/ru_RU.json", 1);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const RuLang = {
  messages: _objectSpread({}, _locales_ru_RU_json__WEBPACK_IMPORTED_MODULE_1__),
  antd: antd_lib_locale_provider_ru_RU__WEBPACK_IMPORTED_MODULE_0___default.a,
  locale: 'ru-RU'
};
/* harmony default export */ __webpack_exports__["default"] = (RuLang);

/***/ }),

/***/ "./lngProvider/entries/zh-Hans-CN.js":
/*!*******************************************!*\
  !*** ./lngProvider/entries/zh-Hans-CN.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _locales_zh_Hans_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../locales/zh-Hans.json */ "./lngProvider/locales/zh-Hans.json");
var _locales_zh_Hans_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../locales/zh-Hans.json */ "./lngProvider/locales/zh-Hans.json", 1);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const ZhLan = {
  messages: _objectSpread({}, _locales_zh_Hans_json__WEBPACK_IMPORTED_MODULE_0__),
  antd: null,
  locale: 'zh-Hans-CN'
};
/* harmony default export */ __webpack_exports__["default"] = (ZhLan);

/***/ }),

/***/ "./lngProvider/index.js":
/*!******************************!*\
  !*** ./lngProvider/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _entries_en_US__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entries/en-US */ "./lngProvider/entries/en-US.js");
/* harmony import */ var _entries_zh_Hans_CN__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./entries/zh-Hans-CN */ "./lngProvider/entries/zh-Hans-CN.js");
/* harmony import */ var _entries_ar_SA__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./entries/ar_SA */ "./lngProvider/entries/ar_SA.js");
/* harmony import */ var _entries_it_IT__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./entries/it_IT */ "./lngProvider/entries/it_IT.js");
/* harmony import */ var _entries_es_ES__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./entries/es_ES */ "./lngProvider/entries/es_ES.js");
/* harmony import */ var _entries_fr_FR__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./entries/fr_FR */ "./lngProvider/entries/fr_FR.js");
/* harmony import */ var _entries_ru_RU__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./entries/ru_RU */ "./lngProvider/entries/ru_RU.js");







const AppLocale = {
  en: _entries_en_US__WEBPACK_IMPORTED_MODULE_0__["default"],
  zh: _entries_zh_Hans_CN__WEBPACK_IMPORTED_MODULE_1__["default"],
  ar: _entries_ar_SA__WEBPACK_IMPORTED_MODULE_2__["default"],
  it: _entries_it_IT__WEBPACK_IMPORTED_MODULE_3__["default"],
  es: _entries_es_ES__WEBPACK_IMPORTED_MODULE_4__["default"],
  fr: _entries_fr_FR__WEBPACK_IMPORTED_MODULE_5__["default"],
  ru: _entries_ru_RU__WEBPACK_IMPORTED_MODULE_6__["default"]
};
/* harmony default export */ __webpack_exports__["default"] = (AppLocale);

/***/ }),

/***/ "./lngProvider/locales/ar_SA.json":
/*!****************************************!*\
  !*** ./lngProvider/locales/ar_SA.json ***!
  \****************************************/
/*! exports provided: app.announced, sidebar.main, sidebar.dashboard, sidebar.layouts, sidebar.dashboard.crm, sidebar.components, sidebar.components.general, sidebar.general.button, sidebar.general.icon, sidebar.components.navigation, sidebar.navigation.affix, sidebar.navigation.breadcrumb, sidebar.navigation.dropdown, sidebar.navigation.menu, sidebar.navigation.pagination, sidebar.navigation.steps, sidebar.components.dataEntry, sidebar.dataEntry.autoComplete, sidebar.dataEntry.checkbox, sidebar.dataEntry.cascader, sidebar.dataEntry.datePicker, sidebar.dataEntry.form, sidebar.dataEntry.inputNumber, sidebar.dataEntry.input, sidebar.dataEntry.mention, sidebar.dataEntry.rate, sidebar.dataEntry.radio, sidebar.dataEntry.switch, sidebar.dataEntry.slider, sidebar.dataEntry.select, sidebar.dataEntry.treeSelect, sidebar.dataEntry.transfer, sidebar.dataEntry.timePicker, sidebar.dataEntry.upload, sidebar.components.dataDisplay, sidebar.dataDisplay.avatar, sidebar.dataDisplay.badge, sidebar.dataDisplay.collapse, sidebar.dataDisplay.carousel, sidebar.dataDisplay.card, sidebar.dataDisplay.calender, sidebar.dataDisplay.list, sidebar.dataDisplay.popover, sidebar.dataDisplay.tree, sidebar.dataDisplay.toolTips, sidebar.dataDisplay.timeLine, sidebar.dataDisplay.tag, sidebar.dataDisplay.tabs, sidebar.dataDisplay.table, sidebar.components.feedBack, sidebar.feedBack.alert, sidebar.feedBack.modal, sidebar.feedBack.message, sidebar.feedBack.notification, sidebar.feedBack.progress, sidebar.feedBack.popConfirm, sidebar.feedBack.spin, sidebar.components.other, sidebar.other.anchor, sidebar.other.backTop, sidebar.other.divider, sidebar.widgets, sidebar.metrics, sidebar.view, sidebar.view.basicTable, sidebar.view.dataTable, sidebar.extensions, sidebar.extensions.editior, sidebar.extensions.dragNDrop, sidebar.extensions.sweetAlert, sidebar.extensions.notification, sidebar.extensions.reactDates, sidebar.extensions.dropZone, sidebar.googleMap, sidebar.charts, sidebar.apps, sidebar.mailApp, sidebar.todoApp, sidebar.contactsApp, sidebar.chatApp, sidebar.pickers, sidebar.notes, sidebar.crud, sidebar.pickers.dateTimePickers, sidebar.pickers.colorPickers, sidebar.chart, sidebar.chart.line, sidebar.chart.bar, sidebar.chart.area, sidebar.chart.composed, sidebar.chart.scatter, sidebar.chart.pie, sidebar.chart.radial, sidebar.chart.radar, sidebar.chart.tree, sidebar.map, sidebar.map.simple, sidebar.map.styled, sidebar.map.geoLocation, sidebar.map.mapDirection, sidebar.map.overlay, sidebar.map.kmLayer, sidebar.map.popupInfo, sidebar.map.trafficLayer, sidebar.map.streetView, sidebar.map.eventListener, sidebar.map.mapDrawing, sidebar.map.mapClustering, sidebar.modules, sidebar.calendar, sidebar.calendar.basic, sidebar.calendar.cultures, sidebar.calendar.dnd, sidebar.calendar.popup, sidebar.calendar.rendering, sidebar.calendar.selectable, sidebar.calendar.timeslots, sidebar.mail.title, sidebar.mail.compose, sidebar.mail.mailbox, sidebar.mail.filters, sidebar.mail.labels, sidebar.eCommerce, sidebar.eCommerce.productList, sidebar.eCommerce.productGrid, sidebar.extraComponents, sidebar.inBuiltApp, sidebar.extraElements.callouts, sidebar.extraElements.testimonials, sidebar.timeLine, sidebar.timeLine.default, sidebar.timeLine.defaultwithIcons, sidebar.timeLine.leftAligned, sidebar.extraElements.pricingTable, sidebar.customViews, sidebar.listType, sidebar.listType.extras, sidebar.listType.plainListView, sidebar.listType.withDivider, sidebar.listType.cardListView, sidebar.extraPages.404, sidebar.extraPages.500, sidebar.extraPages, app.userAuth, app.userAuth.login, app.userAuth.signIn, app.userAuth.send, app.userAuth.bySigning, app.userAuth.or, app.userAuth.forgotPassword, app.userAuth.forgot, app.userAuth.signUp, app.userAuth.getAccount, app.userAuth.resetPassword, app.userAuth.reset, app.userAuth.lockScreen, app.userAuth.unLock, appModule.enterPasswordUnlock, appModule.enterPasswordReset, appModule.loginSuccessfully, appModule.password, appModule.email, appModule.name, appModule.phone, appModule.designation, appModule.regsiter, appModule.regsiterNow, appModule.hvAccount, appModule.createAccount, appModule.termAndCondition, appModule.iAccept, todo, todo.addTask, todo.all, todo.filters, todo.labels, chat.selectUserChat, chat.selectContactChat, chat.chatUser, chat.contacts, chat.searchStartNewChat, chat.typeMessage, chat.status, contact.saveContact, contact.addContact, contact.searchContact, mail.mailbox, mail.compose, mail.filters, mail.labels, mail.title, eCommerce.buyNow, eCommerce.addToCart, eCommerce.readMore, callouts.viewRange, callouts.basic, extraElements.callout, testimonials.basic, testimonials.classic, testimonials.standard, extraElements.testimonials, button.modify, button.delete, pricingTable.basic, pricingTable.circle, pricingTable.classic, pricingTable.dark, pricingTable.personal, pricingTable.easyTranslation, pricingTable.awesomeGoogleFonts, pricingTable.hotelBookingSystem, pricingTable.emailComposeInterface, pricingTable.locationFinderApp, pricingTable.buyNow, pricingTable.business, pricingTable.professional, button.yes, button.no, extraPages.404Msg, extraPages.500Msg, extraPages.goHome, extension.sweetAlerts, sweetAlerts.basic, sweetAlerts.description, sweetAlerts.success, sweetAlerts.warning, sweetAlerts.custom, sweetAlerts.htmlTag, sweetAlerts.prompt, sweetAlerts.itsBlue, sweetAlerts.passwordPrompt, sweetAlerts.customStyle, sweetAlerts.itPretty, sweetAlerts.btnClicked, sweetAlerts.youWillFind, sweetAlerts.youWillNotAble, sweetAlerts.hereIsaMessage, sweetAlerts.goodJob, sweetAlerts.yesDeleteIt, sweetAlerts.areYouSure, sweetAlerts.doYouLikeThumb, sweetAlerts.anInput, sweetAlerts.writeSomethingInteresting, sweetAlerts.writeSomething, sweetAlerts.youMustEnterPassword, sweetAlerts.enterPassword, extension.notification, notification.infoMsg, notification.successMessage, notification.warningMessage, notification.closeAfter3000ms, notification.errorMessage, notification.titleHere, notification.clickMe, notification.info, notification.success, notification.warning, notification.error, sidebar.editors, sidebar.editors.CKEditor, sidebar.editors.WYSISWYGEditor, picker.color.alpha, picker.color.hue, picker.color.circle, picker.color.compact, picker.color.block, picker.color.chrome, picker.color.github, picker.color.twitter, picker.color.withRedux, picker.color.sketch, picker.color.material, picker.color.slider, picker.color.basic, picker.color.basicToggle, picker.color.custom, picker.color.customPointer, picker.color.photoshop, picker.color.swatches, picker.color.basicPositioning, sidebar.documents, sidebar.documents.changelog, sidebar.documents.installation, sidebar.dashboard.listing, sidebar.dashboard.crypto, sidebar.algolia, sidebar.components.rechart, sidebar.components.amchart, sidebar.google.map, sidebar.ammap, sidebar.map.animations.lines, sidebar.map.curved.lines, sidebar.map.zooming.countries, sidebar.map.patterns, sidebar.map.capitals.map, sidebar.map.markers, sidebar.map.flight.routes, sidebar.map.choropleth, sidebar.map.grouped.countries, sidebar.map.bubbles, sidebar.map.drill.down, sidebar.map.multiple.areas, sidebar.map.weather, sidebar.extensions.shuffle, sidebar.extensions.profile, sidebar.social, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"app.announced\":\"سيتم إصدار نسخة جديدة في 25 ديسمبر. ترّقب!\",\"sidebar.main\":\"الأساسية\",\"sidebar.dashboard\":\"لوحة القيادة\",\"sidebar.layouts\":\"تخطيطات\",\"sidebar.dashboard.crm\":\"إدارة علاقات العملاء\",\"sidebar.components\":\"المكونات\",\"sidebar.components.general\":\"جنرال لواء\",\"sidebar.general.button\":\"زر\",\"sidebar.general.icon\":\"أيقونة\",\"sidebar.components.navigation\":\"التنقل\",\"sidebar.navigation.affix\":\"لصق\",\"sidebar.navigation.breadcrumb\":\"التفصيلي\",\"sidebar.navigation.dropdown\":\"اسقاط\",\"sidebar.navigation.menu\":\"قائمة طعام\",\"sidebar.navigation.pagination\":\"ترقيم الصفحات\",\"sidebar.navigation.steps\":\"خطوات\",\"sidebar.components.dataEntry\":\"ادخال بيانات\",\"sidebar.dataEntry.autoComplete\":\"الإكمال التلقائي\",\"sidebar.dataEntry.checkbox\":\"مربع\",\"sidebar.dataEntry.cascader\":\"Cascader\",\"sidebar.dataEntry.datePicker\":\"منتقي التاريخ\",\"sidebar.dataEntry.form\":\"شكل\",\"sidebar.dataEntry.inputNumber\":\"InputNumber\",\"sidebar.dataEntry.input\":\"إدخال\",\"sidebar.dataEntry.mention\":\"أشير\",\"sidebar.dataEntry.rate\":\"معدل\",\"sidebar.dataEntry.radio\":\"راديو\",\"sidebar.dataEntry.switch\":\"مفتاح كهربائي\",\"sidebar.dataEntry.slider\":\"المنزلق\",\"sidebar.dataEntry.select\":\"تحديد\",\"sidebar.dataEntry.treeSelect\":\"TreeSelect\",\"sidebar.dataEntry.transfer\":\"نقل\",\"sidebar.dataEntry.timePicker\":\"منتقي الوقت\",\"sidebar.dataEntry.upload\":\"تحميل\",\"sidebar.components.dataDisplay\":\"عرض البيانات\",\"sidebar.dataDisplay.avatar\":\"الصورة الرمزية\",\"sidebar.dataDisplay.badge\":\"شارة\",\"sidebar.dataDisplay.collapse\":\"انهدام\",\"sidebar.dataDisplay.carousel\":\"دائري\",\"sidebar.dataDisplay.card\":\"بطاقة\",\"sidebar.dataDisplay.calender\":\"التقويم\",\"sidebar.dataDisplay.list\":\"قائمة\",\"sidebar.dataDisplay.popover\":\"قائمة\",\"sidebar.dataDisplay.tree\":\"شجرة\",\"sidebar.dataDisplay.toolTips\":\"تلميحات\",\"sidebar.dataDisplay.timeLine\":\"الجدول الزمني\",\"sidebar.dataDisplay.tag\":\"بطاقة\",\"sidebar.dataDisplay.tabs\":\"علامات التبويب\",\"sidebar.dataDisplay.table\":\"الطاولة\",\"sidebar.components.feedBack\":\"ردود الفعل\",\"sidebar.feedBack.alert\":\"محزر\",\"sidebar.feedBack.modal\":\"شكلي\",\"sidebar.feedBack.message\":\"رسالة\",\"sidebar.feedBack.notification\":\"إعلام\",\"sidebar.feedBack.progress\":\"تقدم\",\"sidebar.feedBack.popConfirm\":\"البوب تأكيد\",\"sidebar.feedBack.spin\":\"غزل\",\"sidebar.components.other\":\"آخر\",\"sidebar.other.anchor\":\"مذيع الأخبار\",\"sidebar.other.backTop\":\"عودة أعلى\",\"sidebar.other.divider\":\"مقسم\",\"sidebar.widgets\":\"الحاجيات\",\"sidebar.metrics\":\"قياس\",\"sidebar.view\":\"رأي\",\"sidebar.view.basicTable\":\"الجدول الأساسي\",\"sidebar.view.dataTable\":\"جدول البيانات\",\"sidebar.extensions\":\"ملحقات\",\"sidebar.extensions.editior\":\"محرر\",\"sidebar.extensions.dragNDrop\":\"السحب والإسقاط\",\"sidebar.extensions.sweetAlert\":\"الحلو تنبيه\",\"sidebar.extensions.notification\":\"إعلام\",\"sidebar.extensions.reactDates\":\"رد فعل التواريخ\",\"sidebar.extensions.dropZone\":\"إسقاط المنطقة\",\"sidebar.googleMap\":\"خرائط جوجل\",\"sidebar.charts\":\"الرسوم البيانية\",\"sidebar.apps\":\"التطبيقات\",\"sidebar.mailApp\":\"تطبيق البريد\",\"sidebar.todoApp\":\"تودو التطبيق\",\"sidebar.contactsApp\":\"اتصالات التطبيق\",\"sidebar.chatApp\":\"تطبيق الدردشة\",\"sidebar.pickers\":\"جامعي\",\"sidebar.notes\":\"ملاحظات\",\"sidebar.crud\":\"Firebase CRUD\",\"sidebar.pickers.dateTimePickers\":\"التاريخ والوقت\",\"sidebar.pickers.colorPickers\":\"قارورة اللون\",\"sidebar.chart\":\"خريطة\",\"sidebar.chart.line\":\"خط الرسم البياني\",\"sidebar.chart.bar\":\"شريط الرسم البياني\",\"sidebar.chart.area\":\"مخطط المساحة\",\"sidebar.chart.composed\":\"الرسم البياني\",\"sidebar.chart.scatter\":\"مخطط مبعثر\",\"sidebar.chart.pie\":\"مخطط دائري\",\"sidebar.chart.radial\":\"مخطط نصف قطري\",\"sidebar.chart.radar\":\"مخطط الرادار\",\"sidebar.chart.tree\":\"مخطط شجرة\",\"sidebar.map\":\"خرائط جوجل\",\"sidebar.map.simple\":\"خرائط جوجل...\",\"sidebar.map.styled\":\"خريطة نصب\",\"sidebar.map.geoLocation\":\"الموقع الجغرافي\",\"sidebar.map.mapDirection\":\"خريطة الاتجاه\",\"sidebar.map.overlay\":\"تراكب الخريطة\",\"sidebar.map.kmLayer\":\"خريطة كم طبقة\",\"sidebar.map.popupInfo\":\"معلومات المنبثقة من الخريطة\",\"sidebar.map.trafficLayer\":\"خريطة حركة المرور\",\"sidebar.map.streetView\":\"منظر الشارع\",\"sidebar.map.eventListener\":\"مستمع الحدث\",\"sidebar.map.mapDrawing\":\"خريطة الرسم\",\"sidebar.map.mapClustering\":\"خريطة المجموعات\",\"sidebar.modules\":\"وحدات\",\"sidebar.calendar\":\"التقويم\",\"sidebar.calendar.basic\":\"الأساسية\",\"sidebar.calendar.cultures\":\"الثقافات\",\"sidebar.calendar.dnd\":\"DND\",\"sidebar.calendar.popup\":\"يظهر فجأة\",\"sidebar.calendar.rendering\":\"استدعاء\",\"sidebar.calendar.selectable\":\"اختيار\",\"sidebar.calendar.timeslots\":\"فتحات الوقت\",\"sidebar.mail.title\":\"بريد\",\"sidebar.mail.compose\":\"مؤلف موسيقى\",\"sidebar.mail.mailbox\":\"صندوق بريد\",\"sidebar.mail.filters\":\"مرشحات\",\"sidebar.mail.labels\":\"تسميات\",\"sidebar.eCommerce\":\"التجارة الإلكترونية\",\"sidebar.eCommerce.productList\":\"قائمة المنتجات\",\"sidebar.eCommerce.productGrid\":\"شبكة المنتج\",\"sidebar.extraComponents\":\"مكونات اضافية\",\"sidebar.inBuiltApp\":\"تطبيقات مدمجة\",\"sidebar.extraElements.callouts\":\"صرخ\",\"sidebar.extraElements.testimonials\":\"الشهادات - التوصيات\",\"sidebar.timeLine\":\"الجدول الزمني\",\"sidebar.timeLine.default\":\"افتراضي\",\"sidebar.timeLine.defaultwithIcons\":\"الافتراضي مع الرموز\",\"sidebar.timeLine.leftAligned\":\"اليسار الانحياز\",\"sidebar.extraElements.pricingTable\":\"جدول التسعير\",\"sidebar.customViews\":\"طرق عرض مخصصة\",\"sidebar.listType\":\"نوع القائمة\",\"sidebar.listType.extras\":\"إضافات\",\"sidebar.listType.plainListView\":\"عرض قائمة بسيطة\",\"sidebar.listType.withDivider\":\"قائمة بسيطة مع المفرق\",\"sidebar.listType.cardListView\":\"عرض قائمة البطاقات\",\"sidebar.extraPages.404\":\"404 خطأ الصفحة\",\"sidebar.extraPages.500\":\"500 خطأ الصفحة\",\"sidebar.extraPages\":\"صفحات اضافية\",\"app.userAuth\":\"مصادقة المستخدم\",\"app.userAuth.login\":\"تسجيل الدخول\",\"app.userAuth.signIn\":\"تسجيل الدخول\",\"app.userAuth.send\":\"إرسال\",\"app.userAuth.bySigning\":\"من خلال التسجيل ، يمكنك الاستفادة من الميزات الكاملة لخدماتنا.\",\"app.userAuth.or\":\"أو\",\"app.userAuth.forgotPassword\":\"هل نسيت كلمة المرور\",\"app.userAuth.forgot\":\"لا تقلق. استعادة كلمة المرور أمر سهل. فقط أخبرنا بالبريد الإلكتروني الذي قمت بالتسجيل به مع jumbo\",\"app.userAuth.signUp\":\"سجل\",\"app.userAuth.getAccount\":\"الحصول على حساب !!!\",\"app.userAuth.resetPassword\":\"إعادة ضبط كلمة المرور\",\"app.userAuth.reset\":\"إعادة تعيين\",\"app.userAuth.lockScreen\":\"اقفل الشاشة\",\"app.userAuth.unLock\":\"فتح\",\"appModule.enterPasswordUnlock\":\"أدخل كلمة المرور الخاصة بك لفتح الشاشة!\",\"appModule.enterPasswordReset\":\"أدخل كلمة مرور جديدة لحسابك\",\"appModule.loginSuccessfully\":\"تسجيل الدخول بنجاح\",\"appModule.password\":\"كلمه السر\",\"appModule.email\":\"البريد الإلكتروني\",\"appModule.name\":\"اسم\",\"appModule.phone\":\"هاتف\",\"appModule.designation\":\"تعيين\",\"appModule.regsiter\":\"تسجيل\",\"appModule.regsiterNow\":\"تسجيل رقم\",\"appModule.hvAccount\":\"لديك حساب\",\"appModule.createAccount\":\"انشئ حساب\",\"appModule.termAndCondition\":\"الشروط و الأحكام\",\"appModule.iAccept\":\"بالاشتراك ، أوافق\",\"todo\":\"لكى يفعل\",\"todo.addTask\":\"إضافة مهمة\",\"todo.all\":\"الكل\",\"todo.filters\":\"مرشحات\",\"todo.labels\":\"تسميات\",\"chat.selectUserChat\":\"اختر المستخدم لبدء الدردشة\",\"chat.selectContactChat\":\"حدد جهة اتصال لبدء الدردشة\",\"chat.chatUser\":\"دردشات\",\"chat.contacts\":\"جهات الاتصال\",\"chat.searchStartNewChat\":\"ابحث أو ابدأ محادثة جديدة\",\"chat.typeMessage\":\"اكتب واضغط على Enter لإرسال الرسالة\",\"chat.status\":\"انها حالة .... وليس يومياتك ...\",\"contact.saveContact\":\"حفظ الاتصال\",\"contact.addContact\":\"إضافة جهة اتصال\",\"contact.searchContact\":\"بحث الاتصال\",\"mail.mailbox\":\"صندوق بريد\",\"mail.compose\":\"مؤلف موسيقى\",\"mail.filters\":\"مرشحات\",\"mail.labels\":\"تسميات\",\"mail.title\":\"رسالة جديدة\",\"eCommerce.buyNow\":\"اشتري الآن\",\"eCommerce.addToCart\":\"أضف إلى السلة\",\"eCommerce.readMore\":\"اقرأ أكثر\",\"callouts.viewRange\":\"عرض النطاق\",\"callouts.basic\":\"الأساسية\",\"extraElements.callout\":\"عنصر إضافي\",\"testimonials.basic\":\"الأساسية\",\"testimonials.classic\":\"كلاسيكي\",\"testimonials.standard\":\"اساسي\",\"extraElements.testimonials\":\"الشهادات - التوصيات\",\"button.modify\":\"تعديل\",\"button.delete\":\"حذف\",\"pricingTable.basic\":\"الأساسية\",\"pricingTable.circle\":\"دائرة\",\"pricingTable.classic\":\"كلاسيكي\",\"pricingTable.dark\":\"داكن\",\"pricingTable.personal\":\"الشخصية\",\"pricingTable.easyTranslation\":\"الترجمة السهلة\",\"pricingTable.awesomeGoogleFonts\":\"رائع جوجل الخطوط\",\"pricingTable.hotelBookingSystem\":\"نظام حجز الفنادق\",\"pricingTable.emailComposeInterface\":\"البريد الإلكتروني تأليف واجهة\",\"pricingTable.locationFinderApp\":\"موقع الباحث عن التطبيق\",\"pricingTable.buyNow\":\"اشتري الآن\",\"pricingTable.business\":\"اعمال\",\"pricingTable.professional\":\"المحترفين\",\"button.yes\":\"نعم فعلا\",\"button.no\":\"لا\",\"extraPages.404Msg\":\"عفوًا ، حدث خطأ. الصفحة غير موجودة!\",\"extraPages.500Msg\":\"عذرا ، الخادم يذهب بشكل خاطئ\",\"extraPages.goHome\":\"الذهاب إلى المنزل\",\"extension.sweetAlerts\":\"تنبيهات حلوة\",\"sweetAlerts.basic\":\"الأساسية\",\"sweetAlerts.description\":\"مع الوصف\",\"sweetAlerts.success\":\"نجاح\",\"sweetAlerts.warning\":\"تحذير\",\"sweetAlerts.custom\":\"العادة\",\"sweetAlerts.htmlTag\":\"علامة Html\",\"sweetAlerts.prompt\":\"مستعجل\",\"sweetAlerts.itsBlue\":\"إنه أزرق!\",\"sweetAlerts.passwordPrompt\":\"كلمة المرور موجه\",\"sweetAlerts.customStyle\":\"نمط مخصص\",\"sweetAlerts.itPretty\":\"إنها جميلة ، أليس كذلك؟\",\"sweetAlerts.btnClicked\":\"لقد قمت بالنقر فوق الزر!\",\"sweetAlerts.youWillFind\":\"سوف تجد أنهم يصل!\",\"sweetAlerts.youWillNotAble\":\"لن تكون قادرًا على استرداد هذا الملف الوهمي!\",\"sweetAlerts.hereIsaMessage\":\"هنا رسالة!\",\"sweetAlerts.goodJob\":\"عمل جيد!\",\"sweetAlerts.yesDeleteIt\":\"نعم ، احذفها!\",\"sweetAlerts.areYouSure\":\"هل أنت واثق؟\",\"sweetAlerts.doYouLikeThumb\":\"هل تحب الإبهام؟\",\"sweetAlerts.anInput\":\"مدخلا!\",\"sweetAlerts.writeSomethingInteresting\":\"اكتب شيئًا مثيرًا للاهتمام:\",\"sweetAlerts.writeSomething\":\"أكتب شيئا\",\"sweetAlerts.youMustEnterPassword\":\"يجب عليك إدخال كلمة المرور الخاصة بك!\",\"sweetAlerts.enterPassword\":\"أدخل كلمة المرور\",\"extension.notification\":\"إعلام\",\"notification.infoMsg\":\"رسالة المعلومات\",\"notification.successMessage\":\"نجاح رسالة\",\"notification.warningMessage\":\"رسالة تحذير\",\"notification.closeAfter3000ms\":\"أغلق بعد 3000 مللي ثانية\",\"notification.errorMessage\":\"رسالة خطأ\",\"notification.titleHere\":\"العنوان هنا\",\"notification.clickMe\":\"انقر فوق لي!\",\"notification.info\":\"معلومات\",\"notification.success\":\"نجاح\",\"notification.warning\":\"تحذير\",\"notification.error\":\"خطأ\",\"sidebar.editors\":\"المحررين\",\"sidebar.editors.CKEditor\":\"CKEditor\",\"sidebar.editors.WYSISWYGEditor\":\"محرر WYSIWYG\",\"picker.color.alpha\":\"الفا القاطنون\",\"picker.color.hue\":\"هيو جامعي\",\"picker.color.circle\":\"دائرة منتقي\",\"picker.color.compact\":\"القارضون المدمجة\",\"picker.color.block\":\"بلوك جامعي\",\"picker.color.chrome\":\"كروم المنتقون\",\"picker.color.github\":\"جيثب بيكرز\",\"picker.color.twitter\":\"قارعي التغريد\",\"picker.color.withRedux\":\"مع Redux\",\"picker.color.sketch\":\"صانعي رسم\",\"picker.color.material\":\"جامعي المواد\",\"picker.color.slider\":\"المتزلجون جامعي\",\"picker.color.basic\":\"القتلة الأساسيين\",\"picker.color.basicToggle\":\"تبديل الأساسي\",\"picker.color.custom\":\"جامعي مخصص\",\"picker.color.customPointer\":\"مؤشر مخصص\",\"picker.color.photoshop\":\"قارورة فوتوشوب\",\"picker.color.swatches\":\"حوامل المنتزعون\",\"picker.color.basicPositioning\":\"المواقع الأساسية\",\"sidebar.documents\":\"مستندات\",\"sidebar.documents.changelog\":\"التغيير\",\"sidebar.documents.installation\":\"التركيب\",\"sidebar.dashboard.listing\":\"قائمة\",\"sidebar.dashboard.crypto\":\"التشفير\",\"sidebar.algolia\":\"Algolia\",\"sidebar.components.rechart\":\"ReChart\",\"sidebar.components.amchart\":\"AmChart\",\"sidebar.google.map\":\"Google Map\",\"sidebar.ammap\":\"AmMap\",\"sidebar.map.animations.lines\":\"مع الرسوم المتحركة\",\"sidebar.map.curved.lines\":\"مع الخطوط المنحنية\",\"sidebar.map.zooming.countries\":\"البلدان التكبير\",\"sidebar.map.patterns\":\"خريطة مع أنماط\",\"sidebar.map.capitals.map\":\"خريطة العواصم\",\"sidebar.map.markers\":\"علامات الخريطة\",\"sidebar.map.flight.routes\":\"رحلات الطيران\",\"sidebar.map.choropleth\":\"خريطة الحرارة\",\"sidebar.map.grouped.countries\":\"الدول المتجمعة\",\"sidebar.map.bubbles\":\"خريطة مع فقاعات\",\"sidebar.map.drill.down\":\"حفر أسفل الخريطة\",\"sidebar.map.multiple.areas\":\"مجالات متعددة\",\"sidebar.map.weather\":\"خريطة الطقس\",\"sidebar.extensions.shuffle\":\"خلط\",\"sidebar.extensions.profile\":\"الملف الشخصي\",\"sidebar.social\":\"التطبيقات الاجتماعية\"}");

/***/ }),

/***/ "./lngProvider/locales/en_US.json":
/*!****************************************!*\
  !*** ./lngProvider/locales/en_US.json ***!
  \****************************************/
/*! exports provided: app.announced, sidebar.main, sidebar.dashboard, sidebar.layouts, sidebar.dashboard.crm, sidebar.components, sidebar.components.general, sidebar.general.button, sidebar.general.icon, sidebar.components.navigation, sidebar.navigation.affix, sidebar.navigation.breadcrumb, sidebar.navigation.dropdown, sidebar.navigation.menu, sidebar.navigation.pagination, sidebar.navigation.steps, sidebar.components.dataEntry, sidebar.dataEntry.autoComplete, sidebar.dataEntry.checkbox, sidebar.dataEntry.cascader, sidebar.dataEntry.datePicker, sidebar.dataEntry.form, sidebar.dataEntry.inputNumber, sidebar.dataEntry.input, sidebar.dataEntry.mention, sidebar.dataEntry.rate, sidebar.dataEntry.radio, sidebar.dataEntry.switch, sidebar.dataEntry.slider, sidebar.dataEntry.select, sidebar.dataEntry.treeSelect, sidebar.dataEntry.transfer, sidebar.dataEntry.timePicker, sidebar.dataEntry.upload, sidebar.components.dataDisplay, sidebar.dataDisplay.avatar, sidebar.dataDisplay.badge, sidebar.dataDisplay.collapse, sidebar.dataDisplay.carousel, sidebar.dataDisplay.card, sidebar.dataDisplay.calender, sidebar.dataDisplay.list, sidebar.dataDisplay.popover, sidebar.dataDisplay.tree, sidebar.dataDisplay.toolTips, sidebar.dataDisplay.timeLine, sidebar.dataDisplay.tag, sidebar.dataDisplay.tabs, sidebar.dataDisplay.table, sidebar.components.feedBack, sidebar.feedBack.alert, sidebar.feedBack.modal, sidebar.feedBack.message, sidebar.feedBack.notification, sidebar.feedBack.progress, sidebar.feedBack.popConfirm, sidebar.feedBack.spin, sidebar.components.other, sidebar.other.anchor, sidebar.other.backTop, sidebar.other.divider, sidebar.widgets, sidebar.metrics, sidebar.view, sidebar.view.basicTable, sidebar.view.dataTable, sidebar.extensions, sidebar.extensions.editior, sidebar.extensions.dragNDrop, sidebar.extensions.sweetAlert, sidebar.extensions.notification, sidebar.extensions.reactDates, sidebar.extensions.dropZone, sidebar.googleMap, sidebar.charts, sidebar.apps, sidebar.mailApp, sidebar.todoApp, sidebar.contactsApp, sidebar.chatApp, sidebar.wall, sidebar.notes, sidebar.crud, sidebar.pickers, sidebar.pickers.dateTimePickers, sidebar.pickers.colorPickers, sidebar.chart, sidebar.chart.line, sidebar.chart.bar, sidebar.chart.area, sidebar.chart.composed, sidebar.chart.scatter, sidebar.chart.pie, sidebar.chart.radial, sidebar.chart.radar, sidebar.chart.tree, sidebar.map.simple, sidebar.map.styled, sidebar.map.geoLocation, sidebar.map.mapDirection, sidebar.map.overlay, sidebar.map.kmLayer, sidebar.map.popupInfo, sidebar.map.trafficLayer, sidebar.map.streetView, sidebar.map.eventListener, sidebar.map.mapDrawing, sidebar.map.mapClustering, sidebar.modules, sidebar.calendar, sidebar.calendar.basic, sidebar.calendar.cultures, sidebar.calendar.dnd, sidebar.calendar.popup, sidebar.calendar.rendering, sidebar.calendar.selectable, sidebar.calendar.timeslots, sidebar.mail.title, sidebar.mail.compose, sidebar.mail.mailbox, sidebar.mail.filters, sidebar.mail.labels, sidebar.eCommerce, sidebar.eCommerce.productList, sidebar.eCommerce.productGrid, sidebar.extraComponents, sidebar.inBuiltApp, sidebar.extraElements.callouts, sidebar.extraElements.testimonials, sidebar.timeLine, sidebar.timeLine.default, sidebar.timeLine.defaultwithIcons, sidebar.timeLine.leftAligned, sidebar.extraElements.pricingTable, sidebar.customViews, sidebar.listType, sidebar.listType.extras, sidebar.listType.plainListView, sidebar.listType.withDivider, sidebar.listType.cardListView, sidebar.extraPages.404, sidebar.extraPages.500, sidebar.extraPages, app.userAuth, app.userAuth.login, app.userAuth.signIn, app.userAuth.send, app.userAuth.bySigning, app.userAuth.or, app.userAuth.forgotPassword, app.userAuth.forgot, app.userAuth.signUp, app.userAuth.getAccount, app.userAuth.resetPassword, app.userAuth.reset, app.userAuth.lockScreen, app.userAuth.unLock, appModule.enterPasswordUnlock, appModule.enterPasswordReset, appModule.loginSuccessfully, appModule.password, appModule.email, appModule.name, appModule.phone, appModule.designation, appModule.regsiter, appModule.regsiterNow, appModule.hvAccount, appModule.createAccount, appModule.termAndCondition, appModule.iAccept, todo, todo.addTask, todo.all, todo.filters, todo.labels, chat.selectUserChat, chat.selectContactChat, chat.chatUser, chat.contacts, chat.searchStartNewChat, chat.typeMessage, chat.status, contact.saveContact, contact.addContact, contact.searchContact, mail.mailbox, mail.compose, mail.filters, mail.labels, mail.title, eCommerce.buyNow, eCommerce.addToCart, eCommerce.readMore, callouts.viewRange, callouts.basic, extraElements.callout, testimonials.basic, testimonials.classic, testimonials.standard, extraElements.testimonials, button.modify, button.delete, pricingTable.basic, pricingTable.circle, pricingTable.classic, pricingTable.dark, pricingTable.personal, pricingTable.easyTranslation, pricingTable.awesomeGoogleFonts, pricingTable.hotelBookingSystem, pricingTable.emailComposeInterface, pricingTable.locationFinderApp, pricingTable.buyNow, pricingTable.business, pricingTable.professional, button.yes, button.no, extraPages.404Msg, extraPages.500Msg, extraPages.goHome, extension.sweetAlerts, sweetAlerts.basic, sweetAlerts.description, sweetAlerts.success, sweetAlerts.warning, sweetAlerts.custom, sweetAlerts.htmlTag, sweetAlerts.prompt, sweetAlerts.itsBlue, sweetAlerts.passwordPrompt, sweetAlerts.customStyle, sweetAlerts.itPretty, sweetAlerts.btnClicked, sweetAlerts.youWillFind, sweetAlerts.youWillNotAble, sweetAlerts.hereIsaMessage, sweetAlerts.goodJob, sweetAlerts.yesDeleteIt, sweetAlerts.areYouSure, sweetAlerts.doYouLikeThumb, sweetAlerts.anInput, sweetAlerts.writeSomethingInteresting, sweetAlerts.writeSomething, sweetAlerts.youMustEnterPassword, sweetAlerts.enterPassword, extension.notification, notification.infoMsg, notification.successMessage, notification.warningMessage, notification.closeAfter3000ms, notification.errorMessage, notification.titleHere, notification.clickMe, notification.info, notification.success, notification.warning, notification.error, sidebar.editors, sidebar.editors.CKEditor, sidebar.editors.WYSISWYGEditor, picker.color.alpha, picker.color.hue, picker.color.circle, picker.color.compact, picker.color.block, picker.color.chrome, picker.color.github, picker.color.twitter, picker.color.withRedux, picker.color.sketch, picker.color.material, picker.color.slider, picker.color.basic, picker.color.basicToggle, picker.color.custom, picker.color.customPointer, picker.color.photoshop, picker.color.swatches, picker.color.basicPositioning, sidebar.documents, sidebar.documents.changelog, sidebar.documents.installation, sidebar.dashboard.listing, sidebar.dashboard.crypto, sidebar.map, sidebar.algolia, sidebar.firebase.crud, sidebar.components.rechart, sidebar.components.amchart, sidebar.google.map, sidebar.ammap, sidebar.map.animations.lines, sidebar.map.curved.lines, sidebar.map.zooming.countries, sidebar.map.patterns, sidebar.map.capitals.map, sidebar.map.markers, sidebar.map.flight.routes, sidebar.map.choropleth, sidebar.map.grouped.countries, sidebar.map.bubbles, sidebar.map.drill.down, sidebar.map.multiple.areas, sidebar.map.weather, sidebar.extensions.shuffle, sidebar.extensions.profile, sidebar.social, sidebar.ifi, sidebar.ifis, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"app.announced\":\"A new version will be released on December 25th. Stay tuned!\",\"sidebar.main\":\"Main\",\"sidebar.dashboard\":\"Dashboard\",\"sidebar.layouts\":\"Layouts\",\"sidebar.dashboard.crm\":\"Crm\",\"sidebar.components\":\"Components\",\"sidebar.components.general\":\"General\",\"sidebar.general.button\":\"Button\",\"sidebar.general.icon\":\"Icon\",\"sidebar.components.navigation\":\"Navigation\",\"sidebar.navigation.affix\":\"Affix\",\"sidebar.navigation.breadcrumb\":\"Breadcrumb\",\"sidebar.navigation.dropdown\":\"Dropdown\",\"sidebar.navigation.menu\":\"Menu\",\"sidebar.navigation.pagination\":\"Pagination\",\"sidebar.navigation.steps\":\"Steps\",\"sidebar.components.dataEntry\":\"Data Entry\",\"sidebar.dataEntry.autoComplete\":\"AutoComplete\",\"sidebar.dataEntry.checkbox\":\"Checkbox\",\"sidebar.dataEntry.cascader\":\"Cascader\",\"sidebar.dataEntry.datePicker\":\"Datepicker\",\"sidebar.dataEntry.form\":\"Form\",\"sidebar.dataEntry.inputNumber\":\"InputNumber\",\"sidebar.dataEntry.input\":\"Input\",\"sidebar.dataEntry.mention\":\"Mention\",\"sidebar.dataEntry.rate\":\"Rate\",\"sidebar.dataEntry.radio\":\"Radio\",\"sidebar.dataEntry.switch\":\"Switch\",\"sidebar.dataEntry.slider\":\"Slider\",\"sidebar.dataEntry.select\":\"Select\",\"sidebar.dataEntry.treeSelect\":\"TreeSelect\",\"sidebar.dataEntry.transfer\":\"Transfer\",\"sidebar.dataEntry.timePicker\":\"Time Picker\",\"sidebar.dataEntry.upload\":\"Upload\",\"sidebar.components.dataDisplay\":\"Data Display\",\"sidebar.dataDisplay.avatar\":\"Avatar\",\"sidebar.dataDisplay.badge\":\"Badge\",\"sidebar.dataDisplay.collapse\":\"Collapse\",\"sidebar.dataDisplay.carousel\":\"Carousel\",\"sidebar.dataDisplay.card\":\"Card\",\"sidebar.dataDisplay.calender\":\"Calender\",\"sidebar.dataDisplay.list\":\"List\",\"sidebar.dataDisplay.popover\":\"Popover\",\"sidebar.dataDisplay.tree\":\"Tree\",\"sidebar.dataDisplay.toolTips\":\"Tooltips\",\"sidebar.dataDisplay.timeLine\":\"Timeline\",\"sidebar.dataDisplay.tag\":\"Tag\",\"sidebar.dataDisplay.tabs\":\"Tabs\",\"sidebar.dataDisplay.table\":\"Table\",\"sidebar.components.feedBack\":\"Feedback\",\"sidebar.feedBack.alert\":\"Alert\",\"sidebar.feedBack.modal\":\"Modal\",\"sidebar.feedBack.message\":\"Message\",\"sidebar.feedBack.notification\":\"Notification\",\"sidebar.feedBack.progress\":\"Progress\",\"sidebar.feedBack.popConfirm\":\"PopConfirm\",\"sidebar.feedBack.spin\":\"Spin\",\"sidebar.components.other\":\"Other\",\"sidebar.other.anchor\":\"Anchor\",\"sidebar.other.backTop\":\"BackTop\",\"sidebar.other.divider\":\"Divider\",\"sidebar.widgets\":\"Widgets\",\"sidebar.metrics\":\"Metrics\",\"sidebar.view\":\"View\",\"sidebar.view.basicTable\":\"Basic Table\",\"sidebar.view.dataTable\":\"Data Table\",\"sidebar.extensions\":\"Extensions\",\"sidebar.extensions.editior\":\"Editior\",\"sidebar.extensions.dragNDrop\":\"Drag & Drop\",\"sidebar.extensions.sweetAlert\":\"Sweet Alert\",\"sidebar.extensions.notification\":\"Notification\",\"sidebar.extensions.reactDates\":\"React Dates\",\"sidebar.extensions.dropZone\":\"Drop Zone\",\"sidebar.googleMap\":\"Google Map\",\"sidebar.charts\":\"Charts\",\"sidebar.apps\":\"Apps\",\"sidebar.mailApp\":\"Mail App\",\"sidebar.todoApp\":\"Todo App\",\"sidebar.contactsApp\":\"Contacts App\",\"sidebar.chatApp\":\"Chat App\",\"sidebar.wall\":\"Wall App\",\"sidebar.notes\":\"Notes\",\"sidebar.crud\":\"Firebase CRUD\",\"sidebar.pickers\":\"Pickers\",\"sidebar.pickers.dateTimePickers\":\"Date & Time Pickers\",\"sidebar.pickers.colorPickers\":\"Color Pickers\",\"sidebar.chart\":\"Chart\",\"sidebar.chart.line\":\"Line Chart\",\"sidebar.chart.bar\":\"Bar Chart\",\"sidebar.chart.area\":\"Area Chart\",\"sidebar.chart.composed\":\"Composed Chart\",\"sidebar.chart.scatter\":\"Scatter Chart\",\"sidebar.chart.pie\":\"Pie Chart\",\"sidebar.chart.radial\":\"Radial Chart\",\"sidebar.chart.radar\":\"Radar Chart\",\"sidebar.chart.tree\":\"Tree Chart\",\"sidebar.map.simple\":\"Simple Map\",\"sidebar.map.styled\":\"Styled Map\",\"sidebar.map.geoLocation\":\"Geo Location\",\"sidebar.map.mapDirection\":\"Map Direction\",\"sidebar.map.overlay\":\"Map Overlay\",\"sidebar.map.kmLayer\":\"Map Km Layer\",\"sidebar.map.popupInfo\":\"Map Popup Info\",\"sidebar.map.trafficLayer\":\"Map Traffic Layer\",\"sidebar.map.streetView\":\"Street View\",\"sidebar.map.eventListener\":\"Event Listener\",\"sidebar.map.mapDrawing\":\"Map Drawing\",\"sidebar.map.mapClustering\":\"Map Clustering\",\"sidebar.modules\":\"Modules\",\"sidebar.calendar\":\"Calendar\",\"sidebar.calendar.basic\":\"Basic\",\"sidebar.calendar.cultures\":\"Cultures\",\"sidebar.calendar.dnd\":\"Dnd\",\"sidebar.calendar.popup\":\"Popup\",\"sidebar.calendar.rendering\":\"Rendering\",\"sidebar.calendar.selectable\":\"Selectable\",\"sidebar.calendar.timeslots\":\"Timeslots\",\"sidebar.mail.title\":\"Mail\",\"sidebar.mail.compose\":\"COMPOSE\",\"sidebar.mail.mailbox\":\"Mailbox\",\"sidebar.mail.filters\":\"Filters\",\"sidebar.mail.labels\":\"Labels\",\"sidebar.eCommerce\":\"eCommerce\",\"sidebar.eCommerce.productList\":\"Product List\",\"sidebar.eCommerce.productGrid\":\"Product Grid\",\"sidebar.extraComponents\":\"Extra Components\",\"sidebar.inBuiltApp\":\"In-built Apps\",\"sidebar.extraElements.callouts\":\"Callout\",\"sidebar.extraElements.testimonials\":\"Testimonials\",\"sidebar.timeLine\":\"Time Line\",\"sidebar.timeLine.default\":\"Default\",\"sidebar.timeLine.defaultwithIcons\":\"Default with Icons\",\"sidebar.timeLine.leftAligned\":\"Left Aligned\",\"sidebar.extraElements.pricingTable\":\"Pricing Table\",\"sidebar.customViews\":\"Custom Views\",\"sidebar.listType\":\"List Type\",\"sidebar.listType.extras\":\"Extras\",\"sidebar.listType.plainListView\":\"Plain List View\",\"sidebar.listType.withDivider\":\"Plain List with Divider\",\"sidebar.listType.cardListView\":\"Cards List View\",\"sidebar.extraPages.404\":\"404 Error Page\",\"sidebar.extraPages.500\":\"500 Error Page\",\"sidebar.extraPages\":\"Extra Pages\",\"app.userAuth\":\"User Auth\",\"app.userAuth.login\":\"Login\",\"app.userAuth.signIn\":\"Sign In\",\"app.userAuth.send\":\"SEND\",\"app.userAuth.bySigning\":\"By Signing Up, you can avail full features of our services.\",\"app.userAuth.or\":\"or\",\"app.userAuth.forgotPassword\":\"Forgot Password\",\"app.userAuth.forgot\":\"Don't worry. Recovering the password is easy.Just tell us the email you have registered with jumbo\",\"app.userAuth.signUp\":\"Sign Up\",\"app.userAuth.getAccount\":\"Get an account !!!\",\"app.userAuth.resetPassword\":\"Reset Password\",\"app.userAuth.reset\":\"RESET\",\"app.userAuth.lockScreen\":\"Lock Screen\",\"app.userAuth.unLock\":\"UNLOCK\",\"appModule.enterPasswordUnlock\":\"Enter your password to unlock the screen!\",\"appModule.enterPasswordReset\":\"Enter a new password for your account\",\"appModule.loginSuccessfully\":\"Login Successfully\",\"appModule.password\":\"Password\",\"appModule.email\":\"Email\",\"appModule.name\":\"Name\",\"appModule.phone\":\"Phone\",\"appModule.designation\":\"Designation\",\"appModule.regsiter\":\"Regsiter\",\"appModule.regsiterNow\":\"Regsiter No\",\"appModule.hvAccount\":\"Have an account\",\"appModule.createAccount\":\"Create an account\",\"appModule.termAndCondition\":\"Term & Condition\",\"appModule.iAccept\":\"by signing up, I accept\",\"todo\":\"To-Do\",\"todo.addTask\":\"ADD TASK\",\"todo.all\":\"All\",\"todo.filters\":\"Filters\",\"todo.labels\":\"Labels\",\"chat.selectUserChat\":\"Select User to start Chat\",\"chat.selectContactChat\":\"Select contact to start Chat\",\"chat.chatUser\":\"Chats\",\"chat.contacts\":\"Contacts\",\"chat.searchStartNewChat\":\"Search or start new chat\",\"chat.typeMessage\":\"Type and hit enter to send message\",\"chat.status\":\"it's a status....not your diary...\",\"contact.saveContact\":\"Save Contact\",\"contact.addContact\":\"Add Contact\",\"contact.searchContact\":\"Search contact\",\"mail.mailbox\":\"Mailbox\",\"mail.compose\":\"COMPOSE\",\"mail.filters\":\"Filters\",\"mail.labels\":\"Labels\",\"mail.title\":\"New Message\",\"eCommerce.buyNow\":\"Buy Now\",\"eCommerce.addToCart\":\"Add To Cart\",\"eCommerce.readMore\":\"Read More\",\"callouts.viewRange\":\"VIEW RANGE\",\"callouts.basic\":\"Basic\",\"extraElements.callout\":\"Extra Element\",\"testimonials.basic\":\"Basic\",\"testimonials.classic\":\"Classic\",\"testimonials.standard\":\"Standard\",\"extraElements.testimonials\":\"Testimonials\",\"button.modify\":\"Modify\",\"button.delete\":\"Delete\",\"pricingTable.basic\":\"Basic\",\"pricingTable.circle\":\"Circle\",\"pricingTable.classic\":\"Classic\",\"pricingTable.dark\":\"Dark\",\"pricingTable.personal\":\"PERSONAL\",\"pricingTable.easyTranslation\":\"Easy Translation\",\"pricingTable.awesomeGoogleFonts\":\"Awesome Google Fonts\",\"pricingTable.hotelBookingSystem\":\"Hotel Booking System\",\"pricingTable.emailComposeInterface\":\"Email Compose Interface\",\"pricingTable.locationFinderApp\":\"Location Finder App\",\"pricingTable.buyNow\":\"buy now\",\"pricingTable.business\":\"BUSINESS\",\"pricingTable.professional\":\"PROFESSIONAL\",\"button.yes\":\"Yes\",\"button.no\":\"No\",\"extraPages.404Msg\":\"Oops, an error has occurred. Page not found!\",\"extraPages.500Msg\":\"Sorry, server goes wrong\",\"extraPages.goHome\":\"Go to Home\",\"extension.sweetAlerts\":\"Sweet Alerts\",\"sweetAlerts.basic\":\"Basic\",\"sweetAlerts.description\":\"With Description\",\"sweetAlerts.success\":\"Success\",\"sweetAlerts.warning\":\"Warning\",\"sweetAlerts.custom\":\"Custom\",\"sweetAlerts.htmlTag\":\"Html Tag\",\"sweetAlerts.prompt\":\"Prompt\",\"sweetAlerts.itsBlue\":\"It's Green!\",\"sweetAlerts.passwordPrompt\":\"Password Prompt\",\"sweetAlerts.customStyle\":\"Custom Style\",\"sweetAlerts.itPretty\":\"It's pretty, isn't it?\",\"sweetAlerts.btnClicked\":\"You clicked the button!\",\"sweetAlerts.youWillFind\":\"You will find they are up!\",\"sweetAlerts.youWillNotAble\":\"You will not be able to recover this imaginary file!\",\"sweetAlerts.hereIsaMessage\":\"Here's a message!\",\"sweetAlerts.goodJob\":\"Good job!\",\"sweetAlerts.yesDeleteIt\":\"Yes, delete it!\",\"sweetAlerts.areYouSure\":\"Are you sure?\",\"sweetAlerts.doYouLikeThumb\":\"Do you like thumbs?\",\"sweetAlerts.anInput\":\"An input!\",\"sweetAlerts.writeSomethingInteresting\":\"Write something interesting:\",\"sweetAlerts.writeSomething\":\"Write something\",\"sweetAlerts.youMustEnterPassword\":\"You must enter your password!\",\"sweetAlerts.enterPassword\":\"Enter Password\",\"extension.notification\":\"Notification\",\"notification.infoMsg\":\"Info message\",\"notification.successMessage\":\"Success message\",\"notification.warningMessage\":\"Warning message\",\"notification.closeAfter3000ms\":\"Close after 3000ms\",\"notification.errorMessage\":\"Error message\",\"notification.titleHere\":\"Title here\",\"notification.clickMe\":\"Click me!\",\"notification.info\":\"Info\",\"notification.success\":\"Success\",\"notification.warning\":\"Warning\",\"notification.error\":\"Error\",\"sidebar.editors\":\"Editors\",\"sidebar.editors.CKEditor\":\"CKEditor\",\"sidebar.editors.WYSISWYGEditor\":\"WYSISWYG Editor\",\"picker.color.alpha\":\"Alpha Pickers\",\"picker.color.hue\":\"Hue Pickers\",\"picker.color.circle\":\"Circle Pickers\",\"picker.color.compact\":\"Compact Pickers\",\"picker.color.block\":\"Block Pickers\",\"picker.color.chrome\":\"Chrome Pickers\",\"picker.color.github\":\"Github Pickers\",\"picker.color.twitter\":\"Twitter Pickers\",\"picker.color.withRedux\":\"With Redux\",\"picker.color.sketch\":\"Sketch Pickers\",\"picker.color.material\":\"Material Pickers\",\"picker.color.slider\":\"Slider Pickers\",\"picker.color.basic\":\"Basic Pickers\",\"picker.color.basicToggle\":\"Basic Toggle\",\"picker.color.custom\":\"Custom Pickers\",\"picker.color.customPointer\":\"Custom Pointer\",\"picker.color.photoshop\":\"Photoshop Pickers\",\"picker.color.swatches\":\"Swatches Pickers\",\"picker.color.basicPositioning\":\"Basic Positioning\",\"sidebar.documents\":\"Documents\",\"sidebar.documents.changelog\":\"Changelog\",\"sidebar.documents.installation\":\"Installation\",\"sidebar.dashboard.listing\":\"Listing\",\"sidebar.dashboard.crypto\":\"Crypto\",\"sidebar.map\":\"Map\",\"sidebar.algolia\":\"Algolia\",\"sidebar.firebase.crud\":\"Firebase Curd\",\"sidebar.components.rechart\":\"ReChart\",\"sidebar.components.amchart\":\"AmChart\",\"sidebar.google.map\":\"Google Map\",\"sidebar.ammap\":\"AmMap\",\"sidebar.map.animations.lines\":\"With Animations\",\"sidebar.map.curved.lines\":\"With Curved Lines\",\"sidebar.map.zooming.countries\":\"Zooming Countries\",\"sidebar.map.patterns\":\"Map With Patterns\",\"sidebar.map.capitals.map\":\"Capitals Map\",\"sidebar.map.markers\":\"Map Markers\",\"sidebar.map.flight.routes\":\"Flight Routes\",\"sidebar.map.choropleth\":\"Heat Map\",\"sidebar.map.grouped.countries\":\"Grouped Countries\",\"sidebar.map.bubbles\":\"Map with Bubbles\",\"sidebar.map.drill.down\":\"Drill Down Map\",\"sidebar.map.multiple.areas\":\"Multiple Areas\",\"sidebar.map.weather\":\"Weather map\",\"sidebar.extensions.shuffle\":\"Shuffle\",\"sidebar.extensions.profile\":\"Profile\",\"sidebar.social\":\"Social Apps\",\"sidebar.ifi\":\"International Financial Institute\",\"sidebar.ifis\":\"International Financial Institutes\"}");

/***/ }),

/***/ "./lngProvider/locales/es_ES.json":
/*!****************************************!*\
  !*** ./lngProvider/locales/es_ES.json ***!
  \****************************************/
/*! exports provided: app.announced, sidebar.main, sidebar.dashboard, sidebar.layouts, sidebar.dashboard.crm, sidebar.components, sidebar.components.general, sidebar.general.button, sidebar.general.icon, sidebar.components.navigation, sidebar.navigation.affix, sidebar.navigation.breadcrumb, sidebar.navigation.dropdown, sidebar.navigation.menu, sidebar.navigation.pagination, sidebar.navigation.steps, sidebar.components.dataEntry, sidebar.dataEntry.autoComplete, sidebar.dataEntry.checkbox, sidebar.dataEntry.cascader, sidebar.dataEntry.datePicker, sidebar.dataEntry.form, sidebar.dataEntry.inputNumber, sidebar.dataEntry.input, sidebar.dataEntry.mention, sidebar.dataEntry.rate, sidebar.dataEntry.radio, sidebar.dataEntry.switch, sidebar.dataEntry.slider, sidebar.dataEntry.select, sidebar.dataEntry.treeSelect, sidebar.dataEntry.transfer, sidebar.dataEntry.timePicker, sidebar.dataEntry.upload, sidebar.components.dataDisplay, sidebar.dataDisplay.avatar, sidebar.dataDisplay.badge, sidebar.dataDisplay.collapse, sidebar.dataDisplay.carousel, sidebar.dataDisplay.card, sidebar.dataDisplay.calender, sidebar.dataDisplay.list, sidebar.dataDisplay.popover, sidebar.dataDisplay.tree, sidebar.dataDisplay.toolTips, sidebar.dataDisplay.timeLine, sidebar.dataDisplay.tag, sidebar.dataDisplay.tabs, sidebar.dataDisplay.table, sidebar.components.feedBack, sidebar.feedBack.alert, sidebar.feedBack.modal, sidebar.feedBack.message, sidebar.feedBack.notification, sidebar.feedBack.progress, sidebar.feedBack.popConfirm, sidebar.feedBack.spin, sidebar.components.other, sidebar.other.anchor, sidebar.other.backTop, sidebar.other.divider, sidebar.widgets, sidebar.metrics, sidebar.view, sidebar.view.basicTable, sidebar.view.dataTable, sidebar.extensions, sidebar.extensions.editior, sidebar.extensions.dragNDrop, sidebar.extensions.sweetAlert, sidebar.extensions.notification, sidebar.extensions.reactDates, sidebar.extensions.dropZone, sidebar.googleMap, sidebar.charts, sidebar.apps, sidebar.mailApp, sidebar.todoApp, sidebar.contactsApp, sidebar.chatApp, sidebar.notes, sidebar.pickers, sidebar.crud, sidebar.pickers.dateTimePickers, sidebar.pickers.colorPickers, sidebar.chart, sidebar.chart.line, sidebar.chart.bar, sidebar.chart.area, sidebar.chart.composed, sidebar.chart.scatter, sidebar.chart.pie, sidebar.chart.radial, sidebar.chart.radar, sidebar.chart.tree, sidebar.map, sidebar.map.simple, sidebar.map.styled, sidebar.map.geoLocation, sidebar.map.mapDirection, sidebar.map.overlay, sidebar.map.kmLayer, sidebar.map.popupInfo, sidebar.map.trafficLayer, sidebar.map.streetView, sidebar.map.eventListener, sidebar.map.mapDrawing, sidebar.map.mapClustering, sidebar.modules, sidebar.calendar, sidebar.calendar.basic, sidebar.calendar.cultures, sidebar.calendar.dnd, sidebar.calendar.popup, sidebar.calendar.rendering, sidebar.calendar.selectable, sidebar.calendar.timeslots, sidebar.mail.title, sidebar.mail.compose, sidebar.mail.mailbox, sidebar.mail.filters, sidebar.mail.labels, sidebar.eCommerce, sidebar.eCommerce.productList, sidebar.eCommerce.productGrid, sidebar.extraComponents, sidebar.inBuiltApp, sidebar.extraElements.callouts, sidebar.extraElements.testimonials, sidebar.timeLine, sidebar.timeLine.default, sidebar.timeLine.defaultwithIcons, sidebar.timeLine.leftAligned, sidebar.extraElements.pricingTable, sidebar.customViews, sidebar.listType, sidebar.listType.extras, sidebar.listType.plainListView, sidebar.listType.withDivider, sidebar.listType.cardListView, sidebar.extraPages.404, sidebar.extraPages.500, sidebar.extraPages, app.userAuth, app.userAuth.login, app.userAuth.signIn, app.userAuth.send, app.userAuth.bySigning, app.userAuth.or, app.userAuth.forgotPassword, app.userAuth.forgot, app.userAuth.signUp, app.userAuth.getAccount, app.userAuth.resetPassword, app.userAuth.reset, app.userAuth.lockScreen, app.userAuth.unLock, appModule.enterPasswordUnlock, appModule.enterPasswordReset, appModule.loginSuccessfully, appModule.password, appModule.email, appModule.name, appModule.phone, appModule.designation, appModule.regsiter, appModule.regsiterNow, appModule.hvAccount, appModule.createAccount, appModule.termAndCondition, appModule.iAccept, todo, todo.addTask, todo.all, todo.filters, todo.labels, chat.selectUserChat, chat.selectContactChat, chat.chatUser, chat.contacts, chat.searchStartNewChat, chat.typeMessage, chat.status, contact.saveContact, contact.addContact, contact.searchContact, mail.mailbox, mail.compose, mail.filters, mail.labels, mail.title, eCommerce.buyNow, eCommerce.addToCart, eCommerce.readMore, callouts.viewRange, callouts.basic, extraElements.callout, testimonials.basic, testimonials.classic, testimonials.standard, extraElements.testimonials, button.modify, button.delete, pricingTable.basic, pricingTable.circle, pricingTable.classic, pricingTable.dark, pricingTable.personal, pricingTable.easyTranslation, pricingTable.awesomeGoogleFonts, pricingTable.hotelBookingSystem, pricingTable.emailComposeInterface, pricingTable.locationFinderApp, pricingTable.buyNow, pricingTable.business, pricingTable.professional, button.yes, button.no, extraPages.404Msg, extraPages.500Msg, extraPages.goHome, extension.sweetAlerts, sweetAlerts.basic, sweetAlerts.description, sweetAlerts.success, sweetAlerts.warning, sweetAlerts.custom, sweetAlerts.htmlTag, sweetAlerts.prompt, sweetAlerts.itsBlue, sweetAlerts.passwordPrompt, sweetAlerts.customStyle, sweetAlerts.itPretty, sweetAlerts.btnClicked, sweetAlerts.youWillFind, sweetAlerts.youWillNotAble, sweetAlerts.hereIsaMessage, sweetAlerts.goodJob, sweetAlerts.yesDeleteIt, sweetAlerts.areYouSure, sweetAlerts.doYouLikeThumb, sweetAlerts.anInput, sweetAlerts.writeSomethingInteresting, sweetAlerts.writeSomething, sweetAlerts.youMustEnterPassword, sweetAlerts.enterPassword, extension.notification, notification.infoMsg, notification.successMessage, notification.warningMessage, notification.closeAfter3000ms, notification.errorMessage, notification.titleHere, notification.clickMe, notification.info, notification.success, notification.warning, notification.error, sidebar.editors, sidebar.editors.CKEditor, sidebar.editors.WYSISWYGEditor, picker.color.alpha, picker.color.hue, picker.color.circle, picker.color.compact, picker.color.block, picker.color.chrome, picker.color.github, picker.color.twitter, picker.color.withRedux, picker.color.sketch, picker.color.material, picker.color.slider, picker.color.basic, picker.color.basicToggle, picker.color.custom, picker.color.customPointer, picker.color.photoshop, picker.color.swatches, picker.color.basicPositioning, sidebar.documents, sidebar.documents.changelog, sidebar.documents.installation, sidebar.dashboard.listing, sidebar.dashboard.crypto, sidebar.algolia, sidebar.components.rechart, sidebar.components.amchart, sidebar.google.map, sidebar.ammap, sidebar.map.animations.lines, sidebar.map.curved.lines, sidebar.map.zooming.countries, sidebar.map.patterns, sidebar.map.capitals.map, sidebar.map.markers, sidebar.map.flight.routes, sidebar.map.choropleth, sidebar.map.grouped.countries, sidebar.map.bubbles, sidebar.map.drill.down, sidebar.map.multiple.areas, sidebar.map.weather, sidebar.extensions.shuffle, sidebar.extensions.profile, sidebar.social, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"app.announced\":\"Se lanzará una nueva versión el 25 de diciembre. ¡Manténganse al tanto!\",\"sidebar.main\":\"Principal\",\"sidebar.dashboard\":\"Tablero\",\"sidebar.layouts\":\"Diseños\",\"sidebar.dashboard.crm\":\"Crm\",\"sidebar.components\":\"Componentes\",\"sidebar.components.general\":\"General\",\"sidebar.general.button\":\"Botón\",\"sidebar.general.icon\":\"Icono\",\"sidebar.components.navigation\":\"Navegación\",\"sidebar.navigation.affix\":\"Afijo\",\"sidebar.navigation.breadcrumb\":\"Migaja de pan\",\"sidebar.navigation.dropdown\":\"Desplegable\",\"sidebar.navigation.menu\":\"Menú\",\"sidebar.navigation.pagination\":\"Paginación\",\"sidebar.navigation.steps\":\"Pasos\",\"sidebar.components.dataEntry\":\"Entrada de datos\",\"sidebar.dataEntry.autoComplete\":\"Autocompletar\",\"sidebar.dataEntry.checkbox\":\"Caja\",\"sidebar.dataEntry.cascader\":\"Cascader\",\"sidebar.dataEntry.datePicker\":\"Selector de fechas\",\"sidebar.dataEntry.form\":\"Formar\",\"sidebar.dataEntry.inputNumber\":\"Número de entrada\",\"sidebar.dataEntry.input\":\"Entrada\",\"sidebar.dataEntry.mention\":\"Mencionar\",\"sidebar.dataEntry.rate\":\"Tarifa\",\"sidebar.dataEntry.radio\":\"Radio\",\"sidebar.dataEntry.switch\":\"Cambiar\",\"sidebar.dataEntry.slider\":\"Control deslizante\",\"sidebar.dataEntry.select\":\"Seleccionar\",\"sidebar.dataEntry.treeSelect\":\"TreeSelect\",\"sidebar.dataEntry.transfer\":\"Transferir\",\"sidebar.dataEntry.timePicker\":\"Selector de tiempo\",\"sidebar.dataEntry.upload\":\"Subir\",\"sidebar.components.dataDisplay\":\"Visualización de datos\",\"sidebar.dataDisplay.avatar\":\"Avatar\",\"sidebar.dataDisplay.badge\":\"Distintivo\",\"sidebar.dataDisplay.collapse\":\"Colapso\",\"sidebar.dataDisplay.carousel\":\"Carrusel\",\"sidebar.dataDisplay.card\":\"Tarjeta\",\"sidebar.dataDisplay.calender\":\"Calendario\",\"sidebar.dataDisplay.list\":\"Lista\",\"sidebar.dataDisplay.popover\":\"Popover\",\"sidebar.dataDisplay.tree\":\"Árbol\",\"sidebar.dataDisplay.toolTips\":\"Información sobre herramientas\",\"sidebar.dataDisplay.timeLine\":\"Cronología\",\"sidebar.dataDisplay.tag\":\"Etiqueta\",\"sidebar.dataDisplay.tabs\":\"Pestañas\",\"sidebar.dataDisplay.table\":\"Mesa\",\"sidebar.components.feedBack\":\"Realimentación\",\"sidebar.feedBack.alert\":\"Alerta\",\"sidebar.feedBack.modal\":\"Modal\",\"sidebar.feedBack.message\":\"Mensaje\",\"sidebar.feedBack.notification\":\"Notificación\",\"sidebar.feedBack.progress\":\"Progreso\",\"sidebar.feedBack.popConfirm\":\"PopConfirm\",\"sidebar.feedBack.spin\":\"Girar\",\"sidebar.components.other\":\"Otro\",\"sidebar.other.anchor\":\"Ancla\",\"sidebar.other.backTop\":\"BackTop\",\"sidebar.other.divider\":\"Divisor\",\"sidebar.widgets\":\"Widgets\",\"sidebar.metrics\":\"Métrica\",\"sidebar.view\":\"Ver\",\"sidebar.view.basicTable\":\"Tabla básica\",\"sidebar.view.dataTable\":\"Tabla de datos\",\"sidebar.extensions\":\"Extensiones\",\"sidebar.extensions.editior\":\"Editor\",\"sidebar.extensions.dragNDrop\":\"Arrastrar y soltar\",\"sidebar.extensions.sweetAlert\":\"Sweet Alert\",\"sidebar.extensions.notification\":\"Notificación\",\"sidebar.extensions.reactDates\":\"Fechas de reacción\",\"sidebar.extensions.dropZone\":\"Zona de descenso\",\"sidebar.googleMap\":\"Mapa de Google\",\"sidebar.charts\":\"Gráficos\",\"sidebar.apps\":\"Aplicaciones\",\"sidebar.mailApp\":\"Aplicación de correo\",\"sidebar.todoApp\":\"Aplicación de Todo\",\"sidebar.contactsApp\":\"Aplicación Contactos\",\"sidebar.chatApp\":\"Aplicación de chat\",\"sidebar.notes\":\"Notas\",\"sidebar.pickers\":\"Pickers\",\"sidebar.crud\":\"Firebase CRUD\",\"sidebar.pickers.dateTimePickers\":\"Selector de fecha y hora\",\"sidebar.pickers.colorPickers\":\"Selector de color\",\"sidebar.chart\":\"Gráfico\",\"sidebar.chart.line\":\"Gráfico de linea\",\"sidebar.chart.bar\":\"Gráfico de barras\",\"sidebar.chart.area\":\"Carta de área\",\"sidebar.chart.composed\":\"Gráfico compuesto\",\"sidebar.chart.scatter\":\"Gráfico de dispersión\",\"sidebar.chart.pie\":\"Gráfico circular\",\"sidebar.chart.radial\":\"Gráfico radial\",\"sidebar.chart.radar\":\"Gráfico de radar\",\"sidebar.chart.tree\":\"Árbol de Carta\",\"sidebar.map\":\"Mapa de Google\",\"sidebar.map.simple\":\"Mapa simple\",\"sidebar.map.styled\":\"Mapa de estilo\",\"sidebar.map.geoLocation\":\"Ubicación geográfica\",\"sidebar.map.mapDirection\":\"Dirección del mapa\",\"sidebar.map.overlay\":\"Superposición de mapa\",\"sidebar.map.kmLayer\":\"Mapa Km Layer\",\"sidebar.map.popupInfo\":\"Mapa de información emergente\",\"sidebar.map.trafficLayer\":\"Mapa Traffic Layer\",\"sidebar.map.streetView\":\"vista de calle\",\"sidebar.map.eventListener\":\"Escucha del evento\",\"sidebar.map.mapDrawing\":\"Mapa de dibujo\",\"sidebar.map.mapClustering\":\"Agrupación de mapas\",\"sidebar.modules\":\"Módulos\",\"sidebar.calendar\":\"Calendario\",\"sidebar.calendar.basic\":\"BASIC\",\"sidebar.calendar.cultures\":\"Culturas\",\"sidebar.calendar.dnd\":\"Dnd\",\"sidebar.calendar.popup\":\"Surgir\",\"sidebar.calendar.rendering\":\"Representación\",\"sidebar.calendar.selectable\":\"Seleccionable\",\"sidebar.calendar.timeslots\":\"Ranuras de tiempo\",\"sidebar.mail.title\":\"Correo\",\"sidebar.mail.compose\":\"COMPONER\",\"sidebar.mail.mailbox\":\"Buzón\",\"sidebar.mail.filters\":\"filtros\",\"sidebar.mail.labels\":\"Etiquetas\",\"sidebar.eCommerce\":\"eCommerce\",\"sidebar.eCommerce.productList\":\"Lista de productos\",\"sidebar.eCommerce.productGrid\":\"Cuadrícula de producto\",\"sidebar.extraComponents\":\"Componentes extra\",\"sidebar.inBuiltApp\":\"Aplicaciones integradas\",\"sidebar.extraElements.callouts\":\"Gritar\",\"sidebar.extraElements.testimonials\":\"Testimonios\",\"sidebar.timeLine\":\"Time Line\",\"sidebar.timeLine.default\":\"Defecto\",\"sidebar.timeLine.defaultwithIcons\":\"Predeterminado con iconos\",\"sidebar.timeLine.leftAligned\":\"Alineado a la izquierda\",\"sidebar.extraElements.pricingTable\":\"Tabla de precios\",\"sidebar.customViews\":\"Vistas personalizadas\",\"sidebar.listType\":\"Tipo de lista\",\"sidebar.listType.extras\":\"Extras\",\"sidebar.listType.plainListView\":\"Vista de lista simple\",\"sidebar.listType.withDivider\":\"Lista simple con divisor\",\"sidebar.listType.cardListView\":\"Vista de lista de tarjetas\",\"sidebar.extraPages.404\":\"Página de error 404\",\"sidebar.extraPages.500\":\"500 página de error\",\"sidebar.extraPages\":\"Páginas extra\",\"app.userAuth\":\"Usuario Auth\",\"app.userAuth.login\":\"Iniciar sesión\",\"app.userAuth.signIn\":\"Registrarse\",\"app.userAuth.send\":\"ENVIAR\",\"app.userAuth.bySigning\":\"Al registrarse, puede aprovechar las características completas de nuestros servicios.\",\"app.userAuth.or\":\"o\",\"app.userAuth.forgotPassword\":\"Se te olvidó tu contraseña\",\"app.userAuth.forgot\":\"No te preocupes Recuperar la contraseña es fácil. Simplemente díganos el correo electrónico que ha registrado con jumbo\",\"app.userAuth.signUp\":\"Regístrate\",\"app.userAuth.getAccount\":\"Obtener una cuenta !!!\",\"app.userAuth.resetPassword\":\"Restablecer la contraseña\",\"app.userAuth.reset\":\"REINICIAR\",\"app.userAuth.lockScreen\":\"Bloquear pantalla\",\"app.userAuth.unLock\":\"DESBLOQUEAR\",\"appModule.enterPasswordUnlock\":\"¡Ingresa tu contraseña para desbloquear la pantalla!\",\"appModule.enterPasswordReset\":\"Ingrese una nueva contraseña para su cuenta\",\"appModule.loginSuccessfully\":\"Iniciar sesión exitosamente\",\"appModule.password\":\"Contraseña\",\"appModule.email\":\"Email\",\"appModule.name\":\"Nombre\",\"appModule.phone\":\"Teléfono\",\"appModule.designation\":\"Designacion\",\"appModule.regsiter\":\"Registro\",\"appModule.regsiterNow\":\"Registrarse No\",\"appModule.hvAccount\":\"Tener una cuenta\",\"appModule.createAccount\":\"Crea una cuenta\",\"appModule.termAndCondition\":\"Término y condición\",\"appModule.iAccept\":\"registrándome, acepto\",\"todo\":\"Que hacer\",\"todo.addTask\":\"AGREGAR TAREA\",\"todo.all\":\"Todas\",\"todo.filters\":\"Filtros\",\"todo.labels\":\"Etiquetas\",\"chat.selectUserChat\":\"Seleccionar usuario para iniciar el chat\",\"chat.selectContactChat\":\"Seleccionar contacto para iniciar el chat\",\"chat.chatUser\":\"Chats\",\"chat.contacts\":\"Contactos\",\"chat.searchStartNewChat\":\"Buscar o iniciar un chat nuevo\",\"chat.typeMessage\":\"Escribe y presiona enter para enviar el mensaje\",\"chat.status\":\"es un estado ... no es tu diario ...\",\"contact.saveContact\":\"Guardar contacto\",\"contact.addContact\":\"Agregar contacto\",\"contact.searchContact\":\"Buscar contacto\",\"mail.mailbox\":\"Buzón\",\"mail.compose\":\"COMPONER\",\"mail.filters\":\"Filtros\",\"mail.labels\":\"Etiquetas\",\"mail.title\":\"Nuevo mensaje\",\"eCommerce.buyNow\":\"Compra ahora\",\"eCommerce.addToCart\":\"AÑADIR A LA CESTA\",\"eCommerce.readMore\":\"LEE MAS\",\"callouts.viewRange\":\"VER RANGO\",\"callouts.basic\":\"BASIC\",\"extraElements.callout\":\"Elemento extra\",\"testimonials.basic\":\"BASIC\",\"testimonials.classic\":\"Clásico\",\"testimonials.standard\":\"Estándar\",\"extraElements.testimonials\":\"Testimonios\",\"button.modify\":\"Modificar\",\"button.delete\":\"Borrar\",\"pricingTable.basic\":\"BASIC\",\"pricingTable.circle\":\"Circulo\",\"pricingTable.classic\":\"Clásico\",\"pricingTable.dark\":\"Oscuro\",\"pricingTable.personal\":\"PERSONAL\",\"pricingTable.easyTranslation\":\"Traducción fácil\",\"pricingTable.awesomeGoogleFonts\":\"Fuentes increíbles de Google\",\"pricingTable.hotelBookingSystem\":\"Sistema de reserva de hotel\",\"pricingTable.emailComposeInterface\":\"Interfaz de redacción de correo electrónico\",\"pricingTable.locationFinderApp\":\"Aplicación de buscador de ubicación\",\"pricingTable.buyNow\":\"Compra ahora...\",\"pricingTable.business\":\"NEGOCIO\",\"pricingTable.professional\":\"PROFESIONAL\",\"button.yes\":\"Sí\",\"button.no\":\"No\",\"extraPages.404Msg\":\"Vaya, ha ocurrido un error. ¡Página no encontrada!\",\"extraPages.500Msg\":\"Lo siento, el servidor sale mal\",\"extraPages.goHome\":\"Ir a casa\",\"extension.sweetAlerts\":\"Sweet Alerts\",\"sweetAlerts.basic\":\"BASIC\",\"sweetAlerts.description\":\"Con descripción\",\"sweetAlerts.success\":\"Éxito\",\"sweetAlerts.warning\":\"Advertencia\",\"sweetAlerts.custom\":\"Personalizado\",\"sweetAlerts.htmlTag\":\"Etiqueta Html\",\"sweetAlerts.prompt\":\"Rápido\",\"sweetAlerts.itsBlue\":\"¡Es azul!\",\"sweetAlerts.passwordPrompt\":\"Indicación de contraseña\",\"sweetAlerts.customStyle\":\"Estilo personalizado\",\"sweetAlerts.itPretty\":\"Es lindo, ¿verdad?\",\"sweetAlerts.btnClicked\":\"Hiciste clic en el botón!\",\"sweetAlerts.youWillFind\":\"¡Encontrarás que están listos!\",\"sweetAlerts.youWillNotAble\":\"¡No podrás recuperar este archivo imaginario!\",\"sweetAlerts.hereIsaMessage\":\"¡Aquí hay un mensaje!\",\"sweetAlerts.goodJob\":\"¡Buen trabajo!\",\"sweetAlerts.yesDeleteIt\":\"Sí, eliminarlo!\",\"sweetAlerts.areYouSure\":\"¿Estás seguro?\",\"sweetAlerts.doYouLikeThumb\":\"¿Te gustan los pulgares?\",\"sweetAlerts.anInput\":\"Una entrada!\",\"sweetAlerts.writeSomethingInteresting\":\"Escribe algo interesante:\",\"sweetAlerts.writeSomething\":\"Escribe algo\",\"sweetAlerts.youMustEnterPassword\":\"¡Debes ingresar tu contraseña!\",\"sweetAlerts.enterPassword\":\"Introducir la contraseña\",\"extension.notification\":\"Notificación\",\"notification.infoMsg\":\"Mensaje de información\",\"notification.successMessage\":\"Mensaje de éxito\",\"notification.warningMessage\":\"Mensaje de advertencia\",\"notification.closeAfter3000ms\":\"Cerrar después de 3000ms\",\"notification.errorMessage\":\"Mensaje de error\",\"notification.titleHere\":\"Título aquí\",\"notification.clickMe\":\"¡Haz click en mi!\",\"notification.info\":\"Información\",\"notification.success\":\"Éxito\",\"notification.warning\":\"Advertencia\",\"notification.error\":\"Error\",\"sidebar.editors\":\"Editores\",\"sidebar.editors.CKEditor\":\"CKEditor\",\"sidebar.editors.WYSISWYGEditor\":\"Editor WYSIWYG\",\"picker.color.alpha\":\"Recolectores alfa\",\"picker.color.hue\":\"Recogedores de tono\",\"picker.color.circle\":\"Seleccionadores de círculo\",\"picker.color.compact\":\"Selector compacto\",\"picker.color.block\":\"Selector de bloque\",\"picker.color.chrome\":\"Recogedores de Chrome\",\"picker.color.github\":\"Segadores Github\",\"picker.color.twitter\":\"Seleccionadores de Twitter\",\"picker.color.withRedux\":\"Con Redux\",\"picker.color.sketch\":\"Recogedores de bosquejos\",\"picker.color.material\":\"Recogedores de materiales\",\"picker.color.slider\":\"Seleccionadores de control deslizante\",\"picker.color.basic\":\"Selector básico\",\"picker.color.basicToggle\":\"Alternar básico\",\"picker.color.custom\":\"Recogedores personalizados\",\"picker.color.customPointer\":\"Puntero personalizado\",\"picker.color.photoshop\":\"Selector de Photoshop\",\"picker.color.swatches\":\"Selector de muestras\",\"picker.color.basicPositioning\":\"Posicionamiento Básico\",\"sidebar.documents\":\"Documentos\",\"sidebar.documents.changelog\":\"Registro de cambios\",\"sidebar.documents.installation\":\"Instalación\",\"sidebar.dashboard.listing\":\"Listing\",\"sidebar.dashboard.crypto\":\"Crypto\",\"sidebar.algolia\":\"Algolia\",\"sidebar.components.rechart\":\"ReChart\",\"sidebar.components.amchart\":\"AmChart\",\"sidebar.google.map\":\"Google Map\",\"sidebar.ammap\":\"AmMap\",\"sidebar.map.animations.lines\":\"Con animaciones\",\"sidebar.map.curved.lines\":\"Con líneas curvas\",\"sidebar.map.zooming.countries\":\"Zooming Países\",\"sidebar.map.patterns\":\"Mapa con patrones\",\"sidebar.map.capitals.map\":\"Mapa de capitales\",\"sidebar.map.markers\":\"Marcadores de mapa\",\"sidebar.map.flight.routes\":\"Rutas de vuelo\",\"sidebar.map.choropleth\":\"Mapa de calor\",\"sidebar.map.grouped.countries\":\"Países agrupados\",\"sidebar.map.bubbles\":\"Mapa con burbujas\",\"sidebar.map.drill.down\":\"Drill Down Map\",\"sidebar.map.multiple.areas\":\"Áreas múltiples\",\"sidebar.map.weather\":\"Weather map\",\"sidebar.extensions.shuffle\":\"Barajar\",\"sidebar.extensions.profile\":\"Perfil\",\"sidebar.social\":\"Aplicaciones sociales\"}");

/***/ }),

/***/ "./lngProvider/locales/fr_FR.json":
/*!****************************************!*\
  !*** ./lngProvider/locales/fr_FR.json ***!
  \****************************************/
/*! exports provided: app.announced, sidebar.main, sidebar.dashboard, sidebar.layouts, sidebar.dashboard.crm, sidebar.components, sidebar.components.general, sidebar.general.button, sidebar.general.icon, sidebar.components.navigation, sidebar.navigation.affix, sidebar.navigation.breadcrumb, sidebar.navigation.dropdown, sidebar.navigation.menu, sidebar.navigation.pagination, sidebar.navigation.steps, sidebar.components.dataEntry, sidebar.dataEntry.autoComplete, sidebar.dataEntry.checkbox, sidebar.dataEntry.cascader, sidebar.dataEntry.datePicker, sidebar.dataEntry.form, sidebar.dataEntry.inputNumber, sidebar.dataEntry.input, sidebar.dataEntry.mention, sidebar.dataEntry.rate, sidebar.dataEntry.radio, sidebar.dataEntry.switch, sidebar.dataEntry.slider, sidebar.dataEntry.select, sidebar.dataEntry.treeSelect, sidebar.dataEntry.transfer, sidebar.dataEntry.timePicker, sidebar.dataEntry.upload, sidebar.components.dataDisplay, sidebar.dataDisplay.avatar, sidebar.dataDisplay.badge, sidebar.dataDisplay.collapse, sidebar.dataDisplay.carousel, sidebar.dataDisplay.card, sidebar.dataDisplay.calender, sidebar.dataDisplay.list, sidebar.dataDisplay.popover, sidebar.dataDisplay.tree, sidebar.dataDisplay.toolTips, sidebar.dataDisplay.timeLine, sidebar.dataDisplay.tag, sidebar.dataDisplay.tabs, sidebar.dataDisplay.table, sidebar.components.feedBack, sidebar.feedBack.alert, sidebar.feedBack.modal, sidebar.feedBack.message, sidebar.feedBack.notification, sidebar.feedBack.progress, sidebar.feedBack.popConfirm, sidebar.feedBack.spin, sidebar.components.other, sidebar.other.anchor, sidebar.other.backTop, sidebar.other.divider, sidebar.widgets, sidebar.metrics, sidebar.view, sidebar.view.basicTable, sidebar.view.dataTable, sidebar.extensions, sidebar.extensions.editior, sidebar.extensions.dragNDrop, sidebar.extensions.sweetAlert, sidebar.extensions.notification, sidebar.extensions.reactDates, sidebar.extensions.dropZone, sidebar.googleMap, sidebar.charts, sidebar.apps, sidebar.mailApp, sidebar.todoApp, sidebar.contactsApp, sidebar.chatApp, sidebar.notes, sidebar.pickers, sidebar.crud, sidebar.pickers.dateTimePickers, sidebar.pickers.colorPickers, sidebar.chart, sidebar.chart.line, sidebar.chart.bar, sidebar.chart.area, sidebar.chart.composed, sidebar.chart.scatter, sidebar.chart.pie, sidebar.chart.radial, sidebar.chart.radar, sidebar.chart.tree, sidebar.map, sidebar.map.simple, sidebar.map.styled, sidebar.map.geoLocation, sidebar.map.mapDirection, sidebar.map.overlay, sidebar.map.kmLayer, sidebar.map.popupInfo, sidebar.map.trafficLayer, sidebar.map.streetView, sidebar.map.eventListener, sidebar.map.mapDrawing, sidebar.map.mapClustering, sidebar.modules, sidebar.calendar, sidebar.calendar.basic, sidebar.calendar.cultures, sidebar.calendar.dnd, sidebar.calendar.popup, sidebar.calendar.rendering, sidebar.calendar.selectable, sidebar.calendar.timeslots, sidebar.mail.title, sidebar.mail.compose, sidebar.mail.mailbox, sidebar.mail.filters, sidebar.mail.labels, sidebar.eCommerce, sidebar.eCommerce.productList, sidebar.eCommerce.productGrid, sidebar.extraComponents, sidebar.inBuiltApp, sidebar.extraElements.callouts, sidebar.extraElements.testimonials, sidebar.timeLine, sidebar.timeLine.default, sidebar.timeLine.defaultwithIcons, sidebar.timeLine.leftAligned, sidebar.extraElements.pricingTable, sidebar.customViews, sidebar.listType, sidebar.listType.extras, sidebar.listType.plainListView, sidebar.listType.withDivider, sidebar.listType.cardListView, sidebar.extraPages.404, sidebar.extraPages.500, sidebar.extraPages, app.userAuth, app.userAuth.login, app.userAuth.signIn, app.userAuth.send, app.userAuth.bySigning, app.userAuth.or, app.userAuth.forgotPassword, app.userAuth.forgot, app.userAuth.signUp, app.userAuth.getAccount, app.userAuth.resetPassword, app.userAuth.reset, app.userAuth.lockScreen, app.userAuth.unLock, appModule.enterPasswordUnlock, appModule.enterPasswordReset, appModule.loginSuccessfully, appModule.password, appModule.email, appModule.name, appModule.phone, appModule.designation, appModule.regsiter, appModule.regsiterNow, appModule.hvAccount, appModule.createAccount, appModule.termAndCondition, appModule.iAccept, todo, todo.addTask, todo.all, todo.filters, todo.labels, chat.selectUserChat, chat.selectContactChat, chat.chatUser, chat.contacts, chat.searchStartNewChat, chat.typeMessage, chat.status, contact.saveContact, contact.addContact, contact.searchContact, mail.mailbox, mail.compose, mail.filters, mail.labels, mail.title, eCommerce.buyNow, eCommerce.addToCart, eCommerce.readMore, callouts.viewRange, callouts.basic, extraElements.callout, testimonials.basic, testimonials.classic, testimonials.standard, extraElements.testimonials, button.modify, button.delete, pricingTable.basic, pricingTable.circle, pricingTable.classic, pricingTable.dark, pricingTable.personal, pricingTable.easyTranslation, pricingTable.awesomeGoogleFonts, pricingTable.hotelBookingSystem, pricingTable.emailComposeInterface, pricingTable.locationFinderApp, pricingTable.buyNow, pricingTable.business, pricingTable.professional, button.yes, button.no, extraPages.404Msg, extraPages.500Msg, extraPages.goHome, extension.sweetAlerts, sweetAlerts.basic, sweetAlerts.description, sweetAlerts.success, sweetAlerts.warning, sweetAlerts.custom, sweetAlerts.htmlTag, sweetAlerts.prompt, sweetAlerts.itsBlue, sweetAlerts.passwordPrompt, sweetAlerts.customStyle, sweetAlerts.itPretty, sweetAlerts.btnClicked, sweetAlerts.youWillFind, sweetAlerts.youWillNotAble, sweetAlerts.hereIsaMessage, sweetAlerts.goodJob, sweetAlerts.yesDeleteIt, sweetAlerts.areYouSure, sweetAlerts.doYouLikeThumb, sweetAlerts.anInput, sweetAlerts.writeSomethingInteresting, sweetAlerts.writeSomething, sweetAlerts.youMustEnterPassword, sweetAlerts.enterPassword, extension.notification, notification.infoMsg, notification.successMessage, notification.warningMessage, notification.closeAfter3000ms, notification.errorMessage, notification.titleHere, notification.clickMe, notification.info, notification.success, notification.warning, notification.error, sidebar.editors, sidebar.editors.CKEditor, sidebar.editors.WYSISWYGEditor, picker.color.alpha, picker.color.hue, picker.color.circle, picker.color.compact, picker.color.block, picker.color.chrome, picker.color.github, picker.color.twitter, picker.color.withRedux, picker.color.sketch, picker.color.material, picker.color.slider, picker.color.basic, picker.color.basicToggle, picker.color.custom, picker.color.customPointer, picker.color.photoshop, picker.color.swatches, picker.color.basicPositioning, sidebar.documents, sidebar.documents.changelog, sidebar.documents.installation, sidebar.dashboard.listing, sidebar.dashboard.crypto, sidebar.algolia, sidebar.components.rechart, sidebar.components.amchart, sidebar.google.map, sidebar.ammap, sidebar.map.animations.lines, sidebar.map.curved.lines, sidebar.map.zooming.countries, sidebar.map.patterns, sidebar.map.capitals.map, sidebar.map.markers, sidebar.map.flight.routes, sidebar.map.choropleth, sidebar.map.grouped.countries, sidebar.map.bubbles, sidebar.map.drill.down, sidebar.map.multiple.areas, sidebar.map.weather, sidebar.extensions.shuffle, sidebar.extensions.profile, sidebar.social, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"app.announced\":\"Une nouvelle version sortira le 25 décembre. Restez à l'écoute!\",\"sidebar.main\":\"Principale\",\"sidebar.dashboard\":\"Tableau de bord\",\"sidebar.layouts\":\"Layouts\",\"sidebar.dashboard.crm\":\"Crm\",\"sidebar.components\":\"Composants\",\"sidebar.components.general\":\"Général\",\"sidebar.general.button\":\"Bouton\",\"sidebar.general.icon\":\"Icône\",\"sidebar.components.navigation\":\"La navigation\",\"sidebar.navigation.affix\":\"Affixe\",\"sidebar.navigation.breadcrumb\":\"Miette de pain\",\"sidebar.navigation.dropdown\":\"Menu déroulant\",\"sidebar.navigation.menu\":\"Menu\",\"sidebar.navigation.pagination\":\"Pagination\",\"sidebar.navigation.steps\":\"Pas\",\"sidebar.components.dataEntry\":\"La saisie des données\",\"sidebar.dataEntry.autoComplete\":\"Saisie semi-automatique\",\"sidebar.dataEntry.checkbox\":\"Case à cocher\",\"sidebar.dataEntry.cascader\":\"Cascader\",\"sidebar.dataEntry.datePicker\":\"Sélecteur de date\",\"sidebar.dataEntry.form\":\"Forme\",\"sidebar.dataEntry.inputNumber\":\"InputNumber\",\"sidebar.dataEntry.input\":\"Contribution\",\"sidebar.dataEntry.mention\":\"Mention\",\"sidebar.dataEntry.rate\":\"Taux\",\"sidebar.dataEntry.radio\":\"Radio\",\"sidebar.dataEntry.switch\":\"Commutateur\",\"sidebar.dataEntry.slider\":\"Slider\",\"sidebar.dataEntry.select\":\"Sélectionner\",\"sidebar.dataEntry.treeSelect\":\"TreeSelect\",\"sidebar.dataEntry.transfer\":\"Transfert\",\"sidebar.dataEntry.timePicker\":\"Time Picker\",\"sidebar.dataEntry.upload\":\"Télécharger\",\"sidebar.components.dataDisplay\":\"Affichage des données\",\"sidebar.dataDisplay.avatar\":\"Avatar\",\"sidebar.dataDisplay.badge\":\"Badge\",\"sidebar.dataDisplay.collapse\":\"Effondrer\",\"sidebar.dataDisplay.carousel\":\"Carrousel\",\"sidebar.dataDisplay.card\":\"Carte\",\"sidebar.dataDisplay.calender\":\"Calendrier\",\"sidebar.dataDisplay.list\":\"liste\",\"sidebar.dataDisplay.popover\":\"Popover\",\"sidebar.dataDisplay.tree\":\"Arbre\",\"sidebar.dataDisplay.toolTips\":\"Info-bulles\",\"sidebar.dataDisplay.timeLine\":\"Chronologie\",\"sidebar.dataDisplay.tag\":\"Marque\",\"sidebar.dataDisplay.tabs\":\"Tabs\",\"sidebar.dataDisplay.table\":\"Table\",\"sidebar.components.feedBack\":\"Retour d'information\",\"sidebar.feedBack.alert\":\"Alerte\",\"sidebar.feedBack.modal\":\"Modal\",\"sidebar.feedBack.message\":\"Message\",\"sidebar.feedBack.notification\":\"Notification\",\"sidebar.feedBack.progress\":\"Le progrès\",\"sidebar.feedBack.popConfirm\":\"PopConfirm\",\"sidebar.feedBack.spin\":\"Tourner\",\"sidebar.components.other\":\"Autre\",\"sidebar.other.anchor\":\"Ancre\",\"sidebar.other.backTop\":\"BackTop\",\"sidebar.other.divider\":\"Diviseur\",\"sidebar.widgets\":\"Widgets\",\"sidebar.metrics\":\"Métrique\",\"sidebar.view\":\"Vue\",\"sidebar.view.basicTable\":\"Table de base\",\"sidebar.view.dataTable\":\"Tableau de données\",\"sidebar.extensions\":\"Extensions\",\"sidebar.extensions.editior\":\"Éditeur\",\"sidebar.extensions.dragNDrop\":\"Drag & Drop\",\"sidebar.extensions.sweetAlert\":\"Alerte douce\",\"sidebar.extensions.notification\":\"Notification\",\"sidebar.extensions.reactDates\":\"Réagissez les dates\",\"sidebar.extensions.dropZone\":\"Zone de largage\",\"sidebar.googleMap\":\"Google Map\",\"sidebar.charts\":\"Graphiques\",\"sidebar.apps\":\"applications\",\"sidebar.mailApp\":\"Application de messagerie\",\"sidebar.todoApp\":\"Todo App\",\"sidebar.contactsApp\":\"Contacts App\",\"sidebar.chatApp\":\"App chat\",\"sidebar.notes\":\"Remarques\",\"sidebar.pickers\":\"Pickers\",\"sidebar.crud\":\"Firebase CRUD\",\"sidebar.pickers.dateTimePickers\":\"Sélecteurs de date et d'heure\",\"sidebar.pickers.colorPickers\":\"Color Pickers\",\"sidebar.chart\":\"Graphique\",\"sidebar.chart.line\":\"Graphique en ligne\",\"sidebar.chart.bar\":\"Diagramme à bandes\",\"sidebar.chart.area\":\"Graphique de zone\",\"sidebar.chart.composed\":\"Tableau composé\",\"sidebar.chart.scatter\":\"Diagramme de dispersion\",\"sidebar.chart.pie\":\"Camembert\",\"sidebar.chart.radial\":\"Graphique radial\",\"sidebar.chart.radar\":\"Graphique radar\",\"sidebar.chart.tree\":\"Arbre\",\"sidebar.map\":\"Google Map\",\"sidebar.map.simple\":\"Carte simple\",\"sidebar.map.styled\":\"Carte stylée\",\"sidebar.map.geoLocation\":\"Emplacement géographique\",\"sidebar.map.mapDirection\":\"Direction de la carte\",\"sidebar.map.overlay\":\"Superposition de carte\",\"sidebar.map.kmLayer\":\"Carte Km Layer\",\"sidebar.map.popupInfo\":\"Map Popup Info\",\"sidebar.map.trafficLayer\":\"Couche routière\",\"sidebar.map.streetView\":\"Street View\",\"sidebar.map.eventListener\":\"Event Listener\",\"sidebar.map.mapDrawing\":\"Dessin de carte\",\"sidebar.map.mapClustering\":\"Clustering de carte\",\"sidebar.modules\":\"Modules\",\"sidebar.calendar\":\"Calendrier\",\"sidebar.calendar.basic\":\"De base\",\"sidebar.calendar.cultures\":\"Des cultures\",\"sidebar.calendar.dnd\":\"Dnd\",\"sidebar.calendar.popup\":\"Apparaitre\",\"sidebar.calendar.rendering\":\"Le rendu\",\"sidebar.calendar.selectable\":\"Sélectionnable\",\"sidebar.calendar.timeslots\":\"Tranches de temps\",\"sidebar.mail.title\":\"Courrier\",\"sidebar.mail.compose\":\"COMPOSER\",\"sidebar.mail.mailbox\":\"Boites aux lettres\",\"sidebar.mail.filters\":\"filtres\",\"sidebar.mail.labels\":\"Étiquettes\",\"sidebar.eCommerce\":\"commerce électronique\",\"sidebar.eCommerce.productList\":\"Liste de produits\",\"sidebar.eCommerce.productGrid\":\"Grille de produit\",\"sidebar.extraComponents\":\"Composants supplémentaires\",\"sidebar.inBuiltApp\":\"Applications intégrées\",\"sidebar.extraElements.callouts\":\"Faire appel à\",\"sidebar.extraElements.testimonials\":\"Témoignages\",\"sidebar.timeLine\":\"Chronologie\",\"sidebar.timeLine.default\":\"Défaut\",\"sidebar.timeLine.defaultwithIcons\":\"Par défaut avec des icônes\",\"sidebar.timeLine.leftAligned\":\"Aligné à gauche\",\"sidebar.extraElements.pricingTable\":\"Tableau de tarification\",\"sidebar.customViews\":\"Affichages personnalisés\",\"sidebar.listType\":\"Type de liste\",\"sidebar.listType.extras\":\"Extras\",\"sidebar.listType.plainListView\":\"Vue en liste simple\",\"sidebar.listType.withDivider\":\"Liste simple avec diviseur\",\"sidebar.listType.cardListView\":\"Vue liste de cartes\",\"sidebar.extraPages.404\":\"404 Page d'erreur\",\"sidebar.extraPages.500\":\"500 Page d'erreur\",\"sidebar.extraPages\":\"Pages supplémentaires\",\"app.userAuth\":\"Authentification utilisateur\",\"app.userAuth.login\":\"S'identifier\",\"app.userAuth.signIn\":\"Se connecter\",\"app.userAuth.send\":\"ENVOYER\",\"app.userAuth.bySigning\":\"En vous inscrivant, vous pouvez profiter des caractéristiques complètes de nos services.\",\"app.userAuth.or\":\"ou\",\"app.userAuth.forgotPassword\":\"Mot de passe oublié\",\"app.userAuth.forgot\":\"Ne t'inquiète pas. Récupérer le mot de passe est facile. Dites-nous simplement l'email que vous avez enregistré avec jumbo\",\"app.userAuth.signUp\":\"S'inscrire\",\"app.userAuth.getAccount\":\"Avoir un compte !!!\",\"app.userAuth.resetPassword\":\"réinitialiser le mot de passe\",\"app.userAuth.reset\":\"RÉINITIALISER\",\"app.userAuth.lockScreen\":\"Écran verrouillé\",\"app.userAuth.unLock\":\"OUVRIR\",\"appModule.enterPasswordUnlock\":\"Entrez votre mot de passe pour déverrouiller l'écran!\",\"appModule.enterPasswordReset\":\"Entrez un nouveau mot de passe pour votre compte\",\"appModule.loginSuccessfully\":\"Connectez-vous avec succès\",\"appModule.password\":\"Mot de passe\",\"appModule.email\":\"Email\",\"appModule.name\":\"prénom\",\"appModule.phone\":\"Téléphone\",\"appModule.designation\":\"La désignation\",\"appModule.regsiter\":\"registre\",\"appModule.regsiterNow\":\"Inscrivez-vous Non\",\"appModule.hvAccount\":\"Avoir un compte\",\"appModule.createAccount\":\"Créer un compte\",\"appModule.termAndCondition\":\"Terme et condition\",\"appModule.iAccept\":\"en vous inscrivant, j'accepte\",\"todo\":\"Faire\",\"todo.addTask\":\"AJOUTER UNE TÂCHE\",\"todo.all\":\"Tout\",\"todo.filters\":\"Filtres\",\"todo.labels\":\"Étiquettes\",\"chat.selectUserChat\":\"Sélectionnez Utilisateur pour lancer le chat\",\"chat.selectContactChat\":\"Sélectionnez le contact pour démarrer le chat\",\"chat.chatUser\":\"Chats\",\"chat.contacts\":\"Contacts\",\"chat.searchStartNewChat\":\"Rechercher ou démarrer une nouvelle discussion\",\"chat.typeMessage\":\"Tapez et appuyez sur Entrée pour envoyer un message\",\"chat.status\":\"c'est un statut ... pas votre journal ...\",\"contact.saveContact\":\"Enregistrer le contact\",\"contact.addContact\":\"Ajouter le contact\",\"contact.searchContact\":\"Rechercher un contact\",\"mail.mailbox\":\"Boites aux lettres\",\"mail.compose\":\"COMPOSER\",\"mail.filters\":\"Filtres\",\"mail.labels\":\"Étiquettes\",\"mail.title\":\"Nouveau message\",\"eCommerce.buyNow\":\"Acheter maintenant\",\"eCommerce.addToCart\":\"AJOUTER AU PANIER\",\"eCommerce.readMore\":\"LIRE LA SUITE\",\"callouts.viewRange\":\"VOIR LA GAMME\",\"callouts.basic\":\"De base\",\"extraElements.callout\":\"Elément supplémentaire\",\"testimonials.basic\":\"De base\",\"testimonials.classic\":\"Classique\",\"testimonials.standard\":\"la norme\",\"extraElements.testimonials\":\"Témoignages\",\"button.modify\":\"Modifier\",\"button.delete\":\"Effacer\",\"pricingTable.basic\":\"De base\",\"pricingTable.circle\":\"Cercle\",\"pricingTable.classic\":\"Classique\",\"pricingTable.dark\":\"Foncé\",\"pricingTable.personal\":\"PERSONNEL\",\"pricingTable.easyTranslation\":\"Traduction facile\",\"pricingTable.awesomeGoogleFonts\":\"Impressionnant Google Fonts\",\"pricingTable.hotelBookingSystem\":\"Système de réservation d'hôtel\",\"pricingTable.emailComposeInterface\":\"Email Compose Interface\",\"pricingTable.locationFinderApp\":\"Application de localisation\",\"pricingTable.buyNow\":\"Acheter maintenant\",\"pricingTable.business\":\"ENTREPRISE\",\"pricingTable.professional\":\"PROFESSIONNEL\",\"button.yes\":\"Oui\",\"button.no\":\"Non\",\"extraPages.404Msg\":\"Oups, une erreur s'est produite. Page non trouvée!\",\"extraPages.500Msg\":\"Désolé, le serveur va mal\",\"extraPages.goHome\":\"Aller à la maison\",\"extension.sweetAlerts\":\"Alertes douces\",\"sweetAlerts.basic\":\"De base\",\"sweetAlerts.description\":\"Avec description\",\"sweetAlerts.success\":\"Succès\",\"sweetAlerts.warning\":\"Attention\",\"sweetAlerts.custom\":\"Douane\",\"sweetAlerts.htmlTag\":\"Balise Html\",\"sweetAlerts.prompt\":\"Rapide\",\"sweetAlerts.itsBlue\":\"C'est bleu!\",\"sweetAlerts.passwordPrompt\":\"Invite de mot de passe\",\"sweetAlerts.customStyle\":\"Style personnalisé\",\"sweetAlerts.itPretty\":\"C'est joli, n'est-ce pas?\",\"sweetAlerts.btnClicked\":\"Vous avez cliqué sur le bouton!\",\"sweetAlerts.youWillFind\":\"Vous trouverez qu'ils sont en place!\",\"sweetAlerts.youWillNotAble\":\"Vous ne serez pas capable de récupérer ce fichier imaginaire!\",\"sweetAlerts.hereIsaMessage\":\"Voici un message!\",\"sweetAlerts.goodJob\":\"Bon travail!\",\"sweetAlerts.yesDeleteIt\":\"Oui, supprimez-le!\",\"sweetAlerts.areYouSure\":\"Êtes-vous sûr?\",\"sweetAlerts.doYouLikeThumb\":\"Aimez-vous les pouces?\",\"sweetAlerts.anInput\":\"Une entrée!\",\"sweetAlerts.writeSomethingInteresting\":\"Ecrire quelque chose d'intéressant:\",\"sweetAlerts.writeSomething\":\"Écris quelque chose\",\"sweetAlerts.youMustEnterPassword\":\"Vous devez entrer votre mot de passe!\",\"sweetAlerts.enterPassword\":\"Entrer le mot de passe\",\"extension.notification\":\"Notification\",\"notification.infoMsg\":\"Message d'information\",\"notification.successMessage\":\"Message de réussite\",\"notification.warningMessage\":\"Message d'alerte\",\"notification.closeAfter3000ms\":\"Fermer après 3000ms\",\"notification.errorMessage\":\"Message d'erreur\",\"notification.titleHere\":\"Titre ici\",\"notification.clickMe\":\"Clique moi!\",\"notification.info\":\"Info\",\"notification.success\":\"Succès\",\"notification.warning\":\"Attention\",\"notification.error\":\"Erreur\",\"sidebar.editors\":\"Éditeurs\",\"sidebar.editors.CKEditor\":\"CKEditor\",\"sidebar.editors.WYSISWYGEditor\":\"Éditeur WYSIWYG\",\"picker.color.alpha\":\"Alpha Pickers\",\"picker.color.hue\":\"Pickers de teinte\",\"picker.color.circle\":\"Cueilleurs de cercle\",\"picker.color.compact\":\"Pickers compacts\",\"picker.color.block\":\"Ramasseurs de blocs\",\"picker.color.chrome\":\"Chrome Pickers\",\"picker.color.github\":\"Github Cueilleurs\",\"picker.color.twitter\":\"Capteurs Twitter\",\"picker.color.withRedux\":\"Avec Redux\",\"picker.color.sketch\":\"Sketch Pickers\",\"picker.color.material\":\"Ramasseurs de matériel\",\"picker.color.slider\":\"Sliders Pickers\",\"picker.color.basic\":\"Cueilleurs de base\",\"picker.color.basicToggle\":\"Bascule basique\",\"picker.color.custom\":\"Pickers personnalisés\",\"picker.color.customPointer\":\"Pointeur personnalisé\",\"picker.color.photoshop\":\"Photoshop Pickers\",\"picker.color.swatches\":\"Nuanciers\",\"picker.color.basicPositioning\":\"Positionnement de base\",\"sidebar.documents\":\"Documents\",\"sidebar.documents.changelog\":\"Changelog\",\"sidebar.documents.installation\":\"Installation\",\"sidebar.dashboard.listing\":\"Inscription\",\"sidebar.dashboard.crypto\":\"Crypto\",\"sidebar.algolia\":\"Algolia\",\"sidebar.components.rechart\":\"ReChart\",\"sidebar.components.amchart\":\"AmChart\",\"sidebar.google.map\":\"Google Map\",\"sidebar.ammap\":\"AmMap\",\"sidebar.map.animations.lines\":\"Avec des animations\",\"sidebar.map.curved.lines\":\"Avec des lignes courbes\",\"sidebar.map.zooming.countries\":\"Zoom pays\",\"sidebar.map.patterns\":\"Carte avec des motifs\",\"sidebar.map.capitals.map\":\"Carte des capitales\",\"sidebar.map.markers\":\"Marqueurs de carte\",\"sidebar.map.flight.routes\":\"Routes de vol\",\"sidebar.map.choropleth\":\"Carte de chaleur\",\"sidebar.map.grouped.countries\":\"Pays groupés\",\"sidebar.map.bubbles\":\"Map with Bubbles\",\"sidebar.map.drill.down\":\"Drill Down Map\",\"sidebar.map.multiple.areas\":\"Plusieurs zones\",\"sidebar.map.weather\":\"Carte météorologique\",\"sidebar.extensions.shuffle\":\"Mélanger\",\"sidebar.extensions.profile\":\"Profil\",\"sidebar.social\":\"Applications sociales\"}");

/***/ }),

/***/ "./lngProvider/locales/it_IT.json":
/*!****************************************!*\
  !*** ./lngProvider/locales/it_IT.json ***!
  \****************************************/
/*! exports provided: app.announced, sidebar.main, sidebar.dashboard, sidebar.layouts, sidebar.dashboard.crm, sidebar.components, sidebar.components.general, sidebar.general.button, sidebar.general.icon, sidebar.components.navigation, sidebar.navigation.affix, sidebar.navigation.breadcrumb, sidebar.navigation.dropdown, sidebar.navigation.menu, sidebar.navigation.pagination, sidebar.navigation.steps, sidebar.components.dataEntry, sidebar.dataEntry.autoComplete, sidebar.dataEntry.checkbox, sidebar.dataEntry.cascader, sidebar.dataEntry.datePicker, sidebar.dataEntry.form, sidebar.dataEntry.inputNumber, sidebar.dataEntry.input, sidebar.dataEntry.mention, sidebar.dataEntry.rate, sidebar.dataEntry.radio, sidebar.dataEntry.switch, sidebar.dataEntry.slider, sidebar.dataEntry.select, sidebar.dataEntry.treeSelect, sidebar.dataEntry.transfer, sidebar.dataEntry.timePicker, sidebar.dataEntry.upload, sidebar.components.dataDisplay, sidebar.dataDisplay.avatar, sidebar.dataDisplay.badge, sidebar.dataDisplay.collapse, sidebar.dataDisplay.carousel, sidebar.dataDisplay.card, sidebar.dataDisplay.calender, sidebar.dataDisplay.list, sidebar.dataDisplay.popover, sidebar.dataDisplay.tree, sidebar.dataDisplay.toolTips, sidebar.dataDisplay.timeLine, sidebar.dataDisplay.tag, sidebar.dataDisplay.tabs, sidebar.dataDisplay.table, sidebar.components.feedBack, sidebar.feedBack.alert, sidebar.feedBack.modal, sidebar.feedBack.message, sidebar.feedBack.notification, sidebar.feedBack.progress, sidebar.feedBack.popConfirm, sidebar.feedBack.spin, sidebar.components.other, sidebar.other.anchor, sidebar.other.backTop, sidebar.other.divider, sidebar.widgets, sidebar.metrics, sidebar.view, sidebar.view.basicTable, sidebar.view.dataTable, sidebar.extensions, sidebar.extensions.editior, sidebar.extensions.dragNDrop, sidebar.extensions.sweetAlert, sidebar.extensions.notification, sidebar.extensions.reactDates, sidebar.extensions.dropZone, sidebar.googleMap, sidebar.charts, sidebar.apps, sidebar.mailApp, sidebar.todoApp, sidebar.contactsApp, sidebar.chatApp, sidebar.notes, sidebar.pickers, sidebar.crud, sidebar.pickers.dateTimePickers, sidebar.pickers.colorPickers, sidebar.chart, sidebar.chart.line, sidebar.chart.bar, sidebar.chart.area, sidebar.chart.composed, sidebar.chart.scatter, sidebar.chart.pie, sidebar.chart.radial, sidebar.chart.radar, sidebar.chart.tree, sidebar.map, sidebar.map.simple, sidebar.map.styled, sidebar.map.geoLocation, sidebar.map.mapDirection, sidebar.map.overlay, sidebar.map.kmLayer, sidebar.map.popupInfo, sidebar.map.trafficLayer, sidebar.map.streetView, sidebar.map.eventListener, sidebar.map.mapDrawing, sidebar.map.mapClustering, sidebar.modules, sidebar.calendar, sidebar.calendar.basic, sidebar.calendar.cultures, sidebar.calendar.dnd, sidebar.calendar.popup, sidebar.calendar.rendering, sidebar.calendar.selectable, sidebar.calendar.timeslots, sidebar.mail.title, sidebar.mail.compose, sidebar.mail.mailbox, sidebar.mail.filters, sidebar.mail.labels, sidebar.eCommerce, sidebar.eCommerce.productList, sidebar.eCommerce.productGrid, sidebar.extraComponents, sidebar.inBuiltApp, sidebar.extraElements.callouts, sidebar.extraElements.testimonials, sidebar.timeLine, sidebar.timeLine.default, sidebar.timeLine.defaultwithIcons, sidebar.timeLine.leftAligned, sidebar.extraElements.pricingTable, sidebar.customViews, sidebar.listType.extras, sidebar.listType, sidebar.listType.plainListView, sidebar.listType.withDivider, sidebar.listType.cardListView, sidebar.extraPages.404, sidebar.extraPages.500, sidebar.extraPages, app.userAuth, app.userAuth.login, app.userAuth.signIn, app.userAuth.send, app.userAuth.bySigning, app.userAuth.or, app.userAuth.forgotPassword, app.userAuth.forgot, app.userAuth.signUp, app.userAuth.getAccount, app.userAuth.resetPassword, app.userAuth.reset, app.userAuth.lockScreen, app.userAuth.unLock, appModule.enterPasswordUnlock, appModule.enterPasswordReset, appModule.loginSuccessfully, appModule.password, appModule.email, appModule.name, appModule.phone, appModule.designation, appModule.regsiter, appModule.regsiterNow, appModule.hvAccount, appModule.createAccount, appModule.termAndCondition, appModule.iAccept, todo, todo.addTask, todo.all, todo.filters, todo.labels, chat.selectUserChat, chat.selectContactChat, chat.chatUser, chat.contacts, chat.searchStartNewChat, chat.typeMessage, chat.status, contact.saveContact, contact.addContact, contact.searchContact, mail.mailbox, mail.compose, mail.filters, mail.labels, mail.title, eCommerce.buyNow, eCommerce.addToCart, eCommerce.readMore, callouts.viewRange, callouts.basic, extraElements.callout, testimonials.basic, testimonials.classic, testimonials.standard, extraElements.testimonials, button.modify, button.delete, pricingTable.basic, pricingTable.circle, pricingTable.classic, pricingTable.dark, pricingTable.personal, pricingTable.easyTranslation, pricingTable.awesomeGoogleFonts, pricingTable.hotelBookingSystem, pricingTable.emailComposeInterface, pricingTable.locationFinderApp, pricingTable.buyNow, pricingTable.business, pricingTable.professional, button.yes, button.no, extraPages.404Msg, extraPages.500Msg, extraPages.goHome, extension.sweetAlerts, sweetAlerts.basic, sweetAlerts.description, sweetAlerts.success, sweetAlerts.warning, sweetAlerts.custom, sweetAlerts.htmlTag, sweetAlerts.prompt, sweetAlerts.itsBlue, sweetAlerts.passwordPrompt, sweetAlerts.customStyle, sweetAlerts.itPretty, sweetAlerts.btnClicked, sweetAlerts.youWillFind, sweetAlerts.youWillNotAble, sweetAlerts.hereIsaMessage, sweetAlerts.goodJob, sweetAlerts.yesDeleteIt, sweetAlerts.areYouSure, sweetAlerts.doYouLikeThumb, sweetAlerts.anInput, sweetAlerts.writeSomethingInteresting, sweetAlerts.writeSomething, sweetAlerts.youMustEnterPassword, sweetAlerts.enterPassword, extension.notification, notification.infoMsg, notification.successMessage, notification.warningMessage, notification.closeAfter3000ms, notification.errorMessage, notification.titleHere, notification.clickMe, notification.info, notification.success, notification.warning, notification.error, sidebar.editors, sidebar.editors.CKEditor, sidebar.editors.WYSISWYGEditor, picker.color.alpha, picker.color.hue, picker.color.circle, picker.color.compact, picker.color.block, picker.color.chrome, picker.color.github, picker.color.twitter, picker.color.withRedux, picker.color.sketch, picker.color.material, picker.color.slider, picker.color.basic, picker.color.basicToggle, picker.color.custom, picker.color.customPointer, picker.color.photoshop, picker.color.swatches, picker.color.basicPositioning, sidebar.documents, sidebar.documents.changelog, sidebar.documents.installation, sidebar.dashboard.listing, sidebar.dashboard.crypto, sidebar.algolia, sidebar.components.rechart, sidebar.components.amchart, sidebar.google.map, sidebar.ammap, sidebar.map.animations.lines, sidebar.map.curved.lines, sidebar.map.zooming.countries, sidebar.map.patterns, sidebar.map.capitals.map, sidebar.map.markers, sidebar.map.flight.routes, sidebar.map.choropleth, sidebar.map.grouped.countries, sidebar.map.bubbles, sidebar.map.drill.down, sidebar.map.multiple.areas, sidebar.map.weather, sidebar.extensions.shuffle, sidebar.extensions.profile, sidebar.social, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"app.announced\":\"Una nuova versione sarà rilasciata il 25 dicembre. Rimanete sintonizzati!\",\"sidebar.main\":\"Principale\",\"sidebar.dashboard\":\"Cruscotto\",\"sidebar.layouts\":\"Layouts\",\"sidebar.dashboard.crm\":\"Crm\",\"sidebar.components\":\"componenti\",\"sidebar.components.general\":\"Generale\",\"sidebar.general.button\":\"Pulsante\",\"sidebar.general.icon\":\"Icona\",\"sidebar.components.navigation\":\"Navigazione\",\"sidebar.navigation.affix\":\"Apporre\",\"sidebar.navigation.breadcrumb\":\"breadcrumb\",\"sidebar.navigation.dropdown\":\"Cadere in picchiata\",\"sidebar.navigation.menu\":\"Menu\",\"sidebar.navigation.pagination\":\"paginatura\",\"sidebar.navigation.steps\":\"passi\",\"sidebar.components.dataEntry\":\"Inserimento dati\",\"sidebar.dataEntry.autoComplete\":\"Completamento automatico\",\"sidebar.dataEntry.checkbox\":\"casella di controllo\",\"sidebar.dataEntry.cascader\":\"Cascader\",\"sidebar.dataEntry.datePicker\":\"Date picker\",\"sidebar.dataEntry.form\":\"Modulo\",\"sidebar.dataEntry.inputNumber\":\"Numero di input\",\"sidebar.dataEntry.input\":\"Ingresso\",\"sidebar.dataEntry.mention\":\"Citare\",\"sidebar.dataEntry.rate\":\"Vota\",\"sidebar.dataEntry.radio\":\"Radio\",\"sidebar.dataEntry.switch\":\"Interruttore\",\"sidebar.dataEntry.slider\":\"Slider\",\"sidebar.dataEntry.select\":\"Selezionare\",\"sidebar.dataEntry.treeSelect\":\"TreeSelect\",\"sidebar.dataEntry.transfer\":\"Trasferimento\",\"sidebar.dataEntry.timePicker\":\"Time Picker\",\"sidebar.dataEntry.upload\":\"Caricare\",\"sidebar.components.dataDisplay\":\"Visualizzazione dati\",\"sidebar.dataDisplay.avatar\":\"Avatar\",\"sidebar.dataDisplay.badge\":\"Distintivo\",\"sidebar.dataDisplay.collapse\":\"Crollo\",\"sidebar.dataDisplay.carousel\":\"Giostra\",\"sidebar.dataDisplay.card\":\"Carta\",\"sidebar.dataDisplay.calender\":\"Calendario\",\"sidebar.dataDisplay.list\":\"Elenco\",\"sidebar.dataDisplay.popover\":\"popover\",\"sidebar.dataDisplay.tree\":\"Albero\",\"sidebar.dataDisplay.toolTips\":\"Tooltips\",\"sidebar.dataDisplay.timeLine\":\"Sequenza temporale\",\"sidebar.dataDisplay.tag\":\"Etichetta\",\"sidebar.dataDisplay.tabs\":\"Tabs\",\"sidebar.dataDisplay.table\":\"tavolo\",\"sidebar.components.feedBack\":\"Risposta\",\"sidebar.feedBack.alert\":\"Mettere in guardia\",\"sidebar.feedBack.modal\":\"Modale\",\"sidebar.feedBack.message\":\"Messaggio\",\"sidebar.feedBack.notification\":\"Notifica\",\"sidebar.feedBack.progress\":\"Progresso\",\"sidebar.feedBack.popConfirm\":\"PopConfirm\",\"sidebar.feedBack.spin\":\"Rotazione\",\"sidebar.components.other\":\"Altro\",\"sidebar.other.anchor\":\"Ancora\",\"sidebar.other.backTop\":\"BackTop\",\"sidebar.other.divider\":\"Divisore\",\"sidebar.widgets\":\"widget\",\"sidebar.metrics\":\"Metrica\",\"sidebar.view\":\"vista\",\"sidebar.view.basicTable\":\"Tabella di base\",\"sidebar.view.dataTable\":\"Tabella dati\",\"sidebar.extensions\":\"estensioni\",\"sidebar.extensions.editior\":\"editore\",\"sidebar.extensions.dragNDrop\":\"Trascina e rilascia\",\"sidebar.extensions.sweetAlert\":\"Dolce avviso\",\"sidebar.extensions.notification\":\"Notifica\",\"sidebar.extensions.reactDates\":\"Date di Reazione\",\"sidebar.extensions.dropZone\":\"Zona di rilascio\",\"sidebar.googleMap\":\"Google Map\",\"sidebar.charts\":\"Grafici\",\"sidebar.apps\":\"applicazioni\",\"sidebar.mailApp\":\"App di posta\",\"sidebar.todoApp\":\"App Todo\",\"sidebar.contactsApp\":\"App Contatti\",\"sidebar.chatApp\":\"App di chat\",\"sidebar.notes\":\"Gli appunti\",\"sidebar.pickers\":\"Pickers\",\"sidebar.crud\":\"Firebase CRUD\",\"sidebar.pickers.dateTimePickers\":\"Raccoglitori di data e ora\",\"sidebar.pickers.colorPickers\":\"Raccoglitori di colori\",\"sidebar.chart\":\"Grafico\",\"sidebar.chart.line\":\"Grafico a linee\",\"sidebar.chart.bar\":\"Grafico a barre\",\"sidebar.chart.area\":\"Area grafico\",\"sidebar.chart.composed\":\"Grafico composto\",\"sidebar.chart.scatter\":\"Grafico a dispersione\",\"sidebar.chart.pie\":\"Grafico a torta\",\"sidebar.chart.radial\":\"Grafico radiale\",\"sidebar.chart.radar\":\"Grafico radar\",\"sidebar.chart.tree\":\"Grafico ad albero\",\"sidebar.map\":\"Google Map\",\"sidebar.map.simple\":\"Mappa semplice\",\"sidebar.map.styled\":\"Mappa in stile\",\"sidebar.map.geoLocation\":\"Posizione geografica\",\"sidebar.map.mapDirection\":\"Direzione della mappa\",\"sidebar.map.overlay\":\"Sovrapposizione mappa\",\"sidebar.map.kmLayer\":\"Mappa Km Layer\",\"sidebar.map.popupInfo\":\"Mappa Informazioni popup\",\"sidebar.map.trafficLayer\":\"Mappa dello strato di traffico\",\"sidebar.map.streetView\":\"vista stradale\",\"sidebar.map.eventListener\":\"Listener di eventi\",\"sidebar.map.mapDrawing\":\"Disegno della mappa\",\"sidebar.map.mapClustering\":\"Raggruppamento di mappe\",\"sidebar.modules\":\"moduli\",\"sidebar.calendar\":\"Calendario\",\"sidebar.calendar.basic\":\"Di base\",\"sidebar.calendar.cultures\":\"culture\",\"sidebar.calendar.dnd\":\"Dnd\",\"sidebar.calendar.popup\":\"Apparire\",\"sidebar.calendar.rendering\":\"Rendering\",\"sidebar.calendar.selectable\":\"selezionabile\",\"sidebar.calendar.timeslots\":\"Fasce orarie\",\"sidebar.mail.title\":\"posta\",\"sidebar.mail.compose\":\"COMPORRE\",\"sidebar.mail.mailbox\":\"Cassetta postale\",\"sidebar.mail.filters\":\"filtri\",\"sidebar.mail.labels\":\"etichette\",\"sidebar.eCommerce\":\"eCommerce\",\"sidebar.eCommerce.productList\":\"Elenco prodotti\",\"sidebar.eCommerce.productGrid\":\"Griglia del prodotto\",\"sidebar.extraComponents\":\"Componenti extra\",\"sidebar.inBuiltApp\":\"App integrate\",\"sidebar.extraElements.callouts\":\"Chiamare\",\"sidebar.extraElements.testimonials\":\"Testimonianze\",\"sidebar.timeLine\":\"Sequenza temporale\",\"sidebar.timeLine.default\":\"Predefinito\",\"sidebar.timeLine.defaultwithIcons\":\"Predefinito con icone\",\"sidebar.timeLine.leftAligned\":\"Sinistra allineata\",\"sidebar.extraElements.pricingTable\":\"Tabella dei prezzi\",\"sidebar.customViews\":\"Visualizzazioni personalizzate\",\"sidebar.listType.extras\":\"extra\",\"sidebar.listType\":\"Tipo di lista\",\"sidebar.listType.plainListView\":\"Lista semplice\",\"sidebar.listType.withDivider\":\"Lista semplice con divisore\",\"sidebar.listType.cardListView\":\"Visualizzazione elenco schede\",\"sidebar.extraPages.404\":\"404 Pagina di errore\",\"sidebar.extraPages.500\":\"500 Pagina di errore\",\"sidebar.extraPages\":\"Pagine extra\",\"app.userAuth\":\"Autenticazione dell'utente\",\"app.userAuth.login\":\"Accesso\",\"app.userAuth.signIn\":\"Registrati\",\"app.userAuth.send\":\"INVIARE\",\"app.userAuth.bySigning\":\"Con la registrazione, puoi usufruire delle funzionalità complete dei nostri servizi.\",\"app.userAuth.or\":\"o\",\"app.userAuth.forgotPassword\":\"Ha dimenticato la password\",\"app.userAuth.forgot\":\"Non ti preoccupare Recuperare la password è facile. Basta dirci l'e-mail che hai registrato con jumbo\",\"app.userAuth.signUp\":\"Iscriviti\",\"app.userAuth.getAccount\":\"Ottenere un account !!!\",\"app.userAuth.resetPassword\":\"Resetta la password\",\"app.userAuth.reset\":\"RESET\",\"app.userAuth.lockScreen\":\"Blocca schermo\",\"app.userAuth.unLock\":\"SBLOCCARE\",\"appModule.enterPasswordUnlock\":\"Inserisci la tua password per sbloccare lo schermo!\",\"appModule.enterPasswordReset\":\"Inserisci una nuova password per il tuo account\",\"appModule.loginSuccessfully\":\"Accedi con successo\",\"appModule.password\":\"Parola d'ordine\",\"appModule.email\":\"E-mail\",\"appModule.name\":\"Nome\",\"appModule.phone\":\"Telefono\",\"appModule.designation\":\"Designazione\",\"appModule.regsiter\":\"Registrare\",\"appModule.regsiterNow\":\"Registro n\",\"appModule.hvAccount\":\"Avere un conto\",\"appModule.createAccount\":\"Crea un account\",\"appModule.termAndCondition\":\"Termini e condizioni\",\"appModule.iAccept\":\"iscrivendomi, accetto\",\"todo\":\"Fare\",\"todo.addTask\":\"AGGIUNGI TASK\",\"todo.all\":\"Tutti\",\"todo.filters\":\"filtri\",\"todo.labels\":\"etichette\",\"chat.selectUserChat\":\"Seleziona Utente per avviare la chat\",\"chat.selectContactChat\":\"Seleziona contatto per avviare la chat\",\"chat.chatUser\":\"chat\",\"chat.contacts\":\"Contatti\",\"chat.searchStartNewChat\":\"Cerca o inizia nuova chat\",\"chat.typeMessage\":\"Scrivi e premi invio per inviare un messaggio\",\"chat.status\":\"è uno status .... non è il tuo diario ...\",\"contact.saveContact\":\"Salva contatto\",\"contact.addContact\":\"Aggiungi contatto\",\"contact.searchContact\":\"Cerca contatto\",\"mail.mailbox\":\"Cassetta postale\",\"mail.compose\":\"COMPORRE\",\"mail.filters\":\"filtri\",\"mail.labels\":\"etichette\",\"mail.title\":\"Nuovo messaggio\",\"eCommerce.buyNow\":\"Acquista ora\",\"eCommerce.addToCart\":\"AGGIUNGI AL CARRELLO\",\"eCommerce.readMore\":\"LEGGI DI PIÙ\",\"callouts.viewRange\":\"VISUALIZZA GAMMA\",\"callouts.basic\":\"Di base\",\"extraElements.callout\":\"Elemento extra\",\"testimonials.basic\":\"Di base\",\"testimonials.classic\":\"Classico\",\"testimonials.standard\":\"Standard\",\"extraElements.testimonials\":\"Testimonianze\",\"button.modify\":\"Modificare\",\"button.delete\":\"Elimina\",\"pricingTable.basic\":\"Di base\",\"pricingTable.circle\":\"Cerchio\",\"pricingTable.classic\":\"Classico\",\"pricingTable.dark\":\"Buio\",\"pricingTable.personal\":\"PERSONALE\",\"pricingTable.easyTranslation\":\"Traduzione semplice\",\"pricingTable.awesomeGoogleFonts\":\"Font Google fantastici\",\"pricingTable.hotelBookingSystem\":\"Sistema di prenotazione alberghiera\",\"pricingTable.emailComposeInterface\":\"Email Compose Interface\",\"pricingTable.locationFinderApp\":\"Location Finder App\",\"pricingTable.buyNow\":\"acquista ora\",\"pricingTable.business\":\"ATTIVITÀ COMMERCIALE\",\"pricingTable.professional\":\"PROFESSIONALE\",\"button.yes\":\"sì\",\"button.no\":\"No\",\"extraPages.404Msg\":\"Spiacenti, si è verificato un errore. Pagina non trovata!\",\"extraPages.500Msg\":\"Spiacente, il server va male\",\"extraPages.goHome\":\"Vai a casa\",\"extension.sweetAlerts\":\"Avvisi dolci\",\"sweetAlerts.basic\":\"Di base\",\"sweetAlerts.description\":\"Con descrizione\",\"sweetAlerts.success\":\"Successo\",\"sweetAlerts.warning\":\"avvertimento\",\"sweetAlerts.custom\":\"costume\",\"sweetAlerts.htmlTag\":\"Tag HTML\",\"sweetAlerts.prompt\":\"Richiesta\",\"sweetAlerts.itsBlue\":\"È blu!\",\"sweetAlerts.passwordPrompt\":\"Richiesta password\",\"sweetAlerts.customStyle\":\"Stile personalizzato\",\"sweetAlerts.itPretty\":\"È carino, non è vero?\",\"sweetAlerts.btnClicked\":\"Hai fatto clic sul pulsante!\",\"sweetAlerts.youWillFind\":\"Scoprirai che sono su!\",\"sweetAlerts.youWillNotAble\":\"Non sarai in grado di recuperare questo file immaginario!\",\"sweetAlerts.hereIsaMessage\":\"Ecco un messaggio!\",\"sweetAlerts.goodJob\":\"Buon lavoro!\",\"sweetAlerts.yesDeleteIt\":\"Sì, cancellalo!\",\"sweetAlerts.areYouSure\":\"Sei sicuro?\",\"sweetAlerts.doYouLikeThumb\":\"Ti piacciono i pollici?\",\"sweetAlerts.anInput\":\"Un input!\",\"sweetAlerts.writeSomethingInteresting\":\"Scrivi qualcosa di interessante:\",\"sweetAlerts.writeSomething\":\"Scrivi qualcosa\",\"sweetAlerts.youMustEnterPassword\":\"Devi inserire la tua password!\",\"sweetAlerts.enterPassword\":\"Inserire la password\",\"extension.notification\":\"Notifica\",\"notification.infoMsg\":\"Messaggio informativo\",\"notification.successMessage\":\"Messaggio di successo\",\"notification.warningMessage\":\"Messaggio di avvertimento\",\"notification.closeAfter3000ms\":\"Chiudi dopo 3000 ms\",\"notification.errorMessage\":\"Messaggio di errore\",\"notification.titleHere\":\"Titolo qui\",\"notification.clickMe\":\"Cliccami!\",\"notification.info\":\"Informazioni\",\"notification.success\":\"Successo\",\"notification.warning\":\"avvertimento\",\"notification.error\":\"Errore\",\"sidebar.editors\":\"Editors\",\"sidebar.editors.CKEditor\":\"CKEditor\",\"sidebar.editors.WYSISWYGEditor\":\"WYSIWYG Editor\",\"picker.color.alpha\":\"Raccoglitrici Alpha\",\"picker.color.hue\":\"Selezionatori di tinte\",\"picker.color.circle\":\"Raccoglitori di cerchi\",\"picker.color.compact\":\"Picker compatti\",\"picker.color.block\":\"Raccoglitori di blocchi\",\"picker.color.chrome\":\"Raccoglitrici di cromo\",\"picker.color.github\":\"Github Pickers\",\"picker.color.twitter\":\"Raccoglitori di Twitter\",\"picker.color.withRedux\":\"Con Redux\",\"picker.color.sketch\":\"Raccoglitori di schizzo\",\"picker.color.material\":\"Raccoglitori di materiale\",\"picker.color.slider\":\"Raccoglitori di cursori\",\"picker.color.basic\":\"Raccoglitori di base\",\"picker.color.basicToggle\":\"Toggle di base\",\"picker.color.custom\":\"Raccoglitori personalizzati\",\"picker.color.customPointer\":\"Puntatore personalizzato\",\"picker.color.photoshop\":\"Selettori di Photoshop\",\"picker.color.swatches\":\"Raccoglitrici di campioni\",\"picker.color.basicPositioning\":\"Posizionamento di base\",\"sidebar.documents\":\"Documenti\",\"sidebar.documents.changelog\":\"changelog\",\"sidebar.documents.installation\":\"Installazione\",\"sidebar.dashboard.listing\":\"listato\",\"sidebar.dashboard.crypto\":\"Crypto\",\"sidebar.algolia\":\"Algolia\",\"sidebar.components.rechart\":\"ReChart\",\"sidebar.components.amchart\":\"AmChart\",\"sidebar.google.map\":\"Google Map\",\"sidebar.ammap\":\"AmMap\",\"sidebar.map.animations.lines\":\"Con animazioni\",\"sidebar.map.curved.lines\":\"Con linee curve\",\"sidebar.map.zooming.countries\":\"Paesi in via di sviluppo\",\"sidebar.map.patterns\":\"Mappa con modelli\",\"sidebar.map.capitals.map\":\"Mappa dei Capitali\",\"sidebar.map.markers\":\"Indicatori di mappa\",\"sidebar.map.flight.routes\":\"Itinerari di volo\",\"sidebar.map.choropleth\":\"Mappa di calore\",\"sidebar.map.grouped.countries\":\"Paesi raggruppati\",\"sidebar.map.bubbles\":\"Mappa con bolle\",\"sidebar.map.drill.down\":\"Drill Down Map\",\"sidebar.map.multiple.areas\":\"Aree multiple\",\"sidebar.map.weather\":\"Mappa del tempo\",\"sidebar.extensions.shuffle\":\"rimescolare\",\"sidebar.extensions.profile\":\"Profilo\",\"sidebar.social\":\"App sociali\"}");

/***/ }),

/***/ "./lngProvider/locales/ru_RU.json":
/*!****************************************!*\
  !*** ./lngProvider/locales/ru_RU.json ***!
  \****************************************/
/*! exports provided: app.announced, sidebar.main, sidebar.dashboard, sidebar.layouts, sidebar.dashboard.crm, sidebar.components, sidebar.components.general, sidebar.general.button, sidebar.general.icon, sidebar.components.navigation, sidebar.navigation.affix, sidebar.navigation.breadcrumb, sidebar.navigation.dropdown, sidebar.navigation.menu, sidebar.navigation.pagination, sidebar.navigation.steps, sidebar.components.dataEntry, sidebar.dataEntry.autoComplete, sidebar.dataEntry.checkbox, sidebar.dataEntry.cascader, sidebar.dataEntry.datePicker, sidebar.dataEntry.form, sidebar.dataEntry.inputNumber, sidebar.dataEntry.input, sidebar.dataEntry.mention, sidebar.dataEntry.rate, sidebar.dataEntry.radio, sidebar.dataEntry.switch, sidebar.dataEntry.slider, sidebar.dataEntry.select, sidebar.dataEntry.treeSelect, sidebar.dataEntry.transfer, sidebar.dataEntry.timePicker, sidebar.dataEntry.upload, sidebar.components.dataDisplay, sidebar.dataDisplay.avatar, sidebar.dataDisplay.badge, sidebar.dataDisplay.collapse, sidebar.dataDisplay.carousel, sidebar.dataDisplay.card, sidebar.dataDisplay.calender, sidebar.dataDisplay.list, sidebar.dataDisplay.popover, sidebar.dataDisplay.tree, sidebar.dataDisplay.toolTips, sidebar.dataDisplay.timeLine, sidebar.dataDisplay.tag, sidebar.dataDisplay.tabs, sidebar.dataDisplay.table, sidebar.components.feedBack, sidebar.feedBack.alert, sidebar.feedBack.modal, sidebar.feedBack.message, sidebar.feedBack.notification, sidebar.feedBack.progress, sidebar.feedBack.popConfirm, sidebar.feedBack.spin, sidebar.components.other, sidebar.other.anchor, sidebar.other.backTop, sidebar.other.divider, sidebar.widgets, sidebar.metrics, sidebar.view, sidebar.view.basicTable, sidebar.view.dataTable, sidebar.extensions, sidebar.extensions.editior, sidebar.extensions.dragNDrop, sidebar.extensions.sweetAlert, sidebar.extensions.notification, sidebar.extensions.reactDates, sidebar.extensions.dropZone, sidebar.googleMap, sidebar.charts, sidebar.apps, sidebar.mailApp, sidebar.todoApp, sidebar.contactsApp, sidebar.chatApp, sidebar.wall, sidebar.notes, sidebar.crud, sidebar.pickers, sidebar.pickers.dateTimePickers, sidebar.pickers.colorPickers, sidebar.chart, sidebar.chart.line, sidebar.chart.bar, sidebar.chart.area, sidebar.chart.composed, sidebar.chart.scatter, sidebar.chart.pie, sidebar.chart.radial, sidebar.chart.radar, sidebar.chart.tree, sidebar.map.simple, sidebar.map.styled, sidebar.map.geoLocation, sidebar.map.mapDirection, sidebar.map.overlay, sidebar.map.kmLayer, sidebar.map.popupInfo, sidebar.map.trafficLayer, sidebar.map.streetView, sidebar.map.eventListener, sidebar.map.mapDrawing, sidebar.map.mapClustering, sidebar.modules, sidebar.calendar, sidebar.calendar.basic, sidebar.calendar.cultures, sidebar.calendar.dnd, sidebar.calendar.popup, sidebar.calendar.rendering, sidebar.calendar.selectable, sidebar.calendar.timeslots, sidebar.mail.title, sidebar.mail.compose, sidebar.mail.mailbox, sidebar.mail.filters, sidebar.mail.labels, sidebar.eCommerce, sidebar.eCommerce.productList, sidebar.eCommerce.productGrid, sidebar.extraComponents, sidebar.inBuiltApp, sidebar.extraElements.callouts, sidebar.extraElements.testimonials, sidebar.timeLine, sidebar.timeLine.default, sidebar.timeLine.defaultwithIcons, sidebar.timeLine.leftAligned, sidebar.extraElements.pricingTable, sidebar.customViews, sidebar.listType, sidebar.listType.extras, sidebar.listType.plainListView, sidebar.listType.withDivider, sidebar.listType.cardListView, sidebar.extraPages.404, sidebar.extraPages.500, sidebar.extraPages, app.userAuth, app.userAuth.login, app.userAuth.signIn, app.userAuth.send, app.userAuth.bySigning, app.userAuth.or, app.userAuth.forgotPassword, app.userAuth.forgot, app.userAuth.signUp, app.userAuth.getAccount, app.userAuth.resetPassword, app.userAuth.reset, app.userAuth.lockScreen, app.userAuth.unLock, appModule.enterPasswordUnlock, appModule.enterPasswordReset, appModule.loginSuccessfully, appModule.password, appModule.email, appModule.name, appModule.phone, appModule.designation, appModule.regsiter, appModule.regsiterNow, appModule.hvAccount, appModule.createAccount, appModule.termAndCondition, appModule.iAccept, todo, todo.addTask, todo.all, todo.filters, todo.labels, chat.selectUserChat, chat.selectContactChat, chat.chatUser, chat.contacts, chat.searchStartNewChat, chat.typeMessage, chat.status, contact.saveContact, contact.addContact, contact.searchContact, mail.mailbox, mail.compose, mail.filters, mail.labels, mail.title, eCommerce.buyNow, eCommerce.addToCart, eCommerce.readMore, callouts.viewRange, callouts.basic, extraElements.callout, testimonials.basic, testimonials.classic, testimonials.standard, extraElements.testimonials, button.modify, button.delete, pricingTable.basic, pricingTable.circle, pricingTable.classic, pricingTable.dark, pricingTable.personal, pricingTable.easyTranslation, pricingTable.awesomeGoogleFonts, pricingTable.hotelBookingSystem, pricingTable.emailComposeInterface, pricingTable.locationFinderApp, pricingTable.buyNow, pricingTable.business, pricingTable.professional, button.yes, button.no, extraPages.404Msg, extraPages.500Msg, extraPages.goHome, extension.sweetAlerts, sweetAlerts.basic, sweetAlerts.description, sweetAlerts.success, sweetAlerts.warning, sweetAlerts.custom, sweetAlerts.htmlTag, sweetAlerts.prompt, sweetAlerts.itsBlue, sweetAlerts.passwordPrompt, sweetAlerts.customStyle, sweetAlerts.itPretty, sweetAlerts.btnClicked, sweetAlerts.youWillFind, sweetAlerts.youWillNotAble, sweetAlerts.hereIsaMessage, sweetAlerts.goodJob, sweetAlerts.yesDeleteIt, sweetAlerts.areYouSure, sweetAlerts.doYouLikeThumb, sweetAlerts.anInput, sweetAlerts.writeSomethingInteresting, sweetAlerts.writeSomething, sweetAlerts.youMustEnterPassword, sweetAlerts.enterPassword, extension.notification, notification.infoMsg, notification.successMessage, notification.warningMessage, notification.closeAfter3000ms, notification.errorMessage, notification.titleHere, notification.clickMe, notification.info, notification.success, notification.warning, notification.error, sidebar.editors, sidebar.editors.CKEditor, sidebar.editors.WYSISWYGEditor, picker.color.alpha, picker.color.hue, picker.color.circle, picker.color.compact, picker.color.block, picker.color.chrome, picker.color.github, picker.color.twitter, picker.color.withRedux, picker.color.sketch, picker.color.material, picker.color.slider, picker.color.basic, picker.color.basicToggle, picker.color.custom, picker.color.customPointer, picker.color.photoshop, picker.color.swatches, picker.color.basicPositioning, sidebar.documents, sidebar.documents.changelog, sidebar.documents.installation, sidebar.dashboard.listing, sidebar.dashboard.crypto, sidebar.map, sidebar.algolia, sidebar.firebase.crud, sidebar.components.rechart, sidebar.components.amchart, sidebar.google.map, sidebar.ammap, sidebar.map.animations.lines, sidebar.map.curved.lines, sidebar.map.zooming.countries, sidebar.map.patterns, sidebar.map.capitals.map, sidebar.map.markers, sidebar.map.flight.routes, sidebar.map.choropleth, sidebar.map.grouped.countries, sidebar.map.bubbles, sidebar.map.drill.down, sidebar.map.multiple.areas, sidebar.map.weather, sidebar.extensions.shuffle, sidebar.extensions.profile, sidebar.social, sidebar.ifi, sidebar.ifis, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"app.announced\":\"A new version will be released on December 25th. Stay tuned!\",\"sidebar.main\":\"Главный\",\"sidebar.dashboard\":\"Дашборд\",\"sidebar.layouts\":\"Макеты\",\"sidebar.dashboard.crm\":\"Crm\",\"sidebar.components\":\"Компоненты\",\"sidebar.components.general\":\"Общее\",\"sidebar.general.button\":\"Кнопка\",\"sidebar.general.icon\":\"Значок\",\"sidebar.components.navigation\":\"Навигация\",\"sidebar.navigation.affix\":\"Аффикс\",\"sidebar.navigation.breadcrumb\":\"Breadcrumb\",\"sidebar.navigation.dropdown\":\"Dropdown\",\"sidebar.navigation.menu\":\"Меню\",\"sidebar.navigation.pagination\":\"Нумерация страниц\",\"sidebar.navigation.steps\":\"Действия\",\"sidebar.components.dataEntry\":\"Ввод данных\",\"sidebar.dataEntry.autoComplete\":\"Автозаполнение\",\"sidebar.dataEntry.checkbox\":\"Checkbox\",\"sidebar.dataEntry.cascader\":\"Cascader\",\"sidebar.dataEntry.datePicker\":\"Datepicker\",\"sidebar.dataEntry.form\":\"Form\",\"sidebar.dataEntry.inputNumber\":\"InputNumber\",\"sidebar.dataEntry.input\":\"Input\",\"sidebar.dataEntry.mention\":\"Mention\",\"sidebar.dataEntry.rate\":\"Rate\",\"sidebar.dataEntry.radio\":\"Radio\",\"sidebar.dataEntry.switch\":\"Switch\",\"sidebar.dataEntry.slider\":\"Slider\",\"sidebar.dataEntry.select\":\"Select\",\"sidebar.dataEntry.treeSelect\":\"TreeSelect\",\"sidebar.dataEntry.transfer\":\"Transfer\",\"sidebar.dataEntry.timePicker\":\"Time Picker\",\"sidebar.dataEntry.upload\":\"Загрузить\",\"sidebar.components.dataDisplay\":\"Отображение данных\",\"sidebar.dataDisplay.avatar\":\"Аватар\",\"sidebar.dataDisplay.badge\":\"Badge\",\"sidebar.dataDisplay.collapse\":\"Collapse\",\"sidebar.dataDisplay.carousel\":\"Carousel\",\"sidebar.dataDisplay.card\":\"Card\",\"sidebar.dataDisplay.calender\":\"Calender\",\"sidebar.dataDisplay.list\":\"List\",\"sidebar.dataDisplay.popover\":\"Popover\",\"sidebar.dataDisplay.tree\":\"Tree\",\"sidebar.dataDisplay.toolTips\":\"Tooltips\",\"sidebar.dataDisplay.timeLine\":\"Timeline\",\"sidebar.dataDisplay.tag\":\"Tag\",\"sidebar.dataDisplay.tabs\":\"Tabs\",\"sidebar.dataDisplay.table\":\"Таблица\",\"sidebar.components.feedBack\":\"Обратная связь\",\"sidebar.feedBack.alert\":\"Предупреждение\",\"sidebar.feedBack.modal\":\"Модал\",\"sidebar.feedBack.message\":\"Сообщение\",\"sidebar.feedBack.notification\":\"Уведомление\",\"sidebar.feedBack.progress\":\"Прогресс\",\"sidebar.feedBack.popConfirm\":\"PopConfirm\",\"sidebar.feedBack.spin\":\"Spin\",\"sidebar.components.other\":\"Другой\",\"sidebar.other.anchor\":\"Anchor\",\"sidebar.other.backTop\":\"BackTop\",\"sidebar.other.divider\":\"Divider\",\"sidebar.widgets\":\"Виджеты\",\"sidebar.metrics\":\"Метрика\",\"sidebar.view\":\"Посмотреть\",\"sidebar.view.basicTable\":\"Базовая таблица\",\"sidebar.view.dataTable\":\"Таблица данных\",\"sidebar.extensions\":\"Расширения\",\"sidebar.extensions.editior\":\"Редактор\",\"sidebar.extensions.dragNDrop\":\"Перетаскивания\",\"sidebar.extensions.sweetAlert\":\"Sweet Alert\",\"sidebar.extensions.notification\":\"Уведомление\",\"sidebar.extensions.reactDates\":\"React Dates\",\"sidebar.extensions.dropZone\":\"Drop Zone\",\"sidebar.googleMap\":\"Google Карта\",\"sidebar.charts\":\"Графики\",\"sidebar.apps\":\"Программы\",\"sidebar.mailApp\":\"Приложение Mail\",\"sidebar.todoApp\":\"Приложение Todo\",\"sidebar.contactsApp\":\"Приложение Контакты\",\"sidebar.chatApp\":\"Приложение Chat\",\"sidebar.wall\":\"Приложение Wall\",\"sidebar.notes\":\"Примечание\",\"sidebar.crud\":\"Firebase CRUD\",\"sidebar.pickers\":\"Pickers\",\"sidebar.pickers.dateTimePickers\":\"Date & Time Pickers\",\"sidebar.pickers.colorPickers\":\"Color Pickers\",\"sidebar.chart\":\"Графики\",\"sidebar.chart.line\":\"Line Chart\",\"sidebar.chart.bar\":\"Bar Chart\",\"sidebar.chart.area\":\"Area Chart\",\"sidebar.chart.composed\":\"Composed Chart\",\"sidebar.chart.scatter\":\"Scatter Chart\",\"sidebar.chart.pie\":\"Pie Chart\",\"sidebar.chart.radial\":\"Radial Chart\",\"sidebar.chart.radar\":\"Radar Chart\",\"sidebar.chart.tree\":\"Tree Chart\",\"sidebar.map.simple\":\"Simple Map\",\"sidebar.map.styled\":\"Styled Map\",\"sidebar.map.geoLocation\":\"Geo Location\",\"sidebar.map.mapDirection\":\"Map Direction\",\"sidebar.map.overlay\":\"Map Overlay\",\"sidebar.map.kmLayer\":\"Map Km Layer\",\"sidebar.map.popupInfo\":\"Map Popup Info\",\"sidebar.map.trafficLayer\":\"Map Traffic Layer\",\"sidebar.map.streetView\":\"Street View\",\"sidebar.map.eventListener\":\"Event Listener\",\"sidebar.map.mapDrawing\":\"Map Drawing\",\"sidebar.map.mapClustering\":\"Map Clustering\",\"sidebar.modules\":\"Modules\",\"sidebar.calendar\":\"Calendar\",\"sidebar.calendar.basic\":\"Основной\",\"sidebar.calendar.cultures\":\"Cultures\",\"sidebar.calendar.dnd\":\"Dnd\",\"sidebar.calendar.popup\":\"Popup\",\"sidebar.calendar.rendering\":\"Rendering\",\"sidebar.calendar.selectable\":\"Selectable\",\"sidebar.calendar.timeslots\":\"Timeslots\",\"sidebar.mail.title\":\"Mail\",\"sidebar.mail.compose\":\"COMPOSE\",\"sidebar.mail.mailbox\":\"Mailbox\",\"sidebar.mail.filters\":\"Фильтры\",\"sidebar.mail.labels\":\"Labels\",\"sidebar.eCommerce\":\"eCommerce\",\"sidebar.eCommerce.productList\":\"Product List\",\"sidebar.eCommerce.productGrid\":\"Product Grid\",\"sidebar.extraComponents\":\"Дополнительные Компоненты\",\"sidebar.inBuiltApp\":\"Встроенные Приложения\",\"sidebar.extraElements.callouts\":\"Callout\",\"sidebar.extraElements.testimonials\":\"Отзывы\",\"sidebar.timeLine\":\"Time Line\",\"sidebar.timeLine.default\":\"Default\",\"sidebar.timeLine.defaultwithIcons\":\"Default with Icons\",\"sidebar.timeLine.leftAligned\":\"Left Aligned\",\"sidebar.extraElements.pricingTable\":\"Pricing Table\",\"sidebar.customViews\":\"Custom Views\",\"sidebar.listType\":\"List Type\",\"sidebar.listType.extras\":\"Extras\",\"sidebar.listType.plainListView\":\"Plain List View\",\"sidebar.listType.withDivider\":\"Plain List with Divider\",\"sidebar.listType.cardListView\":\"Cards List View\",\"sidebar.extraPages.404\":\"404 Error Page\",\"sidebar.extraPages.500\":\"500 Error Page\",\"sidebar.extraPages\":\"Extra Pages\",\"app.userAuth\":\"Аутентификация Пользователя\",\"app.userAuth.login\":\"Авторизоваться\",\"app.userAuth.signIn\":\"Войти в систему\",\"app.userAuth.send\":\"ОТПРАВИТЬ\",\"app.userAuth.bySigning\":\"Зарегистрировавшись, вы можете воспользоваться всеми функциями наших услуг.\",\"app.userAuth.or\":\"или\",\"app.userAuth.forgotPassword\":\"Забыли пароль\",\"app.userAuth.forgot\":\"Не беспокойся Восстановить пароль очень просто. Просто сообщите нам адрес электронной почты, который вы зарегистрировали\",\"app.userAuth.signUp\":\"Зарегистрироваться\",\"app.userAuth.getAccount\":\"Получить аккаунт !!!\",\"app.userAuth.resetPassword\":\"Сброс пароля\",\"app.userAuth.reset\":\"СБРОС\",\"app.userAuth.lockScreen\":\"Lock Screen\",\"app.userAuth.unLock\":\"UNLOCK\",\"appModule.enterPasswordUnlock\":\"Enter your password to unlock the screen!\",\"appModule.enterPasswordReset\":\"Введите новый пароль для вашей учетной записи\",\"appModule.loginSuccessfully\":\"Вход Успешно\",\"appModule.password\":\"Пароль\",\"appModule.email\":\"Эл. адрес\",\"appModule.name\":\"Имя\",\"appModule.phone\":\"Телефон\",\"appModule.designation\":\"Designation\",\"appModule.regsiter\":\"Регистрация\",\"appModule.regsiterNow\":\"Регистрация №\",\"appModule.hvAccount\":\"Уже зарегистрированы\",\"appModule.createAccount\":\"Создать учетную запись\",\"appModule.termAndCondition\":\"Term & Condition\",\"appModule.iAccept\":\"зарегистрировавшись, я принимаю\",\"todo\":\"To-Do\",\"todo.addTask\":\"Добавить Задачу\",\"todo.all\":\"Все\",\"todo.filters\":\"Фильтры\",\"todo.labels\":\"Labels\",\"chat.selectUserChat\":\"Select User to start Chat\",\"chat.selectContactChat\":\"Select contact to start Chat\",\"chat.chatUser\":\"Чаты\",\"chat.contacts\":\"Контакты\",\"chat.searchStartNewChat\":\"Search or start new chat\",\"chat.typeMessage\":\"Type and hit enter to send message\",\"chat.status\":\"it's a status....not your diary...\",\"contact.saveContact\":\"Сохранить Контакт\",\"contact.addContact\":\"Добавить Контакт\",\"contact.searchContact\":\"Search contact\",\"mail.mailbox\":\"Mailbox\",\"mail.compose\":\"COMPOSE\",\"mail.filters\":\"Фильтры\",\"mail.labels\":\"Labels\",\"mail.title\":\"New Message\",\"eCommerce.buyNow\":\"Buy Now\",\"eCommerce.addToCart\":\"Добавить в корзину\",\"eCommerce.readMore\":\"Читать далее\",\"callouts.viewRange\":\"VIEW RANGE\",\"callouts.basic\":\"Основной\",\"extraElements.callout\":\"Extra Element\",\"testimonials.basic\":\"Основной\",\"testimonials.classic\":\"Классический\",\"testimonials.standard\":\"Стандарт\",\"extraElements.testimonials\":\"Отзывы\",\"button.modify\":\"Изменить\",\"button.delete\":\"Удалить\",\"pricingTable.basic\":\"Основной\",\"pricingTable.circle\":\"Круг\",\"pricingTable.classic\":\"Классический\",\"pricingTable.dark\":\"Темный\",\"pricingTable.personal\":\"ПЕРСОНАЛЬНЫЙ\",\"pricingTable.easyTranslation\":\"Easy Translation\",\"pricingTable.awesomeGoogleFonts\":\"Awesome Google Fonts\",\"pricingTable.hotelBookingSystem\":\"Hotel Booking System\",\"pricingTable.emailComposeInterface\":\"Email Compose Interface\",\"pricingTable.locationFinderApp\":\"Location Finder App\",\"pricingTable.buyNow\":\"купить сейчас\",\"pricingTable.business\":\"БИЗНЕС\",\"pricingTable.professional\":\"ПРОФЕССИОНАЛ\",\"button.yes\":\"Да\",\"button.no\":\"Нет\",\"extraPages.404Msg\":\"К сожалению, произошла ошибка. Страница не найдена!\",\"extraPages.500Msg\":\"Извините, сервер работает неправильно\",\"extraPages.goHome\":\"Перейти на главную\",\"extension.sweetAlerts\":\"Sweet Alerts\",\"sweetAlerts.basic\":\"Основной\",\"sweetAlerts.description\":\"С описанием\",\"sweetAlerts.success\":\"Success\",\"sweetAlerts.warning\":\"Warning\",\"sweetAlerts.custom\":\"Custom\",\"sweetAlerts.htmlTag\":\"Html Tag\",\"sweetAlerts.prompt\":\"Prompt\",\"sweetAlerts.itsBlue\":\"It's Green!\",\"sweetAlerts.passwordPrompt\":\"Password Prompt\",\"sweetAlerts.customStyle\":\"Custom Style\",\"sweetAlerts.itPretty\":\"It's pretty, isn't it?\",\"sweetAlerts.btnClicked\":\"You clicked the button!\",\"sweetAlerts.youWillFind\":\"You will find they are up!\",\"sweetAlerts.youWillNotAble\":\"You will not be able to recover this imaginary file!\",\"sweetAlerts.hereIsaMessage\":\"Here's a message!\",\"sweetAlerts.goodJob\":\"Good job!\",\"sweetAlerts.yesDeleteIt\":\"Да, delete it!\",\"sweetAlerts.areYouSure\":\"Are you sure?\",\"sweetAlerts.doYouLikeThumb\":\"Do you like thumbs?\",\"sweetAlerts.anInput\":\"An input!\",\"sweetAlerts.writeSomethingInteresting\":\"Write something interesting:\",\"sweetAlerts.writeSomething\":\"Write something\",\"sweetAlerts.youMustEnterPassword\":\"You must enter your password!\",\"sweetAlerts.enterPassword\":\"Enter Password\",\"extension.notification\":\"Notification\",\"notification.infoMsg\":\"Инфо сообщение\",\"notification.successMessage\":\"Success message\",\"notification.warningMessage\":\"Warning message\",\"notification.closeAfter3000ms\":\"Close after 3000ms\",\"notification.errorMessage\":\"Error message\",\"notification.titleHere\":\"Title here\",\"notification.clickMe\":\"Click me!\",\"notification.info\":\"Info\",\"notification.success\":\"Success\",\"notification.warning\":\"Warning\",\"notification.error\":\"Error\",\"sidebar.editors\":\"Editors\",\"sidebar.editors.CKEditor\":\"CKEditor\",\"sidebar.editors.WYSISWYGEditor\":\"WYSISWYG Editor\",\"picker.color.alpha\":\"Alpha Pickers\",\"picker.color.hue\":\"Hue Pickers\",\"picker.color.circle\":\"Круг Pickers\",\"picker.color.compact\":\"Compact Pickers\",\"picker.color.block\":\"Темный Pickers\",\"picker.color.chrome\":\"ПЕРСОНАЛЬНЫЙ Pickers\",\"picker.color.github\":\"Github Pickers\",\"picker.color.twitter\":\"Twitter Pickers\",\"picker.color.withRedux\":\"With Redux\",\"picker.color.sketch\":\"Sketch Pickers\",\"picker.color.material\":\"Material Pickers\",\"picker.color.slider\":\"купить сейчасkers\",\"picker.color.basic\":\"Основной Pickers\",\"picker.color.basicToggle\":\"Основной Toggle\",\"picker.color.custom\":\"Custom Pickers\",\"picker.color.customPointer\":\"Custom Pointer\",\"picker.color.photoshop\":\"Photoshop Pickers\",\"picker.color.swatches\":\"Swatches Pickers\",\"picker.color.basicPositioning\":\"Основной Positioning\",\"sidebar.documents\":\"Documents\",\"sidebar.documents.changelog\":\"Changelog\",\"sidebar.documents.installation\":\"Installation\",\"sidebar.dashboard.listing\":\"Listing\",\"sidebar.dashboard.crypto\":\"Crypto\",\"sidebar.map\":\"Карта\",\"sidebar.algolia\":\"Algolia\",\"sidebar.firebase.crud\":\"Firebase Curd\",\"sidebar.components.rechart\":\"ReChart\",\"sidebar.components.amchart\":\"AmChart\",\"sidebar.google.map\":\"Google Карта\",\"sidebar.ammap\":\"AmMap\",\"sidebar.map.animations.lines\":\"With Animations\",\"sidebar.map.curved.lines\":\"With Curved Lines\",\"sidebar.map.zooming.countries\":\"Zooming Countries\",\"sidebar.map.patterns\":\"Map With Patterns\",\"sidebar.map.capitals.map\":\"Capitals Map\",\"sidebar.map.markers\":\"Map Markers\",\"sidebar.map.flight.routes\":\"Flight Routes\",\"sidebar.map.choropleth\":\"Heat Map\",\"sidebar.map.grouped.countries\":\"Grouped Countries\",\"sidebar.map.bubbles\":\"Map with Bubbles\",\"sidebar.map.drill.down\":\"Drill Down Map\",\"sidebar.map.multiple.areas\":\"Multiple Areas\",\"sidebar.map.weather\":\"Weather map\",\"sidebar.extensions.shuffle\":\"Shuffle\",\"sidebar.extensions.profile\":\"Профиль\",\"sidebar.social\":\"Социальные приложения\",\"sidebar.ifi\":\"Международный финансовый институт\",\"sidebar.ifis\":\"Международные финансовые институты\"}");

/***/ }),

/***/ "./lngProvider/locales/zh-Hans.json":
/*!******************************************!*\
  !*** ./lngProvider/locales/zh-Hans.json ***!
  \******************************************/
/*! exports provided: app.announced, sidebar.main, sidebar.dashboard, sidebar.dashboard.crm, sidebar.layouts, sidebar.components, sidebar.components.general, sidebar.general.button, sidebar.general.icon, sidebar.components.navigation, sidebar.navigation.affix, sidebar.navigation.breadcrumb, sidebar.navigation.dropdown, sidebar.navigation.menu, sidebar.navigation.pagination, sidebar.navigation.steps, sidebar.components.dataEntry, sidebar.dataEntry.autoComplete, sidebar.dataEntry.checkbox, sidebar.dataEntry.cascader, sidebar.dataEntry.datePicker, sidebar.dataEntry.form, sidebar.dataEntry.inputNumber, sidebar.dataEntry.input, sidebar.dataEntry.mention, sidebar.dataEntry.rate, sidebar.dataEntry.radio, sidebar.dataEntry.switch, sidebar.dataEntry.slider, sidebar.dataEntry.select, sidebar.dataEntry.treeSelect, sidebar.dataEntry.transfer, sidebar.dataEntry.timePicker, sidebar.dataEntry.upload, sidebar.components.dataDisplay, sidebar.dataDisplay.avatar, sidebar.dataDisplay.badge, sidebar.dataDisplay.collapse, sidebar.dataDisplay.carousel, sidebar.dataDisplay.card, sidebar.dataDisplay.calender, sidebar.dataDisplay.list, sidebar.dataDisplay.popover, sidebar.dataDisplay.tree, sidebar.dataDisplay.toolTips, sidebar.dataDisplay.timeLine, sidebar.dataDisplay.tag, sidebar.dataDisplay.tabs, sidebar.dataDisplay.table, sidebar.components.feedBack, sidebar.feedBack.alert, sidebar.feedBack.modal, sidebar.feedBack.message, sidebar.feedBack.notification, sidebar.feedBack.progress, sidebar.feedBack.popConfirm, sidebar.feedBack.spin, sidebar.components.other, sidebar.other.anchor, sidebar.other.backTop, sidebar.other.divider, sidebar.widgets, sidebar.metrics, sidebar.view, sidebar.view.basicTable, sidebar.view.dataTable, sidebar.extensions, sidebar.extensions.editior, sidebar.extensions.dragNDrop, sidebar.extensions.sweetAlert, sidebar.extensions.notification, sidebar.extensions.reactDates, sidebar.extensions.dropZone, sidebar.googleMap, sidebar.charts, sidebar.apps, sidebar.mailApp, sidebar.todoApp, sidebar.contactsApp, sidebar.chatApp, sidebar.notes, sidebar.pickers, sidebar.crud, sidebar.pickers.dateTimePickers, sidebar.pickers.colorPickers, sidebar.chart, sidebar.chart.line, sidebar.chart.bar, sidebar.chart.area, sidebar.chart.composed, sidebar.chart.scatter, sidebar.chart.pie, sidebar.chart.radial, sidebar.chart.radar, sidebar.chart.tree, sidebar.map, sidebar.map.simple, sidebar.map.styled, sidebar.map.geoLocation, sidebar.map.mapDirection, sidebar.map.overlay, sidebar.map.kmLayer, sidebar.map.popupInfo, sidebar.map.trafficLayer, sidebar.map.streetView, sidebar.map.eventListener, sidebar.map.mapDrawing, sidebar.map.mapClustering, sidebar.modules, sidebar.calendar, sidebar.calendar.basic, sidebar.calendar.cultures, sidebar.calendar.dnd, sidebar.calendar.popup, sidebar.calendar.rendering, sidebar.calendar.selectable, sidebar.calendar.timeslots, sidebar.mail.title, sidebar.mail.compose, sidebar.mail.mailbox, sidebar.mail.filters, sidebar.mail.labels, sidebar.eCommerce, sidebar.eCommerce.productList, sidebar.eCommerce.productGrid, sidebar.extraComponents, sidebar.inBuiltApp, sidebar.extraElements.callouts, sidebar.extraElements.testimonials, sidebar.timeLine, sidebar.timeLine.default, sidebar.timeLine.defaultwithIcons, sidebar.timeLine.leftAligned, sidebar.extraElements.pricingTable, sidebar.customViews, sidebar.listType.extras, sidebar.listType, sidebar.listType.plainListView, sidebar.listType.withDivider, sidebar.listType.cardListView, sidebar.extraPages.404, sidebar.extraPages.500, sidebar.extraPages, app.userAuth, app.userAuth.login, app.userAuth.signIn, app.userAuth.send, app.userAuth.bySigning, app.userAuth.or, app.userAuth.forgotPassword, app.userAuth.forgot, app.userAuth.signUp, app.userAuth.getAccount, app.userAuth.resetPassword, app.userAuth.reset, app.userAuth.lockScreen, app.userAuth.unLock, appModule.enterPasswordUnlock, appModule.enterPasswordReset, appModule.loginSuccessfully, appModule.password, appModule.email, appModule.name, appModule.phone, appModule.designation, appModule.regsiter, appModule.regsiterNow, appModule.hvAccount, appModule.createAccount, appModule.termAndCondition, appModule.iAccept, todo, todo.addTask, todo.all, todo.filters, todo.labels, chat.selectUserChat, chat.selectContactChat, chat.chatUser, chat.contacts, chat.searchStartNewChat, chat.typeMessage, chat.status, contact.saveContact, contact.addContact, contact.searchContact, mail.mailbox, mail.compose, mail.filters, mail.labels, mail.title, eCommerce.buyNow, eCommerce.addToCart, eCommerce.readMore, callouts.viewRange, callouts.basic, extraElements.callout, testimonials.basic, testimonials.classic, testimonials.standard, extraElements.testimonials, button.modify, button.delete, pricingTable.basic, pricingTable.circle, pricingTable.classic, pricingTable.dark, pricingTable.personal, pricingTable.easyTranslation, pricingTable.awesomeGoogleFonts, pricingTable.hotelBookingSystem, pricingTable.emailComposeInterface, pricingTable.locationFinderApp, pricingTable.buyNow, pricingTable.business, pricingTable.professional, button.yes, button.no, extraPages.404Msg, extraPages.500Msg, extraPages.goHome, extension.sweetAlerts, sweetAlerts.basic, sweetAlerts.description, sweetAlerts.success, sweetAlerts.warning, sweetAlerts.custom, sweetAlerts.htmlTag, sweetAlerts.prompt, sweetAlerts.itsBlue, sweetAlerts.passwordPrompt, sweetAlerts.customStyle, sweetAlerts.itPretty, sweetAlerts.btnClicked, sweetAlerts.youWillFind, sweetAlerts.youWillNotAble, sweetAlerts.hereIsaMessage, sweetAlerts.goodJob, sweetAlerts.yesDeleteIt, sweetAlerts.areYouSure, sweetAlerts.doYouLikeThumb, sweetAlerts.anInput, sweetAlerts.writeSomethingInteresting, sweetAlerts.writeSomething, sweetAlerts.youMustEnterPassword, sweetAlerts.enterPassword, extension.notification, notification.infoMsg, notification.successMessage, notification.warningMessage, notification.closeAfter3000ms, notification.errorMessage, notification.titleHere, notification.clickMe, notification.info, notification.success, notification.warning, notification.error, sidebar.editors, sidebar.editors.CKEditor, sidebar.editors.WYSISWYGEditor, picker.color.alpha, picker.color.hue, picker.color.circle, picker.color.compact, picker.color.block, picker.color.chrome, picker.color.github, picker.color.twitter, picker.color.withRedux, picker.color.sketch, picker.color.material, picker.color.slider, picker.color.basic, picker.color.basicToggle, picker.color.custom, picker.color.customPointer, picker.color.photoshop, picker.color.swatches, picker.color.basicPositioning, sidebar.documents, sidebar.documents.changelog, sidebar.documents.installation, sidebar.dashboard.listing, sidebar.dashboard.crypto, sidebar.algolia, sidebar.components.rechart, sidebar.components.amchart, sidebar.google.map, sidebar.ammap, sidebar.map.animations.lines, sidebar.map.curved.lines, sidebar.map.zooming.countries, sidebar.map.patterns, sidebar.map.capitals.map, sidebar.map.markers, sidebar.map.flight.routes, sidebar.map.choropleth, sidebar.map.grouped.countries, sidebar.map.bubbles, sidebar.map.drill.down, sidebar.map.multiple.areas, sidebar.map.weather, sidebar.extensions.shuffle, sidebar.extensions.profile, sidebar.social, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"app.announced\":\"新版本将于12月25日发布。 敬请关注！\",\"sidebar.main\":\"主要\",\"sidebar.dashboard\":\"仪表板\",\"sidebar.dashboard.crm\":\"Crm\",\"sidebar.layouts\":\"布局\",\"sidebar.components\":\"组件\",\"sidebar.components.general\":\"一般\",\"sidebar.general.button\":\"按键\",\"sidebar.general.icon\":\"图标\",\"sidebar.components.navigation\":\"导航\",\"sidebar.navigation.affix\":\"词缀\",\"sidebar.navigation.breadcrumb\":\"面包屑\",\"sidebar.navigation.dropdown\":\"落下\",\"sidebar.navigation.menu\":\"菜单\",\"sidebar.navigation.pagination\":\"分页\",\"sidebar.navigation.steps\":\"脚步\",\"sidebar.components.dataEntry\":\"数据输入\",\"sidebar.dataEntry.autoComplete\":\"自动完成\",\"sidebar.dataEntry.checkbox\":\"复选框\",\"sidebar.dataEntry.cascader\":\"卡斯卡德\",\"sidebar.dataEntry.datePicker\":\"日期选择器\",\"sidebar.dataEntry.form\":\"形成\",\"sidebar.dataEntry.inputNumber\":\"输入号码\",\"sidebar.dataEntry.input\":\"输入\",\"sidebar.dataEntry.mention\":\"提到\",\"sidebar.dataEntry.rate\":\"率\",\"sidebar.dataEntry.radio\":\"无线电\",\"sidebar.dataEntry.switch\":\"开关\",\"sidebar.dataEntry.slider\":\"滑块\",\"sidebar.dataEntry.select\":\"选择\",\"sidebar.dataEntry.treeSelect\":\"树选择\",\"sidebar.dataEntry.transfer\":\"转让\",\"sidebar.dataEntry.timePicker\":\"时间选择器\",\"sidebar.dataEntry.upload\":\"上传\",\"sidebar.components.dataDisplay\":\"数据显示\",\"sidebar.dataDisplay.avatar\":\"阿凡达\",\"sidebar.dataDisplay.badge\":\"徽章\",\"sidebar.dataDisplay.collapse\":\"坍方\",\"sidebar.dataDisplay.carousel\":\"圆盘传送带\",\"sidebar.dataDisplay.card\":\"卡\",\"sidebar.dataDisplay.calender\":\"日历\",\"sidebar.dataDisplay.list\":\"名单\",\"sidebar.dataDisplay.popover\":\"酥料饼\",\"sidebar.dataDisplay.tree\":\"树\",\"sidebar.dataDisplay.toolTips\":\"提示\",\"sidebar.dataDisplay.timeLine\":\"时间线\",\"sidebar.dataDisplay.tag\":\"标签\",\"sidebar.dataDisplay.tabs\":\"标签\",\"sidebar.dataDisplay.table\":\"表\",\"sidebar.components.feedBack\":\"反馈\",\"sidebar.feedBack.alert\":\"警报\",\"sidebar.feedBack.modal\":\"语气\",\"sidebar.feedBack.message\":\"信息\",\"sidebar.feedBack.notification\":\"通知\",\"sidebar.feedBack.progress\":\"进展\",\"sidebar.feedBack.popConfirm\":\"流行确认\",\"sidebar.feedBack.spin\":\"纺\",\"sidebar.components.other\":\"其他\",\"sidebar.other.anchor\":\"锚\",\"sidebar.other.backTop\":\"返回顶部\",\"sidebar.other.divider\":\"分频器\",\"sidebar.widgets\":\"小工具\",\"sidebar.metrics\":\"度量\",\"sidebar.view\":\"视图\",\"sidebar.view.basicTable\":\"基本表\",\"sidebar.view.dataTable\":\"数据表\",\"sidebar.extensions\":\"扩展\",\"sidebar.extensions.editior\":\"编辑\",\"sidebar.extensions.dragNDrop\":\"拖放\",\"sidebar.extensions.sweetAlert\":\"甜蜜警报\",\"sidebar.extensions.notification\":\"通知\",\"sidebar.extensions.reactDates\":\"反应日期\",\"sidebar.extensions.dropZone\":\"拖放区\",\"sidebar.googleMap\":\"谷歌地图\",\"sidebar.charts\":\"图表\",\"sidebar.apps\":\"应用\",\"sidebar.mailApp\":\"邮件应用\",\"sidebar.todoApp\":\"做应用程序\",\"sidebar.contactsApp\":\"联系人应用\",\"sidebar.chatApp\":\"聊天应用\",\"sidebar.notes\":\"笔记\",\"sidebar.pickers\":\"拾荒者\",\"sidebar.crud\":\"Firebase CRUD\",\"sidebar.pickers.dateTimePickers\":\"日期和时间选择器\",\"sidebar.pickers.colorPickers\":\"颜色选择器\",\"sidebar.chart\":\"图表\",\"sidebar.chart.line\":\"折线图\",\"sidebar.chart.bar\":\"条形图\",\"sidebar.chart.area\":\"面积图\",\"sidebar.chart.composed\":\"组成图表\",\"sidebar.chart.scatter\":\"散点图\",\"sidebar.chart.pie\":\"饼形图\",\"sidebar.chart.radial\":\"径向图\",\"sidebar.chart.radar\":\"雷达图\",\"sidebar.chart.tree\":\"树图\",\"sidebar.map\":\"谷歌地图\",\"sidebar.map.simple\":\"简单的地图\",\"sidebar.map.styled\":\"风格地图\",\"sidebar.map.geoLocation\":\"地理位置\",\"sidebar.map.mapDirection\":\"地图方向\",\"sidebar.map.overlay\":\"地图覆盖\",\"sidebar.map.kmLayer\":\"地图Km层\",\"sidebar.map.popupInfo\":\"地图弹出信息\",\"sidebar.map.trafficLayer\":\"映射流量层\",\"sidebar.map.streetView\":\"街景\",\"sidebar.map.eventListener\":\"事件监听器\",\"sidebar.map.mapDrawing\":\"地图绘制\",\"sidebar.map.mapClustering\":\"地图集群\",\"sidebar.modules\":\"模块\",\"sidebar.calendar\":\"日历\",\"sidebar.calendar.basic\":\"基本\",\"sidebar.calendar.cultures\":\"文化\",\"sidebar.calendar.dnd\":\"DND\",\"sidebar.calendar.popup\":\"弹出\",\"sidebar.calendar.rendering\":\"渲染\",\"sidebar.calendar.selectable\":\"可选\",\"sidebar.calendar.timeslots\":\"时隙\",\"sidebar.mail.title\":\"邮件\",\"sidebar.mail.compose\":\"撰写\",\"sidebar.mail.mailbox\":\"邮箱\",\"sidebar.mail.filters\":\"过滤器\",\"sidebar.mail.labels\":\"标签\",\"sidebar.eCommerce\":\"电子商务\",\"sidebar.eCommerce.productList\":\"产品列表\",\"sidebar.eCommerce.productGrid\":\"产品网格\",\"sidebar.extraComponents\":\"额外的组件\",\"sidebar.inBuiltApp\":\"内置应用程序\",\"sidebar.extraElements.callouts\":\"大喊\",\"sidebar.extraElements.testimonials\":\"褒奖\",\"sidebar.timeLine\":\"时间线\",\"sidebar.timeLine.default\":\"默认\",\"sidebar.timeLine.defaultwithIcons\":\"默认使用图标\",\"sidebar.timeLine.leftAligned\":\"左对齐\",\"sidebar.extraElements.pricingTable\":\"定价表\",\"sidebar.customViews\":\"自定义视图\",\"sidebar.listType.extras\":\"附加功能\",\"sidebar.listType\":\"列表类型\",\"sidebar.listType.plainListView\":\"普通列表视图\",\"sidebar.listType.withDivider\":\"带分隔线的普通列表\",\"sidebar.listType.cardListView\":\"卡列表视图\",\"sidebar.extraPages.404\":\"404错误页面\",\"sidebar.extraPages.500\":\"500错误页面\",\"sidebar.extraPages\":\"额外页面\",\"app.userAuth\":\"用户身份验证\",\"app.userAuth.login\":\"登录\",\"app.userAuth.signIn\":\"签到\",\"app.userAuth.send\":\"发送\",\"app.userAuth.bySigning\":\"通过注册，您可以利用我们服务的全部功能。\",\"app.userAuth.or\":\"要么\",\"app.userAuth.forgotPassword\":\"忘记密码\",\"app.userAuth.forgot\":\"别担心。 恢复密码很简单。只需告诉我们您已经注册过的超大型电子邮件\",\"app.userAuth.signUp\":\"注册\",\"app.userAuth.getAccount\":\"获得一个帐户！\",\"app.userAuth.resetPassword\":\"重设密码\",\"app.userAuth.reset\":\"重启\",\"app.userAuth.lockScreen\":\"锁屏\",\"app.userAuth.unLock\":\"开锁\",\"appModule.enterPasswordUnlock\":\"输入您的密码解锁屏幕！\",\"appModule.enterPasswordReset\":\"为您的帐户输入新密码\",\"appModule.loginSuccessfully\":\"成功登录\",\"appModule.password\":\"密码\",\"appModule.email\":\"电子邮件\",\"appModule.name\":\"名称\",\"appModule.phone\":\"电话\",\"appModule.designation\":\"指定\",\"appModule.regsiter\":\"寄存器\",\"appModule.regsiterNow\":\"注册编号\",\"appModule.hvAccount\":\"有一个账户\",\"appModule.createAccount\":\"创建一个帐户\",\"appModule.termAndCondition\":\"期限和条件\",\"appModule.iAccept\":\"通过注册，我接受\",\"todo\":\"去做\",\"todo.addTask\":\"添加任务\",\"todo.all\":\"所有\",\"todo.filters\":\"过滤器\",\"todo.labels\":\"标签\",\"chat.selectUserChat\":\"选择用户开始聊天\",\"chat.selectContactChat\":\"选择联系人即可开始聊天\",\"chat.chatUser\":\"聊天\",\"chat.contacts\":\"往来\",\"chat.searchStartNewChat\":\"搜索或开始新的聊天\",\"chat.typeMessage\":\"键入并按回车键发送消息\",\"chat.status\":\"这是一个地位....不是你的日记...\",\"contact.saveContact\":\"保存联系人\",\"contact.addContact\":\"增加联系人\",\"contact.searchContact\":\"搜索联系人\",\"mail.mailbox\":\"邮箱\",\"mail.compose\":\"撰写\",\"mail.filters\":\"过滤器\",\"mail.labels\":\"标签\",\"mail.title\":\"新消息\",\"eCommerce.buyNow\":\"立即购买\",\"eCommerce.addToCart\":\"添加到购物车\",\"eCommerce.readMore\":\"阅读更多\",\"callouts.viewRange\":\"查看范围\",\"callouts.basic\":\"基本\",\"extraElements.callout\":\"额外元素\",\"testimonials.basic\":\"基本\",\"testimonials.classic\":\"经典\",\"testimonials.standard\":\"标准\",\"extraElements.testimonials\":\"褒奖\",\"button.modify\":\"修改\",\"button.delete\":\"删除\",\"pricingTable.basic\":\"基本\",\"pricingTable.circle\":\"圈\",\"pricingTable.classic\":\"经典\",\"pricingTable.dark\":\"黑暗\",\"pricingTable.personal\":\"个人\",\"pricingTable.easyTranslation\":\"易于翻译\",\"pricingTable.awesomeGoogleFonts\":\"令人敬畏的Google字体\",\"pricingTable.hotelBookingSystem\":\"酒店预订系统\",\"pricingTable.emailComposeInterface\":\"电子邮件撰写界面\",\"pricingTable.locationFinderApp\":\"位置搜索器应用程序\",\"pricingTable.buyNow\":\"立即购买\",\"pricingTable.business\":\"商业\",\"pricingTable.professional\":\"专业的\",\"button.yes\":\"是\",\"button.no\":\"没有\",\"extraPages.404Msg\":\"糟糕，发生错误。 找不到网页！\",\"extraPages.500Msg\":\"对不起，服务器出错了\",\"extraPages.goHome\":\"回家\",\"extension.sweetAlerts\":\"甜蜜警报\",\"sweetAlerts.basic\":\"基本\",\"sweetAlerts.description\":\"带说明\",\"sweetAlerts.success\":\"成功\",\"sweetAlerts.warning\":\"警告\",\"sweetAlerts.custom\":\"习惯\",\"sweetAlerts.htmlTag\":\"HTML标记\",\"sweetAlerts.prompt\":\"提示\",\"sweetAlerts.itsBlue\":\"它是蓝色的！\",\"sweetAlerts.passwordPrompt\":\"密码提示\",\"sweetAlerts.customStyle\":\"自定义样式\",\"sweetAlerts.itPretty\":\"真漂亮，不是吗？\",\"sweetAlerts.btnClicked\":\"你点击了按钮！\",\"sweetAlerts.youWillFind\":\"你会发现他们已经起来了！\",\"sweetAlerts.youWillNotAble\":\"你将无法恢复这个虚构的文件！\",\"sweetAlerts.hereIsaMessage\":\"这是一条消息！\",\"sweetAlerts.goodJob\":\"做得好！\",\"sweetAlerts.yesDeleteIt\":\"是的，删除它！\",\"sweetAlerts.areYouSure\":\"你确定？\",\"sweetAlerts.doYouLikeThumb\":\"你喜欢大拇指吗？\",\"sweetAlerts.anInput\":\"一个输入！\",\"sweetAlerts.writeSomethingInteresting\":\"写点有趣的东西：\",\"sweetAlerts.writeSomething\":\"写一些东西\",\"sweetAlerts.youMustEnterPassword\":\"你必须输入你的密码！\",\"sweetAlerts.enterPassword\":\"输入密码\",\"extension.notification\":\"通知\",\"notification.infoMsg\":\"信息消息\",\"notification.successMessage\":\"成功消息\",\"notification.warningMessage\":\"警告信息\",\"notification.closeAfter3000ms\":\"3000ms后关闭\",\"notification.errorMessage\":\"错误信息\",\"notification.titleHere\":\"标题在这里\",\"notification.clickMe\":\"点击我！\",\"notification.info\":\"信息\",\"notification.success\":\"成功\",\"notification.warning\":\"警告\",\"notification.error\":\"错误\",\"sidebar.editors\":\"编者\",\"sidebar.editors.CKEditor\":\"CK编辑器的\",\"sidebar.editors.WYSISWYGEditor\":\"所见即所得的编辑器\",\"picker.color.alpha\":\"阿尔法挑选者\",\"picker.color.hue\":\"色相选择器\",\"picker.color.circle\":\"圈选手\",\"picker.color.compact\":\"紧凑型拾取器\",\"picker.color.block\":\"块挑选器\",\"picker.color.chrome\":\"铬挑选器\",\"picker.color.github\":\"Github捡拾器\",\"picker.color.twitter\":\"推特挑选者\",\"picker.color.withRedux\":\"与Redux\",\"picker.color.sketch\":\"素描选择器\",\"picker.color.material\":\"材料捡拾器\",\"picker.color.slider\":\"滑块挑选器\",\"picker.color.basic\":\"基本拾取器\",\"picker.color.basicToggle\":\"基本切换\",\"picker.color.custom\":\"自定义选取器\",\"picker.color.customPointer\":\"自定义指针\",\"picker.color.photoshop\":\"照片店采摘\",\"picker.color.swatches\":\"色板拾取器\",\"picker.color.basicPositioning\":\"基本定位\",\"sidebar.documents\":\"文件\",\"sidebar.documents.changelog\":\"更新日志\",\"sidebar.documents.installation\":\"安装\",\"sidebar.dashboard.listing\":\"清單\",\"sidebar.dashboard.crypto\":\"加密\",\"sidebar.algolia\":\"Algolia\",\"sidebar.components.rechart\":\"ReChart\",\"sidebar.components.amchart\":\"AmChart\",\"sidebar.google.map\":\"谷歌地圖\",\"sidebar.ammap\":\"AmMap\",\"sidebar.map.animations.lines\":\"隨著動畫\",\"sidebar.map.curved.lines\":\"有曲線\",\"sidebar.map.zooming.countries\":\"縮放國家\",\"sidebar.map.patterns\":\"地圖與模式\",\"sidebar.map.capitals.map\":\"首都地圖\",\"sidebar.map.markers\":\"地圖標記\",\"sidebar.map.flight.routes\":\"航線\",\"sidebar.map.choropleth\":\"熱圖\",\"sidebar.map.grouped.countries\":\"分組國家\",\"sidebar.map.bubbles\":\"映射與泡沫\",\"sidebar.map.drill.down\":\"深入研究地圖\",\"sidebar.map.multiple.areas\":\"多個領域\",\"sidebar.map.weather\":\"天氣圖\",\"sidebar.extensions.shuffle\":\"拖曳\",\"sidebar.extensions.profile\":\"輪廓\",\"sidebar.social\":\"社交應用\"}");

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _router2 = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");
/**
* Detects whether a given url is from the same origin as the current page (browser only).
*/


function isLocal(url) {
  const locationOrigin = (0, _utils.getLocationOrigin)();
  const resolved = new URL(url, locationOrigin);
  return resolved.origin === locationOrigin;
}

let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

function prefetch(router, href, as, options) {
  if (true) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  }); // Join on an invalid URI character

  prefetched[href + '%' + as] = true;
}

function linkClicked(e, router, href, as, replace, shallow, scroll) {
  const {
    nodeName,
    target
  } = e.currentTarget;

  if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
    // ignore click for new tab / new window behavior
    return;
  }

  if (!isLocal(href)) {
    // ignore click if it's outside our scope (e.g. https://google.com)
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (true) {
    // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;

  const [childElm, setChildElm] = _react.default.useState();

  const router = (0, _router.useRouter)();

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const resolvedHref = (0, _router2.resolveHref)(router.pathname, props.href);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router2.resolveHref)(router.pathname, props.as) : resolvedHref
    };
  }, [router.pathname, props.href, props.as]);

  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];

      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);

  let {
    children,
    replace,
    shallow,
    scroll
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childProps = {
    ref: el => {
      if (el) setChildElm(el);

      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll);
      }
    }
  };

  if (p) {
    childProps.onMouseEnter = e => {
      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }

      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router2.addBasePath)(as);
  } // Add the ending slash to the paths. So, we can serve the
  // "<page>/index.html" directly.


  if (false) {}

  return _react.default.cloneElement(child, childProps);
}

if (true) {
  const warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  const PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  const exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      const value = props[propName];

      if (typeof value === 'string') {
        warn(`Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>`);
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error(`Error when running the Router event: ${eventField}`); // tslint:disable-next-line:no-console

          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

var _searchParamsToUrlQuery = __webpack_require__(/*! ./utils/search-params-to-url-query */ "./node_modules/next/dist/next-server/lib/router/utils/search-params-to-url-query.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addBasePath(path) {
  return basePath ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(basePath) : basePath + path : path;
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);
  const finalUrl = new URL(urlAsString, base);
  finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname); // if the origin didn't change, it means we received a relative href

  return finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

function tryParseRelativeUrl(url) {
  try {
    return (0, _parseRelativeUrl.parseRelativeUrl)(url);
  } catch (err) {
    if (true) {
      throw new Error(`Invalid href passed to router: ${url} https://err.sh/vercel/next.js/invalid-href-passed`);
    }

    return null;
  }
}

const manualScrollRestoration =  false && false;

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/vercel/next.js/popstate-state-empty');
        }
      }

      this.change('replaceState', url, as, options);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign({}, data, {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly for the SSR page.


    if (false) {}

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    const cleanedAs = delBasePath(as);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as);
      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      Router.events.emit('hashChangeComplete', as);
      return true;
    }

    const parsed = tryParseRelativeUrl(url);
    if (!parsed) return false;
    let {
      pathname,
      searchParams
    } = parsed;
    const query = (0, _searchParamsToUrlQuery.searchParamsToUrlQuery)(searchParams); // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options;

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const {
        pathname: asPathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(cleanedAs);
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);

      if (!routeMatch) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/vercel/next.js/incompatible-href-as`);
        }
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      const {
        error
      } = routeInfo;
      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo);

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      const {
        page: Component
      } = await this.fetchComponent('/_error');
      const routeInfo = {
        Component,
        err,
        error: err
      };

      try {
        routeInfo.props = await this.getInitialProps(Component, {
          err,
          pathname,
          query
        });
      } catch (gipErr) {
        console.error('Error in error page `getInitialProps`: ', gipErr);
        routeInfo.props = {};
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];

      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }

      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), as, __N_SSG);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    const parsed = tryParseRelativeUrl(url);
    if (!parsed) return;
    const {
      pathname
    } = parsed; // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (true) {
      return;
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var _querystring = __webpack_require__(/*! querystring */ "querystring"); // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    // query = '' + new URLSearchParams(query);
    query = (0, _querystring.encode)(query);
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;
const DUMMY_BASE = new URL('http://n');
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected.
*/

function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== DUMMY_BASE.origin) {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    searchParams,
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/search-params-to-url-query.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/search-params-to-url-query.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) === null || _App$prototype === void 0 ? void 0 : _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./pages/main/crm/ifis.js":
/*!********************************!*\
  !*** ./pages/main/crm/ifis.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_hoc_securedPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../app/hoc/securedPage */ "./app/hoc/securedPage/index.js");
/* harmony import */ var _util_asyncComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../util/asyncComponent */ "./util/asyncComponent.js");
/* harmony import */ var _util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../util/IntlMessages */ "./util/IntlMessages.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




 // import IFI from '../../../routes/main/CRM/IFIs';

const IFI = Object(_util_asyncComponent__WEBPACK_IMPORTED_MODULE_3__["default"])(() => __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../../../routes/main/CRM/IFI */ "./routes/main/CRM/IFI/index.js")));
/* harmony default export */ __webpack_exports__["default"] = (Object(_app_hoc_securedPage__WEBPACK_IMPORTED_MODULE_2__["default"])(() => __jsx("div", null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx("title", null, "International Financial Institutes")), __jsx("div", null, __jsx(IFI, null)))));

/***/ }),

/***/ "./redux/actions/Auth.js":
/*!*******************************!*\
  !*** ./redux/actions/Auth.js ***!
  \*******************************/
/*! exports provided: userSignUp, userSignIn, userSignOut, userSignUpSuccess, userSignInSuccess, userSignOutSuccess, showAuthMessage, userGoogleSignIn, userGoogleSignInSuccess, userFacebookSignIn, userFacebookSignInSuccess, setInitUrl, userTwitterSignIn, userTwitterSignInSuccess, userGithubSignIn, userGithubSignInSuccess, showAuthLoader, hideMessage, hideAuthLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userSignUp", function() { return userSignUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userSignIn", function() { return userSignIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userSignOut", function() { return userSignOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userSignUpSuccess", function() { return userSignUpSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userSignInSuccess", function() { return userSignInSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userSignOutSuccess", function() { return userSignOutSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showAuthMessage", function() { return showAuthMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userGoogleSignIn", function() { return userGoogleSignIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userGoogleSignInSuccess", function() { return userGoogleSignInSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userFacebookSignIn", function() { return userFacebookSignIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userFacebookSignInSuccess", function() { return userFacebookSignInSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setInitUrl", function() { return setInitUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userTwitterSignIn", function() { return userTwitterSignIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userTwitterSignInSuccess", function() { return userTwitterSignInSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userGithubSignIn", function() { return userGithubSignIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userGithubSignInSuccess", function() { return userGithubSignInSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showAuthLoader", function() { return showAuthLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideMessage", function() { return hideMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideAuthLoader", function() { return hideAuthLoader; });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/ActionTypes */ "./constants/ActionTypes.js");


const userSignUp = user => {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_1__["SIGNUP_USER"],
    payload: user
  };
};
const userSignIn = user => {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_1__["SIGNIN_USER"],
    payload: user
  };
};
const userSignOut = () => {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_1__["SIGNOUT_USER"]
  };
};
const userSignUpSuccess = authUser => {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_1__["SIGNUP_USER_SUCCESS"],
    payload: authUser
  };
};
const userSignInSuccess = authUser => {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_1__["SIGNIN_USER_SUCCESS"],
    payload: authUser
  };
};
const userSignOutSuccess = () => {
  next_router__WEBPACK_IMPORTED_MODULE_0___default.a.replace("/");
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_1__["SIGNOUT_USER_SUCCESS"]
  };
};
const showAuthMessage = message => {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_1__["SHOW_MESSAGE"],
    payload: message
  };
};
const userGoogleSignIn = () => {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_1__["SIGNIN_GOOGLE_USER"]
  };
};
const userGoogleSignInSuccess = authUser => {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_1__["SIGNIN_GOOGLE_USER_SUCCESS"],
    payload: authUser
  };
};
const userFacebookSignIn = () => {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_1__["SIGNIN_FACEBOOK_USER"]
  };
};
const userFacebookSignInSuccess = authUser => {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_1__["SIGNIN_FACEBOOK_USER_SUCCESS"],
    payload: authUser
  };
};
const setInitUrl = url => {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_1__["INIT_URL"],
    payload: url
  };
};
const userTwitterSignIn = () => {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_1__["SIGNIN_TWITTER_USER"]
  };
};
const userTwitterSignInSuccess = authUser => {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_1__["SIGNIN_TWITTER_USER_SUCCESS"],
    payload: authUser
  };
};
const userGithubSignIn = () => {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_1__["SIGNIN_GITHUB_USER"]
  };
};
const userGithubSignInSuccess = authUser => {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_1__["SIGNIN_GITHUB_USER_SUCCESS"],
    payload: authUser
  };
};
const showAuthLoader = () => {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_1__["ON_SHOW_LOADER"]
  };
};
const hideMessage = () => {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_1__["HIDE_MESSAGE"]
  };
};
const hideAuthLoader = () => {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_1__["ON_HIDE_LOADER"]
  };
};

/***/ }),

/***/ "./redux/actions/Common.js":
/*!*********************************!*\
  !*** ./redux/actions/Common.js ***!
  \*********************************/
/*! exports provided: fetchStart, fetchSuccess, fetchError, showMessage, hideMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchStart", function() { return fetchStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchSuccess", function() { return fetchSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchError", function() { return fetchError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showMessage", function() { return showMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideMessage", function() { return hideMessage; });
/* harmony import */ var _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/ActionTypes */ "./constants/ActionTypes.js");

const fetchStart = () => {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_START"]
  };
};
const fetchSuccess = () => {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_SUCCESS"]
  };
};
const fetchError = error => {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_ERROR"],
    payload: error
  };
};
const showMessage = message => {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOW_MESSAGE"],
    payload: message
  };
};
const hideMessage = () => {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["HIDE_MESSAGE"]
  };
};

/***/ }),

/***/ "./redux/actions/Contact.js":
/*!**********************************!*\
  !*** ./redux/actions/Contact.js ***!
  \**********************************/
/*! exports provided: onGetAllContact, onAddContact, onUpdateContact, onDeleteContact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onGetAllContact", function() { return onGetAllContact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onAddContact", function() { return onAddContact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onUpdateContact", function() { return onUpdateContact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onDeleteContact", function() { return onDeleteContact; });
/* harmony import */ var _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/ActionTypes */ "./constants/ActionTypes.js");
/* harmony import */ var _firebaseConfig_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../firebaseConfig/index */ "./firebaseConfig/index.js");


const onGetAllContact = () => {
  return dispatch => {
    dispatch({
      type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_START"]
    });
    _firebaseConfig_index__WEBPACK_IMPORTED_MODULE_1__["database"].ref('/contact').on('value', snapshot => {
      dispatch({
        type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_SUCCESS"]
      });
      dispatch({
        type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["GET_All_CONTACT_SUCCESS"],
        payload: snapshot.val()
      });
    });
  };
};
const onAddContact = contact => {
  return dispatch => _firebaseConfig_index__WEBPACK_IMPORTED_MODULE_1__["database"].ref('/contact').push(contact);
};
const onUpdateContact = (id, contact) => {
  return dispatch => _firebaseConfig_index__WEBPACK_IMPORTED_MODULE_1__["database"].ref('/contact').child(id).update(contact);
};
const onDeleteContact = id => {
  return dispatch => _firebaseConfig_index__WEBPACK_IMPORTED_MODULE_1__["database"].ref('/contact').child(id).remove();
};

/***/ }),

/***/ "./redux/actions/Notes.js":
/*!********************************!*\
  !*** ./redux/actions/Notes.js ***!
  \********************************/
/*! exports provided: onGetSticky, fetchStickySuccess, onUpdateSticky, updateStickySuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onGetSticky", function() { return onGetSticky; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchStickySuccess", function() { return fetchStickySuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onUpdateSticky", function() { return onUpdateSticky; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateStickySuccess", function() { return updateStickySuccess; });
/* harmony import */ var _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/ActionTypes */ "./constants/ActionTypes.js");

const onGetSticky = notesList => {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["GET_STICKY"],
    notesList
  };
};
const fetchStickySuccess = notesList => {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_ALL_NOTES_SUCCESS"],
    payload: notesList
  };
};
const onUpdateSticky = notesList => {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["NOTES_UPDATE"],
    notesList
  };
};
const updateStickySuccess = notesList => {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["UPDATE_ALL_NOTES_SUCCESS"],
    payload: notesList
  };
};

/***/ }),

/***/ "./redux/actions/Setting.js":
/*!**********************************!*\
  !*** ./redux/actions/Setting.js ***!
  \**********************************/
/*! exports provided: toggleCollapsedSideNav, updateWindowWidth, setThemeType, onNavStyleChange, setPathName, switchLanguage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleCollapsedSideNav", function() { return toggleCollapsedSideNav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateWindowWidth", function() { return updateWindowWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setThemeType", function() { return setThemeType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onNavStyleChange", function() { return onNavStyleChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPathName", function() { return setPathName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "switchLanguage", function() { return switchLanguage; });
/* harmony import */ var _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/ActionTypes */ "./constants/ActionTypes.js");
/* harmony import */ var _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/ThemeSetting */ "./constants/ThemeSetting.js");


function toggleCollapsedSideNav(navCollapsed) {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["TOGGLE_COLLAPSED_NAV"],
    navCollapsed
  };
}
function updateWindowWidth(width) {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["WINDOW_WIDTH"],
    width
  };
}
function setThemeType(themeType) {
  return {
    type: _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_1__["THEME_TYPE"],
    themeType
  };
}
function onNavStyleChange(navStyle) {
  return {
    type: _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_1__["NAV_STYLE"],
    navStyle
  };
}
function setPathName(pathname) {
  return {
    type: _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_1__["SET_PATH_NAME"],
    pathname
  };
}
function switchLanguage(locale) {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["SWITCH_LANGUAGE"],
    payload: locale
  };
}

/***/ }),

/***/ "./redux/actions/index.js":
/*!********************************!*\
  !*** ./redux/actions/index.js ***!
  \********************************/
/*! exports provided: toggleCollapsedSideNav, updateWindowWidth, setThemeType, onNavStyleChange, setPathName, switchLanguage, userSignUp, userSignIn, userSignOut, userSignUpSuccess, userSignInSuccess, userSignOutSuccess, showAuthMessage, userGoogleSignIn, userGoogleSignInSuccess, userFacebookSignIn, userFacebookSignInSuccess, setInitUrl, userTwitterSignIn, userTwitterSignInSuccess, userGithubSignIn, userGithubSignInSuccess, showAuthLoader, hideMessage, hideAuthLoader, onGetSticky, fetchStickySuccess, onUpdateSticky, updateStickySuccess, fetchStart, fetchSuccess, fetchError, showMessage, onGetAllContact, onAddContact, onUpdateContact, onDeleteContact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Setting__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Setting */ "./redux/actions/Setting.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toggleCollapsedSideNav", function() { return _Setting__WEBPACK_IMPORTED_MODULE_0__["toggleCollapsedSideNav"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateWindowWidth", function() { return _Setting__WEBPACK_IMPORTED_MODULE_0__["updateWindowWidth"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setThemeType", function() { return _Setting__WEBPACK_IMPORTED_MODULE_0__["setThemeType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onNavStyleChange", function() { return _Setting__WEBPACK_IMPORTED_MODULE_0__["onNavStyleChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setPathName", function() { return _Setting__WEBPACK_IMPORTED_MODULE_0__["setPathName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "switchLanguage", function() { return _Setting__WEBPACK_IMPORTED_MODULE_0__["switchLanguage"]; });

/* harmony import */ var _Auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Auth */ "./redux/actions/Auth.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "userSignUp", function() { return _Auth__WEBPACK_IMPORTED_MODULE_1__["userSignUp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "userSignIn", function() { return _Auth__WEBPACK_IMPORTED_MODULE_1__["userSignIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "userSignOut", function() { return _Auth__WEBPACK_IMPORTED_MODULE_1__["userSignOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "userSignUpSuccess", function() { return _Auth__WEBPACK_IMPORTED_MODULE_1__["userSignUpSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "userSignInSuccess", function() { return _Auth__WEBPACK_IMPORTED_MODULE_1__["userSignInSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "userSignOutSuccess", function() { return _Auth__WEBPACK_IMPORTED_MODULE_1__["userSignOutSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showAuthMessage", function() { return _Auth__WEBPACK_IMPORTED_MODULE_1__["showAuthMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "userGoogleSignIn", function() { return _Auth__WEBPACK_IMPORTED_MODULE_1__["userGoogleSignIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "userGoogleSignInSuccess", function() { return _Auth__WEBPACK_IMPORTED_MODULE_1__["userGoogleSignInSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "userFacebookSignIn", function() { return _Auth__WEBPACK_IMPORTED_MODULE_1__["userFacebookSignIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "userFacebookSignInSuccess", function() { return _Auth__WEBPACK_IMPORTED_MODULE_1__["userFacebookSignInSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setInitUrl", function() { return _Auth__WEBPACK_IMPORTED_MODULE_1__["setInitUrl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "userTwitterSignIn", function() { return _Auth__WEBPACK_IMPORTED_MODULE_1__["userTwitterSignIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "userTwitterSignInSuccess", function() { return _Auth__WEBPACK_IMPORTED_MODULE_1__["userTwitterSignInSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "userGithubSignIn", function() { return _Auth__WEBPACK_IMPORTED_MODULE_1__["userGithubSignIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "userGithubSignInSuccess", function() { return _Auth__WEBPACK_IMPORTED_MODULE_1__["userGithubSignInSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showAuthLoader", function() { return _Auth__WEBPACK_IMPORTED_MODULE_1__["showAuthLoader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideMessage", function() { return _Auth__WEBPACK_IMPORTED_MODULE_1__["hideMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideAuthLoader", function() { return _Auth__WEBPACK_IMPORTED_MODULE_1__["hideAuthLoader"]; });

/* harmony import */ var _Notes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Notes */ "./redux/actions/Notes.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onGetSticky", function() { return _Notes__WEBPACK_IMPORTED_MODULE_2__["onGetSticky"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchStickySuccess", function() { return _Notes__WEBPACK_IMPORTED_MODULE_2__["fetchStickySuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onUpdateSticky", function() { return _Notes__WEBPACK_IMPORTED_MODULE_2__["onUpdateSticky"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateStickySuccess", function() { return _Notes__WEBPACK_IMPORTED_MODULE_2__["updateStickySuccess"]; });

/* harmony import */ var _Common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Common */ "./redux/actions/Common.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchStart", function() { return _Common__WEBPACK_IMPORTED_MODULE_3__["fetchStart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchSuccess", function() { return _Common__WEBPACK_IMPORTED_MODULE_3__["fetchSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchError", function() { return _Common__WEBPACK_IMPORTED_MODULE_3__["fetchError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showMessage", function() { return _Common__WEBPACK_IMPORTED_MODULE_3__["showMessage"]; });

/* harmony import */ var _Contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Contact */ "./redux/actions/Contact.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onGetAllContact", function() { return _Contact__WEBPACK_IMPORTED_MODULE_4__["onGetAllContact"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onAddContact", function() { return _Contact__WEBPACK_IMPORTED_MODULE_4__["onAddContact"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onUpdateContact", function() { return _Contact__WEBPACK_IMPORTED_MODULE_4__["onUpdateContact"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onDeleteContact", function() { return _Contact__WEBPACK_IMPORTED_MODULE_4__["onDeleteContact"]; });







/***/ }),

/***/ "./util/CustomScrollbars.js":
/*!**********************************!*\
  !*** ./util/CustomScrollbars.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-custom-scrollbars */ "react-custom-scrollbars");
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




const CustomScrollbars = props => __jsx(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_1__["Scrollbars"], _extends({}, props, {
  autoHide: true,
  universal: true,
  renderTrackHorizontal: props => __jsx("div", _extends({}, props, {
    style: {
      display: 'none'
    },
    className: "track-horizontal"
  }))
}));

/* harmony default export */ __webpack_exports__["default"] = (CustomScrollbars);

/***/ }),

/***/ "./util/IntlMessages.js":
/*!******************************!*\
  !*** ./util/IntlMessages.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const InjectMassage = props => __jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], props);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_1__["injectIntl"])(InjectMassage, {
  withRef: false
}));

/***/ }),

/***/ "./util/asyncComponent.js":
/*!********************************!*\
  !*** ./util/asyncComponent.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return asyncComponent; });
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_components_CircularProgress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app/components/CircularProgress */ "./app/components/CircularProgress/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



function asyncComponent(importComponent) {
  return next_dynamic__WEBPACK_IMPORTED_MODULE_0___default()(importComponent, {
    loading: () => __jsx(_app_components_CircularProgress__WEBPACK_IMPORTED_MODULE_1__["default"], null)
  });
}

/***/ }),

/***/ "./util/config.js":
/*!************************!*\
  !*** ./util/config.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  footerText: 'Copyright Company Name © 2019'
};

/***/ }),

/***/ "./util/redirect.js":
/*!**************************!*\
  !*** ./util/redirect.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ((context = {}, target) => {
  console.log(context, target);

  if (context.res) {
    context.res.writeHead(303, {
      Location: target
    });
    context.res.end();
  } else {
    next_router__WEBPACK_IMPORTED_MODULE_0___default.a.replace(target);
  }
});

/***/ }),

/***/ "./util/session.js":
/*!*************************!*\
  !*** ./util/session.js ***!
  \*************************/
/*! exports provided: setCookie, removeCookie, getCookie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCookie", function() { return setCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeCookie", function() { return removeCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCookie", function() { return getCookie; });
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_0__);

const setCookie = (key, value) => {
  if (false) {}
};
const removeCookie = key => {
  if (false) {}
};
const getCookie = (key, req) => {
  return false ? undefined : getCookieFromServer(key, req);
};

const getCookieFromBrowser = key => {
  return js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.get(key);
};

const getCookieFromServer = (key, req) => {
  if (!req.headers.cookie) {
    return undefined;
  }

  const rawCookie = req.headers.cookie.split(';').find(c => c.trim().startsWith(`${key}=`));

  if (!rawCookie) {
    return undefined;
  }

  return rawCookie.split('=')[1];
};

/***/ }),

/***/ "@ant-design/icons":
/*!************************************!*\
  !*** external "@ant-design/icons" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "antd/lib/locale-provider/ca_ES":
/*!*************************************************!*\
  !*** external "antd/lib/locale-provider/ca_ES" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/locale-provider/ca_ES");

/***/ }),

/***/ "antd/lib/locale-provider/en_US":
/*!*************************************************!*\
  !*** external "antd/lib/locale-provider/en_US" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/locale-provider/en_US");

/***/ }),

/***/ "antd/lib/locale-provider/fr_FR":
/*!*************************************************!*\
  !*** external "antd/lib/locale-provider/fr_FR" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/locale-provider/fr_FR");

/***/ }),

/***/ "antd/lib/locale-provider/it_IT":
/*!*************************************************!*\
  !*** external "antd/lib/locale-provider/it_IT" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/locale-provider/it_IT");

/***/ }),

/***/ "antd/lib/locale-provider/ru_RU":
/*!*************************************************!*\
  !*** external "antd/lib/locale-provider/ru_RU" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/locale-provider/ru_RU");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "firebase":
/*!***************************!*\
  !*** external "firebase" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("querystring");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-custom-scrollbars":
/*!******************************************!*\
  !*** external "react-custom-scrollbars" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-custom-scrollbars");

/***/ }),

/***/ "react-intl":
/*!*****************************!*\
  !*** external "react-intl" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-intl");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9BcHBOb3RpZmljYXRpb24vTm90aWZpY2F0aW9uSXRlbS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9BcHBOb3RpZmljYXRpb24vZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9BcHBOb3RpZmljYXRpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvQ2lyY3VsYXJQcm9ncmVzcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9NYWlsTm90aWZpY2F0aW9uL05vdGlmaWNhdGlvbkl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvTWFpbE5vdGlmaWNhdGlvbi9kYXRhLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL01haWxOb3RpZmljYXRpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvU2VhcmNoQm94L2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL1VzZXJJbmZvL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC9jb3JlL0N1c3RvbWl6ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvcmUvTGF5b3V0L2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC9jb3JlL1NpZGViYXIvQXBwc05hdmlnYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvcmUvU2lkZWJhci9TaWRlYmFyQ29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29yZS9TaWRlYmFyL1NpZGViYXJMb2dvLmpzIiwid2VicGFjazovLy8uL2FwcC9jb3JlL1NpZGViYXIvVXNlclByb2ZpbGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvcmUvU2lkZWJhci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29yZS9Ub3BiYXIvQWJvdmVIZWFkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvcmUvVG9wYmFyL0JlbG93SGVhZGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC9jb3JlL1RvcGJhci9Ib3Jpem9udGFsRGFyay9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29yZS9Ub3BiYXIvSG9yaXpvbnRhbERlZmF1bHQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvcmUvVG9wYmFyL0hvcml6b250YWxOYXYuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvcmUvVG9wYmFyL0luc2lkZUhlYWRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29yZS9Ub3BiYXIvTm9IZWFkZXJOb3RpZmljYXRpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvcmUvVG9wYmFyL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC9jb3JlL1RvcGJhci9sYW5ndWFnZURhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2hvYy9zZWN1cmVkUGFnZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvaG9jL3NlY3VyZWRQYWdlL3dpdGhEYXRhLmpzIiwid2VicGFjazovLy8uL2FwcC9ob2Mvc2VjdXJlZFBhZ2Uvd2l0aExheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9jb25zdGFudHMvQWN0aW9uVHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vY29uc3RhbnRzL1RoZW1lU2V0dGluZy5qcyIsIndlYnBhY2s6Ly8vLi9maXJlYmFzZUNvbmZpZy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9sbmdQcm92aWRlci9lbnRyaWVzL2FyX1NBLmpzIiwid2VicGFjazovLy8uL2xuZ1Byb3ZpZGVyL2VudHJpZXMvZW4tVVMuanMiLCJ3ZWJwYWNrOi8vLy4vbG5nUHJvdmlkZXIvZW50cmllcy9lc19FUy5qcyIsIndlYnBhY2s6Ly8vLi9sbmdQcm92aWRlci9lbnRyaWVzL2ZyX0ZSLmpzIiwid2VicGFjazovLy8uL2xuZ1Byb3ZpZGVyL2VudHJpZXMvaXRfSVQuanMiLCJ3ZWJwYWNrOi8vLy4vbG5nUHJvdmlkZXIvZW50cmllcy9ydV9SVS5qcyIsIndlYnBhY2s6Ly8vLi9sbmdQcm92aWRlci9lbnRyaWVzL3poLUhhbnMtQ04uanMiLCJ3ZWJwYWNrOi8vLy4vbG5nUHJvdmlkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9saW5rLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3dpdGgtcm91dGVyLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL21pdHQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9zZWFyY2gtcGFyYW1zLXRvLXVybC1xdWVyeS50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL21haW4vY3JtL2lmaXMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvYWN0aW9ucy9BdXRoLmpzIiwid2VicGFjazovLy8uL3JlZHV4L2FjdGlvbnMvQ29tbW9uLmpzIiwid2VicGFjazovLy8uL3JlZHV4L2FjdGlvbnMvQ29udGFjdC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9hY3Rpb25zL05vdGVzLmpzIiwid2VicGFjazovLy8uL3JlZHV4L2FjdGlvbnMvU2V0dGluZy5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9hY3Rpb25zL2luZGV4LmpzIiwid2VicGFjazovLy8uL3V0aWwvQ3VzdG9tU2Nyb2xsYmFycy5qcyIsIndlYnBhY2s6Ly8vLi91dGlsL0ludGxNZXNzYWdlcy5qcyIsIndlYnBhY2s6Ly8vLi91dGlsL2FzeW5jQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3V0aWwvY29uZmlnLmpzIiwid2VicGFjazovLy8uL3V0aWwvcmVkaXJlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbC9zZXNzaW9uLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbnQtZGVzaWduL2ljb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFudGQvbGliL2xvY2FsZS1wcm92aWRlci9jYV9FU1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFudGQvbGliL2xvY2FsZS1wcm92aWRlci9lbl9VU1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFudGQvbGliL2xvY2FsZS1wcm92aWRlci9mcl9GUlwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFudGQvbGliL2xvY2FsZS1wcm92aWRlci9pdF9JVFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFudGQvbGliL2xvY2FsZS1wcm92aWRlci9ydV9SVVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlyZWJhc2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqcy1jb29raWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2R5bmFtaWNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzLWV4YWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicXVlcnlzdHJpbmdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWN1c3RvbS1zY3JvbGxiYXJzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaW50bFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIl0sIm5hbWVzIjpbIk5vdGlmaWNhdGlvbkl0ZW0iLCJub3RpZmljYXRpb24iLCJpY29uIiwiaW1hZ2UiLCJ0aXRsZSIsInRpbWUiLCJub3RpZmljYXRpb25zIiwiQXBwTm90aWZpY2F0aW9uIiwibWFwIiwiaW5kZXgiLCJDaXJjdWxhclByb2dyZXNzIiwiY2xhc3NOYW1lIiwiaGVpZ2h0IiwiZGVmYXVsdFByb3BzIiwiYmFkZ2UiLCJuYW1lIiwibWVzc2FnZSIsImlkIiwiTWFpbE5vdGlmaWNhdGlvbiIsIlNlYXJjaEJveCIsInN0eWxlTmFtZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJ2YWx1ZSIsIlVzZXJJbmZvIiwiQ29tcG9uZW50IiwicmVuZGVyIiwidXNlck1lbnVPcHRpb25zIiwicHJvcHMiLCJ1c2VyU2lnbk91dCIsImNvbm5lY3QiLCJJbmRleCIsIkNvbnRlbnQiLCJGb290ZXIiLCJMYXlvdXQiLCJBcHBMYXlvdXQiLCJjaGlsZHJlbiIsIndpZHRoIiwidGhlbWVUeXBlIiwibGF5b3V0VHlwZSIsImxvY2FsZSIsIm5hdlN0eWxlIiwidXNlU2VsZWN0b3IiLCJzZXR0aW5ncyIsImdldENvbnRhaW5lckNsYXNzIiwiTkFWX1NUWUxFX0RBUktfSE9SSVpPTlRBTCIsIk5BVl9TVFlMRV9ERUZBVUxUX0hPUklaT05UQUwiLCJOQVZfU1RZTEVfSU5TSURFX0hFQURFUl9IT1JJWk9OVEFMIiwiTkFWX1NUWUxFX0JFTE9XX0hFQURFUiIsIk5BVl9TVFlMRV9BQk9WRV9IRUFERVIiLCJnZXROYXZTdHlsZXMiLCJOQVZfU1RZTEVfRklYRUQiLCJOQVZfU1RZTEVfRFJBV0VSIiwiTkFWX1NUWUxFX01JTklfU0lERUJBUiIsIk5BVl9TVFlMRV9OT19IRUFERVJfTUlOSV9TSURFQkFSIiwiTkFWX1NUWUxFX05PX0hFQURFUl9FWFBBTkRFRF9TSURFQkFSIiwiZ2V0U2lkZWJhciIsIlRBQl9TSVpFIiwiYm9keUNsYXNzIiwiVEhFTUVfVFlQRV9EQVJLIiwiY3VycmVudEFwcExvY2FsZSIsIkFwcExvY2FsZSIsImFudGQiLCJtZXNzYWdlcyIsImZvb3RlclRleHQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJBcHBzTmF2aWdhdGlvbiIsIlN1Yk1lbnUiLCJNZW51IiwiTWVudUl0ZW1Hcm91cCIsIkl0ZW1Hcm91cCIsIlNpZGViYXJDb250ZW50IiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInJvdXRlciIsInVzZVJvdXRlciIsInBhdGhuYW1lIiwiZ2V0Tm9IZWFkZXJDbGFzcyIsImdldE5hdlN0eWxlU3ViTWVudUNsYXNzIiwidXNlRWZmZWN0Iiwic2V0UGF0aE5hbWUiLCJzZWxlY3RlZEtleXMiLCJzdWJzdHIiLCJkZWZhdWx0T3BlbktleXMiLCJzcGxpdCIsIlRIRU1FX1RZUEVfTElURSIsInByb3BUeXBlcyIsIlNpZGViYXJMb2dvIiwibmF2Q29sbGFwc2VkIiwidG9nZ2xlQ29sbGFwc2VkU2lkZU5hdiIsIm9uTmF2U3R5bGVDaGFuZ2UiLCJVc2VyUHJvZmlsZSIsIlNpZGVyIiwiU2lkZWJhciIsIm9uVG9nZ2xlQ29sbGFwc2VkTmF2Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInVwZGF0ZVdpbmRvd1dpZHRoIiwiaW5uZXJXaWR0aCIsImRyYXdlclN0eWxlIiwiSGVhZGVyIiwiT3B0aW9uIiwiU2VsZWN0IiwibWVudSIsImhhbmRsZU1lbnVDbGljayIsImluZm8iLCJoYW5kbGVDaGFuZ2UiLCJjb25zb2xlIiwibG9nIiwiQWJvdmVIZWFkZXIiLCJzZWFyY2hUZXh0Iiwic2V0U2VhcmNoVGV4dCIsInVzZVN0YXRlIiwibGFuZ3VhZ2VNZW51IiwibGFuZ3VhZ2VEYXRhIiwibGFuZ3VhZ2UiLCJKU09OIiwic3RyaW5naWZ5IiwiZSIsInN3aXRjaExhbmd1YWdlIiwidXBkYXRlU2VhcmNoQ2hhdFVzZXIiLCJldnQiLCJ0YXJnZXQiLCJCZWxvd0hlYWRlciIsIkhvcml6b250YWxEYXJrIiwiSG9yaXpvbnRhbERlZmF1bHQiLCJIb3Jpem9udGFsTmF2IiwiSW5zaWRlSGVhZGVyIiwiTm9IZWFkZXJOb3RpZmljYXRpb24iLCJUb3BiYXIiLCJsYW5ndWFnZUlkIiwiY29tcG9zZSIsIldpdGhEYXRhIiwiV2l0aExheW91dCIsIkNvbXBvc2VkQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiY29udGV4dCIsImlzTG9nZ2VkSW4iLCJnZXRDb29raWUiLCJyZXEiLCJyZWRpcmVjdCIsIlRPR0dMRV9DT0xMQVBTRURfTkFWIiwiV0lORE9XX1dJRFRIIiwiU1dJVENIX0xBTkdVQUdFIiwiRkVUQ0hfU1RBUlQiLCJGRVRDSF9TVUNDRVNTIiwiRkVUQ0hfRVJST1IiLCJTSE9XX01FU1NBR0UiLCJISURFX01FU1NBR0UiLCJPTl9TSE9XX0xPQURFUiIsIk9OX0hJREVfTE9BREVSIiwiU0lHTlVQX1VTRVIiLCJTSUdOVVBfVVNFUl9TVUNDRVNTIiwiU0lHTklOX0dPT0dMRV9VU0VSIiwiU0lHTklOX0dPT0dMRV9VU0VSX1NVQ0NFU1MiLCJTSUdOSU5fRkFDRUJPT0tfVVNFUiIsIlNJR05JTl9GQUNFQk9PS19VU0VSX1NVQ0NFU1MiLCJTSUdOSU5fVFdJVFRFUl9VU0VSIiwiU0lHTklOX1RXSVRURVJfVVNFUl9TVUNDRVNTIiwiU0lHTklOX0dJVEhVQl9VU0VSIiwiU0lHTklOX0dJVEhVQl9VU0VSX1NVQ0NFU1MiLCJTSUdOSU5fVVNFUiIsIlNJR05JTl9VU0VSX1NVQ0NFU1MiLCJTSUdOT1VUX1VTRVIiLCJTSUdOT1VUX1VTRVJfU1VDQ0VTUyIsIklOSVRfVVJMIiwiR0VUX1NUSUNLWSIsIk5PVEVTX1VQREFURSIsIkZFVENIX0FMTF9OT1RFU19TVUNDRVNTIiwiVVBEQVRFX0FMTF9OT1RFU19TVUNDRVNTIiwiR0VUX0FsbF9DT05UQUNUX1NVQ0NFU1MiLCJPTl9BRERfQ09OVEFDVF9TVUNDRVNTIiwiVVBEQVRFX0NPTlRBQ1RfU1VDQ0VTUyIsIkRFTEVURV9DT05UQUNUX1NVQ0NFU1MiLCJUSEVNRV9UWVBFIiwiVEhFTUVfVFlQRV9TRU1JX0RBUksiLCJUSEVNRV9DT0xPUl9TRUxFQ1RJT04iLCJUSEVNRV9DT0xPUl9TRUxFQ1RJT05fUFJFU0VUIiwiVEhFTUVfQ09MT1JfU0VMRUNUSU9OX0NVU1RPTUlaRSIsIkhPUklaT05UQUxfTkFWSUdBVElPTiIsIkhPUklaT05UQUxfTUVOVV9QT1NJVElPTiIsIkFCT1ZFX1RIRV9IRUFERVIiLCJJTlNJREVfVEhFX0hFQURFUiIsIkJFTE9XX1RIRV9IRUFERVIiLCJWRVJUSUNBTF9OQVZJR0FUSU9OIiwiTkFWX1NUWUxFX01JTkkiLCJMQVlPVVRfVFlQRSIsIlNFVF9QQVRIX05BTUUiLCJMQVlPVVRfVFlQRV9GUkFNRUQiLCJMQVlPVVRfVFlQRV9CT1hFRCIsIkxBWU9VVF9UWVBFX0ZVTEwiLCJOQVZfU1RZTEUiLCJMSUdIVF9QVVJQTEUiLCJMSUdIVF9QVVJQTEVfU0VDIiwiTElHSFRfUFVSUExFX05BVl9EQVJLX0JHIiwiTElHSFRfUFVSUExFX0RBUktfVEVYVF9DT0xPUiIsIlJFRCIsIlJFRF9TRUMiLCJSRURfTkFWX0RBUktfQkciLCJSRURfREFSS19URVhUX0NPTE9SIiwiQkxVRSIsIkJMVUVfU0VDIiwiQkxVRV9OQVZfREFSS19CRyIsIkJMVUVfREFSS19URVhUX0NPTE9SIiwiREFSS19CTFVFIiwiREFSS19CTFVFX1NFQyIsIkRBUktfQkxVRV9OQVZfREFSS19CRyIsIkRBUktfQkxVRV9EQVJLX1RFWFRfQ09MT1IiLCJPUkFOR0UiLCJPUkFOR0VfU0VDIiwiT1JBTkdFX05BVl9EQVJLX0JHIiwiT1JBTkdFX0RBUktfVEVYVF9DT0xPUiIsIkxJR0hUX0JMVUUiLCJMSUdIVF9CTFVFX1NFQyIsIkxJR0hUX0JMVUVfTkFWX0RBUktfQkciLCJMSUdIVF9CTFVFX0RBUktfVEVYVF9DT0xPUiIsIkRFRVBfT1JBTkdFIiwiREVFUF9PUkFOR0VfU0VDIiwiREVFUF9PUkFOR0VfTkFWX0RBUktfQkciLCJERUVQX09SQU5HRV9EQVJLX1RFWFRfQ09MT1IiLCJMSUdIVF9QVVJQTEVfMSIsIkxJR0hUX1BVUlBMRV8xX1NFQyIsIkxJR0hUX1BVUlBMRV8xX05BVl9EQVJLX0JHIiwiTElHSFRfUFVSUExFXzFfREFSS19URVhUX0NPTE9SIiwiTElHSFRfUFVSUExFXzIiLCJMSUdIVF9QVVJQTEVfMl9TRUMiLCJMSUdIVF9QVVJQTEVfMl9OQVZfREFSS19CRyIsIkxJR0hUX1BVUlBMRV8yX0RBUktfVEVYVF9DT0xPUiIsImNvbmZpZyIsImFwaUtleSIsImF1dGhEb21haW4iLCJkYXRhYmFzZVVSTCIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImZpcmViYXNlIiwiYXBwcyIsImxlbmd0aCIsImluaXRpYWxpemVBcHAiLCJhdXRoIiwiZ29vZ2xlQXV0aFByb3ZpZGVyIiwiR29vZ2xlQXV0aFByb3ZpZGVyIiwiZmFjZWJvb2tBdXRoUHJvdmlkZXIiLCJGYWNlYm9va0F1dGhQcm92aWRlciIsImdpdGh1YkF1dGhQcm92aWRlciIsIkdpdGh1YkF1dGhQcm92aWRlciIsInR3aXR0ZXJBdXRoUHJvdmlkZXIiLCJUd2l0dGVyQXV0aFByb3ZpZGVyIiwiZGF0YWJhc2UiLCJzYUxhbmciLCJzYU1lc3NhZ2VzIiwiYW50ZFNBIiwiRW5MYW5nIiwiZW5NZXNzYWdlcyIsImFudGRFbiIsIlJ1TGFuZyIsInJ1TWVzc2FnZXMiLCJhbnRkUnUiLCJaaExhbiIsInpoTWVzc2FnZXMiLCJlbiIsImVuTGFuZyIsInpoIiwiemhMYW5nIiwiYXIiLCJhckxhbmciLCJpdCIsIml0TGFuZyIsImVzIiwiZXNMYW5nIiwiZnIiLCJmckxhbmciLCJydSIsInJ1TGFuZyIsImxvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJsaXN0ZW5lcnMiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsInByZWZldGNoZWQiLCJjYWNoZWRPYnNlcnZlciIsImVudHJpZXMiLCJlbnRyeSIsImNiIiwicm9vdE1hcmdpbiIsImxpc3RlblRvSW50ZXJzZWN0aW9ucyIsIm9ic2VydmVyIiwiZ2V0T2JzZXJ2ZXIiLCJlcnIiLCJocmVmIiwibm9kZU5hbWUiLCJpc0xvY2FsIiwic2Nyb2xsIiwiYXMiLCJyZXBsYWNlIiwic3VjY2VzcyIsImRvY3VtZW50IiwiaGFzV2FybmVkIiwiUmVhY3QiLCJwIiwicmVzb2x2ZWRIcmVmIiwiY2hpbGRFbG0iLCJpc1ByZWZldGNoZWQiLCJwcmVmZXRjaCIsImNoaWxkIiwiQ2hpbGRyZW4iLCJjaGlsZFByb3BzIiwicmVmIiwiZWwiLCJzZXRDaGlsZEVsbSIsIm9uQ2xpY2siLCJsaW5rQ2xpY2tlZCIsInByaW9yaXR5IiwicHJvY2VzcyIsIndhcm4iLCJQcm9wVHlwZXMiLCJyZXF1aXJlIiwiZXhhY3QiLCJMaW5rIiwic2hhbGxvdyIsInBhc3NIcmVmIiwicGF0aCIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsIk9iamVjdCIsImdldCIsIlJvdXRlciIsImZpZWxkIiwiZ2V0Um91dGVyIiwiZXZlbnQiLCJldmVudEZpZWxkIiwiX3NpbmdsZXRvblJvdXRlciIsInN0YWNrIiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsIl9yb3V0ZXIiLCJpbnN0YW5jZSIsIldpdGhSb3V0ZXJXcmFwcGVyIiwiYWxsIiwib24iLCJvZmYiLCJlbWl0IiwiaGFuZGxlciIsImJhc2VQYXRoIiwiY2FuY2VsbGVkIiwiYmFzZSIsInVybEFzU3RyaW5nIiwiZmluYWxVcmwiLCJ1cmwiLCJhZGRCYXNlUGF0aCIsInJlc29sdmVIcmVmIiwibWFudWFsU2Nyb2xsUmVzdG9yYXRpb24iLCJjcmVkZW50aWFscyIsInJlcyIsImF0dGVtcHRzIiwiZmV0Y2hSZXRyeSIsImlzU2VydmVyUmVuZGVyIiwiY29uc3RydWN0b3IiLCJyb3V0ZSIsInF1ZXJ5IiwiYXNQYXRoIiwiY29tcG9uZW50cyIsInNkYyIsInN1YiIsImNsYyIsInBhZ2VMb2FkZXIiLCJfYnBzIiwiZXZlbnRzIiwiX3dyYXBBcHAiLCJpc1NzciIsImlzRmFsbGJhY2siLCJfaW5GbGlnaHRSb3V0ZSIsIl9fTl9TU0ciLCJpbml0aWFsUHJvcHMiLCJfX05fU1NQIiwiX19ORVhUX0RBVEFfXyIsInVwZGF0ZSIsIm1vZCIsImRhdGEiLCJuZXdEYXRhIiwicmVsb2FkIiwiYmFjayIsInB1c2giLCJvcHRpb25zIiwicHJlcGFyZVVybEFzIiwiU1QiLCJwZXJmb3JtYW5jZSIsImNsZWFuZWRBcyIsImRlbEJhc2VQYXRoIiwicGFyc2VkIiwidHJ5UGFyc2VSZWxhdGl2ZVVybCIsIm1ldGhvZCIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwibWlzc2luZ1BhcmFtcyIsInBhcmFtIiwiYXNQYXRobmFtZSIsInJvdXRlSW5mbyIsImFwcENvbXAiLCJjaGFuZ2VTdGF0ZSIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJwYWdlIiwiZXJyb3IiLCJjYWNoZWRSb3V0ZUluZm8iLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJkYXRhSHJlZiIsInNldCIsImJlZm9yZVBvcFN0YXRlIiwib25seUFIYXNoQ2hhbmdlIiwibmV3SGFzaCIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJzY3JvbGxUb0hhc2giLCJoYXNoIiwiaWRFbCIsIm5hbWVFbCIsInVybElzTmV3IiwiUHJvbWlzZSIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsIl9nZXREYXRhIiwiZm4iLCJfZ2V0U3RhdGljRGF0YSIsImZldGNoTmV4dERhdGEiLCJfZ2V0U2VydmVyRGF0YSIsIkFwcFRyZWUiLCJjdHgiLCJhYm9ydENvbXBvbmVudExvYWQiLCJub3RpZnkiLCJzbGFzaGVkUHJvdG9jb2xzIiwicHJvdG9jb2wiLCJ1cmxPYmoiLCJob3N0IiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiaG9zdG5hbWUiLCJzZWFyY2giLCJURVNUX1JPVVRFIiwiRFVNTVlfQkFTRSIsInJlc29sdmVkQmFzZSIsIm9yaWdpbiIsInJlIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwicGFyYW1zIiwic2x1Z05hbWUiLCJnIiwiZ3JvdXBzIiwibSIsInN0ciIsIm9wdGlvbmFsIiwicmVwZWF0Iiwia2V5Iiwic2VnbWVudHMiLCJub3JtYWxpemVkUm91dGUiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwic2VnbWVudCIsInBhcnNlUGFyYW1ldGVyIiwicG9zIiwiZXNjYXBlUmVnZXgiLCJyb3V0ZUtleUNoYXJDb2RlIiwicm91dGVLZXlDaGFyTGVuZ3RoIiwiZ2V0U2FmZVJvdXRlS2V5Iiwicm91dGVLZXkiLCJpIiwiU3RyaW5nIiwicm91dGVLZXlzIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJjbGVhbmVkS2V5IiwiaW52YWxpZEtleSIsImlzTmFOIiwicGFyc2VJbnQiLCJuYW1lZFJlZ2V4Iiwic2VhcmNoUGFyYW1zIiwiQXJyYXkiLCJ1c2VkIiwicmVzdWx0IiwicG9ydCIsImdldExvY2F0aW9uT3JpZ2luIiwiQXBwIiwiZ2V0RGlzcGxheU5hbWUiLCJwYWdlUHJvcHMiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiaXNSZXNTZW50IiwidXJsT2JqZWN0S2V5cyIsIlNQIiwiSUZJIiwiYXN5bmNDb21wb25lbnQiLCJQYWdlIiwidXNlclNpZ25VcCIsInVzZXIiLCJ0eXBlIiwicGF5bG9hZCIsInVzZXJTaWduSW4iLCJ1c2VyU2lnblVwU3VjY2VzcyIsImF1dGhVc2VyIiwidXNlclNpZ25JblN1Y2Nlc3MiLCJ1c2VyU2lnbk91dFN1Y2Nlc3MiLCJzaG93QXV0aE1lc3NhZ2UiLCJ1c2VyR29vZ2xlU2lnbkluIiwidXNlckdvb2dsZVNpZ25JblN1Y2Nlc3MiLCJ1c2VyRmFjZWJvb2tTaWduSW4iLCJ1c2VyRmFjZWJvb2tTaWduSW5TdWNjZXNzIiwic2V0SW5pdFVybCIsInVzZXJUd2l0dGVyU2lnbkluIiwidXNlclR3aXR0ZXJTaWduSW5TdWNjZXNzIiwidXNlckdpdGh1YlNpZ25JbiIsInVzZXJHaXRodWJTaWduSW5TdWNjZXNzIiwic2hvd0F1dGhMb2FkZXIiLCJoaWRlTWVzc2FnZSIsImhpZGVBdXRoTG9hZGVyIiwiZmV0Y2hTdGFydCIsImZldGNoU3VjY2VzcyIsImZldGNoRXJyb3IiLCJzaG93TWVzc2FnZSIsIm9uR2V0QWxsQ29udGFjdCIsInNuYXBzaG90IiwidmFsIiwib25BZGRDb250YWN0IiwiY29udGFjdCIsIm9uVXBkYXRlQ29udGFjdCIsIm9uRGVsZXRlQ29udGFjdCIsInJlbW92ZSIsIm9uR2V0U3RpY2t5Iiwibm90ZXNMaXN0IiwiZmV0Y2hTdGlja3lTdWNjZXNzIiwib25VcGRhdGVTdGlja3kiLCJ1cGRhdGVTdGlja3lTdWNjZXNzIiwic2V0VGhlbWVUeXBlIiwiQ3VzdG9tU2Nyb2xsYmFycyIsImRpc3BsYXkiLCJJbmplY3RNYXNzYWdlIiwiaW5qZWN0SW50bCIsIndpdGhSZWYiLCJpbXBvcnRDb21wb25lbnQiLCJkeW5hbWljIiwibG9hZGluZyIsIm1vZHVsZSIsImV4cG9ydHMiLCJ3cml0ZUhlYWQiLCJMb2NhdGlvbiIsImVuZCIsInNldENvb2tpZSIsInJlbW92ZUNvb2tpZSIsImdldENvb2tpZUZyb21Ccm93c2VyIiwiZ2V0Q29va2llRnJvbVNlcnZlciIsImNvb2tpZSIsImhlYWRlcnMiLCJ1bmRlZmluZWQiLCJyYXdDb29raWUiLCJmaW5kIiwiYyIsInRyaW0iLCJzdGFydHNXaXRoIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTs7O1FBR0E7O1FBRUE7UUFDQTtRQUNBLHlDQUF5QztRQUN6QztRQUNBO1FBQ0E7UUFDQTtRQUNBLGtCQUFr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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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RUF3Q0UsTUFBQyx5Q0FBRCxDQUFNLElBQU47QUFBVyxPQUFHLEVBQUM7QUFBZixLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUM7QUFBWCxLQUNFLE1BQUMsMERBQUQ7QUFDRSxNQUFFLEVBQUM7QUFETCxJQURGLENBREYsQ0F4Q0YsRUE2Q0UsTUFBQyx5Q0FBRCxDQUFNLElBQU47QUFBVyxPQUFHLEVBQUM7QUFBZixLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUM7QUFBWCxLQUNFLE1BQUMsMERBQUQ7QUFDRSxNQUFFLEVBQUM7QUFETCxJQURGLENBREYsQ0E3Q0YsRUFrREUsTUFBQyx5Q0FBRCxDQUFNLElBQU47QUFBVyxPQUFHLEVBQUM7QUFBZixLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUM7QUFBWCxLQUNFLE1BQUMsMERBQUQ7QUFDRSxNQUFFLEVBQUM7QUFETCxJQURGLENBREYsQ0FsREYsRUF1REUsTUFBQyx5Q0FBRCxDQUFNLElBQU47QUFBVyxPQUFHLEVBQUM7QUFBZixLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUM7QUFBWCxLQUNFLE1BQUMsMERBQUQ7QUFDRSxNQUFFLEVBQUM7QUFETCxJQURGLENBREYsQ0F2REYsRUE0REUsTUFBQyx5Q0FBRCxDQUFNLElBQU47QUFBVyxPQUFHLEVBQUM7QUFBZixLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUM7QUFBWCxLQUNFLE1BQUMsMERBQUQ7QUFDRSxNQUFFLEVBQUM7QUFETCxJQURGLENBREYsQ0E1REYsRUFpRUUsTUFBQyx5Q0FBRCxDQUFNLElBQU47QUFBVyxPQUFHLEVBQUM7QUFBZixLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUM7QUFBWCxLQUNFLE1BQUMsMERBQUQ7QUFDRSxNQUFFLEVBQUM7QUFETCxJQURGLENBREYsQ0FqRUYsRUFzRUUsTUFBQyx5Q0FBRCxDQUFNLElBQU47QUFBVyxPQUFHLEVBQUM7QUFBZixLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUM7QUFBWCxLQUNFLE1BQUMsMERBQUQ7QUFDRSxNQUFFLEVBQUM7QUFETCxJQURGLENBREYsQ0F0RUYsRUEyRUUsTUFBQyx5Q0FBRCxDQUFNLElBQU47QUFBVyxPQUFHLEVBQUM7QUFBZixLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUM7QUFBWCxLQUNFLE1BQUMsMERBQUQ7QUFDRSxNQUFFLEVBQUM7QUFETCxJQURGLENBREYsQ0EzRUYsRUFnRkUsTUFBQyx5Q0FBRCxDQUFNLElBQU47QUFBVyxPQUFHLEVBQUM7QUFBZixLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUM7QUFBWCxLQUNFLE1BQUMsMERBQUQ7QUFDRSxNQUFFLEVBQUM7QUFETCxJQURGLENBREYsQ0FoRkYsRUFxRkUsTUFBQyx5Q0FBRCxDQUFNLElBQU47QUFBVyxPQUFHLEVBQUM7QUFBZixLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUM7QUFBWCxLQUNFLE1BQUMsMERBQUQ7QUFDRSxNQUFFLEVBQUM7QUFETCxJQURGLENBREYsQ0FyRkYsQ0F4REYsRUFvSkUsTUFBQyxPQUFEO0FBQVMsa0JBQWMsRUFBQyxvQkFBeEI7QUFBNkMsT0FBRyxFQUFDLGFBQWpEO0FBQStELFNBQUssRUFDbEUsb0JBQ1E7QUFBRyxlQUFTLEVBQUM7QUFBYixNQURSLEVBR1UsTUFBQywwREFBRDtBQUFjLFFBQUUsRUFBQztBQUFqQixNQUhWO0FBREYsS0FPRSxNQUFDLHlDQUFELENBQU0sSUFBTjtBQUFXLE9BQUcsRUFBQztBQUFmLEtBQ0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQztBQUFYLEtBQ0UsTUFBQywwREFBRDtBQUNFLE1BQUUsRUFBQztBQURMLElBREYsQ0FERixDQVBGLEVBWUUsTUFBQyx5Q0FBRCxDQUFNLElBQU47QUFBVyxPQUFHLEVBQUM7QUFBZixLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUM7QUFBWCxLQUNFLE1BQUMsMERBQUQ7QUFDRSxNQUFFLEVBQUM7QUFETCxJQURGLENBREYsQ0FaRixFQWlCRSxNQUFDLHlDQUFELENBQU0sSUFBTjtBQUFXLE9BQUcsRUFBQztBQUFmLEtBQ0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQztBQUFYLEtBQ0UsTUFBQywwREFBRDtBQUNFLE1BQUUsRUFBQztBQURMLElBREYsQ0FERixDQWpCRixFQXNCRSxNQUFDLHlDQUFELENBQU0sSUFBTjtBQUFXLE9BQUcsRUFBQztBQUFmLEtBQ0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQztBQUFYLEtBQ0UsTUFBQywwREFBRDtBQUNFLE1BQUUsRUFBQztBQURMLElBREYsQ0FERixDQXRCRixFQTJCRSxNQUFDLHlDQUFELENBQU0sSUFBTjtBQUFXLE9BQUcsRUFBQztBQUFmLEtBQ0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQztBQUFYLEtBQ0UsTUFBQywwREFBRDtBQUNFLE1BQUUsRUFBQztBQURMLElBREYsQ0FERixDQTNCRixFQWdDRSxNQUFDLHlDQUFELENBQU0sSUFBTjtBQUFXLE9BQUcsRUFBQztBQUFmLEtBQ0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQztBQUFYLEtBQ0UsTUFBQywwREFBRDtBQUNFLE1BQUUsRUFBQztBQURMLElBREYsQ0FERixDQWhDRixFQTBDRSxNQUFDLHlDQUFELENBQU0sSUFBTjtBQUFXLE9BQUcsRUFBQztBQUFmLEtBQ0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQztBQUFYLEtBQ0UsTUFBQywwREFBRDtBQUNFLE1BQUUsRUFBQztBQURMLElBREYsQ0FERixDQTFDRixFQStDRSxNQUFDLHlDQUFELENBQU0sSUFBTjtBQUFXLE9BQUcsRUFBQztBQUFmLEtBQ0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQztBQUFYLEtBQ0UsTUFBQywwREFBRDtBQUNFLE1BQUUsRUFBQztBQURMLElBREYsQ0FERixDQS9DRixFQW9ERSxNQUFDLHlDQUFELENBQU0sSUFBTjtBQUFXLE9BQUcsRUFBQztBQUFmLEtBQ0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQztBQUFYLEtBQ0UsTUFBQywwREFBRDtBQUNFLE1BQUUsRUFB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Q0FyQkYsRUEwQkUsTUFBQyx5Q0FBRCxDQUFNLElBQU47QUFBVyxPQUFHLEVBQUM7QUFBZixLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUM7QUFBWCxLQUNFLE1BQUMsMERBQUQ7QUFDRSxNQUFFLEVBQUM7QUFETCxJQURGLENBREYsQ0ExQkYsRUErQkUsTUFBQyx5Q0FBRCxDQUFNLElBQU47QUFBVyxPQUFHLEVBQUM7QUFBZixLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUM7QUFBWCxLQUNFLE1BQUMsMERBQUQ7QUFDRSxNQUFFLEVBQUM7QUFETCxJQURGLENBREYsQ0EvQkYsRUFvQ0UsTUFBQyx5Q0FBRCxDQUFNLElBQU47QUFBVyxPQUFHLEVBQUM7QUFBZixLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUM7QUFBWCxLQUNFLE1BQUMsMERBQUQ7QUFDRSxNQUFFLEVBQUM7QUFETCxJQURGLENBREYsQ0FwQ0YsRUF5Q0UsTUFBQyx5Q0FBRCxDQUFNLElBQU47QUFBVyxPQUFHLEVBQUM7QUFBZixLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUM7QUFBWCxLQUNFLE1BQUMsMERBQUQ7QUFDRSxNQUFFLEVBQUM7QUFETCxJQURGLENBREYsQ0F6Q0YsRUE4Q0UsTUFBQyx5Q0FBRCxDQUFNLElBQU47QUFBVyxPQUFHLEVBQUM7QUFBZixLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUM7QUFBWCxLQUNFLE1BQUMsMERBQUQ7QUFDRSxNQUFFLEVBQUM7QUFETCxJQURGLENBREYsQ0E5Q0YsRUFtREUsTUFBQyx5Q0FBRCxDQUFNLElBQU47QUFBVyxPQUFHLEVBQUM7QUFBZixLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUM7QUFBWCxLQUNFLE1BQUMsMERBQUQ7QUFDRSxNQUFFLEVBQUM7QUFETCxJQURGLENBREYsQ0FuREYsRUF3REUsTUFBQyx5Q0FBRCxDQUFNLElBQU47QUFBVyxPQUFHLEVBQUM7QUFBZixLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUM7QUFBWCxLQUNFLE1BQUMsMERBQUQ7QUFDRSxNQUFFLEVBQUM7QUFETCxJQURGLENBREYsQ0F4REYsRUE2REUsTUFBQyx5Q0FBRCxDQUFNLElBQU47QUFBVyxPQUFHLEVBQUM7QUFBZixLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUM7QUFBWCxLQUNFLE1BQUMsMERBQUQ7QUFDRSxNQUFFLEVBQUM7QUFETCxJQURGLENBREYsQ0E3REYsQ0FIRixFQXVFRSxNQUFDLE9BQUQ7QUFBUyxrQkFBYyxFQUFDLG9CQUF4QjtBQUE2QyxPQUFHLEVBQUMsT0FBakQ7QUFDUyxTQUFLLEVBQ0gsb0JBQU07QUFBRyxlQUFTLEVBQUM7QUFBYixNQUFOLEVBQ00sTUFBQywwREFBRDtBQUFjLFFBQUUsRUFBQztBQUFqQixNQUROO0FBRlgsS0FLRSxNQUFDLHlDQUFELENBQU0sSUFBTjtBQUFXLE9BQUcsRUFBQztBQUFmLEtBQ0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQztBQUFYLEtBQ0UsTUFBQywwREFBRDtBQUNFLE1BQUUsRUFBQztBQURMLElBREYsQ0FERixDQUxGLEVBVUUsTUFBQyx5Q0FBRCxDQUFNLElBQU47QUFBVyxPQUFHLEVBQUM7QUFBZixLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUM7QUFBWCxLQUNFLE1BQUMsMERBQUQ7QUFDRSxNQUFFLEVBQUM7QUFETCxJQURGLENBREYsQ0FWRixFQWVFLE1BQUMseUNBQUQsQ0FBTSxJQUFOO0FBQVcsT0FBRyxFQUFDO0FBQWYsS0FDRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDO0FBQVgsS0FDRSxNQUFDLDBEQUFEO0FBQ0UsTUFBRSxFQUFDO0FBREwsSUFERixDQURGLENBZkYsRUFvQkUsTUFBQyx5Q0FBRCxDQUFNLElBQU47QUFBVyxPQUFHLEVBQUM7QUFBZixLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUM7QUFBWCxLQUNFLE1BQUMsMERBQUQ7QUFDRSxNQUFFLEVBQUM7QUFETCxJQURGLENBREYsQ0FwQkYsRUF5QkUsTUFBQyx5Q0FBRCxDQUFNLElBQU47QUFBVyxPQUFHLEVBQUM7QUFBZixLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUM7QUFBWCxLQUNFLE1BQUMsMERBQUQ7QUFDRSxNQUFFLEVBQUM7QUFETCxJQURGLENBREYsQ0F6QkYsRUE4QkUsTUFBQyx5Q0FBRCxDQUFNLElBQU47QUFBVyxPQUFHLEVBQUM7QUFBZixLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUM7QUFBWCxLQUNFLE1BQUMsMERBQUQ7QUFDRSxNQUFFLEVBQUM7QUFETCxJQURGLENBREYsQ0E5QkYsRUFtQ0UsTUFBQyx5Q0FBRCxDQUFNLElBQU47QUFBVyxPQUFHLEVBQUM7QUFBZixLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUM7QUFBWCxLQUNFLE1BQUMsMERBQUQ7QUFDRSxNQUFFLEVBQUM7QUFETCxJQURGLENBREYsQ0FuQ0YsRUF3Q0UsTUFBQyx5Q0FBRCxDQUFNLElBQU47QUFBVyxPQUFHLEVBQUM7QUFBZixLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUM7QUFBWCxLQUNFLE1BQUMsMERBQUQ7QUFDRSxNQUFFLEVBQUM7QUFETCxJQURGLENBREYsQ0F4Q0YsRUE2Q0UsTUFBQyx5Q0FBRCxDQUFNLElBQU47QUFBVyxPQUFHLEVBQUM7QUFBZixLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUM7QUFBWCxLQUNFLE1BQUMsMERBQUQ7QUFDRSxNQUFFLEVBQUM7QUFETCxJQURGLENBREYsQ0E3Q0YsRUFrREUsTUFBQyx5Q0FBRCxDQUFNLElBQU47QUFBVyxPQUFHLEVBQUM7QUFBZixLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUM7QUFBWCxLQUNFLE1BQUMsMERBQUQ7QUFDRSxNQUFFLEVBQUM7QUFETCxJQURGLENBREYsQ0FsREYsRUF1REUsTUFBQyx5Q0FBRCxDQUFNLElBQU47QUFBVyxPQUFHLEVBQUM7QUFBZixLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUM7QUFBWCxLQUNFLE1BQUMsMERBQUQ7QUFDRSxNQUFFLEVB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Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSwyRDs7Ozs7Ozs7Ozs7QUNBQSwyRDs7Ozs7Ozs7Ozs7QUNBQSwyRDs7Ozs7Ozs7Ozs7QUNBQSwyRDs7Ozs7Ozs7Ozs7QUNBQSwyRDs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQyIsImZpbGUiOiJwYWdlcy9tYWluL2NybS9pZmlzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgY2h1bmtzXG4gXHQvLyBcIjBcIiBtZWFucyBcImFscmVhZHkgbG9hZGVkXCJcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwicGFnZXMvbWFpbi9jcm0vaWZpc1wiOiAwXG4gXHR9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuIFx0Ly8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuIFx0Ly8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSBmdW5jdGlvbiByZXF1aXJlRW5zdXJlKGNodW5rSWQpIHtcbiBcdFx0dmFyIHByb21pc2VzID0gW107XG5cblxuIFx0XHQvLyByZXF1aXJlKCkgY2h1bmsgbG9hZGluZyBmb3IgamF2YXNjcmlwdFxuXG4gXHRcdC8vIFwiMFwiIGlzIHRoZSBzaWduYWwgZm9yIFwiYWxyZWFkeSBsb2FkZWRcIlxuIFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gIT09IDApIHtcbiBcdFx0XHR2YXIgY2h1bmsgPSByZXF1aXJlKFwiLi4vLi4vLi4vXCIgKyAoe31bY2h1bmtJZF18fGNodW5rSWQpICsgXCIuanNcIik7XG4gXHRcdFx0dmFyIG1vcmVNb2R1bGVzID0gY2h1bmsubW9kdWxlcywgY2h1bmtJZHMgPSBjaHVuay5pZHM7XG4gXHRcdFx0Zm9yKHZhciBtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCBjaHVua0lkcy5sZW5ndGg7IGkrKylcbiBcdFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkc1tpXV0gPSAwO1xuIFx0XHR9XG4gXHRcdHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG4gXHR9O1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIHVuY2F1Z2h0IGVycm9yIGhhbmRsZXIgZm9yIHdlYnBhY2sgcnVudGltZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vZSA9IGZ1bmN0aW9uKGVycikge1xuIFx0XHRwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uKCkge1xuIFx0XHRcdHRocm93IGVycjsgLy8gY2F0Y2ggdGhpcyBlcnJvciBieSB1c2luZyBpbXBvcnQoKS5jYXRjaCgpXG4gXHRcdH0pO1xuIFx0fTtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9tYWluL2NybS9pZmlzLmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIpOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtBdmF0YXJ9IGZyb20gXCJhbnRkXCI7XHJcblxyXG5cclxuY29uc3QgTm90aWZpY2F0aW9uSXRlbSA9ICh7bm90aWZpY2F0aW9ufSkgPT4ge1xyXG4gIGNvbnN0IHtpY29uLCBpbWFnZSwgdGl0bGUsIHRpbWV9ID0gbm90aWZpY2F0aW9uO1xyXG4gIHJldHVybiAoXHJcblxyXG4gICAgPGxpIGNsYXNzTmFtZT1cImd4LW1lZGlhXCI+XHJcbiAgICAgIDxBdmF0YXIgY2xhc3NOYW1lPVwiZ3gtc2l6ZS00MCBneC1tci0zXCJcclxuICAgICAgICAgICAgICBhbHQ9e2ltYWdlfVxyXG4gICAgICAgICAgICAgIHNyYz17aW1hZ2V9Lz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1tZWRpYS1ib2R5IGd4LWFsaWduLXNlbGYtY2VudGVyXCI+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiZ3gtZnMtc20gZ3gtbWItMFwiPnt0aXRsZX08L3A+XHJcbiAgICAgICAgPGkgY2xhc3NOYW1lPXtgaWNvbiBpY29uLSR7aWNvbn0gZ3gtcHItMmB9Lz4gPHNwYW4gY2xhc3NOYW1lPVwiZ3gtbWV0YS1kYXRlXCI+PHNtYWxsPnt0aW1lfTwvc21hbGw+PC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbGk+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5vdGlmaWNhdGlvbkl0ZW07XHJcbiIsImV4cG9ydCBjb25zdCBub3RpZmljYXRpb25zID0gW1xyXG5cclxuICB7XHJcbiAgICBpbWFnZTogJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8xNTB4MTUwJyxcclxuICAgIHRpdGxlOiBcIlN0ZWxsYSBKb2huc29uIGhhcyByZWNlbnRseSBwb3N0ZWQgYW4gYWxidW1cIixcclxuICAgIHRpbWU6IFwiNDoxMCBQTVwiLFxyXG4gICAgaWNvbjogXCJ0aHVtYi11cCBneC10ZXh0LWJsdWVcIixcclxuICB9LCB7XHJcbiAgICBpbWFnZTogJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8xNTB4MTUwJyxcclxuICAgIHRpdGxlOiBcIkFsZXggQnJvd24gaGFzIHNoYXJlZCBNYXJ0aW4gR3VwdGlsJ3MgcG9zdFwiLFxyXG4gICAgdGltZTogXCI1OjE4IFBNXCIsXHJcbiAgICBpY29uOiBcImNoYXQgZ3gtdGV4dC1ncmV5XCIsXHJcbiAgfSwge1xyXG4gICAgaW1hZ2U6ICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vNjQweDQyMCcsXHJcbiAgICB0aXRsZTogXCJEb21uaWMgQnJvd24gaGFzIHNlbnQgeW91IGEgZ3JvdXAgaW52aXRhdGlvbiBmb3IgR2xvYmFsIEhlYWx0aFwiLFxyXG4gICAgdGltZTogXCI1OjM2IFBNXCIsXHJcbiAgICBpY29uOiBcImJpcnRoZGF5IHRleHQtaW5mb1wiLFxyXG4gIH0sIHtcclxuICAgIGltYWdlOiAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzE1MHgxNTAnLFxyXG4gICAgdGl0bGU6IFwiSm9obiBTbWl0aCBoYXMgYmlydGhkYXkgdG9kYXlcIixcclxuICAgIHRpbWU6IFwiNTo1NCBQTVwiLFxyXG4gICAgaWNvbjogXCJiaXJ0aGRheSBneC10ZXh0LXdhcm5pbmdcIixcclxuICB9LCB7XHJcbiAgICBpbWFnZTogJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8xNTB4MTUwJyxcclxuICAgIHRpdGxlOiBcIkNocmlzIGhhcyB1cGRhdGVkIGhpcyBwcm9maWxlIHBpY3R1cmVcIixcclxuICAgIHRpbWU6IFwiNToyNSBQTVwiLFxyXG4gICAgaWNvbjogXCJwcm9maWxlIGd4LXRleHQtZ3JleVwiLFxyXG4gIH1cclxuXTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTm90aWZpY2F0aW9uSXRlbSBmcm9tIFwiLi9Ob3RpZmljYXRpb25JdGVtXCI7XHJcbmltcG9ydCB7bm90aWZpY2F0aW9uc30gZnJvbSBcIi4vZGF0YVwiO1xyXG5pbXBvcnQgQ3VzdG9tU2Nyb2xsYmFycyBmcm9tIFwiLi4vLi4vLi4vdXRpbC9DdXN0b21TY3JvbGxiYXJzXCI7XHJcblxyXG5cclxuY29uc3QgQXBwTm90aWZpY2F0aW9uID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LXBvcG92ZXItaGVhZGVyXCI+XHJcbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cImd4LW1iLTBcIj5Ob3RpZmljYXRpb25zPC9oMz5cclxuICAgICAgICA8aSBjbGFzc05hbWU9XCJneC1pY29uLWJ0biBpY29uIGljb24tY2hhcnZsZXQtZG93blwiLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxDdXN0b21TY3JvbGxiYXJzIGNsYXNzTmFtZT1cImd4LXBvcG92ZXItc2Nyb2xsXCI+XHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImd4LXN1Yi1wb3BvdmVyXCI+XHJcbiAgICAgICAgICB7bm90aWZpY2F0aW9ucy5tYXAoKG5vdGlmaWNhdGlvbiwgaW5kZXgpID0+IDxOb3RpZmljYXRpb25JdGVtIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvbj17bm90aWZpY2F0aW9ufS8+KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvQ3VzdG9tU2Nyb2xsYmFycz5cclxuICAgIDwvPlxyXG4gIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcE5vdGlmaWNhdGlvbjtcclxuXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IENpcmN1bGFyUHJvZ3Jlc3MgPSAoe2NsYXNzTmFtZX0pID0+IDxkaXYgY2xhc3NOYW1lPXtgbG9hZGVyICR7Y2xhc3NOYW1lfWB9PlxyXG4gIDxpbWcgc3JjPVwiL2ltYWdlcy9sb2FkZXIuc3ZnXCIgYWx0PVwibG9hZGVyXCIgc3R5bGU9e3toZWlnaHQ6IDYwfX0vPlxyXG48L2Rpdj47XHJcbmV4cG9ydCBkZWZhdWx0IENpcmN1bGFyUHJvZ3Jlc3M7XHJcbkNpcmN1bGFyUHJvZ3Jlc3MuZGVmYXVsdFByb3BzID0ge1xyXG4gIGNsYXNzTmFtZTogJydcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7QXZhdGFyfSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuY29uc3QgTm90aWZpY2F0aW9uSXRlbSA9ICh7bm90aWZpY2F0aW9ufSkgPT4ge1xyXG4gIGNvbnN0IHtpbWFnZSwgYmFkZ2UsIG5hbWUsIHRpbWUsIG1lc3NhZ2V9ID0gbm90aWZpY2F0aW9uO1xyXG4gIHJldHVybiAoXHJcbiAgICA8bGkgY2xhc3NOYW1lPVwiZ3gtbWVkaWFcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC11c2VyLXRodW1iIGd4LW1yLTNcIj5cclxuICAgICAgICA8QXZhdGFyIGNsYXNzTmFtZT1cImd4LXNpemUtNDBcIlxyXG4gICAgICAgICAgICAgICAgYWx0PXtpbWFnZX1cclxuICAgICAgICAgICAgICAgIHNyYz17aW1hZ2V9Lz5cclxuICAgICAgICB7YmFkZ2UgPiAwID8gPHNwYW4gY2xhc3NOYW1lPVwiZ3gtYmFkZ2UgZ3gtYmFkZ2UtZGFuZ2VyIGd4LXRleHQtd2hpdGUgZ3gtcm91bmRlZC1jaXJjbGVcIj57YmFkZ2V9PC9zcGFuPiA6IG51bGx9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LW1lZGlhLWJvZHlcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWZsZXgtcm93IGd4LWp1c3RpZnktY29udGVudC1iZXR3ZWVuIGd4LWFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImd4LXRleHQtY2FwaXRhbGl6ZSBneC11c2VyLW5hbWUgZ3gtbWItMFwiPjxzcGFuIGNsYXNzTmFtZT1cImd4LWxpbmtcIj57bmFtZX08L3NwYW4+PC9oNT5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImd4LW1ldGEtZGF0ZVwiPjxzbWFsbD57dGltZX08L3NtYWxsPjwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJneC1mcy1zbVwiPnttZXNzYWdlfTwvcD5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJneC1idG4gZ3gtYnRuLXNtIGd4LXRvcDIgZ3gtdGV4dC1tdXRlZFwiPjxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1yZXBseSBneC1wci0yXCIvPlJlcGx5PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImd4LWJ0biBneC1idG4tc20gZ3gtdG9wMiBneC10ZXh0LW11dGVkXCI+PGlcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImljb24gaWNvbi1jdXN0b20tdmlldyBneC1wci0yXCIvPlJlYWQ8L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9saT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTm90aWZpY2F0aW9uSXRlbTtcclxuIiwiZXhwb3J0IGNvbnN0IG5vdGlmaWNhdGlvbnMgPSBbXHJcbiAge1xyXG4gICAgaWQ6IDEsXHJcbiAgICBpbWFnZTogXCJodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMTUwXCIsXHJcbiAgICBuYW1lOiBcIkRvbW5pYyBCcm93blwiLFxyXG4gICAgdGltZTogXCI2OjE5IFBNXCIsXHJcbiAgICBtZXNzYWdlOiBcIlRoZXJlIGFyZSBtYW55IHZhcmlhdGlvbnMgb2YgcGFzc2FnZXMgb2YuLi5cIixcclxuICAgIGJhZGdlOiA1XHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMixcclxuICAgIGltYWdlOiBcImh0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8xNTBcIixcclxuICAgIG5hbWU6IFwiSm9obiBTbWl0aFwiLFxyXG4gICAgdGltZTogXCI0OjE4IFBNXCIsXHJcbiAgICBtZXNzYWdlOiBcIkxvcmVtIElwc3VtIGlzIHNpbXBseSBkdW1teSB0ZXh0IG9mIHRoZS4uLlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDMsXHJcbiAgICBpbWFnZTpcImh0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8xNTBcIixcclxuICAgIG5hbWU6IFwiSm9obiBTbWl0aFwiLFxyXG4gICAgdGltZTogXCI3OjEwIFBNXCIsXHJcbiAgICBtZXNzYWdlOiBcIlRoZSBwb2ludCBvZiB1c2luZyBMb3JlbSBJcHN1bSBpcyB0aGF0IGl0IGhhcyBhLi4uXCIsXHJcbiAgICBiYWRnZTogOFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDQsXHJcbiAgICBpbWFnZTogXCJodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMTUwXCIsXHJcbiAgICBuYW1lOiBcImFsZXggZG9sZ292ZVwiLFxyXG4gICAgdGltZTogXCI1OjEwIFBNXCIsXHJcbiAgICBtZXNzYWdlOiBcIkl0IGlzIGEgbG9uZyBlc3RhYmxpc2hlZCBmYWN0IHRoYXQgYSByZWFkZXIgd2lsbC4uLlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDUsXHJcbiAgICBpbWFnZTogXCJodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMTUwXCIsXHJcbiAgICBuYW1lOiBcIkRvbW5pYyBIYXJyaXNcIixcclxuICAgIHRpbWU6IFwiNzozNSBQTVwiLFxyXG4gICAgbWVzc2FnZTogXCJBbGwgdGhlIExvcmVtIElwc3VtIGdlbmVyYXRvcnMgb24gdGhlLi4uXCIsXHJcbiAgICBiYWRnZTogM1xyXG4gIH1cclxuXTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTm90aWZpY2F0aW9uSXRlbSBmcm9tIFwiLi9Ob3RpZmljYXRpb25JdGVtXCI7XHJcbmltcG9ydCB7bm90aWZpY2F0aW9uc30gZnJvbSBcIi4vZGF0YVwiO1xyXG5pbXBvcnQgQ3VzdG9tU2Nyb2xsYmFycyBmcm9tICcuLi8uLi8uLi91dGlsL0N1c3RvbVNjcm9sbGJhcnMnXHJcblxyXG5jb25zdCBNYWlsTm90aWZpY2F0aW9uID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LXBvcG92ZXItaGVhZGVyXCI+XHJcbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cImd4LW1iLTBcIj5NZXNzYWdlczwvaDM+XHJcbiAgICAgICAgPGkgY2xhc3NOYW1lPVwiZ3gtaWNvbi1idG4gaWNvbiBpY29uLWNoYXJ2bGV0LWRvd25cIi8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8Q3VzdG9tU2Nyb2xsYmFycyBjbGFzc05hbWU9XCJneC1wb3BvdmVyLXNjcm9sbFwiPlxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJneC1zdWItcG9wb3ZlclwiPlxyXG4gICAgICAgICAge25vdGlmaWNhdGlvbnMubWFwKChub3RpZmljYXRpb24sIGluZGV4KSA9PiA8Tm90aWZpY2F0aW9uSXRlbSBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RpZmljYXRpb249e25vdGlmaWNhdGlvbn0vPil9XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9DdXN0b21TY3JvbGxiYXJzPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpbE5vdGlmaWNhdGlvbjtcclxuXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IFNlYXJjaEJveCA9ICh7c3R5bGVOYW1lLCBwbGFjZWhvbGRlciwgb25DaGFuZ2UsIHZhbHVlfSkgPT4ge1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2BneC1zZWFyY2gtYmFyICR7c3R5bGVOYW1lfWB9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWZvcm0tZ3JvdXBcIj5cclxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiYW50LWlucHV0XCIgdHlwZT1cInNlYXJjaFwiIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn0gb25DaGFuZ2U9e29uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9Lz5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJneC1zZWFyY2gtaWNvbiBneC1wb2ludGVyXCI+PGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLXNlYXJjaFwiLz48L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hCb3g7XHJcblxyXG5TZWFyY2hCb3guZGVmYXVsdFByb3BzID0ge1xyXG4gIHN0eWxlTmFtZTogXCJcIixcclxuICB2YWx1ZTogXCJcIixcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHtBdmF0YXIsIFBvcG92ZXJ9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7dXNlclNpZ25PdXR9IGZyb20gXCIuLi8uLi8uLi9yZWR1eC9hY3Rpb25zL0F1dGhcIjtcclxuXHJcbmNsYXNzIFVzZXJJbmZvIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgdXNlck1lbnVPcHRpb25zID0gKFxyXG4gICAgICA8dWwgY2xhc3NOYW1lPVwiZ3gtdXNlci1wb3BvdmVyXCI+XHJcbiAgICAgICAgPGxpPk15IEFjY291bnQ8L2xpPlxyXG4gICAgICAgIDxsaT5Db25uZWN0aW9uczwvbGk+XHJcbiAgICAgICAgPGxpIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMudXNlclNpZ25PdXQoKX0+TG9nb3V0XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgPC91bD5cclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFBvcG92ZXIgb3ZlcmxheUNsYXNzTmFtZT1cImd4LXBvcG92ZXItaG9yaXphbnRhbFwiIHBsYWNlbWVudD1cImJvdHRvbVJpZ2h0XCIgY29udGVudD17dXNlck1lbnVPcHRpb25zfVxyXG4gICAgICAgICAgICAgICB0cmlnZ2VyPVwiY2xpY2tcIj5cclxuICAgICAgICA8QXZhdGFyIHNyYz17XCIvaW1hZ2VzL2ltYWdlcy9hdmF0YXIvZG9tbmljLWhhcnJpcy5wbmdcIn1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImd4LWF2YXRhciBneC1wb2ludGVyXCIgYWx0PVwiXCIvPlxyXG4gICAgICA8L1BvcG92ZXI+XHJcbiAgICApXHJcblxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChudWxsLCB7dXNlclNpZ25PdXR9KShVc2VySW5mbyk7XHJcbiIsIi8vIGltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuLy8gaW1wb3J0IHtCdXR0b24sIERyYXdlciwgUmFkaW99IGZyb20gXCJhbnRkXCI7XHJcbi8vIGltcG9ydCB7dXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuLy8gaW1wb3J0IEN1c3RvbVNjcm9sbGJhcnMgZnJvbSBcIi4uLy4uLy4uL3V0aWwvQ3VzdG9tU2Nyb2xsYmFyc1wiO1xyXG4vLyBpbXBvcnQge3NldFRoZW1lVHlwZX0gZnJvbSBcIi4uLy4uLy4uL3JlZHV4L2FjdGlvbnMvU2V0dGluZ1wiO1xyXG4vL1xyXG4vLyBpbXBvcnQge1xyXG4vLyAgIEJMVUUsXHJcbi8vICAgQkxVRV9EQVJLX1RFWFRfQ09MT1IsXHJcbi8vICAgQkxVRV9TRUMsXHJcbi8vICAgREFSS19CTFVFLFxyXG4vLyAgIERBUktfQkxVRV9EQVJLX1RFWFRfQ09MT1IsXHJcbi8vICAgREFSS19CTFVFX1NFQyxcclxuLy8gICBERUVQX09SQU5HRSxcclxuLy8gICBERUVQX09SQU5HRV9EQVJLX1RFWFRfQ09MT1IsXHJcbi8vICAgREVFUF9PUkFOR0VfU0VDLFxyXG4vLyAgIExBWU9VVF9UWVBFX0JPWEVELFxyXG4vLyAgIExBWU9VVF9UWVBFX0ZSQU1FRCxcclxuLy8gICBMQVlPVVRfVFlQRV9GVUxMLFxyXG4vLyAgIExJR0hUX0JMVUUsXHJcbi8vICAgTElHSFRfQkxVRV9EQVJLX1RFWFRfQ09MT1IsXHJcbi8vICAgTElHSFRfQkxVRV9TRUMsXHJcbi8vICAgTElHSFRfUFVSUExFLFxyXG4vLyAgIExJR0hUX1BVUlBMRV8xLFxyXG4vLyAgIExJR0hUX1BVUlBMRV8xX0RBUktfVEVYVF9DT0xPUixcclxuLy8gICBMSUdIVF9QVVJQTEVfMV9TRUMsXHJcbi8vICAgTElHSFRfUFVSUExFXzIsXHJcbi8vICAgTElHSFRfUFVSUExFXzJfREFSS19URVhUX0NPTE9SLFxyXG4vLyAgIExJR0hUX1BVUlBMRV8yX1NFQyxcclxuLy8gICBMSUdIVF9QVVJQTEVfREFSS19URVhUX0NPTE9SLFxyXG4vLyAgIExJR0hUX1BVUlBMRV9TRUMsXHJcbi8vICAgTkFWX1NUWUxFX0FCT1ZFX0hFQURFUixcclxuLy8gICBOQVZfU1RZTEVfQkVMT1dfSEVBREVSLFxyXG4vLyAgIE5BVl9TVFlMRV9EQVJLX0hPUklaT05UQUwsXHJcbi8vICAgTkFWX1NUWUxFX0RFRkFVTFRfSE9SSVpPTlRBTCxcclxuLy8gICBOQVZfU1RZTEVfRFJBV0VSLFxyXG4vLyAgIE5BVl9TVFlMRV9GSVhFRCxcclxuLy8gICBOQVZfU1RZTEVfSU5TSURFX0hFQURFUl9IT1JJWk9OVEFMLFxyXG4vLyAgIE5BVl9TVFlMRV9NSU5JX1NJREVCQVIsXHJcbi8vICAgTkFWX1NUWUxFX05PX0hFQURFUl9FWFBBTkRFRF9TSURFQkFSLFxyXG4vLyAgIE5BVl9TVFlMRV9OT19IRUFERVJfTUlOSV9TSURFQkFSLFxyXG4vLyAgIE9SQU5HRSxcclxuLy8gICBPUkFOR0VfREFSS19URVhUX0NPTE9SLFxyXG4vLyAgIE9SQU5HRV9TRUMsXHJcbi8vICAgUkVELFxyXG4vLyAgIFJFRF9EQVJLX1RFWFRfQ09MT1IsXHJcbi8vICAgUkVEX1NFQyxcclxuLy8gICBUSEVNRV9UWVBFX0RBUkssXHJcbi8vICAgVEhFTUVfVFlQRV9MSVRFLFxyXG4vLyAgIFRIRU1FX1RZUEVfU0VNSV9EQVJLXHJcbi8vIH0gZnJvbSBcIi4uLy4uLy4uL2NvbnN0YW50cy9UaGVtZVNldHRpbmdcIjtcclxuLy8gaW1wb3J0IHtvbk5hdlN0eWxlQ2hhbmdlfSBmcm9tIFwiLi4vLi4vLi4vcmVkdXgvYWN0aW9uc1wiO1xyXG4vL1xyXG4vLyBjb25zdCBDdXN0b21pemVyU3lzdGVtID0gKCkgPT4ge1xyXG4vL1xyXG4vLyAgIGNvbnN0IFtpc0N1c3RvbWl6ZXJPcGVuZWQsIHNldElzQ3VzdG9taXplck9wZW5lZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbi8vICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4vL1xyXG4vLyAgIGNvbnN0IHRoZW1lVHlwZSA9IHVzZVNlbGVjdG9yKCh7c2V0dGluZ3N9KSA9PiBzZXR0aW5ncy50aGVtZVR5cGUpO1xyXG4vLyAgIGNvbnN0IHRoZW1lQ29sb3IgPSB1c2VTZWxlY3Rvcigoe3NldHRpbmdzfSkgPT4gc2V0dGluZ3MudGhlbWVDb2xvcik7XHJcbi8vICAgY29uc3QgbmF2U3R5bGUgPSB1c2VTZWxlY3Rvcigoe3NldHRpbmdzfSkgPT4gc2V0dGluZ3MubmF2U3R5bGUpO1xyXG4vLyAgIGNvbnN0IGxheW91dFR5cGUgPSB1c2VTZWxlY3Rvcigoe3NldHRpbmdzfSkgPT4gc2V0dGluZ3MubGF5b3V0VHlwZSk7XHJcbi8vXHJcbi8vICAgY29uc29sZS5sb2coXCIgaW4gIGN1c3RvbWl6ZXJcIiwgdGhlbWVDb2xvcik7XHJcbi8vXHJcbi8vICAgY29uc3QgaGFuZGxlQ29sb3JDaGFuZ2UgPSAoZmlsZW5hbWUpID0+IHtcclxuLy8gICAgIC8vIGNvbnNvbGUubG9nKFwiZmlsZW5hbWVcIiwgZmlsZW5hbWUpO1xyXG4vLyAgICAgLy8gbGV0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XHJcbi8vICAgICAvLyBsaW5rLnR5cGUgPSAndGV4dC9jc3MnO1xyXG4vLyAgICAgLy8gbGluay5yZWwgPSAnc3R5bGVzaGVldCc7XHJcbi8vICAgICAvLyBsaW5rLmNsYXNzTmFtZSA9ICdneC1zdHlsZSc7XHJcbi8vICAgICAvLyBsaW5rLmhyZWYgPSBgL2Nzcy8ke2ZpbGVuYW1lfS5jc3NgO1xyXG4vL1xyXG4vLyAgICAgLy8gc2V0VGltZW91dCgoKSA9PiB7XHJcbi8vICAgICAvLyAgIGNvbnN0IGNoaWxkcmVuID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZ3gtc3R5bGUnKTtcclxuLy8gICAgIC8vXHJcbi8vICAgICAvLyAgIGlmIChjaGlsZHJlbi5sZW5ndGggPiAxKSB7XHJcbi8vICAgICAvLyAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNoaWxkcmVuLmxlbmd0aDsgaW5kZXgrKykge1xyXG4vLyAgICAgLy8gICAgICAgaWYgKChpbmRleCArIDEpIDwgY2hpbGRyZW4ubGVuZ3RoKSB7XHJcbi8vICAgICAvLyAgICAgICAgIGNvbnN0IGNoaWxkID0gY2hpbGRyZW5baW5kZXhdO1xyXG4vLyAgICAgLy8gICAgICAgICBjaGlsZC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGNoaWxkKTtcclxuLy8gICAgIC8vICAgICAgIH1cclxuLy8gICAgIC8vICAgICB9XHJcbi8vICAgICAvLyAgIH1cclxuLy8gICAgIC8vIH0sIDEwMDAwKTtcclxuLy8gICAgIC8vIGNvbnNvbGUubG9nKFwibXkgbGluayBcIixsaW5rKTtcclxuLy8gICAgIC8vIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobGluayk7XHJcbi8vICAgICAvLyBkaXNwYXRjaChzZXRUaGVtZUNvbG9yKGZpbGVuYW1lKSk7XHJcbi8vICAgfTtcclxuLy9cclxuLy8gICBjb25zdCB0b2dnbGVDdXN0b21pemVyID0gKCkgPT4ge1xyXG4vLyAgICAgc2V0SXNDdXN0b21pemVyT3BlbmVkKCFpc0N1c3RvbWl6ZXJPcGVuZWQpO1xyXG4vLyAgIH07XHJcbi8vXHJcbi8vICAgY29uc3Qgb25UaGVtZVR5cGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4vLyAgICAgZGlzcGF0Y2goc2V0VGhlbWVUeXBlKGUudGFyZ2V0LnZhbHVlKSk7XHJcbi8vICAgfTtcclxuLy9cclxuLy8gICBjb25zdCBvbk5hdlN0eWxlQ2hhbmdlcyA9IChuYXZTdHlsZSkgPT4ge1xyXG4vLyAgICAgZGlzcGF0Y2gob25OYXZTdHlsZUNoYW5nZShuYXZTdHlsZSkpO1xyXG4vLyAgIH07XHJcbi8vXHJcbi8vICAgY29uc3QgZ2V0Q3VzdG9taXplckNvbnRlbnQgPSAoKSA9PiB7XHJcbi8vXHJcbi8vICAgICAvLyBpZiAodGhlbWVUeXBlID09PSBUSEVNRV9UWVBFX0RBUkspIHtcclxuLy8gICAgIC8vICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdkYXJrLXRoZW1lJyk7XHJcbi8vICAgICAvLyAgIGxldCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xyXG4vLyAgICAgLy8gICBsaW5rLnR5cGUgPSAndGV4dC9jc3MnO1xyXG4vLyAgICAgLy8gICBsaW5rLnJlbCA9ICdzdHlsZXNoZWV0JztcclxuLy8gICAgIC8vICAgbGluay5ocmVmID0gXCIvY3NzL2RhcmtfdGhlbWUuY3NzXCI7XHJcbi8vICAgICAvLyAgIGxpbmsuY2xhc3NOYW1lID0gJ3N0eWxlX2RhcmtfdGhlbWUnO1xyXG4vLyAgICAgLy8gICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGxpbmspO1xyXG4vLyAgICAgLy8gfSBlbHNlIGlmIChkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucygnZGFyay10aGVtZScpKSB7XHJcbi8vICAgICAvLyAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnZGFyay10aGVtZScpO1xyXG4vLyAgICAgLy8gICBjb25zdCBjaGlsZHJlbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3N0eWxlX2RhcmtfdGhlbWUnKTtcclxuLy8gICAgIC8vICAgaWYgKGNoaWxkcmVuLmxlbmd0aCA+IDEpIHtcclxuLy8gICAgIC8vICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY2hpbGRyZW4ubGVuZ3RoOyBpbmRleCsrKSB7XHJcbi8vICAgICAvLyAgICAgICBpZiAoaW5kZXggPCBjaGlsZHJlbi5sZW5ndGgpIHtcclxuLy8gICAgIC8vICAgICAgICAgY29uc3QgY2hpbGQgPSBjaGlsZHJlbltpbmRleF07XHJcbi8vICAgICAvLyAgICAgICAgIGNoaWxkLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY2hpbGQpO1xyXG4vLyAgICAgLy8gICAgICAgfVxyXG4vLyAgICAgLy8gICAgIH1cclxuLy8gICAgIC8vICAgfVxyXG4vLyAgICAgfVxyXG4vL1xyXG4vLyAgICAgcmV0dXJuIDxDdXN0b21TY3JvbGxiYXJzIGNsYXNzTmFtZT1cImd4LWN1c3RvbWl6ZXJcIj5cclxuLy8gICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1jdXN0b21pemVyLWl0ZW1cIj5cclxuLy8gICAgICAgICA8aDYgY2xhc3NOYW1lPVwiZ3gtbWItMyBneC10ZXh0LXVwcGVyY2FzZVwiPlRoZW1lPC9oNj5cclxuLy8gICAgICAgICA8UmFkaW8uR3JvdXAgdmFsdWU9e3RoZW1lVHlwZX0gb25DaGFuZ2U9e29uVGhlbWVUeXBlQ2hhbmdlfT5cclxuLy8gICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9e1RIRU1FX1RZUEVfTElURX0+TGl0ZTwvUmFkaW8uQnV0dG9uPlxyXG4vLyAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17VEhFTUVfVFlQRV9TRU1JX0RBUkt9PlNlbWkgRGFyazwvUmFkaW8uQnV0dG9uPlxyXG4vLyAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17VEhFTUVfVFlQRV9EQVJLfT5EYXJrPC9SYWRpby5CdXR0b24+XHJcbi8vICAgICAgICAgPC9SYWRpby5Hcm91cD5cclxuLy8gICAgICAgPC9kaXY+XHJcbi8vICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtY3VzdG9taXplci1pdGVtXCI+XHJcbi8vICAgICAgICAge2dldFByZXNldENvbG9ycyh0aGVtZUNvbG9yKX1cclxuLy8gICAgICAgPC9kaXY+XHJcbi8vXHJcbi8vICAgICAgIDxoNiBjbGFzc05hbWU9XCJneC1tYi0zIGd4LXRleHQtdXBwZXJjYXNlXCI+TmF2IFN0eWxlPC9oNj5cclxuLy9cclxuLy8gICAgICAge2dldE5hdlN0eWxlcyhuYXZTdHlsZSl9XHJcbi8vXHJcbi8vICAgICAgIDxoNiBjbGFzc05hbWU9XCJneC1tYi0zIGd4LXRleHQtdXBwZXJjYXNlXCI+TGF5b3V0PC9oNj5cclxuLy9cclxuLy8gICAgICAge2dldExheW91dHNUeXBlcyhsYXlvdXRUeXBlKX1cclxuLy8gICAgIDwvQ3VzdG9tU2Nyb2xsYmFycz5cclxuLy8gICB9O1xyXG4vL1xyXG4vLyAgIGNvbnN0IGhhbmRsZVRoZW1lQ29sb3IgPSAoZmlsZU5hbWUpID0+IHtcclxuLy8gICAgIC8vIGhhbmRsZUNvbG9yQ2hhbmdlKGZpbGVOYW1lKTtcclxuLy8gICB9O1xyXG4vL1xyXG4vLyAgIGNvbnN0IGhhbmRsZUxheW91dFR5cGVzID0gKGxheW91dFR5cGUpID0+IHtcclxuLy8gICAgIC8vIGRpc3BhdGNoKG9uTGF5b3V0VHlwZUNoYW5nZShsYXlvdXRUeXBlKSk7XHJcbi8vICAgfTtcclxuLy9cclxuLy8gICBjb25zdCBnZXRQcmVzZXRDb2xvcnMgPSAodGhlbWVDb2xvcikgPT4ge1xyXG4vLyAgICAgcmV0dXJuIDx1bCBjbGFzc05hbWU9XCJneC1jb2xvci1vcHRpb24gZ3gtbGlzdC1pbmxpbmVcIj5cclxuLy9cclxuLy8gICAgICAgPGxpPlxyXG4vLyAgICAgICAgIDxzcGFuXHJcbi8vICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVUaGVtZUNvbG9yKFwibGlnaHRfcHVycGxlXCIpfVxyXG4vLyAgICAgICAgICAgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IExJR0hUX1BVUlBMRV9TRUMsIGNvbG9yOiBMSUdIVF9QVVJQTEVfREFSS19URVhUX0NPTE9SfX1cclxuLy8gICAgICAgICAgIGNsYXNzTmFtZT17YGd4LWxpbmsgZ3gtY29sb3ItbGlnaHQtcHVycGxlICR7dGhlbWVDb2xvciA9PT0gTElHSFRfUFVSUExFICYmICdhY3RpdmUnfWB9Lz5cclxuLy8gICAgICAgPC9saT5cclxuLy8gICAgICAgPGxpPlxyXG4vLyAgICAgICAgIDxzcGFuXHJcbi8vICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVUaGVtZUNvbG9yKFwicmVkXCIpfVxyXG4vLyAgICAgICAgICAgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IFJFRF9TRUMsIGNvbG9yOiBSRURfREFSS19URVhUX0NPTE9SfX1cclxuLy8gICAgICAgICAgIGNsYXNzTmFtZT17YGd4LWxpbmsgZ3gtY29sb3ItcmVkICR7dGhlbWVDb2xvciA9PT0gUkVEICYmICdhY3RpdmUnfWB9Lz5cclxuLy8gICAgICAgPC9saT5cclxuLy8gICAgICAgPGxpPlxyXG4vLyAgICAgICAgIDxzcGFuXHJcbi8vICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVUaGVtZUNvbG9yKFwiYmx1ZVwiKX1cclxuLy8gICAgICAgICAgIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBCTFVFX1NFQywgY29sb3I6IEJMVUVfREFSS19URVhUX0NPTE9SfX1cclxuLy8gICAgICAgICAgIGNsYXNzTmFtZT17YGd4LWxpbmsgZ3gtY29sb3ItYmx1ZSAke3RoZW1lQ29sb3IgPT09IEJMVUUgJiYgJ2FjdGl2ZSd9YH0vPlxyXG4vLyAgICAgICA8L2xpPlxyXG4vLyAgICAgICA8bGk+XHJcbi8vICAgICAgICAgPHNwYW5cclxuLy8gICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVRoZW1lQ29sb3IoXCJkYXJrX2JsdWVcIil9XHJcbi8vICAgICAgICAgICBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogREFSS19CTFVFX1NFQywgY29sb3I6IERBUktfQkxVRV9EQVJLX1RFWFRfQ09MT1J9fVxyXG4vLyAgICAgICAgICAgY2xhc3NOYW1lPXtgZ3gtbGluayBneC1jb2xvci1kYXJrLWJsdWUgJHt0aGVtZUNvbG9yID09PSBEQVJLX0JMVUUgJiYgJ2FjdGl2ZSd9YH0vPlxyXG4vLyAgICAgICA8L2xpPlxyXG4vL1xyXG4vLyAgICAgICA8bGk+XHJcbi8vICAgICAgICAgPHNwYW5cclxuLy8gICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVRoZW1lQ29sb3IoXCJvcmFuZ2VcIil9XHJcbi8vICAgICAgICAgICBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogT1JBTkdFX1NFQywgY29sb3I6IE9SQU5HRV9EQVJLX1RFWFRfQ09MT1J9fVxyXG4vLyAgICAgICAgICAgY2xhc3NOYW1lPXtgZ3gtbGluayBneC1jb2xvci1vcmFuZ2UgJHt0aGVtZUNvbG9yID09PSBPUkFOR0UgJiYgJ2FjdGl2ZSd9YH0vPlxyXG4vLyAgICAgICA8L2xpPlxyXG4vL1xyXG4vLyAgICAgICA8bGk+XHJcbi8vICAgICAgICAgPHNwYW5cclxuLy8gICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVRoZW1lQ29sb3IoXCJsaWdodF9ibHVlXCIpfVxyXG4vLyAgICAgICAgICAgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IExJR0hUX0JMVUVfU0VDLCBjb2xvcjogTElHSFRfQkxVRV9EQVJLX1RFWFRfQ09MT1J9fVxyXG4vLyAgICAgICAgICAgY2xhc3NOYW1lPXtgZ3gtbGluayBneC1jb2xvci1saWdodC1ibHVlICR7dGhlbWVDb2xvciA9PT0gTElHSFRfQkxVRSAmJiAnYWN0aXZlJ31gfS8+XHJcbi8vICAgICAgIDwvbGk+XHJcbi8vXHJcbi8vICAgICAgIDxsaT5cclxuLy8gICAgICAgICA8c3BhblxyXG4vLyAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlVGhlbWVDb2xvcihcImRlZXBfb3JhbmdlXCIpfVxyXG4vLyAgICAgICAgICAgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IERFRVBfT1JBTkdFX1NFQywgY29sb3I6IERFRVBfT1JBTkdFX0RBUktfVEVYVF9DT0xPUn19XHJcbi8vICAgICAgICAgICBjbGFzc05hbWU9e2BneC1saW5rIGd4LWNvbG9yLWRlZXAtb3JhbmdlICR7dGhlbWVDb2xvciA9PT0gREVFUF9PUkFOR0UgJiYgJ2FjdGl2ZSd9YH0vPlxyXG4vLyAgICAgICA8L2xpPlxyXG4vL1xyXG4vLyAgICAgICA8bGk+XHJcbi8vICAgICAgICAgPHNwYW5cclxuLy8gICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVRoZW1lQ29sb3IoXCJsaWdodF9wdXJwbGVfMVwiKX1cclxuLy8gICAgICAgICAgIHN0eWxlPXt7XHJcbi8vICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogTElHSFRfUFVSUExFXzFfU0VDLFxyXG4vLyAgICAgICAgICAgICBjb2xvcjogTElHSFRfUFVSUExFXzFfREFSS19URVhUX0NPTE9SXHJcbi8vICAgICAgICAgICB9fVxyXG4vLyAgICAgICAgICAgY2xhc3NOYW1lPXtgZ3gtbGluayBneC1jb2xvci1saWdodC1wdXJwbGUxICR7dGhlbWVDb2xvciA9PT0gTElHSFRfUFVSUExFXzEgJiYgJ2FjdGl2ZSd9YH0vPlxyXG4vLyAgICAgICA8L2xpPlxyXG4vL1xyXG4vLyAgICAgICA8bGk+XHJcbi8vICAgICAgICAgPHNwYW5cclxuLy8gICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVRoZW1lQ29sb3IoXCJsaWdodF9wdXJwbGVfMlwiKX1cclxuLy8gICAgICAgICAgIHN0eWxlPXt7XHJcbi8vICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogTElHSFRfUFVSUExFXzJfU0VDLFxyXG4vLyAgICAgICAgICAgICBjb2xvcjogTElHSFRfUFVSUExFXzJfREFSS19URVhUX0NPTE9SXHJcbi8vICAgICAgICAgICB9fVxyXG4vLyAgICAgICAgICAgY2xhc3NOYW1lPXtgZ3gtbGluayBneC1jb2xvci1saWdodC1wdXJwbGUyICR7dGhlbWVDb2xvciA9PT0gTElHSFRfUFVSUExFXzIgJiYgJ2FjdGl2ZSd9YH0vPlxyXG4vLyAgICAgICA8L2xpPlxyXG4vLyAgICAgPC91bD5cclxuLy8gICB9O1xyXG4vL1xyXG4vLyAgIGNvbnN0IGdldExheW91dHNUeXBlcyA9IChsYXlvdXRUeXBlKSA9PiB7XHJcbi8vICAgICByZXR1cm4gPHVsIGNsYXNzTmFtZT1cImd4LWxheW91dC1vcHRpb24gZ3gtbGlzdC1pbmxpbmVcIj5cclxuLy8gICAgICAgPGxpPlxyXG4vLyAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IGhhbmRsZUxheW91dFR5cGVzKExBWU9VVF9UWVBFX0ZSQU1FRCl9XHJcbi8vICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZ3gtcG9pbnRlciAke2xheW91dFR5cGUgPT09IExBWU9VVF9UWVBFX0ZSQU1FRCAmJiAnYWN0aXZlJ31gfT5cclxuLy8gICAgICAgICA8aW1nIHNyYz17KCcvaW1hZ2VzL2xheW91dHMvZnJhbWVkLnBuZycpfSBhbHQ9J2ZyYW1lZCcvPlxyXG4vLyAgICAgICAgIDwvc3Bhbj5cclxuLy8gICAgICAgPC9saT5cclxuLy8gICAgICAgPGxpPlxyXG4vLyAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IGhhbmRsZUxheW91dFR5cGVzKExBWU9VVF9UWVBFX0ZVTEwpfVxyXG4vLyAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGd4LXBvaW50ZXIgJHtsYXlvdXRUeXBlID09PSBMQVlPVVRfVFlQRV9GVUxMICYmICdhY3RpdmUnfWB9PlxyXG4vLyAgICAgICAgIDxpbWcgc3JjPXsoJy9pbWFnZXMvbGF5b3V0cy9mdWxsIHdpZHRoLnBuZycpfSBhbHQ9J2Z1bGwgd2lkdGgnLz5cclxuLy8gICAgICAgICA8L3NwYW4+XHJcbi8vICAgICAgIDwvbGk+XHJcbi8vICAgICAgIDxsaT5cclxuLy8gICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVMYXlvdXRUeXBlcyhMQVlPVVRfVFlQRV9CT1hFRCl9XHJcbi8vICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZ3gtcG9pbnRlciAke2xheW91dFR5cGUgPT09IExBWU9VVF9UWVBFX0JPWEVEICYmICdhY3RpdmUnfWB9PlxyXG4vLyAgICAgICAgIDxpbWcgc3JjPXsoJy9pbWFnZXMvbGF5b3V0cy9ib3hlZC5wbmcnKX0gYWx0PSdib3hlZCcvPlxyXG4vLyAgICAgICAgIDwvc3Bhbj5cclxuLy8gICAgICAgPC9saT5cclxuLy8gICAgIDwvdWw+XHJcbi8vICAgfTtcclxuLy9cclxuLy8gICBjb25zdCBnZXROYXZTdHlsZXMgPSAobmF2U3R5bGUpID0+IHtcclxuLy8gICAgIHJldHVybiA8dWwgY2xhc3NOYW1lPVwiZ3gtbmF2LW9wdGlvbiBneC1saXN0LWlubGluZVwiPlxyXG4vLyAgICAgICA8bGk+XHJcbi8vICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4gb25OYXZTdHlsZUNoYW5nZXMoTkFWX1NUWUxFX0ZJWEVEKX1cclxuLy8gICAgICAgICAgICAgICBjbGFzc05hbWU9e2BneC1wb2ludGVyICR7bmF2U3R5bGUgPT09IE5BVl9TVFlMRV9GSVhFRCAmJiAnYWN0aXZlJ31gfT5cclxuLy8gICAgICAgICA8aW1nIHNyYz17KCcvaW1hZ2VzL2xheW91dHMvZml4ZWQucG5nJyl9IGFsdD0nZml4ZWQnLz5cclxuLy8gICAgICAgICA8L3NwYW4+XHJcbi8vICAgICAgIDwvbGk+XHJcbi8vICAgICAgIDxsaT5cclxuLy8gICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiBvbk5hdlN0eWxlQ2hhbmdlcyhOQVZfU1RZTEVfTUlOSV9TSURFQkFSKX1cclxuLy8gICAgICAgICAgICAgICBjbGFzc05hbWU9e2BneC1wb2ludGVyICR7bmF2U3R5bGUgPT09IE5BVl9TVFlMRV9NSU5JX1NJREVCQVIgJiYgJ2FjdGl2ZSd9YH0+XHJcbi8vICAgICAgICAgPGltZyBzcmM9eygnL2ltYWdlcy9sYXlvdXRzL21pbmkgc2lkZWJhci5wbmcnKX0gYWx0PSdtaW5pIHNpZGViYXInLz5cclxuLy8gICAgICAgICA8L3NwYW4+XHJcbi8vICAgICAgIDwvbGk+XHJcbi8vICAgICAgIDxsaT5cclxuLy8gICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiBvbk5hdlN0eWxlQ2hhbmdlcyhOQVZfU1RZTEVfRFJBV0VSKX1cclxuLy8gICAgICAgICAgICAgICBjbGFzc05hbWU9e2BneC1wb2ludGVyICR7bmF2U3R5bGUgPT09IE5BVl9TVFlMRV9EUkFXRVIgJiYgJ2FjdGl2ZSd9YH0+XHJcbi8vICAgICAgICAgPGltZyBzcmM9eygnL2ltYWdlcy9sYXlvdXRzL2RyYXdlciBuYXYucG5nJyl9IGFsdD0nZHJhd2VyIG5hdicvPlxyXG4vLyAgICAgICAgIDwvc3Bhbj5cclxuLy8gICAgICAgPC9saT5cclxuLy8gICAgICAgPGxpPlxyXG4vLyAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IG9uTmF2U3R5bGVDaGFuZ2VzKE5BVl9TVFlMRV9OT19IRUFERVJfTUlOSV9TSURFQkFSKX1cclxuLy8gICAgICAgICAgICAgICBjbGFzc05hbWU9e2BneC1wb2ludGVyICR7bmF2U3R5bGUgPT09IE5BVl9TVFlMRV9OT19IRUFERVJfTUlOSV9TSURFQkFSICYmICdhY3RpdmUnfWB9PlxyXG4vLyAgICAgICAgIDxpbWcgc3JjPXsoJy9pbWFnZXMvbGF5b3V0cy9ubyBoZWFkZXIgbWluaSBzaWRlYmFyLnBuZycpfSBhbHQ9J25vIGhhZGVyIG1pbmkgc2lkZWJhcicvPlxyXG4vLyAgICAgICAgIDwvc3Bhbj5cclxuLy8gICAgICAgPC9saT5cclxuLy8gICAgICAgPGxpPlxyXG4vLyAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IG9uTmF2U3R5bGVDaGFuZ2VzKE5BVl9TVFlMRV9OT19IRUFERVJfRVhQQU5ERURfU0lERUJBUil9XHJcbi8vICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZ3gtcG9pbnRlciAke25hdlN0eWxlID09PSBOQVZfU1RZTEVfTk9fSEVBREVSX0VYUEFOREVEX1NJREVCQVIgJiYgJ2FjdGl2ZSd9YH0+XHJcbi8vICAgICAgICAgPGltZyBzcmM9eygnL2ltYWdlcy9sYXlvdXRzL3ZlcnRpY2FsIG5vIGhlYWRlci5wbmcnKX0gYWx0PSd2ZXJ0aWNhbCBubyBoZWFkZXInLz5cclxuLy8gICAgICAgICA8L3NwYW4+XHJcbi8vICAgICAgIDwvbGk+XHJcbi8vICAgICAgIDxsaT5cclxuLy8gICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiBvbk5hdlN0eWxlQ2hhbmdlcyhOQVZfU1RZTEVfREVGQVVMVF9IT1JJWk9OVEFMKX1cclxuLy8gICAgICAgICAgICAgICBjbGFzc05hbWU9e2BneC1wb2ludGVyICR7bmF2U3R5bGUgPT09IE5BVl9TVFlMRV9ERUZBVUxUX0hPUklaT05UQUwgJiYgJ2FjdGl2ZSd9YH0+XHJcbi8vICAgICAgICAgPGltZyBzcmM9eygnL2ltYWdlcy9sYXlvdXRzL2RlZmF1bHQgaG9yaXpvbnRhbC5wbmcnKX0gYWx0PSdkZWZhdWx0IGhvcml6b250YWwnLz5cclxuLy8gICAgICAgICA8L3NwYW4+XHJcbi8vICAgICAgIDwvbGk+XHJcbi8vICAgICAgIDxsaT5cclxuLy8gICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiBvbk5hdlN0eWxlQ2hhbmdlcyhOQVZfU1RZTEVfREFSS19IT1JJWk9OVEFMKX1cclxuLy8gICAgICAgICAgICAgICBjbGFzc05hbWU9e2BneC1wb2ludGVyICR7bmF2U3R5bGUgPT09IE5BVl9TVFlMRV9EQVJLX0hPUklaT05UQUwgJiYgJ2FjdGl2ZSd9YH0+XHJcbi8vICAgICAgICAgPGltZyBzcmM9eygnL2ltYWdlcy9sYXlvdXRzL2RhcmsgaG9yaXpvbnRhbC5wbmcnKX0gYWx0PSdkYXJrIGhvcml6b250YWwnLz5cclxuLy8gICAgICAgICA8L3NwYW4+XHJcbi8vICAgICAgIDwvbGk+XHJcbi8vICAgICAgIDxsaT5cclxuLy8gICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiBvbk5hdlN0eWxlQ2hhbmdlcyhOQVZfU1RZTEVfSU5TSURFX0hFQURFUl9IT1JJWk9OVEFMKX1cclxuLy8gICAgICAgICAgICAgICBjbGFzc05hbWU9e2BneC1wb2ludGVyICR7bmF2U3R5bGUgPT09IE5BVl9TVFlMRV9JTlNJREVfSEVBREVSX0hPUklaT05UQUwgJiYgJ2FjdGl2ZSd9YH0+XHJcbi8vICAgICAgICAgPGltZyBzcmM9eygnL2ltYWdlcy9sYXlvdXRzL2luc2lkZSBoZWFkZXIgaG9yaXpvbnRhbC5wbmcnKX0gYWx0PSdpbnNpZGUgaGVhZGVyIGhvcml6b250YWwnLz5cclxuLy8gICAgICAgICA8L3NwYW4+XHJcbi8vICAgICAgIDwvbGk+XHJcbi8vICAgICAgIDxsaT5cclxuLy8gICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiBvbk5hdlN0eWxlQ2hhbmdlcyhOQVZfU1RZTEVfQkVMT1dfSEVBREVSKX1cclxuLy8gICAgICAgICAgICAgICBjbGFzc05hbWU9e2BneC1wb2ludGVyICR7bmF2U3R5bGUgPT09IE5BVl9TVFlMRV9CRUxPV19IRUFERVIgJiYgJ2FjdGl2ZSd9YH0+XHJcbi8vICAgICAgICAgPGltZyBzcmM9eygnL2ltYWdlcy9sYXlvdXRzL2JlbG93IGhlYWRlci5wbmcnKX0gYWx0PSdiZWxvdyBoZWFkZXInLz5cclxuLy8gICAgICAgICA8L3NwYW4+XHJcbi8vICAgICAgIDwvbGk+XHJcbi8vXHJcbi8vICAgICAgIDxsaT5cclxuLy8gICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiBvbk5hdlN0eWxlQ2hhbmdlcyhOQVZfU1RZTEVfQUJPVkVfSEVBREVSKX1cclxuLy8gICAgICAgICAgICAgICBjbGFzc05hbWU9e2BneC1wb2ludGVyICR7bmF2U3R5bGUgPT09IE5BVl9TVFlMRV9BQk9WRV9IRUFERVIgJiYgJ2FjdGl2ZSd9YH0+XHJcbi8vICAgICAgICAgPGltZyBzcmM9eygnL2ltYWdlcy9sYXlvdXRzL3RvcCB0byBoZWFkZXIucG5nJyl9IGFsdD0ndG9wIHRvIGhlYWRlcicvPlxyXG4vLyAgICAgICAgIDwvc3Bhbj5cclxuLy8gICAgICAgPC9saT5cclxuLy8gICAgIDwvdWw+XHJcbi8vICAgfTtcclxuLy9cclxuLy8gICByZXR1cm4gKFxyXG4vLyAgICAgPD5cclxuLy8gICAgICAgPERyYXdlclxyXG4vLyAgICAgICAgIHBsYWNlbWVudD1cInJpZ2h0XCJcclxuLy8gICAgICAgICBjbG9zYWJsZT17ZmFsc2V9XHJcbi8vICAgICAgICAgb25DbG9zZT17dG9nZ2xlQ3VzdG9taXplcn1cclxuLy8gICAgICAgICB2aXNpYmxlPXtpc0N1c3RvbWl6ZXJPcGVuZWR9PlxyXG4vLyAgICAgICAgIHtcclxuLy8gICAgICAgICAgIGdldEN1c3RvbWl6ZXJDb250ZW50KClcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgIDwvRHJhd2VyPlxyXG4vLyAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWN1c3RvbWl6ZXItb3B0aW9uXCI+XHJcbi8vICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIG9uQ2xpY2s9e3RvZ2dsZUN1c3RvbWl6ZXJ9PlxyXG4vLyAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLXNldHRpbmcgZnhpY29uLWhjLXNwaW4gZ3gtZC1ibG9ja1wiLz5cclxuLy8gICAgICAgICA8L0J1dHRvbj5cclxuLy8gICAgICAgPC9kaXY+XHJcbi8vICAgICA8Lz5cclxuLy8gICApO1xyXG4vLyB9O1xyXG4vL1xyXG4vLyBleHBvcnQgZGVmYXVsdCBDdXN0b21pemVyU3lzdGVtO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgSW5kZXggPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIFxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7Q29uZmlnUHJvdmlkZXIsIExheW91dH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHtJbnRsUHJvdmlkZXJ9IGZyb20gJ3JlYWN0LWludGwnO1xyXG5pbXBvcnQge2Nvbm5lY3QsIHVzZVNlbGVjdG9yfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuXHJcbmltcG9ydCBTaWRlYmFyIGZyb20gXCIuLi9TaWRlYmFyXCI7XHJcbmltcG9ydCBIb3Jpem9udGFsRGVmYXVsdCBmcm9tIFwiLi4vVG9wYmFyL0hvcml6b250YWxEZWZhdWx0XCI7XHJcbmltcG9ydCBIb3Jpem9udGFsRGFyayBmcm9tIFwiLi4vVG9wYmFyL0hvcml6b250YWxEYXJrXCI7XHJcbmltcG9ydCBJbnNpZGVIZWFkZXIgZnJvbSBcIi4uL1RvcGJhci9JbnNpZGVIZWFkZXJcIjtcclxuaW1wb3J0IEFib3ZlSGVhZGVyIGZyb20gXCIuLi9Ub3BiYXIvQWJvdmVIZWFkZXJcIjtcclxuaW1wb3J0IEJlbG93SGVhZGVyIGZyb20gXCIuLi9Ub3BiYXIvQmVsb3dIZWFkZXJcIjtcclxuaW1wb3J0IFRvcGJhciBmcm9tIFwiLi4vVG9wYmFyXCI7XHJcbmltcG9ydCB7Zm9vdGVyVGV4dH0gZnJvbSBcIi4uLy4uLy4uL3V0aWwvY29uZmlnXCI7XHJcbmltcG9ydCB7XHJcbiAgTkFWX1NUWUxFX0FCT1ZFX0hFQURFUixcclxuICBOQVZfU1RZTEVfQkVMT1dfSEVBREVSLFxyXG4gIE5BVl9TVFlMRV9EQVJLX0hPUklaT05UQUwsXHJcbiAgTkFWX1NUWUxFX0RFRkFVTFRfSE9SSVpPTlRBTCxcclxuICBOQVZfU1RZTEVfRFJBV0VSLFxyXG4gIE5BVl9TVFlMRV9GSVhFRCxcclxuICBOQVZfU1RZTEVfSU5TSURFX0hFQURFUl9IT1JJWk9OVEFMLFxyXG4gIE5BVl9TVFlMRV9NSU5JX1NJREVCQVIsXHJcbiAgTkFWX1NUWUxFX05PX0hFQURFUl9FWFBBTkRFRF9TSURFQkFSLFxyXG4gIE5BVl9TVFlMRV9OT19IRUFERVJfTUlOSV9TSURFQkFSLFxyXG4gIFRBQl9TSVpFLFxyXG4gIFRIRU1FX1RZUEVfREFSS1xyXG59IGZyb20gXCIuLi8uLi8uLi9jb25zdGFudHMvVGhlbWVTZXR0aW5nXCI7XHJcbmltcG9ydCBOb0hlYWRlck5vdGlmaWNhdGlvbiBmcm9tIFwiLi4vVG9wYmFyL05vSGVhZGVyTm90aWZpY2F0aW9uXCI7XHJcbmltcG9ydCBBcHBMb2NhbGUgZnJvbSBcIi4uLy4uLy4uL2xuZ1Byb3ZpZGVyXCI7XHJcbmltcG9ydCBDdXN0b21pemVyIGZyb20gXCIuLi9DdXN0b21pemVyXCI7XHJcblxyXG5jb25zdCB7Q29udGVudCwgRm9vdGVyfSA9IExheW91dDtcclxuXHJcbmNvbnN0IEFwcExheW91dCA9ICh7Y2hpbGRyZW59KSA9PiB7XHJcblxyXG4gIGNvbnN0IHt3aWR0aCwgdGhlbWVUeXBlLCBsYXlvdXRUeXBlLCBsb2NhbGUsIG5hdlN0eWxlfSA9IHVzZVNlbGVjdG9yKCh7c2V0dGluZ3N9KSA9PiBzZXR0aW5ncylcclxuICBjb25zdCBnZXRDb250YWluZXJDbGFzcyA9IChuYXZTdHlsZSkgPT4ge1xyXG4gICAgc3dpdGNoIChuYXZTdHlsZSkge1xyXG4gICAgICBjYXNlIE5BVl9TVFlMRV9EQVJLX0hPUklaT05UQUw6XHJcbiAgICAgICAgcmV0dXJuIFwiZ3gtY29udGFpbmVyLXdyYXBcIjtcclxuICAgICAgY2FzZSBOQVZfU1RZTEVfREVGQVVMVF9IT1JJWk9OVEFMOlxyXG4gICAgICAgIHJldHVybiBcImd4LWNvbnRhaW5lci13cmFwXCI7XHJcbiAgICAgIGNhc2UgTkFWX1NUWUxFX0lOU0lERV9IRUFERVJfSE9SSVpPTlRBTDpcclxuICAgICAgICByZXR1cm4gXCJneC1jb250YWluZXItd3JhcFwiO1xyXG4gICAgICBjYXNlIE5BVl9TVFlMRV9CRUxPV19IRUFERVI6XHJcbiAgICAgICAgcmV0dXJuIFwiZ3gtY29udGFpbmVyLXdyYXBcIjtcclxuICAgICAgY2FzZSBOQVZfU1RZTEVfQUJPVkVfSEVBREVSOlxyXG4gICAgICAgIHJldHVybiBcImd4LWNvbnRhaW5lci13cmFwXCI7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgY29uc3QgZ2V0TmF2U3R5bGVzID0gKG5hdlN0eWxlKSA9PiB7XHJcbiAgICBzd2l0Y2ggKG5hdlN0eWxlKSB7XHJcbiAgICAgIGNhc2UgTkFWX1NUWUxFX0RFRkFVTFRfSE9SSVpPTlRBTCA6XHJcbiAgICAgICAgcmV0dXJuIDxIb3Jpem9udGFsRGVmYXVsdC8+O1xyXG4gICAgICBjYXNlIE5BVl9TVFlMRV9EQVJLX0hPUklaT05UQUwgOlxyXG4gICAgICAgIHJldHVybiA8SG9yaXpvbnRhbERhcmsvPjtcclxuICAgICAgY2FzZSBOQVZfU1RZTEVfSU5TSURFX0hFQURFUl9IT1JJWk9OVEFMIDpcclxuICAgICAgICByZXR1cm4gPEluc2lkZUhlYWRlci8+O1xyXG4gICAgICBjYXNlIE5BVl9TVFlMRV9BQk9WRV9IRUFERVIgOlxyXG4gICAgICAgIHJldHVybiA8QWJvdmVIZWFkZXIvPjtcclxuICAgICAgY2FzZSBOQVZfU1RZTEVfQkVMT1dfSEVBREVSIDpcclxuICAgICAgICByZXR1cm4gPEJlbG93SGVhZGVyLz47XHJcbiAgICAgIGNhc2UgTkFWX1NUWUxFX0ZJWEVEIDpcclxuICAgICAgICByZXR1cm4gPFRvcGJhci8+O1xyXG4gICAgICBjYXNlIE5BVl9TVFlMRV9EUkFXRVIgOlxyXG4gICAgICAgIHJldHVybiA8VG9wYmFyLz47XHJcbiAgICAgIGNhc2UgTkFWX1NUWUxFX01JTklfU0lERUJBUiA6XHJcbiAgICAgICAgcmV0dXJuIDxUb3BiYXIvPjtcclxuICAgICAgY2FzZSBOQVZfU1RZTEVfTk9fSEVBREVSX01JTklfU0lERUJBUiA6XHJcbiAgICAgICAgcmV0dXJuIDxOb0hlYWRlck5vdGlmaWNhdGlvbi8+O1xyXG4gICAgICBjYXNlIE5BVl9TVFlMRV9OT19IRUFERVJfRVhQQU5ERURfU0lERUJBUiA6XHJcbiAgICAgICAgcmV0dXJuIDxOb0hlYWRlck5vdGlmaWNhdGlvbi8+O1xyXG4gICAgICBkZWZhdWx0IDpcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBnZXRTaWRlYmFyID0gKG5hdlN0eWxlLCB3aWR0aCkgPT4ge1xyXG4gICAgaWYgKHdpZHRoIDwgVEFCX1NJWkUpIHtcclxuICAgICAgcmV0dXJuIDxTaWRlYmFyLz47XHJcbiAgICB9XHJcbiAgICBzd2l0Y2ggKG5hdlN0eWxlKSB7XHJcbiAgICAgIGNhc2UgTkFWX1NUWUxFX0ZJWEVEIDpcclxuICAgICAgICByZXR1cm4gPFNpZGViYXIvPjtcclxuICAgICAgY2FzZSBOQVZfU1RZTEVfRFJBV0VSIDpcclxuICAgICAgICByZXR1cm4gPFNpZGViYXIvPjtcclxuICAgICAgY2FzZSBOQVZfU1RZTEVfTUlOSV9TSURFQkFSIDpcclxuICAgICAgICByZXR1cm4gPFNpZGViYXIvPjtcclxuICAgICAgY2FzZSBOQVZfU1RZTEVfTk9fSEVBREVSX01JTklfU0lERUJBUiA6XHJcbiAgICAgICAgcmV0dXJuIDxTaWRlYmFyLz47XHJcbiAgICAgIGNhc2UgTkFWX1NUWUxFX05PX0hFQURFUl9FWFBBTkRFRF9TSURFQkFSOlxyXG4gICAgICAgIHJldHVybiA8U2lkZWJhci8+O1xyXG4gICAgICBkZWZhdWx0IDpcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBsZXQgYm9keUNsYXNzID0gXCJcIjtcclxuICBpZiAodGhlbWVUeXBlID09PSBUSEVNRV9UWVBFX0RBUkspIHtcclxuICAgIGJvZHlDbGFzcyA9IFwiZGFyay10aGVtZVwiXHJcbiAgfVxyXG4gIGNvbnN0IGN1cnJlbnRBcHBMb2NhbGUgPSBBcHBMb2NhbGVbbG9jYWxlLmxvY2FsZV07XHJcbiAgcmV0dXJuIChcclxuICAgIDxDb25maWdQcm92aWRlciBsb2NhbGU9e2N1cnJlbnRBcHBMb2NhbGUuYW50ZH0+XHJcbiAgICAgIDxJbnRsUHJvdmlkZXJcclxuICAgICAgICBsb2NhbGU9e2N1cnJlbnRBcHBMb2NhbGUubG9jYWxlfVxyXG4gICAgICAgIG1lc3NhZ2VzPXtjdXJyZW50QXBwTG9jYWxlLm1lc3NhZ2VzfT5cclxuICAgICAgICA8TGF5b3V0IGNsYXNzTmFtZT17YGd4LWFwcC1sYXlvdXQgJHtib2R5Q2xhc3N9YH0+XHJcbiAgICAgICAgICB7Z2V0U2lkZWJhcihuYXZTdHlsZSwgd2lkdGgpfVxyXG4gICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAge2dldE5hdlN0eWxlcyhuYXZTdHlsZSl9XHJcbiAgICAgICAgICAgIDxDb250ZW50IGNsYXNzTmFtZT17YGd4LWxheW91dC1jb250ZW50ICR7Z2V0Q29udGFpbmVyQ2xhc3MobmF2U3R5bGUpfWB9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtbWFpbi1jb250ZW50LXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8Rm9vdGVyPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1sYXlvdXQtZm9vdGVyLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAge2Zvb3RlclRleHR9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L0Zvb3Rlcj5cclxuICAgICAgICAgICAgPC9Db250ZW50PlxyXG4gICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgICA8Q3VzdG9taXplci8+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgIDwvSW50bFByb3ZpZGVyPlxyXG4gICAgPC9Db25maWdQcm92aWRlcj5cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9ICh7c2V0dGluZ3N9KSA9PiB7XHJcbiAgY29uc3Qge3dpZHRoLCB0aGVtZVR5cGUsIGxheW91dFR5cGUsIG5hdlN0eWxlLCBsb2NhbGV9ID0gc2V0dGluZ3M7XHJcbiAgcmV0dXJuIHt3aWR0aCwgdGhlbWVUeXBlLCBsYXlvdXRUeXBlLCBuYXZTdHlsZSwgbG9jYWxlfVxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoQXBwTGF5b3V0KTtcclxuXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IEFwcHNOYXZpZ2F0aW9uID0gKCkgPT5cclxuICA8dWwgY2xhc3NOYW1lPVwiZ3gtYXBwLW5hdlwiPlxyXG4gICAgPGxpPjxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1zZWFyY2gtbmV3XCIvPjwvbGk+XHJcbiAgICA8bGk+PGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLW5vdGlmaWNhdGlvblwiLz48L2xpPlxyXG4gICAgPGxpPjxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1jaGF0LW5ld1wiLz48L2xpPlxyXG4gIDwvdWw+O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwc05hdmlnYXRpb247XHJcbiIsImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7TWVudX0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgQ3VzdG9tU2Nyb2xsYmFycyBmcm9tIFwiLi4vLi4vLi4vdXRpbC9DdXN0b21TY3JvbGxiYXJzXCI7XHJcbmltcG9ydCBTaWRlYmFyTG9nbyBmcm9tIFwiLi9TaWRlYmFyTG9nb1wiO1xyXG5pbXBvcnQgVXNlclByb2ZpbGUgZnJvbSBcIi4vVXNlclByb2ZpbGVcIjtcclxuaW1wb3J0IEFwcHNOYXZpZ2F0aW9uIGZyb20gXCIuL0FwcHNOYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCB7XHJcbiAgTkFWX1NUWUxFX05PX0hFQURFUl9FWFBBTkRFRF9TSURFQkFSLFxyXG4gIE5BVl9TVFlMRV9OT19IRUFERVJfTUlOSV9TSURFQkFSLFxyXG4gIFRIRU1FX1RZUEVfTElURVxyXG59IGZyb20gXCIuLi8uLi8uLi9jb25zdGFudHMvVGhlbWVTZXR0aW5nXCI7XHJcbmltcG9ydCBJbnRsTWVzc2FnZXMgZnJvbSBcIi4uLy4uLy4uL3V0aWwvSW50bE1lc3NhZ2VzXCI7XHJcbmltcG9ydCB7dXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHtzZXRQYXRoTmFtZX0gZnJvbSBcIi4uLy4uLy4uL3JlZHV4L2FjdGlvbnNcIjtcclxuXHJcbmNvbnN0IFN1Yk1lbnUgPSBNZW51LlN1Yk1lbnU7XHJcbmNvbnN0IE1lbnVJdGVtR3JvdXAgPSBNZW51Lkl0ZW1Hcm91cDtcclxuXHJcblxyXG5jb25zdCBTaWRlYmFyQ29udGVudCA9ICgpID0+IHtcclxuXHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgbGV0IHtuYXZTdHlsZSwgdGhlbWVUeXBlLCBwYXRobmFtZX0gPSB1c2VTZWxlY3Rvcigoe3NldHRpbmdzfSkgPT4gc2V0dGluZ3MpO1xyXG5cclxuICBjb25zdCBnZXROb0hlYWRlckNsYXNzID0gKG5hdlN0eWxlKSA9PiB7XHJcbiAgICBpZiAobmF2U3R5bGUgPT09IE5BVl9TVFlMRV9OT19IRUFERVJfTUlOSV9TSURFQkFSIHx8IG5hdlN0eWxlID09PSBOQVZfU1RZTEVfTk9fSEVBREVSX0VYUEFOREVEX1NJREVCQVIpIHtcclxuICAgICAgcmV0dXJuIFwiZ3gtbm8taGVhZGVyLW5vdGlmaWNhdGlvbnNcIjtcclxuICAgIH1cclxuICAgIHJldHVybiBcIlwiO1xyXG4gIH07XHJcbiAgY29uc3QgZ2V0TmF2U3R5bGVTdWJNZW51Q2xhc3MgPSAobmF2U3R5bGUpID0+IHtcclxuICAgIGlmIChuYXZTdHlsZSA9PT0gTkFWX1NUWUxFX05PX0hFQURFUl9NSU5JX1NJREVCQVIpIHtcclxuICAgICAgcmV0dXJuIFwiZ3gtbm8taGVhZGVyLXN1Ym1lbnUtcG9wdXBcIjtcclxuICAgIH1cclxuICAgIHJldHVybiBcIlwiO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBkaXNwYXRjaChzZXRQYXRoTmFtZShyb3V0ZXIucGF0aG5hbWUpKVxyXG4gIH0sIFtyb3V0ZXIucGF0aG5hbWVdKTtcclxuXHJcbiAgY29uc3Qgc2VsZWN0ZWRLZXlzID0gcGF0aG5hbWUuc3Vic3RyKDEpO1xyXG4gIGNvbnN0IGRlZmF1bHRPcGVuS2V5cyA9IHNlbGVjdGVkS2V5cy5zcGxpdCgnLycpWzFdO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8U2lkZWJhckxvZ28vPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LXNpZGViYXItY29udGVudFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZ3gtc2lkZWJhci1ub3RpZmljYXRpb25zICR7Z2V0Tm9IZWFkZXJDbGFzcyhuYXZTdHlsZSl9YH0+XHJcbiAgICAgICAgICA8VXNlclByb2ZpbGUvPlxyXG4gICAgICAgICAgPEFwcHNOYXZpZ2F0aW9uLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Q3VzdG9tU2Nyb2xsYmFycyBjbGFzc05hbWU9XCJneC1sYXlvdXQtc2lkZXItc2Nyb2xsYmFyXCI+XHJcbiAgICAgICAgICA8TWVudVxyXG4gICAgICAgICAgICBkZWZhdWx0T3BlbktleXM9e1tkZWZhdWx0T3BlbktleXNdfVxyXG4gICAgICAgICAgICBzZWxlY3RlZEtleXM9e1tzZWxlY3RlZEtleXNdfVxyXG4gICAgICAgICAgICB0aGVtZT17dGhlbWVUeXBlID09PSBUSEVNRV9UWVBFX0xJVEUgPyAnbGl0ZScgOiAnZGFyayd9XHJcbiAgICAgICAgICAgIG1vZGU9XCJpbmxpbmVcIj5cclxuXHJcbiAgICAgICAgICAgIDxNZW51SXRlbUdyb3VwIGtleT1cIm1haW5cIiBjbGFzc05hbWU9XCJneC1tZW51LWdyb3VwXCIgdGl0bGU9ezxJbnRsTWVzc2FnZXMgaWQ9XCJzaWRlYmFyLm1haW5cIi8+fT5cclxuICAgICAgICAgICAgICA8U3ViTWVudSBrZXk9XCJkYXNoYm9hcmRcIiBwb3B1cENsYXNzTmFtZT17Z2V0TmF2U3R5bGVTdWJNZW51Q2xhc3MobmF2U3R5bGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXs8c3Bhbj48aSBjbGFzc05hbWU9XCJpY29uIGljb24tZGFzYmhvYXJkXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PEludGxNZXNzYWdlcyBpZD1cInNpZGViYXIuZGFzaGJvYXJkXCIvPjwvc3Bhbj48L3NwYW4+fT5cclxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwibWFpbi9kYXNoYm9hcmQvY3J5cHRvXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbWFpbi9kYXNoYm9hcmQvY3J5cHRvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+PGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLWNyeXB0b1wiLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjxJbnRsTWVzc2FnZXMgaWQ9XCJzaWRlYmFyLmRhc2hib2FyZC5jcnlwdG9cIi8+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwibWFpbi9kYXNoYm9hcmQvY3JtXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbWFpbi9kYXNoYm9hcmQvY3JtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+PGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLWNybVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjxJbnRsTWVzc2FnZXMgaWQ9XCJzaWRlYmFyLmRhc2hib2FyZC5jcm1cIi8+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwibWFpbi9kYXNoYm9hcmQvbGlzdGluZ1wiPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL21haW4vZGFzaGJvYXJkL2xpc3RpbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YT48aSBjbGFzc05hbWU9XCJpY29uIGljb24tbGlzdGluZy1kYnJkXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PEludGxNZXNzYWdlcyBpZD1cInNpZGViYXIuZGFzaGJvYXJkLmxpc3RpbmdcIi8+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICA8L1N1Yk1lbnU+XHJcblxyXG4gICAgICAgICAgICAgIHsvKiA8TWVudS5JdGVtIGtleT1cIm1haW4vd2lkZ2V0c1wiPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9tYWluL3dpZGdldHNcIj48YT48aSBjbGFzc05hbWU9XCJpY29uIGljb24td2lkZ2V0c1wiLz5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4+PEludGxNZXNzYWdlcyBpZD1cInNpZGViYXIud2lkZ2V0c1wiLz48L3NwYW4+PC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuXHJcbiAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJtYWluL21ldHJpY3NcIj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbWFpbi9tZXRyaWNzXCI+PGE+PGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLWFwcHNcIi8+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuPjxJbnRsTWVzc2FnZXMgaWQ9XCJzaWRlYmFyLm1ldHJpY3NcIi8+PC9zcGFuPjwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcblxyXG4gICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwibWFpbi9sYXlvdXRzXCI+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL21haW4vbGF5b3V0c1wiPjxhPjxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1jYXJkXCIvPlxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj4gPEludGxNZXNzYWdlcyBpZD1cInNpZGViYXIubGF5b3V0c1wiLz48L3NwYW4+PC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICA8L01lbnUuSXRlbT4gKi99XHJcblxyXG4gICAgICAgICAgICAgIDxTdWJNZW51IGtleT1cImNybVwiIHBvcHVwQ2xhc3NOYW1lPXtnZXROYXZTdHlsZVN1Yk1lbnVDbGFzcyhuYXZTdHlsZSl9IHRpdGxlPXtcclxuICAgICAgICAgICAgICAgIDxzcGFuPjxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1jcm1cIi8+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuPjxJbnRsTWVzc2FnZXMgaWQ9XCJzaWRlYmFyLmRhc2hib2FyZC5jcm1cIi8+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPn0+XHJcbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIm1haW4vY3JtL2lmaXNcIj5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9tYWluL2NybS9pZmlzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGljb24td2lkZ2V0c1wiLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxJbnRsTWVzc2FnZXMgaWQ9XCJzaWRlYmFyLmlmaXNcIiAvPiBcclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgIDwvU3ViTWVudT5cclxuXHJcbiAgICAgICAgICAgIDwvTWVudUl0ZW1Hcm91cD5cclxuXHJcbiAgICAgICAgICAgIHsvKiA8TWVudUl0ZW1Hcm91cCBrZXk9XCJpbi1idWlsdC1hcHBzXCIgY2xhc3NOYW1lPVwiZ3gtbWVudS1ncm91cFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXs8SW50bE1lc3NhZ2VzIGlkPVwic2lkZWJhci5pbkJ1aWx0QXBwXCIvPn0+XHJcbiAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJpbi1idWlsdC1hcHBzL21haWxcIj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvaW4tYnVpbHQtYXBwcy9tYWlsXCI+PGE+PGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLWVtYWlsXCIvPjxzcGFuPjxJbnRsTWVzc2FnZXNcclxuICAgICAgICAgICAgICAgICAgaWQ9XCJzaWRlYmFyLm1haWxBcHBcIi8+PC9zcGFuPjwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcblxyXG4gICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiaW4tYnVpbHQtYXBwcy90b2RvXCI+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2luLWJ1aWx0LWFwcHMvdG9kb1wiPjxhPjxpXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImljb24gaWNvbi1jaGVjay1zcXVhcmUtb1wiLz48c3Bhbj48SW50bE1lc3NhZ2VzXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwic2lkZWJhci50b2RvQXBwXCIvPjwvc3Bhbj48L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG5cclxuICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cImluLWJ1aWx0LWFwcHMvY29udGFjdHNcIj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvaW4tYnVpbHQtYXBwcy9jb250YWN0c1wiPjxhPjxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1jb250YWN0c1wiLz48c3Bhbj48SW50bE1lc3NhZ2VzXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwic2lkZWJhci5jb250YWN0c0FwcFwiLz48L3NwYW4+PC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuXHJcbiAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJpbi1idWlsdC1hcHBzL2NoYXRcIj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvaW4tYnVpbHQtYXBwcy9jaGF0XCI+PGE+PGlcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaWNvbiBpY29uLWNoYXQtYnViYmxlIC1mbGV4LWNvbHVtbi1yZXZlcnNlXCIvPjxzcGFuPjxJbnRsTWVzc2FnZXNcclxuICAgICAgICAgICAgICAgICAgaWQ9XCJzaWRlYmFyLmNoYXRBcHBcIi8+PC9zcGFuPjwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgIDwvTWVudUl0ZW1Hcm91cD4gKi99XHJcblxyXG4gICAgICAgICAgICB7LyogPE1lbnVJdGVtR3JvdXAga2V5PVwic29jaWFsLWFwcHNcIiBjbGFzc05hbWU9XCJneC1tZW51LWdyb3VwXCIgdGl0bGU9ezxJbnRsTWVzc2FnZXMgaWQ9XCJzaWRlYmFyLnNvY2lhbFwiLz59PlxyXG4gICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwic29jaWFsLWFwcHMvcHJvZmlsZVwiPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zb2NpYWwtYXBwcy9wcm9maWxlXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhPjxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1wcm9maWxlMlwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj48SW50bE1lc3NhZ2VzIGlkPVwic2lkZWJhci5leHRlbnNpb25zLnByb2ZpbGVcIi8+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG5cclxuICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cInNvY2lhbC1hcHBzL3dhbGxcIj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc29jaWFsLWFwcHMvd2FsbFwiPlxyXG4gICAgICAgICAgICAgICAgICA8YT48aSBjbGFzc05hbWU9XCJpY29uIGljb24tYXZhdGFyIC1mbGV4LWNvbHVtbi1yZXZlcnNlXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPjxJbnRsTWVzc2FnZXMgaWQ9XCJzaWRlYmFyLndhbGxcIi8+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICA8L01lbnVJdGVtR3JvdXA+ICovfVxyXG5cclxuICAgICAgICAgICAgey8qIDxNZW51SXRlbUdyb3VwIGtleT1cImNvbXBvbmVudHNcIiBjbGFzc05hbWU9XCJneC1tZW51LWdyb3VwXCIgdGl0bGU9ezxJbnRsTWVzc2FnZXMgaWQ9XCJzaWRlYmFyLmNvbXBvbmVudHNcIi8+fT5cclxuXHJcbiAgICAgICAgICAgICAgPFN1Yk1lbnUga2V5PVwiZ2VuZXJhbFwiIHBvcHVwQ2xhc3NOYW1lPXtnZXROYXZTdHlsZVN1Yk1lbnVDbGFzcyhuYXZTdHlsZSl9IHRpdGxlPXtcclxuICAgICAgICAgICAgICAgIDxzcGFuPjxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1hbGwtY29udGFjdHNcIi8+XHJcbiAgICAgICAgICAgICAgICAgICA8c3Bhbj48SW50bE1lc3NhZ2VzIGlkPVwic2lkZWJhci5jb21wb25lbnRzLmdlbmVyYWxcIi8+PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvc3Bhbj59PlxyXG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJjb21wb25lbnRzL2dlbmVyYWwvYnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29tcG9uZW50cy9nZW5lcmFsL2J1dHRvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPjxJbnRsTWVzc2FnZXMgaWQ9XCJzaWRlYmFyLmdlbmVyYWwuYnV0dG9uXCIvPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cImNvbXBvbmVudHMvZ2VuZXJhbC9pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29tcG9uZW50cy9nZW5lcmFsL2ljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj48SW50bE1lc3NhZ2VzIGlkPVwic2lkZWJhci5nZW5lcmFsLmljb25cIi8+PC9zcGFuPjwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgIDwvU3ViTWVudT5cclxuXHJcbiAgICAgICAgICAgICAgPFN1Yk1lbnUga2V5PVwibmF2aWdhdGlvblwiIHBvcHVwQ2xhc3NOYW1lPXtnZXROYXZTdHlsZVN1Yk1lbnVDbGFzcyhuYXZTdHlsZSl9IHRpdGxlPXtcclxuICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGljb24tbmF2aWdhdGlvblwiLz5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4+PEludGxNZXNzYWdlcyBpZD1cInNpZGViYXIuY29tcG9uZW50cy5uYXZpZ2F0aW9uXCIvPjwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L3NwYW4+fT5cclxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiY29tcG9uZW50cy9uYXZpZ2F0aW9uL2FmZml4XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29tcG9uZW50cy9uYXZpZ2F0aW9uL2FmZml4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+PEludGxNZXNzYWdlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzaWRlYmFyLm5hdmlnYXRpb24uYWZmaXhcIi8+PC9zcGFuPjwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJjb21wb25lbnRzL25hdmlnYXRpb24vYnJlYWRjcnVtYlwiPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9icmVhZGNydW1iXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+PEludGxNZXNzYWdlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzaWRlYmFyLm5hdmlnYXRpb24uYnJlYWRjcnVtYlwiLz48L3NwYW4+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cImNvbXBvbmVudHMvbmF2aWdhdGlvbi9kcm9wZG93blwiPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9kcm9wZG93blwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPjxJbnRsTWVzc2FnZXNcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwic2lkZWJhci5uYXZpZ2F0aW9uLmRyb3Bkb3duXCIvPjwvc3Bhbj48L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiY29tcG9uZW50cy9uYXZpZ2F0aW9uL21lbnVcIj5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb21wb25lbnRzL25hdmlnYXRpb24vbWVudVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPjxJbnRsTWVzc2FnZXNcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwic2lkZWJhci5uYXZpZ2F0aW9uLm1lbnVcIi8+PC9zcGFuPjwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJjb21wb25lbnRzL25hdmlnYXRpb24vcGFnaW5hdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9wYWdpbmF0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+PEludGxNZXNzYWdlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzaWRlYmFyLm5hdmlnYXRpb24ucGFnaW5hdGlvblwiLz48L3NwYW4+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cImNvbXBvbmVudHMvbmF2aWdhdGlvbi9zdGVwc1wiPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9zdGVwc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPjxJbnRsTWVzc2FnZXNcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwic2lkZWJhci5uYXZpZ2F0aW9uLnN0ZXBzXCIvPjwvc3Bhbj48L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICA8L1N1Yk1lbnU+XHJcblxyXG4gICAgICAgICAgICAgIDxTdWJNZW51IGtleT1cImRhdGEtZW50cnlcIiBwb3B1cENsYXNzTmFtZT17Z2V0TmF2U3R5bGVTdWJNZW51Q2xhc3MobmF2U3R5bGUpfSB0aXRsZT17XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLWRhdGEtZW50cnlcIi8+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuPjxJbnRsTWVzc2FnZXMgaWQ9XCJzaWRlYmFyLmNvbXBvbmVudHMuZGF0YUVudHJ5XCIvPjwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L3NwYW4+fT5cclxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiY29tcG9uZW50cy9kYXRhLWVudHJ5L2F1dG8tY29tcGxldGVcIj5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb21wb25lbnRzL2RhdGEtZW50cnkvYXV0by1jb21wbGV0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPjxJbnRsTWVzc2FnZXNcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwic2lkZWJhci5kYXRhRW50cnkuYXV0b0NvbXBsZXRlXCIvPjwvc3Bhbj48L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiY29tcG9uZW50cy9kYXRhLWVudHJ5L2NoZWNrYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29tcG9uZW50cy9kYXRhLWVudHJ5L2NoZWNrYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+PEludGxNZXNzYWdlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzaWRlYmFyLmRhdGFFbnRyeS5jaGVja2JveFwiLz48L3NwYW4+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cImNvbXBvbmVudHMvZGF0YS1lbnRyeS9jYXNjYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NvbXBvbmVudHMvZGF0YS1lbnRyeS9jYXNjYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPjxJbnRsTWVzc2FnZXNcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwic2lkZWJhci5kYXRhRW50cnkuY2FzY2FkZXJcIi8+PC9zcGFuPjwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJjb21wb25lbnRzL2RhdGEtZW50cnkvZGF0ZS1waWNrZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb21wb25lbnRzL2RhdGEtZW50cnkvZGF0ZS1waWNrZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj48SW50bE1lc3NhZ2VzXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cInNpZGViYXIuZGF0YUVudHJ5LmRhdGVQaWNrZXJcIi8+PC9zcGFuPjwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJjb21wb25lbnRzL2RhdGEtZW50cnkvZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NvbXBvbmVudHMvZGF0YS1lbnRyeS9mb3JtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+PEludGxNZXNzYWdlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzaWRlYmFyLmRhdGFFbnRyeS5mb3JtXCIvPjwvc3Bhbj48L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiY29tcG9uZW50cy9kYXRhLWVudHJ5L2lucHV0LW51bWJlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NvbXBvbmVudHMvZGF0YS1lbnRyeS9pbnB1dC1udW1iZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj48SW50bE1lc3NhZ2VzXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cInNpZGViYXIuZGF0YUVudHJ5LmlucHV0TnVtYmVyXCIvPjwvc3Bhbj48L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiY29tcG9uZW50cy9kYXRhLWVudHJ5L2lucHV0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29tcG9uZW50cy9kYXRhLWVudHJ5L2lucHV0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+PEludGxNZXNzYWdlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzaWRlYmFyLmRhdGFFbnRyeS5pbnB1dFwiLz48L3NwYW4+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cImNvbXBvbmVudHMvZGF0YS1lbnRyeS9tZW50aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29tcG9uZW50cy9kYXRhLWVudHJ5L21lbnRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj48SW50bE1lc3NhZ2VzXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cInNpZGViYXIuZGF0YUVudHJ5Lm1lbnRpb25cIi8+PC9zcGFuPjwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJjb21wb25lbnRzL2RhdGEtZW50cnkvcmF0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NvbXBvbmVudHMvZGF0YS1lbnRyeS9yYXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+PEludGxNZXNzYWdlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzaWRlYmFyLmRhdGFFbnRyeS5yYXRlXCIvPjwvc3Bhbj48L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiY29tcG9uZW50cy9kYXRhLWVudHJ5L3JhZGlvXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29tcG9uZW50cy9kYXRhLWVudHJ5L3JhZGlvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+PEludGxNZXNzYWdlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzaWRlYmFyLmRhdGFFbnRyeS5yYWRpb1wiLz48L3NwYW4+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cImNvbXBvbmVudHMvZGF0YS1lbnRyeS9zd2l0Y2hcIj5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb21wb25lbnRzL2RhdGEtZW50cnkvc3dpdGNoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+PEludGxNZXNzYWdlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzaWRlYmFyLmRhdGFFbnRyeS5zd2l0Y2hcIi8+PC9zcGFuPjwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJjb21wb25lbnRzL2RhdGEtZW50cnkvc2xpZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29tcG9uZW50cy9kYXRhLWVudHJ5L3NsaWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPjxJbnRsTWVzc2FnZXNcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwic2lkZWJhci5kYXRhRW50cnkuc2xpZGVyXCIvPjwvc3Bhbj48L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiY29tcG9uZW50cy9kYXRhLWVudHJ5L3NlbGVjdFwiPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NvbXBvbmVudHMvZGF0YS1lbnRyeS9zZWxlY3RcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj48SW50bE1lc3NhZ2VzXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cInNpZGViYXIuZGF0YUVudHJ5LnNlbGVjdFwiLz48L3NwYW4+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cImNvbXBvbmVudHMvZGF0YS1lbnRyeS90cmVlXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29tcG9uZW50cy9kYXRhLWVudHJ5L3RyZWUtc2VsZWN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+PEludGxNZXNzYWdlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzaWRlYmFyLmRhdGFFbnRyeS50cmVlU2VsZWN0XCIvPjwvc3Bhbj48L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiY29tcG9uZW50cy9kYXRhLWVudHJ5L3RyYW5zZmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29tcG9uZW50cy9kYXRhLWVudHJ5L3RyYW5zZmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+PEludGxNZXNzYWdlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzaWRlYmFyLmRhdGFFbnRyeS50cmFuc2ZlclwiLz48L3NwYW4+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cImNvbXBvbmVudHMvZGF0YS1lbnRyeS90aW1lLXBpY2tlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NvbXBvbmVudHMvZGF0YS1lbnRyeS90aW1lLXBpY2tlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPjxJbnRsTWVzc2FnZXNcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwic2lkZWJhci5kYXRhRW50cnkudGltZVBpY2tlclwiLz48L3NwYW4+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cImNvbXBvbmVudHMvZGF0YS1lbnRyeS91cGxvYWRcIj5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb21wb25lbnRzL2RhdGEtZW50cnkvdXBsb2FkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+PEludGxNZXNzYWdlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzaWRlYmFyLmRhdGFFbnRyeS51cGxvYWRcIi8+PC9zcGFuPjwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgIDwvU3ViTWVudT5cclxuXHJcbiAgICAgICAgICAgICAgPFN1Yk1lbnUga2V5PVwiZGF0YS1kaXNwbGF5XCIgcG9wdXBDbGFzc05hbWU9e2dldE5hdlN0eWxlU3ViTWVudUNsYXNzKG5hdlN0eWxlKX0gdGl0bGU9e1xyXG4gICAgICAgICAgICAgICAgPHNwYW4+PGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLWRhdGEtZGlzcGxheVwiLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+PEludGxNZXNzYWdlcyBpZD1cInNpZGViYXIuY29tcG9uZW50cy5kYXRhRGlzcGxheVwiLz48L3NwYW4+XHJcblxyXG4gICAgICAgICAgICAgIDwvc3Bhbj59PlxyXG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJjb21wb25lbnRzL2RhdGEtZGlzcGxheS9hdmF0YXJcIj5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb21wb25lbnRzL2RhdGEtZGlzcGxheS9hdmF0YXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj48SW50bE1lc3NhZ2VzXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cInNpZGViYXIuZGF0YURpc3BsYXkuYXZhdGFyXCIvPjwvc3Bhbj48L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiY29tcG9uZW50cy9kYXRhLWRpc3BsYXkvYmFkZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb21wb25lbnRzL2RhdGEtZGlzcGxheS9iYWRnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPjxJbnRsTWVzc2FnZXNcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwic2lkZWJhci5kYXRhRGlzcGxheS5iYWRnZVwiLz48L3NwYW4+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cImNvbXBvbmVudHMvZGF0YS1kaXNwbGF5L2NvbGxhcHNlXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29tcG9uZW50cy9kYXRhLWRpc3BsYXkvY29sbGFwc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj48SW50bE1lc3NhZ2VzXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cInNpZGViYXIuZGF0YURpc3BsYXkuY29sbGFwc2VcIi8+PC9zcGFuPjwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJjb21wb25lbnRzL2RhdGEtZGlzcGxheS9jYXJvdXNlbFwiPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NvbXBvbmVudHMvZGF0YS1kaXNwbGF5L2Nhcm91c2VsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+PEludGxNZXNzYWdlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzaWRlYmFyLmRhdGFEaXNwbGF5LmNhcm91c2VsXCIvPjwvc3Bhbj48L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiY29tcG9uZW50cy9kYXRhLWRpc3BsYXkvY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NvbXBvbmVudHMvZGF0YS1kaXNwbGF5L2NhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj48SW50bE1lc3NhZ2VzXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cInNpZGViYXIuZGF0YURpc3BsYXkuY2FyZFwiLz48L3NwYW4+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cImNvbXBvbmVudHMvZGF0YS1kaXNwbGF5L2NhbGVuZGFyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29tcG9uZW50cy9kYXRhLWRpc3BsYXkvY2FsZW5kYXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj48SW50bE1lc3NhZ2VzXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cInNpZGViYXIuZGF0YURpc3BsYXkuY2FsZW5kZXJcIi8+PC9zcGFuPjwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJjb21wb25lbnRzL2RhdGEtZGlzcGxheS9saXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb21wb25lbnRzL2RhdGEtZGlzcGxheS9saXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICA8YT48c3Bhbj48SW50bE1lc3NhZ2VzXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJzaWRlYmFyLmRhdGFEaXNwbGF5Lmxpc3RcIi8+PC9zcGFuPjwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiY29tcG9uZW50cy9kYXRhLWRpc3BsYXkvcG9wb3ZlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NvbXBvbmVudHMvZGF0YS1kaXNwbGF5L3BvcG92ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj48SW50bE1lc3NhZ2VzXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cInNpZGViYXIuZGF0YURpc3BsYXkucG9wb3ZlclwiLz48L3NwYW4+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cImNvbXBvbmVudHMvZGF0YS1kaXNwbGF5L3RyZWVcIj5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb21wb25lbnRzL2RhdGEtZGlzcGxheS90cmVlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+PEludGxNZXNzYWdlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzaWRlYmFyLmRhdGFEaXNwbGF5LnRyZWVcIi8+PC9zcGFuPjwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJjb21wb25lbnRzL2RhdGEtZGlzcGxheS90b29sdGlwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29tcG9uZW50cy9kYXRhLWRpc3BsYXkvdG9vbHRpcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPjxJbnRsTWVzc2FnZXNcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwic2lkZWJhci5kYXRhRGlzcGxheS50b29sVGlwc1wiLz48L3NwYW4+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cImNvbXBvbmVudHMvZGF0YS1kaXNwbGF5L3RpbWVsaW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29tcG9uZW50cy9kYXRhLWRpc3BsYXkvdGltZWxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj48SW50bE1lc3NhZ2VzXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cInNpZGViYXIuZGF0YURpc3BsYXkudGltZUxpbmVcIi8+PC9zcGFuPjwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJjb21wb25lbnRzL2RhdGEtZGlzcGxheS90YWdcIj5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb21wb25lbnRzL2RhdGEtZGlzcGxheS90YWdcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj48SW50bE1lc3NhZ2VzXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cInNpZGViYXIuZGF0YURpc3BsYXkudGFnXCIvPjwvc3Bhbj48L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiY29tcG9uZW50cy9kYXRhLWRpc3BsYXkvdGFic1wiPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NvbXBvbmVudHMvZGF0YS1kaXNwbGF5L3RhYnNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj48SW50bE1lc3NhZ2VzXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cInNpZGViYXIuZGF0YURpc3BsYXkudGFic1wiLz48L3NwYW4+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgPC9TdWJNZW51PlxyXG5cclxuICAgICAgICAgICAgICA8U3ViTWVudSBrZXk9XCJmZWVkQmFja1wiIHBvcHVwQ2xhc3NOYW1lPXtnZXROYXZTdHlsZVN1Yk1lbnVDbGFzcyhuYXZTdHlsZSl9IHRpdGxlPXtcclxuICAgICAgICAgICAgICAgIDxzcGFuPjxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1mZWVkYmFja1wiLz5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj48SW50bE1lc3NhZ2VzIGlkPVwic2lkZWJhci5jb21wb25lbnRzLmZlZWRCYWNrXCIvPjwvc3Bhbj5cclxuXHJcbiAgICAgICAgICAgICAgPC9zcGFuPn0+XHJcbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cImNvbXBvbmVudHMvZmVlZEJhY2svYWxlcnRcIj5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb21wb25lbnRzL2ZlZWRCYWNrL2FsZXJ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+PEludGxNZXNzYWdlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzaWRlYmFyLmZlZWRCYWNrLmFsZXJ0XCIvPjwvc3Bhbj48L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiY29tcG9uZW50cy9mZWVkQmFjay9tb2RhbFwiPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NvbXBvbmVudHMvZmVlZEJhY2svbW9kYWxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj48SW50bE1lc3NhZ2VzXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cInNpZGViYXIuZmVlZEJhY2subW9kYWxcIi8+PC9zcGFuPjwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJjb21wb25lbnRzL2ZlZWRCYWNrL21lc3NhZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb21wb25lbnRzL2ZlZWRCYWNrL21lc3NhZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj48SW50bE1lc3NhZ2VzXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cInNpZGViYXIuZmVlZEJhY2subWVzc2FnZVwiLz48L3NwYW4+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cImNvbXBvbmVudHMvZmVlZEJhY2svbm90aWZpY2F0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29tcG9uZW50cy9mZWVkQmFjay9ub3RpZmljYXRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj48SW50bE1lc3NhZ2VzXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cInNpZGViYXIuZmVlZEJhY2subm90aWZpY2F0aW9uXCIvPjwvc3Bhbj48L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiY29tcG9uZW50cy9mZWVkQmFjay9wcm9ncmVzc1wiPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NvbXBvbmVudHMvZmVlZEJhY2svcHJvZ3Jlc3NcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj48SW50bE1lc3NhZ2VzXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cInNpZGViYXIuZmVlZEJhY2sucHJvZ3Jlc3NcIi8+PC9zcGFuPjwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJjb21wb25lbnRzL2ZlZWRCYWNrL3BvcGNvbmZpcm1cIj5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb21wb25lbnRzL2ZlZWRCYWNrL3BvcGNvbmZpcm1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj48SW50bE1lc3NhZ2VzIGlkPVwic2lkZWJhci5mZWVkQmFjay5wb3BDb25maXJtXCIvPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cImNvbXBvbmVudHMvZmVlZEJhY2svc3BpblwiPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NvbXBvbmVudHMvZmVlZEJhY2svc3BpblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPjxJbnRsTWVzc2FnZXNcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwic2lkZWJhci5mZWVkQmFjay5zcGluXCIvPjwvc3Bhbj48L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICA8L1N1Yk1lbnU+XHJcblxyXG4gICAgICAgICAgICAgIDxTdWJNZW51IGtleT1cIm90aGVyc1wiIHBvcHVwQ2xhc3NOYW1lPXtnZXROYXZTdHlsZVN1Yk1lbnVDbGFzcyhuYXZTdHlsZSl9IHRpdGxlPXtcclxuICAgICAgICAgICAgICAgIDxzcGFuPjxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1pbmJveFwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj48SW50bE1lc3NhZ2VzIGlkPVwic2lkZWJhci5jb21wb25lbnRzLm90aGVyXCIvPjwvc3Bhbj5cclxuXHJcbiAgICAgICAgICAgICAgPC9zcGFuPn0+XHJcbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cImNvbXBvbmVudHMvb3RoZXJzL2FuY2hvclwiPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NvbXBvbmVudHMvb3RoZXJzL2FuY2hvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPjxJbnRsTWVzc2FnZXNcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwic2lkZWJhci5vdGhlci5hbmNob3JcIi8+PC9zcGFuPjwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJjb21wb25lbnRzL290aGVycy9iYWNrdG9wXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29tcG9uZW50cy9vdGhlcnMvYmFja3RvcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPjxJbnRsTWVzc2FnZXNcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwic2lkZWJhci5vdGhlci5iYWNrVG9wXCIvPjwvc3Bhbj48L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiY29tcG9uZW50cy9vdGhlcnMvZGl2aWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NvbXBvbmVudHMvb3RoZXJzL2RpdmlkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj48SW50bE1lc3NhZ2VzXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cInNpZGViYXIub3RoZXIuZGl2aWRlclwiLz48L3NwYW4+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgPC9TdWJNZW51PlxyXG5cclxuICAgICAgICAgICAgICA8U3ViTWVudSBrZXk9XCJ0YWJsZVwiIHBvcHVwQ2xhc3NOYW1lPXtnZXROYXZTdHlsZVN1Yk1lbnVDbGFzcyhuYXZTdHlsZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLXRhYmxlXCIvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48SW50bE1lc3NhZ2VzIGlkPVwic2lkZWJhci5kYXRhRGlzcGxheS50YWJsZVwiLz48L3NwYW4+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPn0+XHJcbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cImNvbXBvbmVudHMvdGFibGUvYmFzaWNcIj5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb21wb25lbnRzL3RhYmxlL2Jhc2ljXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+PEludGxNZXNzYWdlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzaWRlYmFyLnZpZXcuYmFzaWNUYWJsZVwiLz48L3NwYW4+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cImNvbXBvbmVudHMvdGFibGUvZGF0YVwiPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NvbXBvbmVudHMvdGFibGUvZGF0YVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPjxJbnRsTWVzc2FnZXNcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwic2lkZWJhci52aWV3LmRhdGFUYWJsZVwiLz48L3NwYW4+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgPC9TdWJNZW51PlxyXG5cclxuICAgICAgICAgICAgPC9NZW51SXRlbUdyb3VwPiAqL31cclxuXHJcbiAgICAgICAgICAgIHsvKiA8TWVudUl0ZW1Hcm91cCBrZXk9XCJleHRyYS1jb21wb25lbnRzXCIgY2xhc3NOYW1lPVwiZ3gtbWVudS1ncm91cFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXs8SW50bE1lc3NhZ2VzIGlkPVwic2lkZWJhci5leHRyYUNvbXBvbmVudHNcIi8+fT5cclxuXHJcbiAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJleHRyYS1jb21wb25lbnRzL3N0cmlwZVwiPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9leHRyYS1jb21wb25lbnRzL3N0cmlwZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGljb24tY2FyZFwiLz5cclxuICAgICAgICAgICAgICAgICAgICBTdHJpcGVcclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgIDxTdWJNZW51IGtleT1cImVkaXRvclwiIHBvcHVwQ2xhc3NOYW1lPXtnZXROYXZTdHlsZVN1Yk1lbnVDbGFzcyhuYXZTdHlsZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9ezxzcGFuPjxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1lZGl0b3JcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjxJbnRsTWVzc2FnZXMgaWQ9XCJzaWRlYmFyLmVkaXRvcnNcIi8+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj59PlxyXG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJleHRyYS1jb21wb25lbnRzL2VkaXRvci9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2V4dHJhLWNvbXBvbmVudHMvZWRpdG9yL2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEludGxNZXNzYWdlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzaWRlYmFyLmVkaXRvcnMuQ0tFZGl0b3JcIi8+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgPC9TdWJNZW51PlxyXG5cclxuICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cImV4dHJhLWNvbXBvbmVudHMvY29sb3ItcGlja2VyXCI+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2V4dHJhLWNvbXBvbmVudHMvY29sb3ItcGlja2VyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhPjxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1waWNrZXJcIi8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPjxJbnRsTWVzc2FnZXMgaWQ9XCJzaWRlYmFyLnBpY2tlcnMuY29sb3JQaWNrZXJzXCIvPjwvc3Bhbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcblxyXG4gICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiZXh0cmEtY29tcG9uZW50cy9kbmRcIj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZXh0cmEtY29tcG9uZW50cy9kbmRcIj5cclxuICAgICAgICAgICAgICAgICAgPGE+PGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLWRyYWctYW5kLWRyb3BcIi8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPjxJbnRsTWVzc2FnZXMgaWQ9XCJzaWRlYmFyLmV4dGVuc2lvbnMuZHJhZ05Ecm9wXCIvPjwvc3Bhbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcblxyXG4gICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiZXh0cmEtY29tcG9uZW50cy9zd2VldC1hbGVydFwiPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9leHRyYS1jb21wb25lbnRzL3N3ZWV0LWFsZXJ0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhPjxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1zd2VldC1hbGVydFwiLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+PEludGxNZXNzYWdlcyBpZD1cInNpZGViYXIuZXh0ZW5zaW9ucy5zd2VldEFsZXJ0XCIvPjwvc3Bhbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcblxyXG4gICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiZXh0cmEtY29tcG9uZW50cy9ub3RpZmljYXRpb25cIj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZXh0cmEtY29tcG9uZW50cy9ub3RpZmljYXRpb25cIj48YT48aSBjbGFzc05hbWU9XCJpY29uIGljb24tbm90aWZpY2F0aW9uXCIvPlxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj48SW50bE1lc3NhZ2VzXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJzaWRlYmFyLmV4dGVuc2lvbnMubm90aWZpY2F0aW9uXCIvPjwvc3Bhbj48L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG5cclxuICAgICAgICAgICAgICA8U3ViTWVudSBrZXk9XCJ0aW1lLWxpbmVcIiBwb3B1cENsYXNzTmFtZT17Z2V0TmF2U3R5bGVTdWJNZW51Q2xhc3MobmF2U3R5bGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXs8c3Bhbj48aSBjbGFzc05hbWU9XCJpY29uIGljb24tdGltZWxpbmVcIi8+PHNwYW4+PEludGxNZXNzYWdlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzaWRlYmFyLnRpbWVMaW5lXCIvPjwvc3Bhbj48L3NwYW4+fT5cclxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiZXh0cmEtY29tcG9uZW50cy90aW1lLWxpbmUvZGVmYXVsdFwiPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2V4dHJhLWNvbXBvbmVudHMvdGltZS1saW5lL2RlZmF1bHRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj48SW50bE1lc3NhZ2VzXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cInNpZGViYXIudGltZUxpbmUuZGVmYXVsdFwiLz48L3NwYW4+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cImV4dHJhLWNvbXBvbmVudHMvdGltZS1saW5lL2RlZmF1bHQtd2l0aC1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZXh0cmEtY29tcG9uZW50cy90aW1lLWxpbmUvZGVmYXVsdC13aXRoLWljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj48SW50bE1lc3NhZ2VzXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cInNpZGViYXIudGltZUxpbmUuZGVmYXVsdHdpdGhJY29uc1wiLz48L3NwYW4+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cImV4dHJhLWNvbXBvbmVudHMvdGltZS1saW5lL2xlZnQtYWxpZ25cIj5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9leHRyYS1jb21wb25lbnRzL3RpbWUtbGluZS9sZWZ0LWFsaWduXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+PEludGxNZXNzYWdlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzaWRlYmFyLnRpbWVMaW5lLmxlZnRBbGlnbmVkXCIvPjwvc3Bhbj48L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICA8L1N1Yk1lbnU+XHJcblxyXG4gICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiZXh0cmEtY29tcG9uZW50cy9zaHVmZmxlXCI+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2V4dHJhLWNvbXBvbmVudHMvc2h1ZmZsZVwiPjxhPjxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1zaHVmZmxlXCIvPlxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj48SW50bE1lc3NhZ2VzXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJzaWRlYmFyLmV4dGVuc2lvbnMuc2h1ZmZsZVwiLz48L3NwYW4+PC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuXHJcbiAgICAgICAgICAgIDwvTWVudUl0ZW1Hcm91cD4gKi99XHJcblxyXG4gICAgICAgICAgICB7LyogPE1lbnVJdGVtR3JvdXAga2V5PVwiZXh0ZW5zaW9uc1wiIGNsYXNzTmFtZT1cImd4LW1lbnUtZ3JvdXBcIiB0aXRsZT17PEludGxNZXNzYWdlcyBpZD1cInNpZGViYXIuZXh0ZW5zaW9uc1wiLz59PlxyXG5cclxuICAgICAgICAgICAgICA8U3ViTWVudSBrZXk9XCJtYXBcIiBwb3B1cENsYXNzTmFtZT17Z2V0TmF2U3R5bGVTdWJNZW51Q2xhc3MobmF2U3R5bGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXs8c3Bhbj48aSBjbGFzc05hbWU9XCJpY29uIGljb24tZXh0ZW5zaW9uc1wiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PEludGxNZXNzYWdlcyBpZD1cInNpZGViYXIubWFwXCIvPjwvc3Bhbj48L3NwYW4+fT5cclxuICAgICAgICAgICAgICAgIDxTdWJNZW51IGtleT1cImdvb2dsZVwiIHBvcHVwQ2xhc3NOYW1lPXtnZXROYXZTdHlsZVN1Yk1lbnVDbGFzcyhuYXZTdHlsZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGljb24tbWFwLWdvb2dsZVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PEludGxNZXNzYWdlcyBpZD1cInNpZGViYXIuZ29vZ2xlLm1hcFwiLz48L3NwYW4+PC9zcGFuPn0+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cImV4dGVuc2lvbnMvbWFwL2dvb2dsZS9zaW1wbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2V4dGVuc2lvbnMvbWFwL2dvb2dsZS9zaW1wbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjxJbnRsTWVzc2FnZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzaWRlYmFyLm1hcC5zaW1wbGVcIi8+PC9zcGFuPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiZXh0ZW5zaW9ucy9tYXAvZ29vZ2xlL3N0eWxlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZXh0ZW5zaW9ucy9tYXAvZ29vZ2xlL3N0eWxlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PEludGxNZXNzYWdlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInNpZGViYXIubWFwLnN0eWxlZFwiLz48L3NwYW4+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJleHRlbnNpb25zL21hcC9nb29nbGUvZ2VvLWxvY2F0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9leHRlbnNpb25zL21hcC9nb29nbGUvZ2VvLWxvY2F0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48SW50bE1lc3NhZ2VzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwic2lkZWJhci5tYXAuZ2VvTG9jYXRpb25cIi8+PC9zcGFuPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiZXh0ZW5zaW9ucy9tYXAvZ29vZ2xlL2RpcmVjdGlvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2V4dGVuc2lvbnMvbWFwL2dvb2dsZS9kaXJlY3Rpb25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48SW50bE1lc3NhZ2VzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwic2lkZWJhci5tYXAubWFwRGlyZWN0aW9uXCIvPjwvc3Bhbj48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cImV4dGVuc2lvbnMvbWFwL2dvb2dsZS9vdmVybGF5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9leHRlbnNpb25zL21hcC9nb29nbGUvb3ZlcmxheVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PEludGxNZXNzYWdlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInNpZGViYXIubWFwLm92ZXJsYXlcIi8+PC9zcGFuPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiZXh0ZW5zaW9ucy9tYXAvZ29vZ2xlL2ttbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZXh0ZW5zaW9ucy9tYXAvZ29vZ2xlL2ttbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PEludGxNZXNzYWdlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInNpZGViYXIubWFwLmttTGF5ZXJcIi8+PC9zcGFuPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiZXh0ZW5zaW9ucy9tYXAvZ29vZ2xlL3BvcHVwLWluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2V4dGVuc2lvbnMvbWFwL2dvb2dsZS9wb3B1cC1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48SW50bE1lc3NhZ2VzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwic2lkZWJhci5tYXAucG9wdXBJbmZvXCIvPjwvc3Bhbj48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cImV4dGVuc2lvbnMvbWFwL2dvb2dsZS90cmFmZmljXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9leHRlbnNpb25zL21hcC9nb29nbGUvdHJhZmZpY1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PEludGxNZXNzYWdlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInNpZGViYXIubWFwLnRyYWZmaWNMYXllclwiLz48L3NwYW4+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJleHRlbnNpb25zL21hcC9nb29nbGUvc3RyZWV0LXZpZXdcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2V4dGVuc2lvbnMvbWFwL2dvb2dsZS9zdHJlZXQtdmlld1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PEludGxNZXNzYWdlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInNpZGViYXIubWFwLnN0cmVldFZpZXdcIi8+PC9zcGFuPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiZXh0ZW5zaW9ucy9tYXAvZ29vZ2xlL2V2ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9leHRlbnNpb25zL21hcC9nb29nbGUvZXZlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjxJbnRsTWVzc2FnZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzaWRlYmFyLm1hcC5ldmVudExpc3RlbmVyXCIvPjwvc3Bhbj48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cImV4dGVuc2lvbnMvbWFwL2dvb2dsZS9kcmF3aW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9leHRlbnNpb25zL21hcC9nb29nbGUvZHJhd2luZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PEludGxNZXNzYWdlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInNpZGViYXIubWFwLm1hcERyYXdpbmdcIi8+PC9zcGFuPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiZXh0ZW5zaW9ucy9tYXAvZ29vZ2xlL2NsdXN0ZXJpbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2V4dGVuc2lvbnMvbWFwL2dvb2dsZS9jbHVzdGVyaW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48SW50bE1lc3NhZ2VzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwic2lkZWJhci5tYXAubWFwQ2x1c3RlcmluZ1wiLz48L3NwYW4+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgIDwvU3ViTWVudT5cclxuXHJcbiAgICAgICAgICAgICAgICA8U3ViTWVudSBrZXk9XCJhbW1hcFwiIHBvcHVwQ2xhc3NOYW1lPXtnZXROYXZTdHlsZVN1Yk1lbnVDbGFzcyhuYXZTdHlsZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1hbWNoYXJ0XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48SW50bE1lc3NhZ2VzIGlkPVwic2lkZWJhci5hbW1hcFwiLz48L3NwYW4+PC9zcGFuPn0+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cImV4dGVuc2lvbnMvbWFwL2FtbWFwL2FuaW1hdGlvbnMtbGluZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2V4dGVuc2lvbnMvbWFwL2FtbWFwL2FuaW1hdGlvbnMtbGluZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjxJbnRsTWVzc2FnZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzaWRlYmFyLm1hcC5hbmltYXRpb25zLmxpbmVzXCIvPjwvc3Bhbj48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cImV4dGVuc2lvbnMvbWFwL2FtbWFwL2N1cnZlZC1saW5lc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZXh0ZW5zaW9ucy9tYXAvYW1tYXAvY3VydmVkLWxpbmVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48SW50bE1lc3NhZ2VzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwic2lkZWJhci5tYXAuY3VydmVkLmxpbmVzXCIvPjwvc3Bhbj48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cImV4dGVuc2lvbnMvbWFwL2FtbWFwL3pvb21pbmctY291bnRyaWVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9leHRlbnNpb25zL21hcC9hbW1hcC96b29taW5nLWNvdW50cmllc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PEludGxNZXNzYWdlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInNpZGViYXIubWFwLnpvb21pbmcuY291bnRyaWVzXCIvPjwvc3Bhbj48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cImV4dGVuc2lvbnMvbWFwL2FtbWFwL3BhdHRlcm5zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9leHRlbnNpb25zL21hcC9hbW1hcC9wYXR0ZXJuc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PEludGxNZXNzYWdlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInNpZGViYXIubWFwLnBhdHRlcm5zXCIvPjwvc3Bhbj48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cImV4dGVuc2lvbnMvbWFwL2FtbWFwL2NhcGl0YWxzLW1hcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZXh0ZW5zaW9ucy9tYXAvYW1tYXAvY2FwaXRhbHMtbWFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48SW50bE1lc3NhZ2VzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwic2lkZWJhci5tYXAuY2FwaXRhbHMubWFwXCIvPjwvc3Bhbj48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cImV4dGVuc2lvbnMvbWFwL2FtbWFwL21hcC1tYXJrZXJzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9leHRlbnNpb25zL21hcC9hbW1hcC9tYXAtbWFya2Vyc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICA8c3Bhbj48SW50bE1lc3NhZ2VzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzaWRlYmFyLm1hcC5tYXJrZXJzXCIvPjwvc3Bhbj48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cImV4dGVuc2lvbnMvbWFwL2FtbWFwL2ZsaWdodC1yb3V0ZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2V4dGVuc2lvbnMvbWFwL2FtbWFwL2ZsaWdodC1yb3V0ZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjxJbnRsTWVzc2FnZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzaWRlYmFyLm1hcC5mbGlnaHQucm91dGVzXCIvPjwvc3Bhbj48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cImV4dGVuc2lvbnMvbWFwL2FtbWFwL2Nob3JvcGxldGhcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2V4dGVuc2lvbnMvbWFwL2FtbWFwL2Nob3JvcGxldGhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjxJbnRsTWVzc2FnZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzaWRlYmFyLm1hcC5jaG9yb3BsZXRoXCIvPjwvc3Bhbj48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cImV4dGVuc2lvbnMvbWFwL2FtbWFwL2dyb3VwZWQtY291bnRyaWVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9leHRlbnNpb25zL21hcC9hbW1hcC9ncm91cGVkLWNvdW50cmllc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PEludGxNZXNzYWdlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInNpZGViYXIubWFwLmdyb3VwZWQuY291bnRyaWVzXCIvPjwvc3Bhbj48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cImV4dGVuc2lvbnMvbWFwL2FtbWFwL2J1YmJsZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2V4dGVuc2lvbnMvbWFwL2FtbWFwL2J1YmJsZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjxJbnRsTWVzc2FnZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzaWRlYmFyLm1hcC5idWJibGVzXCIvPjwvc3Bhbj48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cImV4dGVuc2lvbnMvbWFwL2FtbWFwL2RyaWxsLWRvd25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2V4dGVuc2lvbnMvbWFwL2FtbWFwL2RyaWxsLWRvd25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjxJbnRsTWVzc2FnZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzaWRlYmFyLm1hcC5kcmlsbC5kb3duXCIvPjwvc3Bhbj48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cImV4dGVuc2lvbnMvbWFwL2FtbWFwL211bHRpcGxlLWFyZWFzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9leHRlbnNpb25zL21hcC9hbW1hcC9tdWx0aXBsZS1hcmVhc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PEludGxNZXNzYWdlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInNpZGViYXIubWFwLm11bHRpcGxlLmFyZWFzXCIvPjwvc3Bhbj48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cImV4dGVuc2lvbnMvbWFwL2FtbWFwL3dlYXRoZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2V4dGVuc2lvbnMvbWFwL2FtbWFwL3dlYXRoZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjxJbnRsTWVzc2FnZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzaWRlYmFyLm1hcC53ZWF0aGVyXCIvPjwvc3Bhbj48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvU3ViTWVudT5cclxuICAgICAgICAgICAgICA8L1N1Yk1lbnU+XHJcblxyXG4gICAgICAgICAgICAgIDxTdWJNZW51IGtleT1cImNoYXJ0XCIgcG9wdXBDbGFzc05hbWU9e2dldE5hdlN0eWxlU3ViTWVudUNsYXNzKG5hdlN0eWxlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17PHNwYW4+PGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLWNoYXJ0XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48SW50bE1lc3NhZ2VzIGlkPVwic2lkZWJhci5jaGFydFwiLz48L3NwYW4+PC9zcGFuPn0+XHJcblxyXG4gICAgICAgICAgICAgICAgPFN1Yk1lbnUga2V5PVwicmVjaGFydHNcIiBwb3B1cENsYXNzTmFtZT17Z2V0TmF2U3R5bGVTdWJNZW51Q2xhc3MobmF2U3R5bGUpfSB0aXRsZT17XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuPjxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1jaGFydC1hcmVhLW5ld1wiLz5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj48SW50bE1lc3NhZ2VzIGlkPVwic2lkZWJhci5jb21wb25lbnRzLnJlY2hhcnRcIi8+PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvc3Bhbj59PlxyXG5cclxuICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJleHRlbnNpb25zL2NoYXJ0L3JlY2hhcnRzL2FyZWFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2V4dGVuc2lvbnMvY2hhcnQvcmVjaGFydHMvYXJlYVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PEludGxNZXNzYWdlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInNpZGViYXIuY2hhcnQuYXJlYVwiLz48L3NwYW4+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJleHRlbnNpb25zL2NoYXJ0L3JlY2hhcnRzL2JhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZXh0ZW5zaW9ucy9jaGFydC9yZWNoYXJ0cy9iYXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjxJbnRsTWVzc2FnZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzaWRlYmFyLmNoYXJ0LmJhclwiLz48L3NwYW4+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJleHRlbnNpb25zL2NoYXJ0L3JlY2hhcnRzL2NvbXBvc2VkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9leHRlbnNpb25zL2NoYXJ0L3JlY2hhcnRzL2NvbXBvc2VkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48SW50bE1lc3NhZ2VzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwic2lkZWJhci5jaGFydC5jb21wb3NlZFwiLz48L3NwYW4+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJleHRlbnNpb25zL2NoYXJ0L3JlY2hhcnRzL2xpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2V4dGVuc2lvbnMvY2hhcnQvcmVjaGFydHMvbGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PEludGxNZXNzYWdlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInNpZGViYXIuY2hhcnQubGluZVwiLz48L3NwYW4+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJleHRlbnNpb25zL2NoYXJ0L3JlY2hhcnRzL3BpZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZXh0ZW5zaW9ucy9jaGFydC9yZWNoYXJ0cy9waWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjxJbnRsTWVzc2FnZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzaWRlYmFyLmNoYXJ0LnBpZVwiLz48L3NwYW4+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJleHRlbnNpb25zL2NoYXJ0L3JlY2hhcnRzL3JhZGFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9leHRlbnNpb25zL2NoYXJ0L3JlY2hhcnRzL3JhZGFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48SW50bE1lc3NhZ2VzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwic2lkZWJhci5jaGFydC5yYWRhclwiLz48L3NwYW4+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJleHRlbnNpb25zL2NoYXJ0L3JlY2hhcnRzL3JhZGlhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZXh0ZW5zaW9ucy9jaGFydC9yZWNoYXJ0cy9yYWRpYWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjxJbnRsTWVzc2FnZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzaWRlYmFyLmNoYXJ0LnJhZGlhbFwiLz48L3NwYW4+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJleHRlbnNpb25zL2NoYXJ0L3JlY2hhcnRzL3NjYXR0ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2V4dGVuc2lvbnMvY2hhcnQvcmVjaGFydHMvc2NhdHRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PEludGxNZXNzYWdlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInNpZGViYXIuY2hhcnQuc2NhdHRlclwiLz48L3NwYW4+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJleHRlbnNpb25zL2NoYXJ0L3JlY2hhcnRzL3RyZWVtYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2V4dGVuc2lvbnMvY2hhcnQvcmVjaGFydHMvdHJlZW1hcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PEludGxNZXNzYWdlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInNpZGViYXIuY2hhcnQudHJlZVwiLz48L3NwYW4+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgIDwvU3ViTWVudT5cclxuXHJcbiAgICAgICAgICAgICAgICA8U3ViTWVudSBrZXk9XCJhbWNoYXJ0XCIgcG9wdXBDbGFzc05hbWU9e2dldE5hdlN0eWxlU3ViTWVudUNsYXNzKG5hdlN0eWxlKX0gdGl0bGU9e1xyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj48aSBjbGFzc05hbWU9XCJpY29uIGljb24tYW1jaGFydFwiLz5cclxuICAgICAgICAgICAgICAgIDxzcGFuPjxJbnRsTWVzc2FnZXMgaWQ9XCJzaWRlYmFyLmNvbXBvbmVudHMuYW1jaGFydFwiLz48L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9zcGFuPn0+XHJcbiAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiZXh0ZW5zaW9ucy9jaGFydC9hbWNoYXJ0L2FyZWFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2V4dGVuc2lvbnMvY2hhcnQvYW1jaGFydC9hcmVhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48SW50bE1lc3NhZ2VzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwic2lkZWJhci5jaGFydC5hcmVhXCIvPjwvc3Bhbj48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cImV4dGVuc2lvbnMvY2hhcnQvYW1jaGFydC9iYXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2V4dGVuc2lvbnMvY2hhcnQvYW1jaGFydC9iYXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjxJbnRsTWVzc2FnZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzaWRlYmFyLmNoYXJ0LmJhclwiLz48L3NwYW4+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJleHRlbnNpb25zL2NoYXJ0L2FtY2hhcnQvbGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZXh0ZW5zaW9ucy9jaGFydC9hbWNoYXJ0L2xpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjxJbnRsTWVzc2FnZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzaWRlYmFyLmNoYXJ0LmxpbmVcIi8+PC9zcGFuPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiZXh0ZW5zaW9ucy9jaGFydC9hbWNoYXJ0L3BpZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZXh0ZW5zaW9ucy9jaGFydC9hbWNoYXJ0L3BpZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PEludGxNZXNzYWdlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInNpZGViYXIuY2hhcnQucGllXCIvPjwvc3Bhbj48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cImV4dGVuc2lvbnMvY2hhcnQvYW1jaGFydC9jb21wb3NlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZXh0ZW5zaW9ucy9jaGFydC9hbWNoYXJ0L2NvbXBvc2VkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48SW50bE1lc3NhZ2VzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwic2lkZWJhci5jaGFydC5jb21wb3NlZFwiLz48L3NwYW4+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgIDwvU3ViTWVudT5cclxuXHJcbiAgICAgICAgICAgICAgPC9TdWJNZW51PlxyXG5cclxuICAgICAgICAgICAgPC9NZW51SXRlbUdyb3VwPiAqL31cclxuXHJcbiAgICAgICAgICAgIHsvKiA8TWVudUl0ZW1Hcm91cCBrZXk9XCJjdXN0b20tdmlld3NcIiBjbGFzc05hbWU9XCJneC1tZW51LWdyb3VwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9ezxJbnRsTWVzc2FnZXMgaWQ9XCJzaWRlYmFyLmN1c3RvbVZpZXdzXCIvPn0+XHJcbiAgICAgICAgICAgICAgPFN1Yk1lbnUga2V5PVwidXNlci1hdXRoXCIgcG9wdXBDbGFzc05hbWU9e2dldE5hdlN0eWxlU3ViTWVudUNsYXNzKG5hdlN0eWxlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17PHNwYW4+PGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLWF1dGgtc2NyZWVuXCIvPjxzcGFuPjxJbnRsTWVzc2FnZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiYXBwLnVzZXJBdXRoXCIvPjwvc3Bhbj48L3NwYW4+fT5cclxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiY3VzdG9tLXZpZXdzL3VzZXItYXV0aC9zaWduLWluXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY3VzdG9tLXZpZXdzL3VzZXItYXV0aC9zaWduLWluXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48SW50bE1lc3NhZ2VzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiYXBwLnVzZXJBdXRoLnNpZ25JblwiLz48L3NwYW4+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cImN1c3RvbS12aWV3cy91c2VyLWF1dGgvZm9yZ290LXBhc3N3b3JkXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY3VzdG9tLXZpZXdzL3VzZXItYXV0aC9mb3Jnb3QtcGFzc3dvcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjxJbnRsTWVzc2FnZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJhcHAudXNlckF1dGguZm9yZ290UGFzc3dvcmRcIi8+PC9zcGFuPjwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJjdXN0b20tdmlld3MvdXNlci1hdXRoL3NpZ24tdXBcIj5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jdXN0b20tdmlld3MvdXNlci1hdXRoL3NpZ24tdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjxJbnRsTWVzc2FnZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJhcHAudXNlckF1dGguc2lnblVwXCIvPjwvc3Bhbj48L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiY3VzdG9tLXZpZXdzL3VzZXItYXV0aC9sb2NrLXNjcmVlblwiPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2N1c3RvbS12aWV3cy91c2VyLWF1dGgvbG9jay1zY3JlZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjxJbnRsTWVzc2FnZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJhcHAudXNlckF1dGgubG9ja1NjcmVlblwiLz48L3NwYW4+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cImN1c3RvbS12aWV3cy91c2VyLWF1dGgvcmVzZXQtcGFzc3dvcmRcIj5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jdXN0b20tdmlld3MvdXNlci1hdXRoL3Jlc2V0LXBhc3N3b3JkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48SW50bE1lc3NhZ2VzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiYXBwLnVzZXJBdXRoLnJlc2V0UGFzc3dvcmRcIi8+PC9zcGFuPjwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgIDwvU3ViTWVudT5cclxuXHJcbiAgICAgICAgICAgICAgPFN1Yk1lbnUga2V5PVwibGlzdC10eXBlXCIgcG9wdXBDbGFzc05hbWU9e2dldE5hdlN0eWxlU3ViTWVudUNsYXNzKG5hdlN0eWxlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17PHNwYW4+PGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLWFsbC1jb250YWN0c1wiLz48c3Bhbj48SW50bE1lc3NhZ2VzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInNpZGViYXIubGlzdFR5cGVcIi8+PC9zcGFuPjwvc3Bhbj59PlxyXG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJjdXN0b20tdmlld3MvbGlzdC10eXBlL3NpbXBsZS1saXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY3VzdG9tLXZpZXdzL2xpc3QtdHlwZS9zaW1wbGUtbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PEludGxNZXNzYWdlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInNpZGViYXIubGlzdFR5cGUucGxhaW5MaXN0Vmlld1wiLz48L3NwYW4+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cImN1c3RvbS12aWV3cy9saXN0LXR5cGUvc3RyaXAtbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2N1c3RvbS12aWV3cy9saXN0LXR5cGUvc3RyaXAtbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PEludGxNZXNzYWdlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInNpZGViYXIubGlzdFR5cGUud2l0aERpdmlkZXJcIi8+PC9zcGFuPjwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJjdXN0b20tdmlld3MvbGlzdC10eXBlL2NhcmQtbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2N1c3RvbS12aWV3cy9saXN0LXR5cGUvY2FyZC1saXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48SW50bE1lc3NhZ2VzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwic2lkZWJhci5saXN0VHlwZS5jYXJkTGlzdFZpZXdcIi8+PC9zcGFuPjwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgIDwvU3ViTWVudT5cclxuXHJcbiAgICAgICAgICAgICAgPFN1Yk1lbnUga2V5PVwiZUNvbW1lcmNlXCIgcG9wdXBDbGFzc05hbWU9e2dldE5hdlN0eWxlU3ViTWVudUNsYXNzKG5hdlN0eWxlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17PHNwYW4+PGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLXNob3BwaW5nLWNhcnRcIi8+PHNwYW4+PEludGxNZXNzYWdlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzaWRlYmFyLmVDb21tZXJjZVwiLz48L3NwYW4+PC9zcGFuPn0+XHJcbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cImN1c3RvbS12aWV3cy9lQ29tbWVyY2UvcHJvZHVjdC1ncmlkXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY3VzdG9tLXZpZXdzL2VDb21tZXJjZS9wcm9kdWN0LWdyaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjxJbnRsTWVzc2FnZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzaWRlYmFyLmVDb21tZXJjZS5wcm9kdWN0R3JpZFwiLz48L3NwYW4+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cImN1c3RvbS12aWV3cy9lQ29tbWVyY2UvcHJvZHVjdC1saXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY3VzdG9tLXZpZXdzL2VDb21tZXJjZS9wcm9kdWN0LWxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjxJbnRsTWVzc2FnZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzaWRlYmFyLmVDb21tZXJjZS5wcm9kdWN0TGlzdFwiLz48L3NwYW4+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgPC9TdWJNZW51PlxyXG5cclxuICAgICAgICAgICAgICA8U3ViTWVudSBrZXk9XCJlcnJvci1wYWdlc1wiIHBvcHVwQ2xhc3NOYW1lPXtnZXROYXZTdHlsZVN1Yk1lbnVDbGFzcyhuYXZTdHlsZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9ezxzcGFuPjxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1lcnJvclwiLz48c3Bhbj48SW50bE1lc3NhZ2VzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInNpZGViYXIuZXh0cmFQYWdlc1wiLz48L3NwYW4+PC9zcGFuPn0+XHJcblxyXG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJjdXN0b20tdmlld3MvZXJyb3ItcGFnZXMvZXJyb3ItNDA0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY3VzdG9tLXZpZXdzL2Vycm9yLXBhZ2VzL2Vycm9yLTQwNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PEludGxNZXNzYWdlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInNpZGViYXIuZXh0cmFQYWdlcy40MDRcIi8+PC9zcGFuPjwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJjdXN0b20tdmlld3MvZXJyb3ItcGFnZXMvZXJyb3ItNTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY3VzdG9tLXZpZXdzL2Vycm9yLXBhZ2VzL2Vycm9yLTUwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PEludGxNZXNzYWdlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInNpZGViYXIuZXh0cmFQYWdlcy41MDBcIi8+PC9zcGFuPjwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgIDwvU3ViTWVudT5cclxuXHJcbiAgICAgICAgICAgICAgPFN1Yk1lbnUga2V5PVwiZXh0cmFzXCIgcG9wdXBDbGFzc05hbWU9e2dldE5hdlN0eWxlU3ViTWVudUNsYXNzKG5hdlN0eWxlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17PHNwYW4+PGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLWVsbGlwc2UtaFwiLz48c3Bhbj48SW50bE1lc3NhZ2VzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInNpZGViYXIubGlzdFR5cGUuZXh0cmFzXCIvPjwvc3Bhbj48L3NwYW4+fT5cclxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiY3VzdG9tLXZpZXdzL2V4dHJhcy9wcmljaW5nLXRhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY3VzdG9tLXZpZXdzL2V4dHJhcy9wcmljaW5nLXRhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48SW50bE1lc3NhZ2VzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwic2lkZWJhci5leHRyYUVsZW1lbnRzLnByaWNpbmdUYWJsZVwiLz48L3NwYW4+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcblxyXG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJjdXN0b20tdmlld3MvZXh0cmFzL2NhbGxvdXRzXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY3VzdG9tLXZpZXdzL2V4dHJhcy9jYWxsb3V0c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PEludGxNZXNzYWdlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInNpZGViYXIuZXh0cmFFbGVtZW50cy5jYWxsb3V0c1wiLz48L3NwYW4+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cImN1c3RvbS12aWV3cy9leHRyYXMvdGVzdGltb25pYWxzXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY3VzdG9tLXZpZXdzL2V4dHJhcy90ZXN0aW1vbmlhbHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjxJbnRsTWVzc2FnZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzaWRlYmFyLmV4dHJhRWxlbWVudHMudGVzdGltb25pYWxzXCIvPjwvc3Bhbj48L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICA8L1N1Yk1lbnU+XHJcblxyXG4gICAgICAgICAgICA8L01lbnVJdGVtR3JvdXA+ICovfVxyXG5cclxuICAgICAgICAgIDwvTWVudT5cclxuICAgICAgICA8L0N1c3RvbVNjcm9sbGJhcnM+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcblNpZGViYXJDb250ZW50LnByb3BUeXBlcyA9IHt9O1xyXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyQ29udGVudDtcclxuXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHt1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3J9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5pbXBvcnQge29uTmF2U3R5bGVDaGFuZ2UsIHRvZ2dsZUNvbGxhcHNlZFNpZGVOYXZ9IGZyb20gXCIuLi8uLi8uLi9yZWR1eC9hY3Rpb25zL1NldHRpbmdcIjtcclxuaW1wb3J0IHtcclxuICBOQVZfU1RZTEVfRFJBV0VSLFxyXG4gIE5BVl9TVFlMRV9GSVhFRCxcclxuICBOQVZfU1RZTEVfTUlOSV9TSURFQkFSLFxyXG4gIE5BVl9TVFlMRV9OT19IRUFERVJfTUlOSV9TSURFQkFSLFxyXG4gIFRBQl9TSVpFLFxyXG4gIFRIRU1FX1RZUEVfTElURVxyXG59IGZyb20gXCIuLi8uLi8uLi9jb25zdGFudHMvVGhlbWVTZXR0aW5nXCI7XHJcblxyXG5cclxuY29uc3QgU2lkZWJhckxvZ28gPSAoKSA9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHt3aWR0aCwgdGhlbWVUeXBlLCBuYXZDb2xsYXBzZWR9ID0gdXNlU2VsZWN0b3IoKHtzZXR0aW5nc30pID0+IHNldHRpbmdzKTtcclxuICBsZXQgbmF2U3R5bGUgPSB1c2VTZWxlY3Rvcigoe3NldHRpbmdzfSkgPT4gc2V0dGluZ3MubmF2U3R5bGUpO1xyXG4gIGlmICh3aWR0aCA8IFRBQl9TSVpFICYmIG5hdlN0eWxlID09PSBOQVZfU1RZTEVfRklYRUQpIHtcclxuICAgIG5hdlN0eWxlID0gTkFWX1NUWUxFX0RSQVdFUjtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtbGF5b3V0LXNpZGVyLWhlYWRlclwiPlxyXG4gICAgICB7KG5hdlN0eWxlID09PSBOQVZfU1RZTEVfRklYRUQgfHwgbmF2U3R5bGUgPT09IE5BVl9TVFlMRV9NSU5JX1NJREVCQVIpID8gPGRpdiBjbGFzc05hbWU9XCJneC1saW5lYmFyXCI+XHJcbiAgICAgICAgPGlcclxuICAgICAgICAgIGNsYXNzTmFtZT17YGd4LWljb24tYnRuIGljb24gaWNvbi0ke25hdlN0eWxlID09PSBOQVZfU1RZTEVfTUlOSV9TSURFQkFSID8gJ21lbnUtdW5mb2xkJyA6ICdtZW51LWZvbGQnfSAke3RoZW1lVHlwZSAhPT0gVEhFTUVfVFlQRV9MSVRFID8gJ2d4LXRleHQtd2hpdGUnIDogJyd9YH1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgaWYgKG5hdlN0eWxlID09PSBOQVZfU1RZTEVfRFJBV0VSKSB7XHJcbiAgICAgICAgICAgICAgZGlzcGF0Y2godG9nZ2xlQ29sbGFwc2VkU2lkZU5hdighbmF2Q29sbGFwc2VkKSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobmF2U3R5bGUgPT09IE5BVl9TVFlMRV9GSVhFRCkge1xyXG4gICAgICAgICAgICAgIGRpc3BhdGNoKG9uTmF2U3R5bGVDaGFuZ2UoTkFWX1NUWUxFX01JTklfU0lERUJBUikpXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobmF2U3R5bGUgPT09IE5BVl9TVFlMRV9OT19IRUFERVJfTUlOSV9TSURFQkFSKSB7XHJcbiAgICAgICAgICAgICAgZGlzcGF0Y2godG9nZ2xlQ29sbGFwc2VkU2lkZU5hdighbmF2Q29sbGFwc2VkKSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgZGlzcGF0Y2gob25OYXZTdHlsZUNoYW5nZShOQVZfU1RZTEVfRklYRUQpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PiA6IG51bGx9XHJcblxyXG4gICAgICA8TGluayBocmVmPVwiL1wiID5cclxuICAgICAgICA8YSBjbGFzc05hbWU9XCJneC1zaXRlLWxvZ29cIj5cclxuICAgICAgICB7bmF2U3R5bGUgPT09IE5BVl9TVFlMRV9OT19IRUFERVJfTUlOSV9TSURFQkFSICYmIHdpZHRoID49IFRBQl9TSVpFID9cclxuICAgICAgICAgIDxpbWcgYWx0PVwibG9cIiBzcmM9eyhcIi9pbWFnZXMvdy1sb2dvLnBuZ1wiKX0vPiA6XHJcbiAgICAgICAgICB0aGVtZVR5cGUgPT09IFRIRU1FX1RZUEVfTElURSA/XHJcbiAgICAgICAgICAgIDxpbWcgYWx0PVwibG9nbzFcIiBzcmM9eyhcIi9pbWFnZXMvbG9nby13aGl0ZS5wbmdcIil9Lz4gOlxyXG4gICAgICAgICAgICA8aW1nIGFsdD1cImxvZ28yXCIgc3JjPXsoXCIvaW1hZ2VzL2xvZ28ucG5nXCIpfS8+fVxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZGViYXJMb2dvO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7dXNlRGlzcGF0Y2h9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQge0F2YXRhciwgUG9wb3Zlcn0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHt1c2VyU2lnbk91dH0gZnJvbSBcIi4uLy4uLy4uL3JlZHV4L2FjdGlvbnMvQXV0aFwiO1xyXG5cclxuY29uc3QgVXNlclByb2ZpbGUgPSAoKSA9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHVzZXJNZW51T3B0aW9ucyA9IChcclxuICAgIDx1bCBjbGFzc05hbWU9XCJneC11c2VyLXBvcG92ZXJcIj5cclxuICAgICAgPGxpPk15IEFjY291bnQ8L2xpPlxyXG4gICAgICA8bGk+Q29ubmVjdGlvbnM8L2xpPlxyXG4gICAgICA8bGkgb25DbGljaz17KCkgPT4gZGlzcGF0Y2godXNlclNpZ25PdXQoKSl9PkxvZ291dFxyXG4gICAgICA8L2xpPlxyXG4gICAgPC91bD5cclxuICApO1xyXG5cclxuICByZXR1cm4gKFxyXG5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtZmxleC1yb3cgZ3gtYWxpZ24taXRlbXMtY2VudGVyIGd4LW1iLTQgZ3gtYXZhdGFyLXJvd1wiPlxyXG4gICAgICA8UG9wb3ZlciBwbGFjZW1lbnQ9XCJib3R0b21SaWdodFwiIGNvbnRlbnQ9e3VzZXJNZW51T3B0aW9uc30gdHJpZ2dlcj1cImNsaWNrXCI+XHJcbiAgICAgICAgPEF2YXRhciBzcmM9e1wiL2ltYWdlcy9hdmF0YXIvZG9tbmljLWhhcnJpcy5wbmdcIn1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImd4LXNpemUtNDAgZ3gtcG9pbnRlciBneC1tci0zXCIgYWx0PVwiXCIvPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImd4LWF2YXRhci1uYW1lXCI+Um9iIEZhcm5hbmRpZXM8aVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaWNvbiBpY29uLWNoZXZyb24tZG93biBneC1mcy14eHMgZ3gtbWwtMlwiLz48L3NwYW4+XHJcbiAgICAgIDwvUG9wb3Zlcj5cclxuICAgIDwvZGl2PlxyXG5cclxuICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyUHJvZmlsZTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHt1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3J9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQge0RyYXdlciwgTGF5b3V0fSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuaW1wb3J0IFNpZGViYXJDb250ZW50IGZyb20gXCIuL1NpZGViYXJDb250ZW50XCI7XHJcbmltcG9ydCB7dG9nZ2xlQ29sbGFwc2VkU2lkZU5hdiwgdXBkYXRlV2luZG93V2lkdGh9IGZyb20gXCIuLi8uLi8uLi9yZWR1eC9hY3Rpb25zL1NldHRpbmdcIjtcclxuaW1wb3J0IHtcclxuICBOQVZfU1RZTEVfRFJBV0VSLFxyXG4gIE5BVl9TVFlMRV9GSVhFRCxcclxuICBOQVZfU1RZTEVfTUlOSV9TSURFQkFSLFxyXG4gIE5BVl9TVFlMRV9OT19IRUFERVJfRVhQQU5ERURfU0lERUJBUixcclxuICBOQVZfU1RZTEVfTk9fSEVBREVSX01JTklfU0lERUJBUixcclxuICBUQUJfU0laRSxcclxuICBUSEVNRV9UWVBFX0xJVEVcclxufSBmcm9tIFwiLi4vLi4vLi4vY29uc3RhbnRzL1RoZW1lU2V0dGluZ1wiO1xyXG5cclxuY29uc3Qge1NpZGVyfSA9IExheW91dDtcclxuXHJcbmNvbnN0IFNpZGViYXIgPSAoKSA9PiB7XHJcblxyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgY29uc3Qge3RoZW1lVHlwZSwgbmF2Q29sbGFwc2VkLCB3aWR0aCwgbmF2U3R5bGV9ID0gdXNlU2VsZWN0b3IoKHtzZXR0aW5nc30pID0+IHNldHRpbmdzKTtcclxuXHJcblxyXG4gIGNvbnN0IG9uVG9nZ2xlQ29sbGFwc2VkTmF2ID0gKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2godG9nZ2xlQ29sbGFwc2VkU2lkZU5hdighbmF2Q29sbGFwc2VkKSk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKHVwZGF0ZVdpbmRvd1dpZHRoKHdpbmRvdy5pbm5lcldpZHRoKSk7XHJcbiAgICB9KVxyXG4gIH0sIFtkaXNwYXRjaF0pO1xyXG5cclxuXHJcbiAgbGV0IGRyYXdlclN0eWxlID0gXCJneC1jb2xsYXBzZWQtc2lkZWJhclwiO1xyXG5cclxuICBpZiAobmF2U3R5bGUgPT09IE5BVl9TVFlMRV9GSVhFRCkge1xyXG4gICAgZHJhd2VyU3R5bGUgPSBcIlwiO1xyXG4gIH0gZWxzZSBpZiAobmF2U3R5bGUgPT09IE5BVl9TVFlMRV9OT19IRUFERVJfTUlOSV9TSURFQkFSKSB7XHJcbiAgICBkcmF3ZXJTdHlsZSA9IFwiZ3gtbWluaS1zaWRlYmFyIGd4LW1pbmktY3VzdG9tLXNpZGViYXJcIjtcclxuICB9IGVsc2UgaWYgKG5hdlN0eWxlID09PSBOQVZfU1RZTEVfTk9fSEVBREVSX0VYUEFOREVEX1NJREVCQVIpIHtcclxuICAgIGRyYXdlclN0eWxlID0gXCJneC1jdXN0b20tc2lkZWJhclwiXHJcbiAgfSBlbHNlIGlmIChuYXZTdHlsZSA9PT0gTkFWX1NUWUxFX01JTklfU0lERUJBUikge1xyXG4gICAgZHJhd2VyU3R5bGUgPSBcImd4LW1pbmktc2lkZWJhclwiO1xyXG4gIH0gZWxzZSBpZiAobmF2U3R5bGUgPT09IE5BVl9TVFlMRV9EUkFXRVIpIHtcclxuICAgIGRyYXdlclN0eWxlID0gXCJneC1jb2xsYXBzZWQtc2lkZWJhclwiXHJcbiAgfVxyXG4gIGlmICgobmF2U3R5bGUgPT09IE5BVl9TVFlMRV9GSVhFRCB8fCBuYXZTdHlsZSA9PT0gTkFWX1NUWUxFX01JTklfU0lERUJBUlxyXG4gICAgfHwgbmF2U3R5bGUgPT09IE5BVl9TVFlMRV9OT19IRUFERVJfRVhQQU5ERURfU0lERUJBUikgJiYgd2lkdGggPCBUQUJfU0laRSkge1xyXG4gICAgZHJhd2VyU3R5bGUgPSBcImd4LWNvbGxhcHNlZC1zaWRlYmFyXCJcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxTaWRlclxyXG4gICAgICBjbGFzc05hbWU9e2BneC1hcHAtc2lkZWJhciAke2RyYXdlclN0eWxlfSAke3RoZW1lVHlwZSAhPT0gVEhFTUVfVFlQRV9MSVRFID8gJ2d4LWxheW91dC1zaWRlci1kYXJrJyA6IG51bGx9YH1cclxuICAgICAgdHJpZ2dlcj17bnVsbH1cclxuICAgICAgY29sbGFwc2VkPXsod2lkdGggPCBUQUJfU0laRSA/IGZhbHNlIDogbmF2U3R5bGUgPT09IE5BVl9TVFlMRV9NSU5JX1NJREVCQVIgfHwgbmF2U3R5bGUgPT09IE5BVl9TVFlMRV9OT19IRUFERVJfTUlOSV9TSURFQkFSKX1cclxuICAgICAgdGhlbWU9e3RoZW1lVHlwZSA9PT0gVEhFTUVfVFlQRV9MSVRFID8gXCJsaXRlXCIgOiBcImRhcmtcIn1cclxuICAgICAgY29sbGFwc2libGU+XHJcbiAgICAgIHtcclxuICAgICAgICBuYXZTdHlsZSA9PT0gTkFWX1NUWUxFX0RSQVdFUiB8fCB3aWR0aCA8IFRBQl9TSVpFID9cclxuICAgICAgICAgIDxEcmF3ZXJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgZ3gtZHJhd2VyLXNpZGViYXIgJHt0aGVtZVR5cGUgIT09IFRIRU1FX1RZUEVfTElURSA/ICdneC1kcmF3ZXItc2lkZWJhci1kYXJrJyA6IG51bGx9YH1cclxuICAgICAgICAgICAgcGxhY2VtZW50PVwibGVmdFwiXHJcbiAgICAgICAgICAgIGNsb3NhYmxlPXtmYWxzZX1cclxuICAgICAgICAgICAgb25DbG9zZT17b25Ub2dnbGVDb2xsYXBzZWROYXZ9XHJcbiAgICAgICAgICAgIHZpc2libGU9e25hdkNvbGxhcHNlZH0+XHJcbiAgICAgICAgICAgIDxTaWRlYmFyQ29udGVudC8+XHJcbiAgICAgICAgICA8L0RyYXdlcj4gOlxyXG4gICAgICAgICAgPFNpZGViYXJDb250ZW50Lz5cclxuICAgICAgfVxyXG4gICAgPC9TaWRlcj4pXHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFNpZGViYXI7XHJcbiIsImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtCdXR0b24sIERyb3Bkb3duLCBMYXlvdXQsIE1lbnUsIG1lc3NhZ2UsIFBvcG92ZXIsIFNlbGVjdH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBJY29uIGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuaW1wb3J0IHt1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3J9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgQ3VzdG9tU2Nyb2xsYmFycyBmcm9tIFwiLi4vLi4vLi4vLi4vdXRpbC9DdXN0b21TY3JvbGxiYXJzXCI7XHJcblxyXG5pbXBvcnQgbGFuZ3VhZ2VEYXRhIGZyb20gXCIuLi9sYW5ndWFnZURhdGFcIjtcclxuaW1wb3J0IFNlYXJjaEJveCBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9TZWFyY2hCb3hcIjtcclxuaW1wb3J0IFVzZXJJbmZvIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL1VzZXJJbmZvXCI7XHJcbmltcG9ydCBBcHBOb3RpZmljYXRpb24gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvQXBwTm90aWZpY2F0aW9uXCI7XHJcbmltcG9ydCBNYWlsTm90aWZpY2F0aW9uIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL01haWxOb3RpZmljYXRpb25cIjtcclxuaW1wb3J0IHtzd2l0Y2hMYW5ndWFnZSwgdG9nZ2xlQ29sbGFwc2VkU2lkZU5hdn0gZnJvbSBcIi4uLy4uLy4uLy4uL3JlZHV4L2FjdGlvbnMvU2V0dGluZ1wiO1xyXG5cclxuaW1wb3J0IHtUQUJfU0laRX0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbnN0YW50cy9UaGVtZVNldHRpbmdcIjtcclxuaW1wb3J0IEhvcml6b250YWxOYXYgZnJvbSBcIi4uL0hvcml6b250YWxOYXZcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgSW50bE1lc3NhZ2VzIGZyb20gXCIuLi8uLi8uLi8uLi91dGlsL0ludGxNZXNzYWdlc1wiO1xyXG5cclxuY29uc3Qge0hlYWRlcn0gPSBMYXlvdXQ7XHJcblxyXG5jb25zdCBPcHRpb24gPSBTZWxlY3QuT3B0aW9uO1xyXG5jb25zdCBtZW51ID0gKFxyXG4gIDxNZW51IG9uQ2xpY2s9e2hhbmRsZU1lbnVDbGlja30+XHJcbiAgICA8TWVudS5JdGVtIGtleT1cIjFcIj5Qcm9kdWN0czwvTWVudS5JdGVtPlxyXG4gICAgPE1lbnUuSXRlbSBrZXk9XCIyXCI+QmxvZzwvTWVudS5JdGVtPlxyXG4gICAgPE1lbnUuSXRlbSBrZXk9XCIzXCI+QXBwczwvTWVudS5JdGVtPlxyXG4gIDwvTWVudT5cclxuKTtcclxuXHJcbmZ1bmN0aW9uIGhhbmRsZU1lbnVDbGljaygpIHtcclxuICBtZXNzYWdlLmluZm8oJ0NsaWNrIG9uIG1lbnUgaXRlbS4nKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKHZhbHVlKSB7XHJcbiAgY29uc29sZS5sb2coYHNlbGVjdGVkICR7dmFsdWV9YCk7XHJcbn1cclxuXHJcblxyXG5jb25zdCBBYm92ZUhlYWRlciA9ICgpID0+IHtcclxuXHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICBjb25zdCBbc2VhcmNoVGV4dCwgc2V0U2VhcmNoVGV4dF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgbG9jYWxlID0gdXNlU2VsZWN0b3IoKHtzZXR0aW5nc30pID0+IHNldHRpbmdzLmxvY2FsZSk7XHJcbiAgY29uc3QgbmF2Q29sbGFwc2VkID0gdXNlU2VsZWN0b3IoKHtzZXR0aW5nc30pID0+IHNldHRpbmdzLm5hdkNvbGxhcHNlZCk7XHJcbiAgY29uc3Qgd2lkdGggPSB1c2VTZWxlY3Rvcigoe3NldHRpbmdzfSkgPT4gc2V0dGluZ3Mud2lkdGgpO1xyXG5cclxuICBjb25zdCBsYW5ndWFnZU1lbnUgPSAoKSA9PiAoXHJcbiAgICA8Q3VzdG9tU2Nyb2xsYmFycyBjbGFzc05hbWU9XCJneC1wb3BvdmVyLWxhbmctc2Nyb2xsXCI+XHJcbiAgICAgIDx1bCBjbGFzc05hbWU9XCJneC1zdWItcG9wb3ZlclwiPlxyXG4gICAgICAgIHtsYW5ndWFnZURhdGEubWFwKGxhbmd1YWdlID0+XHJcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZ3gtbWVkaWEgZ3gtcG9pbnRlclwiIGtleT17SlNPTi5zdHJpbmdpZnkobGFuZ3VhZ2UpfSBvbkNsaWNrPXsoZSkgPT5cclxuICAgICAgICAgICAgZGlzcGF0Y2goc3dpdGNoTGFuZ3VhZ2UobGFuZ3VhZ2UpKVxyXG4gICAgICAgICAgfT5cclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtgZmxhZyBmbGFnLTI0IGd4LW1yLTIgZmxhZy0ke2xhbmd1YWdlLmljb259YH0vPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJneC1sYW5ndWFnZS10ZXh0XCI+e2xhbmd1YWdlLm5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICApfVxyXG4gICAgICA8L3VsPlxyXG4gICAgPC9DdXN0b21TY3JvbGxiYXJzPik7XHJcblxyXG4gIGNvbnN0IHVwZGF0ZVNlYXJjaENoYXRVc2VyID0gKGV2dCkgPT4ge1xyXG4gICAgc2V0U2VhcmNoVGV4dChldnQudGFyZ2V0LnZhbHVlKVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWhlYWRlci1ob3Jpem9udGFsIGd4LWhlYWRlci1ob3Jpem9udGFsLWRhcmsgZ3gtYWJvdmUtaGVhZGVyLWhvcml6b250YWxcIj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtaGVhZGVyLWhvcml6b250YWwtbmF2IGd4LWhlYWRlci1ob3Jpem9udGFsLW5hdi1jdXJ2ZSBneC1kLW5vbmUgZ3gtZC1sZy1ibG9ja1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWhlYWRlci1ob3Jpem9udGFsLW5hdi1mbGV4XCI+XHJcbiAgICAgICAgICAgIDxIb3Jpem9udGFsTmF2Lz5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImd4LWhlYWRlci1ub3RpZmljYXRpb25zIGd4LW1sLWF1dG9cIj5cclxuICAgICAgICAgICAgICA8bGk+PHNwYW4gY2xhc3NOYW1lPVwiZ3gtcG9pbnRlciBneC1kLWJsb2NrXCI+PGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLW1lbnUtbGluZXNcIi8+PC9zcGFuPjwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPjxzcGFuIGNsYXNzTmFtZT1cImd4LXBvaW50ZXIgZ3gtZC1ibG9ja1wiPjxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1zZXR0aW5nXCIvPjwvc3Bhbj48L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT48c3BhbiBjbGFzc05hbWU9XCJneC1wb2ludGVyIGd4LWQtYmxvY2tcIj48aSBjbGFzc05hbWU9XCJpY29uIGljb24tYXBwcy1uZXdcIi8+PC9zcGFuPjwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWhlYWRlci1ob3Jpem9udGFsLXRvcFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWhlYWRlci1ob3Jpem9udGFsLXRvcC1mbGV4XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtaGVhZGVyLWhvcml6b250YWwtdG9wLWxlZnRcIj5cclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGljb24tYWxlcnQgZ3gtbXItM1wiLz5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJneC1tYi0wIGd4LXRleHQtdHJ1bmNhdGVcIj48SW50bE1lc3NhZ2VzIGlkPVwiYXBwLmFubm91bmNlZFwiLz48L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZ3gtbG9naW4tbGlzdFwiPlxyXG4gICAgICAgICAgICAgIDxsaT48SW50bE1lc3NhZ2VzIGlkPVwiYXBwLnVzZXJBdXRoLmxvZ2luXCIvPjwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPjxJbnRsTWVzc2FnZXMgaWQ9XCJhcHAudXNlckF1dGguc2lnblVwXCIvPjwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8SGVhZGVyXHJcbiAgICAgICAgY2xhc3NOYW1lPVwiZ3gtaGVhZGVyLWhvcml6b250YWwtbWFpblwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWhlYWRlci1ob3Jpem9udGFsLW1haW4tZmxleFwiPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1kLWJsb2NrIGd4LWQtbGctbm9uZSBneC1saW5lYmFyIGd4LW1yLXhzLTNcIj5cclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJneC1pY29uLWJ0biBpY29uIGljb24tbWVudVwiXHJcbiAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgaWYgKHdpZHRoIDw9IFRBQl9TSVpFKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHRvZ2dsZUNvbGxhcHNlZFNpZGVOYXYoIW5hdkNvbGxhcHNlZCkpO1xyXG4gICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgPlxyXG4gICAgICAgICAgICAgIDxpbWcgYWx0PVwiXCIgY2xhc3NOYW1lPVwiZ3gtZC1ibG9jayBneC1kLWxnLW5vbmUgZ3gtcG9pbnRlciBneC1tci14cy0zIGd4LXB0LXhzLTEgZ3gtdy1sb2dvXCIgc3JjPXsoXCIvaW1hZ2VzL3ctbG9nby5wbmdcIil9Lz48L0xpbms+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgPGltZyBhbHQ9XCJcIiBjbGFzc05hbWU9XCJneC1kLW5vbmUgZ3gtZC1sZy1ibG9jayBneC1wb2ludGVyIGd4LW1yLXhzLTUgZ3gtbG9nb1wiIHNyYz17KFwiL2ltYWdlcy9sb2dvLnBuZ1wiKX0vPjwvTGluaz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1oZWFkZXItc2VhcmNoIGd4LWQtbm9uZSBneC1kLWxnLWZsZXhcIj5cclxuICAgICAgICAgICAgICA8U2VhcmNoQm94IHN0eWxlTmFtZT1cImd4LWx0LWljb24tc2VhcmNoLWJhci1sZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBpbiBhcHAuLi5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3VwZGF0ZVNlYXJjaENoYXRVc2VyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaFRleHR9Lz5cclxuXHJcbiAgICAgICAgICAgICAgPFNlbGVjdCBkZWZhdWx0VmFsdWU9XCJsdWN5XCIgc3R5bGU9e3t3aWR0aDogMTIwfX0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0+XHJcbiAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiamFja1wiPlByb2R1Y3RzPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwibHVjeVwiPkFwcHM8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJZaW1pbmdoZVwiPkJsb2dzPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImd4LWhlYWRlci1ub3RpZmljYXRpb25zIGd4LW1sLWF1dG9cIj5cclxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZ3gtbm90aWZ5IGd4LW5vdGlmeS1zZWFyY2ggZ3gtZC1pbmxpbmUtYmxvY2sgZ3gtZC1sZy1ub25lXCI+XHJcbiAgICAgICAgICAgICAgICA8UG9wb3ZlciBvdmVybGF5Q2xhc3NOYW1lPVwiZ3gtcG9wb3Zlci1ob3JpemFudGFsXCIgcGxhY2VtZW50PVwiYm90dG9tUmlnaHRcIiBjb250ZW50PXtcclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1kLWZsZXhcIj48RHJvcGRvd24gb3ZlcmxheT17bWVudX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIENhdGVnb3J5IDxJY29uIHR5cGU9XCJkb3duXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWFyY2hCb3ggc3R5bGVOYW1lPVwiZ3gtcG9wb3Zlci1zZWFyY2gtYmFyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGluIGFwcC4uLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dXBkYXRlU2VhcmNoQ2hhdFVzZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNoVGV4dH0vPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgfSB0cmlnZ2VyPVwiY2xpY2tcIj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ3gtcG9pbnRlciBneC1kLWJsb2NrXCI+PGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLXNlYXJjaC1uZXdcIi8+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9Qb3BvdmVyPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJneC1ub3RpZnlcIj5cclxuICAgICAgICAgICAgICAgIDxQb3BvdmVyIG92ZXJsYXlDbGFzc05hbWU9XCJneC1wb3BvdmVyLWhvcml6YW50YWxcIiBwbGFjZW1lbnQ9XCJib3R0b21SaWdodFwiIGNvbnRlbnQ9ezxBcHBOb3RpZmljYXRpb24vPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgIHRyaWdnZXI9XCJjbGlja1wiPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJneC1wb2ludGVyIGd4LWQtYmxvY2tcIj48aSBjbGFzc05hbWU9XCJpY29uIGljb24tbm90aWZpY2F0aW9uXCIvPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvUG9wb3Zlcj5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZ3gtbXNnXCI+XHJcbiAgICAgICAgICAgICAgICA8UG9wb3ZlciBvdmVybGF5Q2xhc3NOYW1lPVwiZ3gtcG9wb3Zlci1ob3JpemFudGFsXCIgcGxhY2VtZW50PVwiYm90dG9tUmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17PE1haWxOb3RpZmljYXRpb24vPn0gdHJpZ2dlcj1cImNsaWNrXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJneC1wb2ludGVyIGd4LXN0YXR1cy1wb3MgZ3gtZC1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLWNoYXQtbmV3XCIvPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ3gtc3RhdHVzIGd4LXN0YXR1cy1ydGwgZ3gtc21hbGwgZ3gtb3JhbmdlXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9Qb3BvdmVyPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImd4LWxhbmd1YWdlXCI+XHJcbiAgICAgICAgICAgICAgICA8UG9wb3ZlciBvdmVybGF5Q2xhc3NOYW1lPVwiZ3gtcG9wb3Zlci1ob3JpemFudGFsXCIgcGxhY2VtZW50PVwiYm90dG9tUmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17bGFuZ3VhZ2VNZW51KCl9IHRyaWdnZXI9XCJjbGlja1wiPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImd4LXBvaW50ZXIgZ3gtZmxleC1yb3cgZ3gtYWxpZ24taXRlbXMtY2VudGVyXCI+PGlcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZsYWcgZmxhZy0yNCBmbGFnLSR7bG9jYWxlLmljb259YH0vPlxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvUG9wb3Zlcj5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJneC11c2VyLW5hdlwiPjxVc2VySW5mby8+PC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0hlYWRlcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWJvdmVIZWFkZXI7XHJcbiIsImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtCdXR0b24sIERyb3Bkb3duLCBMYXlvdXQsIE1lbnUsIG1lc3NhZ2UsIFBvcG92ZXIsIFNlbGVjdH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBJY29uIGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuaW1wb3J0IHt1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3J9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgQ3VzdG9tU2Nyb2xsYmFycyBmcm9tIFwiLi4vLi4vLi4vLi4vdXRpbC9DdXN0b21TY3JvbGxiYXJzXCI7XHJcbmltcG9ydCBsYW5ndWFnZURhdGEgZnJvbSBcIi4uL2xhbmd1YWdlRGF0YVwiO1xyXG5pbXBvcnQgU2VhcmNoQm94IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL1NlYXJjaEJveFwiO1xyXG5pbXBvcnQgVXNlckluZm8gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvVXNlckluZm9cIjtcclxuaW1wb3J0IEFwcE5vdGlmaWNhdGlvbiBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9BcHBOb3RpZmljYXRpb25cIjtcclxuaW1wb3J0IE1haWxOb3RpZmljYXRpb24gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvTWFpbE5vdGlmaWNhdGlvblwiO1xyXG5pbXBvcnQge3N3aXRjaExhbmd1YWdlLCB0b2dnbGVDb2xsYXBzZWRTaWRlTmF2fSBmcm9tIFwiLi4vLi4vLi4vLi4vcmVkdXgvYWN0aW9ucy9TZXR0aW5nXCI7XHJcbmltcG9ydCBIb3Jpem9udGFsTmF2IGZyb20gXCIuLi9Ib3Jpem9udGFsTmF2XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IEludGxNZXNzYWdlcyBmcm9tIFwiLi4vLi4vLi4vLi4vdXRpbC9JbnRsTWVzc2FnZXNcIjtcclxuXHJcbmNvbnN0IHtIZWFkZXJ9ID0gTGF5b3V0O1xyXG5cclxuY29uc3QgT3B0aW9uID0gU2VsZWN0Lk9wdGlvbjtcclxuY29uc3QgbWVudSA9IChcclxuICA8TWVudSBvbkNsaWNrPXtoYW5kbGVNZW51Q2xpY2t9PlxyXG4gICAgPE1lbnUuSXRlbSBrZXk9XCIxXCI+UHJvZHVjdHM8L01lbnUuSXRlbT5cclxuICAgIDxNZW51Lkl0ZW0ga2V5PVwiMlwiPkFwcHM8L01lbnUuSXRlbT5cclxuICAgIDxNZW51Lkl0ZW0ga2V5PVwiM1wiPkJsb2dzPC9NZW51Lkl0ZW0+XHJcbiAgPC9NZW51PlxyXG4pO1xyXG5cclxuZnVuY3Rpb24gaGFuZGxlTWVudUNsaWNrKGUpIHtcclxuICBtZXNzYWdlLmluZm8oJ0NsaWNrIG9uIG1lbnUgaXRlbS4nKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKHZhbHVlKSB7XHJcbiAgY29uc29sZS5sb2coYHNlbGVjdGVkICR7dmFsdWV9YCk7XHJcbn1cclxuXHJcbmNvbnN0IEJlbG93SGVhZGVyID0gKCkgPT4ge1xyXG5cclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gIGNvbnN0IFtzZWFyY2hUZXh0LCBzZXRTZWFyY2hUZXh0XSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBsb2NhbGUgPSB1c2VTZWxlY3Rvcigoe3NldHRpbmdzfSkgPT4gc2V0dGluZ3MubG9jYWxlKTtcclxuICBjb25zdCBuYXZDb2xsYXBzZWQgPSB1c2VTZWxlY3Rvcigoe3NldHRpbmdzfSkgPT4gc2V0dGluZ3MubmF2Q29sbGFwc2VkKTtcclxuXHJcbiAgY29uc3QgbGFuZ3VhZ2VNZW51ID0gKCkgPT4gKFxyXG4gICAgPEN1c3RvbVNjcm9sbGJhcnMgY2xhc3NOYW1lPVwiZ3gtcG9wb3Zlci1sYW5nLXNjcm9sbFwiPlxyXG4gICAgICA8dWwgY2xhc3NOYW1lPVwiZ3gtc3ViLXBvcG92ZXJcIj5cclxuICAgICAgICB7bGFuZ3VhZ2VEYXRhLm1hcChsYW5ndWFnZSA9PlxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImd4LW1lZGlhIGd4LXBvaW50ZXJcIiBrZXk9e0pTT04uc3RyaW5naWZ5KGxhbmd1YWdlKX0gb25DbGljaz17KGUpID0+XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHN3aXRjaExhbmd1YWdlKGxhbmd1YWdlKSlcclxuICAgICAgICAgIH0+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17YGZsYWcgZmxhZy0yNCBneC1tci0yIGZsYWctJHtsYW5ndWFnZS5pY29ufWB9Lz5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ3gtbGFuZ3VhZ2UtdGV4dFwiPntsYW5ndWFnZS5uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC91bD5cclxuICAgIDwvQ3VzdG9tU2Nyb2xsYmFycz4pO1xyXG5cclxuICBjb25zdCB1cGRhdGVTZWFyY2hDaGF0VXNlciA9IChldnQpID0+IHtcclxuICAgIHNldFNlYXJjaFRleHQoZXZ0LnRhcmdldC52YWx1ZSlcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJneC1oZWFkZXItaG9yaXpvbnRhbCBneC1oZWFkZXItaG9yaXpvbnRhbC1kYXJrIGd4LWJlbG93LWhlYWRlci1ob3Jpem9udGFsXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtaGVhZGVyLWhvcml6b250YWwtdG9wXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1jb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtaGVhZGVyLWhvcml6b250YWwtdG9wLWZsZXhcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1oZWFkZXItaG9yaXpvbnRhbC10b3AtbGVmdFwiPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1hbGVydCBneC1tci0zXCIvPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImd4LW1iLTAgZ3gtdGV4dC10cnVuY2F0ZVwiPjxJbnRsTWVzc2FnZXMgaWQ9XCJhcHAuYW5ub3VuY2VkXCIvPjwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJneC1sb2dpbi1saXN0XCI+XHJcbiAgICAgICAgICAgICAgPGxpPkxvZ2luPC9saT5cclxuICAgICAgICAgICAgICA8bGk+U2lnbnVwPC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICA8SGVhZGVyXHJcbiAgICAgICAgY2xhc3NOYW1lPVwiZ3gtaGVhZGVyLWhvcml6b250YWwtbWFpblwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWhlYWRlci1ob3Jpem9udGFsLW1haW4tZmxleFwiPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1kLWJsb2NrIGd4LWQtbGctbm9uZSBneC1saW5lYmFyIGd4LW1yLXhzLTNcIj5cclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJneC1pY29uLWJ0biBpY29uIGljb24tbWVudVwiXHJcbiAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgZGlzcGF0Y2godG9nZ2xlQ29sbGFwc2VkU2lkZU5hdighbmF2Q29sbGFwc2VkKSk7XHJcbiAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICA8aW1nIGFsdD1cIlwiIGNsYXNzTmFtZT1cImd4LWQtYmxvY2sgZ3gtZC1sZy1ub25lIGd4LXBvaW50ZXIgZ3gtbXIteHMtMyBneC1wdC14cy0xIGd4LXctbG9nb1wiIHNyYz17KFwiL2ltYWdlcy93LWxvZ28ucG5nXCIpfS8+PC9MaW5rPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgIDxpbWcgYWx0PVwiXCIgY2xhc3NOYW1lPVwiZ3gtZC1ub25lIGd4LWQtbGctYmxvY2sgZ3gtcG9pbnRlciBneC1tci14cy01IGd4LWxvZ29cIiBzcmM9eyhcIi9pbWFnZXMvbG9nby5wbmdcIil9Lz48L0xpbms+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtaGVhZGVyLXNlYXJjaCBneC1kLW5vbmUgZ3gtZC1sZy1mbGV4XCI+XHJcbiAgICAgICAgICAgICAgPFNlYXJjaEJveCBzdHlsZU5hbWU9XCJneC1sdC1pY29uLXNlYXJjaC1iYXItbGdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggaW4gYXBwLi4uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt1cGRhdGVTZWFyY2hDaGF0VXNlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2hUZXh0fS8+XHJcblxyXG4gICAgICAgICAgICAgIDxTZWxlY3QgZGVmYXVsdFZhbHVlPVwibHVjeVwiIHN0eWxlPXt7d2lkdGg6IDEyMH19IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9PlxyXG4gICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cImphY2tcIj5Qcm9kdWN0czwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cImx1Y3lcIj5BcHBzPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiWWltaW5naGVcIj5CbG9nczwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJneC1oZWFkZXItbm90aWZpY2F0aW9ucyBneC1tbC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImd4LW5vdGlmeSBneC1ub3RpZnktc2VhcmNoIGd4LWQtaW5saW5lLWJsb2NrIGd4LWQtbGctbm9uZVwiPlxyXG4gICAgICAgICAgICAgICAgPFBvcG92ZXIgb3ZlcmxheUNsYXNzTmFtZT1cImd4LXBvcG92ZXItaG9yaXphbnRhbFwiIHBsYWNlbWVudD1cImJvdHRvbVJpZ2h0XCIgY29udGVudD17XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtZC1mbGV4XCI+PERyb3Bkb3duIG92ZXJsYXk9e21lbnV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICBDYXRlZ29yeSA8SWNvbiB0eXBlPVwiZG93blwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bj5cclxuICAgICAgICAgICAgICAgICAgICA8U2VhcmNoQm94IHN0eWxlTmFtZT1cImd4LXBvcG92ZXItc2VhcmNoLWJhclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBpbiBhcHAuLi5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3VwZGF0ZVNlYXJjaENoYXRVc2VyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaFRleHR9Lz48L2Rpdj5cclxuICAgICAgICAgICAgICAgIH0gdHJpZ2dlcj1cImNsaWNrXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImd4LXBvaW50ZXIgZ3gtZC1ibG9ja1wiPjxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1zZWFyY2gtbmV3XCIvPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvUG9wb3Zlcj5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZ3gtbm90aWZ5XCI+XHJcbiAgICAgICAgICAgICAgICA8UG9wb3ZlciBvdmVybGF5Q2xhc3NOYW1lPVwiZ3gtcG9wb3Zlci1ob3JpemFudGFsXCIgcGxhY2VtZW50PVwiYm90dG9tUmlnaHRcIiBjb250ZW50PXs8QXBwTm90aWZpY2F0aW9uLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyPVwiY2xpY2tcIj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ3gtcG9pbnRlciBneC1kLWJsb2NrXCI+PGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLW5vdGlmaWNhdGlvblwiLz48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L1BvcG92ZXI+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImd4LW1zZ1wiPlxyXG4gICAgICAgICAgICAgICAgPFBvcG92ZXIgb3ZlcmxheUNsYXNzTmFtZT1cImd4LXBvcG92ZXItaG9yaXphbnRhbFwiIHBsYWNlbWVudD1cImJvdHRvbVJpZ2h0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9ezxNYWlsTm90aWZpY2F0aW9uLz59IHRyaWdnZXI9XCJjbGlja1wiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ3gtcG9pbnRlciBneC1zdGF0dXMtcG9zIGd4LWQtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1jaGF0LW5ld1wiLz5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImd4LXN0YXR1cyBneC1zdGF0dXMtcnRsIGd4LXNtYWxsIGd4LW9yYW5nZVwiLz5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvUG9wb3Zlcj5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJneC1sYW5ndWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgPFBvcG92ZXIgb3ZlcmxheUNsYXNzTmFtZT1cImd4LXBvcG92ZXItaG9yaXphbnRhbFwiIHBsYWNlbWVudD1cImJvdHRvbVJpZ2h0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e2xhbmd1YWdlTWVudSgpfSB0cmlnZ2VyPVwiY2xpY2tcIj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJneC1wb2ludGVyIGd4LWZsZXgtcm93IGd4LWFsaWduLWl0ZW1zLWNlbnRlclwiPjxpXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BmbGFnIGZsYWctMjQgZmxhZy0ke2xvY2FsZS5pY29ufWB9Lz5cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L1BvcG92ZXI+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZ3gtdXNlci1uYXZcIj48VXNlckluZm8vPjwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9IZWFkZXI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtaGVhZGVyLWhvcml6b250YWwtbmF2IGd4LWhlYWRlci1ob3Jpem9udGFsLW5hdi1jdXJ2ZSBneC1kLW5vbmUgZ3gtZC1sZy1ibG9ja1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWhlYWRlci1ob3Jpem9udGFsLW5hdi1mbGV4XCI+XHJcbiAgICAgICAgICAgIDxIb3Jpem9udGFsTmF2Lz5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImd4LWhlYWRlci1ub3RpZmljYXRpb25zIGd4LW1sLWF1dG9cIj5cclxuICAgICAgICAgICAgICA8bGk+PHNwYW4gY2xhc3NOYW1lPVwiZ3gtcG9pbnRlciBneC1kLWJsb2NrXCI+PGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLW1lbnUtbGluZXNcIi8+PC9zcGFuPjwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPjxzcGFuIGNsYXNzTmFtZT1cImd4LXBvaW50ZXIgZ3gtZC1ibG9ja1wiPjxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1zZXR0aW5nXCIvPjwvc3Bhbj48L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT48c3BhbiBjbGFzc05hbWU9XCJneC1wb2ludGVyIGd4LWQtYmxvY2tcIj48aSBjbGFzc05hbWU9XCJpY29uIGljb24tYXBwcy1uZXdcIi8+PC9zcGFuPjwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmVsb3dIZWFkZXI7XHJcbiIsImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtCdXR0b24sIERyb3Bkb3duLCBMYXlvdXQsIE1lbnUsIG1lc3NhZ2UsIFBvcG92ZXIsIFNlbGVjdH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBJY29uIGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuaW1wb3J0IHt1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3J9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgQ3VzdG9tU2Nyb2xsYmFycyBmcm9tIFwiLi4vLi4vLi4vLi4vdXRpbC9DdXN0b21TY3JvbGxiYXJzXCI7XHJcbmltcG9ydCBsYW5ndWFnZURhdGEgZnJvbSBcIi4uL2xhbmd1YWdlRGF0YVwiO1xyXG5pbXBvcnQgU2VhcmNoQm94IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL1NlYXJjaEJveFwiO1xyXG5pbXBvcnQgVXNlckluZm8gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvVXNlckluZm9cIjtcclxuaW1wb3J0IEFwcE5vdGlmaWNhdGlvbiBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9BcHBOb3RpZmljYXRpb25cIjtcclxuaW1wb3J0IE1haWxOb3RpZmljYXRpb24gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvTWFpbE5vdGlmaWNhdGlvblwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBIb3Jpem9udGFsTmF2IGZyb20gXCIuLi9Ib3Jpem9udGFsTmF2XCI7XHJcbmltcG9ydCB7c3dpdGNoTGFuZ3VhZ2UsIHRvZ2dsZUNvbGxhcHNlZFNpZGVOYXZ9IGZyb20gXCIuLi8uLi8uLi8uLi9yZWR1eC9hY3Rpb25zL1NldHRpbmdcIjtcclxuaW1wb3J0IEludGxNZXNzYWdlcyBmcm9tIFwiLi4vLi4vLi4vLi4vdXRpbC9JbnRsTWVzc2FnZXNcIjtcclxuXHJcbmNvbnN0IHtIZWFkZXJ9ID0gTGF5b3V0O1xyXG5cclxuY29uc3QgT3B0aW9uID0gU2VsZWN0Lk9wdGlvbjtcclxuY29uc3QgbWVudSA9IChcclxuICA8TWVudSBvbkNsaWNrPXtoYW5kbGVNZW51Q2xpY2t9PlxyXG4gICAgPE1lbnUuSXRlbSBrZXk9XCIxXCI+UHJvZHVjdHM8L01lbnUuSXRlbT5cclxuICAgIDxNZW51Lkl0ZW0ga2V5PVwiMlwiPkFwcHM8L01lbnUuSXRlbT5cclxuICAgIDxNZW51Lkl0ZW0ga2V5PVwiM1wiPkJsb2dzPC9NZW51Lkl0ZW0+XHJcbiAgPC9NZW51PlxyXG4pO1xyXG5cclxuZnVuY3Rpb24gaGFuZGxlTWVudUNsaWNrKGUpIHtcclxuICBtZXNzYWdlLmluZm8oJ0NsaWNrIG9uIG1lbnUgaXRlbS4nKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKHZhbHVlKSB7XHJcbiAgY29uc29sZS5sb2coYHNlbGVjdGVkICR7dmFsdWV9YCk7XHJcbn1cclxuXHJcbmNvbnN0IEhvcml6b250YWxEYXJrID0gKCkgPT4ge1xyXG5cclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gIGNvbnN0IFtzZWFyY2hUZXh0LCBzZXRTZWFyY2hUZXh0XSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBsb2NhbGUgPSB1c2VTZWxlY3Rvcigoe3NldHRpbmdzfSkgPT4gc2V0dGluZ3MubG9jYWxlKTtcclxuICBjb25zdCBuYXZDb2xsYXBzZWQgPSB1c2VTZWxlY3Rvcigoe3NldHRpbmdzfSkgPT4gc2V0dGluZ3MubmF2Q29sbGFwc2VkKTtcclxuXHJcblxyXG4gIGNvbnN0IGxhbmd1YWdlTWVudSA9ICgpID0+IChcclxuICAgIDxDdXN0b21TY3JvbGxiYXJzIGNsYXNzTmFtZT1cImd4LXBvcG92ZXItbGFuZy1zY3JvbGxcIj5cclxuICAgICAgPHVsIGNsYXNzTmFtZT1cImd4LXN1Yi1wb3BvdmVyXCI+XHJcbiAgICAgICAge2xhbmd1YWdlRGF0YS5tYXAobGFuZ3VhZ2UgPT5cclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJneC1tZWRpYSBneC1wb2ludGVyXCIga2V5PXtKU09OLnN0cmluZ2lmeShsYW5ndWFnZSl9IG9uQ2xpY2s9eyhlKSA9PlxyXG4gICAgICAgICAgICBkaXNwYXRjaChzd2l0Y2hMYW5ndWFnZShsYW5ndWFnZSkpXHJcbiAgICAgICAgICB9PlxyXG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9e2BmbGFnIGZsYWctMjQgZ3gtbXItMiBmbGFnLSR7bGFuZ3VhZ2UuaWNvbn1gfS8+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImd4LWxhbmd1YWdlLXRleHRcIj57bGFuZ3VhZ2UubmFtZX08L3NwYW4+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L0N1c3RvbVNjcm9sbGJhcnM+KTtcclxuXHJcbiAgY29uc3QgdXBkYXRlU2VhcmNoQ2hhdFVzZXIgPSAoZXZ0KSA9PiB7XHJcbiAgICBzZXRTZWFyY2hUZXh0KGV2dC50YXJnZXQudmFsdWUpXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtaGVhZGVyLWhvcml6b250YWwgZ3gtaGVhZGVyLWhvcml6b250YWwtZGFya1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWhlYWRlci1ob3Jpem9udGFsLXRvcFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWhlYWRlci1ob3Jpem9udGFsLXRvcC1mbGV4XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtaGVhZGVyLWhvcml6b250YWwtdG9wLWxlZnRcIj5cclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGljb24tYWxlcnQgZ3gtbXItM1wiLz5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJneC1tYi0wIGd4LXRleHQtdHJ1bmNhdGVcIj48SW50bE1lc3NhZ2VzIGlkPVwiYXBwLmFubm91bmNlZFwiLz48L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZ3gtbG9naW4tbGlzdFwiPlxyXG4gICAgICAgICAgICAgIDxsaT5Mb2dpbjwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPlNpZ251cDwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgPEhlYWRlclxyXG4gICAgICAgIGNsYXNzTmFtZT1cImd4LWhlYWRlci1ob3Jpem9udGFsLW1haW5cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1oZWFkZXItaG9yaXpvbnRhbC1tYWluLWZsZXhcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1kLWJsb2NrIGd4LWQtbGctbm9uZSBneC1saW5lYmFyIGd4LW1yLXhzLTNcIj5cclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJneC1pY29uLWJ0biBpY29uIGljb24tbWVudVwiXHJcbiAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgZGlzcGF0Y2godG9nZ2xlQ29sbGFwc2VkU2lkZU5hdighbmF2Q29sbGFwc2VkKSk7XHJcbiAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgPGltZyBhbHQ9XCJcIiAgY2xhc3NOYW1lPVwiZ3gtZC1ibG9jayBneC1kLWxnLW5vbmUgZ3gtcG9pbnRlciBneC1tci14cy0zIGd4LXB0LXhzLTEgZ3gtdy1sb2dvXCIgc3JjPXsoXCIvaW1hZ2VzL3ctbG9nby5wbmdcIil9Lz48L0xpbms+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgPGltZyBhbHQ9XCJcIiBjbGFzc05hbWU9XCJneC1kLW5vbmUgZ3gtZC1sZy1ibG9jayBneC1wb2ludGVyIGd4LW1yLXhzLTUgZ3gtbG9nb1wiIHNyYz17KFwiL2ltYWdlcy9sb2dvLnBuZ1wiKX0vPjwvTGluaz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1oZWFkZXItc2VhcmNoIGd4LWQtbm9uZSBneC1kLWxnLWZsZXhcIj5cclxuICAgICAgICAgICAgICA8U2VhcmNoQm94IHN0eWxlTmFtZT1cImd4LWx0LWljb24tc2VhcmNoLWJhci1sZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBpbiBhcHAuLi5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3VwZGF0ZVNlYXJjaENoYXRVc2VyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaFRleHR9Lz5cclxuXHJcbiAgICAgICAgICAgICAgPFNlbGVjdCBkZWZhdWx0VmFsdWU9XCJsdWN5XCIgc3R5bGU9e3t3aWR0aDogMTIwfX0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0+XHJcbiAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiamFja1wiPlByb2R1Y3RzPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwibHVjeVwiPkFwcHM8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJZaW1pbmdoZVwiPkJsb2dzPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImd4LWhlYWRlci1ub3RpZmljYXRpb25zIGd4LW1sLWF1dG9cIj5cclxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZ3gtbm90aWZ5IGd4LW5vdGlmeS1zZWFyY2ggZ3gtZC1pbmxpbmUtYmxvY2sgZ3gtZC1sZy1ub25lXCI+XHJcbiAgICAgICAgICAgICAgICA8UG9wb3ZlciBvdmVybGF5Q2xhc3NOYW1lPVwiZ3gtcG9wb3Zlci1ob3JpemFudGFsXCIgcGxhY2VtZW50PVwiYm90dG9tUmlnaHRcIiBjb250ZW50PXtcclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1kLWZsZXhcIj48RHJvcGRvd24gb3ZlcmxheT17bWVudX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIENhdGVnb3J5IDxJY29uIHR5cGU9XCJkb3duXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWFyY2hCb3ggc3R5bGVOYW1lPVwiZ3gtcG9wb3Zlci1zZWFyY2gtYmFyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGluIGFwcC4uLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dXBkYXRlU2VhcmNoQ2hhdFVzZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNoVGV4dH0vPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgfSB0cmlnZ2VyPVwiY2xpY2tcIj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ3gtcG9pbnRlciBneC1kLWJsb2NrXCI+PGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLXNlYXJjaC1uZXdcIi8+PC9zcGFuPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvUG9wb3Zlcj5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZ3gtbm90aWZ5XCI+XHJcbiAgICAgICAgICAgICAgICA8UG9wb3ZlciBvdmVybGF5Q2xhc3NOYW1lPVwiZ3gtcG9wb3Zlci1ob3JpemFudGFsXCIgcGxhY2VtZW50PVwiYm90dG9tUmlnaHRcIiBjb250ZW50PXs8QXBwTm90aWZpY2F0aW9uLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyPVwiY2xpY2tcIj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ3gtcG9pbnRlciBneC1kLWJsb2NrXCI+PGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLW5vdGlmaWNhdGlvblwiLz48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L1BvcG92ZXI+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImd4LW1zZ1wiPlxyXG4gICAgICAgICAgICAgICAgPFBvcG92ZXIgb3ZlcmxheUNsYXNzTmFtZT1cImd4LXBvcG92ZXItaG9yaXphbnRhbFwiIHBsYWNlbWVudD1cImJvdHRvbVJpZ2h0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9ezxNYWlsTm90aWZpY2F0aW9uLz59IHRyaWdnZXI9XCJjbGlja1wiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ3gtcG9pbnRlciBneC1zdGF0dXMtcG9zIGd4LWQtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1jaGF0LW5ld1wiLz5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImd4LXN0YXR1cyBneC1zdGF0dXMtcnRsIGd4LXNtYWxsIGd4LW9yYW5nZVwiLz5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvUG9wb3Zlcj5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJneC1sYW5ndWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgPFBvcG92ZXIgb3ZlcmxheUNsYXNzTmFtZT1cImd4LXBvcG92ZXItaG9yaXphbnRhbFwiIHBsYWNlbWVudD1cImJvdHRvbVJpZ2h0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e2xhbmd1YWdlTWVudSgpfSB0cmlnZ2VyPVwiY2xpY2tcIj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJneC1wb2ludGVyIGd4LWZsZXgtcm93IGd4LWFsaWduLWl0ZW1zLWNlbnRlclwiPjxpXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BmbGFnIGZsYWctMjQgZmxhZy0ke2xvY2FsZS5pY29ufWB9Lz5cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L1BvcG92ZXI+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZ3gtdXNlci1uYXZcIj48VXNlckluZm8vPjwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9IZWFkZXI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtaGVhZGVyLWhvcml6b250YWwtbmF2IGd4LWQtbm9uZSBneC1kLWxnLWJsb2NrXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1jb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtaGVhZGVyLWhvcml6b250YWwtbmF2LWZsZXhcIj5cclxuICAgICAgICAgICAgPEhvcml6b250YWxOYXYvPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZ3gtaGVhZGVyLW5vdGlmaWNhdGlvbnMgZ3gtbWwtYXV0b1wiPlxyXG4gICAgICAgICAgICAgIDxsaT48c3BhbiBjbGFzc05hbWU9XCJneC1wb2ludGVyIGd4LWQtYmxvY2tcIj48aSBjbGFzc05hbWU9XCJpY29uIGljb24tbWVudS1saW5lc1wiLz48L3NwYW4+PC9saT5cclxuICAgICAgICAgICAgICA8bGk+PHNwYW4gY2xhc3NOYW1lPVwiZ3gtcG9pbnRlciBneC1kLWJsb2NrXCI+PGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLXNldHRpbmdcIi8+PC9zcGFuPjwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPjxzcGFuIGNsYXNzTmFtZT1cImd4LXBvaW50ZXIgZ3gtZC1ibG9ja1wiPjxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1hcHBzLW5ld1wiLz48L3NwYW4+PC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEhvcml6b250YWxEYXJrO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7QnV0dG9uLCBEcm9wZG93biwgTGF5b3V0LCBNZW51LCBtZXNzYWdlLCBQb3BvdmVyLCBTZWxlY3R9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgSWNvbiBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCB7dXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IEN1c3RvbVNjcm9sbGJhcnMgZnJvbSBcIi4uLy4uLy4uLy4uL3V0aWwvQ3VzdG9tU2Nyb2xsYmFyc1wiO1xyXG5pbXBvcnQgbGFuZ3VhZ2VEYXRhIGZyb20gXCIuLi9sYW5ndWFnZURhdGFcIjtcclxuaW1wb3J0IFNlYXJjaEJveCBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9TZWFyY2hCb3hcIjtcclxuaW1wb3J0IFVzZXJJbmZvIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL1VzZXJJbmZvXCI7XHJcbmltcG9ydCBBcHBOb3RpZmljYXRpb24gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvQXBwTm90aWZpY2F0aW9uXCI7XHJcbmltcG9ydCBNYWlsTm90aWZpY2F0aW9uIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL01haWxOb3RpZmljYXRpb25cIjtcclxuaW1wb3J0IEhvcml6b250YWxOYXYgZnJvbSBcIi4uL0hvcml6b250YWxOYXZcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQge3N3aXRjaExhbmd1YWdlLCB0b2dnbGVDb2xsYXBzZWRTaWRlTmF2fSBmcm9tIFwiLi4vLi4vLi4vLi4vcmVkdXgvYWN0aW9ucy9TZXR0aW5nXCI7XHJcbmltcG9ydCBJbnRsTWVzc2FnZXMgZnJvbSBcIi4uLy4uLy4uLy4uL3V0aWwvSW50bE1lc3NhZ2VzXCI7XHJcblxyXG5jb25zdCB7SGVhZGVyfSA9IExheW91dDtcclxuY29uc3QgT3B0aW9uID0gU2VsZWN0Lk9wdGlvbjtcclxuY29uc3QgbWVudSA9IChcclxuICA8TWVudSBvbkNsaWNrPXtoYW5kbGVNZW51Q2xpY2t9PlxyXG4gICAgPE1lbnUuSXRlbSBrZXk9XCIxXCI+UHJvZHVjdHM8L01lbnUuSXRlbT5cclxuICAgIDxNZW51Lkl0ZW0ga2V5PVwiMlwiPkFwcHM8L01lbnUuSXRlbT5cclxuICAgIDxNZW51Lkl0ZW0ga2V5PVwiM1wiPkJsb2dzPC9NZW51Lkl0ZW0+XHJcbiAgPC9NZW51PlxyXG4pO1xyXG5cclxuZnVuY3Rpb24gaGFuZGxlTWVudUNsaWNrKGUpIHtcclxuICBtZXNzYWdlLmluZm8oJ0NsaWNrIG9uIG1lbnUgaXRlbS4nKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKHZhbHVlKSB7XHJcbiAgY29uc29sZS5sb2coYHNlbGVjdGVkICR7dmFsdWV9YCk7XHJcbn1cclxuXHJcbmNvbnN0IEhvcml6b250YWxEZWZhdWx0ID0gKCkgPT4ge1xyXG5cclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gIGNvbnN0IFtzZWFyY2hUZXh0LCBzZXRTZWFyY2hUZXh0XSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBsb2NhbGUgPSB1c2VTZWxlY3Rvcigoe3NldHRpbmdzfSkgPT4gc2V0dGluZ3MubG9jYWxlKTtcclxuICBjb25zdCBuYXZDb2xsYXBzZWQgPSB1c2VTZWxlY3Rvcigoe3NldHRpbmdzfSkgPT4gc2V0dGluZ3MubmF2Q29sbGFwc2VkKTtcclxuXHJcbiAgY29uc3QgbGFuZ3VhZ2VNZW51ID0gKCkgPT4gKFxyXG4gICAgPEN1c3RvbVNjcm9sbGJhcnMgY2xhc3NOYW1lPVwiZ3gtcG9wb3Zlci1sYW5nLXNjcm9sbFwiPlxyXG4gICAgICA8dWwgY2xhc3NOYW1lPVwiZ3gtc3ViLXBvcG92ZXJcIj5cclxuICAgICAgICB7bGFuZ3VhZ2VEYXRhLm1hcChsYW5ndWFnZSA9PlxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImd4LW1lZGlhIGd4LXBvaW50ZXJcIiBrZXk9e0pTT04uc3RyaW5naWZ5KGxhbmd1YWdlKX0gb25DbGljaz17KGUpID0+XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHN3aXRjaExhbmd1YWdlKGxhbmd1YWdlKSlcclxuICAgICAgICAgIH0+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17YGZsYWcgZmxhZy0yNCBneC1tci0yIGZsYWctJHtsYW5ndWFnZS5pY29ufWB9Lz5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ3gtbGFuZ3VhZ2UtdGV4dFwiPntsYW5ndWFnZS5uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC91bD5cclxuICAgIDwvQ3VzdG9tU2Nyb2xsYmFycz4pO1xyXG5cclxuICBjb25zdCB1cGRhdGVTZWFyY2hDaGF0VXNlciA9IChldnQpID0+IHtcclxuICAgIHNldFNlYXJjaFRleHQoZXZ0LnRhcmdldC52YWx1ZSlcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJneC1oZWFkZXItaG9yaXpvbnRhbFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWhlYWRlci1ob3Jpem9udGFsLXRvcFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWhlYWRlci1ob3Jpem9udGFsLXRvcC1mbGV4XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtaGVhZGVyLWhvcml6b250YWwtdG9wLWxlZnRcIj5cclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGljb24tYWxlcnQgZ3gtbXItM1wiLz5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJneC1tYi0wIGd4LXRleHQtdHJ1bmNhdGVcIj48SW50bE1lc3NhZ2VzIGlkPVwiYXBwLmFubm91bmNlZFwiLz48L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZ3gtbG9naW4tbGlzdFwiPlxyXG4gICAgICAgICAgICAgIDxsaT5Mb2dpbjwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPlNpZ251cDwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8SGVhZGVyXHJcbiAgICAgICAgY2xhc3NOYW1lPVwiZ3gtaGVhZGVyLWhvcml6b250YWwtbWFpblwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWhlYWRlci1ob3Jpem9udGFsLW1haW4tZmxleFwiPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1kLWJsb2NrIGd4LWQtbGctbm9uZSBneC1saW5lYmFyIGd4LW1yLXhzLTNcIj5cclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJneC1pY29uLWJ0biBpY29uIGljb24tbWVudVwiXHJcbiAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJuYXZDb2xsYXBzZWRcIiwhbmF2Q29sbGFwc2VkKVxyXG4gICAgICAgICAgICAgICAgICAgZGlzcGF0Y2godG9nZ2xlQ29sbGFwc2VkU2lkZU5hdighbmF2Q29sbGFwc2VkKSk7XHJcbiAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgPGltZyBhbHQ9XCJcIiBjbGFzc05hbWU9XCJneC1kLWJsb2NrIGd4LWQtbGctbm9uZSBneC1wb2ludGVyIGd4LXctbG9nb1wiIHNyYz17KFwiL2ltYWdlcy93LWxvZ28ucG5nXCIpfS8+PC9MaW5rPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgIDxpbWcgYWx0PVwiXCIgY2xhc3NOYW1lPVwiZ3gtZC1ub25lIGd4LWQtbGctYmxvY2sgZ3gtcG9pbnRlciBneC1tci14cy01IGd4LWxvZ29cIiBzcmM9eyhcIi9pbWFnZXMvbG9nby13aGl0ZS5wbmdcIil9Lz48L0xpbms+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtaGVhZGVyLXNlYXJjaCBneC1kLW5vbmUgZ3gtZC1sZy1mbGV4XCI+XHJcbiAgICAgICAgICAgICAgPFNlYXJjaEJveCBzdHlsZU5hbWU9XCJneC1sdC1pY29uLXNlYXJjaC1iYXItbGdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggaW4gYXBwLi4uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt1cGRhdGVTZWFyY2hDaGF0VXNlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2hUZXh0fS8+XHJcblxyXG4gICAgICAgICAgICAgIDxTZWxlY3QgZGVmYXVsdFZhbHVlPVwibHVjeVwiIHN0eWxlPXt7d2lkdGg6IDEyMH19IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9PlxyXG4gICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cImphY2tcIj5Qcm9kdWN0czwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cImx1Y3lcIj5BcHBzPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiWWltaW5naGVcIj5CbG9nczwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJneC1oZWFkZXItbm90aWZpY2F0aW9ucyBneC1tbC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImd4LW5vdGlmeSBneC1ub3RpZnktc2VhcmNoIGd4LWQtaW5saW5lLWJsb2NrIGd4LWQtbGctbm9uZVwiPlxyXG4gICAgICAgICAgICAgICAgPFBvcG92ZXIgb3ZlcmxheUNsYXNzTmFtZT1cImd4LXBvcG92ZXItaG9yaXphbnRhbFwiIHBsYWNlbWVudD1cImJvdHRvbVJpZ2h0XCIgY29udGVudD17XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtZC1mbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duIG92ZXJsYXk9e21lbnV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ2F0ZWdvcnkgPEljb24gdHlwZT1cImRvd25cIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWFyY2hCb3ggc3R5bGVOYW1lPVwiZ3gtcG9wb3Zlci1zZWFyY2gtYmFyXCIgelxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggaW4gYXBwLi4uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt1cGRhdGVTZWFyY2hDaGF0VXNlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2hUZXh0fS8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgfSB0cmlnZ2VyPVwiY2xpY2tcIj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ3gtcG9pbnRlciBneC1kLWJsb2NrXCI+PGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLXNlYXJjaC1uZXdcIi8+PC9zcGFuPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvUG9wb3Zlcj5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJneC1ub3RpZnlcIj5cclxuICAgICAgICAgICAgICAgIDxQb3BvdmVyIG92ZXJsYXlDbGFzc05hbWU9XCJneC1wb3BvdmVyLWhvcml6YW50YWxcIiBwbGFjZW1lbnQ9XCJib3R0b21SaWdodFwiIGNvbnRlbnQ9ezxBcHBOb3RpZmljYXRpb24vPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgIHRyaWdnZXI9XCJjbGlja1wiPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJneC1wb2ludGVyIGd4LWQtYmxvY2tcIj48aSBjbGFzc05hbWU9XCJpY29uIGljb24tbm90aWZpY2F0aW9uXCIvPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvUG9wb3Zlcj5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZ3gtbXNnXCI+XHJcbiAgICAgICAgICAgICAgICA8UG9wb3ZlciBvdmVybGF5Q2xhc3NOYW1lPVwiZ3gtcG9wb3Zlci1ob3JpemFudGFsXCIgcGxhY2VtZW50PVwiYm90dG9tUmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17PE1haWxOb3RpZmljYXRpb24vPn0gdHJpZ2dlcj1cImNsaWNrXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJneC1wb2ludGVyIGd4LXN0YXR1cy1wb3MgZ3gtZC1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLWNoYXQtbmV3XCIvPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ3gtc3RhdHVzIGd4LXN0YXR1cy1ydGwgZ3gtc21hbGwgZ3gtb3JhbmdlXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9Qb3BvdmVyPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImd4LWxhbmd1YWdlXCI+XHJcbiAgICAgICAgICAgICAgICA8UG9wb3ZlciBvdmVybGF5Q2xhc3NOYW1lPVwiZ3gtcG9wb3Zlci1ob3JpemFudGFsXCIgcGxhY2VtZW50PVwiYm90dG9tUmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17bGFuZ3VhZ2VNZW51KCl9IHRyaWdnZXI9XCJjbGlja1wiPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImd4LXBvaW50ZXIgZ3gtZmxleC1yb3cgZ3gtYWxpZ24taXRlbXMtY2VudGVyXCI+PGlcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZsYWcgZmxhZy0yNCBmbGFnLSR7bG9jYWxlLmljb259YH0vPlxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvUG9wb3Zlcj5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJneC11c2VyLW5hdlwiPjxVc2VySW5mby8+PC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0hlYWRlcj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1oZWFkZXItaG9yaXpvbnRhbC1uYXYgZ3gtaGVhZGVyLWhvcml6b250YWwtbmF2LWN1cnZlIGd4LWQtbm9uZSBneC1kLWxnLWJsb2NrXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1jb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtaGVhZGVyLWhvcml6b250YWwtbmF2LWZsZXhcIj5cclxuICAgICAgICAgICAgPEhvcml6b250YWxOYXYvPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZ3gtaGVhZGVyLW5vdGlmaWNhdGlvbnMgZ3gtbWwtYXV0b1wiPlxyXG4gICAgICAgICAgICAgIDxsaT48c3BhbiBjbGFzc05hbWU9XCJneC1wb2ludGVyIGd4LWQtYmxvY2tcIj48aSBjbGFzc05hbWU9XCJpY29uIGljb24tbWVudS1saW5lc1wiLz48L3NwYW4+PC9saT5cclxuICAgICAgICAgICAgICA8bGk+PHNwYW4gY2xhc3NOYW1lPVwiZ3gtcG9pbnRlciBneC1kLWJsb2NrXCI+PGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLXNldHRpbmdcIi8+PC9zcGFuPjwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPjxzcGFuIGNsYXNzTmFtZT1cImd4LXBvaW50ZXIgZ3gtZC1ibG9ja1wiPjxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1hcHBzLW5ld1wiLz48L3NwYW4+PC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb3Jpem9udGFsRGVmYXVsdDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge3VzZVNlbGVjdG9yfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHtNZW51fSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBJbnRsTWVzc2FnZXMgZnJvbSBcIi4uLy4uLy4uL3V0aWwvSW50bE1lc3NhZ2VzXCI7XHJcbmltcG9ydCB7XHJcbiAgTkFWX1NUWUxFX0FCT1ZFX0hFQURFUixcclxuICBOQVZfU1RZTEVfQkVMT1dfSEVBREVSLFxyXG4gIE5BVl9TVFlMRV9ERUZBVUxUX0hPUklaT05UQUwsXHJcbiAgTkFWX1NUWUxFX0lOU0lERV9IRUFERVJfSE9SSVpPTlRBTFxyXG59IGZyb20gXCIuLi8uLi8uLi9jb25zdGFudHMvVGhlbWVTZXR0aW5nXCI7XHJcblxyXG5cclxuY29uc3QgU3ViTWVudSA9IE1lbnUuU3ViTWVudTtcclxuY29uc3QgTWVudUl0ZW1Hcm91cCA9IE1lbnUuSXRlbUdyb3VwO1xyXG5cclxuY29uc3QgSG9yaXpvbnRhbE5hdiA9ICgpID0+IHtcclxuXHJcbiAgY29uc3QgbmF2U3R5bGUgPSB1c2VTZWxlY3Rvcigoe3NldHRpbmdzfSkgPT4gc2V0dGluZ3MubmF2U3R5bGUpO1xyXG4gIGNvbnN0IHBhdGhuYW1lID0gdXNlU2VsZWN0b3IoKHtzZXR0aW5nc30pID0+IHNldHRpbmdzLnBhdGhuYW1lKTtcclxuXHJcbiAgY29uc3QgZ2V0TmF2U3R5bGVTdWJNZW51Q2xhc3MgPSAobmF2U3R5bGUpID0+IHtcclxuICAgIHN3aXRjaCAobmF2U3R5bGUpIHtcclxuICAgICAgY2FzZSBOQVZfU1RZTEVfREVGQVVMVF9IT1JJWk9OVEFMOlxyXG4gICAgICAgIHJldHVybiBcImd4LW1lbnUtaG9yaXpvbnRhbCBneC1zdWJtZW51LXBvcHVwLWN1cnZlXCI7XHJcbiAgICAgIGNhc2UgTkFWX1NUWUxFX0lOU0lERV9IRUFERVJfSE9SSVpPTlRBTDpcclxuICAgICAgICByZXR1cm4gXCJneC1tZW51LWhvcml6b250YWwgZ3gtc3VibWVudS1wb3B1cC1jdXJ2ZSBneC1pbnNpZGUtc3VibWVudS1wb3B1cC1jdXJ2ZVwiO1xyXG4gICAgICBjYXNlIE5BVl9TVFlMRV9CRUxPV19IRUFERVI6XHJcbiAgICAgICAgcmV0dXJuIFwiZ3gtbWVudS1ob3Jpem9udGFsIGd4LXN1Ym1lbnUtcG9wdXAtY3VydmUgZ3gtYmVsb3ctc3VibWVudS1wb3B1cC1jdXJ2ZVwiO1xyXG4gICAgICBjYXNlIE5BVl9TVFlMRV9BQk9WRV9IRUFERVI6XHJcbiAgICAgICAgcmV0dXJuIFwiZ3gtbWVudS1ob3Jpem9udGFsIGd4LXN1Ym1lbnUtcG9wdXAtY3VydmUgZ3gtYWJvdmUtc3VibWVudS1wb3B1cC1jdXJ2ZVwiO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiBcImd4LW1lbnUtaG9yaXpvbnRhbFwiO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNlbGVjdGVkS2V5cyA9IHBhdGhuYW1lLnN1YnN0cigxKTtcclxuICBjb25zdCBkZWZhdWx0T3BlbktleXMgPSBzZWxlY3RlZEtleXMuc3BsaXQoJy8nKVsxXTtcclxuICByZXR1cm4gKFxyXG5cclxuICAgIDxNZW51XHJcbiAgICAgIGRlZmF1bHRPcGVuS2V5cz17W2RlZmF1bHRPcGVuS2V5c119XHJcbiAgICAgIHNlbGVjdGVkS2V5cz17W3NlbGVjdGVkS2V5c119XHJcbiAgICAgIG1vZGU9XCJob3Jpem9udGFsXCI+XHJcbiAgICAgIDxTdWJNZW51IHBvcHVwQ2xhc3NOYW1lPXtnZXROYXZTdHlsZVN1Yk1lbnVDbGFzcyhuYXZTdHlsZSl9IGtleT1cIm1haW5cIlxyXG4gICAgICAgICAgICAgICB0aXRsZT17PEludGxNZXNzYWdlcyBpZD1cInNpZGViYXIubWFpblwiLz59PlxyXG5cclxuICAgICAgICA8U3ViTWVudSBwb3B1cENsYXNzTmFtZT1cImd4LW1lbnUtaG9yaXpvbnRhbFwiIGtleT1cImRhc2hib2FyZFwiXHJcbiAgICAgICAgICAgICAgICAgdGl0bGU9ezxzcGFuPiA8aSBjbGFzc05hbWU9XCJpY29uIGljb24tZGFzYmhvYXJkXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPEludGxNZXNzYWdlcyBpZD1cInNpZGViYXIuZGFzaGJvYXJkXCIvPjwvc3Bhbj59PlxyXG4gICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJtYWluL2Rhc2hib2FyZC9jcnlwdG9cIj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9tYWluL2Rhc2hib2FyZC9jcnlwdG9cIj5cclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGljb24tY3J5cHRvXCIvPlxyXG4gICAgICAgICAgICAgIDxJbnRsTWVzc2FnZXMgaWQ9XCJzaWRlYmFyLmRhc2hib2FyZC5jcnlwdG9cIi8+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJtYWluL2Rhc2hib2FyZC9jcm1cIj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9tYWluL2Rhc2hib2FyZC9jcm1cIj5cclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGljb24tY3JtXCIvPlxyXG4gICAgICAgICAgICAgIDxJbnRsTWVzc2FnZXMgaWQ9XCJzaWRlYmFyLmRhc2hib2FyZC5jcm1cIi8+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJtYWluL2Rhc2hib2FyZC9saXN0aW5nXCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbWFpbi9kYXNoYm9hcmQvbGlzdGluZ1wiPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1saXN0aW5nLWRicmRcIi8+XHJcbiAgICAgICAgICAgICAgPEludGxNZXNzYWdlcyBpZD1cInNpZGViYXIuZGFzaGJvYXJkLmxpc3RpbmdcIi8+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgIDwvU3ViTWVudT5cclxuXHJcbiAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJtYWluL3dpZGdldHNcIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbWFpbi93aWRnZXRzXCI+PGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLXdpZGdldHNcIi8+XHJcbiAgICAgICAgICAgIDxJbnRsTWVzc2FnZXMgaWQ9XCJzaWRlYmFyLndpZGdldHNcIi8+PC9MaW5rPlxyXG4gICAgICAgIDwvTWVudS5JdGVtPlxyXG5cclxuICAgICAgICA8TWVudS5JdGVtIGtleT1cIm1haW4vbWV0cmljc1wiPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9tYWluL21ldHJpY3NcIj48aSBjbGFzc05hbWU9XCJpY29uIGljb24tYXBwc1wiLz5cclxuICAgICAgICAgICAgPEludGxNZXNzYWdlcyBpZD1cInNpZGViYXIubWV0cmljc1wiLz48L0xpbms+XHJcbiAgICAgICAgPC9NZW51Lkl0ZW0+XHJcblxyXG4gICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwibWFpbi9hbGdvbGlhXCI+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL21haW4vYWxnb2xpYVwiPjxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1zaG9wcGluZy1jYXJ0IFwiLz5cclxuICAgICAgICAgICAgPEludGxNZXNzYWdlcyBpZD1cInNpZGViYXIuYWxnb2xpYVwiLz48L0xpbms+XHJcbiAgICAgICAgPC9NZW51Lkl0ZW0+XHJcblxyXG4gICAgICA8L1N1Yk1lbnU+XHJcblxyXG4gICAgICA8U3ViTWVudSBwb3B1cENsYXNzTmFtZT17Z2V0TmF2U3R5bGVTdWJNZW51Q2xhc3MobmF2U3R5bGUpfSBrZXk9XCJpbi1idWlsdC1hcHBzXCJcclxuICAgICAgICAgICAgICAgdGl0bGU9ezxJbnRsTWVzc2FnZXMgaWQ9XCJzaWRlYmFyLmluQnVpbHRBcHBcIi8+fT5cclxuXHJcbiAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJpbi1idWlsdC1hcHBzL21haWxcIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvaW4tYnVpbHQtYXBwcy9tYWlsXCI+PGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLWVtYWlsXCIvPjxJbnRsTWVzc2FnZXNcclxuICAgICAgICAgICAgaWQ9XCJzaWRlYmFyLm1haWxBcHBcIi8+PC9MaW5rPlxyXG4gICAgICAgIDwvTWVudS5JdGVtPlxyXG5cclxuICAgICAgICA8TWVudS5JdGVtIGtleT1cImluLWJ1aWx0LWFwcHMvdG9kb1wiPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9pbi1idWlsdC1hcHBzL3RvZG9cIj48aVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpY29uIGljb24tY2hlY2stc3F1YXJlLW9cIi8+PEludGxNZXNzYWdlc1xyXG4gICAgICAgICAgICBpZD1cInNpZGViYXIudG9kb0FwcFwiLz48L0xpbms+XHJcbiAgICAgICAgPC9NZW51Lkl0ZW0+XHJcblxyXG4gICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiaW4tYnVpbHQtYXBwcy9jb250YWN0c1wiPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9pbi1idWlsdC1hcHBzL2NvbnRhY3RzXCI+PGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLWNvbnRhY3RzXCIvPjxJbnRsTWVzc2FnZXNcclxuICAgICAgICAgICAgaWQ9XCJzaWRlYmFyLmNvbnRhY3RzQXBwXCIvPjwvTGluaz5cclxuICAgICAgICA8L01lbnUuSXRlbT5cclxuXHJcbiAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJpbi1idWlsdC1hcHBzL2NoYXRcIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvaW4tYnVpbHQtYXBwcy9jaGF0XCI+PGlcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaWNvbiBpY29uLWNoYXQtYnViYmxlIC1mbGV4LWNvbHVtbi1yZXZlcnNlXCIvPjxJbnRsTWVzc2FnZXNcclxuICAgICAgICAgICAgaWQ9XCJzaWRlYmFyLmNoYXRBcHBcIi8+PC9MaW5rPlxyXG4gICAgICAgIDwvTWVudS5JdGVtPlxyXG5cclxuICAgICAgICA8TWVudS5JdGVtIGtleT1cInNvY2lhbC1hcHBzL3Byb2ZpbGVcIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc29jaWFsLWFwcHMvcHJvZmlsZVwiPlxyXG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGljb24tcHJvZmlsZTJcIi8+XHJcbiAgICAgICAgICAgIDxJbnRsTWVzc2FnZXMgaWQ9XCJzaWRlYmFyLmV4dGVuc2lvbnMucHJvZmlsZVwiLz5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L01lbnUuSXRlbT5cclxuXHJcbiAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJzb2NpYWwtYXBwcy93YWxsXCI+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL3NvY2lhbC1hcHBzL3dhbGxcIj5cclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLWF2YXRhciAtZmxleC1jb2x1bW4tcmV2ZXJzZVwiLz5cclxuICAgICAgICAgICAgPEludGxNZXNzYWdlcyBpZD1cInNpZGViYXIud2FsbFwiLz5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L01lbnUuSXRlbT5cclxuXHJcbiAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJpbi1idWlsdC1hcHBzL25vdGVzXCI+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL2luLWJ1aWx0LWFwcHMvbm90ZXNcIj5cclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLWNvcHlcIi8+XHJcbiAgICAgICAgICAgIDxJbnRsTWVzc2FnZXMgaWQ9XCJzaWRlYmFyLm5vdGVzXCIvPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvTWVudS5JdGVtPlxyXG5cclxuICAgICAgICA8TWVudS5JdGVtIGtleT1cImluLWJ1aWx0LWFwcHMvZmlyZWJhc2UtY3J1ZFwiPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9pbi1idWlsdC1hcHBzL2ZpcmViYXNlLWNydWRcIj5cclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLWljb25cIi8+XHJcbiAgICAgICAgICAgIDxJbnRsTWVzc2FnZXMgaWQ9XCJzaWRlYmFyLmNydWRcIi8+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9NZW51Lkl0ZW0+XHJcblxyXG4gICAgICA8L1N1Yk1lbnU+XHJcblxyXG4gICAgICA8U3ViTWVudSBwb3B1cENsYXNzTmFtZT17Z2V0TmF2U3R5bGVTdWJNZW51Q2xhc3MobmF2U3R5bGUpfSBrZXk9XCJjb21wb25lbnRzXCJcclxuICAgICAgICAgICAgICAgdGl0bGU9ezxJbnRsTWVzc2FnZXMgaWQ9XCJzaWRlYmFyLmNvbXBvbmVudHNcIi8+fT5cclxuXHJcbiAgICAgICAgPFN1Yk1lbnUgcG9wdXBDbGFzc05hbWU9XCJneC1tZW51LWhvcml6b250YWxcIiBrZXk9XCJnZW5lcmFsXCIgdGl0bGU9e1xyXG4gICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1hbGwtY29udGFjdHNcIi8+XHJcbiAgICAgICAgICAgICAgICAgICA8SW50bE1lc3NhZ2VzIGlkPVwic2lkZWJhci5jb21wb25lbnRzLmdlbmVyYWxcIi8+XHJcbiAgICAgICAgICAgICAgPC9zcGFuPn0+XHJcbiAgICAgICAgICA8TWVudS5JdGVtIGtleT1cImNvbXBvbmVudHMvZ2VuZXJhbC9idXR0b25cIj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb21wb25lbnRzL2dlbmVyYWwvYnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgPEludGxNZXNzYWdlcyBpZD1cInNpZGViYXIuZ2VuZXJhbC5idXR0b25cIi8+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJjb21wb25lbnRzL2dlbmVyYWwvaWNvblwiPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2NvbXBvbmVudHMvZ2VuZXJhbC9pY29uXCI+XHJcbiAgICAgICAgICAgICAgPEludGxNZXNzYWdlcyBpZD1cInNpZGViYXIuZ2VuZXJhbC5pY29uXCIvPjwvTGluaz5cclxuICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgIDwvU3ViTWVudT5cclxuXHJcbiAgICAgICAgPFN1Yk1lbnUgcG9wdXBDbGFzc05hbWU9XCJneC1tZW51LWhvcml6b250YWxcIiBrZXk9XCJuYXZpZ2F0aW9uXCIgdGl0bGU9e1xyXG4gICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1uYXZpZ2F0aW9uXCIvPlxyXG4gICAgICAgICAgICAgICAgICA8SW50bE1lc3NhZ2VzIGlkPVwic2lkZWJhci5jb21wb25lbnRzLm5hdmlnYXRpb25cIi8+XHJcbiAgICAgICAgICAgICAgPC9zcGFuPn0+XHJcbiAgICAgICAgICA8TWVudS5JdGVtIGtleT1cImNvbXBvbmVudHMvbmF2aWdhdGlvbi9hZmZpeFwiPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9hZmZpeFwiPlxyXG4gICAgICAgICAgICAgIDxJbnRsTWVzc2FnZXNcclxuICAgICAgICAgICAgICAgIGlkPVwic2lkZWJhci5uYXZpZ2F0aW9uLmFmZml4XCIvPjwvTGluaz5cclxuICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJjb21wb25lbnRzL25hdmlnYXRpb24vYnJlYWRjcnVtYlwiPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9icmVhZGNydW1iXCI+XHJcbiAgICAgICAgICAgICAgPEludGxNZXNzYWdlc1xyXG4gICAgICAgICAgICAgICAgaWQ9XCJzaWRlYmFyLm5hdmlnYXRpb24uYnJlYWRjcnVtYlwiLz48L0xpbms+XHJcbiAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiY29tcG9uZW50cy9uYXZpZ2F0aW9uL2Ryb3Bkb3duXCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29tcG9uZW50cy9uYXZpZ2F0aW9uL2Ryb3Bkb3duXCI+XHJcbiAgICAgICAgICAgICAgPEludGxNZXNzYWdlc1xyXG4gICAgICAgICAgICAgICAgaWQ9XCJzaWRlYmFyLm5hdmlnYXRpb24uZHJvcGRvd25cIi8+PC9MaW5rPlxyXG4gICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICA8TWVudS5JdGVtIGtleT1cImNvbXBvbmVudHMvbmF2aWdhdGlvbi9tZW51XCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29tcG9uZW50cy9uYXZpZ2F0aW9uL21lbnVcIj5cclxuICAgICAgICAgICAgICA8SW50bE1lc3NhZ2VzXHJcbiAgICAgICAgICAgICAgICBpZD1cInNpZGViYXIubmF2aWdhdGlvbi5tZW51XCIvPjwvTGluaz5cclxuICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJjb21wb25lbnRzL25hdmlnYXRpb24vcGFnaW5hdGlvblwiPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9wYWdpbmF0aW9uXCI+XHJcbiAgICAgICAgICAgICAgPEludGxNZXNzYWdlc1xyXG4gICAgICAgICAgICAgICAgaWQ9XCJzaWRlYmFyLm5hdmlnYXRpb24ucGFnaW5hdGlvblwiLz48L0xpbms+XHJcbiAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiY29tcG9uZW50cy9uYXZpZ2F0aW9uL3N0ZXBzXCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29tcG9uZW50cy9uYXZpZ2F0aW9uL3N0ZXBzXCI+XHJcbiAgICAgICAgICAgICAgPEludGxNZXNzYWdlc1xyXG4gICAgICAgICAgICAgICAgaWQ9XCJzaWRlYmFyLm5hdmlnYXRpb24uc3RlcHNcIi8+PC9MaW5rPlxyXG4gICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgPC9TdWJNZW51PlxyXG5cclxuICAgICAgICA8U3ViTWVudSBwb3B1cENsYXNzTmFtZT1cImd4LW1lbnUtaG9yaXpvbnRhbFwiIGtleT1cImRhdGFFbnRyeVwiIHRpdGxlPXtcclxuICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGljb24tZGF0YS1lbnRyeVwiLz5cclxuICAgICAgICAgICAgICAgICAgPEludGxNZXNzYWdlcyBpZD1cInNpZGViYXIuY29tcG9uZW50cy5kYXRhRW50cnlcIi8+XHJcbiAgICAgICAgICAgICAgPC9zcGFuPn0+XHJcbiAgICAgICAgICA8TWVudS5JdGVtIGtleT1cImNvbXBvbmVudHMvZGF0YUVudHJ5L2F1dG9Db21wbGV0ZVwiPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2NvbXBvbmVudHMvZGF0YUVudHJ5L2F1dG9Db21wbGV0ZVwiPlxyXG4gICAgICAgICAgICAgIDxJbnRsTWVzc2FnZXNcclxuICAgICAgICAgICAgICAgIGlkPVwic2lkZWJhci5kYXRhRW50cnkuYXV0b0NvbXBsZXRlXCIvPjwvTGluaz5cclxuICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJjb21wb25lbnRzL2RhdGFFbnRyeS9jaGVja2JveFwiPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2NvbXBvbmVudHMvZGF0YUVudHJ5L2NoZWNrYm94XCI+XHJcbiAgICAgICAgICAgICAgPEludGxNZXNzYWdlc1xyXG4gICAgICAgICAgICAgICAgaWQ9XCJzaWRlYmFyLmRhdGFFbnRyeS5jaGVja2JveFwiLz48L0xpbms+XHJcbiAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiY29tcG9uZW50cy9kYXRhRW50cnkvY2FzY2FkZXJcIj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb21wb25lbnRzL2RhdGFFbnRyeS9jYXNjYWRlclwiPlxyXG4gICAgICAgICAgICAgIDxJbnRsTWVzc2FnZXNcclxuICAgICAgICAgICAgICAgIGlkPVwic2lkZWJhci5kYXRhRW50cnkuY2FzY2FkZXJcIi8+PC9MaW5rPlxyXG4gICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICA8TWVudS5JdGVtIGtleT1cImNvbXBvbmVudHMvZGF0YUVudHJ5L2RhdGVQaWNrZXJcIj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb21wb25lbnRzL2RhdGFFbnRyeS9kYXRlUGlja2VyXCI+XHJcbiAgICAgICAgICAgICAgPEludGxNZXNzYWdlc1xyXG4gICAgICAgICAgICAgICAgaWQ9XCJzaWRlYmFyLmRhdGFFbnRyeS5kYXRlUGlja2VyXCIvPjwvTGluaz5cclxuICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJjb21wb25lbnRzL2RhdGFFbnRyeS9mb3JtXCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29tcG9uZW50cy9kYXRhRW50cnkvZm9ybVwiPlxyXG4gICAgICAgICAgICAgIDxJbnRsTWVzc2FnZXNcclxuICAgICAgICAgICAgICAgIGlkPVwic2lkZWJhci5kYXRhRW50cnkuZm9ybVwiLz48L0xpbms+XHJcbiAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiY29tcG9uZW50cy9kYXRhRW50cnkvaW5wdXROdW1iZXJcIj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb21wb25lbnRzL2RhdGFFbnRyeS9pbnB1dE51bWJlclwiPlxyXG4gICAgICAgICAgICAgIDxJbnRsTWVzc2FnZXNcclxuICAgICAgICAgICAgICAgIGlkPVwic2lkZWJhci5kYXRhRW50cnkuaW5wdXROdW1iZXJcIi8+PC9MaW5rPlxyXG4gICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICA8TWVudS5JdGVtIGtleT1cImNvbXBvbmVudHMvZGF0YUVudHJ5L2lucHV0XCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29tcG9uZW50cy9kYXRhRW50cnkvaW5wdXRcIj5cclxuICAgICAgICAgICAgICA8SW50bE1lc3NhZ2VzXHJcbiAgICAgICAgICAgICAgICBpZD1cInNpZGViYXIuZGF0YUVudHJ5LmlucHV0XCIvPjwvTGluaz5cclxuICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJjb21wb25lbnRzL2RhdGFFbnRyeS9tZW50aW9uXCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29tcG9uZW50cy9kYXRhRW50cnkvbWVudGlvblwiPlxyXG4gICAgICAgICAgICAgIDxJbnRsTWVzc2FnZXNcclxuICAgICAgICAgICAgICAgIGlkPVwic2lkZWJhci5kYXRhRW50cnkubWVudGlvblwiLz48L0xpbms+XHJcbiAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiY29tcG9uZW50cy9kYXRhRW50cnkvcmF0ZVwiPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2NvbXBvbmVudHMvZGF0YUVudHJ5L3JhdGVcIj5cclxuICAgICAgICAgICAgICA8SW50bE1lc3NhZ2VzXHJcbiAgICAgICAgICAgICAgICBpZD1cInNpZGViYXIuZGF0YUVudHJ5LnJhdGVcIi8+PC9MaW5rPlxyXG4gICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICA8TWVudS5JdGVtIGtleT1cImNvbXBvbmVudHMvZGF0YUVudHJ5L3JhZGlvXCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29tcG9uZW50cy9kYXRhRW50cnkvcmFkaW9cIj5cclxuICAgICAgICAgICAgICA8SW50bE1lc3NhZ2VzXHJcbiAgICAgICAgICAgICAgICBpZD1cInNpZGViYXIuZGF0YUVudHJ5LnJhZGlvXCIvPjwvTGluaz5cclxuICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJjb21wb25lbnRzL2RhdGFFbnRyeS9zd2l0Y2hcIj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb21wb25lbnRzL2RhdGFFbnRyeS9zd2l0Y2hcIj5cclxuICAgICAgICAgICAgICA8SW50bE1lc3NhZ2VzXHJcbiAgICAgICAgICAgICAgICBpZD1cInNpZGViYXIuZGF0YUVudHJ5LnN3aXRjaFwiLz48L0xpbms+XHJcbiAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiY29tcG9uZW50cy9kYXRhRW50cnkvc2xpZGVyXCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29tcG9uZW50cy9kYXRhRW50cnkvc2xpZGVyXCI+XHJcbiAgICAgICAgICAgICAgPEludGxNZXNzYWdlc1xyXG4gICAgICAgICAgICAgICAgaWQ9XCJzaWRlYmFyLmRhdGFFbnRyeS5zbGlkZXJcIi8+PC9MaW5rPlxyXG4gICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICA8TWVudS5JdGVtIGtleT1cImNvbXBvbmVudHMvZGF0YUVudHJ5L3NlbGVjdFwiPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2NvbXBvbmVudHMvZGF0YUVudHJ5L3NlbGVjdFwiPlxyXG4gICAgICAgICAgICAgIDxJbnRsTWVzc2FnZXNcclxuICAgICAgICAgICAgICAgIGlkPVwic2lkZWJhci5kYXRhRW50cnkuc2VsZWN0XCIvPjwvTGluaz5cclxuICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJjb21wb25lbnRzL2RhdGFFbnRyeS90cmVlU2VsZWN0XCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29tcG9uZW50cy9kYXRhRW50cnkvdHJlZVNlbGVjdFwiPlxyXG4gICAgICAgICAgICAgIDxJbnRsTWVzc2FnZXNcclxuICAgICAgICAgICAgICAgIGlkPVwic2lkZWJhci5kYXRhRW50cnkudHJlZVNlbGVjdFwiLz48L0xpbms+XHJcbiAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiY29tcG9uZW50cy9kYXRhRW50cnkvdHJhbnNmZXJcIj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb21wb25lbnRzL2RhdGFFbnRyeS90cmFuc2ZlclwiPlxyXG4gICAgICAgICAgICAgIDxJbnRsTWVzc2FnZXNcclxuICAgICAgICAgICAgICAgIGlkPVwic2lkZWJhci5kYXRhRW50cnkudHJhbnNmZXJcIi8+PC9MaW5rPlxyXG4gICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICA8TWVudS5JdGVtIGtleT1cImNvbXBvbmVudHMvZGF0YUVudHJ5L3RpbWVQaWNrZXJcIj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb21wb25lbnRzL2RhdGFFbnRyeS90aW1lUGlja2VyXCI+XHJcbiAgICAgICAgICAgICAgPEludGxNZXNzYWdlc1xyXG4gICAgICAgICAgICAgICAgaWQ9XCJzaWRlYmFyLmRhdGFFbnRyeS50aW1lUGlja2VyXCIvPjwvTGluaz5cclxuICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJjb21wb25lbnRzL2RhdGFFbnRyeS91cGxvYWRcIj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb21wb25lbnRzL2RhdGFFbnRyeS91cGxvYWRcIj5cclxuICAgICAgICAgICAgICA8SW50bE1lc3NhZ2VzXHJcbiAgICAgICAgICAgICAgICBpZD1cInNpZGViYXIuZGF0YUVudHJ5LnVwbG9hZFwiLz48L0xpbms+XHJcbiAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICA8L1N1Yk1lbnU+XHJcblxyXG4gICAgICAgIDxTdWJNZW51IHBvcHVwQ2xhc3NOYW1lPVwiZ3gtbWVudS1ob3Jpem9udGFsXCIga2V5PVwiZGF0YURpc3BsYXlcIiB0aXRsZT17XHJcbiAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLWRhdGEtZGlzcGxheVwiLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEludGxNZXNzYWdlcyBpZD1cInNpZGViYXIuY29tcG9uZW50cy5kYXRhRGlzcGxheVwiLz5cclxuXHJcbiAgICAgICAgICAgICAgPC9zcGFuPn0+XHJcbiAgICAgICAgICA8TWVudS5JdGVtIGtleT1cImNvbXBvbmVudHMvZGF0YURpc3BsYXkvYXZhdGFyXCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29tcG9uZW50cy9kYXRhRGlzcGxheS9hdmF0YXJcIj5cclxuICAgICAgICAgICAgICA8SW50bE1lc3NhZ2VzXHJcbiAgICAgICAgICAgICAgICBpZD1cInNpZGViYXIuZGF0YURpc3BsYXkuYXZhdGFyXCIvPjwvTGluaz5cclxuICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJjb21wb25lbnRzL2RhdGFEaXNwbGF5L2JhZGdlXCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29tcG9uZW50cy9kYXRhRGlzcGxheS9iYWRnZVwiPlxyXG4gICAgICAgICAgICAgIDxJbnRsTWVzc2FnZXNcclxuICAgICAgICAgICAgICAgIGlkPVwic2lkZWJhci5kYXRhRGlzcGxheS5iYWRnZVwiLz48L0xpbms+XHJcbiAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiY29tcG9uZW50cy9kYXRhRGlzcGxheS9jb2xsYXBzZVwiPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2NvbXBvbmVudHMvZGF0YURpc3BsYXkvY29sbGFwc2VcIj5cclxuICAgICAgICAgICAgICA8SW50bE1lc3NhZ2VzXHJcbiAgICAgICAgICAgICAgICBpZD1cInNpZGViYXIuZGF0YURpc3BsYXkuY29sbGFwc2VcIi8+PC9MaW5rPlxyXG4gICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICA8TWVudS5JdGVtIGtleT1cImNvbXBvbmVudHMvZGF0YURpc3BsYXkvY2Fyb3VzZWxcIj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb21wb25lbnRzL2RhdGFEaXNwbGF5L2Nhcm91c2VsXCI+XHJcbiAgICAgICAgICAgICAgPEludGxNZXNzYWdlc1xyXG4gICAgICAgICAgICAgICAgaWQ9XCJzaWRlYmFyLmRhdGFEaXNwbGF5LmNhcm91c2VsXCIvPjwvTGluaz5cclxuICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJjb21wb25lbnRzL2RhdGFEaXNwbGF5L2NhcmRcIj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb21wb25lbnRzL2RhdGFEaXNwbGF5L2NhcmRcIj5cclxuICAgICAgICAgICAgICA8SW50bE1lc3NhZ2VzXHJcbiAgICAgICAgICAgICAgICBpZD1cInNpZGViYXIuZGF0YURpc3BsYXkuY2FyZFwiLz48L0xpbms+XHJcbiAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiY29tcG9uZW50cy9kYXRhRGlzcGxheS9jYWxlbmRhclwiPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2NvbXBvbmVudHMvZGF0YURpc3BsYXkvY2FsZW5kYXJcIj5cclxuICAgICAgICAgICAgICA8SW50bE1lc3NhZ2VzXHJcbiAgICAgICAgICAgICAgICBpZD1cInNpZGViYXIuZGF0YURpc3BsYXkuY2FsZW5kZXJcIi8+PC9MaW5rPlxyXG4gICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICB7Lyo8TWVudS5JdGVtIGtleT1cImNvbXBvbmVudHMvZGF0YURpc3BsYXkvbGlzdFwiPiovfVxyXG4gICAgICAgICAgey8qICA8TGluayBocmVmPVwiL2NvbXBvbmVudHMvZGF0YURpc3BsYXkvbGlzdFwiPiovfVxyXG4gICAgICAgICAgey8qICAgIDxJbnRsTWVzc2FnZXMqL31cclxuICAgICAgICAgIHsvKiAgICAgIGlkPVwic2lkZWJhci5kYXRhRGlzcGxheS5saXN0XCIvPjwvTGluaz4qL31cclxuICAgICAgICAgIHsvKjwvTWVudS5JdGVtPiovfVxyXG4gICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJjb21wb25lbnRzL2RhdGFEaXNwbGF5L3BvcG92ZXJcIj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb21wb25lbnRzL2RhdGFEaXNwbGF5L3BvcG92ZXJcIj5cclxuICAgICAgICAgICAgICA8SW50bE1lc3NhZ2VzXHJcbiAgICAgICAgICAgICAgICBpZD1cInNpZGViYXIuZGF0YURpc3BsYXkucG9wb3ZlclwiLz48L0xpbms+XHJcbiAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiY29tcG9uZW50cy9kYXRhRGlzcGxheS90cmVlXCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29tcG9uZW50cy9kYXRhRGlzcGxheS90cmVlXCI+XHJcbiAgICAgICAgICAgICAgPEludGxNZXNzYWdlc1xyXG4gICAgICAgICAgICAgICAgaWQ9XCJzaWRlYmFyLmRhdGFEaXNwbGF5LnRyZWVcIi8+PC9MaW5rPlxyXG4gICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICA8TWVudS5JdGVtIGtleT1cImNvbXBvbmVudHMvZGF0YURpc3BsYXkvdG9vbHRpcFwiPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2NvbXBvbmVudHMvZGF0YURpc3BsYXkvdG9vbHRpcFwiPlxyXG4gICAgICAgICAgICAgIDxJbnRsTWVzc2FnZXNcclxuICAgICAgICAgICAgICAgIGlkPVwic2lkZWJhci5kYXRhRGlzcGxheS50b29sVGlwc1wiLz48L0xpbms+XHJcbiAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiY29tcG9uZW50cy9kYXRhRGlzcGxheS90aW1lbGluZVwiPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2NvbXBvbmVudHMvZGF0YURpc3BsYXkvdGltZWxpbmVcIj5cclxuICAgICAgICAgICAgICA8SW50bE1lc3NhZ2VzXHJcbiAgICAgICAgICAgICAgICBpZD1cInNpZGViYXIuZGF0YURpc3BsYXkudGltZUxpbmVcIi8+PC9MaW5rPlxyXG4gICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICA8TWVudS5JdGVtIGtleT1cImNvbXBvbmVudHMvZGF0YURpc3BsYXkvdGFnXCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29tcG9uZW50cy9kYXRhRGlzcGxheS90YWdcIj5cclxuICAgICAgICAgICAgICA8SW50bE1lc3NhZ2VzXHJcbiAgICAgICAgICAgICAgICBpZD1cInNpZGViYXIuZGF0YURpc3BsYXkudGFnXCIvPjwvTGluaz5cclxuICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJjb21wb25lbnRzL2RhdGFEaXNwbGF5L3RhYnNcIj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb21wb25lbnRzL2RhdGFEaXNwbGF5L3RhYnNcIj5cclxuICAgICAgICAgICAgICA8SW50bE1lc3NhZ2VzXHJcbiAgICAgICAgICAgICAgICBpZD1cInNpZGViYXIuZGF0YURpc3BsYXkudGFic1wiLz48L0xpbms+XHJcbiAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICA8L1N1Yk1lbnU+XHJcblxyXG4gICAgICAgIDxTdWJNZW51IHBvcHVwQ2xhc3NOYW1lPVwiZ3gtbWVudS1ob3Jpem9udGFsXCIga2V5PVwiZmVlZEJhY2tcIiB0aXRsZT17XHJcbiAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLWZlZWRiYWNrXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnRsTWVzc2FnZXMgaWQ9XCJzaWRlYmFyLmNvbXBvbmVudHMuZmVlZEJhY2tcIi8+XHJcblxyXG4gICAgICAgICAgICAgIDwvc3Bhbj59PlxyXG4gICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJjb21wb25lbnRzL2ZlZWRCYWNrL2FsZXJ0XCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29tcG9uZW50cy9mZWVkQmFjay9hbGVydFwiPlxyXG4gICAgICAgICAgICAgIDxJbnRsTWVzc2FnZXNcclxuICAgICAgICAgICAgICAgIGlkPVwic2lkZWJhci5mZWVkQmFjay5hbGVydFwiLz48L0xpbms+XHJcbiAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiY29tcG9uZW50cy9mZWVkQmFjay9tb2RhbFwiPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2NvbXBvbmVudHMvZmVlZEJhY2svbW9kYWxcIj5cclxuICAgICAgICAgICAgICA8SW50bE1lc3NhZ2VzXHJcbiAgICAgICAgICAgICAgICBpZD1cInNpZGViYXIuZmVlZEJhY2subW9kYWxcIi8+PC9MaW5rPlxyXG4gICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICA8TWVudS5JdGVtIGtleT1cImNvbXBvbmVudHMvZmVlZEJhY2svbWVzc2FnZVwiPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2NvbXBvbmVudHMvZmVlZEJhY2svbWVzc2FnZVwiPlxyXG4gICAgICAgICAgICAgIDxJbnRsTWVzc2FnZXNcclxuICAgICAgICAgICAgICAgIGlkPVwic2lkZWJhci5mZWVkQmFjay5tZXNzYWdlXCIvPjwvTGluaz5cclxuICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJjb21wb25lbnRzL2ZlZWRCYWNrL25vdGlmaWNhdGlvblwiPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2NvbXBvbmVudHMvZmVlZEJhY2svbm90aWZpY2F0aW9uXCI+XHJcbiAgICAgICAgICAgICAgPEludGxNZXNzYWdlc1xyXG4gICAgICAgICAgICAgICAgaWQ9XCJzaWRlYmFyLmZlZWRCYWNrLm5vdGlmaWNhdGlvblwiLz48L0xpbms+XHJcbiAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiY29tcG9uZW50cy9mZWVkQmFjay9wcm9ncmVzc1wiPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2NvbXBvbmVudHMvZmVlZEJhY2svcHJvZ3Jlc3NcIj5cclxuICAgICAgICAgICAgICA8SW50bE1lc3NhZ2VzXHJcbiAgICAgICAgICAgICAgICBpZD1cInNpZGViYXIuZmVlZEJhY2sucHJvZ3Jlc3NcIi8+PC9MaW5rPlxyXG4gICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICA8TWVudS5JdGVtIGtleT1cImNvbXBvbmVudHMvZmVlZEJhY2svcG9wY29uZmlybVwiPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2NvbXBvbmVudHMvZmVlZEJhY2svcG9wY29uZmlybVwiPlxyXG4gICAgICAgICAgICAgIDxJbnRsTWVzc2FnZXMgaWQ9XCJzaWRlYmFyLmZlZWRCYWNrLnBvcENvbmZpcm1cIi8+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJjb21wb25lbnRzL2ZlZWRCYWNrL3NwaW5cIj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb21wb25lbnRzL2ZlZWRCYWNrL3NwaW5cIj5cclxuICAgICAgICAgICAgICA8SW50bE1lc3NhZ2VzXHJcbiAgICAgICAgICAgICAgICBpZD1cInNpZGViYXIuZmVlZEJhY2suc3BpblwiLz48L0xpbms+XHJcbiAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICA8L1N1Yk1lbnU+XHJcblxyXG4gICAgICAgIDxTdWJNZW51IHBvcHVwQ2xhc3NOYW1lPVwiZ3gtbWVudS1ob3Jpem9udGFsXCIga2V5PVwib3RoZXJzXCIgdGl0bGU9e1xyXG4gICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1pbmJveFwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8SW50bE1lc3NhZ2VzIGlkPVwic2lkZWJhci5jb21wb25lbnRzLm90aGVyXCIvPlxyXG5cclxuICAgICAgICAgICAgICA8L3NwYW4+fT5cclxuICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiY29tcG9uZW50cy9vdGhlcnMvYW5jaG9yXCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29tcG9uZW50cy9vdGhlcnMvYW5jaG9yXCI+XHJcbiAgICAgICAgICAgICAgPEludGxNZXNzYWdlc1xyXG4gICAgICAgICAgICAgICAgaWQ9XCJzaWRlYmFyLm90aGVyLmFuY2hvclwiLz48L0xpbms+XHJcbiAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiY29tcG9uZW50cy9vdGhlcnMvYmFja3RvcFwiPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2NvbXBvbmVudHMvb3RoZXJzL2JhY2t0b3BcIj5cclxuICAgICAgICAgICAgICA8SW50bE1lc3NhZ2VzXHJcbiAgICAgICAgICAgICAgICBpZD1cInNpZGViYXIub3RoZXIuYmFja1RvcFwiLz48L0xpbms+XHJcbiAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiY29tcG9uZW50cy9vdGhlcnMvZGl2aWRlclwiPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2NvbXBvbmVudHMvb3RoZXJzL2RpdmlkZXJcIj5cclxuICAgICAgICAgICAgICA8SW50bE1lc3NhZ2VzXHJcbiAgICAgICAgICAgICAgICBpZD1cInNpZGViYXIub3RoZXIuZGl2aWRlclwiLz48L0xpbms+XHJcbiAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICA8L1N1Yk1lbnU+XHJcblxyXG4gICAgICAgIDxTdWJNZW51IHBvcHVwQ2xhc3NOYW1lPVwiZ3gtbWVudS1ob3Jpem9udGFsXCIga2V5PVwidGFibGVcIlxyXG4gICAgICAgICAgICAgICAgIHRpdGxlPXtcclxuICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGljb24tdGFibGVcIi8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnRsTWVzc2FnZXMgaWQ9XCJzaWRlYmFyLmRhdGFEaXNwbGF5LnRhYmxlXCIvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj59PlxyXG4gICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJjb21wb25lbnRzL3RhYmxlL2Jhc2ljXCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29tcG9uZW50cy90YWJsZS9iYXNpY1wiPlxyXG4gICAgICAgICAgICAgIDxJbnRsTWVzc2FnZXNcclxuICAgICAgICAgICAgICAgIGlkPVwic2lkZWJhci52aWV3LmJhc2ljVGFibGVcIi8+PC9MaW5rPlxyXG4gICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICA8TWVudS5JdGVtIGtleT1cImNvbXBvbmVudHMvdGFibGUvZGF0YVwiPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2NvbXBvbmVudHMvdGFibGUvZGF0YVwiPlxyXG4gICAgICAgICAgICAgIDxJbnRsTWVzc2FnZXNcclxuICAgICAgICAgICAgICAgIGlkPVwic2lkZWJhci52aWV3LmRhdGFUYWJsZVwiLz48L0xpbms+XHJcbiAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICA8L1N1Yk1lbnU+XHJcblxyXG4gICAgICA8L1N1Yk1lbnU+XHJcblxyXG4gICAgICA8U3ViTWVudSBwb3B1cENsYXNzTmFtZT17Z2V0TmF2U3R5bGVTdWJNZW51Q2xhc3MobmF2U3R5bGUpfSBrZXk9XCJleHRyYUNvbXBvbmVudHNcIlxyXG4gICAgICAgICAgICAgICB0aXRsZT17PEludGxNZXNzYWdlcyBpZD1cInNpZGViYXIuZXh0cmFDb21wb25lbnRzXCIvPn0+XHJcblxyXG4gICAgICAgIDxTdWJNZW51IHBvcHVwQ2xhc3NOYW1lPVwiZ3gtbWVudS1ob3Jpem9udGFsXCIga2V5PVwiZWRpdG9yXCJcclxuICAgICAgICAgICAgICAgICB0aXRsZT17PHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGljb24tZWRpdG9yXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW50bE1lc3NhZ2VzIGlkPVwic2lkZWJhci5lZGl0b3JzXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj59PlxyXG4gICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJleHRyYS1jb21wb25lbnRzL2VkaXRvci9ja1wiPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2V4dHJhLWNvbXBvbmVudHMvZWRpdG9yL2NrXCI+XHJcbiAgICAgICAgICAgICAgPEludGxNZXNzYWdlc1xyXG4gICAgICAgICAgICAgICAgaWQ9XCJzaWRlYmFyLmVkaXRvcnMuQ0tFZGl0b3JcIi8+PC9MaW5rPlxyXG4gICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICA8TWVudS5JdGVtIGtleT1cImV4dHJhLWNvbXBvbmVudHMvZWRpdG9yL3d5c2lzd3lnXCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZXh0cmEtY29tcG9uZW50cy9lZGl0b3Ivd3lzaXN3eWdcIj5cclxuICAgICAgICAgICAgICA8SW50bE1lc3NhZ2VzXHJcbiAgICAgICAgICAgICAgICBpZD1cInNpZGViYXIuZWRpdG9ycy5XWVNJU1dZR0VkaXRvclwiLz48L0xpbms+XHJcbiAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICA8L1N1Yk1lbnU+XHJcblxyXG4gICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiZXh0cmEtY29tcG9uZW50cy9jb2xvci1waWNrZXJcIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZXh0cmEtY29tcG9uZW50cy9jb2xvci1waWNrZXJcIj5cclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLXBpY2tlclwiLz5cclxuXHJcbiAgICAgICAgICAgIDxJbnRsTWVzc2FnZXMgaWQ9XCJzaWRlYmFyLnBpY2tlcnMuY29sb3JQaWNrZXJzXCIvPlxyXG5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L01lbnUuSXRlbT5cclxuXHJcbiAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJleHRyYS1jb21wb25lbnRzL2RuZFwiPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9leHRyYS1jb21wb25lbnRzL2RuZFwiPlxyXG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGljb24tZHJhZy1hbmQtZHJvcFwiLz5cclxuXHJcbiAgICAgICAgICAgIDxJbnRsTWVzc2FnZXMgaWQ9XCJzaWRlYmFyLmV4dGVuc2lvbnMuZHJhZ05Ecm9wXCIvPlxyXG5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L01lbnUuSXRlbT5cclxuXHJcbiAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJleHRyYS1jb21wb25lbnRzL3N3ZWV0LWFsZXJ0XCI+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL2V4dHJhLWNvbXBvbmVudHMvc3dlZXQtYWxlcnRcIj5cclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLXN3ZWV0LWFsZXJ0XCIvPlxyXG4gICAgICAgICAgICA8SW50bE1lc3NhZ2VzIGlkPVwic2lkZWJhci5leHRlbnNpb25zLnN3ZWV0QWxlcnRcIi8+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9NZW51Lkl0ZW0+XHJcblxyXG4gICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiZXh0cmEtY29tcG9uZW50cy9ub3RpZmljYXRpb25cIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZXh0cmEtY29tcG9uZW50cy9ub3RpZmljYXRpb25cIj48aSBjbGFzc05hbWU9XCJpY29uIGljb24tbm90aWZpY2F0aW9uXCIvPlxyXG4gICAgICAgICAgICA8SW50bE1lc3NhZ2VzXHJcbiAgICAgICAgICAgICAgaWQ9XCJzaWRlYmFyLmV4dGVuc2lvbnMubm90aWZpY2F0aW9uXCIvPjwvTGluaz5cclxuICAgICAgICA8L01lbnUuSXRlbT5cclxuXHJcbiAgICAgICAgPFN1Yk1lbnUgcG9wdXBDbGFzc05hbWU9XCJneC1tZW51LWhvcml6b250YWxcIiBrZXk9XCJ0aW1lLWxpbmVcIlxyXG4gICAgICAgICAgICAgICAgIHRpdGxlPXs8c3Bhbj48aSBjbGFzc05hbWU9XCJpY29uIGljb24tdGltZWxpbmVcIi8+PEludGxNZXNzYWdlc1xyXG4gICAgICAgICAgICAgICAgICAgaWQ9XCJzaWRlYmFyLnRpbWVMaW5lXCIvPjwvc3Bhbj59PlxyXG4gICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJleHRyYS1jb21wb25lbnRzL3RpbWUtbGluZS9kZWZhdWx0XCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZXh0cmEtY29tcG9uZW50cy90aW1lLWxpbmUvZGVmYXVsdFwiPlxyXG4gICAgICAgICAgICAgIDxJbnRsTWVzc2FnZXNcclxuICAgICAgICAgICAgICAgIGlkPVwic2lkZWJhci50aW1lTGluZS5kZWZhdWx0XCIvPjwvTGluaz5cclxuICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJleHRyYS1jb21wb25lbnRzL3RpbWUtbGluZS9kZWZhdWx0LXdpdGgtaWNvblwiPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2V4dHJhLWNvbXBvbmVudHMvdGltZS1saW5lL2RlZmF1bHQtd2l0aC1pY29uXCI+XHJcbiAgICAgICAgICAgICAgPEludGxNZXNzYWdlc1xyXG4gICAgICAgICAgICAgICAgaWQ9XCJzaWRlYmFyLnRpbWVMaW5lLmRlZmF1bHR3aXRoSWNvbnNcIi8+PC9MaW5rPlxyXG4gICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICA8TWVudS5JdGVtIGtleT1cImV4dHJhLWNvbXBvbmVudHMvdGltZS1saW5lL2xlZnQtYWxpZ25cIj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9leHRyYS1jb21wb25lbnRzL3RpbWUtbGluZS9sZWZ0LWFsaWduXCI+XHJcbiAgICAgICAgICAgICAgPEludGxNZXNzYWdlc1xyXG4gICAgICAgICAgICAgICAgaWQ9XCJzaWRlYmFyLnRpbWVMaW5lLmxlZnRBbGlnbmVkXCIvPjwvTGluaz5cclxuICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgIDwvU3ViTWVudT5cclxuXHJcbiAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJleHRyYS1jb21wb25lbnRzL3NodWZmbGVcIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZXh0cmEtY29tcG9uZW50cy9zaHVmZmxlXCI+PGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLXNodWZmbGVcIi8+XHJcbiAgICAgICAgICAgIDxJbnRsTWVzc2FnZXNcclxuICAgICAgICAgICAgICBpZD1cInNpZGViYXIuZXh0ZW5zaW9ucy5zaHVmZmxlXCIvPjwvTGluaz5cclxuICAgICAgICA8L01lbnUuSXRlbT5cclxuXHJcbiAgICAgIDwvU3ViTWVudT5cclxuXHJcbiAgICAgIDxTdWJNZW51IHBvcHVwQ2xhc3NOYW1lPXtnZXROYXZTdHlsZVN1Yk1lbnVDbGFzcyhuYXZTdHlsZSl9IGtleT1cImV4dGVuc2lvbnNcIlxyXG4gICAgICAgICAgICAgICB0aXRsZT17PEludGxNZXNzYWdlcyBpZD1cInNpZGViYXIuZXh0ZW5zaW9uc1wiLz59PlxyXG5cclxuICAgICAgICA8TWVudUl0ZW1Hcm91cCBrZXk9XCJtYXBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXs8SW50bE1lc3NhZ2VzIGlkPVwic2lkZWJhci5tYXBcIi8+fT5cclxuXHJcbiAgICAgICAgICA8U3ViTWVudSBwb3B1cENsYXNzTmFtZT1cImd4LW1lbnUtaG9yaXpvbnRhbFwiIGtleT1cImdvb2dsZVwiXHJcbiAgICAgICAgICAgICAgICAgICB0aXRsZT17XHJcbiAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGljb24tbWFwLWdvb2dsZVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPEludGxNZXNzYWdlcyBpZD1cInNpZGViYXIuZ29vZ2xlLm1hcFwiLz48L3NwYW4+fT5cclxuXHJcbiAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiZXh0ZW5zaW9ucy9tYXAvZ29vZ2xlL3NpbXBsZVwiPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZXh0ZW5zaW9ucy9tYXAvZ29vZ2xlL3NpbXBsZVwiPlxyXG4gICAgICAgICAgICAgICAgPEludGxNZXNzYWdlc1xyXG4gICAgICAgICAgICAgICAgICBpZD1cInNpZGViYXIubWFwLnNpbXBsZVwiLz48L0xpbms+XHJcbiAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cImV4dGVuc2lvbnMvbWFwL2dvb2dsZS9zdHlsZWRcIj5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2V4dGVuc2lvbnMvbWFwL2dvb2dsZS9zdHlsZWRcIj5cclxuICAgICAgICAgICAgICAgIDxJbnRsTWVzc2FnZXNcclxuICAgICAgICAgICAgICAgICAgaWQ9XCJzaWRlYmFyLm1hcC5zdHlsZWRcIi8+PC9MaW5rPlxyXG4gICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJleHRlbnNpb25zL21hcC9nb29nbGUvZ2VvLWxvY2F0aW9uXCI+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9leHRlbnNpb25zL21hcC9nb29nbGUvZ2VvLWxvY2F0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICA8SW50bE1lc3NhZ2VzXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwic2lkZWJhci5tYXAuZ2VvTG9jYXRpb25cIi8+PC9MaW5rPlxyXG4gICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJleHRlbnNpb25zL21hcC9nb29nbGUvZGlyZWN0aW9uc1wiPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZXh0ZW5zaW9ucy9tYXAvZ29vZ2xlL2RpcmVjdGlvbnNcIj5cclxuICAgICAgICAgICAgICAgIDxJbnRsTWVzc2FnZXNcclxuICAgICAgICAgICAgICAgICAgaWQ9XCJzaWRlYmFyLm1hcC5tYXBEaXJlY3Rpb25cIi8+PC9MaW5rPlxyXG4gICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJleHRlbnNpb25zL21hcC9nb29nbGUvb3ZlcmxheVwiPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZXh0ZW5zaW9ucy9tYXAvZ29vZ2xlL292ZXJsYXlcIj5cclxuICAgICAgICAgICAgICAgIDxJbnRsTWVzc2FnZXNcclxuICAgICAgICAgICAgICAgICAgaWQ9XCJzaWRlYmFyLm1hcC5vdmVybGF5XCIvPjwvTGluaz5cclxuICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiZXh0ZW5zaW9ucy9tYXAvZ29vZ2xlL2ttbFwiPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZXh0ZW5zaW9ucy9tYXAvZ29vZ2xlL2ttbFwiPlxyXG4gICAgICAgICAgICAgICAgPEludGxNZXNzYWdlc1xyXG4gICAgICAgICAgICAgICAgICBpZD1cInNpZGViYXIubWFwLmttTGF5ZXJcIi8+PC9MaW5rPlxyXG4gICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJleHRlbnNpb25zL21hcC9nb29nbGUvcG9wdXAtaW5mb1wiPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZXh0ZW5zaW9ucy9tYXAvZ29vZ2xlL3BvcHVwLWluZm9cIj5cclxuICAgICAgICAgICAgICAgIDxJbnRsTWVzc2FnZXNcclxuICAgICAgICAgICAgICAgICAgaWQ9XCJzaWRlYmFyLm1hcC5wb3B1cEluZm9cIi8+PC9MaW5rPlxyXG4gICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJleHRlbnNpb25zL21hcC9nb29nbGUvdHJhZmZpY1wiPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZXh0ZW5zaW9ucy9tYXAvZ29vZ2xlL3RyYWZmaWNcIj5cclxuICAgICAgICAgICAgICAgIDxJbnRsTWVzc2FnZXNcclxuICAgICAgICAgICAgICAgICAgaWQ9XCJzaWRlYmFyLm1hcC50cmFmZmljTGF5ZXJcIi8+PC9MaW5rPlxyXG4gICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJleHRlbnNpb25zL21hcC9nb29nbGUvc3RyZWV0LXZpZXdcIj5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2V4dGVuc2lvbnMvbWFwL2dvb2dsZS9zdHJlZXQtdmlld1wiPlxyXG4gICAgICAgICAgICAgICAgPEludGxNZXNzYWdlc1xyXG4gICAgICAgICAgICAgICAgICBpZD1cInNpZGViYXIubWFwLnN0cmVldFZpZXdcIi8+PC9MaW5rPlxyXG4gICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJleHRlbnNpb25zL21hcC9nb29nbGUvZXZlbnRcIj5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2V4dGVuc2lvbnMvbWFwL2dvb2dsZS9ldmVudFwiPlxyXG4gICAgICAgICAgICAgICAgPEludGxNZXNzYWdlc1xyXG4gICAgICAgICAgICAgICAgICBpZD1cInNpZGViYXIubWFwLmV2ZW50TGlzdGVuZXJcIi8+PC9MaW5rPlxyXG4gICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJleHRlbnNpb25zL21hcC9nb29nbGUvZHJhd2luZ1wiPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZXh0ZW5zaW9ucy9tYXAvZ29vZ2xlL2RyYXdpbmdcIj5cclxuICAgICAgICAgICAgICAgIDxJbnRsTWVzc2FnZXNcclxuICAgICAgICAgICAgICAgICAgaWQ9XCJzaWRlYmFyLm1hcC5tYXBEcmF3aW5nXCIvPjwvTGluaz5cclxuICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiZXh0ZW5zaW9ucy9tYXAvZ29vZ2xlL2NsdXN0ZXJpbmdcIj5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2V4dGVuc2lvbnMvbWFwL2dvb2dsZS9jbHVzdGVyaW5nXCI+XHJcbiAgICAgICAgICAgICAgICA8SW50bE1lc3NhZ2VzXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwic2lkZWJhci5tYXAubWFwQ2x1c3RlcmluZ1wiLz48L0xpbms+XHJcbiAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgPC9TdWJNZW51PlxyXG5cclxuICAgICAgICAgIDxTdWJNZW51IHBvcHVwQ2xhc3NOYW1lPVwiZ3gtbWVudS1ob3Jpem9udGFsXCIga2V5PVwiYW1tYXBcIlxyXG4gICAgICAgICAgICAgICAgICAgdGl0bGU9e1xyXG4gICAgICAgICAgICAgICAgICAgICA8c3Bhbj48aSBjbGFzc05hbWU9XCJpY29uIGljb24tYW1jaGFydFwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPEludGxNZXNzYWdlcyBpZD1cInNpZGViYXIuYW1tYXBcIi8+PC9zcGFuPn0+XHJcblxyXG4gICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cImV4dGVuc2lvbnMvbWFwL2FtbWFwL2FuaW1hdGlvbnMtbGluZXNcIj5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2V4dGVuc2lvbnMvbWFwL2FtbWFwL2FuaW1hdGlvbnMtbGluZXNcIj5cclxuICAgICAgICAgICAgICAgIDxJbnRsTWVzc2FnZXNcclxuICAgICAgICAgICAgICAgICAgaWQ9XCJzaWRlYmFyLm1hcC5hbmltYXRpb25zLmxpbmVzXCIvPjwvTGluaz5cclxuICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiZXh0ZW5zaW9ucy9tYXAvYW1tYXAvY3VydmVkLWxpbmVzXCI+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9leHRlbnNpb25zL21hcC9hbW1hcC9jdXJ2ZWQtbGluZXNcIj5cclxuICAgICAgICAgICAgICAgIDxJbnRsTWVzc2FnZXNcclxuICAgICAgICAgICAgICAgICAgaWQ9XCJzaWRlYmFyLm1hcC5jdXJ2ZWQubGluZXNcIi8+PC9MaW5rPlxyXG4gICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJleHRlbnNpb25zL21hcC9hbW1hcC96b29taW5nLWNvdW50cmllc1wiPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZXh0ZW5zaW9ucy9tYXAvYW1tYXAvem9vbWluZy1jb3VudHJpZXNcIj5cclxuICAgICAgICAgICAgICAgIDxJbnRsTWVzc2FnZXNcclxuICAgICAgICAgICAgICAgICAgaWQ9XCJzaWRlYmFyLm1hcC56b29taW5nLmNvdW50cmllc1wiLz48L0xpbms+XHJcbiAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cImV4dGVuc2lvbnMvbWFwL2FtbWFwL3BhdHRlcm5zXCI+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9leHRlbnNpb25zL21hcC9hbW1hcC9wYXR0ZXJuc1wiPlxyXG4gICAgICAgICAgICAgICAgPEludGxNZXNzYWdlc1xyXG4gICAgICAgICAgICAgICAgICBpZD1cInNpZGViYXIubWFwLnBhdHRlcm5zXCIvPjwvTGluaz5cclxuICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiZXh0ZW5zaW9ucy9tYXAvYW1tYXAvY2FwaXRhbHMtbWFwXCI+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9leHRlbnNpb25zL21hcC9hbW1hcC9jYXBpdGFscy1tYXBcIj5cclxuICAgICAgICAgICAgICAgIDxJbnRsTWVzc2FnZXNcclxuICAgICAgICAgICAgICAgICAgaWQ9XCJzaWRlYmFyLm1hcC5jYXBpdGFscy5tYXBcIi8+PC9MaW5rPlxyXG4gICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJleHRlbnNpb25zL21hcC9hbW1hcC9tYXAtbWFya2Vyc1wiPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZXh0ZW5zaW9ucy9tYXAvYW1tYXAvbWFwLW1hcmtlcnNcIj5cclxuICAgICAgICAgICAgICAgIDxJbnRsTWVzc2FnZXNcclxuICAgICAgICAgICAgICAgICAgaWQ9XCJzaWRlYmFyLm1hcC5tYXJrZXJzXCIvPjwvTGluaz5cclxuICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiZXh0ZW5zaW9ucy9tYXAvYW1tYXAvZmxpZ2h0LXJvdXRlc1wiPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZXh0ZW5zaW9ucy9tYXAvYW1tYXAvZmxpZ2h0LXJvdXRlc1wiPlxyXG4gICAgICAgICAgICAgICAgPEludGxNZXNzYWdlc1xyXG4gICAgICAgICAgICAgICAgICBpZD1cInNpZGViYXIubWFwLmZsaWdodC5yb3V0ZXNcIi8+PC9MaW5rPlxyXG4gICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJleHRlbnNpb25zL21hcC9hbW1hcC9jaG9yb3BsZXRoXCI+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9leHRlbnNpb25zL21hcC9hbW1hcC9jaG9yb3BsZXRoXCI+XHJcbiAgICAgICAgICAgICAgICA8SW50bE1lc3NhZ2VzXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwic2lkZWJhci5tYXAuY2hvcm9wbGV0aFwiLz48L0xpbms+XHJcbiAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cImV4dGVuc2lvbnMvbWFwL2FtbWFwL2dyb3VwZWQtY291bnRyaWVzXCI+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9leHRlbnNpb25zL21hcC9hbW1hcC9ncm91cGVkLWNvdW50cmllc1wiPlxyXG4gICAgICAgICAgICAgICAgPEludGxNZXNzYWdlc1xyXG4gICAgICAgICAgICAgICAgICBpZD1cInNpZGViYXIubWFwLmdyb3VwZWQuY291bnRyaWVzXCIvPjwvTGluaz5cclxuICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiZXh0ZW5zaW9ucy9tYXAvYW1tYXAvYnViYmxlc1wiPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZXh0ZW5zaW9ucy9tYXAvYW1tYXAvYnViYmxlc1wiPlxyXG4gICAgICAgICAgICAgICAgPEludGxNZXNzYWdlc1xyXG4gICAgICAgICAgICAgICAgICBpZD1cInNpZGViYXIubWFwLmJ1YmJsZXNcIi8+PC9MaW5rPlxyXG4gICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJleHRlbnNpb25zL21hcC9hbW1hcC9kcmlsbC1kb3duXCI+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9leHRlbnNpb25zL21hcC9hbW1hcC9kcmlsbC1kb3duXCI+XHJcbiAgICAgICAgICAgICAgICA8SW50bE1lc3NhZ2VzXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwic2lkZWJhci5tYXAuZHJpbGwuZG93blwiLz48L0xpbms+XHJcbiAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cImV4dGVuc2lvbnMvbWFwL2FtbWFwL211bHRpcGxlLWFyZWFzXCI+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9leHRlbnNpb25zL21hcC9hbW1hcC9tdWx0aXBsZS1hcmVhc1wiPlxyXG4gICAgICAgICAgICAgICAgPEludGxNZXNzYWdlc1xyXG4gICAgICAgICAgICAgICAgICBpZD1cInNpZGViYXIubWFwLm11bHRpcGxlLmFyZWFzXCIvPjwvTGluaz5cclxuICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiZXh0ZW5zaW9ucy9tYXAvYW1tYXAvd2VhdGhlclwiPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZXh0ZW5zaW9ucy9tYXAvYW1tYXAvd2VhdGhlclwiPlxyXG4gICAgICAgICAgICAgICAgPEludGxNZXNzYWdlc1xyXG4gICAgICAgICAgICAgICAgICBpZD1cInNpZGViYXIubWFwLndlYXRoZXJcIi8+PC9MaW5rPlxyXG4gICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuXHJcbiAgICAgICAgICA8L1N1Yk1lbnU+XHJcblxyXG4gICAgICAgIDwvTWVudUl0ZW1Hcm91cD5cclxuXHJcbiAgICAgICAgPE1lbnVJdGVtR3JvdXAga2V5PVwiY2hhcnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXs8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnRsTWVzc2FnZXMgaWQ9XCJzaWRlYmFyLmNoYXJ0XCIvPjwvc3Bhbj59PlxyXG4gICAgICAgICAgPFN1Yk1lbnUgcG9wdXBDbGFzc05hbWU9XCJneC1tZW51LWhvcml6b250YWxcIiBrZXk9XCJyZWNoYXJ0XCIgdGl0bGU9e1xyXG4gICAgICAgICAgICA8c3Bhbj48aSBjbGFzc05hbWU9XCJpY29uIGljb24tY2hhcnQtYXJlYS1uZXdcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEludGxNZXNzYWdlcyBpZD1cInNpZGViYXIuY29tcG9uZW50cy5yZWNoYXJ0XCIvPlxyXG4gICAgICAgICAgICAgIDwvc3Bhbj59PlxyXG5cclxuICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJleHRlbnNpb25zL2NoYXJ0L3JlY2hhcnRzL2FyZWFcIj5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2V4dGVuc2lvbnMvY2hhcnQvcmVjaGFydHMvYXJlYVwiPlxyXG4gICAgICAgICAgICAgICAgPEludGxNZXNzYWdlc1xyXG4gICAgICAgICAgICAgICAgICBpZD1cInNpZGViYXIuY2hhcnQuYXJlYVwiLz48L0xpbms+XHJcbiAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cImV4dGVuc2lvbnMvY2hhcnQvcmVjaGFydHMvYmFyXCI+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9leHRlbnNpb25zL2NoYXJ0L3JlY2hhcnRzL2JhclwiPlxyXG4gICAgICAgICAgICAgICAgPEludGxNZXNzYWdlc1xyXG4gICAgICAgICAgICAgICAgICBpZD1cInNpZGViYXIuY2hhcnQuYmFyXCIvPjwvTGluaz5cclxuICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiZXh0ZW5zaW9ucy9jaGFydC9yZWNoYXJ0cy9jb21wb3NlZFwiPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZXh0ZW5zaW9ucy9jaGFydC9yZWNoYXJ0cy9jb21wb3NlZFwiPlxyXG4gICAgICAgICAgICAgICAgPEludGxNZXNzYWdlc1xyXG4gICAgICAgICAgICAgICAgICBpZD1cInNpZGViYXIuY2hhcnQuY29tcG9zZWRcIi8+PC9MaW5rPlxyXG4gICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJleHRlbnNpb25zL2NoYXJ0L3JlY2hhcnRzL2xpbmVcIj5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2V4dGVuc2lvbnMvY2hhcnQvcmVjaGFydHMvbGluZVwiPlxyXG4gICAgICAgICAgICAgICAgPEludGxNZXNzYWdlc1xyXG4gICAgICAgICAgICAgICAgICBpZD1cInNpZGViYXIuY2hhcnQubGluZVwiLz48L0xpbms+XHJcbiAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cImV4dGVuc2lvbnMvY2hhcnQvcmVjaGFydHMvcGllXCI+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9leHRlbnNpb25zL2NoYXJ0L3JlY2hhcnRzL3BpZVwiPlxyXG4gICAgICAgICAgICAgICAgPEludGxNZXNzYWdlc1xyXG4gICAgICAgICAgICAgICAgICBpZD1cInNpZGViYXIuY2hhcnQucGllXCIvPjwvTGluaz5cclxuICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiZXh0ZW5zaW9ucy9jaGFydC9yZWNoYXJ0cy9yYWRhclwiPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZXh0ZW5zaW9ucy9jaGFydC9yZWNoYXJ0cy9yYWRhclwiPlxyXG4gICAgICAgICAgICAgICAgPEludGxNZXNzYWdlc1xyXG4gICAgICAgICAgICAgICAgICBpZD1cInNpZGViYXIuY2hhcnQucmFkYXJcIi8+PC9MaW5rPlxyXG4gICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJleHRlbnNpb25zL2NoYXJ0L3JlY2hhcnRzL3JhZGlhbFwiPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZXh0ZW5zaW9ucy9jaGFydC9yZWNoYXJ0cy9yYWRpYWxcIj5cclxuICAgICAgICAgICAgICAgIDxJbnRsTWVzc2FnZXNcclxuICAgICAgICAgICAgICAgICAgaWQ9XCJzaWRlYmFyLmNoYXJ0LnJhZGlhbFwiLz48L0xpbms+XHJcbiAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cImV4dGVuc2lvbnMvY2hhcnQvcmVjaGFydHMvc2NhdHRlclwiPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZXh0ZW5zaW9ucy9jaGFydC9yZWNoYXJ0cy9zY2F0dGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8SW50bE1lc3NhZ2VzXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwic2lkZWJhci5jaGFydC5zY2F0dGVyXCIvPjwvTGluaz5cclxuICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiZXh0ZW5zaW9ucy9jaGFydC9yZWNoYXJ0cy90cmVlbWFwXCI+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9leHRlbnNpb25zL2NoYXJ0L3JlY2hhcnRzL3RyZWVtYXBcIj5cclxuICAgICAgICAgICAgICAgIDxJbnRsTWVzc2FnZXNcclxuICAgICAgICAgICAgICAgICAgaWQ9XCJzaWRlYmFyLmNoYXJ0LnRyZWVcIi8+PC9MaW5rPlxyXG4gICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgIDwvU3ViTWVudT5cclxuXHJcbiAgICAgICAgICA8U3ViTWVudSBwb3B1cENsYXNzTmFtZT1cImd4LW1lbnUtaG9yaXpvbnRhbFwiIGtleT1cImFtY2hhcnRcIiB0aXRsZT17XHJcbiAgICAgICAgICAgIDxzcGFuPjxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1hbWNoYXJ0XCIvPlxyXG4gICAgICAgICAgICAgICAgPEludGxNZXNzYWdlcyBpZD1cInNpZGViYXIuY29tcG9uZW50cy5hbWNoYXJ0XCIvPlxyXG4gICAgICAgICAgICAgIDwvc3Bhbj59PlxyXG4gICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cImV4dGVuc2lvbnMvY2hhcnQvYW1jaGFydC9hcmVhXCI+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9leHRlbnNpb25zL2NoYXJ0L2FtY2hhcnQvYXJlYVwiPlxyXG4gICAgICAgICAgICAgICAgPEludGxNZXNzYWdlc1xyXG4gICAgICAgICAgICAgICAgICBpZD1cInNpZGViYXIuY2hhcnQuYXJlYVwiLz48L0xpbms+XHJcbiAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cImV4dGVuc2lvbnMvY2hhcnQvYW1jaGFydC9iYXJcIj5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2V4dGVuc2lvbnMvY2hhcnQvYW1jaGFydC9iYXJcIj5cclxuICAgICAgICAgICAgICAgIDxJbnRsTWVzc2FnZXNcclxuICAgICAgICAgICAgICAgICAgaWQ9XCJzaWRlYmFyLmNoYXJ0LmJhclwiLz48L0xpbms+XHJcbiAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cImV4dGVuc2lvbnMvY2hhcnQvYW1jaGFydC9saW5lXCI+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9leHRlbnNpb25zL2NoYXJ0L2FtY2hhcnQvbGluZVwiPlxyXG4gICAgICAgICAgICAgICAgPEludGxNZXNzYWdlc1xyXG4gICAgICAgICAgICAgICAgICBpZD1cInNpZGViYXIuY2hhcnQubGluZVwiLz48L0xpbms+XHJcbiAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cImV4dGVuc2lvbnMvY2hhcnQvYW1jaGFydC9waWVcIj5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2V4dGVuc2lvbnMvY2hhcnQvYW1jaGFydC9waWVcIj5cclxuICAgICAgICAgICAgICAgIDxJbnRsTWVzc2FnZXNcclxuICAgICAgICAgICAgICAgICAgaWQ9XCJzaWRlYmFyLmNoYXJ0LnBpZVwiLz48L0xpbms+XHJcbiAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cImV4dGVuc2lvbnMvY2hhcnQvYW1jaGFydC9jb21wb3NlZFwiPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZXh0ZW5zaW9ucy9jaGFydC9hbWNoYXJ0L2NvbXBvc2VkXCI+XHJcbiAgICAgICAgICAgICAgICA8SW50bE1lc3NhZ2VzXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwic2lkZWJhci5jaGFydC5jb21wb3NlZFwiLz48L0xpbms+XHJcbiAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgPC9TdWJNZW51PlxyXG5cclxuICAgICAgICA8L01lbnVJdGVtR3JvdXA+XHJcblxyXG4gICAgICAgIDxTdWJNZW51IHBvcHVwQ2xhc3NOYW1lPVwiZ3gtbWVudS1ob3Jpem9udGFsXCIga2V5PVwiY2FsZW5kYXJcIlxyXG4gICAgICAgICAgICAgICAgIHRpdGxlPXs8c3Bhbj48aSBjbGFzc05hbWU9XCJpY29uIGljb24tY2FsZW5kYXJcIi8+PEludGxNZXNzYWdlc1xyXG4gICAgICAgICAgICAgICAgICAgaWQ9XCJzaWRlYmFyLmNhbGVuZGFyXCIvPjwvc3Bhbj59PlxyXG4gICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJleHRlbnNpb25zL2NhbGVuZGFyL2Jhc2ljXCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZXh0ZW5zaW9ucy9jYWxlbmRhci9iYXNpY1wiPlxyXG4gICAgICAgICAgICAgIDxJbnRsTWVzc2FnZXNcclxuICAgICAgICAgICAgICAgIGlkPVwic2lkZWJhci5jYWxlbmRhci5iYXNpY1wiLz48L0xpbms+XHJcbiAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiZXh0ZW5zaW9ucy9jYWxlbmRhci9jdWx0dXJlc1wiPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2V4dGVuc2lvbnMvY2FsZW5kYXIvY3VsdHVyZXNcIj5cclxuICAgICAgICAgICAgICA8SW50bE1lc3NhZ2VzXHJcbiAgICAgICAgICAgICAgICBpZD1cInNpZGViYXIuY2FsZW5kYXIuY3VsdHVyZXNcIi8+PC9MaW5rPlxyXG4gICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICA8TWVudS5JdGVtIGtleT1cImV4dGVuc2lvbnMvY2FsZW5kYXIvcG9wdXBcIj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9leHRlbnNpb25zL2NhbGVuZGFyL3BvcHVwXCI+XHJcbiAgICAgICAgICAgICAgPEludGxNZXNzYWdlc1xyXG4gICAgICAgICAgICAgICAgaWQ9XCJzaWRlYmFyLmNhbGVuZGFyLnBvcHVwXCIvPjwvTGluaz5cclxuICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJleHRlbnNpb25zL2NhbGVuZGFyL3JlbmRlcmluZ1wiPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2V4dGVuc2lvbnMvY2FsZW5kYXIvcmVuZGVyaW5nXCI+XHJcbiAgICAgICAgICAgICAgPEludGxNZXNzYWdlc1xyXG4gICAgICAgICAgICAgICAgaWQ9XCJzaWRlYmFyLmNhbGVuZGFyLnJlbmRlcmluZ1wiLz48L0xpbms+XHJcbiAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiZXh0ZW5zaW9ucy9jYWxlbmRhci9zZWxlY3RhYmxlXCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZXh0ZW5zaW9ucy9jYWxlbmRhci9zZWxlY3RhYmxlXCI+XHJcbiAgICAgICAgICAgICAgPEludGxNZXNzYWdlc1xyXG4gICAgICAgICAgICAgICAgaWQ9XCJzaWRlYmFyLmNhbGVuZGFyLnNlbGVjdGFibGVcIi8+PC9MaW5rPlxyXG4gICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICA8TWVudS5JdGVtIGtleT1cImV4dGVuc2lvbnMvY2FsZW5kYXIvdGltZXNsb3RzXCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZXh0ZW5zaW9ucy9jYWxlbmRhci90aW1lc2xvdHNcIj5cclxuICAgICAgICAgICAgICA8SW50bE1lc3NhZ2VzIGlkPVwic2lkZWJhci5jYWxlbmRhci50aW1lc2xvdHNcIi8+PC9MaW5rPlxyXG4gICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgPC9TdWJNZW51PlxyXG5cclxuICAgICAgPC9TdWJNZW51PlxyXG5cclxuICAgICAgPFN1Yk1lbnUgcG9wdXBDbGFzc05hbWU9e2dldE5hdlN0eWxlU3ViTWVudUNsYXNzKG5hdlN0eWxlKX0ga2V5PVwiY3VzdG9tLXZpZXdzXCJcclxuICAgICAgICAgICAgICAgdGl0bGU9ezxJbnRsTWVzc2FnZXMgaWQ9XCJzaWRlYmFyLmN1c3RvbVZpZXdzXCIvPn0+XHJcblxyXG4gICAgICAgIDxTdWJNZW51IHBvcHVwQ2xhc3NOYW1lPVwiZ3gtbWVudS1ob3Jpem9udGFsXCIga2V5PVwidXNlci1hdXRoXCJcclxuICAgICAgICAgICAgICAgICB0aXRsZT17PHNwYW4+PGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLWF1dGgtc2NyZWVuXCIvPjxJbnRsTWVzc2FnZXNcclxuICAgICAgICAgICAgICAgICAgIGlkPVwiYXBwLnVzZXJBdXRoXCIvPjwvc3Bhbj59PlxyXG4gICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJjdXN0b20tdmlld3MvdXNlci1hdXRoL3NpZ24taW5cIj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jdXN0b20tdmlld3MvdXNlci1hdXRoL3NpZ24taW5cIj5cclxuICAgICAgICAgICAgICA8SW50bE1lc3NhZ2VzXHJcbiAgICAgICAgICAgICAgICBpZD1cImFwcC51c2VyQXV0aC5zaWduSW5cIi8+PC9MaW5rPlxyXG4gICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICA8TWVudS5JdGVtIGtleT1cImN1c3RvbS12aWV3cy91c2VyLWF1dGgvZm9yZ290LXBhc3N3b3JkXCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY3VzdG9tLXZpZXdzL3VzZXItYXV0aC9mb3Jnb3QtcGFzc3dvcmRcIj5cclxuICAgICAgICAgICAgICA8SW50bE1lc3NhZ2VzXHJcbiAgICAgICAgICAgICAgICBpZD1cImFwcC51c2VyQXV0aC5mb3Jnb3RQYXNzd29yZFwiLz48L0xpbms+XHJcbiAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiY3VzdG9tLXZpZXdzL3VzZXItYXV0aC9zaWduLXVwXCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY3VzdG9tLXZpZXdzL3VzZXItYXV0aC9zaWduLXVwXCI+XHJcbiAgICAgICAgICAgICAgPEludGxNZXNzYWdlc1xyXG4gICAgICAgICAgICAgICAgaWQ9XCJhcHAudXNlckF1dGguc2lnblVwXCIvPjwvTGluaz5cclxuICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJjdXN0b20tdmlld3MvdXNlci1hdXRoL2xvY2stc2NyZWVuXCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY3VzdG9tLXZpZXdzL3VzZXItYXV0aC9sb2NrLXNjcmVlblwiPlxyXG4gICAgICAgICAgICAgIDxJbnRsTWVzc2FnZXNcclxuICAgICAgICAgICAgICAgIGlkPVwiYXBwLnVzZXJBdXRoLmxvY2tTY3JlZW5cIi8+PC9MaW5rPlxyXG4gICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICA8TWVudS5JdGVtIGtleT1cImN1c3RvbS12aWV3cy91c2VyLWF1dGgvcmVzZXQtcGFzc3dvcmRcIj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jdXN0b20tdmlld3MvdXNlci1hdXRoL3Jlc2V0LXBhc3N3b3JkXCI+XHJcbiAgICAgICAgICAgICAgPEludGxNZXNzYWdlc1xyXG4gICAgICAgICAgICAgICAgaWQ9XCJhcHAudXNlckF1dGgucmVzZXRQYXNzd29yZFwiLz48L0xpbms+XHJcbiAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICA8L1N1Yk1lbnU+XHJcblxyXG4gICAgICAgIDxTdWJNZW51IHBvcHVwQ2xhc3NOYW1lPVwiZ3gtbWVudS1ob3Jpem9udGFsXCIga2V5PVwibGlzdC10eXBlXCJcclxuICAgICAgICAgICAgICAgICB0aXRsZT17PHNwYW4+PGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLWFsbC1jb250YWN0c1wiLz48SW50bE1lc3NhZ2VzXHJcbiAgICAgICAgICAgICAgICAgICBpZD1cInNpZGViYXIubGlzdFR5cGVcIi8+PC9zcGFuPn0+XHJcbiAgICAgICAgICA8TWVudS5JdGVtIGtleT1cImN1c3RvbS12aWV3cy9saXN0LXR5cGUvc2ltcGxlLWxpc3RcIj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jdXN0b20tdmlld3MvbGlzdC10eXBlL3NpbXBsZS1saXN0XCI+XHJcbiAgICAgICAgICAgICAgPEludGxNZXNzYWdlc1xyXG4gICAgICAgICAgICAgICAgaWQ9XCJzaWRlYmFyLmxpc3RUeXBlLnBsYWluTGlzdFZpZXdcIi8+PC9MaW5rPlxyXG4gICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICA8TWVudS5JdGVtIGtleT1cImN1c3RvbS12aWV3cy9saXN0LXR5cGUvc3RyaXAtbGlzdFwiPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2N1c3RvbS12aWV3cy9saXN0LXR5cGUvc3RyaXAtbGlzdFwiPlxyXG4gICAgICAgICAgICAgIDxJbnRsTWVzc2FnZXNcclxuICAgICAgICAgICAgICAgIGlkPVwic2lkZWJhci5saXN0VHlwZS53aXRoRGl2aWRlclwiLz48L0xpbms+XHJcbiAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiY3VzdG9tLXZpZXdzL2xpc3QtdHlwZS9jYXJkLWxpc3RcIj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jdXN0b20tdmlld3MvbGlzdC10eXBlL2NhcmQtbGlzdFwiPlxyXG4gICAgICAgICAgICAgIDxJbnRsTWVzc2FnZXNcclxuICAgICAgICAgICAgICAgIGlkPVwic2lkZWJhci5saXN0VHlwZS5jYXJkTGlzdFZpZXdcIi8+PC9MaW5rPlxyXG4gICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgPC9TdWJNZW51PlxyXG5cclxuICAgICAgICA8U3ViTWVudSBwb3B1cENsYXNzTmFtZT1cImd4LW1lbnUtaG9yaXpvbnRhbFwiIGtleT1cImVDb21tZXJjZVwiXHJcbiAgICAgICAgICAgICAgICAgdGl0bGU9ezxzcGFuPjxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1zaG9wcGluZy1jYXJ0XCIvPjxJbnRsTWVzc2FnZXNcclxuICAgICAgICAgICAgICAgICAgIGlkPVwic2lkZWJhci5lQ29tbWVyY2VcIi8+PC9zcGFuPn0+XHJcbiAgICAgICAgICA8TWVudS5JdGVtIGtleT1cImN1c3RvbS12aWV3cy9lQ29tbWVyY2UvcHJvZHVjdC1ncmlkXCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY3VzdG9tLXZpZXdzL2VDb21tZXJjZS9wcm9kdWN0LWdyaWRcIj5cclxuICAgICAgICAgICAgICA8SW50bE1lc3NhZ2VzXHJcbiAgICAgICAgICAgICAgICBpZD1cInNpZGViYXIuZUNvbW1lcmNlLnByb2R1Y3RHcmlkXCIvPjwvTGluaz5cclxuICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJjdXN0b20tdmlld3MvZUNvbW1lcmNlL3Byb2R1Y3QtbGlzdFwiPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2N1c3RvbS12aWV3cy9lQ29tbWVyY2UvcHJvZHVjdC1saXN0XCI+XHJcbiAgICAgICAgICAgICAgPEludGxNZXNzYWdlc1xyXG4gICAgICAgICAgICAgICAgaWQ9XCJzaWRlYmFyLmVDb21tZXJjZS5wcm9kdWN0TGlzdFwiLz48L0xpbms+XHJcbiAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICA8L1N1Yk1lbnU+XHJcblxyXG4gICAgICAgIDxTdWJNZW51IHBvcHVwQ2xhc3NOYW1lPVwiZ3gtbWVudS1ob3Jpem9udGFsXCIga2V5PVwiZXJyb3JQYWdlc1wiXHJcbiAgICAgICAgICAgICAgICAgdGl0bGU9ezxzcGFuPjxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1lcnJvclwiLz48SW50bE1lc3NhZ2VzXHJcbiAgICAgICAgICAgICAgICAgICBpZD1cInNpZGViYXIuZXh0cmFQYWdlc1wiLz48L3NwYW4+fT5cclxuXHJcbiAgICAgICAgICA8TWVudS5JdGVtIGtleT1cImN1c3RvbS12aWV3cy9lcnJvci1wYWdlcy9lcnJvci00MDRcIj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jdXN0b20tdmlld3MvZXJyb3ItcGFnZXMvZXJyb3ItNDA0XCI+XHJcbiAgICAgICAgICAgICAgPEludGxNZXNzYWdlc1xyXG4gICAgICAgICAgICAgICAgaWQ9XCJzaWRlYmFyLmV4dHJhUGFnZXMuNDA0XCIvPjwvTGluaz5cclxuICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJjdXN0b20tdmlld3MvZXJyb3ItcGFnZXMvZXJyb3ItNTAwXCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY3VzdG9tLXZpZXdzL2Vycm9yLXBhZ2VzL2Vycm9yLTUwMFwiPlxyXG4gICAgICAgICAgICAgIDxJbnRsTWVzc2FnZXNcclxuICAgICAgICAgICAgICAgIGlkPVwic2lkZWJhci5leHRyYVBhZ2VzLjUwMFwiLz48L0xpbms+XHJcbiAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICA8L1N1Yk1lbnU+XHJcblxyXG4gICAgICAgIDxTdWJNZW51IHBvcHVwQ2xhc3NOYW1lPVwiZ3gtbWVudS1ob3Jpem9udGFsXCIga2V5PVwiZXh0cmEtZWxlbWVudHNcIlxyXG4gICAgICAgICAgICAgICAgIHRpdGxlPXs8c3Bhbj48aSBjbGFzc05hbWU9XCJpY29uIGljb24tZWxsaXBzZS1oXCIvPjxJbnRsTWVzc2FnZXNcclxuICAgICAgICAgICAgICAgICAgIGlkPVwic2lkZWJhci5saXN0VHlwZS5leHRyYXNcIi8+PC9zcGFuPn0+XHJcbiAgICAgICAgICA8TWVudS5JdGVtIGtleT1cImN1c3RvbS12aWV3cy9leHRyYXMvcHJpY2luZy10YWJsZVwiPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2N1c3RvbS12aWV3cy9leHRyYXMvcHJpY2luZy10YWJsZVwiPlxyXG4gICAgICAgICAgICAgIDxJbnRsTWVzc2FnZXNcclxuICAgICAgICAgICAgICAgIGlkPVwic2lkZWJhci5leHRyYUVsZW1lbnRzLnByaWNpbmdUYWJsZVwiLz48L0xpbms+XHJcbiAgICAgICAgICA8L01lbnUuSXRlbT5cclxuXHJcbiAgICAgICAgICA8TWVudS5JdGVtIGtleT1cImN1c3RvbS12aWV3cy9leHRyYXMvY2FsbG91dHNcIj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jdXN0b20tdmlld3MvZXh0cmFzL2NhbGxvdXRzXCI+XHJcbiAgICAgICAgICAgICAgPEludGxNZXNzYWdlc1xyXG4gICAgICAgICAgICAgICAgaWQ9XCJzaWRlYmFyLmV4dHJhRWxlbWVudHMuY2FsbG91dHNcIi8+PC9MaW5rPlxyXG4gICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICA8TWVudS5JdGVtIGtleT1cImN1c3RvbS12aWV3cy9leHRyYXMvdGVzdGltb25pYWxzXCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY3VzdG9tLXZpZXdzL2V4dHJhcy90ZXN0aW1vbmlhbHNcIj5cclxuICAgICAgICAgICAgICA8SW50bE1lc3NhZ2VzXHJcbiAgICAgICAgICAgICAgICBpZD1cInNpZGViYXIuZXh0cmFFbGVtZW50cy50ZXN0aW1vbmlhbHNcIi8+PC9MaW5rPlxyXG4gICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgPC9TdWJNZW51PlxyXG5cclxuICAgICAgPC9TdWJNZW51PlxyXG5cclxuICAgIDwvTWVudT5cclxuXHJcbiAgKTtcclxufTtcclxuXHJcbkhvcml6b250YWxOYXYucHJvcFR5cGVzID0ge307XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb3Jpem9udGFsTmF2O1xyXG5cclxuIiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0J1dHRvbiwgRHJvcGRvd24sIExheW91dCwgTWVudSwgbWVzc2FnZSwgUG9wb3Zlcn0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBJY29uIGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuaW1wb3J0IHtjb25uZWN0LCB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3J9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgQ3VzdG9tU2Nyb2xsYmFycyBmcm9tIFwiLi4vLi4vLi4vLi4vdXRpbC9DdXN0b21TY3JvbGxiYXJzXCI7XHJcbmltcG9ydCBsYW5ndWFnZURhdGEgZnJvbSBcIi4uL2xhbmd1YWdlRGF0YVwiO1xyXG5pbXBvcnQgU2VhcmNoQm94IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL1NlYXJjaEJveFwiO1xyXG5pbXBvcnQgVXNlckluZm8gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvVXNlckluZm9cIjtcclxuaW1wb3J0IEFwcE5vdGlmaWNhdGlvbiBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9BcHBOb3RpZmljYXRpb25cIjtcclxuaW1wb3J0IE1haWxOb3RpZmljYXRpb24gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvTWFpbE5vdGlmaWNhdGlvblwiO1xyXG5pbXBvcnQgSG9yaXpvbnRhbE5hdiBmcm9tIFwiLi4vSG9yaXpvbnRhbE5hdlwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7c3dpdGNoTGFuZ3VhZ2UsIHRvZ2dsZUNvbGxhcHNlZFNpZGVOYXZ9IGZyb20gXCIuLi8uLi8uLi8uLi9yZWR1eC9hY3Rpb25zL1NldHRpbmdcIjtcclxuaW1wb3J0IEludGxNZXNzYWdlcyBmcm9tIFwiLi4vLi4vLi4vLi4vdXRpbC9JbnRsTWVzc2FnZXNcIjtcclxuXHJcbmNvbnN0IHtIZWFkZXJ9ID0gTGF5b3V0O1xyXG5cclxuY29uc3QgbWVudSA9IChcclxuICA8TWVudSBvbkNsaWNrPXtoYW5kbGVNZW51Q2xpY2t9PlxyXG4gICAgPE1lbnUuSXRlbSBrZXk9XCIxXCI+UHJvZHVjdHM8L01lbnUuSXRlbT5cclxuICAgIDxNZW51Lkl0ZW0ga2V5PVwiMlwiPkFwcHM8L01lbnUuSXRlbT5cclxuICAgIDxNZW51Lkl0ZW0ga2V5PVwiM1wiPkJsb2dzPC9NZW51Lkl0ZW0+XHJcbiAgPC9NZW51PlxyXG4pO1xyXG5cclxuZnVuY3Rpb24gaGFuZGxlTWVudUNsaWNrKGUpIHtcclxuICBtZXNzYWdlLmluZm8oJ0NsaWNrIG9uIG1lbnUgaXRlbS4nKTtcclxufVxyXG5cclxuY29uc3QgSW5zaWRlSGVhZGVyID0gKCkgPT4ge1xyXG5cclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gIGNvbnN0IFtzZWFyY2hUZXh0LCBzZXRTZWFyY2hUZXh0XSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBsb2NhbGUgPSB1c2VTZWxlY3Rvcigoe3NldHRpbmdzfSkgPT4gc2V0dGluZ3MubG9jYWxlKTtcclxuICBjb25zdCBuYXZDb2xsYXBzZWQgPSB1c2VTZWxlY3Rvcigoe3NldHRpbmdzfSkgPT4gc2V0dGluZ3MubmF2Q29sbGFwc2VkKTtcclxuXHJcbiAgY29uc3QgbGFuZ3VhZ2VNZW51ID0gKCkgPT4gKFxyXG4gICAgPEN1c3RvbVNjcm9sbGJhcnMgY2xhc3NOYW1lPVwiZ3gtcG9wb3Zlci1sYW5nLXNjcm9sbFwiPlxyXG4gICAgICA8dWwgY2xhc3NOYW1lPVwiZ3gtc3ViLXBvcG92ZXJcIj5cclxuICAgICAgICB7bGFuZ3VhZ2VEYXRhLm1hcChsYW5ndWFnZSA9PlxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImd4LW1lZGlhIGd4LXBvaW50ZXJcIiBrZXk9e0pTT04uc3RyaW5naWZ5KGxhbmd1YWdlKX0gb25DbGljaz17KGUpID0+XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHN3aXRjaExhbmd1YWdlKGxhbmd1YWdlKSlcclxuICAgICAgICAgIH0+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17YGZsYWcgZmxhZy0yNCBneC1tci0yIGZsYWctJHtsYW5ndWFnZS5pY29ufWB9Lz5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ3gtbGFuZ3VhZ2UtdGV4dFwiPntsYW5ndWFnZS5uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC91bD5cclxuICAgIDwvQ3VzdG9tU2Nyb2xsYmFycz4pO1xyXG5cclxuICBjb25zdCB1cGRhdGVTZWFyY2hDaGF0VXNlciA9IChldnQpID0+IHtcclxuICAgIHNldFNlYXJjaFRleHQoZXZ0LnRhcmdldC52YWx1ZSlcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJneC1oZWFkZXItaG9yaXpvbnRhbCBneC1oZWFkZXItaG9yaXpvbnRhbC1kYXJrIGd4LWluc2lkZS1oZWFkZXItaG9yaXpvbnRhbFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWhlYWRlci1ob3Jpem9udGFsLXRvcFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWhlYWRlci1ob3Jpem9udGFsLXRvcC1mbGV4XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtaGVhZGVyLWhvcml6b250YWwtdG9wLWxlZnRcIj5cclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGljb24tYWxlcnQgZ3gtbXItM1wiLz5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJneC1tYi0wIGd4LXRleHQtdHJ1bmNhdGVcIj48SW50bE1lc3NhZ2VzIGlkPVwiYXBwLmFubm91bmNlZFwiLz48L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZ3gtbG9naW4tbGlzdFwiPlxyXG4gICAgICAgICAgICAgIDxsaT5Mb2dpbjwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPlNpZ251cDwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgPEhlYWRlclxyXG4gICAgICAgIGNsYXNzTmFtZT1cImd4LWhlYWRlci1ob3Jpem9udGFsLW1haW5cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1oZWFkZXItaG9yaXpvbnRhbC1tYWluLWZsZXhcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1kLWJsb2NrIGd4LWQtbGctbm9uZSBneC1saW5lYmFyIGd4LW1yLXhzLTMgNmVcIj5cclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJneC1pY29uLWJ0biBpY29uIGljb24tbWVudVwiXHJcbiAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgZGlzcGF0Y2godG9nZ2xlQ29sbGFwc2VkU2lkZU5hdighbmF2Q29sbGFwc2VkKSk7XHJcbiAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICA8aW1nIGFsdD1cIlwiIGNsYXNzTmFtZT1cImd4LWQtYmxvY2sgZ3gtZC1sZy1ub25lIGd4LXBvaW50ZXIgZ3gtbXIteHMtMyBneC1wdC14cy0xIGd4LXctbG9nb1wiIHNyYz17KFwiL2ltYWdlcy93LWxvZ28ucG5nXCIpfS8+PC9MaW5rPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgIDxpbWcgYWx0PVwiXCIgY2xhc3NOYW1lPVwiZ3gtZC1ub25lIGd4LWQtbGctYmxvY2sgZ3gtcG9pbnRlciBneC1tci14cy01IGd4LWxvZ29cIiBzcmM9eyhcIi9pbWFnZXMvbG9nby5wbmdcIil9Lz48L0xpbms+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWhlYWRlci1ob3Jpem9udGFsLW5hdiBneC1oZWFkZXItaG9yaXpvbnRhbC1uYXYtY3VydmUgZ3gtZC1ub25lIGd4LWQtbGctYmxvY2tcIj5cclxuICAgICAgICAgICAgICA8SG9yaXpvbnRhbE5hdi8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZ3gtaGVhZGVyLW5vdGlmaWNhdGlvbnMgZ3gtbWwtYXV0b1wiPlxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJneC1ub3RpZnkgZ3gtbm90aWZ5LXNlYXJjaFwiPlxyXG4gICAgICAgICAgICAgICAgPFBvcG92ZXIgb3ZlcmxheUNsYXNzTmFtZT1cImd4LXBvcG92ZXItaG9yaXphbnRhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZW1lbnQ9XCJib3R0b21SaWdodFwiIGNvbnRlbnQ9e1xyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWQtZmxleFwiPjxEcm9wZG93biBvdmVybGF5PXttZW51fT5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgQ2F0ZWdvcnkgPEljb24gdHlwZT1cImRvd25cIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlYXJjaEJveCBzdHlsZU5hbWU9XCJneC1wb3BvdmVyLXNlYXJjaC1iYXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggaW4gYXBwLi4uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt1cGRhdGVTZWFyY2hDaGF0VXNlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2hUZXh0fS8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICB9IHRyaWdnZXI9XCJjbGlja1wiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ3gtcG9pbnRlciBneC1kLWJsb2NrXCI+PGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLXNlYXJjaC1uZXdcIi8+PC9zcGFuPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvUG9wb3Zlcj5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZ3gtbm90aWZ5XCI+XHJcbiAgICAgICAgICAgICAgICA8UG9wb3ZlciBvdmVybGF5Q2xhc3NOYW1lPVwiZ3gtcG9wb3Zlci1ob3JpemFudGFsXCIgcGxhY2VtZW50PVwiYm90dG9tUmlnaHRcIiBjb250ZW50PXs8QXBwTm90aWZpY2F0aW9uLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyPVwiY2xpY2tcIj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ3gtcG9pbnRlciBneC1kLWJsb2NrXCI+PGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLW5vdGlmaWNhdGlvblwiLz48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L1BvcG92ZXI+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImd4LW1zZ1wiPlxyXG4gICAgICAgICAgICAgICAgPFBvcG92ZXIgb3ZlcmxheUNsYXNzTmFtZT1cImd4LXBvcG92ZXItaG9yaXphbnRhbFwiIHBsYWNlbWVudD1cImJvdHRvbVJpZ2h0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9ezxNYWlsTm90aWZpY2F0aW9uLz59IHRyaWdnZXI9XCJjbGlja1wiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ3gtcG9pbnRlciBneC1zdGF0dXMtcG9zIGd4LWQtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1jaGF0LW5ld1wiLz5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImd4LXN0YXR1cyBneC1zdGF0dXMtcnRsIGd4LXNtYWxsIGd4LW9yYW5nZVwiLz5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvUG9wb3Zlcj5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJneC1sYW5ndWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgPFBvcG92ZXIgb3ZlcmxheUNsYXNzTmFtZT1cImd4LXBvcG92ZXItaG9yaXphbnRhbFwiIHBsYWNlbWVudD1cImJvdHRvbVJpZ2h0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e2xhbmd1YWdlTWVudSgpfSB0cmlnZ2VyPVwiY2xpY2tcIj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJneC1wb2ludGVyIGd4LWZsZXgtcm93IGd4LWFsaWduLWl0ZW1zLWNlbnRlclwiPjxpXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BmbGFnIGZsYWctMjQgZmxhZy0ke2xvY2FsZS5pY29ufWB9Lz5cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L1BvcG92ZXI+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZ3gtdXNlci1uYXZcIj48VXNlckluZm8vPjwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9IZWFkZXI+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHtzZXR0aW5nc30pID0+IHtcclxuICBjb25zdCB7bG9jYWxlLCBuYXZDb2xsYXBzZWR9ID0gc2V0dGluZ3M7XHJcbiAgcmV0dXJuIHtsb2NhbGUsIG5hdkNvbGxhcHNlZH1cclxufTtcclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIHt0b2dnbGVDb2xsYXBzZWRTaWRlTmF2LCBzd2l0Y2hMYW5ndWFnZX0pKEluc2lkZUhlYWRlcik7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHt1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3J9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQge3RvZ2dsZUNvbGxhcHNlZFNpZGVOYXZ9IGZyb20gXCIuLi8uLi8uLi8uLi9yZWR1eC9hY3Rpb25zL1NldHRpbmdcIjtcclxuaW1wb3J0IEludGxNZXNzYWdlcyBmcm9tIFwiLi4vLi4vLi4vLi4vdXRpbC9JbnRsTWVzc2FnZXNcIjtcclxuXHJcbmNvbnN0IE5vSGVhZGVyTm90aWZpY2F0aW9uID0gKCkgPT4ge1xyXG5cclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgbmF2Q29sbGFwc2VkID0gdXNlU2VsZWN0b3IoKHtzZXR0aW5nc30pID0+IHNldHRpbmdzLm5hdkNvbGxhcHNlZCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LW5vLWhlYWRlci1ob3Jpem9udGFsXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtZC1ibG9jayBneC1kLWxnLW5vbmUgZ3gtbGluZWJhciBneC1tci14cy0zXCI+XHJcbiAgICAgICAgPGkgY2xhc3NOYW1lPVwiZ3gtaWNvbi1idG4gaWNvbiBpY29uLW1lbnVcIlxyXG4gICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgIGRpc3BhdGNoKHRvZ2dsZUNvbGxhcHNlZFNpZGVOYXYoIW5hdkNvbGxhcHNlZCkpO1xyXG4gICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtbm8taGVhZGVyLWhvcml6b250YWwtdG9wXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1uby1oZWFkZXItaG9yaXpvbnRhbC10b3AtY2VudGVyXCI+XHJcbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGljb24tYWxlcnQgZ3gtbXItM1wiLz5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImd4LW1iLTAgZ3gtdGV4dC10cnVuY2F0ZVwiPjxJbnRsTWVzc2FnZXMgaWQ9XCJhcHAuYW5ub3VuY2VkXCIvPjwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOb0hlYWRlck5vdGlmaWNhdGlvbjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0xheW91dCwgUG9wb3Zlcn0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuaW1wb3J0IEN1c3RvbVNjcm9sbGJhcnMgZnJvbSBcIi4uLy4uLy4uL3V0aWwvQ3VzdG9tU2Nyb2xsYmFyc1wiO1xyXG5pbXBvcnQgbGFuZ3VhZ2VEYXRhIGZyb20gXCIuL2xhbmd1YWdlRGF0YVwiO1xyXG5pbXBvcnQge3N3aXRjaExhbmd1YWdlLCB0b2dnbGVDb2xsYXBzZWRTaWRlTmF2fSBmcm9tIFwiLi4vLi4vLi4vcmVkdXgvYWN0aW9ucy9TZXR0aW5nXCI7XHJcbmltcG9ydCBTZWFyY2hCb3ggZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvU2VhcmNoQm94XCI7XHJcbmltcG9ydCBVc2VySW5mbyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Vc2VySW5mb1wiO1xyXG5pbXBvcnQgQXBwTm90aWZpY2F0aW9uIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0FwcE5vdGlmaWNhdGlvblwiO1xyXG5pbXBvcnQgTWFpbE5vdGlmaWNhdGlvbiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9NYWlsTm90aWZpY2F0aW9uXCI7XHJcblxyXG5cclxuaW1wb3J0IHtOQVZfU1RZTEVfRFJBV0VSLCBOQVZfU1RZTEVfRklYRUQsIE5BVl9TVFlMRV9NSU5JX1NJREVCQVIsIFRBQl9TSVpFfSBmcm9tIFwiLi4vLi4vLi4vY29uc3RhbnRzL1RoZW1lU2V0dGluZ1wiO1xyXG5pbXBvcnQge3VzZURpc3BhdGNoLCB1c2VTZWxlY3Rvcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcblxyXG5jb25zdCB7SGVhZGVyfSA9IExheW91dDtcclxuXHJcbmNvbnN0IFRvcGJhciA9ICgpID0+IHtcclxuXHJcbiAgY29uc3Qge2xvY2FsZSwgd2lkdGgsIG5hdkNvbGxhcHNlZCwgbmF2U3R5bGV9ID0gdXNlU2VsZWN0b3IoKHtzZXR0aW5nc30pID0+IHNldHRpbmdzKTtcclxuICBjb25zdCB7c2VhcmNoVGV4dCwgc2V0U2VhcmNoVGV4dH0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICBjb25zdCBsYW5ndWFnZU1lbnUgPSAoKSA9PiAoXHJcbiAgICA8Q3VzdG9tU2Nyb2xsYmFycyBjbGFzc05hbWU9XCJneC1wb3BvdmVyLWxhbmctc2Nyb2xsXCI+XHJcbiAgICAgIDx1bCBjbGFzc05hbWU9XCJneC1zdWItcG9wb3ZlclwiPlxyXG4gICAgICAgIHtsYW5ndWFnZURhdGEubWFwKGxhbmd1YWdlID0+XHJcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZ3gtbWVkaWEgZ3gtcG9pbnRlclwiIGtleT17SlNPTi5zdHJpbmdpZnkobGFuZ3VhZ2UpfSBvbkNsaWNrPXsoZSkgPT5cclxuICAgICAgICAgICAgZGlzcGF0Y2goc3dpdGNoTGFuZ3VhZ2UobGFuZ3VhZ2UpKVxyXG4gICAgICAgICAgfT5cclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtgZmxhZyBmbGFnLTI0IGd4LW1yLTIgZmxhZy0ke2xhbmd1YWdlLmljb259YH0vPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJneC1sYW5ndWFnZS10ZXh0XCI+e2xhbmd1YWdlLm5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICApfVxyXG4gICAgICA8L3VsPlxyXG4gICAgPC9DdXN0b21TY3JvbGxiYXJzPik7XHJcblxyXG4gIGNvbnN0IHVwZGF0ZVNlYXJjaENoYXRVc2VyID0gKGV2dCkgPT4ge1xyXG4gICAgc2V0U2VhcmNoVGV4dChldnQudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8SGVhZGVyPlxyXG4gICAgICB7bmF2U3R5bGUgPT09IE5BVl9TVFlMRV9EUkFXRVIgfHwgKChuYXZTdHlsZSA9PT0gTkFWX1NUWUxFX0ZJWEVEIHx8IG5hdlN0eWxlID09PSBOQVZfU1RZTEVfTUlOSV9TSURFQkFSKSAmJiB3aWR0aCA8IFRBQl9TSVpFKSA/XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1saW5lYmFyIGd4LW1yLTNcIj5cclxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImd4LWljb24tYnRuIGljb24gaWNvbi1tZW51XCJcclxuICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgZGlzcGF0Y2godG9nZ2xlQ29sbGFwc2VkU2lkZU5hdighbmF2Q29sbGFwc2VkKSk7XHJcbiAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj4gOiBudWxsfVxyXG4gICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgIDxpbWcgYWx0PVwiXCIgY2xhc3NOYW1lPVwiZ3gtZC1ibG9jayBneC1kLWxnLW5vbmUgZ3gtcG9pbnRlclwiIHNyYz17KFwiL2ltYWdlcy93LWxvZ28ucG5nXCIpfS8+PC9MaW5rPlxyXG5cclxuICAgICAgPFNlYXJjaEJveCBzdHlsZU5hbWU9XCJneC1kLW5vbmUgZ3gtZC1sZy1ibG9jayBneC1sdC1pY29uLXNlYXJjaC1iYXItbGdcIlxyXG4gICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGluIGFwcC4uLlwiXHJcbiAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3VwZGF0ZVNlYXJjaENoYXRVc2VyfVxyXG4gICAgICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2hUZXh0fS8+XHJcbiAgICAgIDx1bCBjbGFzc05hbWU9XCJneC1oZWFkZXItbm90aWZpY2F0aW9ucyBneC1tbC1hdXRvXCI+XHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cImd4LW5vdGlmeSBneC1ub3RpZnktc2VhcmNoIGd4LWQtaW5saW5lLWJsb2NrIGd4LWQtbGctbm9uZVwiPlxyXG4gICAgICAgICAgPFBvcG92ZXIgb3ZlcmxheUNsYXNzTmFtZT1cImd4LXBvcG92ZXItaG9yaXphbnRhbFwiIHBsYWNlbWVudD1cImJvdHRvbVJpZ2h0XCIgY29udGVudD17XHJcbiAgICAgICAgICAgIDxTZWFyY2hCb3ggc3R5bGVOYW1lPVwiZ3gtcG9wb3Zlci1zZWFyY2gtYmFyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBpbiBhcHAuLi5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt1cGRhdGVTZWFyY2hDaGF0VXNlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNoVGV4dH0vPlxyXG4gICAgICAgICAgfSB0cmlnZ2VyPVwiY2xpY2tcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ3gtcG9pbnRlciBneC1kLWJsb2NrXCI+PGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLXNlYXJjaC1uZXdcIi8+PC9zcGFuPlxyXG4gICAgICAgICAgPC9Qb3BvdmVyPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAge3dpZHRoID49IFRBQl9TSVpFID8gbnVsbCA6XHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZ3gtbm90aWZ5XCI+XHJcbiAgICAgICAgICAgICAgPFBvcG92ZXIgb3ZlcmxheUNsYXNzTmFtZT1cImd4LXBvcG92ZXItaG9yaXphbnRhbFwiIHBsYWNlbWVudD1cImJvdHRvbVJpZ2h0XCIgY29udGVudD17PEFwcE5vdGlmaWNhdGlvbi8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgIHRyaWdnZXI9XCJjbGlja1wiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ3gtcG9pbnRlciBneC1kLWJsb2NrXCI+PGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLW5vdGlmaWNhdGlvblwiLz48L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9Qb3BvdmVyPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImd4LW1zZ1wiPlxyXG4gICAgICAgICAgICAgIDxQb3BvdmVyIG92ZXJsYXlDbGFzc05hbWU9XCJneC1wb3BvdmVyLWhvcml6YW50YWxcIiBwbGFjZW1lbnQ9XCJib3R0b21SaWdodFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17PE1haWxOb3RpZmljYXRpb24vPn0gdHJpZ2dlcj1cImNsaWNrXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImd4LXBvaW50ZXIgZ3gtc3RhdHVzLXBvcyBneC1kLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLWNoYXQtbmV3XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImd4LXN0YXR1cyBneC1zdGF0dXMtcnRsIGd4LXNtYWxsIGd4LW9yYW5nZVwiLz5cclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvUG9wb3Zlcj5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgIH1cclxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZ3gtbGFuZ3VhZ2VcIj5cclxuICAgICAgICAgIDxQb3BvdmVyIG92ZXJsYXlDbGFzc05hbWU9XCJneC1wb3BvdmVyLWhvcml6YW50YWxcIiBwbGFjZW1lbnQ9XCJib3R0b21SaWdodFwiIGNvbnRlbnQ9e2xhbmd1YWdlTWVudSgpfVxyXG4gICAgICAgICAgICAgICAgICAgdHJpZ2dlcj1cImNsaWNrXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJneC1wb2ludGVyIGd4LWZsZXgtcm93IGd4LWFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9e2BmbGFnIGZsYWctMjQgZmxhZy0ke2xvY2FsZS5pY29ufWB9Lz5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ3gtcGwtMiBneC1sYW5ndWFnZS1uYW1lXCI+e2xvY2FsZS5uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLWNoZXZyb24tZG93biBneC1wbC0yXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPC9Qb3BvdmVyPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAge3dpZHRoID49IFRBQl9TSVpFID8gbnVsbCA6XHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZ3gtdXNlci1uYXZcIj48VXNlckluZm8vPjwvbGk+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICB9XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L0hlYWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9wYmFyO1xyXG4iLCJjb25zdCBsYW5ndWFnZURhdGEgPSBbXHJcbiAge1xyXG4gICAgbGFuZ3VhZ2VJZDogJ3J1c3NpYW4nLCAvLyBVbmlxdWUgSUQgZm9yIGxhbmd1YWdlXHJcbiAgICBsb2NhbGUgOiAncnUnLCAgICAgICAgIC8vIGxvY2FsZSBuYW1lIHRvIGxpbmsgd2l0aCB0aGUgcHJldmlvdXNseSBuYW1lZCBsb2NhbGVcclxuICAgIG5hbWUgOiAn0KDRg9GB0YHQutC40LknLCAgICAgIC8vIERpc3BsYXkgbmFtZSBvZiB0aGUgbGFuZ3VhZ2VcclxuICAgIGljb24gOiAncnUnICAgICAgICAgICAgLy8gVG8gY2hvb3NlIHRoZSBmbGFnIG9mIHRoZSBjb3VudHJ5XHJcbiAgfSxcclxuICB7XHJcbiAgICBsYW5ndWFnZUlkOiAnZW5nbGlzaCcsXHJcbiAgICBsb2NhbGU6ICdlbicsXHJcbiAgICBuYW1lOiAnRW5nbGlzaCcsXHJcbiAgICBpY29uOiAndXMnXHJcbiAgfSxcclxuICB7XHJcbiAgICBsYW5ndWFnZUlkOiAnY2hpbmVzZScsXHJcbiAgICBsb2NhbGU6ICd6aCcsXHJcbiAgICBuYW1lOiAnQ2hpbmVzZScsXHJcbiAgICBpY29uOiAnY24nXHJcbiAgfSxcclxuICB7XHJcbiAgICBsYW5ndWFnZUlkOiAnc3BhbmlzaCcsXHJcbiAgICBsb2NhbGU6ICdlcycsXHJcbiAgICBuYW1lOiAnU3BhbmlzaCcsXHJcbiAgICBpY29uOiAnZXMnXHJcbiAgfSxcclxuICB7XHJcbiAgICBsYW5ndWFnZUlkOiAnZnJlbmNoJyxcclxuICAgIGxvY2FsZTogJ2ZyJyxcclxuICAgIG5hbWU6ICdGcmVuY2gnLFxyXG4gICAgaWNvbjogJ2ZyJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgbGFuZ3VhZ2VJZDogJ2l0YWxpYW4nLFxyXG4gICAgbG9jYWxlOiAnaXQnLFxyXG4gICAgbmFtZTogJ0l0YWxpYW4nLFxyXG4gICAgaWNvbjogJ2l0J1xyXG4gIH0sXHJcbiAge1xyXG4gICAgbGFuZ3VhZ2VJZDogJ3NhdWRpLWFyYWJpYScsXHJcbiAgICBsb2NhbGU6ICdhcicsXHJcbiAgICBuYW1lOiAnQXJhYmljJyxcclxuICAgIGljb246ICdzYSdcclxuICB9XHJcblxyXG5dO1xyXG5leHBvcnQgZGVmYXVsdCBsYW5ndWFnZURhdGE7XHJcbiIsImltcG9ydCB7Y29tcG9zZX0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgV2l0aERhdGEgZnJvbSAnLi93aXRoRGF0YSc7XHJcbmltcG9ydCBXaXRoTGF5b3V0IGZyb20gJy4vd2l0aExheW91dCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb21wb3NlKFxyXG4gIFdpdGhEYXRhLFxyXG4gIFdpdGhMYXlvdXQsXHJcbik7XHJcbiIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge2dldENvb2tpZX0gZnJvbSAnLi4vLi4vLi4vdXRpbC9zZXNzaW9uJztcclxuaW1wb3J0IHJlZGlyZWN0IGZyb20gJy4uLy4uLy4uL3V0aWwvcmVkaXJlY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29tcG9zZWRDb21wb25lbnQgPT5cclxuICBjbGFzcyBXaXRoRGF0YSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKGNvbnRleHQpIHtcclxuICAgICAgY29uc3QgaXNMb2dnZWRJbiA9IGdldENvb2tpZSgndXNlcl9pZCcsIGNvbnRleHQucmVxKTtcclxuICAgICAgaWYgKCFpc0xvZ2dlZEluKSB7XHJcbiAgICAgICAgcmVkaXJlY3QoY29udGV4dCwgJy9zaWduaW4nKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4ge2lzTG9nZ2VkSW59O1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgcmV0dXJuIDxDb21wb3NlZENvbXBvbmVudCB7Li4udGhpcy5wcm9wc30gLz47XHJcbiAgICB9XHJcbiAgfTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb3JlL0xheW91dCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb21wb3NlZENvbXBvbmVudCA9PiBwcm9wcyA9PiAoXHJcbiAgPExheW91dD5cclxuICAgIDxDb21wb3NlZENvbXBvbmVudCB7Li4ucHJvcHN9IC8+XHJcbiAgPC9MYXlvdXQ+XHJcbik7XHJcbiIsIi8vIEN1c3RvbWl6ZXIgY29uc3RcclxuZXhwb3J0IGNvbnN0IFRPR0dMRV9DT0xMQVBTRURfTkFWID0gJ1RPR0dMRV9DT0xMQVBTRV9NRU5VJztcclxuZXhwb3J0IGNvbnN0IFdJTkRPV19XSURUSCA9ICdXSU5ET1ctV0lEVEgnO1xyXG5leHBvcnQgY29uc3QgU1dJVENIX0xBTkdVQUdFID0gJ1NXSVRDSC1MQU5HVUFHRSc7XHJcblxyXG4vL0NvbnRhY3QgTW9kdWxlIGNvbnN0XHJcbmV4cG9ydCBjb25zdCBGRVRDSF9TVEFSVCA9ICdmZXRjaF9zdGFydCc7XHJcbmV4cG9ydCBjb25zdCBGRVRDSF9TVUNDRVNTID0gJ2ZldGNoX3N1Y2Nlc3MnO1xyXG5leHBvcnQgY29uc3QgRkVUQ0hfRVJST1IgPSAnZmV0Y2hfZXJyb3InO1xyXG5leHBvcnQgY29uc3QgU0hPV19NRVNTQUdFID0gJ1NIT1dfTUVTU0FHRSc7XHJcbmV4cG9ydCBjb25zdCBISURFX01FU1NBR0UgPSAnSElERV9NRVNTQUdFJztcclxuZXhwb3J0IGNvbnN0IE9OX1NIT1dfTE9BREVSID0gJ09OX1NIT1dfTE9BREVSJztcclxuZXhwb3J0IGNvbnN0IE9OX0hJREVfTE9BREVSID0gJ09OX0hJREVfTE9BREVSJztcclxuXHJcbi8vQXV0aCBjb25zdFxyXG5leHBvcnQgY29uc3QgU0lHTlVQX1VTRVIgPSAnU0lHTlVQX1VTRVInO1xyXG5leHBvcnQgY29uc3QgU0lHTlVQX1VTRVJfU1VDQ0VTUyA9ICdTSUdOVVBfVVNFUl9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFNJR05JTl9HT09HTEVfVVNFUiA9ICdTSUdOSU5fR09PR0xFX1VTRVInO1xyXG5leHBvcnQgY29uc3QgU0lHTklOX0dPT0dMRV9VU0VSX1NVQ0NFU1MgPSAnU0lHTklOX0dPT0dMRV9VU0VSX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgU0lHTklOX0ZBQ0VCT09LX1VTRVIgPSAnU0lHTklOX0ZBQ0VCT09LX1VTRVInO1xyXG5leHBvcnQgY29uc3QgU0lHTklOX0ZBQ0VCT09LX1VTRVJfU1VDQ0VTUyA9ICdTSUdOSU5fRkFDRUJPT0tfVVNFUl9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFNJR05JTl9UV0lUVEVSX1VTRVIgPSAnU0lHTklOX1RXSVRURVJfVVNFUic7XHJcbmV4cG9ydCBjb25zdCBTSUdOSU5fVFdJVFRFUl9VU0VSX1NVQ0NFU1MgPSAnU0lHTklOX1RXSVRURVJfVVNFUl9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFNJR05JTl9HSVRIVUJfVVNFUiA9ICdTSUdOSU5fR0lUSFVCX1VTRVInO1xyXG5leHBvcnQgY29uc3QgU0lHTklOX0dJVEhVQl9VU0VSX1NVQ0NFU1MgPSAnc2lnbmluX2dpdGh1Yl91c2VyX3N1Y2Nlc3MnO1xyXG5leHBvcnQgY29uc3QgU0lHTklOX1VTRVIgPSAnU0lHTklOX1VTRVInO1xyXG5leHBvcnQgY29uc3QgU0lHTklOX1VTRVJfU1VDQ0VTUyA9ICdTSUdOSU5fVVNFUl9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFNJR05PVVRfVVNFUiA9ICdTSUdOT1VUX1VTRVInO1xyXG5leHBvcnQgY29uc3QgU0lHTk9VVF9VU0VSX1NVQ0NFU1MgPSAnU0lHTk9VVF9VU0VSX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgSU5JVF9VUkwgPSAnSU5JVF9VUkwnO1xyXG5cclxuLy9TdGlja3lcclxuZXhwb3J0IGNvbnN0IEdFVF9TVElDS1kgPSAnR0VUX1NUSUNLWSc7XHJcbmV4cG9ydCBjb25zdCBOT1RFU19VUERBVEU9J05PVEVTX1VQREFURSc7XHJcbmV4cG9ydCBjb25zdCBGRVRDSF9BTExfTk9URVNfU1VDQ0VTUz0nRkVUQ0hfQUxMX05PVEVTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgVVBEQVRFX0FMTF9OT1RFU19TVUNDRVNTPSdVUERBVEVfQUxMX05PVEVTX1NVQ0NFU1MnO1xyXG5cclxuLy9Db250YWN0XHJcbmV4cG9ydCBjb25zdCBHRVRfQWxsX0NPTlRBQ1RfU1VDQ0VTUyA9ICdHRVRfQWxsX0NPTlRBQ1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBPTl9BRERfQ09OVEFDVF9TVUNDRVNTID0gJ09OX0FERF9DT05UQUNUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgVVBEQVRFX0NPTlRBQ1RfU1VDQ0VTUz0nVVBEQVRFX0NPTlRBQ1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBERUxFVEVfQ09OVEFDVF9TVUNDRVNTPSdERUxFVEVfQ09OVEFDVF9TVUNDRVNTJztcclxuXHJcblxyXG4iLCIvLyBDdXN0b21pemVyIGNvbnN0XHJcbmV4cG9ydCBjb25zdCBUSEVNRV9UWVBFID0gJ1RIRU1FX1RZUEUnO1xyXG5leHBvcnQgY29uc3QgVEhFTUVfVFlQRV9MSVRFID0gJ1RIRU1FX1RZUEVfTElURSc7XHJcbmV4cG9ydCBjb25zdCBUSEVNRV9UWVBFX0RBUksgPSAnVEhFTUVfVFlQRV9EQVJLJztcclxuZXhwb3J0IGNvbnN0IFRIRU1FX1RZUEVfU0VNSV9EQVJLID0gJ1RIRU1FX1RZUEVfU0VNSV9EQVJLJztcclxuXHJcblxyXG5leHBvcnQgY29uc3QgVEhFTUVfQ09MT1JfU0VMRUNUSU9OID0gJ1RIRU1FX0NPTE9SX1NFTEVDVElPTic7XHJcbmV4cG9ydCBjb25zdCBUSEVNRV9DT0xPUl9TRUxFQ1RJT05fUFJFU0VUID0gJ1RIRU1FX0NPTE9SX1NFTEVDVElPTl9QUkVTRVQnO1xyXG5leHBvcnQgY29uc3QgVEhFTUVfQ09MT1JfU0VMRUNUSU9OX0NVU1RPTUlaRSA9ICdUSEVNRV9DT0xPUl9TRUxFQ1RJT05fQ1VTVE9NSVpFJztcclxuXHJcbmV4cG9ydCBjb25zdCBIT1JJWk9OVEFMX05BVklHQVRJT04gPSAnSE9SSVpPTlRBTF9OQVZJR0FUSU9OJztcclxuXHJcbmV4cG9ydCBjb25zdCBIT1JJWk9OVEFMX01FTlVfUE9TSVRJT04gPSAnSE9SSVpPTlRBTF9NRU5VX1BPU0lUSU9OJztcclxuZXhwb3J0IGNvbnN0IEFCT1ZFX1RIRV9IRUFERVIgPSAnQUJPVkVfVEhFX0hFQURFUic7XHJcbmV4cG9ydCBjb25zdCBJTlNJREVfVEhFX0hFQURFUiA9ICdJTlNJREVfVEhFX0hFQURFUic7XHJcbmV4cG9ydCBjb25zdCBCRUxPV19USEVfSEVBREVSID0gJ0JFTE9XX1RIRV9IRUFERVInO1xyXG5cclxuZXhwb3J0IGNvbnN0IFZFUlRJQ0FMX05BVklHQVRJT04gPSAnVkVSVElDQUxfTkFWSUdBVElPTic7XHJcbmV4cG9ydCBjb25zdCBOQVZfU1RZTEVfTUlOSSA9ICdOQVZfU1RZTEVfTUlOSSc7XHJcblxyXG5leHBvcnQgY29uc3QgTEFZT1VUX1RZUEUgPSAnTEFZT1VUX1RZUEUnO1xyXG5leHBvcnQgY29uc3QgU0VUX1BBVEhfTkFNRSA9ICdTRVRfUEFUSF9OQU1FJztcclxuXHJcbmV4cG9ydCBjb25zdCBMQVlPVVRfVFlQRV9GUkFNRUQgPSAnTEFZT1VUX1RZUEVfRlJBTUVEJztcclxuZXhwb3J0IGNvbnN0IExBWU9VVF9UWVBFX0JPWEVEID0gJ0xBWU9VVF9UWVBFX0JPWEVEJztcclxuZXhwb3J0IGNvbnN0IExBWU9VVF9UWVBFX0ZVTEwgPSAnTEFZT1VUX1RZUEVfRlVMTCc7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IE5BVl9TVFlMRSA9ICdOQVZfU1RZTEUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5BVl9TVFlMRV9GSVhFRCA9ICdOQVZfU1RZTEVfRklYRUQnO1xyXG5leHBvcnQgY29uc3QgTkFWX1NUWUxFX01JTklfU0lERUJBUiA9ICdOQVZfU1RZTEVfTUlOSV9TSURFQkFSJztcclxuZXhwb3J0IGNvbnN0IE5BVl9TVFlMRV9EUkFXRVIgPSAnTkFWX1NUWUxFX0RSQVdFUic7XHJcbmV4cG9ydCBjb25zdCBOQVZfU1RZTEVfTk9fSEVBREVSX01JTklfU0lERUJBUiA9ICdOQVZfU1RZTEVfTk9fSEVBREVSX01JTklfU0lERUJBUic7XHJcbmV4cG9ydCBjb25zdCBOQVZfU1RZTEVfTk9fSEVBREVSX0VYUEFOREVEX1NJREVCQVIgPSAnTkFWX1NUWUxFX05PX0hFQURFUl9FWFBBTkRFRF9TSURFQkFSJztcclxuXHJcbmV4cG9ydCBjb25zdCBOQVZfU1RZTEVfREVGQVVMVF9IT1JJWk9OVEFMID0gJ05BVl9TVFlMRV9ERUZBVUxUX0hPUklaT05UQUwnO1xyXG5leHBvcnQgY29uc3QgTkFWX1NUWUxFX0RBUktfSE9SSVpPTlRBTCA9ICdOQVZfU1RZTEVfREFSS19IT1JJWk9OVEFMJztcclxuZXhwb3J0IGNvbnN0IE5BVl9TVFlMRV9JTlNJREVfSEVBREVSX0hPUklaT05UQUwgPSAnTkFWX1NUWUxFX0lOU0lERV9IRUFERVJfSE9SSVpPTlRBTCc7XHJcbmV4cG9ydCBjb25zdCBOQVZfU1RZTEVfQkVMT1dfSEVBREVSID0gJ05BVl9TVFlMRV9CRUxPV19IRUFERVInO1xyXG5leHBvcnQgY29uc3QgTkFWX1NUWUxFX0FCT1ZFX0hFQURFUiA9ICdOQVZfU1RZTEVfQUJPVkVfSEVBREVSJztcclxuXHJcblxyXG5leHBvcnQgY29uc3QgTElHSFRfUFVSUExFID0gJyM4QTJCRTInO1xyXG5leHBvcnQgY29uc3QgTElHSFRfUFVSUExFX1NFQyA9ICcjMDBCMzc4JztcclxuZXhwb3J0IGNvbnN0IExJR0hUX1BVUlBMRV9OQVZfREFSS19CRyA9ICcjMzIzOTRGJztcclxuZXhwb3J0IGNvbnN0IExJR0hUX1BVUlBMRV9EQVJLX1RFWFRfQ09MT1IgPSAnIzk3OTlBQyc7XHJcblxyXG5leHBvcnQgY29uc3QgUkVEID0gJyNGRjJCN0EnO1xyXG5leHBvcnQgY29uc3QgUkVEX1NFQyA9ICcjMDBEOUM5JztcclxuZXhwb3J0IGNvbnN0IFJFRF9OQVZfREFSS19CRyA9ICcjM0MzNzY2JztcclxuZXhwb3J0IGNvbnN0IFJFRF9EQVJLX1RFWFRfQ09MT1IgPSAnIzg3OEJBQic7XHJcblxyXG5leHBvcnQgY29uc3QgQkxVRSA9ICcjM0RBNEU2JztcclxuZXhwb3J0IGNvbnN0IEJMVUVfU0VDID0gJyNGQ0I1M0InO1xyXG5leHBvcnQgY29uc3QgQkxVRV9OQVZfREFSS19CRyA9ICcjNDQ0MzQyJztcclxuZXhwb3J0IGNvbnN0IEJMVUVfREFSS19URVhUX0NPTE9SID0gJyNBQUE1OUEnO1xyXG5cclxuZXhwb3J0IGNvbnN0IERBUktfQkxVRSA9ICcjMDQ2OUI5JztcclxuZXhwb3J0IGNvbnN0IERBUktfQkxVRV9TRUMgPSAnIzE3QkRFNSc7XHJcbmV4cG9ydCBjb25zdCBEQVJLX0JMVUVfTkFWX0RBUktfQkcgPSAnIzA4Njg4MCc7XHJcbmV4cG9ydCBjb25zdCBEQVJLX0JMVUVfREFSS19URVhUX0NPTE9SID0gJyM5RERBRTknO1xyXG5cclxuZXhwb3J0IGNvbnN0IE9SQU5HRSA9ICcjRjE4ODA1JztcclxuZXhwb3J0IGNvbnN0IE9SQU5HRV9TRUMgPSAnI0YxRDA2NSc7XHJcbmV4cG9ydCBjb25zdCBPUkFOR0VfTkFWX0RBUktfQkcgPSAnIzI3MjkzMic7XHJcbmV4cG9ydCBjb25zdCBPUkFOR0VfREFSS19URVhUX0NPTE9SID0gJyNBQkE4OTUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExJR0hUX0JMVUUgPSAnIzZBOTVGRic7XHJcbmV4cG9ydCBjb25zdCBMSUdIVF9CTFVFX1NFQyA9ICcjNTlEQ0ZGJztcclxuZXhwb3J0IGNvbnN0IExJR0hUX0JMVUVfTkFWX0RBUktfQkcgPSAnIzFCMjY0Mic7XHJcbmV4cG9ydCBjb25zdCBMSUdIVF9CTFVFX0RBUktfVEVYVF9DT0xPUiA9ICcjOTJBMkM4JztcclxuXHJcblxyXG5leHBvcnQgY29uc3QgREVFUF9PUkFOR0UgPSAnI0Y4NzA2MCc7XHJcbmV4cG9ydCBjb25zdCBERUVQX09SQU5HRV9TRUMgPSAnIzcwQTI4OCc7XHJcbmV4cG9ydCBjb25zdCBERUVQX09SQU5HRV9OQVZfREFSS19CRyA9ICcjMDg0MTVDJztcclxuZXhwb3J0IGNvbnN0IERFRVBfT1JBTkdFX0RBUktfVEVYVF9DT0xPUiA9ICcjOTdCOEM3JztcclxuXHJcbmV4cG9ydCBjb25zdCBMSUdIVF9QVVJQTEVfMSA9ICcjQTE3MkU3JztcclxuZXhwb3J0IGNvbnN0IExJR0hUX1BVUlBMRV8xX1NFQyA9ICcjRTE0NTk0JztcclxuZXhwb3J0IGNvbnN0IExJR0hUX1BVUlBMRV8xX05BVl9EQVJLX0JHID0gJyMxODI5NTInO1xyXG5leHBvcnQgY29uc3QgTElHSFRfUFVSUExFXzFfREFSS19URVhUX0NPTE9SID0gJyM4Mjg4QjQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExJR0hUX1BVUlBMRV8yID0gJyM5NTZGRTcnO1xyXG5leHBvcnQgY29uc3QgTElHSFRfUFVSUExFXzJfU0VDID0gJyM2NEQ3RDYnO1xyXG5leHBvcnQgY29uc3QgTElHSFRfUFVSUExFXzJfTkFWX0RBUktfQkcgPSAnIzI4NEM3Qyc7XHJcbmV4cG9ydCBjb25zdCBMSUdIVF9QVVJQTEVfMl9EQVJLX1RFWFRfQ09MT1IgPSAnIzU3ODJCQic7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFRBQl9TSVpFID0gOTkyO1xyXG4iLCJpbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlXCI7XHJcblxyXG4vLyBJbml0aWFsaXplIEZpcmViYXNlXHJcbmNvbnN0IGNvbmZpZyA9IHtcclxuICBhcGlLZXk6IFwiQUl6YVN5QXotR1BmQS1oTjc0b0ZoM1h2WHNGOXZRcmxFNXhwVTEwXCIsXHJcbiAgYXV0aERvbWFpbjogXCJ3aWVsZHktNGY1OWMuZmlyZWJhc2VhcHAuY29tXCIsXHJcbiAgZGF0YWJhc2VVUkw6IFwiaHR0cHM6Ly93aWVsZHktNGY1OWMuZmlyZWJhc2Vpby5jb21cIixcclxuICBwcm9qZWN0SWQ6IFwid2llbGR5LTRmNTljXCIsXHJcbiAgc3RvcmFnZUJ1Y2tldDogXCJ3aWVsZHktNGY1OWMuYXBwc3BvdC5jb21cIixcclxuICBtZXNzYWdpbmdTZW5kZXJJZDogXCI4MTk0OTg4NDI2MVwiXHJcbn07XHJcbmlmICghZmlyZWJhc2UuYXBwcy5sZW5ndGgpIHtcclxuICBmaXJlYmFzZS5pbml0aWFsaXplQXBwKGNvbmZpZyk7XHJcbn1cclxuY29uc3QgYXV0aCA9IGZpcmViYXNlLmF1dGgoKTtcclxuXHJcbmNvbnN0IGdvb2dsZUF1dGhQcm92aWRlciA9IG5ldyBmaXJlYmFzZS5hdXRoLkdvb2dsZUF1dGhQcm92aWRlcigpO1xyXG5jb25zdCBmYWNlYm9va0F1dGhQcm92aWRlciA9IG5ldyBmaXJlYmFzZS5hdXRoLkZhY2Vib29rQXV0aFByb3ZpZGVyKCk7XHJcbmNvbnN0IGdpdGh1YkF1dGhQcm92aWRlciA9IG5ldyBmaXJlYmFzZS5hdXRoLkdpdGh1YkF1dGhQcm92aWRlcigpO1xyXG5jb25zdCB0d2l0dGVyQXV0aFByb3ZpZGVyID0gbmV3IGZpcmViYXNlLmF1dGguVHdpdHRlckF1dGhQcm92aWRlcigpO1xyXG5cclxuY29uc3QgZGF0YWJhc2UgPSBmaXJlYmFzZS5kYXRhYmFzZSgpO1xyXG5cclxuZXhwb3J0IHtcclxuICBkYXRhYmFzZSxcclxuICBhdXRoLFxyXG4gIGdvb2dsZUF1dGhQcm92aWRlcixcclxuICBnaXRodWJBdXRoUHJvdmlkZXIsXHJcbiAgZmFjZWJvb2tBdXRoUHJvdmlkZXIsXHJcbiAgdHdpdHRlckF1dGhQcm92aWRlclxyXG59O1xyXG4iLCJpbXBvcnQgYW50ZFNBIGZyb20gXCJhbnRkL2xpYi9sb2NhbGUtcHJvdmlkZXIvZW5fVVNcIjtcclxuaW1wb3J0IHNhTWVzc2FnZXMgZnJvbSBcIi4uL2xvY2FsZXMvYXJfU0EuanNvblwiO1xyXG5cclxuY29uc3Qgc2FMYW5nID0ge1xyXG4gIG1lc3NhZ2VzOiB7XHJcbiAgICAuLi5zYU1lc3NhZ2VzXHJcbiAgfSxcclxuICBhbnRkOiBhbnRkU0EsXHJcbiAgbG9jYWxlOiAnYXInLFxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBzYUxhbmc7XHJcbiIsImltcG9ydCBhbnRkRW4gZnJvbSBcImFudGQvbGliL2xvY2FsZS1wcm92aWRlci9lbl9VU1wiO1xyXG5pbXBvcnQgZW5NZXNzYWdlcyBmcm9tIFwiLi4vbG9jYWxlcy9lbl9VUy5qc29uXCI7XHJcblxyXG5jb25zdCBFbkxhbmcgPSB7XHJcbiAgbWVzc2FnZXM6IHtcclxuICAgIC4uLmVuTWVzc2FnZXNcclxuICB9LFxyXG4gIGFudGQ6IGFudGRFbixcclxuICBsb2NhbGU6ICdlbi1VUycsXHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEVuTGFuZztcclxuIiwiaW1wb3J0IGFudGRTQSBmcm9tIFwiYW50ZC9saWIvbG9jYWxlLXByb3ZpZGVyL2NhX0VTXCI7XHJcbmltcG9ydCBzYU1lc3NhZ2VzIGZyb20gXCIuLi9sb2NhbGVzL2VzX0VTLmpzb25cIjtcclxuXHJcbmNvbnN0IHNhTGFuZyA9IHtcclxuICBtZXNzYWdlczoge1xyXG4gICAgLi4uc2FNZXNzYWdlc1xyXG4gIH0sXHJcbiAgYW50ZDogYW50ZFNBLFxyXG4gIGxvY2FsZTogJ2VzJyxcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgc2FMYW5nO1xyXG4iLCJpbXBvcnQgYW50ZFNBIGZyb20gXCJhbnRkL2xpYi9sb2NhbGUtcHJvdmlkZXIvZnJfRlJcIjtcclxuaW1wb3J0IHNhTWVzc2FnZXMgZnJvbSBcIi4uL2xvY2FsZXMvZnJfRlIuanNvblwiO1xyXG5cclxuY29uc3Qgc2FMYW5nID0ge1xyXG4gIG1lc3NhZ2VzOiB7XHJcbiAgICAuLi5zYU1lc3NhZ2VzXHJcbiAgfSxcclxuICBhbnRkOiBhbnRkU0EsXHJcbiAgbG9jYWxlOiAnZnItRlInLFxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBzYUxhbmc7XHJcbiIsImltcG9ydCBhbnRkU0EgZnJvbSBcImFudGQvbGliL2xvY2FsZS1wcm92aWRlci9pdF9JVFwiO1xyXG5pbXBvcnQgc2FNZXNzYWdlcyBmcm9tIFwiLi4vbG9jYWxlcy9pdF9JVC5qc29uXCI7XHJcblxyXG5jb25zdCBzYUxhbmcgPSB7XHJcbiAgbWVzc2FnZXM6IHtcclxuICAgIC4uLnNhTWVzc2FnZXNcclxuICB9LFxyXG4gIGFudGQ6IGFudGRTQSxcclxuICBsb2NhbGU6ICdpdC1JVCcsXHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IHNhTGFuZztcclxuIiwiaW1wb3J0IGFudGRSdSBmcm9tIFwiYW50ZC9saWIvbG9jYWxlLXByb3ZpZGVyL3J1X1JVXCI7XHJcbmltcG9ydCBydU1lc3NhZ2VzIGZyb20gXCIuLi9sb2NhbGVzL3J1X1JVLmpzb25cIjtcclxuXHJcbmNvbnN0IFJ1TGFuZyA9IHtcclxuICBtZXNzYWdlczoge1xyXG4gICAgLi4ucnVNZXNzYWdlc1xyXG4gIH0sXHJcbiAgYW50ZDogYW50ZFJ1LFxyXG4gIGxvY2FsZTogJ3J1LVJVJyxcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgUnVMYW5nO1xyXG4iLCJpbXBvcnQgemhNZXNzYWdlcyBmcm9tIFwiLi4vbG9jYWxlcy96aC1IYW5zLmpzb25cIjtcclxuXHJcbmNvbnN0IFpoTGFuID0ge1xyXG4gIG1lc3NhZ2VzOiB7XHJcbiAgICAuLi56aE1lc3NhZ2VzXHJcbiAgfSxcclxuICBhbnRkOiBudWxsLFxyXG4gIGxvY2FsZTogJ3poLUhhbnMtQ04nLFxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBaaExhbjtcclxuIiwiaW1wb3J0IGVuTGFuZyBmcm9tIFwiLi9lbnRyaWVzL2VuLVVTXCI7XHJcbmltcG9ydCB6aExhbmcgZnJvbSBcIi4vZW50cmllcy96aC1IYW5zLUNOXCI7XHJcbmltcG9ydCBhckxhbmcgZnJvbSBcIi4vZW50cmllcy9hcl9TQVwiO1xyXG5pbXBvcnQgaXRMYW5nIGZyb20gXCIuL2VudHJpZXMvaXRfSVRcIjtcclxuaW1wb3J0IGVzTGFuZyBmcm9tIFwiLi9lbnRyaWVzL2VzX0VTXCI7XHJcbmltcG9ydCBmckxhbmcgZnJvbSBcIi4vZW50cmllcy9mcl9GUlwiO1xyXG5pbXBvcnQgcnVMYW5nIGZyb20gXCIuL2VudHJpZXMvcnVfUlVcIjtcclxuXHJcbmNvbnN0IEFwcExvY2FsZSA9IHtcclxuICBlbjogZW5MYW5nLFxyXG4gIHpoOiB6aExhbmcsXHJcbiAgYXI6IGFyTGFuZyxcclxuICBpdDogaXRMYW5nLFxyXG4gIGVzOiBlc0xhbmcsXHJcbiAgZnI6IGZyTGFuZyxcclxuICBydTogcnVMYW5nXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHBMb2NhbGU7XHJcbiIsImRlY2xhcmUgY29uc3QgX19ORVhUX0RBVEFfXzogYW55XG5cbmltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgUHJlZmV0Y2hPcHRpb25zLCBOZXh0Um91dGVyIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBleGVjT25jZSwgZ2V0TG9jYXRpb25PcmlnaW4gfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcbmltcG9ydCB7IGFkZEJhc2VQYXRoLCByZXNvbHZlSHJlZiB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuXG4vKipcbiAqIERldGVjdHMgd2hldGhlciBhIGdpdmVuIHVybCBpcyBmcm9tIHRoZSBzYW1lIG9yaWdpbiBhcyB0aGUgY3VycmVudCBwYWdlIChicm93c2VyIG9ubHkpLlxuICovXG5mdW5jdGlvbiBpc0xvY2FsKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGNvbnN0IGxvY2F0aW9uT3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICBjb25zdCByZXNvbHZlZCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbk9yaWdpbilcbiAgcmV0dXJuIHJlc29sdmVkLm9yaWdpbiA9PT0gbG9jYXRpb25PcmlnaW5cbn1cblxudHlwZSBVcmwgPSBzdHJpbmcgfCBVcmxPYmplY3RcblxuZXhwb3J0IHR5cGUgTGlua1Byb3BzID0ge1xuICBocmVmOiBVcmxcbiAgYXM/OiBVcmxcbiAgcmVwbGFjZT86IGJvb2xlYW5cbiAgc2Nyb2xsPzogYm9vbGVhblxuICBzaGFsbG93PzogYm9vbGVhblxuICBwYXNzSHJlZj86IGJvb2xlYW5cbiAgcHJlZmV0Y2g/OiBib29sZWFuXG59XG5cbmxldCBjYWNoZWRPYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbmNvbnN0IGxpc3RlbmVycyA9IG5ldyBNYXA8RWxlbWVudCwgKCkgPT4gdm9pZD4oKVxuY29uc3QgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPVxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlciA6IG51bGxcbmNvbnN0IHByZWZldGNoZWQ6IHsgW2NhY2hlS2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fVxuXG5mdW5jdGlvbiBnZXRPYnNlcnZlcigpOiBJbnRlcnNlY3Rpb25PYnNlcnZlciB8IHVuZGVmaW5lZCB7XG4gIC8vIFJldHVybiBzaGFyZWQgaW5zdGFuY2Ugb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgYWxyZWFkeSBjcmVhdGVkXG4gIGlmIChjYWNoZWRPYnNlcnZlcikge1xuICAgIHJldHVybiBjYWNoZWRPYnNlcnZlclxuICB9XG5cbiAgLy8gT25seSBjcmVhdGUgc2hhcmVkIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIHN1cHBvcnRlZCBpbiBicm93c2VyXG4gIGlmICghSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICByZXR1cm4gKGNhY2hlZE9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxuICAgIChlbnRyaWVzKSA9PiB7XG4gICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgIGlmICghbGlzdGVuZXJzLmhhcyhlbnRyeS50YXJnZXQpKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjYiA9IGxpc3RlbmVycy5nZXQoZW50cnkudGFyZ2V0KSFcbiAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMCkge1xuICAgICAgICAgIGNhY2hlZE9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgbGlzdGVuZXJzLmRlbGV0ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgY2IoKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgeyByb290TWFyZ2luOiAnMjAwcHgnIH1cbiAgKSlcbn1cblxuY29uc3QgbGlzdGVuVG9JbnRlcnNlY3Rpb25zID0gKGVsOiBFbGVtZW50LCBjYjogKCkgPT4gdm9pZCkgPT4ge1xuICBjb25zdCBvYnNlcnZlciA9IGdldE9ic2VydmVyKClcbiAgaWYgKCFvYnNlcnZlcikge1xuICAgIHJldHVybiAoKSA9PiB7fVxuICB9XG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbClcbiAgbGlzdGVuZXJzLnNldChlbCwgY2IpXG4gIHJldHVybiAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbClcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgIH1cbiAgICBsaXN0ZW5lcnMuZGVsZXRlKGVsKVxuICB9XG59XG5cbmZ1bmN0aW9uIHByZWZldGNoKFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgb3B0aW9ucz86IFByZWZldGNoT3B0aW9uc1xuKTogdm9pZCB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuXG4gIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gIHJvdXRlci5wcmVmZXRjaChocmVmLCBhcywgb3B0aW9ucykuY2F0Y2goKGVycikgPT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH0pXG4gIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzXSA9IHRydWVcbn1cblxuZnVuY3Rpb24gbGlua0NsaWNrZWQoXG4gIGU6IFJlYWN0Lk1vdXNlRXZlbnQsXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICByZXBsYWNlPzogYm9vbGVhbixcbiAgc2hhbGxvdz86IGJvb2xlYW4sXG4gIHNjcm9sbD86IGJvb2xlYW5cbik6IHZvaWQge1xuICBjb25zdCB7IG5vZGVOYW1lLCB0YXJnZXQgfSA9IGUuY3VycmVudFRhcmdldCBhcyBIVE1MQW5jaG9yRWxlbWVudFxuICBpZiAoXG4gICAgbm9kZU5hbWUgPT09ICdBJyAmJlxuICAgICgodGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJykgfHxcbiAgICAgIGUubWV0YUtleSB8fFxuICAgICAgZS5jdHJsS2V5IHx8XG4gICAgICBlLnNoaWZ0S2V5IHx8XG4gICAgICAoZS5uYXRpdmVFdmVudCAmJiBlLm5hdGl2ZUV2ZW50LndoaWNoID09PSAyKSlcbiAgKSB7XG4gICAgLy8gaWdub3JlIGNsaWNrIGZvciBuZXcgdGFiIC8gbmV3IHdpbmRvdyBiZWhhdmlvclxuICAgIHJldHVyblxuICB9XG5cbiAgaWYgKCFpc0xvY2FsKGhyZWYpKSB7XG4gICAgLy8gaWdub3JlIGNsaWNrIGlmIGl0J3Mgb3V0c2lkZSBvdXIgc2NvcGUgKGUuZy4gaHR0cHM6Ly9nb29nbGUuY29tKVxuICAgIHJldHVyblxuICB9XG5cbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gIGlmIChzY3JvbGwgPT0gbnVsbCkge1xuICAgIHNjcm9sbCA9IGFzLmluZGV4T2YoJyMnKSA8IDBcbiAgfVxuXG4gIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICByb3V0ZXJbcmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHsgc2hhbGxvdyB9KS50aGVuKFxuICAgIChzdWNjZXNzOiBib29sZWFuKSA9PiB7XG4gICAgICBpZiAoIXN1Y2Nlc3MpIHJldHVyblxuICAgICAgaWYgKHNjcm9sbCkge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgZG9jdW1lbnQuYm9keS5mb2N1cygpXG4gICAgICB9XG4gICAgfVxuICApXG59XG5cbmZ1bmN0aW9uIExpbmsocHJvcHM6IFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPExpbmtQcm9wcz4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAvLyBUaGlzIGhvb2sgaXMgaW4gYSBjb25kaXRpb25hbCBidXQgdGhhdCBpcyBvayBiZWNhdXNlIGBwcm9jZXNzLmVudi5OT0RFX0VOVmAgbmV2ZXIgY2hhbmdlc1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgIGNvbnN0IGhhc1dhcm5lZCA9IFJlYWN0LnVzZVJlZihmYWxzZSlcbiAgICBpZiAocHJvcHMucHJlZmV0Y2ggJiYgIWhhc1dhcm5lZC5jdXJyZW50KSB7XG4gICAgICBoYXNXYXJuZWQuY3VycmVudCA9IHRydWVcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJ1xuICAgICAgKVxuICAgIH1cbiAgfVxuICBjb25zdCBwID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlXG5cbiAgY29uc3QgW2NoaWxkRWxtLCBzZXRDaGlsZEVsbV0gPSBSZWFjdC51c2VTdGF0ZTxFbGVtZW50PigpXG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcblxuICBjb25zdCB7IGhyZWYsIGFzIH0gPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCByZXNvbHZlZEhyZWYgPSByZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIHByb3BzLmhyZWYpXG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IHJlc29sdmVkSHJlZixcbiAgICAgIGFzOiBwcm9wcy5hcyA/IHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgcHJvcHMuYXMpIDogcmVzb2x2ZWRIcmVmLFxuICAgIH1cbiAgfSwgW3JvdXRlci5wYXRobmFtZSwgcHJvcHMuaHJlZiwgcHJvcHMuYXNdKVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHAgJiYgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgJiYgY2hpbGRFbG0gJiYgY2hpbGRFbG0udGFnTmFtZSkge1xuICAgICAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9IHByZWZldGNoZWRbaHJlZiArICclJyArIGFzXVxuICAgICAgaWYgKCFpc1ByZWZldGNoZWQpIHtcbiAgICAgICAgcmV0dXJuIGxpc3RlblRvSW50ZXJzZWN0aW9ucyhjaGlsZEVsbSwgKCkgPT4ge1xuICAgICAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9LCBbcCwgY2hpbGRFbG0sIGhyZWYsIGFzLCByb3V0ZXJdKVxuXG4gIGxldCB7IGNoaWxkcmVuLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwgfSA9IHByb3BzXG4gIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgIGNoaWxkcmVuID0gPGE+e2NoaWxkcmVufTwvYT5cbiAgfVxuXG4gIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICBjb25zdCBjaGlsZDogYW55ID0gQ2hpbGRyZW4ub25seShjaGlsZHJlbilcbiAgY29uc3QgY2hpbGRQcm9wczoge1xuICAgIG9uTW91c2VFbnRlcj86IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgb25DbGljazogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBocmVmPzogc3RyaW5nXG4gICAgcmVmPzogYW55XG4gIH0gPSB7XG4gICAgcmVmOiAoZWw6IGFueSkgPT4ge1xuICAgICAgaWYgKGVsKSBzZXRDaGlsZEVsbShlbClcblxuICAgICAgaWYgKGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZC5yZWYoZWwpXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgY2hpbGQucmVmLmN1cnJlbnQgPSBlbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSlcbiAgICAgIH1cbiAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbClcbiAgICAgIH1cbiAgICB9LFxuICB9XG5cbiAgaWYgKHApIHtcbiAgICBjaGlsZFByb3BzLm9uTW91c2VFbnRlciA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSlcbiAgICAgIH1cbiAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHsgcHJpb3JpdHk6IHRydWUgfSlcbiAgICB9XG4gIH1cblxuICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gIGlmIChwcm9wcy5wYXNzSHJlZiB8fCAoY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSkpIHtcbiAgICBjaGlsZFByb3BzLmhyZWYgPSBhZGRCYXNlUGF0aChhcylcbiAgfVxuXG4gIC8vIEFkZCB0aGUgZW5kaW5nIHNsYXNoIHRvIHRoZSBwYXRocy4gU28sIHdlIGNhbiBzZXJ2ZSB0aGVcbiAgLy8gXCI8cGFnZT4vaW5kZXguaHRtbFwiIGRpcmVjdGx5LlxuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCkge1xuICAgIGNvbnN0IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0ID0gcmVxdWlyZSgnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JylcbiAgICAgIC5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydFxuICAgIGlmIChcbiAgICAgIGNoaWxkUHJvcHMuaHJlZiAmJlxuICAgICAgdHlwZW9mIF9fTkVYVF9EQVRBX18gIT09ICd1bmRlZmluZWQnICYmXG4gICAgICBfX05FWFRfREFUQV9fLm5leHRFeHBvcnRcbiAgICApIHtcbiAgICAgIGNoaWxkUHJvcHMuaHJlZiA9IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KGNoaWxkUHJvcHMuaHJlZilcbiAgICB9XG4gIH1cblxuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKVxufVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgY29uc3Qgd2FybiA9IGV4ZWNPbmNlKGNvbnNvbGUuZXJyb3IpXG5cbiAgLy8gVGhpcyBtb2R1bGUgZ2V0cyByZW1vdmVkIGJ5IHdlYnBhY2suSWdub3JlUGx1Z2luXG4gIGNvbnN0IFByb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKVxuICBjb25zdCBleGFjdCA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMtZXhhY3QnKVxuICAvLyBAdHMtaWdub3JlIHRoZSBwcm9wZXJ0eSBpcyBzdXBwb3J0ZWQsIHdoZW4gZGVjbGFyaW5nIGl0IG9uIHRoZSBjbGFzcyBpdCBvdXRwdXRzIGFuIGV4dHJhIGJpdCBvZiBjb2RlIHdoaWNoIGlzIG5vdCBuZWVkZWQuXG4gIExpbmsucHJvcFR5cGVzID0gZXhhY3Qoe1xuICAgIGhyZWY6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5vYmplY3RdKS5pc1JlcXVpcmVkLFxuICAgIGFzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMub2JqZWN0XSksXG4gICAgcHJlZmV0Y2g6IFByb3BUeXBlcy5ib29sLFxuICAgIHJlcGxhY2U6IFByb3BUeXBlcy5ib29sLFxuICAgIHNoYWxsb3c6IFByb3BUeXBlcy5ib29sLFxuICAgIHBhc3NIcmVmOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzY3JvbGw6IFByb3BUeXBlcy5ib29sLFxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5lbGVtZW50LFxuICAgICAgKHByb3BzOiBhbnksIHByb3BOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBwcm9wc1twcm9wTmFtZV1cblxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIHdhcm4oXG4gICAgICAgICAgICBgV2FybmluZzogWW91J3JlIHVzaW5nIGEgc3RyaW5nIGRpcmVjdGx5IGluc2lkZSA8TGluaz4uIFRoaXMgdXNhZ2UgaGFzIGJlZW4gZGVwcmVjYXRlZC4gUGxlYXNlIGFkZCBhbiA8YT4gdGFnIGFzIGNoaWxkIG9mIDxMaW5rPmBcbiAgICAgICAgICApXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgfSxcbiAgICBdKS5pc1JlcXVpcmVkLFxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rXG4iLCIvKipcbiAqIFJlbW92ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBpZiB0aGVyZSBpcyBvbmUuIFByZXNlcnZlcyB0aGUgcm9vdCBwYXRoIGAvYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmVuZHNXaXRoKCcvJykgJiYgcGF0aCAhPT0gJy8nID8gcGF0aC5zbGljZSgwLCAtMSkgOiBwYXRoXG59XG5cbi8qKlxuICogTm9ybWFsaXplcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGFjY29yZGluZyB0byB0aGUgYHRyYWlsaW5nU2xhc2hgIG9wdGlvblxuICogaW4gYG5leHQuY29uZmlnLmpzYC5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIXG4gID8gKHBhdGg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgICBpZiAoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpXG4gICAgICB9IGVsc2UgaWYgKHBhdGguZW5kc1dpdGgoJy8nKSkge1xuICAgICAgICByZXR1cm4gcGF0aFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhdGggKyAnLydcbiAgICAgIH1cbiAgICB9XG4gIDogcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2hcbiIsIi8qIGdsb2JhbCB3aW5kb3cgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIsIHsgTmV4dFJvdXRlciB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgUm91dGVyQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dCdcblxudHlwZSBDbGFzc0FyZ3VtZW50czxUPiA9IFQgZXh0ZW5kcyBuZXcgKC4uLmFyZ3M6IGluZmVyIFUpID0+IGFueSA/IFUgOiBhbnlcblxudHlwZSBSb3V0ZXJBcmdzID0gQ2xhc3NBcmd1bWVudHM8dHlwZW9mIFJvdXRlcj5cblxudHlwZSBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IFJvdXRlciB8IG51bGxcbiAgcmVhZHlDYWxsYmFja3M6IEFycmF5PCgpID0+IGFueT5cbiAgcmVhZHkoY2I6ICgpID0+IGFueSk6IHZvaWRcbn1cblxuZXhwb3J0IHsgUm91dGVyLCBOZXh0Um91dGVyIH1cblxuZXhwb3J0IHR5cGUgU2luZ2xldG9uUm91dGVyID0gU2luZ2xldG9uUm91dGVyQmFzZSAmIE5leHRSb3V0ZXJcblxuY29uc3Qgc2luZ2xldG9uUm91dGVyOiBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IG51bGwsIC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG4gIHJlYWR5Q2FsbGJhY2tzOiBbXSxcbiAgcmVhZHkoY2I6ICgpID0+IHZvaWQpIHtcbiAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpXG4gICAgfVxuICB9LFxufVxuXG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgJ3BhdGhuYW1lJyxcbiAgJ3JvdXRlJyxcbiAgJ3F1ZXJ5JyxcbiAgJ2FzUGF0aCcsXG4gICdjb21wb25lbnRzJyxcbiAgJ2lzRmFsbGJhY2snLFxuICAnYmFzZVBhdGgnLFxuXVxuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAnaGFzaENoYW5nZUNvbXBsZXRlJyxcbl1cbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICdwdXNoJyxcbiAgJ3JlcGxhY2UnLFxuICAncmVsb2FkJyxcbiAgJ2JhY2snLFxuICAncHJlZmV0Y2gnLFxuICAnYmVmb3JlUG9wU3RhdGUnLFxuXVxuXG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIFJvdXRlci5ldmVudHNcbiAgfSxcbn0pXG5cbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4gIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdIGFzIHN0cmluZ1xuICAgIH0sXG4gIH0pXG59KVxuXG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG4gIDsoc2luZ2xldG9uUm91dGVyIGFzIGFueSlbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgfVxufSlcblxucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKSA9PiB7XG4gICAgUm91dGVyLmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKFxuICAgICAgICAxXG4gICAgICApfWBcbiAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXIgYXMgYW55XG4gICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApXG4gICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSlcblxuZnVuY3Rpb24gZ2V0Um91dGVyKCk6IFJvdXRlciB7XG4gIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICtcbiAgICAgICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbidcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZXRvblJvdXRlciBhcyBTaW5nbGV0b25Sb3V0ZXJcblxuLy8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFJvdXRlciB9IGZyb20gJy4vd2l0aC1yb3V0ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSb3V0ZXIoKTogTmV4dFJvdXRlciB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KFJvdXRlckNvbnRleHQpXG59XG5cbi8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbmV4cG9ydCBjb25zdCBjcmVhdGVSb3V0ZXIgPSAoLi4uYXJnczogUm91dGVyQXJncyk6IFJvdXRlciA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgUm91dGVyKC4uLmFyZ3MpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2IoKSlcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW11cblxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnQgZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcjogUm91dGVyKTogTmV4dFJvdXRlciB7XG4gIGNvbnN0IF9yb3V0ZXIgPSByb3V0ZXIgYXMgYW55XG4gIGNvbnN0IGluc3RhbmNlID0ge30gYXMgYW55XG5cbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcykge1xuICAgIGlmICh0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKHt9LCBfcm91dGVyW3Byb3BlcnR5XSkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcltwcm9wZXJ0eV1cbiAgfVxuXG4gIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgaW5zdGFuY2UuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgIHJldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRDb21wb25lbnRUeXBlLCBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxuZXhwb3J0IHR5cGUgV2l0aFJvdXRlclByb3BzID0ge1xuICByb3V0ZXI6IE5leHRSb3V0ZXJcbn1cblxuZXhwb3J0IHR5cGUgRXhjbHVkZVJvdXRlclByb3BzPFA+ID0gUGljazxcbiAgUCxcbiAgRXhjbHVkZTxrZXlvZiBQLCBrZXlvZiBXaXRoUm91dGVyUHJvcHM+XG4+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhSb3V0ZXI8XG4gIFAgZXh0ZW5kcyBXaXRoUm91dGVyUHJvcHMsXG4gIEMgPSBOZXh0UGFnZUNvbnRleHRcbj4oXG4gIENvbXBvc2VkQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxDLCBhbnksIFA+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPj4ge1xuICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wczogYW55KSB7XG4gICAgcmV0dXJuIDxDb21wb3NlZENvbXBvbmVudCByb3V0ZXI9e3VzZVJvdXRlcigpfSB7Li4ucHJvcHN9IC8+XG4gIH1cblxuICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHNcbiAgLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuICA7KFdpdGhSb3V0ZXJXcmFwcGVyIGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wcyA9IChDb21wb3NlZENvbXBvbmVudCBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHNcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCBuYW1lID1cbiAgICAgIENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvc2VkQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG4gICAgV2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWUgPSBgd2l0aFJvdXRlcigke25hbWV9KWBcbiAgfVxuXG4gIHJldHVybiBXaXRoUm91dGVyV3JhcHBlclxufVxuIiwiLypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbi8vIFRoaXMgZmlsZSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L21pdHQvYmxvYi92MS4xLjMvc3JjL2luZGV4LmpzXG4vLyBJdCdzIGJlZW4gZWRpdGVkIGZvciB0aGUgbmVlZHMgb2YgdGhpcyBzY3JpcHRcbi8vIFNlZSB0aGUgTElDRU5TRSBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG5cbnR5cGUgSGFuZGxlciA9ICguLi5ldnRzOiBhbnlbXSkgPT4gdm9pZFxuXG5leHBvcnQgdHlwZSBNaXR0RW1pdHRlciA9IHtcbiAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pOiB2b2lkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pdHQoKTogTWl0dEVtaXR0ZXIge1xuICBjb25zdCBhbGw6IHsgW3M6IHN0cmluZ106IEhhbmRsZXJbXSB9ID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIHJldHVybiB7XG4gICAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICA7KGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpXG4gICAgfSxcblxuICAgIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIGlmIChhbGxbdHlwZV0pIHtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWJpdHdpc2VcbiAgICAgICAgYWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKSA+Pj4gMCwgMSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICA7KGFsbFt0eXBlXSB8fCBbXSkuc2xpY2UoKS5tYXAoKGhhbmRsZXI6IEhhbmRsZXIpID0+IHtcbiAgICAgICAgaGFuZGxlciguLi5ldnRzKVxuICAgICAgfSlcbiAgICB9LFxuICB9XG59XG4iLCIvKiBnbG9iYWwgX19ORVhUX0RBVEFfXyAqL1xuLy8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCBtaXR0LCB7IE1pdHRFbWl0dGVyIH0gZnJvbSAnLi4vbWl0dCdcbmltcG9ydCB7XG4gIEFwcENvbnRleHRUeXBlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0VVJMLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBOZXh0UGFnZUNvbnRleHQsXG4gIFNULFxufSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IGlzRHluYW1pY1JvdXRlIH0gZnJvbSAnLi91dGlscy9pcy1keW5hbWljJ1xuaW1wb3J0IHsgZ2V0Um91dGVNYXRjaGVyIH0gZnJvbSAnLi91dGlscy9yb3V0ZS1tYXRjaGVyJ1xuaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vdXRpbHMvcm91dGUtcmVnZXgnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi91dGlscy9zZWFyY2gtcGFyYW1zLXRvLXVybC1xdWVyeSdcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCB7XG4gIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoLFxuICBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCxcbn0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaCdcblxuY29uc3QgYmFzZVBhdGggPSAocHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCBhcyBzdHJpbmcpIHx8ICcnXG5cbmZ1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJyksIHtcbiAgICBjYW5jZWxsZWQ6IHRydWUsXG4gIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gYmFzZVBhdGhcbiAgICA/IHBhdGggPT09ICcvJ1xuICAgICAgPyBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChiYXNlUGF0aClcbiAgICAgIDogYmFzZVBhdGggKyBwYXRoXG4gICAgOiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5zbGljZShiYXNlUGF0aC5sZW5ndGgpIHx8ICcvJ1xufVxuXG50eXBlIFVybCA9IFVybE9iamVjdCB8IHN0cmluZ1xuXG4vKipcbiAqIFJlc29sdmVzIGEgZ2l2ZW4gaHlwZXJsaW5rIHdpdGggYSBjZXJ0YWluIHJvdXRlciBzdGF0ZSAoYmFzZVBhdGggbm90IGluY2x1ZGVkKS5cbiAqIFByZXNlcnZlcyBhYnNvbHV0ZSB1cmxzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUhyZWYoY3VycmVudFBhdGg6IHN0cmluZywgaHJlZjogVXJsKTogc3RyaW5nIHtcbiAgLy8gd2UgdXNlIGEgZHVtbXkgYmFzZSB1cmwgZm9yIHJlbGF0aXZlIHVybHNcbiAgY29uc3QgYmFzZSA9IG5ldyBVUkwoY3VycmVudFBhdGgsICdodHRwOi8vbicpXG4gIGNvbnN0IHVybEFzU3RyaW5nID1cbiAgICB0eXBlb2YgaHJlZiA9PT0gJ3N0cmluZycgPyBocmVmIDogZm9ybWF0V2l0aFZhbGlkYXRpb24oaHJlZilcbiAgY29uc3QgZmluYWxVcmwgPSBuZXcgVVJMKHVybEFzU3RyaW5nLCBiYXNlKVxuICBmaW5hbFVybC5wYXRobmFtZSA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGZpbmFsVXJsLnBhdGhuYW1lKVxuICAvLyBpZiB0aGUgb3JpZ2luIGRpZG4ndCBjaGFuZ2UsIGl0IG1lYW5zIHdlIHJlY2VpdmVkIGEgcmVsYXRpdmUgaHJlZlxuICByZXR1cm4gZmluYWxVcmwub3JpZ2luID09PSBiYXNlLm9yaWdpblxuICAgID8gZmluYWxVcmwuaHJlZi5zbGljZShmaW5hbFVybC5vcmlnaW4ubGVuZ3RoKVxuICAgIDogZmluYWxVcmwuaHJlZlxufVxuXG5mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyOiBOZXh0Um91dGVyLCB1cmw6IFVybCwgYXM6IFVybCkge1xuICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgcmV0dXJuIHtcbiAgICB1cmw6IGFkZEJhc2VQYXRoKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgdXJsKSksXG4gICAgYXM6IGFzID8gYWRkQmFzZVBhdGgocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCBhcykpIDogYXMsXG4gIH1cbn1cblxuZnVuY3Rpb24gdHJ5UGFyc2VSZWxhdGl2ZVVybChcbiAgdXJsOiBzdHJpbmdcbik6IG51bGwgfCBSZXR1cm5UeXBlPHR5cGVvZiBwYXJzZVJlbGF0aXZlVXJsPiB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW52YWxpZCBocmVmIHBhc3NlZCB0byByb3V0ZXI6ICR7dXJsfSBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbnZhbGlkLWhyZWYtcGFzc2VkYFxuICAgICAgKVxuICAgIH1cbiAgICByZXR1cm4gbnVsbFxuICB9XG59XG5cbnR5cGUgQ29tcG9uZW50UmVzID0geyBwYWdlOiBDb21wb25lbnRUeXBlOyBtb2Q6IGFueSB9XG5cbmV4cG9ydCB0eXBlIEJhc2VSb3V0ZXIgPSB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBOZXh0Um91dGVyID0gQmFzZVJvdXRlciAmXG4gIFBpY2s8XG4gICAgUm91dGVyLFxuICAgIHwgJ3B1c2gnXG4gICAgfCAncmVwbGFjZSdcbiAgICB8ICdyZWxvYWQnXG4gICAgfCAnYmFjaydcbiAgICB8ICdwcmVmZXRjaCdcbiAgICB8ICdiZWZvcmVQb3BTdGF0ZSdcbiAgICB8ICdldmVudHMnXG4gICAgfCAnaXNGYWxsYmFjaydcbiAgPlxuXG5leHBvcnQgdHlwZSBQcmVmZXRjaE9wdGlvbnMgPSB7XG4gIHByaW9yaXR5PzogYm9vbGVhblxufVxuXG50eXBlIFJvdXRlSW5mbyA9IHtcbiAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG4gIHByb3BzPzogYW55XG4gIGVycj86IEVycm9yXG4gIGVycm9yPzogYW55XG59XG5cbnR5cGUgU3Vic2NyaXB0aW9uID0gKGRhdGE6IFJvdXRlSW5mbywgQXBwPzogQ29tcG9uZW50VHlwZSkgPT4gUHJvbWlzZTx2b2lkPlxuXG50eXBlIEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgPSAoc3RhdGU6IGFueSkgPT4gYm9vbGVhblxuXG50eXBlIENvbXBvbmVudExvYWRDYW5jZWwgPSAoKCkgPT4gdm9pZCkgfCBudWxsXG5cbnR5cGUgSGlzdG9yeU1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnIHwgJ3B1c2hTdGF0ZSdcblxuY29uc3QgbWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gPVxuICBwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OICYmXG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICdzY3JvbGxSZXN0b3JhdGlvbicgaW4gd2luZG93Lmhpc3RvcnlcblxuZnVuY3Rpb24gZmV0Y2hSZXRyeSh1cmw6IHN0cmluZywgYXR0ZW1wdHM6IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiBmZXRjaCh1cmwsIHtcbiAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAvL1xuICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAvLyA+IG9wdGlvbi5cbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgLy9cbiAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgIGlmICghcmVzLm9rKSB7XG4gICAgICBpZiAoYXR0ZW1wdHMgPiAxICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgIHJldHVybiBmZXRjaFJldHJ5KHVybCwgYXR0ZW1wdHMgLSAxKVxuICAgICAgfVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgIH1cblxuICAgIHJldHVybiByZXMuanNvbigpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWY6IHN0cmluZywgaXNTZXJ2ZXJSZW5kZXI6IGJvb2xlYW4pIHtcbiAgcmV0dXJuIGZldGNoUmV0cnkoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyID8gMyA6IDEpLmNhdGNoKChlcnI6IEVycm9yKSA9PiB7XG4gICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAvLyBsb29wLlxuICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgIDsoZXJyIGFzIGFueSkuY29kZSA9ICdQQUdFX0xPQURfRVJST1InXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIgaW1wbGVtZW50cyBCYXNlUm91dGVyIHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovXG4gIGNvbXBvbmVudHM6IHsgW3BhdGhuYW1lOiBzdHJpbmddOiBSb3V0ZUluZm8gfVxuICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICBzZGM6IHsgW2FzUGF0aDogc3RyaW5nXTogb2JqZWN0IH0gPSB7fVxuICBzdWI6IFN1YnNjcmlwdGlvblxuICBjbGM6IENvbXBvbmVudExvYWRDYW5jZWxcbiAgcGFnZUxvYWRlcjogYW55XG4gIF9icHM6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgfCB1bmRlZmluZWRcbiAgZXZlbnRzOiBNaXR0RW1pdHRlclxuICBfd3JhcEFwcDogKEFwcDogQ29tcG9uZW50VHlwZSkgPT4gYW55XG4gIGlzU3NyOiBib29sZWFuXG4gIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgX2luRmxpZ2h0Um91dGU/OiBzdHJpbmdcblxuICBzdGF0aWMgZXZlbnRzOiBNaXR0RW1pdHRlciA9IG1pdHQoKVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAge1xuICAgICAgaW5pdGlhbFByb3BzLFxuICAgICAgcGFnZUxvYWRlcixcbiAgICAgIEFwcCxcbiAgICAgIHdyYXBBcHAsXG4gICAgICBDb21wb25lbnQsXG4gICAgICBlcnIsXG4gICAgICBzdWJzY3JpcHRpb24sXG4gICAgICBpc0ZhbGxiYWNrLFxuICAgIH06IHtcbiAgICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uXG4gICAgICBpbml0aWFsUHJvcHM6IGFueVxuICAgICAgcGFnZUxvYWRlcjogYW55XG4gICAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIEFwcDogQ29tcG9uZW50VHlwZVxuICAgICAgd3JhcEFwcDogKEFwcDogQ29tcG9uZW50VHlwZSkgPT4gYW55XG4gICAgICBlcnI/OiBFcnJvclxuICAgICAgaXNGYWxsYmFjazogYm9vbGVhblxuICAgIH1cbiAgKSB7XG4gICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgdGhpcy5yb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgdGhpcy5jb21wb25lbnRzID0ge31cbiAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICBlcnIsXG4gICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHsgQ29tcG9uZW50OiBBcHAgfVxuXG4gICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlclxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICB0aGlzLmFzUGF0aCA9XG4gICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICBpc0R5bmFtaWNSb3V0ZShwYXRobmFtZSkgJiYgX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0ID8gcGF0aG5hbWUgOiBhc1xuICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aFxuICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uXG4gICAgdGhpcy5jbGMgPSBudWxsXG4gICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHBcbiAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICB0aGlzLmlzU3NyID0gdHJ1ZVxuXG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFja1xuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgIGlmIChhcy5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG5cbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICAgIGdldFVSTCgpXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKVxuXG4gICAgICAvLyBlbmFibGUgY3VzdG9tIHNjcm9sbCByZXN0b3JhdGlvbiBoYW5kbGluZyB3aGVuIGF2YWlsYWJsZVxuICAgICAgLy8gb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGJyb3dzZXIncyBkZWZhdWx0IGhhbmRsaW5nXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9ICdtYW51YWwnXG5cbiAgICAgICAgICBsZXQgc2Nyb2xsRGVib3VuY2VUaW1lb3V0OiB1bmRlZmluZWQgfCBOb2RlSlMuVGltZW91dFxuXG4gICAgICAgICAgY29uc3QgZGVib3VuY2VkU2Nyb2xsU2F2ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmIChzY3JvbGxEZWJvdW5jZVRpbWVvdXQpIGNsZWFyVGltZW91dChzY3JvbGxEZWJvdW5jZVRpbWVvdXQpXG5cbiAgICAgICAgICAgIHNjcm9sbERlYm91bmNlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB7IHVybCwgYXM6IGN1ckFzLCBvcHRpb25zIH0gPSBoaXN0b3J5LnN0YXRlXG4gICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIGN1ckFzLFxuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgICAgICAgICAgIF9OX1g6IHdpbmRvdy5zY3JvbGxYLFxuICAgICAgICAgICAgICAgICAgX05fWTogd2luZG93LnNjcm9sbFksXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSwgMTApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGRlYm91bmNlZFNjcm9sbFNhdmUpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBAZGVwcmVjYXRlZCBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSBldmVuIHRob3VnaCBpdCdzIGEgcHJpdmF0ZSBtZXRob2QuXG4gIHN0YXRpYyBfcmV3cml0ZVVybEZvck5leHRFeHBvcnQodXJsOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKSB7XG4gICAgICBjb25zdCByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCA9IHJlcXVpcmUoJy4vcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpXG4gICAgICAgIC5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydFxuICAgICAgcmV0dXJuIHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHVybClcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHVybFxuICAgIH1cbiAgfVxuXG4gIG9uUG9wU3RhdGUgPSAoZTogUG9wU3RhdGVFdmVudCk6IHZvaWQgPT4ge1xuICAgIGlmICghZS5zdGF0ZSkge1xuICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgIC8vXG4gICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgZ2V0VVJMKClcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucyB9ID0gZS5zdGF0ZVxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgaWYgKHRoaXMuaXNTc3IgJiYgYXMgPT09IHRoaXMuYXNQYXRoICYmIHBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoZS5zdGF0ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHVybCA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIGFzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgJ2Bwb3BzdGF0ZWAgZXZlbnQgdHJpZ2dlcmVkIGJ1dCBgZXZlbnQuc3RhdGVgIGRpZCBub3QgaGF2ZSBgdXJsYCBvciBgYXNgIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3BvcHN0YXRlLXN0YXRlLWVtcHR5J1xuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgdXBkYXRlKHJvdXRlOiBzdHJpbmcsIG1vZDogYW55KSB7XG4gICAgY29uc3QgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlID0gbW9kLmRlZmF1bHQgfHwgbW9kXG4gICAgY29uc3QgZGF0YSA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV1cbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IHVwZGF0ZSB1bmF2YWlsYWJsZSByb3V0ZTogJHtyb3V0ZX1gKVxuICAgIH1cblxuICAgIGNvbnN0IG5ld0RhdGEgPSBPYmplY3QuYXNzaWduKHt9LCBkYXRhLCB7XG4gICAgICBDb21wb25lbnQsXG4gICAgICBfX05fU1NHOiBtb2QuX19OX1NTRyxcbiAgICAgIF9fTl9TU1A6IG1vZC5fX05fU1NQLFxuICAgIH0pXG4gICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IG5ld0RhdGFcblxuICAgIC8vIHBhZ2VzL19hcHAuanMgdXBkYXRlZFxuICAgIGlmIChyb3V0ZSA9PT0gJy9fYXBwJykge1xuICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHJvdXRlID09PSB0aGlzLnJvdXRlKSB7XG4gICAgICB0aGlzLm5vdGlmeShuZXdEYXRhKVxuICAgIH1cbiAgfVxuXG4gIHJlbG9hZCgpOiB2b2lkIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgfVxuXG4gIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovXG4gIGJhY2soKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHB1c2godXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICByZXBsYWNlKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIGFzeW5jIGNoYW5nZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBhbnlcbiAgKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgaWYgKCFvcHRpb25zLl9oKSB7XG4gICAgICB0aGlzLmlzU3NyID0gZmFsc2VcbiAgICB9XG4gICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgIGlmIChTVCkge1xuICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKVxuICAgIH1cblxuICAgIC8vIEFkZCB0aGUgZW5kaW5nIHNsYXNoIHRvIHRoZSBwYXRocy4gU28sIHdlIGNhbiBzZXJ2ZSB0aGVcbiAgICAvLyBcIjxwYWdlPi9pbmRleC5odG1sXCIgZGlyZWN0bHkgZm9yIHRoZSBTU1IgcGFnZS5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCkge1xuICAgICAgY29uc3QgcmV3cml0ZVVybEZvck5leHRFeHBvcnQgPSByZXF1aXJlKCcuL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKVxuICAgICAgICAucmV3cml0ZVVybEZvck5leHRFeHBvcnRcbiAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgIGlmIChfX05FWFRfREFUQV9fLm5leHRFeHBvcnQpIHtcbiAgICAgICAgYXMgPSByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydChhcylcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5faW5GbGlnaHRSb3V0ZSkge1xuICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSlcbiAgICB9XG5cbiAgICBjb25zdCBjbGVhbmVkQXMgPSBkZWxCYXNlUGF0aChhcylcbiAgICB0aGlzLl9pbkZsaWdodFJvdXRlID0gYXNcblxuICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuXG4gICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICBpZiAoIW9wdGlvbnMuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoY2xlYW5lZEFzKSkge1xuICAgICAgdGhpcy5hc1BhdGggPSBjbGVhbmVkQXNcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMpXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcbiAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGNsZWFuZWRBcylcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIGNvbnN0IHBhcnNlZCA9IHRyeVBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgaWYgKCFwYXJzZWQpIHJldHVybiBmYWxzZVxuXG4gICAgbGV0IHsgcGF0aG5hbWUsIHNlYXJjaFBhcmFtcyB9ID0gcGFyc2VkXG4gICAgY29uc3QgcXVlcnkgPSBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcylcblxuICAgIC8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbiAgICAvLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4gICAgLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbiAgICBwYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICA/IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbEJhc2VQYXRoKHBhdGhuYW1lKSlcbiAgICAgIDogcGF0aG5hbWVcblxuICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgIGlmICghdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpKSB7XG4gICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJ1xuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG4gICAgY29uc3QgeyBzaGFsbG93ID0gZmFsc2UgfSA9IG9wdGlvbnNcblxuICAgIGlmIChpc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgIGNvbnN0IHsgcGF0aG5hbWU6IGFzUGF0aG5hbWUgfSA9IHBhcnNlUmVsYXRpdmVVcmwoY2xlYW5lZEFzKVxuICAgICAgY29uc3Qgcm91dGVSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gICAgICBjb25zdCByb3V0ZU1hdGNoID0gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpXG4gICAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoXG4gICAgICAgICAgKHBhcmFtKSA9PiAhcXVlcnlbcGFyYW1dXG4gICAgICAgIClcblxuICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgIGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGAgK1xuICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbmNvbXBhdGlibGUtaHJlZi1hc2BcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIHJvdXRlTWF0Y2gpXG4gICAgICB9XG4gICAgfVxuXG4gICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMpXG5cbiAgICB0cnkge1xuICAgICAgY29uc3Qgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8oXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGFzLFxuICAgICAgICBzaGFsbG93XG4gICAgICApXG4gICAgICBjb25zdCB7IGVycm9yIH0gPSByb3V0ZUluZm9cblxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMpXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgYXBwQ29tcDogYW55ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudFxuICAgICAgICA7KHdpbmRvdyBhcyBhbnkpLm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICEocm91dGVJbmZvLkNvbXBvbmVudCBhcyBhbnkpLmdldEluaXRpYWxQcm9wc1xuICAgICAgfVxuXG4gICAgICBhd2FpdCB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUhLCBxdWVyeSwgY2xlYW5lZEFzLCByb3V0ZUluZm8pXG5cbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgY2xlYW5lZEFzKVxuICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgfVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gJiYgJ19OX1gnIGluIG9wdGlvbnMpIHtcbiAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8ob3B0aW9ucy5fTl9YLCBvcHRpb25zLl9OX1kpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzKVxuXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VTdGF0ZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zID0ge31cbiAgKTogdm9pZCB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCBnZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oXG4gICAgICAgIHtcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgYXMsXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgfSxcbiAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICcnLFxuICAgICAgICBhc1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgIGVycjogRXJyb3IgJiB7IGNvZGU6IGFueTsgY2FuY2VsbGVkOiBib29sZWFuIH0sXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgbG9hZEVycm9yRmFpbD86IGJvb2xlYW5cbiAgKTogUHJvbWlzZTxSb3V0ZUluZm8+IHtcbiAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgLy8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cblxuICAgIGlmIChlcnIuY29kZSA9PT0gJ1BBR0VfTE9BRF9FUlJPUicgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyLCBhcylcblxuICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG5cbiAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuXG4gICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgIC8vIFNvIGxldCdzIHRocm93IGEgY2FuY2VsbGF0aW9uIGVycm9yIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICB0aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKClcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBwYWdlOiBDb21wb25lbnQgfSA9IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy9fZXJyb3InKVxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBSb3V0ZUluZm8gPSB7IENvbXBvbmVudCwgZXJyLCBlcnJvcjogZXJyIH1cblxuICAgICAgdHJ5IHtcbiAgICAgICAgcm91dGVJbmZvLnByb3BzID0gYXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgZXJyLFxuICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICB9IGFzIGFueSlcbiAgICAgIH0gY2F0Y2ggKGdpcEVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpXG4gICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChyb3V0ZUluZm9FcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKHJvdXRlSW5mb0VyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgdHJ1ZSlcbiAgICB9XG4gIH1cblxuICBhc3luYyBnZXRSb3V0ZUluZm8oXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBzaGFsbG93OiBib29sZWFuID0gZmFsc2VcbiAgKTogUHJvbWlzZTxSb3V0ZUluZm8+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgY2FjaGVkUm91dGVJbmZvID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXVxuXG4gICAgICBpZiAoc2hhbGxvdyAmJiBjYWNoZWRSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgcmV0dXJuIGNhY2hlZFJvdXRlSW5mb1xuICAgICAgfVxuXG4gICAgICBjb25zdCByb3V0ZUluZm8gPSBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgPyBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgOiBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKFxuICAgICAgICAgICAgKHJlcykgPT5cbiAgICAgICAgICAgICAgKHtcbiAgICAgICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1AsXG4gICAgICAgICAgICAgIH0gYXMgUm91dGVJbmZvKVxuICAgICAgICAgIClcblxuICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKVxuICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgZGF0YUhyZWY6IHN0cmluZyB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoX19OX1NTRyB8fCBfX05fU1NQKSB7XG4gICAgICAgIGRhdGFIcmVmID0gdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIF9fTl9TU0dcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwcm9wcyA9IGF3YWl0IHRoaXMuX2dldERhdGE8Um91dGVJbmZvPigoKSA9PlxuICAgICAgICBfX05fU1NHXG4gICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoXG4gICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgIH0gYXMgYW55XG4gICAgICAgICAgICApXG4gICAgICApXG4gICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mb1xuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLCBwYXRobmFtZSwgcXVlcnksIGFzKVxuICAgIH1cbiAgfVxuXG4gIHNldChcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIGRhdGE6IFJvdXRlSW5mb1xuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZVxuXG4gICAgdGhpcy5yb3V0ZSA9IHJvdXRlXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgdGhpcy5hc1BhdGggPSBhc1xuICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhKVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL1xuICBiZWZvcmVQb3BTdGF0ZShjYjogQmVmb3JlUG9wU3RhdGVDYWxsYmFjaykge1xuICAgIHRoaXMuX2JwcyA9IGNiXG4gIH1cblxuICBvbmx5QUhhc2hDaGFuZ2UoYXM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZVxuICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKVxuICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKVxuXG4gICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaFxuICB9XG5cbiAgc2Nyb2xsVG9IYXNoKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJylcbiAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWVcbiAgICBpZiAoaGFzaCA9PT0gJycpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaClcbiAgICBpZiAoaWRFbCkge1xuICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF1cbiAgICBpZiAobmFtZUVsKSB7XG4gICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgIH1cbiAgfVxuXG4gIHVybElzTmV3KGFzUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGhcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovXG4gIGFzeW5jIHByZWZldGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzUGF0aDogc3RyaW5nID0gdXJsLFxuICAgIG9wdGlvbnM6IFByZWZldGNoT3B0aW9ucyA9IHt9XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IHBhcnNlZCA9IHRyeVBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgaWYgKCFwYXJzZWQpIHJldHVyblxuXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VkXG5cbiAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgdGhpcy5wYWdlTG9hZGVyLnByZWZldGNoRGF0YSh1cmwsIGFzUGF0aCksXG4gICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksXG4gICAgXSlcbiAgfVxuXG4gIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPENvbXBvbmVudFJlcz4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9KVxuXG4gICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKVxuXG4gICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgY29uc3QgZXJyb3I6IGFueSA9IG5ldyBFcnJvcihcbiAgICAgICAgYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImBcbiAgICAgIClcbiAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHRocm93IGVycm9yXG4gICAgfVxuXG4gICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnRSZXN1bHRcbiAgfVxuXG4gIF9nZXREYXRhPFQ+KGZuOiAoKSA9PiBQcm9taXNlPFQ+KTogUHJvbWlzZTxUPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH1cbiAgICB0aGlzLmNsYyA9IGNhbmNlbFxuICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgIGNvbnN0IGVycjogYW55ID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJylcbiAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIGNvbnN0IHsgaHJlZjogY2FjaGVLZXkgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuc2RjW2NhY2hlS2V5XSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pXG4gICAgfVxuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnNkY1tjYWNoZUtleV0gPSBkYXRhXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U2VydmVyRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcilcbiAgfVxuXG4gIGdldEluaXRpYWxQcm9wcyhcbiAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUsXG4gICAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ11cbiAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHApXG4gICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlXG4gICAgcmV0dXJuIGxvYWRHZXRJbml0aWFsUHJvcHM8QXBwQ29udGV4dFR5cGU8Um91dGVyPj4oQXBwLCB7XG4gICAgICBBcHBUcmVlLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgY3R4LFxuICAgIH0pXG4gIH1cblxuICBhYm9ydENvbXBvbmVudExvYWQoYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLCBhcylcbiAgICAgIHRoaXMuY2xjKClcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIG5vdGlmeShkYXRhOiBSb3V0ZUluZm8pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdWIoZGF0YSwgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudClcbiAgfVxufVxuIiwiLy8gRm9ybWF0IGZ1bmN0aW9uIG1vZGlmaWVkIGZyb20gbm9kZWpzXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgZW5jb2RlIGFzIGVuY29kZVF1ZXJ5c3RyaW5nIH0gZnJvbSAncXVlcnlzdHJpbmcnXG5cbmNvbnN0IHNsYXNoZWRQcm90b2NvbHMgPSAvaHR0cHM/fGZ0cHxnb3BoZXJ8ZmlsZS9cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFVybCh1cmxPYmo6IFVybE9iamVjdCkge1xuICBsZXQgeyBhdXRoLCBob3N0bmFtZSB9ID0gdXJsT2JqXG4gIGxldCBwcm90b2NvbCA9IHVybE9iai5wcm90b2NvbCB8fCAnJ1xuICBsZXQgcGF0aG5hbWUgPSB1cmxPYmoucGF0aG5hbWUgfHwgJydcbiAgbGV0IGhhc2ggPSB1cmxPYmouaGFzaCB8fCAnJ1xuICBsZXQgcXVlcnkgPSB1cmxPYmoucXVlcnkgfHwgJydcbiAgbGV0IGhvc3Q6IHN0cmluZyB8IGZhbHNlID0gZmFsc2VcblxuICBhdXRoID0gYXV0aCA/IGVuY29kZVVSSUNvbXBvbmVudChhdXRoKS5yZXBsYWNlKC8lM0EvaSwgJzonKSArICdAJyA6ICcnXG5cbiAgaWYgKHVybE9iai5ob3N0KSB7XG4gICAgaG9zdCA9IGF1dGggKyB1cmxPYmouaG9zdFxuICB9IGVsc2UgaWYgKGhvc3RuYW1lKSB7XG4gICAgaG9zdCA9IGF1dGggKyAofmhvc3RuYW1lLmluZGV4T2YoJzonKSA/IGBbJHtob3N0bmFtZX1dYCA6IGhvc3RuYW1lKVxuICAgIGlmICh1cmxPYmoucG9ydCkge1xuICAgICAgaG9zdCArPSAnOicgKyB1cmxPYmoucG9ydFxuICAgIH1cbiAgfVxuXG4gIGlmIChxdWVyeSAmJiB0eXBlb2YgcXVlcnkgPT09ICdvYmplY3QnKSB7XG4gICAgLy8gcXVlcnkgPSAnJyArIG5ldyBVUkxTZWFyY2hQYXJhbXMocXVlcnkpO1xuICAgIHF1ZXJ5ID0gZW5jb2RlUXVlcnlzdHJpbmcocXVlcnkpXG4gIH1cblxuICBsZXQgc2VhcmNoID0gdXJsT2JqLnNlYXJjaCB8fCAocXVlcnkgJiYgYD8ke3F1ZXJ5fWApIHx8ICcnXG5cbiAgaWYgKHByb3RvY29sICYmIHByb3RvY29sLnN1YnN0cigtMSkgIT09ICc6JykgcHJvdG9jb2wgKz0gJzonXG5cbiAgaWYgKFxuICAgIHVybE9iai5zbGFzaGVzIHx8XG4gICAgKCghcHJvdG9jb2wgfHwgc2xhc2hlZFByb3RvY29scy50ZXN0KHByb3RvY29sKSkgJiYgaG9zdCAhPT0gZmFsc2UpXG4gICkge1xuICAgIGhvc3QgPSAnLy8nICsgKGhvc3QgfHwgJycpXG4gICAgaWYgKHBhdGhuYW1lICYmIHBhdGhuYW1lWzBdICE9PSAnLycpIHBhdGhuYW1lID0gJy8nICsgcGF0aG5hbWVcbiAgfSBlbHNlIGlmICghaG9zdCkge1xuICAgIGhvc3QgPSAnJ1xuICB9XG5cbiAgaWYgKGhhc2ggJiYgaGFzaFswXSAhPT0gJyMnKSBoYXNoID0gJyMnICsgaGFzaFxuICBpZiAoc2VhcmNoICYmIHNlYXJjaFswXSAhPT0gJz8nKSBzZWFyY2ggPSAnPycgKyBzZWFyY2hcblxuICBwYXRobmFtZSA9IHBhdGhuYW1lLnJlcGxhY2UoL1s/I10vZywgZW5jb2RlVVJJQ29tcG9uZW50KVxuICBzZWFyY2ggPSBzZWFyY2gucmVwbGFjZSgnIycsICclMjMnKVxuXG4gIHJldHVybiBgJHtwcm90b2NvbH0ke2hvc3R9JHtwYXRobmFtZX0ke3NlYXJjaH0ke2hhc2h9YFxufVxuIiwiLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpXG59XG4iLCJjb25zdCBEVU1NWV9CQVNFID0gbmV3IFVSTCgnaHR0cDovL24nKVxuXG4vKipcbiAqIFBhcnNlcyBwYXRoLXJlbGF0aXZlIHVybHMgKGUuZy4gYC9oZWxsby93b3JsZD9mb289YmFyYCkuIElmIHVybCBpc24ndCBwYXRoLXJlbGF0aXZlXG4gKiAoZS5nLiBgLi9oZWxsb2ApIHRoZW4gYXQgbGVhc3QgYmFzZSBtdXN0IGJlLlxuICogQWJzb2x1dGUgdXJscyBhcmUgcmVqZWN0ZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVJlbGF0aXZlVXJsKHVybDogc3RyaW5nLCBiYXNlPzogc3RyaW5nKSB7XG4gIGNvbnN0IHJlc29sdmVkQmFzZSA9IGJhc2UgPyBuZXcgVVJMKGJhc2UsIERVTU1ZX0JBU0UpIDogRFVNTVlfQkFTRVxuICBjb25zdCB7IHBhdGhuYW1lLCBzZWFyY2hQYXJhbXMsIHNlYXJjaCwgaGFzaCwgaHJlZiwgb3JpZ2luIH0gPSBuZXcgVVJMKFxuICAgIHVybCxcbiAgICByZXNvbHZlZEJhc2VcbiAgKVxuICBpZiAob3JpZ2luICE9PSBEVU1NWV9CQVNFLm9yaWdpbikge1xuICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50OiBpbnZhbGlkIHJlbGF0aXZlIFVSTCcpXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZSxcbiAgICBzZWFyY2hQYXJhbXMsXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZjogaHJlZi5zbGljZShEVU1NWV9CQVNFLm9yaWdpbi5sZW5ndGgpLFxuICB9XG59XG4iLCJpbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi9yb3V0ZS1yZWdleCdcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4OiBSZXR1cm5UeXBlPHR5cGVvZiBnZXRSb3V0ZVJlZ2V4Pikge1xuICBjb25zdCB7IHJlLCBncm91cHMgfSA9IHJvdXRlUmVnZXhcbiAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByZS5leGVjKHBhdGhuYW1lISlcbiAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IGRlY29kZSA9IChwYXJhbTogc3RyaW5nKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKVxuICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICBjb25zdCBlcnI6IEVycm9yICYgeyBjb2RlPzogc3RyaW5nIH0gPSBuZXcgRXJyb3IoXG4gICAgICAgICAgJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nXG4gICAgICAgIClcbiAgICAgICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCdcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHBhcmFtczogeyBbcGFyYW1OYW1lOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9ID0ge31cblxuICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaCgoc2x1Z05hbWU6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgZyA9IGdyb3Vwc1tzbHVnTmFtZV1cbiAgICAgIGNvbnN0IG0gPSByb3V0ZU1hdGNoW2cucG9zXVxuICAgICAgaWYgKG0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwYXJhbXNbc2x1Z05hbWVdID0gfm0uaW5kZXhPZignLycpXG4gICAgICAgICAgPyBtLnNwbGl0KCcvJykubWFwKChlbnRyeSkgPT4gZGVjb2RlKGVudHJ5KSlcbiAgICAgICAgICA6IGcucmVwZWF0XG4gICAgICAgICAgPyBbZGVjb2RlKG0pXVxuICAgICAgICAgIDogZGVjb2RlKG0pXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcGFyYW1zXG4gIH1cbn1cbiIsImludGVyZmFjZSBHcm91cCB7XG4gIHBvczogbnVtYmVyXG4gIHJlcGVhdDogYm9vbGVhblxuICBvcHRpb25hbDogYm9vbGVhblxufVxuXG4vLyB0aGlzIGlzbid0IGltcG9ydGluZyB0aGUgZXNjYXBlLXN0cmluZy1yZWdleCBtb2R1bGVcbi8vIHRvIHJlZHVjZSBieXRlc1xuZnVuY3Rpb24gZXNjYXBlUmVnZXgoc3RyOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csICdcXFxcJCYnKVxufVxuXG5mdW5jdGlvbiBwYXJzZVBhcmFtZXRlcihwYXJhbTogc3RyaW5nKSB7XG4gIGNvbnN0IG9wdGlvbmFsID0gcGFyYW0uc3RhcnRzV2l0aCgnWycpICYmIHBhcmFtLmVuZHNXaXRoKCddJylcbiAgaWYgKG9wdGlvbmFsKSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgxLCAtMSlcbiAgfVxuICBjb25zdCByZXBlYXQgPSBwYXJhbS5zdGFydHNXaXRoKCcuLi4nKVxuICBpZiAocmVwZWF0KSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgzKVxuICB9XG4gIHJldHVybiB7IGtleTogcGFyYW0sIHJlcGVhdCwgb3B0aW9uYWwgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVSZWdleChcbiAgbm9ybWFsaXplZFJvdXRlOiBzdHJpbmdcbik6IHtcbiAgcmU6IFJlZ0V4cFxuICBuYW1lZFJlZ2V4Pzogc3RyaW5nXG4gIHJvdXRlS2V5cz86IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfVxuICBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfVxufSB7XG4gIGNvbnN0IHNlZ21lbnRzID0gKG5vcm1hbGl6ZWRSb3V0ZS5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJylcbiAgICAuc2xpY2UoMSlcbiAgICAuc3BsaXQoJy8nKVxuXG4gIGNvbnN0IGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9ID0ge31cbiAgbGV0IGdyb3VwSW5kZXggPSAxXG4gIGNvbnN0IHBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgIGdyb3Vwc1trZXldID0geyBwb3M6IGdyb3VwSW5kZXgrKywgcmVwZWF0LCBvcHRpb25hbCB9XG4gICAgICAgIHJldHVybiByZXBlYXQgPyAob3B0aW9uYWwgPyAnKD86LyguKz8pKT8nIDogJy8oLis/KScpIDogJy8oW14vXSs/KSdcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgfVxuICAgIH0pXG4gICAgLmpvaW4oJycpXG5cbiAgLy8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4gIC8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIGxldCByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICBsZXQgcm91dGVLZXlDaGFyTGVuZ3RoID0gMVxuXG4gICAgLy8gYnVpbGRzIGEgbWluaW1hbCByb3V0ZUtleSB1c2luZyBvbmx5IGEteiBhbmQgbWluaW1hbCBudW1iZXIgb2YgY2hhcmFjdGVyc1xuICAgIGNvbnN0IGdldFNhZmVSb3V0ZUtleSA9ICgpID0+IHtcbiAgICAgIGxldCByb3V0ZUtleSA9ICcnXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm91dGVLZXlDaGFyTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcm91dGVLZXkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShyb3V0ZUtleUNoYXJDb2RlKVxuICAgICAgICByb3V0ZUtleUNoYXJDb2RlKytcblxuICAgICAgICBpZiAocm91dGVLZXlDaGFyQ29kZSA+IDEyMikge1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckxlbmd0aCsrXG4gICAgICAgICAgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByb3V0ZUtleVxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlS2V5czogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9ID0ge31cblxuICAgIGxldCBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgICAgLy8gcmVwbGFjZSBhbnkgbm9uLXdvcmQgY2hhcmFjdGVycyBzaW5jZSB0aGV5IGNhbiBicmVha1xuICAgICAgICAgIC8vIHRoZSBuYW1lZCByZWdleFxuICAgICAgICAgIGxldCBjbGVhbmVkS2V5ID0ga2V5LnJlcGxhY2UoL1xcVy9nLCAnJylcbiAgICAgICAgICBsZXQgaW52YWxpZEtleSA9IGZhbHNlXG5cbiAgICAgICAgICAvLyBjaGVjayBpZiB0aGUga2V5IGlzIHN0aWxsIGludmFsaWQgYW5kIGZhbGxiYWNrIHRvIHVzaW5nIGEga25vd25cbiAgICAgICAgICAvLyBzYWZlIGtleVxuICAgICAgICAgIGlmIChjbGVhbmVkS2V5Lmxlbmd0aCA9PT0gMCB8fCBjbGVhbmVkS2V5Lmxlbmd0aCA+IDMwKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIWlzTmFOKHBhcnNlSW50KGNsZWFuZWRLZXkuc3Vic3RyKDAsIDEpKSkpIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGludmFsaWRLZXkpIHtcbiAgICAgICAgICAgIGNsZWFuZWRLZXkgPSBnZXRTYWZlUm91dGVLZXkoKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJvdXRlS2V5c1tjbGVhbmVkS2V5XSA9IGtleVxuICAgICAgICAgIHJldHVybiByZXBlYXRcbiAgICAgICAgICAgID8gb3B0aW9uYWxcbiAgICAgICAgICAgICAgPyBgKD86Lyg/PCR7Y2xlYW5lZEtleX0+Lis/KSk/YFxuICAgICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT4uKz8pYFxuICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+W14vXSs/KWBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5qb2luKCcnKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgICAgZ3JvdXBzLFxuICAgICAgcm91dGVLZXlzLFxuICAgICAgbmFtZWRSZWdleDogYF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgLFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgZ3JvdXBzLFxuICB9XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuXG5leHBvcnQgZnVuY3Rpb24gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShcbiAgc2VhcmNoUGFyYW1zOiBVUkxTZWFyY2hQYXJhbXNcbik6IFBhcnNlZFVybFF1ZXJ5IHtcbiAgY29uc3QgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cbiAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICBpZiAodHlwZW9mIHF1ZXJ5W2tleV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBxdWVyeVtrZXldID0gdmFsdWVcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocXVlcnlba2V5XSkpIHtcbiAgICAgIDsocXVlcnlba2V5XSBhcyBzdHJpbmdbXSkucHVzaCh2YWx1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgcXVlcnlba2V5XSA9IFtxdWVyeVtrZXldIGFzIHN0cmluZywgdmFsdWVdXG4gICAgfVxuICB9KVxuICByZXR1cm4gcXVlcnlcbn1cbiIsImltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IGZvcm1hdFVybCB9IGZyb20gJy4vcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwnXG5pbXBvcnQgeyBNYW5pZmVzdEl0ZW0gfSBmcm9tICcuLi9zZXJ2ZXIvbG9hZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciB9IGZyb20gJy4vcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IEVudiB9IGZyb20gJy4uLy4uL2xpYi9sb2FkLWVudi1jb25maWcnXG5pbXBvcnQgeyBCdWlsZE1hbmlmZXN0IH0gZnJvbSAnLi4vc2VydmVyL2dldC1wYWdlLWZpbGVzJ1xuXG4vKipcbiAqIFR5cGVzIHVzZWQgYnkgYm90aCBuZXh0IGFuZCBuZXh0LXNlcnZlclxuICovXG5cbmV4cG9ydCB0eXBlIE5leHRDb21wb25lbnRUeXBlPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPiA9IENvbXBvbmVudFR5cGU8UD4gJiB7XG4gIC8qKlxuICAgKiBVc2VkIGZvciBpbml0aWFsIHBhZ2UgbG9hZCBkYXRhIHBvcHVsYXRpb24uIERhdGEgcmV0dXJuZWQgZnJvbSBgZ2V0SW5pdGlhbFByb3BzYCBpcyBzZXJpYWxpemVkIHdoZW4gc2VydmVyIHJlbmRlcmVkLlxuICAgKiBNYWtlIHN1cmUgdG8gcmV0dXJuIHBsYWluIGBPYmplY3RgIHdpdGhvdXQgdXNpbmcgYERhdGVgLCBgTWFwYCwgYFNldGAuXG4gICAqIEBwYXJhbSBjdHggQ29udGV4dCBvZiBgcGFnZWBcbiAgICovXG4gIGdldEluaXRpYWxQcm9wcz8oY29udGV4dDogQyk6IElQIHwgUHJvbWlzZTxJUD5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIERvY3VtZW50Q29udGV4dCxcbiAgRG9jdW1lbnRJbml0aWFsUHJvcHMsXG4gIERvY3VtZW50UHJvcHNcbj4gJiB7XG4gIHJlbmRlckRvY3VtZW50KFxuICAgIERvY3VtZW50OiBEb2N1bWVudFR5cGUsXG4gICAgcHJvcHM6IERvY3VtZW50UHJvcHNcbiAgKTogUmVhY3QuUmVhY3RFbGVtZW50XG59XG5cbmV4cG9ydCB0eXBlIEFwcFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlXG4+XG5cbmV4cG9ydCB0eXBlIEFwcFRyZWVUeXBlID0gQ29tcG9uZW50VHlwZTxcbiAgQXBwSW5pdGlhbFByb3BzICYgeyBbbmFtZTogc3RyaW5nXTogYW55IH1cbj5cblxuLyoqXG4gKiBXZWIgdml0YWxzIHByb3ZpZGVkIHRvIF9hcHAucmVwb3J0V2ViVml0YWxzIGJ5IENvcmUgV2ViIFZpdGFscyBwbHVnaW4gZGV2ZWxvcGVkIGJ5IEdvb2dsZSBDaHJvbWUgdGVhbS5cbiAqIGh0dHBzOi8vbmV4dGpzLm9yZy9ibG9nL25leHQtOS00I2ludGVncmF0ZWQtd2ViLXZpdGFscy1yZXBvcnRpbmdcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dFdlYlZpdGFsc01ldHJpYyA9IHtcbiAgaWQ6IHN0cmluZ1xuICBsYWJlbDogc3RyaW5nXG4gIG5hbWU6IHN0cmluZ1xuICBzdGFydFRpbWU6IG51bWJlclxuICB2YWx1ZTogbnVtYmVyXG59XG5cbmV4cG9ydCB0eXBlIEVuaGFuY2VyPEM+ID0gKENvbXBvbmVudDogQykgPT4gQ1xuXG5leHBvcnQgdHlwZSBDb21wb25lbnRzRW5oYW5jZXIgPVxuICB8IHtcbiAgICAgIGVuaGFuY2VBcHA/OiBFbmhhbmNlcjxBcHBUeXBlPlxuICAgICAgZW5oYW5jZUNvbXBvbmVudD86IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuICAgIH1cbiAgfCBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZVJlc3VsdCA9IHtcbiAgaHRtbDogc3RyaW5nXG4gIGhlYWQ/OiBBcnJheTxKU1guRWxlbWVudCB8IG51bGw+XG59XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2UgPSAoXG4gIG9wdGlvbnM/OiBDb21wb25lbnRzRW5oYW5jZXJcbikgPT4gUmVuZGVyUGFnZVJlc3VsdCB8IFByb21pc2U8UmVuZGVyUGFnZVJlc3VsdD5cblxuZXhwb3J0IHR5cGUgQmFzZUNvbnRleHQgPSB7XG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIFtrOiBzdHJpbmddOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgTkVYVF9EQVRBID0ge1xuICBwcm9wczogYW55XG4gIHBhZ2U6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYnVpbGRJZDogc3RyaW5nXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIHJ1bnRpbWVDb25maWc/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9XG4gIG5leHRFeHBvcnQ/OiBib29sZWFuXG4gIGF1dG9FeHBvcnQ/OiBib29sZWFuXG4gIGlzRmFsbGJhY2s/OiBib29sZWFuXG4gIGR5bmFtaWNJZHM/OiBzdHJpbmdbXVxuICBlcnI/OiBFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9XG4gIGdzcD86IGJvb2xlYW5cbiAgZ3NzcD86IGJvb2xlYW5cbiAgY3VzdG9tU2VydmVyPzogYm9vbGVhblxuICBnaXA/OiBib29sZWFuXG4gIGFwcEdpcD86IGJvb2xlYW5cbn1cblxuLyoqXG4gKiBgTmV4dGAgY29udGV4dFxuICovXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgaW50ZXJmYWNlLW5hbWVcbmV4cG9ydCBpbnRlcmZhY2UgTmV4dFBhZ2VDb250ZXh0IHtcbiAgLyoqXG4gICAqIEVycm9yIG9iamVjdCBpZiBlbmNvdW50ZXJlZCBkdXJpbmcgcmVuZGVyaW5nXG4gICAqL1xuICBlcnI/OiAoRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfSkgfCBudWxsXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVxdWVzdCBvYmplY3QuXG4gICAqL1xuICByZXE/OiBJbmNvbWluZ01lc3NhZ2VcbiAgLyoqXG4gICAqIGBIVFRQYCByZXNwb25zZSBvYmplY3QuXG4gICAqL1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICAvKipcbiAgICogUGF0aCBzZWN0aW9uIG9mIGBVUkxgLlxuICAgKi9cbiAgcGF0aG5hbWU6IHN0cmluZ1xuICAvKipcbiAgICogUXVlcnkgc3RyaW5nIHNlY3Rpb24gb2YgYFVSTGAgcGFyc2VkIGFzIGFuIG9iamVjdC5cbiAgICovXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICAvKipcbiAgICogYFN0cmluZ2Agb2YgdGhlIGFjdHVhbCBwYXRoIGluY2x1ZGluZyBxdWVyeS5cbiAgICovXG4gIGFzUGF0aD86IHN0cmluZ1xuICAvKipcbiAgICogYENvbXBvbmVudGAgdGhlIHRyZWUgb2YgdGhlIEFwcCB0byB1c2UgaWYgbmVlZGluZyB0byByZW5kZXIgc2VwYXJhdGVseVxuICAgKi9cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbn1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dFR5cGU8UiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyPiA9IHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQ+XG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG4gIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gIHJvdXRlcjogUlxufVxuXG5leHBvcnQgdHlwZSBBcHBJbml0aWFsUHJvcHMgPSB7XG4gIHBhZ2VQcm9wczogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzVHlwZTxcbiAgUiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyLFxuICBQID0ge31cbj4gPSBBcHBJbml0aWFsUHJvcHMgJiB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0LCBhbnksIFA+XG4gIHJvdXRlcjogUlxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudENvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQgJiB7XG4gIHJlbmRlclBhZ2U6IFJlbmRlclBhZ2Vcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRJbml0aWFsUHJvcHMgPSBSZW5kZXJQYWdlUmVzdWx0ICYge1xuICBzdHlsZXM/OiBSZWFjdC5SZWFjdEVsZW1lbnRbXSB8IFJlYWN0LlJlYWN0RnJhZ21lbnRcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRQcm9wcyA9IERvY3VtZW50SW5pdGlhbFByb3BzICYge1xuICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgZGFuZ2Vyb3VzQXNQYXRoOiBzdHJpbmdcbiAgYnVpbGRNYW5pZmVzdDogQnVpbGRNYW5pZmVzdFxuICBhbXBQYXRoOiBzdHJpbmdcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4gIGh5YnJpZEFtcDogYm9vbGVhblxuICBpc0RldmVsb3BtZW50OiBib29sZWFuXG4gIGZpbGVzOiBzdHJpbmdbXVxuICBkeW5hbWljSW1wb3J0czogTWFuaWZlc3RJdGVtW11cbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgY2Fub25pY2FsQmFzZTogc3RyaW5nXG4gIGhlYWRUYWdzOiBhbnlbXVxuICB1bnN0YWJsZV9ydW50aW1lSlM/OiBmYWxzZVxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVxdWVzdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRBcGlSZXF1ZXN0IGV4dGVuZHMgSW5jb21pbmdNZXNzYWdlIHtcbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgcXVlcnlgIHZhbHVlcyBmcm9tIHVybFxuICAgKi9cbiAgcXVlcnk6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXVxuICB9XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYGNvb2tpZXNgIGZyb20gaGVhZGVyXG4gICAqL1xuICBjb29raWVzOiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gIH1cblxuICBib2R5OiBhbnlcblxuICBlbnY6IEVudlxuXG4gIHByZXZpZXc/OiBib29sZWFuXG4gIC8qKlxuICAgKiBQcmV2aWV3IGRhdGEgc2V0IG9uIHRoZSByZXF1ZXN0LCBpZiBhbnlcbiAgICogKi9cbiAgcHJldmlld0RhdGE/OiBhbnlcbn1cblxuLyoqXG4gKiBTZW5kIGJvZHkgb2YgcmVzcG9uc2VcbiAqL1xudHlwZSBTZW5kPFQ+ID0gKGJvZHk6IFQpID0+IHZvaWRcblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlSZXNwb25zZTxUID0gYW55PiA9IFNlcnZlclJlc3BvbnNlICYge1xuICAvKipcbiAgICogU2VuZCBkYXRhIGBhbnlgIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIHNlbmQ6IFNlbmQ8VD5cbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBganNvbmAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAganNvbjogU2VuZDxUPlxuICBzdGF0dXM6IChzdGF0dXNDb2RlOiBudW1iZXIpID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdDogKHN0YXR1c09yVXJsOiBzdHJpbmcgfCBudW1iZXIsIHVybD86IHN0cmluZykgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG5cbiAgLyoqXG4gICAqIFNldCBwcmV2aWV3IGRhdGEgZm9yIE5leHQuanMnIHByZXJlbmRlciBtb2RlXG4gICAqL1xuICBzZXRQcmV2aWV3RGF0YTogKFxuICAgIGRhdGE6IG9iamVjdCB8IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgLyoqXG4gICAgICAgKiBTcGVjaWZpZXMgdGhlIG51bWJlciAoaW4gc2Vjb25kcykgZm9yIHRoZSBwcmV2aWV3IHNlc3Npb24gdG8gbGFzdCBmb3IuXG4gICAgICAgKiBUaGUgZ2l2ZW4gbnVtYmVyIHdpbGwgYmUgY29udmVydGVkIHRvIGFuIGludGVnZXIgYnkgcm91bmRpbmcgZG93bi5cbiAgICAgICAqIEJ5IGRlZmF1bHQsIG5vIG1heGltdW0gYWdlIGlzIHNldCBhbmQgdGhlIHByZXZpZXcgc2Vzc2lvbiBmaW5pc2hlc1xuICAgICAgICogd2hlbiB0aGUgY2xpZW50IHNodXRzIGRvd24gKGJyb3dzZXIgaXMgY2xvc2VkKS5cbiAgICAgICAqL1xuICAgICAgbWF4QWdlPzogbnVtYmVyXG4gICAgfVxuICApID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICBjbGVhclByZXZpZXdEYXRhOiAoKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIGhhbmRsZXJcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaUhhbmRsZXI8VCA9IGFueT4gPSAoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPFQ+XG4pID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+XG5cbi8qKlxuICogVXRpbHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4ZWNPbmNlPFQgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IFJldHVyblR5cGU8VD4+KFxuICBmbjogVFxuKTogVCB7XG4gIGxldCB1c2VkID0gZmFsc2VcbiAgbGV0IHJlc3VsdDogUmV0dXJuVHlwZTxUPlxuXG4gIHJldHVybiAoKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgaWYgKCF1c2VkKSB7XG4gICAgICB1c2VkID0gdHJ1ZVxuICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncylcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9KSBhcyBUXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpIHtcbiAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvblxuICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVUkwoKSB7XG4gIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXNwbGF5TmFtZTxQPihDb21wb25lbnQ6IENvbXBvbmVudFR5cGU8UD4pIHtcbiAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgPyBDb21wb25lbnRcbiAgICA6IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVzU2VudChyZXM6IFNlcnZlclJlc3BvbnNlKSB7XG4gIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPihBcHA6IE5leHRDb21wb25lbnRUeXBlPEMsIElQLCBQPiwgY3R4OiBDKTogUHJvbWlzZTxJUD4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChBcHAucHJvdG90eXBlPy5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgICBBcHBcbiAgICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYFxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gICAgfVxuICB9XG4gIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcylcblxuICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICBpZiAoY3R4LmN0eCAmJiBjdHguQ29tcG9uZW50KSB7XG4gICAgICAvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7fSBhcyBJUFxuICB9XG5cbiAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eClcblxuICBpZiAocmVzICYmIGlzUmVzU2VudChyZXMpKSB7XG4gICAgcmV0dXJuIHByb3BzXG4gIH1cblxuICBpZiAoIXByb3BzKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICBBcHBcbiAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmBcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGggPT09IDAgJiYgIWN0eC5jdHgpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYCR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgICAgQXBwXG4gICAgICAgICl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9wc1xufVxuXG5leHBvcnQgY29uc3QgdXJsT2JqZWN0S2V5cyA9IFtcbiAgJ2F1dGgnLFxuICAnaGFzaCcsXG4gICdob3N0JyxcbiAgJ2hvc3RuYW1lJyxcbiAgJ2hyZWYnLFxuICAncGF0aCcsXG4gICdwYXRobmFtZScsXG4gICdwb3J0JyxcbiAgJ3Byb3RvY29sJyxcbiAgJ3F1ZXJ5JyxcbiAgJ3NlYXJjaCcsXG4gICdzbGFzaGVzJyxcbl1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybDogVXJsT2JqZWN0KTogc3RyaW5nIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgaWYgKHVybCAhPT0gbnVsbCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgICAgT2JqZWN0LmtleXModXJsKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKHVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZvcm1hdFVybCh1cmwpXG59XG5cbmV4cG9ydCBjb25zdCBTUCA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCdcbmV4cG9ydCBjb25zdCBTVCA9XG4gIFNQICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrID09PSAnZnVuY3Rpb24nICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlID09PSAnZnVuY3Rpb24nXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgUGFnZSBmcm9tICcuLi8uLi8uLi9hcHAvaG9jL3NlY3VyZWRQYWdlJztcclxuaW1wb3J0IGFzeW5jQ29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi91dGlsL2FzeW5jQ29tcG9uZW50XCI7XHJcbmltcG9ydCBJbnRsTWVzc2FnZXMgZnJvbSAnLi4vLi4vLi4vdXRpbC9JbnRsTWVzc2FnZXMnO1xyXG4vLyBpbXBvcnQgSUZJIGZyb20gJy4uLy4uLy4uL3JvdXRlcy9tYWluL0NSTS9JRklzJztcclxuXHJcbmNvbnN0IElGSSA9IGFzeW5jQ29tcG9uZW50KCgpID0+IGltcG9ydCgnLi4vLi4vLi4vcm91dGVzL21haW4vQ1JNL0lGSScpKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhZ2UoKCkgPT4gKFxyXG4gIDxkaXY+XHJcbiAgICA8SGVhZD5cclxuICAgICAgPHRpdGxlPkludGVybmF0aW9uYWwgRmluYW5jaWFsIEluc3RpdHV0ZXM8L3RpdGxlPlxyXG4gICAgPC9IZWFkPlxyXG4gICAgPGRpdj5cclxuICAgICAgPElGSSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbikpO1xyXG4iLCJpbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQge1xyXG4gIEhJREVfTUVTU0FHRSxcclxuICBJTklUX1VSTCxcclxuICBPTl9ISURFX0xPQURFUixcclxuICBPTl9TSE9XX0xPQURFUixcclxuICBTSE9XX01FU1NBR0UsXHJcbiAgU0lHTklOX0ZBQ0VCT09LX1VTRVIsXHJcbiAgU0lHTklOX0ZBQ0VCT09LX1VTRVJfU1VDQ0VTUyxcclxuICBTSUdOSU5fR0lUSFVCX1VTRVIsXHJcbiAgU0lHTklOX0dJVEhVQl9VU0VSX1NVQ0NFU1MsXHJcbiAgU0lHTklOX0dPT0dMRV9VU0VSLFxyXG4gIFNJR05JTl9HT09HTEVfVVNFUl9TVUNDRVNTLFxyXG4gIFNJR05JTl9UV0lUVEVSX1VTRVIsXHJcbiAgU0lHTklOX1RXSVRURVJfVVNFUl9TVUNDRVNTLFxyXG4gIFNJR05JTl9VU0VSLFxyXG4gIFNJR05JTl9VU0VSX1NVQ0NFU1MsXHJcbiAgU0lHTk9VVF9VU0VSLFxyXG4gIFNJR05PVVRfVVNFUl9TVUNDRVNTLFxyXG4gIFNJR05VUF9VU0VSLFxyXG4gIFNJR05VUF9VU0VSX1NVQ0NFU1NcclxufSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzL0FjdGlvblR5cGVzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlclNpZ25VcCA9ICh1c2VyKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IFNJR05VUF9VU0VSLFxyXG4gICAgcGF5bG9hZDogdXNlclxyXG4gIH07XHJcbn07XHJcbmV4cG9ydCBjb25zdCB1c2VyU2lnbkluID0gKHVzZXIpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogU0lHTklOX1VTRVIsXHJcbiAgICBwYXlsb2FkOiB1c2VyXHJcbiAgfTtcclxufTtcclxuZXhwb3J0IGNvbnN0IHVzZXJTaWduT3V0ID0gKCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBTSUdOT1VUX1VTRVJcclxuICB9O1xyXG59O1xyXG5leHBvcnQgY29uc3QgdXNlclNpZ25VcFN1Y2Nlc3MgPSAoYXV0aFVzZXIpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogU0lHTlVQX1VTRVJfU1VDQ0VTUyxcclxuICAgIHBheWxvYWQ6IGF1dGhVc2VyXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VyU2lnbkluU3VjY2VzcyA9IChhdXRoVXNlcikgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBTSUdOSU5fVVNFUl9TVUNDRVNTLFxyXG4gICAgcGF5bG9hZDogYXV0aFVzZXJcclxuICB9XHJcbn07XHJcbmV4cG9ydCBjb25zdCB1c2VyU2lnbk91dFN1Y2Nlc3MgPSAoKSA9PiB7XHJcbiAgUm91dGVyLnJlcGxhY2UoXCIvXCIpO1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBTSUdOT1VUX1VTRVJfU1VDQ0VTUyxcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2hvd0F1dGhNZXNzYWdlID0gKG1lc3NhZ2UpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogU0hPV19NRVNTQUdFLFxyXG4gICAgcGF5bG9hZDogbWVzc2FnZVxyXG4gIH07XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHVzZXJHb29nbGVTaWduSW4gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IFNJR05JTl9HT09HTEVfVVNFUlxyXG4gIH07XHJcbn07XHJcbmV4cG9ydCBjb25zdCB1c2VyR29vZ2xlU2lnbkluU3VjY2VzcyA9IChhdXRoVXNlcikgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBTSUdOSU5fR09PR0xFX1VTRVJfU1VDQ0VTUyxcclxuICAgIHBheWxvYWQ6IGF1dGhVc2VyXHJcbiAgfTtcclxufTtcclxuZXhwb3J0IGNvbnN0IHVzZXJGYWNlYm9va1NpZ25JbiA9ICgpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogU0lHTklOX0ZBQ0VCT09LX1VTRVJcclxuICB9O1xyXG59O1xyXG5leHBvcnQgY29uc3QgdXNlckZhY2Vib29rU2lnbkluU3VjY2VzcyA9IChhdXRoVXNlcikgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBTSUdOSU5fRkFDRUJPT0tfVVNFUl9TVUNDRVNTLFxyXG4gICAgcGF5bG9hZDogYXV0aFVzZXJcclxuICB9O1xyXG59O1xyXG5leHBvcnQgY29uc3Qgc2V0SW5pdFVybCA9ICh1cmwpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogSU5JVF9VUkwsXHJcbiAgICBwYXlsb2FkOiB1cmxcclxuICB9O1xyXG59O1xyXG5leHBvcnQgY29uc3QgdXNlclR3aXR0ZXJTaWduSW4gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IFNJR05JTl9UV0lUVEVSX1VTRVJcclxuICB9O1xyXG59O1xyXG5leHBvcnQgY29uc3QgdXNlclR3aXR0ZXJTaWduSW5TdWNjZXNzID0gKGF1dGhVc2VyKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IFNJR05JTl9UV0lUVEVSX1VTRVJfU1VDQ0VTUyxcclxuICAgIHBheWxvYWQ6IGF1dGhVc2VyXHJcbiAgfTtcclxufTtcclxuZXhwb3J0IGNvbnN0IHVzZXJHaXRodWJTaWduSW4gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IFNJR05JTl9HSVRIVUJfVVNFUlxyXG4gIH07XHJcbn07XHJcbmV4cG9ydCBjb25zdCB1c2VyR2l0aHViU2lnbkluU3VjY2VzcyA9IChhdXRoVXNlcikgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBTSUdOSU5fR0lUSFVCX1VTRVJfU1VDQ0VTUyxcclxuICAgIHBheWxvYWQ6IGF1dGhVc2VyXHJcbiAgfTtcclxufTtcclxuZXhwb3J0IGNvbnN0IHNob3dBdXRoTG9hZGVyID0gKCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBPTl9TSE9XX0xPQURFUixcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGhpZGVNZXNzYWdlID0gKCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBISURFX01FU1NBR0UsXHJcbiAgfTtcclxufTtcclxuZXhwb3J0IGNvbnN0IGhpZGVBdXRoTG9hZGVyID0gKCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBPTl9ISURFX0xPQURFUixcclxuICB9O1xyXG59O1xyXG4iLCJpbXBvcnQge0ZFVENIX0VSUk9SLCBGRVRDSF9TVEFSVCwgRkVUQ0hfU1VDQ0VTUywgSElERV9NRVNTQUdFLCBTSE9XX01FU1NBR0V9IGZyb20gXCIuLi8uLi9jb25zdGFudHMvQWN0aW9uVHlwZXNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaFN0YXJ0ID0gKCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBGRVRDSF9TVEFSVFxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaFN1Y2Nlc3MgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IEZFVENIX1NVQ0NFU1NcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hFcnJvciA9IChlcnJvcikgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBGRVRDSF9FUlJPUixcclxuICAgIHBheWxvYWQ6IGVycm9yXHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNob3dNZXNzYWdlID0gKG1lc3NhZ2UpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogU0hPV19NRVNTQUdFLFxyXG4gICAgcGF5bG9hZDogbWVzc2FnZVxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBoaWRlTWVzc2FnZSA9ICgpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogSElERV9NRVNTQUdFXHJcbiAgfVxyXG59O1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQge0ZFVENIX1NUQVJULCBGRVRDSF9TVUNDRVNTLCBHRVRfQWxsX0NPTlRBQ1RfU1VDQ0VTU30gZnJvbSBcIi4uLy4uL2NvbnN0YW50cy9BY3Rpb25UeXBlc1wiO1xyXG5pbXBvcnQge2RhdGFiYXNlfSBmcm9tIFwiLi4vLi4vZmlyZWJhc2VDb25maWcvaW5kZXhcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBvbkdldEFsbENvbnRhY3QgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goe3R5cGU6IEZFVENIX1NUQVJUfSk7XHJcbiAgICBkYXRhYmFzZS5yZWYoJy9jb250YWN0Jykub24oJ3ZhbHVlJywgc25hcHNob3QgPT4ge1xyXG4gICAgICBkaXNwYXRjaCh7dHlwZTogRkVUQ0hfU1VDQ0VTU30pO1xyXG4gICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogR0VUX0FsbF9DT05UQUNUX1NVQ0NFU1MsXHJcbiAgICAgICAgcGF5bG9hZDogc25hcHNob3QudmFsKClcclxuICAgICAgfSk7XHJcbiAgICB9KVxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgb25BZGRDb250YWN0ID0gKGNvbnRhY3QpID0+IHtcclxuICByZXR1cm4gZGlzcGF0Y2ggPT4gZGF0YWJhc2UucmVmKCcvY29udGFjdCcpLnB1c2goY29udGFjdCk7XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IG9uVXBkYXRlQ29udGFjdCA9IChpZCwgY29udGFjdCkgPT4ge1xyXG5cclxuICByZXR1cm4gZGlzcGF0Y2ggPT4gZGF0YWJhc2UucmVmKCcvY29udGFjdCcpLmNoaWxkKGlkKS51cGRhdGUoY29udGFjdCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgb25EZWxldGVDb250YWN0ID0gKGlkKSA9PiB7XHJcbiAgcmV0dXJuIGRpc3BhdGNoID0+IGRhdGFiYXNlLnJlZignL2NvbnRhY3QnKS5jaGlsZChpZCkucmVtb3ZlKCk7XHJcbn07XHJcbiIsImltcG9ydCB7XHJcbiAgRkVUQ0hfQUxMX05PVEVTX1NVQ0NFU1MsXHJcbiAgR0VUX1NUSUNLWSxcclxuICBOT1RFU19VUERBVEUsXHJcbiAgVVBEQVRFX0FMTF9OT1RFU19TVUNDRVNTXHJcbn0gZnJvbSBcIi4uLy4uL2NvbnN0YW50cy9BY3Rpb25UeXBlc1wiO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBvbkdldFN0aWNreSA9IChub3Rlc0xpc3QpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogR0VUX1NUSUNLWSxcclxuICAgIG5vdGVzTGlzdFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hTdGlja3lTdWNjZXNzID0gKG5vdGVzTGlzdCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBGRVRDSF9BTExfTk9URVNfU1VDQ0VTUyxcclxuICAgIHBheWxvYWQ6IG5vdGVzTGlzdFxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBvblVwZGF0ZVN0aWNreSA9IChub3Rlc0xpc3QpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogTk9URVNfVVBEQVRFLFxyXG4gICAgbm90ZXNMaXN0XHJcbiAgfTtcclxufTtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlU3RpY2t5U3VjY2VzcyA9IChub3Rlc0xpc3QpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogVVBEQVRFX0FMTF9OT1RFU19TVUNDRVNTLFxyXG4gICAgcGF5bG9hZDogbm90ZXNMaXN0XHJcbiAgfVxyXG59O1xyXG5cclxuIiwiaW1wb3J0IHtTV0lUQ0hfTEFOR1VBR0UsIFRPR0dMRV9DT0xMQVBTRURfTkFWLCBXSU5ET1dfV0lEVEh9IGZyb20gXCIuLi8uLi9jb25zdGFudHMvQWN0aW9uVHlwZXNcIjtcclxuaW1wb3J0IHtOQVZfU1RZTEUsIFNFVF9QQVRIX05BTUUsIFRIRU1FX1RZUEV9IGZyb20gXCIuLi8uLi9jb25zdGFudHMvVGhlbWVTZXR0aW5nXCI7XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZUNvbGxhcHNlZFNpZGVOYXYobmF2Q29sbGFwc2VkKSB7XHJcbiAgcmV0dXJuIHt0eXBlOiBUT0dHTEVfQ09MTEFQU0VEX05BViwgbmF2Q29sbGFwc2VkfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVdpbmRvd1dpZHRoKHdpZHRoKSB7XHJcbiAgcmV0dXJuIHt0eXBlOiBXSU5ET1dfV0lEVEgsIHdpZHRofTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldFRoZW1lVHlwZSh0aGVtZVR5cGUpIHtcclxuICByZXR1cm4ge3R5cGU6IFRIRU1FX1RZUEUsIHRoZW1lVHlwZX07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBvbk5hdlN0eWxlQ2hhbmdlKG5hdlN0eWxlKSB7XHJcbiAgcmV0dXJuIHt0eXBlOiBOQVZfU1RZTEUsIG5hdlN0eWxlfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldFBhdGhOYW1lKHBhdGhuYW1lKSB7XHJcbiAgcmV0dXJuIHt0eXBlOiBTRVRfUEFUSF9OQU1FLCBwYXRobmFtZX07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzd2l0Y2hMYW5ndWFnZShsb2NhbGUpIHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogU1dJVENIX0xBTkdVQUdFLFxyXG4gICAgcGF5bG9hZDogbG9jYWxlXHJcbiAgfTtcclxufVxyXG4iLCJleHBvcnQgKiBmcm9tICcuL1NldHRpbmcnO1xyXG5leHBvcnQgKiBmcm9tICcuL0F1dGgnO1xyXG5leHBvcnQgKiBmcm9tICcuL05vdGVzJztcclxuZXhwb3J0ICogZnJvbSAnLi9Db21tb24nO1xyXG5leHBvcnQgKiBmcm9tICcuL0NvbnRhY3QnO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7U2Nyb2xsYmFyc30gZnJvbSBcInJlYWN0LWN1c3RvbS1zY3JvbGxiYXJzXCI7XHJcblxyXG5jb25zdCBDdXN0b21TY3JvbGxiYXJzID0gKHByb3BzKSA9PiA8U2Nyb2xsYmFycyAgey4uLnByb3BzfSBhdXRvSGlkZSB1bml2ZXJzYWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlclRyYWNrSG9yaXpvbnRhbD17cHJvcHMgPT4gPGRpdiB7Li4ucHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tkaXNwbGF5OiAnbm9uZSd9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRyYWNrLWhvcml6b250YWxcIi8+fS8+O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ3VzdG9tU2Nyb2xsYmFycztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtGb3JtYXR0ZWRNZXNzYWdlLCBpbmplY3RJbnRsfSBmcm9tICdyZWFjdC1pbnRsJztcclxuXHJcbmNvbnN0IEluamVjdE1hc3NhZ2UgPSBwcm9wcyA9PiA8Rm9ybWF0dGVkTWVzc2FnZSB7Li4ucHJvcHN9IC8+O1xyXG5leHBvcnQgZGVmYXVsdCBpbmplY3RJbnRsKEluamVjdE1hc3NhZ2UsIHtcclxuICB3aXRoUmVmOiBmYWxzZSxcclxufSk7XHJcbiIsImltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYyc7XHJcbmltcG9ydCBDaXJjdWxhclByb2dyZXNzIGZyb20gXCIuLi9hcHAvY29tcG9uZW50cy9DaXJjdWxhclByb2dyZXNzXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFzeW5jQ29tcG9uZW50KGltcG9ydENvbXBvbmVudCkge1xyXG5cclxuICByZXR1cm4gZHluYW1pYyhpbXBvcnRDb21wb25lbnQsXHJcbiAgICB7XHJcbiAgICAgIGxvYWRpbmc6ICgpID0+IDxDaXJjdWxhclByb2dyZXNzLz5cclxuICAgIH0pO1xyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xyXG4gIGZvb3RlclRleHQ6ICdDb3B5cmlnaHQgQ29tcGFueSBOYW1lIMKpIDIwMTknLFxyXG59XHJcbiIsImltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKGNvbnRleHQgPSB7fSwgdGFyZ2V0KSA9PiB7XHJcbiAgY29uc29sZS5sb2coY29udGV4dCwgdGFyZ2V0KTtcclxuICBpZiAoY29udGV4dC5yZXMpIHtcclxuICAgIGNvbnRleHQucmVzLndyaXRlSGVhZCgzMDMsIHsgTG9jYXRpb246IHRhcmdldCB9KTtcclxuICAgIGNvbnRleHQucmVzLmVuZCgpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBSb3V0ZXIucmVwbGFjZSh0YXJnZXQpO1xyXG4gIH1cclxufTtcclxuIiwiaW1wb3J0IGNvb2tpZSBmcm9tICdqcy1jb29raWUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldENvb2tpZSA9IChrZXksIHZhbHVlKSA9PiB7XHJcbiAgaWYgKHByb2Nlc3MuYnJvd3Nlcikge1xyXG4gICAgY29va2llLnNldChrZXksIHZhbHVlLCB7XHJcbiAgICAgIGV4cGlyZXM6IDEsXHJcbiAgICAgIHBhdGg6ICcvJyxcclxuICAgIH0pO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCByZW1vdmVDb29raWUgPSBrZXkgPT4ge1xyXG4gIGlmIChwcm9jZXNzLmJyb3dzZXIpIHtcclxuICAgIGNvb2tpZS5yZW1vdmUoa2V5LCB7XHJcbiAgICAgIGV4cGlyZXM6IDEsXHJcbiAgICB9KTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Q29va2llID0gKGtleSwgcmVxKSA9PiB7XHJcbiAgcmV0dXJuIHByb2Nlc3MuYnJvd3NlclxyXG4gICAgPyBnZXRDb29raWVGcm9tQnJvd3NlcihrZXkpXHJcbiAgICA6IGdldENvb2tpZUZyb21TZXJ2ZXIoa2V5LCByZXEpO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0Q29va2llRnJvbUJyb3dzZXIgPSBrZXkgPT4ge1xyXG4gIHJldHVybiBjb29raWUuZ2V0KGtleSk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRDb29raWVGcm9tU2VydmVyID0gKGtleSwgcmVxKSA9PiB7XHJcbiAgaWYgKCFyZXEuaGVhZGVycy5jb29raWUpIHtcclxuICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgfVxyXG4gIGNvbnN0IHJhd0Nvb2tpZSA9IHJlcS5oZWFkZXJzLmNvb2tpZVxyXG4gICAgLnNwbGl0KCc7JylcclxuICAgIC5maW5kKGMgPT4gYy50cmltKCkuc3RhcnRzV2l0aChgJHtrZXl9PWApKTtcclxuICBpZiAoIXJhd0Nvb2tpZSkge1xyXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICB9XHJcbiAgcmV0dXJuIHJhd0Nvb2tpZS5zcGxpdCgnPScpWzFdO1xyXG59O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGQvbGliL2xvY2FsZS1wcm92aWRlci9jYV9FU1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkL2xpYi9sb2NhbGUtcHJvdmlkZXIvZW5fVVNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZC9saWIvbG9jYWxlLXByb3ZpZGVyL2ZyX0ZSXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGQvbGliL2xvY2FsZS1wcm92aWRlci9pdF9JVFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkL2xpYi9sb2NhbGUtcHJvdmlkZXIvcnVfUlVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianMtY29va2llXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZHluYW1pY1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzLWV4YWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInF1ZXJ5c3RyaW5nXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWN1c3RvbS1zY3JvbGxiYXJzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWludGxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==