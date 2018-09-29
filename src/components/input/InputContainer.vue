<template lang="pug">
.th-address
	label.th-address-label(v-if='hasLabel')
		.label-text {{ label }}
		typeahead-input(v-bind='$attrs', @itemselect='onItemSelect')
	typeahead-input(v-else, v-bind='$attrs', @itemselect='onItemSelect')
</template>


<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

import AddressEntry from '#/AddressEntry';
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
		return (this.label != null) && (this.label.length > 0);
	}

	// Methods
	onItemSelect(item: AddressEntry) {
		this.$emit('itemselect', item);
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
