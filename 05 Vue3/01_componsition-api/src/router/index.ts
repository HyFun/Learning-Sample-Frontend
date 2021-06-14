/*
 * @Author       : heyongfeng
 * @Date         : 2021-06-01 10:48:03
 * @Description  : 
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-06-12 23:56:10
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Layout from '../App.vue'
export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/',
        component: () => import('../views/index.vue'),
        meta: {
          title: '首页'
        }
      },
      {
        path: '/lesson01',
        component: () => import('../views/lesson01/index.vue'),
        meta: {
          title: '课时1： setup ref'
        }
      },
      {
        path: '/lesson02',
        component: () => import('../views/lesson02/index.vue'),
        meta: {
          title: '课时2： toRefs'
        }
      },
      {
        path: '/lesson03',
        component: () => import('../views/lesson03/index.vue'),
        meta: {
          title: '课时3： reactive声明响应式对象'
        }
      },
      {
        path: '/lesson04',
        component: () => import('../views/lesson04/index.vue'),
        meta: {
          title: '课时4： setup参数'
        }
      },
      {
        path: '/lesson05',
        component: () => import('../views/lesson05/index.vue'),
        meta: {
          title: '课时5： v-model实现'
        }
      },
      {
        path: '/lesson06',
        component: () => import('../views/lesson06/index.vue'),
        meta: {
          title: '课时6： project和inject'
        }
      },
      {
        path: '/lesson07',
        component: () => import('../views/lesson07/index.vue'),
        meta: {
          title: '课时7： proxy实现代理数据'
        }
      },
      {
        path: '/lesson08',
        component: () => import('../views/lesson08/index.vue'),
        meta: {
          title: '课时8： ref和reactive细节'
        }
      },
      {
        path: '/lesson09',
        component: () => import('../views/lesson09/index.vue'),
        meta: {
          title: '课时9： computed和watch'
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
