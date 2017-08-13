import { GetterTree } from 'vuex';

import AddressEntry from '@/interface/AddressEntry';
import { State as RootState } from '@/store/state';
import { InputState } from './state';

const getters: GetterTree<InputState, RootState> = {
	hasAutocomplete(state: InputState): boolean {
		return state.autocompleteList.length > 0;
	},
	autocomplete(state: InputState): AddressEntry[] {
		return state.autocompleteList;
	}
};

export default getters;
