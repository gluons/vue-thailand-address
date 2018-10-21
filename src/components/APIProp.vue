<template lang="pug">
.api-prop
	h4
		span.icon.is-medium.has-text-danger
			i.fas.fa-angle-right
		span {{ name }}
	p
		strong.has-text-weight-semibold ประเถท:
		| &nbsp;
		highlight-code(lang='ts' inline) {{ type }}
	p(v-if='defaultValue')
		span.has-text-weight-semibold ค่าเริ่มต้น:
		| &nbsp;
		highlight-code(lang='ts' inline) {{ defaultValue }}
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
	p {
		margin-left: 1.75rem;
	}
}
</style>
