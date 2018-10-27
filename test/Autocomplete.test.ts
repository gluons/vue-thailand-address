/// <reference path='../src/sfc.d.ts' />

import { mount } from '@vue/test-utils';

import Autocomplete from '../src/components/Autocomplete.vue';

import { defaultStore } from '../src/data/DataStore';
import getPossibles from '../src/lib/getPossibles';

const query = 'กรุงเทพมหานคร';
const possibles = getPossibles(defaultStore.dataSource, 'province', query);
const itemCount = 182;

describe('Autocomplete', () => {
	const wrapper = mount(Autocomplete, {
		propsData: {
			query,
			items: possibles,
			target: 'province',
			selectedIndex: 0
		}
	});

	it('should render expected DOM', () => {
		expect(wrapper.is('ul.th-address-autocomplete')).toBe(true);

		const listItems = wrapper.findAll('li');

		expect(listItems).toHaveLength(itemCount);
		expect(listItems.at(0).classes('active')).toBe(true);
	});

	it('should has expected props', () => {
		expect(wrapper.props('target')).toEqual('province');
		expect(wrapper.props('items')).toHaveLength(itemCount);
		expect(wrapper.props('selectedIndex')).toEqual(0);
	});
});
