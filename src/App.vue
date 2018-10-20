<template lang="pug">
#app
	vue-progress-bar/
	nav.navbar.is-dark(role='navigation'): .container
		.navbar-brand
			router-link.navbar-item.brand-link(
				to='/'
				active-class=''
				exact-active-class=''
			): strong
				span.flag-icon.flag-icon-th.is-size-4
				span Vue Thailand Address
			Link.navbar-item.is-hidden-desktop(:url='repoLink')
				b-icon(pack='fab' icon='github')
			a.navbar-burger.has-text-white(
				ref='navBurger'
				role='button'
				aria-label='menu'
				aria-expanded='false'
				@click='toggleNavMenu'
			)
				span(v-for='i in 3' aria-hidden='true')
		.navbar-menu(ref='navMenu')
			.navbar-start
				router-link.navbar-item(to='/'  exact)
					b-icon(icon='home')
					span หน้าแรก
				router-link.navbar-item(to='/get-started' exact)
					b-icon(icon='play')
					span เริ่มต้น
			.navbar-end
				Link.navbar-item.is-hidden-touch(:url='repoLink')
					b-icon(pack='fab' icon='github')
	transition(name='fade' mode='out-in')
		router-view/
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';

import { repoLink } from '@/constants/links';

@Component({
	name: 'App'
})
export default class App extends Vue {
	repoLink: string = repoLink;
	menuVisible: boolean = false;

	created() {
		this.$Progress.start();
		this.$router.beforeEach((to, from, next) => {
			this.$Progress.start();
			next();
		});
		this.$router.afterEach(() => {
			this.menuVisible = false;
			this.$Progress.finish();
		});
	}
	mounted() {
		this.$Progress.finish();
	}

	@Watch('menuVisible')
	onMenuVisibleChanged(newValue: boolean) {
		const { navBurger, navMenu } = this.$refs as { [key: string]: Element };

		if (newValue) {
			navBurger.classList.add('is-active');
			navMenu.classList.add('is-active');
		} else {
			navBurger.classList.remove('is-active');
			navMenu.classList.remove('is-active');
		}
	}

	toggleNavMenu() {
		this.menuVisible = !this.menuVisible;
	}
}
</script>


<style lang="scss">
#app {
	a.navbar-item {
		.flag-icon, .icon {
			&:not(:last-child) {
				margin-right: .5em;
			}
		}
	}
	.navbar-brand {
		.brand-link * {
			vertical-align: middle;
		}
	}
	.fade {
		&-enter-to, &-leave {
			opacity: 1;
		}
		&-enter, &-leave-to {
			opacity: 0;
		}
		&-enter-active, &-leave-active {
			transition: opacity .2s ease;
		}
	}
}
</style>
