import { calculateSimilarity } from '@/lib/utils';
import filter from 'array-filter';

/**
 * Get possibles that target property match search query.
 *
 * @param {AddressEntry[]} dataSource Data source.
 * @param {String} target Target property.
 * @param {String} query Search query.
 * @returns {AddressEntry[]} Possibles.
 */
function getPossibles(dataSource: AddressEntry[], target: string, query: string): AddressEntry[] {
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
