<template lang="pug">
v-fragment
	h2
		code.plain(v-if='title') {{ title }}
		slot(v-else='title' name='title')/
		b-tag(
			v-if='tag && tagType'
			:type='tagType'
			size='is-medium'
		) {{ tag }}
	p(v-if='returnType')
		span.has-text-weight-semibold ประเถท:
		| &nbsp;
		router-link(v-if='returnTypeLink' :to='returnTypeLink')
			highlight-code(lang='ts' inline) {{ returnType }}
		highlight-code(v-else lang='ts' inline) {{ returnType }}
	p
		slot/
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
	name: 'APIClassProp'
})
export default class APIClassProp extends Vue {
	@Prop(String)
	title: string;

	@Prop(String)
	returnType: string;

	@Prop([String, Object])
	returnTypeLink: string | object;

	@Prop(String)
	tag: string;

	@Prop(String)
	tagType: string;
}
</script>
