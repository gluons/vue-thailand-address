module.exports = {
	entry: './dev/main.ts',
	html: {
		title: 'Vue Thailand address',
		description: 'Thai address input for Vue.'
	},
	presets: [
		require('poi-preset-typescript')()
	],
	extendWebpack(config) {
		config.resolve
			.alias
			.set('vue$', 'vue/dist/vue.runtime.common.js')
			.set('vuex$', 'vuex/dist/vuex.js');
	}
};
