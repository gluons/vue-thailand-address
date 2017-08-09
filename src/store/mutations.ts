import AddressEntry from '@/interface/AddressEntry';
import { MutationTree } from 'vuex';
import { DATA_SOURCE } from './mutation-types';
import { State } from './state';

export default {
	[DATA_SOURCE](state: State, newDataSource: AddressEntry[]) {
		state.dataSource = newDataSource;
	}
} as MutationTree<State>;
