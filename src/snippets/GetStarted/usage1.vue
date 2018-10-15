<template>
	<div id="app">
		<addressinput-subdistrict @itemselect='onSelectItem'/> <!-- ตำบล/แขวง -->
		<addressinput-district @itemselect='onSelectItem'/> <!-- อำเภอ/เขต -->
		<addressinput-province @itemselect='onSelectItem'/> <!-- จังหวัด -->
		<addressinput-zipcode @itemselect='onSelectItem'/> <!-- รหัสไปรษณีย์ -->
	</div>
</template>

<script>
export default {
	name: 'App',
	data() {
		// เก็บข้อมูลที่อยู่ที่ได้จาก input ไว้ใน data
		return {
			subdistrict: '',
			district: '',
			province: '',
			zipcode: ''
		};
	},
	methods: {
		// Event handler เมื่อมีการเลือกที่อยู่จาก autocomplete
		onSelectItem({ subdistrict, district, province, zipcode }) {
			this.subdistrict = subdistrict;
			this.district = district;
			this.province = province;
			this.zipcode = zipcode;
		}
	}
};
</script>
