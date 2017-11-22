/* tslint:disable:no-unused-expression */
import { mount } from 'avoriaz';
import { expect } from 'chai';

import AddressForm from '@/components/AddressForm.vue';

describe('AddressForm', () => {
	const wrapper = mount(AddressForm);

	describe('Props', () => {
		it(`should has 'subdistrictLabel' prop with default value`, () => {
			expect(wrapper.getProp('subdistrictLabel')).to.equal('ตำบล/แขวง');
		});
		it(`should has 'districtLabel' prop with default value`, () => {
			expect(wrapper.getProp('districtLabel')).to.equal('อำเภอ/เขต');
		});
		it(`should has 'provinceLabel' prop with default value`, () => {
			expect(wrapper.getProp('provinceLabel')).to.equal('จังหวัด');
		});
		it(`should has 'zipcodeLabel' prop with default value`, () => {
			expect(wrapper.getProp('zipcodeLabel')).to.equal('รหัสไปรษณีย์');
		});
	});
});
