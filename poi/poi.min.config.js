const webpack = require('webpack');
const config = require('./poi.config');
const libraryName = require('./library-name');

config.filename = {
	js: 'vue-thailand-address.min.js',
	css: 'vue-thailand-address.min.css'
};
config.webpack = webpackConfig => {
	webpackConfig.entry.database = '@/data/db.json';
	webpackConfig.output.libraryTarget = 'window';
	webpackConfig.output.library = libraryName;
	webpackConfig.output.libraryExport = 'default';
	webpackConfig.plugins.push(new webpack.optimize.CommonsChunkPlugin({
		name: 'database',
		filename: 'database.min.js'
	}));

	return webpackConfig;
};
config.minimize = true;

module.exports = config;
