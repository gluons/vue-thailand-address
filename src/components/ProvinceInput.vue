<template lang="pug">
input-container(
	:value='value'
	target='province'
	:label='label'
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
	}
})
export default class ProvinceInput extends Vue {
	@Prop({ type: String, default: 'จังหวัด' }) label: string;
	@Prop(String) value: string;
}
</script>
