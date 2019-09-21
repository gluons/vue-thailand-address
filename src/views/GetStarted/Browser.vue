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
			highlight-code(inline).minified vue-thailand-address.min.css
	b-message(type='is-info' has-icon) คุณไม่จำเป็นต้องใช้ไฟล์นี้ก็ได้ ถ้าหากต้องการใช้ style ที่เขียนขึ้นเอง
	p: strong JavaScript:
	ol
		li
			highlight-code(inline) db.web.js
			|
			| หรือ
			|
			highlight-code(inline).minified db.web.min.js
		li
			highlight-code(inline) vue-thailand-address.web.js
			|
			| หรือ
			|
			highlight-code(inline).minified vue-thailand-address.web.min.js
	b-message(type='is-danger' has-icon) กรุณาเพิ่มไฟล์ตามลำดับ มิฉะนั้นอาจพบข้อผิดพลาด
	h2
		span.icon.is-large.has-text-success
			i.fas.fa-dice-d20.fa-lg
		span CDN
	h3
		Link(url='https://www.jsdelivr.com/') jsDelivr
	p: strong CSS:
	ul: li(v-for='item in jsDelivr.css' :key='item.fileName')
		strong {{ item.fileName }}
		ul
			li: b-tooltip(:label='tooltipText' animated)
				highlight-code(inline @click.native='copyText(item.unmin)') {{ item.unmin }}
			li: b-tooltip(:label='tooltipText' animated)
				highlight-code(inline @click.native='copyText(item.min)').minified {{ item.min }}
	p: strong JavaScript:
	ul
		li.combined
			strong(
				v-for='item in jsDelivr.js.fileName'
				:key='item'
			) {{ item }}
			ul
				li: b-tooltip(:label='tooltipText' animated)
					highlight-code(inline @click.native='copyText(jsDelivr.js.unmin)') {{ jsDelivr.js.unmin }}
				li: b-tooltip(:label='tooltipText' animated)
					highlight-code(inline @click.native='copyText(jsDelivr.js.min)').minified {{ jsDelivr.js.min }}
	h3
		Link(url='https://unpkg.com/') unpkg
	p: strong CSS:
	ul: li(v-for='item in unpkg.css' :key='item.fileName')
		strong {{ item.fileName }}
		ul
			li: b-tooltip(:label='tooltipText' animated)
				highlight-code(inline @click.native='copyText(item.unmin)') {{ item.unmin }}
			li: b-tooltip(:label='tooltipText' animated)
				highlight-code(inline @click.native='copyText(item.min)').minified {{ item.min }}
	p: strong JavaScript:
	ul: li(v-for='item in unpkg.js' :key='item.fileName')
			strong {{ item.fileName }}
			ul
				li: b-tooltip(:label='tooltipText' animated)
					highlight-code(inline @click.native='copyText(item.unmin)') {{ item.unmin }}
				li: b-tooltip(:label='tooltipText' animated)
					highlight-code(inline @click.native='copyText(item.min)').minified {{ item.min }}
	h2
		span.icon.is-large.has-text-danger
			i.fas.fa-chalkboard.fa-lg
		span ตัวอย่าง
	highlight-code(lang='html').is-paddingless
		include:escape-html ../../snippets/GetStarted/browser.html
</template>

<script lang="ts">
import copy from 'copy-text-to-clipboard';
import { Component, Vue } from 'vue-property-decorator';

import { CDN, jsDelivr, unpkg } from '@/constants/cdn';

@Component({
	name: 'Browser'
})
export default class Browser extends Vue {
	jsDelivr: CDN = jsDelivr;
	unpkg: CDN = unpkg;
	tooltipText = 'คลิ๊กเพื่อคัดลอก';

	copyText(text: string) {
		copy(text);

		this.$buefy.toast.open({
			message: 'คัดลอกเรียบร้อย',
			type: 'is-success'
		});
	}
}
</script>

<style lang="scss">
#get-started-browser {
	li {
		line-height: 2rem;

		&.combined > strong:not(:last-of-type)::after {
			content: '+';
			font-weight: normal;
			margin: 0 3px;
		}
	}
	.minified {
		&::after {
			content: '(minified)';
			margin-left: 3px;
		}
	}
}
</style>
