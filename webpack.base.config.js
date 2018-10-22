const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
// webpack 4.0 中用来抽离css 的插件
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// Id标识模块多进程打包插件(ubuntu搞不定)

// 获取根目录相对路径
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

// app代码路径
const appSrcPath = resolveApp('src');
const nodeModules = resolveApp('node_modules');

// 当前配置环境
const isDev = !!(process.env.NODE_ENV != 'production');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        enforce: 'pre',
        use: [
          {
            options: {
              eslintPath: require.resolve('eslint'),
              // @remove-on-eject-begin
              baseConfig: {
                extends: [require.resolve('eslint-config-react-app')],
              },
              ignore: false,
              useEslintrc: false,
              // @remove-on-eject-end
            },
            loader: require.resolve('eslint-loader'),
          },
        ],
      },
      {
        oneOf: [
          {
            test: /\.(png|svg|jpg|gif)/,
            use: [
              {
                loader: 'url-loader',
                options: {
                  limit: 10000,
                  name: 'static/media/[name].[hash:8].[ext]',
                }
              }
            ]
          },
          {
            test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
            // use: ['happypack/loader?id=happy-font']
            use: [{
                loader: 'file-loader',
                options: {
                    limit: 10000,
                    name: 'static/font/[name].[hash:8].[ext]'
                }
            }]
          },
          {
            test: /\.jsx?$/,
            exclude: nodeModules, // 屏蔽依赖库代码
            include: appSrcPath,
            use: [
              {
                loader: 'cache-loader',
                options: {
                  cacheDirectory: resolveApp('.cache--happypack')
                }
              },
              {
                loader: 'babel-loader',
              }
            ]
          },
          {
            test: /\.css$/,
            use: [
              {
                loader: 'style-loader'
              },
              {
                loader: 'css-loader',
                query: {
                  minimize: false, // 压缩css功能在postcss中启用
                  importLoaders: 1
                }
              },
              {
                loader: 'postcss-loader',
                query: {
                  config: {
                    path: resolveApp('postcss.config.js')
                  },
                }
              }

            ]
          },
          {
            test: /\.less$/,
            use: [
              ...(isDev ? [{
                loader: 'style-loader'
              }] : [{
                loader: 'style-loader'
              },
              MiniCssExtractPlugin.loader
              ]),
              {
                loader: 'css-loader',
                query: {
                  minimize: false, // 压缩css功能在postcss中启用
                  importLoaders: 2
                }
              },
              {
                loader: 'postcss-loader',
                query: {
                  config: {
                    path: resolveApp('postcss.config.js')
                  },
                }
              },
              {
                loader: 'less-loader',
                query: {}
              }
            ]
          },
        ]
      }
    ]
  },

  plugins: [
    /* Css整合 */
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "[name].css"
    }),
  ],
}