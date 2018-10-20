<template lang="pug">
.api-component
	h2.is-size-4.api-name: code {{ name }}
	slot
	template(v-if='$slots.props')
		h3.is-size-5.api-category
			b-icon(icon='star' type='is-primary')
			span Props
		slot(name='props')
	template(v-if='$slots.events')
		h3.is-size-5.api-category
			b-icon(icon='bolt' type='is-warning')
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
	margin: 2rem 0;

	&:not(:last-of-type) {
		padding-bottom: 2rem;
		border-bottom: .1rem solid silver;
	}
	.api-name {
		code {
			color: inherit !important;
			font-size: inherit !important;
			font-weight: inherit !important;
			background-color: inherit !important;
			padding: 0;
		}
	}
	.api-category {

		.icon {
			margin-right: .25rem;
		}
		span:not(.icon) {
			vertical-align: .2rem;
		}
	}
}
</style>
