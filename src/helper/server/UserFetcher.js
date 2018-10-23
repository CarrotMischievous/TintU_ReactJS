import { tintuFetch, tintuPost, TINT_SERVER } from "./TintuFetch.js";

const userInfoBaseUrl = `${TINT_SERVER}/user`;

/* 从数据库读取UserInfo */
const fetchByPhone = (userPhone, resolvedCallback, rejectedCallback) => {
  const reqUrl = `${userInfoBaseUrl}/phone/${userPhone}`;

  tintuFetch(reqUrl, resolvedCallback, rejectedCallback);
}

/* 从数据库读取UserInfo */
const saveUserByPhoneWithVCode = (user, resolvedCallback, rejectedCallback) => {
  const reqUrl = `${userInfoBaseUrl}/id/${user.id}`;
  const reqUser = {...user};
  delete reqUser.id;
  const reqBody = JSON.stringify(reqUser);

  tintuPost(reqUrl, reqBody, resolvedCallback, rejectedCallback);
}

module.exports = {
  fetchByPhone,
  saveUserByPhoneWithVCode
}