export default {
    saveUserName(ctx, payload) {
        ctx.commit("saveUserName", payload)
    },
    saveCartCount(ctx, payload) {
        ctx.commit("saveCartCount", payload)
    }
}