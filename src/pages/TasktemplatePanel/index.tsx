import {
	MenuUnfoldOutlined,
	MoreOutlined,
	PlusOutlined,
	SearchOutlined,
	SnippetsOutlined,
	UndoOutlined,
} from "@ant-design/icons";
import { Content } from "@dtinsight/molecule/esm/workbench/sidebar";
import NiceModal from "@ebay/nice-modal-react";
import { useMount } from "ahooks";
import { Button, Checkbox, Flex, Input, Space, Typography } from "antd";
import { TaskTemplateModal } from "../../components/modals/TaskTemplateModal";

const { Text } = Typography;

export const TasktemplatePanel = () => {
	useMount(() => NiceModal.register("taskTemplateModal", TaskTemplateModal));

	return (
		<Flex vertical gap="small" style={{ margin: "10px" }}>
			<Flex justify="space-between" align="middle">
				<Text>任务模板</Text>
				<Space size={0}>
					<Checkbox>我的</Checkbox>
					<Button
						type="text"
						shape="circle"
						icon={<PlusOutlined />}
						style={{ padding: 0 }}
						onClick={() => NiceModal.show("taskTemplateModal")}
					/>
				</Space>
			</Flex>
			<Content>
				<Flex vertical gap="small">
					<Flex justify="space-between">
						<Input prefix={<SearchOutlined />} placeholder="请输入名称" />
						<Button type="text" shape="circle" icon={<MenuUnfoldOutlined />} />
					</Flex>
					<Flex justify="space-between">
						<Space>
							<SnippetsOutlined />
							<Text>任务模板</Text>
						</Space>
						<Space size={0}>
							<Button type="text" shape="circle" icon={<MoreOutlined />} />
							<Button type="text" shape="circle" icon={<UndoOutlined />} />
						</Space>
					</Flex>
				</Flex>
			</Content>
		</Flex>
	);
};
