import { DATA_SOURCE } from './mutation-types';

const updateDataSource = ({ commit }, newDataSource) => {
	commit(DATA_SOURCE, newDataSource);
};
const clearAutocompleteList = ({ dispatch }) => {
	dispatch('district/clearList');
	dispatch('amphoe/clearList');
	dispatch('province/clearList');
	dispatch('zipcode/clearList');
};

export default {
	updateDataSource,
	clearAutocompleteList
};
