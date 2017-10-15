import { ActionContext, ActionTree } from 'vuex';

import { LIST, VALUE } from '@/store/mutation-types';
import { State as RootState } from '@/store/state';
import { InputState } from './state';

const actions: ActionTree<InputState, RootState> = {
	updateValue({ commit }: ActionContext<InputState, RootState>, newValue: string) {
		commit(VALUE, newValue);
	},
	updateList({ commit }: ActionContext<InputState, RootState>, newList: AddressEntry[]) {
		commit(LIST, newList);
	},
	clearList({ commit }: ActionContext<InputState, RootState>) {
		commit(LIST, []);
	}
};

export default actions;
