<template lang="pug">
input-container(
	target='province'
	:label='label'
	v-bind='$attrs'
	v-on='$listeners'
)
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

import InputContainer from './input/InputContainer.vue';

@Component({
	name: 'ProvinceInput',
	components: {
		InputContainer
	},
	inheritAttrs: false
})
export default class ProvinceInput extends Vue {
	@Prop({ type: String, default: 'จังหวัด' }) label: string;
}
</script>
