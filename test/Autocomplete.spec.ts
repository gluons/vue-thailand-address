/* tslint:disable:no-unused-expression */
import { mount } from 'avoriaz';
import { expect } from 'chai';

import Autocomplete from '@/components/Autocomplete.vue';

describe('Autocomplete', () => {
	const wrapper = mount(Autocomplete, {
		propsData: {
			target: 'amphoe',
			maxHeight: 500
		}
	});

	describe('Props', () => {
		it(`should has 'target' prop with expected value`, () => {
			expect(wrapper.getProp('target')).to.equal('amphoe');
		});
		it(`should has 'maxHeight' prop with expected value`, () => {
			expect(wrapper.getProp('maxHeight')).to.equal(500);
		});
		it(`should has 'selectedIndex' prop with default value`, () => {
			expect(wrapper.getProp('selectedIndex')).to.equal(-1);
		});
	});
	describe('Computed', () => {
		let computed: any = wrapper.computed();

		it(`should has 'style' computed`, () => {
			expect(computed.style).to.exist;
		});
		it(`should has 'hasData' computed`, () => {
			expect(computed.hasData).to.exist;
		});
		it(`should has 'autocompleteList' computed`, () => {
			expect(computed.autocompleteList).to.exist;
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
