<template>
  <div class="orderContainer">
    <OrderHeader></OrderHeader>
    <RouterView></RouterView>
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
.orderContainer {
  width: 100%;
  height: 100%;
  overflow: auto;
}
</style>
