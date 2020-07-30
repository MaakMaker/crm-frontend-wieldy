module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/react-notifications/lib/notifications.css":
/*!****************************************************************!*\
  !*** ./node_modules/react-notifications/lib/notifications.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/slick-carousel/slick/slick-theme.css":
/*!***********************************************************!*\
  !*** ./node_modules/slick-carousel/slick/slick-theme.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/slick-carousel/slick/slick.css":
/*!*****************************************************!*\
  !*** ./node_modules/slick-carousel/slick/slick.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_notifications_lib_notifications_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-notifications/lib/notifications.css */ "./node_modules/react-notifications/lib/notifications.css");
/* harmony import */ var react_notifications_lib_notifications_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_notifications_lib_notifications_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ "./node_modules/slick-carousel/slick/slick.css");
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ "./node_modules/slick-carousel/slick/slick-theme.css");
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _public_vendors_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../public/vendors/style */ "./public/vendors/style.js");
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/style.css */ "./styles/style.css");
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_style_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _firebaseConfig_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../firebaseConfig/index */ "./firebaseConfig/index.js");
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../redux/store */ "./redux/store/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_11__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














const Page = ({
  Component,
  pageProps,
  store
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx("title", null, "Wieldy- Admin Dashboard")), __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_redux__WEBPACK_IMPORTED_MODULE_11__["Provider"], {
    store: store
  }, __jsx(Component, pageProps))));
};

/* harmony default export */ __webpack_exports__["default"] = (next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2___default()(_redux_store__WEBPACK_IMPORTED_MODULE_10__["default"])(Page));

Page.getInitialProps = async ({
  Component,
  ctx
}) => {
  return {
    pageProps: _objectSpread({}, Component.getInitialProps ? await Component.getInitialProps(ctx) : {})
  };
};

/***/ }),

/***/ "./public/loader.css":
/*!***************************!*\
  !*** ./public/loader.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./public/vendors/flag/sprite-flags-24x24.css":
/*!****************************************************!*\
  !*** ./public/vendors/flag/sprite-flags-24x24.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./public/vendors/gaxon/styles.css":
/*!*****************************************!*\
  !*** ./public/vendors/gaxon/styles.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./public/vendors/noir-pro/styles.css":
/*!********************************************!*\
  !*** ./public/vendors/noir-pro/styles.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./public/vendors/style.js":
/*!*********************************!*\
  !*** ./public/vendors/style.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _flag_sprite_flags_24x24_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./flag/sprite-flags-24x24.css */ "./public/vendors/flag/sprite-flags-24x24.css");
/* harmony import */ var _flag_sprite_flags_24x24_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_flag_sprite_flags_24x24_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gaxon_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gaxon/styles.css */ "./public/vendors/gaxon/styles.css");
/* harmony import */ var _gaxon_styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_gaxon_styles_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _loader_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../loader.css */ "./public/loader.css");
/* harmony import */ var _loader_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_loader_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _noir_pro_styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./noir-pro/styles.css */ "./public/vendors/noir-pro/styles.css");
/* harmony import */ var _noir_pro_styles_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_noir_pro_styles_css__WEBPACK_IMPORTED_MODULE_3__);





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

/***/ "./redux/reducers/Auth.js":
/*!********************************!*\
  !*** ./redux/reducers/Auth.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/ActionTypes */ "./constants/ActionTypes.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const INIT_STATE = {
  loader: false,
  alertMessage: '',
  showMessage: false,
  initURL: '',
  authUser: null
};
/* harmony default export */ __webpack_exports__["default"] = ((state = INIT_STATE, action) => {
  switch (action.type) {
    case _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["SIGNUP_USER_SUCCESS"]:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          loader: false,
          authUser: action.payload
        });
      }

    case _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["SIGNIN_USER_SUCCESS"]:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          loader: false,
          authUser: action.payload
        });
      }

    case _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["INIT_URL"]:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          initURL: action.payload
        });
      }

    case _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["SIGNOUT_USER_SUCCESS"]:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          authUser: null,
          initURL: '/',
          loader: false
        });
      }

    case _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOW_MESSAGE"]:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          alertMessage: action.payload,
          showMessage: true,
          loader: false
        });
      }

    case _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["HIDE_MESSAGE"]:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          alertMessage: '',
          showMessage: false,
          loader: false
        });
      }

    case _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["SIGNIN_GOOGLE_USER_SUCCESS"]:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          loader: false,
          authUser: action.payload
        });
      }

    case _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["SIGNIN_FACEBOOK_USER_SUCCESS"]:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          loader: false,
          authUser: action.payload
        });
      }

    case _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["SIGNIN_TWITTER_USER_SUCCESS"]:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          loader: false,
          authUser: action.payload
        });
      }

    case _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["SIGNIN_GITHUB_USER_SUCCESS"]:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          loader: false,
          authUser: action.payload
        });
      }

    case _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["ON_SHOW_LOADER"]:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          loader: true
        });
      }

    case _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["ON_HIDE_LOADER"]:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          loader: false
        });
      }

    default:
      return state;
  }
});

/***/ }),

/***/ "./redux/reducers/Common.js":
/*!**********************************!*\
  !*** ./redux/reducers/Common.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/ActionTypes */ "./constants/ActionTypes.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const INIT_STATE = {
  error: "",
  loading: false,
  message: ''
};
/* harmony default export */ __webpack_exports__["default"] = ((state = INIT_STATE, action) => {
  switch (action.type) {
    case _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_START"]:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          error: '',
          message: '',
          loading: true
        });
      }

    case _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_SUCCESS"]:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          error: '',
          message: '',
          loading: false
        });
      }

    case _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOW_MESSAGE"]:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          error: '',
          message: action.payload,
          loading: false
        });
      }

    case _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_ERROR"]:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          loading: false,
          error: action.payload,
          message: ''
        });
      }

    case _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["HIDE_MESSAGE"]:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          loading: false,
          error: '',
          message: ''
        });
      }

    default:
      return state;
  }
});

/***/ }),

/***/ "./redux/reducers/Contact.js":
/*!***********************************!*\
  !*** ./redux/reducers/Contact.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/ActionTypes */ "./constants/ActionTypes.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const INIT_STATE = {
  contactList: [],
  selectedContact: []
};
/* harmony default export */ __webpack_exports__["default"] = ((state = INIT_STATE, action) => {
  switch (action.type) {
    case _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["GET_All_CONTACT_SUCCESS"]:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          contactList: action.payload
        });
      }

    case _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["UPDATE_CONTACT_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        contactList: state.contactList.map(contact => contact.id === action.payload.id ? action.payload : contact)
      });

    case _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["DELETE_CONTACT_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        contactList: state.contactList.filter(contact => contact.id !== action.payload.id)
      });

    case _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["ON_ADD_CONTACT_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        contactList: action.payload.contact(state.contactList)
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./redux/reducers/Notes.js":
/*!*********************************!*\
  !*** ./redux/reducers/Notes.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/ActionTypes */ "./constants/ActionTypes.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const INIT_STATE = {
  notesList: []
};
/* harmony default export */ __webpack_exports__["default"] = ((state = INIT_STATE, action) => {
  switch (action.type) {
    case _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["GET_STICKY"]:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          notesList: action.notesList
        });
      }

    case _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_ALL_NOTES_SUCCESS"]:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          notesList: action.payload
        });
      }

    case _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["UPDATE_ALL_NOTES_SUCCESS"]:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          notesList: action.payload
        });
      }

    case _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["NOTES_UPDATE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        notesList: action.notesList
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./redux/reducers/Settings.js":
/*!************************************!*\
  !*** ./redux/reducers/Settings.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/ActionTypes */ "./constants/ActionTypes.js");
/* harmony import */ var _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/ThemeSetting */ "./constants/ThemeSetting.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const initialSettings = {
  navCollapsed: true,
  navStyle: _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_1__["NAV_STYLE_FIXED"],
  themeType: _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_1__["THEME_TYPE_SEMI_DARK"],
  pathname: '',
  width: 1367,
  isDirectionRTL: false,
  locale: {
    languageId: 'russian',
    locale: 'ru',
    name: 'Русский',
    icon: 'ru'
  }
};

const settings = (state = initialSettings, action) => {
  switch (action.type) {
    case _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["TOGGLE_COLLAPSED_NAV"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        navCollapsed: action.navCollapsed
      });

    case _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_1__["SET_PATH_NAME"]:
      console.log(action);
      return _objectSpread(_objectSpread({}, state), {}, {
        pathname: action.pathname
      });

    case _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["WINDOW_WIDTH"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        width: action.width
      });

    case _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_1__["THEME_TYPE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        themeType: action.themeType
      });

    case _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_1__["NAV_STYLE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        navStyle: action.navStyle
      });

    case _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["SWITCH_LANGUAGE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        locale: action.payload
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (settings);

/***/ }),

/***/ "./redux/reducers/index.js":
/*!*********************************!*\
  !*** ./redux/reducers/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Settings */ "./redux/reducers/Settings.js");
/* harmony import */ var _Auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Auth */ "./redux/reducers/Auth.js");
/* harmony import */ var _Notes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Notes */ "./redux/reducers/Notes.js");
/* harmony import */ var _Contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Contact */ "./redux/reducers/Contact.js");
/* harmony import */ var _Common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Common */ "./redux/reducers/Common.js");






const reducers = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  settings: _Settings__WEBPACK_IMPORTED_MODULE_1__["default"],
  auth: _Auth__WEBPACK_IMPORTED_MODULE_2__["default"],
  notes: _Notes__WEBPACK_IMPORTED_MODULE_3__["default"],
  contact: _Contact__WEBPACK_IMPORTED_MODULE_4__["default"],
  common: _Common__WEBPACK_IMPORTED_MODULE_5__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (reducers);

/***/ }),

/***/ "./redux/sagas/Auth.js":
/*!*****************************!*\
  !*** ./redux/sagas/Auth.js ***!
  \*****************************/
/*! exports provided: createUserAccount, signInWithGoogle, signInWithFacebook, signInWithTwitter, signInWithGithub, signInUser, signOutUser, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUserAccount", function() { return createUserAccount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signInWithGoogle", function() { return signInWithGoogle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signInWithFacebook", function() { return signInWithFacebook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signInWithTwitter", function() { return signInWithTwitter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signInWithGithub", function() { return signInWithGithub; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signInUser", function() { return signInUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signOutUser", function() { return signOutUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _firebaseConfig_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../firebaseConfig/index */ "./firebaseConfig/index.js");
/* harmony import */ var _util_session__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/session */ "./util/session.js");
/* harmony import */ var _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/ActionTypes */ "./constants/ActionTypes.js");
/* harmony import */ var _redux_actions_Auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/actions/Auth */ "./redux/actions/Auth.js");







const createUserWithEmailPasswordRequest = async (email, password) => await _firebaseConfig_index__WEBPACK_IMPORTED_MODULE_1__["auth"].createUserWithEmailAndPassword(email, password).then(authUser => authUser).catch(error => error);

const signInUserWithEmailPasswordRequest = async (email, password) => await _firebaseConfig_index__WEBPACK_IMPORTED_MODULE_1__["auth"].signInWithEmailAndPassword(email, password).then(authUser => authUser).catch(error => error);

const signOutRequest = async () => await _firebaseConfig_index__WEBPACK_IMPORTED_MODULE_1__["auth"].signOut().then(authUser => authUser).catch(error => error);

const signInUserWithGoogleRequest = async () => await _firebaseConfig_index__WEBPACK_IMPORTED_MODULE_1__["auth"].signInWithPopup(_firebaseConfig_index__WEBPACK_IMPORTED_MODULE_1__["googleAuthProvider"]).then(authUser => authUser).catch(error => error);

const signInUserWithFacebookRequest = async () => await _firebaseConfig_index__WEBPACK_IMPORTED_MODULE_1__["auth"].signInWithPopup(_firebaseConfig_index__WEBPACK_IMPORTED_MODULE_1__["facebookAuthProvider"]).then(authUser => authUser).catch(error => error);

const signInUserWithGithubRequest = async () => await _firebaseConfig_index__WEBPACK_IMPORTED_MODULE_1__["auth"].signInWithPopup(_firebaseConfig_index__WEBPACK_IMPORTED_MODULE_1__["githubAuthProvider"]).then(authUser => authUser).catch(error => error);

const signInUserWithTwitterRequest = async () => await _firebaseConfig_index__WEBPACK_IMPORTED_MODULE_1__["auth"].signInWithPopup(_firebaseConfig_index__WEBPACK_IMPORTED_MODULE_1__["twitterAuthProvider"]).then(authUser => authUser).catch(error => error);

function* createUserWithEmailPassword({
  payload
}) {
  const {
    email,
    password
  } = payload;

  try {
    const signUpUser = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(createUserWithEmailPasswordRequest, email, password);

    if (signUpUser.message) {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_redux_actions_Auth__WEBPACK_IMPORTED_MODULE_4__["showAuthMessage"])(signUpUser.message));
    } else {
      Object(_util_session__WEBPACK_IMPORTED_MODULE_2__["setCookie"])('user_id', signUpUser.user.uid);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_redux_actions_Auth__WEBPACK_IMPORTED_MODULE_4__["userSignUpSuccess"])(signUpUser.user.uid));
    }
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_redux_actions_Auth__WEBPACK_IMPORTED_MODULE_4__["showAuthMessage"])(error));
  }
}

function* signInUserWithGoogle() {
  try {
    const signUpUser = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(signInUserWithGoogleRequest);

    if (signUpUser.message) {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_redux_actions_Auth__WEBPACK_IMPORTED_MODULE_4__["showAuthMessage"])(signUpUser.message));
    } else {
      Object(_util_session__WEBPACK_IMPORTED_MODULE_2__["setCookie"])('user_id', signUpUser.user.uid);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_redux_actions_Auth__WEBPACK_IMPORTED_MODULE_4__["userGoogleSignInSuccess"])(signUpUser.user.uid));
    }
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_redux_actions_Auth__WEBPACK_IMPORTED_MODULE_4__["showAuthMessage"])(error));
  }
}

function* signInUserWithFacebook() {
  try {
    const signUpUser = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(signInUserWithFacebookRequest);

    if (signUpUser.message) {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_redux_actions_Auth__WEBPACK_IMPORTED_MODULE_4__["showAuthMessage"])(signUpUser.message));
    } else {
      Object(_util_session__WEBPACK_IMPORTED_MODULE_2__["setCookie"])('user_id', signUpUser.user.uid);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_redux_actions_Auth__WEBPACK_IMPORTED_MODULE_4__["userFacebookSignInSuccess"])(signUpUser.user.uid));
    }
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_redux_actions_Auth__WEBPACK_IMPORTED_MODULE_4__["showAuthMessage"])(error));
  }
}

function* signInUserWithGithub() {
  try {
    const signUpUser = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(signInUserWithGithubRequest);

    if (signUpUser.message) {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_redux_actions_Auth__WEBPACK_IMPORTED_MODULE_4__["showAuthMessage"])(signUpUser.message));
    } else {
      Object(_util_session__WEBPACK_IMPORTED_MODULE_2__["setCookie"])('user_id', signUpUser.user.uid);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_redux_actions_Auth__WEBPACK_IMPORTED_MODULE_4__["userGithubSignInSuccess"])(signUpUser.user.uid));
    }
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_redux_actions_Auth__WEBPACK_IMPORTED_MODULE_4__["showAuthMessage"])(error));
  }
}

function* signInUserWithTwitter() {
  try {
    const signUpUser = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(signInUserWithTwitterRequest);

    if (signUpUser.message) {
      if (signUpUser.message.length > 100) {
        yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_redux_actions_Auth__WEBPACK_IMPORTED_MODULE_4__["showAuthMessage"])('Your request has been canceled.'));
      } else {
        yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_redux_actions_Auth__WEBPACK_IMPORTED_MODULE_4__["showAuthMessage"])(signUpUser.message));
      }
    } else {
      Object(_util_session__WEBPACK_IMPORTED_MODULE_2__["setCookie"])('user_id', signUpUser.user.uid);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_redux_actions_Auth__WEBPACK_IMPORTED_MODULE_4__["userTwitterSignInSuccess"])(signUpUser.user.uid));
    }
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_redux_actions_Auth__WEBPACK_IMPORTED_MODULE_4__["showAuthMessage"])(error));
  }
}

function* signInUserWithEmailPassword({
  payload
}) {
  const {
    email,
    password
  } = payload;

  try {
    const signInUser = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(signInUserWithEmailPasswordRequest, email, password);

    if (signInUser.message) {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_redux_actions_Auth__WEBPACK_IMPORTED_MODULE_4__["showAuthMessage"])(signInUser.message));
    } else {
      Object(_util_session__WEBPACK_IMPORTED_MODULE_2__["setCookie"])('user_id', signInUser.user.uid);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_redux_actions_Auth__WEBPACK_IMPORTED_MODULE_4__["userSignInSuccess"])(signInUser.user.uid));
    }
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_redux_actions_Auth__WEBPACK_IMPORTED_MODULE_4__["showAuthMessage"])(error));
  }
}

function* signOut() {
  try {
    const signOutUser = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(signOutRequest);

    if (signOutUser === undefined) {
      Object(_util_session__WEBPACK_IMPORTED_MODULE_2__["removeCookie"])('user_id');
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_redux_actions_Auth__WEBPACK_IMPORTED_MODULE_4__["userSignOutSuccess"])(signOutUser));
    } else {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_redux_actions_Auth__WEBPACK_IMPORTED_MODULE_4__["showAuthMessage"])(signOutUser.message));
    }
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_redux_actions_Auth__WEBPACK_IMPORTED_MODULE_4__["showAuthMessage"])(error));
  }
}

function* createUserAccount() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_constants_ActionTypes__WEBPACK_IMPORTED_MODULE_3__["SIGNUP_USER"], createUserWithEmailPassword);
}
function* signInWithGoogle() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_constants_ActionTypes__WEBPACK_IMPORTED_MODULE_3__["SIGNIN_GOOGLE_USER"], signInUserWithGoogle);
}
function* signInWithFacebook() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_constants_ActionTypes__WEBPACK_IMPORTED_MODULE_3__["SIGNIN_FACEBOOK_USER"], signInUserWithFacebook);
}
function* signInWithTwitter() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_constants_ActionTypes__WEBPACK_IMPORTED_MODULE_3__["SIGNIN_TWITTER_USER"], signInUserWithTwitter);
}
function* signInWithGithub() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_constants_ActionTypes__WEBPACK_IMPORTED_MODULE_3__["SIGNIN_GITHUB_USER"], signInUserWithGithub);
}
function* signInUser() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_constants_ActionTypes__WEBPACK_IMPORTED_MODULE_3__["SIGNIN_USER"], signInUserWithEmailPassword);
}
function* signOutUser() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_constants_ActionTypes__WEBPACK_IMPORTED_MODULE_3__["SIGNOUT_USER"], signOut);
}
function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(signInUser), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(createUserAccount), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(signInWithGoogle), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(signInWithFacebook), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(signInWithTwitter), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(signInWithGithub), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(signOutUser)]);
}

/***/ }),

/***/ "./redux/sagas/Notes.js":
/*!******************************!*\
  !*** ./redux/sagas/Notes.js ***!
  \******************************/
/*! exports provided: fetchSticky, updateSticky, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchSticky", function() { return fetchSticky; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateSticky", function() { return updateSticky; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions_Notes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/Notes */ "./redux/actions/Notes.js");
/* harmony import */ var _firebaseConfig_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../firebaseConfig/index */ "./firebaseConfig/index.js");
/* harmony import */ var _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/ActionTypes */ "./constants/ActionTypes.js");
/* harmony import */ var _actions_Common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/Common */ "./redux/actions/Common.js");






const getSticky = async () => await _firebaseConfig_index__WEBPACK_IMPORTED_MODULE_2__["database"].ref('notes').once('value').then(snapshot => {
  const notess = [];
  snapshot.forEach(rawData => {
    notess.push(rawData.val());
  });
  return notess;
}).catch(error => error);

const updateStickyRequest = async ({
  notesList
}) => {
  await _firebaseConfig_index__WEBPACK_IMPORTED_MODULE_2__["database"].ref('notes').set(notesList).then(notesList => notesList).catch(notesList => notesList);
};

function* fetchStickyRequest() {
  try {
    const fetchedSticky = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(getSticky);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_Notes__WEBPACK_IMPORTED_MODULE_1__["fetchStickySuccess"])(fetchedSticky));
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_Common__WEBPACK_IMPORTED_MODULE_4__["fetchError"])(error));
  }
}

function* fetchSticky() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_constants_ActionTypes__WEBPACK_IMPORTED_MODULE_3__["GET_STICKY"], fetchStickyRequest);
}
function* updateSticky() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_constants_ActionTypes__WEBPACK_IMPORTED_MODULE_3__["NOTES_UPDATE"], updateStickyRequest);
}
function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(fetchSticky), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(updateSticky)]);
}

/***/ }),

/***/ "./redux/sagas/index.js":
/*!******************************!*\
  !*** ./redux/sagas/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Auth */ "./redux/sagas/Auth.js");
/* harmony import */ var _Notes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Notes */ "./redux/sagas/Notes.js");



function* rootSaga(getState) {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(_Auth__WEBPACK_IMPORTED_MODULE_1__["default"])(), Object(_Notes__WEBPACK_IMPORTED_MODULE_2__["default"])()]);
}

/***/ }),

/***/ "./redux/store/index.js":
/*!******************************!*\
  !*** ./redux/store/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers */ "./redux/reducers/index.js");
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sagas */ "./redux/sagas/index.js");





const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_1___default()();

const bindMiddleware = middleware => {
  if (true) {
    const {
      composeWithDevTools
    } = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");

    return composeWithDevTools(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...middleware));
  }

  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...middleware);
};

function configureStore(initialState = {}) {
  const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_3__["default"], initialState, bindMiddleware([redux_thunk__WEBPACK_IMPORTED_MODULE_2___default.a, sagaMiddleware]));

  store.runSaga = () => {
    // Avoid running twice
    if (store.saga) return;
    store.saga = sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_4__["default"]);
  };

  store.stopSaga = async () => {
    // Avoid running twice
    if (!store.saga) return;
    store.dispatch(redux_saga__WEBPACK_IMPORTED_MODULE_1__["END"]);
    await store.saga.done;
    store.saga = null;
  };

  store.execSagaTasks = async (isServer, tasks) => {
    // run saga
    store.runSaga(); // dispatch saga tasks

    tasks(store.dispatch); // Stop running and wait for the tasks to be done

    await store.stopSaga(); // Re-run on client side

    if (!isServer) {
      store.runSaga();
    }
  }; // Initial run


  store.runSaga();
  return store;
}

/* harmony default export */ __webpack_exports__["default"] = (configureStore);

/***/ }),

/***/ "./styles/style.css":
/*!**************************!*\
  !*** ./styles/style.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {



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

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


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

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

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

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

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

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29uc3RhbnRzL0FjdGlvblR5cGVzLmpzIiwid2VicGFjazovLy8uL2NvbnN0YW50cy9UaGVtZVNldHRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vZmlyZWJhc2VDb25maWcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvdmVuZG9ycy9zdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9hY3Rpb25zL0F1dGguanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvYWN0aW9ucy9Db21tb24uanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvYWN0aW9ucy9Ob3Rlcy5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9yZWR1Y2Vycy9BdXRoLmpzIiwid2VicGFjazovLy8uL3JlZHV4L3JlZHVjZXJzL0NvbW1vbi5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9yZWR1Y2Vycy9Db250YWN0LmpzIiwid2VicGFjazovLy8uL3JlZHV4L3JlZHVjZXJzL05vdGVzLmpzIiwid2VicGFjazovLy8uL3JlZHV4L3JlZHVjZXJzL1NldHRpbmdzLmpzIiwid2VicGFjazovLy8uL3JlZHV4L3JlZHVjZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3JlZHV4L3NhZ2FzL0F1dGguanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvc2FnYXMvTm90ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvc2FnYXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvc3RvcmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbC9zZXNzaW9uLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianMtY29va2llXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1yZWR1eC13cmFwcGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtc2FnYS9lZmZlY3RzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtdGh1bmtcIiJdLCJuYW1lcyI6WyJUT0dHTEVfQ09MTEFQU0VEX05BViIsIldJTkRPV19XSURUSCIsIlNXSVRDSF9MQU5HVUFHRSIsIkZFVENIX1NUQVJUIiwiRkVUQ0hfU1VDQ0VTUyIsIkZFVENIX0VSUk9SIiwiU0hPV19NRVNTQUdFIiwiSElERV9NRVNTQUdFIiwiT05fU0hPV19MT0FERVIiLCJPTl9ISURFX0xPQURFUiIsIlNJR05VUF9VU0VSIiwiU0lHTlVQX1VTRVJfU1VDQ0VTUyIsIlNJR05JTl9HT09HTEVfVVNFUiIsIlNJR05JTl9HT09HTEVfVVNFUl9TVUNDRVNTIiwiU0lHTklOX0ZBQ0VCT09LX1VTRVIiLCJTSUdOSU5fRkFDRUJPT0tfVVNFUl9TVUNDRVNTIiwiU0lHTklOX1RXSVRURVJfVVNFUiIsIlNJR05JTl9UV0lUVEVSX1VTRVJfU1VDQ0VTUyIsIlNJR05JTl9HSVRIVUJfVVNFUiIsIlNJR05JTl9HSVRIVUJfVVNFUl9TVUNDRVNTIiwiU0lHTklOX1VTRVIiLCJTSUdOSU5fVVNFUl9TVUNDRVNTIiwiU0lHTk9VVF9VU0VSIiwiU0lHTk9VVF9VU0VSX1NVQ0NFU1MiLCJJTklUX1VSTCIsIkdFVF9TVElDS1kiLCJOT1RFU19VUERBVEUiLCJGRVRDSF9BTExfTk9URVNfU1VDQ0VTUyIsIlVQREFURV9BTExfTk9URVNfU1VDQ0VTUyIsIkdFVF9BbGxfQ09OVEFDVF9TVUNDRVNTIiwiT05fQUREX0NPTlRBQ1RfU1VDQ0VTUyIsIlVQREFURV9DT05UQUNUX1NVQ0NFU1MiLCJERUxFVEVfQ09OVEFDVF9TVUNDRVNTIiwiVEhFTUVfVFlQRSIsIlRIRU1FX1RZUEVfTElURSIsIlRIRU1FX1RZUEVfREFSSyIsIlRIRU1FX1RZUEVfU0VNSV9EQVJLIiwiVEhFTUVfQ09MT1JfU0VMRUNUSU9OIiwiVEhFTUVfQ09MT1JfU0VMRUNUSU9OX1BSRVNFVCIsIlRIRU1FX0NPTE9SX1NFTEVDVElPTl9DVVNUT01JWkUiLCJIT1JJWk9OVEFMX05BVklHQVRJT04iLCJIT1JJWk9OVEFMX01FTlVfUE9TSVRJT04iLCJBQk9WRV9USEVfSEVBREVSIiwiSU5TSURFX1RIRV9IRUFERVIiLCJCRUxPV19USEVfSEVBREVSIiwiVkVSVElDQUxfTkFWSUdBVElPTiIsIk5BVl9TVFlMRV9NSU5JIiwiTEFZT1VUX1RZUEUiLCJTRVRfUEFUSF9OQU1FIiwiTEFZT1VUX1RZUEVfRlJBTUVEIiwiTEFZT1VUX1RZUEVfQk9YRUQiLCJMQVlPVVRfVFlQRV9GVUxMIiwiTkFWX1NUWUxFIiwiTkFWX1NUWUxFX0ZJWEVEIiwiTkFWX1NUWUxFX01JTklfU0lERUJBUiIsIk5BVl9TVFlMRV9EUkFXRVIiLCJOQVZfU1RZTEVfTk9fSEVBREVSX01JTklfU0lERUJBUiIsIk5BVl9TVFlMRV9OT19IRUFERVJfRVhQQU5ERURfU0lERUJBUiIsIk5BVl9TVFlMRV9ERUZBVUxUX0hPUklaT05UQUwiLCJOQVZfU1RZTEVfREFSS19IT1JJWk9OVEFMIiwiTkFWX1NUWUxFX0lOU0lERV9IRUFERVJfSE9SSVpPTlRBTCIsIk5BVl9TVFlMRV9CRUxPV19IRUFERVIiLCJOQVZfU1RZTEVfQUJPVkVfSEVBREVSIiwiTElHSFRfUFVSUExFIiwiTElHSFRfUFVSUExFX1NFQyIsIkxJR0hUX1BVUlBMRV9OQVZfREFSS19CRyIsIkxJR0hUX1BVUlBMRV9EQVJLX1RFWFRfQ09MT1IiLCJSRUQiLCJSRURfU0VDIiwiUkVEX05BVl9EQVJLX0JHIiwiUkVEX0RBUktfVEVYVF9DT0xPUiIsIkJMVUUiLCJCTFVFX1NFQyIsIkJMVUVfTkFWX0RBUktfQkciLCJCTFVFX0RBUktfVEVYVF9DT0xPUiIsIkRBUktfQkxVRSIsIkRBUktfQkxVRV9TRUMiLCJEQVJLX0JMVUVfTkFWX0RBUktfQkciLCJEQVJLX0JMVUVfREFSS19URVhUX0NPTE9SIiwiT1JBTkdFIiwiT1JBTkdFX1NFQyIsIk9SQU5HRV9OQVZfREFSS19CRyIsIk9SQU5HRV9EQVJLX1RFWFRfQ09MT1IiLCJMSUdIVF9CTFVFIiwiTElHSFRfQkxVRV9TRUMiLCJMSUdIVF9CTFVFX05BVl9EQVJLX0JHIiwiTElHSFRfQkxVRV9EQVJLX1RFWFRfQ09MT1IiLCJERUVQX09SQU5HRSIsIkRFRVBfT1JBTkdFX1NFQyIsIkRFRVBfT1JBTkdFX05BVl9EQVJLX0JHIiwiREVFUF9PUkFOR0VfREFSS19URVhUX0NPTE9SIiwiTElHSFRfUFVSUExFXzEiLCJMSUdIVF9QVVJQTEVfMV9TRUMiLCJMSUdIVF9QVVJQTEVfMV9OQVZfREFSS19CRyIsIkxJR0hUX1BVUlBMRV8xX0RBUktfVEVYVF9DT0xPUiIsIkxJR0hUX1BVUlBMRV8yIiwiTElHSFRfUFVSUExFXzJfU0VDIiwiTElHSFRfUFVSUExFXzJfTkFWX0RBUktfQkciLCJMSUdIVF9QVVJQTEVfMl9EQVJLX1RFWFRfQ09MT1IiLCJUQUJfU0laRSIsImNvbmZpZyIsImFwaUtleSIsImF1dGhEb21haW4iLCJkYXRhYmFzZVVSTCIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImZpcmViYXNlIiwiYXBwcyIsImxlbmd0aCIsImluaXRpYWxpemVBcHAiLCJhdXRoIiwiZ29vZ2xlQXV0aFByb3ZpZGVyIiwiR29vZ2xlQXV0aFByb3ZpZGVyIiwiZmFjZWJvb2tBdXRoUHJvdmlkZXIiLCJGYWNlYm9va0F1dGhQcm92aWRlciIsImdpdGh1YkF1dGhQcm92aWRlciIsIkdpdGh1YkF1dGhQcm92aWRlciIsInR3aXR0ZXJBdXRoUHJvdmlkZXIiLCJUd2l0dGVyQXV0aFByb3ZpZGVyIiwiZGF0YWJhc2UiLCJQYWdlIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwic3RvcmUiLCJ3aXRoUmVkdXgiLCJpbml0U3RvcmUiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJ1c2VyU2lnblVwIiwidXNlciIsInR5cGUiLCJwYXlsb2FkIiwidXNlclNpZ25JbiIsInVzZXJTaWduT3V0IiwidXNlclNpZ25VcFN1Y2Nlc3MiLCJhdXRoVXNlciIsInVzZXJTaWduSW5TdWNjZXNzIiwidXNlclNpZ25PdXRTdWNjZXNzIiwiUm91dGVyIiwicmVwbGFjZSIsInNob3dBdXRoTWVzc2FnZSIsIm1lc3NhZ2UiLCJ1c2VyR29vZ2xlU2lnbkluIiwidXNlckdvb2dsZVNpZ25JblN1Y2Nlc3MiLCJ1c2VyRmFjZWJvb2tTaWduSW4iLCJ1c2VyRmFjZWJvb2tTaWduSW5TdWNjZXNzIiwic2V0SW5pdFVybCIsInVybCIsInVzZXJUd2l0dGVyU2lnbkluIiwidXNlclR3aXR0ZXJTaWduSW5TdWNjZXNzIiwidXNlckdpdGh1YlNpZ25JbiIsInVzZXJHaXRodWJTaWduSW5TdWNjZXNzIiwic2hvd0F1dGhMb2FkZXIiLCJoaWRlTWVzc2FnZSIsImhpZGVBdXRoTG9hZGVyIiwiZmV0Y2hTdGFydCIsImZldGNoU3VjY2VzcyIsImZldGNoRXJyb3IiLCJlcnJvciIsInNob3dNZXNzYWdlIiwib25HZXRTdGlja3kiLCJub3Rlc0xpc3QiLCJmZXRjaFN0aWNreVN1Y2Nlc3MiLCJvblVwZGF0ZVN0aWNreSIsInVwZGF0ZVN0aWNreVN1Y2Nlc3MiLCJJTklUX1NUQVRFIiwibG9hZGVyIiwiYWxlcnRNZXNzYWdlIiwiaW5pdFVSTCIsInN0YXRlIiwiYWN0aW9uIiwibG9hZGluZyIsImNvbnRhY3RMaXN0Iiwic2VsZWN0ZWRDb250YWN0IiwibWFwIiwiY29udGFjdCIsImlkIiwiZmlsdGVyIiwiaW5pdGlhbFNldHRpbmdzIiwibmF2Q29sbGFwc2VkIiwibmF2U3R5bGUiLCJ0aGVtZVR5cGUiLCJwYXRobmFtZSIsIndpZHRoIiwiaXNEaXJlY3Rpb25SVEwiLCJsb2NhbGUiLCJsYW5ndWFnZUlkIiwibmFtZSIsImljb24iLCJzZXR0aW5ncyIsImNvbnNvbGUiLCJsb2ciLCJyZWR1Y2VycyIsImNvbWJpbmVSZWR1Y2VycyIsIlNldHRpbmdzIiwiQXV0aCIsIm5vdGVzIiwiTm90ZXMiLCJDb250YWN0IiwiY29tbW9uIiwiQ29tbW9uIiwiY3JlYXRlVXNlcldpdGhFbWFpbFBhc3N3b3JkUmVxdWVzdCIsImVtYWlsIiwicGFzc3dvcmQiLCJjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJ0aGVuIiwiY2F0Y2giLCJzaWduSW5Vc2VyV2l0aEVtYWlsUGFzc3dvcmRSZXF1ZXN0Iiwic2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJzaWduT3V0UmVxdWVzdCIsInNpZ25PdXQiLCJzaWduSW5Vc2VyV2l0aEdvb2dsZVJlcXVlc3QiLCJzaWduSW5XaXRoUG9wdXAiLCJzaWduSW5Vc2VyV2l0aEZhY2Vib29rUmVxdWVzdCIsInNpZ25JblVzZXJXaXRoR2l0aHViUmVxdWVzdCIsInNpZ25JblVzZXJXaXRoVHdpdHRlclJlcXVlc3QiLCJjcmVhdGVVc2VyV2l0aEVtYWlsUGFzc3dvcmQiLCJzaWduVXBVc2VyIiwiY2FsbCIsInB1dCIsInNldENvb2tpZSIsInVpZCIsInNpZ25JblVzZXJXaXRoR29vZ2xlIiwic2lnbkluVXNlcldpdGhGYWNlYm9vayIsInNpZ25JblVzZXJXaXRoR2l0aHViIiwic2lnbkluVXNlcldpdGhUd2l0dGVyIiwic2lnbkluVXNlcldpdGhFbWFpbFBhc3N3b3JkIiwic2lnbkluVXNlciIsInNpZ25PdXRVc2VyIiwidW5kZWZpbmVkIiwicmVtb3ZlQ29va2llIiwiY3JlYXRlVXNlckFjY291bnQiLCJ0YWtlRXZlcnkiLCJzaWduSW5XaXRoR29vZ2xlIiwic2lnbkluV2l0aEZhY2Vib29rIiwic2lnbkluV2l0aFR3aXR0ZXIiLCJzaWduSW5XaXRoR2l0aHViIiwicm9vdFNhZ2EiLCJhbGwiLCJmb3JrIiwiZ2V0U3RpY2t5IiwicmVmIiwib25jZSIsInNuYXBzaG90Iiwibm90ZXNzIiwiZm9yRWFjaCIsInJhd0RhdGEiLCJwdXNoIiwidmFsIiwidXBkYXRlU3RpY2t5UmVxdWVzdCIsInNldCIsImZldGNoU3RpY2t5UmVxdWVzdCIsImZldGNoZWRTdGlja3kiLCJmZXRjaFN0aWNreSIsInVwZGF0ZVN0aWNreSIsImdldFN0YXRlIiwiYXV0aFNhZ2FzIiwibm90ZXNTYWdhcyIsInNhZ2FNaWRkbGV3YXJlIiwiY3JlYXRlU2FnYU1pZGRsZXdhcmUiLCJiaW5kTWlkZGxld2FyZSIsIm1pZGRsZXdhcmUiLCJjb21wb3NlV2l0aERldlRvb2xzIiwicmVxdWlyZSIsImFwcGx5TWlkZGxld2FyZSIsImNvbmZpZ3VyZVN0b3JlIiwiaW5pdGlhbFN0YXRlIiwiY3JlYXRlU3RvcmUiLCJ0aHVuayIsInJ1blNhZ2EiLCJzYWdhIiwicnVuIiwic3RvcFNhZ2EiLCJkaXNwYXRjaCIsIkVORCIsImRvbmUiLCJleGVjU2FnYVRhc2tzIiwiaXNTZXJ2ZXIiLCJ0YXNrcyIsImtleSIsInZhbHVlIiwiZ2V0Q29va2llIiwicmVxIiwiZ2V0Q29va2llRnJvbUJyb3dzZXIiLCJnZXRDb29raWVGcm9tU2VydmVyIiwiY29va2llIiwiZ2V0IiwiaGVhZGVycyIsInJhd0Nvb2tpZSIsInNwbGl0IiwiZmluZCIsImMiLCJ0cmltIiwic3RhcnRzV2l0aCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFn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Q0FBQ1MsU0FBTCxFQUFnQjtBQUNkLFdBQU8zRCxTQUFQO0FBQ0Q7O0FBQ0QsU0FBTzJELFNBQVMsQ0FBQ0MsS0FBVixDQUFnQixHQUFoQixFQUFxQixDQUFyQixDQUFQO0FBQ0QsQ0FYRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdCQSxxQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSx3QyIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiLy8gQ3VzdG9taXplciBjb25zdFxyXG5leHBvcnQgY29uc3QgVE9HR0xFX0NPTExBUFNFRF9OQVYgPSAnVE9HR0xFX0NPTExBUFNFX01FTlUnO1xyXG5leHBvcnQgY29uc3QgV0lORE9XX1dJRFRIID0gJ1dJTkRPVy1XSURUSCc7XHJcbmV4cG9ydCBjb25zdCBTV0lUQ0hfTEFOR1VBR0UgPSAnU1dJVENILUxBTkdVQUdFJztcclxuXHJcbi8vQ29udGFjdCBNb2R1bGUgY29uc3RcclxuZXhwb3J0IGNvbnN0IEZFVENIX1NUQVJUID0gJ2ZldGNoX3N0YXJ0JztcclxuZXhwb3J0IGNvbnN0IEZFVENIX1NVQ0NFU1MgPSAnZmV0Y2hfc3VjY2Vzcyc7XHJcbmV4cG9ydCBjb25zdCBGRVRDSF9FUlJPUiA9ICdmZXRjaF9lcnJvcic7XHJcbmV4cG9ydCBjb25zdCBTSE9XX01FU1NBR0UgPSAnU0hPV19NRVNTQUdFJztcclxuZXhwb3J0IGNvbnN0IEhJREVfTUVTU0FHRSA9ICdISURFX01FU1NBR0UnO1xyXG5leHBvcnQgY29uc3QgT05fU0hPV19MT0FERVIgPSAnT05fU0hPV19MT0FERVInO1xyXG5leHBvcnQgY29uc3QgT05fSElERV9MT0FERVIgPSAnT05fSElERV9MT0FERVInO1xyXG5cclxuLy9BdXRoIGNvbnN0XHJcbmV4cG9ydCBjb25zdCBTSUdOVVBfVVNFUiA9ICdTSUdOVVBfVVNFUic7XHJcbmV4cG9ydCBjb25zdCBTSUdOVVBfVVNFUl9TVUNDRVNTID0gJ1NJR05VUF9VU0VSX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgU0lHTklOX0dPT0dMRV9VU0VSID0gJ1NJR05JTl9HT09HTEVfVVNFUic7XHJcbmV4cG9ydCBjb25zdCBTSUdOSU5fR09PR0xFX1VTRVJfU1VDQ0VTUyA9ICdTSUdOSU5fR09PR0xFX1VTRVJfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBTSUdOSU5fRkFDRUJPT0tfVVNFUiA9ICdTSUdOSU5fRkFDRUJPT0tfVVNFUic7XHJcbmV4cG9ydCBjb25zdCBTSUdOSU5fRkFDRUJPT0tfVVNFUl9TVUNDRVNTID0gJ1NJR05JTl9GQUNFQk9PS19VU0VSX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgU0lHTklOX1RXSVRURVJfVVNFUiA9ICdTSUdOSU5fVFdJVFRFUl9VU0VSJztcclxuZXhwb3J0IGNvbnN0IFNJR05JTl9UV0lUVEVSX1VTRVJfU1VDQ0VTUyA9ICdTSUdOSU5fVFdJVFRFUl9VU0VSX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgU0lHTklOX0dJVEhVQl9VU0VSID0gJ1NJR05JTl9HSVRIVUJfVVNFUic7XHJcbmV4cG9ydCBjb25zdCBTSUdOSU5fR0lUSFVCX1VTRVJfU1VDQ0VTUyA9ICdzaWduaW5fZ2l0aHViX3VzZXJfc3VjY2Vzcyc7XHJcbmV4cG9ydCBjb25zdCBTSUdOSU5fVVNFUiA9ICdTSUdOSU5fVVNFUic7XHJcbmV4cG9ydCBjb25zdCBTSUdOSU5fVVNFUl9TVUNDRVNTID0gJ1NJR05JTl9VU0VSX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgU0lHTk9VVF9VU0VSID0gJ1NJR05PVVRfVVNFUic7XHJcbmV4cG9ydCBjb25zdCBTSUdOT1VUX1VTRVJfU1VDQ0VTUyA9ICdTSUdOT1VUX1VTRVJfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBJTklUX1VSTCA9ICdJTklUX1VSTCc7XHJcblxyXG4vL1N0aWNreVxyXG5leHBvcnQgY29uc3QgR0VUX1NUSUNLWSA9ICdHRVRfU1RJQ0tZJztcclxuZXhwb3J0IGNvbnN0IE5PVEVTX1VQREFURT0nTk9URVNfVVBEQVRFJztcclxuZXhwb3J0IGNvbnN0IEZFVENIX0FMTF9OT1RFU19TVUNDRVNTPSdGRVRDSF9BTExfTk9URVNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBVUERBVEVfQUxMX05PVEVTX1NVQ0NFU1M9J1VQREFURV9BTExfTk9URVNfU1VDQ0VTUyc7XHJcblxyXG4vL0NvbnRhY3RcclxuZXhwb3J0IGNvbnN0IEdFVF9BbGxfQ09OVEFDVF9TVUNDRVNTID0gJ0dFVF9BbGxfQ09OVEFDVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IE9OX0FERF9DT05UQUNUX1NVQ0NFU1MgPSAnT05fQUREX0NPTlRBQ1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBVUERBVEVfQ09OVEFDVF9TVUNDRVNTPSdVUERBVEVfQ09OVEFDVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IERFTEVURV9DT05UQUNUX1NVQ0NFU1M9J0RFTEVURV9DT05UQUNUX1NVQ0NFU1MnO1xyXG5cclxuXHJcbiIsIi8vIEN1c3RvbWl6ZXIgY29uc3RcclxuZXhwb3J0IGNvbnN0IFRIRU1FX1RZUEUgPSAnVEhFTUVfVFlQRSc7XHJcbmV4cG9ydCBjb25zdCBUSEVNRV9UWVBFX0xJVEUgPSAnVEhFTUVfVFlQRV9MSVRFJztcclxuZXhwb3J0IGNvbnN0IFRIRU1FX1RZUEVfREFSSyA9ICdUSEVNRV9UWVBFX0RBUksnO1xyXG5leHBvcnQgY29uc3QgVEhFTUVfVFlQRV9TRU1JX0RBUksgPSAnVEhFTUVfVFlQRV9TRU1JX0RBUksnO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBUSEVNRV9DT0xPUl9TRUxFQ1RJT04gPSAnVEhFTUVfQ09MT1JfU0VMRUNUSU9OJztcclxuZXhwb3J0IGNvbnN0IFRIRU1FX0NPTE9SX1NFTEVDVElPTl9QUkVTRVQgPSAnVEhFTUVfQ09MT1JfU0VMRUNUSU9OX1BSRVNFVCc7XHJcbmV4cG9ydCBjb25zdCBUSEVNRV9DT0xPUl9TRUxFQ1RJT05fQ1VTVE9NSVpFID0gJ1RIRU1FX0NPTE9SX1NFTEVDVElPTl9DVVNUT01JWkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEhPUklaT05UQUxfTkFWSUdBVElPTiA9ICdIT1JJWk9OVEFMX05BVklHQVRJT04nO1xyXG5cclxuZXhwb3J0IGNvbnN0IEhPUklaT05UQUxfTUVOVV9QT1NJVElPTiA9ICdIT1JJWk9OVEFMX01FTlVfUE9TSVRJT04nO1xyXG5leHBvcnQgY29uc3QgQUJPVkVfVEhFX0hFQURFUiA9ICdBQk9WRV9USEVfSEVBREVSJztcclxuZXhwb3J0IGNvbnN0IElOU0lERV9USEVfSEVBREVSID0gJ0lOU0lERV9USEVfSEVBREVSJztcclxuZXhwb3J0IGNvbnN0IEJFTE9XX1RIRV9IRUFERVIgPSAnQkVMT1dfVEhFX0hFQURFUic7XHJcblxyXG5leHBvcnQgY29uc3QgVkVSVElDQUxfTkFWSUdBVElPTiA9ICdWRVJUSUNBTF9OQVZJR0FUSU9OJztcclxuZXhwb3J0IGNvbnN0IE5BVl9TVFlMRV9NSU5JID0gJ05BVl9TVFlMRV9NSU5JJztcclxuXHJcbmV4cG9ydCBjb25zdCBMQVlPVVRfVFlQRSA9ICdMQVlPVVRfVFlQRSc7XHJcbmV4cG9ydCBjb25zdCBTRVRfUEFUSF9OQU1FID0gJ1NFVF9QQVRIX05BTUUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExBWU9VVF9UWVBFX0ZSQU1FRCA9ICdMQVlPVVRfVFlQRV9GUkFNRUQnO1xyXG5leHBvcnQgY29uc3QgTEFZT1VUX1RZUEVfQk9YRUQgPSAnTEFZT1VUX1RZUEVfQk9YRUQnO1xyXG5leHBvcnQgY29uc3QgTEFZT1VUX1RZUEVfRlVMTCA9ICdMQVlPVVRfVFlQRV9GVUxMJztcclxuXHJcblxyXG5leHBvcnQgY29uc3QgTkFWX1NUWUxFID0gJ05BVl9TVFlMRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTkFWX1NUWUxFX0ZJWEVEID0gJ05BVl9TVFlMRV9GSVhFRCc7XHJcbmV4cG9ydCBjb25zdCBOQVZfU1RZTEVfTUlOSV9TSURFQkFSID0gJ05BVl9TVFlMRV9NSU5JX1NJREVCQVInO1xyXG5leHBvcnQgY29uc3QgTkFWX1NUWUxFX0RSQVdFUiA9ICdOQVZfU1RZTEVfRFJBV0VSJztcclxuZXhwb3J0IGNvbnN0IE5BVl9TVFlMRV9OT19IRUFERVJfTUlOSV9TSURFQkFSID0gJ05BVl9TVFlMRV9OT19IRUFERVJfTUlOSV9TSURFQkFSJztcclxuZXhwb3J0IGNvbnN0IE5BVl9TVFlMRV9OT19IRUFERVJfRVhQQU5ERURfU0lERUJBUiA9ICdOQVZfU1RZTEVfTk9fSEVBREVSX0VYUEFOREVEX1NJREVCQVInO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5BVl9TVFlMRV9ERUZBVUxUX0hPUklaT05UQUwgPSAnTkFWX1NUWUxFX0RFRkFVTFRfSE9SSVpPTlRBTCc7XHJcbmV4cG9ydCBjb25zdCBOQVZfU1RZTEVfREFSS19IT1JJWk9OVEFMID0gJ05BVl9TVFlMRV9EQVJLX0hPUklaT05UQUwnO1xyXG5leHBvcnQgY29uc3QgTkFWX1NUWUxFX0lOU0lERV9IRUFERVJfSE9SSVpPTlRBTCA9ICdOQVZfU1RZTEVfSU5TSURFX0hFQURFUl9IT1JJWk9OVEFMJztcclxuZXhwb3J0IGNvbnN0IE5BVl9TVFlMRV9CRUxPV19IRUFERVIgPSAnTkFWX1NUWUxFX0JFTE9XX0hFQURFUic7XHJcbmV4cG9ydCBjb25zdCBOQVZfU1RZTEVfQUJPVkVfSEVBREVSID0gJ05BVl9TVFlMRV9BQk9WRV9IRUFERVInO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBMSUdIVF9QVVJQTEUgPSAnIzhBMkJFMic7XHJcbmV4cG9ydCBjb25zdCBMSUdIVF9QVVJQTEVfU0VDID0gJyMwMEIzNzgnO1xyXG5leHBvcnQgY29uc3QgTElHSFRfUFVSUExFX05BVl9EQVJLX0JHID0gJyMzMjM5NEYnO1xyXG5leHBvcnQgY29uc3QgTElHSFRfUFVSUExFX0RBUktfVEVYVF9DT0xPUiA9ICcjOTc5OUFDJztcclxuXHJcbmV4cG9ydCBjb25zdCBSRUQgPSAnI0ZGMkI3QSc7XHJcbmV4cG9ydCBjb25zdCBSRURfU0VDID0gJyMwMEQ5QzknO1xyXG5leHBvcnQgY29uc3QgUkVEX05BVl9EQVJLX0JHID0gJyMzQzM3NjYnO1xyXG5leHBvcnQgY29uc3QgUkVEX0RBUktfVEVYVF9DT0xPUiA9ICcjODc4QkFCJztcclxuXHJcbmV4cG9ydCBjb25zdCBCTFVFID0gJyMzREE0RTYnO1xyXG5leHBvcnQgY29uc3QgQkxVRV9TRUMgPSAnI0ZDQjUzQic7XHJcbmV4cG9ydCBjb25zdCBCTFVFX05BVl9EQVJLX0JHID0gJyM0NDQzNDInO1xyXG5leHBvcnQgY29uc3QgQkxVRV9EQVJLX1RFWFRfQ09MT1IgPSAnI0FBQTU5QSc7XHJcblxyXG5leHBvcnQgY29uc3QgREFSS19CTFVFID0gJyMwNDY5QjknO1xyXG5leHBvcnQgY29uc3QgREFSS19CTFVFX1NFQyA9ICcjMTdCREU1JztcclxuZXhwb3J0IGNvbnN0IERBUktfQkxVRV9OQVZfREFSS19CRyA9ICcjMDg2ODgwJztcclxuZXhwb3J0IGNvbnN0IERBUktfQkxVRV9EQVJLX1RFWFRfQ09MT1IgPSAnIzlEREFFOSc7XHJcblxyXG5leHBvcnQgY29uc3QgT1JBTkdFID0gJyNGMTg4MDUnO1xyXG5leHBvcnQgY29uc3QgT1JBTkdFX1NFQyA9ICcjRjFEMDY1JztcclxuZXhwb3J0IGNvbnN0IE9SQU5HRV9OQVZfREFSS19CRyA9ICcjMjcyOTMyJztcclxuZXhwb3J0IGNvbnN0IE9SQU5HRV9EQVJLX1RFWFRfQ09MT1IgPSAnI0FCQTg5NSc7XHJcblxyXG5leHBvcnQgY29uc3QgTElHSFRfQkxVRSA9ICcjNkE5NUZGJztcclxuZXhwb3J0IGNvbnN0IExJR0hUX0JMVUVfU0VDID0gJyM1OURDRkYnO1xyXG5leHBvcnQgY29uc3QgTElHSFRfQkxVRV9OQVZfREFSS19CRyA9ICcjMUIyNjQyJztcclxuZXhwb3J0IGNvbnN0IExJR0hUX0JMVUVfREFSS19URVhUX0NPTE9SID0gJyM5MkEyQzgnO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBERUVQX09SQU5HRSA9ICcjRjg3MDYwJztcclxuZXhwb3J0IGNvbnN0IERFRVBfT1JBTkdFX1NFQyA9ICcjNzBBMjg4JztcclxuZXhwb3J0IGNvbnN0IERFRVBfT1JBTkdFX05BVl9EQVJLX0JHID0gJyMwODQxNUMnO1xyXG5leHBvcnQgY29uc3QgREVFUF9PUkFOR0VfREFSS19URVhUX0NPTE9SID0gJyM5N0I4QzcnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExJR0hUX1BVUlBMRV8xID0gJyNBMTcyRTcnO1xyXG5leHBvcnQgY29uc3QgTElHSFRfUFVSUExFXzFfU0VDID0gJyNFMTQ1OTQnO1xyXG5leHBvcnQgY29uc3QgTElHSFRfUFVSUExFXzFfTkFWX0RBUktfQkcgPSAnIzE4Mjk1Mic7XHJcbmV4cG9ydCBjb25zdCBMSUdIVF9QVVJQTEVfMV9EQVJLX1RFWFRfQ09MT1IgPSAnIzgyODhCNCc7XHJcblxyXG5leHBvcnQgY29uc3QgTElHSFRfUFVSUExFXzIgPSAnIzk1NkZFNyc7XHJcbmV4cG9ydCBjb25zdCBMSUdIVF9QVVJQTEVfMl9TRUMgPSAnIzY0RDdENic7XHJcbmV4cG9ydCBjb25zdCBMSUdIVF9QVVJQTEVfMl9OQVZfREFSS19CRyA9ICcjMjg0QzdDJztcclxuZXhwb3J0IGNvbnN0IExJR0hUX1BVUlBMRV8yX0RBUktfVEVYVF9DT0xPUiA9ICcjNTc4MkJCJztcclxuXHJcblxyXG5leHBvcnQgY29uc3QgVEFCX1NJWkUgPSA5OTI7XHJcbiIsImltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2VcIjtcclxuXHJcbi8vIEluaXRpYWxpemUgRmlyZWJhc2VcclxuY29uc3QgY29uZmlnID0ge1xyXG4gIGFwaUtleTogXCJBSXphU3lBei1HUGZBLWhONzRvRmgzWHZYc0Y5dlFybEU1eHBVMTBcIixcclxuICBhdXRoRG9tYWluOiBcIndpZWxkeS00ZjU5Yy5maXJlYmFzZWFwcC5jb21cIixcclxuICBkYXRhYmFzZVVSTDogXCJodHRwczovL3dpZWxkeS00ZjU5Yy5maXJlYmFzZWlvLmNvbVwiLFxyXG4gIHByb2plY3RJZDogXCJ3aWVsZHktNGY1OWNcIixcclxuICBzdG9yYWdlQnVja2V0OiBcIndpZWxkeS00ZjU5Yy5hcHBzcG90LmNvbVwiLFxyXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjgxOTQ5ODg0MjYxXCJcclxufTtcclxuaWYgKCFmaXJlYmFzZS5hcHBzLmxlbmd0aCkge1xyXG4gIGZpcmViYXNlLmluaXRpYWxpemVBcHAoY29uZmlnKTtcclxufVxyXG5jb25zdCBhdXRoID0gZmlyZWJhc2UuYXV0aCgpO1xyXG5cclxuY29uc3QgZ29vZ2xlQXV0aFByb3ZpZGVyID0gbmV3IGZpcmViYXNlLmF1dGguR29vZ2xlQXV0aFByb3ZpZGVyKCk7XHJcbmNvbnN0IGZhY2Vib29rQXV0aFByb3ZpZGVyID0gbmV3IGZpcmViYXNlLmF1dGguRmFjZWJvb2tBdXRoUHJvdmlkZXIoKTtcclxuY29uc3QgZ2l0aHViQXV0aFByb3ZpZGVyID0gbmV3IGZpcmViYXNlLmF1dGguR2l0aHViQXV0aFByb3ZpZGVyKCk7XHJcbmNvbnN0IHR3aXR0ZXJBdXRoUHJvdmlkZXIgPSBuZXcgZmlyZWJhc2UuYXV0aC5Ud2l0dGVyQXV0aFByb3ZpZGVyKCk7XHJcblxyXG5jb25zdCBkYXRhYmFzZSA9IGZpcmViYXNlLmRhdGFiYXNlKCk7XHJcblxyXG5leHBvcnQge1xyXG4gIGRhdGFiYXNlLFxyXG4gIGF1dGgsXHJcbiAgZ29vZ2xlQXV0aFByb3ZpZGVyLFxyXG4gIGdpdGh1YkF1dGhQcm92aWRlcixcclxuICBmYWNlYm9va0F1dGhQcm92aWRlcixcclxuICB0d2l0dGVyQXV0aFByb3ZpZGVyXHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IHdpdGhSZWR1eCBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xyXG5pbXBvcnQgJ3JlYWN0LW5vdGlmaWNhdGlvbnMvbGliL25vdGlmaWNhdGlvbnMuY3NzJztcclxuaW1wb3J0ICdhbnRkL2Rpc3QvYW50ZC5jc3MnO1xyXG5pbXBvcnQgXCJzbGljay1jYXJvdXNlbC9zbGljay9zbGljay5jc3NcIjtcclxuaW1wb3J0IFwic2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2stdGhlbWUuY3NzXCI7XHJcblxyXG5pbXBvcnQgXCIuLi9wdWJsaWMvdmVuZG9ycy9zdHlsZVwiO1xyXG5pbXBvcnQgXCIuLi9zdHlsZXMvc3R5bGUuY3NzXCJcclxuaW1wb3J0IFwiLi4vZmlyZWJhc2VDb25maWcvaW5kZXhcIlxyXG5cclxuaW1wb3J0IGluaXRTdG9yZSBmcm9tICcuLi9yZWR1eC9zdG9yZSc7XHJcbmltcG9ydCB7UHJvdmlkZXJ9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5cclxuY29uc3QgUGFnZSA9ICh7Q29tcG9uZW50LCBwYWdlUHJvcHMsIHN0b3JlfSkgPT4ge1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPldpZWxkeS0gQWRtaW4gRGFzaGJvYXJkPC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8PlxyXG4gICAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxyXG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgICA8L1Byb3ZpZGVyPlxyXG4gICAgICA8Lz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUmVkdXgoaW5pdFN0b3JlKShQYWdlKTtcclxuXHJcblBhZ2UuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHtDb21wb25lbnQsIGN0eH0pID0+IHtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHBhZ2VQcm9wczoge1xyXG4gICAgICAuLi4oQ29tcG9uZW50LmdldEluaXRpYWxQcm9wc1xyXG4gICAgICAgID8gYXdhaXQgQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyhjdHgpXHJcbiAgICAgICAgOiB7fSksXHJcbiAgICB9LFxyXG4gIH07XHJcbn07XHJcbiIsImltcG9ydCBcIi4vZmxhZy9zcHJpdGUtZmxhZ3MtMjR4MjQuY3NzXCI7XHJcbmltcG9ydCBcIi4vZ2F4b24vc3R5bGVzLmNzc1wiO1xyXG5pbXBvcnQgXCIuLi9sb2FkZXIuY3NzXCI7XHJcbmltcG9ydCBcIi4vbm9pci1wcm8vc3R5bGVzLmNzc1wiO1xyXG4iLCJpbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQge1xyXG4gIEhJREVfTUVTU0FHRSxcclxuICBJTklUX1VSTCxcclxuICBPTl9ISURFX0xPQURFUixcclxuICBPTl9TSE9XX0xPQURFUixcclxuICBTSE9XX01FU1NBR0UsXHJcbiAgU0lHTklOX0ZBQ0VCT09LX1VTRVIsXHJcbiAgU0lHTklOX0ZBQ0VCT09LX1VTRVJfU1VDQ0VTUyxcclxuICBTSUdOSU5fR0lUSFVCX1VTRVIsXHJcbiAgU0lHTklOX0dJVEhVQl9VU0VSX1NVQ0NFU1MsXHJcbiAgU0lHTklOX0dPT0dMRV9VU0VSLFxyXG4gIFNJR05JTl9HT09HTEVfVVNFUl9TVUNDRVNTLFxyXG4gIFNJR05JTl9UV0lUVEVSX1VTRVIsXHJcbiAgU0lHTklOX1RXSVRURVJfVVNFUl9TVUNDRVNTLFxyXG4gIFNJR05JTl9VU0VSLFxyXG4gIFNJR05JTl9VU0VSX1NVQ0NFU1MsXHJcbiAgU0lHTk9VVF9VU0VSLFxyXG4gIFNJR05PVVRfVVNFUl9TVUNDRVNTLFxyXG4gIFNJR05VUF9VU0VSLFxyXG4gIFNJR05VUF9VU0VSX1NVQ0NFU1NcclxufSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzL0FjdGlvblR5cGVzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlclNpZ25VcCA9ICh1c2VyKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IFNJR05VUF9VU0VSLFxyXG4gICAgcGF5bG9hZDogdXNlclxyXG4gIH07XHJcbn07XHJcbmV4cG9ydCBjb25zdCB1c2VyU2lnbkluID0gKHVzZXIpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogU0lHTklOX1VTRVIsXHJcbiAgICBwYXlsb2FkOiB1c2VyXHJcbiAgfTtcclxufTtcclxuZXhwb3J0IGNvbnN0IHVzZXJTaWduT3V0ID0gKCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBTSUdOT1VUX1VTRVJcclxuICB9O1xyXG59O1xyXG5leHBvcnQgY29uc3QgdXNlclNpZ25VcFN1Y2Nlc3MgPSAoYXV0aFVzZXIpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogU0lHTlVQX1VTRVJfU1VDQ0VTUyxcclxuICAgIHBheWxvYWQ6IGF1dGhVc2VyXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VyU2lnbkluU3VjY2VzcyA9IChhdXRoVXNlcikgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBTSUdOSU5fVVNFUl9TVUNDRVNTLFxyXG4gICAgcGF5bG9hZDogYXV0aFVzZXJcclxuICB9XHJcbn07XHJcbmV4cG9ydCBjb25zdCB1c2VyU2lnbk91dFN1Y2Nlc3MgPSAoKSA9PiB7XHJcbiAgUm91dGVyLnJlcGxhY2UoXCIvXCIpO1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBTSUdOT1VUX1VTRVJfU1VDQ0VTUyxcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2hvd0F1dGhNZXNzYWdlID0gKG1lc3NhZ2UpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogU0hPV19NRVNTQUdFLFxyXG4gICAgcGF5bG9hZDogbWVzc2FnZVxyXG4gIH07XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHVzZXJHb29nbGVTaWduSW4gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IFNJR05JTl9HT09HTEVfVVNFUlxyXG4gIH07XHJcbn07XHJcbmV4cG9ydCBjb25zdCB1c2VyR29vZ2xlU2lnbkluU3VjY2VzcyA9IChhdXRoVXNlcikgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBTSUdOSU5fR09PR0xFX1VTRVJfU1VDQ0VTUyxcclxuICAgIHBheWxvYWQ6IGF1dGhVc2VyXHJcbiAgfTtcclxufTtcclxuZXhwb3J0IGNvbnN0IHVzZXJGYWNlYm9va1NpZ25JbiA9ICgpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogU0lHTklOX0ZBQ0VCT09LX1VTRVJcclxuICB9O1xyXG59O1xyXG5leHBvcnQgY29uc3QgdXNlckZhY2Vib29rU2lnbkluU3VjY2VzcyA9IChhdXRoVXNlcikgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBTSUdOSU5fRkFDRUJPT0tfVVNFUl9TVUNDRVNTLFxyXG4gICAgcGF5bG9hZDogYXV0aFVzZXJcclxuICB9O1xyXG59O1xyXG5leHBvcnQgY29uc3Qgc2V0SW5pdFVybCA9ICh1cmwpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogSU5JVF9VUkwsXHJcbiAgICBwYXlsb2FkOiB1cmxcclxuICB9O1xyXG59O1xyXG5leHBvcnQgY29uc3QgdXNlclR3aXR0ZXJTaWduSW4gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IFNJR05JTl9UV0lUVEVSX1VTRVJcclxuICB9O1xyXG59O1xyXG5leHBvcnQgY29uc3QgdXNlclR3aXR0ZXJTaWduSW5TdWNjZXNzID0gKGF1dGhVc2VyKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IFNJR05JTl9UV0lUVEVSX1VTRVJfU1VDQ0VTUyxcclxuICAgIHBheWxvYWQ6IGF1dGhVc2VyXHJcbiAgfTtcclxufTtcclxuZXhwb3J0IGNvbnN0IHVzZXJHaXRodWJTaWduSW4gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IFNJR05JTl9HSVRIVUJfVVNFUlxyXG4gIH07XHJcbn07XHJcbmV4cG9ydCBjb25zdCB1c2VyR2l0aHViU2lnbkluU3VjY2VzcyA9IChhdXRoVXNlcikgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBTSUdOSU5fR0lUSFVCX1VTRVJfU1VDQ0VTUyxcclxuICAgIHBheWxvYWQ6IGF1dGhVc2VyXHJcbiAgfTtcclxufTtcclxuZXhwb3J0IGNvbnN0IHNob3dBdXRoTG9hZGVyID0gKCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBPTl9TSE9XX0xPQURFUixcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGhpZGVNZXNzYWdlID0gKCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBISURFX01FU1NBR0UsXHJcbiAgfTtcclxufTtcclxuZXhwb3J0IGNvbnN0IGhpZGVBdXRoTG9hZGVyID0gKCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBPTl9ISURFX0xPQURFUixcclxuICB9O1xyXG59O1xyXG4iLCJpbXBvcnQge0ZFVENIX0VSUk9SLCBGRVRDSF9TVEFSVCwgRkVUQ0hfU1VDQ0VTUywgSElERV9NRVNTQUdFLCBTSE9XX01FU1NBR0V9IGZyb20gXCIuLi8uLi9jb25zdGFudHMvQWN0aW9uVHlwZXNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaFN0YXJ0ID0gKCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBGRVRDSF9TVEFSVFxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaFN1Y2Nlc3MgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IEZFVENIX1NVQ0NFU1NcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hFcnJvciA9IChlcnJvcikgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBGRVRDSF9FUlJPUixcclxuICAgIHBheWxvYWQ6IGVycm9yXHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNob3dNZXNzYWdlID0gKG1lc3NhZ2UpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogU0hPV19NRVNTQUdFLFxyXG4gICAgcGF5bG9hZDogbWVzc2FnZVxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBoaWRlTWVzc2FnZSA9ICgpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogSElERV9NRVNTQUdFXHJcbiAgfVxyXG59O1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQge1xyXG4gIEZFVENIX0FMTF9OT1RFU19TVUNDRVNTLFxyXG4gIEdFVF9TVElDS1ksXHJcbiAgTk9URVNfVVBEQVRFLFxyXG4gIFVQREFURV9BTExfTk9URVNfU1VDQ0VTU1xyXG59IGZyb20gXCIuLi8uLi9jb25zdGFudHMvQWN0aW9uVHlwZXNcIjtcclxuXHJcblxyXG5leHBvcnQgY29uc3Qgb25HZXRTdGlja3kgPSAobm90ZXNMaXN0KSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IEdFVF9TVElDS1ksXHJcbiAgICBub3Rlc0xpc3RcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoU3RpY2t5U3VjY2VzcyA9IChub3Rlc0xpc3QpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogRkVUQ0hfQUxMX05PVEVTX1NVQ0NFU1MsXHJcbiAgICBwYXlsb2FkOiBub3Rlc0xpc3RcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgb25VcGRhdGVTdGlja3kgPSAobm90ZXNMaXN0KSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IE5PVEVTX1VQREFURSxcclxuICAgIG5vdGVzTGlzdFxyXG4gIH07XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZVN0aWNreVN1Y2Nlc3MgPSAobm90ZXNMaXN0KSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IFVQREFURV9BTExfTk9URVNfU1VDQ0VTUyxcclxuICAgIHBheWxvYWQ6IG5vdGVzTGlzdFxyXG4gIH1cclxufTtcclxuXHJcbiIsImltcG9ydCB7XHJcbiAgSElERV9NRVNTQUdFLFxyXG4gIElOSVRfVVJMLFxyXG4gIE9OX0hJREVfTE9BREVSLFxyXG4gIE9OX1NIT1dfTE9BREVSLFxyXG4gIFNIT1dfTUVTU0FHRSxcclxuICBTSUdOSU5fRkFDRUJPT0tfVVNFUl9TVUNDRVNTLFxyXG4gIFNJR05JTl9HSVRIVUJfVVNFUl9TVUNDRVNTLFxyXG4gIFNJR05JTl9HT09HTEVfVVNFUl9TVUNDRVNTLFxyXG4gIFNJR05JTl9UV0lUVEVSX1VTRVJfU1VDQ0VTUyxcclxuICBTSUdOSU5fVVNFUl9TVUNDRVNTLFxyXG4gIFNJR05PVVRfVVNFUl9TVUNDRVNTLFxyXG4gIFNJR05VUF9VU0VSX1NVQ0NFU1NcclxufSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzL0FjdGlvblR5cGVzXCI7XHJcblxyXG5jb25zdCBJTklUX1NUQVRFID0ge1xyXG4gIGxvYWRlcjogZmFsc2UsXHJcbiAgYWxlcnRNZXNzYWdlOiAnJyxcclxuICBzaG93TWVzc2FnZTogZmFsc2UsXHJcbiAgaW5pdFVSTDogJycsXHJcbiAgYXV0aFVzZXI6IG51bGwsXHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlID0gSU5JVF9TVEFURSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBTSUdOVVBfVVNFUl9TVUNDRVNTOiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbG9hZGVyOiBmYWxzZSxcclxuICAgICAgICBhdXRoVXNlcjogYWN0aW9uLnBheWxvYWRcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2FzZSBTSUdOSU5fVVNFUl9TVUNDRVNTOiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbG9hZGVyOiBmYWxzZSxcclxuICAgICAgICBhdXRoVXNlcjogYWN0aW9uLnBheWxvYWRcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2FzZSBJTklUX1VSTDoge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGluaXRVUkw6IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGNhc2UgU0lHTk9VVF9VU0VSX1NVQ0NFU1M6IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBhdXRoVXNlcjogbnVsbCxcclxuICAgICAgICBpbml0VVJMOiAnLycsXHJcbiAgICAgICAgbG9hZGVyOiBmYWxzZVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2FzZSBTSE9XX01FU1NBR0U6IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBhbGVydE1lc3NhZ2U6IGFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICAgIHNob3dNZXNzYWdlOiB0cnVlLFxyXG4gICAgICAgIGxvYWRlcjogZmFsc2VcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2FzZSBISURFX01FU1NBR0U6IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBhbGVydE1lc3NhZ2U6ICcnLFxyXG4gICAgICAgIHNob3dNZXNzYWdlOiBmYWxzZSxcclxuICAgICAgICBsb2FkZXI6IGZhbHNlXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjYXNlIFNJR05JTl9HT09HTEVfVVNFUl9TVUNDRVNTOiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbG9hZGVyOiBmYWxzZSxcclxuICAgICAgICBhdXRoVXNlcjogYWN0aW9uLnBheWxvYWRcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2FzZSBTSUdOSU5fRkFDRUJPT0tfVVNFUl9TVUNDRVNTOiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbG9hZGVyOiBmYWxzZSxcclxuICAgICAgICBhdXRoVXNlcjogYWN0aW9uLnBheWxvYWRcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2FzZSBTSUdOSU5fVFdJVFRFUl9VU0VSX1NVQ0NFU1M6IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBsb2FkZXI6IGZhbHNlLFxyXG4gICAgICAgIGF1dGhVc2VyOiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXNlIFNJR05JTl9HSVRIVUJfVVNFUl9TVUNDRVNTOiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbG9hZGVyOiBmYWxzZSxcclxuICAgICAgICBhdXRoVXNlcjogYWN0aW9uLnBheWxvYWRcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2FzZSBPTl9TSE9XX0xPQURFUjoge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGxvYWRlcjogdHJ1ZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXNlIE9OX0hJREVfTE9BREVSOiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbG9hZGVyOiBmYWxzZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7RkVUQ0hfRVJST1IsIEZFVENIX1NUQVJULCBGRVRDSF9TVUNDRVNTLCBISURFX01FU1NBR0UsIFNIT1dfTUVTU0FHRX0gZnJvbSBcIi4uLy4uL2NvbnN0YW50cy9BY3Rpb25UeXBlc1wiXHJcblxyXG5jb25zdCBJTklUX1NUQVRFID0ge1xyXG4gIGVycm9yOiBcIlwiLFxyXG4gIGxvYWRpbmc6IGZhbHNlLFxyXG4gIG1lc3NhZ2U6ICcnXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoc3RhdGUgPSBJTklUX1NUQVRFLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIEZFVENIX1NUQVJUOiB7XHJcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIGVycm9yOiAnJywgbWVzc2FnZTogJycsIGxvYWRpbmc6IHRydWV9O1xyXG4gICAgfVxyXG4gICAgY2FzZSBGRVRDSF9TVUNDRVNTOiB7XHJcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIGVycm9yOiAnJywgbWVzc2FnZTogJycsIGxvYWRpbmc6IGZhbHNlfTtcclxuICAgIH1cclxuICAgIGNhc2UgU0hPV19NRVNTQUdFOiB7XHJcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIGVycm9yOiAnJywgbWVzc2FnZTogYWN0aW9uLnBheWxvYWQsIGxvYWRpbmc6IGZhbHNlfTtcclxuICAgIH1cclxuICAgIGNhc2UgRkVUQ0hfRVJST1I6IHtcclxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgbG9hZGluZzogZmFsc2UsIGVycm9yOiBhY3Rpb24ucGF5bG9hZCwgbWVzc2FnZTogJyd9O1xyXG4gICAgfVxyXG4gICAgY2FzZSBISURFX01FU1NBR0U6IHtcclxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgbG9hZGluZzogZmFsc2UsIGVycm9yOiAnJywgbWVzc2FnZTogJyd9O1xyXG4gICAgfVxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIERFTEVURV9DT05UQUNUX1NVQ0NFU1MsXHJcbiAgR0VUX0FsbF9DT05UQUNUX1NVQ0NFU1MsXHJcbiAgT05fQUREX0NPTlRBQ1RfU1VDQ0VTUyxcclxuICBVUERBVEVfQ09OVEFDVF9TVUNDRVNTXHJcbn0gZnJvbSBcIi4uLy4uL2NvbnN0YW50cy9BY3Rpb25UeXBlc1wiO1xyXG5cclxuY29uc3QgSU5JVF9TVEFURSA9IHtcclxuICBjb250YWN0TGlzdDogW10sXHJcbiAgc2VsZWN0ZWRDb250YWN0OiBbXVxyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IChzdGF0ZSA9IElOSVRfU1RBVEUsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHJcblxyXG4gICAgY2FzZSBHRVRfQWxsX0NPTlRBQ1RfU1VDQ0VTUzoge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGNvbnRhY3RMaXN0OiBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNhc2UgVVBEQVRFX0NPTlRBQ1RfU1VDQ0VTUzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBjb250YWN0TGlzdDogc3RhdGUuY29udGFjdExpc3QubWFwKChjb250YWN0KSA9PiBjb250YWN0LmlkID09PSBhY3Rpb24ucGF5bG9hZC5pZCA/IGFjdGlvbi5wYXlsb2FkIDogY29udGFjdCksXHJcbiAgICAgIH07XHJcblxyXG4gICAgY2FzZSBERUxFVEVfQ09OVEFDVF9TVUNDRVNTOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGNvbnRhY3RMaXN0OiBzdGF0ZS5jb250YWN0TGlzdC5maWx0ZXIoKGNvbnRhY3QpID0+IGNvbnRhY3QuaWQgIT09IGFjdGlvbi5wYXlsb2FkLmlkKSxcclxuICAgICAgfTtcclxuXHJcbiAgICBjYXNlIE9OX0FERF9DT05UQUNUX1NVQ0NFU1M6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY29udGFjdExpc3Q6IGFjdGlvbi5wYXlsb2FkLmNvbnRhY3Qoc3RhdGUuY29udGFjdExpc3QpLFxyXG4gICAgICB9O1xyXG5cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICBGRVRDSF9BTExfTk9URVNfU1VDQ0VTUyxcclxuICBHRVRfU1RJQ0tZLFxyXG4gIE5PVEVTX1VQREFURSxcclxuICBVUERBVEVfQUxMX05PVEVTX1NVQ0NFU1NcclxufSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzL0FjdGlvblR5cGVzXCI7XHJcblxyXG5jb25zdCBJTklUX1NUQVRFID0ge1xyXG4gIG5vdGVzTGlzdDogW11cclxufTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCAoc3RhdGUgPSBJTklUX1NUQVRFLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblxyXG4gICAgY2FzZSBHRVRfU1RJQ0tZOiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbm90ZXNMaXN0OiBhY3Rpb24ubm90ZXNMaXN0LFxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2FzZSBGRVRDSF9BTExfTk9URVNfU1VDQ0VTUzoge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIG5vdGVzTGlzdDogYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjYXNlIFVQREFURV9BTExfTk9URVNfU1VDQ0VTUzoge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIG5vdGVzTGlzdDogYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjYXNlIE5PVEVTX1VQREFURTpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBub3Rlc0xpc3Q6IGFjdGlvbi5ub3Rlc0xpc3QsXHJcbiAgICAgIH07XHJcblxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge1NXSVRDSF9MQU5HVUFHRSwgVE9HR0xFX0NPTExBUFNFRF9OQVYsIFdJTkRPV19XSURUSH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50cy9BY3Rpb25UeXBlc1wiO1xyXG5pbXBvcnQge1xyXG4gIE5BVl9TVFlMRSxcclxuICBOQVZfU1RZTEVfRklYRUQsXHJcbiAgU0VUX1BBVEhfTkFNRSxcclxuICBUSEVNRV9UWVBFLFxyXG4gIFRIRU1FX1RZUEVfU0VNSV9EQVJLXHJcbn0gZnJvbSBcIi4uLy4uL2NvbnN0YW50cy9UaGVtZVNldHRpbmdcIjtcclxuXHJcbmNvbnN0IGluaXRpYWxTZXR0aW5ncyA9IHtcclxuICBuYXZDb2xsYXBzZWQ6IHRydWUsXHJcbiAgbmF2U3R5bGU6IE5BVl9TVFlMRV9GSVhFRCxcclxuICB0aGVtZVR5cGU6IFRIRU1FX1RZUEVfU0VNSV9EQVJLLFxyXG4gIHBhdGhuYW1lOiAnJyxcclxuICB3aWR0aDogMTM2NyxcclxuICBpc0RpcmVjdGlvblJUTDogZmFsc2UsXHJcbiAgbG9jYWxlOiB7XHJcbiAgICBsYW5ndWFnZUlkOiAncnVzc2lhbicsXHJcbiAgICBsb2NhbGU6ICdydScsXHJcbiAgICBuYW1lOiAn0KDRg9GB0YHQutC40LknLFxyXG4gICAgaWNvbjogJ3J1J1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IHNldHRpbmdzID0gKHN0YXRlID0gaW5pdGlhbFNldHRpbmdzLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIFRPR0dMRV9DT0xMQVBTRURfTkFWOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIG5hdkNvbGxhcHNlZDogYWN0aW9uLm5hdkNvbGxhcHNlZFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBTRVRfUEFUSF9OQU1FOlxyXG4gICAgICBjb25zb2xlLmxvZyhhY3Rpb24pXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgcGF0aG5hbWU6IGFjdGlvbi5wYXRobmFtZVxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBXSU5ET1dfV0lEVEg6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgd2lkdGg6IGFjdGlvbi53aWR0aCxcclxuICAgICAgfTtcclxuICAgIGNhc2UgVEhFTUVfVFlQRTpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICB0aGVtZVR5cGU6IGFjdGlvbi50aGVtZVR5cGVcclxuICAgICAgfTtcclxuICAgIGNhc2UgTkFWX1NUWUxFOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIG5hdlN0eWxlOiBhY3Rpb24ubmF2U3R5bGVcclxuICAgICAgfTtcclxuICAgIGNhc2UgU1dJVENIX0xBTkdVQUdFOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGxvY2FsZTogYWN0aW9uLnBheWxvYWQsXHJcblxyXG4gICAgICB9O1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNldHRpbmdzO1xyXG4iLCJpbXBvcnQge2NvbWJpbmVSZWR1Y2Vyc30gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCBTZXR0aW5ncyBmcm9tIFwiLi9TZXR0aW5nc1wiO1xyXG5pbXBvcnQgQXV0aCBmcm9tIFwiLi9BdXRoXCI7XHJcbmltcG9ydCBOb3RlcyBmcm9tIFwiLi9Ob3Rlc1wiO1xyXG5pbXBvcnQgQ29udGFjdCBmcm9tIFwiLi9Db250YWN0XCI7XHJcbmltcG9ydCBDb21tb24gZnJvbSBcIi4vQ29tbW9uXCI7XHJcblxyXG5cclxuY29uc3QgcmVkdWNlcnMgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gIHNldHRpbmdzOiBTZXR0aW5ncyxcclxuICBhdXRoOiBBdXRoLFxyXG4gIG5vdGVzOiBOb3RlcyxcclxuICBjb250YWN0OiBDb250YWN0LFxyXG4gIGNvbW1vbjogQ29tbW9uLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXJzO1xyXG4iLCJpbXBvcnQge2FsbCwgY2FsbCwgZm9yaywgcHV0LCB0YWtlRXZlcnl9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuaW1wb3J0IHtcclxuICBhdXRoLFxyXG4gIGZhY2Vib29rQXV0aFByb3ZpZGVyLFxyXG4gIGdpdGh1YkF1dGhQcm92aWRlcixcclxuICBnb29nbGVBdXRoUHJvdmlkZXIsXHJcbiAgdHdpdHRlckF1dGhQcm92aWRlclxyXG59IGZyb20gXCIuLi8uLi9maXJlYmFzZUNvbmZpZy9pbmRleFwiO1xyXG5pbXBvcnQge3JlbW92ZUNvb2tpZSwgc2V0Q29va2llfSBmcm9tICcuLi8uLi91dGlsL3Nlc3Npb24nO1xyXG5pbXBvcnQge1xyXG4gIFNJR05JTl9GQUNFQk9PS19VU0VSLFxyXG4gIFNJR05JTl9HSVRIVUJfVVNFUixcclxuICBTSUdOSU5fR09PR0xFX1VTRVIsXHJcbiAgU0lHTklOX1RXSVRURVJfVVNFUixcclxuICBTSUdOSU5fVVNFUixcclxuICBTSUdOT1VUX1VTRVIsXHJcbiAgU0lHTlVQX1VTRVJcclxufSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzL0FjdGlvblR5cGVzXCI7XHJcbmltcG9ydCB7c2hvd0F1dGhNZXNzYWdlLCB1c2VyU2lnbkluU3VjY2VzcywgdXNlclNpZ25PdXRTdWNjZXNzLCB1c2VyU2lnblVwU3VjY2Vzc30gZnJvbSBcIi4uLy4uL3JlZHV4L2FjdGlvbnMvQXV0aFwiO1xyXG5pbXBvcnQge1xyXG4gIHVzZXJGYWNlYm9va1NpZ25JblN1Y2Nlc3MsXHJcbiAgdXNlckdpdGh1YlNpZ25JblN1Y2Nlc3MsXHJcbiAgdXNlckdvb2dsZVNpZ25JblN1Y2Nlc3MsXHJcbiAgdXNlclR3aXR0ZXJTaWduSW5TdWNjZXNzXHJcbn0gZnJvbSBcIi4uL2FjdGlvbnMvQXV0aFwiO1xyXG5cclxuY29uc3QgY3JlYXRlVXNlcldpdGhFbWFpbFBhc3N3b3JkUmVxdWVzdCA9IGFzeW5jIChlbWFpbCwgcGFzc3dvcmQpID0+XHJcbiAgYXdhaXQgIGF1dGguY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZClcclxuICAgIC50aGVuKGF1dGhVc2VyID0+IGF1dGhVc2VyKVxyXG4gICAgLmNhdGNoKGVycm9yID0+IGVycm9yKTtcclxuXHJcbmNvbnN0IHNpZ25JblVzZXJXaXRoRW1haWxQYXNzd29yZFJlcXVlc3QgPSBhc3luYyAoZW1haWwsIHBhc3N3b3JkKSA9PlxyXG4gIGF3YWl0ICBhdXRoLnNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZClcclxuICAgIC50aGVuKGF1dGhVc2VyID0+IGF1dGhVc2VyKVxyXG4gICAgLmNhdGNoKGVycm9yID0+IGVycm9yKTtcclxuXHJcbmNvbnN0IHNpZ25PdXRSZXF1ZXN0ID0gYXN5bmMgKCkgPT5cclxuICBhd2FpdCAgYXV0aC5zaWduT3V0KClcclxuICAgIC50aGVuKGF1dGhVc2VyID0+IGF1dGhVc2VyKVxyXG4gICAgLmNhdGNoKGVycm9yID0+IGVycm9yKTtcclxuXHJcblxyXG5jb25zdCBzaWduSW5Vc2VyV2l0aEdvb2dsZVJlcXVlc3QgPSBhc3luYyAoKSA9PlxyXG4gIGF3YWl0ICBhdXRoLnNpZ25JbldpdGhQb3B1cChnb29nbGVBdXRoUHJvdmlkZXIpXHJcbiAgICAudGhlbihhdXRoVXNlciA9PiBhdXRoVXNlcilcclxuICAgIC5jYXRjaChlcnJvciA9PiBlcnJvcik7XHJcblxyXG5jb25zdCBzaWduSW5Vc2VyV2l0aEZhY2Vib29rUmVxdWVzdCA9IGFzeW5jICgpID0+XHJcbiAgYXdhaXQgIGF1dGguc2lnbkluV2l0aFBvcHVwKGZhY2Vib29rQXV0aFByb3ZpZGVyKVxyXG4gICAgLnRoZW4oYXV0aFVzZXIgPT4gYXV0aFVzZXIpXHJcbiAgICAuY2F0Y2goZXJyb3IgPT4gZXJyb3IpO1xyXG5cclxuY29uc3Qgc2lnbkluVXNlcldpdGhHaXRodWJSZXF1ZXN0ID0gYXN5bmMgKCkgPT5cclxuICBhd2FpdCAgYXV0aC5zaWduSW5XaXRoUG9wdXAoZ2l0aHViQXV0aFByb3ZpZGVyKVxyXG4gICAgLnRoZW4oYXV0aFVzZXIgPT4gYXV0aFVzZXIpXHJcbiAgICAuY2F0Y2goZXJyb3IgPT4gZXJyb3IpO1xyXG5cclxuY29uc3Qgc2lnbkluVXNlcldpdGhUd2l0dGVyUmVxdWVzdCA9IGFzeW5jICgpID0+XHJcbiAgYXdhaXQgIGF1dGguc2lnbkluV2l0aFBvcHVwKHR3aXR0ZXJBdXRoUHJvdmlkZXIpXHJcbiAgICAudGhlbihhdXRoVXNlciA9PiBhdXRoVXNlcilcclxuICAgIC5jYXRjaChlcnJvciA9PiBlcnJvcik7XHJcblxyXG5mdW5jdGlvbiogY3JlYXRlVXNlcldpdGhFbWFpbFBhc3N3b3JkKHtwYXlsb2FkfSkge1xyXG4gIGNvbnN0IHtlbWFpbCwgcGFzc3dvcmR9ID0gcGF5bG9hZDtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgc2lnblVwVXNlciA9IHlpZWxkIGNhbGwoY3JlYXRlVXNlcldpdGhFbWFpbFBhc3N3b3JkUmVxdWVzdCwgZW1haWwsIHBhc3N3b3JkKTtcclxuICAgIGlmIChzaWduVXBVc2VyLm1lc3NhZ2UpIHtcclxuICAgICAgeWllbGQgcHV0KHNob3dBdXRoTWVzc2FnZShzaWduVXBVc2VyLm1lc3NhZ2UpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldENvb2tpZSgndXNlcl9pZCcsIHNpZ25VcFVzZXIudXNlci51aWQpO1xyXG4gICAgICB5aWVsZCBwdXQodXNlclNpZ25VcFN1Y2Nlc3Moc2lnblVwVXNlci51c2VyLnVpZCkpO1xyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICB5aWVsZCBwdXQoc2hvd0F1dGhNZXNzYWdlKGVycm9yKSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogc2lnbkluVXNlcldpdGhHb29nbGUoKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHNpZ25VcFVzZXIgPSB5aWVsZCBjYWxsKHNpZ25JblVzZXJXaXRoR29vZ2xlUmVxdWVzdCk7XHJcbiAgICBpZiAoc2lnblVwVXNlci5tZXNzYWdlKSB7XHJcbiAgICAgIHlpZWxkIHB1dChzaG93QXV0aE1lc3NhZ2Uoc2lnblVwVXNlci5tZXNzYWdlKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRDb29raWUoJ3VzZXJfaWQnLCBzaWduVXBVc2VyLnVzZXIudWlkKTtcclxuICAgICAgeWllbGQgcHV0KHVzZXJHb29nbGVTaWduSW5TdWNjZXNzKHNpZ25VcFVzZXIudXNlci51aWQpKTtcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgeWllbGQgcHV0KHNob3dBdXRoTWVzc2FnZShlcnJvcikpO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uKiBzaWduSW5Vc2VyV2l0aEZhY2Vib29rKCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzaWduVXBVc2VyID0geWllbGQgY2FsbChzaWduSW5Vc2VyV2l0aEZhY2Vib29rUmVxdWVzdCk7XHJcbiAgICBpZiAoc2lnblVwVXNlci5tZXNzYWdlKSB7XHJcbiAgICAgIHlpZWxkIHB1dChzaG93QXV0aE1lc3NhZ2Uoc2lnblVwVXNlci5tZXNzYWdlKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRDb29raWUoJ3VzZXJfaWQnLCBzaWduVXBVc2VyLnVzZXIudWlkKTtcclxuICAgICAgeWllbGQgcHV0KHVzZXJGYWNlYm9va1NpZ25JblN1Y2Nlc3Moc2lnblVwVXNlci51c2VyLnVpZCkpO1xyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICB5aWVsZCBwdXQoc2hvd0F1dGhNZXNzYWdlKGVycm9yKSk7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24qIHNpZ25JblVzZXJXaXRoR2l0aHViKCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzaWduVXBVc2VyID0geWllbGQgY2FsbChzaWduSW5Vc2VyV2l0aEdpdGh1YlJlcXVlc3QpO1xyXG4gICAgaWYgKHNpZ25VcFVzZXIubWVzc2FnZSkge1xyXG4gICAgICB5aWVsZCBwdXQoc2hvd0F1dGhNZXNzYWdlKHNpZ25VcFVzZXIubWVzc2FnZSkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0Q29va2llKCd1c2VyX2lkJywgc2lnblVwVXNlci51c2VyLnVpZCk7XHJcbiAgICAgIHlpZWxkIHB1dCh1c2VyR2l0aHViU2lnbkluU3VjY2VzcyhzaWduVXBVc2VyLnVzZXIudWlkKSk7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHlpZWxkIHB1dChzaG93QXV0aE1lc3NhZ2UoZXJyb3IpKTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiogc2lnbkluVXNlcldpdGhUd2l0dGVyKCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzaWduVXBVc2VyID0geWllbGQgY2FsbChzaWduSW5Vc2VyV2l0aFR3aXR0ZXJSZXF1ZXN0KTtcclxuICAgIGlmIChzaWduVXBVc2VyLm1lc3NhZ2UpIHtcclxuICAgICAgaWYgKHNpZ25VcFVzZXIubWVzc2FnZS5sZW5ndGggPiAxMDApIHtcclxuICAgICAgICB5aWVsZCBwdXQoc2hvd0F1dGhNZXNzYWdlKCdZb3VyIHJlcXVlc3QgaGFzIGJlZW4gY2FuY2VsZWQuJykpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHlpZWxkIHB1dChzaG93QXV0aE1lc3NhZ2Uoc2lnblVwVXNlci5tZXNzYWdlKSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldENvb2tpZSgndXNlcl9pZCcsIHNpZ25VcFVzZXIudXNlci51aWQpO1xyXG4gICAgICB5aWVsZCBwdXQodXNlclR3aXR0ZXJTaWduSW5TdWNjZXNzKHNpZ25VcFVzZXIudXNlci51aWQpKTtcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgeWllbGQgcHV0KHNob3dBdXRoTWVzc2FnZShlcnJvcikpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHNpZ25JblVzZXJXaXRoRW1haWxQYXNzd29yZCh7cGF5bG9hZH0pIHtcclxuICBjb25zdCB7ZW1haWwsIHBhc3N3b3JkfSA9IHBheWxvYWQ7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHNpZ25JblVzZXIgPSB5aWVsZCBjYWxsKHNpZ25JblVzZXJXaXRoRW1haWxQYXNzd29yZFJlcXVlc3QsIGVtYWlsLCBwYXNzd29yZCk7XHJcbiAgICBpZiAoc2lnbkluVXNlci5tZXNzYWdlKSB7XHJcbiAgICAgIHlpZWxkIHB1dChzaG93QXV0aE1lc3NhZ2Uoc2lnbkluVXNlci5tZXNzYWdlKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRDb29raWUoJ3VzZXJfaWQnLCBzaWduSW5Vc2VyLnVzZXIudWlkKTtcclxuICAgICAgeWllbGQgcHV0KHVzZXJTaWduSW5TdWNjZXNzKHNpZ25JblVzZXIudXNlci51aWQpKTtcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgeWllbGQgcHV0KHNob3dBdXRoTWVzc2FnZShlcnJvcikpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHNpZ25PdXQoKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHNpZ25PdXRVc2VyID0geWllbGQgY2FsbChzaWduT3V0UmVxdWVzdCk7XHJcbiAgICBpZiAoc2lnbk91dFVzZXIgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICByZW1vdmVDb29raWUoJ3VzZXJfaWQnKTtcclxuICAgICAgeWllbGQgcHV0KHVzZXJTaWduT3V0U3VjY2VzcyhzaWduT3V0VXNlcikpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgeWllbGQgcHV0KHNob3dBdXRoTWVzc2FnZShzaWduT3V0VXNlci5tZXNzYWdlKSk7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHlpZWxkIHB1dChzaG93QXV0aE1lc3NhZ2UoZXJyb3IpKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiogY3JlYXRlVXNlckFjY291bnQoKSB7XHJcbiAgeWllbGQgdGFrZUV2ZXJ5KFNJR05VUF9VU0VSLCBjcmVhdGVVc2VyV2l0aEVtYWlsUGFzc3dvcmQpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24qIHNpZ25JbldpdGhHb29nbGUoKSB7XHJcbiAgeWllbGQgdGFrZUV2ZXJ5KFNJR05JTl9HT09HTEVfVVNFUiwgc2lnbkluVXNlcldpdGhHb29nbGUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24qIHNpZ25JbldpdGhGYWNlYm9vaygpIHtcclxuICB5aWVsZCB0YWtlRXZlcnkoU0lHTklOX0ZBQ0VCT09LX1VTRVIsIHNpZ25JblVzZXJXaXRoRmFjZWJvb2spO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24qIHNpZ25JbldpdGhUd2l0dGVyKCkge1xyXG4gIHlpZWxkIHRha2VFdmVyeShTSUdOSU5fVFdJVFRFUl9VU0VSLCBzaWduSW5Vc2VyV2l0aFR3aXR0ZXIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24qIHNpZ25JbldpdGhHaXRodWIoKSB7XHJcbiAgeWllbGQgdGFrZUV2ZXJ5KFNJR05JTl9HSVRIVUJfVVNFUiwgc2lnbkluVXNlcldpdGhHaXRodWIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24qIHNpZ25JblVzZXIoKSB7XHJcbiAgeWllbGQgdGFrZUV2ZXJ5KFNJR05JTl9VU0VSLCBzaWduSW5Vc2VyV2l0aEVtYWlsUGFzc3dvcmQpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24qIHNpZ25PdXRVc2VyKCkge1xyXG4gIHlpZWxkIHRha2VFdmVyeShTSUdOT1VUX1VTRVIsIHNpZ25PdXQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcm9vdFNhZ2EoKSB7XHJcbiAgeWllbGQgYWxsKFtmb3JrKHNpZ25JblVzZXIpLFxyXG4gICAgZm9yayhjcmVhdGVVc2VyQWNjb3VudCksXHJcbiAgICBmb3JrKHNpZ25JbldpdGhHb29nbGUpLFxyXG4gICAgZm9yayhzaWduSW5XaXRoRmFjZWJvb2spLFxyXG4gICAgZm9yayhzaWduSW5XaXRoVHdpdHRlciksXHJcbiAgICBmb3JrKHNpZ25JbldpdGhHaXRodWIpLFxyXG4gICAgZm9yayhzaWduT3V0VXNlcildKTtcclxufVxyXG4iLCJpbXBvcnQge2FsbCwgY2FsbCwgZm9yaywgcHV0LCB0YWtlRXZlcnl9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuaW1wb3J0IHtmZXRjaFN0aWNreVN1Y2Nlc3N9IGZyb20gJy4uL2FjdGlvbnMvTm90ZXMnO1xyXG5pbXBvcnQge2RhdGFiYXNlfSBmcm9tICcuLi8uLi9maXJlYmFzZUNvbmZpZy9pbmRleCc7XHJcbmltcG9ydCB7R0VUX1NUSUNLWSwgTk9URVNfVVBEQVRFfSBmcm9tICcuLi8uLi9jb25zdGFudHMvQWN0aW9uVHlwZXMnO1xyXG5pbXBvcnQge2ZldGNoRXJyb3J9IGZyb20gXCIuLi9hY3Rpb25zL0NvbW1vblwiO1xyXG5cclxuY29uc3QgZ2V0U3RpY2t5ID0gYXN5bmMgKCkgPT5cclxuICBhd2FpdCBkYXRhYmFzZS5yZWYoJ25vdGVzJykub25jZSgndmFsdWUnKVxyXG4gICAgLnRoZW4oKHNuYXBzaG90KSA9PiB7XHJcbiAgICAgIGNvbnN0IG5vdGVzcyA9IFtdO1xyXG4gICAgICBzbmFwc2hvdC5mb3JFYWNoKChyYXdEYXRhKSA9PiB7XHJcbiAgICAgICAgbm90ZXNzLnB1c2gocmF3RGF0YS52YWwoKSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gbm90ZXNzO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaChlcnJvciA9PiBlcnJvcik7XHJcblxyXG5cclxuY29uc3QgdXBkYXRlU3RpY2t5UmVxdWVzdCA9IGFzeW5jICh7bm90ZXNMaXN0fSkgPT4ge1xyXG4gIGF3YWl0ICBkYXRhYmFzZS5yZWYoJ25vdGVzJykuc2V0KG5vdGVzTGlzdClcclxuICAgIC50aGVuKG5vdGVzTGlzdCA9PiBub3Rlc0xpc3QpXHJcbiAgICAuY2F0Y2gobm90ZXNMaXN0ID0+IG5vdGVzTGlzdCk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiogZmV0Y2hTdGlja3lSZXF1ZXN0KCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBmZXRjaGVkU3RpY2t5ID0geWllbGQgY2FsbChnZXRTdGlja3kpO1xyXG4gICAgeWllbGQgcHV0KGZldGNoU3RpY2t5U3VjY2VzcyhmZXRjaGVkU3RpY2t5KSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHlpZWxkIHB1dChmZXRjaEVycm9yKGVycm9yKSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24qIGZldGNoU3RpY2t5KCkge1xyXG4gIHlpZWxkIHRha2VFdmVyeShHRVRfU1RJQ0tZLCBmZXRjaFN0aWNreVJlcXVlc3QpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24qIHVwZGF0ZVN0aWNreSgpIHtcclxuICB5aWVsZCB0YWtlRXZlcnkoTk9URVNfVVBEQVRFLCB1cGRhdGVTdGlja3lSZXF1ZXN0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHJvb3RTYWdhKCkge1xyXG4gIHlpZWxkIGFsbChbZm9yayhmZXRjaFN0aWNreSksXHJcbiAgICBmb3JrKHVwZGF0ZVN0aWNreSldKTtcclxufVxyXG4iLCJpbXBvcnQge2FsbH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5pbXBvcnQgYXV0aFNhZ2FzIGZyb20gXCIuL0F1dGhcIjtcclxuaW1wb3J0IG5vdGVzU2FnYXMgZnJvbSBcIi4vTm90ZXNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiByb290U2FnYShnZXRTdGF0ZSkge1xyXG4gIHlpZWxkIGFsbChbXHJcbiAgICBhdXRoU2FnYXMoKSxcclxuICAgIG5vdGVzU2FnYXMoKVxyXG4gIF0pO1xyXG59XHJcbiIsImltcG9ydCB7YXBwbHlNaWRkbGV3YXJlLCBjcmVhdGVTdG9yZX0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgY3JlYXRlU2FnYU1pZGRsZXdhcmUsIHtFTkR9IGZyb20gJ3JlZHV4LXNhZ2EnO1xyXG5pbXBvcnQgdGh1bmsgZnJvbSAncmVkdXgtdGh1bmsnO1xyXG5cclxuaW1wb3J0IHJlZHVjZXJzIGZyb20gJy4uL3JlZHVjZXJzJztcclxuXHJcbmltcG9ydCByb290U2FnYSBmcm9tICcuLi9zYWdhcyc7XHJcblxyXG5jb25zdCBzYWdhTWlkZGxld2FyZSA9IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlKCk7XHJcblxyXG5jb25zdCBiaW5kTWlkZGxld2FyZSA9IG1pZGRsZXdhcmUgPT4ge1xyXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgICBjb25zdCB7Y29tcG9zZVdpdGhEZXZUb29sc30gPSByZXF1aXJlKCdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nKTtcclxuICAgIHJldHVybiBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlKSk7XHJcbiAgfVxyXG4gIHJldHVybiBhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZSk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBjb25maWd1cmVTdG9yZShpbml0aWFsU3RhdGUgPSB7fSkge1xyXG4gIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUoXHJcbiAgICByZWR1Y2VycyxcclxuICAgIGluaXRpYWxTdGF0ZSxcclxuICAgIGJpbmRNaWRkbGV3YXJlKFt0aHVuaywgc2FnYU1pZGRsZXdhcmVdKVxyXG4gICk7XHJcblxyXG4gIHN0b3JlLnJ1blNhZ2EgPSAoKSA9PiB7XHJcbiAgICAvLyBBdm9pZCBydW5uaW5nIHR3aWNlXHJcbiAgICBpZiAoc3RvcmUuc2FnYSkgcmV0dXJuO1xyXG4gICAgc3RvcmUuc2FnYSA9IHNhZ2FNaWRkbGV3YXJlLnJ1bihyb290U2FnYSk7XHJcbiAgfTtcclxuXHJcbiAgc3RvcmUuc3RvcFNhZ2EgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAvLyBBdm9pZCBydW5uaW5nIHR3aWNlXHJcbiAgICBpZiAoIXN0b3JlLnNhZ2EpIHJldHVybjtcclxuICAgIHN0b3JlLmRpc3BhdGNoKEVORCk7XHJcbiAgICBhd2FpdCBzdG9yZS5zYWdhLmRvbmU7XHJcbiAgICBzdG9yZS5zYWdhID0gbnVsbDtcclxuICB9O1xyXG5cclxuICBzdG9yZS5leGVjU2FnYVRhc2tzID0gYXN5bmMgKGlzU2VydmVyLCB0YXNrcykgPT4ge1xyXG4gICAgLy8gcnVuIHNhZ2FcclxuICAgIHN0b3JlLnJ1blNhZ2EoKTtcclxuICAgIC8vIGRpc3BhdGNoIHNhZ2EgdGFza3NcclxuICAgIHRhc2tzKHN0b3JlLmRpc3BhdGNoKTtcclxuICAgIC8vIFN0b3AgcnVubmluZyBhbmQgd2FpdCBmb3IgdGhlIHRhc2tzIHRvIGJlIGRvbmVcclxuICAgIGF3YWl0IHN0b3JlLnN0b3BTYWdhKCk7XHJcbiAgICAvLyBSZS1ydW4gb24gY2xpZW50IHNpZGVcclxuICAgIGlmICghaXNTZXJ2ZXIpIHtcclxuICAgICAgc3RvcmUucnVuU2FnYSgpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIC8vIEluaXRpYWwgcnVuXHJcbiAgc3RvcmUucnVuU2FnYSgpO1xyXG5cclxuICByZXR1cm4gc3RvcmU7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbmZpZ3VyZVN0b3JlO1xyXG4iLCJpbXBvcnQgY29va2llIGZyb20gJ2pzLWNvb2tpZSc7XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0Q29va2llID0gKGtleSwgdmFsdWUpID0+IHtcclxuICBpZiAocHJvY2Vzcy5icm93c2VyKSB7XHJcbiAgICBjb29raWUuc2V0KGtleSwgdmFsdWUsIHtcclxuICAgICAgZXhwaXJlczogMSxcclxuICAgICAgcGF0aDogJy8nLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbW92ZUNvb2tpZSA9IGtleSA9PiB7XHJcbiAgaWYgKHByb2Nlc3MuYnJvd3Nlcikge1xyXG4gICAgY29va2llLnJlbW92ZShrZXksIHtcclxuICAgICAgZXhwaXJlczogMSxcclxuICAgIH0pO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDb29raWUgPSAoa2V5LCByZXEpID0+IHtcclxuICByZXR1cm4gcHJvY2Vzcy5icm93c2VyXHJcbiAgICA/IGdldENvb2tpZUZyb21Ccm93c2VyKGtleSlcclxuICAgIDogZ2V0Q29va2llRnJvbVNlcnZlcihrZXksIHJlcSk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRDb29raWVGcm9tQnJvd3NlciA9IGtleSA9PiB7XHJcbiAgcmV0dXJuIGNvb2tpZS5nZXQoa2V5KTtcclxufTtcclxuXHJcbmNvbnN0IGdldENvb2tpZUZyb21TZXJ2ZXIgPSAoa2V5LCByZXEpID0+IHtcclxuICBpZiAoIXJlcS5oZWFkZXJzLmNvb2tpZSkge1xyXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICB9XHJcbiAgY29uc3QgcmF3Q29va2llID0gcmVxLmhlYWRlcnMuY29va2llXHJcbiAgICAuc3BsaXQoJzsnKVxyXG4gICAgLmZpbmQoYyA9PiBjLnRyaW0oKS5zdGFydHNXaXRoKGAke2tleX09YCkpO1xyXG4gIGlmICghcmF3Q29va2llKSB7XHJcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gIH1cclxuICByZXR1cm4gcmF3Q29va2llLnNwbGl0KCc9JylbMV07XHJcbn07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzLWNvb2tpZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJlZHV4LXdyYXBwZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2EvZWZmZWN0c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC10aHVua1wiKTsiXSwic291cmNlUm9vdCI6IiJ9