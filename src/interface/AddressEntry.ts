/**
 * Address Entry
 *
 * @interface AddressEntry
 */
interface AddressEntry {
	/**
	 * ตำบล
	 *
	 * @type {string}
	 * @memberof AddressEntry
	 */
	district: string;
	/**
	 * อำเภอ
	 *
	 * @type {string}
	 * @memberof AddressEntry
	 */
	amphoe: string;
	/**
	 * จังหวัด
	 *
	 * @type {string}
	 * @memberof AddressEntry
	 */
	province: string;
	/**
	 * รหัสไปรษณีย์
	 *
	 * @type {number}
	 * @memberof AddressEntry
	 */
	zipcode: number;

	district_code?: any;
	amphoe_code?: any;
	province_code?: any;
}

export default AddressEntry;
