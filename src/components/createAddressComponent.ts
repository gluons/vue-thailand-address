import Vue from 'vue';

import Target from '../types/Target';
import InputContainer from './InputContainer.vue';

/**
 * Create address input component for given `target`.
 *
 * @export
 * @param {Target} target Address property target
 * @param {string} defaultLabel Default input label
 */
export default function createAddressComponent(
	target: Target,
	defaultLabel: string
) {
	return Vue.extend({
		functional: true,
		props: {
			label: {
				type: String,
				default: defaultLabel
			}
		},
		render(createElement, context) {
			return createElement(
				InputContainer,
				{
					...context.data,
					props: {
						label: context.props.label,
						target
					}
				}
			);
		}
	});
}
