<template>
  <div class="orderListContainer">
    <div class="header">
      <order-header
        title="订单列表"
        description="请谨防钓鱼链接或诈骗电话，了解更多>>"
      ></order-header>
    </div>
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
                  v-for="(subItem, i) in order.orderItemVoList"
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
                <a href="javascript:;"> {{ order.statusDesc }} > </a>
              </div>
              <div class="orderRight" v-else>
                <a href="javascript:;" @click="goPay(order.orderNo)"
                  >{{ order.statusDesc }} >
                </a>
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
      isLoading: true,
      list: [], // 数据
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
        this.isLoading = false;
      });
    },
    goPay(orderNo) {
      console.log(orderNo);
      this.$router.push(`/order/pay?orderNo=${orderNo}`);
    },
  },
  mounted() {
    this.getOrderList();
  },
};
</script>

<style lang="scss" scoped>
.orderListContainer {
  width: 100%;
  background: #f5f5f5;
  .header {
    width: 100%;
    height: 112px;
    background: #ffffff;
  }
  .wrapper {
    width: 1226px;
    margin: 0 auto;

    .order {
      margin: 30px 0;
      border: 1px solid #d7d7d7;
      // padding: 28px 43px;
      .order-list-header {
        height: 74px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 16px;
        color: #666666;
        background: #fffaf7;
        padding: 0 43px;
        span {
          margin: 0 5px;
        }
        .money {
          color: #333333;
          font-size: 26px;
          font-weight: bold;
        }
      }
      .orderContent {
        display: flex;
        justify-content: space-between;
        background: #ffffff;
        align-items: center;
        padding: 30px 43px;
        .contentList {
          display: flex;
          align-items: center;
          font-size: 20px;
          color: #333333;
          .content-img {
            width: 69px;
            height: 89px;
            margin-right: 45px;
            img {
              width: 100%;
              height: 100%;
            }
          }
        }
        .orderRight {
          a {
            font-size: 20px;
            color: #ff6600;
          }
        }
      }
    }
  }
}
</style>
