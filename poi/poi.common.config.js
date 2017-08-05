const config = require('./poi.esm.config');

config.filename.js = 'vue-thailand-address.common.js';
config.webpack = webpackConfig => {
	webpackConfig.output.libraryTarget = 'commonjs2';
	webpackConfig.output.libraryExport = 'default';
	webpackConfig.externals = {
		'array-filter': 'array-filter',
		'string-similarity': 'string-similarity'
	};

	return webpackConfig;
};

module.exports = config;
