<template lang="pug">
.typeahead-container
	input.typeahead-input(
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
		:possibles='possibles',
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
import getPossibles from '@lib/getPossibles';
import { AUTOCOMPLETE_CLOSE_DELAY } from '@lib/constants';
import { Bus, dataSource, setValue } from '@data/dataStore';
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
		}

		Bus.$on('datasource-update', (newModelValue: AddressModel) => {
			const inputValue = newModelValue[this.target];

			this.query = `${inputValue}`;
		});
	}

	// Methods
	onInput() {
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

			setValue(addressModel);
			this.$emit('itemselect', addressModel);
		}
		this.closeAutocomplete(true);
	}
	onItemClick(item: AddressEntry) {
		const addressModel: AddressModel = addressEntryToModel(item);

		setValue(addressModel);
		this.$emit('itemselect', addressModel);
	}
}
</script>

<style lang="scss">
input.typeahead-input {
	background-color: white;
	border: 1px solid #d5d5d5;
	box-sizing: border-box;
	color: #666;
	display: inline-block;
	font-size: 16px;
	height: 40px;
	line-height: 38px;
	padding: 8px 6px;
	transition-property: color, background-color, border;
	transition: 0.2s ease-in-out;
	width: 100%;

	&:focus {
		outline: 0;
		border-color: #1e87f0;
	}
}
</style>
