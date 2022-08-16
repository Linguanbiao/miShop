// 地址相关的请求
import request from "@/utils/request"
//新增地址
export async function addAddress(AddressInfo) {
    return request.post('/shippings', {
        ...AddressInfo
    })
}

// 删除收货地址
export async function deleteAddress(id) {
    return request.delete(`/shippings/${id}`)
}

//登陆状态更新地址
export async function updateAddress(id, info) {
    return request.put(`/shippings/${id}`, {
        ...info
    })
}

// 选中查看具体的地址
export async function selectdAddress(id) {
    return request.get(`/shippings/${id}`)
}

//地址列表
export async function addressList(pageNum = 1, pageSize = 10) {
    return request.get('/shippings', {
        pageNum,
        pageSize
    })
}