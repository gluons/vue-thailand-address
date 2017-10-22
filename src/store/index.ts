import Vue from 'vue';
import Vuex, { Store } from 'vuex';

import actions from './actions';
import mutations from './mutations';
import { State } from './state';

// Module
import { InputModule } from './modules/input-module';

// Prevent duplicate calling use when in browser.
if (!((typeof window !== 'undefined') && window.Vue)) {
	Vue.use(Vuex);
}

const debug = process.env.NODE_ENV !== 'production';

export default new Store<State>({
	state: new State(),
	mutations,
	actions,
	modules: {
		district: new InputModule(),
		amphoe: new InputModule(),
		province: new InputModule(),
		zipcode: new InputModule()
	},
	strict: debug
});
