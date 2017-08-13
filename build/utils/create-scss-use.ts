import * as ExtractTextPlugin from 'extract-text-webpack-plugin';
import { NewLoader, OldLoader } from 'webpack';

type Loader = string | OldLoader | NewLoader;

/**
 * Create SCSS webpack use entry.
 *
 * @param {boolean} minimize Enable minimization.
 * @param {boolean} [vue=false] Use `vue-style-loader` as fallback.
 * @returns {Loader[]}
 */
function createSCSSUse(minimize: boolean, vue = false): Loader[] {
	return ExtractTextPlugin.extract({
		fallback: vue ? 'vue-style-loader' : 'style-loader',
		use: [
			{
				loader: 'css-loader',
				options: {
					sourceMap: true,
					minimize
				}
			},
			{
				loader: 'postcss-loader',
				options: {
					sourceMap: true
				}
			},
			{
				loader: 'sass-loader',
				options: {
					sourceMap: true
				}
			}
		]
	});
}

export default createSCSSUse;
