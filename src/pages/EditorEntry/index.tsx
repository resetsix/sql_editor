import { Flex, Typography } from "antd";

const { Text, Title } = Typography;

export const EditorEntry = () => {
	return (
		<Flex vertical style={{ width: "100%" }} justify="center" align="center">
			<Flex vertical gap="small" justify="flex-start">
				<Title level={3}>Welcome to DataWeave!</Title>
				<Text type="secondary">
					DataWeave 是一款基于 Kubesphere
					的大数据产品，主要在大数据领域提供数据治理、数据开发以及数据安全等功能。
				</Text>
			</Flex>
		</Flex>
	);
};
