<template lang="pug">
#api-datastore.container.content
	h1
		code.plain DataStore
		b-tag(type='is-info' size='is-medium') Class
	highlight-code(lang='ts').is-paddingless.
		import { DataStore, defaultStore } from 'vue-thailand-address';

		defaultStore; // DataStore เริ่มต้น สำหรับ component ที่ไม่ได้ส่ง prop `store` เข้าไป
		const store = new DataStore(); // สร้าง DataStore เพื่อแยก store ที่ใช้เก็บข้อมูลต่างหาก เป็นอิสระต่อกัน
	APIClassProp(
		title='value'
		returnType='AddressModel'
		:returnTypeLink='{ name: "api-address-model" }'
	)
		p object ของที่อยู่ที่เลือกอยู่ในปัจจุบัน
	.is-divider
	APIClassProp(
		returnType='boolean'
		tag='Static Method'
		tagType='is-warning'
	)
		code.plain(slot='title')
			| validateValue(value: #[router-link(:to='{ name: "api-address-model" }') AddressModel])
		p ตรวจสอบ object #[highlight-code(inline) value] ที่ส่งมาว่ามีโครงสร้างถูกต้องหรือไม่
	.is-divider
	APIClassProp(
		title='resetValue()'
		tag='Method'
		tagType='is-success'
	)
		p ล้างค่าที่อยู่ทั้งหมดใน #[highlight-code(inline) DataStore]
	APIClassProp(
		tag='Method'
		tagType='is-success'
	)
		code.plain(slot='title')
			| onValueChange(handler: (newValue: #[router-link(:to='{ name: "api-address-model" }') AddressModel]) =&gt; void)
		p ลงทะเบียนฟังก์ชั่นดักจับ event เข้าไปยัง #[highlight-code(inline) DataStore] เพื่อดัก event เมื่อค่าของที่อยู่มีการเปลี่ยนแปลง
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
	name: 'DataStore'
})
export default class DataStore extends Vue {}
</script>
