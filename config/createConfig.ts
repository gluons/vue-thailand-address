import { resolve } from 'path';
import { VueLoaderPlugin } from 'vue-loader';
import { BannerPlugin, Configuration, DefinePlugin } from 'webpack';

import banner from './banner';
import { getCSSUses } from './utils';

/**
 * Create webpack config.
 *
 * @param {any} stylish An instance of `webpack-stylish`.
 * @param {boolean} [minimizeCSS=false] Minimize CSS?
 * @returns {Configuration}
 */
export default function createConfig(
	stylish: any,
	minimizeCSS: boolean = false
): Configuration {

	return {
		mode: 'none',
		entry: {
			'vue-thailand-address': resolve(__dirname, '../src/index.ts')
		},
		output: {
			path: resolve(__dirname, '../dist')
		},
		module: {
			rules: [
				{
					test: /\.ts$/,
					loader: 'ts-loader',
					options: {
						appendTsSuffixTo: [/\.vue$/],
						configFile: resolve(__dirname, '../tsconfig.prod.json')
					}
				},
				{
					test: /\.vue$/,
					loader: 'vue-loader'
				},
				{
					test: /\.css$/,
					use: getCSSUses(minimizeCSS)
				},
				{
					test: /\.scss$/,
					use: [
						...getCSSUses(minimizeCSS, 2),
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
			new DefinePlugin({
				'process.env.NODE_ENV': JSON.stringify('production')
			}),
			new VueLoaderPlugin(),
			new BannerPlugin(banner),
			stylish
		],
		resolve: {
			extensions: ['.js', '.json', '.ts', '.vue']
		},
		devtool: 'source-map',
		stats: 'none'
	};
}
