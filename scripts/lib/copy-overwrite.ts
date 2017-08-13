import * as chalk from 'chalk';
import * as fs from 'fs-extra';

const { green } = chalk;
const { copy } = fs;

/**
 * Copy file. (Overwrite destination file)
 *
 * @param {String} src Source path.
 * @param {String} dest Destination path.
 * @param {String} successMsg Success message.
 */
function copyOverwrite(src: string, dest: string, successMsg = 'Sync success.'): void {
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

export default copyOverwrite;
