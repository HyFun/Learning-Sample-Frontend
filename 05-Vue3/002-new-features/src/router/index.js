/*
 * @Author       : HyFun
 * @Date         : 2021-09-08 17:04:59
 * @Description  : 
 * @LastEditors  : HyFun
 * @LastEditTime : 2021-09-08 17:31:59
 */
import { createRouter, createWebHashHistory } from 'vue-router'

export const routes = [
  {
    path: '/',
    component: ()=>import('../views/index.vue')
  },
  {
    path: '/lesson01',
    component: ()=>import('../views/lesson01/index.vue'),
    meta: {
      title: '课时一：v-for中的ref数组'
    }
  },
  {
    path: '/lesson02',
    component: ()=>import('../views/lesson02/index.vue'),
    meta: {
      title: '课时二：异步组件'
    }
  },
  {
    path: '/lesson03',
    component: ()=>import('../views/lesson03/index.vue'),
    meta: {
      title: '课时三：$attrs包含class&style'
    }
  },
  {
    path: '/lesson04',
    component: ()=>import('../views/lesson04/index.vue'),
    meta: {
      title: '课时四：自定义指令 钩子函数'
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
