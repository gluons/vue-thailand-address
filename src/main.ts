import Buefy, { BuefyConfig } from 'buefy';
import Vue from 'vue';
import VueHighlightJS from 'vue-highlight.js';
import VueProgressBar from 'vue-progressbar';

import App from './App.vue';
import router from './router';

// Styles
import 'buefy/dist/buefy.css';
import 'bulma-divider';
import 'flag-icon-css/css/flag-icon.css';
import 'highlight.js/styles/monokai.css';
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
Vue.use(Buefy, {
	defaultIconPack: 'fas'
} as BuefyConfig);
Vue.use(VueProgressBar, {
	color: 'hsl(171, 100%, 41%)'
});
Vue.use(VueHighlightJS);
Vue.use(jumpPlugin);

new Vue({
	el: '#app',
	router,
	render: h => h(App)
});
