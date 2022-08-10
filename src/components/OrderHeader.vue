<template>
  <div class="orderHeaderContainer">
    <div class="hearder-logo">
      <router-link to="/login" class="logo-area"></router-link>
    </div>
    <div class="headTitle">
      <span>{{ title }}</span>
      <a>{{ description }}</a>
    </div>
    <div class="username">linwinwin</div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    description: String,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/mixin.scss";
@import "@/assets/scss/logo.scss";
.orderHeaderContainer {
  width: 1226px;
  height: 112px;
  margin: 0 auto;
  display: flex;
  position: relative;
  align-items: center;
  font-weight: bold;
  .headTitle {
    font-size: 28px;
    color: #333333;
    span {
      margin-left: 37px;
    }
    a {
      font-size: 14px;
      color: #999999;
      margin-left: 11px;
    }
  }
  .username {
    position: absolute;
    right: 0;
    font-size: 16px;
  }
}
</style>
