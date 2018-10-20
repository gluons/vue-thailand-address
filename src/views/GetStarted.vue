<template lang="pug">
#get-started.container
	h1.is-size-3 เริ่มต้น
	h2.is-size-4
		b-icon(type='is-primary' icon='cog')
		span การติดตั้ง
	p: strong ด้วย #[Link(:url='npmLink') npm]:
	highlight-code.is-paddingless(lang='bash') npm install vue-thailand-address
	p: strong ด้วย #[Link(:url='yarnLink') Yarn]:
	highlight-code.is-paddingless(lang='bash') yarn add vue-thailand-address
	.is-divider
	h2.is-size-4
		b-icon(type='is-success' icon='book')
		span วิธีใช้
	h3.is-size-5 ในไฟล์ entry
	highlight-code.is-paddingless(lang='js'): include ../snippets/GetStarted/main.js
	h3.is-size-5 ในไฟล์ Vue
	b-tabs(
		v-model='usageTab'
		type='is-toggle'
		expanded
	)
		b-tab-item(label='การใช้งานอย่างง่าย' icon='circle')
			highlight-code.is-paddingless(lang='vue')
				include:escape-html ../snippets/GetStarted/usage1.vue
		b-tab-item(label='ใช้ DataStore แยก สำหรับเก็บที่อยู่แยกชุด' icon='shapes')
			highlight-code.is-paddingless(lang='vue')
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
	// .tabs ul {
	// 	list-style: none !important;
	// 	margin: 0 !important;
	// }
}
</style>
