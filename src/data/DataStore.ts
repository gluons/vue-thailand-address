import AddressEntry from '#/AddressEntry';
import AddressModel from '#/AddressModel';
import Target from '#/Target';
import loadDataSource from '@lib/db/loadDataSource';

type OnChangeHandler = (newValue: AddressModel) => void;

const dataSource: ReadonlyArray<AddressEntry> = loadDataSource().map<Readonly<AddressEntry>>(Object.freeze);

export default class DataStore {
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

	get dataSource(): ReadonlyArray<AddressEntry> {
		return dataSource;
	}

	private _currentValue: AddressModel;
	private _valueChangeHandlers: OnChangeHandler[];

	constructor() {
		this.resetValue();
		this._valueChangeHandlers = [];
	}
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
	resetValue() {
		this._currentValue = {
			district: '',
			subdistrict: '',
			province: '',
			zipcode: ''
		};
	}
	setValueProp(target: Target, propValue: string): void {
		this._currentValue[target] = propValue;
	}
	onValueChange(handler: OnChangeHandler) {
		if (typeof handler === 'function') {
			this._valueChangeHandlers.push(handler);
		}
	}
}

export const defaultStore = new DataStore();
