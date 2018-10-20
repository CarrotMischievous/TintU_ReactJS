import React from "react";
import { Route } from "react-router-dom";
import * as routes from "../../routes/userRoutes.js";
import AppNavBar from "../../components/AppNavBar/AppNavBar.jsx";
import WelcomePage from "../../pages/index/WelcomePage.jsx";
import ServicePage from "../../pages/service/ServicePage.jsx";
import ProductPage from "../../pages/product/ProductPage.jsx";
import MyInfoPage from "../../pages/myinfo/MyInfoPage.jsx";
import ScheduleDatePage from "../../pages/schedule/ScheduleDatePage.jsx";
import ScheduleTimePage from "../../pages/schedule/ScheduleTimePage.jsx";
import OrderAddOnsPage from "../../pages/orders/OrderAddOnsPage.jsx";
import StoreChoosePage from "../../pages/store/StoreChoosePage.jsx";
import OrderConfirmPage from "../../pages/orders/OrderConfirmPage.jsx";
import MyOrderPage from "../../pages/orders/MyOrderPage.jsx";

// 主页面标记对于的path以及page组件
const pagePaths = {
  [routes.PAGE_ROOT]: AppNavBar,
  [routes.PAGE_INDEX]: WelcomePage,
  [routes.PAGE_STORE_CHOOSE]: StoreChoosePage,
  [routes.PAGE_SERVE]: ServicePage,
  [routes.PAGE_PRODUCT]: ProductPage,
  [routes.PAGE_SCHEDULE_DATE]: ScheduleDatePage,
  [routes.PAGE_SCHEDULE_TIME]: ScheduleTimePage,
  [routes.PAGE_ORDER_ADDON]: OrderAddOnsPage,
  [routes.PAGE_ORDER_CONFIRM]: OrderConfirmPage,
  [routes.PAGE_SELF]: MyInfoPage,
  [routes.PAGE_NOTIF]: undefined,
  [routes.PAGE_ORDER]: MyOrderPage,
};

// 根据Path提供对应的Route路由(hoc)
export default function PageRoute(props) {
  let routePath = props.path;
  routePath = props.matchUrl ? `${props.matchUrl}${routePath}` : `${routePath}`;

  return <Route exact={props.exact || false} path={routePath} component={pagePaths[routePath]} />;
}