import FormState from '@/interface/FormState';
import { DATA_SOURCE } from './mutation-types';

export default {
	[DATA_SOURCE](state: FormState, newDataSource) {
		state.dataSource = newDataSource;
	}
};
