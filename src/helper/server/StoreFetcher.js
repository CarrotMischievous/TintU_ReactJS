import { tintuFetch, TINT_SERVER } from "./TintuFetch.js";

const storeBaseUrl = `${TINT_SERVER}/store`;

/* 从数据库读取地区所有店面 */
const fetchStoresByDistrict = (district, resolvedCallback, rejectedCallback) => {
  const reqUrl = `${storeBaseUrl}/district/${district}`;

  tintuFetch(reqUrl, resolvedCallback, rejectedCallback);
}

module.exports = {
  fetchStoresByDistrict,
}