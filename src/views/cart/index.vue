<template>
  <div class="cartContainer">
    <OrderHeader></OrderHeader>
    这是购物车主页
    <NavFooter></NavFooter>
  </div>
</template>

<script>
import OrderHeader from "@/components/OrderHeader.vue";
import NavFooter from "@/components/NavFooter.vue";
export default {
  components: {
    OrderHeader,
    NavFooter,
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
