import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/homepage/index.vue"
import OrderView from "../views/order/index.vue"

Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "home",
    redirect: '/home',
    component: HomeView,
    children: [{
        path: '/home',
        name: 'index',
        component: () => import('@/views/homepage/HomePage.vue')
      },
      {
        path: '/product/:id',
        name: 'product',
        component: () => import('@/views/homepage/ProductPage.vue')
      },
      {
        path: '/detail/:id',
        name: 'detail',
        component: () => import('@/views/homepage/DetailPage.vue')
      }

    ]
  },
  {
    path: "/order",
    name: "order",
    redirect: '/list',
    component: OrderView,
    children: [{
        path: '/order/list',
        name: 'order-list',
        component: () => import('@/views/order/OrderListPage.vue')
      },
      {
        path: '/order/confirm',
        name: 'order-confirm',
        component: () => import('@/views/order/OrderConfirmPage.vue')
      },
      {
        path: '/order/pay',
        name: 'order-pay',
        component: () => import('@/views/order/OrderPayPage.vue')
      }

    ]
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import('@/views/cart/index.vue')

  },
  {
    path: "/login",
    name: "login",
    component: () => import('@/views/login/index.vue')

  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;