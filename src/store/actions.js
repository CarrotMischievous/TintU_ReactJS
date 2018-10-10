import {
  removeSessionData,
  saveSessionAsJson
} from "../helper/sessionStorageHelper.js";

// personal information action types
export const UPDATE_SEX = "UPDATE_SEX",
  UPDATE_CODEAPPLY = "UPDATE_CODEAPPLY",
  UPDATE_USERNAME = "UPDATE_USERNAME",
  UPDATE_USEREMAIL = "UPDATE_USEREMAIL",
  UPDATE_USERPHONE = "UPDATE_USERPHONE",
  UPDATE_VERIFICATIONCODE = "UPDATE_VERIFICATIONCODE";

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
  CLEAR_SCHEDULE_TIME = "CLEAR_SCHEDULE_TIME",
  INIT_SCHEDULE = "INIT_SCHEDULE";

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

export const initSchedule = () => {
  return {
    type: INIT_SCHEDULE,
  }
}

// store information action types
export const
  UPDATE_STORE = "UPDATE_STORE",
  CLEAR_STORE = "CLEAR_STORE";

export const updateStore = (store) => {
  /* 存储到sessionStorage */
  saveSessionAsJson("store", store);

  return {
    type: UPDATE_STORE,
    store,
  }
}

export const clearStore = () => {
  /* 删除sessionStorage */
  removeSessionData("store");
  
  return {
    type: UPDATE_STORE,
  }
}

// product infomation action types
export const
  UPDATE_PRODUCT = "UPDATE_PRODUCT",
  CLEAR_PRODUCT = "CLEAR_PRODUCT",
  INIT_PRODUCT = "INIT_PRODUCT";

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

export const initProduct = () => {
  return {
    type: INIT_PRODUCT,
  }
}