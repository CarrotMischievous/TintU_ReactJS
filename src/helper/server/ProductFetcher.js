import { tintuFetch, TINT_SERVER } from "./TintuFetch.js";

const productBaseUrl = `${TINT_SERVER}/product`;

/* 从数据库读取Product信息 */
const fetchByName = (name, resolvedCallback, rejectedCallback) => {
  const reqUrl = `${productBaseUrl}/name/${name}`;

  tintuFetch(reqUrl, resolvedCallback, rejectedCallback);
}

module.exports = {
  fetchByName,
}