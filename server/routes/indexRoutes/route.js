const router = require('express').Router();
const path = require("path");

// 首页重定向到React
router.get("/", (req, res) => {
  res.redirect("/tintu");
});

module.exports = router;