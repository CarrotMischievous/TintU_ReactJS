import {
  UPDATE_PRODUCT_NAME,
  CLEAR_PRODUCT_NAME
} from "./actions.js";

/* 这里state是主state的一项属性 */
export default function (state, action) {
  /* 初始化 */
  if (!state) {
    state = {
      productName: "",
      productChName: "",
    };
  }

  /* 根据Type处理state */
  switch(action.type) {
    case UPDATE_PRODUCT_NAME:
      return {
        productName: action.productName,
        productChName: action.productChName,
      };
    case CLEAR_PRODUCT_NAME:
      return {
        productName: "",
        productChName: "",
      };
    default:
      return state;
  }
}