/* 存储对象至LocalStorage */
const save = (type, data) => {
  localStorage.setItem(type, JSON.stringify(data));
}

/* 解析对象从LocalStorage */
const fetch = (type) => {
  const result = localStorage.getItem(type);

  try {
    return JSON.parse(result);
  } catch(err) {
    return null;
  }
}

module.exports = {
  save,
  fetch,
}