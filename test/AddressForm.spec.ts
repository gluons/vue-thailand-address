/* tslint:disable:no-unused-expression */
import { mount } from 'avoriaz';
import { expect } from 'chai';

import AddressForm from '@/components/AddressForm.vue';

describe('AddressForm', () => {
	const wrapper = mount(AddressForm);

	describe('Props', () => {
		let propsData: any = wrapper.propsData();

		it(`should has 'subdistrictLabel' prop with default value`, () => {
			expect(propsData.subdistrictLabel).to.equal('ตำบล/แขวง');
		});
		it(`should has 'districtLabel' prop with default value`, () => {
			expect(propsData.districtLabel).to.equal('อำเภอ/เขต');
		});
		it(`should has 'provinceLabel' prop with default value`, () => {
			expect(propsData.provinceLabel).to.equal('จังหวัด');
		});
		it(`should has 'zipcodeLabel' prop with default value`, () => {
			expect(propsData.zipcodeLabel).to.equal('รหัสไปรษณีย์');
		});
	});
});
