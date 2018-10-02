const router = require('express').Router();
const indexRoutes = require("./indexRoutes/route.js");
const reactRoutes = require("./reactRoutes/route.js");
const personInfoRoutes = require("./personInfoRoutes/route.js");

// 集成其他routes
// 首页
router.use("/", indexRoutes);
// 前端界面
router.use("/tintu", reactRoutes);
// 个人信息
router.use("/personInfo", personInfoRoutes);

module.exports = router;