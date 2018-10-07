// 主要页面标记
export const
  PAGE_ROOT  = "/",
    PAGE_INDEX          = "/tintu",
      PAGE_SERVE          = "/tintu/service/store/:store",
        PAGE_PRODUCT        = "/tintu/service/store/:store/product/:productName",
          PAGE_SCHEDULE_DATE  = "/tintu/service/store/:store/product/:productName/schedule/date",
          PAGE_SCHEDULE_TIME  = "/tintu/service/store/:store/product/:productName/schedule/date/time",
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