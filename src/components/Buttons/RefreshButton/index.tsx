import { UndoOutlined } from "@ant-design/icons";
import { Button } from "antd";

// 刷新按钮
export const RefreshButton = () => {
	return <Button type="text" shape="circle" icon={<UndoOutlined />} />;
};
