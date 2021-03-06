const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.config');

// Webpack uses `publicPath` to determine where the app is being served from.
// In development, we always serve from the root. This makes config easier.
const publicPath = '/';

// 获取根目录相对路径
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = merge(baseWebpackConfig, {
  devtool: 'source-map',
  
  mode: "development", // webpack 中加入了 mode 参数设定开发环境
  
  entry: {
    app: resolveApp('src/index.js'),
  },

  output: {
    filename: 'static/js/[name].bundle.js',
    path: resolveApp('build'),
    publicPath: publicPath,
  },

  plugins: [
    /* HMR显示模块相对路径 */
    new webpack.NamedModulesPlugin(),
    /*new webpack.HotModuleReplacementPlugin(),*/
  ],

  devServer: {
    contentBase: resolveApp('build'),
    historyApiFallback: true,
    disableHostCheck: true,
  },
});