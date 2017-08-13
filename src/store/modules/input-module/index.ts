import { ActionTree, GetterTree, Module, MutationTree } from 'vuex';

import AddressEntry from '@/interface/AddressEntry';
import { State as RootState } from '@/store/state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';
import { InputState } from './state';

export class InputModule implements Module<InputState, RootState> {
	public namespaced: boolean = true;

	public state: InputState;
	public getters = getters;
	public mutations = mutations;
	public actions = actions;

	constructor() {
		this.state = new InputState();
	}
}
