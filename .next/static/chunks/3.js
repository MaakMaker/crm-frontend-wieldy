(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[3],{

/***/ "./app/components/AppModuleHeader/index.js":
/*!*************************************************!*\
  !*** ./app/components/AppModuleHeader/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var AppModuleHeader = function AppModuleHeader(props) {
  var placeholder = props.placeholder,
      onChange = props.onChange,
      value = props.value;
  return __jsx("div", {
    className: "gx-module-box-header-inner"
  }, __jsx("div", {
    className: "gx-search-bar gx-lt-icon-search-bar-lg gx-module-search-bar gx-d-none gx-d-sm-block"
  }, __jsx("div", {
    className: "gx-form-group"
  }, __jsx("input", {
    className: "ant-input gx-border-0",
    type: "search",
    placeholder: placeholder,
    onChange: onChange,
    value: value
  }), __jsx("span", {
    className: "gx-search-icon gx-pointer"
  }, __jsx("i", {
    className: "icon icon-search"
  })))), __jsx("div", {
    className: "gx-module-box-header-right"
  }, __jsx("span", {
    className: "gx-fs-xl"
  }, " ", __jsx("i", {
    className: "icon icon-apps gx-icon-btn"
  })), __jsx("span", {
    className: "gx-fs-xl"
  }, __jsx("i", {
    className: "icon icon-notification gx-icon-btn"
  }))));
};

_c = AppModuleHeader;
/* harmony default export */ __webpack_exports__["default"] = (AppModuleHeader);
AppModuleHeader.defaultProps = {
  styleName: '',
  value: '',
  notification: true,
  apps: true
};

var _c;

$RefreshReg$(_c, "AppModuleHeader");

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

/***/ }),

/***/ "./app/components/mail/Compose/index.js":
/*!**********************************************!*\
  !*** ./app/components/mail/Compose/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _util_IntlMessages__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../util/IntlMessages */ "./util/IntlMessages.js");





var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var TextArea = antd__WEBPACK_IMPORTED_MODULE_6__["Input"].TextArea;
var props = {
  name: 'file',
  action: '//jsonplaceholder.typicode.com/posts/',
  headers: {
    authorization: 'authorization-text'
  },
  onChange: function onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }

    if (info.file.status === 'done') {
      antd__WEBPACK_IMPORTED_MODULE_6__["message"].success("".concat(info.file.name, " file uploaded successfully"));
    } else if (info.file.status === 'error') {
      antd__WEBPACK_IMPORTED_MODULE_6__["message"].error("".concat(info.file.name, " file upload failed."));
    }
  }
};

var ComposeMail = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(ComposeMail, _React$Component);

  var _super = _createSuper(ComposeMail);

  function ComposeMail() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ComposeMail);

    _this = _super.call(this);
    _this.state = {
      to: '',
      cc: '',
      bcc: '',
      subject: '',
      message: ''
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ComposeMail, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          onMailSend = _this$props.onMailSend,
          onClose = _this$props.onClose,
          user = _this$props.user;
      var _this$state = this.state,
          to = _this$state.to,
          subject = _this$state.subject,
          message = _this$state.message;
      return __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["Modal"], {
        onCancel: onClose,
        visible: this.props.open,
        title: __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_8__["default"], {
          id: "mail.title"
        }),
        closable: false,
        onOk: function onOk() {
          if (to === '') return;
          onClose();
          onMailSend({
            'id': '15453a06c08fb021776',
            'from': {
              'name': user.name,
              'avatar': user.avatar,
              'email': user.email
            },
            'to': [{
              'name': to,
              'email': to
            }],
            'subject': subject,
            'message': message,
            'time': moment__WEBPACK_IMPORTED_MODULE_7___default()().format('DD MMM'),
            'read': false,
            'starred': false,
            'important': false,
            'hasAttachments': false,
            'folder': 1,
            'selected': false,
            'labels': []
          });
        },
        style: {
          zIndex: 2600
        }
      }, __jsx("div", {
        className: "gx-form-group"
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["Input"], {
        placeholder: "To*",
        onChange: function onChange(event) {
          return _this2.setState({
            to: event.target.value
          });
        },
        defaultValue: to,
        margin: "normal"
      })), __jsx("div", {
        className: "gx-form-group"
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["Input"], {
        placeholder: "Subject",
        onChange: function onChange(event) {
          return _this2.setState({
            subject: event.target.value
          });
        },
        value: subject,
        margin: "normal"
      })), __jsx("div", {
        className: "gx-form-group"
      }, __jsx(TextArea, {
        placeholder: "Message",
        onChange: function onChange(event) {
          return _this2.setState({
            message: event.target.value
          });
        },
        value: message,
        autosize: {
          minRows: 2,
          maxRows: 6
        },
        margin: "normal"
      })), __jsx("div", {
        className: "gx-form-group"
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["Upload"], props, __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["Button"], {
        type: "primary"
      }, __jsx("i", {
        className: "icon icon-attachment"
      }), " Attach File"))));
    }
  }]);

  return ComposeMail;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ComposeMail);

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

/***/ "./app/components/mail/MailDetail/index.js":
/*!*************************************************!*\
  !*** ./app/components/mail/MailDetail/index.js ***!
  \*************************************************/
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
/* harmony import */ var _util_CustomScrollbars__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../util/CustomScrollbars */ "./util/CustomScrollbars.js");
/* harmony import */ var _routes_inbuiltApps_mail_data_labels__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../routes/inbuiltApps/mail/data/labels */ "./routes/inbuiltApps/mail/data/labels.js");







var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var options = ['Reply', 'Forward', 'Print'];

var MailDetail = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(MailDetail, _React$Component);

  var _super = _createSuper(MailDetail);

  function MailDetail() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MailDetail);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "state", {
      showDetail: false
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "optionMenu", function () {
      return __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Menu"], {
        id: "long-menu"
      }, options.map(function (option) {
        return __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Menu"].Item, {
          key: option
        }, option);
      }));
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MailDetail, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          mail = _this$props.mail,
          onStartSelect = _this$props.onStartSelect,
          onImportantSelect = _this$props.onImportantSelect;
      return __jsx("div", {
        className: "gx-module-detail gx-mail-detail"
      }, __jsx(_util_CustomScrollbars__WEBPACK_IMPORTED_MODULE_9__["default"], {
        className: "gx-module-content-scroll"
      }, __jsx("div", {
        className: "gx-mail-detail-inner"
      }, __jsx("div", {
        className: "gx-mail-header"
      }, __jsx("div", {
        className: "gx-mail-header-content gx-col gx-pl-0"
      }, __jsx("div", {
        className: "gx-subject"
      }, mail.subject), __jsx("div", {
        className: "gx-labels"
      }, _routes_inbuiltApps_mail_data_labels__WEBPACK_IMPORTED_MODULE_10__["default"].map(function (label, index) {
        return mail.labels.includes(label.id) && __jsx("div", {
          key: index,
          className: "gx-badge gx-text-white gx-bg-".concat(label.color)
        }, label.title);
      }))), __jsx("div", {
        className: "gx-mail-header-actions"
      }, __jsx("div", {
        onClick: function onClick() {
          onStartSelect(mail);
        }
      }, mail.starred ? __jsx("i", {
        className: "icon icon-star gx-icon-btn"
      }) : __jsx("i", {
        className: "icon icon-star-o gx-icon-btn"
      })), __jsx("div", {
        onClick: function onClick() {
          onImportantSelect(mail);
        }
      }, mail.important ? __jsx("i", {
        className: "icon icon-important gx-icon-btn"
      }) : __jsx("i", {
        className: "icon icon-important-o gx-icon-btn"
      })))), __jsx("hr", null), __jsx("div", {
        className: "gx-mail-user-info gx-ml-0 gx-mb-3"
      }, mail.from.avatar === '' ? __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Avatar"], {
        className: "gx-avatar gx-bg-blue gx-size-40 gx-mr-3"
      }, " ", mail.from.name.charAt(0).toUpperCase()) : __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Avatar"], {
        className: "gx-size-40 gx-mr-3",
        alt: "Alice Freeman",
        src: mail.from.avatar
      }), __jsx("div", {
        className: "gx-sender-name"
      }, mail.from.name, __jsx("div", {
        className: "gx-send-to gx-text-grey"
      }, "to me")), __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Dropdown"], {
        trigger: ['click'],
        overlay: this.optionMenu()
      }, __jsx("span", {
        className: "gx-ml-auto"
      }, __jsx("i", {
        className: "icon icon-ellipse-v gx-icon-btn"
      })))), __jsx("div", {
        className: "gx-show-link",
        onClick: function onClick() {
          _this2.setState({
            showDetail: !_this2.state.showDetail
          });
        }
      }, this.state.showDetail ? 'Hide Detail' : 'Show Detail'), this.state.showDetail && __jsx("div", {
        className: "gx-show-detail"
      }, __jsx("div", null, __jsx("strong", null, "From: "), mail.from.email), __jsx("div", null, __jsx("strong", null, " To: "), mail.to.map(function (to, index) {
        return __jsx("span", null, index > 0 && ', ', " ", to.email);
      })), __jsx("div", null, __jsx("strong", null, "Date: "), mail.time, " ")), __jsx("p", null, mail.message), mail.hasAttachments && __jsx("div", {
        className: "gx-attachment-block"
      }, __jsx("h3", null, "Attachments (", mail.attachments.length, ")"), __jsx("div", {
        className: "gx-attachment-row"
      }, mail.attachments.map(function (attachment, index) {
        return __jsx("div", {
          className: "gx-attachment-col",
          key: index
        }, __jsx("img", {
          src: attachment.preview,
          alt: attachment.fileName
        }), __jsx("div", {
          className: "size"
        }, attachment.size));
      }))))));
    }
  }]);

  return MailDetail;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (MailDetail);

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

/***/ "./app/components/mail/MailList/MailListItem/index.js":
/*!************************************************************!*\
  !*** ./app/components/mail/MailList/MailListItem/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _routes_inbuiltApps_mail_data_labels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../routes/inbuiltApps/mail/data/labels */ "./routes/inbuiltApps/mail/data/labels.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var MailListItem = function MailListItem(_ref) {
  var mail = _ref.mail,
      onMailSelect = _ref.onMailSelect,
      onMailChecked = _ref.onMailChecked,
      onStartSelect = _ref.onStartSelect;
  return __jsx("div", {
    className: "gx-module-list-item gx-mail-cell"
  }, __jsx("div", {
    className: "gx-module-list-icon"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
    color: "primary",
    className: "gx-icon-btn",
    checked: mail.selected,
    onClick: function onClick(event) {
      event.stopPropagation();
      onMailChecked(mail);
    },
    value: "SelectMail"
  }), __jsx("div", {
    onClick: function onClick() {
      onStartSelect(mail);
    }
  }, mail.starred ? __jsx("i", {
    className: "gx-icon-btn icon icon-star"
  }) : __jsx("i", {
    className: "gx-icon-btn icon icon-star-o"
  })), __jsx("div", {
    className: "gx-ml-2"
  }, mail.from.avatar === '' ? __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
    className: "gx-avatar gx-bg-blue gx-size-40"
  }, " ", mail.from.name.charAt(0).toUpperCase()) : __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
    className: "gx-size-40",
    alt: "Alice Freeman",
    src: mail.from.avatar
  }))), __jsx("div", {
    className: "gx-mail-list-info",
    onClick: function onClick() {
      onMailSelect(mail);
    }
  }, __jsx("div", {
    className: "gx-module-list-content"
  }, __jsx("div", {
    className: "gx-mail-user-des"
  }, __jsx("span", {
    className: "gx-sender-name"
  }, mail.from.name), __jsx("span", {
    className: "gx-toolbar-separator"
  }, "\xA0"), __jsx("span", {
    className: "gx-d-inline-block gx-text-truncate gx-send-subject"
  }, mail.subject), mail.hasAttachments && __jsx("i", {
    className: "icon icon-attachment"
  }), __jsx("div", {
    className: "gx-time"
  }, mail.time)), __jsx("div", {
    className: "gx-message"
  }, __jsx("p", {
    className: "gx-text-truncate"
  }, " ", mail.message)), __jsx("div", {
    className: "gx-labels"
  }, _routes_inbuiltApps_mail_data_labels__WEBPACK_IMPORTED_MODULE_2__["default"].map(function (label, index) {
    return mail.labels.includes(label.id) && __jsx("div", {
      key: index,
      className: "gx-badge gx-text-white gx-bg-".concat(label.color)
    }, label.title);
  })))));
};

_c = MailListItem;
/* harmony default export */ __webpack_exports__["default"] = (MailListItem);

var _c;

$RefreshReg$(_c, "MailListItem");

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

/***/ "./app/components/mail/MailList/index.js":
/*!***********************************************!*\
  !*** ./app/components/mail/MailList/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_CustomScrollbars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../util/CustomScrollbars */ "./util/CustomScrollbars.js");
/* harmony import */ var _MailListItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MailListItem */ "./app/components/mail/MailList/MailListItem/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var MailList = function MailList(_ref) {
  var mails = _ref.mails,
      onMailSelect = _ref.onMailSelect,
      onMailChecked = _ref.onMailChecked,
      onStartSelect = _ref.onStartSelect;
  return __jsx("div", {
    className: "gx-module-list gx-mail-list"
  }, __jsx(_util_CustomScrollbars__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "gx-module-content-scroll"
  }, mails.map(function (mail, index) {
    return __jsx(_MailListItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: index,
      mail: mail,
      onMailSelect: onMailSelect,
      onMailChecked: onMailChecked,
      onStartSelect: onStartSelect
    });
  })));
};

_c = MailList;
/* harmony default export */ __webpack_exports__["default"] = (MailList);

var _c;

$RefreshReg$(_c, "MailList");

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

/***/ "./routes/inbuiltApps/Mail/data/filters.js":
/*!*************************************************!*\
  !*** ./routes/inbuiltApps/Mail/data/filters.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony default export */ __webpack_exports__["default"] = ([{
  'id': 0,
  'handle': 'starred',
  'title': 'Starred',
  'icon': 'star'
}, {
  'id': 1,
  'handle': 'important',
  'title': 'Important',
  'icon': 'tag'
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

/***/ "./routes/inbuiltApps/Mail/data/folders.js":
/*!*************************************************!*\
  !*** ./routes/inbuiltApps/Mail/data/folders.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony default export */ __webpack_exports__["default"] = ([{
  'id': 0,
  'handle': 'inbox',
  'title': 'Inbox',
  'icon': 'inbox'
}, {
  'id': 1,
  'handle': 'sent',
  'title': 'Sent',
  'icon': 'sent'
}, {
  'id': 2,
  'handle': 'drafts',
  'title': 'Drafts',
  'icon': 'draft'
}, {
  'id': 3,
  'handle': 'spam',
  'title': 'Spam',
  'icon': 'spam'
}, {
  'id': 4,
  'handle': 'trash',
  'title': 'Trash',
  'icon': 'trash'
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

/***/ "./routes/inbuiltApps/Mail/data/labels.js":
/*!************************************************!*\
  !*** ./routes/inbuiltApps/Mail/data/labels.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony default export */ __webpack_exports__["default"] = ([{
  'id': 0,
  'handle': 'note',
  'title': 'PayPal',
  'color': 'purple'
}, {
  'id': 1,
  'handle': 'paypal',
  'title': 'Upwork',
  'color': 'amber'
}, {
  'id': 2,
  'handle': 'invoice',
  'title': 'In-house',
  'color': 'green'
}, {
  'id': 3,
  'handle': 'amazon',
  'title': 'Clients',
  'color': 'light-blue'
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

/***/ "./routes/inbuiltApps/Mail/data/mails.js":
/*!***********************************************!*\
  !*** ./routes/inbuiltApps/Mail/data/mails.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony default export */ __webpack_exports__["default"] = ([{
  'id': '15453ba60d3baa5daaf',
  'from': {
    'name': 'Domnic Harris',
    'avatar': 'https://via.placeholder.com/150x150',
    'email': 'domnicharris@example.com'
  },
  'to': [{
    'name': 'me',
    'email': 'robert.johnson@example.com'
  }, {
    'name': 'me',
    'email': 'robert.johnson@example.com'
  }],
  'subject': 'Fusce a libero pellentesque',
  'message': 'Maecenas sem arcu, scelerisque in odio vel, porttitor dignissim purus. Sed vehicula commodo porta. Etiam nec dictum mauris. Ut imperdiet maximus orci vitae ornare. Nullam et libero sit amet tellus ultricies rutrum et sit amet nisl. Pellentesque condimentum diam sed hendrerit facilisis. Suspendisse bibendum convallis quam, sit amet rutrum nisi pulvinar et. Nunc placerat, diam at scelerisque viverra, mi velit auctor nibh, at rhoncus erat ex vitae felis. Integer sed ante eget est rutrum ultrices ut non ipsum.',
  'read': true,
  'starred': false,
  'important': false,
  'hasAttachments': false,
  'labels': [3, 2],
  'selected': false,
  'folder': 0
}, {
  'id': '15453a06c08fb021776',
  'from': {
    'name': 'Garry Sobars',
    'avatar': 'https://via.placeholder.com/150x150',
    'email': 'danielleobrien@example.com'
  },
  'to': [{
    'name': 'me',
    'email': 'robert.johnson@example.com'
  }],
  'subject': 'Nullam id ex at augue pharetra vestibulum eget id mauris.',
  'message': 'Cras bibendum tortor tortor, eu luctus risus gravida ut. Suspendisse nisi tortor, consequat at pellentesque quis, dapibus vel risus. Praesent aliquam sit amet diam quis luctus. Nulla facilisi. Maecenas id molestie tortor. Nulla eget pretium nulla. Etiam consequat dictum velit, at egestas lacus laoreet ac. Ut facilisis massa vel mi fringilla, non blandit eros dictum. Integer in tellus vitae nisi tincidunt pulvinar. Maecenas ac ante ut felis feugiat ornare id a quam. Quisque feugiat ante quis ornare placerat.',
  'time': '4 Dec',
  'read': true,
  'starred': true,
  'important': false,
  'hasAttachments': false,
  'labels': [1, 3],
  'selected': false,
  'folder': 0
}, {
  'id': '1541ca7af66da284177',
  'from': {
    'name': 'Stella Brown',
    'avatar': '',
    'email': 'stellgrown@example.com'
  },
  'to': [{
    'name': 'me',
    'email': 'robert.johnson@example.com'
  }],
  'subject': 'Vivamus venenatis tempus ipsum, id finibus libero aliquet convallis.',
  'message': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lorem diam, pulvinar id nisl non, ultrices maximus nibh. Suspendisse ut justo velit. Nullam ac ultrices risus, quis auctor orci. Vestibulum volutpat nisi et neque porta ullamcorper. Maecenas porttitor porta erat ac suscipit. Sed cursus leo ut elementum fringilla. Maecenas semper viverra erat, vel ullamcorper dui efficitur in. Vestibulum placerat imperdiet tellus, et tincidunt eros posuere eget. Proin sit amet facilisis libero. Nulla eget est ut erat aliquet rhoncus. Quisque ac urna vitae dui hendrerit sollicitudin vel id sem.  In eget ante sapien. Quisque consequat velit non ante finibus, vel placerat erat ultricies. Aliquam bibendum justo erat, ultrices vehicula dolor elementum a. Mauris eu nisl feugiat ligula molestie eleifend.\n Aliquam efficitur venenatis velit ac porta. Vivamus vitae pulvinar tellus. Donec odio enim, auctor eget nibh mattis, ultricies dignissim lacus. Phasellus non tincidunt dui. Nulla eu arcu lorem.  Donec non hendrerit augue, lobortis sollicitudin odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis sit amet euismod enim, eget vestibulum justo. Fusce a placerat lectus, eget feugiat purus. Cras risus ante, faucibus eget justo commodo, volutpat tempor ante. Donec sit amet leo venenatis, gravida quam sit amet, blandit dui. In quam ante, elementum ut faucibus nec, tristique vitae dui.  \n \n Praesent vel erat at enim placerat luctus vel ut ipsum. In congue tempor mi, non ornare lectus condimentum at. Aenean libero diam, finibus eget sapien et, tristique fermentum lorem.  ',
  'time': '3 Dec',
  'read': true,
  'starred': false,
  'important': false,
  'hasAttachments': false,
  'labels': [],
  'selected': false,
  'folder': 0
}, {
  'id': '154297167e781781745',
  'from': {
    'name': 'Steve Jonson',
    'avatar': '',
    'email': 'stevejonson@example.com'
  },
  'to': [{
    'name': 'me',
    'email': 'robert.johnson@example.com'
  }],
  'subject': 'Donec ut ante tristique, gravida justo vitae',
  'message': 'dictum at ligula vitae, posuere sagittis augue. Nam vitae eros quis felis consectetur egestas vitae vitae massa. Vestibulum tincidunt nisi neque, eu ullamcorper risus aliquet vel. Nunc ut lorem dapibus, interdum nulla vel, euismod elit. Fusce a mollis erat, non egestas dui. Fusce eu rutrum orci. Aliquam hendrerit metus sit amet interdum iaculis. Morbi eget nibh ut nibh convallis fermentum vitae ac mauris. Phasellus ligula purus, eleifend vel massa ut, interdum pulvinar sapien. Nullam a ex nec elit condimentum mattis. Nullam sit amet dictum neque, vel sagittis eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. ',
  'time': '3 Dec',
  'read': true,
  'starred': false,
  'important': false,
  'hasAttachments': false,
  'labels': [],
  'selected': false,
  'folder': 0
}, {
  'id': '15427f4c1b7f3953234',
  'from': {
    'name': 'Ira Shorter',
    'avatar': '',
    'email': 'irashorter@example.com'
  },
  'to': [{
    'name': 'me',
    'email': 'robert.johnson@example.com'
  }],
  'subject': 'Commits that need to be pushed lorem ipsum dolor sit amet',
  'message': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lorem diam, pulvinar id nisl non, ultrices maximus nibh. Suspendisse ut justo velit. Nullam ac ultrices risus, quis auctor orci. Vestibulum volutpat nisi et neque porta ullamcorper. Maecenas porttitor porta erat ac suscipit. Sed cursus leo ut elementum fringilla. Maecenas semper viverra erat, vel ullamcorper dui efficitur in. Vestibulum placerat imperdiet tellus, et tincidunt eros posuere eget. Proin sit amet facilisis libero. Nulla eget est ut erat aliquet rhoncus. Quisque ac urna vitae dui hendrerit sollicitudin vel id sem.  In eget ante sapien. Quisque consequat velit non ante finibus, vel placerat erat ultricies. Aliquam bibendum justo erat, ultrices vehicula dolor elementum a. Mauris eu nisl feugiat ligula molestie eleifend.\n Aliquam efficitur venenatis velit ac porta. Vivamus vitae pulvinar tellus. Donec odio enim, auctor eget nibh mattis, ultricies dignissim lacus. Phasellus non tincidunt dui. Nulla eu arcu lorem.  Donec non hendrerit augue, lobortis sollicitudin odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis sit amet euismod enim, eget vestibulum justo. Fusce a placerat lectus, eget feugiat purus. Cras risus ante, faucibus eget justo commodo, volutpat tempor ante. Donec sit amet leo venenatis, gravida quam sit amet, blandit dui. In quam ante, elementum ut faucibus nec, tristique vitae dui.  \n \n Praesent vel erat at enim placerat luctus vel ut ipsum. In congue tempor mi, non ornare lectus condimentum at. Aenean libero diam, finibus eget sapien et, tristique fermentum lorem.  ',
  'time': '2 Dec',
  'read': true,
  'starred': false,
  'important': false,
  'hasAttachments': false,
  'labels': [],
  'selected': false,
  'folder': 3
}, {
  'id': '15459251a6d6b397565',
  'from': {
    'name': 'Alex Dolgove',
    'avatar': 'https://via.placeholder.com/150x150',
    'email': 'alexdolgove@example.com'
  },
  'to': [{
    'name': 'me',
    'email': 'robert.johnson@example.com'
  }],
  'subject': 'Ut tincidunt massa non elementum fermentum..',
  'message': 'Nullam vel ipsum eget odio viverra pellentesque. Nulla auctor eu felis eget vulputate. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque quam nisi, pulvinar vitae nulla sed, blandit auctor lacus. Vestibulum et semper lorem. Suspendisse interdum est neque, ut tempus eros ultricies et. Proin ultricies elit ac est egestas pharetra. Praesent id mollis enim. Suspendisse quis arcu nec lacus molestie pharetra sit amet in mauris.',
  'time': '2 Dec',
  'read': false,
  'starred': false,
  'important': true,
  'hasAttachments': true,
  'attachments': [{
    'type': 'image',
    'fileName': 'bike',
    'preview': 'https://via.placeholder.com/500x333',
    'url': '',
    'size': '1.1Mb'
  }, {
    'type': 'image',
    'fileName': 'burgers',
    'preview': 'https://via.placeholder.com/500x333',
    'url': '',
    'size': '380kb'
  }, {
    'type': 'image',
    'fileName': 'camera',
    'preview': 'https://via.placeholder.com/600x400',
    'url': 'https://via.placeholder.com/600x400',
    'size': '17Mb'
  }],
  'labels': [1],
  'selected': false,
  'folder': 0
}, {
  'id': '154588a0864d2881124',
  'from': {
    'name': 'Domnic Brown',
    'avatar': 'https://via.placeholder.com/640x420',
    'email': 'domnicbrown@example.com'
  },
  'to': [{
    'name': 'me',
    'email': 'robert.johnson@example.com'
  }],
  'subject': 'Fusce eu rutrum orci. Aliquam hendrerit metus sit amet interdum ',
  'message': 'Phasellus ligula purus, eleifend vel massa ut, interdum pulvinar sapien. Nullam a ex nec elit condimentum mattis. Nullam sit amet dictum neque, vel sagittis eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas..',
  'time': '1 Dec',
  'read': false,
  'starred': false,
  'important': false,
  'hasAttachments': false,
  'labels': [],
  'selected': false,
  'folder': 0
}, {
  'id': '154537435d5b32bf11a',
  'from': {
    'name': 'Brian Lara',
    'avatar': '',
    'email': 'brianlara@example.com'
  },
  'to': [{
    'name': 'me',
    'email': 'robert.johnson@example.com'
  }],
  'subject': 'Quisque felis nisi, iaculis at lacinia et.',
  'message': 'Aenean facilisis, lorem eget interdum tristique, velit odio tempus orci, sed molestie felis ipsum dignissim leo. Praesent volutpat convallis molestie. Praesent eu massa gravida, semper lacus id, blandit turpis. Nullam posuere sodales dignissim. Nunc commodo dui sit amet posuere lobortis. Aliquam placerat mi at felis laoreet, non aliquam odio varius. Nulla ultrices leo vel metus finibus, tempor feugiat velit mattis. Donec et commodo nisl, sit amet dignissim mi. Ut ullamcorper lacus sed magna pretium commodo. Sed dictum auctor sem vitae tincidunt. Morbi ut justo sit amet tortor tincidunt aliquet. Aenean at est in lorem pulvinar fermentum.',
  'time': '1 Dec',
  'read': true,
  'starred': false,
  'important': false,
  'hasAttachments': false,
  'labels': [],
  'selected': false,
  'folder': 0
}, {
  'id': '1544e43dcdae6ebf876',
  'from': {
    'name': 'Jeson Born',
    'avatar': 'https://via.placeholder.com/150x150',
    'email': 'jesonborn@example.com'
  },
  'to': [{
    'name': 'me',
    'email': 'robert.johnson@example.com'
  }],
  'subject': 'The standard Lorem Ipsum passage',
  'message': 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided.\n But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse painsAt vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. ',
  'time': '30 Nov',
  'read': true,
  'starred': false,
  'important': true,
  'hasAttachments': false,
  'labels': [2],
  'selected': false,
  'folder': 0
}, {
  'id': '1543ee3a5b43e0f9f45',
  'from': {
    'name': 'Domnic White',
    'avatar': '',
    'email': 'domnicwhite@example.com'
  },
  'to': [{
    'name': 'me',
    'email': 'robert.johnson@example.com'
  }],
  'subject': 'Cras bibendum tortor tortor.',
  'message': 'Cras bibendum tortor tortor, eu luctus risus gravida ut. Suspendisse nisi tortor, consequat at pellentesque quis, dapibus vel risus. Praesent aliquam sit amet diam quis luctus. Nulla facilisi. Maecenas id molestie tortor. Nulla eget pretium nulla. Etiam consequat dictum velit, at egestas lacus laoreet ac. Ut facilisis massa vel mi fringilla, non blandit eros dictum. Integer in tellus vitae nisi tincidunt pulvinar. Maecenas ac ante ut felis feugiat ornare id a quam. Quisque feugiat ante quis ornare placerat.',
  'time': '30 Nov',
  'read': true,
  'starred': false,
  'important': false,
  'hasAttachments': false,
  'labels': [],
  'selected': false,
  'folder': 0
}, {
  'id': '1543cc4515df3146112',
  'from': {
    'name': 'Jimmy Jo',
    'avatar': 'https://via.placeholder.com/150x150',
    'email': 'jimmy.jo@example.com'
  },
  'to': [{
    'name': 'me',
    'email': 'robert.johnson@example.com'
  }],
  'subject': 'Contrary to popular belief. ',
  'message': 'ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.\n This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32',
  'time': '29 Nov',
  'read': true,
  'starred': false,
  'important': false,
  'hasAttachments': false,
  'labels': [],
  'selected': false,
  'folder': 0
}, {
  'id': '154398a4770d7aaf9a2',
  'from': {
    'name': 'John Smith',
    'avatar': 'https://via.placeholder.com/150x150',
    'email': 'johnsmith@example.com'
  },
  'to': [{
    'name': 'me',
    'email': 'robert.johnson@example.com'
  }],
  'subject': 'Ut elementum rhoncus nisl.',
  'message': ['Suspendisse congue ipsum tincidunt justo dictum, sit amet finibus lectus egestas. Proin fermentum nec risus vitae accumsan. Vivamus non ligula eu urna mattis feugiat. Pellentesque ex felis, commodo sed sem a, pharetra semper purus. Curabitur in quam rhoncus, blandit eros tempor, sodales metus. Pellentesque vel luctus ex. Quisque blandit nisl at tincidunt viverra. Phasellus elementum faucibus leo ac molestie.'],
  'time': '1 Dec',
  'read': true,
  'starred': false,
  'important': false,
  'hasAttachments': false,
  'labels': [],
  'selected': false,
  'folder': 0
}, {
  'id': '15438351f87dcd68567',
  'from': {
    'name': 'Jonny Brown',
    'avatar': '',
    'email': 'jonnnybrown@example.com'
  },
  'to': [{
    'name': 'me',
    'email': 'robert.johnson@example.com'
  }],
  'subject': 'Integer nec tempus eros.',
  'message': 'Vestibulum ornare orci hendrerit elit egestas, nec consectetur mi lobortis. Mauris porttitor dolor in neque aliquam, in sollicitudin enim consequat. Fusce pharetra venenatis fermentum.\n \n Maecenas semper nisi quis lectus dictum, vel fermentum purus malesuada. Nunc tincidunt sit amet nunc sit amet eleifend. Sed tellus risus, sagittis id magna in, commodo feugiat risus. Donec commodo pretium dolor non hendrerit. Nullam id leo et quam cursus vestibulum. Ut id aliquet diam, id varius libero. Ut et felis et est eleifend dignissim vitae condimentum ex. Ut a ullamcorper ante, ac laoreet erat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
  'time': '28 Nov',
  'read': true,
  'starred': false,
  'important': false,
  'hasAttachments': false,
  'labels': [0],
  'selected': false,
  'folder': 0
}, {
  'id': '1542d75d929a603125',
  'from': {
    'name': 'Rahim Kadir',
    'avatar': '',
    'email': 'rahimkadir@example.com'
  },
  'to': [{
    'name': 'me',
    'email': 'robert.johnson@example.com'
  }],
  'subject': 'Praesent tortor odio, laoreet.',
  'message': 'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed id eros sit amet lorem viverra tincidunt eget id dolor. Morbi egestas bibendum ipsum at efficitur. Suspendisse at mauris justo. Curabitur elementum ante et lacus blandit, quis faucibus lorem pellentesque. Duis et auctor quam, sed lacinia ante. Nam placerat lacus eu mollis lobortis. Sed placerat, ipsum eu vestibulum gravida, magna sapien feugiat felis, non varius leo mauris vitae ligula. Suspendisse tincidunt nec enim eu porttitor.',
  'time': '27 Nov',
  'read': true,
  'starred': false,
  'important': false,
  'hasAttachments': false,
  'labels': [],
  'selected': false,
  'folder': 0
}, {
  'id': '154204e45a59b168453',
  'from': {
    'name': 'Kadir',
    'avatar': 'https://via.placeholder.com/150x150',
    'email': 'kadirm@example.com'
  },
  'to': [{
    'name': 'me',
    'email': 'robert.johnson@example.com'
  }],
  'subject': 'Many desktop publishing packages',
  'message': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lorem diam, pulvinar id nisl non, ultrices maximus nibh. Suspendisse ut justo velit. Nullam ac ultrices risus, quis auctor orci. Vestibulum volutpat nisi et neque porta ullamcorper. Maecenas porttitor porta erat ac suscipit. Sed cursus leo ut elementum fringilla. Maecenas semper viverra erat, vel ullamcorper dui efficitur in. Vestibulum placerat imperdiet tellus, et tincidunt eros posuere eget. Proin sit amet facilisis libero. Nulla eget est ut erat aliquet rhoncus. Quisque ac urna vitae dui hendrerit sollicitudin vel id sem.  In eget ante sapien. Quisque consequat velit non ante finibus, vel placerat erat ultricies. Aliquam bibendum justo erat, ultrices vehicula dolor elementum a.  \n \n Mauris eu nisl feugiat ligula molestie eleifend. Aliquam efficitur venenatis velit ac porta. Vivamus vitae pulvinar tellus. Donec odio enim, auctor eget nibh mattis, ultricies dignissim lacus.\n Phasellus non tincidunt dui. Nulla eu arcu lorem.  Donec non hendrerit augue, lobortis sollicitudin odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis sit amet euismod enim, eget vestibulum justo. Fusce a placerat lectus, eget feugiat purus. Cras risus ante, faucibus eget justo commodo, volutpat tempor ante. Donec sit amet leo venenatis, gravida quam sit amet, blandit dui. In quam ante, elementum ut faucibus nec, tristique vitae dui. Praesent vel erat at enim placerat luctus vel ut ipsum. \n \n In congue tempor mi, non ornare lectus condimentum at. Aenean libero diam, finibus eget sapien et, tristique fermentum lorem.  ',
  'time': '26 Nov',
  'read': true,
  'starred': false,
  'important': false,
  'hasAttachments': false,
  'labels': [0],
  'selected': false,
  'folder': 3
}, {
  'id': '1541dd1e05dfc439216',
  'from': {
    'name': 'Stella Johnson',
    'avatar': 'https://via.placeholder.com/150x150',
    'email': 'stella-johnson@example.com'
  },
  'to': [{
    'name': 'me',
    'email': 'robert.johnson@example.com'
  }],
  'subject': 'Section 1.10.32 of "de',
  'message': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lorem diam, pulvinar id nisl non, ultrices maximus nibh. Suspendisse ut justo velit. Nullam ac ultrices risus, quis auctor orci. Vestibulum volutpat nisi et neque porta ullamcorper. Maecenas porttitor porta erat ac suscipit. Sed cursus leo ut elementum fringilla. \n \n Maecenas semper viverra erat, vel ullamcorper dui efficitur in. Vestibulum placerat imperdiet tellus, et tincidunt eros posuere eget. Proin sit amet facilisis libero. Nulla eget est ut erat aliquet rhoncus. Quisque ac urna vitae dui hendrerit sollicitudin vel id sem.  In eget ante sapien. Quisque consequat velit non ante finibus, vel placerat erat ultricies. Aliquam bibendum justo erat, ultrices vehicula dolor elementum a. Mauris eu nisl feugiat ligula molestie eleifend. Aliquam efficitur venenatis velit ac porta. Vivamus vitae pulvinar tellus. Donec odio enim, auctor eget nibh mattis, ultricies dignissim lacus.\n Phasellus non tincidunt dui. Nulla eu arcu lorem.  Donec non hendrerit augue, lobortis sollicitudin odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis sit amet euismod enim, eget vestibulum justo. Fusce a placerat lectus, eget feugiat purus. Cras risus ante, faucibus eget justo commodo, volutpat tempor ante. Donec sit amet leo venenatis, gravida quam sit amet, blandit dui. In quam ante, elementum ut faucibus nec, tristique vitae dui. Praesent vel erat at enim placerat luctus vel ut ipsum. In congue tempor mi, non ornare lectus condimentum at. Aenean libero diam, finibus eget sapien et, tristique fermentum lorem.  ',
  'time': '25 Nov',
  'read': true,
  'starred': false,
  'important': false,
  'hasAttachments': false,
  'labels': [],
  'selected': false,
  'folder': 3
}, {
  'id': '1541dd1e05dfc439217',
  'from': {
    'name': 'Steve Smith',
    'avatar': 'https://via.placeholder.com/150x150',
    'email': 'stevesmith@example.com'
  },
  'to': [{
    'name': 'me',
    'email': 'robert.johnson@example.com'
  }],
  'subject': 'Integer nec tempus eros.',
  'message': 'Curabitur id rutrum ex. Morbi tempus libero eget mauris ultricies venenatis. Curabitur eget pellentesque lorem. Morbi in tempor sem, vel posuere odio. Vivamus sit amet efficitur tortor. Fusce in tortor non lorem blandit eleifend quis eu risus. Donec lobortis ex justo, sed suscipit dolor posuere eget.',
  'time': '24 Nov',
  'read': true,
  'starred': false,
  'important': false,
  'hasAttachments': false,
  'labels': [],
  'selected': false,
  'folder': 3
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

/***/ "./routes/inbuiltApps/Mail/data/options.js":
/*!*************************************************!*\
  !*** ./routes/inbuiltApps/Mail/data/options.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony default export */ __webpack_exports__["default"] = ([{
  'title': 'All'
}, {
  'title': 'None'
}, {
  'title': 'Read'
}, {
  'title': 'Unread'
}, {
  'title': 'Starred'
}, {
  'title': 'Unstarred'
}, {
  'title': 'Important'
}, {
  'title': 'Unimportant'
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

/***/ "./routes/inbuiltApps/Mail/index.js":
/*!******************************************!*\
  !*** ./routes/inbuiltApps/Mail/index.js ***!
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
/* harmony import */ var _data_mails__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./data/mails */ "./routes/inbuiltApps/Mail/data/mails.js");
/* harmony import */ var _data_folders__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./data/folders */ "./routes/inbuiltApps/Mail/data/folders.js");
/* harmony import */ var _data_filters__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./data/filters */ "./routes/inbuiltApps/Mail/data/filters.js");
/* harmony import */ var _data_labels__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./data/labels */ "./routes/inbuiltApps/Mail/data/labels.js");
/* harmony import */ var _data_options__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./data/options */ "./routes/inbuiltApps/Mail/data/options.js");
/* harmony import */ var _app_components_mail_MailList__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../app/components/mail/MailList */ "./app/components/mail/MailList/index.js");
/* harmony import */ var _app_components_mail_Compose__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../app/components/mail/Compose */ "./app/components/mail/Compose/index.js");
/* harmony import */ var _app_components_AppModuleHeader__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../app/components/AppModuleHeader */ "./app/components/AppModuleHeader/index.js");
/* harmony import */ var _app_components_mail_MailDetail__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../app/components/mail/MailDetail */ "./app/components/mail/MailDetail/index.js");
/* harmony import */ var _util_IntlMessages__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../util/IntlMessages */ "./util/IntlMessages.js");
/* harmony import */ var _app_components_CircularProgress__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../app/components/CircularProgress */ "./app/components/CircularProgress/index.js");
/* harmony import */ var _app_hoc_securedPage__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../app/hoc/securedPage */ "./app/hoc/securedPage/index.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./index.css */ "./routes/inbuiltApps/Mail/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_22__);







var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }


















var Mail = /*#__PURE__*/function (_PureComponent) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Mail, _PureComponent);

  var _super = _createSuper(Mail);

  function Mail() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Mail);

    _this = _super.call(this);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "MailSideBar", function () {
      return __jsx("div", {
        className: "gx-module-side"
      }, __jsx("div", {
        className: "gx-module-side-header"
      }, __jsx("div", {
        className: "gx-module-logo"
      }, __jsx("i", {
        className: "icon icon-chat gx-mr-4"
      }), __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_19__["default"], {
        id: "sidebar.mail.mailbox"
      }))), __jsx("div", {
        className: "gx-module-side-content"
      }, __jsx(_util_CustomScrollbars__WEBPACK_IMPORTED_MODULE_9__["default"], {
        className: "gx-module-side-scroll"
      }, __jsx("div", {
        className: "gx-module-add-task"
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        type: "primary",
        className: "gx-btn-block",
        onClick: function onClick() {
          _this.setState({
            composeMail: true
          });
        }
      }, __jsx("i", {
        className: "icon icon-edit gx-mr-2"
      }), __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_19__["default"], {
        id: "sidebar.mail.compose"
      }))), __jsx("ul", {
        className: "gx-module-nav"
      }, _this.getNavFolders(), __jsx("li", {
        className: "gx-module-nav-label"
      }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_19__["default"], {
        id: "sidebar.mail.filters"
      })), _this.getNavFilters(), __jsx("li", {
        className: "gx-module-nav-label"
      }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_19__["default"], {
        id: "sidebar.mail.labels"
      })), _this.getNavLabels()))));
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "onDeleteMail", function () {
      var mails = _this.state.allMail.map(function (mail) {
        return mail.selected && mail.folder === _this.state.selectedFolder ? _objectSpread(_objectSpread({}, mail), {}, {
          folder: 4,
          selected: false
        }) : mail;
      });

      _this.setState({
        alertMessage: 'Mail Deleted Successfully',
        showMessage: true,
        selectedMails: 0,
        allMail: mails,
        folderMails: mails.filter(function (mail) {
          return mail.folder === _this.state.selectedFolder;
        })
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "getNavFolders", function () {
      return _data_folders__WEBPACK_IMPORTED_MODULE_11__["default"].map(function (folder, index) {
        return __jsx("li", {
          key: index,
          onClick: function onClick() {
            var filterMails = _this.state.allMail.filter(function (mail) {
              return mail.folder === folder.id;
            });

            _this.setState({
              selectedFolder: folder.id,
              noContentFoundMessage: 'No Mail found in selected folder',
              currentMail: null,
              loader: true,
              folderMails: filterMails
            });

            setTimeout(function () {
              _this.setState({
                loader: false
              });
            }, 1500);
          }
        }, __jsx("span", {
          className: "".concat(_this.state.selectedFolder === folder.id ? 'active gx-link' : 'gx-link')
        }, __jsx("i", {
          className: "icon icon-".concat(folder.icon)
        }), __jsx("span", null, folder.title)));
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "onFolderMenuItemSelect", function (e) {
      var id = +e.key;

      var mails = _this.state.allMail.map(function (mail) {
        return mail.selected && mail.folder === _this.state.selectedFolder ? _objectSpread(_objectSpread({}, mail), {}, {
          folder: id,
          selected: false
        }) : mail;
      });

      _this.setState({
        selectedMails: 0,
        allMail: mails,
        noContentFoundMessage: 'No Mail found in selected folder',
        alertMessage: 'Mail has been moved successfully',
        showMessage: true,
        folderMails: mails.filter(function (mail) {
          return mail.folder === _this.state.selectedFolder;
        })
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "onLabelMenuItemSelect", function (e) {
      var id = +e.key;

      var mails = _this.state.allMail.map(function (mail) {
        if (mail.selected && mail.folder === _this.state.selectedFolder) {
          if (mail.labels.includes(id)) {
            return _objectSpread(_objectSpread({}, mail), {}, {
              labels: _this.removeLabel(mail, id)
            });
          } else {
            return _objectSpread(_objectSpread({}, mail), {}, {
              labels: _this.addLabel(mail, id)
            });
          }
        } else {
          return mail;
        }
      });

      _this.setState({
        noContentFoundMessage: 'No Mail found in selected label',
        alertMessage: 'Label Updated Successfully',
        showMessage: true,
        allMail: mails,
        folderMails: mails.filter(function (mail) {
          return mail.folder === _this.state.selectedFolder;
        })
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleRequestClose", function () {
      _this.setState({
        composeMail: false,
        showMessage: false
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "getNavFilters", function () {
      return _data_filters__WEBPACK_IMPORTED_MODULE_12__["default"].map(function (filter, index) {
        return __jsx("li", {
          key: index,
          onClick: function onClick() {
            var filterMails = _this.state.allMail.filter(function (mail) {
              if (filter.id === 0 && mail.starred && mail.folder === _this.state.selectedFolder) {
                return mail;
              } else if (filter.id === 1 && mail.important && mail.folder === _this.state.selectedFolder) {
                return mail;
              }

              return null;
            });

            _this.setState({
              noContentFoundMessage: 'No Mail found in selected filter',
              loader: true,
              folderMails: filterMails
            });

            setTimeout(function () {
              _this.setState({
                loader: false
              });
            }, 1500);
          }
        }, __jsx("span", {
          className: "gx-link"
        }, __jsx("i", {
          className: "icon icon-".concat(filter.icon)
        }), __jsx("span", null, filter.title)));
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "onOptionMenuItemSelect", function (e) {
      switch (e.key) {
        case 'All':
          _this.handleRequestClose();

          _this.getAllMail();

          break;

        case 'None':
          _this.handleRequestClose();

          _this.getUnselectedAllMail();

          break;

        case 'Read':
          _this.handleRequestClose();

          _this.getReadMail();

          break;

        case 'Unread':
          _this.handleRequestClose();

          _this.getUnreadMail();

          break;

        case 'Starred':
          _this.handleRequestClose();

          _this.getStarredMail();

          break;

        case 'Unstarred':
          _this.handleRequestClose();

          _this.getUnStarredMail();

          break;

        case 'Important':
          _this.handleRequestClose();

          _this.getImportantMail();

          break;

        case 'Unimportant':
          _this.handleRequestClose();

          _this.getUnimportantMail();

          break;

        default:
          break;
      }
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "getAllMail", function () {
      var mails = _this.state.allMail.map(function (mail) {
        return mail.folder === _this.state.selectedFolder ? _objectSpread(_objectSpread({}, mail), {}, {
          selected: true
        }) : mail;
      });

      _this.setState({
        selectedMails: mails.length,
        allMail: mails,
        optionName: 'All',
        folderMails: mails.filter(function (mail) {
          return mail.folder === _this.state.selectedFolder;
        })
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "getUnselectedAllMail", function () {
      var mails = _this.state.allMail.map(function (mail) {
        return mail.folder === _this.state.selectedFolder ? _objectSpread(_objectSpread({}, mail), {}, {
          selected: false
        }) : mail;
      });

      _this.setState({
        selectedMails: 0,
        allMail: mails,
        optionName: 'None',
        folderMails: mails.filter(function (mail) {
          return mail.folder === _this.state.selectedFolder;
        })
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "getReadMail", function () {
      var selectedMail = 0;

      var mails = _this.state.allMail.filter(function (mail) {
        return mail.folder === _this.state.selectedFolder;
      });

      mails = mails.map(function (mail) {
        if (mail.read) {
          selectedMail++;
          return _objectSpread(_objectSpread({}, mail), {}, {
            selected: true
          });
        }

        return _objectSpread(_objectSpread({}, mail), {}, {
          selected: false
        });
      });

      _this.setState({
        selectedMails: selectedMail,
        optionName: 'Read',
        folderMails: mails.filter(function (mail) {
          return mail.folder === _this.state.selectedFolder;
        })
      });

      return mails;
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "getUnreadMail", function () {
      var selectedMail = 0;

      var mails = _this.state.allMail.filter(function (mail) {
        return mail.folder === _this.state.selectedFolder;
      });

      mails = mails.map(function (mail) {
        if (!mail.read) {
          selectedMail++;
          return _objectSpread(_objectSpread({}, mail), {}, {
            selected: true
          });
        }

        return _objectSpread(_objectSpread({}, mail), {}, {
          selected: false
        });
      });

      _this.setState({
        selectedMails: selectedMail,
        optionName: 'Unread',
        folderMails: mails.filter(function (mail) {
          return mail.folder === _this.state.selectedFolder;
        })
      });

      return mails;
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "getStarredMail", function () {
      var selectedMail = 0;

      var mails = _this.state.allMail.filter(function (mail) {
        return mail.folder === _this.state.selectedFolder;
      });

      mails = mails.map(function (mail) {
        if (mail.starred) {
          selectedMail++;
          return _objectSpread(_objectSpread({}, mail), {}, {
            selected: true
          });
        }

        return _objectSpread(_objectSpread({}, mail), {}, {
          selected: false
        });
      });

      _this.setState({
        selectedMails: selectedMail,
        optionName: 'Starred',
        folderMails: mails.filter(function (mail) {
          return mail.folder === _this.state.selectedFolder;
        })
      });

      return mails;
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "getUnStarredMail", function () {
      var selectedMail = 0;

      var mails = _this.state.allMail.filter(function (mail) {
        return mail.folder === _this.state.selectedFolder && mail.folder === _this.state.selectedFolder;
      });

      mails = mails.map(function (mail) {
        if (!mail.starred) {
          selectedMail++;
          return _objectSpread(_objectSpread({}, mail), {}, {
            selected: true
          });
        }

        return _objectSpread(_objectSpread({}, mail), {}, {
          selected: false
        });
      });

      _this.setState({
        selectedMails: selectedMail,
        optionName: 'UnStarred',
        folderMails: mails.filter(function (mail) {
          return mail.folder === _this.state.selectedFolder;
        })
      });

      return mails;
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "getImportantMail", function () {
      var selectedMail = 0;

      var mails = _this.state.allMail.filter(function (mail) {
        return mail.folder === _this.state.selectedFolder && mail.folder === _this.state.selectedFolder;
      });

      mails = mails.map(function (mail) {
        if (mail.important) {
          selectedMail++;
          return _objectSpread(_objectSpread({}, mail), {}, {
            selected: true
          });
        }

        return _objectSpread(_objectSpread({}, mail), {}, {
          selected: false
        });
      });

      _this.setState({
        selectedMails: selectedMail,
        optionName: 'Important',
        folderMails: mails.filter(function (mail) {
          return mail.folder === _this.state.selectedFolder;
        })
      });

      return mails;
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "getUnimportantMail", function () {
      var selectedMail = 0;

      var mails = _this.state.allMail.filter(function (mail) {
        return mail.folder === _this.state.selectedFolder && mail.folder === _this.state.selectedFolder;
      });

      mails = mails.map(function (mail) {
        if (!mail.important) {
          selectedMail++;
          return _objectSpread(_objectSpread({}, mail), {}, {
            selected: true
          });
        }

        return _objectSpread(_objectSpread({}, mail), {}, {
          selected: false
        });
      });

      _this.setState({
        selectedMails: selectedMail,
        optionName: 'Unimportant',
        noContentFoundMessage: 'No Mail found in selected Label',
        folderMails: mails.filter(function (mail) {
          return mail.folder === _this.state.selectedFolder;
        })
      });

      return mails;
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "getNavLabels", function () {
      return _data_labels__WEBPACK_IMPORTED_MODULE_13__["default"].map(function (label, index) {
        return __jsx("li", {
          key: index,
          onClick: function onClick() {
            var filterMails = _this.state.allMail.filter(function (mail) {
              return mail.labels.includes(label.id) && mail.folder === _this.state.selectedFolder;
            });

            _this.setState({
              loader: true,
              noContentFoundMessage: 'No Mail found in selected label',
              folderMails: filterMails
            });

            setTimeout(function () {
              _this.setState({
                loader: false
              });
            }, 1500);
          }
        }, __jsx("span", {
          className: "gx-link"
        }, __jsx("i", {
          className: "icon icon-tag gx-text-".concat(label.color)
        }), __jsx("span", null, label.title)));
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "searchMail", function (searchText) {
      if (searchText === '') {
        _this.setState({
          folderMails: _this.state.allMail.filter(function (mail) {
            return !mail.deleted;
          })
        });
      } else {
        var searchMails = _this.state.allMail.filter(function (mail) {
          return !mail.deleted && mail.subject.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
        });

        _this.setState({
          folderMails: searchMails
        });
      }
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "displayMail", function (currentMail, folderMails, noContentFoundMessage) {
      return __jsx("div", {
        className: "gx-module-box-column"
      }, currentMail === null ? folderMails.length === 0 ? __jsx("div", {
        className: "gx-no-content-found gx-text-light gx-d-flex gx-align-items-center gx-justify-content-center"
      }, noContentFoundMessage) : __jsx(_app_components_mail_MailList__WEBPACK_IMPORTED_MODULE_15__["default"], {
        mails: folderMails,
        onStartSelect: _this.onStartSelect.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this)),
        onMailSelect: _this.onMailSelect.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this)),
        onMailChecked: _this.onMailChecked.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this))
      }) : __jsx(_app_components_mail_MailDetail__WEBPACK_IMPORTED_MODULE_18__["default"], {
        mail: currentMail,
        onStartSelect: _this.onStartSelect.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this)),
        onImportantSelect: _this.onImportantSelect.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this))
      }));
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "getMailActions", function () {
      return __jsx("div", {
        className: "gx-flex-row gx-align-items-center"
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Dropdown"], {
        overlay: _this.folderMenu(),
        placement: "bottomRight",
        trigger: ['click']
      }, __jsx("i", {
        className: "icon icon-folder gx-icon-btn"
      })), __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Dropdown"], {
        overlay: _this.labelMenu(),
        placement: "bottomRight",
        trigger: ['click']
      }, __jsx("i", {
        className: "icon icon-tag gx-icon-btn"
      })), __jsx("span", {
        onClick: _this.onDeleteMail.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this))
      }, __jsx("i", {
        className: "icon icon-trash gx-icon-btn"
      })));
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "optionMenu", function () {
      return __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Menu"], {
        id: "option-menu",
        onClick: _this.onOptionMenuItemSelect.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this))
      }, _data_options__WEBPACK_IMPORTED_MODULE_14__["default"].map(function (option) {
        return __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Menu"].Item, {
          key: option.title
        }, option.title);
      }));
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "folderMenu", function () {
      return __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Menu"], {
        id: "folder-menu",
        onClick: _this.onFolderMenuItemSelect.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this))
      }, _data_folders__WEBPACK_IMPORTED_MODULE_11__["default"].map(function (folder) {
        return __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Menu"].Item, {
          key: folder.id
        }, folder.title);
      }));
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "labelMenu", function () {
      return __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Menu"], {
        id: "label-menu",
        onClick: _this.onLabelMenuItemSelect.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this))
      }, _data_labels__WEBPACK_IMPORTED_MODULE_13__["default"].map(function (label) {
        return __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Menu"].Item, {
          key: label.id
        }, label.title);
      }));
    });

    _this.state = {
      searchMail: '',
      noContentFoundMessage: 'No Mail found in selected folder',
      alertMessage: '',
      showMessage: false,
      drawerState: false,
      optionName: 'None',
      anchorEl: null,
      allMail: _data_mails__WEBPACK_IMPORTED_MODULE_10__["default"],
      loader: true,
      currentMail: null,
      user: {
        name: 'Robert Johnson',
        email: 'robert@example.com',
        avatar: 'https://via.placeholder.com/150x150'
      },
      selectedMails: 0,
      selectedFolder: 0,
      composeMail: false,
      folderMails: _data_mails__WEBPACK_IMPORTED_MODULE_10__["default"].filter(function (mail) {
        return mail.folder === 0;
      })
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Mail, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      setTimeout(function () {
        _this2.setState({
          loader: false
        });
      }, 1500);
    }
  }, {
    key: "onMailChecked",
    value: function onMailChecked(data) {
      data.selected = !data.selected;
      var selectedMail = 0;
      var mails = this.state.folderMails.map(function (mail) {
        if (mail.selected) {
          selectedMail++;
        }

        if (mail.id === data.id) {
          if (mail.selected) {
            selectedMail++;
          }

          return data;
        } else {
          return mail;
        }
      });
      this.setState({
        selectedMails: selectedMail,
        folderMails: mails
      });
    }
  }, {
    key: "onAllMailSelect",
    value: function onAllMailSelect() {
      var selectAll = this.state.selectedMails <= this.state.folderMails.length;

      if (selectAll) {
        this.getAllMail();
      } else {
        this.getUnselectedAllMail();
      }
    }
  }, {
    key: "removeLabel",
    value: function removeLabel(mail, label) {
      mail.labels.splice(mail.labels.indexOf(label), 1);

      if (this.state.currentMail !== null && mail.id === this.state.currentMail.id) {
        this.setState({
          currentMail: _objectSpread(_objectSpread({}, mail), {}, {
            labels: mail.labels
          })
        });
      }

      return mail.labels;
    }
  }, {
    key: "onStartSelect",
    value: function onStartSelect(data) {
      data.starred = !data.starred;
      this.setState({
        alertMessage: data.starred ? 'Mail Mark as Star' : 'Mail Remove as Star',
        showMessage: true,
        folderMails: this.state.folderMails.map(function (mail) {
          return mail.id === data.id ? data : mail;
        })
      });
    }
  }, {
    key: "onImportantSelect",
    value: function onImportantSelect(data) {
      data.important = !data.important;
      this.setState({
        alertMessage: data.important ? 'Mail Mark as Important' : 'Mail Remove as Important',
        showMessage: true,
        folderMails: this.state.folderMails.map(function (mail) {
          return mail.id === data.id ? data : mail;
        })
      });
    }
  }, {
    key: "onMailSend",
    value: function onMailSend(data) {
      this.setState({
        alertMessage: 'Mail Sent Successfully',
        showMessage: true,
        folderMails: this.state.allMail.concat(data),
        allMail: this.state.allMail.concat(data)
      });
    }
  }, {
    key: "onMailSelect",
    value: function onMailSelect(mail) {
      var _this3 = this;

      this.setState({
        loader: true,
        currentMail: mail
      });
      setTimeout(function () {
        _this3.setState({
          loader: false
        });
      }, 1500);
    }
  }, {
    key: "addLabel",
    value: function addLabel(mail, label) {
      if (this.state.currentMail !== null && mail.id === this.state.currentMail.id) {
        this.setState({
          currentMail: _objectSpread(_objectSpread({}, mail), {}, {
            labels: mail.labels.concat(label)
          })
        });
      }

      return mail.labels.concat(label);
    }
  }, {
    key: "updateSearch",
    value: function updateSearch(evt) {
      this.setState({
        searchMail: evt.target.value
      });
      this.searchMail(evt.target.value);
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
      var _this4 = this;

      var _this$state = this.state,
          selectedMails = _this$state.selectedMails,
          loader = _this$state.loader,
          currentMail = _this$state.currentMail,
          drawerState = _this$state.drawerState,
          folderMails = _this$state.folderMails,
          composeMail = _this$state.composeMail,
          user = _this$state.user,
          alertMessage = _this$state.alertMessage,
          showMessage = _this$state.showMessage,
          noContentFoundMessage = _this$state.noContentFoundMessage;
      return __jsx("div", {
        className: "gx-main-content"
      }, __jsx("div", {
        className: "gx-app-module"
      }, __jsx("div", {
        className: "gx-d-block gx-d-lg-none"
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Drawer"], {
        placement: "left",
        closable: false,
        visible: drawerState,
        onClose: this.onToggleDrawer.bind(this)
      }, this.MailSideBar())), __jsx("div", {
        className: "gx-module-sidenav gx-d-none gx-d-lg-flex"
      }, this.MailSideBar()), __jsx("div", {
        className: "gx-module-box"
      }, __jsx("div", {
        className: "gx-module-box-header"
      }, __jsx("span", {
        className: "gx-drawer-btn gx-d-flex gx-d-lg-none"
      }, __jsx("i", {
        className: "icon icon-menu gx-icon-btn",
        "aria-label": "Menu",
        onClick: this.onToggleDrawer.bind(this)
      })), __jsx(_app_components_AppModuleHeader__WEBPACK_IMPORTED_MODULE_17__["default"], {
        placeholder: "Search mails",
        user: this.state.user,
        onChange: this.updateSearch.bind(this),
        value: this.state.searchMail
      })), __jsx("div", {
        className: "gx-module-box-content"
      }, __jsx("div", {
        className: "gx-module-box-topbar"
      }, this.state.currentMail === null ? __jsx("div", {
        className: "gx-flex-row gx-align-items-center"
      }, this.state.folderMails.length > 0 ? __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Checkbox"], {
        color: "primary",
        className: "gx-icon-btn",
        indeterminate: selectedMails > 0 && selectedMails < folderMails.length,
        checked: selectedMails > 0,
        onChange: this.onAllMailSelect.bind(this),
        value: "SelectMail"
      }), __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Dropdown"], {
        overlay: this.optionMenu(),
        placement: "bottomRight",
        trigger: ['click']
      }, __jsx("div", null, __jsx("span", {
        className: "gx-px-2"
      }, " ", this.state.optionName), __jsx("i", {
        className: "icon icon-charvlet-down"
      })))) : null) : __jsx("i", {
        className: "icon icon-arrow-left gx-icon-btn",
        onClick: function onClick() {
          _this4.setState({
            currentMail: null
          });
        }
      }), __jsx("div", {
        classID: "toolbar-separator"
      }), selectedMails > 0 && this.getMailActions()), loader ? __jsx("div", {
        className: "gx-loader-view"
      }, __jsx(_app_components_CircularProgress__WEBPACK_IMPORTED_MODULE_20__["default"], null)) : this.displayMail(currentMail, folderMails, noContentFoundMessage), __jsx(_app_components_mail_Compose__WEBPACK_IMPORTED_MODULE_16__["default"], {
        open: composeMail,
        user: user,
        onClose: this.handleRequestClose.bind(this),
        onMailSend: this.onMailSend.bind(this)
      })))), showMessage && antd__WEBPACK_IMPORTED_MODULE_8__["message"].info(__jsx("span", {
        id: "message-id"
      }, alertMessage), 3, this.handleRequestClose));
    }
  }]);

  return Mail;
}(react__WEBPACK_IMPORTED_MODULE_7__["PureComponent"]);

/* harmony default export */ __webpack_exports__["default"] = (Mail);

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

/***/ }),

/***/ "./routes/inbuiltApps/mail/data/labels.js":
/*!************************************************!*\
  !*** ./routes/inbuiltApps/mail/data/labels.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony default export */ __webpack_exports__["default"] = ([{
  'id': 0,
  'handle': 'note',
  'title': 'PayPal',
  'color': 'purple'
}, {
  'id': 1,
  'handle': 'paypal',
  'title': 'Upwork',
  'color': 'amber'
}, {
  'id': 2,
  'handle': 'invoice',
  'title': 'In-house',
  'color': 'green'
}, {
  'id': 3,
  'handle': 'amazon',
  'title': 'Clients',
  'color': 'light-blue'
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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvQXBwTW9kdWxlSGVhZGVyL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9tYWlsL0NvbXBvc2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL21haWwvTWFpbERldGFpbC9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvbWFpbC9NYWlsTGlzdC9NYWlsTGlzdEl0ZW0vaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL21haWwvTWFpbExpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3JvdXRlcy9pbmJ1aWx0QXBwcy9NYWlsL2RhdGEvZmlsdGVycy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcm91dGVzL2luYnVpbHRBcHBzL01haWwvZGF0YS9mb2xkZXJzLmpzIiwid2VicGFjazovL19OX0UvLi9yb3V0ZXMvaW5idWlsdEFwcHMvTWFpbC9kYXRhL2xhYmVscy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcm91dGVzL2luYnVpbHRBcHBzL01haWwvZGF0YS9tYWlscy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcm91dGVzL2luYnVpbHRBcHBzL01haWwvZGF0YS9vcHRpb25zLmpzIiwid2VicGFjazovL19OX0UvLi9yb3V0ZXMvaW5idWlsdEFwcHMvTWFpbC9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcm91dGVzL2luYnVpbHRBcHBzL21haWwvZGF0YS9sYWJlbHMuanMiXSwibmFtZXMiOlsiQXBwTW9kdWxlSGVhZGVyIiwicHJvcHMiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwidmFsdWUiLCJkZWZhdWx0UHJvcHMiLCJzdHlsZU5hbWUiLCJub3RpZmljYXRpb24iLCJhcHBzIiwiVGV4dEFyZWEiLCJJbnB1dCIsIm5hbWUiLCJhY3Rpb24iLCJoZWFkZXJzIiwiYXV0aG9yaXphdGlvbiIsImluZm8iLCJmaWxlIiwic3RhdHVzIiwiY29uc29sZSIsImxvZyIsImZpbGVMaXN0IiwibWVzc2FnZSIsInN1Y2Nlc3MiLCJlcnJvciIsIkNvbXBvc2VNYWlsIiwic3RhdGUiLCJ0byIsImNjIiwiYmNjIiwic3ViamVjdCIsIm9uTWFpbFNlbmQiLCJvbkNsb3NlIiwidXNlciIsIm9wZW4iLCJhdmF0YXIiLCJlbWFpbCIsIk1vbWVudCIsImZvcm1hdCIsInpJbmRleCIsImV2ZW50Iiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJtaW5Sb3dzIiwibWF4Um93cyIsIlJlYWN0IiwiQ29tcG9uZW50Iiwib3B0aW9ucyIsIk1haWxEZXRhaWwiLCJzaG93RGV0YWlsIiwibWFwIiwib3B0aW9uIiwibWFpbCIsIm9uU3RhcnRTZWxlY3QiLCJvbkltcG9ydGFudFNlbGVjdCIsImxhYmVscyIsImxhYmVsIiwiaW5kZXgiLCJpbmNsdWRlcyIsImlkIiwiY29sb3IiLCJ0aXRsZSIsInN0YXJyZWQiLCJpbXBvcnRhbnQiLCJmcm9tIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJvcHRpb25NZW51IiwidGltZSIsImhhc0F0dGFjaG1lbnRzIiwiYXR0YWNobWVudHMiLCJsZW5ndGgiLCJhdHRhY2htZW50IiwicHJldmlldyIsImZpbGVOYW1lIiwic2l6ZSIsIk1haWxMaXN0SXRlbSIsIm9uTWFpbFNlbGVjdCIsIm9uTWFpbENoZWNrZWQiLCJzZWxlY3RlZCIsInN0b3BQcm9wYWdhdGlvbiIsIk1haWxMaXN0IiwibWFpbHMiLCJNYWlsIiwiY29tcG9zZU1haWwiLCJnZXROYXZGb2xkZXJzIiwiZ2V0TmF2RmlsdGVycyIsImdldE5hdkxhYmVscyIsImFsbE1haWwiLCJmb2xkZXIiLCJzZWxlY3RlZEZvbGRlciIsImFsZXJ0TWVzc2FnZSIsInNob3dNZXNzYWdlIiwic2VsZWN0ZWRNYWlscyIsImZvbGRlck1haWxzIiwiZmlsdGVyIiwiZm9sZGVycyIsImZpbHRlck1haWxzIiwibm9Db250ZW50Rm91bmRNZXNzYWdlIiwiY3VycmVudE1haWwiLCJsb2FkZXIiLCJzZXRUaW1lb3V0IiwiaWNvbiIsImUiLCJrZXkiLCJyZW1vdmVMYWJlbCIsImFkZExhYmVsIiwiZmlsdGVycyIsImhhbmRsZVJlcXVlc3RDbG9zZSIsImdldEFsbE1haWwiLCJnZXRVbnNlbGVjdGVkQWxsTWFpbCIsImdldFJlYWRNYWlsIiwiZ2V0VW5yZWFkTWFpbCIsImdldFN0YXJyZWRNYWlsIiwiZ2V0VW5TdGFycmVkTWFpbCIsImdldEltcG9ydGFudE1haWwiLCJnZXRVbmltcG9ydGFudE1haWwiLCJvcHRpb25OYW1lIiwic2VsZWN0ZWRNYWlsIiwicmVhZCIsInNlYXJjaFRleHQiLCJkZWxldGVkIiwic2VhcmNoTWFpbHMiLCJ0b0xvd2VyQ2FzZSIsImluZGV4T2YiLCJiaW5kIiwiZm9sZGVyTWVudSIsImxhYmVsTWVudSIsIm9uRGVsZXRlTWFpbCIsIm9uT3B0aW9uTWVudUl0ZW1TZWxlY3QiLCJvbkZvbGRlck1lbnVJdGVtU2VsZWN0Iiwib25MYWJlbE1lbnVJdGVtU2VsZWN0Iiwic2VhcmNoTWFpbCIsImRyYXdlclN0YXRlIiwiYW5jaG9yRWwiLCJkYXRhIiwic2VsZWN0QWxsIiwic3BsaWNlIiwiY29uY2F0IiwiZXZ0Iiwib25Ub2dnbGVEcmF3ZXIiLCJNYWlsU2lkZUJhciIsInVwZGF0ZVNlYXJjaCIsIm9uQWxsTWFpbFNlbGVjdCIsImdldE1haWxBY3Rpb25zIiwiZGlzcGxheU1haWwiLCJQdXJlQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1BLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRCxFQUFXO0FBQUEsTUFFMUJDLFdBRjBCLEdBRU1ELEtBRk4sQ0FFMUJDLFdBRjBCO0FBQUEsTUFFYkMsUUFGYSxHQUVNRixLQUZOLENBRWJFLFFBRmE7QUFBQSxNQUVIQyxLQUZHLEdBRU1ILEtBRk4sQ0FFSEcsS0FGRztBQUlqQyxTQUNFO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDRTtBQUNFLGFBQVMsRUFBQztBQURaLEtBRUU7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNFO0FBQU8sYUFBUyxFQUFDLHVCQUFqQjtBQUF5QyxRQUFJLEVBQUMsUUFBOUM7QUFBdUQsZUFBVyxFQUFFRixXQUFwRTtBQUNPLFlBQVEsRUFBRUMsUUFEakI7QUFFTyxTQUFLLEVBQUVDO0FBRmQsSUFERixFQUlFO0FBQU0sYUFBUyxFQUFDO0FBQWhCLEtBQTRDO0FBQUcsYUFBUyxFQUFDO0FBQWIsSUFBNUMsQ0FKRixDQUZGLENBREYsRUFVRTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0k7QUFBTSxhQUFTLEVBQUM7QUFBaEIsVUFBNEI7QUFDMUIsYUFBUyxFQUFDO0FBRGdCLElBQTVCLENBREosRUFHRTtBQUFNLGFBQVMsRUFBQztBQUFoQixLQUEyQjtBQUN6QixhQUFTLEVBQUM7QUFEZSxJQUEzQixDQUhGLENBVkYsQ0FERjtBQW1CRCxDQXZCRDs7S0FBTUosZTtBQXlCU0EsOEVBQWY7QUFFQUEsZUFBZSxDQUFDSyxZQUFoQixHQUErQjtBQUM3QkMsV0FBUyxFQUFFLEVBRGtCO0FBRTdCRixPQUFLLEVBQUUsRUFGc0I7QUFHN0JHLGNBQVksRUFBRSxJQUhlO0FBSTdCQyxNQUFJLEVBQUU7QUFKdUIsQ0FBL0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdCQTtBQUNBO0FBQ0E7QUFFQTtJQUVPQyxRLEdBQVlDLDBDLENBQVpELFE7QUFFUCxJQUFNUixLQUFLLEdBQUc7QUFDWlUsTUFBSSxFQUFFLE1BRE07QUFFWkMsUUFBTSxFQUFFLHVDQUZJO0FBR1pDLFNBQU8sRUFBRTtBQUNQQyxpQkFBYSxFQUFFO0FBRFIsR0FIRztBQU1aWCxVQU5ZLG9CQU1IWSxJQU5HLEVBTUc7QUFDYixRQUFJQSxJQUFJLENBQUNDLElBQUwsQ0FBVUMsTUFBVixLQUFxQixXQUF6QixFQUFzQztBQUNwQ0MsYUFBTyxDQUFDQyxHQUFSLENBQVlKLElBQUksQ0FBQ0MsSUFBakIsRUFBdUJELElBQUksQ0FBQ0ssUUFBNUI7QUFDRDs7QUFDRCxRQUFJTCxJQUFJLENBQUNDLElBQUwsQ0FBVUMsTUFBVixLQUFxQixNQUF6QixFQUFpQztBQUMvQkksa0RBQU8sQ0FBQ0MsT0FBUixXQUFtQlAsSUFBSSxDQUFDQyxJQUFMLENBQVVMLElBQTdCO0FBQ0QsS0FGRCxNQUVPLElBQUlJLElBQUksQ0FBQ0MsSUFBTCxDQUFVQyxNQUFWLEtBQXFCLE9BQXpCLEVBQWtDO0FBQ3ZDSSxrREFBTyxDQUFDRSxLQUFSLFdBQWlCUixJQUFJLENBQUNDLElBQUwsQ0FBVUwsSUFBM0I7QUFDRDtBQUNGO0FBZlcsQ0FBZDs7SUFrQk1hLFc7Ozs7O0FBQ0oseUJBQWM7QUFBQTs7QUFBQTs7QUFDWjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxRQUFFLEVBQUUsRUFETztBQUVYQyxRQUFFLEVBQUUsRUFGTztBQUdYQyxTQUFHLEVBQUUsRUFITTtBQUlYQyxhQUFPLEVBQUUsRUFKRTtBQUtYUixhQUFPLEVBQUU7QUFMRSxLQUFiO0FBRlk7QUFTYjs7Ozs2QkFFUTtBQUFBOztBQUFBLHdCQUM2QixLQUFLcEIsS0FEbEM7QUFBQSxVQUNBNkIsVUFEQSxlQUNBQSxVQURBO0FBQUEsVUFDWUMsT0FEWixlQUNZQSxPQURaO0FBQUEsVUFDcUJDLElBRHJCLGVBQ3FCQSxJQURyQjtBQUFBLHdCQUV3QixLQUFLUCxLQUY3QjtBQUFBLFVBRUFDLEVBRkEsZUFFQUEsRUFGQTtBQUFBLFVBRUlHLE9BRkosZUFFSUEsT0FGSjtBQUFBLFVBRWFSLE9BRmIsZUFFYUEsT0FGYjtBQUdQLGFBQ0UsTUFBQywwQ0FBRDtBQUFPLGdCQUFRLEVBQUVVLE9BQWpCO0FBQTBCLGVBQU8sRUFBRSxLQUFLOUIsS0FBTCxDQUFXZ0MsSUFBOUM7QUFDTyxhQUFLLEVBQUUsTUFBQywwREFBRDtBQUFjLFlBQUUsRUFBQztBQUFqQixVQURkO0FBRU8sZ0JBQVEsRUFBRSxLQUZqQjtBQUdPLFlBQUksRUFBRSxnQkFBTTtBQUNWLGNBQUlQLEVBQUUsS0FBSyxFQUFYLEVBQ0U7QUFDRkssaUJBQU87QUFDUEQsb0JBQVUsQ0FDUjtBQUNFLGtCQUFNLHFCQURSO0FBRUUsb0JBQVE7QUFDTixzQkFBUUUsSUFBSSxDQUFDckIsSUFEUDtBQUVOLHdCQUFVcUIsSUFBSSxDQUFDRSxNQUZUO0FBR04sdUJBQVNGLElBQUksQ0FBQ0c7QUFIUixhQUZWO0FBT0Usa0JBQU0sQ0FDSjtBQUNFLHNCQUFRVCxFQURWO0FBRUUsdUJBQVNBO0FBRlgsYUFESSxDQVBSO0FBYUUsdUJBQVdHLE9BYmI7QUFjRSx1QkFBV1IsT0FkYjtBQWVFLG9CQUFRZSw2Q0FBTSxHQUFHQyxNQUFULENBQWdCLFFBQWhCLENBZlY7QUFnQkUsb0JBQVEsS0FoQlY7QUFpQkUsdUJBQVcsS0FqQmI7QUFrQkUseUJBQWEsS0FsQmY7QUFtQkUsOEJBQWtCLEtBbkJwQjtBQW9CRSxzQkFBVSxDQXBCWjtBQXFCRSx3QkFBWSxLQXJCZDtBQXNCRSxzQkFBVTtBQXRCWixXQURRLENBQVY7QUEwQkQsU0FqQ1I7QUFrQ08sYUFBSyxFQUFFO0FBQUNDLGdCQUFNLEVBQUU7QUFBVDtBQWxDZCxTQW1DRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNFLE1BQUMsMENBQUQ7QUFDRSxtQkFBVyxFQUFDLEtBRGQ7QUFFRSxnQkFBUSxFQUFFLGtCQUFDQyxLQUFEO0FBQUEsaUJBQVcsTUFBSSxDQUFDQyxRQUFMLENBQWM7QUFBQ2QsY0FBRSxFQUFFYSxLQUFLLENBQUNFLE1BQU4sQ0FBYXJDO0FBQWxCLFdBQWQsQ0FBWDtBQUFBLFNBRlo7QUFHRSxvQkFBWSxFQUFFc0IsRUFIaEI7QUFJRSxjQUFNLEVBQUM7QUFKVCxRQURGLENBbkNGLEVBMENFO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0UsTUFBQywwQ0FBRDtBQUNFLG1CQUFXLEVBQUMsU0FEZDtBQUVFLGdCQUFRLEVBQUUsa0JBQUNhLEtBQUQ7QUFBQSxpQkFBVyxNQUFJLENBQUNDLFFBQUwsQ0FBYztBQUFDWCxtQkFBTyxFQUFFVSxLQUFLLENBQUNFLE1BQU4sQ0FBYXJDO0FBQXZCLFdBQWQsQ0FBWDtBQUFBLFNBRlo7QUFHRSxhQUFLLEVBQUV5QixPQUhUO0FBSUUsY0FBTSxFQUFDO0FBSlQsUUFERixDQTFDRixFQWtERTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNFLE1BQUMsUUFBRDtBQUNFLG1CQUFXLEVBQUMsU0FEZDtBQUVFLGdCQUFRLEVBQUUsa0JBQUNVLEtBQUQ7QUFBQSxpQkFBVyxNQUFJLENBQUNDLFFBQUwsQ0FBYztBQUFDbkIsbUJBQU8sRUFBRWtCLEtBQUssQ0FBQ0UsTUFBTixDQUFhckM7QUFBdkIsV0FBZCxDQUFYO0FBQUEsU0FGWjtBQUdFLGFBQUssRUFBRWlCLE9BSFQ7QUFJRSxnQkFBUSxFQUFFO0FBQUNxQixpQkFBTyxFQUFFLENBQVY7QUFBYUMsaUJBQU8sRUFBRTtBQUF0QixTQUpaO0FBS0UsY0FBTSxFQUFDO0FBTFQsUUFERixDQWxERixFQTJERTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUVFLE1BQUMsMkNBQUQsRUFBWTFDLEtBQVosRUFDRSxNQUFDLDJDQUFEO0FBQVEsWUFBSSxFQUFDO0FBQWIsU0FDRTtBQUFHLGlCQUFTLEVBQUM7QUFBYixRQURGLGlCQURGLENBRkYsQ0EzREYsQ0FERjtBQXVFRDs7OztFQXRGdUIyQyw0Q0FBSyxDQUFDQyxTOztBQXlGakJyQiwwRUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuSEE7QUFDQTtBQUNBO0FBRUE7QUFFQSxJQUFNc0IsT0FBTyxHQUFHLENBQ2QsT0FEYyxFQUVkLFNBRmMsRUFHZCxPQUhjLENBQWhCOztJQU1NQyxVOzs7Ozs7Ozs7Ozs7Ozs7O2dOQUVJO0FBQ05DLGdCQUFVLEVBQUU7QUFETixLOztxTkFJSyxZQUFNO0FBQ2pCLGFBQ0UsTUFBQyx5Q0FBRDtBQUFNLFVBQUUsRUFBQztBQUFULFNBQ0dGLE9BQU8sQ0FBQ0csR0FBUixDQUFZLFVBQUFDLE1BQU07QUFBQSxlQUNqQixNQUFDLHlDQUFELENBQU0sSUFBTjtBQUFXLGFBQUcsRUFBRUE7QUFBaEIsV0FDR0EsTUFESCxDQURpQjtBQUFBLE9BQWxCLENBREgsQ0FERjtBQVFELEs7Ozs7Ozs7NkJBRVE7QUFBQTs7QUFBQSx3QkFDMEMsS0FBS2pELEtBRC9DO0FBQUEsVUFDQWtELElBREEsZUFDQUEsSUFEQTtBQUFBLFVBQ01DLGFBRE4sZUFDTUEsYUFETjtBQUFBLFVBQ3FCQyxpQkFEckIsZUFDcUJBLGlCQURyQjtBQUdQLGFBQ0U7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDRSxNQUFDLDhEQUFEO0FBQWtCLGlCQUFTLEVBQUM7QUFBNUIsU0FDRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNFO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBRUU7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNHRixJQUFJLENBQUN0QixPQURSLENBREYsRUFLRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNHeUIsNkVBQU0sQ0FBQ0wsR0FBUCxDQUFXLFVBQUNNLEtBQUQsRUFBUUMsS0FBUixFQUFrQjtBQUM1QixlQUFRTCxJQUFJLENBQUNHLE1BQU4sQ0FBY0csUUFBZCxDQUF1QkYsS0FBSyxDQUFDRyxFQUE3QixLQUFvQztBQUFLLGFBQUcsRUFBRUYsS0FBVjtBQUNLLG1CQUFTLHlDQUFrQ0QsS0FBSyxDQUFDSSxLQUF4QztBQURkLFdBQ2dFSixLQUFLLENBQUNLLEtBRHRFLENBQTNDO0FBRUQsT0FIQSxDQURILENBTEYsQ0FGRixFQWlCRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUVFO0FBQUssZUFBTyxFQUFFLG1CQUFNO0FBQ2xCUix1QkFBYSxDQUFDRCxJQUFELENBQWI7QUFDRDtBQUZELFNBR0dBLElBQUksQ0FBQ1UsT0FBTCxHQUNDO0FBQUcsaUJBQVMsRUFBQztBQUFiLFFBREQsR0FFQztBQUFHLGlCQUFTLEVBQUM7QUFBYixRQUxKLENBRkYsRUFXRTtBQUFLLGVBQU8sRUFBRSxtQkFBTTtBQUNsQlIsMkJBQWlCLENBQUNGLElBQUQsQ0FBakI7QUFDRDtBQUZELFNBSUdBLElBQUksQ0FBQ1csU0FBTCxHQUNDO0FBQUcsaUJBQVMsRUFBQztBQUFiLFFBREQsR0FFRztBQUFHLGlCQUFTLEVBQUM7QUFBYixRQU5OLENBWEYsQ0FqQkYsQ0FERixFQXlDRSxpQkF6Q0YsRUEyQ0U7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FFR1gsSUFBSSxDQUFDWSxJQUFMLENBQVU3QixNQUFWLEtBQXFCLEVBQXJCLEdBQ0MsTUFBQywyQ0FBRDtBQUNFLGlCQUFTLEVBQUM7QUFEWixjQUN3RGlCLElBQUksQ0FBQ1ksSUFBTCxDQUFVcEQsSUFBVixDQUFlcUQsTUFBZixDQUFzQixDQUF0QixFQUF5QkMsV0FBekIsRUFEeEQsQ0FERCxHQUdDLE1BQUMsMkNBQUQ7QUFBUSxpQkFBUyxFQUFDLG9CQUFsQjtBQUF1QyxXQUFHLEVBQUMsZUFBM0M7QUFDUSxXQUFHLEVBQUVkLElBQUksQ0FBQ1ksSUFBTCxDQUFVN0I7QUFEdkIsUUFMSixFQVNFO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQWlDaUIsSUFBSSxDQUFDWSxJQUFMLENBQVVwRCxJQUEzQyxFQUNFO0FBQUssaUJBQVMsRUFBQztBQUFmLGlCQURGLENBVEYsRUFhRSxNQUFDLDZDQUFEO0FBQVUsZUFBTyxFQUFFLENBQUMsT0FBRCxDQUFuQjtBQUE4QixlQUFPLEVBQUUsS0FBS3VELFVBQUw7QUFBdkMsU0FDRTtBQUFNLGlCQUFTLEVBQUM7QUFBaEIsU0FBNkI7QUFBRyxpQkFBUyxFQUFDO0FBQWIsUUFBN0IsQ0FERixDQWJGLENBM0NGLEVBOERFO0FBQUssaUJBQVMsRUFBQyxjQUFmO0FBQThCLGVBQU8sRUFBRSxtQkFBTTtBQUMzQyxnQkFBSSxDQUFDMUIsUUFBTCxDQUFjO0FBQUNRLHNCQUFVLEVBQUUsQ0FBQyxNQUFJLENBQUN2QixLQUFMLENBQVd1QjtBQUF6QixXQUFkO0FBQ0Q7QUFGRCxTQUVJLEtBQUt2QixLQUFMLENBQVd1QixVQUFYLEdBQXdCLGFBQXhCLEdBQXdDLGFBRjVDLENBOURGLEVBaUVHLEtBQUt2QixLQUFMLENBQVd1QixVQUFYLElBQTBCO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ3pCLG1CQUNFLCtCQURGLEVBQzBCRyxJQUFJLENBQUNZLElBQUwsQ0FBVTVCLEtBRHBDLENBRHlCLEVBSXpCLG1CQUNFLDhCQURGLEVBR0lnQixJQUFJLENBQUN6QixFQUFMLENBQVF1QixHQUFSLENBQVksVUFBQ3ZCLEVBQUQsRUFBSzhCLEtBQUw7QUFBQSxlQUFlLG9CQUFPQSxLQUFLLEdBQUcsQ0FBUixJQUFhLElBQXBCLE9BQTJCOUIsRUFBRSxDQUFDUyxLQUE5QixDQUFmO0FBQUEsT0FBWixDQUhKLENBSnlCLEVBVXpCLG1CQUFLLCtCQUFMLEVBQTZCZ0IsSUFBSSxDQUFDZ0IsSUFBbEMsTUFWeUIsQ0FqRTdCLEVBK0VFLGlCQUNHaEIsSUFBSSxDQUFDOUIsT0FEUixDQS9FRixFQW1GRzhCLElBQUksQ0FBQ2lCLGNBQUwsSUFDRDtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNFLG1DQUFrQmpCLElBQUksQ0FBQ2tCLFdBQUwsQ0FBaUJDLE1BQW5DLE1BREYsRUFFRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNHbkIsSUFBSSxDQUFDa0IsV0FBTCxDQUFpQnBCLEdBQWpCLENBQXFCLFVBQUNzQixVQUFELEVBQWFmLEtBQWI7QUFBQSxlQUNwQjtBQUFLLG1CQUFTLEVBQUMsbUJBQWY7QUFBbUMsYUFBRyxFQUFFQTtBQUF4QyxXQUNFO0FBQUssYUFBRyxFQUFFZSxVQUFVLENBQUNDLE9BQXJCO0FBQThCLGFBQUcsRUFBRUQsVUFBVSxDQUFDRTtBQUE5QyxVQURGLEVBRUU7QUFBSyxtQkFBUyxFQUFDO0FBQWYsV0FBdUJGLFVBQVUsQ0FBQ0csSUFBbEMsQ0FGRixDQURvQjtBQUFBLE9BQXJCLENBREgsQ0FGRixDQXBGRixDQURGLENBREYsQ0FERjtBQXVHRDs7OztFQTNIc0I5Qiw0Q0FBSyxDQUFDQyxTOztBQThIaEJFLHlFQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxSUE7QUFDQTtBQUVBOztBQUVBLElBQU00QixZQUFZLEdBQUcsU0FBZkEsWUFBZSxPQUF3RDtBQUFBLE1BQXREeEIsSUFBc0QsUUFBdERBLElBQXNEO0FBQUEsTUFBaER5QixZQUFnRCxRQUFoREEsWUFBZ0Q7QUFBQSxNQUFsQ0MsYUFBa0MsUUFBbENBLGFBQWtDO0FBQUEsTUFBbkJ6QixhQUFtQixRQUFuQkEsYUFBbUI7QUFDM0UsU0FDRTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNFLE1BQUMsNkNBQUQ7QUFBVSxTQUFLLEVBQUMsU0FBaEI7QUFBMEIsYUFBUyxFQUFDLGFBQXBDO0FBQ1UsV0FBTyxFQUFFRCxJQUFJLENBQUMyQixRQUR4QjtBQUVVLFdBQU8sRUFBRSxpQkFBQ3ZDLEtBQUQsRUFBVztBQUNsQkEsV0FBSyxDQUFDd0MsZUFBTjtBQUNBRixtQkFBYSxDQUFDMUIsSUFBRCxDQUFiO0FBQ0QsS0FMWDtBQU1VLFNBQUssRUFBQztBQU5oQixJQURGLEVBU0U7QUFBSyxXQUFPLEVBQUUsbUJBQU07QUFDbEJDLG1CQUFhLENBQUNELElBQUQsQ0FBYjtBQUNEO0FBRkQsS0FHR0EsSUFBSSxDQUFDVSxPQUFMLEdBQ0M7QUFBRyxhQUFTLEVBQUM7QUFBYixJQURELEdBRUM7QUFBRyxhQUFTLEVBQUM7QUFBYixJQUxKLENBVEYsRUFtQkU7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNHVixJQUFJLENBQUNZLElBQUwsQ0FBVTdCLE1BQVYsS0FBcUIsRUFBckIsR0FDQyxNQUFDLDJDQUFEO0FBQVEsYUFBUyxFQUFDO0FBQWxCLFVBQXNEaUIsSUFBSSxDQUFDWSxJQUFMLENBQVVwRCxJQUFWLENBQWVxRCxNQUFmLENBQXNCLENBQXRCLEVBQXlCQyxXQUF6QixFQUF0RCxDQURELEdBRUMsTUFBQywyQ0FBRDtBQUFRLGFBQVMsRUFBQyxZQUFsQjtBQUErQixPQUFHLEVBQUMsZUFBbkM7QUFDUSxPQUFHLEVBQUVkLElBQUksQ0FBQ1ksSUFBTCxDQUFVN0I7QUFEdkIsSUFISixDQW5CRixDQURGLEVBNkJFO0FBQUssYUFBUyxFQUFDLG1CQUFmO0FBQW1DLFdBQU8sRUFBRSxtQkFBTTtBQUNoRDBDLGtCQUFZLENBQUN6QixJQUFELENBQVo7QUFDRDtBQUZELEtBSUU7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNFO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FFRTtBQUFNLGFBQVMsRUFBQztBQUFoQixLQUFrQ0EsSUFBSSxDQUFDWSxJQUFMLENBQVVwRCxJQUE1QyxDQUZGLEVBSUU7QUFBTSxhQUFTLEVBQUM7QUFBaEIsWUFKRixFQU1FO0FBQU0sYUFBUyxFQUFDO0FBQWhCLEtBQXNFd0MsSUFBSSxDQUFDdEIsT0FBM0UsQ0FORixFQVFHc0IsSUFBSSxDQUFDaUIsY0FBTCxJQUVEO0FBQUcsYUFBUyxFQUFDO0FBQWIsSUFWRixFQVlFO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FBMEJqQixJQUFJLENBQUNnQixJQUEvQixDQVpGLENBREYsRUFrQkU7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNFO0FBQUcsYUFBUyxFQUFDO0FBQWIsVUFBa0NoQixJQUFJLENBQUM5QixPQUF2QyxDQURGLENBbEJGLEVBc0JFO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDR2lDLDRFQUFNLENBQUNMLEdBQVAsQ0FBVyxVQUFDTSxLQUFELEVBQVFDLEtBQVIsRUFBa0I7QUFDNUIsV0FBUUwsSUFBSSxDQUFDRyxNQUFOLENBQWNHLFFBQWQsQ0FBdUJGLEtBQUssQ0FBQ0csRUFBN0IsS0FDTDtBQUFLLFNBQUcsRUFBRUYsS0FBVjtBQUFpQixlQUFTLHlDQUFrQ0QsS0FBSyxDQUFDSSxLQUF4QztBQUExQixPQUE0RUosS0FBSyxDQUFDSyxLQUFsRixDQURGO0FBRUQsR0FIQSxDQURILENBdEJGLENBSkYsQ0E3QkYsQ0FERjtBQW9FRCxDQXJFRDs7S0FBTWUsWTtBQXVFU0EsMkVBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1RUE7QUFDQTtBQUVBOztBQUVBLElBQU1LLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQXlEO0FBQUEsTUFBdkRDLEtBQXVELFFBQXZEQSxLQUF1RDtBQUFBLE1BQWhETCxZQUFnRCxRQUFoREEsWUFBZ0Q7QUFBQSxNQUFsQ0MsYUFBa0MsUUFBbENBLGFBQWtDO0FBQUEsTUFBbkJ6QixhQUFtQixRQUFuQkEsYUFBbUI7QUFDeEUsU0FDRTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0UsTUFBQyw4REFBRDtBQUFrQixhQUFTLEVBQUM7QUFBNUIsS0FDRzZCLEtBQUssQ0FBQ2hDLEdBQU4sQ0FBVSxVQUFDRSxJQUFELEVBQU9LLEtBQVA7QUFBQSxXQUNULE1BQUMscURBQUQ7QUFBYyxTQUFHLEVBQUVBLEtBQW5CO0FBQTBCLFVBQUksRUFBRUwsSUFBaEM7QUFBc0Msa0JBQVksRUFBRXlCLFlBQXBEO0FBQWtFLG1CQUFhLEVBQUVDLGFBQWpGO0FBQ2MsbUJBQWEsRUFBRXpCO0FBRDdCLE1BRFM7QUFBQSxHQUFWLENBREgsQ0FERixDQURGO0FBVUQsQ0FYRDs7S0FBTTRCLFE7QUFhU0EsdUVBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQkE7QUFBQSw4Q0FBZSxnRUFDYjtBQUNFLFFBQU0sQ0FEUjtBQUVFLFlBQVUsU0FGWjtBQUdFLFdBQVMsU0FIWDtBQUlFLFVBQVE7QUFKVixDQURhLEVBT2I7QUFDRSxRQUFNLENBRFI7QUFFRSxZQUFVLFdBRlo7QUFHRSxXQUFTLFdBSFg7QUFJRSxVQUFRO0FBSlYsQ0FQYSxDQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBLDhDQUFlLGdFQUNiO0FBQ0UsUUFBTSxDQURSO0FBRUUsWUFBVSxPQUZaO0FBR0UsV0FBUyxPQUhYO0FBSUUsVUFBUTtBQUpWLENBRGEsRUFPYjtBQUNFLFFBQU0sQ0FEUjtBQUVFLFlBQVUsTUFGWjtBQUdFLFdBQVMsTUFIWDtBQUlFLFVBQVE7QUFKVixDQVBhLEVBYWI7QUFDRSxRQUFNLENBRFI7QUFFRSxZQUFVLFFBRlo7QUFHRSxXQUFTLFFBSFg7QUFJRSxVQUFRO0FBSlYsQ0FiYSxFQW1CYjtBQUNFLFFBQU0sQ0FEUjtBQUVFLFlBQVUsTUFGWjtBQUdFLFdBQVMsTUFIWDtBQUlFLFVBQVE7QUFKVixDQW5CYSxFQXlCYjtBQUNFLFFBQU0sQ0FEUjtBQUVFLFlBQVUsT0FGWjtBQUdFLFdBQVMsT0FIWDtBQUlFLFVBQVE7QUFKVixDQXpCYSxDQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBLDhDQUFlLGdFQUNiO0FBQ0UsUUFBTSxDQURSO0FBRUUsWUFBVSxNQUZaO0FBR0UsV0FBUyxRQUhYO0FBSUUsV0FBUztBQUpYLENBRGEsRUFPYjtBQUNFLFFBQU0sQ0FEUjtBQUVFLFlBQVUsUUFGWjtBQUdFLFdBQVMsUUFIWDtBQUlFLFdBQVM7QUFKWCxDQVBhLEVBYWI7QUFDRSxRQUFNLENBRFI7QUFFRSxZQUFVLFNBRlo7QUFHRSxXQUFTLFVBSFg7QUFJRSxXQUFTO0FBSlgsQ0FiYSxFQW1CYjtBQUNFLFFBQU0sQ0FEUjtBQUVFLFlBQVUsUUFGWjtBQUdFLFdBQVMsU0FIWDtBQUlFLFdBQVM7QUFKWCxDQW5CYSxDQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBLDhDQUFlLGdFQUNiO0FBQ0UsUUFBTSxxQkFEUjtBQUVFLFVBQVE7QUFDTixZQUFRLGVBREY7QUFFTixjQUFVLHFDQUZKO0FBR04sYUFBUztBQUhILEdBRlY7QUFPRSxRQUFNLENBQ0o7QUFDRSxZQUFRLElBRFY7QUFFRSxhQUFTO0FBRlgsR0FESSxFQUlEO0FBQ0QsWUFBUSxJQURQO0FBRUQsYUFBUztBQUZSLEdBSkMsQ0FQUjtBQWdCRSxhQUFXLDZCQWhCYjtBQWlCRSxhQUFXLGlnQkFqQmI7QUFrQkUsVUFBUSxJQWxCVjtBQW1CRSxhQUFXLEtBbkJiO0FBb0JFLGVBQWEsS0FwQmY7QUFxQkUsb0JBQWtCLEtBckJwQjtBQXNCRSxZQUFVLENBQ1IsQ0FEUSxFQUVSLENBRlEsQ0F0Qlo7QUEwQkUsY0FBWSxLQTFCZDtBQTJCRSxZQUFVO0FBM0JaLENBRGEsRUE4QmI7QUFDRSxRQUFNLHFCQURSO0FBRUUsVUFBUTtBQUNOLFlBQVEsY0FERjtBQUVOLGNBQVUscUNBRko7QUFHTixhQUFTO0FBSEgsR0FGVjtBQU9FLFFBQU0sQ0FDSjtBQUNFLFlBQVEsSUFEVjtBQUVFLGFBQVM7QUFGWCxHQURJLENBUFI7QUFhRSxhQUFXLDJEQWJiO0FBY0UsYUFBVyxrZ0JBZGI7QUFlRSxVQUFRLE9BZlY7QUFnQkUsVUFBUSxJQWhCVjtBQWlCRSxhQUFXLElBakJiO0FBa0JFLGVBQWEsS0FsQmY7QUFtQkUsb0JBQWtCLEtBbkJwQjtBQW9CRSxZQUFVLENBQ1IsQ0FEUSxFQUVSLENBRlEsQ0FwQlo7QUF3QkUsY0FBWSxLQXhCZDtBQXlCRSxZQUFVO0FBekJaLENBOUJhLEVBeURiO0FBQ0UsUUFBTSxxQkFEUjtBQUVFLFVBQVE7QUFDTixZQUFRLGNBREY7QUFFTixjQUFVLEVBRko7QUFHTixhQUFTO0FBSEgsR0FGVjtBQU9FLFFBQU0sQ0FDSjtBQUNFLFlBQVEsSUFEVjtBQUVFLGFBQVM7QUFGWCxHQURJLENBUFI7QUFhRSxhQUFXLHNFQWJiO0FBY0UsYUFBVywrbERBZGI7QUFlRSxVQUFRLE9BZlY7QUFnQkUsVUFBUSxJQWhCVjtBQWlCRSxhQUFXLEtBakJiO0FBa0JFLGVBQWEsS0FsQmY7QUFtQkUsb0JBQWtCLEtBbkJwQjtBQW9CRSxZQUFVLEVBcEJaO0FBcUJFLGNBQVksS0FyQmQ7QUFzQkUsWUFBVTtBQXRCWixDQXpEYSxFQWlGYjtBQUNFLFFBQU0scUJBRFI7QUFFRSxVQUFRO0FBQ04sWUFBUSxjQURGO0FBRU4sY0FBVSxFQUZKO0FBR04sYUFBUztBQUhILEdBRlY7QUFPRSxRQUFNLENBQ0o7QUFDRSxZQUFRLElBRFY7QUFFRSxhQUFTO0FBRlgsR0FESSxDQVBSO0FBYUUsYUFBVyw4Q0FiYjtBQWNFLGFBQVcsNHBCQWRiO0FBZUUsVUFBUSxPQWZWO0FBZ0JFLFVBQVEsSUFoQlY7QUFpQkUsYUFBVyxLQWpCYjtBQWtCRSxlQUFhLEtBbEJmO0FBbUJFLG9CQUFrQixLQW5CcEI7QUFvQkUsWUFBVSxFQXBCWjtBQXFCRSxjQUFZLEtBckJkO0FBc0JFLFlBQVU7QUF0QlosQ0FqRmEsRUF5R2I7QUFDRSxRQUFNLHFCQURSO0FBRUUsVUFBUTtBQUNOLFlBQVEsYUFERjtBQUVOLGNBQVUsRUFGSjtBQUdOLGFBQVM7QUFISCxHQUZWO0FBT0UsUUFBTSxDQUNKO0FBQ0UsWUFBUSxJQURWO0FBRUUsYUFBUztBQUZYLEdBREksQ0FQUjtBQWFFLGFBQVcsMkRBYmI7QUFjRSxhQUFXLCtsREFkYjtBQWVFLFVBQVEsT0FmVjtBQWdCRSxVQUFRLElBaEJWO0FBaUJFLGFBQVcsS0FqQmI7QUFrQkUsZUFBYSxLQWxCZjtBQW1CRSxvQkFBa0IsS0FuQnBCO0FBb0JFLFlBQVUsRUFwQlo7QUFxQkUsY0FBWSxLQXJCZDtBQXNCRSxZQUFVO0FBdEJaLENBekdhLEVBaUliO0FBQ0UsUUFBTSxxQkFEUjtBQUVFLFVBQVE7QUFDTixZQUFRLGNBREY7QUFFTixjQUFVLHFDQUZKO0FBR04sYUFBUztBQUhILEdBRlY7QUFPRSxRQUFNLENBQ0o7QUFDRSxZQUFRLElBRFY7QUFFRSxhQUFTO0FBRlgsR0FESSxDQVBSO0FBYUUsYUFBVyw4Q0FiYjtBQWNFLGFBQVcsd2RBZGI7QUFlRSxVQUFRLE9BZlY7QUFnQkUsVUFBUSxLQWhCVjtBQWlCRSxhQUFXLEtBakJiO0FBa0JFLGVBQWEsSUFsQmY7QUFtQkUsb0JBQWtCLElBbkJwQjtBQW9CRSxpQkFBZSxDQUNiO0FBQ0UsWUFBUSxPQURWO0FBRUUsZ0JBQVksTUFGZDtBQUdFLGVBQVcscUNBSGI7QUFJRSxXQUFPLEVBSlQ7QUFLRSxZQUFRO0FBTFYsR0FEYSxFQVFiO0FBQ0UsWUFBUSxPQURWO0FBRUUsZ0JBQVksU0FGZDtBQUdFLGVBQVcscUNBSGI7QUFJRSxXQUFPLEVBSlQ7QUFLRSxZQUFRO0FBTFYsR0FSYSxFQWViO0FBQ0UsWUFBUSxPQURWO0FBRUUsZ0JBQVksUUFGZDtBQUdFLGVBQVcscUNBSGI7QUFJRSxXQUFPLHFDQUpUO0FBS0UsWUFBUTtBQUxWLEdBZmEsQ0FwQmpCO0FBMkNFLFlBQVUsQ0FDUixDQURRLENBM0NaO0FBOENFLGNBQVksS0E5Q2Q7QUErQ0UsWUFBVTtBQS9DWixDQWpJYSxFQWtMYjtBQUNFLFFBQU0scUJBRFI7QUFFRSxVQUFRO0FBQ04sWUFBUSxjQURGO0FBRU4sY0FBVSxxQ0FGSjtBQUdOLGFBQVM7QUFISCxHQUZWO0FBT0UsUUFBTSxDQUNKO0FBQ0UsWUFBUSxJQURWO0FBRUUsYUFBUztBQUZYLEdBREksQ0FQUjtBQWFFLGFBQVcsa0VBYmI7QUFjRSxhQUFXLG1RQWRiO0FBZUUsVUFBUSxPQWZWO0FBZ0JFLFVBQVEsS0FoQlY7QUFpQkUsYUFBVyxLQWpCYjtBQWtCRSxlQUFhLEtBbEJmO0FBbUJFLG9CQUFrQixLQW5CcEI7QUFvQkUsWUFBVSxFQXBCWjtBQXFCRSxjQUFZLEtBckJkO0FBc0JFLFlBQVU7QUF0QlosQ0FsTGEsRUEwTWI7QUFDRSxRQUFNLHFCQURSO0FBRUUsVUFBUTtBQUNOLFlBQVEsWUFERjtBQUVOLGNBQVUsRUFGSjtBQUdOLGFBQVM7QUFISCxHQUZWO0FBT0UsUUFBTSxDQUNKO0FBQ0UsWUFBUSxJQURWO0FBRUUsYUFBUztBQUZYLEdBREksQ0FQUjtBQWFFLGFBQVcsNENBYmI7QUFjRSxhQUFXLHNvQkFkYjtBQWVFLFVBQVEsT0FmVjtBQWdCRSxVQUFRLElBaEJWO0FBaUJFLGFBQVcsS0FqQmI7QUFrQkUsZUFBYSxLQWxCZjtBQW1CRSxvQkFBa0IsS0FuQnBCO0FBb0JFLFlBQVUsRUFwQlo7QUFxQkUsY0FBWSxLQXJCZDtBQXNCRSxZQUFVO0FBdEJaLENBMU1hLEVBa09iO0FBQ0UsUUFBTSxxQkFEUjtBQUVFLFVBQVE7QUFDTixZQUFRLFlBREY7QUFFTixjQUFVLHFDQUZKO0FBR04sYUFBUztBQUhILEdBRlY7QUFPRSxRQUFNLENBQ0o7QUFDRSxZQUFRLElBRFY7QUFFRSxhQUFTO0FBRlgsR0FESSxDQVBSO0FBYUUsYUFBVyxrQ0FiYjtBQWNFLGFBQVcseTBDQWRiO0FBZUUsVUFBUSxRQWZWO0FBZ0JFLFVBQVEsSUFoQlY7QUFpQkUsYUFBVyxLQWpCYjtBQWtCRSxlQUFhLElBbEJmO0FBbUJFLG9CQUFrQixLQW5CcEI7QUFvQkUsWUFBVSxDQUNSLENBRFEsQ0FwQlo7QUF1QkUsY0FBWSxLQXZCZDtBQXdCRSxZQUFVO0FBeEJaLENBbE9hLEVBNFBiO0FBQ0UsUUFBTSxxQkFEUjtBQUVFLFVBQVE7QUFDTixZQUFRLGNBREY7QUFFTixjQUFVLEVBRko7QUFHTixhQUFTO0FBSEgsR0FGVjtBQU9FLFFBQU0sQ0FDSjtBQUNFLFlBQVEsSUFEVjtBQUVFLGFBQVM7QUFGWCxHQURJLENBUFI7QUFhRSxhQUFXLDhCQWJiO0FBY0UsYUFBVyxrZ0JBZGI7QUFlRSxVQUFRLFFBZlY7QUFnQkUsVUFBUSxJQWhCVjtBQWlCRSxhQUFXLEtBakJiO0FBa0JFLGVBQWEsS0FsQmY7QUFtQkUsb0JBQWtCLEtBbkJwQjtBQW9CRSxZQUFVLEVBcEJaO0FBcUJFLGNBQVksS0FyQmQ7QUFzQkUsWUFBVTtBQXRCWixDQTVQYSxFQW9SYjtBQUNFLFFBQU0scUJBRFI7QUFFRSxVQUFRO0FBQ04sWUFBUSxVQURGO0FBRU4sY0FBVSxxQ0FGSjtBQUdOLGFBQVM7QUFISCxHQUZWO0FBT0UsUUFBTSxDQUNKO0FBQ0UsWUFBUSxJQURWO0FBRUUsYUFBUztBQUZYLEdBREksQ0FQUjtBQWFFLGFBQVcsOEJBYmI7QUFjRSxhQUFXLDZ2QkFkYjtBQWVFLFVBQVEsUUFmVjtBQWdCRSxVQUFRLElBaEJWO0FBaUJFLGFBQVcsS0FqQmI7QUFrQkUsZUFBYSxLQWxCZjtBQW1CRSxvQkFBa0IsS0FuQnBCO0FBb0JFLFlBQVUsRUFwQlo7QUFxQkUsY0FBWSxLQXJCZDtBQXNCRSxZQUFVO0FBdEJaLENBcFJhLEVBNFNiO0FBQ0UsUUFBTSxxQkFEUjtBQUVFLFVBQVE7QUFDTixZQUFRLFlBREY7QUFFTixjQUFVLHFDQUZKO0FBR04sYUFBUztBQUhILEdBRlY7QUFPRSxRQUFNLENBQ0o7QUFDRSxZQUFRLElBRFY7QUFFRSxhQUFTO0FBRlgsR0FESSxDQVBSO0FBYUUsYUFBVyw0QkFiYjtBQWNFLGFBQVcsQ0FBQyw2WkFBRCxDQWRiO0FBZUUsVUFBUSxPQWZWO0FBZ0JFLFVBQVEsSUFoQlY7QUFpQkUsYUFBVyxLQWpCYjtBQWtCRSxlQUFhLEtBbEJmO0FBbUJFLG9CQUFrQixLQW5CcEI7QUFvQkUsWUFBVSxFQXBCWjtBQXFCRSxjQUFZLEtBckJkO0FBc0JFLFlBQVU7QUF0QlosQ0E1U2EsRUFvVWI7QUFDRSxRQUFNLHFCQURSO0FBRUUsVUFBUTtBQUNOLFlBQVEsYUFERjtBQUVOLGNBQVUsRUFGSjtBQUdOLGFBQVM7QUFISCxHQUZWO0FBT0UsUUFBTSxDQUNKO0FBQ0UsWUFBUSxJQURWO0FBRUUsYUFBUztBQUZYLEdBREksQ0FQUjtBQWFFLGFBQVcsMEJBYmI7QUFjRSxhQUFXLGdyQkFkYjtBQWVFLFVBQVEsUUFmVjtBQWdCRSxVQUFRLElBaEJWO0FBaUJFLGFBQVcsS0FqQmI7QUFrQkUsZUFBYSxLQWxCZjtBQW1CRSxvQkFBa0IsS0FuQnBCO0FBb0JFLFlBQVUsQ0FBQyxDQUFELENBcEJaO0FBcUJFLGNBQVksS0FyQmQ7QUFzQkUsWUFBVTtBQXRCWixDQXBVYSxFQTRWYjtBQUNFLFFBQU0sb0JBRFI7QUFFRSxVQUFRO0FBQ04sWUFBUSxhQURGO0FBRU4sY0FBVSxFQUZKO0FBR04sYUFBUztBQUhILEdBRlY7QUFPRSxRQUFNLENBQ0o7QUFDRSxZQUFRLElBRFY7QUFFRSxhQUFTO0FBRlgsR0FESSxDQVBSO0FBYUUsYUFBVyxnQ0FiYjtBQWNFLGFBQVcsK2dCQWRiO0FBZUUsVUFBUSxRQWZWO0FBZ0JFLFVBQVEsSUFoQlY7QUFpQkUsYUFBVyxLQWpCYjtBQWtCRSxlQUFhLEtBbEJmO0FBbUJFLG9CQUFrQixLQW5CcEI7QUFvQkUsWUFBVSxFQXBCWjtBQXFCRSxjQUFZLEtBckJkO0FBc0JFLFlBQVU7QUF0QlosQ0E1VmEsRUFvWGI7QUFDRSxRQUFNLHFCQURSO0FBRUUsVUFBUTtBQUNOLFlBQVEsT0FERjtBQUVOLGNBQVUscUNBRko7QUFHTixhQUFTO0FBSEgsR0FGVjtBQU9FLFFBQU0sQ0FDSjtBQUNFLFlBQVEsSUFEVjtBQUVFLGFBQVM7QUFGWCxHQURJLENBUFI7QUFhRSxhQUFXLGtDQWJiO0FBY0UsYUFBVyxxbURBZGI7QUFlRSxVQUFRLFFBZlY7QUFnQkUsVUFBUSxJQWhCVjtBQWlCRSxhQUFXLEtBakJiO0FBa0JFLGVBQWEsS0FsQmY7QUFtQkUsb0JBQWtCLEtBbkJwQjtBQW9CRSxZQUFVLENBQUMsQ0FBRCxDQXBCWjtBQXFCRSxjQUFZLEtBckJkO0FBc0JFLFlBQVU7QUF0QlosQ0FwWGEsRUE0WWI7QUFDRSxRQUFNLHFCQURSO0FBRUUsVUFBUTtBQUNOLFlBQVEsZ0JBREY7QUFFTixjQUFVLHFDQUZKO0FBR04sYUFBUztBQUhILEdBRlY7QUFPRSxRQUFNLENBQ0o7QUFDRSxZQUFRLElBRFY7QUFFRSxhQUFTO0FBRlgsR0FESSxDQVBSO0FBYUUsYUFBVyx3QkFiYjtBQWNFLGFBQVcsOGxEQWRiO0FBZUUsVUFBUSxRQWZWO0FBZ0JFLFVBQVEsSUFoQlY7QUFpQkUsYUFBVyxLQWpCYjtBQWtCRSxlQUFhLEtBbEJmO0FBbUJFLG9CQUFrQixLQW5CcEI7QUFvQkUsWUFBVSxFQXBCWjtBQXFCRSxjQUFZLEtBckJkO0FBc0JFLFlBQVU7QUF0QlosQ0E1WWEsRUFvYWI7QUFDRSxRQUFNLHFCQURSO0FBRUUsVUFBUTtBQUNOLFlBQVEsYUFERjtBQUVOLGNBQVUscUNBRko7QUFHTixhQUFTO0FBSEgsR0FGVjtBQU9FLFFBQU0sQ0FDSjtBQUNFLFlBQVEsSUFEVjtBQUVFLGFBQVM7QUFGWCxHQURJLENBUFI7QUFhRSxhQUFXLDBCQWJiO0FBY0UsYUFBVywrU0FkYjtBQWVFLFVBQVEsUUFmVjtBQWdCRSxVQUFRLElBaEJWO0FBaUJFLGFBQVcsS0FqQmI7QUFrQkUsZUFBYSxLQWxCZjtBQW1CRSxvQkFBa0IsS0FuQnBCO0FBb0JFLFlBQVUsRUFwQlo7QUFxQkUsY0FBWSxLQXJCZDtBQXNCRSxZQUFVO0FBdEJaLENBcGFhLENBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUEsOENBQWUsZ0VBRWI7QUFDRSxXQUFTO0FBRFgsQ0FGYSxFQUtiO0FBQ0UsV0FBUztBQURYLENBTGEsRUFRYjtBQUNFLFdBQVM7QUFEWCxDQVJhLEVBV2I7QUFDRSxXQUFTO0FBRFgsQ0FYYSxFQWNiO0FBQ0UsV0FBUztBQURYLENBZGEsRUFpQmI7QUFDRSxXQUFTO0FBRFgsQ0FqQmEsRUFvQmI7QUFDRSxXQUFTO0FBRFgsQ0FwQmEsRUF1QmI7QUFDRSxXQUFTO0FBRFgsQ0F2QmEsQ0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztJQUdNRSxJOzs7OztBQW1hSixrQkFBYztBQUFBOztBQUFBOztBQUNaOztBQURZLHNOQWphQSxZQUFNO0FBQ2xCLGFBQU87QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FFTDtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNFO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0U7QUFBRyxpQkFBUyxFQUFDO0FBQWIsUUFERixFQUVFLE1BQUMsMkRBQUQ7QUFBYyxVQUFFLEVBQUM7QUFBakIsUUFGRixDQURGLENBRkssRUFTTDtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNFLE1BQUMsOERBQUQ7QUFBa0IsaUJBQVMsRUFBQztBQUE1QixTQUNFO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0UsTUFBQywyQ0FBRDtBQUFRLFlBQUksRUFBQyxTQUFiO0FBQXVCLGlCQUFTLEVBQUMsY0FBakM7QUFDUSxlQUFPLEVBQUUsbUJBQU07QUFDYixnQkFBSzFDLFFBQUwsQ0FBYztBQUFDMkMsdUJBQVcsRUFBRTtBQUFkLFdBQWQ7QUFDRDtBQUhULFNBSUU7QUFBRyxpQkFBUyxFQUFDO0FBQWIsUUFKRixFQUtFLE1BQUMsMkRBQUQ7QUFBYyxVQUFFLEVBQUM7QUFBakIsUUFMRixDQURGLENBREYsRUFVRTtBQUFJLGlCQUFTLEVBQUM7QUFBZCxTQUNHLE1BQUtDLGFBQUwsRUFESCxFQUdFO0FBQUksaUJBQVMsRUFBQztBQUFkLFNBQ0UsTUFBQywyREFBRDtBQUFjLFVBQUUsRUFBQztBQUFqQixRQURGLENBSEYsRUFPRyxNQUFLQyxhQUFMLEVBUEgsRUFTRTtBQUFJLGlCQUFTLEVBQUM7QUFBZCxTQUNFLE1BQUMsMkRBQUQ7QUFBYyxVQUFFLEVBQUM7QUFBakIsUUFERixDQVRGLEVBYUcsTUFBS0MsWUFBTCxFQWJILENBVkYsQ0FERixDQVRLLENBQVA7QUF1Q0QsS0F5WGE7O0FBQUEsdU5BdlhDLFlBQU07QUFDbkIsVUFBTUwsS0FBSyxHQUFHLE1BQUt4RCxLQUFMLENBQVc4RCxPQUFYLENBQW1CdEMsR0FBbkIsQ0FBdUIsVUFBQUUsSUFBSTtBQUFBLGVBQ3ZDQSxJQUFJLENBQUMyQixRQUFMLElBQWtCM0IsSUFBSSxDQUFDcUMsTUFBTCxLQUFnQixNQUFLL0QsS0FBTCxDQUFXZ0UsY0FBN0MsbUNBQ010QyxJQUROO0FBQ1lxQyxnQkFBTSxFQUFFLENBRHBCO0FBQ3VCVixrQkFBUSxFQUFFO0FBRGpDLGFBQzJDM0IsSUFGSjtBQUFBLE9BQTNCLENBQWQ7O0FBSUEsWUFBS1gsUUFBTCxDQUFjO0FBQ1prRCxvQkFBWSxFQUFFLDJCQURGO0FBRVpDLG1CQUFXLEVBQUUsSUFGRDtBQUdaQyxxQkFBYSxFQUFFLENBSEg7QUFJWkwsZUFBTyxFQUFFTixLQUpHO0FBS1pZLG1CQUFXLEVBQUVaLEtBQUssQ0FBQ2EsTUFBTixDQUFhLFVBQUEzQyxJQUFJO0FBQUEsaUJBQUlBLElBQUksQ0FBQ3FDLE1BQUwsS0FBZ0IsTUFBSy9ELEtBQUwsQ0FBV2dFLGNBQS9CO0FBQUEsU0FBakI7QUFMRCxPQUFkO0FBT0QsS0EyV2E7O0FBQUEsd05BeldFLFlBQU07QUFDcEIsYUFBT00sc0RBQU8sQ0FBQzlDLEdBQVIsQ0FBWSxVQUFDdUMsTUFBRCxFQUFTaEMsS0FBVDtBQUFBLGVBQ2pCO0FBQUksYUFBRyxFQUFFQSxLQUFUO0FBQWdCLGlCQUFPLEVBQUUsbUJBQU07QUFDN0IsZ0JBQU13QyxXQUFXLEdBQUcsTUFBS3ZFLEtBQUwsQ0FBVzhELE9BQVgsQ0FBbUJPLE1BQW5CLENBQTBCLFVBQUEzQyxJQUFJO0FBQUEscUJBQUlBLElBQUksQ0FBQ3FDLE1BQUwsS0FBZ0JBLE1BQU0sQ0FBQzlCLEVBQTNCO0FBQUEsYUFBOUIsQ0FBcEI7O0FBQ0Esa0JBQUtsQixRQUFMLENBQWM7QUFDWmlELDRCQUFjLEVBQUVELE1BQU0sQ0FBQzlCLEVBRFg7QUFFWnVDLG1DQUFxQixFQUFFLGtDQUZYO0FBR1pDLHlCQUFXLEVBQUUsSUFIRDtBQUlaQyxvQkFBTSxFQUFFLElBSkk7QUFLWk4seUJBQVcsRUFBRUc7QUFMRCxhQUFkOztBQU9BSSxzQkFBVSxDQUFDLFlBQU07QUFDZixvQkFBSzVELFFBQUwsQ0FBYztBQUFDMkQsc0JBQU0sRUFBRTtBQUFULGVBQWQ7QUFDRCxhQUZTLEVBRVAsSUFGTyxDQUFWO0FBR0Q7QUFaRCxXQWNFO0FBQU0sbUJBQVMsWUFBSyxNQUFLMUUsS0FBTCxDQUFXZ0UsY0FBWCxLQUE4QkQsTUFBTSxDQUFDOUIsRUFBckMsR0FBMEMsZ0JBQTFDLEdBQTZELFNBQWxFO0FBQWYsV0FDRTtBQUFHLG1CQUFTLHNCQUFlOEIsTUFBTSxDQUFDYSxJQUF0QjtBQUFaLFVBREYsRUFFRSxvQkFBT2IsTUFBTSxDQUFDNUIsS0FBZCxDQUZGLENBZEYsQ0FEaUI7QUFBQSxPQUFaLENBQVA7QUFxQkQsS0FtVmE7O0FBQUEsaU9BaFZXLFVBQUMwQyxDQUFELEVBQU87QUFDOUIsVUFBTTVDLEVBQUUsR0FBRyxDQUFDNEMsQ0FBQyxDQUFDQyxHQUFkOztBQUNBLFVBQU10QixLQUFLLEdBQUcsTUFBS3hELEtBQUwsQ0FBVzhELE9BQVgsQ0FBbUJ0QyxHQUFuQixDQUF1QixVQUFBRSxJQUFJO0FBQUEsZUFDdkNBLElBQUksQ0FBQzJCLFFBQUwsSUFBa0IzQixJQUFJLENBQUNxQyxNQUFMLEtBQWdCLE1BQUsvRCxLQUFMLENBQVdnRSxjQUE3QyxtQ0FDTXRDLElBRE47QUFDWXFDLGdCQUFNLEVBQUU5QixFQURwQjtBQUN3Qm9CLGtCQUFRLEVBQUU7QUFEbEMsYUFDNEMzQixJQUZMO0FBQUEsT0FBM0IsQ0FBZDs7QUFJQSxZQUFLWCxRQUFMLENBQWM7QUFDWm9ELHFCQUFhLEVBQUUsQ0FESDtBQUVaTCxlQUFPLEVBQUVOLEtBRkc7QUFHWmdCLDZCQUFxQixFQUFFLGtDQUhYO0FBSVpQLG9CQUFZLEVBQUUsa0NBSkY7QUFLWkMsbUJBQVcsRUFBRSxJQUxEO0FBTVpFLG1CQUFXLEVBQUVaLEtBQUssQ0FBQ2EsTUFBTixDQUFhLFVBQUEzQyxJQUFJO0FBQUEsaUJBQUlBLElBQUksQ0FBQ3FDLE1BQUwsS0FBZ0IsTUFBSy9ELEtBQUwsQ0FBV2dFLGNBQS9CO0FBQUEsU0FBakI7QUFORCxPQUFkO0FBUUQsS0FrVWE7O0FBQUEsZ09BaFVVLFVBQUNhLENBQUQsRUFBTztBQUM3QixVQUFNNUMsRUFBRSxHQUFHLENBQUM0QyxDQUFDLENBQUNDLEdBQWQ7O0FBQ0EsVUFBTXRCLEtBQUssR0FBRyxNQUFLeEQsS0FBTCxDQUFXOEQsT0FBWCxDQUFtQnRDLEdBQW5CLENBQXVCLFVBQUFFLElBQUksRUFBSTtBQUN6QyxZQUFJQSxJQUFJLENBQUMyQixRQUFMLElBQWtCM0IsSUFBSSxDQUFDcUMsTUFBTCxLQUFnQixNQUFLL0QsS0FBTCxDQUFXZ0UsY0FBakQsRUFBa0U7QUFDaEUsY0FBSXRDLElBQUksQ0FBQ0csTUFBTCxDQUFZRyxRQUFaLENBQXFCQyxFQUFyQixDQUFKLEVBQThCO0FBQzVCLG1EQUFXUCxJQUFYO0FBQWlCRyxvQkFBTSxFQUFFLE1BQUtrRCxXQUFMLENBQWlCckQsSUFBakIsRUFBdUJPLEVBQXZCO0FBQXpCO0FBQ0QsV0FGRCxNQUVPO0FBQ0wsbURBQVdQLElBQVg7QUFBaUJHLG9CQUFNLEVBQUUsTUFBS21ELFFBQUwsQ0FBY3RELElBQWQsRUFBb0JPLEVBQXBCO0FBQXpCO0FBQ0Q7QUFDRixTQU5ELE1BTU87QUFDTCxpQkFBT1AsSUFBUDtBQUNEO0FBQ0YsT0FWVyxDQUFkOztBQVlBLFlBQUtYLFFBQUwsQ0FBYztBQUNaeUQsNkJBQXFCLEVBQUUsaUNBRFg7QUFFWlAsb0JBQVksRUFBRSw0QkFGRjtBQUdaQyxtQkFBVyxFQUFFLElBSEQ7QUFJWkosZUFBTyxFQUFFTixLQUpHO0FBS1pZLG1CQUFXLEVBQUVaLEtBQUssQ0FBQ2EsTUFBTixDQUFhLFVBQUEzQyxJQUFJO0FBQUEsaUJBQUlBLElBQUksQ0FBQ3FDLE1BQUwsS0FBZ0IsTUFBSy9ELEtBQUwsQ0FBV2dFLGNBQS9CO0FBQUEsU0FBakI7QUFMRCxPQUFkO0FBT0QsS0EyU2E7O0FBQUEsNk5BelNPLFlBQU07QUFDekIsWUFBS2pELFFBQUwsQ0FBYztBQUNaMkMsbUJBQVcsRUFBRSxLQUREO0FBRVpRLG1CQUFXLEVBQUU7QUFGRCxPQUFkO0FBSUQsS0FvU2E7O0FBQUEsd05BblNFLFlBQU07QUFDcEIsYUFBT2Usc0RBQU8sQ0FBQ3pELEdBQVIsQ0FBWSxVQUFDNkMsTUFBRCxFQUFTdEMsS0FBVDtBQUFBLGVBQ2pCO0FBQUksYUFBRyxFQUFFQSxLQUFUO0FBQWdCLGlCQUFPLEVBQUUsbUJBQU07QUFDN0IsZ0JBQU13QyxXQUFXLEdBQUcsTUFBS3ZFLEtBQUwsQ0FBVzhELE9BQVgsQ0FBbUJPLE1BQW5CLENBQTBCLFVBQUEzQyxJQUFJLEVBQUk7QUFDcEQsa0JBQUkyQyxNQUFNLENBQUNwQyxFQUFQLEtBQWMsQ0FBZCxJQUFtQlAsSUFBSSxDQUFDVSxPQUF4QixJQUFtQ1YsSUFBSSxDQUFDcUMsTUFBTCxLQUFnQixNQUFLL0QsS0FBTCxDQUFXZ0UsY0FBbEUsRUFBa0Y7QUFDaEYsdUJBQU90QyxJQUFQO0FBQ0QsZUFGRCxNQUVPLElBQUkyQyxNQUFNLENBQUNwQyxFQUFQLEtBQWMsQ0FBZCxJQUFtQlAsSUFBSSxDQUFDVyxTQUF4QixJQUFxQ1gsSUFBSSxDQUFDcUMsTUFBTCxLQUFnQixNQUFLL0QsS0FBTCxDQUFXZ0UsY0FBcEUsRUFBb0Y7QUFDekYsdUJBQU90QyxJQUFQO0FBQ0Q7O0FBQ0QscUJBQU8sSUFBUDtBQUNELGFBUG1CLENBQXBCOztBQVFBLGtCQUFLWCxRQUFMLENBQWM7QUFDWnlELG1DQUFxQixFQUFFLGtDQURYO0FBRVpFLG9CQUFNLEVBQUUsSUFGSTtBQUdaTix5QkFBVyxFQUFFRztBQUhELGFBQWQ7O0FBS0FJLHNCQUFVLENBQUMsWUFBTTtBQUNmLG9CQUFLNUQsUUFBTCxDQUFjO0FBQUMyRCxzQkFBTSxFQUFFO0FBQVQsZUFBZDtBQUNELGFBRlMsRUFFUCxJQUZPLENBQVY7QUFHRDtBQWpCRCxXQW1CRTtBQUFNLG1CQUFTLEVBQUM7QUFBaEIsV0FDRTtBQUFHLG1CQUFTLHNCQUFlTCxNQUFNLENBQUNPLElBQXRCO0FBQVosVUFERixFQUVFLG9CQUFPUCxNQUFNLENBQUNsQyxLQUFkLENBRkYsQ0FuQkYsQ0FEaUI7QUFBQSxPQUFaLENBQVA7QUEwQkQsS0F3UWE7O0FBQUEsaU9BdlFXLFVBQUMwQyxDQUFELEVBQU87QUFDOUIsY0FBUUEsQ0FBQyxDQUFDQyxHQUFWO0FBQ0UsYUFBSyxLQUFMO0FBQ0UsZ0JBQUtJLGtCQUFMOztBQUNBLGdCQUFLQyxVQUFMOztBQUNBOztBQUNGLGFBQUssTUFBTDtBQUNFLGdCQUFLRCxrQkFBTDs7QUFDQSxnQkFBS0Usb0JBQUw7O0FBQ0E7O0FBQ0YsYUFBSyxNQUFMO0FBQ0UsZ0JBQUtGLGtCQUFMOztBQUNBLGdCQUFLRyxXQUFMOztBQUNBOztBQUNGLGFBQUssUUFBTDtBQUNFLGdCQUFLSCxrQkFBTDs7QUFDQSxnQkFBS0ksYUFBTDs7QUFDQTs7QUFDRixhQUFLLFNBQUw7QUFDRSxnQkFBS0osa0JBQUw7O0FBQ0EsZ0JBQUtLLGNBQUw7O0FBQ0E7O0FBQ0YsYUFBSyxXQUFMO0FBQ0UsZ0JBQUtMLGtCQUFMOztBQUNBLGdCQUFLTSxnQkFBTDs7QUFDQTs7QUFDRixhQUFLLFdBQUw7QUFDRSxnQkFBS04sa0JBQUw7O0FBQ0EsZ0JBQUtPLGdCQUFMOztBQUNBOztBQUNGLGFBQUssYUFBTDtBQUNFLGdCQUFLUCxrQkFBTDs7QUFDQSxnQkFBS1Esa0JBQUw7O0FBQ0E7O0FBQ0Y7QUFDRTtBQWxDSjtBQW9DRCxLQWtPYTs7QUFBQSxxTkFoT0QsWUFBTTtBQUNqQixVQUFJbEMsS0FBSyxHQUFHLE1BQUt4RCxLQUFMLENBQVc4RCxPQUFYLENBQW1CdEMsR0FBbkIsQ0FBdUIsVUFBQ0UsSUFBRDtBQUFBLGVBQVVBLElBQUksQ0FBQ3FDLE1BQUwsS0FBZ0IsTUFBSy9ELEtBQUwsQ0FBV2dFLGNBQTNCLG1DQUN4Q3RDLElBRHdDO0FBRTNDMkIsa0JBQVEsRUFBRTtBQUZpQyxhQUd6QzNCLElBSCtCO0FBQUEsT0FBdkIsQ0FBWjs7QUFJQSxZQUFLWCxRQUFMLENBQWM7QUFDWm9ELHFCQUFhLEVBQUVYLEtBQUssQ0FBQ1gsTUFEVDtBQUVaaUIsZUFBTyxFQUFFTixLQUZHO0FBR1ptQyxrQkFBVSxFQUFFLEtBSEE7QUFJWnZCLG1CQUFXLEVBQUVaLEtBQUssQ0FBQ2EsTUFBTixDQUFhLFVBQUEzQyxJQUFJO0FBQUEsaUJBQUlBLElBQUksQ0FBQ3FDLE1BQUwsS0FBZ0IsTUFBSy9ELEtBQUwsQ0FBV2dFLGNBQS9CO0FBQUEsU0FBakI7QUFKRCxPQUFkO0FBTUQsS0FxTmE7O0FBQUEsK05BcE5TLFlBQU07QUFDM0IsVUFBSVIsS0FBSyxHQUFHLE1BQUt4RCxLQUFMLENBQVc4RCxPQUFYLENBQW1CdEMsR0FBbkIsQ0FBdUIsVUFBQ0UsSUFBRDtBQUFBLGVBQVVBLElBQUksQ0FBQ3FDLE1BQUwsS0FBZ0IsTUFBSy9ELEtBQUwsQ0FBV2dFLGNBQTNCLG1DQUN4Q3RDLElBRHdDO0FBRTNDMkIsa0JBQVEsRUFBRTtBQUZpQyxhQUd6QzNCLElBSCtCO0FBQUEsT0FBdkIsQ0FBWjs7QUFJQSxZQUFLWCxRQUFMLENBQWM7QUFDWm9ELHFCQUFhLEVBQUUsQ0FESDtBQUVaTCxlQUFPLEVBQUVOLEtBRkc7QUFHWm1DLGtCQUFVLEVBQUUsTUFIQTtBQUladkIsbUJBQVcsRUFBRVosS0FBSyxDQUFDYSxNQUFOLENBQWEsVUFBQTNDLElBQUk7QUFBQSxpQkFBSUEsSUFBSSxDQUFDcUMsTUFBTCxLQUFnQixNQUFLL0QsS0FBTCxDQUFXZ0UsY0FBL0I7QUFBQSxTQUFqQjtBQUpELE9BQWQ7QUFNRCxLQXlNYTs7QUFBQSxzTkF4TUEsWUFBTTtBQUNsQixVQUFJNEIsWUFBWSxHQUFHLENBQW5COztBQUNBLFVBQUlwQyxLQUFLLEdBQUcsTUFBS3hELEtBQUwsQ0FBVzhELE9BQVgsQ0FBbUJPLE1BQW5CLENBQTBCLFVBQUEzQyxJQUFJO0FBQUEsZUFBSUEsSUFBSSxDQUFDcUMsTUFBTCxLQUFnQixNQUFLL0QsS0FBTCxDQUFXZ0UsY0FBL0I7QUFBQSxPQUE5QixDQUFaOztBQUNBUixXQUFLLEdBQUdBLEtBQUssQ0FBQ2hDLEdBQU4sQ0FBVSxVQUFDRSxJQUFELEVBQVU7QUFDMUIsWUFBSUEsSUFBSSxDQUFDbUUsSUFBVCxFQUFlO0FBQ2JELHNCQUFZO0FBQ1osaURBQVdsRSxJQUFYO0FBQWlCMkIsb0JBQVEsRUFBRTtBQUEzQjtBQUNEOztBQUNELCtDQUFXM0IsSUFBWDtBQUFpQjJCLGtCQUFRLEVBQUU7QUFBM0I7QUFDRCxPQU5PLENBQVI7O0FBT0EsWUFBS3RDLFFBQUwsQ0FBYztBQUNab0QscUJBQWEsRUFBRXlCLFlBREg7QUFFWkQsa0JBQVUsRUFBRSxNQUZBO0FBR1p2QixtQkFBVyxFQUFFWixLQUFLLENBQUNhLE1BQU4sQ0FBYSxVQUFBM0MsSUFBSTtBQUFBLGlCQUFJQSxJQUFJLENBQUNxQyxNQUFMLEtBQWdCLE1BQUsvRCxLQUFMLENBQVdnRSxjQUEvQjtBQUFBLFNBQWpCO0FBSEQsT0FBZDs7QUFLQSxhQUFPUixLQUFQO0FBQ0QsS0F3TGE7O0FBQUEsd05BdkxFLFlBQU07QUFDcEIsVUFBSW9DLFlBQVksR0FBRyxDQUFuQjs7QUFDQSxVQUFJcEMsS0FBSyxHQUFHLE1BQUt4RCxLQUFMLENBQVc4RCxPQUFYLENBQW1CTyxNQUFuQixDQUEwQixVQUFBM0MsSUFBSTtBQUFBLGVBQUlBLElBQUksQ0FBQ3FDLE1BQUwsS0FBZ0IsTUFBSy9ELEtBQUwsQ0FBV2dFLGNBQS9CO0FBQUEsT0FBOUIsQ0FBWjs7QUFDQVIsV0FBSyxHQUFHQSxLQUFLLENBQUNoQyxHQUFOLENBQVUsVUFBQ0UsSUFBRCxFQUFVO0FBQzFCLFlBQUksQ0FBQ0EsSUFBSSxDQUFDbUUsSUFBVixFQUFnQjtBQUNkRCxzQkFBWTtBQUNaLGlEQUFXbEUsSUFBWDtBQUFpQjJCLG9CQUFRLEVBQUU7QUFBM0I7QUFDRDs7QUFDRCwrQ0FBVzNCLElBQVg7QUFBaUIyQixrQkFBUSxFQUFFO0FBQTNCO0FBQ0QsT0FOTyxDQUFSOztBQU9BLFlBQUt0QyxRQUFMLENBQWM7QUFDWm9ELHFCQUFhLEVBQUV5QixZQURIO0FBRVpELGtCQUFVLEVBQUUsUUFGQTtBQUdadkIsbUJBQVcsRUFBRVosS0FBSyxDQUFDYSxNQUFOLENBQWEsVUFBQTNDLElBQUk7QUFBQSxpQkFBSUEsSUFBSSxDQUFDcUMsTUFBTCxLQUFnQixNQUFLL0QsS0FBTCxDQUFXZ0UsY0FBL0I7QUFBQSxTQUFqQjtBQUhELE9BQWQ7O0FBS0EsYUFBT1IsS0FBUDtBQUNELEtBdUthOztBQUFBLHlOQXRLRyxZQUFNO0FBQ3JCLFVBQUlvQyxZQUFZLEdBQUcsQ0FBbkI7O0FBQ0EsVUFBSXBDLEtBQUssR0FBRyxNQUFLeEQsS0FBTCxDQUFXOEQsT0FBWCxDQUFtQk8sTUFBbkIsQ0FBMEIsVUFBQTNDLElBQUk7QUFBQSxlQUFJQSxJQUFJLENBQUNxQyxNQUFMLEtBQWdCLE1BQUsvRCxLQUFMLENBQVdnRSxjQUEvQjtBQUFBLE9BQTlCLENBQVo7O0FBQ0FSLFdBQUssR0FBR0EsS0FBSyxDQUFDaEMsR0FBTixDQUFVLFVBQUNFLElBQUQsRUFBVTtBQUMxQixZQUFJQSxJQUFJLENBQUNVLE9BQVQsRUFBa0I7QUFDaEJ3RCxzQkFBWTtBQUNaLGlEQUFXbEUsSUFBWDtBQUFpQjJCLG9CQUFRLEVBQUU7QUFBM0I7QUFDRDs7QUFDRCwrQ0FBVzNCLElBQVg7QUFBaUIyQixrQkFBUSxFQUFFO0FBQTNCO0FBQ0QsT0FOTyxDQUFSOztBQU9BLFlBQUt0QyxRQUFMLENBQWM7QUFDWm9ELHFCQUFhLEVBQUV5QixZQURIO0FBRVpELGtCQUFVLEVBQUUsU0FGQTtBQUdadkIsbUJBQVcsRUFBRVosS0FBSyxDQUFDYSxNQUFOLENBQWEsVUFBQTNDLElBQUk7QUFBQSxpQkFBSUEsSUFBSSxDQUFDcUMsTUFBTCxLQUFnQixNQUFLL0QsS0FBTCxDQUFXZ0UsY0FBL0I7QUFBQSxTQUFqQjtBQUhELE9BQWQ7O0FBS0EsYUFBT1IsS0FBUDtBQUNELEtBc0phOztBQUFBLDJOQXJKSyxZQUFNO0FBQ3ZCLFVBQUlvQyxZQUFZLEdBQUcsQ0FBbkI7O0FBQ0EsVUFBSXBDLEtBQUssR0FBRyxNQUFLeEQsS0FBTCxDQUFXOEQsT0FBWCxDQUFtQk8sTUFBbkIsQ0FBMEIsVUFBQTNDLElBQUk7QUFBQSxlQUFJQSxJQUFJLENBQUNxQyxNQUFMLEtBQWdCLE1BQUsvRCxLQUFMLENBQVdnRSxjQUEzQixJQUE2Q3RDLElBQUksQ0FBQ3FDLE1BQUwsS0FBZ0IsTUFBSy9ELEtBQUwsQ0FBV2dFLGNBQTVFO0FBQUEsT0FBOUIsQ0FBWjs7QUFDQVIsV0FBSyxHQUFHQSxLQUFLLENBQUNoQyxHQUFOLENBQVUsVUFBQ0UsSUFBRCxFQUFVO0FBQzFCLFlBQUksQ0FBQ0EsSUFBSSxDQUFDVSxPQUFWLEVBQW1CO0FBQ2pCd0Qsc0JBQVk7QUFDWixpREFBV2xFLElBQVg7QUFBaUIyQixvQkFBUSxFQUFFO0FBQTNCO0FBQ0Q7O0FBQ0QsK0NBQVczQixJQUFYO0FBQWlCMkIsa0JBQVEsRUFBRTtBQUEzQjtBQUNELE9BTk8sQ0FBUjs7QUFPQSxZQUFLdEMsUUFBTCxDQUFjO0FBQ1pvRCxxQkFBYSxFQUFFeUIsWUFESDtBQUVaRCxrQkFBVSxFQUFFLFdBRkE7QUFHWnZCLG1CQUFXLEVBQUVaLEtBQUssQ0FBQ2EsTUFBTixDQUFhLFVBQUEzQyxJQUFJO0FBQUEsaUJBQUlBLElBQUksQ0FBQ3FDLE1BQUwsS0FBZ0IsTUFBSy9ELEtBQUwsQ0FBV2dFLGNBQS9CO0FBQUEsU0FBakI7QUFIRCxPQUFkOztBQUtBLGFBQU9SLEtBQVA7QUFDRCxLQXFJYTs7QUFBQSwyTkFwSUssWUFBTTtBQUN2QixVQUFJb0MsWUFBWSxHQUFHLENBQW5COztBQUNBLFVBQUlwQyxLQUFLLEdBQUcsTUFBS3hELEtBQUwsQ0FBVzhELE9BQVgsQ0FBbUJPLE1BQW5CLENBQTBCLFVBQUEzQyxJQUFJO0FBQUEsZUFBSUEsSUFBSSxDQUFDcUMsTUFBTCxLQUFnQixNQUFLL0QsS0FBTCxDQUFXZ0UsY0FBM0IsSUFBNkN0QyxJQUFJLENBQUNxQyxNQUFMLEtBQWdCLE1BQUsvRCxLQUFMLENBQVdnRSxjQUE1RTtBQUFBLE9BQTlCLENBQVo7O0FBQ0FSLFdBQUssR0FBR0EsS0FBSyxDQUFDaEMsR0FBTixDQUFVLFVBQUNFLElBQUQsRUFBVTtBQUMxQixZQUFJQSxJQUFJLENBQUNXLFNBQVQsRUFBb0I7QUFDbEJ1RCxzQkFBWTtBQUNaLGlEQUFXbEUsSUFBWDtBQUFpQjJCLG9CQUFRLEVBQUU7QUFBM0I7QUFDRDs7QUFDRCwrQ0FBVzNCLElBQVg7QUFBaUIyQixrQkFBUSxFQUFFO0FBQTNCO0FBQ0QsT0FOTyxDQUFSOztBQU9BLFlBQUt0QyxRQUFMLENBQWM7QUFDWm9ELHFCQUFhLEVBQUV5QixZQURIO0FBRVpELGtCQUFVLEVBQUUsV0FGQTtBQUdadkIsbUJBQVcsRUFBRVosS0FBSyxDQUFDYSxNQUFOLENBQWEsVUFBQTNDLElBQUk7QUFBQSxpQkFBSUEsSUFBSSxDQUFDcUMsTUFBTCxLQUFnQixNQUFLL0QsS0FBTCxDQUFXZ0UsY0FBL0I7QUFBQSxTQUFqQjtBQUhELE9BQWQ7O0FBS0EsYUFBT1IsS0FBUDtBQUNELEtBb0hhOztBQUFBLDZOQW5ITyxZQUFNO0FBQ3pCLFVBQUlvQyxZQUFZLEdBQUcsQ0FBbkI7O0FBQ0EsVUFBSXBDLEtBQUssR0FBRyxNQUFLeEQsS0FBTCxDQUFXOEQsT0FBWCxDQUFtQk8sTUFBbkIsQ0FBMEIsVUFBQTNDLElBQUk7QUFBQSxlQUFJQSxJQUFJLENBQUNxQyxNQUFMLEtBQWdCLE1BQUsvRCxLQUFMLENBQVdnRSxjQUEzQixJQUE2Q3RDLElBQUksQ0FBQ3FDLE1BQUwsS0FBZ0IsTUFBSy9ELEtBQUwsQ0FBV2dFLGNBQTVFO0FBQUEsT0FBOUIsQ0FBWjs7QUFDQVIsV0FBSyxHQUFHQSxLQUFLLENBQUNoQyxHQUFOLENBQVUsVUFBQ0UsSUFBRCxFQUFVO0FBQzFCLFlBQUksQ0FBQ0EsSUFBSSxDQUFDVyxTQUFWLEVBQXFCO0FBQ25CdUQsc0JBQVk7QUFDWixpREFBV2xFLElBQVg7QUFBaUIyQixvQkFBUSxFQUFFO0FBQTNCO0FBQ0Q7O0FBQ0QsK0NBQVczQixJQUFYO0FBQWlCMkIsa0JBQVEsRUFBRTtBQUEzQjtBQUNELE9BTk8sQ0FBUjs7QUFPQSxZQUFLdEMsUUFBTCxDQUFjO0FBQ1pvRCxxQkFBYSxFQUFFeUIsWUFESDtBQUVaRCxrQkFBVSxFQUFFLGFBRkE7QUFHWm5CLDZCQUFxQixFQUFFLGlDQUhYO0FBSVpKLG1CQUFXLEVBQUVaLEtBQUssQ0FBQ2EsTUFBTixDQUFhLFVBQUEzQyxJQUFJO0FBQUEsaUJBQUlBLElBQUksQ0FBQ3FDLE1BQUwsS0FBZ0IsTUFBSy9ELEtBQUwsQ0FBV2dFLGNBQS9CO0FBQUEsU0FBakI7QUFKRCxPQUFkOztBQU1BLGFBQU9SLEtBQVA7QUFDRCxLQWtHYTs7QUFBQSx1TkFqR0MsWUFBTTtBQUNuQixhQUFPM0IscURBQU0sQ0FBQ0wsR0FBUCxDQUFXLFVBQUNNLEtBQUQsRUFBUUMsS0FBUjtBQUFBLGVBQ2hCO0FBQUksYUFBRyxFQUFFQSxLQUFUO0FBQWdCLGlCQUFPLEVBQUUsbUJBQU07QUFDN0IsZ0JBQU13QyxXQUFXLEdBQUcsTUFBS3ZFLEtBQUwsQ0FBVzhELE9BQVgsQ0FBbUJPLE1BQW5CLENBQTBCLFVBQUEzQyxJQUFJO0FBQUEscUJBQUlBLElBQUksQ0FBQ0csTUFBTCxDQUFZRyxRQUFaLENBQXFCRixLQUFLLENBQUNHLEVBQTNCLEtBQWtDUCxJQUFJLENBQUNxQyxNQUFMLEtBQWdCLE1BQUsvRCxLQUFMLENBQVdnRSxjQUFqRTtBQUFBLGFBQTlCLENBQXBCOztBQUNBLGtCQUFLakQsUUFBTCxDQUFjO0FBQ1oyRCxvQkFBTSxFQUFFLElBREk7QUFFWkYsbUNBQXFCLEVBQUUsaUNBRlg7QUFHWkoseUJBQVcsRUFBRUc7QUFIRCxhQUFkOztBQUtBSSxzQkFBVSxDQUFDLFlBQU07QUFDZixvQkFBSzVELFFBQUwsQ0FBYztBQUFDMkQsc0JBQU0sRUFBRTtBQUFULGVBQWQ7QUFDRCxhQUZTLEVBRVAsSUFGTyxDQUFWO0FBR0Q7QUFWRCxXQVlFO0FBQU0sbUJBQVMsRUFBQztBQUFoQixXQUNFO0FBQUcsbUJBQVMsa0NBQTJCNUMsS0FBSyxDQUFDSSxLQUFqQztBQUFaLFVBREYsRUFFRSxvQkFBT0osS0FBSyxDQUFDSyxLQUFiLENBRkYsQ0FaRixDQURnQjtBQUFBLE9BQVgsQ0FBUDtBQW1CRCxLQTZFYTs7QUFBQSxxTkE1RUQsVUFBQzJELFVBQUQsRUFBZ0I7QUFDM0IsVUFBSUEsVUFBVSxLQUFLLEVBQW5CLEVBQXVCO0FBQ3JCLGNBQUsvRSxRQUFMLENBQWM7QUFBQ3FELHFCQUFXLEVBQUUsTUFBS3BFLEtBQUwsQ0FBVzhELE9BQVgsQ0FBbUJPLE1BQW5CLENBQTBCLFVBQUMzQyxJQUFEO0FBQUEsbUJBQVUsQ0FBQ0EsSUFBSSxDQUFDcUUsT0FBaEI7QUFBQSxXQUExQjtBQUFkLFNBQWQ7QUFDRCxPQUZELE1BRU87QUFDTCxZQUFNQyxXQUFXLEdBQUcsTUFBS2hHLEtBQUwsQ0FBVzhELE9BQVgsQ0FBbUJPLE1BQW5CLENBQTBCLFVBQUMzQyxJQUFEO0FBQUEsaUJBQzVDLENBQUNBLElBQUksQ0FBQ3FFLE9BQU4sSUFBaUJyRSxJQUFJLENBQUN0QixPQUFMLENBQWE2RixXQUFiLEdBQTJCQyxPQUEzQixDQUFtQ0osVUFBVSxDQUFDRyxXQUFYLEVBQW5DLElBQStELENBQUMsQ0FEckM7QUFBQSxTQUExQixDQUFwQjs7QUFFQSxjQUFLbEYsUUFBTCxDQUFjO0FBQ1pxRCxxQkFBVyxFQUFFNEI7QUFERCxTQUFkO0FBR0Q7QUFDRixLQWtFYTs7QUFBQSxzTkFqRUEsVUFBQ3ZCLFdBQUQsRUFBY0wsV0FBZCxFQUEyQkkscUJBQTNCLEVBQXFEO0FBQ2pFLGFBQVE7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDTEMsV0FBVyxLQUFLLElBQWhCLEdBQ0NMLFdBQVcsQ0FBQ3ZCLE1BQVosS0FBdUIsQ0FBdkIsR0FDRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNHMkIscUJBREgsQ0FERixHQUtFLE1BQUMsc0VBQUQ7QUFBVSxhQUFLLEVBQUVKLFdBQWpCO0FBQThCLHFCQUFhLEVBQUUsTUFBS3pDLGFBQUwsQ0FBbUJ3RSxJQUFuQix5R0FBN0M7QUFDVSxvQkFBWSxFQUFFLE1BQUtoRCxZQUFMLENBQWtCZ0QsSUFBbEIseUdBRHhCO0FBRVUscUJBQWEsRUFBRSxNQUFLL0MsYUFBTCxDQUFtQitDLElBQW5CO0FBRnpCLFFBTkgsR0FVQyxNQUFDLHdFQUFEO0FBQVksWUFBSSxFQUFFMUIsV0FBbEI7QUFBK0IscUJBQWEsRUFBRSxNQUFLOUMsYUFBTCxDQUFtQndFLElBQW5CLHlHQUE5QztBQUNZLHlCQUFpQixFQUFFLE1BQUt2RSxpQkFBTCxDQUF1QnVFLElBQXZCO0FBRC9CLFFBWEksQ0FBUjtBQWNELEtBa0RhOztBQUFBLHlOQWpERyxZQUFNO0FBQ3JCLGFBQU87QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FFTCxNQUFDLDZDQUFEO0FBQVUsZUFBTyxFQUFFLE1BQUtDLFVBQUwsRUFBbkI7QUFBc0MsaUJBQVMsRUFBQyxhQUFoRDtBQUE4RCxlQUFPLEVBQUUsQ0FBQyxPQUFEO0FBQXZFLFNBQ0U7QUFBRyxpQkFBUyxFQUFDO0FBQWIsUUFERixDQUZLLEVBTUwsTUFBQyw2Q0FBRDtBQUFVLGVBQU8sRUFBRSxNQUFLQyxTQUFMLEVBQW5CO0FBQXFDLGlCQUFTLEVBQUMsYUFBL0M7QUFBNkQsZUFBTyxFQUFFLENBQUMsT0FBRDtBQUF0RSxTQUNFO0FBQUcsaUJBQVMsRUFBQztBQUFiLFFBREYsQ0FOSyxFQVVMO0FBQU0sZUFBTyxFQUFFLE1BQUtDLFlBQUwsQ0FBa0JILElBQWxCO0FBQWYsU0FDRTtBQUFHLGlCQUFTLEVBQUM7QUFBYixRQURGLENBVkssQ0FBUDtBQWNELEtBa0NhOztBQUFBLHFOQWhDRDtBQUFBLGFBQ1gsTUFBQyx5Q0FBRDtBQUFNLFVBQUUsRUFBQyxhQUFUO0FBQ00sZUFBTyxFQUFFLE1BQUtJLHNCQUFMLENBQTRCSixJQUE1QjtBQURmLFNBRUc5RSxzREFBTyxDQUFDRyxHQUFSLENBQVksVUFBQUMsTUFBTTtBQUFBLGVBQ2pCLE1BQUMseUNBQUQsQ0FBTSxJQUFOO0FBQVcsYUFBRyxFQUFFQSxNQUFNLENBQUNVO0FBQXZCLFdBQ0dWLE1BQU0sQ0FBQ1UsS0FEVixDQURpQjtBQUFBLE9BQWxCLENBRkgsQ0FEVztBQUFBLEtBZ0NDOztBQUFBLHFOQXRCRDtBQUFBLGFBQ1gsTUFBQyx5Q0FBRDtBQUFNLFVBQUUsRUFBQyxhQUFUO0FBQ00sZUFBTyxFQUFFLE1BQUtxRSxzQkFBTCxDQUE0QkwsSUFBNUI7QUFEZixTQUVHN0Isc0RBQU8sQ0FBQzlDLEdBQVIsQ0FBWSxVQUFBdUMsTUFBTTtBQUFBLGVBQ2pCLE1BQUMseUNBQUQsQ0FBTSxJQUFOO0FBQVcsYUFBRyxFQUFFQSxNQUFNLENBQUM5QjtBQUF2QixXQUNHOEIsTUFBTSxDQUFDNUIsS0FEVixDQURpQjtBQUFBLE9BQWxCLENBRkgsQ0FEVztBQUFBLEtBc0JDOztBQUFBLG9OQVpGO0FBQUEsYUFDVixNQUFDLHlDQUFEO0FBQU0sVUFBRSxFQUFDLFlBQVQ7QUFDTSxlQUFPLEVBQUUsTUFBS3NFLHFCQUFMLENBQTJCTixJQUEzQjtBQURmLFNBRUd0RSxxREFBTSxDQUFDTCxHQUFQLENBQVcsVUFBQU0sS0FBSztBQUFBLGVBQ2YsTUFBQyx5Q0FBRCxDQUFNLElBQU47QUFBVyxhQUFHLEVBQUVBLEtBQUssQ0FBQ0c7QUFBdEIsV0FDR0gsS0FBSyxDQUFDSyxLQURULENBRGU7QUFBQSxPQUFoQixDQUZILENBRFU7QUFBQSxLQVlFOztBQUVaLFVBQUtuQyxLQUFMLEdBQWE7QUFDWDBHLGdCQUFVLEVBQUUsRUFERDtBQUVYbEMsMkJBQXFCLEVBQUUsa0NBRlo7QUFHWFAsa0JBQVksRUFBRSxFQUhIO0FBSVhDLGlCQUFXLEVBQUUsS0FKRjtBQUtYeUMsaUJBQVcsRUFBRSxLQUxGO0FBTVhoQixnQkFBVSxFQUFFLE1BTkQ7QUFPWGlCLGNBQVEsRUFBRSxJQVBDO0FBUVg5QyxhQUFPLEVBQUVOLG9EQVJFO0FBU1hrQixZQUFNLEVBQUUsSUFURztBQVVYRCxpQkFBVyxFQUFFLElBVkY7QUFXWGxFLFVBQUksRUFBRTtBQUNKckIsWUFBSSxFQUFFLGdCQURGO0FBRUp3QixhQUFLLEVBQUUsb0JBRkg7QUFHSkQsY0FBTSxFQUFFO0FBSEosT0FYSztBQWdCWDBELG1CQUFhLEVBQUUsQ0FoQko7QUFpQlhILG9CQUFjLEVBQUUsQ0FqQkw7QUFrQlhOLGlCQUFXLEVBQUUsS0FsQkY7QUFtQlhVLGlCQUFXLEVBQUVaLG9EQUFLLENBQUNhLE1BQU4sQ0FBYSxVQUFBM0MsSUFBSTtBQUFBLGVBQUlBLElBQUksQ0FBQ3FDLE1BQUwsS0FBZ0IsQ0FBcEI7QUFBQSxPQUFqQjtBQW5CRixLQUFiO0FBRlk7QUF1QmI7Ozs7d0NBRW1CO0FBQUE7O0FBQ2xCWSxnQkFBVSxDQUFDLFlBQU07QUFDZixjQUFJLENBQUM1RCxRQUFMLENBQWM7QUFBQzJELGdCQUFNLEVBQUU7QUFBVCxTQUFkO0FBQ0QsT0FGUyxFQUVQLElBRk8sQ0FBVjtBQUdEOzs7a0NBR2FtQyxJLEVBQU07QUFDbEJBLFVBQUksQ0FBQ3hELFFBQUwsR0FBZ0IsQ0FBQ3dELElBQUksQ0FBQ3hELFFBQXRCO0FBQ0EsVUFBSXVDLFlBQVksR0FBRyxDQUFuQjtBQUNBLFVBQU1wQyxLQUFLLEdBQUcsS0FBS3hELEtBQUwsQ0FBV29FLFdBQVgsQ0FBdUI1QyxHQUF2QixDQUEyQixVQUFBRSxJQUFJLEVBQUk7QUFDN0MsWUFBSUEsSUFBSSxDQUFDMkIsUUFBVCxFQUFtQjtBQUNqQnVDLHNCQUFZO0FBQ2I7O0FBQ0QsWUFBSWxFLElBQUksQ0FBQ08sRUFBTCxLQUFZNEUsSUFBSSxDQUFDNUUsRUFBckIsRUFBeUI7QUFDdkIsY0FBSVAsSUFBSSxDQUFDMkIsUUFBVCxFQUFtQjtBQUNqQnVDLHdCQUFZO0FBQ2I7O0FBQ0QsaUJBQU9pQixJQUFQO0FBQ0QsU0FMRCxNQUtPO0FBQ0wsaUJBQU9uRixJQUFQO0FBQ0Q7QUFDRixPQVpXLENBQWQ7QUFjQSxXQUFLWCxRQUFMLENBQWM7QUFDWm9ELHFCQUFhLEVBQUV5QixZQURIO0FBRVp4QixtQkFBVyxFQUFFWjtBQUZELE9BQWQ7QUFJRDs7O3NDQUVpQjtBQUNoQixVQUFNc0QsU0FBUyxHQUFHLEtBQUs5RyxLQUFMLENBQVdtRSxhQUFYLElBQTRCLEtBQUtuRSxLQUFMLENBQVdvRSxXQUFYLENBQXVCdkIsTUFBckU7O0FBQ0EsVUFBSWlFLFNBQUosRUFBZTtBQUNiLGFBQUszQixVQUFMO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsYUFBS0Msb0JBQUw7QUFDRDtBQUNGOzs7Z0NBRVcxRCxJLEVBQU1JLEssRUFBTztBQUN2QkosVUFBSSxDQUFDRyxNQUFMLENBQVlrRixNQUFaLENBQW1CckYsSUFBSSxDQUFDRyxNQUFMLENBQVlxRSxPQUFaLENBQW9CcEUsS0FBcEIsQ0FBbkIsRUFBK0MsQ0FBL0M7O0FBQ0EsVUFBSSxLQUFLOUIsS0FBTCxDQUFXeUUsV0FBWCxLQUEyQixJQUEzQixJQUFtQy9DLElBQUksQ0FBQ08sRUFBTCxLQUFZLEtBQUtqQyxLQUFMLENBQVd5RSxXQUFYLENBQXVCeEMsRUFBMUUsRUFBOEU7QUFDNUUsYUFBS2xCLFFBQUwsQ0FBYztBQUNaMEQscUJBQVcsa0NBQU0vQyxJQUFOO0FBQVlHLGtCQUFNLEVBQUVILElBQUksQ0FBQ0c7QUFBekI7QUFEQyxTQUFkO0FBR0Q7O0FBQ0QsYUFBT0gsSUFBSSxDQUFDRyxNQUFaO0FBQ0Q7OztrQ0FFYWdGLEksRUFBTTtBQUNsQkEsVUFBSSxDQUFDekUsT0FBTCxHQUFlLENBQUN5RSxJQUFJLENBQUN6RSxPQUFyQjtBQUNBLFdBQUtyQixRQUFMLENBQWM7QUFDWmtELG9CQUFZLEVBQUU0QyxJQUFJLENBQUN6RSxPQUFMLEdBQWUsbUJBQWYsR0FBcUMscUJBRHZDO0FBRVo4QixtQkFBVyxFQUFFLElBRkQ7QUFHWkUsbUJBQVcsRUFBRSxLQUFLcEUsS0FBTCxDQUFXb0UsV0FBWCxDQUF1QjVDLEdBQXZCLENBQTJCLFVBQUFFLElBQUk7QUFBQSxpQkFDMUNBLElBQUksQ0FBQ08sRUFBTCxLQUFZNEUsSUFBSSxDQUFDNUUsRUFBakIsR0FDRTRFLElBREYsR0FDU25GLElBRmlDO0FBQUEsU0FBL0I7QUFIRCxPQUFkO0FBUUQ7OztzQ0FFaUJtRixJLEVBQU07QUFDdEJBLFVBQUksQ0FBQ3hFLFNBQUwsR0FBaUIsQ0FBQ3dFLElBQUksQ0FBQ3hFLFNBQXZCO0FBQ0EsV0FBS3RCLFFBQUwsQ0FBYztBQUNaa0Qsb0JBQVksRUFBRTRDLElBQUksQ0FBQ3hFLFNBQUwsR0FBaUIsd0JBQWpCLEdBQTRDLDBCQUQ5QztBQUVaNkIsbUJBQVcsRUFBRSxJQUZEO0FBR1pFLG1CQUFXLEVBQUUsS0FBS3BFLEtBQUwsQ0FBV29FLFdBQVgsQ0FBdUI1QyxHQUF2QixDQUEyQixVQUFBRSxJQUFJO0FBQUEsaUJBQzFDQSxJQUFJLENBQUNPLEVBQUwsS0FBWTRFLElBQUksQ0FBQzVFLEVBQWpCLEdBQ0U0RSxJQURGLEdBQ1NuRixJQUZpQztBQUFBLFNBQS9CO0FBSEQsT0FBZDtBQVFEOzs7K0JBRVVtRixJLEVBQU07QUFDZixXQUFLOUYsUUFBTCxDQUNFO0FBQ0VrRCxvQkFBWSxFQUFFLHdCQURoQjtBQUVFQyxtQkFBVyxFQUFFLElBRmY7QUFHRUUsbUJBQVcsRUFBRSxLQUFLcEUsS0FBTCxDQUFXOEQsT0FBWCxDQUFtQmtELE1BQW5CLENBQTBCSCxJQUExQixDQUhmO0FBSUUvQyxlQUFPLEVBQUUsS0FBSzlELEtBQUwsQ0FBVzhELE9BQVgsQ0FBbUJrRCxNQUFuQixDQUEwQkgsSUFBMUI7QUFKWCxPQURGO0FBUUQ7OztpQ0FFWW5GLEksRUFBTTtBQUFBOztBQUNqQixXQUFLWCxRQUFMLENBQWM7QUFDWjJELGNBQU0sRUFBRSxJQURJO0FBRVpELG1CQUFXLEVBQUUvQztBQUZELE9BQWQ7QUFJQWlELGdCQUFVLENBQUMsWUFBTTtBQUNmLGNBQUksQ0FBQzVELFFBQUwsQ0FBYztBQUFDMkQsZ0JBQU0sRUFBRTtBQUFULFNBQWQ7QUFDRCxPQUZTLEVBRVAsSUFGTyxDQUFWO0FBR0Q7Ozs2QkFFUWhELEksRUFBTUksSyxFQUFPO0FBQ3BCLFVBQUksS0FBSzlCLEtBQUwsQ0FBV3lFLFdBQVgsS0FBMkIsSUFBM0IsSUFBbUMvQyxJQUFJLENBQUNPLEVBQUwsS0FBWSxLQUFLakMsS0FBTCxDQUFXeUUsV0FBWCxDQUF1QnhDLEVBQTFFLEVBQThFO0FBQzVFLGFBQUtsQixRQUFMLENBQWM7QUFDWjBELHFCQUFXLGtDQUFNL0MsSUFBTjtBQUFZRyxrQkFBTSxFQUFFSCxJQUFJLENBQUNHLE1BQUwsQ0FBWW1GLE1BQVosQ0FBbUJsRixLQUFuQjtBQUFwQjtBQURDLFNBQWQ7QUFHRDs7QUFDRCxhQUFPSixJQUFJLENBQUNHLE1BQUwsQ0FBWW1GLE1BQVosQ0FBbUJsRixLQUFuQixDQUFQO0FBQ0Q7OztpQ0FFWW1GLEcsRUFBSztBQUNoQixXQUFLbEcsUUFBTCxDQUFjO0FBQ1oyRixrQkFBVSxFQUFFTyxHQUFHLENBQUNqRyxNQUFKLENBQVdyQztBQURYLE9BQWQ7QUFHQSxXQUFLK0gsVUFBTCxDQUFnQk8sR0FBRyxDQUFDakcsTUFBSixDQUFXckMsS0FBM0I7QUFDRDs7O3FDQUVnQjtBQUNmLFdBQUtvQyxRQUFMLENBQWM7QUFDWjRGLG1CQUFXLEVBQUUsQ0FBQyxLQUFLM0csS0FBTCxDQUFXMkc7QUFEYixPQUFkO0FBR0Q7Ozs2QkFFUTtBQUFBOztBQUFBLHdCQUNxSSxLQUFLM0csS0FEMUk7QUFBQSxVQUNBbUUsYUFEQSxlQUNBQSxhQURBO0FBQUEsVUFDZU8sTUFEZixlQUNlQSxNQURmO0FBQUEsVUFDdUJELFdBRHZCLGVBQ3VCQSxXQUR2QjtBQUFBLFVBQ29Da0MsV0FEcEMsZUFDb0NBLFdBRHBDO0FBQUEsVUFDaUR2QyxXQURqRCxlQUNpREEsV0FEakQ7QUFBQSxVQUM4RFYsV0FEOUQsZUFDOERBLFdBRDlEO0FBQUEsVUFDMkVuRCxJQUQzRSxlQUMyRUEsSUFEM0U7QUFBQSxVQUNpRjBELFlBRGpGLGVBQ2lGQSxZQURqRjtBQUFBLFVBQytGQyxXQUQvRixlQUMrRkEsV0FEL0Y7QUFBQSxVQUM0R00scUJBRDVHLGVBQzRHQSxxQkFENUc7QUFFUCxhQUVFO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0U7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FFRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNFLE1BQUMsMkNBQUQ7QUFDRSxpQkFBUyxFQUFDLE1BRFo7QUFFRSxnQkFBUSxFQUFFLEtBRlo7QUFHRSxlQUFPLEVBQUVtQyxXQUhYO0FBSUUsZUFBTyxFQUFFLEtBQUtPLGNBQUwsQ0FBb0JmLElBQXBCLENBQXlCLElBQXpCO0FBSlgsU0FLRyxLQUFLZ0IsV0FBTCxFQUxILENBREYsQ0FGRixFQVlFO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0csS0FBS0EsV0FBTCxFQURILENBWkYsRUFnQkU7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNFO0FBQU0saUJBQVMsRUFBQztBQUFoQixTQUNJO0FBQUcsaUJBQVMsRUFBQyw0QkFBYjtBQUEwQyxzQkFBVyxNQUFyRDtBQUNHLGVBQU8sRUFBRSxLQUFLRCxjQUFMLENBQW9CZixJQUFwQixDQUF5QixJQUF6QjtBQURaLFFBREosQ0FERixFQUtFLE1BQUMsd0VBQUQ7QUFBaUIsbUJBQVcsRUFBQyxjQUE3QjtBQUE0QyxZQUFJLEVBQUUsS0FBS25HLEtBQUwsQ0FBV08sSUFBN0Q7QUFDaUIsZ0JBQVEsRUFBRSxLQUFLNkcsWUFBTCxDQUFrQmpCLElBQWxCLENBQXVCLElBQXZCLENBRDNCO0FBRWlCLGFBQUssRUFBRSxLQUFLbkcsS0FBTCxDQUFXMEc7QUFGbkMsUUFMRixDQURGLEVBWUU7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNHLEtBQUsxRyxLQUFMLENBQVd5RSxXQUFYLEtBQTJCLElBQTNCLEdBQ0M7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDRyxLQUFLekUsS0FBTCxDQUFXb0UsV0FBWCxDQUF1QnZCLE1BQXZCLEdBQWdDLENBQWhDLEdBQ0MsbUVBQ0UsTUFBQyw2Q0FBRDtBQUFVLGFBQUssRUFBQyxTQUFoQjtBQUEwQixpQkFBUyxFQUFDLGFBQXBDO0FBQ1UscUJBQWEsRUFBRXNCLGFBQWEsR0FBRyxDQUFoQixJQUFxQkEsYUFBYSxHQUFHQyxXQUFXLENBQUN2QixNQUQxRTtBQUVVLGVBQU8sRUFBRXNCLGFBQWEsR0FBRyxDQUZuQztBQUdVLGdCQUFRLEVBQUUsS0FBS2tELGVBQUwsQ0FBcUJsQixJQUFyQixDQUEwQixJQUExQixDQUhwQjtBQUlVLGFBQUssRUFBQztBQUpoQixRQURGLEVBT0UsTUFBQyw2Q0FBRDtBQUFVLGVBQU8sRUFBRSxLQUFLMUQsVUFBTCxFQUFuQjtBQUFzQyxpQkFBUyxFQUFDLGFBQWhEO0FBQThELGVBQU8sRUFBRSxDQUFDLE9BQUQ7QUFBdkUsU0FDRSxtQkFDRTtBQUFNLGlCQUFTLEVBQUM7QUFBaEIsY0FBNEIsS0FBS3pDLEtBQUwsQ0FBVzJGLFVBQXZDLENBREYsRUFFRTtBQUFHLGlCQUFTLEVBQUM7QUFBYixRQUZGLENBREYsQ0FQRixDQURELEdBY0csSUFmTixDQURELEdBbUJDO0FBQUcsaUJBQVMsRUFBQyxrQ0FBYjtBQUFnRCxlQUFPLEVBQUUsbUJBQU07QUFDN0QsZ0JBQUksQ0FBQzVFLFFBQUwsQ0FBYztBQUFDMEQsdUJBQVcsRUFBRTtBQUFkLFdBQWQ7QUFDRDtBQUZELFFBcEJKLEVBeUJFO0FBQUssZUFBTyxFQUFDO0FBQWIsUUF6QkYsRUEyQklOLGFBQWEsR0FBRyxDQUFqQixJQUF1QixLQUFLbUQsY0FBTCxFQTNCMUIsQ0FERixFQWdDRzVDLE1BQU0sR0FDTDtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNFLE1BQUMseUVBQUQsT0FERixDQURLLEdBSUgsS0FBSzZDLFdBQUwsQ0FBaUI5QyxXQUFqQixFQUE4QkwsV0FBOUIsRUFBMkNJLHFCQUEzQyxDQXBDTixFQXNDRSxNQUFDLHFFQUFEO0FBQWEsWUFBSSxFQUFFZCxXQUFuQjtBQUFnQyxZQUFJLEVBQUVuRCxJQUF0QztBQUNhLGVBQU8sRUFBRSxLQUFLMkUsa0JBQUwsQ0FBd0JpQixJQUF4QixDQUE2QixJQUE3QixDQUR0QjtBQUVhLGtCQUFVLEVBQUUsS0FBSzlGLFVBQUwsQ0FBZ0I4RixJQUFoQixDQUFxQixJQUFyQjtBQUZ6QixRQXRDRixDQVpGLENBaEJGLENBREYsRUEwRUdqQyxXQUFXLElBQUl0RSw0Q0FBTyxDQUFDTixJQUFSLENBQWE7QUFBTSxVQUFFLEVBQUM7QUFBVCxTQUF1QjJFLFlBQXZCLENBQWIsRUFBMEQsQ0FBMUQsRUFBNkQsS0FBS2lCLGtCQUFsRSxDQTFFbEIsQ0FGRjtBQStFRDs7OztFQWpvQmdCc0MsbUQ7O0FBb29CSi9ELG1FQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4cEJBO0FBQUEsOENBQWUsZ0VBQ2I7QUFDRSxRQUFNLENBRFI7QUFFRSxZQUFVLE1BRlo7QUFHRSxXQUFTLFFBSFg7QUFJRSxXQUFTO0FBSlgsQ0FEYSxFQU9iO0FBQ0UsUUFBTSxDQURSO0FBRUUsWUFBVSxRQUZaO0FBR0UsV0FBUyxRQUhYO0FBSUUsV0FBUztBQUpYLENBUGEsRUFhYjtBQUNFLFFBQU0sQ0FEUjtBQUVFLFlBQVUsU0FGWjtBQUdFLFdBQVMsVUFIWDtBQUlFLFdBQVM7QUFKWCxDQWJhLEVBbUJiO0FBQ0UsUUFBTSxDQURSO0FBRUUsWUFBVSxRQUZaO0FBR0UsV0FBUyxTQUhYO0FBSUUsV0FBUztBQUpYLENBbkJhLENBQWYiLCJmaWxlIjoic3RhdGljL2NodW5rcy8zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgQXBwTW9kdWxlSGVhZGVyID0gKHByb3BzKSA9PiB7XHJcblxyXG4gIGNvbnN0IHtwbGFjZWhvbGRlciwgb25DaGFuZ2UsIHZhbHVlfSA9IHByb3BzO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJneC1tb2R1bGUtYm94LWhlYWRlci1pbm5lclwiPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiZ3gtc2VhcmNoLWJhciBneC1sdC1pY29uLXNlYXJjaC1iYXItbGcgZ3gtbW9kdWxlLXNlYXJjaC1iYXIgZ3gtZC1ub25lIGd4LWQtc20tYmxvY2tcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJhbnQtaW5wdXQgZ3gtYm9yZGVyLTBcIiB0eXBlPVwic2VhcmNoXCIgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxyXG4gICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9Lz5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImd4LXNlYXJjaC1pY29uIGd4LXBvaW50ZXJcIj48aSBjbGFzc05hbWU9XCJpY29uIGljb24tc2VhcmNoXCIvPjwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtbW9kdWxlLWJveC1oZWFkZXItcmlnaHRcIj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImd4LWZzLXhsXCI+IDxpXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImljb24gaWNvbi1hcHBzIGd4LWljb24tYnRuXCIvPjwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJneC1mcy14bFwiPjxpXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJpY29uIGljb24tbm90aWZpY2F0aW9uIGd4LWljb24tYnRuXCIvPjwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHBNb2R1bGVIZWFkZXI7XHJcblxyXG5BcHBNb2R1bGVIZWFkZXIuZGVmYXVsdFByb3BzID0ge1xyXG4gIHN0eWxlTmFtZTogJycsXHJcbiAgdmFsdWU6ICcnLFxyXG4gIG5vdGlmaWNhdGlvbjogdHJ1ZSxcclxuICBhcHBzOiB0cnVlXHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtCdXR0b24sIElucHV0LCBtZXNzYWdlLCBNb2RhbCwgVXBsb2FkfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgTW9tZW50IGZyb20gXCJtb21lbnRcIjtcclxuXHJcbmltcG9ydCBJbnRsTWVzc2FnZXMgZnJvbSBcIi4uLy4uLy4uLy4uL3V0aWwvSW50bE1lc3NhZ2VzXCI7XHJcblxyXG5jb25zdCB7VGV4dEFyZWF9ID0gSW5wdXQ7XHJcblxyXG5jb25zdCBwcm9wcyA9IHtcclxuICBuYW1lOiAnZmlsZScsXHJcbiAgYWN0aW9uOiAnLy9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzLycsXHJcbiAgaGVhZGVyczoge1xyXG4gICAgYXV0aG9yaXphdGlvbjogJ2F1dGhvcml6YXRpb24tdGV4dCcsXHJcbiAgfSxcclxuICBvbkNoYW5nZShpbmZvKSB7XHJcbiAgICBpZiAoaW5mby5maWxlLnN0YXR1cyAhPT0gJ3VwbG9hZGluZycpIHtcclxuICAgICAgY29uc29sZS5sb2coaW5mby5maWxlLCBpbmZvLmZpbGVMaXN0KTtcclxuICAgIH1cclxuICAgIGlmIChpbmZvLmZpbGUuc3RhdHVzID09PSAnZG9uZScpIHtcclxuICAgICAgbWVzc2FnZS5zdWNjZXNzKGAke2luZm8uZmlsZS5uYW1lfSBmaWxlIHVwbG9hZGVkIHN1Y2Nlc3NmdWxseWApO1xyXG4gICAgfSBlbHNlIGlmIChpbmZvLmZpbGUuc3RhdHVzID09PSAnZXJyb3InKSB7XHJcbiAgICAgIG1lc3NhZ2UuZXJyb3IoYCR7aW5mby5maWxlLm5hbWV9IGZpbGUgdXBsb2FkIGZhaWxlZC5gKTtcclxuICAgIH1cclxuICB9LFxyXG59O1xyXG5cclxuY2xhc3MgQ29tcG9zZU1haWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHRvOiAnJyxcclxuICAgICAgY2M6ICcnLFxyXG4gICAgICBiY2M6ICcnLFxyXG4gICAgICBzdWJqZWN0OiAnJyxcclxuICAgICAgbWVzc2FnZTogJycsXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7b25NYWlsU2VuZCwgb25DbG9zZSwgdXNlcn0gPSB0aGlzLnByb3BzO1xyXG4gICAgY29uc3Qge3RvLCBzdWJqZWN0LCBtZXNzYWdlfSA9IHRoaXMuc3RhdGU7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TW9kYWwgb25DYW5jZWw9e29uQ2xvc2V9IHZpc2libGU9e3RoaXMucHJvcHMub3Blbn1cclxuICAgICAgICAgICAgIHRpdGxlPXs8SW50bE1lc3NhZ2VzIGlkPVwibWFpbC50aXRsZVwiLz59XHJcbiAgICAgICAgICAgICBjbG9zYWJsZT17ZmFsc2V9XHJcbiAgICAgICAgICAgICBvbk9rPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgIGlmICh0byA9PT0gJycpXHJcbiAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICBvbkNsb3NlKCk7XHJcbiAgICAgICAgICAgICAgIG9uTWFpbFNlbmQoXHJcbiAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgJ2lkJzogJzE1NDUzYTA2YzA4ZmIwMjE3NzYnLFxyXG4gICAgICAgICAgICAgICAgICAgJ2Zyb20nOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICduYW1lJzogdXNlci5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAnYXZhdGFyJzogdXNlci5hdmF0YXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICdlbWFpbCc6IHVzZXIuZW1haWxcclxuICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAndG8nOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAnbmFtZSc6IHRvLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICdlbWFpbCc6IHRvXHJcbiAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAnc3ViamVjdCc6IHN1YmplY3QsXHJcbiAgICAgICAgICAgICAgICAgICAnbWVzc2FnZSc6IG1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAndGltZSc6IE1vbWVudCgpLmZvcm1hdCgnREQgTU1NJyksXHJcbiAgICAgICAgICAgICAgICAgICAncmVhZCc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgJ3N0YXJyZWQnOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICdpbXBvcnRhbnQnOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICdoYXNBdHRhY2htZW50cyc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgJ2ZvbGRlcic6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAnc2VsZWN0ZWQnOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICdsYWJlbHMnOiBbXSxcclxuICAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICBzdHlsZT17e3pJbmRleDogMjYwMH19PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVG8qXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gdGhpcy5zZXRTdGF0ZSh7dG86IGV2ZW50LnRhcmdldC52YWx1ZX0pfVxyXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3RvfVxyXG4gICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIi8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1mb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTdWJqZWN0XCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gdGhpcy5zZXRTdGF0ZSh7c3ViamVjdDogZXZlbnQudGFyZ2V0LnZhbHVlfSl9XHJcbiAgICAgICAgICAgIHZhbHVlPXtzdWJqZWN0fVxyXG4gICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgIDxUZXh0QXJlYVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk1lc3NhZ2VcIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB0aGlzLnNldFN0YXRlKHttZXNzYWdlOiBldmVudC50YXJnZXQudmFsdWV9KX1cclxuICAgICAgICAgICAgdmFsdWU9e21lc3NhZ2V9XHJcbiAgICAgICAgICAgIGF1dG9zaXplPXt7bWluUm93czogMiwgbWF4Um93czogNn19XHJcbiAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiLz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1mb3JtLWdyb3VwXCI+XHJcblxyXG4gICAgICAgICAgPFVwbG9hZCB7Li4ucHJvcHN9PlxyXG4gICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLWF0dGFjaG1lbnRcIi8+IEF0dGFjaCBGaWxlXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9VcGxvYWQ+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbXBvc2VNYWlsO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7QXZhdGFyLCBEcm9wZG93biwgTWVudX0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IEN1c3RvbVNjcm9sbGJhcnMgZnJvbSAnLi4vLi4vLi4vLi4vdXRpbC9DdXN0b21TY3JvbGxiYXJzJ1xyXG5cclxuaW1wb3J0IGxhYmVscyBmcm9tIFwiLi4vLi4vLi4vLi4vcm91dGVzL2luYnVpbHRBcHBzL21haWwvZGF0YS9sYWJlbHNcIjtcclxuXHJcbmNvbnN0IG9wdGlvbnMgPSBbXHJcbiAgJ1JlcGx5JyxcclxuICAnRm9yd2FyZCcsXHJcbiAgJ1ByaW50JyxcclxuXTtcclxuXHJcbmNsYXNzIE1haWxEZXRhaWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICBzdGF0ZSA9IHtcclxuICAgIHNob3dEZXRhaWw6IGZhbHNlXHJcbiAgfTtcclxuXHJcbiAgb3B0aW9uTWVudSA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxNZW51IGlkPVwibG9uZy1tZW51XCI+XHJcbiAgICAgICAge29wdGlvbnMubWFwKG9wdGlvbiA9PlxyXG4gICAgICAgICAgPE1lbnUuSXRlbSBrZXk9e29wdGlvbn0+XHJcbiAgICAgICAgICAgIHtvcHRpb259XHJcbiAgICAgICAgICA8L01lbnUuSXRlbT4sXHJcbiAgICAgICAgKX1cclxuICAgICAgPC9NZW51PilcclxuICB9O1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7bWFpbCwgb25TdGFydFNlbGVjdCwgb25JbXBvcnRhbnRTZWxlY3R9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LW1vZHVsZS1kZXRhaWwgZ3gtbWFpbC1kZXRhaWxcIj5cclxuICAgICAgICA8Q3VzdG9tU2Nyb2xsYmFycyBjbGFzc05hbWU9XCJneC1tb2R1bGUtY29udGVudC1zY3JvbGxcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtbWFpbC1kZXRhaWwtaW5uZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1tYWlsLWhlYWRlclwiPlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LW1haWwtaGVhZGVyLWNvbnRlbnQgZ3gtY29sIGd4LXBsLTBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtc3ViamVjdFwiPlxyXG4gICAgICAgICAgICAgICAgICB7bWFpbC5zdWJqZWN0fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1sYWJlbHNcIj5cclxuICAgICAgICAgICAgICAgICAge2xhYmVscy5tYXAoKGxhYmVsLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAobWFpbC5sYWJlbHMpLmluY2x1ZGVzKGxhYmVsLmlkKSAmJiA8ZGl2IGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZ3gtYmFkZ2UgZ3gtdGV4dC13aGl0ZSBneC1iZy0ke2xhYmVsLmNvbG9yfWB9PntsYWJlbC50aXRsZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LW1haWwtaGVhZGVyLWFjdGlvbnNcIj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgb25TdGFydFNlbGVjdChtYWlsKTtcclxuICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICB7bWFpbC5zdGFycmVkID9cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGljb24tc3RhciBneC1pY29uLWJ0blwiLz4gOlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1zdGFyLW8gZ3gtaWNvbi1idG5cIi8+XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBvbkltcG9ydGFudFNlbGVjdChtYWlsKTtcclxuICAgICAgICAgICAgICAgIH19PlxyXG5cclxuICAgICAgICAgICAgICAgICAge21haWwuaW1wb3J0YW50ID9cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGljb24taW1wb3J0YW50IGd4LWljb24tYnRuXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDogPGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLWltcG9ydGFudC1vIGd4LWljb24tYnRuXCIvPlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8aHIvPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1tYWlsLXVzZXItaW5mbyBneC1tbC0wIGd4LW1iLTNcIj5cclxuXHJcbiAgICAgICAgICAgICAge21haWwuZnJvbS5hdmF0YXIgPT09ICcnID9cclxuICAgICAgICAgICAgICAgIDxBdmF0YXJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3gtYXZhdGFyIGd4LWJnLWJsdWUgZ3gtc2l6ZS00MCBneC1tci0zXCI+IHttYWlsLmZyb20ubmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX08L0F2YXRhcj4gOlxyXG4gICAgICAgICAgICAgICAgPEF2YXRhciBjbGFzc05hbWU9XCJneC1zaXplLTQwIGd4LW1yLTNcIiBhbHQ9XCJBbGljZSBGcmVlbWFuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXttYWlsLmZyb20uYXZhdGFyfS8+XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LXNlbmRlci1uYW1lXCI+e21haWwuZnJvbS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1zZW5kLXRvIGd4LXRleHQtZ3JleVwiPnRvIG1lPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxEcm9wZG93biB0cmlnZ2VyPXtbJ2NsaWNrJ119IG92ZXJsYXk9e3RoaXMub3B0aW9uTWVudSgpfT5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImd4LW1sLWF1dG9cIj48aSBjbGFzc05hbWU9XCJpY29uIGljb24tZWxsaXBzZS12IGd4LWljb24tYnRuXCIvPjwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L0Ryb3Bkb3duPlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LXNob3ctbGlua1wiIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzaG93RGV0YWlsOiAhdGhpcy5zdGF0ZS5zaG93RGV0YWlsfSk7XHJcbiAgICAgICAgICAgIH19Pnt0aGlzLnN0YXRlLnNob3dEZXRhaWwgPyAnSGlkZSBEZXRhaWwnIDogJ1Nob3cgRGV0YWlsJ308L2Rpdj5cclxuICAgICAgICAgICAge3RoaXMuc3RhdGUuc2hvd0RldGFpbCAmJiAoPGRpdiBjbGFzc05hbWU9XCJneC1zaG93LWRldGFpbFwiPlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8c3Ryb25nPkZyb206IDwvc3Ryb25nPnttYWlsLmZyb20uZW1haWx9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxzdHJvbmc+IFRvOiA8L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgbWFpbC50by5tYXAoKHRvLCBpbmRleCkgPT4gPHNwYW4+e2luZGV4ID4gMCAmJiAnLCAnfSB7dG8uZW1haWx9PC9zcGFuPilcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2PjxzdHJvbmc+RGF0ZTogPC9zdHJvbmc+e21haWwudGltZX0gPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2Pil9XHJcblxyXG5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAge21haWwubWVzc2FnZX1cclxuICAgICAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICAgICAge21haWwuaGFzQXR0YWNobWVudHMgJiZcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1hdHRhY2htZW50LWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgPGgzPkF0dGFjaG1lbnRzICh7bWFpbC5hdHRhY2htZW50cy5sZW5ndGh9KTwvaDM+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1hdHRhY2htZW50LXJvd1wiPlxyXG4gICAgICAgICAgICAgICAge21haWwuYXR0YWNobWVudHMubWFwKChhdHRhY2htZW50LCBpbmRleCkgPT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1hdHRhY2htZW50LWNvbFwiIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXthdHRhY2htZW50LnByZXZpZXd9IGFsdD17YXR0YWNobWVudC5maWxlTmFtZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2l6ZVwiPnthdHRhY2htZW50LnNpemV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQ3VzdG9tU2Nyb2xsYmFycz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpbERldGFpbDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0F2YXRhciwgQ2hlY2tib3h9IGZyb20gXCJhbnRkXCI7XHJcblxyXG5pbXBvcnQgbGFiZWxzIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9yb3V0ZXMvaW5idWlsdEFwcHMvbWFpbC9kYXRhL2xhYmVsc1wiO1xyXG5cclxuY29uc3QgTWFpbExpc3RJdGVtID0gKHttYWlsLCBvbk1haWxTZWxlY3QsIG9uTWFpbENoZWNrZWQsIG9uU3RhcnRTZWxlY3R9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtbW9kdWxlLWxpc3QtaXRlbSBneC1tYWlsLWNlbGxcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1tb2R1bGUtbGlzdC1pY29uXCI+XHJcbiAgICAgICAgPENoZWNrYm94IGNvbG9yPVwicHJpbWFyeVwiIGNsYXNzTmFtZT1cImd4LWljb24tYnRuXCJcclxuICAgICAgICAgICAgICAgICAgY2hlY2tlZD17bWFpbC5zZWxlY3RlZH1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgb25NYWlsQ2hlY2tlZChtYWlsKVxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT1cIlNlbGVjdE1haWxcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICBvblN0YXJ0U2VsZWN0KG1haWwpO1xyXG4gICAgICAgIH19PlxyXG4gICAgICAgICAge21haWwuc3RhcnJlZCA/XHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImd4LWljb24tYnRuIGljb24gaWNvbi1zdGFyXCIvPiA6XHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImd4LWljb24tYnRuIGljb24gaWNvbi1zdGFyLW9cIi8+XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LW1sLTJcIj5cclxuICAgICAgICAgIHttYWlsLmZyb20uYXZhdGFyID09PSAnJyA/XHJcbiAgICAgICAgICAgIDxBdmF0YXIgY2xhc3NOYW1lPVwiZ3gtYXZhdGFyIGd4LWJnLWJsdWUgZ3gtc2l6ZS00MFwiPiB7bWFpbC5mcm9tLm5hbWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9PC9BdmF0YXI+IDpcclxuICAgICAgICAgICAgPEF2YXRhciBjbGFzc05hbWU9XCJneC1zaXplLTQwXCIgYWx0PVwiQWxpY2UgRnJlZW1hblwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXttYWlsLmZyb20uYXZhdGFyfS8+XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1tYWlsLWxpc3QtaW5mb1wiIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICBvbk1haWxTZWxlY3QobWFpbCk7XHJcbiAgICAgIH19PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LW1vZHVsZS1saXN0LWNvbnRlbnRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtbWFpbC11c2VyLWRlc1wiPlxyXG5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ3gtc2VuZGVyLW5hbWVcIj57bWFpbC5mcm9tLm5hbWV9PC9zcGFuPlxyXG5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ3gtdG9vbGJhci1zZXBhcmF0b3JcIj4mbmJzcDs8L3NwYW4+XHJcblxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJneC1kLWlubGluZS1ibG9jayBneC10ZXh0LXRydW5jYXRlIGd4LXNlbmQtc3ViamVjdFwiPnttYWlsLnN1YmplY3R9PC9zcGFuPlxyXG5cclxuICAgICAgICAgICAge21haWwuaGFzQXR0YWNobWVudHMgJiZcclxuXHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1hdHRhY2htZW50XCIvPn1cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtdGltZVwiPnttYWlsLnRpbWV9PC9kaXY+XHJcblxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtbWVzc2FnZVwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJneC10ZXh0LXRydW5jYXRlXCI+IHttYWlsLm1lc3NhZ2V9PC9wPlxyXG5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1sYWJlbHNcIj5cclxuICAgICAgICAgICAge2xhYmVscy5tYXAoKGxhYmVsLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiAobWFpbC5sYWJlbHMpLmluY2x1ZGVzKGxhYmVsLmlkKSAmJlxyXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9e2BneC1iYWRnZSBneC10ZXh0LXdoaXRlIGd4LWJnLSR7bGFiZWwuY29sb3J9YH0+e2xhYmVsLnRpdGxlfTwvZGl2PlxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpbExpc3RJdGVtO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDdXN0b21TY3JvbGxiYXJzIGZyb20gJy4uLy4uLy4uLy4uL3V0aWwvQ3VzdG9tU2Nyb2xsYmFycydcclxuXHJcbmltcG9ydCBNYWlsTGlzdEl0ZW0gZnJvbSBcIi4vTWFpbExpc3RJdGVtXCI7XHJcblxyXG5jb25zdCBNYWlsTGlzdCA9ICh7bWFpbHMsIG9uTWFpbFNlbGVjdCwgb25NYWlsQ2hlY2tlZCwgb25TdGFydFNlbGVjdH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJneC1tb2R1bGUtbGlzdCBneC1tYWlsLWxpc3RcIj5cclxuICAgICAgPEN1c3RvbVNjcm9sbGJhcnMgY2xhc3NOYW1lPVwiZ3gtbW9kdWxlLWNvbnRlbnQtc2Nyb2xsXCI+XHJcbiAgICAgICAge21haWxzLm1hcCgobWFpbCwgaW5kZXgpID0+XHJcbiAgICAgICAgICA8TWFpbExpc3RJdGVtIGtleT17aW5kZXh9IG1haWw9e21haWx9IG9uTWFpbFNlbGVjdD17b25NYWlsU2VsZWN0fSBvbk1haWxDaGVja2VkPXtvbk1haWxDaGVja2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblN0YXJ0U2VsZWN0PXtvblN0YXJ0U2VsZWN0fS8+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9DdXN0b21TY3JvbGxiYXJzPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpbExpc3Q7XHJcbiIsImV4cG9ydCBkZWZhdWx0IFtcclxuICB7XHJcbiAgICAnaWQnOiAwLFxyXG4gICAgJ2hhbmRsZSc6ICdzdGFycmVkJyxcclxuICAgICd0aXRsZSc6ICdTdGFycmVkJyxcclxuICAgICdpY29uJzogJ3N0YXInXHJcbiAgfSxcclxuICB7XHJcbiAgICAnaWQnOiAxLFxyXG4gICAgJ2hhbmRsZSc6ICdpbXBvcnRhbnQnLFxyXG4gICAgJ3RpdGxlJzogJ0ltcG9ydGFudCcsXHJcbiAgICAnaWNvbic6ICd0YWcnXHJcbiAgfVxyXG5dO1xyXG4iLCJleHBvcnQgZGVmYXVsdCBbXHJcbiAge1xyXG4gICAgJ2lkJzogMCxcclxuICAgICdoYW5kbGUnOiAnaW5ib3gnLFxyXG4gICAgJ3RpdGxlJzogJ0luYm94JyxcclxuICAgICdpY29uJzogJ2luYm94J1xyXG4gIH0sXHJcbiAge1xyXG4gICAgJ2lkJzogMSxcclxuICAgICdoYW5kbGUnOiAnc2VudCcsXHJcbiAgICAndGl0bGUnOiAnU2VudCcsXHJcbiAgICAnaWNvbic6ICdzZW50J1xyXG4gIH0sXHJcbiAge1xyXG4gICAgJ2lkJzogMixcclxuICAgICdoYW5kbGUnOiAnZHJhZnRzJyxcclxuICAgICd0aXRsZSc6ICdEcmFmdHMnLFxyXG4gICAgJ2ljb24nOiAnZHJhZnQnXHJcbiAgfSxcclxuICB7XHJcbiAgICAnaWQnOiAzLFxyXG4gICAgJ2hhbmRsZSc6ICdzcGFtJyxcclxuICAgICd0aXRsZSc6ICdTcGFtJyxcclxuICAgICdpY29uJzogJ3NwYW0nXHJcbiAgfSxcclxuICB7XHJcbiAgICAnaWQnOiA0LFxyXG4gICAgJ2hhbmRsZSc6ICd0cmFzaCcsXHJcbiAgICAndGl0bGUnOiAnVHJhc2gnLFxyXG4gICAgJ2ljb24nOiAndHJhc2gnXHJcbiAgfVxyXG5dO1xyXG4iLCJleHBvcnQgZGVmYXVsdCBbXHJcbiAge1xyXG4gICAgJ2lkJzogMCxcclxuICAgICdoYW5kbGUnOiAnbm90ZScsXHJcbiAgICAndGl0bGUnOiAnUGF5UGFsJyxcclxuICAgICdjb2xvcic6ICdwdXJwbGUnXHJcbiAgfSxcclxuICB7XHJcbiAgICAnaWQnOiAxLFxyXG4gICAgJ2hhbmRsZSc6ICdwYXlwYWwnLFxyXG4gICAgJ3RpdGxlJzogJ1Vwd29yaycsXHJcbiAgICAnY29sb3InOiAnYW1iZXInXHJcbiAgfSxcclxuICB7XHJcbiAgICAnaWQnOiAyLFxyXG4gICAgJ2hhbmRsZSc6ICdpbnZvaWNlJyxcclxuICAgICd0aXRsZSc6ICdJbi1ob3VzZScsXHJcbiAgICAnY29sb3InOiAnZ3JlZW4nXHJcbiAgfSxcclxuICB7XHJcbiAgICAnaWQnOiAzLFxyXG4gICAgJ2hhbmRsZSc6ICdhbWF6b24nLFxyXG4gICAgJ3RpdGxlJzogJ0NsaWVudHMnLFxyXG4gICAgJ2NvbG9yJzogJ2xpZ2h0LWJsdWUnXHJcbiAgfVxyXG5dO1xyXG4iLCJleHBvcnQgZGVmYXVsdCBbXHJcbiAge1xyXG4gICAgJ2lkJzogJzE1NDUzYmE2MGQzYmFhNWRhYWYnLFxyXG4gICAgJ2Zyb20nOiB7XHJcbiAgICAgICduYW1lJzogJ0RvbW5pYyBIYXJyaXMnLFxyXG4gICAgICAnYXZhdGFyJzogJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8xNTB4MTUwJyxcclxuICAgICAgJ2VtYWlsJzogJ2RvbW5pY2hhcnJpc0BleGFtcGxlLmNvbSdcclxuICAgIH0sXHJcbiAgICAndG8nOiBbXHJcbiAgICAgIHtcclxuICAgICAgICAnbmFtZSc6ICdtZScsXHJcbiAgICAgICAgJ2VtYWlsJzogJ3JvYmVydC5qb2huc29uQGV4YW1wbGUuY29tJ1xyXG4gICAgICB9LCB7XHJcbiAgICAgICAgJ25hbWUnOiAnbWUnLFxyXG4gICAgICAgICdlbWFpbCc6ICdyb2JlcnQuam9obnNvbkBleGFtcGxlLmNvbSdcclxuICAgICAgfVxyXG4gICAgXSxcclxuICAgICdzdWJqZWN0JzogJ0Z1c2NlIGEgbGliZXJvIHBlbGxlbnRlc3F1ZScsXHJcbiAgICAnbWVzc2FnZSc6ICdNYWVjZW5hcyBzZW0gYXJjdSwgc2NlbGVyaXNxdWUgaW4gb2RpbyB2ZWwsIHBvcnR0aXRvciBkaWduaXNzaW0gcHVydXMuIFNlZCB2ZWhpY3VsYSBjb21tb2RvIHBvcnRhLiBFdGlhbSBuZWMgZGljdHVtIG1hdXJpcy4gVXQgaW1wZXJkaWV0IG1heGltdXMgb3JjaSB2aXRhZSBvcm5hcmUuIE51bGxhbSBldCBsaWJlcm8gc2l0IGFtZXQgdGVsbHVzIHVsdHJpY2llcyBydXRydW0gZXQgc2l0IGFtZXQgbmlzbC4gUGVsbGVudGVzcXVlIGNvbmRpbWVudHVtIGRpYW0gc2VkIGhlbmRyZXJpdCBmYWNpbGlzaXMuIFN1c3BlbmRpc3NlIGJpYmVuZHVtIGNvbnZhbGxpcyBxdWFtLCBzaXQgYW1ldCBydXRydW0gbmlzaSBwdWx2aW5hciBldC4gTnVuYyBwbGFjZXJhdCwgZGlhbSBhdCBzY2VsZXJpc3F1ZSB2aXZlcnJhLCBtaSB2ZWxpdCBhdWN0b3IgbmliaCwgYXQgcmhvbmN1cyBlcmF0IGV4IHZpdGFlIGZlbGlzLiBJbnRlZ2VyIHNlZCBhbnRlIGVnZXQgZXN0IHJ1dHJ1bSB1bHRyaWNlcyB1dCBub24gaXBzdW0uJyxcclxuICAgICdyZWFkJzogdHJ1ZSxcclxuICAgICdzdGFycmVkJzogZmFsc2UsXHJcbiAgICAnaW1wb3J0YW50JzogZmFsc2UsXHJcbiAgICAnaGFzQXR0YWNobWVudHMnOiBmYWxzZSxcclxuICAgICdsYWJlbHMnOiBbXHJcbiAgICAgIDMsXHJcbiAgICAgIDJcclxuICAgIF0sXHJcbiAgICAnc2VsZWN0ZWQnOiBmYWxzZSxcclxuICAgICdmb2xkZXInOiAwXHJcbiAgfSxcclxuICB7XHJcbiAgICAnaWQnOiAnMTU0NTNhMDZjMDhmYjAyMTc3NicsXHJcbiAgICAnZnJvbSc6IHtcclxuICAgICAgJ25hbWUnOiAnR2FycnkgU29iYXJzJyxcclxuICAgICAgJ2F2YXRhcic6ICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMTUweDE1MCcsXHJcbiAgICAgICdlbWFpbCc6ICdkYW5pZWxsZW9icmllbkBleGFtcGxlLmNvbSdcclxuICAgIH0sXHJcbiAgICAndG8nOiBbXHJcbiAgICAgIHtcclxuICAgICAgICAnbmFtZSc6ICdtZScsXHJcbiAgICAgICAgJ2VtYWlsJzogJ3JvYmVydC5qb2huc29uQGV4YW1wbGUuY29tJ1xyXG4gICAgICB9XHJcbiAgICBdLFxyXG4gICAgJ3N1YmplY3QnOiAnTnVsbGFtIGlkIGV4IGF0IGF1Z3VlIHBoYXJldHJhIHZlc3RpYnVsdW0gZWdldCBpZCBtYXVyaXMuJyxcclxuICAgICdtZXNzYWdlJzogJ0NyYXMgYmliZW5kdW0gdG9ydG9yIHRvcnRvciwgZXUgbHVjdHVzIHJpc3VzIGdyYXZpZGEgdXQuIFN1c3BlbmRpc3NlIG5pc2kgdG9ydG9yLCBjb25zZXF1YXQgYXQgcGVsbGVudGVzcXVlIHF1aXMsIGRhcGlidXMgdmVsIHJpc3VzLiBQcmFlc2VudCBhbGlxdWFtIHNpdCBhbWV0IGRpYW0gcXVpcyBsdWN0dXMuIE51bGxhIGZhY2lsaXNpLiBNYWVjZW5hcyBpZCBtb2xlc3RpZSB0b3J0b3IuIE51bGxhIGVnZXQgcHJldGl1bSBudWxsYS4gRXRpYW0gY29uc2VxdWF0IGRpY3R1bSB2ZWxpdCwgYXQgZWdlc3RhcyBsYWN1cyBsYW9yZWV0IGFjLiBVdCBmYWNpbGlzaXMgbWFzc2EgdmVsIG1pIGZyaW5naWxsYSwgbm9uIGJsYW5kaXQgZXJvcyBkaWN0dW0uIEludGVnZXIgaW4gdGVsbHVzIHZpdGFlIG5pc2kgdGluY2lkdW50IHB1bHZpbmFyLiBNYWVjZW5hcyBhYyBhbnRlIHV0IGZlbGlzIGZldWdpYXQgb3JuYXJlIGlkIGEgcXVhbS4gUXVpc3F1ZSBmZXVnaWF0IGFudGUgcXVpcyBvcm5hcmUgcGxhY2VyYXQuJyxcclxuICAgICd0aW1lJzogJzQgRGVjJyxcclxuICAgICdyZWFkJzogdHJ1ZSxcclxuICAgICdzdGFycmVkJzogdHJ1ZSxcclxuICAgICdpbXBvcnRhbnQnOiBmYWxzZSxcclxuICAgICdoYXNBdHRhY2htZW50cyc6IGZhbHNlLFxyXG4gICAgJ2xhYmVscyc6IFtcclxuICAgICAgMSxcclxuICAgICAgM1xyXG4gICAgXSxcclxuICAgICdzZWxlY3RlZCc6IGZhbHNlLFxyXG4gICAgJ2ZvbGRlcic6IDBcclxuICB9LFxyXG4gIHtcclxuICAgICdpZCc6ICcxNTQxY2E3YWY2NmRhMjg0MTc3JyxcclxuICAgICdmcm9tJzoge1xyXG4gICAgICAnbmFtZSc6ICdTdGVsbGEgQnJvd24nLFxyXG4gICAgICAnYXZhdGFyJzogJycsXHJcbiAgICAgICdlbWFpbCc6ICdzdGVsbGdyb3duQGV4YW1wbGUuY29tJ1xyXG4gICAgfSxcclxuICAgICd0byc6IFtcclxuICAgICAge1xyXG4gICAgICAgICduYW1lJzogJ21lJyxcclxuICAgICAgICAnZW1haWwnOiAncm9iZXJ0LmpvaG5zb25AZXhhbXBsZS5jb20nXHJcbiAgICAgIH1cclxuICAgIF0sXHJcbiAgICAnc3ViamVjdCc6ICdWaXZhbXVzIHZlbmVuYXRpcyB0ZW1wdXMgaXBzdW0sIGlkIGZpbmlidXMgbGliZXJvIGFsaXF1ZXQgY29udmFsbGlzLicsXHJcbiAgICAnbWVzc2FnZSc6ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBGdXNjZSBsb3JlbSBkaWFtLCBwdWx2aW5hciBpZCBuaXNsIG5vbiwgdWx0cmljZXMgbWF4aW11cyBuaWJoLiBTdXNwZW5kaXNzZSB1dCBqdXN0byB2ZWxpdC4gTnVsbGFtIGFjIHVsdHJpY2VzIHJpc3VzLCBxdWlzIGF1Y3RvciBvcmNpLiBWZXN0aWJ1bHVtIHZvbHV0cGF0IG5pc2kgZXQgbmVxdWUgcG9ydGEgdWxsYW1jb3JwZXIuIE1hZWNlbmFzIHBvcnR0aXRvciBwb3J0YSBlcmF0IGFjIHN1c2NpcGl0LiBTZWQgY3Vyc3VzIGxlbyB1dCBlbGVtZW50dW0gZnJpbmdpbGxhLiBNYWVjZW5hcyBzZW1wZXIgdml2ZXJyYSBlcmF0LCB2ZWwgdWxsYW1jb3JwZXIgZHVpIGVmZmljaXR1ciBpbi4gVmVzdGlidWx1bSBwbGFjZXJhdCBpbXBlcmRpZXQgdGVsbHVzLCBldCB0aW5jaWR1bnQgZXJvcyBwb3N1ZXJlIGVnZXQuIFByb2luIHNpdCBhbWV0IGZhY2lsaXNpcyBsaWJlcm8uIE51bGxhIGVnZXQgZXN0IHV0IGVyYXQgYWxpcXVldCByaG9uY3VzLiBRdWlzcXVlIGFjIHVybmEgdml0YWUgZHVpIGhlbmRyZXJpdCBzb2xsaWNpdHVkaW4gdmVsIGlkIHNlbS4gIEluIGVnZXQgYW50ZSBzYXBpZW4uIFF1aXNxdWUgY29uc2VxdWF0IHZlbGl0IG5vbiBhbnRlIGZpbmlidXMsIHZlbCBwbGFjZXJhdCBlcmF0IHVsdHJpY2llcy4gQWxpcXVhbSBiaWJlbmR1bSBqdXN0byBlcmF0LCB1bHRyaWNlcyB2ZWhpY3VsYSBkb2xvciBlbGVtZW50dW0gYS4gTWF1cmlzIGV1IG5pc2wgZmV1Z2lhdCBsaWd1bGEgbW9sZXN0aWUgZWxlaWZlbmQuXFxuIEFsaXF1YW0gZWZmaWNpdHVyIHZlbmVuYXRpcyB2ZWxpdCBhYyBwb3J0YS4gVml2YW11cyB2aXRhZSBwdWx2aW5hciB0ZWxsdXMuIERvbmVjIG9kaW8gZW5pbSwgYXVjdG9yIGVnZXQgbmliaCBtYXR0aXMsIHVsdHJpY2llcyBkaWduaXNzaW0gbGFjdXMuIFBoYXNlbGx1cyBub24gdGluY2lkdW50IGR1aS4gTnVsbGEgZXUgYXJjdSBsb3JlbS4gIERvbmVjIG5vbiBoZW5kcmVyaXQgYXVndWUsIGxvYm9ydGlzIHNvbGxpY2l0dWRpbiBvZGlvLiBDbGFzcyBhcHRlbnQgdGFjaXRpIHNvY2lvc3F1IGFkIGxpdG9yYSB0b3JxdWVudCBwZXIgY29udWJpYSBub3N0cmEsIHBlciBpbmNlcHRvcyBoaW1lbmFlb3MuIER1aXMgc2l0IGFtZXQgZXVpc21vZCBlbmltLCBlZ2V0IHZlc3RpYnVsdW0ganVzdG8uIEZ1c2NlIGEgcGxhY2VyYXQgbGVjdHVzLCBlZ2V0IGZldWdpYXQgcHVydXMuIENyYXMgcmlzdXMgYW50ZSwgZmF1Y2lidXMgZWdldCBqdXN0byBjb21tb2RvLCB2b2x1dHBhdCB0ZW1wb3IgYW50ZS4gRG9uZWMgc2l0IGFtZXQgbGVvIHZlbmVuYXRpcywgZ3JhdmlkYSBxdWFtIHNpdCBhbWV0LCBibGFuZGl0IGR1aS4gSW4gcXVhbSBhbnRlLCBlbGVtZW50dW0gdXQgZmF1Y2lidXMgbmVjLCB0cmlzdGlxdWUgdml0YWUgZHVpLiAgXFxuIFxcbiBQcmFlc2VudCB2ZWwgZXJhdCBhdCBlbmltIHBsYWNlcmF0IGx1Y3R1cyB2ZWwgdXQgaXBzdW0uIEluIGNvbmd1ZSB0ZW1wb3IgbWksIG5vbiBvcm5hcmUgbGVjdHVzIGNvbmRpbWVudHVtIGF0LiBBZW5lYW4gbGliZXJvIGRpYW0sIGZpbmlidXMgZWdldCBzYXBpZW4gZXQsIHRyaXN0aXF1ZSBmZXJtZW50dW0gbG9yZW0uICAnLFxyXG4gICAgJ3RpbWUnOiAnMyBEZWMnLFxyXG4gICAgJ3JlYWQnOiB0cnVlLFxyXG4gICAgJ3N0YXJyZWQnOiBmYWxzZSxcclxuICAgICdpbXBvcnRhbnQnOiBmYWxzZSxcclxuICAgICdoYXNBdHRhY2htZW50cyc6IGZhbHNlLFxyXG4gICAgJ2xhYmVscyc6IFtdLFxyXG4gICAgJ3NlbGVjdGVkJzogZmFsc2UsXHJcbiAgICAnZm9sZGVyJzogMFxyXG4gIH0sXHJcbiAge1xyXG4gICAgJ2lkJzogJzE1NDI5NzE2N2U3ODE3ODE3NDUnLFxyXG4gICAgJ2Zyb20nOiB7XHJcbiAgICAgICduYW1lJzogJ1N0ZXZlIEpvbnNvbicsXHJcbiAgICAgICdhdmF0YXInOiAnJyxcclxuICAgICAgJ2VtYWlsJzogJ3N0ZXZlam9uc29uQGV4YW1wbGUuY29tJ1xyXG4gICAgfSxcclxuICAgICd0byc6IFtcclxuICAgICAge1xyXG4gICAgICAgICduYW1lJzogJ21lJyxcclxuICAgICAgICAnZW1haWwnOiAncm9iZXJ0LmpvaG5zb25AZXhhbXBsZS5jb20nXHJcbiAgICAgIH1cclxuICAgIF0sXHJcbiAgICAnc3ViamVjdCc6ICdEb25lYyB1dCBhbnRlIHRyaXN0aXF1ZSwgZ3JhdmlkYSBqdXN0byB2aXRhZScsXHJcbiAgICAnbWVzc2FnZSc6ICdkaWN0dW0gYXQgbGlndWxhIHZpdGFlLCBwb3N1ZXJlIHNhZ2l0dGlzIGF1Z3VlLiBOYW0gdml0YWUgZXJvcyBxdWlzIGZlbGlzIGNvbnNlY3RldHVyIGVnZXN0YXMgdml0YWUgdml0YWUgbWFzc2EuIFZlc3RpYnVsdW0gdGluY2lkdW50IG5pc2kgbmVxdWUsIGV1IHVsbGFtY29ycGVyIHJpc3VzIGFsaXF1ZXQgdmVsLiBOdW5jIHV0IGxvcmVtIGRhcGlidXMsIGludGVyZHVtIG51bGxhIHZlbCwgZXVpc21vZCBlbGl0LiBGdXNjZSBhIG1vbGxpcyBlcmF0LCBub24gZWdlc3RhcyBkdWkuIEZ1c2NlIGV1IHJ1dHJ1bSBvcmNpLiBBbGlxdWFtIGhlbmRyZXJpdCBtZXR1cyBzaXQgYW1ldCBpbnRlcmR1bSBpYWN1bGlzLiBNb3JiaSBlZ2V0IG5pYmggdXQgbmliaCBjb252YWxsaXMgZmVybWVudHVtIHZpdGFlIGFjIG1hdXJpcy4gUGhhc2VsbHVzIGxpZ3VsYSBwdXJ1cywgZWxlaWZlbmQgdmVsIG1hc3NhIHV0LCBpbnRlcmR1bSBwdWx2aW5hciBzYXBpZW4uIE51bGxhbSBhIGV4IG5lYyBlbGl0IGNvbmRpbWVudHVtIG1hdHRpcy4gTnVsbGFtIHNpdCBhbWV0IGRpY3R1bSBuZXF1ZSwgdmVsIHNhZ2l0dGlzIGVyb3MuIFBlbGxlbnRlc3F1ZSBoYWJpdGFudCBtb3JiaSB0cmlzdGlxdWUgc2VuZWN0dXMgZXQgbmV0dXMgZXQgbWFsZXN1YWRhIGZhbWVzIGFjIHR1cnBpcyBlZ2VzdGFzLiAnLFxyXG4gICAgJ3RpbWUnOiAnMyBEZWMnLFxyXG4gICAgJ3JlYWQnOiB0cnVlLFxyXG4gICAgJ3N0YXJyZWQnOiBmYWxzZSxcclxuICAgICdpbXBvcnRhbnQnOiBmYWxzZSxcclxuICAgICdoYXNBdHRhY2htZW50cyc6IGZhbHNlLFxyXG4gICAgJ2xhYmVscyc6IFtdLFxyXG4gICAgJ3NlbGVjdGVkJzogZmFsc2UsXHJcbiAgICAnZm9sZGVyJzogMFxyXG4gIH0sXHJcbiAge1xyXG4gICAgJ2lkJzogJzE1NDI3ZjRjMWI3ZjM5NTMyMzQnLFxyXG4gICAgJ2Zyb20nOiB7XHJcbiAgICAgICduYW1lJzogJ0lyYSBTaG9ydGVyJyxcclxuICAgICAgJ2F2YXRhcic6ICcnLFxyXG4gICAgICAnZW1haWwnOiAnaXJhc2hvcnRlckBleGFtcGxlLmNvbSdcclxuICAgIH0sXHJcbiAgICAndG8nOiBbXHJcbiAgICAgIHtcclxuICAgICAgICAnbmFtZSc6ICdtZScsXHJcbiAgICAgICAgJ2VtYWlsJzogJ3JvYmVydC5qb2huc29uQGV4YW1wbGUuY29tJ1xyXG4gICAgICB9XHJcbiAgICBdLFxyXG4gICAgJ3N1YmplY3QnOiAnQ29tbWl0cyB0aGF0IG5lZWQgdG8gYmUgcHVzaGVkIGxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0JyxcclxuICAgICdtZXNzYWdlJzogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIEZ1c2NlIGxvcmVtIGRpYW0sIHB1bHZpbmFyIGlkIG5pc2wgbm9uLCB1bHRyaWNlcyBtYXhpbXVzIG5pYmguIFN1c3BlbmRpc3NlIHV0IGp1c3RvIHZlbGl0LiBOdWxsYW0gYWMgdWx0cmljZXMgcmlzdXMsIHF1aXMgYXVjdG9yIG9yY2kuIFZlc3RpYnVsdW0gdm9sdXRwYXQgbmlzaSBldCBuZXF1ZSBwb3J0YSB1bGxhbWNvcnBlci4gTWFlY2VuYXMgcG9ydHRpdG9yIHBvcnRhIGVyYXQgYWMgc3VzY2lwaXQuIFNlZCBjdXJzdXMgbGVvIHV0IGVsZW1lbnR1bSBmcmluZ2lsbGEuIE1hZWNlbmFzIHNlbXBlciB2aXZlcnJhIGVyYXQsIHZlbCB1bGxhbWNvcnBlciBkdWkgZWZmaWNpdHVyIGluLiBWZXN0aWJ1bHVtIHBsYWNlcmF0IGltcGVyZGlldCB0ZWxsdXMsIGV0IHRpbmNpZHVudCBlcm9zIHBvc3VlcmUgZWdldC4gUHJvaW4gc2l0IGFtZXQgZmFjaWxpc2lzIGxpYmVyby4gTnVsbGEgZWdldCBlc3QgdXQgZXJhdCBhbGlxdWV0IHJob25jdXMuIFF1aXNxdWUgYWMgdXJuYSB2aXRhZSBkdWkgaGVuZHJlcml0IHNvbGxpY2l0dWRpbiB2ZWwgaWQgc2VtLiAgSW4gZWdldCBhbnRlIHNhcGllbi4gUXVpc3F1ZSBjb25zZXF1YXQgdmVsaXQgbm9uIGFudGUgZmluaWJ1cywgdmVsIHBsYWNlcmF0IGVyYXQgdWx0cmljaWVzLiBBbGlxdWFtIGJpYmVuZHVtIGp1c3RvIGVyYXQsIHVsdHJpY2VzIHZlaGljdWxhIGRvbG9yIGVsZW1lbnR1bSBhLiBNYXVyaXMgZXUgbmlzbCBmZXVnaWF0IGxpZ3VsYSBtb2xlc3RpZSBlbGVpZmVuZC5cXG4gQWxpcXVhbSBlZmZpY2l0dXIgdmVuZW5hdGlzIHZlbGl0IGFjIHBvcnRhLiBWaXZhbXVzIHZpdGFlIHB1bHZpbmFyIHRlbGx1cy4gRG9uZWMgb2RpbyBlbmltLCBhdWN0b3IgZWdldCBuaWJoIG1hdHRpcywgdWx0cmljaWVzIGRpZ25pc3NpbSBsYWN1cy4gUGhhc2VsbHVzIG5vbiB0aW5jaWR1bnQgZHVpLiBOdWxsYSBldSBhcmN1IGxvcmVtLiAgRG9uZWMgbm9uIGhlbmRyZXJpdCBhdWd1ZSwgbG9ib3J0aXMgc29sbGljaXR1ZGluIG9kaW8uIENsYXNzIGFwdGVudCB0YWNpdGkgc29jaW9zcXUgYWQgbGl0b3JhIHRvcnF1ZW50IHBlciBjb251YmlhIG5vc3RyYSwgcGVyIGluY2VwdG9zIGhpbWVuYWVvcy4gRHVpcyBzaXQgYW1ldCBldWlzbW9kIGVuaW0sIGVnZXQgdmVzdGlidWx1bSBqdXN0by4gRnVzY2UgYSBwbGFjZXJhdCBsZWN0dXMsIGVnZXQgZmV1Z2lhdCBwdXJ1cy4gQ3JhcyByaXN1cyBhbnRlLCBmYXVjaWJ1cyBlZ2V0IGp1c3RvIGNvbW1vZG8sIHZvbHV0cGF0IHRlbXBvciBhbnRlLiBEb25lYyBzaXQgYW1ldCBsZW8gdmVuZW5hdGlzLCBncmF2aWRhIHF1YW0gc2l0IGFtZXQsIGJsYW5kaXQgZHVpLiBJbiBxdWFtIGFudGUsIGVsZW1lbnR1bSB1dCBmYXVjaWJ1cyBuZWMsIHRyaXN0aXF1ZSB2aXRhZSBkdWkuICBcXG4gXFxuIFByYWVzZW50IHZlbCBlcmF0IGF0IGVuaW0gcGxhY2VyYXQgbHVjdHVzIHZlbCB1dCBpcHN1bS4gSW4gY29uZ3VlIHRlbXBvciBtaSwgbm9uIG9ybmFyZSBsZWN0dXMgY29uZGltZW50dW0gYXQuIEFlbmVhbiBsaWJlcm8gZGlhbSwgZmluaWJ1cyBlZ2V0IHNhcGllbiBldCwgdHJpc3RpcXVlIGZlcm1lbnR1bSBsb3JlbS4gICcsXHJcbiAgICAndGltZSc6ICcyIERlYycsXHJcbiAgICAncmVhZCc6IHRydWUsXHJcbiAgICAnc3RhcnJlZCc6IGZhbHNlLFxyXG4gICAgJ2ltcG9ydGFudCc6IGZhbHNlLFxyXG4gICAgJ2hhc0F0dGFjaG1lbnRzJzogZmFsc2UsXHJcbiAgICAnbGFiZWxzJzogW10sXHJcbiAgICAnc2VsZWN0ZWQnOiBmYWxzZSxcclxuICAgICdmb2xkZXInOiAzXHJcbiAgfSxcclxuICB7XHJcbiAgICAnaWQnOiAnMTU0NTkyNTFhNmQ2YjM5NzU2NScsXHJcbiAgICAnZnJvbSc6IHtcclxuICAgICAgJ25hbWUnOiAnQWxleCBEb2xnb3ZlJyxcclxuICAgICAgJ2F2YXRhcic6ICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMTUweDE1MCcsXHJcbiAgICAgICdlbWFpbCc6ICdhbGV4ZG9sZ292ZUBleGFtcGxlLmNvbSdcclxuICAgIH0sXHJcbiAgICAndG8nOiBbXHJcbiAgICAgIHtcclxuICAgICAgICAnbmFtZSc6ICdtZScsXHJcbiAgICAgICAgJ2VtYWlsJzogJ3JvYmVydC5qb2huc29uQGV4YW1wbGUuY29tJ1xyXG4gICAgICB9XHJcbiAgICBdLFxyXG4gICAgJ3N1YmplY3QnOiAnVXQgdGluY2lkdW50IG1hc3NhIG5vbiBlbGVtZW50dW0gZmVybWVudHVtLi4nLFxyXG4gICAgJ21lc3NhZ2UnOiAnTnVsbGFtIHZlbCBpcHN1bSBlZ2V0IG9kaW8gdml2ZXJyYSBwZWxsZW50ZXNxdWUuIE51bGxhIGF1Y3RvciBldSBmZWxpcyBlZ2V0IHZ1bHB1dGF0ZS4gT3JjaSB2YXJpdXMgbmF0b3F1ZSBwZW5hdGlidXMgZXQgbWFnbmlzIGRpcyBwYXJ0dXJpZW50IG1vbnRlcywgbmFzY2V0dXIgcmlkaWN1bHVzIG11cy4gUXVpc3F1ZSBxdWFtIG5pc2ksIHB1bHZpbmFyIHZpdGFlIG51bGxhIHNlZCwgYmxhbmRpdCBhdWN0b3IgbGFjdXMuIFZlc3RpYnVsdW0gZXQgc2VtcGVyIGxvcmVtLiBTdXNwZW5kaXNzZSBpbnRlcmR1bSBlc3QgbmVxdWUsIHV0IHRlbXB1cyBlcm9zIHVsdHJpY2llcyBldC4gUHJvaW4gdWx0cmljaWVzIGVsaXQgYWMgZXN0IGVnZXN0YXMgcGhhcmV0cmEuIFByYWVzZW50IGlkIG1vbGxpcyBlbmltLiBTdXNwZW5kaXNzZSBxdWlzIGFyY3UgbmVjIGxhY3VzIG1vbGVzdGllIHBoYXJldHJhIHNpdCBhbWV0IGluIG1hdXJpcy4nLFxyXG4gICAgJ3RpbWUnOiAnMiBEZWMnLFxyXG4gICAgJ3JlYWQnOiBmYWxzZSxcclxuICAgICdzdGFycmVkJzogZmFsc2UsXHJcbiAgICAnaW1wb3J0YW50JzogdHJ1ZSxcclxuICAgICdoYXNBdHRhY2htZW50cyc6IHRydWUsXHJcbiAgICAnYXR0YWNobWVudHMnOiBbXHJcbiAgICAgIHtcclxuICAgICAgICAndHlwZSc6ICdpbWFnZScsXHJcbiAgICAgICAgJ2ZpbGVOYW1lJzogJ2Jpa2UnLFxyXG4gICAgICAgICdwcmV2aWV3JzogJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS81MDB4MzMzJyxcclxuICAgICAgICAndXJsJzogJycsXHJcbiAgICAgICAgJ3NpemUnOiAnMS4xTWInXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICAndHlwZSc6ICdpbWFnZScsXHJcbiAgICAgICAgJ2ZpbGVOYW1lJzogJ2J1cmdlcnMnLFxyXG4gICAgICAgICdwcmV2aWV3JzogJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS81MDB4MzMzJyxcclxuICAgICAgICAndXJsJzogJycsXHJcbiAgICAgICAgJ3NpemUnOiAnMzgwa2InXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICAndHlwZSc6ICdpbWFnZScsXHJcbiAgICAgICAgJ2ZpbGVOYW1lJzogJ2NhbWVyYScsXHJcbiAgICAgICAgJ3ByZXZpZXcnOiAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzYwMHg0MDAnLFxyXG4gICAgICAgICd1cmwnOiAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzYwMHg0MDAnLFxyXG4gICAgICAgICdzaXplJzogJzE3TWInXHJcbiAgICAgIH1cclxuICAgIF0sXHJcbiAgICAnbGFiZWxzJzogW1xyXG4gICAgICAxXHJcbiAgICBdLFxyXG4gICAgJ3NlbGVjdGVkJzogZmFsc2UsXHJcbiAgICAnZm9sZGVyJzogMFxyXG4gIH0sXHJcbiAge1xyXG4gICAgJ2lkJzogJzE1NDU4OGEwODY0ZDI4ODExMjQnLFxyXG4gICAgJ2Zyb20nOiB7XHJcbiAgICAgICduYW1lJzogJ0RvbW5pYyBCcm93bicsXHJcbiAgICAgICdhdmF0YXInOiAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzY0MHg0MjAnLFxyXG4gICAgICAnZW1haWwnOiAnZG9tbmljYnJvd25AZXhhbXBsZS5jb20nXHJcbiAgICB9LFxyXG4gICAgJ3RvJzogW1xyXG4gICAgICB7XHJcbiAgICAgICAgJ25hbWUnOiAnbWUnLFxyXG4gICAgICAgICdlbWFpbCc6ICdyb2JlcnQuam9obnNvbkBleGFtcGxlLmNvbSdcclxuICAgICAgfVxyXG4gICAgXSxcclxuICAgICdzdWJqZWN0JzogJ0Z1c2NlIGV1IHJ1dHJ1bSBvcmNpLiBBbGlxdWFtIGhlbmRyZXJpdCBtZXR1cyBzaXQgYW1ldCBpbnRlcmR1bSAnLFxyXG4gICAgJ21lc3NhZ2UnOiAnUGhhc2VsbHVzIGxpZ3VsYSBwdXJ1cywgZWxlaWZlbmQgdmVsIG1hc3NhIHV0LCBpbnRlcmR1bSBwdWx2aW5hciBzYXBpZW4uIE51bGxhbSBhIGV4IG5lYyBlbGl0IGNvbmRpbWVudHVtIG1hdHRpcy4gTnVsbGFtIHNpdCBhbWV0IGRpY3R1bSBuZXF1ZSwgdmVsIHNhZ2l0dGlzIGVyb3MuIFBlbGxlbnRlc3F1ZSBoYWJpdGFudCBtb3JiaSB0cmlzdGlxdWUgc2VuZWN0dXMgZXQgbmV0dXMgZXQgbWFsZXN1YWRhIGZhbWVzIGFjIHR1cnBpcyBlZ2VzdGFzLi4nLFxyXG4gICAgJ3RpbWUnOiAnMSBEZWMnLFxyXG4gICAgJ3JlYWQnOiBmYWxzZSxcclxuICAgICdzdGFycmVkJzogZmFsc2UsXHJcbiAgICAnaW1wb3J0YW50JzogZmFsc2UsXHJcbiAgICAnaGFzQXR0YWNobWVudHMnOiBmYWxzZSxcclxuICAgICdsYWJlbHMnOiBbXSxcclxuICAgICdzZWxlY3RlZCc6IGZhbHNlLFxyXG4gICAgJ2ZvbGRlcic6IDBcclxuICB9LFxyXG4gIHtcclxuICAgICdpZCc6ICcxNTQ1Mzc0MzVkNWIzMmJmMTFhJyxcclxuICAgICdmcm9tJzoge1xyXG4gICAgICAnbmFtZSc6ICdCcmlhbiBMYXJhJyxcclxuICAgICAgJ2F2YXRhcic6ICcnLFxyXG4gICAgICAnZW1haWwnOiAnYnJpYW5sYXJhQGV4YW1wbGUuY29tJ1xyXG4gICAgfSxcclxuICAgICd0byc6IFtcclxuICAgICAge1xyXG4gICAgICAgICduYW1lJzogJ21lJyxcclxuICAgICAgICAnZW1haWwnOiAncm9iZXJ0LmpvaG5zb25AZXhhbXBsZS5jb20nXHJcbiAgICAgIH1cclxuICAgIF0sXHJcbiAgICAnc3ViamVjdCc6ICdRdWlzcXVlIGZlbGlzIG5pc2ksIGlhY3VsaXMgYXQgbGFjaW5pYSBldC4nLFxyXG4gICAgJ21lc3NhZ2UnOiAnQWVuZWFuIGZhY2lsaXNpcywgbG9yZW0gZWdldCBpbnRlcmR1bSB0cmlzdGlxdWUsIHZlbGl0IG9kaW8gdGVtcHVzIG9yY2ksIHNlZCBtb2xlc3RpZSBmZWxpcyBpcHN1bSBkaWduaXNzaW0gbGVvLiBQcmFlc2VudCB2b2x1dHBhdCBjb252YWxsaXMgbW9sZXN0aWUuIFByYWVzZW50IGV1IG1hc3NhIGdyYXZpZGEsIHNlbXBlciBsYWN1cyBpZCwgYmxhbmRpdCB0dXJwaXMuIE51bGxhbSBwb3N1ZXJlIHNvZGFsZXMgZGlnbmlzc2ltLiBOdW5jIGNvbW1vZG8gZHVpIHNpdCBhbWV0IHBvc3VlcmUgbG9ib3J0aXMuIEFsaXF1YW0gcGxhY2VyYXQgbWkgYXQgZmVsaXMgbGFvcmVldCwgbm9uIGFsaXF1YW0gb2RpbyB2YXJpdXMuIE51bGxhIHVsdHJpY2VzIGxlbyB2ZWwgbWV0dXMgZmluaWJ1cywgdGVtcG9yIGZldWdpYXQgdmVsaXQgbWF0dGlzLiBEb25lYyBldCBjb21tb2RvIG5pc2wsIHNpdCBhbWV0IGRpZ25pc3NpbSBtaS4gVXQgdWxsYW1jb3JwZXIgbGFjdXMgc2VkIG1hZ25hIHByZXRpdW0gY29tbW9kby4gU2VkIGRpY3R1bSBhdWN0b3Igc2VtIHZpdGFlIHRpbmNpZHVudC4gTW9yYmkgdXQganVzdG8gc2l0IGFtZXQgdG9ydG9yIHRpbmNpZHVudCBhbGlxdWV0LiBBZW5lYW4gYXQgZXN0IGluIGxvcmVtIHB1bHZpbmFyIGZlcm1lbnR1bS4nLFxyXG4gICAgJ3RpbWUnOiAnMSBEZWMnLFxyXG4gICAgJ3JlYWQnOiB0cnVlLFxyXG4gICAgJ3N0YXJyZWQnOiBmYWxzZSxcclxuICAgICdpbXBvcnRhbnQnOiBmYWxzZSxcclxuICAgICdoYXNBdHRhY2htZW50cyc6IGZhbHNlLFxyXG4gICAgJ2xhYmVscyc6IFtdLFxyXG4gICAgJ3NlbGVjdGVkJzogZmFsc2UsXHJcbiAgICAnZm9sZGVyJzogMFxyXG4gIH0sXHJcbiAge1xyXG4gICAgJ2lkJzogJzE1NDRlNDNkY2RhZTZlYmY4NzYnLFxyXG4gICAgJ2Zyb20nOiB7XHJcbiAgICAgICduYW1lJzogJ0plc29uIEJvcm4nLFxyXG4gICAgICAnYXZhdGFyJzogJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8xNTB4MTUwJyxcclxuICAgICAgJ2VtYWlsJzogJ2plc29uYm9ybkBleGFtcGxlLmNvbSdcclxuICAgIH0sXHJcbiAgICAndG8nOiBbXHJcbiAgICAgIHtcclxuICAgICAgICAnbmFtZSc6ICdtZScsXHJcbiAgICAgICAgJ2VtYWlsJzogJ3JvYmVydC5qb2huc29uQGV4YW1wbGUuY29tJ1xyXG4gICAgICB9XHJcbiAgICBdLFxyXG4gICAgJ3N1YmplY3QnOiAnVGhlIHN0YW5kYXJkIExvcmVtIElwc3VtIHBhc3NhZ2UnLFxyXG4gICAgJ21lc3NhZ2UnOiAnT24gdGhlIG90aGVyIGhhbmQsIHdlIGRlbm91bmNlIHdpdGggcmlnaHRlb3VzIGluZGlnbmF0aW9uIGFuZCBkaXNsaWtlIG1lbiB3aG8gYXJlIHNvIGJlZ3VpbGVkIGFuZCBkZW1vcmFsaXplZCBieSB0aGUgY2hhcm1zIG9mIHBsZWFzdXJlIG9mIHRoZSBtb21lbnQsIHNvIGJsaW5kZWQgYnkgZGVzaXJlLCB0aGF0IHRoZXkgY2Fubm90IGZvcmVzZWUgdGhlIHBhaW4gYW5kIHRyb3VibGUgdGhhdCBhcmUgYm91bmQgdG8gZW5zdWU7IGFuZCBlcXVhbCBibGFtZSBiZWxvbmdzIHRvIHRob3NlIHdobyBmYWlsIGluIHRoZWlyIGR1dHkgdGhyb3VnaCB3ZWFrbmVzcyBvZiB3aWxsLCB3aGljaCBpcyB0aGUgc2FtZSBhcyBzYXlpbmcgdGhyb3VnaCBzaHJpbmtpbmcgZnJvbSB0b2lsIGFuZCBwYWluLiBUaGVzZSBjYXNlcyBhcmUgcGVyZmVjdGx5IHNpbXBsZSBhbmQgZWFzeSB0byBkaXN0aW5ndWlzaC4gSW4gYSBmcmVlIGhvdXIsIHdoZW4gb3VyIHBvd2VyIG9mIGNob2ljZSBpcyB1bnRyYW1tZWxsZWQgYW5kIHdoZW4gbm90aGluZyBwcmV2ZW50cyBvdXIgYmVpbmcgYWJsZSB0byBkbyB3aGF0IHdlIGxpa2UgYmVzdCwgZXZlcnkgcGxlYXN1cmUgaXMgdG8gYmUgd2VsY29tZWQgYW5kIGV2ZXJ5IHBhaW4gYXZvaWRlZC5cXG4gQnV0IGluIGNlcnRhaW4gY2lyY3Vtc3RhbmNlcyBhbmQgb3dpbmcgdG8gdGhlIGNsYWltcyBvZiBkdXR5IG9yIHRoZSBvYmxpZ2F0aW9ucyBvZiBidXNpbmVzcyBpdCB3aWxsIGZyZXF1ZW50bHkgb2NjdXIgdGhhdCBwbGVhc3VyZXMgaGF2ZSB0byBiZSByZXB1ZGlhdGVkIGFuZCBhbm5veWFuY2VzIGFjY2VwdGVkLiBUaGUgd2lzZSBtYW4gdGhlcmVmb3JlIGFsd2F5cyBob2xkcyBpbiB0aGVzZSBtYXR0ZXJzIHRvIHRoaXMgcHJpbmNpcGxlIG9mIHNlbGVjdGlvbjogaGUgcmVqZWN0cyBwbGVhc3VyZXMgdG8gc2VjdXJlIG90aGVyIGdyZWF0ZXIgcGxlYXN1cmVzLCBvciBlbHNlIGhlIGVuZHVyZXMgcGFpbnMgdG8gYXZvaWQgd29yc2UgcGFpbnNBdCB2ZXJvIGVvcyBldCBhY2N1c2FtdXMgZXQgaXVzdG8gb2RpbyBkaWduaXNzaW1vcyBkdWNpbXVzIHF1aSBibGFuZGl0aWlzIHByYWVzZW50aXVtIHZvbHVwdGF0dW0gZGVsZW5pdGkgYXRxdWUgY29ycnVwdGkgcXVvcyBkb2xvcmVzIGV0IHF1YXMgbW9sZXN0aWFzIGV4Y2VwdHVyaSBzaW50IG9jY2FlY2F0aSBjdXBpZGl0YXRlIG5vbiBwcm92aWRlbnQsIHNpbWlsaXF1ZSBzdW50IGluIGN1bHBhIHF1aSBvZmZpY2lhIGRlc2VydW50IG1vbGxpdGlhIGFuaW1pLCBpZCBlc3QgbGFib3J1bSBldCBkb2xvcnVtIGZ1Z2EuIEV0IGhhcnVtIHF1aWRlbSByZXJ1bSBmYWNpbGlzIGVzdCBldCBleHBlZGl0YSBkaXN0aW5jdGlvLiAnLFxyXG4gICAgJ3RpbWUnOiAnMzAgTm92JyxcclxuICAgICdyZWFkJzogdHJ1ZSxcclxuICAgICdzdGFycmVkJzogZmFsc2UsXHJcbiAgICAnaW1wb3J0YW50JzogdHJ1ZSxcclxuICAgICdoYXNBdHRhY2htZW50cyc6IGZhbHNlLFxyXG4gICAgJ2xhYmVscyc6IFtcclxuICAgICAgMlxyXG4gICAgXSxcclxuICAgICdzZWxlY3RlZCc6IGZhbHNlLFxyXG4gICAgJ2ZvbGRlcic6IDBcclxuICB9LFxyXG4gIHtcclxuICAgICdpZCc6ICcxNTQzZWUzYTViNDNlMGY5ZjQ1JyxcclxuICAgICdmcm9tJzoge1xyXG4gICAgICAnbmFtZSc6ICdEb21uaWMgV2hpdGUnLFxyXG4gICAgICAnYXZhdGFyJzogJycsXHJcbiAgICAgICdlbWFpbCc6ICdkb21uaWN3aGl0ZUBleGFtcGxlLmNvbSdcclxuICAgIH0sXHJcbiAgICAndG8nOiBbXHJcbiAgICAgIHtcclxuICAgICAgICAnbmFtZSc6ICdtZScsXHJcbiAgICAgICAgJ2VtYWlsJzogJ3JvYmVydC5qb2huc29uQGV4YW1wbGUuY29tJ1xyXG4gICAgICB9XHJcbiAgICBdLFxyXG4gICAgJ3N1YmplY3QnOiAnQ3JhcyBiaWJlbmR1bSB0b3J0b3IgdG9ydG9yLicsXHJcbiAgICAnbWVzc2FnZSc6ICdDcmFzIGJpYmVuZHVtIHRvcnRvciB0b3J0b3IsIGV1IGx1Y3R1cyByaXN1cyBncmF2aWRhIHV0LiBTdXNwZW5kaXNzZSBuaXNpIHRvcnRvciwgY29uc2VxdWF0IGF0IHBlbGxlbnRlc3F1ZSBxdWlzLCBkYXBpYnVzIHZlbCByaXN1cy4gUHJhZXNlbnQgYWxpcXVhbSBzaXQgYW1ldCBkaWFtIHF1aXMgbHVjdHVzLiBOdWxsYSBmYWNpbGlzaS4gTWFlY2VuYXMgaWQgbW9sZXN0aWUgdG9ydG9yLiBOdWxsYSBlZ2V0IHByZXRpdW0gbnVsbGEuIEV0aWFtIGNvbnNlcXVhdCBkaWN0dW0gdmVsaXQsIGF0IGVnZXN0YXMgbGFjdXMgbGFvcmVldCBhYy4gVXQgZmFjaWxpc2lzIG1hc3NhIHZlbCBtaSBmcmluZ2lsbGEsIG5vbiBibGFuZGl0IGVyb3MgZGljdHVtLiBJbnRlZ2VyIGluIHRlbGx1cyB2aXRhZSBuaXNpIHRpbmNpZHVudCBwdWx2aW5hci4gTWFlY2VuYXMgYWMgYW50ZSB1dCBmZWxpcyBmZXVnaWF0IG9ybmFyZSBpZCBhIHF1YW0uIFF1aXNxdWUgZmV1Z2lhdCBhbnRlIHF1aXMgb3JuYXJlIHBsYWNlcmF0LicsXHJcbiAgICAndGltZSc6ICczMCBOb3YnLFxyXG4gICAgJ3JlYWQnOiB0cnVlLFxyXG4gICAgJ3N0YXJyZWQnOiBmYWxzZSxcclxuICAgICdpbXBvcnRhbnQnOiBmYWxzZSxcclxuICAgICdoYXNBdHRhY2htZW50cyc6IGZhbHNlLFxyXG4gICAgJ2xhYmVscyc6IFtdLFxyXG4gICAgJ3NlbGVjdGVkJzogZmFsc2UsXHJcbiAgICAnZm9sZGVyJzogMFxyXG4gIH0sXHJcbiAge1xyXG4gICAgJ2lkJzogJzE1NDNjYzQ1MTVkZjMxNDYxMTInLFxyXG4gICAgJ2Zyb20nOiB7XHJcbiAgICAgICduYW1lJzogJ0ppbW15IEpvJyxcclxuICAgICAgJ2F2YXRhcic6ICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMTUweDE1MCcsXHJcbiAgICAgICdlbWFpbCc6ICdqaW1teS5qb0BleGFtcGxlLmNvbSdcclxuICAgIH0sXHJcbiAgICAndG8nOiBbXHJcbiAgICAgIHtcclxuICAgICAgICAnbmFtZSc6ICdtZScsXHJcbiAgICAgICAgJ2VtYWlsJzogJ3JvYmVydC5qb2huc29uQGV4YW1wbGUuY29tJ1xyXG4gICAgICB9XHJcbiAgICBdLFxyXG4gICAgJ3N1YmplY3QnOiAnQ29udHJhcnkgdG8gcG9wdWxhciBiZWxpZWYuICcsXHJcbiAgICAnbWVzc2FnZSc6ICdvbnRyYXJ5IHRvIHBvcHVsYXIgYmVsaWVmLCBMb3JlbSBJcHN1bSBpcyBub3Qgc2ltcGx5IHJhbmRvbSB0ZXh0LiBJdCBoYXMgcm9vdHMgaW4gYSBwaWVjZSBvZiBjbGFzc2ljYWwgTGF0aW4gbGl0ZXJhdHVyZSBmcm9tIDQ1IEJDLCBtYWtpbmcgaXQgb3ZlciAyMDAwIHllYXJzIG9sZC4gUmljaGFyZCBNY0NsaW50b2NrLCBhIExhdGluIHByb2Zlc3NvciBhdCBIYW1wZGVuLVN5ZG5leSBDb2xsZWdlIGluIFZpcmdpbmlhLCBsb29rZWQgdXAgb25lIG9mIHRoZSBtb3JlIG9ic2N1cmUgTGF0aW4gd29yZHMsIGNvbnNlY3RldHVyLCBmcm9tIGEgTG9yZW0gSXBzdW0gcGFzc2FnZSwgYW5kIGdvaW5nIHRocm91Z2ggdGhlIGNpdGVzIG9mIHRoZSB3b3JkIGluIGNsYXNzaWNhbCBsaXRlcmF0dXJlLCBkaXNjb3ZlcmVkIHRoZSB1bmRvdWJ0YWJsZSBzb3VyY2UuIExvcmVtIElwc3VtIGNvbWVzIGZyb20gc2VjdGlvbnMgMS4xMC4zMiBhbmQgMS4xMC4zMyBvZiBcImRlIEZpbmlidXMgQm9ub3J1bSBldCBNYWxvcnVtXCIgKFRoZSBFeHRyZW1lcyBvZiBHb29kIGFuZCBFdmlsKSBieSBDaWNlcm8sIHdyaXR0ZW4gaW4gNDUgQkMuXFxuIFRoaXMgYm9vayBpcyBhIHRyZWF0aXNlIG9uIHRoZSB0aGVvcnkgb2YgZXRoaWNzLCB2ZXJ5IHBvcHVsYXIgZHVyaW5nIHRoZSBSZW5haXNzYW5jZS4gVGhlIGZpcnN0IGxpbmUgb2YgTG9yZW0gSXBzdW0sIFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQuLlwiLCBjb21lcyBmcm9tIGEgbGluZSBpbiBzZWN0aW9uIDEuMTAuMzInLFxyXG4gICAgJ3RpbWUnOiAnMjkgTm92JyxcclxuICAgICdyZWFkJzogdHJ1ZSxcclxuICAgICdzdGFycmVkJzogZmFsc2UsXHJcbiAgICAnaW1wb3J0YW50JzogZmFsc2UsXHJcbiAgICAnaGFzQXR0YWNobWVudHMnOiBmYWxzZSxcclxuICAgICdsYWJlbHMnOiBbXSxcclxuICAgICdzZWxlY3RlZCc6IGZhbHNlLFxyXG4gICAgJ2ZvbGRlcic6IDBcclxuICB9LFxyXG4gIHtcclxuICAgICdpZCc6ICcxNTQzOThhNDc3MGQ3YWFmOWEyJyxcclxuICAgICdmcm9tJzoge1xyXG4gICAgICAnbmFtZSc6ICdKb2huIFNtaXRoJyxcclxuICAgICAgJ2F2YXRhcic6ICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMTUweDE1MCcsXHJcbiAgICAgICdlbWFpbCc6ICdqb2huc21pdGhAZXhhbXBsZS5jb20nXHJcbiAgICB9LFxyXG4gICAgJ3RvJzogW1xyXG4gICAgICB7XHJcbiAgICAgICAgJ25hbWUnOiAnbWUnLFxyXG4gICAgICAgICdlbWFpbCc6ICdyb2JlcnQuam9obnNvbkBleGFtcGxlLmNvbSdcclxuICAgICAgfVxyXG4gICAgXSxcclxuICAgICdzdWJqZWN0JzogJ1V0IGVsZW1lbnR1bSByaG9uY3VzIG5pc2wuJyxcclxuICAgICdtZXNzYWdlJzogWydTdXNwZW5kaXNzZSBjb25ndWUgaXBzdW0gdGluY2lkdW50IGp1c3RvIGRpY3R1bSwgc2l0IGFtZXQgZmluaWJ1cyBsZWN0dXMgZWdlc3Rhcy4gUHJvaW4gZmVybWVudHVtIG5lYyByaXN1cyB2aXRhZSBhY2N1bXNhbi4gVml2YW11cyBub24gbGlndWxhIGV1IHVybmEgbWF0dGlzIGZldWdpYXQuIFBlbGxlbnRlc3F1ZSBleCBmZWxpcywgY29tbW9kbyBzZWQgc2VtIGEsIHBoYXJldHJhIHNlbXBlciBwdXJ1cy4gQ3VyYWJpdHVyIGluIHF1YW0gcmhvbmN1cywgYmxhbmRpdCBlcm9zIHRlbXBvciwgc29kYWxlcyBtZXR1cy4gUGVsbGVudGVzcXVlIHZlbCBsdWN0dXMgZXguIFF1aXNxdWUgYmxhbmRpdCBuaXNsIGF0IHRpbmNpZHVudCB2aXZlcnJhLiBQaGFzZWxsdXMgZWxlbWVudHVtIGZhdWNpYnVzIGxlbyBhYyBtb2xlc3RpZS4nXSxcclxuICAgICd0aW1lJzogJzEgRGVjJyxcclxuICAgICdyZWFkJzogdHJ1ZSxcclxuICAgICdzdGFycmVkJzogZmFsc2UsXHJcbiAgICAnaW1wb3J0YW50JzogZmFsc2UsXHJcbiAgICAnaGFzQXR0YWNobWVudHMnOiBmYWxzZSxcclxuICAgICdsYWJlbHMnOiBbXSxcclxuICAgICdzZWxlY3RlZCc6IGZhbHNlLFxyXG4gICAgJ2ZvbGRlcic6IDBcclxuICB9LFxyXG4gIHtcclxuICAgICdpZCc6ICcxNTQzODM1MWY4N2RjZDY4NTY3JyxcclxuICAgICdmcm9tJzoge1xyXG4gICAgICAnbmFtZSc6ICdKb25ueSBCcm93bicsXHJcbiAgICAgICdhdmF0YXInOiAnJyxcclxuICAgICAgJ2VtYWlsJzogJ2pvbm5ueWJyb3duQGV4YW1wbGUuY29tJ1xyXG4gICAgfSxcclxuICAgICd0byc6IFtcclxuICAgICAge1xyXG4gICAgICAgICduYW1lJzogJ21lJyxcclxuICAgICAgICAnZW1haWwnOiAncm9iZXJ0LmpvaG5zb25AZXhhbXBsZS5jb20nXHJcbiAgICAgIH1cclxuICAgIF0sXHJcbiAgICAnc3ViamVjdCc6ICdJbnRlZ2VyIG5lYyB0ZW1wdXMgZXJvcy4nLFxyXG4gICAgJ21lc3NhZ2UnOiAnVmVzdGlidWx1bSBvcm5hcmUgb3JjaSBoZW5kcmVyaXQgZWxpdCBlZ2VzdGFzLCBuZWMgY29uc2VjdGV0dXIgbWkgbG9ib3J0aXMuIE1hdXJpcyBwb3J0dGl0b3IgZG9sb3IgaW4gbmVxdWUgYWxpcXVhbSwgaW4gc29sbGljaXR1ZGluIGVuaW0gY29uc2VxdWF0LiBGdXNjZSBwaGFyZXRyYSB2ZW5lbmF0aXMgZmVybWVudHVtLlxcbiBcXG4gTWFlY2VuYXMgc2VtcGVyIG5pc2kgcXVpcyBsZWN0dXMgZGljdHVtLCB2ZWwgZmVybWVudHVtIHB1cnVzIG1hbGVzdWFkYS4gTnVuYyB0aW5jaWR1bnQgc2l0IGFtZXQgbnVuYyBzaXQgYW1ldCBlbGVpZmVuZC4gU2VkIHRlbGx1cyByaXN1cywgc2FnaXR0aXMgaWQgbWFnbmEgaW4sIGNvbW1vZG8gZmV1Z2lhdCByaXN1cy4gRG9uZWMgY29tbW9kbyBwcmV0aXVtIGRvbG9yIG5vbiBoZW5kcmVyaXQuIE51bGxhbSBpZCBsZW8gZXQgcXVhbSBjdXJzdXMgdmVzdGlidWx1bS4gVXQgaWQgYWxpcXVldCBkaWFtLCBpZCB2YXJpdXMgbGliZXJvLiBVdCBldCBmZWxpcyBldCBlc3QgZWxlaWZlbmQgZGlnbmlzc2ltIHZpdGFlIGNvbmRpbWVudHVtIGV4LiBVdCBhIHVsbGFtY29ycGVyIGFudGUsIGFjIGxhb3JlZXQgZXJhdC4gQ2xhc3MgYXB0ZW50IHRhY2l0aSBzb2Npb3NxdSBhZCBsaXRvcmEgdG9ycXVlbnQgcGVyIGNvbnViaWEgbm9zdHJhLCBwZXIgaW5jZXB0b3MgaGltZW5hZW9zLicsXHJcbiAgICAndGltZSc6ICcyOCBOb3YnLFxyXG4gICAgJ3JlYWQnOiB0cnVlLFxyXG4gICAgJ3N0YXJyZWQnOiBmYWxzZSxcclxuICAgICdpbXBvcnRhbnQnOiBmYWxzZSxcclxuICAgICdoYXNBdHRhY2htZW50cyc6IGZhbHNlLFxyXG4gICAgJ2xhYmVscyc6IFswXSxcclxuICAgICdzZWxlY3RlZCc6IGZhbHNlLFxyXG4gICAgJ2ZvbGRlcic6IDBcclxuICB9LFxyXG4gIHtcclxuICAgICdpZCc6ICcxNTQyZDc1ZDkyOWE2MDMxMjUnLFxyXG4gICAgJ2Zyb20nOiB7XHJcbiAgICAgICduYW1lJzogJ1JhaGltIEthZGlyJyxcclxuICAgICAgJ2F2YXRhcic6ICcnLFxyXG4gICAgICAnZW1haWwnOiAncmFoaW1rYWRpckBleGFtcGxlLmNvbSdcclxuICAgIH0sXHJcbiAgICAndG8nOiBbXHJcbiAgICAgIHtcclxuICAgICAgICAnbmFtZSc6ICdtZScsXHJcbiAgICAgICAgJ2VtYWlsJzogJ3JvYmVydC5qb2huc29uQGV4YW1wbGUuY29tJ1xyXG4gICAgICB9XHJcbiAgICBdLFxyXG4gICAgJ3N1YmplY3QnOiAnUHJhZXNlbnQgdG9ydG9yIG9kaW8sIGxhb3JlZXQuJyxcclxuICAgICdtZXNzYWdlJzogJ09yY2kgdmFyaXVzIG5hdG9xdWUgcGVuYXRpYnVzIGV0IG1hZ25pcyBkaXMgcGFydHVyaWVudCBtb250ZXMsIG5hc2NldHVyIHJpZGljdWx1cyBtdXMuIFNlZCBpZCBlcm9zIHNpdCBhbWV0IGxvcmVtIHZpdmVycmEgdGluY2lkdW50IGVnZXQgaWQgZG9sb3IuIE1vcmJpIGVnZXN0YXMgYmliZW5kdW0gaXBzdW0gYXQgZWZmaWNpdHVyLiBTdXNwZW5kaXNzZSBhdCBtYXVyaXMganVzdG8uIEN1cmFiaXR1ciBlbGVtZW50dW0gYW50ZSBldCBsYWN1cyBibGFuZGl0LCBxdWlzIGZhdWNpYnVzIGxvcmVtIHBlbGxlbnRlc3F1ZS4gRHVpcyBldCBhdWN0b3IgcXVhbSwgc2VkIGxhY2luaWEgYW50ZS4gTmFtIHBsYWNlcmF0IGxhY3VzIGV1IG1vbGxpcyBsb2JvcnRpcy4gU2VkIHBsYWNlcmF0LCBpcHN1bSBldSB2ZXN0aWJ1bHVtIGdyYXZpZGEsIG1hZ25hIHNhcGllbiBmZXVnaWF0IGZlbGlzLCBub24gdmFyaXVzIGxlbyBtYXVyaXMgdml0YWUgbGlndWxhLiBTdXNwZW5kaXNzZSB0aW5jaWR1bnQgbmVjIGVuaW0gZXUgcG9ydHRpdG9yLicsXHJcbiAgICAndGltZSc6ICcyNyBOb3YnLFxyXG4gICAgJ3JlYWQnOiB0cnVlLFxyXG4gICAgJ3N0YXJyZWQnOiBmYWxzZSxcclxuICAgICdpbXBvcnRhbnQnOiBmYWxzZSxcclxuICAgICdoYXNBdHRhY2htZW50cyc6IGZhbHNlLFxyXG4gICAgJ2xhYmVscyc6IFtdLFxyXG4gICAgJ3NlbGVjdGVkJzogZmFsc2UsXHJcbiAgICAnZm9sZGVyJzogMFxyXG4gIH0sXHJcbiAge1xyXG4gICAgJ2lkJzogJzE1NDIwNGU0NWE1OWIxNjg0NTMnLFxyXG4gICAgJ2Zyb20nOiB7XHJcbiAgICAgICduYW1lJzogJ0thZGlyJyxcclxuICAgICAgJ2F2YXRhcic6ICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMTUweDE1MCcsXHJcbiAgICAgICdlbWFpbCc6ICdrYWRpcm1AZXhhbXBsZS5jb20nXHJcbiAgICB9LFxyXG4gICAgJ3RvJzogW1xyXG4gICAgICB7XHJcbiAgICAgICAgJ25hbWUnOiAnbWUnLFxyXG4gICAgICAgICdlbWFpbCc6ICdyb2JlcnQuam9obnNvbkBleGFtcGxlLmNvbSdcclxuICAgICAgfVxyXG4gICAgXSxcclxuICAgICdzdWJqZWN0JzogJ01hbnkgZGVza3RvcCBwdWJsaXNoaW5nIHBhY2thZ2VzJyxcclxuICAgICdtZXNzYWdlJzogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIEZ1c2NlIGxvcmVtIGRpYW0sIHB1bHZpbmFyIGlkIG5pc2wgbm9uLCB1bHRyaWNlcyBtYXhpbXVzIG5pYmguIFN1c3BlbmRpc3NlIHV0IGp1c3RvIHZlbGl0LiBOdWxsYW0gYWMgdWx0cmljZXMgcmlzdXMsIHF1aXMgYXVjdG9yIG9yY2kuIFZlc3RpYnVsdW0gdm9sdXRwYXQgbmlzaSBldCBuZXF1ZSBwb3J0YSB1bGxhbWNvcnBlci4gTWFlY2VuYXMgcG9ydHRpdG9yIHBvcnRhIGVyYXQgYWMgc3VzY2lwaXQuIFNlZCBjdXJzdXMgbGVvIHV0IGVsZW1lbnR1bSBmcmluZ2lsbGEuIE1hZWNlbmFzIHNlbXBlciB2aXZlcnJhIGVyYXQsIHZlbCB1bGxhbWNvcnBlciBkdWkgZWZmaWNpdHVyIGluLiBWZXN0aWJ1bHVtIHBsYWNlcmF0IGltcGVyZGlldCB0ZWxsdXMsIGV0IHRpbmNpZHVudCBlcm9zIHBvc3VlcmUgZWdldC4gUHJvaW4gc2l0IGFtZXQgZmFjaWxpc2lzIGxpYmVyby4gTnVsbGEgZWdldCBlc3QgdXQgZXJhdCBhbGlxdWV0IHJob25jdXMuIFF1aXNxdWUgYWMgdXJuYSB2aXRhZSBkdWkgaGVuZHJlcml0IHNvbGxpY2l0dWRpbiB2ZWwgaWQgc2VtLiAgSW4gZWdldCBhbnRlIHNhcGllbi4gUXVpc3F1ZSBjb25zZXF1YXQgdmVsaXQgbm9uIGFudGUgZmluaWJ1cywgdmVsIHBsYWNlcmF0IGVyYXQgdWx0cmljaWVzLiBBbGlxdWFtIGJpYmVuZHVtIGp1c3RvIGVyYXQsIHVsdHJpY2VzIHZlaGljdWxhIGRvbG9yIGVsZW1lbnR1bSBhLiAgXFxuIFxcbiBNYXVyaXMgZXUgbmlzbCBmZXVnaWF0IGxpZ3VsYSBtb2xlc3RpZSBlbGVpZmVuZC4gQWxpcXVhbSBlZmZpY2l0dXIgdmVuZW5hdGlzIHZlbGl0IGFjIHBvcnRhLiBWaXZhbXVzIHZpdGFlIHB1bHZpbmFyIHRlbGx1cy4gRG9uZWMgb2RpbyBlbmltLCBhdWN0b3IgZWdldCBuaWJoIG1hdHRpcywgdWx0cmljaWVzIGRpZ25pc3NpbSBsYWN1cy5cXG4gUGhhc2VsbHVzIG5vbiB0aW5jaWR1bnQgZHVpLiBOdWxsYSBldSBhcmN1IGxvcmVtLiAgRG9uZWMgbm9uIGhlbmRyZXJpdCBhdWd1ZSwgbG9ib3J0aXMgc29sbGljaXR1ZGluIG9kaW8uIENsYXNzIGFwdGVudCB0YWNpdGkgc29jaW9zcXUgYWQgbGl0b3JhIHRvcnF1ZW50IHBlciBjb251YmlhIG5vc3RyYSwgcGVyIGluY2VwdG9zIGhpbWVuYWVvcy4gRHVpcyBzaXQgYW1ldCBldWlzbW9kIGVuaW0sIGVnZXQgdmVzdGlidWx1bSBqdXN0by4gRnVzY2UgYSBwbGFjZXJhdCBsZWN0dXMsIGVnZXQgZmV1Z2lhdCBwdXJ1cy4gQ3JhcyByaXN1cyBhbnRlLCBmYXVjaWJ1cyBlZ2V0IGp1c3RvIGNvbW1vZG8sIHZvbHV0cGF0IHRlbXBvciBhbnRlLiBEb25lYyBzaXQgYW1ldCBsZW8gdmVuZW5hdGlzLCBncmF2aWRhIHF1YW0gc2l0IGFtZXQsIGJsYW5kaXQgZHVpLiBJbiBxdWFtIGFudGUsIGVsZW1lbnR1bSB1dCBmYXVjaWJ1cyBuZWMsIHRyaXN0aXF1ZSB2aXRhZSBkdWkuIFByYWVzZW50IHZlbCBlcmF0IGF0IGVuaW0gcGxhY2VyYXQgbHVjdHVzIHZlbCB1dCBpcHN1bS4gXFxuIFxcbiBJbiBjb25ndWUgdGVtcG9yIG1pLCBub24gb3JuYXJlIGxlY3R1cyBjb25kaW1lbnR1bSBhdC4gQWVuZWFuIGxpYmVybyBkaWFtLCBmaW5pYnVzIGVnZXQgc2FwaWVuIGV0LCB0cmlzdGlxdWUgZmVybWVudHVtIGxvcmVtLiAgJyxcclxuICAgICd0aW1lJzogJzI2IE5vdicsXHJcbiAgICAncmVhZCc6IHRydWUsXHJcbiAgICAnc3RhcnJlZCc6IGZhbHNlLFxyXG4gICAgJ2ltcG9ydGFudCc6IGZhbHNlLFxyXG4gICAgJ2hhc0F0dGFjaG1lbnRzJzogZmFsc2UsXHJcbiAgICAnbGFiZWxzJzogWzBdLFxyXG4gICAgJ3NlbGVjdGVkJzogZmFsc2UsXHJcbiAgICAnZm9sZGVyJzogM1xyXG4gIH0sXHJcbiAge1xyXG4gICAgJ2lkJzogJzE1NDFkZDFlMDVkZmM0MzkyMTYnLFxyXG4gICAgJ2Zyb20nOiB7XHJcbiAgICAgICduYW1lJzogJ1N0ZWxsYSBKb2huc29uJyxcclxuICAgICAgJ2F2YXRhcic6ICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMTUweDE1MCcsXHJcbiAgICAgICdlbWFpbCc6ICdzdGVsbGEtam9obnNvbkBleGFtcGxlLmNvbSdcclxuICAgIH0sXHJcbiAgICAndG8nOiBbXHJcbiAgICAgIHtcclxuICAgICAgICAnbmFtZSc6ICdtZScsXHJcbiAgICAgICAgJ2VtYWlsJzogJ3JvYmVydC5qb2huc29uQGV4YW1wbGUuY29tJ1xyXG4gICAgICB9XHJcbiAgICBdLFxyXG4gICAgJ3N1YmplY3QnOiAnU2VjdGlvbiAxLjEwLjMyIG9mIFwiZGUnLFxyXG4gICAgJ21lc3NhZ2UnOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gRnVzY2UgbG9yZW0gZGlhbSwgcHVsdmluYXIgaWQgbmlzbCBub24sIHVsdHJpY2VzIG1heGltdXMgbmliaC4gU3VzcGVuZGlzc2UgdXQganVzdG8gdmVsaXQuIE51bGxhbSBhYyB1bHRyaWNlcyByaXN1cywgcXVpcyBhdWN0b3Igb3JjaS4gVmVzdGlidWx1bSB2b2x1dHBhdCBuaXNpIGV0IG5lcXVlIHBvcnRhIHVsbGFtY29ycGVyLiBNYWVjZW5hcyBwb3J0dGl0b3IgcG9ydGEgZXJhdCBhYyBzdXNjaXBpdC4gU2VkIGN1cnN1cyBsZW8gdXQgZWxlbWVudHVtIGZyaW5naWxsYS4gXFxuIFxcbiBNYWVjZW5hcyBzZW1wZXIgdml2ZXJyYSBlcmF0LCB2ZWwgdWxsYW1jb3JwZXIgZHVpIGVmZmljaXR1ciBpbi4gVmVzdGlidWx1bSBwbGFjZXJhdCBpbXBlcmRpZXQgdGVsbHVzLCBldCB0aW5jaWR1bnQgZXJvcyBwb3N1ZXJlIGVnZXQuIFByb2luIHNpdCBhbWV0IGZhY2lsaXNpcyBsaWJlcm8uIE51bGxhIGVnZXQgZXN0IHV0IGVyYXQgYWxpcXVldCByaG9uY3VzLiBRdWlzcXVlIGFjIHVybmEgdml0YWUgZHVpIGhlbmRyZXJpdCBzb2xsaWNpdHVkaW4gdmVsIGlkIHNlbS4gIEluIGVnZXQgYW50ZSBzYXBpZW4uIFF1aXNxdWUgY29uc2VxdWF0IHZlbGl0IG5vbiBhbnRlIGZpbmlidXMsIHZlbCBwbGFjZXJhdCBlcmF0IHVsdHJpY2llcy4gQWxpcXVhbSBiaWJlbmR1bSBqdXN0byBlcmF0LCB1bHRyaWNlcyB2ZWhpY3VsYSBkb2xvciBlbGVtZW50dW0gYS4gTWF1cmlzIGV1IG5pc2wgZmV1Z2lhdCBsaWd1bGEgbW9sZXN0aWUgZWxlaWZlbmQuIEFsaXF1YW0gZWZmaWNpdHVyIHZlbmVuYXRpcyB2ZWxpdCBhYyBwb3J0YS4gVml2YW11cyB2aXRhZSBwdWx2aW5hciB0ZWxsdXMuIERvbmVjIG9kaW8gZW5pbSwgYXVjdG9yIGVnZXQgbmliaCBtYXR0aXMsIHVsdHJpY2llcyBkaWduaXNzaW0gbGFjdXMuXFxuIFBoYXNlbGx1cyBub24gdGluY2lkdW50IGR1aS4gTnVsbGEgZXUgYXJjdSBsb3JlbS4gIERvbmVjIG5vbiBoZW5kcmVyaXQgYXVndWUsIGxvYm9ydGlzIHNvbGxpY2l0dWRpbiBvZGlvLiBDbGFzcyBhcHRlbnQgdGFjaXRpIHNvY2lvc3F1IGFkIGxpdG9yYSB0b3JxdWVudCBwZXIgY29udWJpYSBub3N0cmEsIHBlciBpbmNlcHRvcyBoaW1lbmFlb3MuIER1aXMgc2l0IGFtZXQgZXVpc21vZCBlbmltLCBlZ2V0IHZlc3RpYnVsdW0ganVzdG8uIEZ1c2NlIGEgcGxhY2VyYXQgbGVjdHVzLCBlZ2V0IGZldWdpYXQgcHVydXMuIENyYXMgcmlzdXMgYW50ZSwgZmF1Y2lidXMgZWdldCBqdXN0byBjb21tb2RvLCB2b2x1dHBhdCB0ZW1wb3IgYW50ZS4gRG9uZWMgc2l0IGFtZXQgbGVvIHZlbmVuYXRpcywgZ3JhdmlkYSBxdWFtIHNpdCBhbWV0LCBibGFuZGl0IGR1aS4gSW4gcXVhbSBhbnRlLCBlbGVtZW50dW0gdXQgZmF1Y2lidXMgbmVjLCB0cmlzdGlxdWUgdml0YWUgZHVpLiBQcmFlc2VudCB2ZWwgZXJhdCBhdCBlbmltIHBsYWNlcmF0IGx1Y3R1cyB2ZWwgdXQgaXBzdW0uIEluIGNvbmd1ZSB0ZW1wb3IgbWksIG5vbiBvcm5hcmUgbGVjdHVzIGNvbmRpbWVudHVtIGF0LiBBZW5lYW4gbGliZXJvIGRpYW0sIGZpbmlidXMgZWdldCBzYXBpZW4gZXQsIHRyaXN0aXF1ZSBmZXJtZW50dW0gbG9yZW0uICAnLFxyXG4gICAgJ3RpbWUnOiAnMjUgTm92JyxcclxuICAgICdyZWFkJzogdHJ1ZSxcclxuICAgICdzdGFycmVkJzogZmFsc2UsXHJcbiAgICAnaW1wb3J0YW50JzogZmFsc2UsXHJcbiAgICAnaGFzQXR0YWNobWVudHMnOiBmYWxzZSxcclxuICAgICdsYWJlbHMnOiBbXSxcclxuICAgICdzZWxlY3RlZCc6IGZhbHNlLFxyXG4gICAgJ2ZvbGRlcic6IDNcclxuICB9LFxyXG4gIHtcclxuICAgICdpZCc6ICcxNTQxZGQxZTA1ZGZjNDM5MjE3JyxcclxuICAgICdmcm9tJzoge1xyXG4gICAgICAnbmFtZSc6ICdTdGV2ZSBTbWl0aCcsXHJcbiAgICAgICdhdmF0YXInOiAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzE1MHgxNTAnLFxyXG4gICAgICAnZW1haWwnOiAnc3RldmVzbWl0aEBleGFtcGxlLmNvbSdcclxuICAgIH0sXHJcbiAgICAndG8nOiBbXHJcbiAgICAgIHtcclxuICAgICAgICAnbmFtZSc6ICdtZScsXHJcbiAgICAgICAgJ2VtYWlsJzogJ3JvYmVydC5qb2huc29uQGV4YW1wbGUuY29tJ1xyXG4gICAgICB9XHJcbiAgICBdLFxyXG4gICAgJ3N1YmplY3QnOiAnSW50ZWdlciBuZWMgdGVtcHVzIGVyb3MuJyxcclxuICAgICdtZXNzYWdlJzogJ0N1cmFiaXR1ciBpZCBydXRydW0gZXguIE1vcmJpIHRlbXB1cyBsaWJlcm8gZWdldCBtYXVyaXMgdWx0cmljaWVzIHZlbmVuYXRpcy4gQ3VyYWJpdHVyIGVnZXQgcGVsbGVudGVzcXVlIGxvcmVtLiBNb3JiaSBpbiB0ZW1wb3Igc2VtLCB2ZWwgcG9zdWVyZSBvZGlvLiBWaXZhbXVzIHNpdCBhbWV0IGVmZmljaXR1ciB0b3J0b3IuIEZ1c2NlIGluIHRvcnRvciBub24gbG9yZW0gYmxhbmRpdCBlbGVpZmVuZCBxdWlzIGV1IHJpc3VzLiBEb25lYyBsb2JvcnRpcyBleCBqdXN0bywgc2VkIHN1c2NpcGl0IGRvbG9yIHBvc3VlcmUgZWdldC4nLFxyXG4gICAgJ3RpbWUnOiAnMjQgTm92JyxcclxuICAgICdyZWFkJzogdHJ1ZSxcclxuICAgICdzdGFycmVkJzogZmFsc2UsXHJcbiAgICAnaW1wb3J0YW50JzogZmFsc2UsXHJcbiAgICAnaGFzQXR0YWNobWVudHMnOiBmYWxzZSxcclxuICAgICdsYWJlbHMnOiBbXSxcclxuICAgICdzZWxlY3RlZCc6IGZhbHNlLFxyXG4gICAgJ2ZvbGRlcic6IDNcclxuICB9XHJcbl07XHJcbiIsImV4cG9ydCBkZWZhdWx0IFtcclxuXHJcbiAge1xyXG4gICAgJ3RpdGxlJzogJ0FsbCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICAndGl0bGUnOiAnTm9uZScsXHJcbiAgfSxcclxuICB7XHJcbiAgICAndGl0bGUnOiAnUmVhZCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICAndGl0bGUnOiAnVW5yZWFkJyxcclxuICB9LFxyXG4gIHtcclxuICAgICd0aXRsZSc6ICdTdGFycmVkJyxcclxuICB9LFxyXG4gIHtcclxuICAgICd0aXRsZSc6ICdVbnN0YXJyZWQnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgJ3RpdGxlJzogJ0ltcG9ydGFudCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICAndGl0bGUnOiAnVW5pbXBvcnRhbnQnLFxyXG4gIH1cclxuXTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7UHVyZUNvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7QnV0dG9uLCBDaGVja2JveCwgRHJhd2VyLCBEcm9wZG93biwgTWVudSwgbWVzc2FnZX0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IEN1c3RvbVNjcm9sbGJhcnMgZnJvbSBcIi4uLy4uLy4uL3V0aWwvQ3VzdG9tU2Nyb2xsYmFyc1wiO1xyXG5cclxuaW1wb3J0IG1haWxzIGZyb20gXCIuL2RhdGEvbWFpbHNcIjtcclxuaW1wb3J0IGZvbGRlcnMgZnJvbSBcIi4vZGF0YS9mb2xkZXJzXCI7XHJcbmltcG9ydCBmaWx0ZXJzIGZyb20gXCIuL2RhdGEvZmlsdGVyc1wiO1xyXG5pbXBvcnQgbGFiZWxzIGZyb20gXCIuL2RhdGEvbGFiZWxzXCI7XHJcbmltcG9ydCBvcHRpb25zIGZyb20gXCIuL2RhdGEvb3B0aW9uc1wiO1xyXG5pbXBvcnQgTWFpbExpc3QgZnJvbSBcIi4uLy4uLy4uL2FwcC9jb21wb25lbnRzL21haWwvTWFpbExpc3RcIjtcclxuaW1wb3J0IENvbXBvc2VNYWlsIGZyb20gXCIuLi8uLi8uLi9hcHAvY29tcG9uZW50cy9tYWlsL0NvbXBvc2VcIjtcclxuaW1wb3J0IEFwcE1vZHVsZUhlYWRlciBmcm9tIFwiLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvQXBwTW9kdWxlSGVhZGVyXCI7XHJcbmltcG9ydCBNYWlsRGV0YWlsIGZyb20gXCIuLi8uLi8uLi9hcHAvY29tcG9uZW50cy9tYWlsL01haWxEZXRhaWxcIjtcclxuaW1wb3J0IEludGxNZXNzYWdlcyBmcm9tIFwiLi4vLi4vLi4vdXRpbC9JbnRsTWVzc2FnZXNcIjtcclxuaW1wb3J0IENpcmN1bGFyUHJvZ3Jlc3MgZnJvbSBcIi4uLy4uLy4uL2FwcC9jb21wb25lbnRzL0NpcmN1bGFyUHJvZ3Jlc3NcIjtcclxuXHJcbmltcG9ydCBzZWN1cmVkUGFnZSBmcm9tICcuLi8uLi8uLi9hcHAvaG9jL3NlY3VyZWRQYWdlJztcclxuaW1wb3J0ICcuL2luZGV4LmNzcyc7XHJcblxyXG5cclxuY2xhc3MgTWFpbCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xyXG5cclxuICBNYWlsU2lkZUJhciA9ICgpID0+IHtcclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImd4LW1vZHVsZS1zaWRlXCI+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LW1vZHVsZS1zaWRlLWhlYWRlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtbW9kdWxlLWxvZ29cIj5cclxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1jaGF0IGd4LW1yLTRcIi8+XHJcbiAgICAgICAgICA8SW50bE1lc3NhZ2VzIGlkPVwic2lkZWJhci5tYWlsLm1haWxib3hcIi8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1tb2R1bGUtc2lkZS1jb250ZW50XCI+XHJcbiAgICAgICAgPEN1c3RvbVNjcm9sbGJhcnMgY2xhc3NOYW1lPVwiZ3gtbW9kdWxlLXNpZGUtc2Nyb2xsXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LW1vZHVsZS1hZGQtdGFza1wiPlxyXG4gICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgY2xhc3NOYW1lPVwiZ3gtYnRuLWJsb2NrXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtjb21wb3NlTWFpbDogdHJ1ZX0pXHJcbiAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLWVkaXQgZ3gtbXItMlwiLz5cclxuICAgICAgICAgICAgICA8SW50bE1lc3NhZ2VzIGlkPVwic2lkZWJhci5tYWlsLmNvbXBvc2VcIi8+PC9CdXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZ3gtbW9kdWxlLW5hdlwiPlxyXG4gICAgICAgICAgICB7dGhpcy5nZXROYXZGb2xkZXJzKCl9XHJcblxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZ3gtbW9kdWxlLW5hdi1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgIDxJbnRsTWVzc2FnZXMgaWQ9XCJzaWRlYmFyLm1haWwuZmlsdGVyc1wiLz5cclxuICAgICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICAgIHt0aGlzLmdldE5hdkZpbHRlcnMoKX1cclxuXHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJneC1tb2R1bGUtbmF2LWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgPEludGxNZXNzYWdlcyBpZD1cInNpZGViYXIubWFpbC5sYWJlbHNcIi8+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgICB7dGhpcy5nZXROYXZMYWJlbHMoKX1cclxuXHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvQ3VzdG9tU2Nyb2xsYmFycz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICB9O1xyXG5cclxuICBvbkRlbGV0ZU1haWwgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBtYWlscyA9IHRoaXMuc3RhdGUuYWxsTWFpbC5tYXAobWFpbCA9PlxyXG4gICAgICBtYWlsLnNlbGVjdGVkICYmIChtYWlsLmZvbGRlciA9PT0gdGhpcy5zdGF0ZS5zZWxlY3RlZEZvbGRlcikgP1xyXG4gICAgICAgIHsuLi5tYWlsLCBmb2xkZXI6IDQsIHNlbGVjdGVkOiBmYWxzZSx9IDogbWFpbFxyXG4gICAgKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBhbGVydE1lc3NhZ2U6ICdNYWlsIERlbGV0ZWQgU3VjY2Vzc2Z1bGx5JyxcclxuICAgICAgc2hvd01lc3NhZ2U6IHRydWUsXHJcbiAgICAgIHNlbGVjdGVkTWFpbHM6IDAsXHJcbiAgICAgIGFsbE1haWw6IG1haWxzLFxyXG4gICAgICBmb2xkZXJNYWlsczogbWFpbHMuZmlsdGVyKG1haWwgPT4gbWFpbC5mb2xkZXIgPT09IHRoaXMuc3RhdGUuc2VsZWN0ZWRGb2xkZXIpXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBnZXROYXZGb2xkZXJzID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIGZvbGRlcnMubWFwKChmb2xkZXIsIGluZGV4KSA9PlxyXG4gICAgICA8bGkga2V5PXtpbmRleH0gb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGZpbHRlck1haWxzID0gdGhpcy5zdGF0ZS5hbGxNYWlsLmZpbHRlcihtYWlsID0+IG1haWwuZm9sZGVyID09PSBmb2xkZXIuaWQpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgc2VsZWN0ZWRGb2xkZXI6IGZvbGRlci5pZCxcclxuICAgICAgICAgIG5vQ29udGVudEZvdW5kTWVzc2FnZTogJ05vIE1haWwgZm91bmQgaW4gc2VsZWN0ZWQgZm9sZGVyJyxcclxuICAgICAgICAgIGN1cnJlbnRNYWlsOiBudWxsLFxyXG4gICAgICAgICAgbG9hZGVyOiB0cnVlLFxyXG4gICAgICAgICAgZm9sZGVyTWFpbHM6IGZpbHRlck1haWxzXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtsb2FkZXI6IGZhbHNlfSk7XHJcbiAgICAgICAgfSwgMTUwMCk7XHJcbiAgICAgIH1cclxuICAgICAgfT5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Ake3RoaXMuc3RhdGUuc2VsZWN0ZWRGb2xkZXIgPT09IGZvbGRlci5pZCA/ICdhY3RpdmUgZ3gtbGluaycgOiAnZ3gtbGluayd9YH0+XHJcbiAgICAgICAgICA8aSBjbGFzc05hbWU9e2BpY29uIGljb24tJHtmb2xkZXIuaWNvbn1gfS8+XHJcbiAgICAgICAgICA8c3Bhbj57Zm9sZGVyLnRpdGxlfTwvc3Bhbj5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgIDwvbGk+XHJcbiAgICApXHJcbiAgfTtcclxuXHJcblxyXG4gIG9uRm9sZGVyTWVudUl0ZW1TZWxlY3QgPSAoZSkgPT4ge1xyXG4gICAgY29uc3QgaWQgPSArZS5rZXk7XHJcbiAgICBjb25zdCBtYWlscyA9IHRoaXMuc3RhdGUuYWxsTWFpbC5tYXAobWFpbCA9PlxyXG4gICAgICBtYWlsLnNlbGVjdGVkICYmIChtYWlsLmZvbGRlciA9PT0gdGhpcy5zdGF0ZS5zZWxlY3RlZEZvbGRlcikgP1xyXG4gICAgICAgIHsuLi5tYWlsLCBmb2xkZXI6IGlkLCBzZWxlY3RlZDogZmFsc2UsfSA6IG1haWxcclxuICAgICk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgc2VsZWN0ZWRNYWlsczogMCxcclxuICAgICAgYWxsTWFpbDogbWFpbHMsXHJcbiAgICAgIG5vQ29udGVudEZvdW5kTWVzc2FnZTogJ05vIE1haWwgZm91bmQgaW4gc2VsZWN0ZWQgZm9sZGVyJyxcclxuICAgICAgYWxlcnRNZXNzYWdlOiAnTWFpbCBoYXMgYmVlbiBtb3ZlZCBzdWNjZXNzZnVsbHknLFxyXG4gICAgICBzaG93TWVzc2FnZTogdHJ1ZSxcclxuICAgICAgZm9sZGVyTWFpbHM6IG1haWxzLmZpbHRlcihtYWlsID0+IG1haWwuZm9sZGVyID09PSB0aGlzLnN0YXRlLnNlbGVjdGVkRm9sZGVyKVxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgb25MYWJlbE1lbnVJdGVtU2VsZWN0ID0gKGUpID0+IHtcclxuICAgIGNvbnN0IGlkID0gK2Uua2V5O1xyXG4gICAgY29uc3QgbWFpbHMgPSB0aGlzLnN0YXRlLmFsbE1haWwubWFwKG1haWwgPT4ge1xyXG4gICAgICAgIGlmIChtYWlsLnNlbGVjdGVkICYmIChtYWlsLmZvbGRlciA9PT0gdGhpcy5zdGF0ZS5zZWxlY3RlZEZvbGRlcikpIHtcclxuICAgICAgICAgIGlmIChtYWlsLmxhYmVscy5pbmNsdWRlcyhpZCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5tYWlsLCBsYWJlbHM6IHRoaXMucmVtb3ZlTGFiZWwobWFpbCwgaWQpfTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4ubWFpbCwgbGFiZWxzOiB0aGlzLmFkZExhYmVsKG1haWwsIGlkKX07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiBtYWlsO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBub0NvbnRlbnRGb3VuZE1lc3NhZ2U6ICdObyBNYWlsIGZvdW5kIGluIHNlbGVjdGVkIGxhYmVsJyxcclxuICAgICAgYWxlcnRNZXNzYWdlOiAnTGFiZWwgVXBkYXRlZCBTdWNjZXNzZnVsbHknLFxyXG4gICAgICBzaG93TWVzc2FnZTogdHJ1ZSxcclxuICAgICAgYWxsTWFpbDogbWFpbHMsXHJcbiAgICAgIGZvbGRlck1haWxzOiBtYWlscy5maWx0ZXIobWFpbCA9PiBtYWlsLmZvbGRlciA9PT0gdGhpcy5zdGF0ZS5zZWxlY3RlZEZvbGRlcilcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZVJlcXVlc3RDbG9zZSA9ICgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBjb21wb3NlTWFpbDogZmFsc2UsXHJcbiAgICAgIHNob3dNZXNzYWdlOiBmYWxzZSxcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgZ2V0TmF2RmlsdGVycyA9ICgpID0+IHtcclxuICAgIHJldHVybiBmaWx0ZXJzLm1hcCgoZmlsdGVyLCBpbmRleCkgPT5cclxuICAgICAgPGxpIGtleT17aW5kZXh9IG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICBjb25zdCBmaWx0ZXJNYWlscyA9IHRoaXMuc3RhdGUuYWxsTWFpbC5maWx0ZXIobWFpbCA9PiB7XHJcbiAgICAgICAgICBpZiAoZmlsdGVyLmlkID09PSAwICYmIG1haWwuc3RhcnJlZCAmJiBtYWlsLmZvbGRlciA9PT0gdGhpcy5zdGF0ZS5zZWxlY3RlZEZvbGRlcikge1xyXG4gICAgICAgICAgICByZXR1cm4gbWFpbFxyXG4gICAgICAgICAgfSBlbHNlIGlmIChmaWx0ZXIuaWQgPT09IDEgJiYgbWFpbC5pbXBvcnRhbnQgJiYgbWFpbC5mb2xkZXIgPT09IHRoaXMuc3RhdGUuc2VsZWN0ZWRGb2xkZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG1haWxcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgbm9Db250ZW50Rm91bmRNZXNzYWdlOiAnTm8gTWFpbCBmb3VuZCBpbiBzZWxlY3RlZCBmaWx0ZXInLFxyXG4gICAgICAgICAgbG9hZGVyOiB0cnVlLFxyXG4gICAgICAgICAgZm9sZGVyTWFpbHM6IGZpbHRlck1haWxzXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtsb2FkZXI6IGZhbHNlfSk7XHJcbiAgICAgICAgfSwgMTUwMCk7XHJcbiAgICAgIH1cclxuICAgICAgfT5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJneC1saW5rXCI+XHJcbiAgICAgICAgICA8aSBjbGFzc05hbWU9e2BpY29uIGljb24tJHtmaWx0ZXIuaWNvbn1gfS8+XHJcbiAgICAgICAgICA8c3Bhbj57ZmlsdGVyLnRpdGxlfTwvc3Bhbj5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgIDwvbGk+XHJcbiAgICApXHJcbiAgfTtcclxuICBvbk9wdGlvbk1lbnVJdGVtU2VsZWN0ID0gKGUpID0+IHtcclxuICAgIHN3aXRjaCAoZS5rZXkpIHtcclxuICAgICAgY2FzZSAnQWxsJzpcclxuICAgICAgICB0aGlzLmhhbmRsZVJlcXVlc3RDbG9zZSgpO1xyXG4gICAgICAgIHRoaXMuZ2V0QWxsTWFpbCgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdOb25lJzpcclxuICAgICAgICB0aGlzLmhhbmRsZVJlcXVlc3RDbG9zZSgpO1xyXG4gICAgICAgIHRoaXMuZ2V0VW5zZWxlY3RlZEFsbE1haWwoKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnUmVhZCc6XHJcbiAgICAgICAgdGhpcy5oYW5kbGVSZXF1ZXN0Q2xvc2UoKTtcclxuICAgICAgICB0aGlzLmdldFJlYWRNYWlsKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ1VucmVhZCc6XHJcbiAgICAgICAgdGhpcy5oYW5kbGVSZXF1ZXN0Q2xvc2UoKTtcclxuICAgICAgICB0aGlzLmdldFVucmVhZE1haWwoKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnU3RhcnJlZCc6XHJcbiAgICAgICAgdGhpcy5oYW5kbGVSZXF1ZXN0Q2xvc2UoKTtcclxuICAgICAgICB0aGlzLmdldFN0YXJyZWRNYWlsKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ1Vuc3RhcnJlZCc6XHJcbiAgICAgICAgdGhpcy5oYW5kbGVSZXF1ZXN0Q2xvc2UoKTtcclxuICAgICAgICB0aGlzLmdldFVuU3RhcnJlZE1haWwoKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnSW1wb3J0YW50JzpcclxuICAgICAgICB0aGlzLmhhbmRsZVJlcXVlc3RDbG9zZSgpO1xyXG4gICAgICAgIHRoaXMuZ2V0SW1wb3J0YW50TWFpbCgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdVbmltcG9ydGFudCc6XHJcbiAgICAgICAgdGhpcy5oYW5kbGVSZXF1ZXN0Q2xvc2UoKTtcclxuICAgICAgICB0aGlzLmdldFVuaW1wb3J0YW50TWFpbCgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGdldEFsbE1haWwgPSAoKSA9PiB7XHJcbiAgICBsZXQgbWFpbHMgPSB0aGlzLnN0YXRlLmFsbE1haWwubWFwKChtYWlsKSA9PiBtYWlsLmZvbGRlciA9PT0gdGhpcy5zdGF0ZS5zZWxlY3RlZEZvbGRlciA/IHtcclxuICAgICAgLi4ubWFpbCxcclxuICAgICAgc2VsZWN0ZWQ6IHRydWVcclxuICAgIH0gOiBtYWlsKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBzZWxlY3RlZE1haWxzOiBtYWlscy5sZW5ndGgsXHJcbiAgICAgIGFsbE1haWw6IG1haWxzLFxyXG4gICAgICBvcHRpb25OYW1lOiAnQWxsJyxcclxuICAgICAgZm9sZGVyTWFpbHM6IG1haWxzLmZpbHRlcihtYWlsID0+IG1haWwuZm9sZGVyID09PSB0aGlzLnN0YXRlLnNlbGVjdGVkRm9sZGVyKVxyXG4gICAgfSk7XHJcbiAgfTtcclxuICBnZXRVbnNlbGVjdGVkQWxsTWFpbCA9ICgpID0+IHtcclxuICAgIGxldCBtYWlscyA9IHRoaXMuc3RhdGUuYWxsTWFpbC5tYXAoKG1haWwpID0+IG1haWwuZm9sZGVyID09PSB0aGlzLnN0YXRlLnNlbGVjdGVkRm9sZGVyID8ge1xyXG4gICAgICAuLi5tYWlsLFxyXG4gICAgICBzZWxlY3RlZDogZmFsc2VcclxuICAgIH0gOiBtYWlsKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBzZWxlY3RlZE1haWxzOiAwLFxyXG4gICAgICBhbGxNYWlsOiBtYWlscyxcclxuICAgICAgb3B0aW9uTmFtZTogJ05vbmUnLFxyXG4gICAgICBmb2xkZXJNYWlsczogbWFpbHMuZmlsdGVyKG1haWwgPT4gbWFpbC5mb2xkZXIgPT09IHRoaXMuc3RhdGUuc2VsZWN0ZWRGb2xkZXIpXHJcbiAgICB9KTtcclxuICB9O1xyXG4gIGdldFJlYWRNYWlsID0gKCkgPT4ge1xyXG4gICAgbGV0IHNlbGVjdGVkTWFpbCA9IDA7XHJcbiAgICBsZXQgbWFpbHMgPSB0aGlzLnN0YXRlLmFsbE1haWwuZmlsdGVyKG1haWwgPT4gbWFpbC5mb2xkZXIgPT09IHRoaXMuc3RhdGUuc2VsZWN0ZWRGb2xkZXIpO1xyXG4gICAgbWFpbHMgPSBtYWlscy5tYXAoKG1haWwpID0+IHtcclxuICAgICAgaWYgKG1haWwucmVhZCkge1xyXG4gICAgICAgIHNlbGVjdGVkTWFpbCsrO1xyXG4gICAgICAgIHJldHVybiB7Li4ubWFpbCwgc2VsZWN0ZWQ6IHRydWV9O1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB7Li4ubWFpbCwgc2VsZWN0ZWQ6IGZhbHNlfVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgc2VsZWN0ZWRNYWlsczogc2VsZWN0ZWRNYWlsLFxyXG4gICAgICBvcHRpb25OYW1lOiAnUmVhZCcsXHJcbiAgICAgIGZvbGRlck1haWxzOiBtYWlscy5maWx0ZXIobWFpbCA9PiBtYWlsLmZvbGRlciA9PT0gdGhpcy5zdGF0ZS5zZWxlY3RlZEZvbGRlcilcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIG1haWxzO1xyXG4gIH07XHJcbiAgZ2V0VW5yZWFkTWFpbCA9ICgpID0+IHtcclxuICAgIGxldCBzZWxlY3RlZE1haWwgPSAwO1xyXG4gICAgbGV0IG1haWxzID0gdGhpcy5zdGF0ZS5hbGxNYWlsLmZpbHRlcihtYWlsID0+IG1haWwuZm9sZGVyID09PSB0aGlzLnN0YXRlLnNlbGVjdGVkRm9sZGVyKTtcclxuICAgIG1haWxzID0gbWFpbHMubWFwKChtYWlsKSA9PiB7XHJcbiAgICAgIGlmICghbWFpbC5yZWFkKSB7XHJcbiAgICAgICAgc2VsZWN0ZWRNYWlsKys7XHJcbiAgICAgICAgcmV0dXJuIHsuLi5tYWlsLCBzZWxlY3RlZDogdHJ1ZX07XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHsuLi5tYWlsLCBzZWxlY3RlZDogZmFsc2V9XHJcbiAgICB9KTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBzZWxlY3RlZE1haWxzOiBzZWxlY3RlZE1haWwsXHJcbiAgICAgIG9wdGlvbk5hbWU6ICdVbnJlYWQnLFxyXG4gICAgICBmb2xkZXJNYWlsczogbWFpbHMuZmlsdGVyKG1haWwgPT4gbWFpbC5mb2xkZXIgPT09IHRoaXMuc3RhdGUuc2VsZWN0ZWRGb2xkZXIpXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBtYWlscztcclxuICB9O1xyXG4gIGdldFN0YXJyZWRNYWlsID0gKCkgPT4ge1xyXG4gICAgbGV0IHNlbGVjdGVkTWFpbCA9IDA7XHJcbiAgICBsZXQgbWFpbHMgPSB0aGlzLnN0YXRlLmFsbE1haWwuZmlsdGVyKG1haWwgPT4gbWFpbC5mb2xkZXIgPT09IHRoaXMuc3RhdGUuc2VsZWN0ZWRGb2xkZXIpO1xyXG4gICAgbWFpbHMgPSBtYWlscy5tYXAoKG1haWwpID0+IHtcclxuICAgICAgaWYgKG1haWwuc3RhcnJlZCkge1xyXG4gICAgICAgIHNlbGVjdGVkTWFpbCsrO1xyXG4gICAgICAgIHJldHVybiB7Li4ubWFpbCwgc2VsZWN0ZWQ6IHRydWV9O1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB7Li4ubWFpbCwgc2VsZWN0ZWQ6IGZhbHNlfVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgc2VsZWN0ZWRNYWlsczogc2VsZWN0ZWRNYWlsLFxyXG4gICAgICBvcHRpb25OYW1lOiAnU3RhcnJlZCcsXHJcbiAgICAgIGZvbGRlck1haWxzOiBtYWlscy5maWx0ZXIobWFpbCA9PiBtYWlsLmZvbGRlciA9PT0gdGhpcy5zdGF0ZS5zZWxlY3RlZEZvbGRlcilcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIG1haWxzO1xyXG4gIH07XHJcbiAgZ2V0VW5TdGFycmVkTWFpbCA9ICgpID0+IHtcclxuICAgIGxldCBzZWxlY3RlZE1haWwgPSAwO1xyXG4gICAgbGV0IG1haWxzID0gdGhpcy5zdGF0ZS5hbGxNYWlsLmZpbHRlcihtYWlsID0+IG1haWwuZm9sZGVyID09PSB0aGlzLnN0YXRlLnNlbGVjdGVkRm9sZGVyICYmIG1haWwuZm9sZGVyID09PSB0aGlzLnN0YXRlLnNlbGVjdGVkRm9sZGVyKTtcclxuICAgIG1haWxzID0gbWFpbHMubWFwKChtYWlsKSA9PiB7XHJcbiAgICAgIGlmICghbWFpbC5zdGFycmVkKSB7XHJcbiAgICAgICAgc2VsZWN0ZWRNYWlsKys7XHJcbiAgICAgICAgcmV0dXJuIHsuLi5tYWlsLCBzZWxlY3RlZDogdHJ1ZX07XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHsuLi5tYWlsLCBzZWxlY3RlZDogZmFsc2V9XHJcbiAgICB9KTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBzZWxlY3RlZE1haWxzOiBzZWxlY3RlZE1haWwsXHJcbiAgICAgIG9wdGlvbk5hbWU6ICdVblN0YXJyZWQnLFxyXG4gICAgICBmb2xkZXJNYWlsczogbWFpbHMuZmlsdGVyKG1haWwgPT4gbWFpbC5mb2xkZXIgPT09IHRoaXMuc3RhdGUuc2VsZWN0ZWRGb2xkZXIpXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBtYWlscztcclxuICB9O1xyXG4gIGdldEltcG9ydGFudE1haWwgPSAoKSA9PiB7XHJcbiAgICBsZXQgc2VsZWN0ZWRNYWlsID0gMDtcclxuICAgIGxldCBtYWlscyA9IHRoaXMuc3RhdGUuYWxsTWFpbC5maWx0ZXIobWFpbCA9PiBtYWlsLmZvbGRlciA9PT0gdGhpcy5zdGF0ZS5zZWxlY3RlZEZvbGRlciAmJiBtYWlsLmZvbGRlciA9PT0gdGhpcy5zdGF0ZS5zZWxlY3RlZEZvbGRlcik7XHJcbiAgICBtYWlscyA9IG1haWxzLm1hcCgobWFpbCkgPT4ge1xyXG4gICAgICBpZiAobWFpbC5pbXBvcnRhbnQpIHtcclxuICAgICAgICBzZWxlY3RlZE1haWwrKztcclxuICAgICAgICByZXR1cm4gey4uLm1haWwsIHNlbGVjdGVkOiB0cnVlfTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gey4uLm1haWwsIHNlbGVjdGVkOiBmYWxzZX1cclxuICAgIH0pO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHNlbGVjdGVkTWFpbHM6IHNlbGVjdGVkTWFpbCxcclxuICAgICAgb3B0aW9uTmFtZTogJ0ltcG9ydGFudCcsXHJcbiAgICAgIGZvbGRlck1haWxzOiBtYWlscy5maWx0ZXIobWFpbCA9PiBtYWlsLmZvbGRlciA9PT0gdGhpcy5zdGF0ZS5zZWxlY3RlZEZvbGRlcilcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIG1haWxzO1xyXG4gIH07XHJcbiAgZ2V0VW5pbXBvcnRhbnRNYWlsID0gKCkgPT4ge1xyXG4gICAgbGV0IHNlbGVjdGVkTWFpbCA9IDA7XHJcbiAgICBsZXQgbWFpbHMgPSB0aGlzLnN0YXRlLmFsbE1haWwuZmlsdGVyKG1haWwgPT4gbWFpbC5mb2xkZXIgPT09IHRoaXMuc3RhdGUuc2VsZWN0ZWRGb2xkZXIgJiYgbWFpbC5mb2xkZXIgPT09IHRoaXMuc3RhdGUuc2VsZWN0ZWRGb2xkZXIpO1xyXG4gICAgbWFpbHMgPSBtYWlscy5tYXAoKG1haWwpID0+IHtcclxuICAgICAgaWYgKCFtYWlsLmltcG9ydGFudCkge1xyXG4gICAgICAgIHNlbGVjdGVkTWFpbCsrO1xyXG4gICAgICAgIHJldHVybiB7Li4ubWFpbCwgc2VsZWN0ZWQ6IHRydWV9O1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB7Li4ubWFpbCwgc2VsZWN0ZWQ6IGZhbHNlfVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgc2VsZWN0ZWRNYWlsczogc2VsZWN0ZWRNYWlsLFxyXG4gICAgICBvcHRpb25OYW1lOiAnVW5pbXBvcnRhbnQnLFxyXG4gICAgICBub0NvbnRlbnRGb3VuZE1lc3NhZ2U6ICdObyBNYWlsIGZvdW5kIGluIHNlbGVjdGVkIExhYmVsJyxcclxuICAgICAgZm9sZGVyTWFpbHM6IG1haWxzLmZpbHRlcihtYWlsID0+IG1haWwuZm9sZGVyID09PSB0aGlzLnN0YXRlLnNlbGVjdGVkRm9sZGVyKVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gbWFpbHM7XHJcbiAgfTtcclxuICBnZXROYXZMYWJlbHMgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gbGFiZWxzLm1hcCgobGFiZWwsIGluZGV4KSA9PlxyXG4gICAgICA8bGkga2V5PXtpbmRleH0gb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGZpbHRlck1haWxzID0gdGhpcy5zdGF0ZS5hbGxNYWlsLmZpbHRlcihtYWlsID0+IG1haWwubGFiZWxzLmluY2x1ZGVzKGxhYmVsLmlkKSAmJiBtYWlsLmZvbGRlciA9PT0gdGhpcy5zdGF0ZS5zZWxlY3RlZEZvbGRlcik7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICBsb2FkZXI6IHRydWUsXHJcbiAgICAgICAgICBub0NvbnRlbnRGb3VuZE1lc3NhZ2U6ICdObyBNYWlsIGZvdW5kIGluIHNlbGVjdGVkIGxhYmVsJyxcclxuICAgICAgICAgIGZvbGRlck1haWxzOiBmaWx0ZXJNYWlsc1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bG9hZGVyOiBmYWxzZX0pO1xyXG4gICAgICAgIH0sIDE1MDApO1xyXG4gICAgICB9XHJcbiAgICAgIH0+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ3gtbGlua1wiPlxyXG4gICAgICAgICAgPGkgY2xhc3NOYW1lPXtgaWNvbiBpY29uLXRhZyBneC10ZXh0LSR7bGFiZWwuY29sb3J9YH0vPlxyXG4gICAgICAgICAgPHNwYW4+e2xhYmVsLnRpdGxlfTwvc3Bhbj5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgIDwvbGk+XHJcbiAgICApXHJcbiAgfTtcclxuICBzZWFyY2hNYWlsID0gKHNlYXJjaFRleHQpID0+IHtcclxuICAgIGlmIChzZWFyY2hUZXh0ID09PSAnJykge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtmb2xkZXJNYWlsczogdGhpcy5zdGF0ZS5hbGxNYWlsLmZpbHRlcigobWFpbCkgPT4gIW1haWwuZGVsZXRlZCl9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IHNlYXJjaE1haWxzID0gdGhpcy5zdGF0ZS5hbGxNYWlsLmZpbHRlcigobWFpbCkgPT5cclxuICAgICAgICAhbWFpbC5kZWxldGVkICYmIG1haWwuc3ViamVjdC50b0xvd2VyQ2FzZSgpLmluZGV4T2Yoc2VhcmNoVGV4dC50b0xvd2VyQ2FzZSgpKSA+IC0xKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgZm9sZGVyTWFpbHM6IHNlYXJjaE1haWxzXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgZGlzcGxheU1haWwgPSAoY3VycmVudE1haWwsIGZvbGRlck1haWxzLCBub0NvbnRlbnRGb3VuZE1lc3NhZ2UpID0+IHtcclxuICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9XCJneC1tb2R1bGUtYm94LWNvbHVtblwiPlxyXG4gICAgICB7Y3VycmVudE1haWwgPT09IG51bGwgP1xyXG4gICAgICAgIGZvbGRlck1haWxzLmxlbmd0aCA9PT0gMCA/XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LW5vLWNvbnRlbnQtZm91bmQgZ3gtdGV4dC1saWdodCBneC1kLWZsZXggZ3gtYWxpZ24taXRlbXMtY2VudGVyIGd4LWp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAge25vQ29udGVudEZvdW5kTWVzc2FnZX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgOlxyXG4gICAgICAgICAgPE1haWxMaXN0IG1haWxzPXtmb2xkZXJNYWlsc30gb25TdGFydFNlbGVjdD17dGhpcy5vblN0YXJ0U2VsZWN0LmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgb25NYWlsU2VsZWN0PXt0aGlzLm9uTWFpbFNlbGVjdC5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uTWFpbENoZWNrZWQ9e3RoaXMub25NYWlsQ2hlY2tlZC5iaW5kKHRoaXMpfS8+XHJcbiAgICAgICAgOlxyXG4gICAgICAgIDxNYWlsRGV0YWlsIG1haWw9e2N1cnJlbnRNYWlsfSBvblN0YXJ0U2VsZWN0PXt0aGlzLm9uU3RhcnRTZWxlY3QuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICBvbkltcG9ydGFudFNlbGVjdD17dGhpcy5vbkltcG9ydGFudFNlbGVjdC5iaW5kKHRoaXMpfS8+fVxyXG4gICAgPC9kaXY+KVxyXG4gIH07XHJcbiAgZ2V0TWFpbEFjdGlvbnMgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJneC1mbGV4LXJvdyBneC1hbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuXHJcbiAgICAgIDxEcm9wZG93biBvdmVybGF5PXt0aGlzLmZvbGRlck1lbnUoKX0gcGxhY2VtZW50PVwiYm90dG9tUmlnaHRcIiB0cmlnZ2VyPXtbJ2NsaWNrJ119PlxyXG4gICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1mb2xkZXIgZ3gtaWNvbi1idG5cIi8+XHJcbiAgICAgIDwvRHJvcGRvd24+XHJcblxyXG4gICAgICA8RHJvcGRvd24gb3ZlcmxheT17dGhpcy5sYWJlbE1lbnUoKX0gcGxhY2VtZW50PVwiYm90dG9tUmlnaHRcIiB0cmlnZ2VyPXtbJ2NsaWNrJ119PlxyXG4gICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gaWNvbi10YWcgZ3gtaWNvbi1idG5cIi8+XHJcbiAgICAgIDwvRHJvcGRvd24+XHJcblxyXG4gICAgICA8c3BhbiBvbkNsaWNrPXt0aGlzLm9uRGVsZXRlTWFpbC5iaW5kKHRoaXMpfT5cclxuICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGljb24tdHJhc2ggZ3gtaWNvbi1idG5cIi8+PC9zcGFuPlxyXG5cclxuICAgIDwvZGl2PlxyXG4gIH07XHJcblxyXG4gIG9wdGlvbk1lbnUgPSAoKSA9PiAoXHJcbiAgICA8TWVudSBpZD1cIm9wdGlvbi1tZW51XCJcclxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25PcHRpb25NZW51SXRlbVNlbGVjdC5iaW5kKHRoaXMpfT5cclxuICAgICAge29wdGlvbnMubWFwKG9wdGlvbiA9PlxyXG4gICAgICAgIDxNZW51Lkl0ZW0ga2V5PXtvcHRpb24udGl0bGV9PlxyXG4gICAgICAgICAge29wdGlvbi50aXRsZX1cclxuICAgICAgICA8L01lbnUuSXRlbT4sXHJcbiAgICAgICl9XHJcbiAgICA8L01lbnU+KTtcclxuXHJcbiAgZm9sZGVyTWVudSA9ICgpID0+IChcclxuICAgIDxNZW51IGlkPVwiZm9sZGVyLW1lbnVcIlxyXG4gICAgICAgICAgb25DbGljaz17dGhpcy5vbkZvbGRlck1lbnVJdGVtU2VsZWN0LmJpbmQodGhpcyl9PlxyXG4gICAgICB7Zm9sZGVycy5tYXAoZm9sZGVyID0+XHJcbiAgICAgICAgPE1lbnUuSXRlbSBrZXk9e2ZvbGRlci5pZH0+XHJcbiAgICAgICAgICB7Zm9sZGVyLnRpdGxlfVxyXG4gICAgICAgIDwvTWVudS5JdGVtPixcclxuICAgICAgKX1cclxuICAgIDwvTWVudT4pO1xyXG5cclxuICBsYWJlbE1lbnUgPSAoKSA9PiAoXHJcbiAgICA8TWVudSBpZD1cImxhYmVsLW1lbnVcIlxyXG4gICAgICAgICAgb25DbGljaz17dGhpcy5vbkxhYmVsTWVudUl0ZW1TZWxlY3QuYmluZCh0aGlzKX0+XHJcbiAgICAgIHtsYWJlbHMubWFwKGxhYmVsID0+XHJcbiAgICAgICAgPE1lbnUuSXRlbSBrZXk9e2xhYmVsLmlkfT5cclxuICAgICAgICAgIHtsYWJlbC50aXRsZX1cclxuICAgICAgICA8L01lbnUuSXRlbT4sXHJcbiAgICAgICl9XHJcbiAgICA8L01lbnU+XHJcbiAgKTtcclxuXHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHNlYXJjaE1haWw6ICcnLFxyXG4gICAgICBub0NvbnRlbnRGb3VuZE1lc3NhZ2U6ICdObyBNYWlsIGZvdW5kIGluIHNlbGVjdGVkIGZvbGRlcicsXHJcbiAgICAgIGFsZXJ0TWVzc2FnZTogJycsXHJcbiAgICAgIHNob3dNZXNzYWdlOiBmYWxzZSxcclxuICAgICAgZHJhd2VyU3RhdGU6IGZhbHNlLFxyXG4gICAgICBvcHRpb25OYW1lOiAnTm9uZScsXHJcbiAgICAgIGFuY2hvckVsOiBudWxsLFxyXG4gICAgICBhbGxNYWlsOiBtYWlscyxcclxuICAgICAgbG9hZGVyOiB0cnVlLFxyXG4gICAgICBjdXJyZW50TWFpbDogbnVsbCxcclxuICAgICAgdXNlcjoge1xyXG4gICAgICAgIG5hbWU6ICdSb2JlcnQgSm9obnNvbicsXHJcbiAgICAgICAgZW1haWw6ICdyb2JlcnRAZXhhbXBsZS5jb20nLFxyXG4gICAgICAgIGF2YXRhcjogJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8xNTB4MTUwJ1xyXG4gICAgICB9LFxyXG4gICAgICBzZWxlY3RlZE1haWxzOiAwLFxyXG4gICAgICBzZWxlY3RlZEZvbGRlcjogMCxcclxuICAgICAgY29tcG9zZU1haWw6IGZhbHNlLFxyXG4gICAgICBmb2xkZXJNYWlsczogbWFpbHMuZmlsdGVyKG1haWwgPT4gbWFpbC5mb2xkZXIgPT09IDApXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtsb2FkZXI6IGZhbHNlfSk7XHJcbiAgICB9LCAxNTAwKTtcclxuICB9XHJcblxyXG5cclxuICBvbk1haWxDaGVja2VkKGRhdGEpIHtcclxuICAgIGRhdGEuc2VsZWN0ZWQgPSAhZGF0YS5zZWxlY3RlZDtcclxuICAgIGxldCBzZWxlY3RlZE1haWwgPSAwO1xyXG4gICAgY29uc3QgbWFpbHMgPSB0aGlzLnN0YXRlLmZvbGRlck1haWxzLm1hcChtYWlsID0+IHtcclxuICAgICAgICBpZiAobWFpbC5zZWxlY3RlZCkge1xyXG4gICAgICAgICAgc2VsZWN0ZWRNYWlsKys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChtYWlsLmlkID09PSBkYXRhLmlkKSB7XHJcbiAgICAgICAgICBpZiAobWFpbC5zZWxlY3RlZCkge1xyXG4gICAgICAgICAgICBzZWxlY3RlZE1haWwrKztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gbWFpbDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgc2VsZWN0ZWRNYWlsczogc2VsZWN0ZWRNYWlsLFxyXG4gICAgICBmb2xkZXJNYWlsczogbWFpbHNcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25BbGxNYWlsU2VsZWN0KCkge1xyXG4gICAgY29uc3Qgc2VsZWN0QWxsID0gdGhpcy5zdGF0ZS5zZWxlY3RlZE1haWxzIDw9IHRoaXMuc3RhdGUuZm9sZGVyTWFpbHMubGVuZ3RoO1xyXG4gICAgaWYgKHNlbGVjdEFsbCkge1xyXG4gICAgICB0aGlzLmdldEFsbE1haWwoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZ2V0VW5zZWxlY3RlZEFsbE1haWwoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbW92ZUxhYmVsKG1haWwsIGxhYmVsKSB7XHJcbiAgICBtYWlsLmxhYmVscy5zcGxpY2UobWFpbC5sYWJlbHMuaW5kZXhPZihsYWJlbCksIDEpO1xyXG4gICAgaWYgKHRoaXMuc3RhdGUuY3VycmVudE1haWwgIT09IG51bGwgJiYgbWFpbC5pZCA9PT0gdGhpcy5zdGF0ZS5jdXJyZW50TWFpbC5pZCkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBjdXJyZW50TWFpbDogey4uLm1haWwsIGxhYmVsczogbWFpbC5sYWJlbHN9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICByZXR1cm4gbWFpbC5sYWJlbHM7XHJcbiAgfVxyXG5cclxuICBvblN0YXJ0U2VsZWN0KGRhdGEpIHtcclxuICAgIGRhdGEuc3RhcnJlZCA9ICFkYXRhLnN0YXJyZWQ7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgYWxlcnRNZXNzYWdlOiBkYXRhLnN0YXJyZWQgPyAnTWFpbCBNYXJrIGFzIFN0YXInIDogJ01haWwgUmVtb3ZlIGFzIFN0YXInLFxyXG4gICAgICBzaG93TWVzc2FnZTogdHJ1ZSxcclxuICAgICAgZm9sZGVyTWFpbHM6IHRoaXMuc3RhdGUuZm9sZGVyTWFpbHMubWFwKG1haWwgPT5cclxuICAgICAgICBtYWlsLmlkID09PSBkYXRhLmlkID9cclxuICAgICAgICAgIGRhdGEgOiBtYWlsXHJcbiAgICAgIClcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25JbXBvcnRhbnRTZWxlY3QoZGF0YSkge1xyXG4gICAgZGF0YS5pbXBvcnRhbnQgPSAhZGF0YS5pbXBvcnRhbnQ7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgYWxlcnRNZXNzYWdlOiBkYXRhLmltcG9ydGFudCA/ICdNYWlsIE1hcmsgYXMgSW1wb3J0YW50JyA6ICdNYWlsIFJlbW92ZSBhcyBJbXBvcnRhbnQnLFxyXG4gICAgICBzaG93TWVzc2FnZTogdHJ1ZSxcclxuICAgICAgZm9sZGVyTWFpbHM6IHRoaXMuc3RhdGUuZm9sZGVyTWFpbHMubWFwKG1haWwgPT5cclxuICAgICAgICBtYWlsLmlkID09PSBkYXRhLmlkID9cclxuICAgICAgICAgIGRhdGEgOiBtYWlsXHJcbiAgICAgIClcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25NYWlsU2VuZChkYXRhKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKFxyXG4gICAgICB7XHJcbiAgICAgICAgYWxlcnRNZXNzYWdlOiAnTWFpbCBTZW50IFN1Y2Nlc3NmdWxseScsXHJcbiAgICAgICAgc2hvd01lc3NhZ2U6IHRydWUsXHJcbiAgICAgICAgZm9sZGVyTWFpbHM6IHRoaXMuc3RhdGUuYWxsTWFpbC5jb25jYXQoZGF0YSksXHJcbiAgICAgICAgYWxsTWFpbDogdGhpcy5zdGF0ZS5hbGxNYWlsLmNvbmNhdChkYXRhKVxyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgb25NYWlsU2VsZWN0KG1haWwpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBsb2FkZXI6IHRydWUsXHJcbiAgICAgIGN1cnJlbnRNYWlsOiBtYWlsLFxyXG4gICAgfSk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7bG9hZGVyOiBmYWxzZX0pO1xyXG4gICAgfSwgMTUwMCk7XHJcbiAgfVxyXG5cclxuICBhZGRMYWJlbChtYWlsLCBsYWJlbCkge1xyXG4gICAgaWYgKHRoaXMuc3RhdGUuY3VycmVudE1haWwgIT09IG51bGwgJiYgbWFpbC5pZCA9PT0gdGhpcy5zdGF0ZS5jdXJyZW50TWFpbC5pZCkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBjdXJyZW50TWFpbDogey4uLm1haWwsIGxhYmVsczogbWFpbC5sYWJlbHMuY29uY2F0KGxhYmVsKX1cclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIHJldHVybiBtYWlsLmxhYmVscy5jb25jYXQobGFiZWwpXHJcbiAgfVxyXG5cclxuICB1cGRhdGVTZWFyY2goZXZ0KSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgc2VhcmNoTWFpbDogZXZ0LnRhcmdldC52YWx1ZSxcclxuICAgIH0pO1xyXG4gICAgdGhpcy5zZWFyY2hNYWlsKGV2dC50YXJnZXQudmFsdWUpXHJcbiAgfVxyXG5cclxuICBvblRvZ2dsZURyYXdlcigpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBkcmF3ZXJTdGF0ZTogIXRoaXMuc3RhdGUuZHJhd2VyU3RhdGVcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3Qge3NlbGVjdGVkTWFpbHMsIGxvYWRlciwgY3VycmVudE1haWwsIGRyYXdlclN0YXRlLCBmb2xkZXJNYWlscywgY29tcG9zZU1haWwsIHVzZXIsIGFsZXJ0TWVzc2FnZSwgc2hvd01lc3NhZ2UsIG5vQ29udGVudEZvdW5kTWVzc2FnZX0gPSB0aGlzLnN0YXRlO1xyXG4gICAgcmV0dXJuIChcclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtbWFpbi1jb250ZW50XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1hcHAtbW9kdWxlXCI+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1kLWJsb2NrIGd4LWQtbGctbm9uZVwiPlxyXG4gICAgICAgICAgICA8RHJhd2VyXHJcbiAgICAgICAgICAgICAgcGxhY2VtZW50PVwibGVmdFwiXHJcbiAgICAgICAgICAgICAgY2xvc2FibGU9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgIHZpc2libGU9e2RyYXdlclN0YXRlfVxyXG4gICAgICAgICAgICAgIG9uQ2xvc2U9e3RoaXMub25Ub2dnbGVEcmF3ZXIuYmluZCh0aGlzKX0+XHJcbiAgICAgICAgICAgICAge3RoaXMuTWFpbFNpZGVCYXIoKX1cclxuICAgICAgICAgICAgPC9EcmF3ZXI+XHJcblxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LW1vZHVsZS1zaWRlbmF2IGd4LWQtbm9uZSBneC1kLWxnLWZsZXhcIj5cclxuICAgICAgICAgICAge3RoaXMuTWFpbFNpZGVCYXIoKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtbW9kdWxlLWJveFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LW1vZHVsZS1ib3gtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ3gtZHJhd2VyLWJ0biBneC1kLWZsZXggZ3gtZC1sZy1ub25lXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1tZW51IGd4LWljb24tYnRuXCIgYXJpYS1sYWJlbD1cIk1lbnVcIlxyXG4gICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uVG9nZ2xlRHJhd2VyLmJpbmQodGhpcyl9Lz5cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPEFwcE1vZHVsZUhlYWRlciBwbGFjZWhvbGRlcj1cIlNlYXJjaCBtYWlsc1wiIHVzZXI9e3RoaXMuc3RhdGUudXNlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnVwZGF0ZVNlYXJjaC5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuc2VhcmNoTWFpbH0vPlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LW1vZHVsZS1ib3gtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtbW9kdWxlLWJveC10b3BiYXJcIj5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmN1cnJlbnRNYWlsID09PSBudWxsID9cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1mbGV4LXJvdyBneC1hbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5mb2xkZXJNYWlscy5sZW5ndGggPiAwID9cclxuICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja2JveCBjb2xvcj1cInByaW1hcnlcIiBjbGFzc05hbWU9XCJneC1pY29uLWJ0blwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRldGVybWluYXRlPXtzZWxlY3RlZE1haWxzID4gMCAmJiBzZWxlY3RlZE1haWxzIDwgZm9sZGVyTWFpbHMubGVuZ3RofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17c2VsZWN0ZWRNYWlscyA+IDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkFsbE1haWxTZWxlY3QuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiU2VsZWN0TWFpbFwiLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93biBvdmVybGF5PXt0aGlzLm9wdGlvbk1lbnUoKX0gcGxhY2VtZW50PVwiYm90dG9tUmlnaHRcIiB0cmlnZ2VyPXtbJ2NsaWNrJ119PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJneC1weC0yXCI+IHt0aGlzLnN0YXRlLm9wdGlvbk5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLWNoYXJ2bGV0LWRvd25cIi8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLWFycm93LWxlZnQgZ3gtaWNvbi1idG5cIiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Y3VycmVudE1haWw6IG51bGx9KVxyXG4gICAgICAgICAgICAgICAgICB9fS8+XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc0lEPVwidG9vbGJhci1zZXBhcmF0b3JcIi8+XHJcblxyXG4gICAgICAgICAgICAgICAgeyhzZWxlY3RlZE1haWxzID4gMCkgJiYgdGhpcy5nZXRNYWlsQWN0aW9ucygpfVxyXG5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAge2xvYWRlciA/XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWxvYWRlci12aWV3XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxDaXJjdWxhclByb2dyZXNzLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgOiB0aGlzLmRpc3BsYXlNYWlsKGN1cnJlbnRNYWlsLCBmb2xkZXJNYWlscywgbm9Db250ZW50Rm91bmRNZXNzYWdlKX1cclxuXHJcbiAgICAgICAgICAgICAgPENvbXBvc2VNYWlsIG9wZW49e2NvbXBvc2VNYWlsfSB1c2VyPXt1c2VyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsb3NlPXt0aGlzLmhhbmRsZVJlcXVlc3RDbG9zZS5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1haWxTZW5kPXt0aGlzLm9uTWFpbFNlbmQuYmluZCh0aGlzKX0vPlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7c2hvd01lc3NhZ2UgJiYgbWVzc2FnZS5pbmZvKDxzcGFuIGlkPVwibWVzc2FnZS1pZFwiPnthbGVydE1lc3NhZ2V9PC9zcGFuPiwgMywgdGhpcy5oYW5kbGVSZXF1ZXN0Q2xvc2UpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haWw7XHJcbiIsImV4cG9ydCBkZWZhdWx0IFtcclxuICB7XHJcbiAgICAnaWQnOiAwLFxyXG4gICAgJ2hhbmRsZSc6ICdub3RlJyxcclxuICAgICd0aXRsZSc6ICdQYXlQYWwnLFxyXG4gICAgJ2NvbG9yJzogJ3B1cnBsZSdcclxuICB9LFxyXG4gIHtcclxuICAgICdpZCc6IDEsXHJcbiAgICAnaGFuZGxlJzogJ3BheXBhbCcsXHJcbiAgICAndGl0bGUnOiAnVXB3b3JrJyxcclxuICAgICdjb2xvcic6ICdhbWJlcidcclxuICB9LFxyXG4gIHtcclxuICAgICdpZCc6IDIsXHJcbiAgICAnaGFuZGxlJzogJ2ludm9pY2UnLFxyXG4gICAgJ3RpdGxlJzogJ0luLWhvdXNlJyxcclxuICAgICdjb2xvcic6ICdncmVlbidcclxuICB9LFxyXG4gIHtcclxuICAgICdpZCc6IDMsXHJcbiAgICAnaGFuZGxlJzogJ2FtYXpvbicsXHJcbiAgICAndGl0bGUnOiAnQ2xpZW50cycsXHJcbiAgICAnY29sb3InOiAnbGlnaHQtYmx1ZSdcclxuICB9XHJcbl07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=