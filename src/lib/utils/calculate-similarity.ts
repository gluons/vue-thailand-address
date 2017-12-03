import * as leven from 'leven';

/**
 * Calculate similarity between query and address data.
 *
 * @param {string} query An query.
 * @param {AddressEntry} addressData Address data.
 * @returns {number} Similarity ratio.
 */
function calculateSimilarity(query: string, addressData: AddressEntry): number {
	let { district, amphoe, province, zipcode } = addressData;
	let similarities = [
		leven(query, district),
		leven(query, amphoe),
		leven(query, province),
		leven(query, zipcode.toString())
	];

	return Math.min(...similarities);
}

export default calculateSimilarity;
