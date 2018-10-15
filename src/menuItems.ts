export type MenuItem = {
	title: string;
	icon: string
};

const menuItems: Record<string, MenuItem> = {
	'home': {
		title: 'หน้าแรก',
		icon: 'md-home'
	},
	'get-started': {
		title: 'เริ่มต้น',
		icon: 'md-play'
	}
};

export default menuItems;
