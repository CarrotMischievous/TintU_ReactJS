import { tintuFetch } from "./TintuFetch.js";

const productBaseUrl = "http://192.168.0.176:9001/product";

/* 从数据库读取Product信息 */
const fetchByName = (name, resolvedCallback, rejectedCallback) => {
  const reqUrl = `${productBaseUrl}/name/${name}`;

  tintuFetch(reqUrl, resolvedCallback, rejectedCallback);
}

module.exports = {
  fetchByName,
}