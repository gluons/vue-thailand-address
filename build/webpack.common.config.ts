import * as webpack from 'webpack';
import * as merge from 'webpack-merge';

import baseConfig from './webpack.esm.config';

const config: webpack.Configuration = merge(baseConfig, {
	output: {
		filename: '[name].common.js',
		libraryExport: 'default'
	}
});

export default config;
