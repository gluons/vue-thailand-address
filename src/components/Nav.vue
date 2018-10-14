<template lang="pug">
Menu(theme='dark' mode='horizontal' :active-name='currentRouteName')
	MenuItem(name='home' to='/')
		Icon(type='md-home')
		| หน้าแรก
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
	name: 'Nav'
})
export default class Nav extends Vue {
	get currentRouteName(): string | undefined {
		return this.$route.name;
	}
}
</script>
