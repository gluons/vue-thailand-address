import chalk from 'chalk';
import cpFile from 'cp-file';
import { EOL } from 'os';
import { resolve } from 'path';

const srcPath = resolve(__dirname, '../dependencies/jquery.Thailand.js/jquery.Thailand.js/database/db.json');
const destPath = resolve(__dirname, '../src/data/db.json');

(async () => {
	try {
		await cpFile(srcPath, destPath, { overwrite: true });
		console.log(chalk.green('Sync success.'));
	} catch (err) {
		let errMsg = `Sync failed.${EOL}${EOL}`;
		errMsg += err.message ? err.message : err.toString();
		console.error(chalk.red(errMsg));
		process.exit(1);
	}
})();
