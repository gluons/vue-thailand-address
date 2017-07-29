import * as stringSimilarity from 'string-similarity';

/**
 * Calculate similarity between query and address data.
 *
 * @param {String} query An query.
 * @param {Object} addressData Address data.
 * @returns {Number} Similarity.
 */
function calculateSimilarity(query, addressData) {
	let { district, amphoe, province, zipcode } = addressData;
	let similarities = [
		stringSimilarity.compareTwoStrings(query, district),
		stringSimilarity.compareTwoStrings(query, amphoe),
		stringSimilarity.compareTwoStrings(query, province),
		stringSimilarity.compareTwoStrings(query, zipcode.toString())
	];

	return Math.max(...similarities);
}

export {
	calculateSimilarity
};
