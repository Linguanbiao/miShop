<template>
  <div class="homeContainer">
    <NavHeader></NavHeader>
    <RouterView></RouterView>
    <NavFooter></NavFooter>
  </div>
</template>

<script>
import NavHeader from "@/components/NavHeader.vue";
import NavFooter from "@/components/NavFooter.vue";
export default {
  components: {
    NavHeader,
    NavFooter,
  },
};
</script>

<style lang="less" scoped>
.homeContainer {
  width: 100%;
  height: 100%;
  overflow: auto;
  padding: 10px;
}
</style>
