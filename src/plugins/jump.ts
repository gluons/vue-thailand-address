import Vue, { PluginObject } from 'vue';

import jump from 'jump.js';

const plugin: PluginObject<never> = {
	install(vue: typeof Vue) {
		vue.prototype.$jump = jump;
	}
};

declare module 'vue/types/vue' {
	interface Vue {
		$jump: typeof jump;
	}
}

export default plugin;
