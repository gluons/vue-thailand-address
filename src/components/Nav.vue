<template lang="pug">
Menu(theme='dark' mode='horizontal' :active-name='currentRouteName')
	MenuItem(
		v-for='route in routes'
		:key='route.name'
		:name='route.name'
		:to='route.path'
	)
		Icon(:type='menuItems[route.name].icon')
		| {{ menuItems[route.name].title }}
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { RouteConfig } from 'vue-router';

import menuItems, { MenuItem } from '@/menuItems';
import { routes } from '@/router';

@Component({
	name: 'Nav'
})
export default class Nav extends Vue {
	menuItems: Record<string, MenuItem> = menuItems;

	get routes(): RouteConfig[] {
		return routes;
	}
	get currentRouteName(): string | undefined {
		return this.$route.name;
	}
}
</script>
