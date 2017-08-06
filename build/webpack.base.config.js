const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = (minimize = false) => {
	const cssUse = (vue = false) => ExtractTextPlugin.extract({
		fallback: vue ? 'vue-style-loader' : 'style-loader',
		use: [
			{
				loader: 'css-loader',
				options: {
					sourceMap: true,
					minimize
				}
			},
			{
				loader: 'postcss-loader',
				options: {
					sourceMap: true
				}
			}
		]
	});
	const scssUse = (vue = false) => ExtractTextPlugin.extract({
		fallback: vue ? 'vue-style-loader' : 'style-loader',
		use: [
			{
				loader: 'css-loader',
				options: {
					sourceMap: true,
					minimize
				}
			},
			{
				loader: 'postcss-loader',
				options: {
					sourceMap: true
				}
			},
			{
				loader: 'sass-loader',
				options: {
					sourceMap: true
				}
			}
		]
	});

	return {
		entry: {
			'vue-thailand-address': path.resolve(__dirname, '../src/index.js')
		},
		output: {
			path: path.resolve(__dirname, '../dist')
		},
		module: {
			rules: [
				{
					test: /\.js$/,
					exclude: /node_modules/,
					loader: 'babel-loader'
				},
				{
					test: /\.vue$/,
					loader: 'vue-loader',
					options: {
						extractCSS: true,
						optimizeSSR: false,
						loaders: {
							css: cssUse(true),
							scss: scssUse(true)
						}
					}
				},
				{
					test: /\.css$/,
					use: cssUse()
				},
				{
					test: /\.scss$/,
					use: scssUse()
				}
			]
		},
		plugins: [
			new webpack.DefinePlugin({
				'process.env.NODE_ENV': JSON.stringify('production')
			}),
			...(minimize ? [ new webpack.optimize.UglifyJsPlugin({ sourceMap: true }) ] : [])
		],
		resolve: {
			extensions: ['.js', '.json', '.vue'],
			alias: {
				'@': path.resolve(__dirname, '../src')
			}
		},
		devtool: 'source-map',
		stats: {
			modules: false
		}
	};
};
