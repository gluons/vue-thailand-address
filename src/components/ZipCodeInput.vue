<template lang="pug">
input-container(
	:value='value'
	target='zipcode'
	:label='label'
	v-bind='$attrs'
	v-on='$listeners'
)
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

import InputContainer from './input/InputContainer.vue';

@Component({
	name: 'ZipCodeInput',
	components: {
		InputContainer
	},
	inheritAttrs: false
})
export default class ZipCodeInput extends Vue {
	@Prop({ type: String, default: 'รหัสไปรษณีย์' }) label: string;
	@Prop(String) value: string;
}
</script>
