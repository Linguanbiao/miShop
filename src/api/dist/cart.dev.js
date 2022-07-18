"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCartSum = getCartSum;

var _request = _interopRequireDefault(require("@/utils/request"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//  获取购物车的商品数量总和
function getCartSum() {
  return regeneratorRuntime.async(function getCartSum$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", _request["default"].get('/carts/products/sum'));

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
}