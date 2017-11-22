/* tslint:disable:no-unused-expression */
import { mount, MountOptions } from 'avoriaz';
import { expect } from 'chai';

import InputContainer from '@/components/InputContainer.vue';

interface MountOptionsWithAttrs extends MountOptions<InputContainer> {
	attrs: object;
}

describe('InputContainer', () => {
	const wrapper = mount(InputContainer, {
		propsData: {
			label: 'Province'
		},
		attrs: {
			dataSource: [],
			target: 'province'
		}
	} as MountOptionsWithAttrs);

	describe('Props', () => {
		it(`should has 'label' prop with expected value`, () => {
			expect(wrapper.getProp('label')).to.equal('Province');
		});
	});
});
