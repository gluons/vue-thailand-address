import { writeFileSync } from 'fs';
import { resolve } from 'path';
import signale from 'signale';
import sm from 'sitemap';

const sitemap = sm.createSitemap({
	hostname: 'https://vue-thailand-address.netlify.com',
	urls: [
		{ url: '/', changefreq: 'monthly', lastmodrealtime: true },
		{
			url: '/get-started',
			changefreq: 'weekly',
			lastmodrealtime: true
		},
		{
			url: '/get-started/browser',
			changefreq: 'weekly',
			lastmodrealtime: true
		},
		{
			url: '/api',
			changefreq: 'monthly',
			lastmodrealtime: true
		},
		{
			url: '/api/subdistrict',
			changefreq: 'weekly',
			lastmodrealtime: true
		},
		{
			url: '/api/district',
			changefreq: 'weekly',
			lastmodrealtime: true
		},
		{
			url: '/api/province',
			changefreq: 'weekly',
			lastmodrealtime: true
		},
		{
			url: '/api/zipcode',
			changefreq: 'weekly',
			lastmodrealtime: true
		},
		{
			url: '/api/address-model',
			changefreq: 'weekly',
			lastmodrealtime: true
		},
		{
			url: '/api/datastore',
			changefreq: 'weekly',
			lastmodrealtime: true
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
