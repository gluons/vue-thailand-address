import * as ExtractTextPlugin from 'extract-text-webpack-plugin';
import * as path from 'path';
import * as webpack from 'webpack';

/**
 * Create webpack config.
 * @param minimize {Boolean} Enable minimization
 */
const createConfig = (minimize = false): webpack.Configuration => {
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
			'vue-thailand-address': path.resolve(__dirname, '../src/index.ts')
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
					test: /\.ts$/,
					loader: 'ts-loader',
					options: {
						appendTsSuffixTo: [/\.vue$/]
					}
				},
				{
					test: /\.vue$/,
					loader: 'vue-loader',
					options: {
						extractCSS: true,
						optimizeSSR: false,
						loaders: {
							css: cssUse(true),
							scss: scssUse(true),
							ts: 'ts-loader'
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
			extensions: ['.js', '.json', '.ts', '.vue'],
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

export default createConfig;
