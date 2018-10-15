export type MenuItem = {
	title: string;
	icon: {
		type: 'solid' | 'regular' | 'brands';
		name: string;
	};
};

const menuItems: Record<string, MenuItem> = {
	'home': {
		title: 'หน้าแรก',
		icon: {
			type: 'solid',
			name: 'home'
		}
	},
	'get-started': {
		title: 'เริ่มต้น',
		icon: {
			type: 'solid',
			name: 'play'
		}
	},
	'api': {
		title: 'API',
		icon: {
			type: 'solid',
			name: 'magic'
		}
	}
};

export default menuItems;
