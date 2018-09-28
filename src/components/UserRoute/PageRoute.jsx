import React from "react";
import { Route } from "react-router-dom";
import * as routes from "../../routes/userRoutes.js";
import WelcomePage from "../../pages/index/WelcomePage.jsx";
import ServicePage from "../../pages/service/ServicePage.jsx";
import MyInfoPage from "../../pages/myinfo/MyInfoPage.jsx";

// 主页面标记对于的path以及page组件
const pagePaths = {
  [routes.PAGE_INDEX]: WelcomePage,
  [routes.PAGE_SERVE]: ServicePage,
  [routes.PAGE_SELF]: MyInfoPage,
  [routes.PAGE_NOTIF]: undefined,
  [routes.PAGE_ORDER]: undefined,
};

// 根据Path提供对应的Route路由(hoc)
export default function PageRoute(props) {
  let routePath = props.path;
  routePath = props.matchUrl ? `${props.matchUrl}${routePath}` : `${routePath}`;

  return <Route path={routePath} component={pagePaths[routePath]} />;
}