import { Configuration, nodeExternals } from '@gluons/vue-pack';
import banner from '@gluons/vue-pack-banner-plugin';
import copy from '@gluons/vue-pack-copy-plugin';
import splitChunks from '@gluons/vue-pack-splitchunks-plugin';
import { resolve } from 'path';

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
	alias: {
		$style: resolve(__dirname, './src/style/')
	},
	externals: {
		module: [
			nodeExternals({
				allowlist: [
					'vue-class-component',
					'vue-property-decorator'
				]
			}),
			(_, request, callback) => {
				if (/data\/db\.json$/.test(request)) {
					return callback(null, 'commonjs ./db.json');
				}
				callback(void 0, void 0);
			}
		]
	},
	plugins: [
		banner(bannerStr),
		splitChunks({
			tapWeb: () => webSplitChunks
		}),
		copy([
			{
				context: resolve(__dirname, './src/data/'),
				from: 'db.json'
			}
		])
	],
	dev: {
		entry: resolve(__dirname, './dev/main.ts'),
		htmlTitle: 'Vue Thailand Address'
	}
};

export default config;
