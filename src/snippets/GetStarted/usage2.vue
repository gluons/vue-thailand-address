<template>
	<div id="app">
		<div id="address1">
			<addressinput-subdistrict
				:store="store1"
				v-model="address1.subdistrict"
			/>
			<addressinput-district
				:store="store1"
				v-model="address1.district"
			/>
			<addressinput-province
				:store="store1"
				v-model="address1.province"
			/>
			<addressinput-zipcode
				:store="store1"
				v-model="address1.zipcode"
			/>
		</div>
		<div id="address2">
			<addressinput-subdistrict
				:store="store2"
				v-model="address2.subdistrict"
			/>
			<addressinput-district
				:store="store2"
				v-model="address2.district"
			/>
			<addressinput-province
				:store="store2"
				v-model="address2.province"
			/>
			<addressinput-zipcode
				:store="store2"
				v-model="address2.zipcode"
			/>
		</div>
	</div>
</template>

<script>
import { DataStore } from 'vue-thailand-address';

/*
 * ข้อมูลที่อยู่จะเก็บอยู่ใน DataStore
 */

export default {
	name: 'App',
	data() {
		return {
			store1: new DataStore(), // DataStore สำหรับเก็บข้อมูลที่อยู่จาก input กลุ่มที่ 1
			store2: new DataStore(), // DataStore สำหรับเก็บข้อมูลที่อยู่จาก input กลุ่มที่ 2
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
	}
};
</script>
