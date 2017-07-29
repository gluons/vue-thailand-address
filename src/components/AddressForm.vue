<template lang="pug">
.typeahead-address-form
	.row
		.col
			typeahead-input(name='district', label='ตำบล/เขต', :list='autocompleteList.district', @query='onQuery')
		.col
			typeahead-input(name='amphoe', label='อำเภอ/แขวง', :list='autocompleteList.amphoe', @query='onQuery')
	.row
		.col
			typeahead-input(name='province', label='จังหวัด', :list='autocompleteList.province', @query='onQuery')
		.col
			typeahead-input(name='zipcode', label='รหัสไปรษณีย์', :list='autocompleteList.zipcode', @query='onQuery')
</template>

<script>
import { loadDB } from '@/lib/datasource-utils';
import { calculateSimilarity } from '@/lib/utils';
import * as debounce from 'lodash.debounce';
import TypeaheadInput from './TypeaheadInput';

export default {
	name: 'address-form',
	components: {
		TypeaheadInput
	},
	data() {
		return {
			DB: null,
			autocompleteList: {
				district: [],
				amphoe: [],
				province: [],
				zipcode: []
			}
		};
	},
	methods: {
		clearAutocompleteList() {
			this.autocompleteList = {
				district: [],
				amphoe: [],
				province: [],
				zipcode: []
			};
		},
		onQuery: debounce(function (target, query) {
			this.clearAutocompleteList();

			if ((typeof query == 'string') && (query.length > 0)) {
				let possibles = this.DB.select('*').where(target).match(query).fetch();
				possibles.sort((a, b) => {
					let aSimilarity = calculateSimilarity(query, a);
					let bSimilarity = calculateSimilarity(query, b);

					return bSimilarity - aSimilarity;
				});

				this.autocompleteList[target] = possibles;
			}
		}, 100)
	},
	async created() {
		let DB = await loadDB();
		this.DB = DB;
	}
};
</script>

<style lang="scss">
.typeahead-address-form {
	width: 100%;

	.row {
		display: block;

		&:not(:first-child) {
			margin-top: 20px;
		}
		.col {
			display: inline-block;
			width: 49%;

			&:not(:last-child) {
				margin-right: .5%;
			}
			&:not(:first-child) {
				margin-left: .5%;
			}
		}
	}
}
</style>
