import { promises as fsPromises } from 'fs';
import { resolve } from 'path';
import signale from 'signale';
import {
	EnumChangefreq,
	SitemapItemLoose,
	SitemapStream,
	streamToPromise
} from 'sitemap';

const { unlink, writeFile }  = fsPromises;

const sitemapItems: SitemapItemLoose[] = [
	{
		url: '/',
		changefreq: EnumChangefreq.MONTHLY,
		lastmodfile: resolve(__dirname, '../src/views/Home.vue')
	},
	{
		url: '/get-started',
		changefreq: EnumChangefreq.WEEKLY,
		lastmodfile: resolve(__dirname, '../src/views/GetStarted/Bundler.vue')
	},
	{
		url: '/get-started/browser',
		changefreq: EnumChangefreq.WEEKLY,
		lastmodfile: resolve(__dirname, '../src/views/GetStarted/Browser.vue')
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
];
const sitemap = new SitemapStream({
	hostname: 'https://vue-thailand-address.netlify.com'
});

for (const sitemapItem of sitemapItems) {
	sitemap.write(sitemapItem);
}

sitemap.end();

const sitemapPath = resolve(__dirname, '../dist/sitemap.xml');

(async () => {
	try {
		const sitemapBuffer = await streamToPromise(sitemap);

		await unlink(sitemapPath);
		await writeFile(sitemapPath, sitemapBuffer, 'utf8');

		signale.success('Sitemap created.');
	} catch (err) {
		signale.fatal(err);
	}
})();

