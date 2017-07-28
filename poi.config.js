module.exports = {
	entry: './src/index.js',
	autoprefixer: {
		browserslist: [
			'> 1%',
			'last 2 versions',
			'not ie <= 8'
		]
	},
	html: false,
	minimize: false
};
