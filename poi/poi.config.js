const webpack = require('webpack');
const libraryName = require('./library-name');

module.exports = {
	entry: './src/index.js',
	filename: {
		js: 'vue-thailand-address.js',
		css: 'vue-thailand-address.css'
	},
	autoprefixer: {
		browserslist: [
			'> 1%',
			'last 2 versions',
			'not ie <= 8'
		]
	},
	webpack(config) {
		config.entry.database = '@/data/db.json';
		config.output.libraryTarget = 'window';
		config.output.library = libraryName;
		config.output.libraryExport = 'default';
		config.plugins.push(new webpack.optimize.CommonsChunkPlugin({
			name: 'database',
			filename: 'database.js'
		}));

		return config;
	},
	vendor: false,
	homepage: '/',
	html: false,
	removeDist: false,
	minimize: false
};
