import {
	FolderOpenOutlined,
	FolderOutlined,
	PlayCircleOutlined,
} from "@ant-design/icons";
import { Tree } from "antd";
import type { DataNode, DirectoryTreeProps } from "antd/es/tree";
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
	const onSelect: DirectoryTreeProps["onSelect"] = (keys, info) => {
		console.log("Trigger Select", keys, info);
	};

	const onExpand: DirectoryTreeProps["onExpand"] = (keys, info) => {
		console.log("Trigger Expand", keys, info);
	};

	return (
		<DirectoryTree
			multiple
			onSelect={onSelect}
			onExpand={onExpand}
			treeData={treeData}
			icon={(record: any) => {
				if (record.isLeaf) {
					// TODO 在这里判断文件图标
					if (record.title.includes("1")) {
						return <SparkSQLIcon style={{ color: "#519aba" }} />;
					}
					return <PlayCircleOutlined />;
				}
				return record.expanded ? <FolderOpenOutlined /> : <FolderOutlined />;
			}}
		/>
	);
};
