import Vue from 'vue';
import Vuex from 'vuex';

import actions from './actions';
import mutations from './mutations';
import state from './state';

// Module
import inputModule from './modules/input-module';

// Prevent duplicate calling use when in browser.
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
