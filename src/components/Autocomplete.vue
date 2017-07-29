<template lang="pug">
ul.typeahead-autocomplete(:style='{ maxHeight: maxHeight + "px" }', v-if='hasData')
	li(v-for='(item, index) in autocompleteList', :key='index', v-html='item')
</template>

<script>
export default {
	name: 'autocomplete',
	props: {
		query: String, // Search query.
		target: String, // A property name in data item.
		list: Array, // Autocomplete list,
		maxHeight: { // Max autocomplete height.
			type: Number,
			default: 200
		}
	},
	computed: {
		hasData() {
			return this.list.length > 0;
		},
		autocompleteList() {
			return this.list.map(item => {
				// Clone item to addressComponents. Do not mutate original item.
				let addressComponents = Object.assign({}, item);
				addressComponents[this.target] = this.highlightQuery(addressComponents[this.target]);

				return this.compose(addressComponents);
			});
		}
	},
	methods: {
		compose(addressComponents) {
			return [
				addressComponents.district,
				addressComponents.amphoe,
				addressComponents.province,
				addressComponents.zipcode
			].join(' » ');
		},
		highlightQuery(value) {
			if (value) {
				return value.replace(new RegExp(this.query, 'ig'), match => `<b>${match}</b>`);
			} else {
				return value;
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

		&:hover {
			background-color: #f5f5f5;
		}
		&:not(:last-child) {
			border-bottom: 1px solid #d5d5d5;
		}
	}
}
</style>
