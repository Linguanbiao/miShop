import request from "@/utils/request"
//  获取购物车的商品数量总和
export async function getCartSum() {
    return request.get('/carts/products/sum')
}

// 添加购物车
export async function addCart(product) {
    return request.post('/carts', {
        ...product
    })

}

//获取购物车 List 列表
export async function getCartList() {
    return request.get('/carts')
}

//更新购物车某个产品的数量
export async function updateCartCount(id, info) {
    return request.put(`/carts/${id}`, {
        ...info
    })
}

// 移除购物车某个产品
export async function deleteCartProduct(id) {
    return request.delete(`/carts/${id}`)
}

// 购物车全部选中
export async function selectAll() {
    return request.put('/carts/selectAll')
}

// 购物车全部选不中
export async function unSelectAll() {
    return request.put('/carts/unSelectAll')
}