<template lang="pug">
.typeahead-container
	//- When have label
	template(v-if='hasLabel')
		label.typeahead-label
			.label-text {{ label }}
			input.typeahead-input(
				type='text',
				autocomplete='off',
				v-model='query',
				@input='onInput',
				@blur='closeAutocomplete(false)',
				@keyup.esc='closeAutocomplete',
				@keyup.up='moveSelectedIndex(-1)',
				@keyup.down='moveSelectedIndex(1)',
				@keyup.enter.prevent='selectItemData'
			)
		autocomplete(
			:query='query',
			:possibles='possibles',
			:target='target',
			:selectedIndex.sync='selectedIndex',
			@itemclick='onItemClick'
		)
	//- When no label
	template(v-else)
		input.typeahead-input(
			type='text',
			autocomplete='off',
			v-model='query',
			@input='onInput',
			@blur='closeAutocomplete(false)',
			@keyup.esc='closeAutocomplete',
			@keyup.up='moveSelectedIndex(-1)',
			@keyup.down='moveSelectedIndex(1)',
			@keyup.enter.prevent='selectItemData'
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
import Vue from 'vue';
import Component from 'vue-class-component';

import { getPossibles } from '@/lib/datasource-utils';
import { getDataItemKeys } from '@/lib/utils';
import Autocomplete from './Autocomplete.vue';

const AUTOCOMPLETE_CLOSE_DELAY = 250;

@Component({
	name: 'typeahead-input',
	props: {
		dataSource: {
			type: Array,
			required: true
		},
		target: {
			type: String,
			required: true
		},
		label: String
	},
	components: {
		Autocomplete
	},
	data() {
		return {
			query: '',
			possibles: [],
			selectedIndex: -1,
			autocompleteCount: 0
		};
	}
})
export default class TypeaheadInput extends Vue {
	// Data
	query: string;
	possibles: AddressEntry[];
	selectedIndex: number;
	autocompleteCount: number;

	// Props
	dataSource: AddressEntry[];
	target: string; // Name. It's an actual property name in address data.
	label: string; // Input label.

	// Computed
	get hasLabel(): boolean {
		return (this.label != null) && (this.label.length > 0);
	}

	// Methods
	onInput() {
		if (this.query.length > 0) {
			let possibles = getPossibles(this.dataSource, this.target, this.query);
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
		let selectedIndex = this.selectedIndex;
		if (this.possibles[selectedIndex]) {
			let selectedItem = Object.assign({}, this.possibles[selectedIndex]); // Shallow Clone
			this.$emit('itemselect', selectedItem);
		}
		this.closeAutocomplete(true);
	}
	onItemClick(item: AddressEntry) {
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
