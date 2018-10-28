<template lang="pug">
.api-component
	h2: code.plain {{ name }}
	slot
	template(v-if='$slots.props')
		h3
			span.icon.is-large.has-text-primary
				i.fas.fa-star.fa-lg
			span Props
		slot(name='props')
	template(v-if='$slots.events')
		h3
			span.icon.is-large.has-text-warning
				i.fas.fa-bolt.fa-lg
			span Events
		slot(name='events')
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
	name: 'APIComponent'
})
export default class APIComponent extends Vue {
	@Prop({ type: String, required: true })
	name: string;
}
</script>

<style lang="scss">
.api-component {
	article.message {
		margin: 1em 0;

		a {
			text-decoration: none !important;
		}
	}
}
</style>
