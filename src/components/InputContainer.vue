<script lang="ts">
import Vue, { VueConstructor } from 'vue';

import TypeaheadInput from './TypeaheadInput.vue';

const InputContainer: VueConstructor = Vue.extend({
	name: 'InputContainer',
	functional: true,
	props: {
		label: String
	},
	render(createElement, context) {
		const { props, data } = context;
		const label: string = props.label;
		const hasLabel: boolean = (label != null) && (label.length > 0);
		const input = createElement(TypeaheadInput, {
			...data,
			on: {
				// For v-model
				addressinput(value) {
					if (data.on && (typeof data.on.input === 'function')) {
						data.on.input(value);
					}
				}
			}
		});

		return createElement(
			'div',
			{ class: 'th-address' },
			[
				hasLabel ?
				createElement(
					'label',
					{ class: 'th-address-label' },
					[
						createElement(
							'div',
							{ class: 'label-text' },
							label
						),
						input
					]
				) :
				input
			]
		);
	}
});

export default InputContainer;
</script>

<style lang="scss">
label.th-address-label {
	.label-text {
		margin-bottom: 5px;
	}
}
</style>
