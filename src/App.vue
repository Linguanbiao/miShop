<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import storage from "@/storage";
import { getCartSum } from "@/api/cart";
import { whoAmI } from "@/api/login";
export default {
  mounted() {
    storage.clear("a");
    this.fetchCartSum();
    this.fetchUser();
  },
  methods: {
    async fetchCartSum() {
      const resp = await getCartSum();
      this.$store.dispatch("savaCartCount", resp);
    },
    async fetchUser() {
      const resp = await whoAmI();
      console.log(resp);
      this.$store.dispatch("savaUserName", resp.username);
    },
  },
};
</script>

<style lang="less">
// @import "~@/assets/scss/config.scss";
@import "~@/assets/scss/reset.scss";
</style>
