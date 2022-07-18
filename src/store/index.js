import Vue from "vue";
import Vuex from "vuex";
import mutations from "./mutations.js"
import actions from "./actions.js"

Vue.use(Vuex);
const state = {
  useName: '', // 登录的用户名
  cartCount: 0 // 商品的购物车数量
}
export default new Vuex.Store({
  state: state,
  mutations,
  actions,
});