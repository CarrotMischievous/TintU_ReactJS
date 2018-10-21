const Store = require("../../dbViews/store/store.js");
const table_store = new Store();

// 获取当前地区全量的店面信息
const getByDistrict = (req, res) => {
  const district = req.params.district;

  table_store.search([district], (err, data) => {
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
  getByDistrict,
  add,
  update
}