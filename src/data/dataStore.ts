import Vue from 'vue';

import AddressEntry from '#/AddressEntry';
import AddressModel from '#/AddressModel';
import loadDataSource from '@lib/db/loadDataSource';

export const Bus = new Vue();
export const dataSource: AddressEntry[] = loadDataSource();

const dataStore: { currentValue: AddressModel } = {
	currentValue: {
		district: null,
		subdistrict: null,
		province: null,
		zipcode: null
	}
};

function validateValue(value: AddressModel): boolean {
	return (
		(typeof value === 'object')
		&&
		Object.prototype.hasOwnProperty.call(value, 'district')
		&&
		Object.prototype.hasOwnProperty.call(value, 'subdistrict')
		&&
		Object.prototype.hasOwnProperty.call(value, 'province')
		&&
		Object.prototype.hasOwnProperty.call(value, 'zipcode')
	);
}

export function getValue(): AddressModel {
	return dataStore.currentValue;
}

export function setValue(newValue: AddressModel): void {
	if (!validateValue(newValue)) {
		throw new TypeError('Invalid address model.');
	}

	dataStore.currentValue = newValue;

	Bus.$emit('datasource-update', newValue);
}
