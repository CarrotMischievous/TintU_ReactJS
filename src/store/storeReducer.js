import {
  UPDATE_STORE,
  CLEAR_STORE
} from "./actions.js";
import { fetchSessionJson } from "../helper/sessionStorageHelper.js";

/* 这里state是主state的一项属性 */
export default function (state, action) {
  /* 初始化 */
  if (!state) {
    /* state没值的情况从session里面优先尝试读取 */
    const store = fetchSessionJson("store") || null;

    //console.log(store);
    state = store;
  }

  /* 根据Type处理state */
  switch(action.type) {
    case UPDATE_STORE:
      return action.store;
    case CLEAR_STORE:
      return null;
    default:
      return state;
  }
}