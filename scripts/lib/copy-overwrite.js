const { copy } = require('fs-extra');
const { green } = require('chalk');

/**
 * Copy file. (Overwrite destination file)
 *
 * @param {String} src Source path.
 * @param {String} dest Destination path.
 * @param {String} successMsg Success message.
 */
function copyOverwrite(src, dest, successMsg = 'Sync success.') {
	copy(src, dest, {
		overwrite: true,
		preserveTimestamps: true
	})
		.then(() => {
			console.log(green(successMsg));
		})
		.catch(err => {
			console.error(err);
		});
}

module.exports = copyOverwrite;
