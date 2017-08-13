import AddressForm from '@/components/AddressForm.vue';
import V from 'vue';

/**
 * Install as Vue plugin.
 *
 * @param {typeof V} Vue Vue instance.
 */
function install(Vue: typeof V): void {
	Vue.component('address-form', AddressForm);
}

if ((typeof window !== 'undefined') && window.Vue) {
	install(window.Vue);
}

export default {
	install,
	component: AddressForm
};
