<template>
  <transition name="slide">
    <div class="modal" v-if="showModal">
      <div class="mask"></div>
      <div class="dialogContainer">
        <div class="header">
          <span>{{ title }}</span>
          <a
            href="javascript:;"
            class="icon-close"
            @click="handleCancleClick()"
          ></a>
        </div>
        <div class="body">
          <slot name="body"></slot>
        </div>
        <div class="footer">
          <a
            href="javascript:;"
            class="btn"
            v-if="btnType == 1"
            @click="handleClick()"
            >{{ sureText }}</a
          >
          <a
            href="javascript:;"
            class="btn btn-default"
            v-if="btnType == 2"
            @click="handleCancleClick()"
            >{{ cancelText }}</a
          >
          <div class="btn-group" v-if="btnType == 3">
            <a href="javascript:;" class="btn" @click="handleClick()">{{
              sureText
            }}</a>
            <a
              href="javascript:;"
              class="btn btn-default"
              @click="handleCancleClick()"
              >{{ cancelText }}</a
            >
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "model",
  props: {
    modalType: {
      type: String,
      default: "form",
    },
    // 弹出框的标题
    title: String,
    // 按钮的类型 : 1. 确定按钮   2.取消按钮  3.确定按钮
    btnType: String,
    sureText: {
      type: String,
      default: "确定",
    },
    cancelText: {
      type: String,
      default: "取消",
    },
    showModal: Boolean,
  },
  methods: {
    handleClick() {
      this.$emit("submit");
    },
    handleCancleClick() {
      this.$emit("cancle");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/mixin.scss";
@import "~@/assets/scss/modal.scss";
@import "~@/assets/scss/button.scss";
</style>
