import { VALUE, LIST } from '../mutation-types';

const state = function () {
	return {
		value: '',
		autocompleteList: []
	};
};

const getters = {
	hasAutocomplete(state) {
		return state.autocompleteList.length > 0;
	},
	autocomplete(state) {
		return state.autocompleteList;
	}
};

const mutations = {
	[VALUE](state, newValue) {
		state.value = newValue;
	},
	[LIST](state, newList) {
		state.autocompleteList = newList.slice(0);
	}
};

const actions = {
	updateValue({ commit }, newValue) {
		commit(VALUE, newValue);
	},
	updateList({ commit }, newList) {
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
