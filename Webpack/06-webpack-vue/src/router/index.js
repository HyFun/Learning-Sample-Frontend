import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/dashboard",
  },
  {
    path: "/dashboard",
    component: () => import("@/pages/login/index.vue"),
  },
];

const router = new VueRouter({
  mode: "hash",
  routes,
});
export default router;
