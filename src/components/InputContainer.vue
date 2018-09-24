<template lang="pug">
label.typeahead-label(v-if='hasLabel')
	.label-text {{ label }}
		typeahead-input(v-bind='$attrs', @itemselect='onItemSelect')
typeahead-input(v-else, v-bind='$attrs', @itemselect='onItemSelect')
</template>


<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

import AddressEntry from '#/AddressEntry';
import TypeaheadInput from './TypeaheadInput.vue';

@Component({
	name: 'input-container',
	components: {
		TypeaheadInput
	},
	inheritAttrs: false,
	props: {
		label: String
	}
})
export default class InputContainer extends Vue {
	// Props
	label: string; // Input label.

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
.typeahead-container {
	position: relative;
}
label.typeahead-label {
	.label-text {
		margin-bottom: 5px;
	}
}
</style>
