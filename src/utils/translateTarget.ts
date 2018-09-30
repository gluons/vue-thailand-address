import AddressEntry from '../types/AddressEntry';
import Target from '../types/Target';

type AddressEntryKeys = Exclude<keyof AddressEntry, 'district_code' | 'amphoe_code' | 'province_code'>;

/**
 * Translate target to `AddressEntry` property name.
 *
 * @export
 * @param {Target} target Target
 * @returns {AddressEntryKeys}
 */
export default function translateTarget(target: Target): AddressEntryKeys {
	if (target === 'subdistrict') {
		return 'district';
	} else if (target === 'district') {
		return 'amphoe';
	} else {
		return target;
	}
}
