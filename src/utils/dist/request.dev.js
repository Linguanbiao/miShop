"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _elementUi = require("element-ui");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//  封装一个 ajax 请求
var ins = _axios["default"].create(); //  创建一个 axios 实例
// 设置请求响应拦截


ins.interceptors.response.use(function (resp) {
  if (resp.data.status === 0) {
    return resp.data.data;
  } else if (resp.data.status === 10) {
    if (location.pathname != '/home') {
      window.location.href = '/#/login';
    }
  } else {
    _elementUi.Message.error({
      message: resp.data.msg
    });

    return Promise.reject(resp);
  }
});
ins.defaults.baseURL = '/api'; // 设置默认请求时间
// ins.defaults.timeout = 8000 // 设置请求超时时间为 8 秒

var _default = ins;
exports["default"] = _default;