import filter from 'array-filter';

import AddressEntry from '#/AddressEntry';
import Target from '#/Target';
import calculateSimilarity from '@utils/calculateSimilarity';

/**
 * Get possibles that target property match search query.
 *
 * @param {AddressEntry[]} dataSource Data source.
 * @param {Target} target Target property.
 * @param {string} query Search query.
 * @returns {AddressEntry[]} Possibles.
 */
function getPossibles(dataSource: AddressEntry[], target: Target, query: string): AddressEntry[] {
	dataSource = dataSource.slice(0); // Prevent mutate the original data source. Clone it!
	let pattern = new RegExp(`^${query}`);
	let possibles: AddressEntry[] = filter(dataSource, item => (item[target] ? pattern.test(item[target]) : false));
	possibles.sort((a, b) => {
		let aSimilarity = calculateSimilarity(query, a);
		let bSimilarity = calculateSimilarity(query, b);

		return bSimilarity - aSimilarity;
	});

	return possibles;
}

export default getPossibles;
