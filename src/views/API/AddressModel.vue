<template lang="pug">
#api-address-model.container.content.is-medium
	h1
		code.plain AddressModel
		span.tag.is-medium.is-info
			Link(
				url='https://www.typescriptlang.org/docs/handbook/interfaces.html'
			) Interface
	h2: code.plain district
	p
		span.has-text-weight-semibold ประเถท:
		| &nbsp;
		highlight-code(lang='ts' inline) string
	p อำเภอ/เขต
	h2: code.plain subdistrict
	p
		span.has-text-weight-semibold ประเถท:
		| &nbsp;
		highlight-code(lang='ts' inline) string
	p ตำบล/แขวง
	h2: code.plain province
	p
		span.has-text-weight-semibold ประเถท:
		| &nbsp;
		highlight-code(lang='ts' inline) string
	p จังหวัด
	h2: code.plain zipcode
	p
		span.has-text-weight-semibold ประเถท:
		| &nbsp;
		highlight-code(lang='ts' inline) number | string
	p รหัสไปรษณีย์
</template>

<style lang="scss" scoped>
.tag {
	margin-left: .5rem;

	a {
		color: inherit !important;
	}
}
</style>
