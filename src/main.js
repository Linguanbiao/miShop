import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vant, {
  Lazyload
} from 'vant';
import 'vant/lib/index.css'
Vue.config.productionTip = false;

// 全局注册图片懒加载 
const loadimage = '/imgs/loading-svg/loading-bars.svg'
Vue.use(Vant);
Vue.use(Lazyload, {
  loading: loadimage
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");