import Vue from 'vue';
import Vuex from 'vuex';

import state from './state';
import mutations from './mutations';
import * as actions from './actions';

// Module
import inputModule from './modules/input-module';

if (!((typeof window !== 'undefined') && window.Vue)) {
	Vue.use(Vuex);
}

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
	state,
	mutations,
	actions,
	modules: {
		district: inputModule,
		amphoe: inputModule,
		province: inputModule,
		zipcode: inputModule
	},
	strict: debug
});
