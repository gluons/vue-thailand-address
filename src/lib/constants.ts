/**
 * Delay time before close autocomplete.
 *
 * (This prevent autocomplete DOM get detroyed before access data.)
 */
export const AUTOCOMPLETE_CLOSE_DELAY = 250;

/**
 * Allowed attributes that can be passed to internal input.
 */
export const ALLOWED_ATTRS = [
	'name',
	'autofocus',
	'placeholder',
	'disabled',
	'readonly',
	'required',
	'tabindex'
];
