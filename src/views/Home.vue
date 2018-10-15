<template lang="pug">
Row(type='flex' justify='space-around' align='middle')#home
	Col(:xs='18' :sm='14' :lg='12')
		h1.title
			Icon(custom='flag-icon flag-icon-th' size='30')
			span Vue Thailand Address
		p ตัวช่วยกรอกที่อยู่ของไทย สำหรับ #[Link(:url='vueLink') Vue] (ปราศจาก jQuery 🎉)
		p.credit แนวความคิดและฐานข้อมูลที่อยู่จาก #[Link(:url='jqTHLink') jquery.Thailand.js]
		.btn-container
			Link(
				url='https://github.com/gluons/vue-thailand-address'
				btn
				btnIcon='logo-github'
			) Star บน GitHub
			Button(
				type='primary'
				icon='md-play'
			) เริ่มต้น
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
	text-align: center;

	@media (min-width: 576px) {
		font-size: 0.9rem !important;
	}
	@media (min-width: 768px) {
		font-size: 1.1rem !important;
	}
	@media (min-width: 992px) {
		font-size: 1.2rem !important;
	}
	@media (min-width: 1200px) {
		font-size: 1.5rem !important;
	}
	h1.title {
		i {
			margin-right: 0.5rem;
		}
		span {
			vertical-align: middle;
		}
	}
	.credit {
		margin: 1rem 0;
		padding: 1rem;
		border: 3px solid #dcdee2;
		border-radius: 3px;
	}
	.btn-container {
		margin-top: 3rem;
		text-align: center;

		.ivu-btn {
			padding: 1rem 2rem 1rem;
			font-size: 1em;

			& + .ivu-btn {
				margin-left: 1rem;
			}
		}
	}
}
</style>
