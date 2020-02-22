/// <reference path='../src/sfc.d.ts' />

import { shallowMount } from '@vue/test-utils';

import TypeaheadInput from '../src/components/TypeaheadInput.vue';

const query = 'กรุงเทพมหานคร';
const itemCount = 182;

describe('TypeaheadInput', () => {
	const wrapper = shallowMount(TypeaheadInput, {
		propsData: {
			target: 'province',
			value: query
		}
	});

	it('should render expected DOM', () => {
		expect(wrapper.is('.th-address-container')).toBe(true);
		expect(wrapper.contains('input.th-address-input')).toBe(true);
	});

	it('should has expected props', () => {
		expect(wrapper.props('target')).toEqual('province');
		expect(wrapper.props('value')).toEqual(query);
	});

	it('should has expected data', () => {
		const vm: any = wrapper.vm;
		vm.search(vm.value);

		expect(vm.possibles).toHaveLength(itemCount);
		expect(vm.selectedIndex).toEqual(0);
	});
});
