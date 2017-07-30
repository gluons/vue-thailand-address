module.exports = {
	entry: './src/index.js',
	filename: {
		js: 'vue-thailand-address.js',
		css: 'vue-thailand-address.css',
		chunk: '[id].chunk.js'
	},
	autoprefixer: {
		browserslist: [
			'> 1%',
			'last 2 versions',
			'not ie <= 8'
		]
	},
	vendor: false,
	homepage: '/',
	html: false,
	removeDist: true,
	minimize: false
};
