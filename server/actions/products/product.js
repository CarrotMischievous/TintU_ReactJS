const Product = require("../../dbViews/product/product.js");
const table_store = new Product();

// 获取当前地区全量的店面信息
const getByName = (req, res) => {
  const name = req.params.name;

  table_store.search([name], (err, data) => {
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

// 获取用户信息全量内容
const update = (req, res) => {
  console.log(req.param);
  res.status(200);
}

module.exports = {
  getByName,
  add,
  update
}