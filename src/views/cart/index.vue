<template>
  <div class="cartContainer">
    <OrderHeader :title="title" :description="descriptions"></OrderHeader>
    这是购物车主页
    <NavFooter></NavFooter>
  </div>
</template>

<script>
import OrderHeader from "@/components/OrderHeader.vue";
import NavFooter from "@/components/NavFooter.vue";
import { Descriptions } from "element-ui";
export default {
  components: {
    OrderHeader,
    NavFooter,
  },
  data() {
    return {
      title: "我的购物车",
      descriptions: "温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算",
    };
  },
};
</script>

<style lang="less" scoped>
.cartContainer {
  width: 100%;
  height: 100%;
  overflow: auto;
}
</style>
