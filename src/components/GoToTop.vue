<template lang="pug">
a#gototop.has-text-centered.is-unselectable(
	v-show='visible'
	@click='goToTop'
)
	p.icon.is-medium.is-size-3-desktop.is-size-4-touch
		i.fas.fa-chevron-circle-up
	p.is-size-7-touch Go to Top
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
@import '~bulma/sass/utilities/all';

#gototop {
	position: fixed;
	z-index: 999;

	@include desktop {
		right: 20px;
		bottom: 20px;
	}
	@include tablet-only {
		right: 10px;
		bottom: 10px;
	}
	@include mobile {
		right: 5px;
		bottom: 5px;
	}
}
</style>
