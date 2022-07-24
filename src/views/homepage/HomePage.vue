<template>
  <div class="homeIndexContainer">
    <div class="swiper-box">
      <div class="nav-menu">
        <div class="menu-wrap">
          <ul>
            <li>
              <a href="javascript:;"> <span>手机 电话卡</span></a>
              <div class="children">
                <ul v-for="(item, index) in menuList" :key="index">
                  <li
                    v-for="(subItem, subItemIndex) in item"
                    :key="subItemIndex"
                  >
                    <a :href="subItem ? `/product/:${subItem.id}` : ''">
                      <img
                        :src="subItem ? subItem.img : '/imgs/item-box-1.png'"
                      />
                      <span>{{
                        subItem.name ? subItem.name : "小米CC 9"
                      }}</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li><a href="javascript:;">电视 盒子</a></li>
            <li><a href="javascript:;">笔记本 平板</a></li>
            <li><a href="javascript:;">家电 插线板</a></li>
            <li><a href="javascript:;">出行 穿戴</a></li>
            <li><a href="javascript:;">智能 路由器</a></li>
            <li><a href="javascript:;">电源 配件</a></li>
            <li><a href="javascript:;">生活 箱包</a></li>
          </ul>
        </div>
      </div>
      <Swiper :options="swiperOption">
        <SwiperSlide v-for="item in slideList" :key="item.id">
          <router-link :to="`/product/:${item.id}`">
            <img :src="item.img" />
          </router-link>
        </SwiperSlide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </Swiper>
    </div>
    <div class="ads-box">
      <router-link
        :to="`/product/${item.id}`"
        v-for="(item, index) in adsList"
        :key="index"
      >
        <img v-lazy="item.img" alt="" />
      </router-link>
    </div>
    <div class="banner">
      <router-link to="/product/33">
        <img v-lazy="'/imgs/banner-1.png'" alt="这是首页标语" />
      </router-link>
    </div>
    <div class="product-box">
      <div class="wrapper">
        <h2>手机</h2>
        <div class="warpperContainer">
          <div class="banner-left">
            <img v-lazy="'/imgs/mix-alpha.jpg'" alt="" />
          </div>
          <div class="list-box">
            <div
              class="list"
              v-for="(arrItem, index) in phoneList"
              :key="index"
            >
              <div
                class="item"
                v-for="(arrItemOne, indexOne) in arrItem"
                :key="indexOne"
              >
                <span
                  :class="arrItemOne.price > 1000 ? 'newProduct' : 'spike'"
                  >{{ arrItemOne.price > 1000 ? "新品" : "秒杀" }}</span
                >
                <div class="item-img">
                  <img v-lazy="arrItemOne.mainImage" alt="" />
                </div>
                <div class="item-info">
                  <h3>{{ arrItemOne.name }}</h3>
                  <p>{{ arrItemOne.subtitle }}</p>
                  <div class="priceContainer">
                    <span class="price">{{ `${arrItemOne.price} 元` }}</span>
                    <img
                      src="/imgs/icon-cart-hover.png"
                      @click="addCart()"
                      style="cursor: pointer"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ServiceBar></ServiceBar>
    <Modal
      title="提示"
      sureText="查看购物车"
      btnType="1"
      modalType="middle"
      :showModal="showModal"
      @submit="handleSubmit()"
      @cancle="showModal = false"
    >
      <template v-slot:body>
        <p>添加商品成功！</p>
      </template>
    </Modal>
  </div>
</template>

<script>
import ServiceBar from "@/components/ServiceBar.vue";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import { getProduct } from "@/api/product.js";
import Modal from "@/components/modal.vue";
export default {
  data() {
    return {
      showModal: false,
      swiperOption: {
        autoplay: true,
        loop: true,
        effect: "cube",
        cubeEffect: {
          slideShadows: true,
          shadow: true,
          shadowOffset: 100,
          shadowScale: 0.1,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
      slideList: [
        {
          id: "42",
          img: "/imgs/slider/slide-1.jpg",
        },
        {
          id: "43",
          img: "/imgs/slider/slide-2.jpg",
        },
        {
          id: "44",
          img: "/imgs/slider/slide-3.jpg",
        },
        {
          id: "45",
          img: "/imgs/slider/slide-4.jpg",
        },
        {
          id: "46",
          img: "/imgs/slider/slide-5.jpg",
        },
      ],
      menuList: [
        [
          {
            id: 30,
            img: "/imgs/item-box-1.png",
            name: "小米CC9",
          },
          {
            id: 31,
            img: "/imgs/item-box-2.png",
            name: "小米8青春版",
          },
          { id: 32, img: "/imgs/item-box-3.jpg", name: "Redmi K20 Pro" },
          { id: 33, img: "/imgs/item-box-4.jpg", name: "移动4G" },
        ],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
      ],
      adsList: [
        // banner 产品标语
        {
          id: 33,
          img: "/imgs/ads/ads-1.png",
        },
        {
          id: 34,
          img: "/imgs/ads/ads-2.jpg",
        },
        {
          id: 35,
          img: "/imgs/ads/ads-3.png",
        },
        {
          id: 36,
          img: "/imgs/ads/ads-4.jpg",
        },
      ],
      phoneList: [],
    };
  },
  components: {
    ServiceBar,
    Swiper,
    SwiperSlide,
    Modal,
  },
  mounted() {
    this.fetchProuctData();
  },
  methods: {
    async fetchProuctData() {
      const resp = await getProduct(100012, 2, 18);

      this.phoneList = [
        resp.list.slice(6, 8),
        resp.list.slice(8, 10),
        resp.list.slice(10, 12),
        resp.list.slice(12, 14),
      ];
    },
    addCart() {
      this.showModal = true;
    },
    handleSubmit() {
      this.$router.push("/cart");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/mixin.scss";
.swiper-box {
  width: 1226px;
  height: 451px;
  margin: 0 auto;
  position: relative;
  font-size: 16px;
  font-weight: 400;
  .nav-menu {
    position: absolute;
    width: 264px;
    height: 451px;
    z-index: 9;
    padding: 26px 0;
    background: rgba(85, 88, 90, 0.3);
    box-sizing: border-box;
    li {
      height: 50px;
      line-height: 50px;
      position: relative;
      a {
        padding-left: 30px;
        display: block;
        height: 50px;
        color: #ffffff;
      }
      &:hover {
        background-color: #ff6600;
        .children {
          display: block;
        }
      }
      &::after {
        content: " ";
        position: absolute;
        right: 30px;
        top: calc(50% - 7.5px);
        @include backGroundImg(10px, 15px, "@/assets/imgs/icon-arrow.png");
      }
      .children {
        width: 962px;
        height: 451px;
        background-color: #ffffff;
        position: absolute;
        top: -26px;
        left: 264px;
        border: 1px solid #e5e5e5;
        display: none;
        ul {
          display: flex;
          justify-content: space-between;
          height: 75px;
          li {
            height: 75px;
            line-height: 75px;
            flex: 1;
            padding-left: 23px;
            img {
              width: 42px;
              height: 35px;
              vertical-align: middle;
              margin-right: 10px;
            }
            a {
              height: 75px;
              display: block;
              span {
                color: #333333;
                font-size: 14px;
              }
            }
            &:hover {
              background: #ffffff;
              span {
                color: #ff6600;
              }
            }
          }
        }
      }
    }
  }
  .swiper-container {
    height: 451px;
    width: 1226px;
    .swiper-button-prev {
      left: 274px;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.ads-box {
  width: 1226px;
  margin: 14px auto;
  margin-bottom: 31px;
  display: flex;
  justify-content: space-between;
  a {
    height: 167px;
    width: 296px;
    display: inline-block;
    img {
      width: 100%;
      height: 100%;
    }
  }
  &:last-of-type {
    border: 1px solid #333332;
  }
}
.banner {
  width: 1226px;
  height: 130px;
  margin: 0 auto;
  margin-bottom: 50px;
  img {
    width: 100%;
    height: 100%;
  }
}
.product-box {
  width: 100%;
  height: 740px;
  background: #f5f5f5;
  .wrapper {
    width: 1226px;
    margin: 0 auto;
    margin-bottom: 50px;
    h2 {
      color: #333333;
      font-size: 22px;
      font-weight: bold;
      margin-bottom: 20px;
      padding-top: 30px;
    }
    .warpperContainer {
      display: flex;
      .banner-left {
        width: 224px;
        height: 619px;
        margin-right: 16px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .list-box {
        flex: 1;
        display: flex;
        justify-content: space-between;
        .item {
          width: 236px;
          height: 302px;
          background: #ffffff;
          margin-bottom: 14px;
          text-align: center;
          .newProduct {
            width: 67px;
            height: 24px;
            background: #7ecf68;
            color: #ffffff;
            font-size: 14px;
            line-height: 24px;
            display: inline-block;
          }
          .spike {
            width: 67px;
            height: 24px;
            font-size: 14px;
            line-height: 24px;
            display: inline-block;
            background-color: #e82626;
            color: #ffffff;
          }
          .item-img {
            height: 195px;
            width: 190px;
            margin: 0 auto;
            img {
              width: 100%;
              height: 100%;
            }
          }
          p {
            font-size: 12px;
            color: #999999;
          }
          .priceContainer {
            margin-top: 13px;
            display: flex;
            justify-content: center;
            color: #f20a0a;
            font-size: 14px;
            font-weight: bold;
            img {
              width: 22px;
              height: 18px;
              margin-left: 5px;
            }
          }
        }
      }
    }
  }
}
</style>
