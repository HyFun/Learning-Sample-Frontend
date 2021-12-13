import { lazy } from "react";

const routes = [
  {
    path: "/index",
    component: lazy(() => import("../pages")),
    title: "首页",
  },
  {
    path: "/lesson1",
    component: lazy(() => import("../pages/lesson01")),
    title: "课时1：useState使用",
  },
  {
    path: "/lesson2",
    component: lazy(() => import("../pages/lesson02")),
    title: "课时2：useEffect使用",
  },
  {
    path: "/lesson3",
    component: lazy(() => import("../pages/lesson03")),
    title: "课时3：useRef使用",
  },
  {
    path: "/lesson4",
    component: lazy(() => import("../pages/lesson04")),
    title: "课时4：useReducer使用",
  },
  {
    path: "/lesson5",
    component: lazy(() => import("../pages/lesson05")),
    title: "课时5：useContext使用",
  },
  {
    path: "/lesson6",
    component: lazy(() => import("../pages/lesson06")),
    title: "课时6: todo-list案例",
  },
  {
    path: "/lesson7",
    component: lazy(() => import("../pages/lesson07")),
    title: "课时7：useMemo使用",
  },
  {
    path: "/lesson8",
    component: lazy(() => import("../pages/lesson08")),
    title: "课时8：useCallback使用",
  },
  {
    path: "/lesson9",
    component: lazy(() => import("../pages/lesson09")),
    title: "课时9：自定义hooks",
  },
  {
    path: "/lesson10",
    component: lazy(() => import("../pages/lesson10")),
    title: "课时10：useRequest使用",
  },
];

export default routes;
