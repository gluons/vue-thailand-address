<template lang="pug">
#app
	vue-progress-bar/
	GoToTop/
	b-navbar.is-unselectable(
		type='is-dark'
		wrapper-class='container'
		close-on-click
	)
		template(#brand)
			b-navbar-item.brand-link(
				tag='router-link'
				to='/'
				active-class=''
				exact-active-class=''
			): strong
				span.flag-icon.flag-icon-th.is-size-4
				span Vue Thailand Address
			b-navbar-item.is-hidden-desktop(tag='Link' :url='repoLink')
				b-icon(pack='fab' icon='github')
		template(#start)
			b-navbar-item(tag='router-link' to='/' exact)
				b-icon(icon='home')
				span หน้าแรก
			b-navbar-dropdown(hoverable)
				template(#label)
					b-icon(icon='play')
					span เริ่มต้น
				b-navbar-item(
					tag='router-link'
					:to='{ name: "get-started-bundler" }'
					exact
				) ด้วย bundler
				b-navbar-item(
					tag='router-link'
					:to='{ name: "get-started-browser" }'
					exact
				) บน browser
			b-navbar-dropdown(hoverable)
				template(#label)
					b-icon(icon='swatchbook')
					span API
				b-navbar-item(
					tag='router-link'
					:to='{ name: "api-subdistrict" }'
					exact
				)
					span= '<addressinput-subdistrict>'
				b-navbar-item(
					tag='router-link'
					:to='{ name: "api-district" }'
					exact
				)
					span= '<addressinput-district>'
				b-navbar-item(
					tag='router-link'
					:to='{ name: "api-province" }'
					exact
				)
					span= '<addressinput-province>'
				b-navbar-item(
					tag='router-link'
					:to='{ name: "api-zipcode" }'
					exact
				)
					span= '<addressinput-zipcode>'
				b-navbar-item(
					tag='router-link'
					:to='{ name: "api-datastore" }'
					exact
				)
					span DataStore
				b-navbar-item(
					tag='router-link'
					:to='{ name: "api-address-model" }'
					exact
				)
					span AddressModel
			b-navbar-item(tag='router-link' to='/demo' exact)
				b-icon(icon='chalkboard')
				span สาธิต
		template(#end)
			b-navbar-item.is-hidden-touch(tag='Link' :url='repoLink')
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
	margin-bottom: 1rem;

	.navbar-brand .brand-link .flag-icon,
	.navbar-start a .icon {
		margin-right: 0.5em;
	}
	.navbar-brand {
		.brand-link * {
			vertical-align: middle;
		}
	}
}
</style>
