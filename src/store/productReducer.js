import {
  UPDATE_PRODUCT,
  CLEAR_PRODUCT
} from "./actions.js";
import { fetchSessionJson } from "../helper/sessionStorageHelper.js";

/* 这里state是主state的一项属性 */
export default function (state, action) {
  /* 初始化 */
  if (!state) {
    /* state没值的情况从session里面优先尝试读取 */
    const product = fetchSessionJson("product") || null;

    //console.log(product);
    state = product;
  }

  /* 根据Type处理state */
  switch(action.type) {
    case UPDATE_PRODUCT:
      return action.product;
    case CLEAR_PRODUCT:
      return null;
    default:
      return state;
  }
}