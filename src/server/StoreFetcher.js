import tintuFetch from "./TintuFetch.js";

const storeBaseUrl = "http://192.168.0.176:9001/store";

/* 从数据库读取所有店面 */
const get = (userPhone, resolvedCallback, rejectedCallback) => {
  const reqUrl = `${userInfoBaseUrl}/${userPhone}`;

  tintuFetch(reqUrl, "GET", resolvedCallback, rejectedCallback);
}

module.exports = {
  get,
}