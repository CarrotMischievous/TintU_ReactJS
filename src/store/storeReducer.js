import {
  UPDATE_STORE_INFO,
  CLEAR_STORE_INFO
} from "./actions.js";
import { fetchSessionJson } from "../helper/SessionStorageHelper.js";

/* 这里state是主state的一项属性 */
export default function (state, action) {
  /* 初始化 */
  if (!state) {
    /* state没值的情况从session里面优先尝试读取 */
    const storeInfo = fetchSessionJson("storeInfo") || null;

    // console.log(storeInfo);
    state = storeInfo;
  }

  /* 根据Type处理state */
  switch(action.type) {
    case UPDATE_STORE_INFO:
      return action.storeInfo;
    case CLEAR_STORE_INFO:
      return null;
    default:
      return state;
  }
}