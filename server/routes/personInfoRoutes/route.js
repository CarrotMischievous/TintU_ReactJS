const router = require("express").Router();
const userInfo = require("../../actions/personInfo/userInfo.js");

// 用户id需要带上
const userId = "/user/:userid";

// 不带id直接返回全部用户信息，这里没有场景返回空
router.get("/", (req, res) => {
  res.status(200).send({});
});

// 后面流程userid是必须的，中间件处理
router.use(`${userId}`, (req, res, next) => {
  if (!req.params.userid) {
    res.status(400).send({
      error: "Failed to deal with request of personla info without userid.",
    });
    return;
  }
  
  next();
});

// 单查一个用户信息
router.get(`${userId}`, userInfo.get);

// 单写一个用户信息
router.post(`${userId}/add`, userInfo.add);

// 更新一个用户信息
router.post(`${userId}/update`, userInfo.update)

// 获取用户的敏感信息，当前为验证码
router.get(`${userId}/vcode`, userInfo.getVCode);

module.exports = router;