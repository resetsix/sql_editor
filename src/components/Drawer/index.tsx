import { Drawer } from "antd";

export const MenuDrawer = () => {
	return (
		<Drawer
			destroyOnClose
			key="top"
			title="Basic Drawer"
			placement="top"
			// closable={false}
			open={true}
		>
			<p>Some contents...</p>
			<p>Some contents...</p>
			<p>Some contents...</p>
		</Drawer>
	);
};
