/*
 * @Author       : heyongfeng
 * @Date         : 2021-04-21 22:09:08
 * @Description  :
 * @LastEditors  : heyongfeng
<<<<<<< HEAD
 * @LastEditTime : 2021-05-04 01:06:27
=======
 * @LastEditTime : 2021-04-30 12:27:45
>>>>>>> 4061ed64a30c6ba4c622123e343d14584498f8a6
 */
import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '../App.vue'

export const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/',
        component: () => import('../views/index.vue'),
        meta: {
          hidden: true
        }
      },
      {
        path: '/lesson1',
        component: () => import('../views/lesson1/index.vue'),
        meta: {
          title: '课时一'
        }
      },
      {
        path: '/lesson2',
        component: () => import('../views/lesson2/index.vue'),
        meta: {
          title: '课时二'
        }
      },
      {
        path: '/lesson3',
        component: () => import('../views/lesson3/index.vue'),
        meta: {
          title: '课时三'
        }
      },
      {
        path: '/lesson4',
        component: () => import('../views/lesson4/index.vue'),
        meta: {
          title: '课时四：自定义v-model'
        }
      },
      {
        path: '/lesson5',
        component: () => import('../views/lesson5/index.vue'),
        meta: {
          title: '课时五：插槽slot'
        }
      },
      {
        path: '/lesson6',
        component: () => import('../views/lesson6/index.vue'),
        meta: {
          title: '课时六：生命周期函数、动态组件、keep-alive'
        }
      },
      {
        path: '/lesson7',
        component: () => import('../views/lesson7/index.vue'),
        meta: {
          title: '课时七：全局属性'
        }
      },
      {
        path: '/lesson8',
        component: () => import('../views/lesson8/index.vue'),
        meta: {
<<<<<<< HEAD
          title: '课时八：provider和inject'
=======
          title: '课时八：Composition API'
>>>>>>> 4061ed64a30c6ba4c622123e343d14584498f8a6
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
