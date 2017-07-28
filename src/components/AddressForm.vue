<template lang="pug">
.typeahead-address-form
	.row
		.col
			typeahead-input(label='ตำบล/เขต')
		.col
			typeahead-input(label='อำเภอ/แขวง')
	.row
		.col
			typeahead-input(label='จังหวัด')
		.col
			typeahead-input(label='รหัสไปรษณีย์')
</template>

<script>
import { loadDB } from '@/lib/datasource-utils';
import TypeaheadInput from './TypeaheadInput';

export default {
	name: 'address-form',
	components: {
		TypeaheadInput
	},
	data() {
		return {
			DB: null
		};
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
