import { MoreOutlined } from "@ant-design/icons";
import { Button, Dropdown, MenuProps } from "antd";

const items: MenuProps["items"] = [
	{
		key: "add_task",
		label: "新建任务",
	},
	{
		key: "add_dir",
		label: "新建子目录",
	},
	{
		key: "fold_file",
		label: "收起所有文件夹",
	},
	{
		key: "refresh",
		label: "刷新",
	},
];

export const MenuDropdown = () => {
	return (
		<Dropdown menu={{ items }}>
			<Button type="text" shape="circle" icon={<MoreOutlined />}></Button>
		</Dropdown>
	);
};
