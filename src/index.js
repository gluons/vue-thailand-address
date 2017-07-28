import { polyfill } from 'es6-promise';

import AddressForm from '@/components/AddressForm';

function install(Vue) {
	Vue.component('address-form', AddressForm);
}

polyfill(); // Promise polyfill

if ((typeof window !== 'undefined') && window.Vue) {
	install(window.Vue);
}

export default {
	install,
	component: AddressForm
};
