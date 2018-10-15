import iView from 'iview';
import Vue from 'vue';
import VueHighlightJS from 'vue-highlight.js';

import App from './App.vue';
import router from './router';

import FAIcon from './components/FAIcon.vue';
import Link from './components/Link.vue';

// Styles
import '@fortawesome/fontawesome-free/css/all.css';
import 'flag-icon-css/css/flag-icon.css';
import 'highlight.js/styles/monokai.css';
import 'iview/dist/styles/iview.css';
import './scss/main.scss';

Vue.config.productionTip = false;

// Plugins
Vue.use(iView);
Vue.use(VueHighlightJS);

// Components
Vue.component('FAIcon', FAIcon);
Vue.component('Link', Link);

new Vue({
	el: '#app',
	router,
	render: h => h(App)
});
