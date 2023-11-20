import { MenuUnfoldOutlined, SearchOutlined } from "@ant-design/icons";
import { Content } from "@dtinsight/molecule/esm/workbench/sidebar";
import { Button, Checkbox, Flex, Input, Row, Typography } from "antd";

const { Text } = Typography;

export const TemporaryQueryPanel = () => {
	return (
		<Flex vertical gap="small" style={{ margin: "10px" }}>
			<Row justify="space-between" align="middle">
				<Text>临时查询</Text>
				<Checkbox>我的</Checkbox>
			</Row>
			<Content>
				<Flex vertical gap="small">
					<Flex justify="space-between">
						<Input prefix={<SearchOutlined />} placeholder="请输入名称" />
						<Button type="text" shape="circle" icon={<MenuUnfoldOutlined />} />
					</Flex>
				</Flex>
			</Content>
		</Flex>
	);
};
