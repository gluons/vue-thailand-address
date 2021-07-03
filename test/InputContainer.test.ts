/// <reference path='../src/sfc.d.ts' />

import { shallowMount } from '@vue/test-utils';

import InputContainer from '../src/components/InputContainer.vue';

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
		expect(wrapper.classes('th-address')).toBe(true);
		expect(wrapper.element.querySelector('label.th-address-label')).toBeTruthy();
		expect(wrapper.find('.label-text').text()).toEqual(label);
	});
});
