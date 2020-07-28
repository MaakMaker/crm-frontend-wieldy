(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[4],{

/***/ "./app/components/chat/ChatUserList/UserCell/index.js":
/*!************************************************************!*\
  !*** ./app/components/chat/ChatUserList/UserCell/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var UserCell = function UserCell(_ref) {
  var chat = _ref.chat,
      selectedSectionId = _ref.selectedSectionId,
      onSelectUser = _ref.onSelectUser;
  return __jsx("div", {
    className: "gx-chat-user-item ".concat(selectedSectionId === chat.id ? 'active' : ''),
    onClick: function onClick() {
      onSelectUser(chat);
    }
  }, __jsx("div", {
    className: "gx-chat-user-row"
  }, __jsx("div", {
    className: "gx-chat-avatar"
  }, __jsx("div", {
    className: "gx-status-pos"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
    src: chat.thumb,
    className: "gx-size-40",
    alt: chat.name
  }), __jsx("span", {
    className: "gx-status gx-small gx-".concat(chat.status)
  }))), __jsx("div", {
    className: "gx-chat-info"
  }, __jsx("span", {
    className: "gx-name h4"
  }, chat.name), __jsx("div", {
    className: "gx-chat-info-des gx-text-truncate"
  }, chat.lastMessage.substring(0, 25) + "..."), __jsx("div", {
    className: "gx-last-message-time"
  }, chat.lastMessageTime)), chat.unreadMessage > 0 ? __jsx("div", {
    className: "gx-chat-date"
  }, __jsx("div", {
    className: "gx-bg-primary gx-rounded-circle gx-badge gx-text-white"
  }, chat.unreadMessage)) : null));
};

_c = UserCell;
/* harmony default export */ __webpack_exports__["default"] = (UserCell);

var _c;

$RefreshReg$(_c, "UserCell");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./app/components/chat/ChatUserList/index.js":
/*!***************************************************!*\
  !*** ./app/components/chat/ChatUserList/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _UserCell_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserCell/index */ "./app/components/chat/ChatUserList/UserCell/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var ChatUserList = function ChatUserList(_ref) {
  var chatUsers = _ref.chatUsers,
      selectedSectionId = _ref.selectedSectionId,
      onSelectUser = _ref.onSelectUser;
  return __jsx("div", {
    className: "gx-chat-user"
  }, chatUsers.map(function (chat, index) {
    return __jsx(_UserCell_index__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: index,
      chat: chat,
      selectedSectionId: selectedSectionId,
      onSelectUser: onSelectUser
    });
  }));
};

_c = ChatUserList;
/* harmony default export */ __webpack_exports__["default"] = (ChatUserList);

var _c;

$RefreshReg$(_c, "ChatUserList");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./app/components/chat/ContactList/UserCell/index.js":
/*!***********************************************************!*\
  !*** ./app/components/chat/ContactList/UserCell/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var UserCell = function UserCell(_ref) {
  var onSelectUser = _ref.onSelectUser,
      selectedSectionId = _ref.selectedSectionId,
      user = _ref.user;
  return __jsx("div", {
    className: "gx-chat-user-item ".concat(selectedSectionId === user.id ? 'active' : ''),
    onClick: function onClick() {
      onSelectUser(user);
    }
  }, __jsx("div", {
    className: "gx-chat-user-row"
  }, __jsx("div", {
    className: "gx-chat-avatar"
  }, __jsx("div", {
    className: "gx-status-pos"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
    src: user.thumb,
    className: "gx-size-40",
    alt: "Abbott"
  }), __jsx("span", {
    className: "gx-status ".concat(user.status)
  }))), __jsx("div", {
    className: "gx-chat-contact-col"
  }, __jsx("div", {
    className: "h4 gx-name"
  }, user.name), __jsx("div", {
    className: "gx-chat-info-des gx-text-truncate"
  }, user.mood.substring(0, 40) + "..."))));
};

_c = UserCell;
/* harmony default export */ __webpack_exports__["default"] = (UserCell);

var _c;

$RefreshReg$(_c, "UserCell");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./app/components/chat/ContactList/index.js":
/*!**************************************************!*\
  !*** ./app/components/chat/ContactList/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _UserCell_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserCell/index */ "./app/components/chat/ContactList/UserCell/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var ContactList = function ContactList(_ref) {
  var onSelectUser = _ref.onSelectUser,
      selectedSectionId = _ref.selectedSectionId,
      contactList = _ref.contactList;
  return __jsx("div", {
    className: "gx-chat-user"
  }, contactList.map(function (user, index) {
    return __jsx(_UserCell_index__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: index,
      user: user,
      selectedSectionId: selectedSectionId,
      onSelectUser: onSelectUser
    });
  }));
};

_c = ContactList;
/* harmony default export */ __webpack_exports__["default"] = (ContactList);

var _c;

$RefreshReg$(_c, "ContactList");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./app/components/chat/Conversation/ReceivedMessageCell/index.js":
/*!***********************************************************************!*\
  !*** ./app/components/chat/Conversation/ReceivedMessageCell/index.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var ReceivedMessageCell = function ReceivedMessageCell(_ref) {
  var conversation = _ref.conversation,
      user = _ref.user;
  return __jsx("div", {
    className: "gx-chat-item"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
    className: "gx-size-40 gx-align-self-end",
    src: user.thumb,
    alt: ""
  }), __jsx("div", {
    className: "gx-bubble-block"
  }, __jsx("div", {
    className: "gx-bubble"
  }, __jsx("div", {
    className: "gx-message"
  }, conversation.message), __jsx("div", {
    className: "gx-time gx-text-muted gx-text-right gx-mt-2"
  }, conversation.sentAt))));
};

_c = ReceivedMessageCell;
/* harmony default export */ __webpack_exports__["default"] = (ReceivedMessageCell);

var _c;

$RefreshReg$(_c, "ReceivedMessageCell");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./app/components/chat/Conversation/SentMessageCell/index.js":
/*!*******************************************************************!*\
  !*** ./app/components/chat/Conversation/SentMessageCell/index.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var SentMessageCell = function SentMessageCell(_ref) {
  var conversation = _ref.conversation;
  return __jsx("div", {
    className: "gx-chat-item gx-flex-row-reverse"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
    className: "gx-size-40 gx-align-self-end",
    src: "https://via.placeholder.com/150x150",
    alt: conversation.name
  }), __jsx("div", {
    className: "gx-bubble-block"
  }, __jsx("div", {
    className: "gx-bubble"
  }, __jsx("div", {
    className: "gx-message"
  }, conversation.message), __jsx("div", {
    className: "gx-time gx-text-muted gx-text-right gx-mt-2"
  }, conversation.sentAt))));
};

_c = SentMessageCell;
/* harmony default export */ __webpack_exports__["default"] = (SentMessageCell);

var _c;

$RefreshReg$(_c, "SentMessageCell");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./app/components/chat/Conversation/index.js":
/*!***************************************************!*\
  !*** ./app/components/chat/Conversation/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ReceivedMessageCell_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReceivedMessageCell/index */ "./app/components/chat/Conversation/ReceivedMessageCell/index.js");
/* harmony import */ var _SentMessageCell_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SentMessageCell/index */ "./app/components/chat/Conversation/SentMessageCell/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Conversation = function Conversation(_ref) {
  var conversationData = _ref.conversationData,
      selectedUser = _ref.selectedUser;
  return __jsx("div", {
    className: "gx-chat-main-content"
  }, conversationData.map(function (conversation, index) {
    return conversation.type === 'sent' ? __jsx(_SentMessageCell_index__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: index,
      conversation: conversation
    }) : __jsx(_ReceivedMessageCell_index__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: index,
      conversation: conversation,
      user: selectedUser
    });
  }));
};

_c = Conversation;
/* harmony default export */ __webpack_exports__["default"] = (Conversation);

var _c;

$RefreshReg$(_c, "Conversation");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./routes/inbuiltApps/Chat/data/chatUsers.js":
/*!***************************************************!*\
  !*** ./routes/inbuiltApps/Chat/data/chatUsers.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony default export */ __webpack_exports__["default"] = ([{
  id: 1,
  name: 'Alex Dolgove',
  thumb: 'https://via.placeholder.com/150x150',
  status: 'away',
  mood: 'English versions from the 1914 translation by H. Rackham',
  lastMessage: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem',
  unreadMessage: '',
  lastMessageTime: '20 min ago',
  recent: false
}, {
  id: 2,
  name: 'Domnic Brown',
  thumb: 'https://via.placeholder.com/640x420',
  status: 'online',
  mood: 'English versions from the 1914 translation by H. Rackham',
  lastMessage: 'It is a long established fact',
  unreadMessage: '4',
  lastMessageTime: 'Yesterday',
  recent: true
}, {
  id: 3,
  name: 'Domnic Harris',
  thumb: 'https://via.placeholder.com/150x150',
  status: 'offline',
  mood: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem',
  lastMessage: 'There are many variations of passages of ',
  unreadMessage: '',
  lastMessageTime: '20/11/17',
  recent: false
}, {
  id: 4,
  name: 'Garry Sobars',
  thumb: 'https://via.placeholder.com/150x150',
  status: 'away',
  mood: 'It is a long established fact',
  lastMessage: 'English versions from the 1914 translation by H. Rackham',
  unreadMessage: '3',
  lastMessageTime: 'Yesterday',
  recent: true
}, {
  id: 5,
  name: 'Jeson Born',
  thumb: 'https://via.placeholder.com/150x150',
  status: 'away',
  mood: 'I must explain to you how all this mistaken idea of denouncing ',
  lastMessage: 'It is a long established fact',
  unreadMessage: '',
  lastMessageTime: 'Monday',
  recent: true
}, {
  id: 6,
  name: 'Jimmy Jo',
  thumb: 'https://via.placeholder.com/150x150',
  status: 'online',
  mood: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested',
  lastMessage: 'All the Lorem Ipsum generators on the',
  unreadMessage: '',
  lastMessageTime: 'Friday',
  recent: false
}, {
  id: 7,
  name: 'John Smith',
  thumb: 'https://via.placeholder.com/150x150',
  status: 'away',
  mood: 'There are many variations of passages of ',
  lastMessage: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested',
  unreadMessage: '',
  lastMessageTime: 'Tuesday',
  recent: true
}, {
  id: 8,
  name: 'Kadir M',
  thumb: 'https://via.placeholder.com/150x150',
  status: 'online',
  mood: 'All the Lorem Ipsum generators on the',
  lastMessage: 'I must explain to you how all this mistaken idea of denouncing ',
  unreadMessage: '5',
  lastMessageTime: 'Monday',
  recent: false
}, {
  id: 9,
  name: 'Jimmy Jon',
  thumb: 'https://via.placeholder.com/150x150',
  status: 'offline',
  mood: 'There are many variations of passages of ',
  lastMessage: 'There are many variations of passages of ',
  unreadMessage: '',
  lastMessageTime: '30 Min ago',
  recent: false
}, {
  id: 10,
  name: 'Stella Johnson',
  thumb: 'https://via.placeholder.com/150x150',
  status: 'offline',
  mood: 'It is a long established fact',
  lastMessage: 'English versions from the 1914 translation by H. Rackham',
  unreadMessage: '',
  lastMessageTime: 'Yesterday',
  recent: false
}, {
  id: 11,
  name: 'Steve Smith',
  thumb: 'https://via.placeholder.com/150x150',
  status: 'online',
  mood: 'The standard chunk of Lorem Ipsum used since the 1500s',
  lastMessage: 'The standard chunk of Lorem Ipsum used since the 1500s',
  unreadMessage: '2',
  lastMessageTime: 'Monday',
  recent: false
}]);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./routes/inbuiltApps/Chat/data/conversationList.js":
/*!**********************************************************!*\
  !*** ./routes/inbuiltApps/Chat/data/conversationList.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony default export */ __webpack_exports__["default"] = ([{
  'id': 1,
  'conversationData': [{
    'type': 'sent',
    'message': 'It is a long established fact',
    'sentAt': '3:08:35 PM'
  }, {
    'type': 'received',
    'message': 'I must explain to you how all this mistaken idea of denouncing ',
    'sentAt': '3:10:28 PM'
  }, {
    'type': 'sent',
    'message': 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested',
    'sentAt': '3:11:25 PM'
  }, {
    'type': 'received',
    'message': 'There are many variations of passages of ',
    'sentAt': '3:12:36 PM'
  }, {
    'type': 'received',
    'message': 'All the Lorem Ipsum generators on the',
    'sentAt': '3:12:45 PM'
  }, {
    'type': 'sent',
    'message': 'There are many variations of passages of ',
    'sentAt': '3:13:04 PM'
  }, {
    'type': 'received',
    'message': 'It is a long established fact',
    'sentAt': '3:13:28 PM'
  }, {
    'type': 'sent',
    'message': 'The standard chunk of Lorem Ipsum used since the 1500s',
    'sentAt': '3:15:45 PM'
  }]
}, {
  'id': 2,
  'conversationData': [{
    'type': 'sent',
    'message': 'English versions from the 1914 translation by H. Rackham',
    'sentAt': '3:03:28 PM'
  }, {
    'type': 'received',
    'message': 'English versions from the 1914 translation by H. Rackham',
    'sentAt': '3:05:47 PM'
  }, {
    'type': 'sent',
    'message': 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem',
    'sentAt': '3:07:52 PM'
  }, {
    'type': 'received',
    'message': 'There are many variations of passages of ',
    'sentAt': '3:12:36 PM'
  }, {
    'type': 'received',
    'message': 'All the Lorem Ipsum generators on the',
    'sentAt': '3:12:45 PM'
  }, {
    'type': 'sent',
    'message': 'There are many variations of passages of ',
    'sentAt': '3:13:04 PM'
  }]
}, {
  'id': 3,
  'conversationData': [{
    'type': 'sent',
    'message': 'It is a long established fact',
    'sentAt': '3:08:35 PM'
  }, {
    'type': 'received',
    'message': 'I must explain to you how all this mistaken idea of denouncing ',
    'sentAt': '3:10:28 PM'
  }, {
    'type': 'sent',
    'message': 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested',
    'sentAt': '3:11:25 PM'
  }, {
    'type': 'received',
    'message': 'There are many variations of passages of ',
    'sentAt': '3:12:36 PM'
  }, {
    'type': 'received',
    'message': 'All the Lorem Ipsum generators on the',
    'sentAt': '3:12:45 PM'
  }, {
    'type': 'sent',
    'message': 'There are many variations of passages of ',
    'sentAt': '3:13:04 PM'
  }, {
    'type': 'received',
    'message': 'It is a long established fact',
    'sentAt': '3:13:28 PM'
  }]
}, {
  'id': 4,
  'conversationData': [{
    'type': 'sent',
    'message': 'English versions from the 1914 translation by H. Rackham',
    'sentAt': '3:03:28 PM'
  }, {
    'type': 'received',
    'message': 'English versions from the 1914 translation by H. Rackham',
    'sentAt': '3:05:47 PM'
  }, {
    'type': 'sent',
    'message': 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested',
    'sentAt': '3:11:25 PM'
  }, {
    'type': 'received',
    'message': 'There are many variations of passages of ',
    'sentAt': '3:12:36 PM'
  }, {
    'type': 'received',
    'message': 'All the Lorem Ipsum generators on the',
    'sentAt': '3:12:45 PM'
  }, {
    'type': 'sent',
    'message': 'There are many variations of passages of ',
    'sentAt': '3:13:04 PM'
  }, {
    'type': 'received',
    'message': 'It is a long established fact',
    'sentAt': '3:13:28 PM'
  }, {
    'type': 'sent',
    'message': 'The standard chunk of Lorem Ipsum used since the 1500s',
    'sentAt': '3:15:45 PM'
  }]
}, {
  'id': 5,
  'conversationData': [{
    'type': 'sent',
    'message': 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem',
    'sentAt': '3:07:52 PM'
  }, {
    'type': 'sent',
    'message': 'It is a long established fact',
    'sentAt': '3:08:35 PM'
  }, {
    'type': 'received',
    'message': 'I must explain to you how all this mistaken idea of denouncing ',
    'sentAt': '3:10:28 PM'
  }, {
    'type': 'sent',
    'message': 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested',
    'sentAt': '3:11:25 PM'
  }, {
    'type': 'received',
    'message': 'There are many variations of passages of ',
    'sentAt': '3:12:36 PM'
  }, {
    'type': 'received',
    'message': 'It is a long established fact',
    'sentAt': '3:13:28 PM'
  }, {
    'type': 'sent',
    'message': 'The standard chunk of Lorem Ipsum used since the 1500s',
    'sentAt': '3:15:45 PM'
  }]
}, {
  'id': 6,
  'conversationData': [{
    'type': 'sent',
    'message': 'It is a long established fact',
    'sentAt': '3:08:35 PM'
  }, {
    'type': 'received',
    'message': 'I must explain to you how all this mistaken idea of denouncing ',
    'sentAt': '3:10:28 PM'
  }, {
    'type': 'sent',
    'message': 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested',
    'sentAt': '3:11:25 PM'
  }, {
    'type': 'received',
    'message': 'There are many variations of passages of ',
    'sentAt': '3:12:36 PM'
  }, {
    'type': 'received',
    'message': 'It is a long established fact',
    'sentAt': '3:13:28 PM'
  }, {
    'type': 'sent',
    'message': 'The standard chunk of Lorem Ipsum used since the 1500s',
    'sentAt': '3:15:45 PM'
  }]
}, {
  'id': 7,
  'conversationData': [{
    'type': 'received',
    'message': 'English versions from the 1914 translation by H. Rackham',
    'sentAt': '3:05:47 PM'
  }, {
    'type': 'sent',
    'message': 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem',
    'sentAt': '3:07:52 PM'
  }, {
    'type': 'sent',
    'message': 'It is a long established fact',
    'sentAt': '3:08:35 PM'
  }, {
    'type': 'received',
    'message': 'There are many variations of passages of ',
    'sentAt': '3:12:36 PM'
  }, {
    'type': 'received',
    'message': 'All the Lorem Ipsum generators on the',
    'sentAt': '3:12:45 PM'
  }, {
    'type': 'sent',
    'message': 'There are many variations of passages of ',
    'sentAt': '3:13:04 PM'
  }, {
    'type': 'received',
    'message': 'It is a long established fact',
    'sentAt': '3:13:28 PM'
  }]
}, {
  'id': 8,
  'conversationData': [{
    'type': 'sent',
    'message': 'English versions from the 1914 translation by H. Rackham',
    'sentAt': '3:03:28 PM'
  }, {
    'type': 'sent',
    'message': 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem',
    'sentAt': '3:07:52 PM'
  }, {
    'type': 'sent',
    'message': 'It is a long established fact',
    'sentAt': '3:08:35 PM'
  }, {
    'type': 'received',
    'message': 'I must explain to you how all this mistaken idea of denouncing ',
    'sentAt': '3:10:28 PM'
  }, {
    'type': 'received',
    'message': 'There are many variations of passages of ',
    'sentAt': '3:12:36 PM'
  }, {
    'type': 'received',
    'message': 'All the Lorem Ipsum generators on the',
    'sentAt': '3:12:45 PM'
  }, {
    'type': 'received',
    'message': 'It is a long established fact',
    'sentAt': '3:13:28 PM'
  }, {
    'type': 'sent',
    'message': 'The standard chunk of Lorem Ipsum used since the 1500s',
    'sentAt': '3:15:45 PM'
  }]
}, {
  'id': 9,
  'conversationData': [{
    'type': 'received',
    'message': 'English versions from the 1914 translation by H. Rackham',
    'sentAt': '3:05:47 PM'
  }, {
    'type': 'sent',
    'message': 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem',
    'sentAt': '3:07:52 PM'
  }, {
    'type': 'received',
    'message': 'I must explain to you how all this mistaken idea of denouncing ',
    'sentAt': '3:10:28 PM'
  }, {
    'type': 'received',
    'message': 'There are many variations of passages of ',
    'sentAt': '3:12:36 PM'
  }, {
    'type': 'sent',
    'message': 'There are many variations of passages of ',
    'sentAt': '3:13:04 PM'
  }, {
    'type': 'received',
    'message': 'It is a long established fact',
    'sentAt': '3:13:28 PM'
  }, {
    'type': 'sent',
    'message': 'The standard chunk of Lorem Ipsum used since the 1500s',
    'sentAt': '3:15:45 PM'
  }]
}, {
  'id': 10,
  'conversationData': [{
    'type': 'sent',
    'message': 'English versions from the 1914 translation by H. Rackham',
    'sentAt': '3:03:28 PM'
  }, {
    'type': 'received',
    'message': 'English versions from the 1914 translation by H. Rackham',
    'sentAt': '3:05:47 PM'
  }, {
    'type': 'sent',
    'message': 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem',
    'sentAt': '3:07:52 PM'
  }, {
    'type': 'sent',
    'message': 'It is a long established fact',
    'sentAt': '3:08:35 PM'
  }, {
    'type': 'received',
    'message': 'I must explain to you how all this mistaken idea of denouncing ',
    'sentAt': '3:10:28 PM'
  }, {
    'type': 'sent',
    'message': 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested',
    'sentAt': '3:11:25 PM'
  }, {
    'type': 'received',
    'message': 'There are many variations of passages of ',
    'sentAt': '3:12:36 PM'
  }, {
    'type': 'received',
    'message': 'All the Lorem Ipsum generators on the',
    'sentAt': '3:12:45 PM'
  }, {
    'type': 'sent',
    'message': 'There are many variations of passages of ',
    'sentAt': '3:13:04 PM'
  }, {
    'type': 'received',
    'message': 'It is a long established fact',
    'sentAt': '3:13:28 PM'
  }, {
    'type': 'sent',
    'message': 'The standard chunk of Lorem Ipsum used since the 1500s',
    'sentAt': '3:15:45 PM'
  }]
}, {
  'id': 11,
  'conversationData': [{
    'type': 'received',
    'message': 'There are many variations of passages of ',
    'sentAt': '3:12:36 PM'
  }, {
    'type': 'received',
    'message': 'All the Lorem Ipsum generators on the',
    'sentAt': '3:12:45 PM'
  }, {
    'type': 'sent',
    'message': 'There are many variations of passages of ',
    'sentAt': '3:13:04 PM'
  }]
}]);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./routes/inbuiltApps/Chat/index.js":
/*!******************************************!*\
  !*** ./routes/inbuiltApps/Chat/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _util_CustomScrollbars__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../util/CustomScrollbars */ "./util/CustomScrollbars.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _app_components_chat_ChatUserList__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../app/components/chat/ChatUserList */ "./app/components/chat/ChatUserList/index.js");
/* harmony import */ var _data_conversationList__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./data/conversationList */ "./routes/inbuiltApps/Chat/data/conversationList.js");
/* harmony import */ var _app_components_chat_Conversation__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../app/components/chat/Conversation */ "./app/components/chat/Conversation/index.js");
/* harmony import */ var _data_chatUsers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./data/chatUsers */ "./routes/inbuiltApps/Chat/data/chatUsers.js");
/* harmony import */ var _app_components_chat_ContactList__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../app/components/chat/ContactList */ "./app/components/chat/ContactList/index.js");
/* harmony import */ var _util_IntlMessages__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../util/IntlMessages */ "./util/IntlMessages.js");
/* harmony import */ var _app_components_SearchBox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../app/components/SearchBox */ "./app/components/SearchBox/index.js");
/* harmony import */ var _app_components_CircularProgress__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../app/components/CircularProgress */ "./app/components/CircularProgress/index.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./index.css */ "./routes/inbuiltApps/Chat/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_19__);







var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }














var TabPane = antd__WEBPACK_IMPORTED_MODULE_8__["Tabs"].TabPane;

var Chat = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Chat, _Component);

  var _super = _createSuper(Chat);

  function Chat() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Chat);

    _this = _super.call(this);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "filterContact", function (userName) {
      if (userName === '') {
        return _data_chatUsers__WEBPACK_IMPORTED_MODULE_14__["default"].filter(function (user) {
          return !user.recent;
        });
      }

      return _data_chatUsers__WEBPACK_IMPORTED_MODULE_14__["default"].filter(function (user) {
        return !user.recent && user.name.toLowerCase().indexOf(userName.toLowerCase()) > -1;
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "filterUsers", function (userName) {
      if (userName === '') {
        return _data_chatUsers__WEBPACK_IMPORTED_MODULE_14__["default"].filter(function (user) {
          return user.recent;
        });
      }

      return _data_chatUsers__WEBPACK_IMPORTED_MODULE_14__["default"].filter(function (user) {
        return user.recent && user.name.toLowerCase().indexOf(userName.toLowerCase()) > -1;
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "Communication", function () {
      var _this$state = _this.state,
          message = _this$state.message,
          selectedUser = _this$state.selectedUser,
          conversation = _this$state.conversation;
      var conversationData = conversation.conversationData;
      return __jsx("div", {
        className: "gx-chat-main"
      }, __jsx("div", {
        className: "gx-chat-main-header"
      }, __jsx("span", {
        className: "gx-d-block gx-d-lg-none gx-chat-btn"
      }, __jsx("i", {
        className: "gx-icon-btn icon icon-chat",
        onClick: _this.onToggleDrawer.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this))
      })), __jsx("div", {
        className: "gx-chat-main-header-info"
      }, __jsx("div", {
        className: "gx-chat-avatar gx-mr-2"
      }, __jsx("div", {
        className: "gx-status-pos"
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Avatar"], {
        src: selectedUser.thumb,
        className: "gx-rounded-circle gx-size-60",
        alt: ""
      }), __jsx("span", {
        className: "gx-status gx-".concat(selectedUser.status)
      }))), __jsx("div", {
        className: "gx-chat-contact-name"
      }, selectedUser.name))), __jsx(_util_CustomScrollbars__WEBPACK_IMPORTED_MODULE_9__["default"], {
        className: "gx-chat-list-scroll"
      }, __jsx(_app_components_chat_Conversation__WEBPACK_IMPORTED_MODULE_13__["default"], {
        conversationData: conversationData,
        selectedUser: selectedUser
      })), __jsx("div", {
        className: "gx-chat-main-footer"
      }, __jsx("div", {
        className: "gx-flex-row gx-align-items-center",
        style: {
          maxHeight: 51
        }
      }, __jsx("div", {
        className: "gx-col"
      }, __jsx("div", {
        className: "gx-form-group"
      }, __jsx("textarea", {
        id: "required",
        className: "gx-border-0 ant-input gx-chat-textarea",
        onKeyUp: _this._handleKeyPress.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this)),
        onChange: _this.updateMessageValue.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this)),
        value: message,
        placeholder: "Type and hit enter to send message"
      }))), __jsx("i", {
        className: "gx-icon-btn icon icon-sent",
        onClick: _this.submitComment.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this))
      }))));
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "AppUsersInfo", function () {
      return __jsx("div", {
        className: "gx-chat-sidenav-main"
      }, __jsx("div", {
        className: "gx-bg-grey-light gx-chat-sidenav-header"
      }, __jsx("div", {
        className: "gx-chat-user-hd gx-mb-0"
      }, __jsx("i", {
        className: "gx-icon-btn icon icon-arrow-left",
        onClick: function onClick() {
          _this.setState({
            userState: 1
          });
        }
      })), __jsx("div", {
        className: "gx-chat-user gx-chat-user-center"
      }, __jsx("div", {
        className: "gx-chat-avatar gx-mx-auto"
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Avatar"], {
        src: "https://via.placeholder.com/150x150",
        className: "gx-size-60",
        alt: "John Doe"
      })), __jsx("div", {
        className: "gx-user-name h4 gx-my-2"
      }, "Robert Johnson"))), __jsx("div", {
        className: "gx-chat-sidenav-content"
      }, __jsx(_util_CustomScrollbars__WEBPACK_IMPORTED_MODULE_9__["default"], {
        className: "gx-chat-sidenav-scroll"
      }, __jsx("div", {
        className: "gx-p-4"
      }, __jsx("form", null, __jsx("div", {
        className: "gx-form-group gx-mt-4"
      }, __jsx("label", null, "Mood"), __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Input"], {
        fullWidth: true,
        id: "exampleTextarea",
        multiline: true,
        rows: 3,
        onKeyUp: _this._handleKeyPress.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this)),
        onChange: _this.updateMessageValue.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this)),
        defaultValue: "it's a status....not your diary...",
        placeholder: "Status",
        margin: "none"
      })))))));
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "ChatUsers", function () {
      return __jsx("div", {
        className: "gx-chat-sidenav-main"
      }, __jsx("div", {
        className: "gx-chat-sidenav-header"
      }, __jsx("div", {
        className: "gx-chat-user-hd"
      }, __jsx("div", {
        className: "gx-chat-avatar gx-mr-3",
        onClick: function onClick() {
          _this.setState({
            userState: 2
          });
        }
      }, __jsx("div", {
        className: "gx-status-pos"
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Avatar"], {
        id: "avatar-button",
        src: "https://via.placeholder.com/150x150",
        className: "gx-size-50",
        alt: ""
      }), __jsx("span", {
        className: "gx-status gx-online"
      }))), __jsx("div", {
        className: "gx-module-user-info gx-flex-column gx-justify-content-center"
      }, __jsx("div", {
        className: "gx-module-title"
      }, __jsx("h5", {
        className: "gx-mb-0"
      }, "Robert Johnson")), __jsx("div", {
        className: "gx-module-user-detail"
      }, __jsx("span", {
        className: "gx-text-grey gx-link"
      }, "robert@example.com")))), __jsx("div", {
        className: "gx-chat-search-wrapper"
      }, __jsx(_app_components_SearchBox__WEBPACK_IMPORTED_MODULE_17__["default"], {
        styleName: "gx-chat-search-bar gx-lt-icon-search-bar-lg",
        placeholder: "Search or start new chat",
        onChange: _this.updateSearchChatUser.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this)),
        value: _this.state.searchChatUser
      }))), __jsx("div", {
        className: "gx-chat-sidenav-content"
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Tabs"], {
        className: "gx-tabs-half",
        defaultActiveKey: "1"
      }, __jsx(TabPane, {
        label: __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_16__["default"], {
          id: "chat.chatUser"
        }),
        tab: __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_16__["default"], {
          id: "chat.chatUser"
        }),
        key: "1"
      }, __jsx(_util_CustomScrollbars__WEBPACK_IMPORTED_MODULE_9__["default"], {
        className: "gx-chat-sidenav-scroll-tab-1"
      }, _this.state.chatUsers.length === 0 ? __jsx("div", {
        className: "gx-p-5"
      }, _this.state.userNotFound) : __jsx(_app_components_chat_ChatUserList__WEBPACK_IMPORTED_MODULE_11__["default"], {
        chatUsers: _this.state.chatUsers,
        selectedSectionId: _this.state.selectedSectionId,
        onSelectUser: _this.onSelectUser.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this))
      }))), __jsx(TabPane, {
        label: __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_16__["default"], {
          id: "chat.contacts"
        }),
        tab: __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_16__["default"], {
          id: "chat.contacts"
        }),
        key: "2"
      }, __jsx(_util_CustomScrollbars__WEBPACK_IMPORTED_MODULE_9__["default"], {
        className: "gx-chat-sidenav-scroll-tab-2"
      }, _this.state.contactList.length === 0 ? __jsx("div", {
        className: "gx-p-5"
      }, _this.state.userNotFound) : __jsx(_app_components_chat_ContactList__WEBPACK_IMPORTED_MODULE_15__["default"], {
        contactList: _this.state.contactList,
        selectedSectionId: _this.state.selectedSectionId,
        onSelectUser: _this.onSelectUser.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this))
      }))))));
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "_handleKeyPress", function (e) {
      if (e.key === 'Enter') {
        _this.submitComment();
      }
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleChange", function (event, value) {
      _this.setState({
        selectedTabIndex: value
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleChangeIndex", function (index) {
      _this.setState({
        selectedTabIndex: index
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "onSelectUser", function (user) {
      _this.setState({
        loader: true,
        selectedSectionId: user.id,
        drawerState: _this.props.drawerState,
        selectedUser: user,
        conversation: _this.state.conversationList.find(function (data) {
          return data.id === user.id;
        })
      });

      setTimeout(function () {
        _this.setState({
          loader: false
        });
      }, 1500);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "showCommunication", function () {
      return __jsx("div", {
        className: "gx-chat-box"
      }, _this.state.selectedUser === null ? __jsx("div", {
        className: "gx-comment-box"
      }, __jsx("div", {
        className: "gx-fs-80"
      }, __jsx("i", {
        className: "icon icon-chat gx-text-muted"
      })), __jsx("h1", {
        className: "gx-text-muted"
      }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_16__["default"], {
        id: "chat.selectUserChat"
      })), __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        className: "gx-d-block gx-d-lg-none",
        type: "primary",
        onClick: _this.onToggleDrawer.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this))
      }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_16__["default"], {
        id: "chat.selectContactChat"
      }))) : _this.Communication());
    });

    _this.state = {
      loader: false,
      userNotFound: 'No user found',
      drawerState: false,
      selectedSectionId: '',
      selectedTabIndex: 1,
      userState: 1,
      searchChatUser: '',
      contactList: _data_chatUsers__WEBPACK_IMPORTED_MODULE_14__["default"].filter(function (user) {
        return !user.recent;
      }),
      selectedUser: null,
      message: '',
      chatUsers: _data_chatUsers__WEBPACK_IMPORTED_MODULE_14__["default"].filter(function (user) {
        return user.recent;
      }),
      conversationList: _data_conversationList__WEBPACK_IMPORTED_MODULE_12__["default"],
      conversation: null
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Chat, [{
    key: "submitComment",
    value: function submitComment() {
      var _this2 = this;

      if (this.state.message !== '') {
        var updatedConversation = this.state.conversation.conversationData.concat({
          'type': 'sent',
          'message': this.state.message,
          'sentAt': moment__WEBPACK_IMPORTED_MODULE_10___default()().format('hh:mm:ss A')
        });
        this.setState({
          conversation: _objectSpread(_objectSpread({}, this.state.conversation), {}, {
            conversationData: updatedConversation
          }),
          message: '',
          conversationList: this.state.conversationList.map(function (conversationData) {
            if (conversationData.id === _this2.state.conversation.id) {
              return _objectSpread(_objectSpread({}, _this2.state.conversation), {}, {
                conversationData: updatedConversation
              });
            } else {
              return conversationData;
            }
          })
        });
      }
    }
  }, {
    key: "updateMessageValue",
    value: function updateMessageValue(evt) {
      this.setState({
        message: evt.target.value
      });
    }
  }, {
    key: "updateSearchChatUser",
    value: function updateSearchChatUser(evt) {
      this.setState({
        searchChatUser: evt.target.value,
        contactList: this.filterContact(evt.target.value),
        chatUsers: this.filterUsers(evt.target.value)
      });
    }
  }, {
    key: "onToggleDrawer",
    value: function onToggleDrawer() {
      this.setState({
        drawerState: !this.state.drawerState
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state2 = this.state,
          loader = _this$state2.loader,
          userState = _this$state2.userState,
          drawerState = _this$state2.drawerState;
      return __jsx("div", {
        className: "gx-main-content"
      }, __jsx("div", {
        className: "gx-app-module gx-chat-module"
      }, __jsx("div", {
        className: "gx-chat-module-box"
      }, __jsx("div", {
        className: "gx-d-block gx-d-lg-none"
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Drawer"], {
        placement: "left",
        closable: false,
        visible: drawerState,
        onClose: this.onToggleDrawer.bind(this)
      }, userState === 1 ? this.ChatUsers() : this.AppUsersInfo())), __jsx("div", {
        className: "gx-chat-sidenav gx-d-none gx-d-lg-flex"
      }, userState === 1 ? this.ChatUsers() : this.AppUsersInfo()), loader ? __jsx("div", {
        className: "gx-loader-view"
      }, __jsx(_app_components_CircularProgress__WEBPACK_IMPORTED_MODULE_18__["default"], null)) : this.showCommunication())));
    }
  }]);

  return Chat;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Chat);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvY2hhdC9DaGF0VXNlckxpc3QvVXNlckNlbGwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL2NoYXQvQ2hhdFVzZXJMaXN0L2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9jaGF0L0NvbnRhY3RMaXN0L1VzZXJDZWxsL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9jaGF0L0NvbnRhY3RMaXN0L2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9jaGF0L0NvbnZlcnNhdGlvbi9SZWNlaXZlZE1lc3NhZ2VDZWxsL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9jaGF0L0NvbnZlcnNhdGlvbi9TZW50TWVzc2FnZUNlbGwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL2NoYXQvQ29udmVyc2F0aW9uL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9yb3V0ZXMvaW5idWlsdEFwcHMvQ2hhdC9kYXRhL2NoYXRVc2Vycy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcm91dGVzL2luYnVpbHRBcHBzL0NoYXQvZGF0YS9jb252ZXJzYXRpb25MaXN0LmpzIiwid2VicGFjazovL19OX0UvLi9yb3V0ZXMvaW5idWlsdEFwcHMvQ2hhdC9pbmRleC5qcyJdLCJuYW1lcyI6WyJVc2VyQ2VsbCIsImNoYXQiLCJzZWxlY3RlZFNlY3Rpb25JZCIsIm9uU2VsZWN0VXNlciIsImlkIiwidGh1bWIiLCJuYW1lIiwic3RhdHVzIiwibGFzdE1lc3NhZ2UiLCJzdWJzdHJpbmciLCJsYXN0TWVzc2FnZVRpbWUiLCJ1bnJlYWRNZXNzYWdlIiwiQ2hhdFVzZXJMaXN0IiwiY2hhdFVzZXJzIiwibWFwIiwiaW5kZXgiLCJ1c2VyIiwibW9vZCIsIkNvbnRhY3RMaXN0IiwiY29udGFjdExpc3QiLCJSZWNlaXZlZE1lc3NhZ2VDZWxsIiwiY29udmVyc2F0aW9uIiwibWVzc2FnZSIsInNlbnRBdCIsIlNlbnRNZXNzYWdlQ2VsbCIsIkNvbnZlcnNhdGlvbiIsImNvbnZlcnNhdGlvbkRhdGEiLCJzZWxlY3RlZFVzZXIiLCJ0eXBlIiwicmVjZW50IiwiVGFiUGFuZSIsIlRhYnMiLCJDaGF0IiwidXNlck5hbWUiLCJ1c2VycyIsImZpbHRlciIsInRvTG93ZXJDYXNlIiwiaW5kZXhPZiIsInN0YXRlIiwib25Ub2dnbGVEcmF3ZXIiLCJiaW5kIiwibWF4SGVpZ2h0IiwiX2hhbmRsZUtleVByZXNzIiwidXBkYXRlTWVzc2FnZVZhbHVlIiwic3VibWl0Q29tbWVudCIsInNldFN0YXRlIiwidXNlclN0YXRlIiwidXBkYXRlU2VhcmNoQ2hhdFVzZXIiLCJzZWFyY2hDaGF0VXNlciIsImxlbmd0aCIsInVzZXJOb3RGb3VuZCIsImUiLCJrZXkiLCJldmVudCIsInZhbHVlIiwic2VsZWN0ZWRUYWJJbmRleCIsImxvYWRlciIsImRyYXdlclN0YXRlIiwicHJvcHMiLCJjb252ZXJzYXRpb25MaXN0IiwiZmluZCIsImRhdGEiLCJzZXRUaW1lb3V0IiwiQ29tbXVuaWNhdGlvbiIsInVwZGF0ZWRDb252ZXJzYXRpb24iLCJjb25jYXQiLCJNb21lbnQiLCJmb3JtYXQiLCJldnQiLCJ0YXJnZXQiLCJmaWx0ZXJDb250YWN0IiwiZmlsdGVyVXNlcnMiLCJDaGF0VXNlcnMiLCJBcHBVc2Vyc0luZm8iLCJzaG93Q29tbXVuaWNhdGlvbiIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUE2QztBQUFBLE1BQTNDQyxJQUEyQyxRQUEzQ0EsSUFBMkM7QUFBQSxNQUFyQ0MsaUJBQXFDLFFBQXJDQSxpQkFBcUM7QUFBQSxNQUFsQkMsWUFBa0IsUUFBbEJBLFlBQWtCO0FBQzVELFNBQ0U7QUFBSyxh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Ozs7O0VBalVnQkMsK0M7O0FBb1VKM0MsbUVBQWYiLCJmaWxlIjoic3RhdGljL2NodW5rcy80LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0F2YXRhcn0gZnJvbSBcImFudGRcIjtcclxuXHJcbmNvbnN0IFVzZXJDZWxsID0gKHtjaGF0LCBzZWxlY3RlZFNlY3Rpb25JZCwgb25TZWxlY3RVc2VyfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17YGd4LWNoYXQtdXNlci1pdGVtICR7c2VsZWN0ZWRTZWN0aW9uSWQgPT09IGNoYXQuaWQgPyAnYWN0aXZlJyA6ICcnfWB9IG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgb25TZWxlY3RVc2VyKGNoYXQpO1xyXG4gICAgfX0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtY2hhdC11c2VyLXJvd1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtY2hhdC1hdmF0YXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtc3RhdHVzLXBvc1wiPlxyXG4gICAgICAgICAgICA8QXZhdGFyIHNyYz17Y2hhdC50aHVtYn0gY2xhc3NOYW1lPVwiZ3gtc2l6ZS00MFwiIGFsdD17Y2hhdC5uYW1lfS8+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YGd4LXN0YXR1cyBneC1zbWFsbCBneC0ke2NoYXQuc3RhdHVzfWB9Lz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWNoYXQtaW5mb1wiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ3gtbmFtZSBoNFwiPntjaGF0Lm5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1jaGF0LWluZm8tZGVzIGd4LXRleHQtdHJ1bmNhdGVcIj57Y2hhdC5sYXN0TWVzc2FnZS5zdWJzdHJpbmcoMCwgMjUpICsgXCIuLi5cIn08L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtbGFzdC1tZXNzYWdlLXRpbWVcIj57Y2hhdC5sYXN0TWVzc2FnZVRpbWV9PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIHtjaGF0LnVucmVhZE1lc3NhZ2UgPiAwID8gPGRpdiBjbGFzc05hbWU9XCJneC1jaGF0LWRhdGVcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtYmctcHJpbWFyeSBneC1yb3VuZGVkLWNpcmNsZSBneC1iYWRnZSBneC10ZXh0LXdoaXRlXCI+e2NoYXQudW5yZWFkTWVzc2FnZX08L2Rpdj5cclxuICAgICAgICA8L2Rpdj4gOiBudWxsfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJDZWxsO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBVc2VyQ2VsbCBmcm9tIFwiLi9Vc2VyQ2VsbC9pbmRleFwiO1xyXG5cclxuY29uc3QgQ2hhdFVzZXJMaXN0ID0gKHtjaGF0VXNlcnMsIHNlbGVjdGVkU2VjdGlvbklkLCBvblNlbGVjdFVzZXJ9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtY2hhdC11c2VyXCI+XHJcbiAgICAgIHtjaGF0VXNlcnMubWFwKChjaGF0LCBpbmRleCkgPT5cclxuICAgICAgICA8VXNlckNlbGwga2V5PXtpbmRleH0gY2hhdD17Y2hhdH0gc2VsZWN0ZWRTZWN0aW9uSWQ9e3NlbGVjdGVkU2VjdGlvbklkfSBvblNlbGVjdFVzZXI9e29uU2VsZWN0VXNlcn0vPlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hhdFVzZXJMaXN0O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7QXZhdGFyfSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuY29uc3QgVXNlckNlbGwgPSAoe29uU2VsZWN0VXNlciwgc2VsZWN0ZWRTZWN0aW9uSWQsIHVzZXJ9KSA9PiB7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17YGd4LWNoYXQtdXNlci1pdGVtICR7c2VsZWN0ZWRTZWN0aW9uSWQgPT09IHVzZXIuaWQgPyAnYWN0aXZlJyA6ICcnfWB9IG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgb25TZWxlY3RVc2VyKHVzZXIpO1xyXG4gICAgfX0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtY2hhdC11c2VyLXJvd1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtY2hhdC1hdmF0YXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtc3RhdHVzLXBvc1wiPlxyXG4gICAgICAgICAgICA8QXZhdGFyIHNyYz17dXNlci50aHVtYn0gY2xhc3NOYW1lPVwiZ3gtc2l6ZS00MFwiIGFsdD1cIkFiYm90dFwiLz5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgZ3gtc3RhdHVzICR7dXNlci5zdGF0dXN9YH0vPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtY2hhdC1jb250YWN0LWNvbFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoNCBneC1uYW1lXCI+e3VzZXIubmFtZX08L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtY2hhdC1pbmZvLWRlcyBneC10ZXh0LXRydW5jYXRlXCI+e3VzZXIubW9vZC5zdWJzdHJpbmcoMCwgNDApICsgXCIuLi5cIn08L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyQ2VsbDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgVXNlckNlbGwgZnJvbSBcIi4vVXNlckNlbGwvaW5kZXhcIjtcclxuXHJcbmNvbnN0IENvbnRhY3RMaXN0ID0gKHtvblNlbGVjdFVzZXIsIHNlbGVjdGVkU2VjdGlvbklkLCBjb250YWN0TGlzdH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJneC1jaGF0LXVzZXJcIj5cclxuICAgICAge2NvbnRhY3RMaXN0Lm1hcCgodXNlciwgaW5kZXgpID0+XHJcbiAgICAgICAgPFVzZXJDZWxsIGtleT17aW5kZXh9IHVzZXI9e3VzZXJ9IHNlbGVjdGVkU2VjdGlvbklkPXtzZWxlY3RlZFNlY3Rpb25JZH0gb25TZWxlY3RVc2VyPXtvblNlbGVjdFVzZXJ9Lz5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRhY3RMaXN0O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7QXZhdGFyfSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuY29uc3QgUmVjZWl2ZWRNZXNzYWdlQ2VsbCA9ICh7Y29udmVyc2F0aW9uLCB1c2VyfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWNoYXQtaXRlbVwiPlxyXG5cclxuICAgICAgPEF2YXRhciBjbGFzc05hbWU9XCJneC1zaXplLTQwIGd4LWFsaWduLXNlbGYtZW5kXCIgc3JjPXt1c2VyLnRodW1ifVxyXG4gICAgICAgICAgICAgIGFsdD1cIlwiLz5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtYnViYmxlLWJsb2NrXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1idWJibGVcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtbWVzc2FnZVwiPntjb252ZXJzYXRpb24ubWVzc2FnZX08L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtdGltZSBneC10ZXh0LW11dGVkIGd4LXRleHQtcmlnaHQgZ3gtbXQtMlwiPntjb252ZXJzYXRpb24uc2VudEF0fTwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWNlaXZlZE1lc3NhZ2VDZWxsO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7QXZhdGFyfSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuY29uc3QgU2VudE1lc3NhZ2VDZWxsID0gKHtjb252ZXJzYXRpb259KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtY2hhdC1pdGVtIGd4LWZsZXgtcm93LXJldmVyc2VcIj5cclxuXHJcbiAgICAgIDxBdmF0YXIgY2xhc3NOYW1lPVwiZ3gtc2l6ZS00MCBneC1hbGlnbi1zZWxmLWVuZFwiIHNyYz1cImh0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8xNTB4MTUwXCJcclxuICAgICAgICAgICAgICBhbHQ9e2NvbnZlcnNhdGlvbi5uYW1lfS8+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWJ1YmJsZS1ibG9ja1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtYnViYmxlXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LW1lc3NhZ2VcIj57Y29udmVyc2F0aW9uLm1lc3NhZ2V9PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LXRpbWUgZ3gtdGV4dC1tdXRlZCBneC10ZXh0LXJpZ2h0IGd4LW10LTJcIj57Y29udmVyc2F0aW9uLnNlbnRBdH08L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VudE1lc3NhZ2VDZWxsO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgUmVjZWl2ZWRNZXNzYWdlQ2VsbCBmcm9tIFwiLi9SZWNlaXZlZE1lc3NhZ2VDZWxsL2luZGV4XCI7XHJcbmltcG9ydCBTZW50TWVzc2FnZUNlbGwgZnJvbSBcIi4vU2VudE1lc3NhZ2VDZWxsL2luZGV4XCI7XHJcblxyXG5jb25zdCBDb252ZXJzYXRpb24gPSAoe2NvbnZlcnNhdGlvbkRhdGEsIHNlbGVjdGVkVXNlcn0pID0+IHtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtY2hhdC1tYWluLWNvbnRlbnRcIj5cclxuICAgICAge2NvbnZlcnNhdGlvbkRhdGEubWFwKChjb252ZXJzYXRpb24sIGluZGV4KSA9PiBjb252ZXJzYXRpb24udHlwZSA9PT0gJ3NlbnQnID9cclxuICAgICAgICA8U2VudE1lc3NhZ2VDZWxsIGtleT17aW5kZXh9IGNvbnZlcnNhdGlvbj17Y29udmVyc2F0aW9ufS8+IDpcclxuICAgICAgICA8UmVjZWl2ZWRNZXNzYWdlQ2VsbCBrZXk9e2luZGV4fSBjb252ZXJzYXRpb249e2NvbnZlcnNhdGlvbn0gdXNlcj17c2VsZWN0ZWRVc2VyfS8+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb252ZXJzYXRpb247XHJcbiIsImV4cG9ydCBkZWZhdWx0IFtcclxuICB7XHJcbiAgICBpZDogMSxcclxuICAgIG5hbWU6ICdBbGV4IERvbGdvdmUnLFxyXG4gICAgdGh1bWI6ICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMTUweDE1MCcsXHJcbiAgICBzdGF0dXM6ICdhd2F5JyxcclxuICAgIG1vb2Q6ICdFbmdsaXNoIHZlcnNpb25zIGZyb20gdGhlIDE5MTQgdHJhbnNsYXRpb24gYnkgSC4gUmFja2hhbScsXHJcbiAgICBsYXN0TWVzc2FnZTogJ1NlZCB1dCBwZXJzcGljaWF0aXMgdW5kZSBvbW5pcyBpc3RlIG5hdHVzIGVycm9yIHNpdCB2b2x1cHRhdGVtJyxcclxuICAgIHVucmVhZE1lc3NhZ2U6ICcnLFxyXG4gICAgbGFzdE1lc3NhZ2VUaW1lOiAnMjAgbWluIGFnbycsXHJcbiAgICByZWNlbnQ6IGZhbHNlXHJcbiAgfSwge1xyXG4gICAgaWQ6IDIsXHJcbiAgICBuYW1lOiAnRG9tbmljIEJyb3duJyxcclxuICAgIHRodW1iOiAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzY0MHg0MjAnLFxyXG4gICAgc3RhdHVzOiAnb25saW5lJyxcclxuICAgIG1vb2Q6ICdFbmdsaXNoIHZlcnNpb25zIGZyb20gdGhlIDE5MTQgdHJhbnNsYXRpb24gYnkgSC4gUmFja2hhbScsXHJcbiAgICBsYXN0TWVzc2FnZTogJ0l0IGlzIGEgbG9uZyBlc3RhYmxpc2hlZCBmYWN0JyxcclxuICAgIHVucmVhZE1lc3NhZ2U6ICc0JyxcclxuICAgIGxhc3RNZXNzYWdlVGltZTogJ1llc3RlcmRheScsXHJcbiAgICByZWNlbnQ6IHRydWVcclxuICB9LCB7XHJcbiAgICBpZDogMyxcclxuICAgIG5hbWU6ICdEb21uaWMgSGFycmlzJyxcclxuICAgIHRodW1iOiAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzE1MHgxNTAnLFxyXG4gICAgc3RhdHVzOiAnb2ZmbGluZScsXHJcbiAgICBtb29kOiAnU2VkIHV0IHBlcnNwaWNpYXRpcyB1bmRlIG9tbmlzIGlzdGUgbmF0dXMgZXJyb3Igc2l0IHZvbHVwdGF0ZW0nLFxyXG4gICAgbGFzdE1lc3NhZ2U6ICdUaGVyZSBhcmUgbWFueSB2YXJpYXRpb25zIG9mIHBhc3NhZ2VzIG9mICcsXHJcbiAgICB1bnJlYWRNZXNzYWdlOiAnJyxcclxuICAgIGxhc3RNZXNzYWdlVGltZTogJzIwLzExLzE3JyxcclxuICAgIHJlY2VudDogZmFsc2VcclxuICB9LCB7XHJcbiAgICBpZDogNCxcclxuICAgIG5hbWU6ICdHYXJyeSBTb2JhcnMnLFxyXG4gICAgdGh1bWI6ICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMTUweDE1MCcsXHJcbiAgICBzdGF0dXM6ICdhd2F5JyxcclxuICAgIG1vb2Q6ICdJdCBpcyBhIGxvbmcgZXN0YWJsaXNoZWQgZmFjdCcsXHJcbiAgICBsYXN0TWVzc2FnZTogJ0VuZ2xpc2ggdmVyc2lvbnMgZnJvbSB0aGUgMTkxNCB0cmFuc2xhdGlvbiBieSBILiBSYWNraGFtJyxcclxuICAgIHVucmVhZE1lc3NhZ2U6ICczJyxcclxuICAgIGxhc3RNZXNzYWdlVGltZTogJ1llc3RlcmRheScsXHJcbiAgICByZWNlbnQ6IHRydWVcclxuICB9LCB7XHJcbiAgICBpZDogNSxcclxuICAgIG5hbWU6ICdKZXNvbiBCb3JuJyxcclxuICAgIHRodW1iOiAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzE1MHgxNTAnLFxyXG4gICAgc3RhdHVzOiAnYXdheScsXHJcbiAgICBtb29kOiAnSSBtdXN0IGV4cGxhaW4gdG8geW91IGhvdyBhbGwgdGhpcyBtaXN0YWtlbiBpZGVhIG9mIGRlbm91bmNpbmcgJyxcclxuICAgIGxhc3RNZXNzYWdlOiAnSXQgaXMgYSBsb25nIGVzdGFibGlzaGVkIGZhY3QnLFxyXG4gICAgdW5yZWFkTWVzc2FnZTogJycsXHJcbiAgICBsYXN0TWVzc2FnZVRpbWU6ICdNb25kYXknLFxyXG4gICAgcmVjZW50OiB0cnVlXHJcbiAgfSwge1xyXG4gICAgaWQ6IDYsXHJcbiAgICBuYW1lOiAnSmltbXkgSm8nLFxyXG4gICAgdGh1bWI6ICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMTUweDE1MCcsXHJcbiAgICBzdGF0dXM6ICdvbmxpbmUnLFxyXG4gICAgbW9vZDogJ1RoZSBzdGFuZGFyZCBjaHVuayBvZiBMb3JlbSBJcHN1bSB1c2VkIHNpbmNlIHRoZSAxNTAwcyBpcyByZXByb2R1Y2VkIGJlbG93IGZvciB0aG9zZSBpbnRlcmVzdGVkJyxcclxuICAgIGxhc3RNZXNzYWdlOiAnQWxsIHRoZSBMb3JlbSBJcHN1bSBnZW5lcmF0b3JzIG9uIHRoZScsXHJcbiAgICB1bnJlYWRNZXNzYWdlOiAnJyxcclxuICAgIGxhc3RNZXNzYWdlVGltZTogJ0ZyaWRheScsXHJcbiAgICByZWNlbnQ6IGZhbHNlXHJcbiAgfSwge1xyXG4gICAgaWQ6IDcsXHJcbiAgICBuYW1lOiAnSm9obiBTbWl0aCcsXHJcbiAgICB0aHVtYjogJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8xNTB4MTUwJyxcclxuICAgIHN0YXR1czogJ2F3YXknLFxyXG4gICAgbW9vZDogJ1RoZXJlIGFyZSBtYW55IHZhcmlhdGlvbnMgb2YgcGFzc2FnZXMgb2YgJyxcclxuICAgIGxhc3RNZXNzYWdlOiAnVGhlIHN0YW5kYXJkIGNodW5rIG9mIExvcmVtIElwc3VtIHVzZWQgc2luY2UgdGhlIDE1MDBzIGlzIHJlcHJvZHVjZWQgYmVsb3cgZm9yIHRob3NlIGludGVyZXN0ZWQnLFxyXG4gICAgdW5yZWFkTWVzc2FnZTogJycsXHJcbiAgICBsYXN0TWVzc2FnZVRpbWU6ICdUdWVzZGF5JyxcclxuICAgIHJlY2VudDogdHJ1ZVxyXG4gIH0sIHtcclxuICAgIGlkOiA4LFxyXG4gICAgbmFtZTogJ0thZGlyIE0nLFxyXG4gICAgdGh1bWI6ICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMTUweDE1MCcsXHJcbiAgICBzdGF0dXM6ICdvbmxpbmUnLFxyXG4gICAgbW9vZDogJ0FsbCB0aGUgTG9yZW0gSXBzdW0gZ2VuZXJhdG9ycyBvbiB0aGUnLFxyXG4gICAgbGFzdE1lc3NhZ2U6ICdJIG11c3QgZXhwbGFpbiB0byB5b3UgaG93IGFsbCB0aGlzIG1pc3Rha2VuIGlkZWEgb2YgZGVub3VuY2luZyAnLFxyXG4gICAgdW5yZWFkTWVzc2FnZTogJzUnLFxyXG4gICAgbGFzdE1lc3NhZ2VUaW1lOiAnTW9uZGF5JyxcclxuICAgIHJlY2VudDogZmFsc2VcclxuICB9LCB7XHJcbiAgICBpZDogOSxcclxuICAgIG5hbWU6ICdKaW1teSBKb24nLFxyXG4gICAgdGh1bWI6ICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMTUweDE1MCcsXHJcbiAgICBzdGF0dXM6ICdvZmZsaW5lJyxcclxuICAgIG1vb2Q6ICdUaGVyZSBhcmUgbWFueSB2YXJpYXRpb25zIG9mIHBhc3NhZ2VzIG9mICcsXHJcbiAgICBsYXN0TWVzc2FnZTogJ1RoZXJlIGFyZSBtYW55IHZhcmlhdGlvbnMgb2YgcGFzc2FnZXMgb2YgJyxcclxuICAgIHVucmVhZE1lc3NhZ2U6ICcnLFxyXG4gICAgbGFzdE1lc3NhZ2VUaW1lOiAnMzAgTWluIGFnbycsXHJcbiAgICByZWNlbnQ6IGZhbHNlXHJcbiAgfSwge1xyXG4gICAgaWQ6IDEwLFxyXG4gICAgbmFtZTogJ1N0ZWxsYSBKb2huc29uJyxcclxuICAgIHRodW1iOiAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzE1MHgxNTAnLFxyXG4gICAgc3RhdHVzOiAnb2ZmbGluZScsXHJcbiAgICBtb29kOiAnSXQgaXMgYSBsb25nIGVzdGFibGlzaGVkIGZhY3QnLFxyXG4gICAgbGFzdE1lc3NhZ2U6ICdFbmdsaXNoIHZlcnNpb25zIGZyb20gdGhlIDE5MTQgdHJhbnNsYXRpb24gYnkgSC4gUmFja2hhbScsXHJcbiAgICB1bnJlYWRNZXNzYWdlOiAnJyxcclxuICAgIGxhc3RNZXNzYWdlVGltZTogJ1llc3RlcmRheScsXHJcbiAgICByZWNlbnQ6IGZhbHNlXHJcbiAgfSwge1xyXG4gICAgaWQ6IDExLFxyXG4gICAgbmFtZTogJ1N0ZXZlIFNtaXRoJyxcclxuICAgIHRodW1iOiAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzE1MHgxNTAnLFxyXG4gICAgc3RhdHVzOiAnb25saW5lJyxcclxuICAgIG1vb2Q6ICdUaGUgc3RhbmRhcmQgY2h1bmsgb2YgTG9yZW0gSXBzdW0gdXNlZCBzaW5jZSB0aGUgMTUwMHMnLFxyXG4gICAgbGFzdE1lc3NhZ2U6ICdUaGUgc3RhbmRhcmQgY2h1bmsgb2YgTG9yZW0gSXBzdW0gdXNlZCBzaW5jZSB0aGUgMTUwMHMnLFxyXG4gICAgdW5yZWFkTWVzc2FnZTogJzInLFxyXG4gICAgbGFzdE1lc3NhZ2VUaW1lOiAnTW9uZGF5JyxcclxuICAgIHJlY2VudDogZmFsc2VcclxuICB9XHJcbl1cclxuIiwiZXhwb3J0IGRlZmF1bHQgW1xyXG4gIHtcclxuICAgICdpZCc6IDEsXHJcbiAgICAnY29udmVyc2F0aW9uRGF0YSc6IFtcclxuICAgICAge1xyXG4gICAgICAgICd0eXBlJzogJ3NlbnQnLFxyXG4gICAgICAgICdtZXNzYWdlJzogJ0l0IGlzIGEgbG9uZyBlc3RhYmxpc2hlZCBmYWN0JyxcclxuICAgICAgICAnc2VudEF0JzogJzM6MDg6MzUgUE0nLFxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgJ3R5cGUnOiAncmVjZWl2ZWQnLFxyXG4gICAgICAgICdtZXNzYWdlJzogJ0kgbXVzdCBleHBsYWluIHRvIHlvdSBob3cgYWxsIHRoaXMgbWlzdGFrZW4gaWRlYSBvZiBkZW5vdW5jaW5nICcsXHJcbiAgICAgICAgJ3NlbnRBdCc6ICczOjEwOjI4IFBNJyxcclxuICAgICAgfSwge1xyXG4gICAgICAgICd0eXBlJzogJ3NlbnQnLFxyXG4gICAgICAgICdtZXNzYWdlJzogJ1RoZSBzdGFuZGFyZCBjaHVuayBvZiBMb3JlbSBJcHN1bSB1c2VkIHNpbmNlIHRoZSAxNTAwcyBpcyByZXByb2R1Y2VkIGJlbG93IGZvciB0aG9zZSBpbnRlcmVzdGVkJyxcclxuICAgICAgICAnc2VudEF0JzogJzM6MTE6MjUgUE0nLFxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgJ3R5cGUnOiAncmVjZWl2ZWQnLFxyXG4gICAgICAgICdtZXNzYWdlJzogJ1RoZXJlIGFyZSBtYW55IHZhcmlhdGlvbnMgb2YgcGFzc2FnZXMgb2YgJyxcclxuICAgICAgICAnc2VudEF0JzogJzM6MTI6MzYgUE0nLFxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgJ3R5cGUnOiAncmVjZWl2ZWQnLFxyXG4gICAgICAgICdtZXNzYWdlJzogJ0FsbCB0aGUgTG9yZW0gSXBzdW0gZ2VuZXJhdG9ycyBvbiB0aGUnLFxyXG4gICAgICAgICdzZW50QXQnOiAnMzoxMjo0NSBQTScsXHJcbiAgICAgIH0sIHtcclxuICAgICAgICAndHlwZSc6ICdzZW50JyxcclxuICAgICAgICAnbWVzc2FnZSc6ICdUaGVyZSBhcmUgbWFueSB2YXJpYXRpb25zIG9mIHBhc3NhZ2VzIG9mICcsXHJcbiAgICAgICAgJ3NlbnRBdCc6ICczOjEzOjA0IFBNJyxcclxuICAgICAgfSwge1xyXG4gICAgICAgICd0eXBlJzogJ3JlY2VpdmVkJyxcclxuICAgICAgICAnbWVzc2FnZSc6ICdJdCBpcyBhIGxvbmcgZXN0YWJsaXNoZWQgZmFjdCcsXHJcbiAgICAgICAgJ3NlbnRBdCc6ICczOjEzOjI4IFBNJyxcclxuICAgICAgfSwge1xyXG4gICAgICAgICd0eXBlJzogJ3NlbnQnLFxyXG4gICAgICAgICdtZXNzYWdlJzogJ1RoZSBzdGFuZGFyZCBjaHVuayBvZiBMb3JlbSBJcHN1bSB1c2VkIHNpbmNlIHRoZSAxNTAwcycsXHJcbiAgICAgICAgJ3NlbnRBdCc6ICczOjE1OjQ1IFBNJyxcclxuICAgICAgfVxyXG4gICAgXVxyXG4gIH0sXHJcbiAge1xyXG4gICAgJ2lkJzogMixcclxuICAgICdjb252ZXJzYXRpb25EYXRhJzogW1xyXG4gICAgICB7XHJcbiAgICAgICAgJ3R5cGUnOiAnc2VudCcsXHJcbiAgICAgICAgJ21lc3NhZ2UnOiAnRW5nbGlzaCB2ZXJzaW9ucyBmcm9tIHRoZSAxOTE0IHRyYW5zbGF0aW9uIGJ5IEguIFJhY2toYW0nLFxyXG4gICAgICAgICdzZW50QXQnOiAnMzowMzoyOCBQTScsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICAndHlwZSc6ICdyZWNlaXZlZCcsXHJcbiAgICAgICAgJ21lc3NhZ2UnOiAnRW5nbGlzaCB2ZXJzaW9ucyBmcm9tIHRoZSAxOTE0IHRyYW5zbGF0aW9uIGJ5IEguIFJhY2toYW0nLFxyXG4gICAgICAgICdzZW50QXQnOiAnMzowNTo0NyBQTScsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICAndHlwZSc6ICdzZW50JyxcclxuICAgICAgICAnbWVzc2FnZSc6ICdTZWQgdXQgcGVyc3BpY2lhdGlzIHVuZGUgb21uaXMgaXN0ZSBuYXR1cyBlcnJvciBzaXQgdm9sdXB0YXRlbScsXHJcbiAgICAgICAgJ3NlbnRBdCc6ICczOjA3OjUyIFBNJyxcclxuICAgICAgfSwge1xyXG4gICAgICAgICd0eXBlJzogJ3JlY2VpdmVkJyxcclxuICAgICAgICAnbWVzc2FnZSc6ICdUaGVyZSBhcmUgbWFueSB2YXJpYXRpb25zIG9mIHBhc3NhZ2VzIG9mICcsXHJcbiAgICAgICAgJ3NlbnRBdCc6ICczOjEyOjM2IFBNJyxcclxuICAgICAgfSwge1xyXG4gICAgICAgICd0eXBlJzogJ3JlY2VpdmVkJyxcclxuICAgICAgICAnbWVzc2FnZSc6ICdBbGwgdGhlIExvcmVtIElwc3VtIGdlbmVyYXRvcnMgb24gdGhlJyxcclxuICAgICAgICAnc2VudEF0JzogJzM6MTI6NDUgUE0nLFxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgJ3R5cGUnOiAnc2VudCcsXHJcbiAgICAgICAgJ21lc3NhZ2UnOiAnVGhlcmUgYXJlIG1hbnkgdmFyaWF0aW9ucyBvZiBwYXNzYWdlcyBvZiAnLFxyXG4gICAgICAgICdzZW50QXQnOiAnMzoxMzowNCBQTScsXHJcbiAgICAgIH0sXHJcbiAgICBdXHJcbiAgfSxcclxuICB7XHJcbiAgICAnaWQnOiAzLFxyXG4gICAgJ2NvbnZlcnNhdGlvbkRhdGEnOiBbXHJcbiAgICAgIHtcclxuICAgICAgICAndHlwZSc6ICdzZW50JyxcclxuICAgICAgICAnbWVzc2FnZSc6ICdJdCBpcyBhIGxvbmcgZXN0YWJsaXNoZWQgZmFjdCcsXHJcbiAgICAgICAgJ3NlbnRBdCc6ICczOjA4OjM1IFBNJyxcclxuICAgICAgfSwge1xyXG4gICAgICAgICd0eXBlJzogJ3JlY2VpdmVkJyxcclxuICAgICAgICAnbWVzc2FnZSc6ICdJIG11c3QgZXhwbGFpbiB0byB5b3UgaG93IGFsbCB0aGlzIG1pc3Rha2VuIGlkZWEgb2YgZGVub3VuY2luZyAnLFxyXG4gICAgICAgICdzZW50QXQnOiAnMzoxMDoyOCBQTScsXHJcbiAgICAgIH0sIHtcclxuICAgICAgICAndHlwZSc6ICdzZW50JyxcclxuICAgICAgICAnbWVzc2FnZSc6ICdUaGUgc3RhbmRhcmQgY2h1bmsgb2YgTG9yZW0gSXBzdW0gdXNlZCBzaW5jZSB0aGUgMTUwMHMgaXMgcmVwcm9kdWNlZCBiZWxvdyBmb3IgdGhvc2UgaW50ZXJlc3RlZCcsXHJcbiAgICAgICAgJ3NlbnRBdCc6ICczOjExOjI1IFBNJyxcclxuICAgICAgfSwge1xyXG4gICAgICAgICd0eXBlJzogJ3JlY2VpdmVkJyxcclxuICAgICAgICAnbWVzc2FnZSc6ICdUaGVyZSBhcmUgbWFueSB2YXJpYXRpb25zIG9mIHBhc3NhZ2VzIG9mICcsXHJcbiAgICAgICAgJ3NlbnRBdCc6ICczOjEyOjM2IFBNJyxcclxuICAgICAgfSwge1xyXG4gICAgICAgICd0eXBlJzogJ3JlY2VpdmVkJyxcclxuICAgICAgICAnbWVzc2FnZSc6ICdBbGwgdGhlIExvcmVtIElwc3VtIGdlbmVyYXRvcnMgb24gdGhlJyxcclxuICAgICAgICAnc2VudEF0JzogJzM6MTI6NDUgUE0nLFxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgJ3R5cGUnOiAnc2VudCcsXHJcbiAgICAgICAgJ21lc3NhZ2UnOiAnVGhlcmUgYXJlIG1hbnkgdmFyaWF0aW9ucyBvZiBwYXNzYWdlcyBvZiAnLFxyXG4gICAgICAgICdzZW50QXQnOiAnMzoxMzowNCBQTScsXHJcbiAgICAgIH0sIHtcclxuICAgICAgICAndHlwZSc6ICdyZWNlaXZlZCcsXHJcbiAgICAgICAgJ21lc3NhZ2UnOiAnSXQgaXMgYSBsb25nIGVzdGFibGlzaGVkIGZhY3QnLFxyXG4gICAgICAgICdzZW50QXQnOiAnMzoxMzoyOCBQTScsXHJcbiAgICAgIH0sXHJcbiAgICBdXHJcbiAgfSxcclxuICB7XHJcbiAgICAnaWQnOiA0LFxyXG4gICAgJ2NvbnZlcnNhdGlvbkRhdGEnOiBbXHJcbiAgICAgIHtcclxuICAgICAgICAndHlwZSc6ICdzZW50JyxcclxuICAgICAgICAnbWVzc2FnZSc6ICdFbmdsaXNoIHZlcnNpb25zIGZyb20gdGhlIDE5MTQgdHJhbnNsYXRpb24gYnkgSC4gUmFja2hhbScsXHJcbiAgICAgICAgJ3NlbnRBdCc6ICczOjAzOjI4IFBNJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgICd0eXBlJzogJ3JlY2VpdmVkJyxcclxuICAgICAgICAnbWVzc2FnZSc6ICdFbmdsaXNoIHZlcnNpb25zIGZyb20gdGhlIDE5MTQgdHJhbnNsYXRpb24gYnkgSC4gUmFja2hhbScsXHJcbiAgICAgICAgJ3NlbnRBdCc6ICczOjA1OjQ3IFBNJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgICd0eXBlJzogJ3NlbnQnLFxyXG4gICAgICAgICdtZXNzYWdlJzogJ1RoZSBzdGFuZGFyZCBjaHVuayBvZiBMb3JlbSBJcHN1bSB1c2VkIHNpbmNlIHRoZSAxNTAwcyBpcyByZXByb2R1Y2VkIGJlbG93IGZvciB0aG9zZSBpbnRlcmVzdGVkJyxcclxuICAgICAgICAnc2VudEF0JzogJzM6MTE6MjUgUE0nLFxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgJ3R5cGUnOiAncmVjZWl2ZWQnLFxyXG4gICAgICAgICdtZXNzYWdlJzogJ1RoZXJlIGFyZSBtYW55IHZhcmlhdGlvbnMgb2YgcGFzc2FnZXMgb2YgJyxcclxuICAgICAgICAnc2VudEF0JzogJzM6MTI6MzYgUE0nLFxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgJ3R5cGUnOiAncmVjZWl2ZWQnLFxyXG4gICAgICAgICdtZXNzYWdlJzogJ0FsbCB0aGUgTG9yZW0gSXBzdW0gZ2VuZXJhdG9ycyBvbiB0aGUnLFxyXG4gICAgICAgICdzZW50QXQnOiAnMzoxMjo0NSBQTScsXHJcbiAgICAgIH0sIHtcclxuICAgICAgICAndHlwZSc6ICdzZW50JyxcclxuICAgICAgICAnbWVzc2FnZSc6ICdUaGVyZSBhcmUgbWFueSB2YXJpYXRpb25zIG9mIHBhc3NhZ2VzIG9mICcsXHJcbiAgICAgICAgJ3NlbnRBdCc6ICczOjEzOjA0IFBNJyxcclxuICAgICAgfSwge1xyXG4gICAgICAgICd0eXBlJzogJ3JlY2VpdmVkJyxcclxuICAgICAgICAnbWVzc2FnZSc6ICdJdCBpcyBhIGxvbmcgZXN0YWJsaXNoZWQgZmFjdCcsXHJcbiAgICAgICAgJ3NlbnRBdCc6ICczOjEzOjI4IFBNJyxcclxuICAgICAgfSwge1xyXG4gICAgICAgICd0eXBlJzogJ3NlbnQnLFxyXG4gICAgICAgICdtZXNzYWdlJzogJ1RoZSBzdGFuZGFyZCBjaHVuayBvZiBMb3JlbSBJcHN1bSB1c2VkIHNpbmNlIHRoZSAxNTAwcycsXHJcbiAgICAgICAgJ3NlbnRBdCc6ICczOjE1OjQ1IFBNJyxcclxuICAgICAgfVxyXG4gICAgXVxyXG4gIH0sIHtcclxuICAgICdpZCc6IDUsXHJcbiAgICAnY29udmVyc2F0aW9uRGF0YSc6IFtcclxuICAgICAge1xyXG4gICAgICAgICd0eXBlJzogJ3NlbnQnLFxyXG4gICAgICAgICdtZXNzYWdlJzogJ1NlZCB1dCBwZXJzcGljaWF0aXMgdW5kZSBvbW5pcyBpc3RlIG5hdHVzIGVycm9yIHNpdCB2b2x1cHRhdGVtJyxcclxuICAgICAgICAnc2VudEF0JzogJzM6MDc6NTIgUE0nLFxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgJ3R5cGUnOiAnc2VudCcsXHJcbiAgICAgICAgJ21lc3NhZ2UnOiAnSXQgaXMgYSBsb25nIGVzdGFibGlzaGVkIGZhY3QnLFxyXG4gICAgICAgICdzZW50QXQnOiAnMzowODozNSBQTScsXHJcbiAgICAgIH0sIHtcclxuICAgICAgICAndHlwZSc6ICdyZWNlaXZlZCcsXHJcbiAgICAgICAgJ21lc3NhZ2UnOiAnSSBtdXN0IGV4cGxhaW4gdG8geW91IGhvdyBhbGwgdGhpcyBtaXN0YWtlbiBpZGVhIG9mIGRlbm91bmNpbmcgJyxcclxuICAgICAgICAnc2VudEF0JzogJzM6MTA6MjggUE0nLFxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgJ3R5cGUnOiAnc2VudCcsXHJcbiAgICAgICAgJ21lc3NhZ2UnOiAnVGhlIHN0YW5kYXJkIGNodW5rIG9mIExvcmVtIElwc3VtIHVzZWQgc2luY2UgdGhlIDE1MDBzIGlzIHJlcHJvZHVjZWQgYmVsb3cgZm9yIHRob3NlIGludGVyZXN0ZWQnLFxyXG4gICAgICAgICdzZW50QXQnOiAnMzoxMToyNSBQTScsXHJcbiAgICAgIH0sIHtcclxuICAgICAgICAndHlwZSc6ICdyZWNlaXZlZCcsXHJcbiAgICAgICAgJ21lc3NhZ2UnOiAnVGhlcmUgYXJlIG1hbnkgdmFyaWF0aW9ucyBvZiBwYXNzYWdlcyBvZiAnLFxyXG4gICAgICAgICdzZW50QXQnOiAnMzoxMjozNiBQTScsXHJcbiAgICAgIH0sIHtcclxuICAgICAgICAndHlwZSc6ICdyZWNlaXZlZCcsXHJcbiAgICAgICAgJ21lc3NhZ2UnOiAnSXQgaXMgYSBsb25nIGVzdGFibGlzaGVkIGZhY3QnLFxyXG4gICAgICAgICdzZW50QXQnOiAnMzoxMzoyOCBQTScsXHJcbiAgICAgIH0sIHtcclxuICAgICAgICAndHlwZSc6ICdzZW50JyxcclxuICAgICAgICAnbWVzc2FnZSc6ICdUaGUgc3RhbmRhcmQgY2h1bmsgb2YgTG9yZW0gSXBzdW0gdXNlZCBzaW5jZSB0aGUgMTUwMHMnLFxyXG4gICAgICAgICdzZW50QXQnOiAnMzoxNTo0NSBQTScsXHJcbiAgICAgIH1cclxuICAgIF1cclxuICB9LFxyXG4gIHtcclxuICAgICdpZCc6IDYsXHJcbiAgICAnY29udmVyc2F0aW9uRGF0YSc6IFtcclxuICAgICAge1xyXG4gICAgICAgICd0eXBlJzogJ3NlbnQnLFxyXG4gICAgICAgICdtZXNzYWdlJzogJ0l0IGlzIGEgbG9uZyBlc3RhYmxpc2hlZCBmYWN0JyxcclxuICAgICAgICAnc2VudEF0JzogJzM6MDg6MzUgUE0nLFxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgJ3R5cGUnOiAncmVjZWl2ZWQnLFxyXG4gICAgICAgICdtZXNzYWdlJzogJ0kgbXVzdCBleHBsYWluIHRvIHlvdSBob3cgYWxsIHRoaXMgbWlzdGFrZW4gaWRlYSBvZiBkZW5vdW5jaW5nICcsXHJcbiAgICAgICAgJ3NlbnRBdCc6ICczOjEwOjI4IFBNJyxcclxuICAgICAgfSwge1xyXG4gICAgICAgICd0eXBlJzogJ3NlbnQnLFxyXG4gICAgICAgICdtZXNzYWdlJzogJ1RoZSBzdGFuZGFyZCBjaHVuayBvZiBMb3JlbSBJcHN1bSB1c2VkIHNpbmNlIHRoZSAxNTAwcyBpcyByZXByb2R1Y2VkIGJlbG93IGZvciB0aG9zZSBpbnRlcmVzdGVkJyxcclxuICAgICAgICAnc2VudEF0JzogJzM6MTE6MjUgUE0nLFxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgJ3R5cGUnOiAncmVjZWl2ZWQnLFxyXG4gICAgICAgICdtZXNzYWdlJzogJ1RoZXJlIGFyZSBtYW55IHZhcmlhdGlvbnMgb2YgcGFzc2FnZXMgb2YgJyxcclxuICAgICAgICAnc2VudEF0JzogJzM6MTI6MzYgUE0nLFxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgJ3R5cGUnOiAncmVjZWl2ZWQnLFxyXG4gICAgICAgICdtZXNzYWdlJzogJ0l0IGlzIGEgbG9uZyBlc3RhYmxpc2hlZCBmYWN0JyxcclxuICAgICAgICAnc2VudEF0JzogJzM6MTM6MjggUE0nLFxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgJ3R5cGUnOiAnc2VudCcsXHJcbiAgICAgICAgJ21lc3NhZ2UnOiAnVGhlIHN0YW5kYXJkIGNodW5rIG9mIExvcmVtIElwc3VtIHVzZWQgc2luY2UgdGhlIDE1MDBzJyxcclxuICAgICAgICAnc2VudEF0JzogJzM6MTU6NDUgUE0nLFxyXG4gICAgICB9XHJcbiAgICBdXHJcbiAgfSwge1xyXG4gICAgJ2lkJzogNyxcclxuICAgICdjb252ZXJzYXRpb25EYXRhJzogW1xyXG5cclxuICAgICAge1xyXG4gICAgICAgICd0eXBlJzogJ3JlY2VpdmVkJyxcclxuICAgICAgICAnbWVzc2FnZSc6ICdFbmdsaXNoIHZlcnNpb25zIGZyb20gdGhlIDE5MTQgdHJhbnNsYXRpb24gYnkgSC4gUmFja2hhbScsXHJcbiAgICAgICAgJ3NlbnRBdCc6ICczOjA1OjQ3IFBNJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgICd0eXBlJzogJ3NlbnQnLFxyXG4gICAgICAgICdtZXNzYWdlJzogJ1NlZCB1dCBwZXJzcGljaWF0aXMgdW5kZSBvbW5pcyBpc3RlIG5hdHVzIGVycm9yIHNpdCB2b2x1cHRhdGVtJyxcclxuICAgICAgICAnc2VudEF0JzogJzM6MDc6NTIgUE0nLFxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgJ3R5cGUnOiAnc2VudCcsXHJcbiAgICAgICAgJ21lc3NhZ2UnOiAnSXQgaXMgYSBsb25nIGVzdGFibGlzaGVkIGZhY3QnLFxyXG4gICAgICAgICdzZW50QXQnOiAnMzowODozNSBQTScsXHJcbiAgICAgIH0sIHtcclxuICAgICAgICAndHlwZSc6ICdyZWNlaXZlZCcsXHJcbiAgICAgICAgJ21lc3NhZ2UnOiAnVGhlcmUgYXJlIG1hbnkgdmFyaWF0aW9ucyBvZiBwYXNzYWdlcyBvZiAnLFxyXG4gICAgICAgICdzZW50QXQnOiAnMzoxMjozNiBQTScsXHJcbiAgICAgIH0sIHtcclxuICAgICAgICAndHlwZSc6ICdyZWNlaXZlZCcsXHJcbiAgICAgICAgJ21lc3NhZ2UnOiAnQWxsIHRoZSBMb3JlbSBJcHN1bSBnZW5lcmF0b3JzIG9uIHRoZScsXHJcbiAgICAgICAgJ3NlbnRBdCc6ICczOjEyOjQ1IFBNJyxcclxuICAgICAgfSwge1xyXG4gICAgICAgICd0eXBlJzogJ3NlbnQnLFxyXG4gICAgICAgICdtZXNzYWdlJzogJ1RoZXJlIGFyZSBtYW55IHZhcmlhdGlvbnMgb2YgcGFzc2FnZXMgb2YgJyxcclxuICAgICAgICAnc2VudEF0JzogJzM6MTM6MDQgUE0nLFxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgJ3R5cGUnOiAncmVjZWl2ZWQnLFxyXG4gICAgICAgICdtZXNzYWdlJzogJ0l0IGlzIGEgbG9uZyBlc3RhYmxpc2hlZCBmYWN0JyxcclxuICAgICAgICAnc2VudEF0JzogJzM6MTM6MjggUE0nLFxyXG4gICAgICB9LFxyXG4gICAgXVxyXG4gIH0sXHJcbiAge1xyXG4gICAgJ2lkJzogOCxcclxuICAgICdjb252ZXJzYXRpb25EYXRhJzogW1xyXG4gICAgICB7XHJcbiAgICAgICAgJ3R5cGUnOiAnc2VudCcsXHJcbiAgICAgICAgJ21lc3NhZ2UnOiAnRW5nbGlzaCB2ZXJzaW9ucyBmcm9tIHRoZSAxOTE0IHRyYW5zbGF0aW9uIGJ5IEguIFJhY2toYW0nLFxyXG4gICAgICAgICdzZW50QXQnOiAnMzowMzoyOCBQTScsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICAndHlwZSc6ICdzZW50JyxcclxuICAgICAgICAnbWVzc2FnZSc6ICdTZWQgdXQgcGVyc3BpY2lhdGlzIHVuZGUgb21uaXMgaXN0ZSBuYXR1cyBlcnJvciBzaXQgdm9sdXB0YXRlbScsXHJcbiAgICAgICAgJ3NlbnRBdCc6ICczOjA3OjUyIFBNJyxcclxuICAgICAgfSwge1xyXG4gICAgICAgICd0eXBlJzogJ3NlbnQnLFxyXG4gICAgICAgICdtZXNzYWdlJzogJ0l0IGlzIGEgbG9uZyBlc3RhYmxpc2hlZCBmYWN0JyxcclxuICAgICAgICAnc2VudEF0JzogJzM6MDg6MzUgUE0nLFxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgJ3R5cGUnOiAncmVjZWl2ZWQnLFxyXG4gICAgICAgICdtZXNzYWdlJzogJ0kgbXVzdCBleHBsYWluIHRvIHlvdSBob3cgYWxsIHRoaXMgbWlzdGFrZW4gaWRlYSBvZiBkZW5vdW5jaW5nICcsXHJcbiAgICAgICAgJ3NlbnRBdCc6ICczOjEwOjI4IFBNJyxcclxuICAgICAgfSwge1xyXG4gICAgICAgICd0eXBlJzogJ3JlY2VpdmVkJyxcclxuICAgICAgICAnbWVzc2FnZSc6ICdUaGVyZSBhcmUgbWFueSB2YXJpYXRpb25zIG9mIHBhc3NhZ2VzIG9mICcsXHJcbiAgICAgICAgJ3NlbnRBdCc6ICczOjEyOjM2IFBNJyxcclxuICAgICAgfSwge1xyXG4gICAgICAgICd0eXBlJzogJ3JlY2VpdmVkJyxcclxuICAgICAgICAnbWVzc2FnZSc6ICdBbGwgdGhlIExvcmVtIElwc3VtIGdlbmVyYXRvcnMgb24gdGhlJyxcclxuICAgICAgICAnc2VudEF0JzogJzM6MTI6NDUgUE0nLFxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgJ3R5cGUnOiAncmVjZWl2ZWQnLFxyXG4gICAgICAgICdtZXNzYWdlJzogJ0l0IGlzIGEgbG9uZyBlc3RhYmxpc2hlZCBmYWN0JyxcclxuICAgICAgICAnc2VudEF0JzogJzM6MTM6MjggUE0nLFxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgJ3R5cGUnOiAnc2VudCcsXHJcbiAgICAgICAgJ21lc3NhZ2UnOiAnVGhlIHN0YW5kYXJkIGNodW5rIG9mIExvcmVtIElwc3VtIHVzZWQgc2luY2UgdGhlIDE1MDBzJyxcclxuICAgICAgICAnc2VudEF0JzogJzM6MTU6NDUgUE0nLFxyXG4gICAgICB9XHJcbiAgICBdXHJcbiAgfSxcclxuICB7XHJcbiAgICAnaWQnOiA5LFxyXG4gICAgJ2NvbnZlcnNhdGlvbkRhdGEnOiBbXHJcblxyXG4gICAgICB7XHJcbiAgICAgICAgJ3R5cGUnOiAncmVjZWl2ZWQnLFxyXG4gICAgICAgICdtZXNzYWdlJzogJ0VuZ2xpc2ggdmVyc2lvbnMgZnJvbSB0aGUgMTkxNCB0cmFuc2xhdGlvbiBieSBILiBSYWNraGFtJyxcclxuICAgICAgICAnc2VudEF0JzogJzM6MDU6NDcgUE0nLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgJ3R5cGUnOiAnc2VudCcsXHJcbiAgICAgICAgJ21lc3NhZ2UnOiAnU2VkIHV0IHBlcnNwaWNpYXRpcyB1bmRlIG9tbmlzIGlzdGUgbmF0dXMgZXJyb3Igc2l0IHZvbHVwdGF0ZW0nLFxyXG4gICAgICAgICdzZW50QXQnOiAnMzowNzo1MiBQTScsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICAndHlwZSc6ICdyZWNlaXZlZCcsXHJcbiAgICAgICAgJ21lc3NhZ2UnOiAnSSBtdXN0IGV4cGxhaW4gdG8geW91IGhvdyBhbGwgdGhpcyBtaXN0YWtlbiBpZGVhIG9mIGRlbm91bmNpbmcgJyxcclxuICAgICAgICAnc2VudEF0JzogJzM6MTA6MjggUE0nLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgJ3R5cGUnOiAncmVjZWl2ZWQnLFxyXG4gICAgICAgICdtZXNzYWdlJzogJ1RoZXJlIGFyZSBtYW55IHZhcmlhdGlvbnMgb2YgcGFzc2FnZXMgb2YgJyxcclxuICAgICAgICAnc2VudEF0JzogJzM6MTI6MzYgUE0nLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgJ3R5cGUnOiAnc2VudCcsXHJcbiAgICAgICAgJ21lc3NhZ2UnOiAnVGhlcmUgYXJlIG1hbnkgdmFyaWF0aW9ucyBvZiBwYXNzYWdlcyBvZiAnLFxyXG4gICAgICAgICdzZW50QXQnOiAnMzoxMzowNCBQTScsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICAndHlwZSc6ICdyZWNlaXZlZCcsXHJcbiAgICAgICAgJ21lc3NhZ2UnOiAnSXQgaXMgYSBsb25nIGVzdGFibGlzaGVkIGZhY3QnLFxyXG4gICAgICAgICdzZW50QXQnOiAnMzoxMzoyOCBQTScsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICAndHlwZSc6ICdzZW50JyxcclxuICAgICAgICAnbWVzc2FnZSc6ICdUaGUgc3RhbmRhcmQgY2h1bmsgb2YgTG9yZW0gSXBzdW0gdXNlZCBzaW5jZSB0aGUgMTUwMHMnLFxyXG4gICAgICAgICdzZW50QXQnOiAnMzoxNTo0NSBQTScsXHJcbiAgICAgIH1cclxuICAgIF1cclxuICB9LFxyXG4gIHtcclxuICAgICdpZCc6IDEwLFxyXG4gICAgJ2NvbnZlcnNhdGlvbkRhdGEnOiBbXHJcbiAgICAgIHtcclxuICAgICAgICAndHlwZSc6ICdzZW50JyxcclxuICAgICAgICAnbWVzc2FnZSc6ICdFbmdsaXNoIHZlcnNpb25zIGZyb20gdGhlIDE5MTQgdHJhbnNsYXRpb24gYnkgSC4gUmFja2hhbScsXHJcbiAgICAgICAgJ3NlbnRBdCc6ICczOjAzOjI4IFBNJyxcclxuICAgICAgfSwge1xyXG4gICAgICAgICd0eXBlJzogJ3JlY2VpdmVkJyxcclxuICAgICAgICAnbWVzc2FnZSc6ICdFbmdsaXNoIHZlcnNpb25zIGZyb20gdGhlIDE5MTQgdHJhbnNsYXRpb24gYnkgSC4gUmFja2hhbScsXHJcbiAgICAgICAgJ3NlbnRBdCc6ICczOjA1OjQ3IFBNJyxcclxuICAgICAgfSwge1xyXG4gICAgICAgICd0eXBlJzogJ3NlbnQnLFxyXG4gICAgICAgICdtZXNzYWdlJzogJ1NlZCB1dCBwZXJzcGljaWF0aXMgdW5kZSBvbW5pcyBpc3RlIG5hdHVzIGVycm9yIHNpdCB2b2x1cHRhdGVtJyxcclxuICAgICAgICAnc2VudEF0JzogJzM6MDc6NTIgUE0nLFxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgJ3R5cGUnOiAnc2VudCcsXHJcbiAgICAgICAgJ21lc3NhZ2UnOiAnSXQgaXMgYSBsb25nIGVzdGFibGlzaGVkIGZhY3QnLFxyXG4gICAgICAgICdzZW50QXQnOiAnMzowODozNSBQTScsXHJcbiAgICAgIH0sIHtcclxuICAgICAgICAndHlwZSc6ICdyZWNlaXZlZCcsXHJcbiAgICAgICAgJ21lc3NhZ2UnOiAnSSBtdXN0IGV4cGxhaW4gdG8geW91IGhvdyBhbGwgdGhpcyBtaXN0YWtlbiBpZGVhIG9mIGRlbm91bmNpbmcgJyxcclxuICAgICAgICAnc2VudEF0JzogJzM6MTA6MjggUE0nLFxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgJ3R5cGUnOiAnc2VudCcsXHJcbiAgICAgICAgJ21lc3NhZ2UnOiAnVGhlIHN0YW5kYXJkIGNodW5rIG9mIExvcmVtIElwc3VtIHVzZWQgc2luY2UgdGhlIDE1MDBzIGlzIHJlcHJvZHVjZWQgYmVsb3cgZm9yIHRob3NlIGludGVyZXN0ZWQnLFxyXG4gICAgICAgICdzZW50QXQnOiAnMzoxMToyNSBQTScsXHJcbiAgICAgIH0sIHtcclxuICAgICAgICAndHlwZSc6ICdyZWNlaXZlZCcsXHJcbiAgICAgICAgJ21lc3NhZ2UnOiAnVGhlcmUgYXJlIG1hbnkgdmFyaWF0aW9ucyBvZiBwYXNzYWdlcyBvZiAnLFxyXG4gICAgICAgICdzZW50QXQnOiAnMzoxMjozNiBQTScsXHJcbiAgICAgIH0sIHtcclxuICAgICAgICAndHlwZSc6ICdyZWNlaXZlZCcsXHJcbiAgICAgICAgJ21lc3NhZ2UnOiAnQWxsIHRoZSBMb3JlbSBJcHN1bSBnZW5lcmF0b3JzIG9uIHRoZScsXHJcbiAgICAgICAgJ3NlbnRBdCc6ICczOjEyOjQ1IFBNJyxcclxuICAgICAgfSwge1xyXG4gICAgICAgICd0eXBlJzogJ3NlbnQnLFxyXG4gICAgICAgICdtZXNzYWdlJzogJ1RoZXJlIGFyZSBtYW55IHZhcmlhdGlvbnMgb2YgcGFzc2FnZXMgb2YgJyxcclxuICAgICAgICAnc2VudEF0JzogJzM6MTM6MDQgUE0nLFxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgJ3R5cGUnOiAncmVjZWl2ZWQnLFxyXG4gICAgICAgICdtZXNzYWdlJzogJ0l0IGlzIGEgbG9uZyBlc3RhYmxpc2hlZCBmYWN0JyxcclxuICAgICAgICAnc2VudEF0JzogJzM6MTM6MjggUE0nLFxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgJ3R5cGUnOiAnc2VudCcsXHJcbiAgICAgICAgJ21lc3NhZ2UnOiAnVGhlIHN0YW5kYXJkIGNodW5rIG9mIExvcmVtIElwc3VtIHVzZWQgc2luY2UgdGhlIDE1MDBzJyxcclxuICAgICAgICAnc2VudEF0JzogJzM6MTU6NDUgUE0nLFxyXG4gICAgICB9XHJcbiAgICBdXHJcbiAgfSxcclxuICB7XHJcbiAgICAnaWQnOiAxMSxcclxuICAgICdjb252ZXJzYXRpb25EYXRhJzogW1xyXG4gICAgICB7XHJcbiAgICAgICAgJ3R5cGUnOiAncmVjZWl2ZWQnLFxyXG4gICAgICAgICdtZXNzYWdlJzogJ1RoZXJlIGFyZSBtYW55IHZhcmlhdGlvbnMgb2YgcGFzc2FnZXMgb2YgJyxcclxuICAgICAgICAnc2VudEF0JzogJzM6MTI6MzYgUE0nLFxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgJ3R5cGUnOiAncmVjZWl2ZWQnLFxyXG4gICAgICAgICdtZXNzYWdlJzogJ0FsbCB0aGUgTG9yZW0gSXBzdW0gZ2VuZXJhdG9ycyBvbiB0aGUnLFxyXG4gICAgICAgICdzZW50QXQnOiAnMzoxMjo0NSBQTScsXHJcbiAgICAgIH0sIHtcclxuICAgICAgICAndHlwZSc6ICdzZW50JyxcclxuICAgICAgICAnbWVzc2FnZSc6ICdUaGVyZSBhcmUgbWFueSB2YXJpYXRpb25zIG9mIHBhc3NhZ2VzIG9mICcsXHJcbiAgICAgICAgJ3NlbnRBdCc6ICczOjEzOjA0IFBNJyxcclxuICAgICAgfSxcclxuICAgIF1cclxuICB9XHJcblxyXG5dXHJcbiIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7QXZhdGFyLCBCdXR0b24sIERyYXdlciwgSW5wdXQsIFRhYnN9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBDdXN0b21TY3JvbGxiYXJzIGZyb20gXCIuLi8uLi8uLi91dGlsL0N1c3RvbVNjcm9sbGJhcnNcIjtcclxuaW1wb3J0IE1vbWVudCBmcm9tIFwibW9tZW50XCI7XHJcblxyXG5pbXBvcnQgQ2hhdFVzZXJMaXN0IGZyb20gXCIuLi8uLi8uLi9hcHAvY29tcG9uZW50cy9jaGF0L0NoYXRVc2VyTGlzdFwiO1xyXG5pbXBvcnQgY29udmVyc2F0aW9uTGlzdCBmcm9tIFwiLi9kYXRhL2NvbnZlcnNhdGlvbkxpc3RcIjtcclxuaW1wb3J0IENvbnZlcnNhdGlvbiBmcm9tIFwiLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvY2hhdC9Db252ZXJzYXRpb25cIjtcclxuaW1wb3J0IHVzZXJzIGZyb20gXCIuL2RhdGEvY2hhdFVzZXJzXCI7XHJcbmltcG9ydCBDb250YWN0TGlzdCBmcm9tIFwiLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvY2hhdC9Db250YWN0TGlzdFwiO1xyXG5pbXBvcnQgSW50bE1lc3NhZ2VzIGZyb20gXCIuLi8uLi8uLi91dGlsL0ludGxNZXNzYWdlc1wiO1xyXG5pbXBvcnQgU2VhcmNoQm94IGZyb20gXCIuLi8uLi8uLi9hcHAvY29tcG9uZW50cy9TZWFyY2hCb3hcIjtcclxuaW1wb3J0IENpcmN1bGFyUHJvZ3Jlc3MgZnJvbSBcIi4uLy4uLy4uL2FwcC9jb21wb25lbnRzL0NpcmN1bGFyUHJvZ3Jlc3NcIjtcclxuaW1wb3J0ICcuL2luZGV4LmNzcyc7XHJcblxyXG5cclxuY29uc3QgVGFiUGFuZSA9IFRhYnMuVGFiUGFuZTtcclxuXHJcbmNsYXNzIENoYXQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGxvYWRlcjogZmFsc2UsXHJcbiAgICAgIHVzZXJOb3RGb3VuZDogJ05vIHVzZXIgZm91bmQnLFxyXG4gICAgICBkcmF3ZXJTdGF0ZTogZmFsc2UsXHJcbiAgICAgIHNlbGVjdGVkU2VjdGlvbklkOiAnJyxcclxuICAgICAgc2VsZWN0ZWRUYWJJbmRleDogMSxcclxuICAgICAgdXNlclN0YXRlOiAxLFxyXG4gICAgICBzZWFyY2hDaGF0VXNlcjogJycsXHJcbiAgICAgIGNvbnRhY3RMaXN0OiB1c2Vycy5maWx0ZXIoKHVzZXIpID0+ICF1c2VyLnJlY2VudCksXHJcbiAgICAgIHNlbGVjdGVkVXNlcjogbnVsbCxcclxuICAgICAgbWVzc2FnZTogJycsXHJcbiAgICAgIGNoYXRVc2VyczogdXNlcnMuZmlsdGVyKCh1c2VyKSA9PiB1c2VyLnJlY2VudCksXHJcbiAgICAgIGNvbnZlcnNhdGlvbkxpc3Q6IGNvbnZlcnNhdGlvbkxpc3QsXHJcbiAgICAgIGNvbnZlcnNhdGlvbjogbnVsbFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZmlsdGVyQ29udGFjdCA9ICh1c2VyTmFtZSkgPT4ge1xyXG4gICAgaWYgKHVzZXJOYW1lID09PSAnJykge1xyXG4gICAgICByZXR1cm4gdXNlcnMuZmlsdGVyKHVzZXIgPT4gIXVzZXIucmVjZW50KTtcclxuICAgIH1cclxuICAgIHJldHVybiB1c2Vycy5maWx0ZXIoKHVzZXIpID0+XHJcbiAgICAgICF1c2VyLnJlY2VudCAmJiB1c2VyLm5hbWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKHVzZXJOYW1lLnRvTG93ZXJDYXNlKCkpID4gLTFcclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgZmlsdGVyVXNlcnMgPSAodXNlck5hbWUpID0+IHtcclxuICAgIGlmICh1c2VyTmFtZSA9PT0gJycpIHtcclxuICAgICAgcmV0dXJuIHVzZXJzLmZpbHRlcih1c2VyID0+IHVzZXIucmVjZW50KTtcclxuICAgIH1cclxuICAgIHJldHVybiB1c2Vycy5maWx0ZXIoKHVzZXIpID0+XHJcbiAgICAgIHVzZXIucmVjZW50ICYmIHVzZXIubmFtZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YodXNlck5hbWUudG9Mb3dlckNhc2UoKSkgPiAtMVxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBDb21tdW5pY2F0aW9uID0gKCkgPT4ge1xyXG4gICAgY29uc3Qge21lc3NhZ2UsIHNlbGVjdGVkVXNlciwgY29udmVyc2F0aW9ufSA9IHRoaXMuc3RhdGU7XHJcbiAgICBjb25zdCB7Y29udmVyc2F0aW9uRGF0YX0gPSBjb252ZXJzYXRpb247XHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJneC1jaGF0LW1haW5cIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1jaGF0LW1haW4taGVhZGVyXCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ3gtZC1ibG9jayBneC1kLWxnLW5vbmUgZ3gtY2hhdC1idG5cIj48aSBjbGFzc05hbWU9XCJneC1pY29uLWJ0biBpY29uIGljb24tY2hhdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vblRvZ2dsZURyYXdlci5iaW5kKHRoaXMpfS8+PC9zcGFuPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtY2hhdC1tYWluLWhlYWRlci1pbmZvXCI+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1jaGF0LWF2YXRhciBneC1tci0yXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtc3RhdHVzLXBvc1wiPlxyXG4gICAgICAgICAgICAgIDxBdmF0YXIgc3JjPXtzZWxlY3RlZFVzZXIudGh1bWJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJneC1yb3VuZGVkLWNpcmNsZSBneC1zaXplLTYwXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiLz5cclxuXHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgZ3gtc3RhdHVzIGd4LSR7c2VsZWN0ZWRVc2VyLnN0YXR1c31gfS8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1jaGF0LWNvbnRhY3QtbmFtZVwiPlxyXG4gICAgICAgICAgICB7c2VsZWN0ZWRVc2VyLm5hbWV9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPEN1c3RvbVNjcm9sbGJhcnMgY2xhc3NOYW1lPVwiZ3gtY2hhdC1saXN0LXNjcm9sbFwiPlxyXG4gICAgICAgIDxDb252ZXJzYXRpb24gY29udmVyc2F0aW9uRGF0YT17Y29udmVyc2F0aW9uRGF0YX1cclxuICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkVXNlcj17c2VsZWN0ZWRVc2VyfS8+XHJcbiAgICAgIDwvQ3VzdG9tU2Nyb2xsYmFycz5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtY2hhdC1tYWluLWZvb3RlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtZmxleC1yb3cgZ3gtYWxpZ24taXRlbXMtY2VudGVyXCIgc3R5bGU9e3ttYXhIZWlnaHQ6IDUxfX0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWNvbFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInJlcXVpcmVkXCIgY2xhc3NOYW1lPVwiZ3gtYm9yZGVyLTAgYW50LWlucHV0IGd4LWNoYXQtdGV4dGFyZWFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbktleVVwPXt0aGlzLl9oYW5kbGVLZXlQcmVzcy5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy51cGRhdGVNZXNzYWdlVmFsdWUuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e21lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHlwZSBhbmQgaGl0IGVudGVyIHRvIHNlbmQgbWVzc2FnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZ3gtaWNvbi1idG4gaWNvbiBpY29uLXNlbnRcIiBvbkNsaWNrPXt0aGlzLnN1Ym1pdENvbW1lbnQuYmluZCh0aGlzKX0vPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIH07XHJcblxyXG4gIEFwcFVzZXJzSW5mbyA9ICgpID0+IHtcclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImd4LWNoYXQtc2lkZW5hdi1tYWluXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtYmctZ3JleS1saWdodCBneC1jaGF0LXNpZGVuYXYtaGVhZGVyXCI+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtY2hhdC11c2VyLWhkIGd4LW1iLTBcIj5cclxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImd4LWljb24tYnRuIGljb24gaWNvbi1hcnJvdy1sZWZ0XCIgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt1c2VyU3RhdGU6IDF9KTtcclxuICAgICAgICAgIH19Lz5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1jaGF0LXVzZXIgZ3gtY2hhdC11c2VyLWNlbnRlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1jaGF0LWF2YXRhciBneC1teC1hdXRvXCI+XHJcbiAgICAgICAgICAgIDxBdmF0YXIgc3JjPVwiaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzE1MHgxNTBcIiBjbGFzc05hbWU9XCJneC1zaXplLTYwXCIgYWx0PVwiSm9obiBEb2VcIi8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LXVzZXItbmFtZSBoNCBneC1teS0yXCI+Um9iZXJ0IEpvaG5zb248L2Rpdj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWNoYXQtc2lkZW5hdi1jb250ZW50XCI+XHJcblxyXG4gICAgICAgIDxDdXN0b21TY3JvbGxiYXJzIGNsYXNzTmFtZT1cImd4LWNoYXQtc2lkZW5hdi1zY3JvbGxcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtcC00XCI+XHJcbiAgICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtZm9ybS1ncm91cCBneC1tdC00XCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+TW9vZDwvbGFiZWw+XHJcblxyXG4gICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgICBpZD1cImV4YW1wbGVUZXh0YXJlYVwiXHJcbiAgICAgICAgICAgICAgICAgIG11bHRpbGluZVxyXG4gICAgICAgICAgICAgICAgICByb3dzPXszfVxyXG4gICAgICAgICAgICAgICAgICBvbktleVVwPXt0aGlzLl9oYW5kbGVLZXlQcmVzcy5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy51cGRhdGVNZXNzYWdlVmFsdWUuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwiaXQncyBhIHN0YXR1cy4uLi5ub3QgeW91ciBkaWFyeS4uLlwiXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU3RhdHVzXCJcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luPVwibm9uZVwiLz5cclxuXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQ3VzdG9tU2Nyb2xsYmFycz5cclxuXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgfTtcclxuXHJcbiAgQ2hhdFVzZXJzID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiZ3gtY2hhdC1zaWRlbmF2LW1haW5cIj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtY2hhdC1zaWRlbmF2LWhlYWRlclwiPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWNoYXQtdXNlci1oZFwiPlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtY2hhdC1hdmF0YXIgZ3gtbXItM1wiIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgdXNlclN0YXRlOiAyXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtc3RhdHVzLXBvc1wiPlxyXG4gICAgICAgICAgICAgIDxBdmF0YXIgaWQ9XCJhdmF0YXItYnV0dG9uXCIgc3JjPVwiaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzE1MHgxNTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3gtc2l6ZS01MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIi8+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ3gtc3RhdHVzIGd4LW9ubGluZVwiLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LW1vZHVsZS11c2VyLWluZm8gZ3gtZmxleC1jb2x1bW4gZ3gtanVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LW1vZHVsZS10aXRsZVwiPlxyXG4gICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJneC1tYi0wXCI+Um9iZXJ0IEpvaG5zb248L2g1PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1tb2R1bGUtdXNlci1kZXRhaWxcIj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJneC10ZXh0LWdyZXkgZ3gtbGlua1wiPnJvYmVydEBleGFtcGxlLmNvbTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1jaGF0LXNlYXJjaC13cmFwcGVyXCI+XHJcblxyXG4gICAgICAgICAgPFNlYXJjaEJveCBzdHlsZU5hbWU9XCJneC1jaGF0LXNlYXJjaC1iYXIgZ3gtbHQtaWNvbi1zZWFyY2gtYmFyLWxnXCJcclxuICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggb3Igc3RhcnQgbmV3IGNoYXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy51cGRhdGVTZWFyY2hDaGF0VXNlci5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5zZWFyY2hDaGF0VXNlcn0vPlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWNoYXQtc2lkZW5hdi1jb250ZW50XCI+XHJcbiAgICAgICAgey8qPEFwcEJhciBwb3NpdGlvbj1cInB1YmxpY1wiIGNsYXNzTmFtZT1cIm5vLXNoYWRvdyBjaGF0LXRhYnMtaGVhZGVyXCI+Ki99XHJcbiAgICAgICAgPFRhYnMgY2xhc3NOYW1lPVwiZ3gtdGFicy1oYWxmXCIgZGVmYXVsdEFjdGl2ZUtleT1cIjFcIj5cclxuICAgICAgICAgIDxUYWJQYW5lIGxhYmVsPXs8SW50bE1lc3NhZ2VzIGlkPVwiY2hhdC5jaGF0VXNlclwiLz59IHRhYj17PEludGxNZXNzYWdlcyBpZD1cImNoYXQuY2hhdFVzZXJcIi8+fSBrZXk9XCIxXCI+XHJcbiAgICAgICAgICAgIDxDdXN0b21TY3JvbGxiYXJzIGNsYXNzTmFtZT1cImd4LWNoYXQtc2lkZW5hdi1zY3JvbGwtdGFiLTFcIj5cclxuICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5jaGF0VXNlcnMubGVuZ3RoID09PSAwID9cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtcC01XCI+e3RoaXMuc3RhdGUudXNlck5vdEZvdW5kfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgPENoYXRVc2VyTGlzdCBjaGF0VXNlcnM9e3RoaXMuc3RhdGUuY2hhdFVzZXJzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFNlY3Rpb25JZD17dGhpcy5zdGF0ZS5zZWxlY3RlZFNlY3Rpb25JZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25TZWxlY3RVc2VyPXt0aGlzLm9uU2VsZWN0VXNlci5iaW5kKHRoaXMpfS8+XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L0N1c3RvbVNjcm9sbGJhcnM+XHJcbiAgICAgICAgICA8L1RhYlBhbmU+XHJcbiAgICAgICAgICA8VGFiUGFuZSBsYWJlbD17PEludGxNZXNzYWdlcyBpZD1cImNoYXQuY29udGFjdHNcIi8+fSB0YWI9ezxJbnRsTWVzc2FnZXMgaWQ9XCJjaGF0LmNvbnRhY3RzXCIvPn0ga2V5PVwiMlwiPlxyXG4gICAgICAgICAgICA8Q3VzdG9tU2Nyb2xsYmFycyBjbGFzc05hbWU9XCJneC1jaGF0LXNpZGVuYXYtc2Nyb2xsLXRhYi0yXCI+XHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5jb250YWN0TGlzdC5sZW5ndGggPT09IDAgP1xyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LXAtNVwiPnt0aGlzLnN0YXRlLnVzZXJOb3RGb3VuZH08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICA8Q29udGFjdExpc3QgY29udGFjdExpc3Q9e3RoaXMuc3RhdGUuY29udGFjdExpc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFNlY3Rpb25JZD17dGhpcy5zdGF0ZS5zZWxlY3RlZFNlY3Rpb25JZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0VXNlcj17dGhpcy5vblNlbGVjdFVzZXIuYmluZCh0aGlzKX0vPlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9DdXN0b21TY3JvbGxiYXJzPlxyXG4gICAgICAgICAgPC9UYWJQYW5lPlxyXG4gICAgICAgIDwvVGFicz5cclxuXHJcblxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIH07XHJcblxyXG4gIF9oYW5kbGVLZXlQcmVzcyA9IChlKSA9PiB7XHJcbiAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcclxuICAgICAgdGhpcy5zdWJtaXRDb21tZW50KCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlQ2hhbmdlID0gKGV2ZW50LCB2YWx1ZSkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7c2VsZWN0ZWRUYWJJbmRleDogdmFsdWV9KTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVDaGFuZ2VJbmRleCA9IGluZGV4ID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe3NlbGVjdGVkVGFiSW5kZXg6IGluZGV4fSk7XHJcbiAgfTtcclxuXHJcbiAgb25TZWxlY3RVc2VyID0gKHVzZXIpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBsb2FkZXI6IHRydWUsXHJcbiAgICAgIHNlbGVjdGVkU2VjdGlvbklkOiB1c2VyLmlkLFxyXG4gICAgICBkcmF3ZXJTdGF0ZTogdGhpcy5wcm9wcy5kcmF3ZXJTdGF0ZSxcclxuICAgICAgc2VsZWN0ZWRVc2VyOiB1c2VyLFxyXG4gICAgICBjb252ZXJzYXRpb246IHRoaXMuc3RhdGUuY29udmVyc2F0aW9uTGlzdC5maW5kKChkYXRhKSA9PiBkYXRhLmlkID09PSB1c2VyLmlkKVxyXG4gICAgfSk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7bG9hZGVyOiBmYWxzZX0pO1xyXG4gICAgfSwgMTUwMCk7XHJcbiAgfTtcclxuXHJcbiAgc2hvd0NvbW11bmljYXRpb24gPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWNoYXQtYm94XCI+XHJcbiAgICAgICAge3RoaXMuc3RhdGUuc2VsZWN0ZWRVc2VyID09PSBudWxsID9cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtY29tbWVudC1ib3hcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1mcy04MFwiPjxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1jaGF0IGd4LXRleHQtbXV0ZWRcIi8+PC9kaXY+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJneC10ZXh0LW11dGVkXCI+ezxJbnRsTWVzc2FnZXMgaWQ9XCJjaGF0LnNlbGVjdFVzZXJDaGF0XCIvPn08L2gxPlxyXG4gICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImd4LWQtYmxvY2sgZ3gtZC1sZy1ub25lXCIgdHlwZT1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25Ub2dnbGVEcmF3ZXIuYmluZCh0aGlzKX0+ezxJbnRsTWVzc2FnZXNcclxuICAgICAgICAgICAgICBpZD1cImNoYXQuc2VsZWN0Q29udGFjdENoYXRcIi8+fTwvQnV0dG9uPlxyXG5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgOiB0aGlzLkNvbW11bmljYXRpb24oKX1cclxuICAgICAgPC9kaXY+KVxyXG4gIH07XHJcblxyXG4gIHN1Ym1pdENvbW1lbnQoKSB7XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5tZXNzYWdlICE9PSAnJykge1xyXG4gICAgICBjb25zdCB1cGRhdGVkQ29udmVyc2F0aW9uID0gdGhpcy5zdGF0ZS5jb252ZXJzYXRpb24uY29udmVyc2F0aW9uRGF0YS5jb25jYXQoe1xyXG4gICAgICAgICd0eXBlJzogJ3NlbnQnLFxyXG4gICAgICAgICdtZXNzYWdlJzogdGhpcy5zdGF0ZS5tZXNzYWdlLFxyXG4gICAgICAgICdzZW50QXQnOiBNb21lbnQoKS5mb3JtYXQoJ2hoOm1tOnNzIEEnKSxcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIGNvbnZlcnNhdGlvbjoge1xyXG4gICAgICAgICAgLi4udGhpcy5zdGF0ZS5jb252ZXJzYXRpb24sIGNvbnZlcnNhdGlvbkRhdGE6IHVwZGF0ZWRDb252ZXJzYXRpb25cclxuICAgICAgICB9LFxyXG4gICAgICAgIG1lc3NhZ2U6ICcnLFxyXG4gICAgICAgIGNvbnZlcnNhdGlvbkxpc3Q6IHRoaXMuc3RhdGUuY29udmVyc2F0aW9uTGlzdC5tYXAoY29udmVyc2F0aW9uRGF0YSA9PiB7XHJcbiAgICAgICAgICBpZiAoY29udmVyc2F0aW9uRGF0YS5pZCA9PT0gdGhpcy5zdGF0ZS5jb252ZXJzYXRpb24uaWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi50aGlzLnN0YXRlLmNvbnZlcnNhdGlvbiwgY29udmVyc2F0aW9uRGF0YTogdXBkYXRlZENvbnZlcnNhdGlvbn07XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gY29udmVyc2F0aW9uRGF0YTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVwZGF0ZU1lc3NhZ2VWYWx1ZShldnQpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBtZXNzYWdlOiBldnQudGFyZ2V0LnZhbHVlXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVNlYXJjaENoYXRVc2VyKGV2dCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHNlYXJjaENoYXRVc2VyOiBldnQudGFyZ2V0LnZhbHVlLFxyXG4gICAgICBjb250YWN0TGlzdDogdGhpcy5maWx0ZXJDb250YWN0KGV2dC50YXJnZXQudmFsdWUpLFxyXG4gICAgICBjaGF0VXNlcnM6IHRoaXMuZmlsdGVyVXNlcnMoZXZ0LnRhcmdldC52YWx1ZSlcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25Ub2dnbGVEcmF3ZXIoKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgZHJhd2VyU3RhdGU6ICF0aGlzLnN0YXRlLmRyYXdlclN0YXRlXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHtsb2FkZXIsIHVzZXJTdGF0ZSwgZHJhd2VyU3RhdGV9ID0gdGhpcy5zdGF0ZTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtbWFpbi1jb250ZW50XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1hcHAtbW9kdWxlIGd4LWNoYXQtbW9kdWxlXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWNoYXQtbW9kdWxlLWJveFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWQtYmxvY2sgZ3gtZC1sZy1ub25lXCI+XHJcbiAgICAgICAgICAgICAgPERyYXdlclxyXG4gICAgICAgICAgICAgICAgcGxhY2VtZW50PVwibGVmdFwiXHJcbiAgICAgICAgICAgICAgICBjbG9zYWJsZT17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICB2aXNpYmxlPXtkcmF3ZXJTdGF0ZX1cclxuICAgICAgICAgICAgICAgIG9uQ2xvc2U9e3RoaXMub25Ub2dnbGVEcmF3ZXIuYmluZCh0aGlzKX0+XHJcbiAgICAgICAgICAgICAgICB7dXNlclN0YXRlID09PSAxID8gdGhpcy5DaGF0VXNlcnMoKSA6IHRoaXMuQXBwVXNlcnNJbmZvKCl9XHJcbiAgICAgICAgICAgICAgPC9EcmF3ZXI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWNoYXQtc2lkZW5hdiBneC1kLW5vbmUgZ3gtZC1sZy1mbGV4XCI+XHJcbiAgICAgICAgICAgICAge3VzZXJTdGF0ZSA9PT0gMSA/IHRoaXMuQ2hhdFVzZXJzKCkgOiB0aGlzLkFwcFVzZXJzSW5mbygpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge2xvYWRlciA/XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1sb2FkZXItdmlld1wiPlxyXG4gICAgICAgICAgICAgICAgPENpcmN1bGFyUHJvZ3Jlc3MvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PiA6IHRoaXMuc2hvd0NvbW11bmljYXRpb24oKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGF0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9