<template lang="pug">
a(
	:class='btnClasses'
	:href='url'
	target='_blank'
	rel='noopener noreferrer'
)
	i(v-if='Boolean(btnIcon)' :class='iconClasses')
	span(v-if='btn'): slot
	slot(v-else)
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
	name: 'Link'
})
export default class Link extends Vue {
	@Prop({ type: String, required: true })
	url: string;

	@Prop({ type: Boolean, default: false })
	btn: boolean;

	@Prop({ type: String, default: 'default' })
	btnType: string;

	@Prop({ type: String, default: null })
	btnIcon: string;

	get btnClasses(): Record<string, boolean> {
		return {
			'ivu-btn': this.btn,
			'ivu-btn-default': this.btn && ((this.btnType == null) || (this.btnType === 'default')),
			'ivu-btn-primary': this.btn && this.btnType === 'primary',
			'ivu-btn-dashed': this.btn && this.btnType === 'dashed',
			'ivu-btn-text': this.btn && this.btnType === 'text',
			'ivu-btn-info': this.btn && this.btnType === 'info',
			'ivu-btn-success': this.btn && this.btnType === 'success',
			'ivu-btn-warning': this.btn && this.btnType === 'warning',
			'ivu-btn-error': this.btn && this.btnType === 'error'
		};
	}
	get iconClasses(): Record<string, boolean> {
		return {
			'ivu-icon': Boolean(this.btnIcon),
			[`ivu-icon-${this.btnIcon}`]: Boolean(this.btnIcon)
		};
	}
}
</script>
