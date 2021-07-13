/*
 * @Author       : heyongfeng
 * @Date         : 2021-07-13 11:11:38
 * @Description  : 工程入口
 * @LastEditors  : HyFun
 * @LastEditTime : 2021-07-13 12:50:49
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// element
import locale from 'element-plus/lib/locale/lang/zh-cn'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

// 全局css
import './styles/index.scss'

createApp(App).use(store).use(router).use(ElementPlus, { locale }).mount('#app')
