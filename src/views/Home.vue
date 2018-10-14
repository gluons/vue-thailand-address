<template lang="pug">
Row(type='flex' justify='space-around' align='middle')#home
	Col(:xs='18' :sm='12' :lg='12')
		p.gh
			gh-btns-star(slug='gluons/vue-thailand-address' show-count)
		h1.title
			Icon(custom='flag-icon flag-icon-th' size='30')
			span Vue Thailand Address
		p ตัวช่วยกรอกที่อยู่ของไทย สำหรับ #[Link(:url='vueLink') Vue] (ปราศจาก jQuery 🎉)
		blockquote แนวความคิดและฐานข้อมูลที่อยู่จาก #[Link(:url='jqTHLink') jquery.Thailand.js]
		p.get-started
			Button(
				type='primary'
				icon='md-play'
			).btn เริ่มต้น
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import Link from '@/components/Link.vue';

@Component({
	name: 'Home',
	components: {
		Link
	}
})
export default class Home extends Vue {
	vueLink: string = 'https://vuejs.org/';
	jqTHLink: string = 'https://github.com/earthchie/jquery.Thailand.js';
}
</script>

<style lang="scss">
#home {
	height: 100%;

	@media (min-width: 576px) {
		font-size: .9rem;
	}
	@media (min-width: 768px) {
		font-size: 1rem;
	}
	@media (min-width: 992px) {
		font-size: 1.3rem;
	}
	@media (min-width: 1200px) {
		font-size: 1.5rem;
	}
	h1.title {
		i {
			margin-right: 0.5rem;
		}
		span {
			vertical-align: middle;
		}
	}
	.gh-button-container {
		float: none !important;
	}
	.gh-button:hover {
		color: initial !important;
	}
	p.gh {
		padding: 1rem 0;
		text-align: center;
	}
	p.get-started {
		margin-top: 3rem;
		text-align: center;

		.btn {
			padding: 1rem 2rem 1rem;
			font-size: 1em;
		}
	}
	blockquote {
		margin-top: 3rem !important;
	}
}
</style>
