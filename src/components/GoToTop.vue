<template lang="pug">
a#gototop.has-text-centered(
	v-show='visible'
	@click='goToTop'
)
	b-icon(
		icon='chevron-circle-up'
		size='is-medium'
	)
	p Go to Top
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

const visiblePoint = 100; // Visible when scroll down 20px

@Component({
	name: 'GoToTop'
})
export default class GoToTop extends Vue {
	visible: boolean = false;

	created() {
		window.addEventListener('scroll', this.detectScroll);
	}

	detectScroll() {
		// Don't show in home page
		if (this.$route.name === 'home') {
			this.visible = false;

			return;
		}

		this.visible =
			document.body.scrollTop > visiblePoint ||
			document.documentElement.scrollTop > visiblePoint;
	}
	goToTop() {
		this.$jump(document.body, {
			duration: 600,
			offset: 0
		});
	}
}
</script>

<style lang="scss">
#gototop {
	position: fixed;
	right: 20px;
	bottom: 20px;
	z-index: 999;
}
</style>
