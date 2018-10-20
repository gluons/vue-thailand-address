<template lang="pug">
.api-prop
	p.prop-name
		b-icon(icon='angle-right' type='is-danger')
		span {{ name }}
	p.prop-info
		span.prop-label Type:
		highlight-code(lang='js' inline) {{ type }}
	p.prop-info(v-if='defaultValue')
		span.prop-label Default:
		highlight-code(lang='js' inline) {{ defaultValue }}
	p.prop-desc
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
	.prop-name, .prop-label {
		font-weight: 600;
	}
	.prop-name {
		font-size: 1.2rem;

		.icon {
			margin-right: .2rem;
		}
		span:not(.icon) {
			vertical-align: .2rem;
		}
	}
	.prop-label {
		margin-right: .5rem;
	}
	.prop-info {
		line-height: 1.8rem;
	}
	.prop-desc {
		margin: 1rem 0;
	}
	p:not(.prop-name) {
		margin-left: 1.75rem;
	}
}
</style>
