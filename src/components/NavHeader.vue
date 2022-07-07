<template>
  <div class="navHeaderContainer">
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-menu">
          <a href="javascript:;">小米商城</a>
          <a href="javascript:;">MIUI</a>
          <a href="javascript:;">云服务</a>
          <a href="javascript:;">协议规则</a>
        </div>
        <div class="topbar-user">
          <a href="javascript:;">登录</a>
          <a href="javascript:;">注册</a>
          <a href="javascript:;" class="my-cart"
            ><span class="icon-cart"></span> 购物车</a
          >
        </div>
      </div>
    </div>
    <div class="nav-header">
      <div class="container">
        <div class="hearder-logo">
          <router-link to="/login" class="logo-area"></router-link>
        </div>
        <div class="header-introduce">
          <div class="product-item">
            <span>小米手机</span>
          </div>
          <div class="product-item">
            <span>Redmi红米</span>
          </div>
          <div class="product-item">
            <span>电视</span>
          </div>
        </div>
        <div class="header-search">
          <div class="wrapper">
            <input type="text" name="keyword" />
            <a href="javascript:;"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/mixin.scss";
.navHeaderContainer {
  .nav-topbar {
    height: 39px;
    line-height: 39px;
    background-color: #333333;
    .container {
      width: 1226px;
      margin: 0 auto;
      @include flex();
      a {
        display: inline-block;
        color: #b0b0b0;
        margin-right: 17px;
      }
      .my-cart {
        width: 110px;
        background-color: #ff6600;
        text-align: center;
        color: #ffffff;
        .icon-cart {
          margin-right: 4px;
          @include backGroundImg(
            12px,
            16px,
            "@/assets/imgs/icon-cart-checked.png"
          );
          vertical-align: middle;
        }
      }
    }
  }
  .nav-header {
    .container {
      height: 112px;
      width: 1226px;
      margin: 0 auto;
      @include flex();
      position: relative;
      .hearder-logo {
        display: inline-block;
        width: 55px;
        height: 55px;
        background-color: #ff6600;
        .logo-area {
          display: inline-block;
          width: 110px;
          height: 55px;
          &::before {
            content: " ";
            @include backGroundImg(55px, 55px, "@/assets/imgs/mi-logo.png");
            background-size: 55px;
            transition: 0.3s;
          }
          &::after {
            content: " ";
            @include backGroundImg(55px, 55px, "@/assets/imgs/mi-home.png");
            background-size: 55px;
          }
          &:hover::before {
            margin-left: -55px;
            transition: 0.3s;
          }
        }
      }
      .header-introduce {
        display: flex;
        position: absolute;
        left: 264px;
        .product-item {
          font-size: 16px;
          font-weight: bold;
          color: #333333;
          margin-right: 20px;
          line-height: 112px;

          span {
            cursor: pointer;
          }
          &:hover {
            color: #ff6600;
          }
        }
      }
      .header-search {
        width: 319px;
        .wrapper {
          height: 50px;
          border: 1px solid #e0e0e0;
          display: flex;
          align-items: center;
          input {
            border: none;
            border-right: 1px solid #e0e0e0;
            width: 263px;
            height: 50px;
            padding-left: 14px;
            box-sizing: border-box;
          }
          a {
            @include backGroundImg(18px, 18px, "@/assets/imgs/icon-search.png");
            margin-left: 19px;
          }
        }
      }
    }
  }
}
</style>
