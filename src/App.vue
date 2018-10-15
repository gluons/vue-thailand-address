<template lang="pug">
Layout#app
	Header.header
		Brand
		Nav
	Content: transition(name='slide' mode='out-in')
		router-view
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import Brand from './components/Brand.vue';
import Nav from './components/Nav.vue';

@Component({
	name: 'App',
	components: {
		Brand,
		Nav
	}
})
export default class App extends Vue {}
</script>


<style lang="scss">
#app {
	min-height: 100vh;

	.header {
		padding: 0 !important;
	}
	.slide {
		&-leave-to {
			opacity: 0;
			transform: translateX(-999px);
		}
		&-enter-to, &-leave {
			transform: translateX(0);
		}
		&-enter {
			transform: translateX(999px);
		}
		&-enter-active, &-leave-active {
			transition: opacity 0.2s ease, transform 0.4s ease;
		}
	}
}
</style>
