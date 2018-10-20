<template lang="pug">
.api-event
	p.event-name
		b-icon(icon='angle-right' type='is-danger')
		span {{ name }}
	p.event-desc
		slot
	template(v-if='$slots.detail')
		p.event-detail
			slot(name='detail')
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
	name: 'APIEvent'
})
export default class APIEvent extends Vue {
	@Prop({ type: String, required: true })
	name: string;
}
</script>

<style lang="scss">
.api-event {
	.event-name {
		font-size: 1.2rem;
		font-weight: 600;

		.icon {
			margin-right: .2rem;
		}
		span:not(.icon) {
			vertical-align: .2rem;
		}
	}
	.event-desc, .event-detail {
		margin-left: 1.75rem;
	}
	.event-detail {
		border-top: 2px dotted silver;
		margin-top: 1rem;
		padding-top: .5rem;
	}
	pre {
		margin: .5rem 0;
	}
}
</style>
