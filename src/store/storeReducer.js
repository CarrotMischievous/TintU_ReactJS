import {
  UPDATE_STORE
} from "./actions.js";

/* 这里state是主state的一项属性 */
export default function (state, action) {
  /* 初始化 */
  if (!state) {
    state = {
      store: {
        id: 1,
        name: "南京玄武店",
        address: "南京市玄武大道金茂汇",
        phone: "18512542541",
        email: "njtzl@gmail.com",
        path: "南京轨道交通一号线玄武门站（1号出口）",
      },
    };
  }

  /* 根据Type处理state */
  switch(action.type) {
    case UPDATE_STORE:
      return {
        store: action.store,
      };
    default:
      return state;
  }
}