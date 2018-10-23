<template lang="pug">
section#api-list.section: .container.content.is-medium
	h1 API
	h2 Component
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
	h2 Class/Interface
	ul
		li
			router-link(:to='{ name: "api-datastore" }')
				code.plain= 'DataStore'
		li
			router-link(:to='{ name: "api-address-model" }')
				code.plain= 'AddressModel'
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
	name: 'APIIndex'
})
export default class APIIndex extends Vue {}
</script>
