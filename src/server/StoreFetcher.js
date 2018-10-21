import { tintuFetch } from "./TintuFetch.js";

const storeBaseUrl = "http://192.168.0.176:9001/store";

/* 从数据库读取地区所有店面 */
const fetchStoresByDistrict = (district, resolvedCallback, rejectedCallback) => {
  const reqUrl = `${storeBaseUrl}/district/${district}`;

  tintuFetch(reqUrl, resolvedCallback, rejectedCallback);
}

module.exports = {
  fetchStoresByDistrict,
}