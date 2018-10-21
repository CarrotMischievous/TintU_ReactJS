const express = require("express");
const path = require("path");

// 加载路由控制
const router = require("./routes/routes.js");

var app = express();
const appRouter = express.Router();

// 模板不需要，由REACTJS前端静态资源渲染

// 定义favicon

// 定义数据解析器

// 定义静态文件目录
app.use("/static", express.static(path.join(__dirname, "../build/static")));

// 跨越支持
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

// 匹配路径
app.use("/", router);

// 404处理
app.use((req, res, next) => {
  res.status(404).send("Sorry can't find that!");
});

// 开发环境，500错误处理和错误堆栈跟踪
if (app.get("env") === "development") {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render("error", {
      message: err.message,
      error: err
    });
  });
}

// 生产环境，500错误处理
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.send({
    message: err.message,
    error: {}
  });
});

// 输出模型app
module.exports = app;