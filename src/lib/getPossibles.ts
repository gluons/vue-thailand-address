import AddressEntry from '../types/AddressEntry';
import Target from '../types/Target';
import calculateSimilarity from '../utils/calculateSimilarity';
import translateTarget from '../utils/translateTarget';

/**
 * Get possibles that target property match search query.
 *
 * @param {ReadonlyArray<AddressEntry>} dataSource Data source.
 * @param {Target} target Target property.
 * @param {string} query Search query.
 * @returns {AddressEntry[]} Possibles.
 */
function getPossibles(dataSource: ReadonlyArray<AddressEntry>, target: Target, query: string): AddressEntry[] {
	const newDataSource = dataSource.slice(0); // Prevent mutate the original data source. Clone it!

	const key = translateTarget(target);
	const possibles: AddressEntry[] = newDataSource.filter(item => {
		if (!item[key]) {
			return false;
		}

		return `${item[key]}`.startsWith(query);
	});
	possibles.sort((a, b) => {
		let aSimilarity = calculateSimilarity(query, a);
		let bSimilarity = calculateSimilarity(query, b);

		return bSimilarity - aSimilarity;
	});

	return possibles;
}

export default getPossibles;
