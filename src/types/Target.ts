import AddressEntry from './AddressEntry';

/**
 * Address property target.
 */
type Target = Exclude<keyof AddressEntry, 'district_code' | 'amphoe_code' | 'province_code'>;

export default Target;
