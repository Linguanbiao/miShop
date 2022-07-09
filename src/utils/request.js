//  封装一个 ajax 请求
import axios from "axios";
import {
    Message
} from "element-ui";

const ins = axios.create() //  创建一个 axios 实例
// 设置请求响应拦截
ins.interceptors.response.use(function (resp) {
    if (resp.data.status === 0) {
        return resp.data.data
    } else if (resp.data.status === 10) {
        window.location.href('/#/login')
    } else {
        alert("发生了错误")
    }
})
ins.defaults.baseURL = '/api' // 设置默认请求时间
ins.defaults.timeout = 8000 // 设置请求超时时间为 8 秒
export default ins