<template lang="pug">
ul.th-address-autocomplete(v-show='hasData' :style='autocompleteStyle')
	li(
		ref='autocomplete-item'
		v-for='(item, index) in itemList'
		:class='{ active: selectedIndex === index }'
		:style='autocompleteListStyle'
		:key='item.text'
		v-html='item.text'
		@click='onItemClick(item.data)'
		@mouseenter='changeSelectedIndex(index)'
	)
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';

import AddressEntry from '../types/AddressEntry';
import Target from '../types/Target';
import addressToString from '../utils/addressToString';

@Component({
	name: 'Autocomplete'
})
export default class Autocomplete extends Vue {
	// Props
	@Prop(String) query: string;
	@Prop(Array) items: AddressEntry[];
	@Prop({ type: String, required: true }) target: Target; // A property name in data item.
	@Prop({ type: Number, required: true }) maxHeight: number;
	@Prop({ type: Number, required: true }) itemCount: number;
	@Prop({ type: Number, default: -1 }) selectedIndex: number;

	// Watch
	@Watch('selectedIndex')
	onSelectedIndexChange(newIndex: number) {
		if (newIndex === -1) {
			this.$el && (this.$el.scrollTop = 0); // Reset scroll position when close

			return;
		}

		/*
		 * Scroll to the selected item when use keyboard.
		 */
		if (this.$el && this.$refs['autocomplete-item'] && this.$refs['autocomplete-item'][newIndex]) {
			const listContainer: HTMLUListElement = this.$el as HTMLUListElement;
			const selectItem: HTMLLIElement = this.$refs['autocomplete-item'][newIndex];

			const itemBottom = selectItem.offsetTop + selectItem.offsetHeight;
			if (selectItem.offsetTop < listContainer.scrollTop) {
				listContainer.scrollTop = selectItem.offsetTop;
			} else if ((itemBottom - listContainer.scrollTop) > listContainer.offsetHeight) {
				listContainer.scrollTop = selectItem.offsetTop - (listContainer.offsetHeight - selectItem.offsetHeight);
			}
		}
	}

	// Computed
	get autocompleteStyle() {
		return {
			maxHeight: `${this.maxHeight}px`,
			listStyle: 'none',
			margin: 0,
			overflowY: 'auto',
			padding: 0,
			position: 'absolute',
			width: '100%',
			zIndex: 1
		};
	}
	get autocompleteListStyle() {
		const { maxHeight, itemCount } = this;
		const itemHeight = maxHeight / itemCount;

		return {
			height: `${itemHeight}px`,
			cursor: 'pointer'
		};
	}
	get hasData(): boolean {
		return this.items && (this.items.length > 0);
	}
	get itemList() {
		let autocomplete: AddressEntry[] = this.items;

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
		if ((index >= 0) && (index < this.itemList.length)) {
			this.$emit('update:selectedIndex', index);
		}
	}
}
</script>

<style lang="scss">
@import '~$style/variable';

.th-address-autocomplete {
	border: 1px solid $border-color;
	box-sizing: border-box;

	li {
		background-color: $bg-color;
		box-sizing: border-box;
		padding: 10px 5px;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		align-content: center;

		&:hover, &.active {
			background-color: $bg-hover-color !important;
		}
		&:not(:last-child) {
			border-bottom: 1px solid $border-color;
		}
	}
}
</style>
