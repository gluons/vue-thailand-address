import database from '@/data/db.json';
import AddressEntry from '@/interface/AddressEntry';
import * as filter from 'array-filter';
import { calculateSimilarity } from './utils';

/**
 * Preprocess data from JSON database.
 *
 * @param {Object} data Data from JSON database.
 * @returns Processed data.
 */

/*
 * Remark: This function is taken from earthchie/jquery.Thailand.js
 * See: https://github.com/earthchie/jquery.Thailand.js/blob/master/jquery.Thailand.js/src/jquery.Thailand.js
 */
function preprocess(data): AddressEntry[] {
	let lookup = [];
	let words = [];
	let expanded = [];
	let useLookup = false;
	let t;

	if (data.lookup && data.words) {
		// compact with dictionary and lookup
		useLookup = true;
		lookup = data.lookup.split('|');
		words = data.words.split('|');
		data = data.data;
	}

	t = text => {
		function repl(m) {
			let ch = m.charCodeAt(0);
			return words[ch < 97 ? ch - 65 : 26 + ch - 97];
		}
		if (!useLookup) {
			return text;
		}
		if (typeof text === 'number') {
			text = lookup[text];
		}
		return text.replace(/[A-Z]/ig, repl);
	};

	if (!data[0].length) {
		// non-compacted database
		return data;
	}
	// decompacted database in hierarchical form of:
	// [["province",[["amphur",[["district",["zip"...]]...]]...]]...]
	data.map(provinces => {
		let i = 1;
		if (provinces.length === 3) { // geographic database
			i = 2;
		}

		provinces[i].map(amphoes => {
			amphoes[i].map(districts => {
				districts[i] = districts[i] instanceof Array ? districts[i] : [districts[i]];
				districts[i].map(zipcode => {
					let entry: AddressEntry = {
						district: t(districts[0]),
						amphoe: t(amphoes[0]),
						province: t(provinces[0]),
						zipcode
					};
					if (i === 2) { // geographic database
						entry.district_code = districts[1] || false;
						entry.amphoe_code = amphoes[1] || false;
						entry.province_code = provinces[1] || false;
					}
					expanded.push(entry);
				});
			});
		});
	});
	return expanded;
}

/**
 * Load data source.
 *
 * @returns {AddressEntry[]} Processed data source.
 */
function loadDataSource(): AddressEntry[] {
	return preprocess(database);
}

/**
 * Get possibles that target property match search query.
 *
 * @param {AddressEntry[]} dataSource Data source.
 * @param {String} target Target property.
 * @param {String} query Search query.
 * @returns {AddressEntry[]} Possibles.
 */
function getPossibles(dataSource: AddressEntry[], target: string, query: string): AddressEntry[] {
	dataSource = dataSource.slice(0); // Prevent mutate the original data source. Clone it!
	let pattern = new RegExp(`^${query}`);
	let possibles: AddressEntry[] = filter(dataSource, item => (item[target] ? pattern.test(item[target]) : false));
	possibles.sort((a, b) => {
		let aSimilarity = calculateSimilarity(query, a);
		let bSimilarity = calculateSimilarity(query, b);

		return bSimilarity - aSimilarity;
	});

	return possibles;
}

export {
	preprocess,
	loadDataSource,
	getPossibles
};
