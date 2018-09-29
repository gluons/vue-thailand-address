<template lang="pug">
.th-address-container
	input.th-address-input(
		type='text',
		autocomplete='off',
		v-model='query',
		@input='onInput',
		@blur='closeAutocomplete(false)',
		@keydown.esc='closeAutocomplete',
		@keydown.up.prevent='moveSelectedIndex(-1)',
		@keydown.down.prevent='moveSelectedIndex(1)',
		@keydown.enter.prevent='selectItemData'
	)
	autocomplete(
		:query='query',
		:items='possibles',
		:target='target',
		:selectedIndex.sync='selectedIndex',
		@itemclick='onItemClick'
	)
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';

import AddressEntry from '#/AddressEntry';
import AddressModel from '#/AddressModel';
import Target from '#/Target';
import DataStore, { defaultStore } from '@data/DataStore';
import getPossibles from '@lib/getPossibles';
import { AUTOCOMPLETE_CLOSE_DELAY } from '@lib/constants';
import addressEntryToModel from '@utils/addressEntryToModel';
import Autocomplete from './Autocomplete.vue';

@Component({
	name: 'TypeaheadInput',
	components: {
		Autocomplete
	}
})
export default class TypeaheadInput extends Vue {
	// Props
	@Prop({ type: DataStore, default: () => defaultStore }) store: DataStore;
	@Prop(String) value: string;
	@Prop({ type: String, required: true }) target: Target; // Name. It's an actual property name in address data.

	// Watch
	@Watch('value')
	onValueChange(newValue: string) {
		this.query = newValue;
	}

	// Data
	query: string = '';
	possibles: AddressEntry[] = [];
	selectedIndex: number = -1;
	autocompleteCount: number = 0;

	// Hooks
	created() {
		// Set input value from `value` on created when it's available.
		if (this.value) {
			this.query = this.value;
			this.store.setValueProp(this.target, this.value); // Pass initial value into store's value.
		}

		this.store.onValueChange((newModelValue: AddressModel) => {
			const inputValue = newModelValue[this.target];

			this.query = `${inputValue}`;
		});
	}

	// Methods
	onInput() {
		const dataSource = this.store.dataSource;
		if (this.query.length > 0) {
			let possibles = getPossibles(dataSource, this.target, this.query);
			this.autocompleteCount = possibles.length;
			this.possibles = possibles;
		} else {
			this.selectedIndex = -1;
			this.autocompleteCount = 0;
			this.possibles = [];
		}
	}
	closeAutocomplete(immediate: boolean) {
		setTimeout(() => {
			this.selectedIndex = -1;
			this.autocompleteCount = 0;
			this.possibles = [];
		}, immediate ? 0 : AUTOCOMPLETE_CLOSE_DELAY);
	}
	moveSelectedIndex(indicator: number) {
		// Trigget show autocomplete when press down button.
		if (indicator == 1) {
			this.onInput();
		}

		if (
			(this.autocompleteCount > 0)
			&&
			((this.selectedIndex + indicator) >= 0)
			&&
			((this.selectedIndex + indicator) < this.autocompleteCount)
		) {
			this.selectedIndex += indicator;
		} else {
			this.selectedIndex = ((this.selectedIndex + indicator) >= this.autocompleteCount) ? 0 : (this.autocompleteCount - 1);
		}
	}
	selectItemData() {
		const selectedIndex = this.selectedIndex;
		if (this.possibles[selectedIndex]) {
			const selectedItem: AddressEntry = Object.assign({}, this.possibles[selectedIndex]); // Shallow Clone
			const addressModel: AddressModel = addressEntryToModel(selectedItem);

			this.store.value = addressModel;
			this.$emit('itemselect', addressModel);
		}
		this.closeAutocomplete(true);
	}
	onItemClick(item: AddressEntry) {
		const addressModel: AddressModel = addressEntryToModel(item);

		this.store.value = addressModel;
		this.$emit('itemselect', addressModel);
	}
}
</script>

<style lang="scss">
@import '../../style/variable';

.th-address-container {
	position: relative;
}
input.th-address-input {
	background-color: $bg-color;
	border: 1px solid $border-color;
	box-sizing: border-box;
	color: $text-color;
	display: inline-block;
	font-size: 16px;
	height: 40px;
	line-height: 38px;
	padding: 8px 6px;
	transition-property: border;
	transition: 0.2s ease-in-out;
	width: 100%;

	&:focus {
		outline: 0;
		border-color: $border-focus-color;
	}
}
</style>
