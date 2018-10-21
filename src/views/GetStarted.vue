<template lang="pug">
#get-started.container
	h1.is-size-3 เริ่มต้น
	h2.is-size-4
		b-icon(type='is-primary' icon='cog')
		span การติดตั้ง
	p: strong ด้วย #[Link(:url='npmLink') npm]:
	highlight-code(lang='bash') npm install vue-thailand-address
	p: strong ด้วย #[Link(:url='yarnLink') Yarn]:
	highlight-code(lang='bash') yarn add vue-thailand-address
	.is-divider
	h2.is-size-4
		b-icon(type='is-success' icon='book')
		span วิธีใช้
	h3.is-size-5 ในไฟล์ entry
	highlight-code(lang='js'): include ../snippets/GetStarted/main.js
	h3.is-size-5 ในไฟล์ Vue
	b-collapse.card
		.card-header(slot='trigger' slot-scope='props')
			p.card-header-title การใช้งานอย่างง่าย
			a.card-header-icon
				b-icon(:icon='props.open ? "caret-down" : "caret-up"')
		.card-content
			highlight-code(lang='vue')
				include:escape-html ../snippets/GetStarted/usage1.vue
	b-collapse.card(:open='false')
		.card-header(slot='trigger' slot-scope='props')
			p.card-header-title ใช้ DataStore แยก สำหรับเก็บที่อยู่แยกชุด
			a.card-header-icon
				b-icon(:icon='props.open ? "caret-down" : "caret-up"')
		.card-content
			highlight-code(lang='vue')
				include:escape-html ../snippets/GetStarted/usage2.vue
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
	margin-top: 1rem;

	h2 {
		.icon {
			margin-right: 1rem;
		}
		& > * {
			vertical-align: middle;
		}
	}
}
</style>
