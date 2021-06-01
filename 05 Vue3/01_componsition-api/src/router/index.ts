/*
 * @Author       : heyongfeng
 * @Date         : 2021-06-01 10:48:03
 * @Description  : 
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-06-01 14:15:38
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
          title: '课时一：setup ref'
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
