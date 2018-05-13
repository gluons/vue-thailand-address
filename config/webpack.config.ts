import CopyWebpackPlugin from 'copy-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { resolve } from 'path';
import { Configuration } from 'webpack';
import merge from 'webpack-merge';
import nodeExternals from 'webpack-node-externals';
import StylishReporter from 'webpack-stylish';
import WebpackBar from 'webpackbar';

import createConfig from './createConfig';

// Ensure all configs will use only one `StylishReporter` instance.
const stylish = new StylishReporter();

/**
 * Base CommonJS & ES module config.
 */
const baseConfig: Configuration = merge(createConfig(stylish), {
	output: {
		libraryTarget: 'commonjs2'
	},
	plugins: [
		new CopyWebpackPlugin([
			{
				context: resolve(__dirname, '../src/data'),
				from: 'db.json'
			},
			{
				context: resolve(__dirname, '../src'),
				from: 'AddressEntry.d.ts',
				to: 'types/'
			}
		]),
		new MiniCssExtractPlugin({
			filename: '[name].css'
		})
	],
	externals: [
		nodeExternals(),
		(context, request, callback) => {
			// tslint:disable-next-line:no-unused-expression
			context; // Fake use. Prevent TypeScript's `noUnusedParameters` error.

			if (/data\/db\.json$/.test(request)) {
				return callback(null, 'commonjs ./db.json');
			}
			callback(undefined, undefined);
		}
	],
	target: 'node'
});

/**
 * A specific config for web.
 */
const partialWebConfig: Configuration = {
	output: {
		library: 'VueThailandAddress',
		libraryExport: 'default'
	},
	externals: {
		vue: 'Vue'
	},
	optimization: {
		splitChunks: {
			cacheGroups: {
				db: {
					name: 'db',
					test: /db\.json$/,
					chunks: 'all',
					enforce: true
				},
				styles: {
					name: 'styles',
					test: /\.css$/,
					chunks: 'all',
					enforce: true
				}
			}
		}
	}
};

/**
 * CommonJS config.
 */
let commonConfig: Configuration = merge(baseConfig, {
	output: {
		filename: '[name].cjs.js',
		libraryExport: 'default'
	},
	plugins: [
		new WebpackBar({
			name: 'CommonJS'
		})
	]
});

/**
 * ES module config.
 */
let esmConfig: Configuration = merge(baseConfig, {
	output: {
		filename: '[name].es.js'
	},
	plugins: [
		new WebpackBar({
			name: 'ES Module',
			color: 'yellow'
		})
	]
});

/**
 * Web config.
 */
let webConfig: Configuration = merge(
	createConfig(stylish),
	partialWebConfig,
	{
		output: {
			filename: '[name].js'
		},
		plugins: [
			new WebpackBar({
				name: 'Web',
				color: 'cyan'
			}),
			new MiniCssExtractPlugin({
				filename: '[name].css'
			})
		]
	}
);

/**
 * Web with minification config.
 */
let webMinConfig: Configuration = merge(
	createConfig(stylish, true),
	partialWebConfig,
	{
		mode: 'production',
		output: {
			filename: '[name].min.js'
		},
		plugins: [
			new WebpackBar({
				name: 'Web Minified',
				color: 'magenta'
			}),
			new MiniCssExtractPlugin({
				filename: '[name].min.css'
			})
		]
	}
);

export default [
	commonConfig,
	esmConfig,
	webConfig,
	webMinConfig
];
