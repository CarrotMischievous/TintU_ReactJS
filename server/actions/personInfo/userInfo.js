const User = require("../../dbViews/user/user.js");
const table_user = new User();

// 获取用户信息全量内容
const get = (req, res) => {
  table_user.search([req.userIndex.idxName], [req.userIndex.index], (err, data) => {
    //console.log(req.url, data);
    if (err) {
      res.status(404).send({
        error: err.code,
      });
      return;
    }

    res.status(200).send(data);
  });
}

// 获取用户信息全量内容
const add = (req, res) => {
  console.log(req.params);
  res.status(200).send(req.params);
}

// 基于部分信息更新用户
const update = (req, res) => {
  const queryNames = [],
        queryParams = [];

  /* 遍历全部body数据 */
  Object.getOwnPropertyNames(req.body).forEach((property) => {
    queryNames.push(property);
    queryParams.push(req.body[property]);
  });

  table_user.update(queryNames, [req.userIndex.idxName], 
    [...queryParams, req.userIndex.index], (err, data) => {
    //console.log(req.url, data);
    if (err) {
      res.status(404).send({
        error: err.code,
      });
      return;
    }

    res.status(200).send(data);
  });
}

// 获取用户信息全量内容
const getVCode = (req, res) => {
  console.log(req.param);
  res.status(200);
}

module.exports = {
  get,
  add,
  update,
  getVCode
}