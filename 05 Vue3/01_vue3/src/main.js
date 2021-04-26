/*
 * @Author       : heyongfeng
 * @Date         : 2021-04-21 21:43:02
 * @Description  : 入口文件
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-04-26 22:16:14
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)
app.use(store).use(router)
app.config.globalProperties.$global = '这是一个全局的变量'
app.mount('#app')
