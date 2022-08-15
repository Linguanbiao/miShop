// 登录的请求
import request from "@/utils/request"
export async function postLoginInfo(loginInfo) {
    return request.post('/user/login', {
        ...loginInfo
    })
}

// 获取用户的信息
export async function whoAmI() {
    return request.get('/user')
}

//用户注册
export async function register(registerInfo) {
    return request.post('/user/register', {
        ...registerInfo
    })
}

export async function loginOut() {
    return request.post('/user/logout')
}