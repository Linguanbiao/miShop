<template>
  <div class="modelContainer">
    <div class="mask"></div>
    <div class="dialogContainer">
      <div class="header">
        <span>标题</span>
      </div>
      <div class="body">
        <slot name="body"></slot>
      </div>
      <div class="footer">
        <a href="javascript:;">确定</a>
        <a href="javascript:;">取消</a>
      </div>
    </div>
  </div>
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
    surText: {
      type: String,
      default: "确定",
    },
    cancelText: {
      type: String,
      default: "取消",
    },
  },
};
</script>

<style lang="scss" scoped></style>
