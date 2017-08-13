import AddressEntry from '@/interface/AddressEntry';
import { MutationTree } from 'vuex';
import { DATA_SOURCE } from './mutation-types';
import { State } from './state';

const mutations: MutationTree<State> = {
	[DATA_SOURCE](state: State, newDataSource: AddressEntry[]) {
		state.dataSource = newDataSource;
	}
};

export default mutations;
