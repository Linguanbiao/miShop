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
          <a href="javascript:;" v-if="username">{{
            `当前用户:${username}`
          }}</a>
          <a href="javascript:;" v-if="!username" @click="handleLogin">登录</a>

          <a href="javascript:;" class="my-cart" @click="handleGoToCart"
            ><span class="icon-cart"></span> 购物车 {{ cartCount }}</a
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
            <div class="children">
              <ul>
                <li v-for="item in phoneList" :key="item.id" class="product">
                  <router-link :to="`/#/product/${item.id}`">
                    <div class="pro-img">
                      <img v-lazy="item.mainImage" />
                    </div>
                    <div class="pro-name">{{ item.name }}</div>
                    <div class="pro-price">{{ `${item.price} 元` }}</div>
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
          <div class="product-item">
            <span>Redmi红米</span>
          </div>
          <div class="product-item">
            <span>电视</span>
            <div class="children">
              <ul>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img
                        v-lazy="'@/assets/imgs/nav-img/nav-3-1.jpg'"
                        alt=""
                      />
                    </div>
                    <div class="pro-name">Redmi智能电视 x55</div>
                    <div class="pro-price">2399元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img
                        v-lazy="'@/assets/imgs/nav-img/nav-3-2.jpg'"
                        alt=""
                      />
                    </div>
                    <div class="pro-name">Redmi智能电视 x65</div>
                    <div class="pro-price">3099元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img
                        v-lazy="'@/assets/imgs/nav-img/nav-3-3.png'"
                        alt=""
                      />
                    </div>
                    <div class="pro-name">小米电视6 65" OLED 65英寸</div>
                    <div class="pro-price">6699元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img
                        v-lazy="'@/assets/imgs/nav-img/nav-3-4.jpg'"
                        alt=""
                      />
                    </div>
                    <div class="pro-name">小米电视 大师 77" OLED 77英寸</div>
                    <div class="pro-price">17999元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img
                        v-lazy="'@/assets/imgs/nav-img/nav-3-5.jpg'"
                        alt=""
                      />
                    </div>
                    <div class="pro-name">小米透明电视</div>
                    <div class="pro-price">49999元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img
                        v-lazy="'@/assets/imgs/nav-img/nav-3-6.png'"
                        alt=""
                      />
                    </div>
                    <div class="pro-name">小米电视 大师 65英寸OLED</div>
                    <div class="pro-price">8999元</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="product-item">
            <span>服务中心</span>
          </div>

          <div class="product-item">
            <span>社区</span>
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
import { getProduct } from "@/api/product";
import { MessageBox } from "element-ui";
export default {
  data() {
    return {
      phoneList: [],
    };
  },
  computed: {
    username() {
      return this.$store.state.userName;
    },
    cartCount() {
      return this.$store.state.cartCount;
    },
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      const res = await getProduct();
      this.phoneList = res.list.slice(0, 6);
    },
    handleLogin() {
      this.$router.push("/login");
    },
    handleGoToCart() {
      this.$router.push("/cart");
    },
  },
  updated() {
    console.log(this.username);
  },
};
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
    // height: 400px;
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
        border-radius: 30%;
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
        width: 420px;
        .product-item {
          font-size: 16px;
          font-weight: 400;
          color: #333333;
          margin-right: 20px;
          line-height: 112px;
          span {
            cursor: pointer;
          }
          &:hover {
            color: #ff6600;
            .children {
              height: 220px;
              opacity: 1;
            }
          }
          .children {
            position: absolute;
            top: 112px;
            left: 0;
            width: 1226px;
            opacity: 0;
            height: 0;
            background: #ffffff;
            z-index: 99;
            overflow: hidden;
            transition: 0.5s;
            border-top: 1px solid #e5e5e5;
            box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.11);
            .product {
              float: left;
              width: 16.6%;
              height: 220px;
              font-size: 12px;
              line-height: 12px;
              text-align: center;
              position: relative;
              a {
                display: inline-block;
              }
              img {
                width: auto;
                height: 110px;
                margin-top: 26px;
              }
              .pro-img {
                height: 137px;
              }
              .pro-name {
                font-weight: bold;
                margin-top: 19px;
                margin-bottom: 8px;
                color: #333333;
              }
              .pro-price {
                color: #ff6600;
              }
              &::before {
                content: " ";
                position: absolute;
                top: 28px;
                right: 0;
                width: 1px;
                height: 100px;
                border-left: 1px solid #d7d7d7;
              }
              &:last-child::before {
                display: none;
              }
            }
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
