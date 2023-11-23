import {
	FolderOpenOutlined,
	FolderOutlined,
	PlayCircleOutlined,
} from "@ant-design/icons";
import { Dropdown, MenuProps, Tree, theme } from "antd";
import type { DataNode, DirectoryTreeProps } from "antd/es/tree";
import { useState } from "react";
import { SparkSQLIcon } from "../icon";

const { DirectoryTree } = Tree;

const treeData: DataNode[] = [
	{
		title: "parent 0",
		key: "0-0",
		children: [
			{ title: "leaf 0-0", key: "0-0-0", isLeaf: true },
			{ title: "leaf 0-1", key: "0-0-1", isLeaf: true },
		],
	},
	{
		title: "parent 1",
		key: "0-1",
		children: [
			{ title: "leaf 1-0", key: "0-1-0", isLeaf: true },
			{ title: "leaf 1-1", key: "0-1-1", isLeaf: true },
		],
	},
];

export const DTTree = () => {
	const {
		token: { colorBgLayout, colorTextTertiary },
	} = theme.useToken();

	const [menuType, setMenuType] = useState("");

	const items: MenuProps["items"] =
		menuType === "folder"
			? [
					{
						label: "新建任务",
						key: "6",
					},
					{
						label: "新建子目录",
						key: "7",
					},
					{
						label: "移动",
						key: "8",
					},
					{
						label: "重命名",
						key: "9",
					},
					{
						label: "删除",
						key: "10",
					},
					{
						label: "刷新",
						key: "11",
					},
			  ]
			: [
					{
						label: "重命名",
						key: "1",
					},
					{
						label: "删除",
						key: "2",
					},
					{
						label: "复制",
						key: "3",
					},
					{
						label: "移动",
						key: "4",
					},
					{
						label: "操作日志",
						key: "5",
					},
			  ];

	const onSelect: DirectoryTreeProps["onSelect"] = (keys, info) => {
		console.log("Trigger Select", keys, info);
	};

	const onExpand: DirectoryTreeProps["onExpand"] = (keys, info) => {
		console.log("Trigger Expand", keys, info);
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
				<DirectoryTree
					multiple
					onSelect={onSelect}
					onExpand={onExpand}
					treeData={treeData}
					onRightClick={({ event, node }) => {
						if (!!node.children) {
							setMenuType("folder");
						} else {
							setMenuType("file");
						}
						console.log("node", node);
					}}
					icon={(record: any) => {
						if (record.isLeaf) {
							// TODO 在这里判断文件图标
							if (record.title.includes("1")) {
								return <SparkSQLIcon style={{ color: "#519aba" }} />;
							}
							return <PlayCircleOutlined />;
						}
						return record.expanded ? (
							<FolderOpenOutlined />
						) : (
							<FolderOutlined />
						);
					}}
				/>
			</div>
		</Dropdown>
	);
};
