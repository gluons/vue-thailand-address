export type CDNLink = {
	fileName: string | string[];
	unmin: string;
	min: string;
};
export type CDN = {
	css: CDNLink[];
	js: CDNLink | CDNLink[];
};

export const jsDelivr: CDN = {
	css: [
		{
			fileName: 'vue-thailand-address.css',
			unmin:
				'https://cdn.jsdelivr.net/npm/vue-thailand-address@3/dist/vue-thailand-address.css',
			min:
				'https://cdn.jsdelivr.net/npm/vue-thailand-address@3/dist/vue-thailand-address.min.css'
		}
	],
	js: {
		fileName: ['db.web.js', 'vue-thailand-address.web.js'],
		unmin:
			'https://cdn.jsdelivr.net/combine/npm/vue-thailand-address@3/dist/db.web.js,npm/vue-thailand-address@3/dist/vue-thailand-address.web.js',
		min:
			'https://cdn.jsdelivr.net/combine/npm/vue-thailand-address@3/dist/db.web.min.js,npm/vue-thailand-address@3'
	}
};

export const unpkg: CDN = {
	css: [
		{
			fileName: 'vue-thailand-address.css',
			unmin:
				'https://unpkg.com/vue-thailand-address@3/dist/vue-thailand-address.css',
			min:
				'https://unpkg.com/vue-thailand-address@3/dist/vue-thailand-address.min.css'
		}
	],
	js: [
		{
			fileName: 'db.web.js',
			unmin: 'https://unpkg.com/vue-thailand-address@3/dist/db.web.js',
			min: 'https://unpkg.com/vue-thailand-address@3/dist/db.web.min.js'
		},
		{
			fileName: 'vue-thailand-address.web.js',
			unmin:
				'https://unpkg.com/vue-thailand-address@3/dist/vue-thailand-address.web.js',
			min: 'https://unpkg.com/vue-thailand-address@3'
		}
	]
};
