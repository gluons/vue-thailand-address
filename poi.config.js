module.exports = {
	entry: './dev/main.ts',
	html: {
		title: 'Vue Thailand Address',
		description: 'Thai address input for Vue.'
	},
	presets: [
		require('poi-preset-typescript')()
	]
};
