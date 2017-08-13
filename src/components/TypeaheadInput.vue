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
				@keyup.enter.prevent='fillItemData'
			)
		autocomplete(:query='query', :target='target', :selectedIndex.sync='selectedIndex')
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
			@keyup.enter.prevent='fillItemData'
		)
		autocomplete(:query='query', :target='target', :list='list', :selectedIndex.sync='selectedIndex')
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import AddressEntry from '@/interface/AddressEntry';

import { getPossibles } from '@/lib/datasource-utils';
import { getDataItemKeys } from '@/lib/utils';
import Autocomplete from './Autocomplete.vue';

const AUTOCOMPLETE_CLOSE_DELAY = 250;

@Component({
	name: 'typeahead-input',
	components: {
		Autocomplete
	},
	data() {
		return {
			selectedIndex: -1,
			autocompleteCount: 0
		};
	}
})
export default class TypeaheadInput extends Vue {
	// Data
	selectedIndex: number = -1;
	autocompleteCount: number = 0;

	// Props
	@Prop({ required: true })
	target: string; // Name. It's an actual property name in address data.
	@Prop()
	label: string; // Input label.

	// Computed
	get dataSource(): AddressEntry[] {
		return this.$store.state.dataSource;
	}
	get possibles(): AddressEntry[] {
		return this.$store.getters[`${this.target}/autocomplete`];
	}
	get query(): string {
		return this.$store.state[this.target].value;
	}
	set query(value: string) {
		this.$store.dispatch(`${this.target}/updateValue`, value);
	}
	get hasLabel(): boolean {
		return (this.label != null) && (this.label.length > 0);
	}

	// Methods
	onInput() {
		if (this.query.length > 0) {
			let possibles = getPossibles(this.dataSource, this.target, this.query);
			this.autocompleteCount = possibles.length;

			this.$store.dispatch(`${this.target}/updateList`, possibles);
		} else {
			this.selectedIndex = -1;
			this.autocompleteCount = 0;

			this.$store.dispatch(`${this.target}/clearList`);
		}
	}
	closeAutocomplete(immediate: boolean) {
		setTimeout(() => {
			this.selectedIndex = -1;
			this.autocompleteCount = 0;

			this.$store.dispatch(`${this.target}/clearList`);
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
	fillItemData() {
		let selectedIndex = this.selectedIndex;
		if (this.possibles[selectedIndex]) {
			let selectedItem = Object.assign({}, this.possibles[selectedIndex]); // Shallow Clone
			let keys = getDataItemKeys(selectedItem);
			keys.forEach(key => {
				this.$store.dispatch(`${key}/updateValue`, selectedItem[key]);
			});
		}
		this.closeAutocomplete(true);
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
