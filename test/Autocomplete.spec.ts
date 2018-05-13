/* tslint:disable:no-unused-expression */
import { mount } from '@vue/test-utils';
import { expect } from 'chai';

import Autocomplete from '../src/components/Autocomplete.vue';

describe('Autocomplete', () => {
	const wrapper = mount(Autocomplete, {
		propsData: {
			possibles: [],
			target: 'amphoe',
			maxHeight: 500
		}
	});

	describe('Props', () => {
		it(`should has 'target' prop with expected value`, () => {
			expect(wrapper.props().target).to.exist;
			expect(wrapper.props().target).to.equal('amphoe');
		});
		it(`should has 'maxHeight' prop with expected value`, () => {
			expect(wrapper.props().maxHeight).to.exist;
			expect(wrapper.props().maxHeight).to.equal(500);
		});
		it(`should has 'selectedIndex' prop with default value`, () => {
			let vm: any = wrapper.vm;

			expect(vm.selectedIndex).to.exist;
			expect(vm.selectedIndex).to.equal(-1);
		});
	});
	describe('Computed', () => {
		let vm: any = wrapper.vm;

		it(`should has 'style' computed`, () => {
			expect(vm.style).to.exist;
		});
		it(`should has 'hasData' computed`, () => {
			expect(vm.hasData).to.exist;
		});
		it(`should has 'autocompleteList' computed`, () => {
			expect(vm.autocompleteList).to.exist;
		});
	});
	describe('Methods', () => {
		let vm: any = wrapper.vm;

		it(`should has 'onItemClick' method`, () => {
			expect(typeof vm.onItemClick).to.equal('function');
		});
		it(`should has 'changeSelectedIndex' method`, () => {
			expect(typeof vm.changeSelectedIndex).to.equal('function');
		});
	});
});
