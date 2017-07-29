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
				@input='onInput'
			)
		autocomplete(:query='query', :target='name', :list='list')
	//- When no label
	template(v-else)
		input.typeahead-input(
			type='text',
			autocomplete='off',
			v-model='query',
			@input='onInput'
		)
		autocomplete(:query='query', :target='name', :list='list')
</template>

<script>
import Autocomplete from './Autocomplete';

export default {
	name: 'typeahead-input',
	components: {
		Autocomplete
	},
	props: {
		name: { // Name. It's an actual property name in address data.
			type: String,
			required: true
		},
		label: String, // Input label.
		list: Array // Autocomplete list.
	},
	data() {
		return {
			query: '' // Search query.
		};
	},
	computed: {
		hasLabel() {
			return (this.label != null) && (this.label.length > 0);
		}
	},
	methods: {
		onInput() {
			this.$emit('query', this.name, this.query);
		}
	}
};
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
