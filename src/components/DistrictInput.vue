<template lang="pug">
input-container(
	target='district'
	:label='label'
	v-bind='$attrs'
	v-on='$listeners'
)
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

import InputContainer from './input/InputContainer.vue';

@Component({
	name: 'DistrictInput',
	components: {
		InputContainer
	},
	inheritAttrs: false
})
export default class DistrictInput extends Vue {
	@Prop({ type: String, default: 'อำเภอ/เขต' }) label: string;
}
</script>
