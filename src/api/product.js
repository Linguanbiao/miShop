// 请求手机产品
import request from "@/utils/request"
export async function getProduct(categoryId = 100012, pageNumber = 1, pageSize = 8) {
    return request.get("/products", {
        params: {
            categoryId: categoryId,
            pageNumber: pageNumber,
            pageSize: pageSize
        }
    })
}

// 根据商品的 id 获取商品的详情
export async function getProductInfo(id) {
    return request.get(`/products/${id}`)
}