import AddressEntry from '../../types/AddressEntry';

import database from '../../data/db.json';
import preprocess from './preprocess';

/**
 * Load data source.
 *
 * @exports
 * @returns {AddressEntry[]} Processed data source.
 */
export default function loadDataSource(): AddressEntry[] {
	return preprocess(database);
}
