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
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';

import AddressEntry from '#/AddressEntry';
import Target from '#/Target';
import addressToString from '@utils/addressToString';

@Component({
	name: 'Autocomplete'
})
export default class Autocomplete extends Vue {
	// Props
	@Prop(String) query: string;
	@Prop(Array) possibles: AddressEntry[];
	@Prop({ type: String, required: true }) target: Target; // A property name in data item.
	@Prop({ type: Number, default: 200 }) maxHeight: number; // Max autocomplete height.
	@Prop({ type: Number, default: -1 }) selectedIndex: number;

	// Watch
	@Watch('selectedIndex')
	onSelectedIndexChange(newIndex: number) {
		/*
		 * Scroll to the selected item when use keyboard.
		 */
		if (this.$el && this.$refs['autocomplete-list'] && this.$refs['autocomplete-list'][newIndex]) {
			const listContainer: HTMLUListElement = this.$el as HTMLUListElement;
			const selectItem: HTMLLIElement = this.$refs['autocomplete-list'][newIndex];

			const itemBottom = selectItem.offsetTop + selectItem.offsetHeight;
			if (selectItem.offsetTop < listContainer.scrollTop) {
				listContainer.scrollTop = selectItem.offsetTop;
			} else if ((itemBottom - listContainer.scrollTop) > listContainer.offsetHeight) {
				listContainer.scrollTop = selectItem.offsetTop - (listContainer.offsetHeight - selectItem.offsetHeight);
			}
		}
	}

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
