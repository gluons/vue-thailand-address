import * as CopyWebpackPlugin from 'copy-webpack-plugin';
import * as ExtractTextPlugin from 'extract-text-webpack-plugin';
import * as path from 'path';
import * as webpack from 'webpack';
import * as merge from 'webpack-merge';

import createConfig from './createConfig';
const baseConfig: webpack.Configuration = createConfig();

const config: webpack.Configuration = merge(baseConfig, {
	output: {
		filename: '[name].esm.js',
		libraryTarget: 'commonjs2'
	},
	target: 'node',
	plugins: [
		new ExtractTextPlugin('vue-thailand-address.css'),
		new CopyWebpackPlugin([
			{
				context: path.resolve(__dirname, '../src/data'),
				from: 'db.json'
			}
		])
	],
	externals: {
		'array-filter': 'array-filter',
		'leven': 'leven',
		'vue': 'vue',
		'@/data/db.json': './db.json'
	}
});

export default config;
