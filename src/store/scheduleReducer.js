import {
  UPDATE_DATE_SELECTED,
  UPDATE_TIME_SELECTED
} from "./actions.js";

// 这里state是主state的一项属性
export default function (state, action) {
  // 初始化
  if (!state) {
    state = {
      dateSelectedIndex: -1,
      timeSelectedIndex: -1,
    };
  }

  // 根据Type处理state
  switch(action.type) {
    case UPDATE_DATE_SELECTED:
      return {
        dateSelectedIndex: action.selectedIndex,
      };
    case UPDATE_TIME_SELECTED:
      return {
        timeSelectedIndex: action.selectedIndex,
      };
    default:
      return state;
  }
}