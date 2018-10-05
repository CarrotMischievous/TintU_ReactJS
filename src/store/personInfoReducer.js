import {
  UPDATE_SEX,
  UPDATE_CODEAPPLY,
  UPDATE_USERNAME,
  UPDATE_USEREMAIL,
  UPDATE_USERPHONE,
  UPDATE_VERIFICATIONCODE,
} from "./actions.js";

// 这里state是主state的一项属性
export default function (state, action) {
  // 初始化
  if (!state) {
    state = {
      userSex: 0,
      userName: "",
      userEmail: "",
      userPhone: "",
      verificationCode: "",
      vCodeApplied: false,
    };
  }

  // 根据Type处理state
  switch(action.type) {
    case UPDATE_SEX:
      return {
        ...state,
        userSex: action.sex,
      };
    case UPDATE_USERNAME:
      return {
        ...state,
        userName: action.name,
      };
    case UPDATE_USEREMAIL:
      return {
        ...state,
        userEmail: action.email,
      };
    case UPDATE_USERPHONE:
      return {
        ...state,
        userPhone: action.phone,
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