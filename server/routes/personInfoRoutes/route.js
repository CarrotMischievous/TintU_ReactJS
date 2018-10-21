const router = require("express").Router();
const userInfo = require("../../actions/personInfo/userInfo.js");

// 用户id需要带上
const userRoute = "/:idxName/:key";

// 不带id直接返回全部用户信息，这里没有场景返回空
router.get("/", (req, res) => {
  res.status(200).send({});
});

// 后面流程userid、userphone二选一的，中间件处理
router.use(`${userRoute}`, (req, res, next) => {
  //console.log(req.params);
  if (!req.params.key) {
    res.status(400).send({
      error: "Failed to deal with request of personla info without userid or phone.",
    });
    return;
  }

  req.userIndex = {
    index: req.params.key,
    idxName: req.params.idxName,
  }

  next();
});

// 单查一个用户信息
router.get(`${userRoute}`, userInfo.get);

// 更新一个用户信息
router.post(`${userRoute}`, userInfo.update);

// 获取用户的敏感信息，当前为验证码

module.exports = router;