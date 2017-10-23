/* tslint:disable:no-unused-expression */
import { mount } from 'avoriaz';
import { expect } from 'chai';

import TypeaheadInput from '@/components/TypeaheadInput.vue';

describe('TypeaheadInput', () => {
	const wrapper = mount(TypeaheadInput, {
		propsData: {
			target: 'province',
			label: 'Province'
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
		let propsData: any = wrapper.propsData();

		it(`should has 'target' prop with expected value`, () => {
			expect(propsData.target).to.equal('province');
		});
		it(`should has 'label' prop with expected value`, () => {
			expect(propsData.label).to.equal('Province');
		});
	});
	describe('Computed', () => {
		let computed: any = wrapper.computed();

		it(`should has 'hasLabel' computed`, () => {
			expect(computed.hasLabel).to.exist;
		});
	});
	describe('Methods', () => {
		let methods: any = wrapper.methods();

		it(`should has 'onInput' method`, () => {
			expect(typeof methods.onInput).to.equal('function');
		});
		it(`should has 'closeAutocomplete' method`, () => {
			expect(typeof methods.closeAutocomplete).to.equal('function');
		});
		it(`should has 'moveSelectedIndex' method`, () => {
			expect(typeof methods.moveSelectedIndex).to.equal('function');
		});
		it(`should has 'selectItemData' method`, () => {
			expect(typeof methods.selectItemData).to.equal('function');
		});
	});
});
