const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const baseWebpackConfig = require('./webpack.base.config');

// Webpack uses `publicPath` to determine where the app is being served from.
// In development, we always serve from the root. This makes config easier.
const publicPath = '/';

// 获取根目录相对路径
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = merge(baseWebpackConfig, {
  devtool: false,
  
  mode: "production", // webpack 中加入了 mode 参数设定开发环境
  
  entry: {
    app: resolveApp('src/index.js'),
  },

  output: {
    filename: 'static/js/[name].bundle.js',
    path: resolveApp('build'),
    publicPath: publicPath,
  },

  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        // 开启多线程
        parallel: true,
        uglifyOptions: {
          compress: {
            // 去除 console
            drop_console: true,
            // 去除部分影响性能代码，如：1/0
            keep_infinity: true,
          },
          output: {
            // 去除注释
            comments: false,
            // 紧凑输出
            beautify: false
          }
        }
      })
    ]
  },

  plugins: [
    /* module闭包优化 */
    new webpack.optimize.ModuleConcatenationPlugin(),
  ]
});