import * as JQL from '@/lib/JQL';
import { calculateSimilarity } from '@/lib/utils';
import dataSource from '@/data/db.json';

/*
 * Some functions are taken from jquery.Thailand.js
 * See the original file: https://github.com/earthchie/jquery.Thailand.js/blob/master/jquery.Thailand.js/src/jquery.Thailand.js
 */

/**
 * Preprocess data from JSON database.
 *
 * @param {Object} data Data from JSON database.
 * @returns Processed data.
 */
function preprocess(data) {
	let lookup = [],
		words = [],
		expanded = [],
		useLookup = false,
		t;

	if (data.lookup && data.words) {
		// compact with dictionary and lookup
		useLookup = true;
		lookup = data.lookup.split('|');
		words = data.words.split('|');
		data = data.data;
	}

	t = function (text) {
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
	data.map(function (provinces) {
		let i = 1;
		if (provinces.length === 3) { // geographic database
			i = 2;
		}

		provinces[i].map(function (amphoes) {
			amphoes[i].map(function (districts) {
				districts[i] = districts[i] instanceof Array ? districts[i] : [districts[i]];
				districts[i].map(function (zipcode) {
					let entry = {
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
 * @returns {Object[]} Processed data source.
 */
function loadDataSource() {
	return preprocess(dataSource);
}

/**
 * Get possibles that target property match search query.
 *
 * @param {Object[]} dataSource Data source.
 * @param {String} target Target property.
 * @param {String} query Search query.
 * @returns {Object[]} Possibles.
 */
function getPossibles(dataSource, target, query) {
	dataSource = dataSource.slice(0); // Prevent mutate the original data source. Clone it!
	let DB = new JQL(dataSource);
	let possibles = DB.select('*').where(target).match(`^${query}`).fetch();
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
