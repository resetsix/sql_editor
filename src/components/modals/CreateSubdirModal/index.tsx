import NiceModal, { useModal } from "@ebay/nice-modal-react";
import { Form, Input, Modal, Typography } from "antd";
import { useForm } from "antd/es/form/Form";

const { Item } = Form;
const { Text } = Typography;

export const CreateSubdirModal = NiceModal.create(({ data }: any) => {
	const [form] = useForm();
	const modal = useModal();
	return (
		<Modal
			centered
			destroyOnClose
			width="40%"
			title="重命名"
			maskClosable={false}
			open={modal.visible}
			onOk={modal.remove}
			onCancel={modal.remove}
		>
			<Form
				form={form}
				colon={false}
				labelCol={{ span: 6 }}
				wrapperCol={{ span: 18 }}
			>
				<Item required label="当前任务名">
					<Input placeholder="请输入模板名称" />
				</Item>
				<Item label="当前目录">
					<Text>路径</Text>
				</Item>
			</Form>
		</Modal>
	);
});
