const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
// webpack 4.0 中用来抽离css 的插件
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// Id标识模块多进程打包插件
const HappyPack = require('happypack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// 获取根目录相对路径
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

// app代码路径
const appSrcPath = resolveApp('src');
const nodeModules = resolveApp('node_modules');

// 当前配置环境
const isDev = !!(process.env.NODE_ENV != 'production');

// 封装为HappyPlugin
function createHappyPlugin(id, loaders) {
    return new HappyPack({
        id: id,
        loaders: loaders,
        // threadPool: happyThreadPool,
    });
}

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
            use: ['happypack/loader?id=happy-babel-js'],
					},
					{
						test: /\.css$/,
						use: isDev ? ['style-loader', 'happypack/loader?id=happy-css'] : ["style-loader", MiniCssExtractPlugin.loader, 'happypack/loader?id=happy-css']
					},
          {
            test: /\.less$/,
            use: isDev ? ['style-loader', 'happypack/loader?id=happy-less'] : ["style-loader", MiniCssExtractPlugin.loader, 'happypack/loader?id=happy-less']
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

    /* babel-loader happypack插件 */
    createHappyPlugin('happy-babel-js', [
      {
        loader: 'cache-loader',
        options: {
          cacheDirectory: resolveApp('.cache--happypack')
        }
      },
      {
        loader: 'babel-loader',
      }
    ]),

    /* css-loader happypack插件 */
    createHappyPlugin('happy-css', [
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
    ]),

    /* less-loader happypack插件 */
    createHappyPlugin('happy-less', [
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
    ]),

    /* 打包清理一次 */
		new CleanWebpackPlugin(["build"], {
			verbose: true,
  		dry: false
		}),

    /* 刷新index html */
		new HtmlWebpackPlugin({
      inject: true,
      template: resolveApp('src/index.html'),
      filename: resolveApp('build/index.html'),
    }),
	],
}