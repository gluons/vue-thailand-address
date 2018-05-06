const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const WebpackBar = require('webpackbar');
const webpack = require('webpack');

module.exports = {
	output: {
		filename: '[name].js'
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				loader: 'ts-loader',
				options: {
					appendTsSuffixTo: [/\.vue$/]
				}
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.css$/,
				use: [
					'vue-style-loader',
					{
						loader: 'css-loader',
						options: {
							sourceMap: true,
							importLoaders: 1
						}
					},
					{
						loader: 'postcss-loader',
						options: {
							sourceMap: true
						}
					}
				]
			},
			{
				test: /\.scss$/,
				use: [
					'vue-style-loader',
					{
						loader: 'css-loader',
						options: {
							sourceMap: true,
							importLoaders: 2
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
			},
			{
				test: /\.pug$/,
				loader: 'pug-plain-loader'
			}
		]
	},
	plugins: [
		new VueLoaderPlugin(),
		...(process.env.CI ? [] : [new WebpackBar()]),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('testing')
		}),
		new webpack.SourceMapDevToolPlugin({
			test: /\.ts$/
		})
	],
	resolve: {
		extensions: ['.js', '.json', '.ts', '.vue'],
		alias: {
			'@': path.resolve(__dirname, '../src')
		}
	},
	devtool: 'inline-source-map'
};
