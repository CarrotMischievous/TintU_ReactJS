import {
  removeSessionData,
  saveSessionAsJson
} from "../helper/SessionStorageHelper.js";
import LocalStorageHelper from "../helper/LocalStorageHelper.js";

// personal information action types
export const
  REFRESH_USERINFO = "REFRESH_USERINFO",
  UPDATE_USERINFO = "UPDATE_USERINFO",
  UPDATE_SEX = "UPDATE_SEX",
  UPDATE_CODEAPPLY = "UPDATE_CODEAPPLY",
  UPDATE_USERNAME = "UPDATE_USERNAME",
  UPDATE_USEREMAIL = "UPDATE_USEREMAIL",
  UPDATE_USERPHONE = "UPDATE_USERPHONE",
  UPDATE_VERIFICATIONCODE = "UPDATE_VERIFICATIONCODE";

export const refreshUser = () => {
  return {
    type: REFRESH_USERINFO,
  }
}

export const updateUser = (user) => {
  /* 存储到LocalStorage */
  LocalStorageHelper.save("userInfo", user);

  return {
    type: UPDATE_USERINFO,
    user
  }
}

export const updateUserSex = (sex) => {
  return {
    type: UPDATE_SEX,
    sex,
  }
}

export const applyVeriCode = (vCodeApplied) => {
  return {
    type: UPDATE_CODEAPPLY,
    vCodeApplied,
  }
}

export const updateUserName = (name) => {
  return {
    type: UPDATE_USERNAME,
    name,
  }
}

export const updateUserEmail = (email) => {
  return {
    type: UPDATE_USEREMAIL,
    email,
  }
}

export const updateUserPhone = (phone) => {
  return {
    type: UPDATE_USERPHONE,
    phone,
  }
}

export const updateVCode = (vCode) => {
  return {
    type: UPDATE_VERIFICATIONCODE,
    vCode,
  }
}

// Schedule date/time action types
export const
  UPDATE_SCHEDULE_DATE = "UPDATE_SCHEDULE_DATE",
  CLEAR_SCHEDULE_DATE = "CLEAR_SCHEDULE_DATE",
  UPDATE_SCHEDULE_TIME = "UPDATE_SCHEDULE_TIME",
  CLEAR_SCHEDULE_TIME = "CLEAR_SCHEDULE_TIME";

export const updateScheduleDate = (date) => {
  /* 存储到sessionStorage */
  saveSessionAsJson("scheduleDate", date);

  return {
    type: UPDATE_SCHEDULE_DATE,
    date,
  }
}

export const clearScheduleDate = () => {
  /* 删除sessionStorage */
  removeSessionData("scheduleDate");

  return {
    type: CLEAR_SCHEDULE_DATE,
  }
}

export const updateScheduleTime = (time) => {
  /* 存储到sessionStorage */
  saveSessionAsJson("scheduleTime", time);
  
  return {
    type: UPDATE_SCHEDULE_TIME,
    time,
  }
}

export const clearScheduleTime = () => {
  /* 删除sessionStorage */
  removeSessionData("scheduleTime");

  return {
    type: CLEAR_SCHEDULE_TIME,
  }
}

// store information action types
export const
  UPDATE_STORE_INFO = "UPDATE_STORE_INFO",
  CLEAR_STORE_INFO = "CLEAR_STORE_INFO";

export const updateStoreInfo = (storeInfo) => {
  /* 存储到sessionStorage */
  saveSessionAsJson("storeInfo", storeInfo);

  return {
    type: UPDATE_STORE_INFO,
    storeInfo,
  }
}

export const clearStoreInfo = () => {
  /* 删除sessionStorage */
  removeSessionData("storeInfo");

  return {
    type: CLEAR_STORE_INFO,
  }
}

// product infomation action types
export const
  UPDATE_PRODUCT = "UPDATE_PRODUCT",
  CLEAR_PRODUCT = "CLEAR_PRODUCT";

export const updateProduct = (product) => {
  /* 存储到sessionStorage */
  saveSessionAsJson("product", product);

  return {
    type: UPDATE_PRODUCT,
    product
  }
}

export const clearProduct = () => {
  /* 删除sessionStorage */
  removeSessionData("product");

  return {
    type: CLEAR_PRODUCT,
  }
}

// order information action types
export const
  UPDATE_CHOSED_ADDONS = "UPDATE_CHOSED_ADDONS",
  DELETE_CHOSED_ADDONS = "DELETE_CHOSED_ADDONS",
  CLEAR_CHOSED_ADDONS = "CLEAR_CHOSED_ADDONS";

export const updateChosedAddons = (addon) => {
  return {
    type: UPDATE_CHOSED_ADDONS,
    addon
  }
}

export const deleteChosedAddons = (addon) => {
  return {
    type: DELETE_CHOSED_ADDONS,
    addon
  }
}

export const clearChosedAddons = () => {
  return {
    type: CLEAR_CHOSED_ADDONS,
  }
}