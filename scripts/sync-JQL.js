const { resolve } = require('path');
const copyOverwrite = require('./lib/copy-overwrite');

const srcPath = resolve(__dirname, '../dependencies/JQL/src/index.js');
const destPath = resolve(__dirname, '../src/lib/JQL.js');

copyOverwrite(srcPath, destPath, 'Sync JQL success.');
