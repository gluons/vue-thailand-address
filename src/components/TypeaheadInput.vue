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
		autocomplete(:query='query', :target='target')
	//- When no label
	template(v-else)
		input.typeahead-input(
			type='text',
			autocomplete='off',
			v-model='query',
			@input='onInput'
		)
		autocomplete(:query='query', :target='target', :list='list')
</template>

<script>
import { mapState } from 'vuex';
import { getPossibles } from '@/lib/datasource-utils';
import Autocomplete from './Autocomplete';

export default {
	name: 'typeahead-input',
	components: {
		Autocomplete
	},
	props: {
		target: { // Name. It's an actual property name in address data.
			type: String,
			required: true
		},
		label: String // Input label.
	},
	computed: {
		...mapState([
			'dataSource'
		]),
		query: {
			get() {
				return this.$store.state[this.target].value;
			},
			set(value) {
				return this.$store.dispatch(`${this.target}/updateValue`, value);
			}
		},
		hasLabel() {
			return (this.label != null) && (this.label.length > 0);
		}
	},
	methods: {
		onInput() {
			if (this.query.length > 0) {
				let possibles = getPossibles(this.dataSource, this.target, this.query);
				this.$store.dispatch(`${this.target}/updateList`, possibles);
			} else {
				this.$store.dispatch('clearAutocompleteList');
			}
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
