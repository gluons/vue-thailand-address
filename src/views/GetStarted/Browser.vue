<template lang="pug">
#get-started-browser.container.content
	h1 เริ่มต้น (บน browser)
	h2
		span.icon.is-large.has-text-danger
			i.fas.fa-file-alt.fa-lg
		span ไฟล์
	p ไฟล์ที่ต้องเพิ่มเข้าไปในหน้าเว็บมีดังนี้
	p: strong CSS:
	ul
		li
			highlight-code(inline) vue-thailand-address.css
			|
			| หรือ
			|
			highlight-code(inline) vue-thailand-address.min.css
			|
			| (minified)
	blockquote หากต้องใช้ style ที่เขียนขึ้นเอง ก็ไม่จำเป็นต้องใช้ไฟล์นี้ก็ได้ครับ
	p: strong JavaScript:
	ol
		li
			highlight-code(inline) db.web.js
			|
			| หรือ
			|
			highlight-code(inline) db.web.min.js
			|
			| (minified)
		li
			highlight-code(inline) vue-thailand-address.web.js
			|
			| หรือ
			|
			highlight-code(inline) vue-thailand-address.web.min.js
			|
			| (minified)
	blockquote กรุณาเพิ่มไฟล์ตามลำดับ มิฉะนั้นอาจพบข้อผิดพลาด
	h2
		span.icon.is-large.has-text-success
			i.fas.fa-book.fa-lg
		span CDN
	h3
		Link(url='https://www.jsdelivr.com/') jsDelivr
	p: strong CSS:
	ul: li
		highlight-code(inline) vue-thailand-address.css
		ul
			li: highlight-code(inline) https://cdn.jsdelivr.net/npm/vue-thailand-address@3.0.0-rc.3/dist/vue-thailand-address.css
			li
				highlight-code(inline) https://cdn.jsdelivr.net/npm/vue-thailand-address@3.0.0-rc.3/dist/vue-thailand-address.min.css
				|
				| (minified)
	p: strong JavaScript:
	ul
		li
			| รวม
			|
			highlight-code(inline) db.web.js
			|
			| กับ
			|
			highlight-code(inline) vue-thailand-address.web.js
			ul
				li: highlight-code(inline) https://cdn.jsdelivr.net/combine/npm/vue-thailand-address@3.0.0-rc.3/dist/db.web.js,npm/vue-thailand-address@3.0.0-rc.3/dist/vue-thailand-address.web.js
				li
					highlight-code(inline) https://cdn.jsdelivr.net/combine/npm/vue-thailand-address@3.0.0-rc.3/dist/db.web.min.js,npm/vue-thailand-address@3.0.0-rc.3
					|
					| (minified)
</template>

<style lang="scss">
#get-started-browser {
	li {
		line-height: 2rem;
	}
	blockquote {
		margin: 1em 0;
	}
}
</style>
