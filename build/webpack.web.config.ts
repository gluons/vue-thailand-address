import * as ExtractTextPlugin from 'extract-text-webpack-plugin';
import * as path from 'path';
import * as webpack from 'webpack';
import * as merge from 'webpack-merge';

import createConfig from './webpack.base.config';

const webConfig: webpack.Configuration = {
	entry: {
		db: path.resolve(__dirname, '../src/data/db.json')
	},
	output: {
		library: 'VueThailandAddress'
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: 'db'
		})
	]
};

const configs: webpack.Configuration[] = [
	merge(createConfig(), webConfig, {
		output: {
			filename: '[name].js'
		},
		plugins: [
			new ExtractTextPlugin('vue-thailand-address.css')
		]
	}),
	merge(createConfig(true), webConfig, {
		output: {
			filename: '[name].min.js'
		},
		plugins: [
			new ExtractTextPlugin('vue-thailand-address.min.css')
		]
	})
];

export default configs;
