/* tslint:disable:no-unused-expression */
import { mount } from '@vue/test-utils';
import { expect } from 'chai';

import AddressForm from '@/components/AddressForm.vue';

describe('AddressForm', () => {
	const wrapper = mount(AddressForm);

	describe('Props', () => {
		it(`should has 'subdistrictLabel' prop with default value`, () => {
			expect(wrapper.props().subdistrictLabel).to.exist;
			expect(wrapper.props().subdistrictLabel).to.equal('ตำบล/แขวง');
		});
		it(`should has 'districtLabel' prop with default value`, () => {
			expect(wrapper.props().districtLabel).to.exist;
			expect(wrapper.props().districtLabel).to.equal('อำเภอ/เขต');
		});
		it(`should has 'provinceLabel' prop with default value`, () => {
			expect(wrapper.props().provinceLabel).to.exist;
			expect(wrapper.props().provinceLabel).to.equal('จังหวัด');
		});
		it(`should has 'zipcodeLabel' prop with default value`, () => {
			expect(wrapper.props().zipcodeLabel).to.exist;
			expect(wrapper.props().zipcodeLabel).to.equal('รหัสไปรษณีย์');
		});
	});
});
