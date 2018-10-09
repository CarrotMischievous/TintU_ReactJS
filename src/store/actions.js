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
  UPDATE_DATE_SELECTED = "UPDATE_DATE_SELECTED",
  UPDATE_TIME_SELECTED = "UPDATE_TIME_SELECTED";

export const updateDateSelected = (selectedIndex) => {
  return {
    type: UPDATE_DATE_SELECTED,
    selectedIndex,
  }
}

export const updateTimeSelected = (selectedIndex) => {
  return {
    type: UPDATE_TIME_SELECTED,
    selectedIndex,
  }
}

// store information action types
export const
  UPDATE_STORE = "UPDATE_STORE";

export const updateStore = (store) => {
  return {
    type: UPDATE_STORE,
    store,
  }
}

// product infomation action types
export const
  UPDATE_PRODUCT_NAME = "UPDATE_PRODUCT_NAME",
  CLEAR_PRODUCT_NAME = "CLEAR_PRODUCT_NAME";

export const updateProductName = (productName, productChName) => {
  return {
    type: UPDATE_PRODUCT_NAME,
    productName,
    productChName: productChName || productName,
  }
}

export const clearProductName = () => {
  return {
    type: CLEAR_PRODUCT_NAME,
  }
}