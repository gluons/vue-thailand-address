import Buefy, { BuefyConfig } from 'buefy';
import Vue from 'vue';
import VueHighlightJS from 'vue-highlight.js';
import VueProgressBar from 'vue-progressbar';

import App from './App.vue';
import router from './router';

// import FAIcon from './components/FAIcon.vue';
import Link from './components/Link.vue';

// Styles
import 'buefy/dist/buefy.css';
import 'bulma-divider';
import 'flag-icon-css/css/flag-icon.css';
import 'highlight.js/styles/monokai.css';
import './scss/main.scss';

Vue.config.productionTip = false;

// Plugins
Vue.use(Buefy, {
	defaultIconPack: 'fas'
} as BuefyConfig);
Vue.use(VueProgressBar, {
	color: 'hsl(171, 100%, 41%)'
});
Vue.use(VueHighlightJS);

// Components
// Vue.component('FAIcon', FAIcon);
Vue.component('Link', Link);

new Vue({
	el: '#app',
	router,
	render: h => h(App)
});
