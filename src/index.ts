import Vue, { VueConstructor } from 'vue';

import AddressForm from '@comp/AddressForm.vue';

declare global {
	interface Window {
		Vue: typeof Vue;
	}
}

/**
 * Install as Vue plugin.
 *
 * @param {typeof Vue} vue Vue instance.
 */
function install(vue: VueConstructor<Vue>): void {
	vue.component('address-form', AddressForm);
}

if ((typeof window !== 'undefined') && window.Vue) {
	install(window.Vue);
}

export {
	AddressForm
};

export default {
	install,
	AddressForm
};
