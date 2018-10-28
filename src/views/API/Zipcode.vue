<template lang="pug">
#api-subdistrict.container.content
	h1 รหัสไปรษณีย์
	APIComponent(name='<addressinput-zipcode>')
		template(slot='props')
			APIProp(
				name='store'
				type='DataStore'
				:typeLink='{ name: "api-datastore" }'
				defaultValue='defaultStore'
				:defaultValueLink='{ name: "api-datastore" }'
			) store สำหรับเก็บข้อมูลที่อยู่
			APIProp(
				name='inputClass'
				type='string'
			)
				| CSS class สำหรับ
				|
				Link(url='https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input')
					highlight-code(lang='html' inline) &lt;input&gt;
				|
				| ภายใน component
			APIProp(
				name='label'
				type='string'
				defaultValue='"รหัสไปรษณีย์"'
			) label ของช่องกรอกที่อยู่
			b-message(type='is-info' has-icon)
				| คุณสามารถใช้ attribute ต่างๆของ
				|
				Link(url='https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input')
					highlight-code(lang='html' inline) &lt;input type="text"&gt;
				|
				| กับ component ได้โดยตรง
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
