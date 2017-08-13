import AddressEntry from '@/interface/AddressEntry';
import * as filter from 'array-filter';

/**
 * Get the real keys/properties of given data item.
 * Filter the external keys/properties out.
 *
 * @param {AddressEntry} dataItem A data item.
 * @returns {string[]} Keys/Properties.
 */
function getDataItemKeys(dataItem: AddressEntry): string[] {
	return filter(Object.keys(dataItem), key => Object.prototype.hasOwnProperty.call(dataItem, key));
}

export default getDataItemKeys;
