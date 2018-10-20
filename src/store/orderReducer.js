import {
  UPDATE_CHOSED_ADDONS,
  DELETE_CHOSED_ADDONS,
  CLEAR_CHOSED_ADDONS,
} from "./actions.js";

// 这里state是主state的一项属性
export default function (state, action) {
  // console.log(action.type);
  // 初始化
  if (!state) {
    state = {
      chosedAddons: [],
    };
  }

  // 根据Type处理state
  switch(action.type) {
    case UPDATE_CHOSED_ADDONS:
      return {
        ...state,
        chosedAddons: [
          ...state.chosedAddons,
          action.addon,
        ]
      };
    case DELETE_CHOSED_ADDONS:
      /* 找到对应的addon才删除 */
      const position = state.chosedAddons.indexOf(action.addon);
      //console.log(position);
      if (-1 !== position) {
        return {
          ...state,
          chosedAddons: [
            ...state.chosedAddons.slice(0, position),
            ...state.chosedAddons.slice(position + 1),
          ]
        }
      }
      return state;
    case CLEAR_CHOSED_ADDONS:
      return {
        ...state,
        chosedAddons: [],
      };
    default:
      return state;
  }
}