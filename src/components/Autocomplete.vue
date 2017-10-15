<template lang="pug">
ul.typeahead-autocomplete(:style='style', v-if='hasData')
	li(
		v-for='(item, index) in autocompleteList',
		:class='{ active: selectedIndex === index }'
		:key='item.text',
		v-html='item.text',
		@click='onItemClick(item.data)',
		@mouseover='changeSelectedIndex(index)'
	)
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

import AddressEntry from '@/interface/AddressEntry';
import { addressToString, getDataItemKeys } from '@/lib/utils';

@Component({
	name: 'autocomplete',
	props: {
		target: {
			type: String,
			required: true
		},
		maxHeight: {
			type: Number,
			default: 200
		},
		selectedIndex: {
			type: Number,
			default: -1
		}
	}
})
export default class Autocomplete extends Vue {
	// Props
	target: string; // A property name in data item.
	maxHeight: number; // Max autocomplete height.
	selectedIndex: number;

	// Computed
	get style() {
		return {
			'max-height': `${this.maxHeight}px`
		};
	}
	get query(): string {
		return this.$store.state[this.target].value;
	}
	get hasData(): boolean {
		return this.$store.getters[`${this.target}/hasAutocomplete`];
	}
	get autocompleteList() {
		let autocomplete: AddressEntry[] = this.$store.getters[`${this.target}/autocomplete`];

		return autocomplete.map(item => {
			return {
				data: Object.assign({}, item), // Shallow Clone
				text: addressToString(item, this.target, this.query)
			};
		});
	}

	// Methods
	onItemClick(data: AddressEntry): void {
		let keys: string[] = getDataItemKeys(data);
		keys.forEach(key => {
			this.$store.dispatch(`${key}/updateValue`, data[key]);
		});
	}
	changeSelectedIndex(index: number): void {
		if ((index >= 0) && (index < this.autocompleteList.length)) {
			this.$emit('update:selectedIndex', index);
		}
	}
}
</script>

<style lang="scss">
.typeahead-autocomplete {
	border: 1px solid #d5d5d5;
	box-sizing: border-box;
	list-style: none;
	margin: 0;
	overflow-y: auto;
	padding: 0;
	position: absolute;
	width: 100%;
	z-index: 100;

	li {
		background: white;
		cursor: pointer;
		padding: 10px 5px;

		&:hover, &.active {
			background-color: #f5f5f5;
		}
		&:not(:last-child) {
			border-bottom: 1px solid #d5d5d5;
		}
	}
}
</style>
