module.exports = {
	entry: './src/index.js',
	filename: {
		js: 'vue-thailand-address.esm.js',
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
		config.output.libraryTarget = 'commonjs2';
		config.externals = {
			'es6-promise': 'es6-promise',
			'string-similarity': 'string-similarity'
		};

		return config;
	},
	vendor: false,
	homepage: '/',
	html: false,
	removeDist: false,
	minimize: false
};
