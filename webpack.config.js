var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: [
		'./client/index.js'
	],
	output: {
		path: __dirname + '/client/public/dist',
		filename: 'bundle.js',
		publicPath: '/public/dist'
	},
	stats: {
		colors: true,
		reasons: true
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'react']
				}
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.ProvidePlugin({
			fetch: 'imports?this=>global!exports?global.fetch!whatwg-fetch'
		}),
		new webpack.NoErrorsPlugin(),
		new HtmlWebpackPlugin({
			template: __dirname + '/client/index.html',
			filename: 'index.html',
			inject: 'body'
		})
	]
};
