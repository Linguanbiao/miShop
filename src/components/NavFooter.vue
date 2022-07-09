<template>
  <div class="navFooterContainer">
    <div class="footer-logo">
      <img src="@/assets/imgs/logo-footer.png" alt="" />
      <p>小米商城</p>
    </div>
    <div class="footer-link">
      <a href="https://www.mi.com/service/mihome/list"
        >小米之家<span>|</span></a
      >
      <a href="https://home.miui.com" target="_blank">MIUI<span>|</span></a>
      <a href="http://www.miliao.com" target="_blank">米聊<span>|</span></a>
      <a href="https://www.duokan.com/pc/" target="_blank"
        >多看<span>|</span></a
      >
      <a href="https://xiaomi.tmall.com" target="_blank"
        >小米天猫店<span>|</span></a
      >
      <a href="https://privacy.mi.com/all/zh_CN/" target="_blank"
        >小米集团隐私政策</a
      >
    </div>
    <div class="foot-copyright">
      © mi.com 京ICP证110507号 京ICP备10046444号 京公网安备11010802020134号
      京网文[2020]0276-042号
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.navFooterContainer {
  width: 100%;
  height: 234px;
  background-color: #333333;
  font-size: 16px;
  color: #999999;
  text-align: center;
  .footer-logo {
    img {
      height: 36px;
      width: 53px;
      margin-top: 46px;
      margin-bottom: 13px;
    }
    p {
      margin-bottom: 20px;
    }
  }
  .footer-link {
    a {
      color: #999999;
      span {
        margin: 0 10px;
      }
    }
  }
  .foot-copyright {
    margin: 10px auto;
  }
}
</style>
