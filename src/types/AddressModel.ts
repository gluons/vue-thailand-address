/**
 * Address model.
 *
 * @export
 * @interface AddressModel
 */
export default interface AddressModel {
	/**
	 * อำเภอ
	 *
	 * @type {string}
	 * @memberof AddressModel
	 */
	district: string;
	/**
	 * ตำบล
	 *
	 * @type {string}
	 * @memberof AddressModel
	 */
	subdistrict: string;
	/**
	 * จังหวัด
	 *
	 * @type {string}
	 * @memberof AddressModel
	 */
	province: string;
	/**
	 * รหัสไปรษณีย์
	 *
	 * @type {(number | string)}
	 * @memberof AddressModel
	 */
	zipcode: number | string;
}
