"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _index = _interopRequireDefault(require("../views/homepage/index.vue"));

var _index2 = _interopRequireDefault(require("../views/order/index.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

_vue["default"].use(_vueRouter["default"]);

var routes = [{
  path: "/",
  name: "home",
  redirect: '/home',
  component: _index["default"],
  children: [{
    path: '/home',
    name: 'index',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('@/views/homepage/HomePage.vue'));
      });
    }
  }, {
    path: '/product/:id',
    name: 'product',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('@/views/homepage/ProductPage.vue'));
      });
    }
  }, {
    path: '/detail/:id',
    name: 'detail',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('@/views/homepage/DetailPage.vue'));
      });
    }
  }]
}, {
  path: "/order",
  name: "order",
  redirect: '/list',
  component: _index2["default"],
  children: [{
    path: '/order/list',
    name: 'order-list',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('@/views/order/OrderListPage.vue'));
      });
    }
  }, {
    path: '/order/confirm',
    name: 'order-confirm',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('@/views/order/OrderConfirmPage.vue'));
      });
    }
  }, {
    path: '/order/pay',
    name: 'order-pay',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('@/views/order/OrderPayPage.vue'));
      });
    }
  }]
}, {
  path: "/cart",
  name: "cart",
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('@/views/cart/index.vue'));
    });
  }
}, {
  path: "/login",
  name: "login",
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('@/views/login/index.vue'));
    });
  }
}];
var router = new _vueRouter["default"]({
  mode: "history",
  base: process.env.BASE_URL,
  routes: routes
});
var _default = router;
exports["default"] = _default;