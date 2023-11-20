import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import { Content } from "@dtinsight/molecule/esm/workbench/sidebar";
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

const { Text } = Typography;

export const FunctionLibPanel = () => {
	return (
		<Flex vertical gap="small" style={{ margin: "10px" }}>
			<Row justify="space-between" align="middle">
				<Text>函数库</Text>
				<Space size={0}>
					<Checkbox>我的</Checkbox>
					<Button
						type="text"
						shape="circle"
						icon={<PlusOutlined />}
						style={{ padding: 0 }}
					/>
				</Space>
			</Row>
			<Content>
				<Flex vertical gap="small">
					<Select
						defaultValue="default"
						options={[{ label: "default", value: "default" }]}
					/>
					<Input prefix={<SearchOutlined />} placeholder="请输入搜索关键词" />
				</Flex>
			</Content>
		</Flex>
	);
};
