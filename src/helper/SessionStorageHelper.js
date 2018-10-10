/* 存储对象至SessionStorage */
export const saveSessionAsJson = (type, data) => {
  sessionStorage.setItem(type, JSON.stringify(data));
}

/* 解析对象从SessionStorage */
export const fetchSessionJson = (type) => {
  const result = sessionStorage.getItem(type);

  try {
    return JSON.parse(result);
  } catch(err) {
    return null;
  }
}

/* 删除存储对象 */
export const removeSessionData = (type) => {
  sessionStorage.removeItem(type);
}