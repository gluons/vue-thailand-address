import Vue from 'vue';
import Router, { RouteConfig } from 'vue-router';

import Home from './views/Home.vue';

Vue.use(Router);

export const routes: RouteConfig[] = [
	{
		path: '/',
		name: 'home',
		component: Home
	},
	{
		path: '/get-started',
		name: 'get-started',
		component: () => import(/* webpackChunkName: "get-started" */ './views/GetStarted.vue')
	}
	// {
	// 	path: '/api',
	// 	name: 'api',
	// 	component: () => import(/* webpackChunkName: "api" */ './views/API.vue')
	// }
];

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
});
