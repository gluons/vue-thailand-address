<template lang="pug">
#app
	.title Address Form
	subdistrict-input(:value='subdistrict', @itemselect='onSelectItem')
	district-input(:value='district', @itemselect='onSelectItem')
	province-input(:value='province', @itemselect='onSelectItem')
	zipcode-input(:value='zipcode', @itemselect='onSelectItem')
	.button-container
		button(type='button' @click='clear') Clear
	hr
	.title Result
	.result
		.row
			.col #[b ตำบล/แขวง:] {{ subdistrict }}
			.col #[b อำเภอ/เขต:] {{ district }}
		.row
			.col #[b จังหวัด:] {{ province }}
			.col #[b รหัสไปรษณีย์:] {{ zipcode }}
</template>

<script>
export default {
	name: 'app',
	data() {
		return {
			subdistrict: 'ควนทอง',
			district: 'ขนอม',
			province: 'นครศรีธรรมราช',
			zipcode: '80210'
		};
	},
	methods: {
		clear() {
			this.subdistrict = null;
			this.district = null;
			this.province = null;
			this.zipcode = null;
		},
		onSelectItem(item) {
			this.subdistrict = item.subdistrict;
			this.district = item.district;
			this.province = item.province;
			this.zipcode = item.zipcode;
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
