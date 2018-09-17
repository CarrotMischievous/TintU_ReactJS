const path = require('path');
const fs = require('fs');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
	entry: './src/index.js',

	output: {
		filename: '[name].bundle.js',
		path: resolveApp('build'),
	},

	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader',
				]
			},
			{
				test: /\.(png|svg|jpg|gif)/,
				use: [
					'file-loader',
				]
			},
			{
				test: /\.jsx?$/,
				exclude: /node_modules/, // 屏蔽依赖库代码
				loader: 'babel-loader',
			}
		]
	},

	plugins: [
		new CleanWebpackPlugin(["build"], {
			verbose: true,
  		dry: false
		}),
		new HtmlWebpackPlugin({
      inject: true,
      template: resolveApp("public/index.html"),
    }),
	]
}