"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addOrder = addOrder;
exports.getOrder = getOrder;
exports.getOrderDetails = getOrderDetails;
exports.cancleOrder = cancleOrder;

var _request = _interopRequireDefault(require("@/utils/request"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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


function getOrder(pageInfo) {
  return regeneratorRuntime.async(function getOrder$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          console.log(pageInfo);
          return _context2.abrupt("return", _request["default"].get("/orders", _objectSpread({}, pageInfo)));

        case 2:
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