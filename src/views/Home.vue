<template lang="pug">
#home
	section.hero.is-fullheight: .hero-body: .container.has-text-centered
		h1.title.is-spaced.is-size-1-desktop.is-size-2-touch
			span.flag-icon.flag-icon-th
			|
			| Vue Thailand Address
		h2.subtitle.is-size-2-desktop.is-size-3-touch
			| ตัวช่วยกรอกที่อยู่ของไทย สำหรับ #[Link(:url='vueLink') Vue] (ปราศจาก jQuery 🎉)
		.columns: .column.is-10.is-offset-1
			.box.is-size-3-desktop.is-size-4-touch แนวความคิดและฐานข้อมูลที่อยู่จาก #[Link(:url='jqTHLink') jquery.Thailand.js]
		.columns.is-centered: .column
			.buttons.is-centered
				Link.button.is-dark.is-rounded.is-medium(
					:url='repoLink'
				)
					span.icon: i.fab.fa-github
					span Star บน GitHub
				router-link.button.is-primary.is-rounded.is-medium(
					to='/get-started'
				)
					span.icon: i.fas.fa-play
					span เริ่มต้น
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import { jqTHLink, repoLink, vueLink } from '@/constants/links';

@Component({
	name: 'Home'
})
export default class Home extends Vue {
	vueLink: string = vueLink;
	repoLink: string = repoLink;
	jqTHLink: string = jqTHLink;
}
</script>
