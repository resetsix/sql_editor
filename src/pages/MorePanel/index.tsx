import { SearchOutlined } from "@ant-design/icons";
import {
	Button,
	Checkbox,
	Flex,
	Input,
	Row,
	Select,
	Space,
	Typography,
} from "antd";
import { useState } from "react";
import { MenuDrawer } from "../../components/Drawer";

const { Text } = Typography;

export const MorePanel = () => {
	const [open, setOpen] = useState(false);

	const onClose = () => {
		setOpen(false);
	};

	const showDrawer = () => {
		setOpen(true);
	};

	return (
		<>
			<Flex vertical gap="small" style={{ margin: "10px" }}>
				<Row justify="space-between" align="middle">
					<Text>更多</Text>
				</Row>
				<Flex vertical gap="small">
					<Button type="primary" shape="round" onClick={showDrawer}>
						全部菜单
					</Button>
					<Input placeholder="输入搜索数据表" prefix={<SearchOutlined />} />
					选择地区
					<Select
						defaultValue="华东2（上海）"
						options={[
							{ label: "华东2（上海）", value: "华东2（上海）" },
							{ label: "华北2（北京）", value: "华北2（北京）" },
							{ label: "华南1（广州）", value: "华南1（广州）" },
						]}
					/>
					选择项目
					<Select
						defaultValue="data"
						options={[
							{ label: "data", value: "data", title: "data" },
							{ label: "kissycn", value: "kissycn" },
							{ label: "kubesphere", value: "kubesphere" },
						]}
						dropdownRender={(menu) => (
							<Flex vertical>
								<Flex justify="space-between">
									<Space size={2}>
										<Checkbox>已收藏</Checkbox>
										<Checkbox>我加入</Checkbox>
									</Space>
									<Button size="small" type="primary">
										新建/管理
									</Button>
								</Flex>
								{menu}
							</Flex>
						)}
					/>
				</Flex>
			</Flex>
			<MenuDrawer open={open} onClose={onClose} />
		</>
	);
};
