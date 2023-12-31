import {
	OrderedListOutlined,
	PlusOutlined,
	SearchOutlined,
} from "@ant-design/icons";
import { Content } from "@dtinsight/molecule/esm/workbench/sidebar";
import { Checkbox, Flex, Input, Row, Select, Space, Typography } from "antd";
import { RefreshButton } from "../../components/Buttons/RefreshButton";
import { MenuDropdown } from "../../components/MenuDropdown";

const { Text } = Typography;

export const ResourceLibPanel = () => {
	return (
		<Flex vertical gap="small" style={{ margin: "10px" }}>
			<Row justify="space-between" align="middle">
				<Text>资源库</Text>
				<Space size={0}>
					<Checkbox>我的</Checkbox>
					<PlusOutlined />
				</Space>
			</Row>
			<Content>
				<Flex vertical gap="small">
					<Select
						defaultValue="default"
						options={[{ label: "default", value: "default" }]}
					/>
					<Input prefix={<SearchOutlined />} placeholder="资源名称/责任人" />
					<Flex justify="space-between">
						<Space>
							<OrderedListOutlined />
							<Text>资源列表</Text>
						</Space>
						<Space size={0}>
							<MenuDropdown />
							<RefreshButton catchKey="resource_lib" />
						</Space>
					</Flex>
				</Flex>
			</Content>
		</Flex>
	);
};
