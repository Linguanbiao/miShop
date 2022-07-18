"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  saveUserName: function saveUserName(ctx, payload) {
    ctx.commit("saveUserName", payload);
  },
  saveCartCount: function saveCartCount(ctx, payload) {
    ctx.commit("saveCartCount", payload);
  }
};
exports["default"] = _default;