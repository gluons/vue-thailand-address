import AddressEntry from '#/AddressEntry';
import AddressModel from '#/AddressModel';
import Target from '#/Target';
import loadDataSource from '@lib/db/loadDataSource';

/**
 * On address value change event handler.
 */
export type OnChangeHandler = (newValue: AddressModel) => void;

const dataSource: ReadonlyArray<AddressEntry> = loadDataSource().map<Readonly<AddressEntry>>(Object.freeze);

/**
 * Vue Thailand Address data store.
 *
 * @export
 * @class DataStore
 */
export default class DataStore {
	/**
	 * Validate address model value.
	 *
	 * @static
	 * @param {AddressModel} value A value
	 * @returns {boolean}
	 * @memberof DataStore
	 */
	static validateValue(value: AddressModel): boolean {
		return (
			(typeof value === 'object')
			&&
			Object.prototype.hasOwnProperty.call(value, 'district')
			&&
			Object.prototype.hasOwnProperty.call(value, 'subdistrict')
			&&
			Object.prototype.hasOwnProperty.call(value, 'province')
			&&
			Object.prototype.hasOwnProperty.call(value, 'zipcode')
		);
	}

	/**
	 * Address data source.
	 *
	 * @readonly
	 * @type {ReadonlyArray<AddressEntry>}
	 * @memberof DataStore
	 */
	get dataSource(): ReadonlyArray<AddressEntry> {
		return dataSource;
	}

	private _currentValue: AddressModel;
	private _valueChangeHandlers: OnChangeHandler[];

	/**
	 * Creates an instance of `DataStore`.
	 *
	 * @constructs
	 * @memberof DataStore
	 */
	constructor() {
		this.resetValue();
		this._valueChangeHandlers = [];
	}
	/**
	 * Current address value.
	 *
	 * @type {AddressModel}
	 * @memberof DataStore
	 */
	get value(): AddressModel {
		return this._currentValue;
	}
	set value(newValue: AddressModel) {
		if (!DataStore.validateValue(newValue)) {
			throw new TypeError('Invalid address model.');
		}

		this._currentValue = newValue;
		this._valueChangeHandlers.forEach(handler => handler(newValue));
	}
	/**
	 * Reset current address value.
	 *
	 * @memberof DataStore
	 */
	resetValue(): void {
		this._currentValue = {
			district: '',
			subdistrict: '',
			province: '',
			zipcode: ''
		};
	}
	/**
	 * Set a value into the target property of current address value.
	 *
	 * @param {Target} target Target property name
	 * @param {string} propValue A value
	 * @memberof DataStore
	 */
	setValueProp(target: Target, propValue: string): void {
		this._currentValue[target] = propValue;
	}
	/**
	 * Register handler for listening address value change event.
	 *
	 * @param {OnChangeHandler} handler A handler
	 * @memberof DataStore
	 */
	onValueChange(handler: OnChangeHandler) {
		if (typeof handler === 'function') {
			this._valueChangeHandlers.push(handler);
		}
	}
}

export const defaultStore = new DataStore();
