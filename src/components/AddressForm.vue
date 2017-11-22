<template lang="pug">
.typeahead-address-form
	.row
		.col
			input-container(
				:dataSource='dataSource',
				:data='district',
				target='district',
				:label='subdistrictLabel',
				@itemselect='onItemSelect'
			)
		.col
			input-container(
				:dataSource='dataSource',
				:data='amphoe',
				target='amphoe',
				:label='districtLabel',
				@itemselect='onItemSelect'
			)
	.row
		.col
			input-container(
				:dataSource='dataSource',
				:data='province',
				target='province',
				:label='provinceLabel',
				@itemselect='onItemSelect'
			)
		.col
			input-container(
				:dataSource='dataSource',
				:data='zipcode',
				target='zipcode',
				:label='zipcodeLabel',
				@itemselect='onItemSelect'
			)
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

import { loadDataSource } from '@/lib/datasource-utils';
import InputContainer from './InputContainer.vue';

@Component({
	name: 'address-form',
	components: {
		InputContainer
	},
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
	data() {
		return {
			dataSource: [],
			district: '',
			amphoe: '',
			province: '',
			zipcode: ''
		};
	}
})
export default class AddressForm extends Vue {
	// Data
	dataSource: AddressEntry[];
	district: string;
	amphoe: string;
	province: string;
	zipcode: string;

	// Props
	subdistrictLabel: string;
	districtLabel: string;
	provinceLabel: string;
	zipcodeLabel: string;

	// Hooks
	created() {
		this.dataSource = loadDataSource();
	}

	// Methods
	onItemSelect(item: AddressEntry) {
		this.district = item.district;
		this.amphoe = item.amphoe;
		this.province = item.province;
		this.zipcode = item.zipcode.toString();
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
