<template lang="pug">
ul.typeahead-autocomplete(v-if='hasData')
	li(v-for='item in list', :key='item') {{ item }}
</template>

<script>
export default {
	name: 'autocomplete',
	data() {
		return {
			list: []
		};
	},
	computed: {
		hasData() {
			return this.list.length > 0;
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
	padding: 0;
	width: 100%;
	z-index: 100;

	li {
		background: white;
		border-bottom: 1px solid #d5d5d5;
		cursor: pointer;
		padding: 10px 5px;

		&:hover {
			background-color: #f5f5f5;
		}
	}
}
</style>
