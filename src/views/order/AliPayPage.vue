<template>
  <div class="ali-pay">
    <order-header
      title="支付宝支付"
      description="请谨防钓鱼链接或诈骗电话，了解更多>>"
    ></order-header>
    <Loading v-if="isLoading"></Loading>
    <div class="form" v-html="content"></div>
  </div>
</template>

<script>
import Loading from "@/components/Loading.vue";
import { Pay } from "@/api/pay";
import OrderHeader from "@/components/OrderHeader.vue";
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
    OrderHeader,
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
