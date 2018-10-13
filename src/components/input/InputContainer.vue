<template lang="pug">
.th-address
	label.th-address-label(v-if='hasLabel')
		.label-text {{ label }}
		typeahead-input(
			v-bind='$attrs'
			v-on='$listeners'
		)
	typeahead-input(
		v-else
		v-bind='$attrs'
		v-on='$listeners'
	)
</template>


<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

import TypeaheadInput from './TypeaheadInput.vue';

@Component({
	name: 'InputContainer',
	components: {
		TypeaheadInput
	},
	inheritAttrs: false
})
export default class InputContainer extends Vue {
	// Props
	@Prop(String) label: string; // Input label.

	// Computed
	get hasLabel(): boolean {
		// Disable label when placeholder is given.
		const hasPlaceholder = (typeof this.$attrs['placeholder'] === 'string') && (this.$attrs['placeholder'].length > 0);

		return !hasPlaceholder && (this.label != null) && (this.label.length > 0);
	}
}
</script>

<style lang="scss">
label.th-address-label {
	.label-text {
		margin-bottom: 5px;
	}
}
</style>
