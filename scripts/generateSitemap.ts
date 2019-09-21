import { writeFileSync } from 'fs';
import { resolve } from 'path';
import signale from 'signale';
import { createSitemap, EnumChangefreq } from 'sitemap';

const sitemap = createSitemap({
	hostname: 'https://vue-thailand-address.netlify.com',
	urls: [
		{
			url: '/',
			changefreq: EnumChangefreq.MONTHLY,
			lastmodfile: resolve(__dirname, '../src/views/Home.vue')
		},
		{
			url: '/get-started',
			changefreq: EnumChangefreq.WEEKLY,
			lastmodfile: resolve(
				__dirname,
				'../src/views/GetStarted/Bundler.vue'
			)
		},
		{
			url: '/get-started/browser',
			changefreq: EnumChangefreq.WEEKLY,
			lastmodfile: resolve(
				__dirname,
				'../src/views/GetStarted/Browser.vue'
			)
		},
		{
			url: '/api',
			changefreq: EnumChangefreq.MONTHLY,
			lastmodfile: resolve(__dirname, '../src/views/API/Index.vue')
		},
		{
			url: '/api/subdistrict',
			changefreq: EnumChangefreq.WEEKLY,
			lastmodfile: resolve(__dirname, '../src/views/API/Subdistrict.vue')
		},
		{
			url: '/api/district',
			changefreq: EnumChangefreq.WEEKLY,
			lastmodfile: resolve(__dirname, '../src/views/API/District.vue')
		},
		{
			url: '/api/province',
			changefreq: EnumChangefreq.WEEKLY,
			lastmodfile: resolve(__dirname, '../src/views/API/Province.vue')
		},
		{
			url: '/api/zipcode',
			changefreq: EnumChangefreq.WEEKLY,
			lastmodfile: resolve(__dirname, '../src/views/API/Zipcode.vue')
		},
		{
			url: '/api/address-model',
			changefreq: EnumChangefreq.WEEKLY,
			lastmodfile: resolve(__dirname, '../src/views/API/AddressModel.vue')
		},
		{
			url: '/api/datastore',
			changefreq: EnumChangefreq.WEEKLY,
			lastmodfile: resolve(__dirname, '../src/views/API/DataStore.vue')
		}
	]
});

const sitemapPath = resolve(__dirname, '../dist/sitemap.xml');
const sitemapStr = sitemap.toString();

try {
	writeFileSync(sitemapPath, sitemapStr, 'utf8');
	signale.success('Sitemap created.');
} catch (err) {
	signale.fatal(err);
}
