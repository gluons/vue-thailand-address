<template lang="pug">
input-container(
	:value='value'
	target='district'
	:label='label'
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
	}
})
export default class DistrictInput extends Vue {
	@Prop({ type: String, default: 'อำเภอ/เขต' }) label: string;
	@Prop(String) value: string;
}
</script>
