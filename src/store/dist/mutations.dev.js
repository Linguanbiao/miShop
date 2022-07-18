"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  saveUserName: function saveUserName(state, payload) {
    state.useName = payload;
  },
  saveCartCount: function saveCartCount(state, payload) {
    state.cartCount = payload;
  }
};
exports["default"] = _default;