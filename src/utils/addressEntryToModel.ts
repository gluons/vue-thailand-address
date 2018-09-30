import AddressEntry from '../types/AddressEntry';
import AddressModel from '../types/AddressModel';

/**
 * Convert `AddressEntry` to `AddressModel`.
 *
 * @export
 * @param {AddressEntry} entry Address entry
 * @returns {AddressModel} Address model
 */
export default function addressEntryToModel(entry: AddressEntry): AddressModel {
	const model: AddressModel = {
		district: entry.amphoe,
		subdistrict: entry.district,
		province: entry.province,
		zipcode: `${entry.zipcode}`
	};

	return model;
}
