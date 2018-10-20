import { SEX_MAN } from "./constants.js";

/* 基于当前已经选择的信息创建一个Order信息 */
export const generateOrderBySchedule = (user, products, schedule, storeInfo) =>{
  const order = {};

  order.userName = `${user.name}（${user.sex === SEX_MAN ? "先生" : "女士"}）`;
  order.userPhone = user.phone;
  order.userEmail = user.email;
  order.shotDate = schedule.date;
  order.shotTime = schedule.time;
  order.store = storeInfo;

  /* 所有选择产品的中文名字列表 */
  order.productList = products.map((product) => (
    product.productChName
  ));
  /* 所有产品总耗时 */
  order.takeTime = products.reduce((accumulator, product) => (
    accumulator + product.spendTime
  ), 0);
  /* 所有产品总价值 */
  order.totalPrice = products.reduce((accumulator, product, index) => {
    /* 除了第一个后面都是优惠价 */
    if (0 === index) {
      return accumulator + product.price;
    }

    return accumulator + (product.price - product.discount);
  }, 0);
  /* 所有产品总定金(最大100，取10倍数) */
  order.frontMoney = Math.round(Math.min((order.totalPrice / 4), 100) / 10) * 10;

  return order;
}

/* 基于数据库传来的数据信息创建一个Order信息 */
export const generateOrderByServer = (user, orderInfo, storeInfo) =>{
  const order = {
    ...orderInfo,
  }

  order.userName = user.name;
  order.userPhone = user.phone;
  order.userEmail = user.email;
  order.store = storeInfo;

  return order;
}