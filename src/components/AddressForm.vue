<template lang="pug">
.typeahead-address-form
	.row
		.col
			typeahead-input(
				:dataSource='dataSource',
				target='district',
				:label='subdistrictLabel',
				@itemselect='onItemSelect'
			)
		.col
			typeahead-input(
				:dataSource='dataSource',
				target='amphoe',
				:label='districtLabel',
				@itemselect='onItemSelect'
			)
	.row
		.col
			typeahead-input(
				:dataSource='dataSource',
				target='province',
				:label='provinceLabel',
				@itemselect='onItemSelect'
			)
		.col
			typeahead-input(
				:dataSource='dataSource',
				target='zipcode',
				:label='zipcodeLabel',
				@itemselect='onItemSelect'
			)
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

import { loadDataSource } from '@/lib/datasource-utils';
import TypeaheadInput from './TypeaheadInput.vue';

@Component({
	name: 'address-form',
	props: {
		subdistrictLabel: {
			type: String,
			default: 'ตำบล/แขวง'
		},
		districtLabel: {
			type: String,
			default: 'อำเภอ/เขต'
		},
		provinceLabel: {
			type: String,
			default: 'จังหวัด'
		},
		zipcodeLabel: {
			type: String,
			default: 'รหัสไปรษณีย์'
		}
	},
	components: {
		TypeaheadInput
	},
	data() {
		return {
			dataSource: []
		};
	}
})
export default class AddressForm extends Vue {
	// Data
	dataSource: AddressEntry[];

	// Props
	subdistrictLabel: string;
	districtLabel: string;
	provinceLabel: string;
	zipcodeLabel: string;

	// Hooks
	async created() {
		this.dataSource = await loadDataSource();
	}

	// Methods
	onItemSelect(item: AddressEntry) {
		console.log(item);
	}
}
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
