// 主要页面标记
export const
  PAGE_ROOT  = "/",
    PAGE_INDEX          = "/tintu",
      PAGE_STORE_CHOOSE   = "/tintu/store",
      PAGE_SERVE          = "/tintu/service",
        PAGE_PRODUCT        = "/tintu/service/product",
          PAGE_SCHEDULE_DATE  = "/tintu/service/schedule/date",
          PAGE_SCHEDULE_TIME  = "/tintu/service/schedule/time",
          PAGE_ORDER_ADDON    = "/tintu/service/addons",
      PAGE_SELF           = "/tintu/myself",
      PAGE_NOTIF          = "/tintu/notification",
      PAGE_ORDER          = "/tintu/orders";

// 带参数的页面
export const routeServiceProduct = (storeId, productName) => {
  return `${routeService(storeId)}/product/${productName}`;
}

export const routeService = (storeId) => {
  return `${PAGE_INDEX}/service/store/${storeId}`;
}

export const routeProduct2Schedule = (curPath) => {
  return `${curPath}/schedule/date`;
}