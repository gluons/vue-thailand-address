import { DATA_SOURCE } from './mutation-types';

export const updateDataSource = ({ commit }, newDataSource) => {
	commit(DATA_SOURCE, newDataSource);
};
export const clearAutocompleteList = ({ dispatch }) => {
	dispatch('district/clearList');
	dispatch('amphoe/clearList');
	dispatch('province/clearList');
	dispatch('zipcode/clearList');
};
