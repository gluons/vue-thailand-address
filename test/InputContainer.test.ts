/// <reference path='../src/sfc.d.ts' />

import { config, shallowMount } from '@vue/test-utils';

import InputContainer from '../src/components/InputContainer.vue';

config.logModifiedComponents = false;

const label = 'จังหวัด';
const target = 'province';

describe('InputContainer', () => {
	const wrapper = shallowMount(InputContainer, {
		context: {
			props: {
				label,
				target
			}
		},
		propsData: {
			label,
			target
		}
	});

	it('should render expected DOM', () => {
		expect(wrapper.is('.th-address')).toBe(true);
		expect(wrapper.contains('label.th-address-label')).toBe(true);
		expect(wrapper.find('.label-text').text()).toEqual(label);
	});
});
