<template lang="pug">
#app
	section
		.title Address Form
		.showcase.input
			.row
				addressinput-subdistrict(v-model='data1.subdistrict')
				addressinput-district(v-model='data1.district')
			.row
				addressinput-province(v-model='data1.province')
				addressinput-zipcode(v-model='data1.zipcode')
		.button-container
			button(type='button' @click='clear1') Clear
		.divider
		.title Result
		.showcase
			.row
				.col #[b ตำบล/แขวง:] {{ data1.subdistrict }}
				.col #[b อำเภอ/เขต:] {{ data1.district }}
			.row
				.col #[b จังหวัด:] {{ data1.province }}
				.col #[b รหัสไปรษณีย์:] {{ data1.zipcode }}
	section
		.title Address Form
		.showcase.input
			.row
				addressinput-subdistrict(
					:store='newStore'
					v-model='data2.subdistrict'
				)
				addressinput-district(
					:store='newStore'
					v-model='data2.district'
				)
			.row
				addressinput-province(
					:store='newStore'
					v-model='data2.province'
				)
				addressinput-zipcode(
					:store='newStore'
					v-model='data2.zipcode'
				)
		.button-container
			button(type='button' @click='clear2') Clear
		.divider
		.title Result
		.showcase
			.row
				.col #[b ตำบล/แขวง:] {{ data2.subdistrict }}
				.col #[b อำเภอ/เขต:] {{ data2.district }}
			.row
				.col #[b จังหวัด:] {{ data2.province }}
				.col #[b รหัสไปรษณีย์:] {{ data2.zipcode }}
</template>

<script>
import { DataStore, defaultStore } from '../src';

const newStore = new DataStore();

export default {
	name: 'App',
	data() {
		return {
			newStore,
			data1: {
				subdistrict: 'ควนทอง',
				district: 'ขนอม',
				province: 'นครศรีธรรมราช',
				zipcode: '80210'
			},
			data2: {
				subdistrict: '',
				district: '',
				province: '',
				zipcode: ''
			}
		};
	},
	methods: {
		clear1() {
			this.data1 = {
				subdistrict: '',
				district: '',
				province: '',
				zipcode: ''
			};

			defaultStore.resetValue();
		},
		clear2() {
			this.data2 = {
				subdistrict: '',
				district: '',
				province: '',
				zipcode: ''
			};

			newStore.resetValue();
		}
	}
};
</script>

<style lang="scss">
#app {
	margin: 2rem auto;
	width: 90%;
	counter-reset: section;

	.divider {
		margin: 2em 0;
	}
	.button-container {
		margin: 1em 0;

		button {
			background-color: purple;
			color: white;
			border: 2px solid purple;
			border-radius: 3px;
			padding: .7em;
			cursor: pointer;
			transition-property: all;
			transition-duration: 0.2s;

			&:hover {
				background-color: white;
				color: purple;
				border: 2px solid purple;
			}
			&:active {
				background-color: purple;
				color: white;
				border: 2px solid purple;
			}
		}
	}
	section {
		margin: 1rem 0;
		padding: 1rem;
		border: 5px solid green;
		border-radius: 1em;
		counter-increment: section;

		& + section {
			margin-top: 2rem;
		}

		.title {
			color: blue;
			font-size: 1.25em;
			font-weight: bold;
			margin-bottom: 1em;

			&::after {
				content: ' ' counter(section);
			}
		}
		.showcase {
			display: grid;
			grid-template-rows: auto;
			grid-row-gap: 1em;

			&.input .row {
				grid-column-gap: 1em;
				grid-template-columns: auto auto;
			}
			.row {
				display: grid;
				grid-template-columns: 50% 50%;
			}
		}
	}
}
</style>
