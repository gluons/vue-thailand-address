import iView from 'iview';
import Vue from 'vue';
import VueGitHubButtons from 'vue-github-buttons';

import App from './App.vue';
import router from './router';

// Styles
import '@/scss/main.scss';
import 'flag-icon-css/css/flag-icon.css';
import 'iview/dist/styles/iview.css';
import 'vue-github-buttons/dist/vue-github-buttons.css';

Vue.config.productionTip = false;

// Plugins
Vue.use(iView);
Vue.use(VueGitHubButtons);

new Vue({
	el: '#app',
	router,
	render: h => h(App)
});
