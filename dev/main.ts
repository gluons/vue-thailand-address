import VueThailandAddress from '@/index';
import Vue from 'vue';
import App from './App.vue';

Vue.use(VueThailandAddress);

/* tslint:disable: no-unused-expression */
new Vue({
	el: '#app',
	render: h => h(App)
});
