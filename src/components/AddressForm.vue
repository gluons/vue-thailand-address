<template lang="pug">
.typeahead-address-form
	.row
		.col
			typeahead-input(target='district', label='ตำบล/เขต')
		.col
			typeahead-input(target='amphoe', label='อำเภอ/แขวง')
	.row
		.col
			typeahead-input(target='province', label='จังหวัด')
		.col
			typeahead-input(target='zipcode', label='รหัสไปรษณีย์')
</template>

<script>
import store from '@/store';

import { loadDataSource } from '@/lib/datasource-utils';
import TypeaheadInput from './TypeaheadInput';

export default {
	name: 'address-form',
	components: {
		TypeaheadInput
	},
	store,
	async created() {
		let dataSource = await loadDataSource();
		this.$store.dispatch('updateDataSource', dataSource);
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
