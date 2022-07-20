<template>
  <div class="productContainer">
    <ProductNav>
      <template v-slot:buy>
        <button class="btn" @click="handleBuy">立即购买</button>
      </template>
    </ProductNav>
    <p>这是一段测试文字</p>
  </div>
</template>

<script>
import ProductNav from "@/components/ProductNav.vue";
export default {
  components: {
    ProductNav,
  },
  methods: {
    handleBuy() {
      console.log("购买成功");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/button.scss";
@import "~@/assets/scss/mixin.scss";
.productContainer {
  width: 100%;
  border-top: 1px solid #e5e5e5;
  p {
    height: 500px;
  }
}
</style>
