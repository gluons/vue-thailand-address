<template>
	<div id="app">
		<addressinput-subdistrict v-model="subdistrict"/> <!-- ตำบล/แขวง -->
		<addressinput-district v-model="district"/> <!-- อำเภอ/เขต -->
		<addressinput-province v-model="province"/> <!-- จังหวัด -->
		<addressinput-zipcode v-model="zipcode"/> <!-- รหัสไปรษณีย์ -->
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
	}
};
</script>
