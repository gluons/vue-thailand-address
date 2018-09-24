import { Configuration } from '@gluons/vue-pack';
import banner from '@gluons/vue-pack-banner-plugin';
import splitChunks from '@gluons/vue-pack-splitchunks-plugin';

import CopyWebpackPlugin from 'copy-webpack-plugin';
import { resolve } from 'path';
import nodeExternals from 'webpack-node-externals';

import bannerStr from './config/banner';

const webSplitChunks = {
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
};

const config: Configuration = {
	entry: resolve(__dirname, './src/index.ts'),
	libraryName: 'VueThailandAddress',
	outDir: resolve(__dirname, './dist'),
	externals: {
		module: [
			nodeExternals(),
			(_, request, callback) => {
				if (/data\/db\.json$/.test(request)) {
					return callback(null, 'commonjs ./db.json');
				}
				callback(void 0, void 0);
			}
		]
	},
	chainWebpack(webpackConfigGroup) {
		Object.keys(webpackConfigGroup).forEach(key => {
			const webpackChainConfig = webpackConfigGroup[key];

			webpackChainConfig
				.plugin('copy')
				.use(
					CopyWebpackPlugin,
					[[
						{
							context: resolve(__dirname, './src/data/'),
							from: 'db.json'
						},
						{
							context: resolve(__dirname, './src/'),
							from: 'AddressEntry.d.ts',
							to: resolve(__dirname, './dist/')
						}
					]]
				)
			;
		});
	},
	plugins: [
		banner(bannerStr),
		splitChunks({
			tapWeb: () => webSplitChunks
		})
	],
	dev: {
		entry: resolve(__dirname, './dev/main.ts'),
		htmlTitle: 'Vue Thailand Address'
	}
};

export default config;
