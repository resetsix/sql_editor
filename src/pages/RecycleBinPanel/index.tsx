import { DeleteOutlined, SearchOutlined } from "@ant-design/icons";
import { Content } from "@dtinsight/molecule/esm/workbench/sidebar";
import { Checkbox, Flex, Input, Row, Space, Typography } from "antd";
import { RefreshButton } from "../../components/Buttons/RefreshButton";

const { Text } = Typography;

export const RecycleBinPanel = () => {
	return (
		<Flex vertical gap="small" style={{ margin: "10px" }}>
			<Row justify="space-between" align="middle">
				<Text>回收站</Text>
				<Checkbox>我的</Checkbox>
			</Row>
			<Content>
				<Flex vertical gap="small">
					<Input prefix={<SearchOutlined />} placeholder="请输入搜索关键字" />
					<Flex justify="space-between">
						<Space>
							<DeleteOutlined />
							<Text>回收站</Text>
						</Space>
						<RefreshButton key="task" />
					</Flex>
				</Flex>
			</Content>
		</Flex>
	);
};
