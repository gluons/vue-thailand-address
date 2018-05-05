import path from 'path';
import webpack from 'webpack';

import { createCSSUse, createSCSSUse } from './utils';

const pkg = require('../package.json');
const banner = `
Vue Thailand Address v${pkg.version}
Created by Saran Tanpituckpong
Released under the MIT License.

Address database from jquery.Thailand.js by Thanarat Kuawattanaphan
`.trim();

/**
 * Create webpack config.
 * @param {boolean} [minimize=false] Enable minimization.
 * @returns {webpack.Configuration}
 */
function createConfig(minimize = false): webpack.Configuration {
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
							css: createCSSUse(minimize, true),
							scss: createSCSSUse(minimize, true),
							ts: 'ts-loader'
						}
					}
				},
				{
					test: /\.css$/,
					use: createCSSUse(minimize)
				},
				{
					test: /\.scss$/,
					use: createSCSSUse(minimize)
				}
			]
		},
		plugins: [
			new webpack.DefinePlugin({
				'process.env.NODE_ENV': JSON.stringify('production')
			}),
			new webpack.BannerPlugin(banner),
			...(minimize ? [new webpack.optimize.UglifyJsPlugin({ sourceMap: true })] : [])
		],
		resolve: {
			extensions: ['.js', '.json', '.ts', '.vue'],
			alias: {
				'@': path.resolve(__dirname, '../src'),
				'vue$': 'vue/dist/vue.esm.js',
				'vuex$': 'vuex/dist/vuex.esm.js'
			}
		},
		devtool: 'source-map',
		stats: {
			modules: false
		}
	};
}

export default createConfig;
