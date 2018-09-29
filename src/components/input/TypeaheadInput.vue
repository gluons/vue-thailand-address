<template lang="pug">
.th-address-container
	input.th-address-input(
		type='text',
		autocomplete='off',
		v-model='query',
		@input='search',
		@blur='clearAutocomplete',
		@keydown.esc='clearAutocomplete',
		@keydown.up.prevent='moveUp',
		@keydown.down.prevent='moveDown',
		@keydown.enter.prevent='pickCurrentItem'
	)
	autocomplete(
		:query='query',
		:items='possibles',
		:target='target',
		:selectedIndex.sync='selectedIndex',
		@itemclick='commitItem'
	)
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';

import AddressEntry from '#/AddressEntry';
import AddressModel from '#/AddressModel';
import Target from '#/Target';
import DataStore, { defaultStore } from '@data/DataStore';
import getPossibles from '@lib/getPossibles';
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
	search() {
		if (this.query && (this.query.length > 0)) {
			const { dataSource } = this.store;

			this.possibles = getPossibles(dataSource, this.target, this.query);
			this.selectedIndex = 0;
		} else {
			this.clearAutocomplete();
		}
	}
	clearAutocomplete() {
		this.selectedIndex = -1;
		this.possibles = [];
	}
	moveUp() {
		if (this.possibles.length === 0) {
			return;
		}

		if ((this.selectedIndex - 1) >= 0) {
			this.selectedIndex -= 1;
		} else {
			this.selectedIndex = this.possibles.length - 1; // Go to last item when at first item
		}
	}
	moveDown() {
		if (this.possibles.length === 0) {
			this.search(); // Start searching when no items

			return;
		}

		if ((this.selectedIndex + 1) < this.possibles.length) {
			this.selectedIndex += 1;
		} else {
			this.selectedIndex = 0; // Go to first item when last item
		}
	}
	pickCurrentItem() {
		if (this.possibles[this.selectedIndex]) {
			const selectedItem: AddressEntry = Object.assign({}, this.possibles[this.selectedIndex]); // Shallow Clone

			this.commitItem(selectedItem);
		}
		this.clearAutocomplete();
	}
	commitItem(item: AddressEntry) {
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
