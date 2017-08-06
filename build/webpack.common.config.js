const merge = require('webpack-merge');

const baseConfig = require('./webpack.esm.config');

module.exports = merge(baseConfig, {
	output: {
		filename: '[name].common.js',
		libraryExport: 'default'
	}
});
