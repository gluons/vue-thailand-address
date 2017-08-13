import AddressEntry from '@/interface/AddressEntry';
import { ActionContext, ActionTree } from 'vuex';
import { DATA_SOURCE } from './mutation-types';
import { State } from './state';

const updateDataSource = ({ commit }: ActionContext<State, any>, newDataSource: AddressEntry[]) => {
	commit(DATA_SOURCE, newDataSource);
};
const clearAutocompleteList = ({ dispatch }: ActionContext<State, any>) => {
	dispatch('district/clearList');
	dispatch('amphoe/clearList');
	dispatch('province/clearList');
	dispatch('zipcode/clearList');
};

export default {
	updateDataSource,
	clearAutocompleteList
} as ActionTree<State, any>;
