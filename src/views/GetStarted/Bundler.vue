<template lang="pug">
#get-started.container.content
	h1 เริ่มต้น (ด้วย bundler)
	h2
		span.icon.is-large.has-text-primary
			i.fas.fa-cog.fa-lg
		span การติดตั้ง
	p: strong ด้วย #[Link(:url='npmLink') npm]:
	highlight-code(lang='bash').is-paddingless npm install vue-thailand-address
	p: strong ด้วย #[Link(:url='yarnLink') Yarn]:
	highlight-code(lang='bash').is-paddingless yarn add vue-thailand-address
	.is-divider
	h2
		span.icon.is-large.has-text-success
			i.fas.fa-book.fa-lg
		span วิธีใช้
	h3 ในไฟล์ entry
	highlight-code(lang='ts').is-paddingless: include ../../snippets/GetStarted/main.js
	h3 ในไฟล์ Vue
	b-collapse.card
		.card-header(slot='trigger' slot-scope='props')
			.card-header-title การใช้งานอย่างง่าย
			a.card-header-icon
				b-icon(:icon='props.open ? "caret-down" : "caret-up"')
		.card-content
			highlight-code(lang='vue').is-paddingless
				include:escape-html ../../snippets/GetStarted/usage1.vue
	b-collapse.card(:open='false')
		.card-header(slot='trigger' slot-scope='props')
			.card-header-title ใช้ DataStore แยก สำหรับเก็บที่อยู่แยกชุด
			a.card-header-icon
				b-icon(:icon='props.open ? "caret-down" : "caret-up"')
		.card-content
			highlight-code(lang='vue').is-paddingless
				include:escape-html ../../snippets/GetStarted/usage2.vue
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import { npmLink, yarnLink } from '@/constants/links';

@Component({
	name: 'GetStarted'
})
export default class GetStarted extends Vue {
	iconSize: string = '1.5';
	npmLink: string = npmLink;
	yarnLink: string = yarnLink;
	usageTab: number = 0;
}
</script>

<style lang="scss">
#get-started {
	h2 span {
		vertical-align: middle;
	}
}
</style>
