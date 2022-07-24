<template>
  <div class="productContainer">
    <ProductNav :title="product.name">
      <template v-slot:buy>
        <button class="btn" @click="handleBuy">立即购买</button>
      </template>
    </ProductNav>
    <div class="content">
      <div class="item-bg1">
        <h2>{{ product.name }}</h2>

        <h3>{{ product.subtitle }}</h3>
        <p>
          <a href="javascript:;">全球首款双频 GPS</a> <span>|</span>
          <a href="javascript:;">骁龙845</a> <span>|</span>
          <a href="javascript:;">AI 变焦双摄</a> <span>|</span>
          <a href="javascript:;">红外人脸识别</a>
        </p>
        <div class="price">
          <span>¥{{ product.price }}</span>
        </div>
      </div>
      <div class="item-bg2"></div>
      <div class="item-bg3"></div>
      <div class="item-swiper">
        <swiper :options="swiperOption">
          <swiper-slide
            ><img src="/imgs/product/gallery-2.png" alt=""
          /></swiper-slide>
          <swiper-slide
            ><img src="/imgs/product/gallery-3.png" alt=""
          /></swiper-slide>
          <swiper-slide
            ><img src="/imgs/product/gallery-4.png" alt=""
          /></swiper-slide>
          <swiper-slide
            ><img src="/imgs/product/gallery-5.jpg" alt=""
          /></swiper-slide>
          <swiper-slide
            ><img src="/imgs/product/gallery-6.jpg" alt=""
          /></swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        <p class="desc">小米8 AI变焦双摄拍摄</p>
      </div>
      <div class="item-video">
        <h2>60帧超慢动作摄影<br />慢慢回味每一瞬间的精彩</h2>
        <p>
          后置960帧电影般超慢动作视频，将眨眼间的美妙展现得淋漓尽致！<br />更能AI
          精准分析视频内容，15个场景智能匹配背景音效。
        </p>
        <div class="video-bg" @click="showSlide = 'slideDown'"></div>
        <div class="video-box" v-show="showSlide">
          <div class="overlay"></div>
          <div class="video" v-bind:class="showSlide">
            <span class="icon-close" @click="closeVideo"></span>
            <video
              src="/imgs/product/video.mp4"
              muted
              autoplay
              controls="controls"
            ></video>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductNav from "@/components/ProductNav.vue";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { getProductInfo } from "@/api/product.js";
import "swiper/css/swiper.css";
export default {
  data() {
    return {
      showSlide: "",
      product: {},
      swiperOption: {
        autoplay: true,
        slidesPerView: 3,
        spaceBetween: 30,
        freeMode: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      },
    };
  },
  computed: {
    curRouterId() {
      return this.$route.params.id;
    },
  },
  components: {
    ProductNav,
    Swiper,
    SwiperSlide,
  },
  mounted() {
    console.log(this.curRouterId);
    this.fetchData(this.curRouterId);
  },
  methods: {
    async fetchData(id) {
      const resp = await getProductInfo(id);
      this.product = resp;
      console.log(this.product);
    },
    handleBuy() {
      this.$router.push(`/details/${this.curRouterId}`);
    },

    closeVideo() {
      this.showSlide = "slideUp";
      let vi = document.getElementsByTagName("video")[0];
      vi.pause();
      setTimeout(() => {
        this.showSlide = "";
      }, 600);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/button.scss";
@import "~@/assets/scss/mixin.scss";
.productContainer {
  width: 100%;
  height: 100%;
  border-top: 1px solid #e5e5e5;
  .content {
    .item-bg1 {
      text-align: center;
      h2 {
        font-size: 60px;
        color: #333333;
        margin-top: 30px;
        line-height: 75px;
        span {
          font-size: 68px;
        }
      }
      h3 {
        line-height: 23px;
        font-size: 20px;
        margin-top: 8px;
        font-weight: 400;
      }
      p {
        margin: 20px 0;
        a {
          font-size: 14px;
          margin: 0 10px;
          color: #333333;
        }
      }
      .price {
        font-size: 38px;
        margin-top: 40px;
      }
      @include backGroundImg(
        100%,
        638px,
        "@/assets/imgs/product/product-bg-1.png"
      );
      background-size: cover;
    }
    .item-bg2 {
      @include backGroundImg(
        1226px,
        397px,
        "@/assets/imgs/product/product-bg-2.png"
      );
      margin: 39px auto;
      margin-bottom: 45px;
      display: block;
    }
    .item-bg3 {
      @include backGroundImg(
        100%,
        400px,
        "@/assets/imgs/product/product-bg-3.png"
      );
      margin-bottom: 36px;
      background-size: cover;
    }
    .item-swiper {
      margin: 36px auto 52px;
      .desc {
        margin-top: 15px;
        font-size: 18px;
        color: #333333;
        text-align: center;
      }
      img {
        width: 100%;
      }
    }
    .item-video {
      height: 1044px;
      background-color: #070708;
      margin-bottom: 76px;
      color: #ffffff;
      text-align: center;
      h2 {
        font-size: 60px;
        padding-top: 82px;
        margin-bottom: 47px;
      }
      p {
        font-size: 24px;
        margin-bottom: 58px;
      }
      .video-bg {
        background: url("@/assets/imgs/product/gallery-1.png") no-repeat center;
        background-size: cover;
        width: 1226px;
        height: 540px;
        margin: 0 auto 120px;
        cursor: pointer;
      }
      .video-box {
        .overlay {
          @include position(fixed);
          background-color: #333333;
          opacity: 0.4;
          z-index: 10;
        }
        @keyframes slideDown {
          from {
            top: -50%;
            opacity: 0;
          }
          to {
            top: 50%;
            opacity: 1;
          }
        }
        @keyframes slideUp {
          from {
            top: 50%;
            opacity: 1;
          }
          to {
            top: -50%;
            opacity: 0;
          }
        }
        .video {
          position: fixed;
          top: -50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 10;
          width: 1000px;
          height: 536px;
          opacity: 1;
          &.slideDown {
            animation: slideDown 0.6s linear;
            top: 50%;
          }
          &.slideUp {
            animation: slideUp 0.6s linear;
          }
          .icon-close {
            position: absolute;
            top: 20px;
            right: 20px;
            @include backGroundImg(20px, 20px, "@/assets/imgs/icon-close.png");
            cursor: pointer;
            z-index: 11;
          }
          video {
            width: 100%;
            height: 100%;
            object-fit: cover;
            outline: none;
          }
        }
      }
    }
  }
}
</style>
