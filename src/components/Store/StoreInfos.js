/* 数据库信息，这里先写死 */
const stores = [
  "上交徐汇店",
];

/* 各个店的ID */
export const STORE_SJXH_ID = 0;

/* 获取ID对应的店名 */
export const displayStoreName = (store_id) => {
  const id = parseInt(store_id, 10);

  if (isNaN(id) || id < 0 || id > stores.length) {
    return "";
  }

  return stores[id];
}