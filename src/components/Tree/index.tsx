import {
	FolderOpenOutlined,
	FolderOutlined,
	PlayCircleOutlined,
} from "@ant-design/icons";
import molecule from "@dtinsight/molecule";
import NiceModal from "@ebay/nice-modal-react";
import { useMount } from "ahooks";
import { Dropdown, Flex, MenuProps, Tree, theme } from "antd";
import { useFolderData } from "../../hook/useFolderTree";
import { useStore } from "../../stores/useStore";
import { transformToEditorTab } from "../../utils";
import { RenameModal } from "../modals/RenameModal";

const { DirectoryTree } = Tree;

export const DTTree = () => {
	const {
		token: { colorBgLayout, colorTextTertiary },
	} = theme.useToken();

	const { selectedTreeData, setSelectedTreeData } = useStore();
	// 获取数据
	const { data, isFetching } = useFolderData();

	useMount(() => NiceModal.register("RenameModal", RenameModal));

	const items: MenuProps["items"] =
		selectedTreeData.fileType !== "File"
			? [
					{
						label: "新建任务",
						key: "create_folder_task",
					},
					{
						label: "新建子目录",
						key: "create_folder_subfolder",
					},
					{
						label: "移动",
						key: "move_folder",
					},
					{
						label: "重命名",
						key: "rename_folder",
						onClick: () =>
							NiceModal.show("RenameModal", { data: selectedTreeData }),
					},
					{
						label: "删除",
						key: "delete_folder",
					},
					{
						label: "刷新",
						key: "refresh_folder",
					},
			  ]
			: [
					{
						label: "重命名",
						key: "rename_file",
						onClick: () =>
							NiceModal.show("RenameModal", { data: selectedTreeData }),
					},
					{
						label: "删除",
						key: "delete-file",
					},
					{
						label: "复制",
						key: "copy_file",
					},
					{
						label: "移动",
						key: "move_file",
					},
					{
						label: "操作日志",
						key: "operation_log",
					},
			  ];

	// 点击事件
	const handleOnSelect = (e: any, record: any) => {
		if (!record.children) {
			const tabData = transformToEditorTab(record);
			molecule.editor.open(tabData);
		}
	};

	return (
		<Dropdown menu={{ items }} trigger={["contextMenu"]}>
			<div
				style={{
					color: colorTextTertiary,
					background: colorBgLayout,
					height: "100vh",
					lineHeight: "100%",
				}}
			>
				{isFetching ? (
					<Flex justify="center">loading...</Flex>
				) : (
					<DirectoryTree
						multiple
						defaultExpandAll
						treeData={data}
						onClick={handleOnSelect}
						onRightClick={({ event, node }) => {
							setSelectedTreeData(node); // 设置选中的数据
						}}
						icon={(record: any) => {
							if (record.isLeaf) {
								// TODO 在这里判断文件图标
								// if (record.title.includes("1")) {
								// 	return <SparkSQLIcon style={{ color: "#519aba" }} />;
								// }
								return <PlayCircleOutlined />;
							}
							return record.expanded ? (
								<FolderOpenOutlined />
							) : (
								<FolderOutlined />
							);
						}}
					/>
				)}
			</div>
		</Dropdown>
	);
};
