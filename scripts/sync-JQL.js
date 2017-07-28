const { copy } = require('fs-extra');
const { resolve } = require('path');
const { green } = require('chalk');

const srcPath = resolve(__dirname, '../dependencies/JQL/src/index.js');
const destPath = resolve(__dirname, '../src/lib/JQL.js');

copy(srcPath, destPath, {
	overwrite: true,
	preserveTimestamps: true
})
	.then(() => {
		console.log(green('Sync JQL success.'));
	})
	.catch(err => {
		console.error(err);
	});
