const User = require("../../dbViews/user/user.js");
const table_user = new User();

// 获取用户信息全量内容
const get = (req, res) => {
  const userId = req.params.userid;

  table_user.search([userId], (err, data) => {
    //console.log(req.url, data);
    if (err) {
      res.status(404).send({
        error: "No data matched in user.",
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

// 获取用户信息全量内容
const update = (req, res) => {
  console.log(req.param);
  res.status(200);
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