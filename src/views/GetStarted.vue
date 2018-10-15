<template lang="pug">
#get-started
	BackTop/
	Row: Col(span='20' offset='2')
		h1 เริ่มต้น
	Row: Col(span='20' offset='2')
		Card
			h2(slot='title')
				Icon(type='md-construct' color='green' :size='iconSize')
				|
				| การติดตั้ง
			p: strong ด้วย #[Link(:url='npmLink') npm]:
			highlight-code(lang='bash') npm install vue-thailand-address
			p: strong ด้วย #[Link(:url='yarnLink') Yarn]:
			highlight-code(lang='bash') yarn add vue-thailand-address
	Row: Col(span='20' offset='2')
		Card
			h2(slot='title')
				Icon(type='md-book' color='purple' :size='iconSize')
				|
				| วิธีใช้
			highlight-code(lang='js')
				include ../snippets/GetStarted/main.js
			Divider/
			Tabs(type='card' value='simple')
				TabPane(name='simple' label='การใช้งานแบบง่ายๆ')
					highlight-code(lang='vue')
						include:escape-html ../snippets/GetStarted/usage1.vue
				TabPane(name='advance' label='ใช้ DataStore แยก สำหรับเก็บที่อยู่แยกชุด')
					highlight-code(lang='vue')
						include:escape-html ../snippets/GetStarted/usage2.vue
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
	name: 'GetStarted'
})
export default class GetStarted extends Vue {
	iconSize: string = '30';
	npmLink: string = 'https://www.npmjs.com/';
	yarnLink: string = 'https://yarnpkg.com/';
}
</script>

<style lang="scss">
#get-started {
	margin-top: 1rem;

	h1 {
		margin: 1rem 0;
	}
	.ivu-card {
		margin: .5rem 0;
	}
}
</style>
