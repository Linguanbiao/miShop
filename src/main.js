import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Vant, {
  Lazyload
} from 'vant';
import 'vant/lib/index.css'
import './assets/scss/element-variables.scss'
import VueCookie from "vue-cookie"

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(VueCookie)
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