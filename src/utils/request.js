//  封装一个 ajax 请求
import axios from "axios";
import {
    Message
} from "element-ui";

const ins = axios.create() //  创建一个 axios 实例
// 设置请求响应拦截
ins.interceptors.response.use(function (response) {
    let res = response
    if (res.status === 0) {
        return res.data
    } else if (res.status === 10) {
        window.location.href = '/#/login'
    } else {
        this.$message.error(res.msg)
    }
})
ins.defaults.baseURL = '/api' // 设置默认请求时间
ins.defaults.timeout = 8000 // 设置请求超时时间为 8 秒
export default ins