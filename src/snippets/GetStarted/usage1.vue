<template>
	<div id="app">
		<addressinput-subdistrict @itemselect='onSelectItem'/>
		<addressinput-district @itemselect='onSelectItem'/>
		<addressinput-province @itemselect='onSelectItem'/>
		<addressinput-zipcode @itemselect='onSelectItem'/>
	</div>
</template>

<script>
export default {
	name: 'App',
	data() {
		return {
			subdistrict: '',
			district: '',
			province: '',
			zipcode: ''
		};
	},
	methods: {
		onSelectItem({ subdistrict, district, province, zipcode }) {
			this.subdistrict = subdistrict;
			this.district = district;
			this.province = province;
			this.zipcode = zipcode;
		}
	}
};
</script>
