import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { Loader } from 'webpack';

/**
 * Get CSS use entries.
 *
 * @param {boolean} minimize Minimize CSS?
 * @param {number} [importLoaders=1] `css-loader`'s `importLoaders`.
 * @param {boolean} [isDev=false] Is in development mode?
 * @returns {Loader[]}
 */
export default function getCSSUses(
	minimize: boolean,
	importLoaders: number = 1,
	isDev: boolean = false
): Loader[] {
	return [
		(isDev ? 'vue-style-loader' : MiniCssExtractPlugin.loader),
		{
			loader: 'css-loader',
			options: {
				sourceMap: true,
				importLoaders,
				minimize
			}
		},
		{
			loader: 'postcss-loader',
			options: {
				sourceMap: true
			}
		}
	];
}
