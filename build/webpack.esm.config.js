const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const merge = require('webpack-merge');
const path = require('path');

const baseConfig = require('./webpack.base.config')();

module.exports = merge(baseConfig, {
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
		'string-similarity': 'string-similarity',
		'vuex': 'vuex',
		'@/data/db.json': './db.json'
	}
});
