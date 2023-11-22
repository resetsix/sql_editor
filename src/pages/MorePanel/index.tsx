import { AppleOutlined, SearchOutlined } from "@ant-design/icons";
import { Content } from "@dtinsight/molecule/esm/workbench/sidebar";
import {
	Button,
	Checkbox,
	Col,
	Drawer,
	Flex,
	Input,
	Menu,
	MenuProps,
	Row,
	Select,
	Space,
	Typography,
} from "antd";
import { useState } from "react";

const { Text } = Typography;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
	label: React.ReactNode,
	key: React.Key,
	icon?: React.ReactNode,
	children?: MenuItem[],
	type?: "group"
): MenuItem {
	return {
		key,
		icon,
		children,
		label,
		type,
	} as MenuItem;
}

export const MorePanel = () => {
	const [open, setOpen] = useState(false);

	const showDrawer = () => {
		setOpen(true);
	};

	const onClose = () => {
		setOpen(false);
	};
	const onClick: MenuProps["onClick"] = (e) => {
		console.log("click ", e);
	};

	const items: MenuProps["items"] = [
		getItem(
			"我的收藏",
			"grp",
			null,
			[
				getItem("数据开发", "数据开发", <AppleOutlined />),
				getItem("数据地图", "数据地图", <AppleOutlined />),
				getItem("数据质量", "数据质量", <AppleOutlined />),
				getItem("数据安全", "数据安全", <AppleOutlined />),
				getItem("租户控制台", "租户控制台", <AppleOutlined />),
				getItem("SLA治理", "SLA治理", <AppleOutlined />),
				getItem("治理门户", "治理门户", <AppleOutlined />),
				getItem("数据服务", "数据服务", <AppleOutlined />),
				getItem("指标平台", "指标平台", <AppleOutlined />),
				getItem("值班管理", "值班管理", <AppleOutlined />),
			],
			"group"
		),
	];
	return (
		<Flex vertical gap="small" style={{ margin: "10px" }}>
			<Row justify="space-between" align="middle">
				<Text>更多</Text>
			</Row>
			<Content>
				<Flex vertical gap="small">
					<Button type="primary" onClick={showDrawer}>
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
			</Content>
			<Drawer
				size="large"
				title="DataWeave 全部产品"
				placement="bottom"
				onClose={onClose}
				open={open}
			>
				<Row>
					<Col span={4}>
						<Menu
							onClick={onClick}
							style={{ width: 256 }}
							mode="inline"
							items={items}
						/>
					</Col>
					<Col span={20}>
						<Flex justify="space-between">
							<Space>
								<Text>LOGO</Text>
								<Button type="link">前往租户控制台</Button>
							</Space>
							<Input style={{ width: 200 }} placeholder="输入关键词搜索" />
						</Flex>
						<Row>123</Row>
						<Row>123</Row>
					</Col>
				</Row>
			</Drawer>
		</Flex>
	);
};
