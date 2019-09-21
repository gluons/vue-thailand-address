<template>
	<div id="app">
		<!-- ตำบล/แขวง -->
		<addressinput-subdistrict v-model="subdistrict" />
		<!-- อำเภอ/เขต -->
		<addressinput-district v-model="district" />
		<!-- จังหวัด -->
		<addressinput-province v-model="province" />
		<!-- รหัสไปรษณีย์ -->
		<addressinput-zipcode v-model="zipcode" />
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
