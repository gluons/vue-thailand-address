<template lang="pug">
ul.typeahead-autocomplete(:style='style', v-if='hasData')
	li(
		ref='autocomplete-list'
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

import AddressEntry from '#/AddressEntry';
import Target from '#/Target';
import addressToString from '@utils/addressToString';

@Component({
	name: 'autocomplete',
	props: {
		query: String,
		possibles: Array,
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
	},
	watch: {
		selectedIndex(newIndex) {
			/*
			 * Scroll to the selected item when use keyboard.
			 */
			if (this.$el && this.$refs['autocomplete-list'] && this.$refs['autocomplete-list'][newIndex]) {
				let listContainer: HTMLUListElement = this.$el;
				let selectItem: HTMLLIElement = this.$refs['autocomplete-list'][newIndex];

				let itemBottom = selectItem.offsetTop + selectItem.offsetHeight;
				if (selectItem.offsetTop < listContainer.scrollTop) {
					listContainer.scrollTop = selectItem.offsetTop;
				} else if ((itemBottom - listContainer.scrollTop) > listContainer.offsetHeight) {
					listContainer.scrollTop = selectItem.offsetTop - (listContainer.offsetHeight - selectItem.offsetHeight);
				}
			}
		}
	}
})
export default class Autocomplete extends Vue {
	// Props
	query: string;
	possibles: AddressEntry[];
	target: Target; // A property name in data item.
	maxHeight: number; // Max autocomplete height.
	selectedIndex: number;

	// Computed
	get style() {
		return {
			'max-height': `${this.maxHeight}px`
		};
	}
	get hasData(): boolean {
		return this.possibles && (this.possibles.length > 0);
	}
	get autocompleteList() {
		let autocomplete: AddressEntry[] = this.possibles;

		return autocomplete.map(item => {
			return {
				data: Object.assign({}, item), // Shallow Clone
				text: addressToString(item, this.target, this.query)
			};
		});
	}

	// Methods
	onItemClick(item: AddressEntry): void {
		this.$emit('itemclick', item);
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
