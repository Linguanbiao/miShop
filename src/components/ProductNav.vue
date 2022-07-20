<template>
  <div class="productNavContainer" :class="isFixed ? 'isFixed' : ''">
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
export default {
  data() {
    return {
      isFixed: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.initHeight);
  },
  destroyed() {
    window.removeEventListener("scroll", this.initHeight, false);
  },
  methods: {
    initHeight() {
      let scorllTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      this.isFixed = scorllTop > 152 ? true : false;
    },
  },
};
</script>

<style lang="scss" scoped>
.productNavContainer {
  width: 1226px;
  height: 70px;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  &.isFixed {
    background: #ffffff;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    box-shadow: 0 2px 5px #cccccc;
    box-sizing: border-box;
    transition: 0.3s;
    .titleContainer {
      padding-left: 25px;
    }
    .detailsContainer {
      padding-right: 25px;
    }
  }
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
