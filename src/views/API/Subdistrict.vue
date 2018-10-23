<template lang="pug">
#api-subdistrict.container.content
	h1 ตำบล/แขวง
	APIComponent(name='<addressinput-subdistrict>')
		template(slot='props')
			APIProp(
				name='value'
				type='string'
			) ค่าเริ่มต้นของ input
			APIProp(
				name='store'
				type='DataStore'
				:typeLink='{ name: "api-datastore" }'
				defaultValue='defaultStore'
				:defaultValueLink='{ name: "api-datastore" }'
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
