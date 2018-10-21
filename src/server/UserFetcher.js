import { tintuFetch, tintuPost } from "./TintuFetch.js";

const userInfoBaseUrl = "http://192.168.0.176:9001/user";

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