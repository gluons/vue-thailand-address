import Vue, { PluginFunction, PluginObject } from 'vue';

import AddressEntry from './types/AddressEntry';
import AddressModel from './types/AddressModel';
import Target from './types/Target';

import createAddressComponent from './components/createAddressComponent';
import DataStore, { defaultStore } from './data/DataStore';

const DistrictInput = createAddressComponent('district', 'อำเภอ/เขต');
const ProvinceInput = createAddressComponent('province', 'จังหวัด');
const SubDistrictInput = createAddressComponent('subdistrict', 'ตำบล/แขวง');
const ZipCodeInput = createAddressComponent('zipcode', 'รหัสไปรษณีย์');

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
