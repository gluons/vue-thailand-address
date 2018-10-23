import Vue, { PluginFunction, PluginObject } from 'vue';

import AddressEntry from './types/AddressEntry';
import AddressModel from './types/AddressModel';
import Target from './types/Target';

import DistrictInput from './components/DistrictInput.vue';
import ProvinceInput from './components/ProvinceInput.vue';
import SubDistrictInput from './components/SubDistrictInput.vue';
import ZipCodeInput from './components/ZipCodeInput.vue';

import DataStore, { defaultStore } from './data/DataStore';

/**
 * Install Vue Thailand Address plugin.
 *
 * @param {typeof Vue} vue Vue class.
 */
const install: PluginFunction<never> = (vue: typeof Vue): void => {
	vue.component('addressinput-subdistrict', SubDistrictInput);
	vue.component('addressinput-district', DistrictInput);
	vue.component('addressinput-province', ProvinceInput);
	vue.component('addressinput-zipcode', ZipCodeInput);
};

if ((typeof window !== 'undefined') && window.Vue) {
	install(window.Vue);
}

/**
 * Vue Thailand Address plugin.
 */
const plugin: PluginObject<never> = {
	install
};

export {
	AddressEntry,
	AddressModel,
	Target,
	SubDistrictInput,
	DistrictInput,
	ProvinceInput,
	ZipCodeInput,
	DataStore,
	defaultStore
};

export default plugin;
