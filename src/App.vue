<template lang="pug">
#app
	vue-progress-bar/
	nav.navbar.is-dark(role='navigation'): .container
		.navbar-brand
			router-link.navbar-item(
				to='/'
				active-class=''
				exact-active-class=''
			): strong
				span.flag-icon.flag-icon-th.is-size-4
				span Vue Thailand Address
			a.navbar-burger(role='button' aria-label='menu' aria-expanded='false')
				each i in [1, 2, 3]
					span(aria-hidden='true')
		.navbar-menu
			.navbar-start
				router-link.navbar-item(to='/'  exact)
					b-icon(icon='home')
					span หน้าแรก
				router-link.navbar-item(to='/get-started' exact)
					b-icon(icon='play')
					span เริ่มต้น
			.navbar-end
				Link.navbar-item(:url='repoLink')
					b-icon(pack='fab' icon='github')
	transition(name='fade' mode='out-in')
		router-view/
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import { repoLink } from '@/constants/links';

@Component({
	name: 'App'
})
export default class App extends Vue {
	repoLink: string = repoLink;

	created() {
		this.$Progress.start();
		this.$router.beforeEach((to, from, next) => {
			this.$Progress.start();
			next();
		});
		this.$router.afterEach(() => {
			this.$Progress.finish();
		});
	}
	mounted() {
		this.$Progress.finish();
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
	.navbar-brand * {
		vertical-align: middle;
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
