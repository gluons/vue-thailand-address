import AddressEntry from '#/AddressEntry';
import Target from '#/Target';
import translateTarget from '@utils/translateTarget';
import highlightQuery from './highlightQuery';

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
	const key = translateTarget(currentTarget);

	if (addressComponents[key]) {
		addressComponents[key] = highlightQuery(query, `${addressComponents[key]}`);
	}

	return [
		addressComponents.district,
		addressComponents.amphoe,
		addressComponents.province,
		addressComponents.zipcode
	].join(` ${SEPARATOR} `);
}
