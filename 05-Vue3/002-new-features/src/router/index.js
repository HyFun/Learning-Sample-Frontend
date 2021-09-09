/*
 * @Author       : HyFun
 * @Date         : 2021-09-08 17:04:59
 * @Description  :
 * @LastEditors  : HyFun
 * @LastEditTime : 2021-09-09 18:34:00
 */
import { createRouter, createWebHashHistory } from 'vue-router'

export const routes = [
  {
    path: '/',
    component: () => import('../views/index.vue')
  },
  {
    path: '/lesson01',
    component: () => import('../views/lesson01/index.vue'),
    meta: {
      title: '课时一：v-for中的ref数组'
    }
  },
  {
    path: '/lesson02',
    component: () => import('../views/lesson02/index.vue'),
    meta: {
      title: '课时二：异步组件 defineAsyncComponent()'
    }
  },
  {
    path: '/lesson03',
    component: () => import('../views/lesson03/index.vue'),
    meta: {
      title: '课时三：$attrs包含class&style'
    }
  },
  {
    path: '/lesson04',
    component: () => import('../views/lesson04/index.vue'),
    meta: {
      title: '课时四：自定义指令 钩子函数'
    }
  },
  {
    path: '/lesson05',
    component: () => import('../views/lesson05/index.vue'),
    meta: {
      title: '课时五：Data必须为function'
    }
  },
  {
    path: '/lesson06',
    component: () => import('../views/lesson06/index.vue'),
    meta: {
      title: '课时六：emits选项'
    }
  },
  {
    path: '/lesson07',
    component: () => import('../views/lesson07/index.vue'),
    meta: {
      title: '课时七：移除$on()、$off()、$once()事件总线方法'
    }
  },
  {
    path: '/lesson08',
    component: () => import('../views/lesson08/index.vue'),
    meta: {
      title: '课时八：支持多个根节点'
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
