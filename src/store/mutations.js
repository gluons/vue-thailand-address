import { DATA_SOURCE } from './mutation-types';

export default {
	[DATA_SOURCE](state, newDataSource) {
		state.dataSource = newDataSource;
	}
};
