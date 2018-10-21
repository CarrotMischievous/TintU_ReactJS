import {
  REFRESH_USERINFO,
  UPDATE_USERINFO,
  UPDATE_SEX,
  UPDATE_CODEAPPLY,
  UPDATE_USERNAME,
  UPDATE_USEREMAIL,
  UPDATE_USERPHONE,
  UPDATE_VERIFICATIONCODE,
} from "./actions.js";
import LocalStorageHelper from "../helper/LocalStorageHelper.js";

// 这里state是主state的一项属性
export default function (state, action) {
  // 初始化
  if (!state) {
    /* state没值的情况从session里面优先尝试读取 */
    const userInfo = {
      user: {
        sex: 0,
        name: "",
        email: "",
        phone: "",
        ...(LocalStorageHelper.fetch("userInfo") || {})
      },
      verificationCode: "",
      vCodeApplied: false,
    };

    state = userInfo;
    //console.log(state);
  }

  // 根据Type处理state
  switch(action.type) {
    case REFRESH_USERINFO:
      /* 从storage读取刷新redux */
      return {
        ...state,
        user: {
          ...state.user,
          ...(LocalStorageHelper.fetch("userInfo") || {})
        }
      };
    case UPDATE_USERINFO:
      return {
        ...state,
        user: {
          ...state.user,
          ...action.user,
        }
      };
    case UPDATE_SEX:
      return {
        ...state,
        user: {
          ...state.user,
          sex: action.sex,
        }
      };
    case UPDATE_USERNAME:
      return {
        ...state,
        user: {
          ...state.user,
          name: action.name,
        }
      };
    case UPDATE_USEREMAIL:
      return {
        ...state,
        user: {
          ...state.user,
          email: action.email,
        }
      };
    case UPDATE_USERPHONE:
      return {
        ...state,
        user: {
          ...state.user,
          phone: action.phone,
        }
      };
    case UPDATE_VERIFICATIONCODE:
      return {
        ...state,
        verificationCode: action.vCode,
      };
    case UPDATE_CODEAPPLY:
      return {
        ...state,
        vCodeApplied: action.vCodeApplied,
      };
    default:
      return state;
  }
}