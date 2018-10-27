/**
 * Address model.
 *
 * (Used for store address data in Vue Thailand Address)
 *
 * @export
 * @interface AddressModel
 */
export default interface AddressModel {
	/**
	 * อำเภอ/เขต (District)
	 *
	 * @type {string}
	 * @memberof AddressModel
	 */
	district: string;
	/**
	 * ตำบล/แขวง (Sub-district)
	 *
	 * @type {string}
	 * @memberof AddressModel
	 */
	subdistrict: string;
	/**
	 * จังหวัด (Province)
	 *
	 * @type {string}
	 * @memberof AddressModel
	 */
	province: string;
	/**
	 * รหัสไปรษณีย์ (Zip Code)
	 *
	 * @type {string}
	 * @memberof AddressModel
	 */
	zipcode: string;
}
