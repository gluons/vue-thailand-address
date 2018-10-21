<template lang="pug">
section#api-list.section: .container.content.is-large
	h1 API
	h2 Component
	p Vue Thailand Address ประกอบไปด้วย component 4 ชนิด ดังนี้
	ul
		li
			router-link(:to='{ name: "api-subdistrict" }')
				code.plain= '<addressinput-subdistrict> - ตำบล/แขวง'
		li
			router-link(:to='{ name: "api-district" }')
				code.plain= '<addressinput-district> - อำเภอ/เขต'
		li
			router-link(:to='{ name: "api-province" }')
				code.plain= '<addressinput-province> - จังหวัด'
		li
			router-link(:to='{ name: "api-zipcode" }')
				code.plain= '<addressinput-zipcode> - รหัสไปรษณีย์'
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
	name: 'APIIndex'
})
export default class APIIndex extends Vue {}
</script>
