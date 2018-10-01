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