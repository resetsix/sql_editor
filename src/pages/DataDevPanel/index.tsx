import {
	MenuUnfoldOutlined,
	PlusOutlined,
	ProfileOutlined,
	RightSquareOutlined,
	SearchOutlined,
} from "@ant-design/icons";
import { Content } from "@dtinsight/molecule/esm/workbench/sidebar";
import { Button, Checkbox, Flex, Input, Row, Space, Typography } from "antd";
import { RefreshButton } from "../../components/Buttons/RefreshButton";
import { MenuDropdown } from "../../components/MenuDropdown";
import { DTTree } from "../../components/Tree";

const { Text } = Typography;

export const DataDevPanel = () => {
	return (
		<Flex vertical gap="small" style={{ margin: "10px" }}>
			<Row justify="space-between" align="middle">
				<Text>数据开发</Text>
				<Space size={0}>
					<Checkbox>我的</Checkbox>
					<Button
						type="text"
						shape="circle"
						icon={<RightSquareOutlined />}
						style={{ padding: 0 }}
					/>
				</Space>
			</Row>
			<Content>
				<Flex vertical gap="small">
					<Button type="primary" shape="round" icon={<PlusOutlined />}>
						新建任务
					</Button>
					<Flex justify="space-between">
						<Input prefix={<SearchOutlined />} placeholder="请输入搜索关键词" />
						<Button type="text" shape="circle" icon={<MenuUnfoldOutlined />} />
					</Flex>
					<Flex justify="space-between">
						<Space>
							<ProfileOutlined />
							<Text>任务开发</Text>
						</Space>
						<Space size={0}>
							<MenuDropdown />
							<RefreshButton />
						</Space>
					</Flex>
				</Flex>
				<DTTree />
			</Content>
		</Flex>
	);
};
