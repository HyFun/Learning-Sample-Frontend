/*
 * @Author       : heyongfeng
 * @Date         : 2021-06-01 10:48:03
 * @Description  : 
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-06-01 17:22:16
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
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
