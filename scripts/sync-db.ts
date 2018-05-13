import { copyFileSync } from 'fs';
import { resolve } from 'path';

const green = '\x1b[32m';
const reset = '\x1b[0m';

const srcPath: string = resolve(__dirname, '../dependencies/jquery.Thailand.js/jquery.Thailand.js/database/db.json');
const destPath: string = resolve(__dirname, '../src/data/db.json');

copyFileSync(srcPath, destPath);

console.log(`${green}Sync success.${reset}`);
