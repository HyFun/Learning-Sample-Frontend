import { lazy, Suspense } from "react";

import Loading from "../components/Loading";
import { Link, Switch } from "react-router-dom";
import { Route, Redirect } from "react-router-dom";

export const routes = [
  {
    path: "/",
    title: "首页",
    component: lazy(() => import("../pages/Index")),
  },
  {
    path: "/lesson01",
    title: "课时1：useState使用",
    component: lazy(() => import("../pages/lesson01/index")),
  },
  {
    path: "/lesson02",
    title: "课时2：useEffect使用",
    component: lazy(() => import("../pages/lesson02/index")),
  },
  {
    path: "/lesson03",
    title: "课时3：useRef使用",
    component: lazy(() => import("../pages/lesson03/index")),
  },
  {
    path: "/lesson04",
    title: "课时4：useCallback使用",
    component: lazy(() => import("../pages/lesson04/index")),
  },
  {
    path: "/lesson05",
    title: "课时5：useReducer使用",
    component: lazy(() => import("../pages/lesson05/index")),
  },
  {
    path: "/lesson06",
    title: "课时6：useContext使用",
    component: lazy(() => import("../pages/lesson06/index")),
  },
];

export const Routes = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        {routes.map((v) => (
          <Route exact path={v.path} component={v.component} key={v.path}></Route>
        ))}
        <Redirect to="/" />
      </Switch>
    </Suspense>
  );
};

export const Menus = () => {
  // 过滤掉首页
  const list = routes.filter((v) => v.path !== "/");
  return (
    <ul>
      {list.map((v) => (
        <li key={v.path}>
          <Link to={v.path}>{v.title}</Link>
        </li>
      ))}
    </ul>
  );
};
