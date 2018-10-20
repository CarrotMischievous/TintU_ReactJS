import tintuFetch from "./TintuFetch.js";

const userInfoBaseUrl = "http://192.168.0.176:9001/personInfo/user";

/* 从数据库读取UserInfo */
const fetchByPhone = (userPhone, resolvedCallback, rejectedCallback) => {
  const reqUrl = `${userInfoBaseUrl}/${userPhone}`;

  tintuFetch(reqUrl, "GET", resolvedCallback, rejectedCallback);
}

module.exports = {
  fetchByPhone,
}