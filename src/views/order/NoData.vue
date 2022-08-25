<template>
  <div class="no-data-container">
    <img src="@/assets/imgs/icon-no-data.png" alt="" />
    <p>当前暂无提交的订单记录</p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.no-data-container {
  height: 400px;
  text-align: center;
  color: #999999;
  font-size: 20px;
  margin-top: 60px;
  img {
    width: 240px;
    height: 180px;
  }
  p {
    margin-top: 30px;
  }
}
</style>
