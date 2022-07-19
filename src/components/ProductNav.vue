<template>
  <div class="productNavContainer">
    <div class="titleContainer">
      <a href="javascript:;">小米8 透明探索版</a>
    </div>
    <div class="detailsContainer">
      <a href="">概述</a><span>|</span> <a href="">参数</a><span>|</span>
      <a href="">用户评价</a>
      <slot name="buy"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.productNavContainer {
  width: 1226px;
  height: 70px;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  .titleContainer {
    a {
      color: #333333;
      font-size: 18px;
      height: 17px;
      font-weight: bold;
    }
  }
  .detailsContainer {
    a {
      font-size: 14px;
      color: #666666;
      margin: 0 7px;
    }
  }
}
</style>
