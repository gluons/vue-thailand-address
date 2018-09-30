import Vue, { PluginFunction, PluginObject } from 'vue';

import DistrictInput from '@comp/DistrictInput.vue';
import ProvinceInput from '@comp/ProvinceInput.vue';
import SubDistrictInput from '@comp/SubDistrictInput.vue';
import ZipCodeInput from '@comp/ZipCodeInput.vue';

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
	SubDistrictInput,
	DistrictInput,
	ProvinceInput,
	ZipCodeInput
};

export default plugin;
