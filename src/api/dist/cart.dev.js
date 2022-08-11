"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCartSum = getCartSum;
exports.addCart = addCart;
exports.getCartList = getCartList;
exports.updateCartCount = updateCartCount;
exports.deleteCartProduct = deleteCartProduct;
exports.selectAll = selectAll;
exports.unSelectAll = unSelectAll;

var _request = _interopRequireDefault(require("@/utils/request"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
} // 添加购物车


function addCart(product) {
  return regeneratorRuntime.async(function addCart$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          return _context2.abrupt("return", _request["default"].post('/carts', _objectSpread({}, product)));

        case 1:
        case "end":
          return _context2.stop();
      }
    }
  });
} //获取购物车 List 列表


function getCartList() {
  return regeneratorRuntime.async(function getCartList$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          return _context3.abrupt("return", _request["default"].get('/carts'));

        case 1:
        case "end":
          return _context3.stop();
      }
    }
  });
} //更新购物车某个产品的数量


function updateCartCount(id, info) {
  return regeneratorRuntime.async(function updateCartCount$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          return _context4.abrupt("return", _request["default"].put("/carts/".concat(id), _objectSpread({}, info)));

        case 1:
        case "end":
          return _context4.stop();
      }
    }
  });
} // 移除购物车某个产品


function deleteCartProduct(id) {
  return regeneratorRuntime.async(function deleteCartProduct$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          return _context5.abrupt("return", _request["default"]["delete"]("/carts/".concat(id)));

        case 1:
        case "end":
          return _context5.stop();
      }
    }
  });
} // 购物车全部选中


function selectAll() {
  return regeneratorRuntime.async(function selectAll$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          return _context6.abrupt("return", _request["default"].put('/carts/selectAll'));

        case 1:
        case "end":
          return _context6.stop();
      }
    }
  });
} // 购物车全部选不中


function unSelectAll() {
  return regeneratorRuntime.async(function unSelectAll$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          return _context7.abrupt("return", _request["default"].put('/carts/unSelectAll'));

        case 1:
        case "end":
          return _context7.stop();
      }
    }
  });
}