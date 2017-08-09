/* tslint:disable: max-classes-per-file */
import AddressEntry from '@/interface/AddressEntry';
import { ActionContext, ActionTree, GetterTree, Module, MutationTree } from 'vuex';
import { LIST, VALUE } from '../mutation-types';
import { State as RootState } from '../state';

class InputState {
	public value: string = '';
	public autocompleteList: AddressEntry[] = [];
}

const getters: GetterTree<InputState, RootState> = {
	hasAutocomplete(state: InputState): boolean {
		return state.autocompleteList.length > 0;
	},
	autocomplete(state: InputState): AddressEntry[] {
		return state.autocompleteList;
	}
};

const mutations: MutationTree<InputState> = {
	[VALUE](state: InputState, newValue: string) {
		state.value = newValue;
	},
	[LIST](state: InputState, newList: AddressEntry[]) {
		state.autocompleteList = newList.slice(0);
	}
};

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

export class InputModule implements Module<InputState, RootState> {
	public namespaced: boolean = true;

	public state: InputState;
	public mutations = mutations;
	public getters = getters;
	public actions = actions;

	constructor() {
		this.state = new InputState();
	}
}
