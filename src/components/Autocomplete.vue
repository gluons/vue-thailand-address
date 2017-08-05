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

<script>
import { addressToString, getDataItemKeys } from '@/lib/utils';

export default {
	name: 'autocomplete',
	props: {
		target: { // A property name in data item.
			type: String,
			required: true
		},
		maxHeight: { // Max autocomplete height.
			type: Number,
			default: 200
		},
		selectedIndex: {
			type: Number,
			default: -1
		}
	},
	computed: {
		style() {
			return {
				'max-height': `${this.maxHeight}px`
			};
		},
		query() {
			return this.$store.state[this.target].value;
		},
		hasData() {
			return this.$store.getters[`${this.target}/hasAutocomplete`];
		},
		autocompleteList() {
			let autocomplete = this.$store.getters[`${this.target}/autocomplete`];

			return autocomplete.map(item => {
				return {
					data: Object.assign({}, item), // Shallow Clone
					text: addressToString(item, this.target, this.query)
				};
			});
		}
	},
	methods: {
		onItemClick(data) {
			let keys = getDataItemKeys(data);
			keys.forEach(key => {
				this.$store.dispatch(`${key}/updateValue`, data[key]);
			});
		},
		changeSelectedIndex(index) {
			if ((index >= 0) && (index < this.autocompleteList.length)) {
				this.$emit('update:selectedIndex', index);
			}
		}
	}
};
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
