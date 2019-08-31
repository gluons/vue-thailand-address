import AddressEntry from '../types/AddressEntry';
import AddressModel from '../types/AddressModel';
import Target from '../types/Target';
import highlightQuery from './highlightQuery';
import translateTarget from './translateTarget';

export const SEPARATOR: string = '»';

/**
 * Convert address data to string.
 *
 * @exports
 * @param {AddressEntry} addressData Address data.
 * @param {Target} currentTarget Current input target.
 * @param {string} query A search query.
 * @returns {string} Address as string.
 */
export default function addressToString(addressData: AddressEntry, currentTarget: Target, query: string): string {
	// Clone item to `addressComponents`. Do not mutate the original item.
	const addressComponents = Object.assign({}, addressData);
	const addressModel: AddressModel = {
		subdistrict: addressComponents.district,
		district: addressComponents.amphoe,
		province: addressComponents.province,
		zipcode: `${addressComponents.zipcode}`
	};
	const key = translateTarget(currentTarget);

	if (addressComponents[key]) {
		addressModel[currentTarget] = highlightQuery(query, `${addressComponents[key]}`);
	}

	return [
		addressModel.subdistrict,
		addressModel.district,
		addressModel.province,
		addressModel.zipcode
	].join(` ${SEPARATOR} `);
}
