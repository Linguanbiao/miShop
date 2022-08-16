"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addOrder = addOrder;
exports.deleteOrder = deleteOrder;
exports.getOrderDetails = getOrderDetails;
exports.cancleOrder = cancleOrder;

var _request = _interopRequireDefault(require("@/utils/request"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//  创建一个订单
function addOrder(shippingId) {
  return regeneratorRuntime.async(function addOrder$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", _request["default"].post('/orders', {
            shippingId: shippingId
          }));

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
} // 获取订单列表


function deleteOrder() {
  var pageSize,
      pageNum,
      _args2 = arguments;
  return regeneratorRuntime.async(function deleteOrder$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          pageSize = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : 10;
          pageNum = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : 1;
          return _context2.abrupt("return", _request["default"].get("/orders", {
            pageSize: pageSize,
            pageNum: pageNum
          }));

        case 3:
        case "end":
          return _context2.stop();
      }
    }
  });
} //获取订单详情


function getOrderDetails(orderNo) {
  return regeneratorRuntime.async(function getOrderDetails$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          return _context3.abrupt("return", _request["default"].get("/orders/".concat(orderNo)));

        case 1:
        case "end":
          return _context3.stop();
      }
    }
  });
} //取消订单


function cancleOrder(orderNo) {
  return regeneratorRuntime.async(function cancleOrder$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          return _context4.abrupt("return", _request["default"].put("/orders/".concat(orderNo)));

        case 1:
        case "end":
          return _context4.stop();
      }
    }
  });
}