<template>
  <div class="orderListContainer">
    <order-header
      title="订单列表"
      description="请谨防钓鱼链接或诈骗电话，了解更多>>"
    ></order-header>
    这是商品订单详情页
  </div>
</template>

<script>
import OrderHeader from "@/components/OrderHeader.vue";
export default {
  components: {
    OrderHeader,
  },
};
</script>

<style lang="scss" scoped>
.orderListContainer {
  width: 1226px;
  margin: 0 auto;
}
</style>
