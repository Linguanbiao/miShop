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