const path = require('path');
const webpack = require('webpack');

module.exports = {
	output: {
		filename: '[name].js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.ts$/,
				loader: 'ts-loader',
				options: {
					appendTsSuffixTo: [/\.vue$/],
					compilerOptions: {
					}
				}
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					optimizeSSR: false
				}
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							sourceMap: true
						}
					}
				]
			},
			{
				test: /\.scss$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
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
			}
		]
	},
	plugins: [
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
