/* tslint:disable: no-shadowed-variable */
import AddressEntry from '@/interface/AddressEntry';
import InputState from '@/interface/InputState';
import { LIST, VALUE } from '../mutation-types';

const state = (): InputState => {
	return {
		value: '',
		autocompleteList: []
	};
};

const getters = {
	hasAutocomplete(state: InputState): boolean {
		return state.autocompleteList.length > 0;
	},
	autocomplete(state: InputState): AddressEntry[] {
		return state.autocompleteList;
	}
};

const mutations = {
	[VALUE](state: InputState, newValue: string) {
		state.value = newValue;
	},
	[LIST](state: InputState, newList: AddressEntry[]) {
		state.autocompleteList = newList.slice(0);
	}
};

const actions = {
	updateValue({ commit }, newValue: string) {
		commit(VALUE, newValue);
	},
	updateList({ commit }, newList: AddressEntry[]) {
		commit(LIST, newList);
	},
	clearList({ commit }) {
		commit(LIST, []);
	}
};

export default {
	namespaced: true,
	state,
	getters,
	mutations,
	actions
};
