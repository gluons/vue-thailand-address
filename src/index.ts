import AddressForm from '@/components/AddressForm.vue';
import * as V from 'vue';

function install(Vue: typeof V) {
	Vue.component('address-form', AddressForm);
}

if ((typeof window !== 'undefined') && window.Vue) {
	install(window.Vue);
}

export default {
	install,
	component: AddressForm
};
