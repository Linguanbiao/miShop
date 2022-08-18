<template>
  <div class="ali-pay">
    <Loading v-if="isLoading"></Loading>
    <div class="form" v-html="content"></div>
  </div>
</template>

<script>
import Loading from "@/components/Loading.vue";
import { Pay } from "@/api/pay";
export default {
  name: "alipay",
  data() {
    return {
      orderId: this.$route.query.orderId,
      content: "",
      isLoading: true,
    };
  },
  components: {
    Loading,
  },
  mounted() {
    this.paySubmit();
  },
  methods: {
    paySubmit() {
      Pay({
        orderId: this.orderId,
        orderName: "Vue高仿小米商城",
        amount: 0.01, //支付的金额
        payType: 1, // 支付的选择，是支付宝还是微信
      }).then((res) => {
        this.content = res.content;
        this.isLoading = false;
        setTimeout(() => {
          document.forms[0].submit();
        }, 500);
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
