import { UndoOutlined } from "@ant-design/icons";
import { App, Button } from "antd";

// 刷新按钮
export const RefreshButton = ({ key }: { key: string }) => {
	const { message } = App.useApp();
	return (
		<Button
			type="text"
			shape="circle"
			icon={<UndoOutlined />}
			onClick={() =>
				message.open({
					key,
					type: "success",
					content: "刷新成功",
				})
			}
		/>
	);
};
