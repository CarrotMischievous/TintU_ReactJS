const path = require('path');
const fs = require('fs');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

// Webpack uses `publicPath` to determine where the app is being served from.
// In development, we always serve from the root. This makes config easier.
const publicPath = '/';
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

const appSrcPath = resolveApp('src');

module.exports = {
	entry: {
		app: resolveApp('src/index.js'),
	},

	output: {
		filename: 'static/js/[name].bundle.js',
		path: resolveApp('build'),
		publicPath: publicPath,
	},

	mode: 'development',

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
								loader: 'file-loader',
								options: {
									limit: 10000,
									name: 'static/media/[name].[hash:8].[ext]',
								}
							}
						]
					},
					{
						test: /\.jsx?$/,
						exclude: /node_modules/, // 屏蔽依赖库代码
						loader: 'babel-loader',
					},
					{
						test: /\.css$/,
						use: [
							'style-loader',
							'css-loader',
						]
					},
				]
			}
		]
	},

	plugins: [
		/*new CleanWebpackPlugin(["build"], {
			verbose: true,
  		dry: false
		}),*/
		new HtmlWebpackPlugin({
      inject: true,
      template: resolveApp('src/index.html'),
      filename: resolveApp('build/index.html'),
    }),
    new webpack.NamedModulesPlugin(),
    /*new webpack.HotModuleReplacementPlugin(),*/
	],

	devServer: {
		contentBase: resolveApp('build'),
		historyApiFallback: true,
    disableHostCheck: true,
	},
}