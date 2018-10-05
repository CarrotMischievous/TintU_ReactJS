// 主要页面标记
export const
  PAGE_ROOT  = "/",
    PAGE_INDEX = "/tintu",
    PAGE_SERVE = "/tintu/service",
    PAGE_PRODUCT = "/tintu/service/detail",
    PAGE_SELF  = "/tintu/myself",
    PAGE_NOTIF = "/tintu/notification",
    PAGE_ORDER = "/tintu/orders";

// 带参数的页面
export const routeServerProduct = (productName) => {
  return `${PAGE_SERVE}/detail/?product=${productName}`;
}