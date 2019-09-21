import Buefy, { BuefyConfig } from 'buefy';
import Vue from 'vue';
import { Plugin as VueFragment } from 'vue-fragment';
import VueHighlightJS, {
	Options as VueHighlightJSOptions
} from 'vue-highlight.js';
import VueProgressBar from 'vue-progressbar';
import VueThailandAddress from 'vue-thailand-address';

import bash from 'highlight.js/lib/languages/bash';
import css from 'highlight.js/lib/languages/css';
import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';
import vue from 'vue-highlight.js/lib/languages/vue';

import App from './App.vue';
import router from './router';

// Fonts
import '@fortawesome/fontawesome-free/css/all.css';
import 'typeface-fira-mono';

// Styles
import 'buefy/dist/buefy.css';
import 'bulma-divider';
import 'flag-icon-css/css/flag-icon.css';
import 'highlight.js/styles/monokai.css';
import 'vue-thailand-address/dist/vue-thailand-address.css';
import './scss/main.scss';

import jumpPlugin from './plugins/jump';

// Components
const requireComponent = require.context('./components/', false, /vue$/);
requireComponent.keys().forEach(file => {
	const componentName = file.replace(/^\.\/(.*)\.\w+$/, '$1');
	const component = requireComponent(file);

	Vue.component(componentName, component.default);
});

Vue.config.productionTip = false;

// Plugins
Vue.use<BuefyConfig>(Buefy, {
	defaultIconPack: 'fas'
});
Vue.use(VueFragment);
Vue.use(VueProgressBar, {
	color: 'hsl(171, 100%, 41%)'
});
Vue.use<VueHighlightJSOptions>(VueHighlightJS, {
	languages: {
		bash,
		css,
		javascript,
		typescript,
		vue
	}
});
Vue.use(VueThailandAddress);
Vue.use(jumpPlugin);

new Vue({
	el: '#app',
	router,
	render: h => h(App)
});
