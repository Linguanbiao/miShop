import request from "@/utils/request"
//  获取购物车的商品数量总和
export async function getCartSum() {
    return request.get('/carts/products/sum')
}