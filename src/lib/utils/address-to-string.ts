import AddressEntry from '@/interface/AddressEntry';
import highlightQuery from './highlight-query';

export const SEPARATOR: string = '»';

/**
 * Convert address data to string.
 *
 * @param {AddressEntry} addressData Address data.
 * @param {string} currentTarget Current input target.
 * @param {string} query A search query.
 * @returns {string} Address as string.
 */
function addressToString(addressData: AddressEntry, currentTarget: string, query: string): string {
	// Clone item to `addressComponents`. Do not mutate the original item.
	let addressComponents = Object.assign({}, addressData);

	if (addressComponents[currentTarget]) {
		addressComponents[currentTarget] = highlightQuery(query, addressComponents[currentTarget].toString());
	}

	return [
		addressComponents.district,
		addressComponents.amphoe,
		addressComponents.province,
		addressComponents.zipcode
	].join(` ${SEPARATOR} `);
}

export default addressToString;
