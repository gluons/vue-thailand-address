<template lang="pug">
#api.container
	h1.is-size-3 API
	APIComponent(
		v-for='componentName in componentNames'
		:key='componentName'
		:name='componentName'
	)
		template(slot='props')
			APIProp(
				name='value'
				type='String'
			) ค่าเริ่มต้นของ input
			APIProp(
				name='store'
				type='DataStore'
				defaultValue='defaultStore'
			) store สำหรับเก็บข้อมูลที่อยู่
		template(slot='events')
			APIEvent(
				name='itemselect'
			)
				| event ที่จะถูกเรียกเมื่อมีการเลือกที่อยู่ใน autocomplete
				template(slot='detail')
					| event นี้จะส่ง parameter กลับมา 1 ตัว ซึ่งก็คือ object ของที่อยู่ที่ถูกเลือก
					highlight-code(lang='js').
						export default {
							methods: {
								onItemSelected({ subdistrict, district, province, zipcode }) {
									subdistrict; // ตำบล/แขวง
									district; // อำเภอ/เขต
									province; // จังหวัด
									zipcode; // รหัสไปรษณีย์
								}
							}
						};
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
	name: 'API'
})
export default class API extends Vue {
	componentNames: string[] = [
		'<addressinput-subdistrict>',
		'<addressinput-district>',
		'<addressinput-province>',
		'<addressinput-zipcode>'
	];
}
</script>
