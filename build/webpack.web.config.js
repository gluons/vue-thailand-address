const ExtractTextPlugin = require('extract-text-webpack-plugin');
const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');

const getBaseConfig = require('./webpack.base.config');

const webConfig = {
	entry: {
		'db': path.resolve(__dirname, '../src/data/db.json')
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

module.exports = [
	merge(getBaseConfig(), webConfig, {
		output: {
			filename: '[name].js'
		},
		plugins: [
			new ExtractTextPlugin('vue-thailand-address.css')
		]
	}),
	merge(getBaseConfig(true), webConfig, {
		output: {
			filename: '[name].min.js'
		},
		plugins: [
			new ExtractTextPlugin('vue-thailand-address.min.css')
		]
	})
];
