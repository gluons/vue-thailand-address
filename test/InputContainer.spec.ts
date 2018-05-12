/* tslint:disable:no-unused-expression */
import { mount, ThisTypedMountOptions } from '@vue/test-utils';
import { expect } from 'chai';
import Vue from 'vue';

import InputContainer from '@/components/InputContainer.vue';

interface MountOptionsWithBetterAttrs<V extends Vue> extends ThisTypedMountOptions<V> {
	attrs: Record<string, any>; // `attrs` value can also be non-string.
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
	} as MountOptionsWithBetterAttrs<InputContainer>);

	describe('Props', () => {
		it(`should has 'label' prop with expected value`, () => {
			expect(wrapper.props().label).to.exist;
			expect(wrapper.props().label).to.equal('Province');
		});
	});
});
