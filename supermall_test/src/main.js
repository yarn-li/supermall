import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import "swiper/swiper-bundle.css";
import VueAwesomeSwiper from "vue-awesome-swiper";
Vue.use(VueAwesomeSwiper);

import BScroll from '@better-scroll/core' 

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

