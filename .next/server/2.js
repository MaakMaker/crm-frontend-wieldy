exports.ids = [2];
exports.modules = {

/***/ "./app/components/AppModuleHeader/index.js":
/*!*************************************************!*\
  !*** ./app/components/AppModuleHeader/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const AppModuleHeader = props => {
  const {
    placeholder,
    onChange,
    value
  } = props;
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

/* harmony default export */ __webpack_exports__["default"] = (AppModuleHeader);
AppModuleHeader.defaultProps = {
  styleName: '',
  value: '',
  notification: true,
  apps: true
};

/***/ }),

/***/ "./app/components/mail/Compose/index.js":
/*!**********************************************!*\
  !*** ./app/components/mail/Compose/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _util_IntlMessages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../util/IntlMessages */ "./util/IntlMessages.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const {
  TextArea
} = antd__WEBPACK_IMPORTED_MODULE_1__["Input"];
const props = {
  name: 'file',
  action: '//jsonplaceholder.typicode.com/posts/',
  headers: {
    authorization: 'authorization-text'
  },

  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }

    if (info.file.status === 'done') {
      antd__WEBPACK_IMPORTED_MODULE_1__["message"].success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      antd__WEBPACK_IMPORTED_MODULE_1__["message"].error(`${info.file.name} file upload failed.`);
    }
  }

};

class ComposeMail extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor() {
    super();
    this.state = {
      to: '',
      cc: '',
      bcc: '',
      subject: '',
      message: ''
    };
  }

  render() {
    const {
      onMailSend,
      onClose,
      user
    } = this.props;
    const {
      to,
      subject,
      message
    } = this.state;
    return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
      onCancel: onClose,
      visible: this.props.open,
      title: __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_3__["default"], {
        id: "mail.title"
      }),
      closable: false,
      onOk: () => {
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
          'time': moment__WEBPACK_IMPORTED_MODULE_2___default()().format('DD MMM'),
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
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      placeholder: "To*",
      onChange: event => this.setState({
        to: event.target.value
      }),
      defaultValue: to,
      margin: "normal"
    })), __jsx("div", {
      className: "gx-form-group"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      placeholder: "Subject",
      onChange: event => this.setState({
        subject: event.target.value
      }),
      value: subject,
      margin: "normal"
    })), __jsx("div", {
      className: "gx-form-group"
    }, __jsx(TextArea, {
      placeholder: "Message",
      onChange: event => this.setState({
        message: event.target.value
      }),
      value: message,
      autosize: {
        minRows: 2,
        maxRows: 6
      },
      margin: "normal"
    })), __jsx("div", {
      className: "gx-form-group"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Upload"], props, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      type: "primary"
    }, __jsx("i", {
      className: "icon icon-attachment"
    }), " Attach File"))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ComposeMail);

/***/ }),

/***/ "./app/components/mail/MailDetail/index.js":
/*!*************************************************!*\
  !*** ./app/components/mail/MailDetail/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util_CustomScrollbars__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../util/CustomScrollbars */ "./util/CustomScrollbars.js");
/* harmony import */ var _routes_inbuiltApps_mail_data_labels__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../routes/inbuiltApps/mail/data/labels */ "./routes/inbuiltApps/mail/data/labels.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const options = ['Reply', 'Forward', 'Print'];

class MailDetail extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      showDetail: false
    });

    _defineProperty(this, "optionMenu", () => {
      return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
        id: "long-menu"
      }, options.map(option => __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
        key: option
      }, option)));
    });
  }

  render() {
    const {
      mail,
      onStartSelect,
      onImportantSelect
    } = this.props;
    return __jsx("div", {
      className: "gx-module-detail gx-mail-detail"
    }, __jsx(_util_CustomScrollbars__WEBPACK_IMPORTED_MODULE_2__["default"], {
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
    }, _routes_inbuiltApps_mail_data_labels__WEBPACK_IMPORTED_MODULE_3__["default"].map((label, index) => {
      return mail.labels.includes(label.id) && __jsx("div", {
        key: index,
        className: `gx-badge gx-text-white gx-bg-${label.color}`
      }, label.title);
    }))), __jsx("div", {
      className: "gx-mail-header-actions"
    }, __jsx("div", {
      onClick: () => {
        onStartSelect(mail);
      }
    }, mail.starred ? __jsx("i", {
      className: "icon icon-star gx-icon-btn"
    }) : __jsx("i", {
      className: "icon icon-star-o gx-icon-btn"
    })), __jsx("div", {
      onClick: () => {
        onImportantSelect(mail);
      }
    }, mail.important ? __jsx("i", {
      className: "icon icon-important gx-icon-btn"
    }) : __jsx("i", {
      className: "icon icon-important-o gx-icon-btn"
    })))), __jsx("hr", null), __jsx("div", {
      className: "gx-mail-user-info gx-ml-0 gx-mb-3"
    }, mail.from.avatar === '' ? __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
      className: "gx-avatar gx-bg-blue gx-size-40 gx-mr-3"
    }, " ", mail.from.name.charAt(0).toUpperCase()) : __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
      className: "gx-size-40 gx-mr-3",
      alt: "Alice Freeman",
      src: mail.from.avatar
    }), __jsx("div", {
      className: "gx-sender-name"
    }, mail.from.name, __jsx("div", {
      className: "gx-send-to gx-text-grey"
    }, "to me")), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Dropdown"], {
      trigger: ['click'],
      overlay: this.optionMenu()
    }, __jsx("span", {
      className: "gx-ml-auto"
    }, __jsx("i", {
      className: "icon icon-ellipse-v gx-icon-btn"
    })))), __jsx("div", {
      className: "gx-show-link",
      onClick: () => {
        this.setState({
          showDetail: !this.state.showDetail
        });
      }
    }, this.state.showDetail ? 'Hide Detail' : 'Show Detail'), this.state.showDetail && __jsx("div", {
      className: "gx-show-detail"
    }, __jsx("div", null, __jsx("strong", null, "From: "), mail.from.email), __jsx("div", null, __jsx("strong", null, " To: "), mail.to.map((to, index) => __jsx("span", null, index > 0 && ', ', " ", to.email))), __jsx("div", null, __jsx("strong", null, "Date: "), mail.time, " ")), __jsx("p", null, mail.message), mail.hasAttachments && __jsx("div", {
      className: "gx-attachment-block"
    }, __jsx("h3", null, "Attachments (", mail.attachments.length, ")"), __jsx("div", {
      className: "gx-attachment-row"
    }, mail.attachments.map((attachment, index) => __jsx("div", {
      className: "gx-attachment-col",
      key: index
    }, __jsx("img", {
      src: attachment.preview,
      alt: attachment.fileName
    }), __jsx("div", {
      className: "size"
    }, attachment.size))))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (MailDetail);

/***/ }),

/***/ "./app/components/mail/MailList/MailListItem/index.js":
/*!************************************************************!*\
  !*** ./app/components/mail/MailList/MailListItem/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _routes_inbuiltApps_mail_data_labels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../routes/inbuiltApps/mail/data/labels */ "./routes/inbuiltApps/mail/data/labels.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const MailListItem = ({
  mail,
  onMailSelect,
  onMailChecked,
  onStartSelect
}) => {
  return __jsx("div", {
    className: "gx-module-list-item gx-mail-cell"
  }, __jsx("div", {
    className: "gx-module-list-icon"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
    color: "primary",
    className: "gx-icon-btn",
    checked: mail.selected,
    onClick: event => {
      event.stopPropagation();
      onMailChecked(mail);
    },
    value: "SelectMail"
  }), __jsx("div", {
    onClick: () => {
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
    onClick: () => {
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
  }, _routes_inbuiltApps_mail_data_labels__WEBPACK_IMPORTED_MODULE_2__["default"].map((label, index) => {
    return mail.labels.includes(label.id) && __jsx("div", {
      key: index,
      className: `gx-badge gx-text-white gx-bg-${label.color}`
    }, label.title);
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (MailListItem);

/***/ }),

/***/ "./app/components/mail/MailList/index.js":
/*!***********************************************!*\
  !*** ./app/components/mail/MailList/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_CustomScrollbars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../util/CustomScrollbars */ "./util/CustomScrollbars.js");
/* harmony import */ var _MailListItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MailListItem */ "./app/components/mail/MailList/MailListItem/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const MailList = ({
  mails,
  onMailSelect,
  onMailChecked,
  onStartSelect
}) => {
  return __jsx("div", {
    className: "gx-module-list gx-mail-list"
  }, __jsx(_util_CustomScrollbars__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "gx-module-content-scroll"
  }, mails.map((mail, index) => __jsx(_MailListItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
    key: index,
    mail: mail,
    onMailSelect: onMailSelect,
    onMailChecked: onMailChecked,
    onStartSelect: onStartSelect
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (MailList);

/***/ }),

/***/ "./routes/inbuiltApps/Mail/data/filters.js":
/*!*************************************************!*\
  !*** ./routes/inbuiltApps/Mail/data/filters.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
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

/***/ }),

/***/ "./routes/inbuiltApps/Mail/data/folders.js":
/*!*************************************************!*\
  !*** ./routes/inbuiltApps/Mail/data/folders.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
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

/***/ }),

/***/ "./routes/inbuiltApps/Mail/data/labels.js":
/*!************************************************!*\
  !*** ./routes/inbuiltApps/Mail/data/labels.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
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

/***/ }),

/***/ "./routes/inbuiltApps/Mail/data/mails.js":
/*!***********************************************!*\
  !*** ./routes/inbuiltApps/Mail/data/mails.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
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

/***/ }),

/***/ "./routes/inbuiltApps/Mail/data/options.js":
/*!*************************************************!*\
  !*** ./routes/inbuiltApps/Mail/data/options.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
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

/***/ }),

/***/ "./routes/inbuiltApps/Mail/index.css":
/*!*******************************************!*\
  !*** ./routes/inbuiltApps/Mail/index.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./routes/inbuiltApps/Mail/index.js":
/*!******************************************!*\
  !*** ./routes/inbuiltApps/Mail/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util_CustomScrollbars__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/CustomScrollbars */ "./util/CustomScrollbars.js");
/* harmony import */ var _data_mails__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data/mails */ "./routes/inbuiltApps/Mail/data/mails.js");
/* harmony import */ var _data_folders__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data/folders */ "./routes/inbuiltApps/Mail/data/folders.js");
/* harmony import */ var _data_filters__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data/filters */ "./routes/inbuiltApps/Mail/data/filters.js");
/* harmony import */ var _data_labels__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./data/labels */ "./routes/inbuiltApps/Mail/data/labels.js");
/* harmony import */ var _data_options__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./data/options */ "./routes/inbuiltApps/Mail/data/options.js");
/* harmony import */ var _app_components_mail_MailList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../app/components/mail/MailList */ "./app/components/mail/MailList/index.js");
/* harmony import */ var _app_components_mail_Compose__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../app/components/mail/Compose */ "./app/components/mail/Compose/index.js");
/* harmony import */ var _app_components_AppModuleHeader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../app/components/AppModuleHeader */ "./app/components/AppModuleHeader/index.js");
/* harmony import */ var _app_components_mail_MailDetail__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../app/components/mail/MailDetail */ "./app/components/mail/MailDetail/index.js");
/* harmony import */ var _util_IntlMessages__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../util/IntlMessages */ "./util/IntlMessages.js");
/* harmony import */ var _app_components_CircularProgress__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../app/components/CircularProgress */ "./app/components/CircularProgress/index.js");
/* harmony import */ var _app_hoc_securedPage__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../app/hoc/securedPage */ "./app/hoc/securedPage/index.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./index.css */ "./routes/inbuiltApps/Mail/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_15__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


















class Mail extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor() {
    super();

    _defineProperty(this, "MailSideBar", () => {
      return __jsx("div", {
        className: "gx-module-side"
      }, __jsx("div", {
        className: "gx-module-side-header"
      }, __jsx("div", {
        className: "gx-module-logo"
      }, __jsx("i", {
        className: "icon icon-chat gx-mr-4"
      }), __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_12__["default"], {
        id: "sidebar.mail.mailbox"
      }))), __jsx("div", {
        className: "gx-module-side-content"
      }, __jsx(_util_CustomScrollbars__WEBPACK_IMPORTED_MODULE_2__["default"], {
        className: "gx-module-side-scroll"
      }, __jsx("div", {
        className: "gx-module-add-task"
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        type: "primary",
        className: "gx-btn-block",
        onClick: () => {
          this.setState({
            composeMail: true
          });
        }
      }, __jsx("i", {
        className: "icon icon-edit gx-mr-2"
      }), __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_12__["default"], {
        id: "sidebar.mail.compose"
      }))), __jsx("ul", {
        className: "gx-module-nav"
      }, this.getNavFolders(), __jsx("li", {
        className: "gx-module-nav-label"
      }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_12__["default"], {
        id: "sidebar.mail.filters"
      })), this.getNavFilters(), __jsx("li", {
        className: "gx-module-nav-label"
      }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_12__["default"], {
        id: "sidebar.mail.labels"
      })), this.getNavLabels()))));
    });

    _defineProperty(this, "onDeleteMail", () => {
      const mails = this.state.allMail.map(mail => mail.selected && mail.folder === this.state.selectedFolder ? _objectSpread(_objectSpread({}, mail), {}, {
        folder: 4,
        selected: false
      }) : mail);
      this.setState({
        alertMessage: 'Mail Deleted Successfully',
        showMessage: true,
        selectedMails: 0,
        allMail: mails,
        folderMails: mails.filter(mail => mail.folder === this.state.selectedFolder)
      });
    });

    _defineProperty(this, "getNavFolders", () => {
      return _data_folders__WEBPACK_IMPORTED_MODULE_4__["default"].map((folder, index) => __jsx("li", {
        key: index,
        onClick: () => {
          const filterMails = this.state.allMail.filter(mail => mail.folder === folder.id);
          this.setState({
            selectedFolder: folder.id,
            noContentFoundMessage: 'No Mail found in selected folder',
            currentMail: null,
            loader: true,
            folderMails: filterMails
          });
          setTimeout(() => {
            this.setState({
              loader: false
            });
          }, 1500);
        }
      }, __jsx("span", {
        className: `${this.state.selectedFolder === folder.id ? 'active gx-link' : 'gx-link'}`
      }, __jsx("i", {
        className: `icon icon-${folder.icon}`
      }), __jsx("span", null, folder.title))));
    });

    _defineProperty(this, "onFolderMenuItemSelect", e => {
      const id = +e.key;
      const mails = this.state.allMail.map(mail => mail.selected && mail.folder === this.state.selectedFolder ? _objectSpread(_objectSpread({}, mail), {}, {
        folder: id,
        selected: false
      }) : mail);
      this.setState({
        selectedMails: 0,
        allMail: mails,
        noContentFoundMessage: 'No Mail found in selected folder',
        alertMessage: 'Mail has been moved successfully',
        showMessage: true,
        folderMails: mails.filter(mail => mail.folder === this.state.selectedFolder)
      });
    });

    _defineProperty(this, "onLabelMenuItemSelect", e => {
      const id = +e.key;
      const mails = this.state.allMail.map(mail => {
        if (mail.selected && mail.folder === this.state.selectedFolder) {
          if (mail.labels.includes(id)) {
            return _objectSpread(_objectSpread({}, mail), {}, {
              labels: this.removeLabel(mail, id)
            });
          } else {
            return _objectSpread(_objectSpread({}, mail), {}, {
              labels: this.addLabel(mail, id)
            });
          }
        } else {
          return mail;
        }
      });
      this.setState({
        noContentFoundMessage: 'No Mail found in selected label',
        alertMessage: 'Label Updated Successfully',
        showMessage: true,
        allMail: mails,
        folderMails: mails.filter(mail => mail.folder === this.state.selectedFolder)
      });
    });

    _defineProperty(this, "handleRequestClose", () => {
      this.setState({
        composeMail: false,
        showMessage: false
      });
    });

    _defineProperty(this, "getNavFilters", () => {
      return _data_filters__WEBPACK_IMPORTED_MODULE_5__["default"].map((filter, index) => __jsx("li", {
        key: index,
        onClick: () => {
          const filterMails = this.state.allMail.filter(mail => {
            if (filter.id === 0 && mail.starred && mail.folder === this.state.selectedFolder) {
              return mail;
            } else if (filter.id === 1 && mail.important && mail.folder === this.state.selectedFolder) {
              return mail;
            }

            return null;
          });
          this.setState({
            noContentFoundMessage: 'No Mail found in selected filter',
            loader: true,
            folderMails: filterMails
          });
          setTimeout(() => {
            this.setState({
              loader: false
            });
          }, 1500);
        }
      }, __jsx("span", {
        className: "gx-link"
      }, __jsx("i", {
        className: `icon icon-${filter.icon}`
      }), __jsx("span", null, filter.title))));
    });

    _defineProperty(this, "onOptionMenuItemSelect", e => {
      switch (e.key) {
        case 'All':
          this.handleRequestClose();
          this.getAllMail();
          break;

        case 'None':
          this.handleRequestClose();
          this.getUnselectedAllMail();
          break;

        case 'Read':
          this.handleRequestClose();
          this.getReadMail();
          break;

        case 'Unread':
          this.handleRequestClose();
          this.getUnreadMail();
          break;

        case 'Starred':
          this.handleRequestClose();
          this.getStarredMail();
          break;

        case 'Unstarred':
          this.handleRequestClose();
          this.getUnStarredMail();
          break;

        case 'Important':
          this.handleRequestClose();
          this.getImportantMail();
          break;

        case 'Unimportant':
          this.handleRequestClose();
          this.getUnimportantMail();
          break;

        default:
          break;
      }
    });

    _defineProperty(this, "getAllMail", () => {
      let mails = this.state.allMail.map(mail => mail.folder === this.state.selectedFolder ? _objectSpread(_objectSpread({}, mail), {}, {
        selected: true
      }) : mail);
      this.setState({
        selectedMails: mails.length,
        allMail: mails,
        optionName: 'All',
        folderMails: mails.filter(mail => mail.folder === this.state.selectedFolder)
      });
    });

    _defineProperty(this, "getUnselectedAllMail", () => {
      let mails = this.state.allMail.map(mail => mail.folder === this.state.selectedFolder ? _objectSpread(_objectSpread({}, mail), {}, {
        selected: false
      }) : mail);
      this.setState({
        selectedMails: 0,
        allMail: mails,
        optionName: 'None',
        folderMails: mails.filter(mail => mail.folder === this.state.selectedFolder)
      });
    });

    _defineProperty(this, "getReadMail", () => {
      let selectedMail = 0;
      let mails = this.state.allMail.filter(mail => mail.folder === this.state.selectedFolder);
      mails = mails.map(mail => {
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
      this.setState({
        selectedMails: selectedMail,
        optionName: 'Read',
        folderMails: mails.filter(mail => mail.folder === this.state.selectedFolder)
      });
      return mails;
    });

    _defineProperty(this, "getUnreadMail", () => {
      let selectedMail = 0;
      let mails = this.state.allMail.filter(mail => mail.folder === this.state.selectedFolder);
      mails = mails.map(mail => {
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
      this.setState({
        selectedMails: selectedMail,
        optionName: 'Unread',
        folderMails: mails.filter(mail => mail.folder === this.state.selectedFolder)
      });
      return mails;
    });

    _defineProperty(this, "getStarredMail", () => {
      let selectedMail = 0;
      let mails = this.state.allMail.filter(mail => mail.folder === this.state.selectedFolder);
      mails = mails.map(mail => {
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
      this.setState({
        selectedMails: selectedMail,
        optionName: 'Starred',
        folderMails: mails.filter(mail => mail.folder === this.state.selectedFolder)
      });
      return mails;
    });

    _defineProperty(this, "getUnStarredMail", () => {
      let selectedMail = 0;
      let mails = this.state.allMail.filter(mail => mail.folder === this.state.selectedFolder && mail.folder === this.state.selectedFolder);
      mails = mails.map(mail => {
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
      this.setState({
        selectedMails: selectedMail,
        optionName: 'UnStarred',
        folderMails: mails.filter(mail => mail.folder === this.state.selectedFolder)
      });
      return mails;
    });

    _defineProperty(this, "getImportantMail", () => {
      let selectedMail = 0;
      let mails = this.state.allMail.filter(mail => mail.folder === this.state.selectedFolder && mail.folder === this.state.selectedFolder);
      mails = mails.map(mail => {
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
      this.setState({
        selectedMails: selectedMail,
        optionName: 'Important',
        folderMails: mails.filter(mail => mail.folder === this.state.selectedFolder)
      });
      return mails;
    });

    _defineProperty(this, "getUnimportantMail", () => {
      let selectedMail = 0;
      let mails = this.state.allMail.filter(mail => mail.folder === this.state.selectedFolder && mail.folder === this.state.selectedFolder);
      mails = mails.map(mail => {
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
      this.setState({
        selectedMails: selectedMail,
        optionName: 'Unimportant',
        noContentFoundMessage: 'No Mail found in selected Label',
        folderMails: mails.filter(mail => mail.folder === this.state.selectedFolder)
      });
      return mails;
    });

    _defineProperty(this, "getNavLabels", () => {
      return _data_labels__WEBPACK_IMPORTED_MODULE_6__["default"].map((label, index) => __jsx("li", {
        key: index,
        onClick: () => {
          const filterMails = this.state.allMail.filter(mail => mail.labels.includes(label.id) && mail.folder === this.state.selectedFolder);
          this.setState({
            loader: true,
            noContentFoundMessage: 'No Mail found in selected label',
            folderMails: filterMails
          });
          setTimeout(() => {
            this.setState({
              loader: false
            });
          }, 1500);
        }
      }, __jsx("span", {
        className: "gx-link"
      }, __jsx("i", {
        className: `icon icon-tag gx-text-${label.color}`
      }), __jsx("span", null, label.title))));
    });

    _defineProperty(this, "searchMail", searchText => {
      if (searchText === '') {
        this.setState({
          folderMails: this.state.allMail.filter(mail => !mail.deleted)
        });
      } else {
        const searchMails = this.state.allMail.filter(mail => !mail.deleted && mail.subject.toLowerCase().indexOf(searchText.toLowerCase()) > -1);
        this.setState({
          folderMails: searchMails
        });
      }
    });

    _defineProperty(this, "displayMail", (currentMail, folderMails, noContentFoundMessage) => {
      return __jsx("div", {
        className: "gx-module-box-column"
      }, currentMail === null ? folderMails.length === 0 ? __jsx("div", {
        className: "gx-no-content-found gx-text-light gx-d-flex gx-align-items-center gx-justify-content-center"
      }, noContentFoundMessage) : __jsx(_app_components_mail_MailList__WEBPACK_IMPORTED_MODULE_8__["default"], {
        mails: folderMails,
        onStartSelect: this.onStartSelect.bind(this),
        onMailSelect: this.onMailSelect.bind(this),
        onMailChecked: this.onMailChecked.bind(this)
      }) : __jsx(_app_components_mail_MailDetail__WEBPACK_IMPORTED_MODULE_11__["default"], {
        mail: currentMail,
        onStartSelect: this.onStartSelect.bind(this),
        onImportantSelect: this.onImportantSelect.bind(this)
      }));
    });

    _defineProperty(this, "getMailActions", () => {
      return __jsx("div", {
        className: "gx-flex-row gx-align-items-center"
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Dropdown"], {
        overlay: this.folderMenu(),
        placement: "bottomRight",
        trigger: ['click']
      }, __jsx("i", {
        className: "icon icon-folder gx-icon-btn"
      })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Dropdown"], {
        overlay: this.labelMenu(),
        placement: "bottomRight",
        trigger: ['click']
      }, __jsx("i", {
        className: "icon icon-tag gx-icon-btn"
      })), __jsx("span", {
        onClick: this.onDeleteMail.bind(this)
      }, __jsx("i", {
        className: "icon icon-trash gx-icon-btn"
      })));
    });

    _defineProperty(this, "optionMenu", () => __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
      id: "option-menu",
      onClick: this.onOptionMenuItemSelect.bind(this)
    }, _data_options__WEBPACK_IMPORTED_MODULE_7__["default"].map(option => __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
      key: option.title
    }, option.title))));

    _defineProperty(this, "folderMenu", () => __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
      id: "folder-menu",
      onClick: this.onFolderMenuItemSelect.bind(this)
    }, _data_folders__WEBPACK_IMPORTED_MODULE_4__["default"].map(folder => __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
      key: folder.id
    }, folder.title))));

    _defineProperty(this, "labelMenu", () => __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
      id: "label-menu",
      onClick: this.onLabelMenuItemSelect.bind(this)
    }, _data_labels__WEBPACK_IMPORTED_MODULE_6__["default"].map(label => __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
      key: label.id
    }, label.title))));

    this.state = {
      searchMail: '',
      noContentFoundMessage: 'No Mail found in selected folder',
      alertMessage: '',
      showMessage: false,
      drawerState: false,
      optionName: 'None',
      anchorEl: null,
      allMail: _data_mails__WEBPACK_IMPORTED_MODULE_3__["default"],
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
      folderMails: _data_mails__WEBPACK_IMPORTED_MODULE_3__["default"].filter(mail => mail.folder === 0)
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loader: false
      });
    }, 1500);
  }

  onMailChecked(data) {
    data.selected = !data.selected;
    let selectedMail = 0;
    const mails = this.state.folderMails.map(mail => {
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

  onAllMailSelect() {
    const selectAll = this.state.selectedMails <= this.state.folderMails.length;

    if (selectAll) {
      this.getAllMail();
    } else {
      this.getUnselectedAllMail();
    }
  }

  removeLabel(mail, label) {
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

  onStartSelect(data) {
    data.starred = !data.starred;
    this.setState({
      alertMessage: data.starred ? 'Mail Mark as Star' : 'Mail Remove as Star',
      showMessage: true,
      folderMails: this.state.folderMails.map(mail => mail.id === data.id ? data : mail)
    });
  }

  onImportantSelect(data) {
    data.important = !data.important;
    this.setState({
      alertMessage: data.important ? 'Mail Mark as Important' : 'Mail Remove as Important',
      showMessage: true,
      folderMails: this.state.folderMails.map(mail => mail.id === data.id ? data : mail)
    });
  }

  onMailSend(data) {
    this.setState({
      alertMessage: 'Mail Sent Successfully',
      showMessage: true,
      folderMails: this.state.allMail.concat(data),
      allMail: this.state.allMail.concat(data)
    });
  }

  onMailSelect(mail) {
    this.setState({
      loader: true,
      currentMail: mail
    });
    setTimeout(() => {
      this.setState({
        loader: false
      });
    }, 1500);
  }

  addLabel(mail, label) {
    if (this.state.currentMail !== null && mail.id === this.state.currentMail.id) {
      this.setState({
        currentMail: _objectSpread(_objectSpread({}, mail), {}, {
          labels: mail.labels.concat(label)
        })
      });
    }

    return mail.labels.concat(label);
  }

  updateSearch(evt) {
    this.setState({
      searchMail: evt.target.value
    });
    this.searchMail(evt.target.value);
  }

  onToggleDrawer() {
    this.setState({
      drawerState: !this.state.drawerState
    });
  }

  render() {
    const {
      selectedMails,
      loader,
      currentMail,
      drawerState,
      folderMails,
      composeMail,
      user,
      alertMessage,
      showMessage,
      noContentFoundMessage
    } = this.state;
    return __jsx("div", {
      className: "gx-main-content"
    }, __jsx("div", {
      className: "gx-app-module"
    }, __jsx("div", {
      className: "gx-d-block gx-d-lg-none"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Drawer"], {
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
    })), __jsx(_app_components_AppModuleHeader__WEBPACK_IMPORTED_MODULE_10__["default"], {
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
    }, this.state.folderMails.length > 0 ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
      color: "primary",
      className: "gx-icon-btn",
      indeterminate: selectedMails > 0 && selectedMails < folderMails.length,
      checked: selectedMails > 0,
      onChange: this.onAllMailSelect.bind(this),
      value: "SelectMail"
    }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Dropdown"], {
      overlay: this.optionMenu(),
      placement: "bottomRight",
      trigger: ['click']
    }, __jsx("div", null, __jsx("span", {
      className: "gx-px-2"
    }, " ", this.state.optionName), __jsx("i", {
      className: "icon icon-charvlet-down"
    })))) : null) : __jsx("i", {
      className: "icon icon-arrow-left gx-icon-btn",
      onClick: () => {
        this.setState({
          currentMail: null
        });
      }
    }), __jsx("div", {
      classID: "toolbar-separator"
    }), selectedMails > 0 && this.getMailActions()), loader ? __jsx("div", {
      className: "gx-loader-view"
    }, __jsx(_app_components_CircularProgress__WEBPACK_IMPORTED_MODULE_13__["default"], null)) : this.displayMail(currentMail, folderMails, noContentFoundMessage), __jsx(_app_components_mail_Compose__WEBPACK_IMPORTED_MODULE_9__["default"], {
      open: composeMail,
      user: user,
      onClose: this.handleRequestClose.bind(this),
      onMailSend: this.onMailSend.bind(this)
    })))), showMessage && antd__WEBPACK_IMPORTED_MODULE_1__["message"].info(__jsx("span", {
      id: "message-id"
    }, alertMessage), 3, this.handleRequestClose));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Mail);

/***/ }),

/***/ "./routes/inbuiltApps/mail/data/labels.js":
/*!************************************************!*\
  !*** ./routes/inbuiltApps/mail/data/labels.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
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

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9BcHBNb2R1bGVIZWFkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvbWFpbC9Db21wb3NlL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL21haWwvTWFpbERldGFpbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9tYWlsL01haWxMaXN0L01haWxMaXN0SXRlbS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9tYWlsL01haWxMaXN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL3JvdXRlcy9pbmJ1aWx0QXBwcy9NYWlsL2RhdGEvZmlsdGVycy5qcyIsIndlYnBhY2s6Ly8vLi9yb3V0ZXMvaW5idWlsdEFwcHMvTWFpbC9kYXRhL2ZvbGRlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vcm91dGVzL2luYnVpbHRBcHBzL01haWwvZGF0YS9sYWJlbHMuanMiLCJ3ZWJwYWNrOi8vLy4vcm91dGVzL2luYnVpbHRBcHBzL01haWwvZGF0YS9tYWlscy5qcyIsIndlYnBhY2s6Ly8vLi9yb3V0ZXMvaW5idWlsdEFwcHMvTWFpbC9kYXRhL29wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vcm91dGVzL2luYnVpbHRBcHBzL01haWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcm91dGVzL2luYnVpbHRBcHBzL21haWwvZGF0YS9sYWJlbHMuanMiXSwibmFtZXMiOlsiQXBwTW9kdWxlSGVhZGVyIiwicHJvcHMiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwidmFsdWUiLCJkZWZhdWx0UHJvcHMiLCJzdHlsZU5hbWUiLCJub3RpZmljYXRpb24iLCJhcHBzIiwiVGV4dEFyZWEiLCJJbnB1dCIsIm5hbWUiLCJhY3Rpb24iLCJoZWFkZXJzIiwiYXV0aG9yaXphdGlvbiIsImluZm8iLCJmaWxlIiwic3RhdHVzIiwiY29uc29sZSIsImxvZyIsImZpbGVMaXN0IiwibWVzc2FnZSIsInN1Y2Nlc3MiLCJlcnJvciIsIkNvbXBvc2VNYWlsIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInN0YXRlIiwidG8iLCJjYyIsImJjYyIsInN1YmplY3QiLCJyZW5kZXIiLCJvbk1haWxTZW5kIiwib25DbG9zZSIsInVzZXIiLCJvcGVuIiwiYXZhdGFyIiwiZW1haWwiLCJNb21lbnQiLCJmb3JtYXQiLCJ6SW5kZXgiLCJldmVudCIsInNldFN0YXRlIiwidGFyZ2V0IiwibWluUm93cyIsIm1heFJvd3MiLCJvcHRpb25zIiwiTWFpbERldGFpbCIsInNob3dEZXRhaWwiLCJtYXAiLCJvcHRpb24iLCJtYWlsIiwib25TdGFydFNlbGVjdCIsIm9uSW1wb3J0YW50U2VsZWN0IiwibGFiZWxzIiwibGFiZWwiLCJpbmRleCIsImluY2x1ZGVzIiwiaWQiLCJjb2xvciIsInRpdGxlIiwic3RhcnJlZCIsImltcG9ydGFudCIsImZyb20iLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsIm9wdGlvbk1lbnUiLCJ0aW1lIiwiaGFzQXR0YWNobWVudHMiLCJhdHRhY2htZW50cyIsImxlbmd0aCIsImF0dGFjaG1lbnQiLCJwcmV2aWV3IiwiZmlsZU5hbWUiLCJzaXplIiwiTWFpbExpc3RJdGVtIiwib25NYWlsU2VsZWN0Iiwib25NYWlsQ2hlY2tlZCIsInNlbGVjdGVkIiwic3RvcFByb3BhZ2F0aW9uIiwiTWFpbExpc3QiLCJtYWlscyIsIk1haWwiLCJQdXJlQ29tcG9uZW50IiwiY29tcG9zZU1haWwiLCJnZXROYXZGb2xkZXJzIiwiZ2V0TmF2RmlsdGVycyIsImdldE5hdkxhYmVscyIsImFsbE1haWwiLCJmb2xkZXIiLCJzZWxlY3RlZEZvbGRlciIsImFsZXJ0TWVzc2FnZSIsInNob3dNZXNzYWdlIiwic2VsZWN0ZWRNYWlscyIsImZvbGRlck1haWxzIiwiZmlsdGVyIiwiZm9sZGVycyIsImZpbHRlck1haWxzIiwibm9Db250ZW50Rm91bmRNZXNzYWdlIiwiY3VycmVudE1haWwiLCJsb2FkZXIiLCJzZXRUaW1lb3V0IiwiaWNvbiIsImUiLCJrZXkiLCJyZW1vdmVMYWJlbCIsImFkZExhYmVsIiwiZmlsdGVycyIsImhhbmRsZVJlcXVlc3RDbG9zZSIsImdldEFsbE1haWwiLCJnZXRVbnNlbGVjdGVkQWxsTWFpbCIsImdldFJlYWRNYWlsIiwiZ2V0VW5yZWFkTWFpbCIsImdldFN0YXJyZWRNYWlsIiwiZ2V0VW5TdGFycmVkTWFpbCIsImdldEltcG9ydGFudE1haWwiLCJnZXRVbmltcG9ydGFudE1haWwiLCJvcHRpb25OYW1lIiwic2VsZWN0ZWRNYWlsIiwicmVhZCIsInNlYXJjaFRleHQiLCJkZWxldGVkIiwic2VhcmNoTWFpbHMiLCJ0b0xvd2VyQ2FzZSIsImluZGV4T2YiLCJiaW5kIiwiZm9sZGVyTWVudSIsImxhYmVsTWVudSIsIm9uRGVsZXRlTWFpbCIsIm9uT3B0aW9uTWVudUl0ZW1TZWxlY3QiLCJvbkZvbGRlck1lbnVJdGVtU2VsZWN0Iiwib25MYWJlbE1lbnVJdGVtU2VsZWN0Iiwic2VhcmNoTWFpbCIsImRyYXdlclN0YXRlIiwiYW5jaG9yRWwiLCJjb21wb25lbnREaWRNb3VudCIsImRhdGEiLCJvbkFsbE1haWxTZWxlY3QiLCJzZWxlY3RBbGwiLCJzcGxpY2UiLCJjb25jYXQiLCJ1cGRhdGVTZWFyY2giLCJldnQiLCJvblRvZ2dsZURyYXdlciIsIk1haWxTaWRlQmFyIiwiZ2V0TWFpbEFjdGlvbnMiLCJkaXNwbGF5TWFpbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsTUFBTUEsZUFBZSxHQUFJQyxLQUFELElBQVc7QUFFakMsUUFBTTtBQUFDQyxlQUFEO0FBQWNDLFlBQWQ7QUFBd0JDO0FBQXhCLE1BQWlDSCxLQUF2QztBQUVBLFNBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNFO0FBQ0UsYUFBUyxFQUFDO0FBRFosS0FFRTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0U7QUFBTyxhQUFTLEVBQUMsdUJBQWpCO0FBQXlDLFFBQUksRUFB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WCxDQW5CYSxDQUFmLEUiLCJmaWxlIjoiMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IEFwcE1vZHVsZUhlYWRlciA9IChwcm9wcykgPT4ge1xyXG5cclxuICBjb25zdCB7cGxhY2Vob2xkZXIsIG9uQ2hhbmdlLCB2YWx1ZX0gPSBwcm9wcztcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtbW9kdWxlLWJveC1oZWFkZXItaW5uZXJcIj5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cImd4LXNlYXJjaC1iYXIgZ3gtbHQtaWNvbi1zZWFyY2gtYmFyLWxnIGd4LW1vZHVsZS1zZWFyY2gtYmFyIGd4LWQtbm9uZSBneC1kLXNtLWJsb2NrXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1mb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiYW50LWlucHV0IGd4LWJvcmRlci0wXCIgdHlwZT1cInNlYXJjaFwiIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cclxuICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfS8+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJneC1zZWFyY2gtaWNvbiBneC1wb2ludGVyXCI+PGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLXNlYXJjaFwiLz48L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LW1vZHVsZS1ib3gtaGVhZGVyLXJpZ2h0XCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJneC1mcy14bFwiPiA8aVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpY29uIGljb24tYXBwcyBneC1pY29uLWJ0blwiLz48L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ3gtZnMteGxcIj48aVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaWNvbiBpY29uLW5vdGlmaWNhdGlvbiBneC1pY29uLWJ0blwiLz48L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwTW9kdWxlSGVhZGVyO1xyXG5cclxuQXBwTW9kdWxlSGVhZGVyLmRlZmF1bHRQcm9wcyA9IHtcclxuICBzdHlsZU5hbWU6ICcnLFxyXG4gIHZhbHVlOiAnJyxcclxuICBub3RpZmljYXRpb246IHRydWUsXHJcbiAgYXBwczogdHJ1ZVxyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7QnV0dG9uLCBJbnB1dCwgbWVzc2FnZSwgTW9kYWwsIFVwbG9hZH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IE1vbWVudCBmcm9tIFwibW9tZW50XCI7XHJcblxyXG5pbXBvcnQgSW50bE1lc3NhZ2VzIGZyb20gXCIuLi8uLi8uLi8uLi91dGlsL0ludGxNZXNzYWdlc1wiO1xyXG5cclxuY29uc3Qge1RleHRBcmVhfSA9IElucHV0O1xyXG5cclxuY29uc3QgcHJvcHMgPSB7XHJcbiAgbmFtZTogJ2ZpbGUnLFxyXG4gIGFjdGlvbjogJy8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0cy8nLFxyXG4gIGhlYWRlcnM6IHtcclxuICAgIGF1dGhvcml6YXRpb246ICdhdXRob3JpemF0aW9uLXRleHQnLFxyXG4gIH0sXHJcbiAgb25DaGFuZ2UoaW5mbykge1xyXG4gICAgaWYgKGluZm8uZmlsZS5zdGF0dXMgIT09ICd1cGxvYWRpbmcnKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGluZm8uZmlsZSwgaW5mby5maWxlTGlzdCk7XHJcbiAgICB9XHJcbiAgICBpZiAoaW5mby5maWxlLnN0YXR1cyA9PT0gJ2RvbmUnKSB7XHJcbiAgICAgIG1lc3NhZ2Uuc3VjY2VzcyhgJHtpbmZvLmZpbGUubmFtZX0gZmlsZSB1cGxvYWRlZCBzdWNjZXNzZnVsbHlgKTtcclxuICAgIH0gZWxzZSBpZiAoaW5mby5maWxlLnN0YXR1cyA9PT0gJ2Vycm9yJykge1xyXG4gICAgICBtZXNzYWdlLmVycm9yKGAke2luZm8uZmlsZS5uYW1lfSBmaWxlIHVwbG9hZCBmYWlsZWQuYCk7XHJcbiAgICB9XHJcbiAgfSxcclxufTtcclxuXHJcbmNsYXNzIENvbXBvc2VNYWlsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICB0bzogJycsXHJcbiAgICAgIGNjOiAnJyxcclxuICAgICAgYmNjOiAnJyxcclxuICAgICAgc3ViamVjdDogJycsXHJcbiAgICAgIG1lc3NhZ2U6ICcnLFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3Qge29uTWFpbFNlbmQsIG9uQ2xvc2UsIHVzZXJ9ID0gdGhpcy5wcm9wcztcclxuICAgIGNvbnN0IHt0bywgc3ViamVjdCwgbWVzc2FnZX0gPSB0aGlzLnN0YXRlO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPE1vZGFsIG9uQ2FuY2VsPXtvbkNsb3NlfSB2aXNpYmxlPXt0aGlzLnByb3BzLm9wZW59XHJcbiAgICAgICAgICAgICB0aXRsZT17PEludGxNZXNzYWdlcyBpZD1cIm1haWwudGl0bGVcIi8+fVxyXG4gICAgICAgICAgICAgY2xvc2FibGU9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgb25Paz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICBpZiAodG8gPT09ICcnKVxyXG4gICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgb25DbG9zZSgpO1xyXG4gICAgICAgICAgICAgICBvbk1haWxTZW5kKFxyXG4gICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICdpZCc6ICcxNTQ1M2EwNmMwOGZiMDIxNzc2JyxcclxuICAgICAgICAgICAgICAgICAgICdmcm9tJzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAnbmFtZSc6IHVzZXIubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgJ2F2YXRhcic6IHVzZXIuYXZhdGFyLFxyXG4gICAgICAgICAgICAgICAgICAgICAnZW1haWwnOiB1c2VyLmVtYWlsXHJcbiAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgJ3RvJzogW1xyXG4gICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgJ25hbWUnOiB0byxcclxuICAgICAgICAgICAgICAgICAgICAgICAnZW1haWwnOiB0b1xyXG4gICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgJ3N1YmplY3QnOiBzdWJqZWN0LFxyXG4gICAgICAgICAgICAgICAgICAgJ21lc3NhZ2UnOiBtZXNzYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgJ3RpbWUnOiBNb21lbnQoKS5mb3JtYXQoJ0REIE1NTScpLFxyXG4gICAgICAgICAgICAgICAgICAgJ3JlYWQnOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICdzdGFycmVkJzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAnaW1wb3J0YW50JzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAnaGFzQXR0YWNobWVudHMnOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICdmb2xkZXInOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgJ3NlbGVjdGVkJzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAnbGFiZWxzJzogW10sXHJcbiAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgc3R5bGU9e3t6SW5kZXg6IDI2MDB9fT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlRvKlwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHRoaXMuc2V0U3RhdGUoe3RvOiBldmVudC50YXJnZXQudmFsdWV9KX1cclxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXt0b31cclxuICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCIvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU3ViamVjdFwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHRoaXMuc2V0U3RhdGUoe3N1YmplY3Q6IGV2ZW50LnRhcmdldC52YWx1ZX0pfVxyXG4gICAgICAgICAgICB2YWx1ZT17c3ViamVjdH1cclxuICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1mb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICA8VGV4dEFyZWFcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJNZXNzYWdlXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gdGhpcy5zZXRTdGF0ZSh7bWVzc2FnZTogZXZlbnQudGFyZ2V0LnZhbHVlfSl9XHJcbiAgICAgICAgICAgIHZhbHVlPXttZXNzYWdlfVxyXG4gICAgICAgICAgICBhdXRvc2l6ZT17e21pblJvd3M6IDIsIG1heFJvd3M6IDZ9fVxyXG4gICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIi8+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtZm9ybS1ncm91cFwiPlxyXG5cclxuICAgICAgICAgIDxVcGxvYWQgey4uLnByb3BzfT5cclxuICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1hdHRhY2htZW50XCIvPiBBdHRhY2ggRmlsZVxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvVXBsb2FkPlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb21wb3NlTWFpbDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0F2YXRhciwgRHJvcGRvd24sIE1lbnV9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBDdXN0b21TY3JvbGxiYXJzIGZyb20gJy4uLy4uLy4uLy4uL3V0aWwvQ3VzdG9tU2Nyb2xsYmFycydcclxuXHJcbmltcG9ydCBsYWJlbHMgZnJvbSBcIi4uLy4uLy4uLy4uL3JvdXRlcy9pbmJ1aWx0QXBwcy9tYWlsL2RhdGEvbGFiZWxzXCI7XHJcblxyXG5jb25zdCBvcHRpb25zID0gW1xyXG4gICdSZXBseScsXHJcbiAgJ0ZvcndhcmQnLFxyXG4gICdQcmludCcsXHJcbl07XHJcblxyXG5jbGFzcyBNYWlsRGV0YWlsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgc3RhdGUgPSB7XHJcbiAgICBzaG93RGV0YWlsOiBmYWxzZVxyXG4gIH07XHJcblxyXG4gIG9wdGlvbk1lbnUgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TWVudSBpZD1cImxvbmctbWVudVwiPlxyXG4gICAgICAgIHtvcHRpb25zLm1hcChvcHRpb24gPT5cclxuICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PXtvcHRpb259PlxyXG4gICAgICAgICAgICB7b3B0aW9ufVxyXG4gICAgICAgICAgPC9NZW51Lkl0ZW0+LFxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvTWVudT4pXHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3Qge21haWwsIG9uU3RhcnRTZWxlY3QsIG9uSW1wb3J0YW50U2VsZWN0fSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1tb2R1bGUtZGV0YWlsIGd4LW1haWwtZGV0YWlsXCI+XHJcbiAgICAgICAgPEN1c3RvbVNjcm9sbGJhcnMgY2xhc3NOYW1lPVwiZ3gtbW9kdWxlLWNvbnRlbnQtc2Nyb2xsXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LW1haWwtZGV0YWlsLWlubmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtbWFpbC1oZWFkZXJcIj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1tYWlsLWhlYWRlci1jb250ZW50IGd4LWNvbCBneC1wbC0wXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LXN1YmplY3RcIj5cclxuICAgICAgICAgICAgICAgICAge21haWwuc3ViamVjdH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtbGFiZWxzXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtsYWJlbHMubWFwKChsYWJlbCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKG1haWwubGFiZWxzKS5pbmNsdWRlcyhsYWJlbC5pZCkgJiYgPGRpdiBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGd4LWJhZGdlIGd4LXRleHQtd2hpdGUgZ3gtYmctJHtsYWJlbC5jb2xvcn1gfT57bGFiZWwudGl0bGV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1tYWlsLWhlYWRlci1hY3Rpb25zXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIG9uU3RhcnRTZWxlY3QobWFpbCk7XHJcbiAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAge21haWwuc3RhcnJlZCA/XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLXN0YXIgZ3gtaWNvbi1idG5cIi8+IDpcclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGljb24tc3Rhci1vIGd4LWljb24tYnRuXCIvPlxyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgb25JbXBvcnRhbnRTZWxlY3QobWFpbCk7XHJcbiAgICAgICAgICAgICAgICB9fT5cclxuXHJcbiAgICAgICAgICAgICAgICAgIHttYWlsLmltcG9ydGFudCA/XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLWltcG9ydGFudCBneC1pY29uLWJ0blwiLz5cclxuICAgICAgICAgICAgICAgICAgICA6IDxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1pbXBvcnRhbnQtbyBneC1pY29uLWJ0blwiLz5cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGhyLz5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtbWFpbC11c2VyLWluZm8gZ3gtbWwtMCBneC1tYi0zXCI+XHJcblxyXG4gICAgICAgICAgICAgIHttYWlsLmZyb20uYXZhdGFyID09PSAnJyA/XHJcbiAgICAgICAgICAgICAgICA8QXZhdGFyXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImd4LWF2YXRhciBneC1iZy1ibHVlIGd4LXNpemUtNDAgZ3gtbXItM1wiPiB7bWFpbC5mcm9tLm5hbWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9PC9BdmF0YXI+IDpcclxuICAgICAgICAgICAgICAgIDxBdmF0YXIgY2xhc3NOYW1lPVwiZ3gtc2l6ZS00MCBneC1tci0zXCIgYWx0PVwiQWxpY2UgRnJlZW1hblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17bWFpbC5mcm9tLmF2YXRhcn0vPlxyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1zZW5kZXItbmFtZVwiPnttYWlsLmZyb20ubmFtZX1cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtc2VuZC10byBneC10ZXh0LWdyZXlcIj50byBtZTwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8RHJvcGRvd24gdHJpZ2dlcj17WydjbGljayddfSBvdmVybGF5PXt0aGlzLm9wdGlvbk1lbnUoKX0+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJneC1tbC1hdXRvXCI+PGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLWVsbGlwc2UtdiBneC1pY29uLWJ0blwiLz48L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9Ecm9wZG93bj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1zaG93LWxpbmtcIiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2hvd0RldGFpbDogIXRoaXMuc3RhdGUuc2hvd0RldGFpbH0pO1xyXG4gICAgICAgICAgICB9fT57dGhpcy5zdGF0ZS5zaG93RGV0YWlsID8gJ0hpZGUgRGV0YWlsJyA6ICdTaG93IERldGFpbCd9PC9kaXY+XHJcbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLnNob3dEZXRhaWwgJiYgKDxkaXYgY2xhc3NOYW1lPVwiZ3gtc2hvdy1kZXRhaWxcIj5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPHN0cm9uZz5Gcm9tOiA8L3N0cm9uZz57bWFpbC5mcm9tLmVtYWlsfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8c3Ryb25nPiBUbzogPC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIG1haWwudG8ubWFwKCh0bywgaW5kZXgpID0+IDxzcGFuPntpbmRleCA+IDAgJiYgJywgJ30ge3RvLmVtYWlsfTwvc3Bhbj4pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj48c3Ryb25nPkRhdGU6IDwvc3Ryb25nPnttYWlsLnRpbWV9IDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj4pfVxyXG5cclxuXHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgIHttYWlsLm1lc3NhZ2V9XHJcbiAgICAgICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgICAgIHttYWlsLmhhc0F0dGFjaG1lbnRzICYmXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtYXR0YWNobWVudC1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgIDxoMz5BdHRhY2htZW50cyAoe21haWwuYXR0YWNobWVudHMubGVuZ3RofSk8L2gzPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtYXR0YWNobWVudC1yb3dcIj5cclxuICAgICAgICAgICAgICAgIHttYWlsLmF0dGFjaG1lbnRzLm1hcCgoYXR0YWNobWVudCwgaW5kZXgpID0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtYXR0YWNobWVudC1jb2xcIiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YXR0YWNobWVudC5wcmV2aWV3fSBhbHQ9e2F0dGFjaG1lbnQuZmlsZU5hbWV9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpemVcIj57YXR0YWNobWVudC5zaXplfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0N1c3RvbVNjcm9sbGJhcnM+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haWxEZXRhaWw7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtBdmF0YXIsIENoZWNrYm94fSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuaW1wb3J0IGxhYmVscyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vcm91dGVzL2luYnVpbHRBcHBzL21haWwvZGF0YS9sYWJlbHNcIjtcclxuXHJcbmNvbnN0IE1haWxMaXN0SXRlbSA9ICh7bWFpbCwgb25NYWlsU2VsZWN0LCBvbk1haWxDaGVja2VkLCBvblN0YXJ0U2VsZWN0fSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LW1vZHVsZS1saXN0LWl0ZW0gZ3gtbWFpbC1jZWxsXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtbW9kdWxlLWxpc3QtaWNvblwiPlxyXG4gICAgICAgIDxDaGVja2JveCBjb2xvcj1cInByaW1hcnlcIiBjbGFzc05hbWU9XCJneC1pY29uLWJ0blwiXHJcbiAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e21haWwuc2VsZWN0ZWR9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIG9uTWFpbENoZWNrZWQobWFpbClcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgdmFsdWU9XCJTZWxlY3RNYWlsXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgb25TdGFydFNlbGVjdChtYWlsKTtcclxuICAgICAgICB9fT5cclxuICAgICAgICAgIHttYWlsLnN0YXJyZWQgP1xyXG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJneC1pY29uLWJ0biBpY29uIGljb24tc3RhclwiLz4gOlxyXG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJneC1pY29uLWJ0biBpY29uIGljb24tc3Rhci1vXCIvPlxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1tbC0yXCI+XHJcbiAgICAgICAgICB7bWFpbC5mcm9tLmF2YXRhciA9PT0gJycgP1xyXG4gICAgICAgICAgICA8QXZhdGFyIGNsYXNzTmFtZT1cImd4LWF2YXRhciBneC1iZy1ibHVlIGd4LXNpemUtNDBcIj4ge21haWwuZnJvbS5uYW1lLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfTwvQXZhdGFyPiA6XHJcbiAgICAgICAgICAgIDxBdmF0YXIgY2xhc3NOYW1lPVwiZ3gtc2l6ZS00MFwiIGFsdD1cIkFsaWNlIEZyZWVtYW5cIlxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17bWFpbC5mcm9tLmF2YXRhcn0vPlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtbWFpbC1saXN0LWluZm9cIiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgb25NYWlsU2VsZWN0KG1haWwpO1xyXG4gICAgICB9fT5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1tb2R1bGUtbGlzdC1jb250ZW50XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LW1haWwtdXNlci1kZXNcIj5cclxuXHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImd4LXNlbmRlci1uYW1lXCI+e21haWwuZnJvbS5uYW1lfTwvc3Bhbj5cclxuXHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImd4LXRvb2xiYXItc2VwYXJhdG9yXCI+Jm5ic3A7PC9zcGFuPlxyXG5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ3gtZC1pbmxpbmUtYmxvY2sgZ3gtdGV4dC10cnVuY2F0ZSBneC1zZW5kLXN1YmplY3RcIj57bWFpbC5zdWJqZWN0fTwvc3Bhbj5cclxuXHJcbiAgICAgICAgICAgIHttYWlsLmhhc0F0dGFjaG1lbnRzICYmXHJcblxyXG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGljb24tYXR0YWNobWVudFwiLz59XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LXRpbWVcIj57bWFpbC50aW1lfTwvZGl2PlxyXG5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LW1lc3NhZ2VcIj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZ3gtdGV4dC10cnVuY2F0ZVwiPiB7bWFpbC5tZXNzYWdlfTwvcD5cclxuXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtbGFiZWxzXCI+XHJcbiAgICAgICAgICAgIHtsYWJlbHMubWFwKChsYWJlbCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gKG1haWwubGFiZWxzKS5pbmNsdWRlcyhsYWJlbC5pZCkgJiZcclxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPXtgZ3gtYmFkZ2UgZ3gtdGV4dC13aGl0ZSBneC1iZy0ke2xhYmVsLmNvbG9yfWB9PntsYWJlbC50aXRsZX08L2Rpdj5cclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haWxMaXN0SXRlbTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ3VzdG9tU2Nyb2xsYmFycyBmcm9tICcuLi8uLi8uLi8uLi91dGlsL0N1c3RvbVNjcm9sbGJhcnMnXHJcblxyXG5pbXBvcnQgTWFpbExpc3RJdGVtIGZyb20gXCIuL01haWxMaXN0SXRlbVwiO1xyXG5cclxuY29uc3QgTWFpbExpc3QgPSAoe21haWxzLCBvbk1haWxTZWxlY3QsIG9uTWFpbENoZWNrZWQsIG9uU3RhcnRTZWxlY3R9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtbW9kdWxlLWxpc3QgZ3gtbWFpbC1saXN0XCI+XHJcbiAgICAgIDxDdXN0b21TY3JvbGxiYXJzIGNsYXNzTmFtZT1cImd4LW1vZHVsZS1jb250ZW50LXNjcm9sbFwiPlxyXG4gICAgICAgIHttYWlscy5tYXAoKG1haWwsIGluZGV4KSA9PlxyXG4gICAgICAgICAgPE1haWxMaXN0SXRlbSBrZXk9e2luZGV4fSBtYWlsPXttYWlsfSBvbk1haWxTZWxlY3Q9e29uTWFpbFNlbGVjdH0gb25NYWlsQ2hlY2tlZD17b25NYWlsQ2hlY2tlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25TdGFydFNlbGVjdD17b25TdGFydFNlbGVjdH0vPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvQ3VzdG9tU2Nyb2xsYmFycz5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haWxMaXN0O1xyXG4iLCJleHBvcnQgZGVmYXVsdCBbXHJcbiAge1xyXG4gICAgJ2lkJzogMCxcclxuICAgICdoYW5kbGUnOiAnc3RhcnJlZCcsXHJcbiAgICAndGl0bGUnOiAnU3RhcnJlZCcsXHJcbiAgICAnaWNvbic6ICdzdGFyJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgJ2lkJzogMSxcclxuICAgICdoYW5kbGUnOiAnaW1wb3J0YW50JyxcclxuICAgICd0aXRsZSc6ICdJbXBvcnRhbnQnLFxyXG4gICAgJ2ljb24nOiAndGFnJ1xyXG4gIH1cclxuXTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgW1xyXG4gIHtcclxuICAgICdpZCc6IDAsXHJcbiAgICAnaGFuZGxlJzogJ2luYm94JyxcclxuICAgICd0aXRsZSc6ICdJbmJveCcsXHJcbiAgICAnaWNvbic6ICdpbmJveCdcclxuICB9LFxyXG4gIHtcclxuICAgICdpZCc6IDEsXHJcbiAgICAnaGFuZGxlJzogJ3NlbnQnLFxyXG4gICAgJ3RpdGxlJzogJ1NlbnQnLFxyXG4gICAgJ2ljb24nOiAnc2VudCdcclxuICB9LFxyXG4gIHtcclxuICAgICdpZCc6IDIsXHJcbiAgICAnaGFuZGxlJzogJ2RyYWZ0cycsXHJcbiAgICAndGl0bGUnOiAnRHJhZnRzJyxcclxuICAgICdpY29uJzogJ2RyYWZ0J1xyXG4gIH0sXHJcbiAge1xyXG4gICAgJ2lkJzogMyxcclxuICAgICdoYW5kbGUnOiAnc3BhbScsXHJcbiAgICAndGl0bGUnOiAnU3BhbScsXHJcbiAgICAnaWNvbic6ICdzcGFtJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgJ2lkJzogNCxcclxuICAgICdoYW5kbGUnOiAndHJhc2gnLFxyXG4gICAgJ3RpdGxlJzogJ1RyYXNoJyxcclxuICAgICdpY29uJzogJ3RyYXNoJ1xyXG4gIH1cclxuXTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgW1xyXG4gIHtcclxuICAgICdpZCc6IDAsXHJcbiAgICAnaGFuZGxlJzogJ25vdGUnLFxyXG4gICAgJ3RpdGxlJzogJ1BheVBhbCcsXHJcbiAgICAnY29sb3InOiAncHVycGxlJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgJ2lkJzogMSxcclxuICAgICdoYW5kbGUnOiAncGF5cGFsJyxcclxuICAgICd0aXRsZSc6ICdVcHdvcmsnLFxyXG4gICAgJ2NvbG9yJzogJ2FtYmVyJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgJ2lkJzogMixcclxuICAgICdoYW5kbGUnOiAnaW52b2ljZScsXHJcbiAgICAndGl0bGUnOiAnSW4taG91c2UnLFxyXG4gICAgJ2NvbG9yJzogJ2dyZWVuJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgJ2lkJzogMyxcclxuICAgICdoYW5kbGUnOiAnYW1hem9uJyxcclxuICAgICd0aXRsZSc6ICdDbGllbnRzJyxcclxuICAgICdjb2xvcic6ICdsaWdodC1ibHVlJ1xyXG4gIH1cclxuXTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgW1xyXG4gIHtcclxuICAgICdpZCc6ICcxNTQ1M2JhNjBkM2JhYTVkYWFmJyxcclxuICAgICdmcm9tJzoge1xyXG4gICAgICAnbmFtZSc6ICdEb21uaWMgSGFycmlzJyxcclxuICAgICAgJ2F2YXRhcic6ICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMTUweDE1MCcsXHJcbiAgICAgICdlbWFpbCc6ICdkb21uaWNoYXJyaXNAZXhhbXBsZS5jb20nXHJcbiAgICB9LFxyXG4gICAgJ3RvJzogW1xyXG4gICAgICB7XHJcbiAgICAgICAgJ25hbWUnOiAnbWUnLFxyXG4gICAgICAgICdlbWFpbCc6ICdyb2JlcnQuam9obnNvbkBleGFtcGxlLmNvbSdcclxuICAgICAgfSwge1xyXG4gICAgICAgICduYW1lJzogJ21lJyxcclxuICAgICAgICAnZW1haWwnOiAncm9iZXJ0LmpvaG5zb25AZXhhbXBsZS5jb20nXHJcbiAgICAgIH1cclxuICAgIF0sXHJcbiAgICAnc3ViamVjdCc6ICdGdXNjZSBhIGxpYmVybyBwZWxsZW50ZXNxdWUnLFxyXG4gICAgJ21lc3NhZ2UnOiAnTWFlY2VuYXMgc2VtIGFyY3UsIHNjZWxlcmlzcXVlIGluIG9kaW8gdmVsLCBwb3J0dGl0b3IgZGlnbmlzc2ltIHB1cnVzLiBTZWQgdmVoaWN1bGEgY29tbW9kbyBwb3J0YS4gRXRpYW0gbmVjIGRpY3R1bSBtYXVyaXMuIFV0IGltcGVyZGlldCBtYXhpbXVzIG9yY2kgdml0YWUgb3JuYXJlLiBOdWxsYW0gZXQgbGliZXJvIHNpdCBhbWV0IHRlbGx1cyB1bHRyaWNpZXMgcnV0cnVtIGV0IHNpdCBhbWV0IG5pc2wuIFBlbGxlbnRlc3F1ZSBjb25kaW1lbnR1bSBkaWFtIHNlZCBoZW5kcmVyaXQgZmFjaWxpc2lzLiBTdXNwZW5kaXNzZSBiaWJlbmR1bSBjb252YWxsaXMgcXVhbSwgc2l0IGFtZXQgcnV0cnVtIG5pc2kgcHVsdmluYXIgZXQuIE51bmMgcGxhY2VyYXQsIGRpYW0gYXQgc2NlbGVyaXNxdWUgdml2ZXJyYSwgbWkgdmVsaXQgYXVjdG9yIG5pYmgsIGF0IHJob25jdXMgZXJhdCBleCB2aXRhZSBmZWxpcy4gSW50ZWdlciBzZWQgYW50ZSBlZ2V0IGVzdCBydXRydW0gdWx0cmljZXMgdXQgbm9uIGlwc3VtLicsXHJcbiAgICAncmVhZCc6IHRydWUsXHJcbiAgICAnc3RhcnJlZCc6IGZhbHNlLFxyXG4gICAgJ2ltcG9ydGFudCc6IGZhbHNlLFxyXG4gICAgJ2hhc0F0dGFjaG1lbnRzJzogZmFsc2UsXHJcbiAgICAnbGFiZWxzJzogW1xyXG4gICAgICAzLFxyXG4gICAgICAyXHJcbiAgICBdLFxyXG4gICAgJ3NlbGVjdGVkJzogZmFsc2UsXHJcbiAgICAnZm9sZGVyJzogMFxyXG4gIH0sXHJcbiAge1xyXG4gICAgJ2lkJzogJzE1NDUzYTA2YzA4ZmIwMjE3NzYnLFxyXG4gICAgJ2Zyb20nOiB7XHJcbiAgICAgICduYW1lJzogJ0dhcnJ5IFNvYmFycycsXHJcbiAgICAgICdhdmF0YXInOiAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzE1MHgxNTAnLFxyXG4gICAgICAnZW1haWwnOiAnZGFuaWVsbGVvYnJpZW5AZXhhbXBsZS5jb20nXHJcbiAgICB9LFxyXG4gICAgJ3RvJzogW1xyXG4gICAgICB7XHJcbiAgICAgICAgJ25hbWUnOiAnbWUnLFxyXG4gICAgICAgICdlbWFpbCc6ICdyb2JlcnQuam9obnNvbkBleGFtcGxlLmNvbSdcclxuICAgICAgfVxyXG4gICAgXSxcclxuICAgICdzdWJqZWN0JzogJ051bGxhbSBpZCBleCBhdCBhdWd1ZSBwaGFyZXRyYSB2ZXN0aWJ1bHVtIGVnZXQgaWQgbWF1cmlzLicsXHJcbiAgICAnbWVzc2FnZSc6ICdDcmFzIGJpYmVuZHVtIHRvcnRvciB0b3J0b3IsIGV1IGx1Y3R1cyByaXN1cyBncmF2aWRhIHV0LiBTdXNwZW5kaXNzZSBuaXNpIHRvcnRvciwgY29uc2VxdWF0IGF0IHBlbGxlbnRlc3F1ZSBxdWlzLCBkYXBpYnVzIHZlbCByaXN1cy4gUHJhZXNlbnQgYWxpcXVhbSBzaXQgYW1ldCBkaWFtIHF1aXMgbHVjdHVzLiBOdWxsYSBmYWNpbGlzaS4gTWFlY2VuYXMgaWQgbW9sZXN0aWUgdG9ydG9yLiBOdWxsYSBlZ2V0IHByZXRpdW0gbnVsbGEuIEV0aWFtIGNvbnNlcXVhdCBkaWN0dW0gdmVsaXQsIGF0IGVnZXN0YXMgbGFjdXMgbGFvcmVldCBhYy4gVXQgZmFjaWxpc2lzIG1hc3NhIHZlbCBtaSBmcmluZ2lsbGEsIG5vbiBibGFuZGl0IGVyb3MgZGljdHVtLiBJbnRlZ2VyIGluIHRlbGx1cyB2aXRhZSBuaXNpIHRpbmNpZHVudCBwdWx2aW5hci4gTWFlY2VuYXMgYWMgYW50ZSB1dCBmZWxpcyBmZXVnaWF0IG9ybmFyZSBpZCBhIHF1YW0uIFF1aXNxdWUgZmV1Z2lhdCBhbnRlIHF1aXMgb3JuYXJlIHBsYWNlcmF0LicsXHJcbiAgICAndGltZSc6ICc0IERlYycsXHJcbiAgICAncmVhZCc6IHRydWUsXHJcbiAgICAnc3RhcnJlZCc6IHRydWUsXHJcbiAgICAnaW1wb3J0YW50JzogZmFsc2UsXHJcbiAgICAnaGFzQXR0YWNobWVudHMnOiBmYWxzZSxcclxuICAgICdsYWJlbHMnOiBbXHJcbiAgICAgIDEsXHJcbiAgICAgIDNcclxuICAgIF0sXHJcbiAgICAnc2VsZWN0ZWQnOiBmYWxzZSxcclxuICAgICdmb2xkZXInOiAwXHJcbiAgfSxcclxuICB7XHJcbiAgICAnaWQnOiAnMTU0MWNhN2FmNjZkYTI4NDE3NycsXHJcbiAgICAnZnJvbSc6IHtcclxuICAgICAgJ25hbWUnOiAnU3RlbGxhIEJyb3duJyxcclxuICAgICAgJ2F2YXRhcic6ICcnLFxyXG4gICAgICAnZW1haWwnOiAnc3RlbGxncm93bkBleGFtcGxlLmNvbSdcclxuICAgIH0sXHJcbiAgICAndG8nOiBbXHJcbiAgICAgIHtcclxuICAgICAgICAnbmFtZSc6ICdtZScsXHJcbiAgICAgICAgJ2VtYWlsJzogJ3JvYmVydC5qb2huc29uQGV4YW1wbGUuY29tJ1xyXG4gICAgICB9XHJcbiAgICBdLFxyXG4gICAgJ3N1YmplY3QnOiAnVml2YW11cyB2ZW5lbmF0aXMgdGVtcHVzIGlwc3VtLCBpZCBmaW5pYnVzIGxpYmVybyBhbGlxdWV0IGNvbnZhbGxpcy4nLFxyXG4gICAgJ21lc3NhZ2UnOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gRnVzY2UgbG9yZW0gZGlhbSwgcHVsdmluYXIgaWQgbmlzbCBub24sIHVsdHJpY2VzIG1heGltdXMgbmliaC4gU3VzcGVuZGlzc2UgdXQganVzdG8gdmVsaXQuIE51bGxhbSBhYyB1bHRyaWNlcyByaXN1cywgcXVpcyBhdWN0b3Igb3JjaS4gVmVzdGlidWx1bSB2b2x1dHBhdCBuaXNpIGV0IG5lcXVlIHBvcnRhIHVsbGFtY29ycGVyLiBNYWVjZW5hcyBwb3J0dGl0b3IgcG9ydGEgZXJhdCBhYyBzdXNjaXBpdC4gU2VkIGN1cnN1cyBsZW8gdXQgZWxlbWVudHVtIGZyaW5naWxsYS4gTWFlY2VuYXMgc2VtcGVyIHZpdmVycmEgZXJhdCwgdmVsIHVsbGFtY29ycGVyIGR1aSBlZmZpY2l0dXIgaW4uIFZlc3RpYnVsdW0gcGxhY2VyYXQgaW1wZXJkaWV0IHRlbGx1cywgZXQgdGluY2lkdW50IGVyb3MgcG9zdWVyZSBlZ2V0LiBQcm9pbiBzaXQgYW1ldCBmYWNpbGlzaXMgbGliZXJvLiBOdWxsYSBlZ2V0IGVzdCB1dCBlcmF0IGFsaXF1ZXQgcmhvbmN1cy4gUXVpc3F1ZSBhYyB1cm5hIHZpdGFlIGR1aSBoZW5kcmVyaXQgc29sbGljaXR1ZGluIHZlbCBpZCBzZW0uICBJbiBlZ2V0IGFudGUgc2FwaWVuLiBRdWlzcXVlIGNvbnNlcXVhdCB2ZWxpdCBub24gYW50ZSBmaW5pYnVzLCB2ZWwgcGxhY2VyYXQgZXJhdCB1bHRyaWNpZXMuIEFsaXF1YW0gYmliZW5kdW0ganVzdG8gZXJhdCwgdWx0cmljZXMgdmVoaWN1bGEgZG9sb3IgZWxlbWVudHVtIGEuIE1hdXJpcyBldSBuaXNsIGZldWdpYXQgbGlndWxhIG1vbGVzdGllIGVsZWlmZW5kLlxcbiBBbGlxdWFtIGVmZmljaXR1ciB2ZW5lbmF0aXMgdmVsaXQgYWMgcG9ydGEuIFZpdmFtdXMgdml0YWUgcHVsdmluYXIgdGVsbHVzLiBEb25lYyBvZGlvIGVuaW0sIGF1Y3RvciBlZ2V0IG5pYmggbWF0dGlzLCB1bHRyaWNpZXMgZGlnbmlzc2ltIGxhY3VzLiBQaGFzZWxsdXMgbm9uIHRpbmNpZHVudCBkdWkuIE51bGxhIGV1IGFyY3UgbG9yZW0uICBEb25lYyBub24gaGVuZHJlcml0IGF1Z3VlLCBsb2JvcnRpcyBzb2xsaWNpdHVkaW4gb2Rpby4gQ2xhc3MgYXB0ZW50IHRhY2l0aSBzb2Npb3NxdSBhZCBsaXRvcmEgdG9ycXVlbnQgcGVyIGNvbnViaWEgbm9zdHJhLCBwZXIgaW5jZXB0b3MgaGltZW5hZW9zLiBEdWlzIHNpdCBhbWV0IGV1aXNtb2QgZW5pbSwgZWdldCB2ZXN0aWJ1bHVtIGp1c3RvLiBGdXNjZSBhIHBsYWNlcmF0IGxlY3R1cywgZWdldCBmZXVnaWF0IHB1cnVzLiBDcmFzIHJpc3VzIGFudGUsIGZhdWNpYnVzIGVnZXQganVzdG8gY29tbW9kbywgdm9sdXRwYXQgdGVtcG9yIGFudGUuIERvbmVjIHNpdCBhbWV0IGxlbyB2ZW5lbmF0aXMsIGdyYXZpZGEgcXVhbSBzaXQgYW1ldCwgYmxhbmRpdCBkdWkuIEluIHF1YW0gYW50ZSwgZWxlbWVudHVtIHV0IGZhdWNpYnVzIG5lYywgdHJpc3RpcXVlIHZpdGFlIGR1aS4gIFxcbiBcXG4gUHJhZXNlbnQgdmVsIGVyYXQgYXQgZW5pbSBwbGFjZXJhdCBsdWN0dXMgdmVsIHV0IGlwc3VtLiBJbiBjb25ndWUgdGVtcG9yIG1pLCBub24gb3JuYXJlIGxlY3R1cyBjb25kaW1lbnR1bSBhdC4gQWVuZWFuIGxpYmVybyBkaWFtLCBmaW5pYnVzIGVnZXQgc2FwaWVuIGV0LCB0cmlzdGlxdWUgZmVybWVudHVtIGxvcmVtLiAgJyxcclxuICAgICd0aW1lJzogJzMgRGVjJyxcclxuICAgICdyZWFkJzogdHJ1ZSxcclxuICAgICdzdGFycmVkJzogZmFsc2UsXHJcbiAgICAnaW1wb3J0YW50JzogZmFsc2UsXHJcbiAgICAnaGFzQXR0YWNobWVudHMnOiBmYWxzZSxcclxuICAgICdsYWJlbHMnOiBbXSxcclxuICAgICdzZWxlY3RlZCc6IGZhbHNlLFxyXG4gICAgJ2ZvbGRlcic6IDBcclxuICB9LFxyXG4gIHtcclxuICAgICdpZCc6ICcxNTQyOTcxNjdlNzgxNzgxNzQ1JyxcclxuICAgICdmcm9tJzoge1xyXG4gICAgICAnbmFtZSc6ICdTdGV2ZSBKb25zb24nLFxyXG4gICAgICAnYXZhdGFyJzogJycsXHJcbiAgICAgICdlbWFpbCc6ICdzdGV2ZWpvbnNvbkBleGFtcGxlLmNvbSdcclxuICAgIH0sXHJcbiAgICAndG8nOiBbXHJcbiAgICAgIHtcclxuICAgICAgICAnbmFtZSc6ICdtZScsXHJcbiAgICAgICAgJ2VtYWlsJzogJ3JvYmVydC5qb2huc29uQGV4YW1wbGUuY29tJ1xyXG4gICAgICB9XHJcbiAgICBdLFxyXG4gICAgJ3N1YmplY3QnOiAnRG9uZWMgdXQgYW50ZSB0cmlzdGlxdWUsIGdyYXZpZGEganVzdG8gdml0YWUnLFxyXG4gICAgJ21lc3NhZ2UnOiAnZGljdHVtIGF0IGxpZ3VsYSB2aXRhZSwgcG9zdWVyZSBzYWdpdHRpcyBhdWd1ZS4gTmFtIHZpdGFlIGVyb3MgcXVpcyBmZWxpcyBjb25zZWN0ZXR1ciBlZ2VzdGFzIHZpdGFlIHZpdGFlIG1hc3NhLiBWZXN0aWJ1bHVtIHRpbmNpZHVudCBuaXNpIG5lcXVlLCBldSB1bGxhbWNvcnBlciByaXN1cyBhbGlxdWV0IHZlbC4gTnVuYyB1dCBsb3JlbSBkYXBpYnVzLCBpbnRlcmR1bSBudWxsYSB2ZWwsIGV1aXNtb2QgZWxpdC4gRnVzY2UgYSBtb2xsaXMgZXJhdCwgbm9uIGVnZXN0YXMgZHVpLiBGdXNjZSBldSBydXRydW0gb3JjaS4gQWxpcXVhbSBoZW5kcmVyaXQgbWV0dXMgc2l0IGFtZXQgaW50ZXJkdW0gaWFjdWxpcy4gTW9yYmkgZWdldCBuaWJoIHV0IG5pYmggY29udmFsbGlzIGZlcm1lbnR1bSB2aXRhZSBhYyBtYXVyaXMuIFBoYXNlbGx1cyBsaWd1bGEgcHVydXMsIGVsZWlmZW5kIHZlbCBtYXNzYSB1dCwgaW50ZXJkdW0gcHVsdmluYXIgc2FwaWVuLiBOdWxsYW0gYSBleCBuZWMgZWxpdCBjb25kaW1lbnR1bSBtYXR0aXMuIE51bGxhbSBzaXQgYW1ldCBkaWN0dW0gbmVxdWUsIHZlbCBzYWdpdHRpcyBlcm9zLiBQZWxsZW50ZXNxdWUgaGFiaXRhbnQgbW9yYmkgdHJpc3RpcXVlIHNlbmVjdHVzIGV0IG5ldHVzIGV0IG1hbGVzdWFkYSBmYW1lcyBhYyB0dXJwaXMgZWdlc3Rhcy4gJyxcclxuICAgICd0aW1lJzogJzMgRGVjJyxcclxuICAgICdyZWFkJzogdHJ1ZSxcclxuICAgICdzdGFycmVkJzogZmFsc2UsXHJcbiAgICAnaW1wb3J0YW50JzogZmFsc2UsXHJcbiAgICAnaGFzQXR0YWNobWVudHMnOiBmYWxzZSxcclxuICAgICdsYWJlbHMnOiBbXSxcclxuICAgICdzZWxlY3RlZCc6IGZhbHNlLFxyXG4gICAgJ2ZvbGRlcic6IDBcclxuICB9LFxyXG4gIHtcclxuICAgICdpZCc6ICcxNTQyN2Y0YzFiN2YzOTUzMjM0JyxcclxuICAgICdmcm9tJzoge1xyXG4gICAgICAnbmFtZSc6ICdJcmEgU2hvcnRlcicsXHJcbiAgICAgICdhdmF0YXInOiAnJyxcclxuICAgICAgJ2VtYWlsJzogJ2lyYXNob3J0ZXJAZXhhbXBsZS5jb20nXHJcbiAgICB9LFxyXG4gICAgJ3RvJzogW1xyXG4gICAgICB7XHJcbiAgICAgICAgJ25hbWUnOiAnbWUnLFxyXG4gICAgICAgICdlbWFpbCc6ICdyb2JlcnQuam9obnNvbkBleGFtcGxlLmNvbSdcclxuICAgICAgfVxyXG4gICAgXSxcclxuICAgICdzdWJqZWN0JzogJ0NvbW1pdHMgdGhhdCBuZWVkIHRvIGJlIHB1c2hlZCBsb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCcsXHJcbiAgICAnbWVzc2FnZSc6ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBGdXNjZSBsb3JlbSBkaWFtLCBwdWx2aW5hciBpZCBuaXNsIG5vbiwgdWx0cmljZXMgbWF4aW11cyBuaWJoLiBTdXNwZW5kaXNzZSB1dCBqdXN0byB2ZWxpdC4gTnVsbGFtIGFjIHVsdHJpY2VzIHJpc3VzLCBxdWlzIGF1Y3RvciBvcmNpLiBWZXN0aWJ1bHVtIHZvbHV0cGF0IG5pc2kgZXQgbmVxdWUgcG9ydGEgdWxsYW1jb3JwZXIuIE1hZWNlbmFzIHBvcnR0aXRvciBwb3J0YSBlcmF0IGFjIHN1c2NpcGl0LiBTZWQgY3Vyc3VzIGxlbyB1dCBlbGVtZW50dW0gZnJpbmdpbGxhLiBNYWVjZW5hcyBzZW1wZXIgdml2ZXJyYSBlcmF0LCB2ZWwgdWxsYW1jb3JwZXIgZHVpIGVmZmljaXR1ciBpbi4gVmVzdGlidWx1bSBwbGFjZXJhdCBpbXBlcmRpZXQgdGVsbHVzLCBldCB0aW5jaWR1bnQgZXJvcyBwb3N1ZXJlIGVnZXQuIFByb2luIHNpdCBhbWV0IGZhY2lsaXNpcyBsaWJlcm8uIE51bGxhIGVnZXQgZXN0IHV0IGVyYXQgYWxpcXVldCByaG9uY3VzLiBRdWlzcXVlIGFjIHVybmEgdml0YWUgZHVpIGhlbmRyZXJpdCBzb2xsaWNpdHVkaW4gdmVsIGlkIHNlbS4gIEluIGVnZXQgYW50ZSBzYXBpZW4uIFF1aXNxdWUgY29uc2VxdWF0IHZlbGl0IG5vbiBhbnRlIGZpbmlidXMsIHZlbCBwbGFjZXJhdCBlcmF0IHVsdHJpY2llcy4gQWxpcXVhbSBiaWJlbmR1bSBqdXN0byBlcmF0LCB1bHRyaWNlcyB2ZWhpY3VsYSBkb2xvciBlbGVtZW50dW0gYS4gTWF1cmlzIGV1IG5pc2wgZmV1Z2lhdCBsaWd1bGEgbW9sZXN0aWUgZWxlaWZlbmQuXFxuIEFsaXF1YW0gZWZmaWNpdHVyIHZlbmVuYXRpcyB2ZWxpdCBhYyBwb3J0YS4gVml2YW11cyB2aXRhZSBwdWx2aW5hciB0ZWxsdXMuIERvbmVjIG9kaW8gZW5pbSwgYXVjdG9yIGVnZXQgbmliaCBtYXR0aXMsIHVsdHJpY2llcyBkaWduaXNzaW0gbGFjdXMuIFBoYXNlbGx1cyBub24gdGluY2lkdW50IGR1aS4gTnVsbGEgZXUgYXJjdSBsb3JlbS4gIERvbmVjIG5vbiBoZW5kcmVyaXQgYXVndWUsIGxvYm9ydGlzIHNvbGxpY2l0dWRpbiBvZGlvLiBDbGFzcyBhcHRlbnQgdGFjaXRpIHNvY2lvc3F1IGFkIGxpdG9yYSB0b3JxdWVudCBwZXIgY29udWJpYSBub3N0cmEsIHBlciBpbmNlcHRvcyBoaW1lbmFlb3MuIER1aXMgc2l0IGFtZXQgZXVpc21vZCBlbmltLCBlZ2V0IHZlc3RpYnVsdW0ganVzdG8uIEZ1c2NlIGEgcGxhY2VyYXQgbGVjdHVzLCBlZ2V0IGZldWdpYXQgcHVydXMuIENyYXMgcmlzdXMgYW50ZSwgZmF1Y2lidXMgZWdldCBqdXN0byBjb21tb2RvLCB2b2x1dHBhdCB0ZW1wb3IgYW50ZS4gRG9uZWMgc2l0IGFtZXQgbGVvIHZlbmVuYXRpcywgZ3JhdmlkYSBxdWFtIHNpdCBhbWV0LCBibGFuZGl0IGR1aS4gSW4gcXVhbSBhbnRlLCBlbGVtZW50dW0gdXQgZmF1Y2lidXMgbmVjLCB0cmlzdGlxdWUgdml0YWUgZHVpLiAgXFxuIFxcbiBQcmFlc2VudCB2ZWwgZXJhdCBhdCBlbmltIHBsYWNlcmF0IGx1Y3R1cyB2ZWwgdXQgaXBzdW0uIEluIGNvbmd1ZSB0ZW1wb3IgbWksIG5vbiBvcm5hcmUgbGVjdHVzIGNvbmRpbWVudHVtIGF0LiBBZW5lYW4gbGliZXJvIGRpYW0sIGZpbmlidXMgZWdldCBzYXBpZW4gZXQsIHRyaXN0aXF1ZSBmZXJtZW50dW0gbG9yZW0uICAnLFxyXG4gICAgJ3RpbWUnOiAnMiBEZWMnLFxyXG4gICAgJ3JlYWQnOiB0cnVlLFxyXG4gICAgJ3N0YXJyZWQnOiBmYWxzZSxcclxuICAgICdpbXBvcnRhbnQnOiBmYWxzZSxcclxuICAgICdoYXNBdHRhY2htZW50cyc6IGZhbHNlLFxyXG4gICAgJ2xhYmVscyc6IFtdLFxyXG4gICAgJ3NlbGVjdGVkJzogZmFsc2UsXHJcbiAgICAnZm9sZGVyJzogM1xyXG4gIH0sXHJcbiAge1xyXG4gICAgJ2lkJzogJzE1NDU5MjUxYTZkNmIzOTc1NjUnLFxyXG4gICAgJ2Zyb20nOiB7XHJcbiAgICAgICduYW1lJzogJ0FsZXggRG9sZ292ZScsXHJcbiAgICAgICdhdmF0YXInOiAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzE1MHgxNTAnLFxyXG4gICAgICAnZW1haWwnOiAnYWxleGRvbGdvdmVAZXhhbXBsZS5jb20nXHJcbiAgICB9LFxyXG4gICAgJ3RvJzogW1xyXG4gICAgICB7XHJcbiAgICAgICAgJ25hbWUnOiAnbWUnLFxyXG4gICAgICAgICdlbWFpbCc6ICdyb2JlcnQuam9obnNvbkBleGFtcGxlLmNvbSdcclxuICAgICAgfVxyXG4gICAgXSxcclxuICAgICdzdWJqZWN0JzogJ1V0IHRpbmNpZHVudCBtYXNzYSBub24gZWxlbWVudHVtIGZlcm1lbnR1bS4uJyxcclxuICAgICdtZXNzYWdlJzogJ051bGxhbSB2ZWwgaXBzdW0gZWdldCBvZGlvIHZpdmVycmEgcGVsbGVudGVzcXVlLiBOdWxsYSBhdWN0b3IgZXUgZmVsaXMgZWdldCB2dWxwdXRhdGUuIE9yY2kgdmFyaXVzIG5hdG9xdWUgcGVuYXRpYnVzIGV0IG1hZ25pcyBkaXMgcGFydHVyaWVudCBtb250ZXMsIG5hc2NldHVyIHJpZGljdWx1cyBtdXMuIFF1aXNxdWUgcXVhbSBuaXNpLCBwdWx2aW5hciB2aXRhZSBudWxsYSBzZWQsIGJsYW5kaXQgYXVjdG9yIGxhY3VzLiBWZXN0aWJ1bHVtIGV0IHNlbXBlciBsb3JlbS4gU3VzcGVuZGlzc2UgaW50ZXJkdW0gZXN0IG5lcXVlLCB1dCB0ZW1wdXMgZXJvcyB1bHRyaWNpZXMgZXQuIFByb2luIHVsdHJpY2llcyBlbGl0IGFjIGVzdCBlZ2VzdGFzIHBoYXJldHJhLiBQcmFlc2VudCBpZCBtb2xsaXMgZW5pbS4gU3VzcGVuZGlzc2UgcXVpcyBhcmN1IG5lYyBsYWN1cyBtb2xlc3RpZSBwaGFyZXRyYSBzaXQgYW1ldCBpbiBtYXVyaXMuJyxcclxuICAgICd0aW1lJzogJzIgRGVjJyxcclxuICAgICdyZWFkJzogZmFsc2UsXHJcbiAgICAnc3RhcnJlZCc6IGZhbHNlLFxyXG4gICAgJ2ltcG9ydGFudCc6IHRydWUsXHJcbiAgICAnaGFzQXR0YWNobWVudHMnOiB0cnVlLFxyXG4gICAgJ2F0dGFjaG1lbnRzJzogW1xyXG4gICAgICB7XHJcbiAgICAgICAgJ3R5cGUnOiAnaW1hZ2UnLFxyXG4gICAgICAgICdmaWxlTmFtZSc6ICdiaWtlJyxcclxuICAgICAgICAncHJldmlldyc6ICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vNTAweDMzMycsXHJcbiAgICAgICAgJ3VybCc6ICcnLFxyXG4gICAgICAgICdzaXplJzogJzEuMU1iJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgJ3R5cGUnOiAnaW1hZ2UnLFxyXG4gICAgICAgICdmaWxlTmFtZSc6ICdidXJnZXJzJyxcclxuICAgICAgICAncHJldmlldyc6ICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vNTAweDMzMycsXHJcbiAgICAgICAgJ3VybCc6ICcnLFxyXG4gICAgICAgICdzaXplJzogJzM4MGtiJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgJ3R5cGUnOiAnaW1hZ2UnLFxyXG4gICAgICAgICdmaWxlTmFtZSc6ICdjYW1lcmEnLFxyXG4gICAgICAgICdwcmV2aWV3JzogJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS82MDB4NDAwJyxcclxuICAgICAgICAndXJsJzogJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS82MDB4NDAwJyxcclxuICAgICAgICAnc2l6ZSc6ICcxN01iJ1xyXG4gICAgICB9XHJcbiAgICBdLFxyXG4gICAgJ2xhYmVscyc6IFtcclxuICAgICAgMVxyXG4gICAgXSxcclxuICAgICdzZWxlY3RlZCc6IGZhbHNlLFxyXG4gICAgJ2ZvbGRlcic6IDBcclxuICB9LFxyXG4gIHtcclxuICAgICdpZCc6ICcxNTQ1ODhhMDg2NGQyODgxMTI0JyxcclxuICAgICdmcm9tJzoge1xyXG4gICAgICAnbmFtZSc6ICdEb21uaWMgQnJvd24nLFxyXG4gICAgICAnYXZhdGFyJzogJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS82NDB4NDIwJyxcclxuICAgICAgJ2VtYWlsJzogJ2RvbW5pY2Jyb3duQGV4YW1wbGUuY29tJ1xyXG4gICAgfSxcclxuICAgICd0byc6IFtcclxuICAgICAge1xyXG4gICAgICAgICduYW1lJzogJ21lJyxcclxuICAgICAgICAnZW1haWwnOiAncm9iZXJ0LmpvaG5zb25AZXhhbXBsZS5jb20nXHJcbiAgICAgIH1cclxuICAgIF0sXHJcbiAgICAnc3ViamVjdCc6ICdGdXNjZSBldSBydXRydW0gb3JjaS4gQWxpcXVhbSBoZW5kcmVyaXQgbWV0dXMgc2l0IGFtZXQgaW50ZXJkdW0gJyxcclxuICAgICdtZXNzYWdlJzogJ1BoYXNlbGx1cyBsaWd1bGEgcHVydXMsIGVsZWlmZW5kIHZlbCBtYXNzYSB1dCwgaW50ZXJkdW0gcHVsdmluYXIgc2FwaWVuLiBOdWxsYW0gYSBleCBuZWMgZWxpdCBjb25kaW1lbnR1bSBtYXR0aXMuIE51bGxhbSBzaXQgYW1ldCBkaWN0dW0gbmVxdWUsIHZlbCBzYWdpdHRpcyBlcm9zLiBQZWxsZW50ZXNxdWUgaGFiaXRhbnQgbW9yYmkgdHJpc3RpcXVlIHNlbmVjdHVzIGV0IG5ldHVzIGV0IG1hbGVzdWFkYSBmYW1lcyBhYyB0dXJwaXMgZWdlc3Rhcy4uJyxcclxuICAgICd0aW1lJzogJzEgRGVjJyxcclxuICAgICdyZWFkJzogZmFsc2UsXHJcbiAgICAnc3RhcnJlZCc6IGZhbHNlLFxyXG4gICAgJ2ltcG9ydGFudCc6IGZhbHNlLFxyXG4gICAgJ2hhc0F0dGFjaG1lbnRzJzogZmFsc2UsXHJcbiAgICAnbGFiZWxzJzogW10sXHJcbiAgICAnc2VsZWN0ZWQnOiBmYWxzZSxcclxuICAgICdmb2xkZXInOiAwXHJcbiAgfSxcclxuICB7XHJcbiAgICAnaWQnOiAnMTU0NTM3NDM1ZDViMzJiZjExYScsXHJcbiAgICAnZnJvbSc6IHtcclxuICAgICAgJ25hbWUnOiAnQnJpYW4gTGFyYScsXHJcbiAgICAgICdhdmF0YXInOiAnJyxcclxuICAgICAgJ2VtYWlsJzogJ2JyaWFubGFyYUBleGFtcGxlLmNvbSdcclxuICAgIH0sXHJcbiAgICAndG8nOiBbXHJcbiAgICAgIHtcclxuICAgICAgICAnbmFtZSc6ICdtZScsXHJcbiAgICAgICAgJ2VtYWlsJzogJ3JvYmVydC5qb2huc29uQGV4YW1wbGUuY29tJ1xyXG4gICAgICB9XHJcbiAgICBdLFxyXG4gICAgJ3N1YmplY3QnOiAnUXVpc3F1ZSBmZWxpcyBuaXNpLCBpYWN1bGlzIGF0IGxhY2luaWEgZXQuJyxcclxuICAgICdtZXNzYWdlJzogJ0FlbmVhbiBmYWNpbGlzaXMsIGxvcmVtIGVnZXQgaW50ZXJkdW0gdHJpc3RpcXVlLCB2ZWxpdCBvZGlvIHRlbXB1cyBvcmNpLCBzZWQgbW9sZXN0aWUgZmVsaXMgaXBzdW0gZGlnbmlzc2ltIGxlby4gUHJhZXNlbnQgdm9sdXRwYXQgY29udmFsbGlzIG1vbGVzdGllLiBQcmFlc2VudCBldSBtYXNzYSBncmF2aWRhLCBzZW1wZXIgbGFjdXMgaWQsIGJsYW5kaXQgdHVycGlzLiBOdWxsYW0gcG9zdWVyZSBzb2RhbGVzIGRpZ25pc3NpbS4gTnVuYyBjb21tb2RvIGR1aSBzaXQgYW1ldCBwb3N1ZXJlIGxvYm9ydGlzLiBBbGlxdWFtIHBsYWNlcmF0IG1pIGF0IGZlbGlzIGxhb3JlZXQsIG5vbiBhbGlxdWFtIG9kaW8gdmFyaXVzLiBOdWxsYSB1bHRyaWNlcyBsZW8gdmVsIG1ldHVzIGZpbmlidXMsIHRlbXBvciBmZXVnaWF0IHZlbGl0IG1hdHRpcy4gRG9uZWMgZXQgY29tbW9kbyBuaXNsLCBzaXQgYW1ldCBkaWduaXNzaW0gbWkuIFV0IHVsbGFtY29ycGVyIGxhY3VzIHNlZCBtYWduYSBwcmV0aXVtIGNvbW1vZG8uIFNlZCBkaWN0dW0gYXVjdG9yIHNlbSB2aXRhZSB0aW5jaWR1bnQuIE1vcmJpIHV0IGp1c3RvIHNpdCBhbWV0IHRvcnRvciB0aW5jaWR1bnQgYWxpcXVldC4gQWVuZWFuIGF0IGVzdCBpbiBsb3JlbSBwdWx2aW5hciBmZXJtZW50dW0uJyxcclxuICAgICd0aW1lJzogJzEgRGVjJyxcclxuICAgICdyZWFkJzogdHJ1ZSxcclxuICAgICdzdGFycmVkJzogZmFsc2UsXHJcbiAgICAnaW1wb3J0YW50JzogZmFsc2UsXHJcbiAgICAnaGFzQXR0YWNobWVudHMnOiBmYWxzZSxcclxuICAgICdsYWJlbHMnOiBbXSxcclxuICAgICdzZWxlY3RlZCc6IGZhbHNlLFxyXG4gICAgJ2ZvbGRlcic6IDBcclxuICB9LFxyXG4gIHtcclxuICAgICdpZCc6ICcxNTQ0ZTQzZGNkYWU2ZWJmODc2JyxcclxuICAgICdmcm9tJzoge1xyXG4gICAgICAnbmFtZSc6ICdKZXNvbiBCb3JuJyxcclxuICAgICAgJ2F2YXRhcic6ICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMTUweDE1MCcsXHJcbiAgICAgICdlbWFpbCc6ICdqZXNvbmJvcm5AZXhhbXBsZS5jb20nXHJcbiAgICB9LFxyXG4gICAgJ3RvJzogW1xyXG4gICAgICB7XHJcbiAgICAgICAgJ25hbWUnOiAnbWUnLFxyXG4gICAgICAgICdlbWFpbCc6ICdyb2JlcnQuam9obnNvbkBleGFtcGxlLmNvbSdcclxuICAgICAgfVxyXG4gICAgXSxcclxuICAgICdzdWJqZWN0JzogJ1RoZSBzdGFuZGFyZCBMb3JlbSBJcHN1bSBwYXNzYWdlJyxcclxuICAgICdtZXNzYWdlJzogJ09uIHRoZSBvdGhlciBoYW5kLCB3ZSBkZW5vdW5jZSB3aXRoIHJpZ2h0ZW91cyBpbmRpZ25hdGlvbiBhbmQgZGlzbGlrZSBtZW4gd2hvIGFyZSBzbyBiZWd1aWxlZCBhbmQgZGVtb3JhbGl6ZWQgYnkgdGhlIGNoYXJtcyBvZiBwbGVhc3VyZSBvZiB0aGUgbW9tZW50LCBzbyBibGluZGVkIGJ5IGRlc2lyZSwgdGhhdCB0aGV5IGNhbm5vdCBmb3Jlc2VlIHRoZSBwYWluIGFuZCB0cm91YmxlIHRoYXQgYXJlIGJvdW5kIHRvIGVuc3VlOyBhbmQgZXF1YWwgYmxhbWUgYmVsb25ncyB0byB0aG9zZSB3aG8gZmFpbCBpbiB0aGVpciBkdXR5IHRocm91Z2ggd2Vha25lc3Mgb2Ygd2lsbCwgd2hpY2ggaXMgdGhlIHNhbWUgYXMgc2F5aW5nIHRocm91Z2ggc2hyaW5raW5nIGZyb20gdG9pbCBhbmQgcGFpbi4gVGhlc2UgY2FzZXMgYXJlIHBlcmZlY3RseSBzaW1wbGUgYW5kIGVhc3kgdG8gZGlzdGluZ3Vpc2guIEluIGEgZnJlZSBob3VyLCB3aGVuIG91ciBwb3dlciBvZiBjaG9pY2UgaXMgdW50cmFtbWVsbGVkIGFuZCB3aGVuIG5vdGhpbmcgcHJldmVudHMgb3VyIGJlaW5nIGFibGUgdG8gZG8gd2hhdCB3ZSBsaWtlIGJlc3QsIGV2ZXJ5IHBsZWFzdXJlIGlzIHRvIGJlIHdlbGNvbWVkIGFuZCBldmVyeSBwYWluIGF2b2lkZWQuXFxuIEJ1dCBpbiBjZXJ0YWluIGNpcmN1bXN0YW5jZXMgYW5kIG93aW5nIHRvIHRoZSBjbGFpbXMgb2YgZHV0eSBvciB0aGUgb2JsaWdhdGlvbnMgb2YgYnVzaW5lc3MgaXQgd2lsbCBmcmVxdWVudGx5IG9jY3VyIHRoYXQgcGxlYXN1cmVzIGhhdmUgdG8gYmUgcmVwdWRpYXRlZCBhbmQgYW5ub3lhbmNlcyBhY2NlcHRlZC4gVGhlIHdpc2UgbWFuIHRoZXJlZm9yZSBhbHdheXMgaG9sZHMgaW4gdGhlc2UgbWF0dGVycyB0byB0aGlzIHByaW5jaXBsZSBvZiBzZWxlY3Rpb246IGhlIHJlamVjdHMgcGxlYXN1cmVzIHRvIHNlY3VyZSBvdGhlciBncmVhdGVyIHBsZWFzdXJlcywgb3IgZWxzZSBoZSBlbmR1cmVzIHBhaW5zIHRvIGF2b2lkIHdvcnNlIHBhaW5zQXQgdmVybyBlb3MgZXQgYWNjdXNhbXVzIGV0IGl1c3RvIG9kaW8gZGlnbmlzc2ltb3MgZHVjaW11cyBxdWkgYmxhbmRpdGlpcyBwcmFlc2VudGl1bSB2b2x1cHRhdHVtIGRlbGVuaXRpIGF0cXVlIGNvcnJ1cHRpIHF1b3MgZG9sb3JlcyBldCBxdWFzIG1vbGVzdGlhcyBleGNlcHR1cmkgc2ludCBvY2NhZWNhdGkgY3VwaWRpdGF0ZSBub24gcHJvdmlkZW50LCBzaW1pbGlxdWUgc3VudCBpbiBjdWxwYSBxdWkgb2ZmaWNpYSBkZXNlcnVudCBtb2xsaXRpYSBhbmltaSwgaWQgZXN0IGxhYm9ydW0gZXQgZG9sb3J1bSBmdWdhLiBFdCBoYXJ1bSBxdWlkZW0gcmVydW0gZmFjaWxpcyBlc3QgZXQgZXhwZWRpdGEgZGlzdGluY3Rpby4gJyxcclxuICAgICd0aW1lJzogJzMwIE5vdicsXHJcbiAgICAncmVhZCc6IHRydWUsXHJcbiAgICAnc3RhcnJlZCc6IGZhbHNlLFxyXG4gICAgJ2ltcG9ydGFudCc6IHRydWUsXHJcbiAgICAnaGFzQXR0YWNobWVudHMnOiBmYWxzZSxcclxuICAgICdsYWJlbHMnOiBbXHJcbiAgICAgIDJcclxuICAgIF0sXHJcbiAgICAnc2VsZWN0ZWQnOiBmYWxzZSxcclxuICAgICdmb2xkZXInOiAwXHJcbiAgfSxcclxuICB7XHJcbiAgICAnaWQnOiAnMTU0M2VlM2E1YjQzZTBmOWY0NScsXHJcbiAgICAnZnJvbSc6IHtcclxuICAgICAgJ25hbWUnOiAnRG9tbmljIFdoaXRlJyxcclxuICAgICAgJ2F2YXRhcic6ICcnLFxyXG4gICAgICAnZW1haWwnOiAnZG9tbmljd2hpdGVAZXhhbXBsZS5jb20nXHJcbiAgICB9LFxyXG4gICAgJ3RvJzogW1xyXG4gICAgICB7XHJcbiAgICAgICAgJ25hbWUnOiAnbWUnLFxyXG4gICAgICAgICdlbWFpbCc6ICdyb2JlcnQuam9obnNvbkBleGFtcGxlLmNvbSdcclxuICAgICAgfVxyXG4gICAgXSxcclxuICAgICdzdWJqZWN0JzogJ0NyYXMgYmliZW5kdW0gdG9ydG9yIHRvcnRvci4nLFxyXG4gICAgJ21lc3NhZ2UnOiAnQ3JhcyBiaWJlbmR1bSB0b3J0b3IgdG9ydG9yLCBldSBsdWN0dXMgcmlzdXMgZ3JhdmlkYSB1dC4gU3VzcGVuZGlzc2UgbmlzaSB0b3J0b3IsIGNvbnNlcXVhdCBhdCBwZWxsZW50ZXNxdWUgcXVpcywgZGFwaWJ1cyB2ZWwgcmlzdXMuIFByYWVzZW50IGFsaXF1YW0gc2l0IGFtZXQgZGlhbSBxdWlzIGx1Y3R1cy4gTnVsbGEgZmFjaWxpc2kuIE1hZWNlbmFzIGlkIG1vbGVzdGllIHRvcnRvci4gTnVsbGEgZWdldCBwcmV0aXVtIG51bGxhLiBFdGlhbSBjb25zZXF1YXQgZGljdHVtIHZlbGl0LCBhdCBlZ2VzdGFzIGxhY3VzIGxhb3JlZXQgYWMuIFV0IGZhY2lsaXNpcyBtYXNzYSB2ZWwgbWkgZnJpbmdpbGxhLCBub24gYmxhbmRpdCBlcm9zIGRpY3R1bS4gSW50ZWdlciBpbiB0ZWxsdXMgdml0YWUgbmlzaSB0aW5jaWR1bnQgcHVsdmluYXIuIE1hZWNlbmFzIGFjIGFudGUgdXQgZmVsaXMgZmV1Z2lhdCBvcm5hcmUgaWQgYSBxdWFtLiBRdWlzcXVlIGZldWdpYXQgYW50ZSBxdWlzIG9ybmFyZSBwbGFjZXJhdC4nLFxyXG4gICAgJ3RpbWUnOiAnMzAgTm92JyxcclxuICAgICdyZWFkJzogdHJ1ZSxcclxuICAgICdzdGFycmVkJzogZmFsc2UsXHJcbiAgICAnaW1wb3J0YW50JzogZmFsc2UsXHJcbiAgICAnaGFzQXR0YWNobWVudHMnOiBmYWxzZSxcclxuICAgICdsYWJlbHMnOiBbXSxcclxuICAgICdzZWxlY3RlZCc6IGZhbHNlLFxyXG4gICAgJ2ZvbGRlcic6IDBcclxuICB9LFxyXG4gIHtcclxuICAgICdpZCc6ICcxNTQzY2M0NTE1ZGYzMTQ2MTEyJyxcclxuICAgICdmcm9tJzoge1xyXG4gICAgICAnbmFtZSc6ICdKaW1teSBKbycsXHJcbiAgICAgICdhdmF0YXInOiAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzE1MHgxNTAnLFxyXG4gICAgICAnZW1haWwnOiAnamltbXkuam9AZXhhbXBsZS5jb20nXHJcbiAgICB9LFxyXG4gICAgJ3RvJzogW1xyXG4gICAgICB7XHJcbiAgICAgICAgJ25hbWUnOiAnbWUnLFxyXG4gICAgICAgICdlbWFpbCc6ICdyb2JlcnQuam9obnNvbkBleGFtcGxlLmNvbSdcclxuICAgICAgfVxyXG4gICAgXSxcclxuICAgICdzdWJqZWN0JzogJ0NvbnRyYXJ5IHRvIHBvcHVsYXIgYmVsaWVmLiAnLFxyXG4gICAgJ21lc3NhZ2UnOiAnb250cmFyeSB0byBwb3B1bGFyIGJlbGllZiwgTG9yZW0gSXBzdW0gaXMgbm90IHNpbXBseSByYW5kb20gdGV4dC4gSXQgaGFzIHJvb3RzIGluIGEgcGllY2Ugb2YgY2xhc3NpY2FsIExhdGluIGxpdGVyYXR1cmUgZnJvbSA0NSBCQywgbWFraW5nIGl0IG92ZXIgMjAwMCB5ZWFycyBvbGQuIFJpY2hhcmQgTWNDbGludG9jaywgYSBMYXRpbiBwcm9mZXNzb3IgYXQgSGFtcGRlbi1TeWRuZXkgQ29sbGVnZSBpbiBWaXJnaW5pYSwgbG9va2VkIHVwIG9uZSBvZiB0aGUgbW9yZSBvYnNjdXJlIExhdGluIHdvcmRzLCBjb25zZWN0ZXR1ciwgZnJvbSBhIExvcmVtIElwc3VtIHBhc3NhZ2UsIGFuZCBnb2luZyB0aHJvdWdoIHRoZSBjaXRlcyBvZiB0aGUgd29yZCBpbiBjbGFzc2ljYWwgbGl0ZXJhdHVyZSwgZGlzY292ZXJlZCB0aGUgdW5kb3VidGFibGUgc291cmNlLiBMb3JlbSBJcHN1bSBjb21lcyBmcm9tIHNlY3Rpb25zIDEuMTAuMzIgYW5kIDEuMTAuMzMgb2YgXCJkZSBGaW5pYnVzIEJvbm9ydW0gZXQgTWFsb3J1bVwiIChUaGUgRXh0cmVtZXMgb2YgR29vZCBhbmQgRXZpbCkgYnkgQ2ljZXJvLCB3cml0dGVuIGluIDQ1IEJDLlxcbiBUaGlzIGJvb2sgaXMgYSB0cmVhdGlzZSBvbiB0aGUgdGhlb3J5IG9mIGV0aGljcywgdmVyeSBwb3B1bGFyIGR1cmluZyB0aGUgUmVuYWlzc2FuY2UuIFRoZSBmaXJzdCBsaW5lIG9mIExvcmVtIElwc3VtLCBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0Li5cIiwgY29tZXMgZnJvbSBhIGxpbmUgaW4gc2VjdGlvbiAxLjEwLjMyJyxcclxuICAgICd0aW1lJzogJzI5IE5vdicsXHJcbiAgICAncmVhZCc6IHRydWUsXHJcbiAgICAnc3RhcnJlZCc6IGZhbHNlLFxyXG4gICAgJ2ltcG9ydGFudCc6IGZhbHNlLFxyXG4gICAgJ2hhc0F0dGFjaG1lbnRzJzogZmFsc2UsXHJcbiAgICAnbGFiZWxzJzogW10sXHJcbiAgICAnc2VsZWN0ZWQnOiBmYWxzZSxcclxuICAgICdmb2xkZXInOiAwXHJcbiAgfSxcclxuICB7XHJcbiAgICAnaWQnOiAnMTU0Mzk4YTQ3NzBkN2FhZjlhMicsXHJcbiAgICAnZnJvbSc6IHtcclxuICAgICAgJ25hbWUnOiAnSm9obiBTbWl0aCcsXHJcbiAgICAgICdhdmF0YXInOiAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzE1MHgxNTAnLFxyXG4gICAgICAnZW1haWwnOiAnam9obnNtaXRoQGV4YW1wbGUuY29tJ1xyXG4gICAgfSxcclxuICAgICd0byc6IFtcclxuICAgICAge1xyXG4gICAgICAgICduYW1lJzogJ21lJyxcclxuICAgICAgICAnZW1haWwnOiAncm9iZXJ0LmpvaG5zb25AZXhhbXBsZS5jb20nXHJcbiAgICAgIH1cclxuICAgIF0sXHJcbiAgICAnc3ViamVjdCc6ICdVdCBlbGVtZW50dW0gcmhvbmN1cyBuaXNsLicsXHJcbiAgICAnbWVzc2FnZSc6IFsnU3VzcGVuZGlzc2UgY29uZ3VlIGlwc3VtIHRpbmNpZHVudCBqdXN0byBkaWN0dW0sIHNpdCBhbWV0IGZpbmlidXMgbGVjdHVzIGVnZXN0YXMuIFByb2luIGZlcm1lbnR1bSBuZWMgcmlzdXMgdml0YWUgYWNjdW1zYW4uIFZpdmFtdXMgbm9uIGxpZ3VsYSBldSB1cm5hIG1hdHRpcyBmZXVnaWF0LiBQZWxsZW50ZXNxdWUgZXggZmVsaXMsIGNvbW1vZG8gc2VkIHNlbSBhLCBwaGFyZXRyYSBzZW1wZXIgcHVydXMuIEN1cmFiaXR1ciBpbiBxdWFtIHJob25jdXMsIGJsYW5kaXQgZXJvcyB0ZW1wb3IsIHNvZGFsZXMgbWV0dXMuIFBlbGxlbnRlc3F1ZSB2ZWwgbHVjdHVzIGV4LiBRdWlzcXVlIGJsYW5kaXQgbmlzbCBhdCB0aW5jaWR1bnQgdml2ZXJyYS4gUGhhc2VsbHVzIGVsZW1lbnR1bSBmYXVjaWJ1cyBsZW8gYWMgbW9sZXN0aWUuJ10sXHJcbiAgICAndGltZSc6ICcxIERlYycsXHJcbiAgICAncmVhZCc6IHRydWUsXHJcbiAgICAnc3RhcnJlZCc6IGZhbHNlLFxyXG4gICAgJ2ltcG9ydGFudCc6IGZhbHNlLFxyXG4gICAgJ2hhc0F0dGFjaG1lbnRzJzogZmFsc2UsXHJcbiAgICAnbGFiZWxzJzogW10sXHJcbiAgICAnc2VsZWN0ZWQnOiBmYWxzZSxcclxuICAgICdmb2xkZXInOiAwXHJcbiAgfSxcclxuICB7XHJcbiAgICAnaWQnOiAnMTU0MzgzNTFmODdkY2Q2ODU2NycsXHJcbiAgICAnZnJvbSc6IHtcclxuICAgICAgJ25hbWUnOiAnSm9ubnkgQnJvd24nLFxyXG4gICAgICAnYXZhdGFyJzogJycsXHJcbiAgICAgICdlbWFpbCc6ICdqb25ubnlicm93bkBleGFtcGxlLmNvbSdcclxuICAgIH0sXHJcbiAgICAndG8nOiBbXHJcbiAgICAgIHtcclxuICAgICAgICAnbmFtZSc6ICdtZScsXHJcbiAgICAgICAgJ2VtYWlsJzogJ3JvYmVydC5qb2huc29uQGV4YW1wbGUuY29tJ1xyXG4gICAgICB9XHJcbiAgICBdLFxyXG4gICAgJ3N1YmplY3QnOiAnSW50ZWdlciBuZWMgdGVtcHVzIGVyb3MuJyxcclxuICAgICdtZXNzYWdlJzogJ1Zlc3RpYnVsdW0gb3JuYXJlIG9yY2kgaGVuZHJlcml0IGVsaXQgZWdlc3RhcywgbmVjIGNvbnNlY3RldHVyIG1pIGxvYm9ydGlzLiBNYXVyaXMgcG9ydHRpdG9yIGRvbG9yIGluIG5lcXVlIGFsaXF1YW0sIGluIHNvbGxpY2l0dWRpbiBlbmltIGNvbnNlcXVhdC4gRnVzY2UgcGhhcmV0cmEgdmVuZW5hdGlzIGZlcm1lbnR1bS5cXG4gXFxuIE1hZWNlbmFzIHNlbXBlciBuaXNpIHF1aXMgbGVjdHVzIGRpY3R1bSwgdmVsIGZlcm1lbnR1bSBwdXJ1cyBtYWxlc3VhZGEuIE51bmMgdGluY2lkdW50IHNpdCBhbWV0IG51bmMgc2l0IGFtZXQgZWxlaWZlbmQuIFNlZCB0ZWxsdXMgcmlzdXMsIHNhZ2l0dGlzIGlkIG1hZ25hIGluLCBjb21tb2RvIGZldWdpYXQgcmlzdXMuIERvbmVjIGNvbW1vZG8gcHJldGl1bSBkb2xvciBub24gaGVuZHJlcml0LiBOdWxsYW0gaWQgbGVvIGV0IHF1YW0gY3Vyc3VzIHZlc3RpYnVsdW0uIFV0IGlkIGFsaXF1ZXQgZGlhbSwgaWQgdmFyaXVzIGxpYmVyby4gVXQgZXQgZmVsaXMgZXQgZXN0IGVsZWlmZW5kIGRpZ25pc3NpbSB2aXRhZSBjb25kaW1lbnR1bSBleC4gVXQgYSB1bGxhbWNvcnBlciBhbnRlLCBhYyBsYW9yZWV0IGVyYXQuIENsYXNzIGFwdGVudCB0YWNpdGkgc29jaW9zcXUgYWQgbGl0b3JhIHRvcnF1ZW50IHBlciBjb251YmlhIG5vc3RyYSwgcGVyIGluY2VwdG9zIGhpbWVuYWVvcy4nLFxyXG4gICAgJ3RpbWUnOiAnMjggTm92JyxcclxuICAgICdyZWFkJzogdHJ1ZSxcclxuICAgICdzdGFycmVkJzogZmFsc2UsXHJcbiAgICAnaW1wb3J0YW50JzogZmFsc2UsXHJcbiAgICAnaGFzQXR0YWNobWVudHMnOiBmYWxzZSxcclxuICAgICdsYWJlbHMnOiBbMF0sXHJcbiAgICAnc2VsZWN0ZWQnOiBmYWxzZSxcclxuICAgICdmb2xkZXInOiAwXHJcbiAgfSxcclxuICB7XHJcbiAgICAnaWQnOiAnMTU0MmQ3NWQ5MjlhNjAzMTI1JyxcclxuICAgICdmcm9tJzoge1xyXG4gICAgICAnbmFtZSc6ICdSYWhpbSBLYWRpcicsXHJcbiAgICAgICdhdmF0YXInOiAnJyxcclxuICAgICAgJ2VtYWlsJzogJ3JhaGlta2FkaXJAZXhhbXBsZS5jb20nXHJcbiAgICB9LFxyXG4gICAgJ3RvJzogW1xyXG4gICAgICB7XHJcbiAgICAgICAgJ25hbWUnOiAnbWUnLFxyXG4gICAgICAgICdlbWFpbCc6ICdyb2JlcnQuam9obnNvbkBleGFtcGxlLmNvbSdcclxuICAgICAgfVxyXG4gICAgXSxcclxuICAgICdzdWJqZWN0JzogJ1ByYWVzZW50IHRvcnRvciBvZGlvLCBsYW9yZWV0LicsXHJcbiAgICAnbWVzc2FnZSc6ICdPcmNpIHZhcml1cyBuYXRvcXVlIHBlbmF0aWJ1cyBldCBtYWduaXMgZGlzIHBhcnR1cmllbnQgbW9udGVzLCBuYXNjZXR1ciByaWRpY3VsdXMgbXVzLiBTZWQgaWQgZXJvcyBzaXQgYW1ldCBsb3JlbSB2aXZlcnJhIHRpbmNpZHVudCBlZ2V0IGlkIGRvbG9yLiBNb3JiaSBlZ2VzdGFzIGJpYmVuZHVtIGlwc3VtIGF0IGVmZmljaXR1ci4gU3VzcGVuZGlzc2UgYXQgbWF1cmlzIGp1c3RvLiBDdXJhYml0dXIgZWxlbWVudHVtIGFudGUgZXQgbGFjdXMgYmxhbmRpdCwgcXVpcyBmYXVjaWJ1cyBsb3JlbSBwZWxsZW50ZXNxdWUuIER1aXMgZXQgYXVjdG9yIHF1YW0sIHNlZCBsYWNpbmlhIGFudGUuIE5hbSBwbGFjZXJhdCBsYWN1cyBldSBtb2xsaXMgbG9ib3J0aXMuIFNlZCBwbGFjZXJhdCwgaXBzdW0gZXUgdmVzdGlidWx1bSBncmF2aWRhLCBtYWduYSBzYXBpZW4gZmV1Z2lhdCBmZWxpcywgbm9uIHZhcml1cyBsZW8gbWF1cmlzIHZpdGFlIGxpZ3VsYS4gU3VzcGVuZGlzc2UgdGluY2lkdW50IG5lYyBlbmltIGV1IHBvcnR0aXRvci4nLFxyXG4gICAgJ3RpbWUnOiAnMjcgTm92JyxcclxuICAgICdyZWFkJzogdHJ1ZSxcclxuICAgICdzdGFycmVkJzogZmFsc2UsXHJcbiAgICAnaW1wb3J0YW50JzogZmFsc2UsXHJcbiAgICAnaGFzQXR0YWNobWVudHMnOiBmYWxzZSxcclxuICAgICdsYWJlbHMnOiBbXSxcclxuICAgICdzZWxlY3RlZCc6IGZhbHNlLFxyXG4gICAgJ2ZvbGRlcic6IDBcclxuICB9LFxyXG4gIHtcclxuICAgICdpZCc6ICcxNTQyMDRlNDVhNTliMTY4NDUzJyxcclxuICAgICdmcm9tJzoge1xyXG4gICAgICAnbmFtZSc6ICdLYWRpcicsXHJcbiAgICAgICdhdmF0YXInOiAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzE1MHgxNTAnLFxyXG4gICAgICAnZW1haWwnOiAna2FkaXJtQGV4YW1wbGUuY29tJ1xyXG4gICAgfSxcclxuICAgICd0byc6IFtcclxuICAgICAge1xyXG4gICAgICAgICduYW1lJzogJ21lJyxcclxuICAgICAgICAnZW1haWwnOiAncm9iZXJ0LmpvaG5zb25AZXhhbXBsZS5jb20nXHJcbiAgICAgIH1cclxuICAgIF0sXHJcbiAgICAnc3ViamVjdCc6ICdNYW55IGRlc2t0b3AgcHVibGlzaGluZyBwYWNrYWdlcycsXHJcbiAgICAnbWVzc2FnZSc6ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBGdXNjZSBsb3JlbSBkaWFtLCBwdWx2aW5hciBpZCBuaXNsIG5vbiwgdWx0cmljZXMgbWF4aW11cyBuaWJoLiBTdXNwZW5kaXNzZSB1dCBqdXN0byB2ZWxpdC4gTnVsbGFtIGFjIHVsdHJpY2VzIHJpc3VzLCBxdWlzIGF1Y3RvciBvcmNpLiBWZXN0aWJ1bHVtIHZvbHV0cGF0IG5pc2kgZXQgbmVxdWUgcG9ydGEgdWxsYW1jb3JwZXIuIE1hZWNlbmFzIHBvcnR0aXRvciBwb3J0YSBlcmF0IGFjIHN1c2NpcGl0LiBTZWQgY3Vyc3VzIGxlbyB1dCBlbGVtZW50dW0gZnJpbmdpbGxhLiBNYWVjZW5hcyBzZW1wZXIgdml2ZXJyYSBlcmF0LCB2ZWwgdWxsYW1jb3JwZXIgZHVpIGVmZmljaXR1ciBpbi4gVmVzdGlidWx1bSBwbGFjZXJhdCBpbXBlcmRpZXQgdGVsbHVzLCBldCB0aW5jaWR1bnQgZXJvcyBwb3N1ZXJlIGVnZXQuIFByb2luIHNpdCBhbWV0IGZhY2lsaXNpcyBsaWJlcm8uIE51bGxhIGVnZXQgZXN0IHV0IGVyYXQgYWxpcXVldCByaG9uY3VzLiBRdWlzcXVlIGFjIHVybmEgdml0YWUgZHVpIGhlbmRyZXJpdCBzb2xsaWNpdHVkaW4gdmVsIGlkIHNlbS4gIEluIGVnZXQgYW50ZSBzYXBpZW4uIFF1aXNxdWUgY29uc2VxdWF0IHZlbGl0IG5vbiBhbnRlIGZpbmlidXMsIHZlbCBwbGFjZXJhdCBlcmF0IHVsdHJpY2llcy4gQWxpcXVhbSBiaWJlbmR1bSBqdXN0byBlcmF0LCB1bHRyaWNlcyB2ZWhpY3VsYSBkb2xvciBlbGVtZW50dW0gYS4gIFxcbiBcXG4gTWF1cmlzIGV1IG5pc2wgZmV1Z2lhdCBsaWd1bGEgbW9sZXN0aWUgZWxlaWZlbmQuIEFsaXF1YW0gZWZmaWNpdHVyIHZlbmVuYXRpcyB2ZWxpdCBhYyBwb3J0YS4gVml2YW11cyB2aXRhZSBwdWx2aW5hciB0ZWxsdXMuIERvbmVjIG9kaW8gZW5pbSwgYXVjdG9yIGVnZXQgbmliaCBtYXR0aXMsIHVsdHJpY2llcyBkaWduaXNzaW0gbGFjdXMuXFxuIFBoYXNlbGx1cyBub24gdGluY2lkdW50IGR1aS4gTnVsbGEgZXUgYXJjdSBsb3JlbS4gIERvbmVjIG5vbiBoZW5kcmVyaXQgYXVndWUsIGxvYm9ydGlzIHNvbGxpY2l0dWRpbiBvZGlvLiBDbGFzcyBhcHRlbnQgdGFjaXRpIHNvY2lvc3F1IGFkIGxpdG9yYSB0b3JxdWVudCBwZXIgY29udWJpYSBub3N0cmEsIHBlciBpbmNlcHRvcyBoaW1lbmFlb3MuIER1aXMgc2l0IGFtZXQgZXVpc21vZCBlbmltLCBlZ2V0IHZlc3RpYnVsdW0ganVzdG8uIEZ1c2NlIGEgcGxhY2VyYXQgbGVjdHVzLCBlZ2V0IGZldWdpYXQgcHVydXMuIENyYXMgcmlzdXMgYW50ZSwgZmF1Y2lidXMgZWdldCBqdXN0byBjb21tb2RvLCB2b2x1dHBhdCB0ZW1wb3IgYW50ZS4gRG9uZWMgc2l0IGFtZXQgbGVvIHZlbmVuYXRpcywgZ3JhdmlkYSBxdWFtIHNpdCBhbWV0LCBibGFuZGl0IGR1aS4gSW4gcXVhbSBhbnRlLCBlbGVtZW50dW0gdXQgZmF1Y2lidXMgbmVjLCB0cmlzdGlxdWUgdml0YWUgZHVpLiBQcmFlc2VudCB2ZWwgZXJhdCBhdCBlbmltIHBsYWNlcmF0IGx1Y3R1cyB2ZWwgdXQgaXBzdW0uIFxcbiBcXG4gSW4gY29uZ3VlIHRlbXBvciBtaSwgbm9uIG9ybmFyZSBsZWN0dXMgY29uZGltZW50dW0gYXQuIEFlbmVhbiBsaWJlcm8gZGlhbSwgZmluaWJ1cyBlZ2V0IHNhcGllbiBldCwgdHJpc3RpcXVlIGZlcm1lbnR1bSBsb3JlbS4gICcsXHJcbiAgICAndGltZSc6ICcyNiBOb3YnLFxyXG4gICAgJ3JlYWQnOiB0cnVlLFxyXG4gICAgJ3N0YXJyZWQnOiBmYWxzZSxcclxuICAgICdpbXBvcnRhbnQnOiBmYWxzZSxcclxuICAgICdoYXNBdHRhY2htZW50cyc6IGZhbHNlLFxyXG4gICAgJ2xhYmVscyc6IFswXSxcclxuICAgICdzZWxlY3RlZCc6IGZhbHNlLFxyXG4gICAgJ2ZvbGRlcic6IDNcclxuICB9LFxyXG4gIHtcclxuICAgICdpZCc6ICcxNTQxZGQxZTA1ZGZjNDM5MjE2JyxcclxuICAgICdmcm9tJzoge1xyXG4gICAgICAnbmFtZSc6ICdTdGVsbGEgSm9obnNvbicsXHJcbiAgICAgICdhdmF0YXInOiAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzE1MHgxNTAnLFxyXG4gICAgICAnZW1haWwnOiAnc3RlbGxhLWpvaG5zb25AZXhhbXBsZS5jb20nXHJcbiAgICB9LFxyXG4gICAgJ3RvJzogW1xyXG4gICAgICB7XHJcbiAgICAgICAgJ25hbWUnOiAnbWUnLFxyXG4gICAgICAgICdlbWFpbCc6ICdyb2JlcnQuam9obnNvbkBleGFtcGxlLmNvbSdcclxuICAgICAgfVxyXG4gICAgXSxcclxuICAgICdzdWJqZWN0JzogJ1NlY3Rpb24gMS4xMC4zMiBvZiBcImRlJyxcclxuICAgICdtZXNzYWdlJzogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIEZ1c2NlIGxvcmVtIGRpYW0sIHB1bHZpbmFyIGlkIG5pc2wgbm9uLCB1bHRyaWNlcyBtYXhpbXVzIG5pYmguIFN1c3BlbmRpc3NlIHV0IGp1c3RvIHZlbGl0LiBOdWxsYW0gYWMgdWx0cmljZXMgcmlzdXMsIHF1aXMgYXVjdG9yIG9yY2kuIFZlc3RpYnVsdW0gdm9sdXRwYXQgbmlzaSBldCBuZXF1ZSBwb3J0YSB1bGxhbWNvcnBlci4gTWFlY2VuYXMgcG9ydHRpdG9yIHBvcnRhIGVyYXQgYWMgc3VzY2lwaXQuIFNlZCBjdXJzdXMgbGVvIHV0IGVsZW1lbnR1bSBmcmluZ2lsbGEuIFxcbiBcXG4gTWFlY2VuYXMgc2VtcGVyIHZpdmVycmEgZXJhdCwgdmVsIHVsbGFtY29ycGVyIGR1aSBlZmZpY2l0dXIgaW4uIFZlc3RpYnVsdW0gcGxhY2VyYXQgaW1wZXJkaWV0IHRlbGx1cywgZXQgdGluY2lkdW50IGVyb3MgcG9zdWVyZSBlZ2V0LiBQcm9pbiBzaXQgYW1ldCBmYWNpbGlzaXMgbGliZXJvLiBOdWxsYSBlZ2V0IGVzdCB1dCBlcmF0IGFsaXF1ZXQgcmhvbmN1cy4gUXVpc3F1ZSBhYyB1cm5hIHZpdGFlIGR1aSBoZW5kcmVyaXQgc29sbGljaXR1ZGluIHZlbCBpZCBzZW0uICBJbiBlZ2V0IGFudGUgc2FwaWVuLiBRdWlzcXVlIGNvbnNlcXVhdCB2ZWxpdCBub24gYW50ZSBmaW5pYnVzLCB2ZWwgcGxhY2VyYXQgZXJhdCB1bHRyaWNpZXMuIEFsaXF1YW0gYmliZW5kdW0ganVzdG8gZXJhdCwgdWx0cmljZXMgdmVoaWN1bGEgZG9sb3IgZWxlbWVudHVtIGEuIE1hdXJpcyBldSBuaXNsIGZldWdpYXQgbGlndWxhIG1vbGVzdGllIGVsZWlmZW5kLiBBbGlxdWFtIGVmZmljaXR1ciB2ZW5lbmF0aXMgdmVsaXQgYWMgcG9ydGEuIFZpdmFtdXMgdml0YWUgcHVsdmluYXIgdGVsbHVzLiBEb25lYyBvZGlvIGVuaW0sIGF1Y3RvciBlZ2V0IG5pYmggbWF0dGlzLCB1bHRyaWNpZXMgZGlnbmlzc2ltIGxhY3VzLlxcbiBQaGFzZWxsdXMgbm9uIHRpbmNpZHVudCBkdWkuIE51bGxhIGV1IGFyY3UgbG9yZW0uICBEb25lYyBub24gaGVuZHJlcml0IGF1Z3VlLCBsb2JvcnRpcyBzb2xsaWNpdHVkaW4gb2Rpby4gQ2xhc3MgYXB0ZW50IHRhY2l0aSBzb2Npb3NxdSBhZCBsaXRvcmEgdG9ycXVlbnQgcGVyIGNvbnViaWEgbm9zdHJhLCBwZXIgaW5jZXB0b3MgaGltZW5hZW9zLiBEdWlzIHNpdCBhbWV0IGV1aXNtb2QgZW5pbSwgZWdldCB2ZXN0aWJ1bHVtIGp1c3RvLiBGdXNjZSBhIHBsYWNlcmF0IGxlY3R1cywgZWdldCBmZXVnaWF0IHB1cnVzLiBDcmFzIHJpc3VzIGFudGUsIGZhdWNpYnVzIGVnZXQganVzdG8gY29tbW9kbywgdm9sdXRwYXQgdGVtcG9yIGFudGUuIERvbmVjIHNpdCBhbWV0IGxlbyB2ZW5lbmF0aXMsIGdyYXZpZGEgcXVhbSBzaXQgYW1ldCwgYmxhbmRpdCBkdWkuIEluIHF1YW0gYW50ZSwgZWxlbWVudHVtIHV0IGZhdWNpYnVzIG5lYywgdHJpc3RpcXVlIHZpdGFlIGR1aS4gUHJhZXNlbnQgdmVsIGVyYXQgYXQgZW5pbSBwbGFjZXJhdCBsdWN0dXMgdmVsIHV0IGlwc3VtLiBJbiBjb25ndWUgdGVtcG9yIG1pLCBub24gb3JuYXJlIGxlY3R1cyBjb25kaW1lbnR1bSBhdC4gQWVuZWFuIGxpYmVybyBkaWFtLCBmaW5pYnVzIGVnZXQgc2FwaWVuIGV0LCB0cmlzdGlxdWUgZmVybWVudHVtIGxvcmVtLiAgJyxcclxuICAgICd0aW1lJzogJzI1IE5vdicsXHJcbiAgICAncmVhZCc6IHRydWUsXHJcbiAgICAnc3RhcnJlZCc6IGZhbHNlLFxyXG4gICAgJ2ltcG9ydGFudCc6IGZhbHNlLFxyXG4gICAgJ2hhc0F0dGFjaG1lbnRzJzogZmFsc2UsXHJcbiAgICAnbGFiZWxzJzogW10sXHJcbiAgICAnc2VsZWN0ZWQnOiBmYWxzZSxcclxuICAgICdmb2xkZXInOiAzXHJcbiAgfSxcclxuICB7XHJcbiAgICAnaWQnOiAnMTU0MWRkMWUwNWRmYzQzOTIxNycsXHJcbiAgICAnZnJvbSc6IHtcclxuICAgICAgJ25hbWUnOiAnU3RldmUgU21pdGgnLFxyXG4gICAgICAnYXZhdGFyJzogJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8xNTB4MTUwJyxcclxuICAgICAgJ2VtYWlsJzogJ3N0ZXZlc21pdGhAZXhhbXBsZS5jb20nXHJcbiAgICB9LFxyXG4gICAgJ3RvJzogW1xyXG4gICAgICB7XHJcbiAgICAgICAgJ25hbWUnOiAnbWUnLFxyXG4gICAgICAgICdlbWFpbCc6ICdyb2JlcnQuam9obnNvbkBleGFtcGxlLmNvbSdcclxuICAgICAgfVxyXG4gICAgXSxcclxuICAgICdzdWJqZWN0JzogJ0ludGVnZXIgbmVjIHRlbXB1cyBlcm9zLicsXHJcbiAgICAnbWVzc2FnZSc6ICdDdXJhYml0dXIgaWQgcnV0cnVtIGV4LiBNb3JiaSB0ZW1wdXMgbGliZXJvIGVnZXQgbWF1cmlzIHVsdHJpY2llcyB2ZW5lbmF0aXMuIEN1cmFiaXR1ciBlZ2V0IHBlbGxlbnRlc3F1ZSBsb3JlbS4gTW9yYmkgaW4gdGVtcG9yIHNlbSwgdmVsIHBvc3VlcmUgb2Rpby4gVml2YW11cyBzaXQgYW1ldCBlZmZpY2l0dXIgdG9ydG9yLiBGdXNjZSBpbiB0b3J0b3Igbm9uIGxvcmVtIGJsYW5kaXQgZWxlaWZlbmQgcXVpcyBldSByaXN1cy4gRG9uZWMgbG9ib3J0aXMgZXgganVzdG8sIHNlZCBzdXNjaXBpdCBkb2xvciBwb3N1ZXJlIGVnZXQuJyxcclxuICAgICd0aW1lJzogJzI0IE5vdicsXHJcbiAgICAncmVhZCc6IHRydWUsXHJcbiAgICAnc3RhcnJlZCc6IGZhbHNlLFxyXG4gICAgJ2ltcG9ydGFudCc6IGZhbHNlLFxyXG4gICAgJ2hhc0F0dGFjaG1lbnRzJzogZmFsc2UsXHJcbiAgICAnbGFiZWxzJzogW10sXHJcbiAgICAnc2VsZWN0ZWQnOiBmYWxzZSxcclxuICAgICdmb2xkZXInOiAzXHJcbiAgfVxyXG5dO1xyXG4iLCJleHBvcnQgZGVmYXVsdCBbXHJcblxyXG4gIHtcclxuICAgICd0aXRsZSc6ICdBbGwnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgJ3RpdGxlJzogJ05vbmUnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgJ3RpdGxlJzogJ1JlYWQnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgJ3RpdGxlJzogJ1VucmVhZCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICAndGl0bGUnOiAnU3RhcnJlZCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICAndGl0bGUnOiAnVW5zdGFycmVkJyxcclxuICB9LFxyXG4gIHtcclxuICAgICd0aXRsZSc6ICdJbXBvcnRhbnQnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgJ3RpdGxlJzogJ1VuaW1wb3J0YW50JyxcclxuICB9XHJcbl07XHJcbiIsImltcG9ydCBSZWFjdCwge1B1cmVDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0J1dHRvbiwgQ2hlY2tib3gsIERyYXdlciwgRHJvcGRvd24sIE1lbnUsIG1lc3NhZ2V9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBDdXN0b21TY3JvbGxiYXJzIGZyb20gXCIuLi8uLi8uLi91dGlsL0N1c3RvbVNjcm9sbGJhcnNcIjtcclxuXHJcbmltcG9ydCBtYWlscyBmcm9tIFwiLi9kYXRhL21haWxzXCI7XHJcbmltcG9ydCBmb2xkZXJzIGZyb20gXCIuL2RhdGEvZm9sZGVyc1wiO1xyXG5pbXBvcnQgZmlsdGVycyBmcm9tIFwiLi9kYXRhL2ZpbHRlcnNcIjtcclxuaW1wb3J0IGxhYmVscyBmcm9tIFwiLi9kYXRhL2xhYmVsc1wiO1xyXG5pbXBvcnQgb3B0aW9ucyBmcm9tIFwiLi9kYXRhL29wdGlvbnNcIjtcclxuaW1wb3J0IE1haWxMaXN0IGZyb20gXCIuLi8uLi8uLi9hcHAvY29tcG9uZW50cy9tYWlsL01haWxMaXN0XCI7XHJcbmltcG9ydCBDb21wb3NlTWFpbCBmcm9tIFwiLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvbWFpbC9Db21wb3NlXCI7XHJcbmltcG9ydCBBcHBNb2R1bGVIZWFkZXIgZnJvbSBcIi4uLy4uLy4uL2FwcC9jb21wb25lbnRzL0FwcE1vZHVsZUhlYWRlclwiO1xyXG5pbXBvcnQgTWFpbERldGFpbCBmcm9tIFwiLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvbWFpbC9NYWlsRGV0YWlsXCI7XHJcbmltcG9ydCBJbnRsTWVzc2FnZXMgZnJvbSBcIi4uLy4uLy4uL3V0aWwvSW50bE1lc3NhZ2VzXCI7XHJcbmltcG9ydCBDaXJjdWxhclByb2dyZXNzIGZyb20gXCIuLi8uLi8uLi9hcHAvY29tcG9uZW50cy9DaXJjdWxhclByb2dyZXNzXCI7XHJcblxyXG5pbXBvcnQgc2VjdXJlZFBhZ2UgZnJvbSAnLi4vLi4vLi4vYXBwL2hvYy9zZWN1cmVkUGFnZSc7XHJcbmltcG9ydCAnLi9pbmRleC5jc3MnO1xyXG5cclxuXHJcbmNsYXNzIE1haWwgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcclxuXHJcbiAgTWFpbFNpZGVCYXIgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJneC1tb2R1bGUtc2lkZVwiPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1tb2R1bGUtc2lkZS1oZWFkZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LW1vZHVsZS1sb2dvXCI+XHJcbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGljb24tY2hhdCBneC1tci00XCIvPlxyXG4gICAgICAgICAgPEludGxNZXNzYWdlcyBpZD1cInNpZGViYXIubWFpbC5tYWlsYm94XCIvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtbW9kdWxlLXNpZGUtY29udGVudFwiPlxyXG4gICAgICAgIDxDdXN0b21TY3JvbGxiYXJzIGNsYXNzTmFtZT1cImd4LW1vZHVsZS1zaWRlLXNjcm9sbFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1tb2R1bGUtYWRkLXRhc2tcIj5cclxuICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGNsYXNzTmFtZT1cImd4LWJ0bi1ibG9ja1wiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Y29tcG9zZU1haWw6IHRydWV9KVxyXG4gICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1lZGl0IGd4LW1yLTJcIi8+XHJcbiAgICAgICAgICAgICAgPEludGxNZXNzYWdlcyBpZD1cInNpZGViYXIubWFpbC5jb21wb3NlXCIvPjwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImd4LW1vZHVsZS1uYXZcIj5cclxuICAgICAgICAgICAge3RoaXMuZ2V0TmF2Rm9sZGVycygpfVxyXG5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImd4LW1vZHVsZS1uYXYtbGFiZWxcIj5cclxuICAgICAgICAgICAgICA8SW50bE1lc3NhZ2VzIGlkPVwic2lkZWJhci5tYWlsLmZpbHRlcnNcIi8+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgICB7dGhpcy5nZXROYXZGaWx0ZXJzKCl9XHJcblxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZ3gtbW9kdWxlLW5hdi1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgIDxJbnRsTWVzc2FnZXMgaWQ9XCJzaWRlYmFyLm1haWwubGFiZWxzXCIvPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgICAge3RoaXMuZ2V0TmF2TGFiZWxzKCl9XHJcblxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L0N1c3RvbVNjcm9sbGJhcnM+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgfTtcclxuXHJcbiAgb25EZWxldGVNYWlsID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbWFpbHMgPSB0aGlzLnN0YXRlLmFsbE1haWwubWFwKG1haWwgPT5cclxuICAgICAgbWFpbC5zZWxlY3RlZCAmJiAobWFpbC5mb2xkZXIgPT09IHRoaXMuc3RhdGUuc2VsZWN0ZWRGb2xkZXIpID9cclxuICAgICAgICB7Li4ubWFpbCwgZm9sZGVyOiA0LCBzZWxlY3RlZDogZmFsc2UsfSA6IG1haWxcclxuICAgICk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgYWxlcnRNZXNzYWdlOiAnTWFpbCBEZWxldGVkIFN1Y2Nlc3NmdWxseScsXHJcbiAgICAgIHNob3dNZXNzYWdlOiB0cnVlLFxyXG4gICAgICBzZWxlY3RlZE1haWxzOiAwLFxyXG4gICAgICBhbGxNYWlsOiBtYWlscyxcclxuICAgICAgZm9sZGVyTWFpbHM6IG1haWxzLmZpbHRlcihtYWlsID0+IG1haWwuZm9sZGVyID09PSB0aGlzLnN0YXRlLnNlbGVjdGVkRm9sZGVyKVxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgZ2V0TmF2Rm9sZGVycyA9ICgpID0+IHtcclxuICAgIHJldHVybiBmb2xkZXJzLm1hcCgoZm9sZGVyLCBpbmRleCkgPT5cclxuICAgICAgPGxpIGtleT17aW5kZXh9IG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICBjb25zdCBmaWx0ZXJNYWlscyA9IHRoaXMuc3RhdGUuYWxsTWFpbC5maWx0ZXIobWFpbCA9PiBtYWlsLmZvbGRlciA9PT0gZm9sZGVyLmlkKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgIHNlbGVjdGVkRm9sZGVyOiBmb2xkZXIuaWQsXHJcbiAgICAgICAgICBub0NvbnRlbnRGb3VuZE1lc3NhZ2U6ICdObyBNYWlsIGZvdW5kIGluIHNlbGVjdGVkIGZvbGRlcicsXHJcbiAgICAgICAgICBjdXJyZW50TWFpbDogbnVsbCxcclxuICAgICAgICAgIGxvYWRlcjogdHJ1ZSxcclxuICAgICAgICAgIGZvbGRlck1haWxzOiBmaWx0ZXJNYWlsc1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bG9hZGVyOiBmYWxzZX0pO1xyXG4gICAgICAgIH0sIDE1MDApO1xyXG4gICAgICB9XHJcbiAgICAgIH0+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgJHt0aGlzLnN0YXRlLnNlbGVjdGVkRm9sZGVyID09PSBmb2xkZXIuaWQgPyAnYWN0aXZlIGd4LWxpbmsnIDogJ2d4LWxpbmsnfWB9PlxyXG4gICAgICAgICAgPGkgY2xhc3NOYW1lPXtgaWNvbiBpY29uLSR7Zm9sZGVyLmljb259YH0vPlxyXG4gICAgICAgICAgPHNwYW4+e2ZvbGRlci50aXRsZX08L3NwYW4+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICA8L2xpPlxyXG4gICAgKVxyXG4gIH07XHJcblxyXG5cclxuICBvbkZvbGRlck1lbnVJdGVtU2VsZWN0ID0gKGUpID0+IHtcclxuICAgIGNvbnN0IGlkID0gK2Uua2V5O1xyXG4gICAgY29uc3QgbWFpbHMgPSB0aGlzLnN0YXRlLmFsbE1haWwubWFwKG1haWwgPT5cclxuICAgICAgbWFpbC5zZWxlY3RlZCAmJiAobWFpbC5mb2xkZXIgPT09IHRoaXMuc3RhdGUuc2VsZWN0ZWRGb2xkZXIpID9cclxuICAgICAgICB7Li4ubWFpbCwgZm9sZGVyOiBpZCwgc2VsZWN0ZWQ6IGZhbHNlLH0gOiBtYWlsXHJcbiAgICApO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHNlbGVjdGVkTWFpbHM6IDAsXHJcbiAgICAgIGFsbE1haWw6IG1haWxzLFxyXG4gICAgICBub0NvbnRlbnRGb3VuZE1lc3NhZ2U6ICdObyBNYWlsIGZvdW5kIGluIHNlbGVjdGVkIGZvbGRlcicsXHJcbiAgICAgIGFsZXJ0TWVzc2FnZTogJ01haWwgaGFzIGJlZW4gbW92ZWQgc3VjY2Vzc2Z1bGx5JyxcclxuICAgICAgc2hvd01lc3NhZ2U6IHRydWUsXHJcbiAgICAgIGZvbGRlck1haWxzOiBtYWlscy5maWx0ZXIobWFpbCA9PiBtYWlsLmZvbGRlciA9PT0gdGhpcy5zdGF0ZS5zZWxlY3RlZEZvbGRlcilcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIG9uTGFiZWxNZW51SXRlbVNlbGVjdCA9IChlKSA9PiB7XHJcbiAgICBjb25zdCBpZCA9ICtlLmtleTtcclxuICAgIGNvbnN0IG1haWxzID0gdGhpcy5zdGF0ZS5hbGxNYWlsLm1hcChtYWlsID0+IHtcclxuICAgICAgICBpZiAobWFpbC5zZWxlY3RlZCAmJiAobWFpbC5mb2xkZXIgPT09IHRoaXMuc3RhdGUuc2VsZWN0ZWRGb2xkZXIpKSB7XHJcbiAgICAgICAgICBpZiAobWFpbC5sYWJlbHMuaW5jbHVkZXMoaWQpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4ubWFpbCwgbGFiZWxzOiB0aGlzLnJlbW92ZUxhYmVsKG1haWwsIGlkKX07XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gey4uLm1haWwsIGxhYmVsczogdGhpcy5hZGRMYWJlbChtYWlsLCBpZCl9O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gbWFpbDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgbm9Db250ZW50Rm91bmRNZXNzYWdlOiAnTm8gTWFpbCBmb3VuZCBpbiBzZWxlY3RlZCBsYWJlbCcsXHJcbiAgICAgIGFsZXJ0TWVzc2FnZTogJ0xhYmVsIFVwZGF0ZWQgU3VjY2Vzc2Z1bGx5JyxcclxuICAgICAgc2hvd01lc3NhZ2U6IHRydWUsXHJcbiAgICAgIGFsbE1haWw6IG1haWxzLFxyXG4gICAgICBmb2xkZXJNYWlsczogbWFpbHMuZmlsdGVyKG1haWwgPT4gbWFpbC5mb2xkZXIgPT09IHRoaXMuc3RhdGUuc2VsZWN0ZWRGb2xkZXIpXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVSZXF1ZXN0Q2xvc2UgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgY29tcG9zZU1haWw6IGZhbHNlLFxyXG4gICAgICBzaG93TWVzc2FnZTogZmFsc2UsXHJcbiAgICB9KTtcclxuICB9O1xyXG4gIGdldE5hdkZpbHRlcnMgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gZmlsdGVycy5tYXAoKGZpbHRlciwgaW5kZXgpID0+XHJcbiAgICAgIDxsaSBrZXk9e2luZGV4fSBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZmlsdGVyTWFpbHMgPSB0aGlzLnN0YXRlLmFsbE1haWwuZmlsdGVyKG1haWwgPT4ge1xyXG4gICAgICAgICAgaWYgKGZpbHRlci5pZCA9PT0gMCAmJiBtYWlsLnN0YXJyZWQgJiYgbWFpbC5mb2xkZXIgPT09IHRoaXMuc3RhdGUuc2VsZWN0ZWRGb2xkZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG1haWxcclxuICAgICAgICAgIH0gZWxzZSBpZiAoZmlsdGVyLmlkID09PSAxICYmIG1haWwuaW1wb3J0YW50ICYmIG1haWwuZm9sZGVyID09PSB0aGlzLnN0YXRlLnNlbGVjdGVkRm9sZGVyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBtYWlsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgIG5vQ29udGVudEZvdW5kTWVzc2FnZTogJ05vIE1haWwgZm91bmQgaW4gc2VsZWN0ZWQgZmlsdGVyJyxcclxuICAgICAgICAgIGxvYWRlcjogdHJ1ZSxcclxuICAgICAgICAgIGZvbGRlck1haWxzOiBmaWx0ZXJNYWlsc1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bG9hZGVyOiBmYWxzZX0pO1xyXG4gICAgICAgIH0sIDE1MDApO1xyXG4gICAgICB9XHJcbiAgICAgIH0+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ3gtbGlua1wiPlxyXG4gICAgICAgICAgPGkgY2xhc3NOYW1lPXtgaWNvbiBpY29uLSR7ZmlsdGVyLmljb259YH0vPlxyXG4gICAgICAgICAgPHNwYW4+e2ZpbHRlci50aXRsZX08L3NwYW4+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICA8L2xpPlxyXG4gICAgKVxyXG4gIH07XHJcbiAgb25PcHRpb25NZW51SXRlbVNlbGVjdCA9IChlKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGUua2V5KSB7XHJcbiAgICAgIGNhc2UgJ0FsbCc6XHJcbiAgICAgICAgdGhpcy5oYW5kbGVSZXF1ZXN0Q2xvc2UoKTtcclxuICAgICAgICB0aGlzLmdldEFsbE1haWwoKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnTm9uZSc6XHJcbiAgICAgICAgdGhpcy5oYW5kbGVSZXF1ZXN0Q2xvc2UoKTtcclxuICAgICAgICB0aGlzLmdldFVuc2VsZWN0ZWRBbGxNYWlsKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ1JlYWQnOlxyXG4gICAgICAgIHRoaXMuaGFuZGxlUmVxdWVzdENsb3NlKCk7XHJcbiAgICAgICAgdGhpcy5nZXRSZWFkTWFpbCgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdVbnJlYWQnOlxyXG4gICAgICAgIHRoaXMuaGFuZGxlUmVxdWVzdENsb3NlKCk7XHJcbiAgICAgICAgdGhpcy5nZXRVbnJlYWRNYWlsKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ1N0YXJyZWQnOlxyXG4gICAgICAgIHRoaXMuaGFuZGxlUmVxdWVzdENsb3NlKCk7XHJcbiAgICAgICAgdGhpcy5nZXRTdGFycmVkTWFpbCgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdVbnN0YXJyZWQnOlxyXG4gICAgICAgIHRoaXMuaGFuZGxlUmVxdWVzdENsb3NlKCk7XHJcbiAgICAgICAgdGhpcy5nZXRVblN0YXJyZWRNYWlsKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ0ltcG9ydGFudCc6XHJcbiAgICAgICAgdGhpcy5oYW5kbGVSZXF1ZXN0Q2xvc2UoKTtcclxuICAgICAgICB0aGlzLmdldEltcG9ydGFudE1haWwoKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnVW5pbXBvcnRhbnQnOlxyXG4gICAgICAgIHRoaXMuaGFuZGxlUmVxdWVzdENsb3NlKCk7XHJcbiAgICAgICAgdGhpcy5nZXRVbmltcG9ydGFudE1haWwoKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBnZXRBbGxNYWlsID0gKCkgPT4ge1xyXG4gICAgbGV0IG1haWxzID0gdGhpcy5zdGF0ZS5hbGxNYWlsLm1hcCgobWFpbCkgPT4gbWFpbC5mb2xkZXIgPT09IHRoaXMuc3RhdGUuc2VsZWN0ZWRGb2xkZXIgPyB7XHJcbiAgICAgIC4uLm1haWwsXHJcbiAgICAgIHNlbGVjdGVkOiB0cnVlXHJcbiAgICB9IDogbWFpbCk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgc2VsZWN0ZWRNYWlsczogbWFpbHMubGVuZ3RoLFxyXG4gICAgICBhbGxNYWlsOiBtYWlscyxcclxuICAgICAgb3B0aW9uTmFtZTogJ0FsbCcsXHJcbiAgICAgIGZvbGRlck1haWxzOiBtYWlscy5maWx0ZXIobWFpbCA9PiBtYWlsLmZvbGRlciA9PT0gdGhpcy5zdGF0ZS5zZWxlY3RlZEZvbGRlcilcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgZ2V0VW5zZWxlY3RlZEFsbE1haWwgPSAoKSA9PiB7XHJcbiAgICBsZXQgbWFpbHMgPSB0aGlzLnN0YXRlLmFsbE1haWwubWFwKChtYWlsKSA9PiBtYWlsLmZvbGRlciA9PT0gdGhpcy5zdGF0ZS5zZWxlY3RlZEZvbGRlciA/IHtcclxuICAgICAgLi4ubWFpbCxcclxuICAgICAgc2VsZWN0ZWQ6IGZhbHNlXHJcbiAgICB9IDogbWFpbCk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgc2VsZWN0ZWRNYWlsczogMCxcclxuICAgICAgYWxsTWFpbDogbWFpbHMsXHJcbiAgICAgIG9wdGlvbk5hbWU6ICdOb25lJyxcclxuICAgICAgZm9sZGVyTWFpbHM6IG1haWxzLmZpbHRlcihtYWlsID0+IG1haWwuZm9sZGVyID09PSB0aGlzLnN0YXRlLnNlbGVjdGVkRm9sZGVyKVxyXG4gICAgfSk7XHJcbiAgfTtcclxuICBnZXRSZWFkTWFpbCA9ICgpID0+IHtcclxuICAgIGxldCBzZWxlY3RlZE1haWwgPSAwO1xyXG4gICAgbGV0IG1haWxzID0gdGhpcy5zdGF0ZS5hbGxNYWlsLmZpbHRlcihtYWlsID0+IG1haWwuZm9sZGVyID09PSB0aGlzLnN0YXRlLnNlbGVjdGVkRm9sZGVyKTtcclxuICAgIG1haWxzID0gbWFpbHMubWFwKChtYWlsKSA9PiB7XHJcbiAgICAgIGlmIChtYWlsLnJlYWQpIHtcclxuICAgICAgICBzZWxlY3RlZE1haWwrKztcclxuICAgICAgICByZXR1cm4gey4uLm1haWwsIHNlbGVjdGVkOiB0cnVlfTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gey4uLm1haWwsIHNlbGVjdGVkOiBmYWxzZX1cclxuICAgIH0pO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHNlbGVjdGVkTWFpbHM6IHNlbGVjdGVkTWFpbCxcclxuICAgICAgb3B0aW9uTmFtZTogJ1JlYWQnLFxyXG4gICAgICBmb2xkZXJNYWlsczogbWFpbHMuZmlsdGVyKG1haWwgPT4gbWFpbC5mb2xkZXIgPT09IHRoaXMuc3RhdGUuc2VsZWN0ZWRGb2xkZXIpXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBtYWlscztcclxuICB9O1xyXG4gIGdldFVucmVhZE1haWwgPSAoKSA9PiB7XHJcbiAgICBsZXQgc2VsZWN0ZWRNYWlsID0gMDtcclxuICAgIGxldCBtYWlscyA9IHRoaXMuc3RhdGUuYWxsTWFpbC5maWx0ZXIobWFpbCA9PiBtYWlsLmZvbGRlciA9PT0gdGhpcy5zdGF0ZS5zZWxlY3RlZEZvbGRlcik7XHJcbiAgICBtYWlscyA9IG1haWxzLm1hcCgobWFpbCkgPT4ge1xyXG4gICAgICBpZiAoIW1haWwucmVhZCkge1xyXG4gICAgICAgIHNlbGVjdGVkTWFpbCsrO1xyXG4gICAgICAgIHJldHVybiB7Li4ubWFpbCwgc2VsZWN0ZWQ6IHRydWV9O1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB7Li4ubWFpbCwgc2VsZWN0ZWQ6IGZhbHNlfVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgc2VsZWN0ZWRNYWlsczogc2VsZWN0ZWRNYWlsLFxyXG4gICAgICBvcHRpb25OYW1lOiAnVW5yZWFkJyxcclxuICAgICAgZm9sZGVyTWFpbHM6IG1haWxzLmZpbHRlcihtYWlsID0+IG1haWwuZm9sZGVyID09PSB0aGlzLnN0YXRlLnNlbGVjdGVkRm9sZGVyKVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gbWFpbHM7XHJcbiAgfTtcclxuICBnZXRTdGFycmVkTWFpbCA9ICgpID0+IHtcclxuICAgIGxldCBzZWxlY3RlZE1haWwgPSAwO1xyXG4gICAgbGV0IG1haWxzID0gdGhpcy5zdGF0ZS5hbGxNYWlsLmZpbHRlcihtYWlsID0+IG1haWwuZm9sZGVyID09PSB0aGlzLnN0YXRlLnNlbGVjdGVkRm9sZGVyKTtcclxuICAgIG1haWxzID0gbWFpbHMubWFwKChtYWlsKSA9PiB7XHJcbiAgICAgIGlmIChtYWlsLnN0YXJyZWQpIHtcclxuICAgICAgICBzZWxlY3RlZE1haWwrKztcclxuICAgICAgICByZXR1cm4gey4uLm1haWwsIHNlbGVjdGVkOiB0cnVlfTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gey4uLm1haWwsIHNlbGVjdGVkOiBmYWxzZX1cclxuICAgIH0pO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHNlbGVjdGVkTWFpbHM6IHNlbGVjdGVkTWFpbCxcclxuICAgICAgb3B0aW9uTmFtZTogJ1N0YXJyZWQnLFxyXG4gICAgICBmb2xkZXJNYWlsczogbWFpbHMuZmlsdGVyKG1haWwgPT4gbWFpbC5mb2xkZXIgPT09IHRoaXMuc3RhdGUuc2VsZWN0ZWRGb2xkZXIpXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBtYWlscztcclxuICB9O1xyXG4gIGdldFVuU3RhcnJlZE1haWwgPSAoKSA9PiB7XHJcbiAgICBsZXQgc2VsZWN0ZWRNYWlsID0gMDtcclxuICAgIGxldCBtYWlscyA9IHRoaXMuc3RhdGUuYWxsTWFpbC5maWx0ZXIobWFpbCA9PiBtYWlsLmZvbGRlciA9PT0gdGhpcy5zdGF0ZS5zZWxlY3RlZEZvbGRlciAmJiBtYWlsLmZvbGRlciA9PT0gdGhpcy5zdGF0ZS5zZWxlY3RlZEZvbGRlcik7XHJcbiAgICBtYWlscyA9IG1haWxzLm1hcCgobWFpbCkgPT4ge1xyXG4gICAgICBpZiAoIW1haWwuc3RhcnJlZCkge1xyXG4gICAgICAgIHNlbGVjdGVkTWFpbCsrO1xyXG4gICAgICAgIHJldHVybiB7Li4ubWFpbCwgc2VsZWN0ZWQ6IHRydWV9O1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB7Li4ubWFpbCwgc2VsZWN0ZWQ6IGZhbHNlfVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgc2VsZWN0ZWRNYWlsczogc2VsZWN0ZWRNYWlsLFxyXG4gICAgICBvcHRpb25OYW1lOiAnVW5TdGFycmVkJyxcclxuICAgICAgZm9sZGVyTWFpbHM6IG1haWxzLmZpbHRlcihtYWlsID0+IG1haWwuZm9sZGVyID09PSB0aGlzLnN0YXRlLnNlbGVjdGVkRm9sZGVyKVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gbWFpbHM7XHJcbiAgfTtcclxuICBnZXRJbXBvcnRhbnRNYWlsID0gKCkgPT4ge1xyXG4gICAgbGV0IHNlbGVjdGVkTWFpbCA9IDA7XHJcbiAgICBsZXQgbWFpbHMgPSB0aGlzLnN0YXRlLmFsbE1haWwuZmlsdGVyKG1haWwgPT4gbWFpbC5mb2xkZXIgPT09IHRoaXMuc3RhdGUuc2VsZWN0ZWRGb2xkZXIgJiYgbWFpbC5mb2xkZXIgPT09IHRoaXMuc3RhdGUuc2VsZWN0ZWRGb2xkZXIpO1xyXG4gICAgbWFpbHMgPSBtYWlscy5tYXAoKG1haWwpID0+IHtcclxuICAgICAgaWYgKG1haWwuaW1wb3J0YW50KSB7XHJcbiAgICAgICAgc2VsZWN0ZWRNYWlsKys7XHJcbiAgICAgICAgcmV0dXJuIHsuLi5tYWlsLCBzZWxlY3RlZDogdHJ1ZX07XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHsuLi5tYWlsLCBzZWxlY3RlZDogZmFsc2V9XHJcbiAgICB9KTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBzZWxlY3RlZE1haWxzOiBzZWxlY3RlZE1haWwsXHJcbiAgICAgIG9wdGlvbk5hbWU6ICdJbXBvcnRhbnQnLFxyXG4gICAgICBmb2xkZXJNYWlsczogbWFpbHMuZmlsdGVyKG1haWwgPT4gbWFpbC5mb2xkZXIgPT09IHRoaXMuc3RhdGUuc2VsZWN0ZWRGb2xkZXIpXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBtYWlscztcclxuICB9O1xyXG4gIGdldFVuaW1wb3J0YW50TWFpbCA9ICgpID0+IHtcclxuICAgIGxldCBzZWxlY3RlZE1haWwgPSAwO1xyXG4gICAgbGV0IG1haWxzID0gdGhpcy5zdGF0ZS5hbGxNYWlsLmZpbHRlcihtYWlsID0+IG1haWwuZm9sZGVyID09PSB0aGlzLnN0YXRlLnNlbGVjdGVkRm9sZGVyICYmIG1haWwuZm9sZGVyID09PSB0aGlzLnN0YXRlLnNlbGVjdGVkRm9sZGVyKTtcclxuICAgIG1haWxzID0gbWFpbHMubWFwKChtYWlsKSA9PiB7XHJcbiAgICAgIGlmICghbWFpbC5pbXBvcnRhbnQpIHtcclxuICAgICAgICBzZWxlY3RlZE1haWwrKztcclxuICAgICAgICByZXR1cm4gey4uLm1haWwsIHNlbGVjdGVkOiB0cnVlfTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gey4uLm1haWwsIHNlbGVjdGVkOiBmYWxzZX1cclxuICAgIH0pO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHNlbGVjdGVkTWFpbHM6IHNlbGVjdGVkTWFpbCxcclxuICAgICAgb3B0aW9uTmFtZTogJ1VuaW1wb3J0YW50JyxcclxuICAgICAgbm9Db250ZW50Rm91bmRNZXNzYWdlOiAnTm8gTWFpbCBmb3VuZCBpbiBzZWxlY3RlZCBMYWJlbCcsXHJcbiAgICAgIGZvbGRlck1haWxzOiBtYWlscy5maWx0ZXIobWFpbCA9PiBtYWlsLmZvbGRlciA9PT0gdGhpcy5zdGF0ZS5zZWxlY3RlZEZvbGRlcilcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIG1haWxzO1xyXG4gIH07XHJcbiAgZ2V0TmF2TGFiZWxzID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIGxhYmVscy5tYXAoKGxhYmVsLCBpbmRleCkgPT5cclxuICAgICAgPGxpIGtleT17aW5kZXh9IG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICBjb25zdCBmaWx0ZXJNYWlscyA9IHRoaXMuc3RhdGUuYWxsTWFpbC5maWx0ZXIobWFpbCA9PiBtYWlsLmxhYmVscy5pbmNsdWRlcyhsYWJlbC5pZCkgJiYgbWFpbC5mb2xkZXIgPT09IHRoaXMuc3RhdGUuc2VsZWN0ZWRGb2xkZXIpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgbG9hZGVyOiB0cnVlLFxyXG4gICAgICAgICAgbm9Db250ZW50Rm91bmRNZXNzYWdlOiAnTm8gTWFpbCBmb3VuZCBpbiBzZWxlY3RlZCBsYWJlbCcsXHJcbiAgICAgICAgICBmb2xkZXJNYWlsczogZmlsdGVyTWFpbHNcclxuICAgICAgICB9KTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2xvYWRlcjogZmFsc2V9KTtcclxuICAgICAgICB9LCAxNTAwKTtcclxuICAgICAgfVxyXG4gICAgICB9PlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImd4LWxpbmtcIj5cclxuICAgICAgICAgIDxpIGNsYXNzTmFtZT17YGljb24gaWNvbi10YWcgZ3gtdGV4dC0ke2xhYmVsLmNvbG9yfWB9Lz5cclxuICAgICAgICAgIDxzcGFuPntsYWJlbC50aXRsZX08L3NwYW4+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICA8L2xpPlxyXG4gICAgKVxyXG4gIH07XHJcbiAgc2VhcmNoTWFpbCA9IChzZWFyY2hUZXh0KSA9PiB7XHJcbiAgICBpZiAoc2VhcmNoVGV4dCA9PT0gJycpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7Zm9sZGVyTWFpbHM6IHRoaXMuc3RhdGUuYWxsTWFpbC5maWx0ZXIoKG1haWwpID0+ICFtYWlsLmRlbGV0ZWQpfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBzZWFyY2hNYWlscyA9IHRoaXMuc3RhdGUuYWxsTWFpbC5maWx0ZXIoKG1haWwpID0+XHJcbiAgICAgICAgIW1haWwuZGVsZXRlZCAmJiBtYWlsLnN1YmplY3QudG9Mb3dlckNhc2UoKS5pbmRleE9mKHNlYXJjaFRleHQudG9Mb3dlckNhc2UoKSkgPiAtMSk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIGZvbGRlck1haWxzOiBzZWFyY2hNYWlsc1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG4gIGRpc3BsYXlNYWlsID0gKGN1cnJlbnRNYWlsLCBmb2xkZXJNYWlscywgbm9Db250ZW50Rm91bmRNZXNzYWdlKSA9PiB7XHJcbiAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPVwiZ3gtbW9kdWxlLWJveC1jb2x1bW5cIj5cclxuICAgICAge2N1cnJlbnRNYWlsID09PSBudWxsID9cclxuICAgICAgICBmb2xkZXJNYWlscy5sZW5ndGggPT09IDAgP1xyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1uby1jb250ZW50LWZvdW5kIGd4LXRleHQtbGlnaHQgZ3gtZC1mbGV4IGd4LWFsaWduLWl0ZW1zLWNlbnRlciBneC1qdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIHtub0NvbnRlbnRGb3VuZE1lc3NhZ2V9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDpcclxuICAgICAgICAgIDxNYWlsTGlzdCBtYWlscz17Zm9sZGVyTWFpbHN9IG9uU3RhcnRTZWxlY3Q9e3RoaXMub25TdGFydFNlbGVjdC5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uTWFpbFNlbGVjdD17dGhpcy5vbk1haWxTZWxlY3QuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICBvbk1haWxDaGVja2VkPXt0aGlzLm9uTWFpbENoZWNrZWQuYmluZCh0aGlzKX0vPlxyXG4gICAgICAgIDpcclxuICAgICAgICA8TWFpbERldGFpbCBtYWlsPXtjdXJyZW50TWFpbH0gb25TdGFydFNlbGVjdD17dGhpcy5vblN0YXJ0U2VsZWN0LmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgb25JbXBvcnRhbnRTZWxlY3Q9e3RoaXMub25JbXBvcnRhbnRTZWxlY3QuYmluZCh0aGlzKX0vPn1cclxuICAgIDwvZGl2PilcclxuICB9O1xyXG4gIGdldE1haWxBY3Rpb25zID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiZ3gtZmxleC1yb3cgZ3gtYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcblxyXG4gICAgICA8RHJvcGRvd24gb3ZlcmxheT17dGhpcy5mb2xkZXJNZW51KCl9IHBsYWNlbWVudD1cImJvdHRvbVJpZ2h0XCIgdHJpZ2dlcj17WydjbGljayddfT5cclxuICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGljb24tZm9sZGVyIGd4LWljb24tYnRuXCIvPlxyXG4gICAgICA8L0Ryb3Bkb3duPlxyXG5cclxuICAgICAgPERyb3Bkb3duIG92ZXJsYXk9e3RoaXMubGFiZWxNZW51KCl9IHBsYWNlbWVudD1cImJvdHRvbVJpZ2h0XCIgdHJpZ2dlcj17WydjbGljayddfT5cclxuICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGljb24tdGFnIGd4LWljb24tYnRuXCIvPlxyXG4gICAgICA8L0Ryb3Bkb3duPlxyXG5cclxuICAgICAgPHNwYW4gb25DbGljaz17dGhpcy5vbkRlbGV0ZU1haWwuYmluZCh0aGlzKX0+XHJcbiAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLXRyYXNoIGd4LWljb24tYnRuXCIvPjwvc3Bhbj5cclxuXHJcbiAgICA8L2Rpdj5cclxuICB9O1xyXG5cclxuICBvcHRpb25NZW51ID0gKCkgPT4gKFxyXG4gICAgPE1lbnUgaWQ9XCJvcHRpb24tbWVudVwiXHJcbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uT3B0aW9uTWVudUl0ZW1TZWxlY3QuYmluZCh0aGlzKX0+XHJcbiAgICAgIHtvcHRpb25zLm1hcChvcHRpb24gPT5cclxuICAgICAgICA8TWVudS5JdGVtIGtleT17b3B0aW9uLnRpdGxlfT5cclxuICAgICAgICAgIHtvcHRpb24udGl0bGV9XHJcbiAgICAgICAgPC9NZW51Lkl0ZW0+LFxyXG4gICAgICApfVxyXG4gICAgPC9NZW51Pik7XHJcblxyXG4gIGZvbGRlck1lbnUgPSAoKSA9PiAoXHJcbiAgICA8TWVudSBpZD1cImZvbGRlci1tZW51XCJcclxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25Gb2xkZXJNZW51SXRlbVNlbGVjdC5iaW5kKHRoaXMpfT5cclxuICAgICAge2ZvbGRlcnMubWFwKGZvbGRlciA9PlxyXG4gICAgICAgIDxNZW51Lkl0ZW0ga2V5PXtmb2xkZXIuaWR9PlxyXG4gICAgICAgICAge2ZvbGRlci50aXRsZX1cclxuICAgICAgICA8L01lbnUuSXRlbT4sXHJcbiAgICAgICl9XHJcbiAgICA8L01lbnU+KTtcclxuXHJcbiAgbGFiZWxNZW51ID0gKCkgPT4gKFxyXG4gICAgPE1lbnUgaWQ9XCJsYWJlbC1tZW51XCJcclxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25MYWJlbE1lbnVJdGVtU2VsZWN0LmJpbmQodGhpcyl9PlxyXG4gICAgICB7bGFiZWxzLm1hcChsYWJlbCA9PlxyXG4gICAgICAgIDxNZW51Lkl0ZW0ga2V5PXtsYWJlbC5pZH0+XHJcbiAgICAgICAgICB7bGFiZWwudGl0bGV9XHJcbiAgICAgICAgPC9NZW51Lkl0ZW0+LFxyXG4gICAgICApfVxyXG4gICAgPC9NZW51PlxyXG4gICk7XHJcblxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBzZWFyY2hNYWlsOiAnJyxcclxuICAgICAgbm9Db250ZW50Rm91bmRNZXNzYWdlOiAnTm8gTWFpbCBmb3VuZCBpbiBzZWxlY3RlZCBmb2xkZXInLFxyXG4gICAgICBhbGVydE1lc3NhZ2U6ICcnLFxyXG4gICAgICBzaG93TWVzc2FnZTogZmFsc2UsXHJcbiAgICAgIGRyYXdlclN0YXRlOiBmYWxzZSxcclxuICAgICAgb3B0aW9uTmFtZTogJ05vbmUnLFxyXG4gICAgICBhbmNob3JFbDogbnVsbCxcclxuICAgICAgYWxsTWFpbDogbWFpbHMsXHJcbiAgICAgIGxvYWRlcjogdHJ1ZSxcclxuICAgICAgY3VycmVudE1haWw6IG51bGwsXHJcbiAgICAgIHVzZXI6IHtcclxuICAgICAgICBuYW1lOiAnUm9iZXJ0IEpvaG5zb24nLFxyXG4gICAgICAgIGVtYWlsOiAncm9iZXJ0QGV4YW1wbGUuY29tJyxcclxuICAgICAgICBhdmF0YXI6ICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMTUweDE1MCdcclxuICAgICAgfSxcclxuICAgICAgc2VsZWN0ZWRNYWlsczogMCxcclxuICAgICAgc2VsZWN0ZWRGb2xkZXI6IDAsXHJcbiAgICAgIGNvbXBvc2VNYWlsOiBmYWxzZSxcclxuICAgICAgZm9sZGVyTWFpbHM6IG1haWxzLmZpbHRlcihtYWlsID0+IG1haWwuZm9sZGVyID09PSAwKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7bG9hZGVyOiBmYWxzZX0pO1xyXG4gICAgfSwgMTUwMCk7XHJcbiAgfVxyXG5cclxuXHJcbiAgb25NYWlsQ2hlY2tlZChkYXRhKSB7XHJcbiAgICBkYXRhLnNlbGVjdGVkID0gIWRhdGEuc2VsZWN0ZWQ7XHJcbiAgICBsZXQgc2VsZWN0ZWRNYWlsID0gMDtcclxuICAgIGNvbnN0IG1haWxzID0gdGhpcy5zdGF0ZS5mb2xkZXJNYWlscy5tYXAobWFpbCA9PiB7XHJcbiAgICAgICAgaWYgKG1haWwuc2VsZWN0ZWQpIHtcclxuICAgICAgICAgIHNlbGVjdGVkTWFpbCsrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobWFpbC5pZCA9PT0gZGF0YS5pZCkge1xyXG4gICAgICAgICAgaWYgKG1haWwuc2VsZWN0ZWQpIHtcclxuICAgICAgICAgICAgc2VsZWN0ZWRNYWlsKys7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuIG1haWw7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICApO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHNlbGVjdGVkTWFpbHM6IHNlbGVjdGVkTWFpbCxcclxuICAgICAgZm9sZGVyTWFpbHM6IG1haWxzXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG9uQWxsTWFpbFNlbGVjdCgpIHtcclxuICAgIGNvbnN0IHNlbGVjdEFsbCA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRNYWlscyA8PSB0aGlzLnN0YXRlLmZvbGRlck1haWxzLmxlbmd0aDtcclxuICAgIGlmIChzZWxlY3RBbGwpIHtcclxuICAgICAgdGhpcy5nZXRBbGxNYWlsKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmdldFVuc2VsZWN0ZWRBbGxNYWlsKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW1vdmVMYWJlbChtYWlsLCBsYWJlbCkge1xyXG4gICAgbWFpbC5sYWJlbHMuc3BsaWNlKG1haWwubGFiZWxzLmluZGV4T2YobGFiZWwpLCAxKTtcclxuICAgIGlmICh0aGlzLnN0YXRlLmN1cnJlbnRNYWlsICE9PSBudWxsICYmIG1haWwuaWQgPT09IHRoaXMuc3RhdGUuY3VycmVudE1haWwuaWQpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgY3VycmVudE1haWw6IHsuLi5tYWlsLCBsYWJlbHM6IG1haWwubGFiZWxzfVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG1haWwubGFiZWxzO1xyXG4gIH1cclxuXHJcbiAgb25TdGFydFNlbGVjdChkYXRhKSB7XHJcbiAgICBkYXRhLnN0YXJyZWQgPSAhZGF0YS5zdGFycmVkO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGFsZXJ0TWVzc2FnZTogZGF0YS5zdGFycmVkID8gJ01haWwgTWFyayBhcyBTdGFyJyA6ICdNYWlsIFJlbW92ZSBhcyBTdGFyJyxcclxuICAgICAgc2hvd01lc3NhZ2U6IHRydWUsXHJcbiAgICAgIGZvbGRlck1haWxzOiB0aGlzLnN0YXRlLmZvbGRlck1haWxzLm1hcChtYWlsID0+XHJcbiAgICAgICAgbWFpbC5pZCA9PT0gZGF0YS5pZCA/XHJcbiAgICAgICAgICBkYXRhIDogbWFpbFxyXG4gICAgICApXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG9uSW1wb3J0YW50U2VsZWN0KGRhdGEpIHtcclxuICAgIGRhdGEuaW1wb3J0YW50ID0gIWRhdGEuaW1wb3J0YW50O1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGFsZXJ0TWVzc2FnZTogZGF0YS5pbXBvcnRhbnQgPyAnTWFpbCBNYXJrIGFzIEltcG9ydGFudCcgOiAnTWFpbCBSZW1vdmUgYXMgSW1wb3J0YW50JyxcclxuICAgICAgc2hvd01lc3NhZ2U6IHRydWUsXHJcbiAgICAgIGZvbGRlck1haWxzOiB0aGlzLnN0YXRlLmZvbGRlck1haWxzLm1hcChtYWlsID0+XHJcbiAgICAgICAgbWFpbC5pZCA9PT0gZGF0YS5pZCA/XHJcbiAgICAgICAgICBkYXRhIDogbWFpbFxyXG4gICAgICApXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG9uTWFpbFNlbmQoZGF0YSkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAge1xyXG4gICAgICAgIGFsZXJ0TWVzc2FnZTogJ01haWwgU2VudCBTdWNjZXNzZnVsbHknLFxyXG4gICAgICAgIHNob3dNZXNzYWdlOiB0cnVlLFxyXG4gICAgICAgIGZvbGRlck1haWxzOiB0aGlzLnN0YXRlLmFsbE1haWwuY29uY2F0KGRhdGEpLFxyXG4gICAgICAgIGFsbE1haWw6IHRoaXMuc3RhdGUuYWxsTWFpbC5jb25jYXQoZGF0YSlcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIG9uTWFpbFNlbGVjdChtYWlsKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgbG9hZGVyOiB0cnVlLFxyXG4gICAgICBjdXJyZW50TWFpbDogbWFpbCxcclxuICAgIH0pO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2xvYWRlcjogZmFsc2V9KTtcclxuICAgIH0sIDE1MDApO1xyXG4gIH1cclxuXHJcbiAgYWRkTGFiZWwobWFpbCwgbGFiZWwpIHtcclxuICAgIGlmICh0aGlzLnN0YXRlLmN1cnJlbnRNYWlsICE9PSBudWxsICYmIG1haWwuaWQgPT09IHRoaXMuc3RhdGUuY3VycmVudE1haWwuaWQpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgY3VycmVudE1haWw6IHsuLi5tYWlsLCBsYWJlbHM6IG1haWwubGFiZWxzLmNvbmNhdChsYWJlbCl9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICByZXR1cm4gbWFpbC5sYWJlbHMuY29uY2F0KGxhYmVsKVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlU2VhcmNoKGV2dCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHNlYXJjaE1haWw6IGV2dC50YXJnZXQudmFsdWUsXHJcbiAgICB9KTtcclxuICAgIHRoaXMuc2VhcmNoTWFpbChldnQudGFyZ2V0LnZhbHVlKVxyXG4gIH1cclxuXHJcbiAgb25Ub2dnbGVEcmF3ZXIoKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgZHJhd2VyU3RhdGU6ICF0aGlzLnN0YXRlLmRyYXdlclN0YXRlXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHtzZWxlY3RlZE1haWxzLCBsb2FkZXIsIGN1cnJlbnRNYWlsLCBkcmF3ZXJTdGF0ZSwgZm9sZGVyTWFpbHMsIGNvbXBvc2VNYWlsLCB1c2VyLCBhbGVydE1lc3NhZ2UsIHNob3dNZXNzYWdlLCBub0NvbnRlbnRGb3VuZE1lc3NhZ2V9ID0gdGhpcy5zdGF0ZTtcclxuICAgIHJldHVybiAoXHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LW1haW4tY29udGVudFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtYXBwLW1vZHVsZVwiPlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtZC1ibG9jayBneC1kLWxnLW5vbmVcIj5cclxuICAgICAgICAgICAgPERyYXdlclxyXG4gICAgICAgICAgICAgIHBsYWNlbWVudD1cImxlZnRcIlxyXG4gICAgICAgICAgICAgIGNsb3NhYmxlPXtmYWxzZX1cclxuICAgICAgICAgICAgICB2aXNpYmxlPXtkcmF3ZXJTdGF0ZX1cclxuICAgICAgICAgICAgICBvbkNsb3NlPXt0aGlzLm9uVG9nZ2xlRHJhd2VyLmJpbmQodGhpcyl9PlxyXG4gICAgICAgICAgICAgIHt0aGlzLk1haWxTaWRlQmFyKCl9XHJcbiAgICAgICAgICAgIDwvRHJhd2VyPlxyXG5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1tb2R1bGUtc2lkZW5hdiBneC1kLW5vbmUgZ3gtZC1sZy1mbGV4XCI+XHJcbiAgICAgICAgICAgIHt0aGlzLk1haWxTaWRlQmFyKCl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LW1vZHVsZS1ib3hcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1tb2R1bGUtYm94LWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImd4LWRyYXdlci1idG4gZ3gtZC1mbGV4IGd4LWQtbGctbm9uZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGljb24tbWVudSBneC1pY29uLWJ0blwiIGFyaWEtbGFiZWw9XCJNZW51XCJcclxuICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vblRvZ2dsZURyYXdlci5iaW5kKHRoaXMpfS8+XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxBcHBNb2R1bGVIZWFkZXIgcGxhY2Vob2xkZXI9XCJTZWFyY2ggbWFpbHNcIiB1c2VyPXt0aGlzLnN0YXRlLnVzZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy51cGRhdGVTZWFyY2guYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnNlYXJjaE1haWx9Lz5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1tb2R1bGUtYm94LWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LW1vZHVsZS1ib3gtdG9wYmFyXCI+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5jdXJyZW50TWFpbCA9PT0gbnVsbCA/XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtZmxleC1yb3cgZ3gtYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZm9sZGVyTWFpbHMubGVuZ3RoID4gMCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3ggY29sb3I9XCJwcmltYXJ5XCIgY2xhc3NOYW1lPVwiZ3gtaWNvbi1idG5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXRlcm1pbmF0ZT17c2VsZWN0ZWRNYWlscyA+IDAgJiYgc2VsZWN0ZWRNYWlscyA8IGZvbGRlck1haWxzLmxlbmd0aH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3NlbGVjdGVkTWFpbHMgPiAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25BbGxNYWlsU2VsZWN0LmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIlNlbGVjdE1haWxcIi8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24gb3ZlcmxheT17dGhpcy5vcHRpb25NZW51KCl9IHBsYWNlbWVudD1cImJvdHRvbVJpZ2h0XCIgdHJpZ2dlcj17WydjbGljayddfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ3gtcHgtMlwiPiB7dGhpcy5zdGF0ZS5vcHRpb25OYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1jaGFydmxldC1kb3duXCIvPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1hcnJvdy1sZWZ0IGd4LWljb24tYnRuXCIgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2N1cnJlbnRNYWlsOiBudWxsfSlcclxuICAgICAgICAgICAgICAgICAgfX0vPlxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NJRD1cInRvb2xiYXItc2VwYXJhdG9yXCIvPlxyXG5cclxuICAgICAgICAgICAgICAgIHsoc2VsZWN0ZWRNYWlscyA+IDApICYmIHRoaXMuZ2V0TWFpbEFjdGlvbnMoKX1cclxuXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIHtsb2FkZXIgP1xyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1sb2FkZXItdmlld1wiPlxyXG4gICAgICAgICAgICAgICAgICA8Q2lyY3VsYXJQcm9ncmVzcy8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDogdGhpcy5kaXNwbGF5TWFpbChjdXJyZW50TWFpbCwgZm9sZGVyTWFpbHMsIG5vQ29udGVudEZvdW5kTWVzc2FnZSl9XHJcblxyXG4gICAgICAgICAgICAgIDxDb21wb3NlTWFpbCBvcGVuPXtjb21wb3NlTWFpbH0gdXNlcj17dXNlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbG9zZT17dGhpcy5oYW5kbGVSZXF1ZXN0Q2xvc2UuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgb25NYWlsU2VuZD17dGhpcy5vbk1haWxTZW5kLmJpbmQodGhpcyl9Lz5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAge3Nob3dNZXNzYWdlICYmIG1lc3NhZ2UuaW5mbyg8c3BhbiBpZD1cIm1lc3NhZ2UtaWRcIj57YWxlcnRNZXNzYWdlfTwvc3Bhbj4sIDMsIHRoaXMuaGFuZGxlUmVxdWVzdENsb3NlKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWlsO1xyXG4iLCJleHBvcnQgZGVmYXVsdCBbXHJcbiAge1xyXG4gICAgJ2lkJzogMCxcclxuICAgICdoYW5kbGUnOiAnbm90ZScsXHJcbiAgICAndGl0bGUnOiAnUGF5UGFsJyxcclxuICAgICdjb2xvcic6ICdwdXJwbGUnXHJcbiAgfSxcclxuICB7XHJcbiAgICAnaWQnOiAxLFxyXG4gICAgJ2hhbmRsZSc6ICdwYXlwYWwnLFxyXG4gICAgJ3RpdGxlJzogJ1Vwd29yaycsXHJcbiAgICAnY29sb3InOiAnYW1iZXInXHJcbiAgfSxcclxuICB7XHJcbiAgICAnaWQnOiAyLFxyXG4gICAgJ2hhbmRsZSc6ICdpbnZvaWNlJyxcclxuICAgICd0aXRsZSc6ICdJbi1ob3VzZScsXHJcbiAgICAnY29sb3InOiAnZ3JlZW4nXHJcbiAgfSxcclxuICB7XHJcbiAgICAnaWQnOiAzLFxyXG4gICAgJ2hhbmRsZSc6ICdhbWF6b24nLFxyXG4gICAgJ3RpdGxlJzogJ0NsaWVudHMnLFxyXG4gICAgJ2NvbG9yJzogJ2xpZ2h0LWJsdWUnXHJcbiAgfVxyXG5dO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9