import { resolve } from 'path';
import copyOverwrite from './lib/copy-overwrite';

const srcPath: string = resolve(__dirname, '../dependencies/jquery.Thailand.js/jquery.Thailand.js/database/db.json');
const destPath: string = resolve(__dirname, '../src/data/db.json');

copyOverwrite(srcPath, destPath, 'Sync database success.');
