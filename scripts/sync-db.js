const { resolve } = require('path');
const copyOverwrite = require('./lib/copy-overwrite');

const srcPath = resolve(__dirname, '../dependencies/jquery.Thailand.js/jquery.Thailand.js/database/db.json');
const destPath = resolve(__dirname, '../src/data/db.json');

copyOverwrite(srcPath, destPath, 'Sync database success.');
