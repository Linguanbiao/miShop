"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vuex = _interopRequireDefault(require("vuex"));

var _mutations = _interopRequireDefault(require("./mutations.js"));

var _actions = _interopRequireDefault(require("./actions.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vuex["default"]);

var state = {
  useName: '',
  // 登录的用户名
  cartCount: 0 // 商品的购物车数量

};

var _default = new _vuex["default"].Store({
  state: state,
  mutations: _mutations["default"],
  actions: _actions["default"]
});

exports["default"] = _default;