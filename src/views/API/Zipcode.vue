<template lang="pug">
#api-subdistrict.container.content.is-medium
	h1 รหัสไปรษณีย์
	APIComponent(name='<addressinput-zipcode>')
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
					highlight-code(lang='js')
						include ../../snippets/API/onItemSelected.js
</template>
