<template lang="pug">
#get-started
	BackTop/
	Row: Col(span='20' offset='2')
		h1 เริ่มต้น
	Row: Col(span='20' offset='2')
		Card
			h2(slot='title')
				FAIcon(
					type='solid'
					name='cog'
					:size='iconSize'
					color='green'
				)
				|
				| การติดตั้ง
			p: strong ด้วย #[Link(:url='npmLink') npm]:
			highlight-code(lang='bash') npm install vue-thailand-address
			Divider/
			p: strong ด้วย #[Link(:url='yarnLink') Yarn]:
			highlight-code(lang='bash') yarn add vue-thailand-address
	Row: Col(span='20' offset='2')
		Card
			h2(slot='title')
				FAIcon(
					type='solid'
					name='book'
					:size='iconSize'
					color='purple'
				)
				|
				| วิธีใช้
			h3 ในไฟล์ entry
			highlight-code(lang='js')
				include ../snippets/GetStarted/main.js
			Divider/
			h3 ในไฟล์ Vue
			Collapse(v-model='usageValue' accordion)
				Panel(name='simple')
					| การใช้งานอย่างง่าย
					highlight-code(lang='vue' slot='content')
						include:escape-html ../snippets/GetStarted/usage1.vue
				Panel(name='advance')
					| ใช้ DataStore แยก สำหรับเก็บที่อยู่แยกชุด
					highlight-code(lang='vue' slot='content')
						include:escape-html ../snippets/GetStarted/usage2.vue
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
	name: 'GetStarted'
})
export default class GetStarted extends Vue {
	iconSize: string = '1.5';
	npmLink: string = 'https://www.npmjs.com/';
	yarnLink: string = 'https://yarnpkg.com/';
	usageValue: string = '';
}
</script>

<style lang="scss">
#get-started {
	margin-top: 1rem;

	h1 {
		margin: 1rem 0;
	}
	h3 + .ivu-collapse {
		margin-top: 1rem;
	}
	.ivu-card {
		margin: .5rem 0;
	}
	i.fas {
		vertical-align: middle;
	}
}
</style>
