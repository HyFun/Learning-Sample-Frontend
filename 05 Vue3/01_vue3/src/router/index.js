/*
 * @Author       : heyongfeng
 * @Date         : 2021-04-21 22:09:08
 * @Description  :
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-04-21 22:58:51
 */
import { createRouter, createWebHashHistory } from "vue-router";
import Layout from "../App.vue";

const routes = [
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "/",
        component: () => import("../views/index.vue"),
      },
      {
        path: "/lesson1",
        component: () => import("../views/lesson1/index.vue"),
      },
      {
        path: "/lesson2",
        component: () => import("../views/lesson2/index.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
