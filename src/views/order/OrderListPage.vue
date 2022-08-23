<template>
  <div class="orderListContainer">
    <order-header
      title="订单列表"
      description="请谨防钓鱼链接或诈骗电话，了解更多>>"
    ></order-header>
    <div class="wrapper">
      <div class="container">
        <div class="order-box">
          <loading v-if="isLoading"></loading>
          <div class="order" v-for="(order, index) in list" :key="index">
            <div class="order-list-header">
              <div class="headerLeft">
                {{ order.createTime }}
                <span>|</span>
                {{ order.receiverName }}
                <span>|</span>
                订单号: {{ order.orderNo }}
                <span>|</span>
                {{ order.paymentTypeDesc }}
              </div>
              <div class="hearRight">
                <span>应付金额:</span>
                <span class="money">{{ order.payment }}</span>
                <span>元</span>
              </div>
            </div>
            <div class="orderContent">
              <div class="contentLeft">
                <div
                  class="contentList"
                  v-for="(subItem, i) in list.orderItemVoList"
                  :key="i"
                >
                  <div class="content-img">
                    <img v-lazy="subItem.productImage" />
                  </div>
                  <div class="contentDesc">
                    <p>{{ subItem.productName }}</p>
                    <p>
                      {{ subItem.currentUnitPrice }}元 X {{ subItem.quantity }}
                    </p>
                  </div>
                </div>
              </div>
              <div class="orderRight" v-if="order.status === 20">
                <a href="javascript:;">{{ order.statusDesc }}</a>
              </div>
              <div class="orderRight" v-else>
                <a href="javascript:;" @click="goPay(order.orderNo)">{{
                  order.statusDesc
                }}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OrderHeader from "@/components/OrderHeader.vue";
import Loading from "@/components/Loading.vue";
import { getOrder } from "@/api/order";
export default {
  data() {
    return {
      isLoading: false,
      lits: [],
    };
  },
  components: {
    OrderHeader,
    Loading,
  },
  methods: {
    getOrderList() {
      getOrder().then((res) => {
        this.list = res.list;
        console.log("res------", res);
        console.log(this.list);
      });
    },
    goPay(orderNo) {
      this.$router.push(`/order/pay/${orderNo}`);
    },
  },
  mounted() {
    this.getOrderList();
  },
};
</script>

<style lang="scss" scoped>
.orderListContainer {
  width: 1226px;
  margin: 0 auto;
}
</style>
