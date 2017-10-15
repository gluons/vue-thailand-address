import { MutationTree } from 'vuex';

import { LIST, VALUE } from '@/store/mutation-types';
import { InputState } from './state';

const mutations: MutationTree<InputState> = {
	[VALUE](state: InputState, newValue: string) {
		state.value = newValue;
	},
	[LIST](state: InputState, newList: AddressEntry[]) {
		state.autocompleteList = newList.slice(0);
	}
};

export default mutations;
