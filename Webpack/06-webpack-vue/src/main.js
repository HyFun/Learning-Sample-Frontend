import Vue from "vue";
import router from '@/router/index'

import App from "./App.vue";
import '@/styles/global.scss'

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
