import request from "@/utils/request"
//  创建一个订单
export async function addOrder(shippingId) {
    return request.post('/orders', {
        shippingId
    })
}

// 获取订单列表
export async function getOrder(pageInfo) {
    console.log(pageInfo)
    return request.get("/orders", {
        ...pageInfo
    })
}

//获取订单详情
export async function getOrderDetails(orderNo) {
    return request.get(`/orders/${orderNo}`)
}

//取消订单
export async function cancleOrder(orderNo) {
    return request.put(`/orders/${orderNo}`)
}