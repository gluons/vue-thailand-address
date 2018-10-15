import iView from 'iview';
import Vue from 'vue';

import App from './App.vue';
import router from './router';

// Styles
import '@/scss/main.scss';
import 'flag-icon-css/css/flag-icon.css';
import 'iview/dist/styles/iview.css';

Vue.config.productionTip = false;

// Plugins
Vue.use(iView);

new Vue({
	el: '#app',
	router,
	render: h => h(App)
});
