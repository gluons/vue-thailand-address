import AddressEntry from '@/interface/AddressEntry';
import * as stringSimilarity from 'string-similarity';

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
		stringSimilarity.compareTwoStrings(query, district),
		stringSimilarity.compareTwoStrings(query, amphoe),
		stringSimilarity.compareTwoStrings(query, province),
		stringSimilarity.compareTwoStrings(query, zipcode.toString())
	];

	return Math.max(...similarities);
}

export default calculateSimilarity;
