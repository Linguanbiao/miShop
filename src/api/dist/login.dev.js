"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postLoginInfo = postLoginInfo;
exports.whoAmI = whoAmI;
exports.register = register;

var _request = _interopRequireDefault(require("@/utils/request"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function postLoginInfo(loginInfo) {
  return regeneratorRuntime.async(function postLoginInfo$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", _request["default"].post('/user/login', _objectSpread({}, loginInfo)));

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
} // 获取用户的信息


function whoAmI() {
  return regeneratorRuntime.async(function whoAmI$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          return _context2.abrupt("return", _request["default"].get('/user'));

        case 1:
        case "end":
          return _context2.stop();
      }
    }
  });
} //用户注册


function register(registerInfo) {
  return regeneratorRuntime.async(function register$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          return _context3.abrupt("return", _request["default"].post('/user/register', _objectSpread({}, registerInfo)));

        case 1:
        case "end":
          return _context3.stop();
      }
    }
  });
}