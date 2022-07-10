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
    <div class="ads-box"></div>
    <div class="banner"></div>
    <div class="product-box"></div>
    <ServiceBar></ServiceBar>
  </div>
</template>

<script>
import ServiceBar from "@/components/ServiceBar.vue";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  data() {
    return {
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
    };
  },
  components: {
    ServiceBar,
    Swiper,
    SwiperSlide,
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
</style>
