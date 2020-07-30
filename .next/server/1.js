exports.ids = [1];
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

/***/ "./app/components/ifi/AddIFI/index.js":
/*!********************************************!*\
  !*** ./app/components/ifi/AddIFI/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util_IntlMessages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../util/IntlMessages */ "./util/IntlMessages.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




class AddIFI extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    const {
      id,
      thumb,
      name,
      legalAddress,
      responsiblePersonFullname,
      responsiblePersonPosition,
      responsiblePersonPhoneNumber,
      responsiblePersonEmail,
      additionalContactPersonFullname,
      additionalContactPersonPosition,
      additionalContactPersonPhoneNumber,
      additionalContactPersonEmail,
      designation,
      selected,
      starred,
      frequently
    } = props.ifi;
    this.state = {
      id,
      thumb,
      name,
      legalAddress,
      responsiblePersonFullname,
      responsiblePersonPosition,
      responsiblePersonPhoneNumber,
      responsiblePersonEmail,
      additionalContactPersonFullname,
      additionalContactPersonPosition,
      additionalContactPersonPhoneNumber,
      additionalContactPersonEmail,
      designation,
      selected,
      starred,
      frequently
    };
  }

  render() {
    const {
      onSaveIFI,
      onIFIClose,
      open,
      ifi
    } = this.props;
    const {
      id,
      name,
      legalAddress,
      responsiblePersonFullname,
      responsiblePersonPosition,
      responsiblePersonPhoneNumber,
      responsiblePersonEmail,
      additionalContactPersonFullname,
      additionalContactPersonPosition,
      additionalContactPersonPhoneNumber,
      additionalContactPersonEmail,
      designation,
      selected,
      starred,
      frequently
    } = this.state;
    let {
      thumb
    } = this.state;

    if (!thumb) {
      thumb = 'https://via.placeholder.com/225x225';
    }

    return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
      title: ifi.name === '' ? __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_2__["default"], {
        id: "ifi.addIFI"
      }) : __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_2__["default"], {
        id: "ifi.saveIFI"
      }),
      toggle: onIFIClose,
      visible: open,
      closable: false,
      onOk: () => {
        if (name === '') return;
        onIFIClose();
        onSaveIFI({
          'name': name,
          'thumb': thumb,
          'legalAddress': legalAddress,
          'responsiblePersonFullname': responsiblePersonFullname,
          'responsiblePersonPosition': responsiblePersonPosition,
          'responsiblePersonPhoneNumber': responsiblePersonPhoneNumber,
          'responsiblePersonEmail': responsiblePersonEmail,
          'additionalContactPersonFullname': additionalContactPersonFullname,
          'additionalContactPersonPosition': additionalContactPersonPosition,
          'additionalContactPersonPhoneNumber': additionalContactPersonPhoneNumber,
          'additionalContactPersonEmail': additionalContactPersonEmail,
          'designation': designation,
          'selected': selected,
          'starred': starred,
          'frequently': frequently
        });
        this.setState({
          'id': id + 1,
          'name': '',
          'thumb': '',
          'legalAddress': '',
          'responsiblePersonFullname': '',
          'responsiblePersonPosition': '',
          'responsiblePersonPhoneNumber': '',
          'responsiblePersonEmail': '',
          'additionalContactPersonFullname': '',
          'additionalContactPersonPosition': '',
          'additionalContactPersonPhoneNumber': '',
          'additionalContactPersonEmail': '',
          'designation': ''
        });
      },
      onCancel: onIFIClose
    }, __jsx("div", {
      className: "gx-modal-box-row"
    }, __jsx("div", {
      className: "gx-modal-box-avatar"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
      size: "large",
      src: thumb
    })), __jsx("div", {
      className: "gx-modal-box-form-item"
    }, __jsx("div", {
      className: "gx-form-group"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      required: true,
      placeholder: "Name",
      onChange: event => this.setState({
        name: event.target.value
      }),
      defaultValue: name,
      margin: "none"
    })), __jsx("div", {
      className: "gx-form-group"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      placeholder: "Address",
      onChange: event => this.setState({
        legalAddress: event.target.value
      }),
      value: legalAddress,
      margin: "normal"
    })), __jsx("div", {
      className: "gx-form-group"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      placeholder: "Responsible Person's Fullname",
      onChange: event => this.setState({
        responsiblePersonFullname: event.target.value
      }),
      value: responsiblePersonFullname,
      margin: "normal"
    })), __jsx("div", {
      className: "gx-form-group"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      placeholder: "Responsible Person's Position",
      onChange: event => this.setState({
        responsiblePersonPosition: event.target.value
      }),
      value: responsiblePersonPosition,
      margin: "normal"
    })), __jsx("div", {
      className: "gx-form-group"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      placeholder: "Responsible Person's Phone number",
      onChange: event => this.setState({
        responsiblePersonPhoneNumber: event.target.value
      }),
      value: responsiblePersonPhoneNumber,
      margin: "normal"
    })), __jsx("div", {
      className: "gx-form-group"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      placeholder: "Responsible Person's Email",
      onChange: event => this.setState({
        responsiblePersonEmail: event.target.value
      }),
      value: responsiblePersonEmail,
      margin: "normal"
    })), __jsx("div", {
      className: "gx-form-group"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      placeholder: "Additional Contact Person's Fullname",
      onChange: event => this.setState({
        additionalContactPersonFullname: event.target.value
      }),
      value: additionalContactPersonFullname,
      margin: "normal"
    })), __jsx("div", {
      className: "gx-form-group"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      placeholder: "Additional Contact Person's Position",
      onChange: event => this.setState({
        additionalContactPersonPosition: event.target.value
      }),
      value: additionalContactPersonPosition,
      margin: "normal"
    })), __jsx("div", {
      className: "gx-form-group"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      placeholder: "Additional Contact Person's Phone number",
      onChange: event => this.setState({
        additionalContactPersonPhoneNumber: event.target.value
      }),
      value: additionalContactPersonPhoneNumber,
      margin: "normal"
    })), __jsx("div", {
      className: "gx-form-group"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      placeholder: "Additional Contact Person's Email",
      onChange: event => this.setState({
        additionalContactPersonEmail: event.target.value
      }),
      value: additionalContactPersonEmail,
      margin: "normal"
    })))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (AddIFI);

/***/ }),

/***/ "./routes/main/CRM/IFI/index.css":
/*!***************************************!*\
  !*** ./routes/main/CRM/IFI/index.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./routes/main/CRM/IFI/index.js":
/*!**************************************!*\
  !*** ./routes/main/CRM/IFI/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util_CustomScrollbars__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../util/CustomScrollbars */ "./util/CustomScrollbars.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_components_AppModuleHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../app/components/AppModuleHeader */ "./app/components/AppModuleHeader/index.js");
/* harmony import */ var _app_components_ifi_AddIFI__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../app/components/ifi/AddIFI */ "./app/components/ifi/AddIFI/index.js");
/* harmony import */ var _util_IntlMessages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../util/IntlMessages */ "./util/IntlMessages.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index.css */ "./routes/main/CRM/IFI/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_7__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 // import IFIList from "../../../app/components/ifi/IFIList";






class IFI extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor() {
    super();

    _defineProperty(this, "IFISideBar", ifi => {
      return __jsx("div", {
        className: "gx-module-side"
      }, __jsx("div", {
        className: "gx-module-side-header"
      }, __jsx("div", {
        className: "gx-module-logo"
      }, __jsx("i", {
        className: "icon icon-contacts gx-mr-4"
      }), __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_6__["default"], {
        id: "chat.contacts"
      })))), __jsx("div", {
        className: "gx-module-side-content"
      }, __jsx(_util_CustomScrollbars__WEBPACK_IMPORTED_MODULE_2__["default"], {
        className: "gx-module-side-scroll"
      }, __jsx("div", {
        className: "gx-module-add-task"
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        className: "gx-btn-block ant-btn",
        type: "primary",
        "aria-label": "add",
        onClick: this.onAddIFI
      }, __jsx("i", {
        className: "icon icon-add gx-mr-2"
      }), __jsx("span", null, "Add New IFI"))))));
    });

    _defineProperty(this, "onIFISelect", data => {
      data.selected = !data.selected;
      let selectedIFIs = 0;
      const IFIList = this.state.IFIList.map(ifi => {
        if (ifi.selected) {
          selectedIFIs++;
        }

        if (ifi.id === data.id) {
          if (ifi.selected) {
            selectedIFIs++;
          }

          return data;
        } else {
          return ifi;
        }
      });
      this.setState({
        selectedIFIs: selectedIFIs,
        IFIList: IFIList
      });
    });

    _defineProperty(this, "onAddIFI", () => {
      this.setState({
        addIFIState: true
      });
    });

    _defineProperty(this, "onIFIClose", () => {
      this.setState({
        addIFIState: false
      });
    });

    _defineProperty(this, "onFilterOptionSelect", option => {
      switch (option.name) {
        case 'All contacts':
          {
            this.setState({
              selectedSectionId: option.id,
              filterOption: option.name,
              IFIList: this.state.allIFI
            });
            break;
          }

        case 'Frequently contacted':
          {
            this.setState({
              selectedSectionId: option.id,
              filterOption: option.name,
              IFIList: this.state.allIFI.filter(ifi => ifi.frequently)
            });
            break;
          }

        case 'Starred contacts':
          {
            this.setState({
              selectedSectionId: option.id,
              filterOption: option.name,
              IFIList: this.state.allIFI.filter(ifi => ifi.starred)
            });
            break;
          }

        default:
          break;
      }
    });

    _defineProperty(this, "onSaveIFI", data => {
      let isNew = true;
      const IFIList = this.state.allIFI.map(ifi => {
        if (ifi.id === data.id) {
          isNew = false;
          return data;
        } else {
          return ifi;
        }
      });

      if (isNew) {
        IFIList.push(data);
      }

      this.setState({
        alertMessage: isNew ? 'IFI Added Successfully' : 'IFI Updated Successfully',
        showMessage: true,
        IFIList: IFIList,
        allIFI: IFIList
      }); // this.onFilterOptionSelect(this.state.filterOption);
    });

    _defineProperty(this, "onDeleteIFI", data => {
      this.setState({
        alertMessage: 'IFI Deleted Successfully',
        showMessage: true,
        allIFI: this.state.allIFI.filter(ifi => ifi.id !== data.id),
        IFIList: this.state.allIFI.filter(ifi => ifi.id !== data.id)
      });
    });

    _defineProperty(this, "onDeleteSelectedIFI", () => {
      const contacts = this.state.allIFI.filter(ifi => !ifi.selected);
      this.setState({
        alertMessage: 'IFI Deleted Successfully',
        showMessage: true,
        allIFI: contacts,
        IFIList: contacts,
        selectedIFIs: 0
      });
    });

    _defineProperty(this, "filterIFI", ifiName => {
      const {
        filterOption
      } = this.state;

      if (ifiName === '') {
        this.setState({
          IFIList: this.state.allIFI
        });
      } else {
        const filterIFI = this.state.allIFI.filter(ifi => ifi.name.toLowerCase().indexOf(ifiName.toLowerCase()) > -1);

        if (filterOption === 'All contacts') {
          this.setState({
            IFIList: filterIFI
          });
        } else if (filterOption === 'Frequently contacted') {
          this.setState({
            IFIList: filterIFI.filter(ifi => ifi.frequently)
          });
        } else if (filterOption === 'Starred contacts') {
          this.setState({
            IFIList: filterIFI.filter(ifi => ifi.starred)
          });
        }
      }
    });

    _defineProperty(this, "handleRequestClose", () => {
      this.setState({
        showMessage: false
      });
    });

    _defineProperty(this, "getAllIFI", () => {
      let IFIList = this.state.allIFI.map(ifi => ifi ? _objectSpread(_objectSpread({}, ifi), {}, {
        selected: true
      }) : ifi);
      this.setState({
        selectedIFIs: IFIList.length,
        allIFI: IFIList,
        IFIList: IFIList
      });
    });

    _defineProperty(this, "getUnselectedAllIFI", () => {
      let IFIList = this.state.allIFI.map(ifi => ifi ? _objectSpread(_objectSpread({}, ifi), {}, {
        selected: false
      }) : ifi);
      this.setState({
        selectedIFIs: 0,
        allIFI: IFIList,
        IFIList: IFIList
      });
    });

    this.state = {
      selectedIFI: null,
      selectedIFIs: 0,
      allIFI: [],
      IFIList: [],
      ifi: {
        name: '',
        legalAddress: '',
        responsiblePersonFullname: '',
        responsiblePersonPosition: '',
        responsiblePersonPhoneNumber: '',
        responsiblePersonEmail: '',
        additionalContactPersonFullname: '',
        additionalContactPersonPosition: '',
        additionalContactPersonPhoneNumber: '',
        additionalContactPersonEmail: ''
      },
      drawerState: false,
      noContentFoundMessage: 'No IFI found in selected folder',
      alertMessage: '',
      showMessage: false,
      selectedSectionId: 1,
      searchUser: '',
      filterOption: 'All IFIs',
      addIFIState: false
    };
  }

  onAllIFISelect() {
    const selectAll = this.state.selectedIFIs < this.state.IFIList.length;

    if (selectAll) {
      this.getAllIFI();
    } else {
      this.getUnselectedAllIFI();
    }
  }

  updateIFIUser(evt) {
    this.setState({
      searchUser: evt.target.value
    });
    this.filterIFI(evt.target.value);
  }

  onToggleDrawer() {
    this.setState({
      drawerState: !this.state.drawerState
    });
  }

  render() {
    const {
      ifi,
      IFIList,
      addIFIState,
      drawerState,
      selectedIFIs,
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
    }, this.IFISideBar())), __jsx("div", {
      className: "gx-module-sidenav gx-d-none gx-d-lg-flex"
    }, this.IFISideBar(ifi)), __jsx("div", {
      className: "gx-module-box"
    }, __jsx("div", {
      className: "gx-module-box-header"
    }, __jsx("span", {
      className: "gx-drawer-btn gx-d-flex gx-d-lg-none"
    }, __jsx("i", {
      className: "icon icon-menu gx-icon-btn",
      "aria-label": "Menu",
      onClick: this.onToggleDrawer.bind(this)
    })), __jsx(_app_components_AppModuleHeader__WEBPACK_IMPORTED_MODULE_4__["default"], {
      placeholder: "Search ifi",
      notification: false,
      apps: false,
      ifi: this.state.ifi,
      onChange: this.updateIFIUser.bind(this),
      value: this.state.searchUser
    })), __jsx("div", {
      className: "gx-module-box-content"
    }, __jsx("div", {
      className: "gx-module-box-topbar"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
      color: "primary",
      className: "gx-icon-btn",
      indeterminate: selectedIFIs > 0 && selectedIFIs < IFIList.length,
      checked: selectedIFIs > 0,
      onChange: this.onAllIFISelect.bind(this),
      value: "SelectIFI"
    }), selectedIFIs > 0 && __jsx("i", {
      className: "gx-icon-btn icon icon-trash",
      onClick: this.onDeleteSelectedIFI.bind(this)
    })), __jsx(_util_CustomScrollbars__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: "gx-module-content-scroll"
    }, IFIList.length === 0 ? __jsx("div", {
      className: "gx-h-100 gx-d-flex gx-align-items-center gx-justify-content-center"
    }, noContentFoundMessage) : __jsx(ContactList, {
      IFIList: IFIList,
      addFavourite: this.addFavourite.bind(this),
      onIFISelect: this.onIFISelect.bind(this),
      onDeleteIFI: this.onDeleteIFI.bind(this),
      onSaveIFI: this.onSaveIFI.bind(this)
    }))))), __jsx(_app_components_ifi_AddIFI__WEBPACK_IMPORTED_MODULE_5__["default"], {
      open: addIFIState,
      ifi: {},
      onSaveIFI: this.onSaveIFI,
      onIFIClose: this.onIFIClose,
      onDeleteIFI: this.onDeleteIFI
    }), showMessage && antd__WEBPACK_IMPORTED_MODULE_1__["message"].info(__jsx("span", {
      id: "message-id"
    }, alertMessage), 3, this.handleRequestClose));
  }

  async getInitialProps() {
    const res = await fetch('http://127.0.0.1:8000/ifis');
    const IFIList = await res.json();
    console.log('IFIList: ', IFIList);
    return {
      IFIList
    };
  }

  componentWillMount() {
    this.setState({
      IFIList: this.props.IFIList,
      allIFI: this.props.IFIList
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (IFI);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9BcHBNb2R1bGVIZWFkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvaWZpL0FkZElGSS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yb3V0ZXMvbWFpbi9DUk0vSUZJL2luZGV4LmpzIl0sIm5hbWVzIjpbIkFwcE1vZHVsZUhlYWRlciIsInByb3BzIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsInZhbHVlIiwiZGVmYXVsdFByb3BzIiwic3R5bGVOYW1lIiwibm90aWZpY2F0aW9uIiwiYXBwcyIsIkFkZElGSSIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJpZCIsInRodW1iIiwibmFtZSIsImxlZ2FsQWRkcmVzcyIsInJlc3BvbnNpYmxlUGVyc29uRnVsbG5hbWUiLCJyZXNwb25zaWJsZVBlcnNvblBvc2l0aW9uIiwicmVzcG9uc2libGVQZXJzb25QaG9uZU51bWJlciIsInJlc3BvbnNpYmxlUGVyc29uRW1haWwiLCJhZGRpdGlvbmFsQ29udGFjdFBlcnNvbkZ1bGxuYW1lIiwiYWRkaXRpb25hbENvbnRhY3RQZXJzb25Qb3NpdGlvbiIsImFkZGl0aW9uYWxDb250YWN0UGVyc29uUGhvbmVOdW1iZXIiLCJhZGRpdGlvbmFsQ29udGFjdFBlcnNvbkVtYWlsIiwiZGVzaWduYXRpb24iLCJzZWxlY3RlZCIsInN0YXJyZWQiLCJmcmVxdWVudGx5IiwiaWZpIiwic3RhdGUiLCJyZW5kZXIiLCJvblNhdmVJRkkiLCJvbklGSUNsb3NlIiwib3BlbiIsInNldFN0YXRlIiwiZXZlbnQiLCJ0YXJnZXQiLCJJRkkiLCJvbkFkZElGSSIsImRhdGEiLCJzZWxlY3RlZElGSXMiLCJJRklMaXN0IiwibWFwIiwiYWRkSUZJU3RhdGUiLCJvcHRpb24iLCJzZWxlY3RlZFNlY3Rpb25JZCIsImZpbHRlck9wdGlvbiIsImFsbElGSSIsImZpbHRlciIsImlzTmV3IiwicHVzaCIsImFsZXJ0TWVzc2FnZSIsInNob3dNZXNzYWdlIiwiY29udGFjdHMiLCJpZmlOYW1lIiwiZmlsdGVySUZJIiwidG9Mb3dlckNhc2UiLCJpbmRleE9mIiwibGVuZ3RoIiwic2VsZWN0ZWRJRkkiLCJkcmF3ZXJTdGF0ZSIsIm5vQ29udGVudEZvdW5kTWVzc2FnZSIsInNlYXJjaFVzZXIiLCJvbkFsbElGSVNlbGVjdCIsInNlbGVjdEFsbCIsImdldEFsbElGSSIsImdldFVuc2VsZWN0ZWRBbGxJRkkiLCJ1cGRhdGVJRklVc2VyIiwiZXZ0Iiwib25Ub2dnbGVEcmF3ZXIiLCJiaW5kIiwiSUZJU2lkZUJhciIsIm9uRGVsZXRlU2VsZWN0ZWRJRkkiLCJhZGRGYXZvdXJpdGUiLCJvbklGSVNlbGVjdCIsIm9uRGVsZXRlSUZJIiwibWVzc2FnZSIsImluZm8iLCJoYW5kbGVSZXF1ZXN0Q2xvc2UiLCJnZXRJbml0aWFsUHJvcHMiLCJyZXMiLCJmZXRjaCIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiY29tcG9uZW50V2lsbE1vdW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxNQUFNQSxlQUFlLEdBQUlDLEtBQUQsSUFBVztBQUVqQyxRQUFNO0FBQUNDLGVBQUQ7QUFBY0MsWUFBZDtBQUF3QkM7QUFBeEIsTUFBaUNILEtBQXZDO0FBRUEsU0FDRTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0U7QUFDRSxhQUFTLEVBQUM7QUFEWixLQUVFO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDRTtBQUFPLGFBQVMsRUFBQyx1QkFBakI7QUFBeUMsUUFBSSxFQUFDLFFBQTlDO0FBQXVELGVBQVcsRUFBRUMsV0FBcEU7QUFDTyxZQUFRLEVBQUVDLFFBRGpCO0FBRU8sU0FBSyxFQUFFQztBQUZkLElBREYsRUFJRTtBQUFNLGFBQVMsRUFBQztBQUFoQixLQUE0QztBQUFHLGFBQVMsRUFBQztBQUFiLElBQTVDLENBSkYsQ0FGRixDQURGLEVBVUU7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNJO0FBQU0sYUFBUyxFQUFDO0FB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ZUFBUyxFQUFFLEtBQUt2QyxTQUFMLENBQWV1QyxJQUFmLENBQW9CLElBQXBCO0FBSnhCLE1BTE4sQ0FkRixDQVpGLENBZkYsQ0FERixFQTZERSxNQUFDLGtFQUFEO0FBQVEsVUFBSSxFQUFFM0IsV0FBZDtBQUEyQixTQUFHLEVBQUUsRUFBaEM7QUFFRyxlQUFTLEVBQUUsS0FBS1osU0FGbkI7QUFHWSxnQkFBVSxFQUFFLEtBQUtDLFVBSDdCO0FBR3lDLGlCQUFXLEVBQUUsS0FBSzJDO0FBSDNELE1BN0RGLEVBa0VHdkIsV0FBVyxJQUFJd0IsNENBQU8sQ0FBQ0MsSUFBUixDQUFhO0FBQU0sUUFBRSxFQUFDO0FBQVQsT0FBdUIxQixZQUF2QixDQUFiLEVBQTBELENBQTFELEVBQTZELEtBQUsyQixrQkFBbEUsQ0FsRWxCLENBREY7QUFzRUQ7O0FBRUQsUUFBTUMsZUFBTixHQUF3QjtBQUN0QixVQUFNQyxHQUFHLEdBQUcsTUFBTUMsS0FBSyxDQUFDLDRCQUFELENBQXZCO0FBQ0EsVUFBTXhDLE9BQU8sR0FBRyxNQUFNdUMsR0FBRyxDQUFDRSxJQUFKLEVBQXRCO0FBQ0FDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVosRUFBeUIzQyxPQUF6QjtBQUNBLFdBQU87QUFBRUE7QUFBRixLQUFQO0FBQ0Q7O0FBRUQ0QyxvQkFBa0IsR0FBRztBQUNuQixTQUFLbkQsUUFBTCxDQUFjO0FBQ1pPLGFBQU8sRUFBRSxLQUFLekMsS0FBTCxDQUFXeUMsT0FEUjtBQUVaTSxZQUFNLEVBQUUsS0FBSy9DLEtBQUwsQ0FBV3lDO0FBRlAsS0FBZDtBQUlEOztBQTdUK0I7O0FBZ1VuQkosa0VBQWYsRSIsImZpbGUiOiIxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgQXBwTW9kdWxlSGVhZGVyID0gKHByb3BzKSA9PiB7XHJcblxyXG4gIGNvbnN0IHtwbGFjZWhvbGRlciwgb25DaGFuZ2UsIHZhbHVlfSA9IHByb3BzO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJneC1tb2R1bGUtYm94LWhlYWRlci1pbm5lclwiPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiZ3gtc2VhcmNoLWJhciBneC1sdC1pY29uLXNlYXJjaC1iYXItbGcgZ3gtbW9kdWxlLXNlYXJjaC1iYXIgZ3gtZC1ub25lIGd4LWQtc20tYmxvY2tcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJhbnQtaW5wdXQgZ3gtYm9yZGVyLTBcIiB0eXBlPVwic2VhcmNoXCIgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxyXG4gICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9Lz5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImd4LXNlYXJjaC1pY29uIGd4LXBvaW50ZXJcIj48aSBjbGFzc05hbWU9XCJpY29uIGljb24tc2VhcmNoXCIvPjwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtbW9kdWxlLWJveC1oZWFkZXItcmlnaHRcIj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImd4LWZzLXhsXCI+IDxpXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImljb24gaWNvbi1hcHBzIGd4LWljb24tYnRuXCIvPjwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJneC1mcy14bFwiPjxpXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJpY29uIGljb24tbm90aWZpY2F0aW9uIGd4LWljb24tYnRuXCIvPjwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHBNb2R1bGVIZWFkZXI7XHJcblxyXG5BcHBNb2R1bGVIZWFkZXIuZGVmYXVsdFByb3BzID0ge1xyXG4gIHN0eWxlTmFtZTogJycsXHJcbiAgdmFsdWU6ICcnLFxyXG4gIG5vdGlmaWNhdGlvbjogdHJ1ZSxcclxuICBhcHBzOiB0cnVlXHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtBdmF0YXIsIElucHV0LCBNb2RhbH0gZnJvbSBcImFudGRcIjtcclxuXHJcbmltcG9ydCBJbnRsTWVzc2FnZXMgZnJvbSBcIi4uLy4uLy4uLy4uL3V0aWwvSW50bE1lc3NhZ2VzXCI7XHJcblxyXG5jbGFzcyBBZGRJRkkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgY29uc3Qge2lkLCB0aHVtYiwgbmFtZSwgbGVnYWxBZGRyZXNzLCByZXNwb25zaWJsZVBlcnNvbkZ1bGxuYW1lLCByZXNwb25zaWJsZVBlcnNvblBvc2l0aW9uLCByZXNwb25zaWJsZVBlcnNvblBob25lTnVtYmVyLCByZXNwb25zaWJsZVBlcnNvbkVtYWlsLCBhZGRpdGlvbmFsQ29udGFjdFBlcnNvbkZ1bGxuYW1lLCBhZGRpdGlvbmFsQ29udGFjdFBlcnNvblBvc2l0aW9uLCBhZGRpdGlvbmFsQ29udGFjdFBlcnNvblBob25lTnVtYmVyLCBhZGRpdGlvbmFsQ29udGFjdFBlcnNvbkVtYWlsLCBkZXNpZ25hdGlvbiwgc2VsZWN0ZWQsIHN0YXJyZWQsIGZyZXF1ZW50bHl9ID0gcHJvcHMuaWZpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgaWQsXHJcbiAgICAgIHRodW1iLFxyXG4gICAgICBuYW1lLFxyXG4gICAgICBsZWdhbEFkZHJlc3MsXHJcbiAgICAgIHJlc3BvbnNpYmxlUGVyc29uRnVsbG5hbWUsXHJcbiAgICAgIHJlc3BvbnNpYmxlUGVyc29uUG9zaXRpb24sXHJcbiAgICAgIHJlc3BvbnNpYmxlUGVyc29uUGhvbmVOdW1iZXIsXHJcbiAgICAgIHJlc3BvbnNpYmxlUGVyc29uRW1haWwsXHJcbiAgICAgIGFkZGl0aW9uYWxDb250YWN0UGVyc29uRnVsbG5hbWUsXHJcbiAgICAgIGFkZGl0aW9uYWxDb250YWN0UGVyc29uUG9zaXRpb24sXHJcbiAgICAgIGFkZGl0aW9uYWxDb250YWN0UGVyc29uUGhvbmVOdW1iZXIsXHJcbiAgICAgIGFkZGl0aW9uYWxDb250YWN0UGVyc29uRW1haWwsXHJcbiAgICAgIGRlc2lnbmF0aW9uLFxyXG4gICAgICBzZWxlY3RlZCxcclxuICAgICAgc3RhcnJlZCxcclxuICAgICAgZnJlcXVlbnRseVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3Qge29uU2F2ZUlGSSwgb25JRklDbG9zZSwgb3BlbiwgaWZpfSA9IHRoaXMucHJvcHM7XHJcbiAgICBjb25zdCB7aWQsIG5hbWUsIGxlZ2FsQWRkcmVzcywgcmVzcG9uc2libGVQZXJzb25GdWxsbmFtZSwgcmVzcG9uc2libGVQZXJzb25Qb3NpdGlvbiwgcmVzcG9uc2libGVQZXJzb25QaG9uZU51bWJlciwgcmVzcG9uc2libGVQZXJzb25FbWFpbCwgYWRkaXRpb25hbENvbnRhY3RQZXJzb25GdWxsbmFtZSwgYWRkaXRpb25hbENvbnRhY3RQZXJzb25Qb3NpdGlvbiwgYWRkaXRpb25hbENvbnRhY3RQZXJzb25QaG9uZU51bWJlciwgYWRkaXRpb25hbENvbnRhY3RQZXJzb25FbWFpbCwgZGVzaWduYXRpb24sIHNlbGVjdGVkLCBzdGFycmVkLCBmcmVxdWVudGx5fSA9IHRoaXMuc3RhdGU7XHJcbiAgICBsZXQge3RodW1ifSA9IHRoaXMuc3RhdGU7XHJcbiAgICBpZiAoIXRodW1iKSB7XHJcbiAgICAgIHRodW1iID0gJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8yMjV4MjI1JztcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIHRpdGxlPXtpZmkubmFtZSA9PT0gJycgP1xyXG4gICAgICAgICAgPEludGxNZXNzYWdlcyBpZD1cImlmaS5hZGRJRklcIi8+IDpcclxuICAgICAgICAgIDxJbnRsTWVzc2FnZXMgaWQ9XCJpZmkuc2F2ZUlGSVwiLz59XHJcbiAgICAgICAgdG9nZ2xlPXtvbklGSUNsb3NlfSB2aXNpYmxlPXtvcGVufVxyXG4gICAgICAgIGNsb3NhYmxlPXtmYWxzZX1cclxuICAgICAgICBvbk9rPXsoKSA9PiB7XHJcbiAgICAgICAgICBpZiAobmFtZSA9PT0gJycpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIG9uSUZJQ2xvc2UoKTtcclxuICAgICAgICAgIG9uU2F2ZUlGSShcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICduYW1lJzogbmFtZSxcclxuICAgICAgICAgICAgICAndGh1bWInOiB0aHVtYixcclxuICAgICAgICAgICAgICAnbGVnYWxBZGRyZXNzJzogbGVnYWxBZGRyZXNzLFxyXG4gICAgICAgICAgICAgICdyZXNwb25zaWJsZVBlcnNvbkZ1bGxuYW1lJzogcmVzcG9uc2libGVQZXJzb25GdWxsbmFtZSxcclxuICAgICAgICAgICAgICAncmVzcG9uc2libGVQZXJzb25Qb3NpdGlvbic6IHJlc3BvbnNpYmxlUGVyc29uUG9zaXRpb24sXHJcbiAgICAgICAgICAgICAgJ3Jlc3BvbnNpYmxlUGVyc29uUGhvbmVOdW1iZXInOiByZXNwb25zaWJsZVBlcnNvblBob25lTnVtYmVyLFxyXG4gICAgICAgICAgICAgICdyZXNwb25zaWJsZVBlcnNvbkVtYWlsJzogcmVzcG9uc2libGVQZXJzb25FbWFpbCxcclxuICAgICAgICAgICAgICAnYWRkaXRpb25hbENvbnRhY3RQZXJzb25GdWxsbmFtZSc6IGFkZGl0aW9uYWxDb250YWN0UGVyc29uRnVsbG5hbWUsXHJcbiAgICAgICAgICAgICAgJ2FkZGl0aW9uYWxDb250YWN0UGVyc29uUG9zaXRpb24nOiBhZGRpdGlvbmFsQ29udGFjdFBlcnNvblBvc2l0aW9uLFxyXG4gICAgICAgICAgICAgICdhZGRpdGlvbmFsQ29udGFjdFBlcnNvblBob25lTnVtYmVyJzogYWRkaXRpb25hbENvbnRhY3RQZXJzb25QaG9uZU51bWJlcixcclxuICAgICAgICAgICAgICAnYWRkaXRpb25hbENvbnRhY3RQZXJzb25FbWFpbCc6IGFkZGl0aW9uYWxDb250YWN0UGVyc29uRW1haWwsXHJcbiAgICAgICAgICAgICAgJ2Rlc2lnbmF0aW9uJzogZGVzaWduYXRpb24sXHJcbiAgICAgICAgICAgICAgJ3NlbGVjdGVkJzogc2VsZWN0ZWQsXHJcbiAgICAgICAgICAgICAgJ3N0YXJyZWQnOiBzdGFycmVkLFxyXG4gICAgICAgICAgICAgICdmcmVxdWVudGx5JzogZnJlcXVlbnRseVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAnaWQnOiBpZCArIDEsXHJcbiAgICAgICAgICAgICduYW1lJzogJycsXHJcbiAgICAgICAgICAgICd0aHVtYic6ICcnLFxyXG4gICAgICAgICAgICAnbGVnYWxBZGRyZXNzJzogJycsXHJcbiAgICAgICAgICAgICdyZXNwb25zaWJsZVBlcnNvbkZ1bGxuYW1lJzogJycsXHJcbiAgICAgICAgICAgICdyZXNwb25zaWJsZVBlcnNvblBvc2l0aW9uJzogJycsXHJcbiAgICAgICAgICAgICdyZXNwb25zaWJsZVBlcnNvblBob25lTnVtYmVyJzogJycsXHJcbiAgICAgICAgICAgICdyZXNwb25zaWJsZVBlcnNvbkVtYWlsJzogJycsXHJcbiAgICAgICAgICAgICdhZGRpdGlvbmFsQ29udGFjdFBlcnNvbkZ1bGxuYW1lJzogJycsXHJcbiAgICAgICAgICAgICdhZGRpdGlvbmFsQ29udGFjdFBlcnNvblBvc2l0aW9uJzogJycsXHJcbiAgICAgICAgICAgICdhZGRpdGlvbmFsQ29udGFjdFBlcnNvblBob25lTnVtYmVyJzogJycsXHJcbiAgICAgICAgICAgICdhZGRpdGlvbmFsQ29udGFjdFBlcnNvbkVtYWlsJzogJycsXHJcbiAgICAgICAgICAgICdkZXNpZ25hdGlvbic6ICcnLFxyXG4gICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgfX1cclxuICAgICAgICBvbkNhbmNlbD17b25JRklDbG9zZX0+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtbW9kYWwtYm94LXJvd1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1tb2RhbC1ib3gtYXZhdGFyXCI+XHJcbiAgICAgICAgICAgIDxBdmF0YXIgc2l6ZT1cImxhcmdlXCIgc3JjPXt0aHVtYn0vPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1tb2RhbC1ib3gtZm9ybS1pdGVtXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmFtZVwiXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB0aGlzLnNldFN0YXRlKHtuYW1lOiBldmVudC50YXJnZXQudmFsdWV9KX1cclxuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17bmFtZX1cclxuICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vbmVcIi8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWRkcmVzc1wiXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB0aGlzLnNldFN0YXRlKHtsZWdhbEFkZHJlc3M6IGV2ZW50LnRhcmdldC52YWx1ZX0pfVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2xlZ2FsQWRkcmVzc31cclxuICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJSZXNwb25zaWJsZSBQZXJzb24ncyBGdWxsbmFtZVwiXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB0aGlzLnNldFN0YXRlKHtyZXNwb25zaWJsZVBlcnNvbkZ1bGxuYW1lOiBldmVudC50YXJnZXQudmFsdWV9KX1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXtyZXNwb25zaWJsZVBlcnNvbkZ1bGxuYW1lfVxyXG4gICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1mb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlJlc3BvbnNpYmxlIFBlcnNvbidzIFBvc2l0aW9uXCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHRoaXMuc2V0U3RhdGUoe3Jlc3BvbnNpYmxlUGVyc29uUG9zaXRpb246IGV2ZW50LnRhcmdldC52YWx1ZX0pfVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3Jlc3BvbnNpYmxlUGVyc29uUG9zaXRpb259XHJcbiAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUmVzcG9uc2libGUgUGVyc29uJ3MgUGhvbmUgbnVtYmVyXCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHRoaXMuc2V0U3RhdGUoe3Jlc3BvbnNpYmxlUGVyc29uUGhvbmVOdW1iZXI6IGV2ZW50LnRhcmdldC52YWx1ZX0pfVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3Jlc3BvbnNpYmxlUGVyc29uUGhvbmVOdW1iZXJ9XHJcbiAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUmVzcG9uc2libGUgUGVyc29uJ3MgRW1haWxcIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gdGhpcy5zZXRTdGF0ZSh7cmVzcG9uc2libGVQZXJzb25FbWFpbDogZXZlbnQudGFyZ2V0LnZhbHVlfSl9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17cmVzcG9uc2libGVQZXJzb25FbWFpbH1cclxuICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZGRpdGlvbmFsIENvbnRhY3QgUGVyc29uJ3MgRnVsbG5hbWVcIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gdGhpcy5zZXRTdGF0ZSh7YWRkaXRpb25hbENvbnRhY3RQZXJzb25GdWxsbmFtZTogZXZlbnQudGFyZ2V0LnZhbHVlfSl9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17YWRkaXRpb25hbENvbnRhY3RQZXJzb25GdWxsbmFtZX1cclxuICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZGRpdGlvbmFsIENvbnRhY3QgUGVyc29uJ3MgUG9zaXRpb25cIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gdGhpcy5zZXRTdGF0ZSh7YWRkaXRpb25hbENvbnRhY3RQZXJzb25Qb3NpdGlvbjogZXZlbnQudGFyZ2V0LnZhbHVlfSl9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17YWRkaXRpb25hbENvbnRhY3RQZXJzb25Qb3NpdGlvbn1cclxuICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZGRpdGlvbmFsIENvbnRhY3QgUGVyc29uJ3MgUGhvbmUgbnVtYmVyXCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHRoaXMuc2V0U3RhdGUoe2FkZGl0aW9uYWxDb250YWN0UGVyc29uUGhvbmVOdW1iZXI6IGV2ZW50LnRhcmdldC52YWx1ZX0pfVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2FkZGl0aW9uYWxDb250YWN0UGVyc29uUGhvbmVOdW1iZXJ9XHJcbiAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWRkaXRpb25hbCBDb250YWN0IFBlcnNvbidzIEVtYWlsXCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHRoaXMuc2V0U3RhdGUoe2FkZGl0aW9uYWxDb250YWN0UGVyc29uRW1haWw6IGV2ZW50LnRhcmdldC52YWx1ZX0pfVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2FkZGl0aW9uYWxDb250YWN0UGVyc29uRW1haWx9XHJcbiAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRkSUZJO1xyXG4iLCJpbXBvcnQge0J1dHRvbiwgQ2hlY2tib3gsIERyYXdlciwgbWVzc2FnZX0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IEN1c3RvbVNjcm9sbGJhcnMgZnJvbSBcIi4uLy4uLy4uLy4uL3V0aWwvQ3VzdG9tU2Nyb2xsYmFyc1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuLy8gaW1wb3J0IElGSUxpc3QgZnJvbSBcIi4uLy4uLy4uL2FwcC9jb21wb25lbnRzL2lmaS9JRklMaXN0XCI7XHJcbmltcG9ydCBBcHBNb2R1bGVIZWFkZXIgZnJvbSBcIi4uLy4uLy4uLy4uL2FwcC9jb21wb25lbnRzL0FwcE1vZHVsZUhlYWRlclwiO1xyXG5pbXBvcnQgQWRkSUZJIGZyb20gXCIuLi8uLi8uLi8uLi9hcHAvY29tcG9uZW50cy9pZmkvQWRkSUZJXCI7XHJcbmltcG9ydCBJbnRsTWVzc2FnZXMgZnJvbSBcIi4uLy4uLy4uLy4uL3V0aWwvSW50bE1lc3NhZ2VzXCI7XHJcbmltcG9ydCAnLi9pbmRleC5jc3MnO1xyXG5cclxuY2xhc3MgSUZJIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICBcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHNlbGVjdGVkSUZJOiBudWxsLFxyXG4gICAgICBzZWxlY3RlZElGSXM6IDAsXHJcbiAgICAgIGFsbElGSTogW10sXHJcbiAgICAgIElGSUxpc3Q6IFtdLFxyXG4gICAgICBpZmk6IHtcclxuICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICBsZWdhbEFkZHJlc3M6ICcnLFxyXG4gICAgICAgIHJlc3BvbnNpYmxlUGVyc29uRnVsbG5hbWU6ICcnLFxyXG4gICAgICAgIHJlc3BvbnNpYmxlUGVyc29uUG9zaXRpb246ICcnLFxyXG4gICAgICAgIHJlc3BvbnNpYmxlUGVyc29uUGhvbmVOdW1iZXI6ICcnLFxyXG4gICAgICAgIHJlc3BvbnNpYmxlUGVyc29uRW1haWw6ICcnLFxyXG4gICAgICAgIGFkZGl0aW9uYWxDb250YWN0UGVyc29uRnVsbG5hbWU6ICcnLFxyXG4gICAgICAgIGFkZGl0aW9uYWxDb250YWN0UGVyc29uUG9zaXRpb246ICcnLFxyXG4gICAgICAgIGFkZGl0aW9uYWxDb250YWN0UGVyc29uUGhvbmVOdW1iZXI6ICcnLFxyXG4gICAgICAgIGFkZGl0aW9uYWxDb250YWN0UGVyc29uRW1haWw6ICcnLFxyXG4gICAgICB9LFxyXG4gICAgICBkcmF3ZXJTdGF0ZTogZmFsc2UsXHJcbiAgICAgIG5vQ29udGVudEZvdW5kTWVzc2FnZTogJ05vIElGSSBmb3VuZCBpbiBzZWxlY3RlZCBmb2xkZXInLFxyXG4gICAgICBhbGVydE1lc3NhZ2U6ICcnLFxyXG4gICAgICBzaG93TWVzc2FnZTogZmFsc2UsXHJcbiAgICAgIHNlbGVjdGVkU2VjdGlvbklkOiAxLFxyXG4gICAgICBzZWFyY2hVc2VyOiAnJyxcclxuICAgICAgZmlsdGVyT3B0aW9uOiAnQWxsIElGSXMnLFxyXG4gICAgICBhZGRJRklTdGF0ZTogZmFsc2UsXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBJRklTaWRlQmFyID0gKGlmaSkgPT4ge1xyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiZ3gtbW9kdWxlLXNpZGVcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1tb2R1bGUtc2lkZS1oZWFkZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LW1vZHVsZS1sb2dvXCI+XHJcbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGljb24tY29udGFjdHMgZ3gtbXItNFwiLz5cclxuICAgICAgICAgIDxzcGFuPjxJbnRsTWVzc2FnZXMgaWQ9XCJjaGF0LmNvbnRhY3RzXCIvPjwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LW1vZHVsZS1zaWRlLWNvbnRlbnRcIj5cclxuICAgICAgICA8Q3VzdG9tU2Nyb2xsYmFycyBjbGFzc05hbWU9XCJneC1tb2R1bGUtc2lkZS1zY3JvbGxcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtbW9kdWxlLWFkZC10YXNrXCI+XHJcbiAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwiZ3gtYnRuLWJsb2NrIGFudC1idG5cIiB0eXBlPVwicHJpbWFyeVwiIGFyaWEtbGFiZWw9XCJhZGRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25BZGRJRkl9PlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1hZGQgZ3gtbXItMlwiLz5cclxuICAgICAgICAgICAgICA8c3Bhbj5BZGQgTmV3IElGSTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0N1c3RvbVNjcm9sbGJhcnM+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gIH07XHJcblxyXG4gIG9uSUZJU2VsZWN0ID0gKGRhdGEpID0+IHtcclxuICAgIGRhdGEuc2VsZWN0ZWQgPSAhZGF0YS5zZWxlY3RlZDtcclxuICAgIGxldCBzZWxlY3RlZElGSXMgPSAwO1xyXG4gICAgY29uc3QgSUZJTGlzdCA9IHRoaXMuc3RhdGUuSUZJTGlzdC5tYXAoaWZpID0+IHtcclxuICAgICAgICBpZiAoaWZpLnNlbGVjdGVkKSB7XHJcbiAgICAgICAgICBzZWxlY3RlZElGSXMrKztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlmaS5pZCA9PT0gZGF0YS5pZCkge1xyXG4gICAgICAgICAgaWYgKGlmaS5zZWxlY3RlZCkge1xyXG4gICAgICAgICAgICBzZWxlY3RlZElGSXMrKztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gaWZpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBzZWxlY3RlZElGSXM6IHNlbGVjdGVkSUZJcyxcclxuICAgICAgSUZJTGlzdDogSUZJTGlzdFxyXG4gICAgfSk7XHJcblxyXG4gIH07XHJcblxyXG4gIG9uQWRkSUZJID0gKCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7YWRkSUZJU3RhdGU6IHRydWV9KTtcclxuICB9O1xyXG5cclxuICBvbklGSUNsb3NlID0gKCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7YWRkSUZJU3RhdGU6IGZhbHNlfSk7XHJcbiAgfTtcclxuICBcclxuICBvbkZpbHRlck9wdGlvblNlbGVjdCA9IChvcHRpb24pID0+IHtcclxuICAgIHN3aXRjaCAob3B0aW9uLm5hbWUpIHtcclxuICAgICAgY2FzZSAnQWxsIGNvbnRhY3RzJzoge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgc2VsZWN0ZWRTZWN0aW9uSWQ6IG9wdGlvbi5pZCxcclxuICAgICAgICAgIGZpbHRlck9wdGlvbjogb3B0aW9uLm5hbWUsXHJcbiAgICAgICAgICBJRklMaXN0OiB0aGlzLnN0YXRlLmFsbElGSVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgJ0ZyZXF1ZW50bHkgY29udGFjdGVkJzoge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgc2VsZWN0ZWRTZWN0aW9uSWQ6IG9wdGlvbi5pZCxcclxuICAgICAgICAgIGZpbHRlck9wdGlvbjogb3B0aW9uLm5hbWUsXHJcbiAgICAgICAgICBJRklMaXN0OiB0aGlzLnN0YXRlLmFsbElGSS5maWx0ZXIoKGlmaSkgPT4gaWZpLmZyZXF1ZW50bHkpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAnU3RhcnJlZCBjb250YWN0cyc6IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgIHNlbGVjdGVkU2VjdGlvbklkOiBvcHRpb24uaWQsXHJcbiAgICAgICAgICBmaWx0ZXJPcHRpb246IG9wdGlvbi5uYW1lLFxyXG4gICAgICAgICAgSUZJTGlzdDogdGhpcy5zdGF0ZS5hbGxJRkkuZmlsdGVyKChpZmkpID0+IGlmaS5zdGFycmVkKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgb25TYXZlSUZJID0gKGRhdGEpID0+IHtcclxuICAgIGxldCBpc05ldyA9IHRydWU7XHJcbiAgICBjb25zdCBJRklMaXN0ID0gdGhpcy5zdGF0ZS5hbGxJRkkubWFwKChpZmkpID0+IHtcclxuICAgICAgaWYgKGlmaS5pZCA9PT0gZGF0YS5pZCkge1xyXG4gICAgICAgIGlzTmV3ID0gZmFsc2U7XHJcbiAgICAgICAgcmV0dXJuIGRhdGFcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gaWZpXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgaWYgKGlzTmV3KSB7XHJcbiAgICAgIElGSUxpc3QucHVzaChkYXRhKTtcclxuICAgIH1cclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBhbGVydE1lc3NhZ2U6IGlzTmV3ID8gJ0lGSSBBZGRlZCBTdWNjZXNzZnVsbHknIDogJ0lGSSBVcGRhdGVkIFN1Y2Nlc3NmdWxseScsXHJcbiAgICAgIHNob3dNZXNzYWdlOiB0cnVlLFxyXG4gICAgICBJRklMaXN0OiBJRklMaXN0LFxyXG4gICAgICBhbGxJRkk6IElGSUxpc3RcclxuICAgIH0pO1xyXG4gICAgLy8gdGhpcy5vbkZpbHRlck9wdGlvblNlbGVjdCh0aGlzLnN0YXRlLmZpbHRlck9wdGlvbik7XHJcbiAgfTtcclxuXHJcbiAgb25EZWxldGVJRkkgPSAoZGF0YSkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGFsZXJ0TWVzc2FnZTogJ0lGSSBEZWxldGVkIFN1Y2Nlc3NmdWxseScsXHJcbiAgICAgIHNob3dNZXNzYWdlOiB0cnVlLFxyXG4gICAgICBhbGxJRkk6IHRoaXMuc3RhdGUuYWxsSUZJLmZpbHRlcigoaWZpKSA9PiBpZmkuaWQgIT09IGRhdGEuaWQpLFxyXG4gICAgICBJRklMaXN0OiB0aGlzLnN0YXRlLmFsbElGSS5maWx0ZXIoKGlmaSkgPT4gaWZpLmlkICE9PSBkYXRhLmlkKVxyXG4gICAgfSlcclxuICB9O1xyXG5cclxuICBvbkRlbGV0ZVNlbGVjdGVkSUZJID0gKCkgPT4ge1xyXG4gICAgY29uc3QgY29udGFjdHMgPSB0aGlzLnN0YXRlLmFsbElGSS5maWx0ZXIoKGlmaSkgPT4gIWlmaS5zZWxlY3RlZCk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgYWxlcnRNZXNzYWdlOiAnSUZJIERlbGV0ZWQgU3VjY2Vzc2Z1bGx5JyxcclxuICAgICAgc2hvd01lc3NhZ2U6IHRydWUsXHJcbiAgICAgIGFsbElGSTogY29udGFjdHMsXHJcbiAgICAgIElGSUxpc3Q6IGNvbnRhY3RzLFxyXG4gICAgICBzZWxlY3RlZElGSXM6IDBcclxuICAgIH0pXHJcbiAgfTtcclxuICBcclxuICBmaWx0ZXJJRkkgPSAoaWZpTmFtZSkgPT4ge1xyXG4gICAgY29uc3Qge2ZpbHRlck9wdGlvbn0gPSB0aGlzLnN0YXRlO1xyXG4gICAgaWYgKGlmaU5hbWUgPT09ICcnKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe0lGSUxpc3Q6IHRoaXMuc3RhdGUuYWxsSUZJfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBmaWx0ZXJJRkkgPSB0aGlzLnN0YXRlLmFsbElGSS5maWx0ZXIoKGlmaSkgPT5cclxuICAgICAgICBpZmkubmFtZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoaWZpTmFtZS50b0xvd2VyQ2FzZSgpKSA+IC0xKTtcclxuICAgICAgaWYgKGZpbHRlck9wdGlvbiA9PT0gJ0FsbCBjb250YWN0cycpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtJRklMaXN0OiBmaWx0ZXJJRkl9KTtcclxuICAgICAgfSBlbHNlIGlmIChmaWx0ZXJPcHRpb24gPT09ICdGcmVxdWVudGx5IGNvbnRhY3RlZCcpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtJRklMaXN0OiBmaWx0ZXJJRkkuZmlsdGVyKChpZmkpID0+IGlmaS5mcmVxdWVudGx5KX0pO1xyXG5cclxuICAgICAgfSBlbHNlIGlmIChmaWx0ZXJPcHRpb24gPT09ICdTdGFycmVkIGNvbnRhY3RzJykge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe0lGSUxpc3Q6IGZpbHRlcklGSS5maWx0ZXIoKGlmaSkgPT4gaWZpLnN0YXJyZWQpfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG4gIFxyXG4gIGhhbmRsZVJlcXVlc3RDbG9zZSA9ICgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBzaG93TWVzc2FnZTogZmFsc2UsXHJcbiAgICB9KTtcclxuICB9O1xyXG4gIFxyXG4gIGdldEFsbElGSSA9ICgpID0+IHtcclxuICAgIGxldCBJRklMaXN0ID0gdGhpcy5zdGF0ZS5hbGxJRkkubWFwKChpZmkpID0+IGlmaSA/IHtcclxuICAgICAgLi4uaWZpLFxyXG4gICAgICBzZWxlY3RlZDogdHJ1ZVxyXG4gICAgfSA6IGlmaSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgc2VsZWN0ZWRJRklzOiBJRklMaXN0Lmxlbmd0aCxcclxuICAgICAgYWxsSUZJOiBJRklMaXN0LFxyXG4gICAgICBJRklMaXN0OiBJRklMaXN0XHJcbiAgICB9KTtcclxuICB9O1xyXG4gIFxyXG4gIGdldFVuc2VsZWN0ZWRBbGxJRkkgPSAoKSA9PiB7XHJcbiAgICBsZXQgSUZJTGlzdCA9IHRoaXMuc3RhdGUuYWxsSUZJLm1hcCgoaWZpKSA9PiBpZmkgPyB7XHJcbiAgICAgIC4uLmlmaSxcclxuICAgICAgc2VsZWN0ZWQ6IGZhbHNlXHJcbiAgICB9IDogaWZpKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBzZWxlY3RlZElGSXM6IDAsXHJcbiAgICAgIGFsbElGSTogSUZJTGlzdCxcclxuICAgICAgSUZJTGlzdDogSUZJTGlzdFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgb25BbGxJRklTZWxlY3QoKSB7XHJcbiAgICBjb25zdCBzZWxlY3RBbGwgPSB0aGlzLnN0YXRlLnNlbGVjdGVkSUZJcyA8IHRoaXMuc3RhdGUuSUZJTGlzdC5sZW5ndGg7XHJcbiAgICBpZiAoc2VsZWN0QWxsKSB7XHJcbiAgICAgIHRoaXMuZ2V0QWxsSUZJKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmdldFVuc2VsZWN0ZWRBbGxJRkkoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVwZGF0ZUlGSVVzZXIoZXZ0KSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgc2VhcmNoVXNlcjogZXZ0LnRhcmdldC52YWx1ZSxcclxuICAgIH0pO1xyXG4gICAgdGhpcy5maWx0ZXJJRkkoZXZ0LnRhcmdldC52YWx1ZSlcclxuICB9XHJcblxyXG4gIG9uVG9nZ2xlRHJhd2VyKCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGRyYXdlclN0YXRlOiAhdGhpcy5zdGF0ZS5kcmF3ZXJTdGF0ZVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7aWZpLCBJRklMaXN0LCBhZGRJRklTdGF0ZSwgZHJhd2VyU3RhdGUsIHNlbGVjdGVkSUZJcywgYWxlcnRNZXNzYWdlLCBzaG93TWVzc2FnZSwgbm9Db250ZW50Rm91bmRNZXNzYWdlfSA9IHRoaXMuc3RhdGU7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LW1haW4tY29udGVudFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtYXBwLW1vZHVsZVwiPlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtZC1ibG9jayBneC1kLWxnLW5vbmVcIj5cclxuICAgICAgICAgICAgPERyYXdlclxyXG4gICAgICAgICAgICAgIHBsYWNlbWVudD1cImxlZnRcIlxyXG4gICAgICAgICAgICAgIGNsb3NhYmxlPXtmYWxzZX1cclxuICAgICAgICAgICAgICB2aXNpYmxlPXtkcmF3ZXJTdGF0ZX1cclxuICAgICAgICAgICAgICBvbkNsb3NlPXt0aGlzLm9uVG9nZ2xlRHJhd2VyLmJpbmQodGhpcyl9PlxyXG4gICAgICAgICAgICAgIHt0aGlzLklGSVNpZGVCYXIoKX1cclxuICAgICAgICAgICAgPC9EcmF3ZXI+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtbW9kdWxlLXNpZGVuYXYgZ3gtZC1ub25lIGd4LWQtbGctZmxleFwiPlxyXG4gICAgICAgICAgICB7dGhpcy5JRklTaWRlQmFyKGlmaSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LW1vZHVsZS1ib3hcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1tb2R1bGUtYm94LWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImd4LWRyYXdlci1idG4gZ3gtZC1mbGV4IGd4LWQtbGctbm9uZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGljb24tbWVudSBneC1pY29uLWJ0blwiIGFyaWEtbGFiZWw9XCJNZW51XCJcclxuICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vblRvZ2dsZURyYXdlci5iaW5kKHRoaXMpfS8+XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG5cclxuICAgICAgICAgICAgICA8QXBwTW9kdWxlSGVhZGVyIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGlmaVwiIG5vdGlmaWNhdGlvbj17ZmFsc2V9IGFwcHM9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWZpPXt0aGlzLnN0YXRlLmlmaX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnVwZGF0ZUlGSVVzZXIuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnNlYXJjaFVzZXJ9Lz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtbW9kdWxlLWJveC1jb250ZW50XCI+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtbW9kdWxlLWJveC10b3BiYXJcIj5cclxuICAgICAgICAgICAgICAgIDxDaGVja2JveCBjb2xvcj1cInByaW1hcnlcIiBjbGFzc05hbWU9XCJneC1pY29uLWJ0blwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXRlcm1pbmF0ZT17c2VsZWN0ZWRJRklzID4gMCAmJiBzZWxlY3RlZElGSXMgPCBJRklMaXN0Lmxlbmd0aH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtzZWxlY3RlZElGSXMgPiAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQWxsSUZJU2VsZWN0LmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJTZWxlY3RJRklcIi8+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHtzZWxlY3RlZElGSXMgPiAwICYmXHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJneC1pY29uLWJ0biBpY29uIGljb24tdHJhc2hcIiBvbkNsaWNrPXt0aGlzLm9uRGVsZXRlU2VsZWN0ZWRJRkkuYmluZCh0aGlzKX0vPn1cclxuXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPEN1c3RvbVNjcm9sbGJhcnMgY2xhc3NOYW1lPVwiZ3gtbW9kdWxlLWNvbnRlbnQtc2Nyb2xsXCI+XHJcbiAgICAgICAgICAgICAgICB7SUZJTGlzdC5sZW5ndGggPT09IDAgP1xyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWgtMTAwIGd4LWQtZmxleCBneC1hbGlnbi1pdGVtcy1jZW50ZXIgZ3gtanVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtub0NvbnRlbnRGb3VuZE1lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA6IDxDb250YWN0TGlzdCBJRklMaXN0PXtJRklMaXN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRGYXZvdXJpdGU9e3RoaXMuYWRkRmF2b3VyaXRlLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uSUZJU2VsZWN0PXt0aGlzLm9uSUZJU2VsZWN0LmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRGVsZXRlSUZJPXt0aGlzLm9uRGVsZXRlSUZJLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU2F2ZUlGST17dGhpcy5vblNhdmVJRkkuYmluZCh0aGlzKX0vPlxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgPC9DdXN0b21TY3JvbGxiYXJzPlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPEFkZElGSSBvcGVuPXthZGRJRklTdGF0ZX0gaWZpPXt7XHJcbiAgICAgICAgICBcclxuICAgICAgICB9fSBvblNhdmVJRkk9e3RoaXMub25TYXZlSUZJfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uSUZJQ2xvc2U9e3RoaXMub25JRklDbG9zZX0gb25EZWxldGVJRkk9e3RoaXMub25EZWxldGVJRkl9Lz5cclxuXHJcbiAgICAgICAge3Nob3dNZXNzYWdlICYmIG1lc3NhZ2UuaW5mbyg8c3BhbiBpZD1cIm1lc3NhZ2UtaWRcIj57YWxlcnRNZXNzYWdlfTwvc3Bhbj4sIDMsIHRoaXMuaGFuZGxlUmVxdWVzdENsb3NlKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG5cclxuICBhc3luYyBnZXRJbml0aWFsUHJvcHMoKSB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cDovLzEyNy4wLjAuMTo4MDAwL2lmaXMnKVxyXG4gICAgY29uc3QgSUZJTGlzdCA9IGF3YWl0IHJlcy5qc29uKClcclxuICAgIGNvbnNvbGUubG9nKCdJRklMaXN0OiAnLCBJRklMaXN0KTtcclxuICAgIHJldHVybiB7IElGSUxpc3QgfVxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIElGSUxpc3Q6IHRoaXMucHJvcHMuSUZJTGlzdCxcclxuICAgICAgYWxsSUZJOiB0aGlzLnByb3BzLklGSUxpc3RcclxuICAgIH0pXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJRkk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=