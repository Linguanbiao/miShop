<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import storage from "@/storage";
export default {
  mounted() {
    storage.clear("a");
  },
};
</script>

<style lang="less">
// @import "~@/assets/scss/config.scss";
@import "~@/assets/scss/reset.scss";
</style>
