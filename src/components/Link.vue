<template lang="pug">
a(
	:href='url'
	target='_blank'
	rel='noopener noreferrer'
)
	slot
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
	name: 'Link'
})
export default class Link extends Vue {
	@Prop({ type: String, required: true })
	url: string;
}
</script>
