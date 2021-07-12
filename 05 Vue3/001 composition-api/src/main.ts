/*
 * @Author       : heyongfeng
 * @Date         : 2021-06-01 10:48:03
 * @Description  :
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-06-01 11:37:19
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './styles/global.scss'
createApp(App).use(store).use(router).mount('#app')
