const router = require('express').Router();
const bodyParser = require('body-parser');
const indexRoutes = require("./indexRoutes/route.js");
const reactRoutes = require("./reactRoutes/route.js");
const personInfoRoutes = require("./personInfoRoutes/route.js");
const storeRoutes = require("./storeRoutes/route.js");
const productRoutes = require("./productRoutes/route.js");

// 基础中间件
router.use(bodyParser.json());

// 集成其他routes
// 首页
router.use("/", indexRoutes);
// 前端界面
router.use("/tintu", reactRoutes);
// 个人信息
router.use("/user", personInfoRoutes);
// 店面信息
router.use("/store", storeRoutes);
// 产品信息
router.use("/product", productRoutes);

module.exports = router;