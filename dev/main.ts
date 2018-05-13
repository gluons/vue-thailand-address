import Vue from 'vue';
import VueThailandAddress from '../src/index';
import App from './App.vue';

Vue.use(VueThailandAddress);

/* tslint:disable: no-unused-expression */
new Vue({
	el: '#app',
	render: h => h(App)
});
