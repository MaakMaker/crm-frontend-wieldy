exports.ids = [3];
exports.modules = {

/***/ "./app/components/chat/ChatUserList/UserCell/index.js":
/*!************************************************************!*\
  !*** ./app/components/chat/ChatUserList/UserCell/index.js ***!
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



const UserCell = ({
  chat,
  selectedSectionId,
  onSelectUser
}) => {
  return __jsx("div", {
    className: `gx-chat-user-item ${selectedSectionId === chat.id ? 'active' : ''}`,
    onClick: () => {
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
    className: `gx-status gx-small gx-${chat.status}`
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

/* harmony default export */ __webpack_exports__["default"] = (UserCell);

/***/ }),

/***/ "./app/components/chat/ChatUserList/index.js":
/*!***************************************************!*\
  !*** ./app/components/chat/ChatUserList/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _UserCell_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserCell/index */ "./app/components/chat/ChatUserList/UserCell/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const ChatUserList = ({
  chatUsers,
  selectedSectionId,
  onSelectUser
}) => {
  return __jsx("div", {
    className: "gx-chat-user"
  }, chatUsers.map((chat, index) => __jsx(_UserCell_index__WEBPACK_IMPORTED_MODULE_1__["default"], {
    key: index,
    chat: chat,
    selectedSectionId: selectedSectionId,
    onSelectUser: onSelectUser
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ChatUserList);

/***/ }),

/***/ "./app/components/chat/ContactList/UserCell/index.js":
/*!***********************************************************!*\
  !*** ./app/components/chat/ContactList/UserCell/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const UserCell = ({
  onSelectUser,
  selectedSectionId,
  user
}) => {
  return __jsx("div", {
    className: `gx-chat-user-item ${selectedSectionId === user.id ? 'active' : ''}`,
    onClick: () => {
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
    className: `gx-status ${user.status}`
  }))), __jsx("div", {
    className: "gx-chat-contact-col"
  }, __jsx("div", {
    className: "h4 gx-name"
  }, user.name), __jsx("div", {
    className: "gx-chat-info-des gx-text-truncate"
  }, user.mood.substring(0, 40) + "..."))));
};

/* harmony default export */ __webpack_exports__["default"] = (UserCell);

/***/ }),

/***/ "./app/components/chat/ContactList/index.js":
/*!**************************************************!*\
  !*** ./app/components/chat/ContactList/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _UserCell_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserCell/index */ "./app/components/chat/ContactList/UserCell/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const ContactList = ({
  onSelectUser,
  selectedSectionId,
  contactList
}) => {
  return __jsx("div", {
    className: "gx-chat-user"
  }, contactList.map((user, index) => __jsx(_UserCell_index__WEBPACK_IMPORTED_MODULE_1__["default"], {
    key: index,
    user: user,
    selectedSectionId: selectedSectionId,
    onSelectUser: onSelectUser
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ContactList);

/***/ }),

/***/ "./app/components/chat/Conversation/ReceivedMessageCell/index.js":
/*!***********************************************************************!*\
  !*** ./app/components/chat/Conversation/ReceivedMessageCell/index.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const ReceivedMessageCell = ({
  conversation,
  user
}) => {
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

/* harmony default export */ __webpack_exports__["default"] = (ReceivedMessageCell);

/***/ }),

/***/ "./app/components/chat/Conversation/SentMessageCell/index.js":
/*!*******************************************************************!*\
  !*** ./app/components/chat/Conversation/SentMessageCell/index.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const SentMessageCell = ({
  conversation
}) => {
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

/* harmony default export */ __webpack_exports__["default"] = (SentMessageCell);

/***/ }),

/***/ "./app/components/chat/Conversation/index.js":
/*!***************************************************!*\
  !*** ./app/components/chat/Conversation/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ReceivedMessageCell_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReceivedMessageCell/index */ "./app/components/chat/Conversation/ReceivedMessageCell/index.js");
/* harmony import */ var _SentMessageCell_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SentMessageCell/index */ "./app/components/chat/Conversation/SentMessageCell/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Conversation = ({
  conversationData,
  selectedUser
}) => {
  return __jsx("div", {
    className: "gx-chat-main-content"
  }, conversationData.map((conversation, index) => conversation.type === 'sent' ? __jsx(_SentMessageCell_index__WEBPACK_IMPORTED_MODULE_2__["default"], {
    key: index,
    conversation: conversation
  }) : __jsx(_ReceivedMessageCell_index__WEBPACK_IMPORTED_MODULE_1__["default"], {
    key: index,
    conversation: conversation,
    user: selectedUser
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Conversation);

/***/ }),

/***/ "./routes/inbuiltApps/Chat/data/chatUsers.js":
/*!***************************************************!*\
  !*** ./routes/inbuiltApps/Chat/data/chatUsers.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
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

/***/ }),

/***/ "./routes/inbuiltApps/Chat/data/conversationList.js":
/*!**********************************************************!*\
  !*** ./routes/inbuiltApps/Chat/data/conversationList.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
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

/***/ }),

/***/ "./routes/inbuiltApps/Chat/index.js":
/*!******************************************!*\
  !*** ./routes/inbuiltApps/Chat/index.js ***!
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
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_components_chat_ChatUserList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../app/components/chat/ChatUserList */ "./app/components/chat/ChatUserList/index.js");
/* harmony import */ var _data_conversationList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data/conversationList */ "./routes/inbuiltApps/Chat/data/conversationList.js");
/* harmony import */ var _app_components_chat_Conversation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../app/components/chat/Conversation */ "./app/components/chat/Conversation/index.js");
/* harmony import */ var _data_chatUsers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./data/chatUsers */ "./routes/inbuiltApps/Chat/data/chatUsers.js");
/* harmony import */ var _app_components_chat_ContactList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../app/components/chat/ContactList */ "./app/components/chat/ContactList/index.js");
/* harmony import */ var _util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../util/IntlMessages */ "./util/IntlMessages.js");
/* harmony import */ var _app_components_SearchBox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../app/components/SearchBox */ "./app/components/SearchBox/index.js");
/* harmony import */ var _app_components_CircularProgress__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../app/components/CircularProgress */ "./app/components/CircularProgress/index.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./index.css */ "./routes/inbuiltApps/Chat/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_12__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














const TabPane = antd__WEBPACK_IMPORTED_MODULE_1__["Tabs"].TabPane;

class Chat extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super();

    _defineProperty(this, "filterContact", userName => {
      if (userName === '') {
        return _data_chatUsers__WEBPACK_IMPORTED_MODULE_7__["default"].filter(user => !user.recent);
      }

      return _data_chatUsers__WEBPACK_IMPORTED_MODULE_7__["default"].filter(user => !user.recent && user.name.toLowerCase().indexOf(userName.toLowerCase()) > -1);
    });

    _defineProperty(this, "filterUsers", userName => {
      if (userName === '') {
        return _data_chatUsers__WEBPACK_IMPORTED_MODULE_7__["default"].filter(user => user.recent);
      }

      return _data_chatUsers__WEBPACK_IMPORTED_MODULE_7__["default"].filter(user => user.recent && user.name.toLowerCase().indexOf(userName.toLowerCase()) > -1);
    });

    _defineProperty(this, "Communication", () => {
      const {
        message,
        selectedUser,
        conversation
      } = this.state;
      const {
        conversationData
      } = conversation;
      return __jsx("div", {
        className: "gx-chat-main"
      }, __jsx("div", {
        className: "gx-chat-main-header"
      }, __jsx("span", {
        className: "gx-d-block gx-d-lg-none gx-chat-btn"
      }, __jsx("i", {
        className: "gx-icon-btn icon icon-chat",
        onClick: this.onToggleDrawer.bind(this)
      })), __jsx("div", {
        className: "gx-chat-main-header-info"
      }, __jsx("div", {
        className: "gx-chat-avatar gx-mr-2"
      }, __jsx("div", {
        className: "gx-status-pos"
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
        src: selectedUser.thumb,
        className: "gx-rounded-circle gx-size-60",
        alt: ""
      }), __jsx("span", {
        className: `gx-status gx-${selectedUser.status}`
      }))), __jsx("div", {
        className: "gx-chat-contact-name"
      }, selectedUser.name))), __jsx(_util_CustomScrollbars__WEBPACK_IMPORTED_MODULE_2__["default"], {
        className: "gx-chat-list-scroll"
      }, __jsx(_app_components_chat_Conversation__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
        onKeyUp: this._handleKeyPress.bind(this),
        onChange: this.updateMessageValue.bind(this),
        value: message,
        placeholder: "Type and hit enter to send message"
      }))), __jsx("i", {
        className: "gx-icon-btn icon icon-sent",
        onClick: this.submitComment.bind(this)
      }))));
    });

    _defineProperty(this, "AppUsersInfo", () => {
      return __jsx("div", {
        className: "gx-chat-sidenav-main"
      }, __jsx("div", {
        className: "gx-bg-grey-light gx-chat-sidenav-header"
      }, __jsx("div", {
        className: "gx-chat-user-hd gx-mb-0"
      }, __jsx("i", {
        className: "gx-icon-btn icon icon-arrow-left",
        onClick: () => {
          this.setState({
            userState: 1
          });
        }
      })), __jsx("div", {
        className: "gx-chat-user gx-chat-user-center"
      }, __jsx("div", {
        className: "gx-chat-avatar gx-mx-auto"
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
        src: "https://via.placeholder.com/150x150",
        className: "gx-size-60",
        alt: "John Doe"
      })), __jsx("div", {
        className: "gx-user-name h4 gx-my-2"
      }, "Robert Johnson"))), __jsx("div", {
        className: "gx-chat-sidenav-content"
      }, __jsx(_util_CustomScrollbars__WEBPACK_IMPORTED_MODULE_2__["default"], {
        className: "gx-chat-sidenav-scroll"
      }, __jsx("div", {
        className: "gx-p-4"
      }, __jsx("form", null, __jsx("div", {
        className: "gx-form-group gx-mt-4"
      }, __jsx("label", null, "Mood"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        fullWidth: true,
        id: "exampleTextarea",
        multiline: true,
        rows: 3,
        onKeyUp: this._handleKeyPress.bind(this),
        onChange: this.updateMessageValue.bind(this),
        defaultValue: "it's a status....not your diary...",
        placeholder: "Status",
        margin: "none"
      })))))));
    });

    _defineProperty(this, "ChatUsers", () => {
      return __jsx("div", {
        className: "gx-chat-sidenav-main"
      }, __jsx("div", {
        className: "gx-chat-sidenav-header"
      }, __jsx("div", {
        className: "gx-chat-user-hd"
      }, __jsx("div", {
        className: "gx-chat-avatar gx-mr-3",
        onClick: () => {
          this.setState({
            userState: 2
          });
        }
      }, __jsx("div", {
        className: "gx-status-pos"
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
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
      }, __jsx(_app_components_SearchBox__WEBPACK_IMPORTED_MODULE_10__["default"], {
        styleName: "gx-chat-search-bar gx-lt-icon-search-bar-lg",
        placeholder: "Search or start new chat",
        onChange: this.updateSearchChatUser.bind(this),
        value: this.state.searchChatUser
      }))), __jsx("div", {
        className: "gx-chat-sidenav-content"
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Tabs"], {
        className: "gx-tabs-half",
        defaultActiveKey: "1"
      }, __jsx(TabPane, {
        label: __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
          id: "chat.chatUser"
        }),
        tab: __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
          id: "chat.chatUser"
        }),
        key: "1"
      }, __jsx(_util_CustomScrollbars__WEBPACK_IMPORTED_MODULE_2__["default"], {
        className: "gx-chat-sidenav-scroll-tab-1"
      }, this.state.chatUsers.length === 0 ? __jsx("div", {
        className: "gx-p-5"
      }, this.state.userNotFound) : __jsx(_app_components_chat_ChatUserList__WEBPACK_IMPORTED_MODULE_4__["default"], {
        chatUsers: this.state.chatUsers,
        selectedSectionId: this.state.selectedSectionId,
        onSelectUser: this.onSelectUser.bind(this)
      }))), __jsx(TabPane, {
        label: __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
          id: "chat.contacts"
        }),
        tab: __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
          id: "chat.contacts"
        }),
        key: "2"
      }, __jsx(_util_CustomScrollbars__WEBPACK_IMPORTED_MODULE_2__["default"], {
        className: "gx-chat-sidenav-scroll-tab-2"
      }, this.state.contactList.length === 0 ? __jsx("div", {
        className: "gx-p-5"
      }, this.state.userNotFound) : __jsx(_app_components_chat_ContactList__WEBPACK_IMPORTED_MODULE_8__["default"], {
        contactList: this.state.contactList,
        selectedSectionId: this.state.selectedSectionId,
        onSelectUser: this.onSelectUser.bind(this)
      }))))));
    });

    _defineProperty(this, "_handleKeyPress", e => {
      if (e.key === 'Enter') {
        this.submitComment();
      }
    });

    _defineProperty(this, "handleChange", (event, value) => {
      this.setState({
        selectedTabIndex: value
      });
    });

    _defineProperty(this, "handleChangeIndex", index => {
      this.setState({
        selectedTabIndex: index
      });
    });

    _defineProperty(this, "onSelectUser", user => {
      this.setState({
        loader: true,
        selectedSectionId: user.id,
        drawerState: this.props.drawerState,
        selectedUser: user,
        conversation: this.state.conversationList.find(data => data.id === user.id)
      });
      setTimeout(() => {
        this.setState({
          loader: false
        });
      }, 1500);
    });

    _defineProperty(this, "showCommunication", () => {
      return __jsx("div", {
        className: "gx-chat-box"
      }, this.state.selectedUser === null ? __jsx("div", {
        className: "gx-comment-box"
      }, __jsx("div", {
        className: "gx-fs-80"
      }, __jsx("i", {
        className: "icon icon-chat gx-text-muted"
      })), __jsx("h1", {
        className: "gx-text-muted"
      }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
        id: "chat.selectUserChat"
      })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        className: "gx-d-block gx-d-lg-none",
        type: "primary",
        onClick: this.onToggleDrawer.bind(this)
      }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
        id: "chat.selectContactChat"
      }))) : this.Communication());
    });

    this.state = {
      loader: false,
      userNotFound: 'No user found',
      drawerState: false,
      selectedSectionId: '',
      selectedTabIndex: 1,
      userState: 1,
      searchChatUser: '',
      contactList: _data_chatUsers__WEBPACK_IMPORTED_MODULE_7__["default"].filter(user => !user.recent),
      selectedUser: null,
      message: '',
      chatUsers: _data_chatUsers__WEBPACK_IMPORTED_MODULE_7__["default"].filter(user => user.recent),
      conversationList: _data_conversationList__WEBPACK_IMPORTED_MODULE_5__["default"],
      conversation: null
    };
  }

  submitComment() {
    if (this.state.message !== '') {
      const updatedConversation = this.state.conversation.conversationData.concat({
        'type': 'sent',
        'message': this.state.message,
        'sentAt': moment__WEBPACK_IMPORTED_MODULE_3___default()().format('hh:mm:ss A')
      });
      this.setState({
        conversation: _objectSpread(_objectSpread({}, this.state.conversation), {}, {
          conversationData: updatedConversation
        }),
        message: '',
        conversationList: this.state.conversationList.map(conversationData => {
          if (conversationData.id === this.state.conversation.id) {
            return _objectSpread(_objectSpread({}, this.state.conversation), {}, {
              conversationData: updatedConversation
            });
          } else {
            return conversationData;
          }
        })
      });
    }
  }

  updateMessageValue(evt) {
    this.setState({
      message: evt.target.value
    });
  }

  updateSearchChatUser(evt) {
    this.setState({
      searchChatUser: evt.target.value,
      contactList: this.filterContact(evt.target.value),
      chatUsers: this.filterUsers(evt.target.value)
    });
  }

  onToggleDrawer() {
    this.setState({
      drawerState: !this.state.drawerState
    });
  }

  render() {
    const {
      loader,
      userState,
      drawerState
    } = this.state;
    return __jsx("div", {
      className: "gx-main-content"
    }, __jsx("div", {
      className: "gx-app-module gx-chat-module"
    }, __jsx("div", {
      className: "gx-chat-module-box"
    }, __jsx("div", {
      className: "gx-d-block gx-d-lg-none"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Drawer"], {
      placement: "left",
      closable: false,
      visible: drawerState,
      onClose: this.onToggleDrawer.bind(this)
    }, userState === 1 ? this.ChatUsers() : this.AppUsersInfo())), __jsx("div", {
      className: "gx-chat-sidenav gx-d-none gx-d-lg-flex"
    }, userState === 1 ? this.ChatUsers() : this.AppUsersInfo()), loader ? __jsx("div", {
      className: "gx-loader-view"
    }, __jsx(_app_components_CircularProgress__WEBPACK_IMPORTED_MODULE_11__["default"], null)) : this.showCommunication())));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Chat);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9jaGF0L0NoYXRVc2VyTGlzdC9Vc2VyQ2VsbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9jaGF0L0NoYXRVc2VyTGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9jaGF0L0NvbnRhY3RMaXN0L1VzZXJDZWxsL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL2NoYXQvQ29udGFjdExpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvY2hhdC9Db252ZXJzYXRpb24vUmVjZWl2ZWRNZXNzYWdlQ2VsbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9jaGF0L0NvbnZlcnNhdGlvbi9TZW50TWVzc2FnZUNlbGwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvY2hhdC9Db252ZXJzYXRpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcm91dGVzL2luYnVpbHRBcHBzL0NoYXQvZGF0YS9jaGF0VXNlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vcm91dGVzL2luYnVpbHRBcHBzL0NoYXQvZGF0YS9jb252ZXJzYXRpb25MaXN0LmpzIiwid2VicGFjazovLy8uL3JvdXRlcy9pbmJ1aWx0QXBwcy9DaGF0L2luZGV4LmpzIl0sIm5hbWVzIjpbIlVzZXJDZWxsIiwiY2hhdCIsInNlbGVjdGVkU2VjdGlvbklkIiwib25TZWxlY3RVc2VyIiwiaWQiLCJ0aHVtYiIsIm5hbWUiLCJzdGF0dXMiLCJsYXN0TWVzc2FnZSIsInN1YnN0cmluZyIsImxhc3RNZXNzYWdlVGltZSIsInVucmVhZE1lc3NhZ2UiLCJDaGF0VXNlckxpc3QiLCJjaGF0VXNlcnMiLCJtYXAiLCJpbmRleCIsInVzZXIiLCJtb29kIiwiQ29udGFjdExpc3QiLCJjb250YWN0TGlzdCIsIlJlY2VpdmVkTWVzc2FnZUNlbGwiLCJjb252ZXJzYXRpb24iLCJtZXNzYWdlIiwic2VudEF0IiwiU2VudE1lc3NhZ2VDZWxsIiwiQ29udmVyc2F0aW9uIiwiY29udmVyc2F0aW9uRGF0YSIsInNlbGVjdGVkVXNlciIsInR5cGUiLCJyZWNlbnQiLCJUYWJQYW5lIiwiVGFicyIsIkNoYXQiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInVzZXJOYW1lIiwidXNlcnMiLCJmaWx0ZXIiLCJ0b0xvd2VyQ2FzZSIsImluZGV4T2YiLCJzdGF0ZSIsIm9uVG9nZ2xlRHJhd2VyIiwiYmluZCIsIm1heEhlaWdodCIsIl9oYW5kbGVLZXlQcmVzcyIsInVwZGF0ZU1lc3NhZ2VWYWx1ZSIsInN1Ym1pdENvbW1lbnQiLCJzZXRTdGF0ZSIsInVzZXJTdGF0ZSIsInVwZGF0ZVNlYXJjaENoYXRVc2VyIiwic2VhcmNoQ2hhdFVzZXIiLCJsZW5ndGgiLCJ1c2VyTm90Rm91bmQiLCJlIiwia2V5IiwiZXZlbnQiLCJ2YWx1ZSIsInNlbGVjdGVkVGFiSW5kZXgiLCJsb2FkZXIiLCJkcmF3ZXJTdGF0ZSIsInByb3BzIiwiY29udmVyc2F0aW9uTGlzdCIsImZpbmQiLCJkYXRhIiwic2V0VGltZW91dCIsIkNvbW11bmljYXRpb24iLCJ1cGRhdGVkQ29udmVyc2F0aW9uIiwiY29uY2F0IiwiTW9tZW50IiwiZm9ybWF0IiwiZXZ0IiwidGFyZ2V0IiwiZmlsdGVyQ29udGFjdCIsImZpbHRlclVzZXJzIiwicmVuZGVyIiwiQ2hhdFVzZXJzIiwiQXBwVXNlcnNJbmZvIiwic2hvd0NvbW11bmljYXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxNQUFNQSxRQUFRLEdBQUcsQ0FBQztBQUFDQyxNQUFEO0FBQU9DLG1CQUFQO0FBQTBCQztBQUExQixDQUFELEtBQTZDO0FBQzVELFNBQ0U7QUFBSyxhQUFTLEVBQUcscUJBQW9CRCxpQkFBaUIsS0FBS0QsSUFBSSxDQUFDRyxFQUEzQixHQUFnQyxRQUFoQyxHQUEyQyxFQUFHLEVBQW5G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QUFFRGYsZ0JBQWMsR0FBRztBQUNmLFNBQUtNLFFBQUwsQ0FBYztBQUNaWSxpQkFBVyxFQUFFLENBQUMsS0FBS25CLEtBQUwsQ0FBV21CO0FBRGIsS0FBZDtBQUdEOztBQUVEZSxRQUFNLEdBQUc7QUFDUCxVQUFNO0FBQUNoQixZQUFEO0FBQVNWLGVBQVQ7QUFBb0JXO0FBQXBCLFFBQW1DLEtBQUtuQixLQUE5QztBQUNBLFdBQ0U7QUFBSyxlQUFTLEVBQUM7QUFBZixPQUNFO0FBQUssZUFBUyxFQUFDO0FBQWYsT0FDRTtBQUFLLGVBQVMsRUFBQztBQUFmLE9BQ0U7QUFBSyxlQUFTLEVBQUM7QUFBZixPQUNFLE1BQUMsMkNBQUQ7QUFDRSxlQUFTLEVBQUMsTUFEWjtBQUVFLGNBQVEsRUFBRSxLQUZaO0FBR0UsYUFBTyxFQUFFbUIsV0FIWDtBQUlFLGFBQU8sRUFBRSxLQUFLbEIsY0FBTCxDQUFvQkMsSUFBcEIsQ0FBeUIsSUFBekI7QUFKWCxPQUtHTSxTQUFTLEtBQUssQ0FBZCxHQUFrQixLQUFLMkIsU0FBTCxFQUFsQixHQUFxQyxLQUFLQyxZQUFMLEVBTHhDLENBREYsQ0FERixFQVVFO0FBQUssZUFBUyxFQUFDO0FBQWYsT0FDRzVCLFNBQVMsS0FBSyxDQUFkLEdBQWtCLEtBQUsyQixTQUFMLEVBQWxCLEdBQXFDLEtBQUtDLFlBQUwsRUFEeEMsQ0FWRixFQWFHbEIsTUFBTSxHQUNMO0FBQUssZUFBUyxFQUFDO0FBQWYsT0FDRSxNQUFDLHlFQUFELE9BREYsQ0FESyxHQUdJLEtBQUttQixpQkFBTCxFQWhCYixDQURGLENBREYsQ0FERjtBQXlCRDs7QUFqVTBCOztBQW9VZDdDLG1FQUFmLEUiLCJmaWxlIjoiMy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtBdmF0YXJ9IGZyb20gXCJhbnRkXCI7XHJcblxyXG5jb25zdCBVc2VyQ2VsbCA9ICh7Y2hhdCwgc2VsZWN0ZWRTZWN0aW9uSWQsIG9uU2VsZWN0VXNlcn0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2BneC1jaGF0LXVzZXItaXRlbSAke3NlbGVjdGVkU2VjdGlvbklkID09PSBjaGF0LmlkID8gJ2FjdGl2ZScgOiAnJ31gfSBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgIG9uU2VsZWN0VXNlcihjaGF0KTtcclxuICAgIH19PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWNoYXQtdXNlci1yb3dcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWNoYXQtYXZhdGFyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LXN0YXR1cy1wb3NcIj5cclxuICAgICAgICAgICAgPEF2YXRhciBzcmM9e2NoYXQudGh1bWJ9IGNsYXNzTmFtZT1cImd4LXNpemUtNDBcIiBhbHQ9e2NoYXQubmFtZX0vPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2BneC1zdGF0dXMgZ3gtc21hbGwgZ3gtJHtjaGF0LnN0YXR1c31gfS8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1jaGF0LWluZm9cIj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImd4LW5hbWUgaDRcIj57Y2hhdC5uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtY2hhdC1pbmZvLWRlcyBneC10ZXh0LXRydW5jYXRlXCI+e2NoYXQubGFzdE1lc3NhZ2Uuc3Vic3RyaW5nKDAsIDI1KSArIFwiLi4uXCJ9PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWxhc3QtbWVzc2FnZS10aW1lXCI+e2NoYXQubGFzdE1lc3NhZ2VUaW1lfTwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICB7Y2hhdC51bnJlYWRNZXNzYWdlID4gMCA/IDxkaXYgY2xhc3NOYW1lPVwiZ3gtY2hhdC1kYXRlXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWJnLXByaW1hcnkgZ3gtcm91bmRlZC1jaXJjbGUgZ3gtYmFkZ2UgZ3gtdGV4dC13aGl0ZVwiPntjaGF0LnVucmVhZE1lc3NhZ2V9PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+IDogbnVsbH1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyQ2VsbDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgVXNlckNlbGwgZnJvbSBcIi4vVXNlckNlbGwvaW5kZXhcIjtcclxuXHJcbmNvbnN0IENoYXRVc2VyTGlzdCA9ICh7Y2hhdFVzZXJzLCBzZWxlY3RlZFNlY3Rpb25JZCwgb25TZWxlY3RVc2VyfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWNoYXQtdXNlclwiPlxyXG4gICAgICB7Y2hhdFVzZXJzLm1hcCgoY2hhdCwgaW5kZXgpID0+XHJcbiAgICAgICAgPFVzZXJDZWxsIGtleT17aW5kZXh9IGNoYXQ9e2NoYXR9IHNlbGVjdGVkU2VjdGlvbklkPXtzZWxlY3RlZFNlY3Rpb25JZH0gb25TZWxlY3RVc2VyPXtvblNlbGVjdFVzZXJ9Lz5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYXRVc2VyTGlzdDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0F2YXRhcn0gZnJvbSBcImFudGRcIjtcclxuXHJcbmNvbnN0IFVzZXJDZWxsID0gKHtvblNlbGVjdFVzZXIsIHNlbGVjdGVkU2VjdGlvbklkLCB1c2VyfSkgPT4ge1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2BneC1jaGF0LXVzZXItaXRlbSAke3NlbGVjdGVkU2VjdGlvbklkID09PSB1c2VyLmlkID8gJ2FjdGl2ZScgOiAnJ31gfSBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgIG9uU2VsZWN0VXNlcih1c2VyKTtcclxuICAgIH19PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWNoYXQtdXNlci1yb3dcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWNoYXQtYXZhdGFyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LXN0YXR1cy1wb3NcIj5cclxuICAgICAgICAgICAgPEF2YXRhciBzcmM9e3VzZXIudGh1bWJ9IGNsYXNzTmFtZT1cImd4LXNpemUtNDBcIiBhbHQ9XCJBYmJvdHRcIi8+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YGd4LXN0YXR1cyAke3VzZXIuc3RhdHVzfWB9Lz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWNoYXQtY29udGFjdC1jb2xcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaDQgZ3gtbmFtZVwiPnt1c2VyLm5hbWV9PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWNoYXQtaW5mby1kZXMgZ3gtdGV4dC10cnVuY2F0ZVwiPnt1c2VyLm1vb2Quc3Vic3RyaW5nKDAsIDQwKSArIFwiLi4uXCJ9PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlckNlbGw7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFVzZXJDZWxsIGZyb20gXCIuL1VzZXJDZWxsL2luZGV4XCI7XHJcblxyXG5jb25zdCBDb250YWN0TGlzdCA9ICh7b25TZWxlY3RVc2VyLCBzZWxlY3RlZFNlY3Rpb25JZCwgY29udGFjdExpc3R9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtY2hhdC11c2VyXCI+XHJcbiAgICAgIHtjb250YWN0TGlzdC5tYXAoKHVzZXIsIGluZGV4KSA9PlxyXG4gICAgICAgIDxVc2VyQ2VsbCBrZXk9e2luZGV4fSB1c2VyPXt1c2VyfSBzZWxlY3RlZFNlY3Rpb25JZD17c2VsZWN0ZWRTZWN0aW9uSWR9IG9uU2VsZWN0VXNlcj17b25TZWxlY3RVc2VyfS8+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250YWN0TGlzdDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0F2YXRhcn0gZnJvbSBcImFudGRcIjtcclxuXHJcbmNvbnN0IFJlY2VpdmVkTWVzc2FnZUNlbGwgPSAoe2NvbnZlcnNhdGlvbiwgdXNlcn0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJneC1jaGF0LWl0ZW1cIj5cclxuXHJcbiAgICAgIDxBdmF0YXIgY2xhc3NOYW1lPVwiZ3gtc2l6ZS00MCBneC1hbGlnbi1zZWxmLWVuZFwiIHNyYz17dXNlci50aHVtYn1cclxuICAgICAgICAgICAgICBhbHQ9XCJcIi8+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWJ1YmJsZS1ibG9ja1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtYnViYmxlXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LW1lc3NhZ2VcIj57Y29udmVyc2F0aW9uLm1lc3NhZ2V9PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LXRpbWUgZ3gtdGV4dC1tdXRlZCBneC10ZXh0LXJpZ2h0IGd4LW10LTJcIj57Y29udmVyc2F0aW9uLnNlbnRBdH08L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVjZWl2ZWRNZXNzYWdlQ2VsbDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0F2YXRhcn0gZnJvbSBcImFudGRcIjtcclxuXHJcbmNvbnN0IFNlbnRNZXNzYWdlQ2VsbCA9ICh7Y29udmVyc2F0aW9ufSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWNoYXQtaXRlbSBneC1mbGV4LXJvdy1yZXZlcnNlXCI+XHJcblxyXG4gICAgICA8QXZhdGFyIGNsYXNzTmFtZT1cImd4LXNpemUtNDAgZ3gtYWxpZ24tc2VsZi1lbmRcIiBzcmM9XCJodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMTUweDE1MFwiXHJcbiAgICAgICAgICAgICAgYWx0PXtjb252ZXJzYXRpb24ubmFtZX0vPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1idWJibGUtYmxvY2tcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWJ1YmJsZVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1tZXNzYWdlXCI+e2NvbnZlcnNhdGlvbi5tZXNzYWdlfTwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC10aW1lIGd4LXRleHQtbXV0ZWQgZ3gtdGV4dC1yaWdodCBneC1tdC0yXCI+e2NvbnZlcnNhdGlvbi5zZW50QXR9PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlbnRNZXNzYWdlQ2VsbDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IFJlY2VpdmVkTWVzc2FnZUNlbGwgZnJvbSBcIi4vUmVjZWl2ZWRNZXNzYWdlQ2VsbC9pbmRleFwiO1xyXG5pbXBvcnQgU2VudE1lc3NhZ2VDZWxsIGZyb20gXCIuL1NlbnRNZXNzYWdlQ2VsbC9pbmRleFwiO1xyXG5cclxuY29uc3QgQ29udmVyc2F0aW9uID0gKHtjb252ZXJzYXRpb25EYXRhLCBzZWxlY3RlZFVzZXJ9KSA9PiB7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWNoYXQtbWFpbi1jb250ZW50XCI+XHJcbiAgICAgIHtjb252ZXJzYXRpb25EYXRhLm1hcCgoY29udmVyc2F0aW9uLCBpbmRleCkgPT4gY29udmVyc2F0aW9uLnR5cGUgPT09ICdzZW50JyA/XHJcbiAgICAgICAgPFNlbnRNZXNzYWdlQ2VsbCBrZXk9e2luZGV4fSBjb252ZXJzYXRpb249e2NvbnZlcnNhdGlvbn0vPiA6XHJcbiAgICAgICAgPFJlY2VpdmVkTWVzc2FnZUNlbGwga2V5PXtpbmRleH0gY29udmVyc2F0aW9uPXtjb252ZXJzYXRpb259IHVzZXI9e3NlbGVjdGVkVXNlcn0vPlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udmVyc2F0aW9uO1xyXG4iLCJleHBvcnQgZGVmYXVsdCBbXHJcbiAge1xyXG4gICAgaWQ6IDEsXHJcbiAgICBuYW1lOiAnQWxleCBEb2xnb3ZlJyxcclxuICAgIHRodW1iOiAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzE1MHgxNTAnLFxyXG4gICAgc3RhdHVzOiAnYXdheScsXHJcbiAgICBtb29kOiAnRW5nbGlzaCB2ZXJzaW9ucyBmcm9tIHRoZSAxOTE0IHRyYW5zbGF0aW9uIGJ5IEguIFJhY2toYW0nLFxyXG4gICAgbGFzdE1lc3NhZ2U6ICdTZWQgdXQgcGVyc3BpY2lhdGlzIHVuZGUgb21uaXMgaXN0ZSBuYXR1cyBlcnJvciBzaXQgdm9sdXB0YXRlbScsXHJcbiAgICB1bnJlYWRNZXNzYWdlOiAnJyxcclxuICAgIGxhc3RNZXNzYWdlVGltZTogJzIwIG1pbiBhZ28nLFxyXG4gICAgcmVjZW50OiBmYWxzZVxyXG4gIH0sIHtcclxuICAgIGlkOiAyLFxyXG4gICAgbmFtZTogJ0RvbW5pYyBCcm93bicsXHJcbiAgICB0aHVtYjogJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS82NDB4NDIwJyxcclxuICAgIHN0YXR1czogJ29ubGluZScsXHJcbiAgICBtb29kOiAnRW5nbGlzaCB2ZXJzaW9ucyBmcm9tIHRoZSAxOTE0IHRyYW5zbGF0aW9uIGJ5IEguIFJhY2toYW0nLFxyXG4gICAgbGFzdE1lc3NhZ2U6ICdJdCBpcyBhIGxvbmcgZXN0YWJsaXNoZWQgZmFjdCcsXHJcbiAgICB1bnJlYWRNZXNzYWdlOiAnNCcsXHJcbiAgICBsYXN0TWVzc2FnZVRpbWU6ICdZZXN0ZXJkYXknLFxyXG4gICAgcmVjZW50OiB0cnVlXHJcbiAgfSwge1xyXG4gICAgaWQ6IDMsXHJcbiAgICBuYW1lOiAnRG9tbmljIEhhcnJpcycsXHJcbiAgICB0aHVtYjogJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8xNTB4MTUwJyxcclxuICAgIHN0YXR1czogJ29mZmxpbmUnLFxyXG4gICAgbW9vZDogJ1NlZCB1dCBwZXJzcGljaWF0aXMgdW5kZSBvbW5pcyBpc3RlIG5hdHVzIGVycm9yIHNpdCB2b2x1cHRhdGVtJyxcclxuICAgIGxhc3RNZXNzYWdlOiAnVGhlcmUgYXJlIG1hbnkgdmFyaWF0aW9ucyBvZiBwYXNzYWdlcyBvZiAnLFxyXG4gICAgdW5yZWFkTWVzc2FnZTogJycsXHJcbiAgICBsYXN0TWVzc2FnZVRpbWU6ICcyMC8xMS8xNycsXHJcbiAgICByZWNlbnQ6IGZhbHNlXHJcbiAgfSwge1xyXG4gICAgaWQ6IDQsXHJcbiAgICBuYW1lOiAnR2FycnkgU29iYXJzJyxcclxuICAgIHRodW1iOiAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzE1MHgxNTAnLFxyXG4gICAgc3RhdHVzOiAnYXdheScsXHJcbiAgICBtb29kOiAnSXQgaXMgYSBsb25nIGVzdGFibGlzaGVkIGZhY3QnLFxyXG4gICAgbGFzdE1lc3NhZ2U6ICdFbmdsaXNoIHZlcnNpb25zIGZyb20gdGhlIDE5MTQgdHJhbnNsYXRpb24gYnkgSC4gUmFja2hhbScsXHJcbiAgICB1bnJlYWRNZXNzYWdlOiAnMycsXHJcbiAgICBsYXN0TWVzc2FnZVRpbWU6ICdZZXN0ZXJkYXknLFxyXG4gICAgcmVjZW50OiB0cnVlXHJcbiAgfSwge1xyXG4gICAgaWQ6IDUsXHJcbiAgICBuYW1lOiAnSmVzb24gQm9ybicsXHJcbiAgICB0aHVtYjogJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8xNTB4MTUwJyxcclxuICAgIHN0YXR1czogJ2F3YXknLFxyXG4gICAgbW9vZDogJ0kgbXVzdCBleHBsYWluIHRvIHlvdSBob3cgYWxsIHRoaXMgbWlzdGFrZW4gaWRlYSBvZiBkZW5vdW5jaW5nICcsXHJcbiAgICBsYXN0TWVzc2FnZTogJ0l0IGlzIGEgbG9uZyBlc3RhYmxpc2hlZCBmYWN0JyxcclxuICAgIHVucmVhZE1lc3NhZ2U6ICcnLFxyXG4gICAgbGFzdE1lc3NhZ2VUaW1lOiAnTW9uZGF5JyxcclxuICAgIHJlY2VudDogdHJ1ZVxyXG4gIH0sIHtcclxuICAgIGlkOiA2LFxyXG4gICAgbmFtZTogJ0ppbW15IEpvJyxcclxuICAgIHRodW1iOiAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzE1MHgxNTAnLFxyXG4gICAgc3RhdHVzOiAnb25saW5lJyxcclxuICAgIG1vb2Q6ICdUaGUgc3RhbmRhcmQgY2h1bmsgb2YgTG9yZW0gSXBzdW0gdXNlZCBzaW5jZSB0aGUgMTUwMHMgaXMgcmVwcm9kdWNlZCBiZWxvdyBmb3IgdGhvc2UgaW50ZXJlc3RlZCcsXHJcbiAgICBsYXN0TWVzc2FnZTogJ0FsbCB0aGUgTG9yZW0gSXBzdW0gZ2VuZXJhdG9ycyBvbiB0aGUnLFxyXG4gICAgdW5yZWFkTWVzc2FnZTogJycsXHJcbiAgICBsYXN0TWVzc2FnZVRpbWU6ICdGcmlkYXknLFxyXG4gICAgcmVjZW50OiBmYWxzZVxyXG4gIH0sIHtcclxuICAgIGlkOiA3LFxyXG4gICAgbmFtZTogJ0pvaG4gU21pdGgnLFxyXG4gICAgdGh1bWI6ICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMTUweDE1MCcsXHJcbiAgICBzdGF0dXM6ICdhd2F5JyxcclxuICAgIG1vb2Q6ICdUaGVyZSBhcmUgbWFueSB2YXJpYXRpb25zIG9mIHBhc3NhZ2VzIG9mICcsXHJcbiAgICBsYXN0TWVzc2FnZTogJ1RoZSBzdGFuZGFyZCBjaHVuayBvZiBMb3JlbSBJcHN1bSB1c2VkIHNpbmNlIHRoZSAxNTAwcyBpcyByZXByb2R1Y2VkIGJlbG93IGZvciB0aG9zZSBpbnRlcmVzdGVkJyxcclxuICAgIHVucmVhZE1lc3NhZ2U6ICcnLFxyXG4gICAgbGFzdE1lc3NhZ2VUaW1lOiAnVHVlc2RheScsXHJcbiAgICByZWNlbnQ6IHRydWVcclxuICB9LCB7XHJcbiAgICBpZDogOCxcclxuICAgIG5hbWU6ICdLYWRpciBNJyxcclxuICAgIHRodW1iOiAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzE1MHgxNTAnLFxyXG4gICAgc3RhdHVzOiAnb25saW5lJyxcclxuICAgIG1vb2Q6ICdBbGwgdGhlIExvcmVtIElwc3VtIGdlbmVyYXRvcnMgb24gdGhlJyxcclxuICAgIGxhc3RNZXNzYWdlOiAnSSBtdXN0IGV4cGxhaW4gdG8geW91IGhvdyBhbGwgdGhpcyBtaXN0YWtlbiBpZGVhIG9mIGRlbm91bmNpbmcgJyxcclxuICAgIHVucmVhZE1lc3NhZ2U6ICc1JyxcclxuICAgIGxhc3RNZXNzYWdlVGltZTogJ01vbmRheScsXHJcbiAgICByZWNlbnQ6IGZhbHNlXHJcbiAgfSwge1xyXG4gICAgaWQ6IDksXHJcbiAgICBuYW1lOiAnSmltbXkgSm9uJyxcclxuICAgIHRodW1iOiAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzE1MHgxNTAnLFxyXG4gICAgc3RhdHVzOiAnb2ZmbGluZScsXHJcbiAgICBtb29kOiAnVGhlcmUgYXJlIG1hbnkgdmFyaWF0aW9ucyBvZiBwYXNzYWdlcyBvZiAnLFxyXG4gICAgbGFzdE1lc3NhZ2U6ICdUaGVyZSBhcmUgbWFueSB2YXJpYXRpb25zIG9mIHBhc3NhZ2VzIG9mICcsXHJcbiAgICB1bnJlYWRNZXNzYWdlOiAnJyxcclxuICAgIGxhc3RNZXNzYWdlVGltZTogJzMwIE1pbiBhZ28nLFxyXG4gICAgcmVjZW50OiBmYWxzZVxyXG4gIH0sIHtcclxuICAgIGlkOiAxMCxcclxuICAgIG5hbWU6ICdTdGVsbGEgSm9obnNvbicsXHJcbiAgICB0aHVtYjogJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8xNTB4MTUwJyxcclxuICAgIHN0YXR1czogJ29mZmxpbmUnLFxyXG4gICAgbW9vZDogJ0l0IGlzIGEgbG9uZyBlc3RhYmxpc2hlZCBmYWN0JyxcclxuICAgIGxhc3RNZXNzYWdlOiAnRW5nbGlzaCB2ZXJzaW9ucyBmcm9tIHRoZSAxOTE0IHRyYW5zbGF0aW9uIGJ5IEguIFJhY2toYW0nLFxyXG4gICAgdW5yZWFkTWVzc2FnZTogJycsXHJcbiAgICBsYXN0TWVzc2FnZVRpbWU6ICdZZXN0ZXJkYXknLFxyXG4gICAgcmVjZW50OiBmYWxzZVxyXG4gIH0sIHtcclxuICAgIGlkOiAxMSxcclxuICAgIG5hbWU6ICdTdGV2ZSBTbWl0aCcsXHJcbiAgICB0aHVtYjogJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8xNTB4MTUwJyxcclxuICAgIHN0YXR1czogJ29ubGluZScsXHJcbiAgICBtb29kOiAnVGhlIHN0YW5kYXJkIGNodW5rIG9mIExvcmVtIElwc3VtIHVzZWQgc2luY2UgdGhlIDE1MDBzJyxcclxuICAgIGxhc3RNZXNzYWdlOiAnVGhlIHN0YW5kYXJkIGNodW5rIG9mIExvcmVtIElwc3VtIHVzZWQgc2luY2UgdGhlIDE1MDBzJyxcclxuICAgIHVucmVhZE1lc3NhZ2U6ICcyJyxcclxuICAgIGxhc3RNZXNzYWdlVGltZTogJ01vbmRheScsXHJcbiAgICByZWNlbnQ6IGZhbHNlXHJcbiAgfVxyXG5dXHJcbiIsImV4cG9ydCBkZWZhdWx0IFtcclxuICB7XHJcbiAgICAnaWQnOiAxLFxyXG4gICAgJ2NvbnZlcnNhdGlvbkRhdGEnOiBbXHJcbiAgICAgIHtcclxuICAgICAgICAndHlwZSc6ICdzZW50JyxcclxuICAgICAgICAnbWVzc2FnZSc6ICdJdCBpcyBhIGxvbmcgZXN0YWJsaXNoZWQgZmFjdCcsXHJcbiAgICAgICAgJ3NlbnRBdCc6ICczOjA4OjM1IFBNJyxcclxuICAgICAgfSwge1xyXG4gICAgICAgICd0eXBlJzogJ3JlY2VpdmVkJyxcclxuICAgICAgICAnbWVzc2FnZSc6ICdJIG11c3QgZXhwbGFpbiB0byB5b3UgaG93IGFsbCB0aGlzIG1pc3Rha2VuIGlkZWEgb2YgZGVub3VuY2luZyAnLFxyXG4gICAgICAgICdzZW50QXQnOiAnMzoxMDoyOCBQTScsXHJcbiAgICAgIH0sIHtcclxuICAgICAgICAndHlwZSc6ICdzZW50JyxcclxuICAgICAgICAnbWVzc2FnZSc6ICdUaGUgc3RhbmRhcmQgY2h1bmsgb2YgTG9yZW0gSXBzdW0gdXNlZCBzaW5jZSB0aGUgMTUwMHMgaXMgcmVwcm9kdWNlZCBiZWxvdyBmb3IgdGhvc2UgaW50ZXJlc3RlZCcsXHJcbiAgICAgICAgJ3NlbnRBdCc6ICczOjExOjI1IFBNJyxcclxuICAgICAgfSwge1xyXG4gICAgICAgICd0eXBlJzogJ3JlY2VpdmVkJyxcclxuICAgICAgICAnbWVzc2FnZSc6ICdUaGVyZSBhcmUgbWFueSB2YXJpYXRpb25zIG9mIHBhc3NhZ2VzIG9mICcsXHJcbiAgICAgICAgJ3NlbnRBdCc6ICczOjEyOjM2IFBNJyxcclxuICAgICAgfSwge1xyXG4gICAgICAgICd0eXBlJzogJ3JlY2VpdmVkJyxcclxuICAgICAgICAnbWVzc2FnZSc6ICdBbGwgdGhlIExvcmVtIElwc3VtIGdlbmVyYXRvcnMgb24gdGhlJyxcclxuICAgICAgICAnc2VudEF0JzogJzM6MTI6NDUgUE0nLFxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgJ3R5cGUnOiAnc2VudCcsXHJcbiAgICAgICAgJ21lc3NhZ2UnOiAnVGhlcmUgYXJlIG1hbnkgdmFyaWF0aW9ucyBvZiBwYXNzYWdlcyBvZiAnLFxyXG4gICAgICAgICdzZW50QXQnOiAnMzoxMzowNCBQTScsXHJcbiAgICAgIH0sIHtcclxuICAgICAgICAndHlwZSc6ICdyZWNlaXZlZCcsXHJcbiAgICAgICAgJ21lc3NhZ2UnOiAnSXQgaXMgYSBsb25nIGVzdGFibGlzaGVkIGZhY3QnLFxyXG4gICAgICAgICdzZW50QXQnOiAnMzoxMzoyOCBQTScsXHJcbiAgICAgIH0sIHtcclxuICAgICAgICAndHlwZSc6ICdzZW50JyxcclxuICAgICAgICAnbWVzc2FnZSc6ICdUaGUgc3RhbmRhcmQgY2h1bmsgb2YgTG9yZW0gSXBzdW0gdXNlZCBzaW5jZSB0aGUgMTUwMHMnLFxyXG4gICAgICAgICdzZW50QXQnOiAnMzoxNTo0NSBQTScsXHJcbiAgICAgIH1cclxuICAgIF1cclxuICB9LFxyXG4gIHtcclxuICAgICdpZCc6IDIsXHJcbiAgICAnY29udmVyc2F0aW9uRGF0YSc6IFtcclxuICAgICAge1xyXG4gICAgICAgICd0eXBlJzogJ3NlbnQnLFxyXG4gICAgICAgICdtZXNzYWdlJzogJ0VuZ2xpc2ggdmVyc2lvbnMgZnJvbSB0aGUgMTkxNCB0cmFuc2xhdGlvbiBieSBILiBSYWNraGFtJyxcclxuICAgICAgICAnc2VudEF0JzogJzM6MDM6MjggUE0nLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgJ3R5cGUnOiAncmVjZWl2ZWQnLFxyXG4gICAgICAgICdtZXNzYWdlJzogJ0VuZ2xpc2ggdmVyc2lvbnMgZnJvbSB0aGUgMTkxNCB0cmFuc2xhdGlvbiBieSBILiBSYWNraGFtJyxcclxuICAgICAgICAnc2VudEF0JzogJzM6MDU6NDcgUE0nLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgJ3R5cGUnOiAnc2VudCcsXHJcbiAgICAgICAgJ21lc3NhZ2UnOiAnU2VkIHV0IHBlcnNwaWNpYXRpcyB1bmRlIG9tbmlzIGlzdGUgbmF0dXMgZXJyb3Igc2l0IHZvbHVwdGF0ZW0nLFxyXG4gICAgICAgICdzZW50QXQnOiAnMzowNzo1MiBQTScsXHJcbiAgICAgIH0sIHtcclxuICAgICAgICAndHlwZSc6ICdyZWNlaXZlZCcsXHJcbiAgICAgICAgJ21lc3NhZ2UnOiAnVGhlcmUgYXJlIG1hbnkgdmFyaWF0aW9ucyBvZiBwYXNzYWdlcyBvZiAnLFxyXG4gICAgICAgICdzZW50QXQnOiAnMzoxMjozNiBQTScsXHJcbiAgICAgIH0sIHtcclxuICAgICAgICAndHlwZSc6ICdyZWNlaXZlZCcsXHJcbiAgICAgICAgJ21lc3NhZ2UnOiAnQWxsIHRoZSBMb3JlbSBJcHN1bSBnZW5lcmF0b3JzIG9uIHRoZScsXHJcbiAgICAgICAgJ3NlbnRBdCc6ICczOjEyOjQ1IFBNJyxcclxuICAgICAgfSwge1xyXG4gICAgICAgICd0eXBlJzogJ3NlbnQnLFxyXG4gICAgICAgICdtZXNzYWdlJzogJ1RoZXJlIGFyZSBtYW55IHZhcmlhdGlvbnMgb2YgcGFzc2FnZXMgb2YgJyxcclxuICAgICAgICAnc2VudEF0JzogJzM6MTM6MDQgUE0nLFxyXG4gICAgICB9LFxyXG4gICAgXVxyXG4gIH0sXHJcbiAge1xyXG4gICAgJ2lkJzogMyxcclxuICAgICdjb252ZXJzYXRpb25EYXRhJzogW1xyXG4gICAgICB7XHJcbiAgICAgICAgJ3R5cGUnOiAnc2VudCcsXHJcbiAgICAgICAgJ21lc3NhZ2UnOiAnSXQgaXMgYSBsb25nIGVzdGFibGlzaGVkIGZhY3QnLFxyXG4gICAgICAgICdzZW50QXQnOiAnMzowODozNSBQTScsXHJcbiAgICAgIH0sIHtcclxuICAgICAgICAndHlwZSc6ICdyZWNlaXZlZCcsXHJcbiAgICAgICAgJ21lc3NhZ2UnOiAnSSBtdXN0IGV4cGxhaW4gdG8geW91IGhvdyBhbGwgdGhpcyBtaXN0YWtlbiBpZGVhIG9mIGRlbm91bmNpbmcgJyxcclxuICAgICAgICAnc2VudEF0JzogJzM6MTA6MjggUE0nLFxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgJ3R5cGUnOiAnc2VudCcsXHJcbiAgICAgICAgJ21lc3NhZ2UnOiAnVGhlIHN0YW5kYXJkIGNodW5rIG9mIExvcmVtIElwc3VtIHVzZWQgc2luY2UgdGhlIDE1MDBzIGlzIHJlcHJvZHVjZWQgYmVsb3cgZm9yIHRob3NlIGludGVyZXN0ZWQnLFxyXG4gICAgICAgICdzZW50QXQnOiAnMzoxMToyNSBQTScsXHJcbiAgICAgIH0sIHtcclxuICAgICAgICAndHlwZSc6ICdyZWNlaXZlZCcsXHJcbiAgICAgICAgJ21lc3NhZ2UnOiAnVGhlcmUgYXJlIG1hbnkgdmFyaWF0aW9ucyBvZiBwYXNzYWdlcyBvZiAnLFxyXG4gICAgICAgICdzZW50QXQnOiAnMzoxMjozNiBQTScsXHJcbiAgICAgIH0sIHtcclxuICAgICAgICAndHlwZSc6ICdyZWNlaXZlZCcsXHJcbiAgICAgICAgJ21lc3NhZ2UnOiAnQWxsIHRoZSBMb3JlbSBJcHN1bSBnZW5lcmF0b3JzIG9uIHRoZScsXHJcbiAgICAgICAgJ3NlbnRBdCc6ICczOjEyOjQ1IFBNJyxcclxuICAgICAgfSwge1xyXG4gICAgICAgICd0eXBlJzogJ3NlbnQnLFxyXG4gICAgICAgICdtZXNzYWdlJzogJ1RoZXJlIGFyZSBtYW55IHZhcmlhdGlvbnMgb2YgcGFzc2FnZXMgb2YgJyxcclxuICAgICAgICAnc2VudEF0JzogJzM6MTM6MDQgUE0nLFxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgJ3R5cGUnOiAncmVjZWl2ZWQnLFxyXG4gICAgICAgICdtZXNzYWdlJzogJ0l0IGlzIGEgbG9uZyBlc3RhYmxpc2hlZCBmYWN0JyxcclxuICAgICAgICAnc2VudEF0JzogJzM6MTM6MjggUE0nLFxyXG4gICAgICB9LFxyXG4gICAgXVxyXG4gIH0sXHJcbiAge1xyXG4gICAgJ2lkJzogNCxcclxuICAgICdjb252ZXJzYXRpb25EYXRhJzogW1xyXG4gICAgICB7XHJcbiAgICAgICAgJ3R5cGUnOiAnc2VudCcsXHJcbiAgICAgICAgJ21lc3NhZ2UnOiAnRW5nbGlzaCB2ZXJzaW9ucyBmcm9tIHRoZSAxOTE0IHRyYW5zbGF0aW9uIGJ5IEguIFJhY2toYW0nLFxyXG4gICAgICAgICdzZW50QXQnOiAnMzowMzoyOCBQTScsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICAndHlwZSc6ICdyZWNlaXZlZCcsXHJcbiAgICAgICAgJ21lc3NhZ2UnOiAnRW5nbGlzaCB2ZXJzaW9ucyBmcm9tIHRoZSAxOTE0IHRyYW5zbGF0aW9uIGJ5IEguIFJhY2toYW0nLFxyXG4gICAgICAgICdzZW50QXQnOiAnMzowNTo0NyBQTScsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICAndHlwZSc6ICdzZW50JyxcclxuICAgICAgICAnbWVzc2FnZSc6ICdUaGUgc3RhbmRhcmQgY2h1bmsgb2YgTG9yZW0gSXBzdW0gdXNlZCBzaW5jZSB0aGUgMTUwMHMgaXMgcmVwcm9kdWNlZCBiZWxvdyBmb3IgdGhvc2UgaW50ZXJlc3RlZCcsXHJcbiAgICAgICAgJ3NlbnRBdCc6ICczOjExOjI1IFBNJyxcclxuICAgICAgfSwge1xyXG4gICAgICAgICd0eXBlJzogJ3JlY2VpdmVkJyxcclxuICAgICAgICAnbWVzc2FnZSc6ICdUaGVyZSBhcmUgbWFueSB2YXJpYXRpb25zIG9mIHBhc3NhZ2VzIG9mICcsXHJcbiAgICAgICAgJ3NlbnRBdCc6ICczOjEyOjM2IFBNJyxcclxuICAgICAgfSwge1xyXG4gICAgICAgICd0eXBlJzogJ3JlY2VpdmVkJyxcclxuICAgICAgICAnbWVzc2FnZSc6ICdBbGwgdGhlIExvcmVtIElwc3VtIGdlbmVyYXRvcnMgb24gdGhlJyxcclxuICAgICAgICAnc2VudEF0JzogJzM6MTI6NDUgUE0nLFxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgJ3R5cGUnOiAnc2VudCcsXHJcbiAgICAgICAgJ21lc3NhZ2UnOiAnVGhlcmUgYXJlIG1hbnkgdmFyaWF0aW9ucyBvZiBwYXNzYWdlcyBvZiAnLFxyXG4gICAgICAgICdzZW50QXQnOiAnMzoxMzowNCBQTScsXHJcbiAgICAgIH0sIHtcclxuICAgICAgICAndHlwZSc6ICdyZWNlaXZlZCcsXHJcbiAgICAgICAgJ21lc3NhZ2UnOiAnSXQgaXMgYSBsb25nIGVzdGFibGlzaGVkIGZhY3QnLFxyXG4gICAgICAgICdzZW50QXQnOiAnMzoxMzoyOCBQTScsXHJcbiAgICAgIH0sIHtcclxuICAgICAgICAndHlwZSc6ICdzZW50JyxcclxuICAgICAgICAnbWVzc2FnZSc6ICdUaGUgc3RhbmRhcmQgY2h1bmsgb2YgTG9yZW0gSXBzdW0gdXNlZCBzaW5jZSB0aGUgMTUwMHMnLFxyXG4gICAgICAgICdzZW50QXQnOiAnMzoxNTo0NSBQTScsXHJcbiAgICAgIH1cclxuICAgIF1cclxuICB9LCB7XHJcbiAgICAnaWQnOiA1LFxyXG4gICAgJ2NvbnZlcnNhdGlvbkRhdGEnOiBbXHJcbiAgICAgIHtcclxuICAgICAgICAndHlwZSc6ICdzZW50JyxcclxuICAgICAgICAnbWVzc2FnZSc6ICdTZWQgdXQgcGVyc3BpY2lhdGlzIHVuZGUgb21uaXMgaXN0ZSBuYXR1cyBlcnJvciBzaXQgdm9sdXB0YXRlbScsXHJcbiAgICAgICAgJ3NlbnRBdCc6ICczOjA3OjUyIFBNJyxcclxuICAgICAgfSwge1xyXG4gICAgICAgICd0eXBlJzogJ3NlbnQnLFxyXG4gICAgICAgICdtZXNzYWdlJzogJ0l0IGlzIGEgbG9uZyBlc3RhYmxpc2hlZCBmYWN0JyxcclxuICAgICAgICAnc2VudEF0JzogJzM6MDg6MzUgUE0nLFxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgJ3R5cGUnOiAncmVjZWl2ZWQnLFxyXG4gICAgICAgICdtZXNzYWdlJzogJ0kgbXVzdCBleHBsYWluIHRvIHlvdSBob3cgYWxsIHRoaXMgbWlzdGFrZW4gaWRlYSBvZiBkZW5vdW5jaW5nICcsXHJcbiAgICAgICAgJ3NlbnRBdCc6ICczOjEwOjI4IFBNJyxcclxuICAgICAgfSwge1xyXG4gICAgICAgICd0eXBlJzogJ3NlbnQnLFxyXG4gICAgICAgICdtZXNzYWdlJzogJ1RoZSBzdGFuZGFyZCBjaHVuayBvZiBMb3JlbSBJcHN1bSB1c2VkIHNpbmNlIHRoZSAxNTAwcyBpcyByZXByb2R1Y2VkIGJlbG93IGZvciB0aG9zZSBpbnRlcmVzdGVkJyxcclxuICAgICAgICAnc2VudEF0JzogJzM6MTE6MjUgUE0nLFxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgJ3R5cGUnOiAncmVjZWl2ZWQnLFxyXG4gICAgICAgICdtZXNzYWdlJzogJ1RoZXJlIGFyZSBtYW55IHZhcmlhdGlvbnMgb2YgcGFzc2FnZXMgb2YgJyxcclxuICAgICAgICAnc2VudEF0JzogJzM6MTI6MzYgUE0nLFxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgJ3R5cGUnOiAncmVjZWl2ZWQnLFxyXG4gICAgICAgICdtZXNzYWdlJzogJ0l0IGlzIGEgbG9uZyBlc3RhYmxpc2hlZCBmYWN0JyxcclxuICAgICAgICAnc2VudEF0JzogJzM6MTM6MjggUE0nLFxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgJ3R5cGUnOiAnc2VudCcsXHJcbiAgICAgICAgJ21lc3NhZ2UnOiAnVGhlIHN0YW5kYXJkIGNodW5rIG9mIExvcmVtIElwc3VtIHVzZWQgc2luY2UgdGhlIDE1MDBzJyxcclxuICAgICAgICAnc2VudEF0JzogJzM6MTU6NDUgUE0nLFxyXG4gICAgICB9XHJcbiAgICBdXHJcbiAgfSxcclxuICB7XHJcbiAgICAnaWQnOiA2LFxyXG4gICAgJ2NvbnZlcnNhdGlvbkRhdGEnOiBbXHJcbiAgICAgIHtcclxuICAgICAgICAndHlwZSc6ICdzZW50JyxcclxuICAgICAgICAnbWVzc2FnZSc6ICdJdCBpcyBhIGxvbmcgZXN0YWJsaXNoZWQgZmFjdCcsXHJcbiAgICAgICAgJ3NlbnRBdCc6ICczOjA4OjM1IFBNJyxcclxuICAgICAgfSwge1xyXG4gICAgICAgICd0eXBlJzogJ3JlY2VpdmVkJyxcclxuICAgICAgICAnbWVzc2FnZSc6ICdJIG11c3QgZXhwbGFpbiB0byB5b3UgaG93IGFsbCB0aGlzIG1pc3Rha2VuIGlkZWEgb2YgZGVub3VuY2luZyAnLFxyXG4gICAgICAgICdzZW50QXQnOiAnMzoxMDoyOCBQTScsXHJcbiAgICAgIH0sIHtcclxuICAgICAgICAndHlwZSc6ICdzZW50JyxcclxuICAgICAgICAnbWVzc2FnZSc6ICdUaGUgc3RhbmRhcmQgY2h1bmsgb2YgTG9yZW0gSXBzdW0gdXNlZCBzaW5jZSB0aGUgMTUwMHMgaXMgcmVwcm9kdWNlZCBiZWxvdyBmb3IgdGhvc2UgaW50ZXJlc3RlZCcsXHJcbiAgICAgICAgJ3NlbnRBdCc6ICczOjExOjI1IFBNJyxcclxuICAgICAgfSwge1xyXG4gICAgICAgICd0eXBlJzogJ3JlY2VpdmVkJyxcclxuICAgICAgICAnbWVzc2FnZSc6ICdUaGVyZSBhcmUgbWFueSB2YXJpYXRpb25zIG9mIHBhc3NhZ2VzIG9mICcsXHJcbiAgICAgICAgJ3NlbnRBdCc6ICczOjEyOjM2IFBNJyxcclxuICAgICAgfSwge1xyXG4gICAgICAgICd0eXBlJzogJ3JlY2VpdmVkJyxcclxuICAgICAgICAnbWVzc2FnZSc6ICdJdCBpcyBhIGxvbmcgZXN0YWJsaXNoZWQgZmFjdCcsXHJcbiAgICAgICAgJ3NlbnRBdCc6ICczOjEzOjI4IFBNJyxcclxuICAgICAgfSwge1xyXG4gICAgICAgICd0eXBlJzogJ3NlbnQnLFxyXG4gICAgICAgICdtZXNzYWdlJzogJ1RoZSBzdGFuZGFyZCBjaHVuayBvZiBMb3JlbSBJcHN1bSB1c2VkIHNpbmNlIHRoZSAxNTAwcycsXHJcbiAgICAgICAgJ3NlbnRBdCc6ICczOjE1OjQ1IFBNJyxcclxuICAgICAgfVxyXG4gICAgXVxyXG4gIH0sIHtcclxuICAgICdpZCc6IDcsXHJcbiAgICAnY29udmVyc2F0aW9uRGF0YSc6IFtcclxuXHJcbiAgICAgIHtcclxuICAgICAgICAndHlwZSc6ICdyZWNlaXZlZCcsXHJcbiAgICAgICAgJ21lc3NhZ2UnOiAnRW5nbGlzaCB2ZXJzaW9ucyBmcm9tIHRoZSAxOTE0IHRyYW5zbGF0aW9uIGJ5IEguIFJhY2toYW0nLFxyXG4gICAgICAgICdzZW50QXQnOiAnMzowNTo0NyBQTScsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICAndHlwZSc6ICdzZW50JyxcclxuICAgICAgICAnbWVzc2FnZSc6ICdTZWQgdXQgcGVyc3BpY2lhdGlzIHVuZGUgb21uaXMgaXN0ZSBuYXR1cyBlcnJvciBzaXQgdm9sdXB0YXRlbScsXHJcbiAgICAgICAgJ3NlbnRBdCc6ICczOjA3OjUyIFBNJyxcclxuICAgICAgfSwge1xyXG4gICAgICAgICd0eXBlJzogJ3NlbnQnLFxyXG4gICAgICAgICdtZXNzYWdlJzogJ0l0IGlzIGEgbG9uZyBlc3RhYmxpc2hlZCBmYWN0JyxcclxuICAgICAgICAnc2VudEF0JzogJzM6MDg6MzUgUE0nLFxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgJ3R5cGUnOiAncmVjZWl2ZWQnLFxyXG4gICAgICAgICdtZXNzYWdlJzogJ1RoZXJlIGFyZSBtYW55IHZhcmlhdGlvbnMgb2YgcGFzc2FnZXMgb2YgJyxcclxuICAgICAgICAnc2VudEF0JzogJzM6MTI6MzYgUE0nLFxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgJ3R5cGUnOiAncmVjZWl2ZWQnLFxyXG4gICAgICAgICdtZXNzYWdlJzogJ0FsbCB0aGUgTG9yZW0gSXBzdW0gZ2VuZXJhdG9ycyBvbiB0aGUnLFxyXG4gICAgICAgICdzZW50QXQnOiAnMzoxMjo0NSBQTScsXHJcbiAgICAgIH0sIHtcclxuICAgICAgICAndHlwZSc6ICdzZW50JyxcclxuICAgICAgICAnbWVzc2FnZSc6ICdUaGVyZSBhcmUgbWFueSB2YXJpYXRpb25zIG9mIHBhc3NhZ2VzIG9mICcsXHJcbiAgICAgICAgJ3NlbnRBdCc6ICczOjEzOjA0IFBNJyxcclxuICAgICAgfSwge1xyXG4gICAgICAgICd0eXBlJzogJ3JlY2VpdmVkJyxcclxuICAgICAgICAnbWVzc2FnZSc6ICdJdCBpcyBhIGxvbmcgZXN0YWJsaXNoZWQgZmFjdCcsXHJcbiAgICAgICAgJ3NlbnRBdCc6ICczOjEzOjI4IFBNJyxcclxuICAgICAgfSxcclxuICAgIF1cclxuICB9LFxyXG4gIHtcclxuICAgICdpZCc6IDgsXHJcbiAgICAnY29udmVyc2F0aW9uRGF0YSc6IFtcclxuICAgICAge1xyXG4gICAgICAgICd0eXBlJzogJ3NlbnQnLFxyXG4gICAgICAgICdtZXNzYWdlJzogJ0VuZ2xpc2ggdmVyc2lvbnMgZnJvbSB0aGUgMTkxNCB0cmFuc2xhdGlvbiBieSBILiBSYWNraGFtJyxcclxuICAgICAgICAnc2VudEF0JzogJzM6MDM6MjggUE0nLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgJ3R5cGUnOiAnc2VudCcsXHJcbiAgICAgICAgJ21lc3NhZ2UnOiAnU2VkIHV0IHBlcnNwaWNpYXRpcyB1bmRlIG9tbmlzIGlzdGUgbmF0dXMgZXJyb3Igc2l0IHZvbHVwdGF0ZW0nLFxyXG4gICAgICAgICdzZW50QXQnOiAnMzowNzo1MiBQTScsXHJcbiAgICAgIH0sIHtcclxuICAgICAgICAndHlwZSc6ICdzZW50JyxcclxuICAgICAgICAnbWVzc2FnZSc6ICdJdCBpcyBhIGxvbmcgZXN0YWJsaXNoZWQgZmFjdCcsXHJcbiAgICAgICAgJ3NlbnRBdCc6ICczOjA4OjM1IFBNJyxcclxuICAgICAgfSwge1xyXG4gICAgICAgICd0eXBlJzogJ3JlY2VpdmVkJyxcclxuICAgICAgICAnbWVzc2FnZSc6ICdJIG11c3QgZXhwbGFpbiB0byB5b3UgaG93IGFsbCB0aGlzIG1pc3Rha2VuIGlkZWEgb2YgZGVub3VuY2luZyAnLFxyXG4gICAgICAgICdzZW50QXQnOiAnMzoxMDoyOCBQTScsXHJcbiAgICAgIH0sIHtcclxuICAgICAgICAndHlwZSc6ICdyZWNlaXZlZCcsXHJcbiAgICAgICAgJ21lc3NhZ2UnOiAnVGhlcmUgYXJlIG1hbnkgdmFyaWF0aW9ucyBvZiBwYXNzYWdlcyBvZiAnLFxyXG4gICAgICAgICdzZW50QXQnOiAnMzoxMjozNiBQTScsXHJcbiAgICAgIH0sIHtcclxuICAgICAgICAndHlwZSc6ICdyZWNlaXZlZCcsXHJcbiAgICAgICAgJ21lc3NhZ2UnOiAnQWxsIHRoZSBMb3JlbSBJcHN1bSBnZW5lcmF0b3JzIG9uIHRoZScsXHJcbiAgICAgICAgJ3NlbnRBdCc6ICczOjEyOjQ1IFBNJyxcclxuICAgICAgfSwge1xyXG4gICAgICAgICd0eXBlJzogJ3JlY2VpdmVkJyxcclxuICAgICAgICAnbWVzc2FnZSc6ICdJdCBpcyBhIGxvbmcgZXN0YWJsaXNoZWQgZmFjdCcsXHJcbiAgICAgICAgJ3NlbnRBdCc6ICczOjEzOjI4IFBNJyxcclxuICAgICAgfSwge1xyXG4gICAgICAgICd0eXBlJzogJ3NlbnQnLFxyXG4gICAgICAgICdtZXNzYWdlJzogJ1RoZSBzdGFuZGFyZCBjaHVuayBvZiBMb3JlbSBJcHN1bSB1c2VkIHNpbmNlIHRoZSAxNTAwcycsXHJcbiAgICAgICAgJ3NlbnRBdCc6ICczOjE1OjQ1IFBNJyxcclxuICAgICAgfVxyXG4gICAgXVxyXG4gIH0sXHJcbiAge1xyXG4gICAgJ2lkJzogOSxcclxuICAgICdjb252ZXJzYXRpb25EYXRhJzogW1xyXG5cclxuICAgICAge1xyXG4gICAgICAgICd0eXBlJzogJ3JlY2VpdmVkJyxcclxuICAgICAgICAnbWVzc2FnZSc6ICdFbmdsaXNoIHZlcnNpb25zIGZyb20gdGhlIDE5MTQgdHJhbnNsYXRpb24gYnkgSC4gUmFja2hhbScsXHJcbiAgICAgICAgJ3NlbnRBdCc6ICczOjA1OjQ3IFBNJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgICd0eXBlJzogJ3NlbnQnLFxyXG4gICAgICAgICdtZXNzYWdlJzogJ1NlZCB1dCBwZXJzcGljaWF0aXMgdW5kZSBvbW5pcyBpc3RlIG5hdHVzIGVycm9yIHNpdCB2b2x1cHRhdGVtJyxcclxuICAgICAgICAnc2VudEF0JzogJzM6MDc6NTIgUE0nLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgJ3R5cGUnOiAncmVjZWl2ZWQnLFxyXG4gICAgICAgICdtZXNzYWdlJzogJ0kgbXVzdCBleHBsYWluIHRvIHlvdSBob3cgYWxsIHRoaXMgbWlzdGFrZW4gaWRlYSBvZiBkZW5vdW5jaW5nICcsXHJcbiAgICAgICAgJ3NlbnRBdCc6ICczOjEwOjI4IFBNJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgICd0eXBlJzogJ3JlY2VpdmVkJyxcclxuICAgICAgICAnbWVzc2FnZSc6ICdUaGVyZSBhcmUgbWFueSB2YXJpYXRpb25zIG9mIHBhc3NhZ2VzIG9mICcsXHJcbiAgICAgICAgJ3NlbnRBdCc6ICczOjEyOjM2IFBNJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgICd0eXBlJzogJ3NlbnQnLFxyXG4gICAgICAgICdtZXNzYWdlJzogJ1RoZXJlIGFyZSBtYW55IHZhcmlhdGlvbnMgb2YgcGFzc2FnZXMgb2YgJyxcclxuICAgICAgICAnc2VudEF0JzogJzM6MTM6MDQgUE0nLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgJ3R5cGUnOiAncmVjZWl2ZWQnLFxyXG4gICAgICAgICdtZXNzYWdlJzogJ0l0IGlzIGEgbG9uZyBlc3RhYmxpc2hlZCBmYWN0JyxcclxuICAgICAgICAnc2VudEF0JzogJzM6MTM6MjggUE0nLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgJ3R5cGUnOiAnc2VudCcsXHJcbiAgICAgICAgJ21lc3NhZ2UnOiAnVGhlIHN0YW5kYXJkIGNodW5rIG9mIExvcmVtIElwc3VtIHVzZWQgc2luY2UgdGhlIDE1MDBzJyxcclxuICAgICAgICAnc2VudEF0JzogJzM6MTU6NDUgUE0nLFxyXG4gICAgICB9XHJcbiAgICBdXHJcbiAgfSxcclxuICB7XHJcbiAgICAnaWQnOiAxMCxcclxuICAgICdjb252ZXJzYXRpb25EYXRhJzogW1xyXG4gICAgICB7XHJcbiAgICAgICAgJ3R5cGUnOiAnc2VudCcsXHJcbiAgICAgICAgJ21lc3NhZ2UnOiAnRW5nbGlzaCB2ZXJzaW9ucyBmcm9tIHRoZSAxOTE0IHRyYW5zbGF0aW9uIGJ5IEguIFJhY2toYW0nLFxyXG4gICAgICAgICdzZW50QXQnOiAnMzowMzoyOCBQTScsXHJcbiAgICAgIH0sIHtcclxuICAgICAgICAndHlwZSc6ICdyZWNlaXZlZCcsXHJcbiAgICAgICAgJ21lc3NhZ2UnOiAnRW5nbGlzaCB2ZXJzaW9ucyBmcm9tIHRoZSAxOTE0IHRyYW5zbGF0aW9uIGJ5IEguIFJhY2toYW0nLFxyXG4gICAgICAgICdzZW50QXQnOiAnMzowNTo0NyBQTScsXHJcbiAgICAgIH0sIHtcclxuICAgICAgICAndHlwZSc6ICdzZW50JyxcclxuICAgICAgICAnbWVzc2FnZSc6ICdTZWQgdXQgcGVyc3BpY2lhdGlzIHVuZGUgb21uaXMgaXN0ZSBuYXR1cyBlcnJvciBzaXQgdm9sdXB0YXRlbScsXHJcbiAgICAgICAgJ3NlbnRBdCc6ICczOjA3OjUyIFBNJyxcclxuICAgICAgfSwge1xyXG4gICAgICAgICd0eXBlJzogJ3NlbnQnLFxyXG4gICAgICAgICdtZXNzYWdlJzogJ0l0IGlzIGEgbG9uZyBlc3RhYmxpc2hlZCBmYWN0JyxcclxuICAgICAgICAnc2VudEF0JzogJzM6MDg6MzUgUE0nLFxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgJ3R5cGUnOiAncmVjZWl2ZWQnLFxyXG4gICAgICAgICdtZXNzYWdlJzogJ0kgbXVzdCBleHBsYWluIHRvIHlvdSBob3cgYWxsIHRoaXMgbWlzdGFrZW4gaWRlYSBvZiBkZW5vdW5jaW5nICcsXHJcbiAgICAgICAgJ3NlbnRBdCc6ICczOjEwOjI4IFBNJyxcclxuICAgICAgfSwge1xyXG4gICAgICAgICd0eXBlJzogJ3NlbnQnLFxyXG4gICAgICAgICdtZXNzYWdlJzogJ1RoZSBzdGFuZGFyZCBjaHVuayBvZiBMb3JlbSBJcHN1bSB1c2VkIHNpbmNlIHRoZSAxNTAwcyBpcyByZXByb2R1Y2VkIGJlbG93IGZvciB0aG9zZSBpbnRlcmVzdGVkJyxcclxuICAgICAgICAnc2VudEF0JzogJzM6MTE6MjUgUE0nLFxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgJ3R5cGUnOiAncmVjZWl2ZWQnLFxyXG4gICAgICAgICdtZXNzYWdlJzogJ1RoZXJlIGFyZSBtYW55IHZhcmlhdGlvbnMgb2YgcGFzc2FnZXMgb2YgJyxcclxuICAgICAgICAnc2VudEF0JzogJzM6MTI6MzYgUE0nLFxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgJ3R5cGUnOiAncmVjZWl2ZWQnLFxyXG4gICAgICAgICdtZXNzYWdlJzogJ0FsbCB0aGUgTG9yZW0gSXBzdW0gZ2VuZXJhdG9ycyBvbiB0aGUnLFxyXG4gICAgICAgICdzZW50QXQnOiAnMzoxMjo0NSBQTScsXHJcbiAgICAgIH0sIHtcclxuICAgICAgICAndHlwZSc6ICdzZW50JyxcclxuICAgICAgICAnbWVzc2FnZSc6ICdUaGVyZSBhcmUgbWFueSB2YXJpYXRpb25zIG9mIHBhc3NhZ2VzIG9mICcsXHJcbiAgICAgICAgJ3NlbnRBdCc6ICczOjEzOjA0IFBNJyxcclxuICAgICAgfSwge1xyXG4gICAgICAgICd0eXBlJzogJ3JlY2VpdmVkJyxcclxuICAgICAgICAnbWVzc2FnZSc6ICdJdCBpcyBhIGxvbmcgZXN0YWJsaXNoZWQgZmFjdCcsXHJcbiAgICAgICAgJ3NlbnRBdCc6ICczOjEzOjI4IFBNJyxcclxuICAgICAgfSwge1xyXG4gICAgICAgICd0eXBlJzogJ3NlbnQnLFxyXG4gICAgICAgICdtZXNzYWdlJzogJ1RoZSBzdGFuZGFyZCBjaHVuayBvZiBMb3JlbSBJcHN1bSB1c2VkIHNpbmNlIHRoZSAxNTAwcycsXHJcbiAgICAgICAgJ3NlbnRBdCc6ICczOjE1OjQ1IFBNJyxcclxuICAgICAgfVxyXG4gICAgXVxyXG4gIH0sXHJcbiAge1xyXG4gICAgJ2lkJzogMTEsXHJcbiAgICAnY29udmVyc2F0aW9uRGF0YSc6IFtcclxuICAgICAge1xyXG4gICAgICAgICd0eXBlJzogJ3JlY2VpdmVkJyxcclxuICAgICAgICAnbWVzc2FnZSc6ICdUaGVyZSBhcmUgbWFueSB2YXJpYXRpb25zIG9mIHBhc3NhZ2VzIG9mICcsXHJcbiAgICAgICAgJ3NlbnRBdCc6ICczOjEyOjM2IFBNJyxcclxuICAgICAgfSwge1xyXG4gICAgICAgICd0eXBlJzogJ3JlY2VpdmVkJyxcclxuICAgICAgICAnbWVzc2FnZSc6ICdBbGwgdGhlIExvcmVtIElwc3VtIGdlbmVyYXRvcnMgb24gdGhlJyxcclxuICAgICAgICAnc2VudEF0JzogJzM6MTI6NDUgUE0nLFxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgJ3R5cGUnOiAnc2VudCcsXHJcbiAgICAgICAgJ21lc3NhZ2UnOiAnVGhlcmUgYXJlIG1hbnkgdmFyaWF0aW9ucyBvZiBwYXNzYWdlcyBvZiAnLFxyXG4gICAgICAgICdzZW50QXQnOiAnMzoxMzowNCBQTScsXHJcbiAgICAgIH0sXHJcbiAgICBdXHJcbiAgfVxyXG5cclxuXVxyXG4iLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0F2YXRhciwgQnV0dG9uLCBEcmF3ZXIsIElucHV0LCBUYWJzfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgQ3VzdG9tU2Nyb2xsYmFycyBmcm9tIFwiLi4vLi4vLi4vdXRpbC9DdXN0b21TY3JvbGxiYXJzXCI7XHJcbmltcG9ydCBNb21lbnQgZnJvbSBcIm1vbWVudFwiO1xyXG5cclxuaW1wb3J0IENoYXRVc2VyTGlzdCBmcm9tIFwiLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvY2hhdC9DaGF0VXNlckxpc3RcIjtcclxuaW1wb3J0IGNvbnZlcnNhdGlvbkxpc3QgZnJvbSBcIi4vZGF0YS9jb252ZXJzYXRpb25MaXN0XCI7XHJcbmltcG9ydCBDb252ZXJzYXRpb24gZnJvbSBcIi4uLy4uLy4uL2FwcC9jb21wb25lbnRzL2NoYXQvQ29udmVyc2F0aW9uXCI7XHJcbmltcG9ydCB1c2VycyBmcm9tIFwiLi9kYXRhL2NoYXRVc2Vyc1wiO1xyXG5pbXBvcnQgQ29udGFjdExpc3QgZnJvbSBcIi4uLy4uLy4uL2FwcC9jb21wb25lbnRzL2NoYXQvQ29udGFjdExpc3RcIjtcclxuaW1wb3J0IEludGxNZXNzYWdlcyBmcm9tIFwiLi4vLi4vLi4vdXRpbC9JbnRsTWVzc2FnZXNcIjtcclxuaW1wb3J0IFNlYXJjaEJveCBmcm9tIFwiLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvU2VhcmNoQm94XCI7XHJcbmltcG9ydCBDaXJjdWxhclByb2dyZXNzIGZyb20gXCIuLi8uLi8uLi9hcHAvY29tcG9uZW50cy9DaXJjdWxhclByb2dyZXNzXCI7XHJcbmltcG9ydCAnLi9pbmRleC5jc3MnO1xyXG5cclxuXHJcbmNvbnN0IFRhYlBhbmUgPSBUYWJzLlRhYlBhbmU7XHJcblxyXG5jbGFzcyBDaGF0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBsb2FkZXI6IGZhbHNlLFxyXG4gICAgICB1c2VyTm90Rm91bmQ6ICdObyB1c2VyIGZvdW5kJyxcclxuICAgICAgZHJhd2VyU3RhdGU6IGZhbHNlLFxyXG4gICAgICBzZWxlY3RlZFNlY3Rpb25JZDogJycsXHJcbiAgICAgIHNlbGVjdGVkVGFiSW5kZXg6IDEsXHJcbiAgICAgIHVzZXJTdGF0ZTogMSxcclxuICAgICAgc2VhcmNoQ2hhdFVzZXI6ICcnLFxyXG4gICAgICBjb250YWN0TGlzdDogdXNlcnMuZmlsdGVyKCh1c2VyKSA9PiAhdXNlci5yZWNlbnQpLFxyXG4gICAgICBzZWxlY3RlZFVzZXI6IG51bGwsXHJcbiAgICAgIG1lc3NhZ2U6ICcnLFxyXG4gICAgICBjaGF0VXNlcnM6IHVzZXJzLmZpbHRlcigodXNlcikgPT4gdXNlci5yZWNlbnQpLFxyXG4gICAgICBjb252ZXJzYXRpb25MaXN0OiBjb252ZXJzYXRpb25MaXN0LFxyXG4gICAgICBjb252ZXJzYXRpb246IG51bGxcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZpbHRlckNvbnRhY3QgPSAodXNlck5hbWUpID0+IHtcclxuICAgIGlmICh1c2VyTmFtZSA9PT0gJycpIHtcclxuICAgICAgcmV0dXJuIHVzZXJzLmZpbHRlcih1c2VyID0+ICF1c2VyLnJlY2VudCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdXNlcnMuZmlsdGVyKCh1c2VyKSA9PlxyXG4gICAgICAhdXNlci5yZWNlbnQgJiYgdXNlci5uYW1lLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih1c2VyTmFtZS50b0xvd2VyQ2FzZSgpKSA+IC0xXHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIGZpbHRlclVzZXJzID0gKHVzZXJOYW1lKSA9PiB7XHJcbiAgICBpZiAodXNlck5hbWUgPT09ICcnKSB7XHJcbiAgICAgIHJldHVybiB1c2Vycy5maWx0ZXIodXNlciA9PiB1c2VyLnJlY2VudCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdXNlcnMuZmlsdGVyKCh1c2VyKSA9PlxyXG4gICAgICB1c2VyLnJlY2VudCAmJiB1c2VyLm5hbWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKHVzZXJOYW1lLnRvTG93ZXJDYXNlKCkpID4gLTFcclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgQ29tbXVuaWNhdGlvbiA9ICgpID0+IHtcclxuICAgIGNvbnN0IHttZXNzYWdlLCBzZWxlY3RlZFVzZXIsIGNvbnZlcnNhdGlvbn0gPSB0aGlzLnN0YXRlO1xyXG4gICAgY29uc3Qge2NvbnZlcnNhdGlvbkRhdGF9ID0gY29udmVyc2F0aW9uO1xyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiZ3gtY2hhdC1tYWluXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtY2hhdC1tYWluLWhlYWRlclwiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImd4LWQtYmxvY2sgZ3gtZC1sZy1ub25lIGd4LWNoYXQtYnRuXCI+PGkgY2xhc3NOYW1lPVwiZ3gtaWNvbi1idG4gaWNvbiBpY29uLWNoYXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25Ub2dnbGVEcmF3ZXIuYmluZCh0aGlzKX0vPjwvc3Bhbj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWNoYXQtbWFpbi1oZWFkZXItaW5mb1wiPlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtY2hhdC1hdmF0YXIgZ3gtbXItMlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LXN0YXR1cy1wb3NcIj5cclxuICAgICAgICAgICAgICA8QXZhdGFyIHNyYz17c2VsZWN0ZWRVc2VyLnRodW1ifVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3gtcm91bmRlZC1jaXJjbGUgZ3gtc2l6ZS02MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIi8+XHJcblxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YGd4LXN0YXR1cyBneC0ke3NlbGVjdGVkVXNlci5zdGF0dXN9YH0vPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtY2hhdC1jb250YWN0LW5hbWVcIj5cclxuICAgICAgICAgICAge3NlbGVjdGVkVXNlci5uYW1lfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxDdXN0b21TY3JvbGxiYXJzIGNsYXNzTmFtZT1cImd4LWNoYXQtbGlzdC1zY3JvbGxcIj5cclxuICAgICAgICA8Q29udmVyc2F0aW9uIGNvbnZlcnNhdGlvbkRhdGE9e2NvbnZlcnNhdGlvbkRhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFVzZXI9e3NlbGVjdGVkVXNlcn0vPlxyXG4gICAgICA8L0N1c3RvbVNjcm9sbGJhcnM+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWNoYXQtbWFpbi1mb290ZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWZsZXgtcm93IGd4LWFsaWduLWl0ZW1zLWNlbnRlclwiIHN0eWxlPXt7bWF4SGVpZ2h0OiA1MX19PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1jb2xcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1mb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJyZXF1aXJlZFwiIGNsYXNzTmFtZT1cImd4LWJvcmRlci0wIGFudC1pbnB1dCBneC1jaGF0LXRleHRhcmVhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25LZXlVcD17dGhpcy5faGFuZGxlS2V5UHJlc3MuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMudXBkYXRlTWVzc2FnZVZhbHVlLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXttZXNzYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlR5cGUgYW5kIGhpdCBlbnRlciB0byBzZW5kIG1lc3NhZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImd4LWljb24tYnRuIGljb24gaWNvbi1zZW50XCIgb25DbGljaz17dGhpcy5zdWJtaXRDb21tZW50LmJpbmQodGhpcyl9Lz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICB9O1xyXG5cclxuICBBcHBVc2Vyc0luZm8gPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJneC1jaGF0LXNpZGVuYXYtbWFpblwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWJnLWdyZXktbGlnaHQgZ3gtY2hhdC1zaWRlbmF2LWhlYWRlclwiPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWNoYXQtdXNlci1oZCBneC1tYi0wXCI+XHJcbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJneC1pY29uLWJ0biBpY29uIGljb24tYXJyb3ctbGVmdFwiIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dXNlclN0YXRlOiAxfSk7XHJcbiAgICAgICAgICB9fS8+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtY2hhdC11c2VyIGd4LWNoYXQtdXNlci1jZW50ZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtY2hhdC1hdmF0YXIgZ3gtbXgtYXV0b1wiPlxyXG4gICAgICAgICAgICA8QXZhdGFyIHNyYz1cImh0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8xNTB4MTUwXCIgY2xhc3NOYW1lPVwiZ3gtc2l6ZS02MFwiIGFsdD1cIkpvaG4gRG9lXCIvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC11c2VyLW5hbWUgaDQgZ3gtbXktMlwiPlJvYmVydCBKb2huc29uPC9kaXY+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1jaGF0LXNpZGVuYXYtY29udGVudFwiPlxyXG5cclxuICAgICAgICA8Q3VzdG9tU2Nyb2xsYmFycyBjbGFzc05hbWU9XCJneC1jaGF0LXNpZGVuYXYtc2Nyb2xsXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LXAtNFwiPlxyXG4gICAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWZvcm0tZ3JvdXAgZ3gtbXQtNFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPk1vb2Q8L2xhYmVsPlxyXG5cclxuICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgICAgaWQ9XCJleGFtcGxlVGV4dGFyZWFcIlxyXG4gICAgICAgICAgICAgICAgICBtdWx0aWxpbmVcclxuICAgICAgICAgICAgICAgICAgcm93cz17M31cclxuICAgICAgICAgICAgICAgICAgb25LZXlVcD17dGhpcy5faGFuZGxlS2V5UHJlc3MuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMudXBkYXRlTWVzc2FnZVZhbHVlLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIml0J3MgYSBzdGF0dXMuLi4ubm90IHlvdXIgZGlhcnkuLi5cIlxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlN0YXR1c1wiXHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vbmVcIi8+XHJcblxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0N1c3RvbVNjcm9sbGJhcnM+XHJcblxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIH07XHJcblxyXG4gIENoYXRVc2VycyA9ICgpID0+IHtcclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImd4LWNoYXQtc2lkZW5hdi1tYWluXCI+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWNoYXQtc2lkZW5hdi1oZWFkZXJcIj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1jaGF0LXVzZXItaGRcIj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWNoYXQtYXZhdGFyIGd4LW1yLTNcIiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgIHVzZXJTdGF0ZTogMlxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LXN0YXR1cy1wb3NcIj5cclxuICAgICAgICAgICAgICA8QXZhdGFyIGlkPVwiYXZhdGFyLWJ1dHRvblwiIHNyYz1cImh0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8xNTB4MTUwXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImd4LXNpemUtNTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCIvPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImd4LXN0YXR1cyBneC1vbmxpbmVcIi8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1tb2R1bGUtdXNlci1pbmZvIGd4LWZsZXgtY29sdW1uIGd4LWp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1tb2R1bGUtdGl0bGVcIj5cclxuICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiZ3gtbWItMFwiPlJvYmVydCBKb2huc29uPC9oNT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtbW9kdWxlLXVzZXItZGV0YWlsXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ3gtdGV4dC1ncmV5IGd4LWxpbmtcIj5yb2JlcnRAZXhhbXBsZS5jb208L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtY2hhdC1zZWFyY2gtd3JhcHBlclwiPlxyXG5cclxuICAgICAgICAgIDxTZWFyY2hCb3ggc3R5bGVOYW1lPVwiZ3gtY2hhdC1zZWFyY2gtYmFyIGd4LWx0LWljb24tc2VhcmNoLWJhci1sZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIG9yIHN0YXJ0IG5ldyBjaGF0XCJcclxuICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMudXBkYXRlU2VhcmNoQ2hhdFVzZXIuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuc2VhcmNoQ2hhdFVzZXJ9Lz5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1jaGF0LXNpZGVuYXYtY29udGVudFwiPlxyXG4gICAgICAgIHsvKjxBcHBCYXIgcG9zaXRpb249XCJwdWJsaWNcIiBjbGFzc05hbWU9XCJuby1zaGFkb3cgY2hhdC10YWJzLWhlYWRlclwiPiovfVxyXG4gICAgICAgIDxUYWJzIGNsYXNzTmFtZT1cImd4LXRhYnMtaGFsZlwiIGRlZmF1bHRBY3RpdmVLZXk9XCIxXCI+XHJcbiAgICAgICAgICA8VGFiUGFuZSBsYWJlbD17PEludGxNZXNzYWdlcyBpZD1cImNoYXQuY2hhdFVzZXJcIi8+fSB0YWI9ezxJbnRsTWVzc2FnZXMgaWQ9XCJjaGF0LmNoYXRVc2VyXCIvPn0ga2V5PVwiMVwiPlxyXG4gICAgICAgICAgICA8Q3VzdG9tU2Nyb2xsYmFycyBjbGFzc05hbWU9XCJneC1jaGF0LXNpZGVuYXYtc2Nyb2xsLXRhYi0xXCI+XHJcbiAgICAgICAgICAgICAge3RoaXMuc3RhdGUuY2hhdFVzZXJzLmxlbmd0aCA9PT0gMCA/XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LXAtNVwiPnt0aGlzLnN0YXRlLnVzZXJOb3RGb3VuZH08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgIDxDaGF0VXNlckxpc3QgY2hhdFVzZXJzPXt0aGlzLnN0YXRlLmNoYXRVc2Vyc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRTZWN0aW9uSWQ9e3RoaXMuc3RhdGUuc2VsZWN0ZWRTZWN0aW9uSWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0VXNlcj17dGhpcy5vblNlbGVjdFVzZXIuYmluZCh0aGlzKX0vPlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9DdXN0b21TY3JvbGxiYXJzPlxyXG4gICAgICAgICAgPC9UYWJQYW5lPlxyXG4gICAgICAgICAgPFRhYlBhbmUgbGFiZWw9ezxJbnRsTWVzc2FnZXMgaWQ9XCJjaGF0LmNvbnRhY3RzXCIvPn0gdGFiPXs8SW50bE1lc3NhZ2VzIGlkPVwiY2hhdC5jb250YWN0c1wiLz59IGtleT1cIjJcIj5cclxuICAgICAgICAgICAgPEN1c3RvbVNjcm9sbGJhcnMgY2xhc3NOYW1lPVwiZ3gtY2hhdC1zaWRlbmF2LXNjcm9sbC10YWItMlwiPlxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuY29udGFjdExpc3QubGVuZ3RoID09PSAwID9cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1wLTVcIj57dGhpcy5zdGF0ZS51c2VyTm90Rm91bmR9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgPENvbnRhY3RMaXN0IGNvbnRhY3RMaXN0PXt0aGlzLnN0YXRlLmNvbnRhY3RMaXN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRTZWN0aW9uSWQ9e3RoaXMuc3RhdGUuc2VsZWN0ZWRTZWN0aW9uSWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblNlbGVjdFVzZXI9e3RoaXMub25TZWxlY3RVc2VyLmJpbmQodGhpcyl9Lz5cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvQ3VzdG9tU2Nyb2xsYmFycz5cclxuICAgICAgICAgIDwvVGFiUGFuZT5cclxuICAgICAgICA8L1RhYnM+XHJcblxyXG5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICB9O1xyXG5cclxuICBfaGFuZGxlS2V5UHJlc3MgPSAoZSkgPT4ge1xyXG4gICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XHJcbiAgICAgIHRoaXMuc3VibWl0Q29tbWVudCgpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGhhbmRsZUNoYW5nZSA9IChldmVudCwgdmFsdWUpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe3NlbGVjdGVkVGFiSW5kZXg6IHZhbHVlfSk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlQ2hhbmdlSW5kZXggPSBpbmRleCA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtzZWxlY3RlZFRhYkluZGV4OiBpbmRleH0pO1xyXG4gIH07XHJcblxyXG4gIG9uU2VsZWN0VXNlciA9ICh1c2VyKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgbG9hZGVyOiB0cnVlLFxyXG4gICAgICBzZWxlY3RlZFNlY3Rpb25JZDogdXNlci5pZCxcclxuICAgICAgZHJhd2VyU3RhdGU6IHRoaXMucHJvcHMuZHJhd2VyU3RhdGUsXHJcbiAgICAgIHNlbGVjdGVkVXNlcjogdXNlcixcclxuICAgICAgY29udmVyc2F0aW9uOiB0aGlzLnN0YXRlLmNvbnZlcnNhdGlvbkxpc3QuZmluZCgoZGF0YSkgPT4gZGF0YS5pZCA9PT0gdXNlci5pZClcclxuICAgIH0pO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2xvYWRlcjogZmFsc2V9KTtcclxuICAgIH0sIDE1MDApO1xyXG4gIH07XHJcblxyXG4gIHNob3dDb21tdW5pY2F0aW9uID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1jaGF0LWJveFwiPlxyXG4gICAgICAgIHt0aGlzLnN0YXRlLnNlbGVjdGVkVXNlciA9PT0gbnVsbCA/XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWNvbW1lbnQtYm94XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtZnMtODBcIj48aSBjbGFzc05hbWU9XCJpY29uIGljb24tY2hhdCBneC10ZXh0LW11dGVkXCIvPjwvZGl2PlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZ3gtdGV4dC1tdXRlZFwiPns8SW50bE1lc3NhZ2VzIGlkPVwiY2hhdC5zZWxlY3RVc2VyQ2hhdFwiLz59PC9oMT5cclxuICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJneC1kLWJsb2NrIGd4LWQtbGctbm9uZVwiIHR5cGU9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uVG9nZ2xlRHJhd2VyLmJpbmQodGhpcyl9Pns8SW50bE1lc3NhZ2VzXHJcbiAgICAgICAgICAgICAgaWQ9XCJjaGF0LnNlbGVjdENvbnRhY3RDaGF0XCIvPn08L0J1dHRvbj5cclxuXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDogdGhpcy5Db21tdW5pY2F0aW9uKCl9XHJcbiAgICAgIDwvZGl2PilcclxuICB9O1xyXG5cclxuICBzdWJtaXRDb21tZW50KCkge1xyXG4gICAgaWYgKHRoaXMuc3RhdGUubWVzc2FnZSAhPT0gJycpIHtcclxuICAgICAgY29uc3QgdXBkYXRlZENvbnZlcnNhdGlvbiA9IHRoaXMuc3RhdGUuY29udmVyc2F0aW9uLmNvbnZlcnNhdGlvbkRhdGEuY29uY2F0KHtcclxuICAgICAgICAndHlwZSc6ICdzZW50JyxcclxuICAgICAgICAnbWVzc2FnZSc6IHRoaXMuc3RhdGUubWVzc2FnZSxcclxuICAgICAgICAnc2VudEF0JzogTW9tZW50KCkuZm9ybWF0KCdoaDptbTpzcyBBJyksXHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBjb252ZXJzYXRpb246IHtcclxuICAgICAgICAgIC4uLnRoaXMuc3RhdGUuY29udmVyc2F0aW9uLCBjb252ZXJzYXRpb25EYXRhOiB1cGRhdGVkQ29udmVyc2F0aW9uXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXNzYWdlOiAnJyxcclxuICAgICAgICBjb252ZXJzYXRpb25MaXN0OiB0aGlzLnN0YXRlLmNvbnZlcnNhdGlvbkxpc3QubWFwKGNvbnZlcnNhdGlvbkRhdGEgPT4ge1xyXG4gICAgICAgICAgaWYgKGNvbnZlcnNhdGlvbkRhdGEuaWQgPT09IHRoaXMuc3RhdGUuY29udmVyc2F0aW9uLmlkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4udGhpcy5zdGF0ZS5jb252ZXJzYXRpb24sIGNvbnZlcnNhdGlvbkRhdGE6IHVwZGF0ZWRDb252ZXJzYXRpb259O1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNvbnZlcnNhdGlvbkRhdGE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVNZXNzYWdlVmFsdWUoZXZ0KSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgbWVzc2FnZTogZXZ0LnRhcmdldC52YWx1ZVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVTZWFyY2hDaGF0VXNlcihldnQpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBzZWFyY2hDaGF0VXNlcjogZXZ0LnRhcmdldC52YWx1ZSxcclxuICAgICAgY29udGFjdExpc3Q6IHRoaXMuZmlsdGVyQ29udGFjdChldnQudGFyZ2V0LnZhbHVlKSxcclxuICAgICAgY2hhdFVzZXJzOiB0aGlzLmZpbHRlclVzZXJzKGV2dC50YXJnZXQudmFsdWUpXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG9uVG9nZ2xlRHJhd2VyKCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGRyYXdlclN0YXRlOiAhdGhpcy5zdGF0ZS5kcmF3ZXJTdGF0ZVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7bG9hZGVyLCB1c2VyU3RhdGUsIGRyYXdlclN0YXRlfSA9IHRoaXMuc3RhdGU7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LW1haW4tY29udGVudFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtYXBwLW1vZHVsZSBneC1jaGF0LW1vZHVsZVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1jaGF0LW1vZHVsZS1ib3hcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1kLWJsb2NrIGd4LWQtbGctbm9uZVwiPlxyXG4gICAgICAgICAgICAgIDxEcmF3ZXJcclxuICAgICAgICAgICAgICAgIHBsYWNlbWVudD1cImxlZnRcIlxyXG4gICAgICAgICAgICAgICAgY2xvc2FibGU9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgdmlzaWJsZT17ZHJhd2VyU3RhdGV9XHJcbiAgICAgICAgICAgICAgICBvbkNsb3NlPXt0aGlzLm9uVG9nZ2xlRHJhd2VyLmJpbmQodGhpcyl9PlxyXG4gICAgICAgICAgICAgICAge3VzZXJTdGF0ZSA9PT0gMSA/IHRoaXMuQ2hhdFVzZXJzKCkgOiB0aGlzLkFwcFVzZXJzSW5mbygpfVxyXG4gICAgICAgICAgICAgIDwvRHJhd2VyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1jaGF0LXNpZGVuYXYgZ3gtZC1ub25lIGd4LWQtbGctZmxleFwiPlxyXG4gICAgICAgICAgICAgIHt1c2VyU3RhdGUgPT09IDEgPyB0aGlzLkNoYXRVc2VycygpIDogdGhpcy5BcHBVc2Vyc0luZm8oKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtsb2FkZXIgP1xyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtbG9hZGVyLXZpZXdcIj5cclxuICAgICAgICAgICAgICAgIDxDaXJjdWxhclByb2dyZXNzLz5cclxuICAgICAgICAgICAgICA8L2Rpdj4gOiB0aGlzLnNob3dDb21tdW5pY2F0aW9uKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hhdDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==