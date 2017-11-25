/**
 * Address Form's `v-model` value.
 *
 * @interface AddressFormModel
 */
interface AddressFormModel {
	/**
	 * อำเภอ
	 *
	 * @type {string}
	 * @memberof AddressFormModel
	 */
	district: string;
	/**
	 * ตำบล
	 *
	 * @type {string}
	 * @memberof AddressFormModel
	 */
	subdistrict: string;
	/**
	 * จังหวัด
	 *
	 * @type {string}
	 * @memberof AddressFormModel
	 */
	province: string;
	/**
	 * รหัสไปรษณีย์
	 *
	 * @type {string}
	 * @memberof AddressFormModel
	 */
	zipcode: number;
}

export default AddressFormModel;
