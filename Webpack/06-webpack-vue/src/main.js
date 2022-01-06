import Vue from "vue";
import router from '@/router/index'

import App from "./App.vue";
import './global.scss'

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
