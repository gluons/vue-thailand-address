import Vue from 'vue';
import VueThailandAddress from 'vue-thailand-address';

import App from './App.vue';

// เพิ่ม stylesheet ของ Vue Thailand Address เข้าไป
import 'vue-thailand-address/dist/vue-thailand-address.css';

// ใช้ Plugin
Vue.use(VueThailandAddress);

new Vue({
	el: '#app',
	render: h => h(App)
});
