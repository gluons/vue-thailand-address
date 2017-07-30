<template lang="pug">
ul.typeahead-autocomplete(:style='style', v-if='hasData')
	li(v-for='(item, index) in autocompleteList', :key='item', v-html='item')
</template>

<script>
import { addressToString } from '@/lib/utils';

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

			return autocomplete.map(item => addressToString(item, this.target, this.query));
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

		&:hover {
			background-color: #f5f5f5;
		}
		&:not(:last-child) {
			border-bottom: 1px solid #d5d5d5;
		}
	}
}
</style>
