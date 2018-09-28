import React from "react";
import { Route } from "react-router-dom";
import WelcomePage from "../pages/index/WelcomePage.jsx";
import ServicePage from "../pages/service/ServicePage.jsx";
import MyInfoPage from "../pages/myinfo/MyInfoPage.jsx";

// 主要页面标记
export const PAGE_INDEX = "/index",
  PAGE_SERVE = "/service",
  PAGE_SELF = "/myself",
  PAGE_NOTIF = "/notification",
  PAGE_ORDER = "/orders";

// 主页面标记对于的path以及page组件
const pagePaths = {
  [PAGE_INDEX]: WelcomePage,
  [PAGE_SERVE]: ServicePage,
  [PAGE_SELF]: MyInfoPage,
  [PAGE_NOTIF]: undefined,
  [PAGE_ORDER]: undefined,
};

// 根据Path提供对应的Route路由(hoc)
export function PageRoute(props) {
  let routePath = props.path;
  routePath = props.matchUrl ? `${props.matchUrl}${routePath}` : `${routePath}`;

  return <Route path={routePath} component={pagePaths[routePath]} />;
}
