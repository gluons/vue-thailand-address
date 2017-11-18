import database from '@/data/db.json';
import preprocess from './preprocess';

/**
 * Load data source.
 *
 * @returns {AddressEntry[]} Processed data source.
 */
function loadDataSource(): AddressEntry[] {
	return preprocess(database);
}

export default loadDataSource;
