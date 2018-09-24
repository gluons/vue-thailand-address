<template lang="pug">
input-container(
	:value='value'
	target='subdistrict'
	:label='label'
	@itemselect='$emit("itemselect", $event)'
)
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

import InputContainer from './input/InputContainer.vue';

@Component({
	name: 'SubDistrictInput',
	components: {
		InputContainer
	}
})
export default class SubDistrictInput extends Vue {
	@Prop({ type: String, default: 'ตำบล/แขวง' }) label: string;
	@Prop(String) value: string;
}
</script>
