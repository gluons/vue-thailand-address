<template lang="pug">
#app
	.title Address Form
	address-form(v-model='formData')
	.button-container
		button(type='button' @click='clear') Clear
	hr
	.title Result
	.result
		.row
			.col #[b ตำบล/แขวง:] {{ formData.subdistrict }}
			.col #[b อำเภอ/เขต:] {{ formData.district }}
		.row
			.col #[b จังหวัด:] {{ formData.province }}
			.col #[b รหัสไปรษณีย์:] {{ formData.zipcode }}
</template>

<script>
export default {
	name: 'app',
	data() {
		return {
			formData: {
				subdistrict: 'ควนทอง',
				district: 'ขนอม',
				province: 'นครศรีธรรมราช',
				zipcode: '80210'
			}
		};
	},
	methods: {
		clear() {
			this.formData = {
				subdistrict: null,
				district: null,
				province: null,
				zipcode: null
			}
		}
	}
};
</script>

<style lang="scss">
#app {
	margin: 3rem auto 0;
	width: 80%;

	hr {
		margin: 2em 0;
	}
	.title {
		color: blue;
		font-size: 1.25em;
		font-weight: bold;
		margin-bottom: 1em;
	}
	.button-container {
		margin: 1em 0;
	}
	.result {
		display: grid;
		grid-template-rows: auto;
		grid-row-gap: 1em;
		justify-content: stretch;
		align-content: stretch;

		.row {
			display: grid;
			grid-template-columns: 50% 50%;
			justify-content: stretch;
			align-content: stretch;
		}
	}
}
</style>
