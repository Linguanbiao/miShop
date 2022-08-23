import request from "@/utils/request"
//  创建一个订单
export async function addOrder(shippingId) {
    return request.post('/orders', {
        shippingId
    })
}

// 获取订单列表
export async function getOrder(pageSize = 10, pageNum = 1) {
    return request.get("/orders", {
        pageSize,
        pageNum
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