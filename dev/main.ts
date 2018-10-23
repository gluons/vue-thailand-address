/// <reference path='../src/sfc.d.ts' />

import Vue from 'vue';

import VueThailandAddress from '../src/index';
import App from './App.vue';

Vue.use(VueThailandAddress);

new Vue({
	el: '#app',
	render: h => h(App)
});
