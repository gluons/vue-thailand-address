<template lang="pug">
#get-started-bundler.container.content
	h1 เริ่มต้น (ด้วย bundler)
	h2
		span.icon.is-large.has-text-primary
			i.fas.fa-cog.fa-lg
		span การติดตั้ง
	p: strong ด้วย #[Link(:url='npmLink') npm]:
	b-tooltip(:label='tooltipText' animated)
		highlight-code(lang='bash' @click.native='copyText(commands.npm)').is-paddingless
			| {{ commands.npm }}
	p: strong ด้วย #[Link(:url='yarnLink') Yarn]:
	b-tooltip(:label='tooltipText' animated)
		highlight-code(lang='bash' @click.native='copyText(commands.yarn)').is-paddingless
			| {{ commands.yarn }}
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
import copy from 'copy-text-to-clipboard';
import { Component, Vue } from 'vue-property-decorator';

import { npmLink, yarnLink } from '@/constants/links';

@Component({
	name: 'GetStarted'
})
export default class GetStarted extends Vue {
	iconSize: string = '1.5';
	npmLink: string = npmLink;
	yarnLink: string = yarnLink;
	commands = {
		npm: 'npm install vue-thailand-address',
		yarn: 'yarn add vue-thailand-address'
	};
	tooltipText = 'คลิ๊กเพื่อคัดลอก';

	copyText(text: string) {
		copy(text);

		this.$toast.open({
			message: 'คัดลอกเรียบร้อย',
			type: 'is-success'
		});
	}
}
</script>

<style lang="scss">
#get-started-bundler {
	.tooltip {
		display: block !important;
	}
}
</style>
