/*
 * @Author       : HyFun
 * @Date         : 2021-09-08 17:04:59
 * @Description  :
 * @LastEditors  : HyFun
 * @LastEditTime : 2021-09-14 14:26:19
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
  },
  {
    path: '/lesson09',
    component: () => import('../views/lesson09/index.vue'),
    meta: {
      title: '课时九：函数式组件'
    }
  },
  {
    path: '/lesson10',
    component: () => import('../views/lesson10/index.vue'),
    meta: {
      title: '课时十：全局API'
    }
  },
  {
    path: '/lesson11',
    component: () => import('../views/lesson11/index.vue'),
    meta: {
      title: '课时十一：nextTick'
    }
  },
  {
    path: '/lesson12',
    component: () => import('../views/lesson12/index.vue'),
    meta: {
      title: '课时十二：propsData'
    }
  },
  {
    path: '/lesson13',
    component: () => import('../views/lesson13/index.vue'),
    meta: {
      title: '课时十三：渲染函数'
    }
  },
  {
    path: '/lesson14',
    component: () => import('../views/lesson14/index.vue'),
    meta: {
      title: '课时十四：Suspense组件'
    }
  },
  {
    path: '/lesson15',
    component: () => import('../views/lesson15/index.vue'),
    meta: {
      title: '课时十五：v-model改变'
    }
  },
  {
    path: '/lesson16',
    component: () => import('../views/lesson16/index.vue'),
    meta: {
      title: '课时十六：v-if 与 v-for 的优先级对比'
    }
  },
  {
    path: '/lesson17',
    component: () => import('../views/lesson17/index.vue'),
    meta: {
      title: '课时十七：v-bind 合并行为'
    }
  },
  {
    path: '/lesson18',
    component: () => import('../views/lesson18/index.vue'),
    meta: {
      title: '课时十八：组件生命周期回调'
    }
  },
  {
    path: '/lesson19',
    component: () => import('../views/lesson19/index.vue'),
    meta: {
      title: '课时十九：监听数组'
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
