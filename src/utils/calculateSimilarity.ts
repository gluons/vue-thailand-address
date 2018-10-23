import leven from 'leven';

import AddressEntry from '../types/AddressEntry';

/**
 * Calculate similarity between query and address data.
 *
 * @param {string} query An query.
 * @param {AddressEntry} addressData Address data.
 * @returns {number} Similarity ratio.
 */
function calculateSimilarity(query: string, addressData: AddressEntry): number {
	const { district, amphoe, province, zipcode } = addressData;
	const similarities = [
		leven(query, district),
		leven(query, amphoe),
		leven(query, province),
		leven(query, `${zipcode}`)
	];

	return Math.min(...similarities);
}

export default calculateSimilarity;
