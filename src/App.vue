<template lang="pug">
Layout#app
	Header.header
		Brand
		Nav
	Content: router-view/
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
}
</style>
