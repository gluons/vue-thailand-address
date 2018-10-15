<template>
	<div id="app">
		<div id="address1">
			<addressinput-subdistrict
				:store='store1'
				@itemselect='onSelectItem1'
			/>
			<addressinput-district
				:store='store1'
				@itemselect='onSelectItem1'
			/>
			<addressinput-province
				:store='store1'
				@itemselect='onSelectItem1'
			/>
			<addressinput-zipcode
				:store='store1'
				@itemselect='onSelectItem1'
			/>
		</div>
		<div id="address2">
			<addressinput-subdistrict
				:store='store2'
				@itemselect='onSelectItem2'
			/>
			<addressinput-district
				:store='store2'
				@itemselect='onSelectItem2'
			/>
			<addressinput-province
				:store='store2'
				@itemselect='onSelectItem2'
			/>
			<addressinput-zipcode
				:store='store2'
				@itemselect='onSelectItem2'
			/>
		</div>
	</div>
</template>

<script>
import { DataStore } from 'vue-thailand-address';

export default {
	name: 'App',
	data() {
		return {
			store1: new DataStore(),
			store2: new DataStore(),
			address1: {
				subdistrict: '',
				district: '',
				province: '',
				zipcode: ''
			},
			address2: {
				subdistrict: '',
				district: '',
				province: '',
				zipcode: ''
			}
		};
	},
	methods: {
		onSelectItem1({ subdistrict, district, province, zipcode }) {
			this.address1 = {
				subdistrict,
				district,
				province,
				zipcode
			};
		},
		onSelectItem2({ subdistrict, district, province, zipcode }) {
			this.address2 = {
				subdistrict,
				district,
				province,
				zipcode
			};
		}
	}
};
</script>
