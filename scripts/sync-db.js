const { copy } = require('fs-extra');
const { resolve } = require('path');
const { green } = require('chalk');

const srcPath = resolve(__dirname, '../dependencies/jquery.Thailand.js/jquery.Thailand.js/database/db.json');
const destPath = resolve(__dirname, '../src/data/db.json');

copy(srcPath, destPath, {
	overwrite: true,
	preserveTimestamps: true
})
	.then(() => {
		console.log(green('Sync database success.'));
	})
	.catch(err => {
		console.error(err);
	});
