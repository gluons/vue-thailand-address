/* tslint:disable:no-unused-expression */
import { mount } from 'avoriaz';
import { expect } from 'chai';

import TypeaheadInput from '@/components/TypeaheadInput.vue';

describe('TypeaheadInput', () => {
	const wrapper = mount(TypeaheadInput, {
		propsData: {
			dataSource: [],
			target: 'province'
		},
		data() {
			return {
				selectedIndex: 5,
				autocompleteCount: 10
			};
		}
	});

	describe('Data', () => {
		let data: any = wrapper.data();

		it(`should has 'selectedIndex' with expected data`, () => {
			expect(data.selectedIndex).to.equal(5);
		});
		it(`should has 'autocompleteCount' with expected data`, () => {
			expect(data.autocompleteCount).to.equal(10);
		});
	});
	describe('Props', () => {
		it(`should has 'target' prop with expected value`, () => {
			expect(wrapper.getProp('target')).to.equal('province');
		});
	});
	describe('Methods', () => {
		let vm: any = wrapper.vm;

		it(`should has 'onInput' method`, () => {
			expect(typeof vm.onInput).to.equal('function');
		});
		it(`should has 'closeAutocomplete' method`, () => {
			expect(typeof vm.closeAutocomplete).to.equal('function');
		});
		it(`should has 'moveSelectedIndex' method`, () => {
			expect(typeof vm.moveSelectedIndex).to.equal('function');
		});
		it(`should has 'selectItemData' method`, () => {
			expect(typeof vm.selectItemData).to.equal('function');
		});
	});
});
