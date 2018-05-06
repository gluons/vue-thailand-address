import clipboardy from 'clipboardy';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import FriendlyErrorsWebpackPlugin from 'friendly-errors-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { resolve } from 'path';
import PostCompile from 'post-compile-webpack-plugin';
import terminalLink from 'terminal-link';
import { VueLoaderPlugin } from 'vue-loader';
import { Configuration, HotModuleReplacementPlugin } from 'webpack';
import WebpackBar from 'webpackbar';

import { getCSSUses } from './utils';

const devServerUrl = 'http://localhost:5555';
const devServerLink: string = terminalLink('Vue Thailand Address', devServerUrl, {
	fallback() {
		return devServerUrl;
	}
});

const config: Configuration = {
	mode: 'development',
	entry: resolve(__dirname, '../dev/main.ts'),
	module: {
		rules: [
			{
				test: /\.ts$/,
				loader: 'ts-loader',
				options: {
					appendTsSuffixTo: [/\.vue$/],
					transpileOnly: true
				}
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					hotReload: true,
					productionMode: false
				}
			},
			{
				test: /\.css$/,
				use: getCSSUses(false, 1, true)
			},
			{
				test: /\.scss$/,
				use: [
					...getCSSUses(false, 2, true),
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
			},
			{
				test: /\.ejs$/,
				loader: 'ejs-loader'
			}
		]
	},
	plugins: [
		new VueLoaderPlugin(),
		new HotModuleReplacementPlugin(),
		new ForkTsCheckerWebpackPlugin({
			vue: true,
			silent: true
		}),
		new HtmlWebpackPlugin({
			title: 'Vue Thailand Address',
			template: resolve(__dirname, '../index.ejs'),
			meta: {
				description: 'Thai address input for Vue.'
			}
		}),
		new WebpackBar(),
		new FriendlyErrorsWebpackPlugin({
			compilationSuccessInfo: {
				messages: [`Vue Thailand Address is running at ${devServerLink}`],
				notes: ['URL copied.']
			}
		}),
		new PostCompile(() => {
			clipboardy.writeSync(devServerUrl);
		})
	],
	resolve: {
		extensions: ['.js', '.json', '.ts', '.vue'],
		alias: {
			'@': resolve(__dirname, '../src')
		}
	},
	devServer: {
		port: 5555,
		hot: true,
		inline: true,
		compress: true,
		stats: 'none'
	},
	stats: 'none',
	devtool: 'cheap-module-eval-source-map'
};

export default config;
