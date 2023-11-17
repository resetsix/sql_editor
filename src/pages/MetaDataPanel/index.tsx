import { SearchOutlined } from "@ant-design/icons";
import { Content } from "@dtinsight/molecule/esm/workbench/sidebar";
import { Flex, Input, Row, Select, Typography } from "antd";
import { RefreshButton } from "../../components/Buttons/RefreshButton";

const { Text } = Typography;

export const MetaDataPanel = () => {
	return (
		<Flex vertical gap="small" style={{ margin: "10px" }}>
			<Row justify="space-between" align="middle">
				<Text>元数据</Text>
			</Row>
			<Content>
				<Flex vertical gap="small">
					<Select
						options={[
							{ label: "test", value: "test" },
							{ label: "test", value: "test" },
						]}
					></Select>
					<Flex justify="space-between">
						<Input
							prefix={<SearchOutlined />}
							placeholder="请输入库名/表名/关键词搜索"
						/>
						<RefreshButton key="data_dev" />
					</Flex>
				</Flex>
			</Content>
		</Flex>
	);
};
