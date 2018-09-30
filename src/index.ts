import Vue, { PluginFunction, PluginObject } from 'vue';

import AddressEntry from '#/AddressEntry';
import AddressModel from '#/AddressModel';
import Target from '#/Target';

import DistrictInput from '@comp/DistrictInput.vue';
import ProvinceInput from '@comp/ProvinceInput.vue';
import SubDistrictInput from '@comp/SubDistrictInput.vue';
import ZipCodeInput from '@comp/ZipCodeInput.vue';

import DataStore, { defaultStore } from '@data/DataStore';

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
