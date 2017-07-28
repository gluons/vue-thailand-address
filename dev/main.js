import Vue from 'vue';
import VueThailandAddress from '@/index.js';
import App from './App.vue';

Vue.use(VueThailandAddress);

new Vue({
	el: '#app',
	render: h => h(App)
});
