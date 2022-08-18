// 支付相关的接口
import request from "@/utils/request"
//  创建一个支付
export async function Pay(info) {
    return request.post('/pay', {
        ...info
    })
}