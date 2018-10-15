<template lang="pug">
i(
	v-if='!span'
	:class='[prefix, icon]'
	:style='{ fontSize: `${size}em`, color }'
)
span(
	v-else
	:class='[prefix, icon]'
	:style='{ fontSize: `${size}em`, color }'
)
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
	name: 'FAIcon'
})
export default class FAIcon extends Vue {
	@Prop({ type: String, required: true })
	type: 'solid' | 'regular' | 'brands';

	@Prop({ type: String, required: true })
	name: string;

	@Prop({ type: String, default: '1' })
	size: string;

	@Prop({ type: String, default: null })
	color: string;

	@Prop({ type: Boolean, default: false })
	span: boolean;

	get prefix(): string {
		switch (this.type) {
			case 'solid':
				return 'fas';
			case 'regular':
				return 'far';
			case 'brands':
				return 'fab';
			default:
				return null;
		}
	}
	get icon(): string {
		return `fa-${this.name}`;
	}
}
</script>
