<template lang="pug">
.th-address-container(:style='containerStyle')
	input.th-address-input(
		:class='inputClassList'
		type='text'
		autocomplete='off'
		:value='value'
		@input='search($event.target.value)'
		@blur='closeAutocomplete'
		@keydown.esc='clearAutocomplete'
		@keydown.up.prevent='moveUp'
		@keydown.down.prevent='moveDown'
		@keydown.enter.prevent='pickCurrentItem'
		v-bind='filteredAttrs'
		v-on='$listeners'
	)
	autocomplete(
		:query='value'
		:items='possibles'
		:target='target'
		:selectedIndex.sync='selectedIndex'
		@itemclick='commitItem'
	)
</template>

<script lang="ts">
import { Vue, Component, Model, Prop } from 'vue-property-decorator';
import pick from 'lodash.pick';

import AddressEntry from '../types/AddressEntry';
import AddressModel from '../types/AddressModel';
import Target from '../types/Target';
import DataStore, { defaultStore } from '../data/DataStore';
import { AUTOCOMPLETE_CLOSE_DELAY, ALLOWED_ATTRS } from '../lib/constants';
import getPossibles from '../lib/getPossibles';
import addressEntryToModel from '../utils/addressEntryToModel';
import Autocomplete from './Autocomplete.vue';

const MODEL_EVENT = 'addressinput';

@Component({
	name: 'TypeaheadInput',
	components: {
		Autocomplete
	},
	inheritAttrs: false
})
export default class TypeaheadInput extends Vue {
	// Model
	@Model(MODEL_EVENT, { type: String, default: '' }) value: string;

	// Props
	@Prop({ type: DataStore, default: () => defaultStore }) store: DataStore;
	@Prop({ type: String, required: true }) target: Target; // Name. It's an actual property name in address data.
	@Prop({ type: String, default: '' }) inputClass: string;

	// Data
	containerStyle = {
		position: 'relative'
	};
	possibles: AddressEntry[] = [];
	selectedIndex: number = -1;

	// Hooks
	created() {
		this.store.setValueProp(this.target, this.value); // Pass initial value into store's value.

		this.store.onValueChange((newModelValue: AddressModel) => {
			const newValue = newModelValue[this.target];

			this.$emit(MODEL_EVENT, newValue);
		});
	}

	// Computed
	get filteredAttrs() {
		return pick(this.$attrs, ALLOWED_ATTRS);
	}
	get inputClassList(): string[] {
		if (!this.inputClass || !this.inputClass.trim()) {
			return null;
		}

		const inputClasses = this.inputClass.split(/\s+/);

		return inputClasses;
	}

	// Methods
	search(query: string) {
		if (query && (query.length > 0)) {
			const { dataSource } = this.store;

			this.possibles = getPossibles(dataSource, this.target, query);

			// If autocomplete list contains items, set index to first item
			if (this.possibles.length > 0) {
				this.selectedIndex = 0;
			}
		} else {
			this.clearAutocomplete();
		}

		this.$emit(MODEL_EVENT, query);
	}
	closeAutocomplete() {
		// Prevent DOM elements destroyed before process complete
		setTimeout(
			() => this.clearAutocomplete(),
			AUTOCOMPLETE_CLOSE_DELAY
		);
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
			this.search(this.value); // Start searching when no items

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
@import '~$style/variable';

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
