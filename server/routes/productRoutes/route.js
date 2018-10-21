const router = require("express").Router();
const product = require("../../actions/products/product.js");

const productName = "/name/:name";

// 不带id直接返回全部用户信息，这里没有场景返回空
router.get("/", (req, res) => {
  res.status(200).send({});
});


// 根据地区获取店面信息
router.get(`${productName}`, product.getByName);

module.exports = router;