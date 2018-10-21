<template lang="pug">
.api-prop
	h4
		span.icon.is-medium.has-text-danger
			i.fas.fa-angle-right
		span {{ name }}
	p
		strong.prop-label Type:
		highlight-code(lang='js' inline) {{ type }}
	p(v-if='defaultValue')
		span.prop-label Default:
		highlight-code(lang='js' inline) {{ defaultValue }}
	p
		slot
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
	name: 'APIProp'
})
export default class APIProp extends Vue {
	@Prop({ type: String, required: true })
	name: string;

	@Prop({ type: String, required: true })
	type: string;

	@Prop(String)
	defaultValue: string;
}
</script>

<style lang="scss">
.api-prop {
	.prop-label {
		font-weight: 600;
		margin-right: .5rem;
	}
	p {
		margin-left: 1.75rem;
	}
}
</style>
