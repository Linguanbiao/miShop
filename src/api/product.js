// 请求手机产品
import request from "@/utils/request"
export async function getProduct() {
    return request.get("/products", {
        params: {
            categoryId: "100012"
        }
    })
}