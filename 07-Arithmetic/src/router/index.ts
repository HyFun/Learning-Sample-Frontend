/*
 * @Author       : HyFun
 * @Date         : 2021-07-13 11:11:38
 * @Description  : 路由
 * @LastEditors  : HyFun
 * @LastEditTime : 2021-07-13 13:59:48
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

interface Item {
  meta: {
    hidden?: true
    title: string
    description?: string
  }
  children?: Array<Route>
}

export type Route = RouteRecordRaw & Item

export const routes: Array<Route> = [
  {
    path: '/',
    component: () => import('@/views/home.vue'),
    meta: {
      hidden: true,
      title: '首页'
    }
  },
  {
    path: '/lesson1',
    component: () => import('@/views/lesson1/index.vue'),
    meta: {
      title: 'Tree结构扁平化',
      description: '将树形结构的数据，转换为数组'
    }
  },
  {
    path: '/lesson2',
    component: () => import('@/views/lesson2/index.vue'),
    meta: {
      title: '扁平数据结构转Tree',
      description: '扁平化的数组转换为tree结构'
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
