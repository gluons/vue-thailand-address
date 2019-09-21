<template lang="pug">
#demo
	.container
		b-button(
			type='is-success'
			icon-left='plus'
			@click='add'
		) เพิ่ม
	.container(
		v-for='(address, index) in addresses'
		:key='index'
	): .card: .card-content
		nav.level
			.level-left
			.level-right: .level-item
				b-button(
					type='is-danger'
					icon-left='trash'
					@click='remove(index)'
				) ลบ
		.columns
			.column
				addressinput-subdistrict(
					:store='address.store'
					v-model='address.model.subdistrict'
				)
			.column
				addressinput-district(
					:store='address.store'
					v-model='address.model.district'
				)
		.columns
			.column
				addressinput-province(
					:store='address.store'
					v-model='address.model.province'
				)
			.column
				addressinput-zipcode(
					:store='address.store'
					v-model='address.model.zipcode'
				)
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { AddressModel, DataStore } from 'vue-thailand-address';

type AddressData = {
	store: DataStore;
	model: AddressModel;
};

const createEmptyAddress = (): AddressModel =>
	({
		subdistrict: '',
		district: '',
		province: '',
		zipcode: ''
	} as AddressModel);

@Component({
	name: 'Demo'
})
export default class Demo extends Vue {
	addresses: AddressData[] = [
		{
			store: new DataStore(),
			model: createEmptyAddress()
		}
	];

	add() {
		this.addresses.push({
			store: new DataStore(),
			model: createEmptyAddress()
		});
	}
	remove(index: number) {
		this.addresses.splice(index, 1);
	}
}
</script>

<style lang="scss">
#demo {
	.container {
		margin-top: 1.5rem;
	}
}
</style>
