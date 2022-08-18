<template>
  <div class="orderContainer">
    <OrderHeader :title="title" :description="description"></OrderHeader>
    <RouterView></RouterView>
    <ServiceBar></ServiceBar>
    <NavFooter></NavFooter>
  </div>
</template>

<script>
import OrderHeader from "@/components/OrderHeader.vue";
import NavFooter from "@/components/NavFooter.vue";
import ServiceBar from "@/components/ServiceBar.vue";
export default {
  data() {
    return {
      title: "",
      description: "",
    };
  },
  mounted() {
    let path = this.$route.path;
    if (path === "/order/confirm") {
      this.title = "订单确认";
      this.description = "请认真填写收货地址";
    } else if (path === "/order/list") {
      this.title = "订单列表";
      this.description = "请谨防钓鱼链接或诈骗电话，了解更多>>";
    } else if (path === "/order/pay") {
      this.title = "订单支付";
      this.description = "请谨防钓鱼链接或诈骗电话，了解更多>>";
    } else if (path === "/order/alipay") {
      this.title = "支付宝支付";
      this.description = "请谨防钓鱼链接或诈骗电话，了解更多>>";
    }
  },
  components: {
    OrderHeader,
    NavFooter,
    ServiceBar,
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
