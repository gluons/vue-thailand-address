<template lang="pug">
.api-event
	h4
		span.icon.is-medium.has-text-danger
			i.fas.fa-angle-right
		span {{ name }}
	p
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
	p {
		margin-left: 1.75rem;
	}
	.event-detail {
		border-top: 2px dotted silver;
		margin-top: 1rem;
		padding-top: 1rem;
	}
}
</style>
