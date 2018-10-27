import Vue, { VueConstructor } from 'vue';

import DataStore from '../data/DataStore';
import Target from '../types/Target';
import InputContainer from './InputContainer.vue';

export type AddressComponentProps = {
	label: string;
	store: DataStore;
	value: string;
	inputClass: string;
};

/**
 * Create address input component for given `target`.
 *
 * @export
 * @param {Target} target Address property target
 * @param {string} defaultLabel Default input label
 * @returns {(VueConstructor<AddressComponentProps & Vue>)}
 */
export default function createAddressComponent(
	target: Target,
	defaultLabel: string
): VueConstructor<AddressComponentProps & Vue> {
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
