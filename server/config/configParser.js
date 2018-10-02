const fs = require("fs");
const path = require("path");

// 配置文件类型
const SERVER_BASE = "ServerBaseConfig.json";

/* 解析函数 */
const configParser = (confType) => {
  let config = {};

  // 默认使用ServerBase配置，获取绝对路径
  if (!confType || "string" !== typeof confType || !confType.match(/.*\.json$/g)) {
    confType = SERVER_BASE;
  }
  const confPath = path.join(__dirname, confType);

  // 读取文件，JSON转换
  try {
    const configJson = fs.readFileSync(confPath, 'utf-8');
    config = JSON.parse(configJson);
  } catch(err) {
    return {};
  }

  return config;
}

module.exports = {
  SERVER_BASE,
  configParser
};