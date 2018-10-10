import {
  UPDATE_SCHEDULE_DATE,
  UPDATE_SCHEDULE_TIME,
  CLEAR_SCHEDULE_DATE,
  CLEAR_SCHEDULE_TIME,
  INIT_SCHEDULE
} from "./actions.js";
import { fetchSessionJson } from "../helper/sessionStorageHelper.js";

// 这里state是主state的一项属性
export default function (state, action) {
  // console.log(action.type);
  // 初始化
  if (!state) {
    /* state没值的情况从session里面优先尝试读取 */
    const date = fetchSessionJson("scheduleDate") || null;
    const time = fetchSessionJson("scheduleTime") || -1;

    state = {
      date,
      time,
    };
  }

  // 根据Type处理state
  switch(action.type) {
    case UPDATE_SCHEDULE_DATE:
      return {
        ...state,
        date: action.date,
      };
    case UPDATE_SCHEDULE_TIME:
      return {
        ...state,
        time: action.time,
      };
    case CLEAR_SCHEDULE_DATE:
      return {
        ...state,
        date: null,
      };
    case CLEAR_SCHEDULE_TIME:
      return {
        ...state,
        time: -1,
      };
    case INIT_SCHEDULE:
      return state;
    default:
      return state;
  }
}