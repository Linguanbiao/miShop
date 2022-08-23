<template>
  <div class="orderContainer">
    <!-- <OrderHeader :title="title" :description="description"></OrderHeader> -->
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
  components: {
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
