/// <reference path='../src/sfc.d.ts' />

import { config, shallowMount } from '@vue/test-utils';

import InputContainer from '../src/components/input/InputContainer.vue';

config.logModifiedComponents = false;

const label = 'จังหวัด';

describe('InputContainer', () => {
	const wrapper = shallowMount(InputContainer, {
		propsData: {
			label,
			target: 'province'
		}
	});

	it('should render expected DOM', () => {
		expect(wrapper.is('.th-address')).toBe(true);
		expect(wrapper.contains('label.th-address-label')).toBe(true);
		expect(wrapper.find('.label-text').text()).toEqual(label);
	});

	it('should has expected props', () => {
		expect(wrapper.props('label')).toEqual(label);
	});
});
