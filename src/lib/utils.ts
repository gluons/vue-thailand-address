import AddressEntry from '@/interface/AddressEntry';
import filter from 'array-filter';
import stringSimilarity from 'string-similarity';

/**
 * Calculate similarity between query and address data.
 *
 * @param {String} query An query.
 * @param {AddressEntry} addressData Address data.
 * @returns {Number} Similarity ratio.
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

/**
 * Highlight the word that match the query.
 *
 * @param {String} query A search query.
 * @param {String} text A text string.
 * @returns {String} Highlighted text.
 */
function highlightQuery(query: string, text: string): string {
	if (text.length > 0) {
		return text.replace(new RegExp(query, 'ig'), match => `<b>${match}</b>`);
	} else {
		return text;
	}
}

/**
 * Convert address data to string.
 *
 * @param {AddressEntry} addressData Address data.
 * @param {String} currentTarget Current input target.
 * @param {String} query A search query.
 * @returns {String} Address as string.
 */
function addressToString(addressData: AddressEntry, currentTarget: string, query: string): string {
	// Clone item to addressComponents. Do not mutate the original item.
	let addressComponents = Object.assign({}, addressData);
	if (addressComponents[currentTarget]) {
		addressComponents[currentTarget] = highlightQuery(query, addressComponents[currentTarget].toString());
	}

	return [
		addressComponents.district,
		addressComponents.amphoe,
		addressComponents.province,
		addressComponents.zipcode
	].join(' » ');
}

/**
 * Get the real keys/properties of given data item.
 * Filter the external keys/properties out.
 *
 * @param {AddressEntry} dataItem A data item.
 * @returns {String[]} Keys/Properties
 */
function getDataItemKeys(dataItem: AddressEntry): string[] {
	return filter(Object.keys(dataItem), key => Object.prototype.hasOwnProperty.call(dataItem, key));
}

export {
	calculateSimilarity,
	highlightQuery,
	addressToString,
	getDataItemKeys
};
