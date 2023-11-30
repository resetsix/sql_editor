import {
	FolderOpenOutlined,
	FolderOutlined,
	PlayCircleOutlined,
} from "@ant-design/icons";
import molecule from "@dtinsight/molecule";
import { Dropdown, MenuProps, Tree, theme } from "antd";
import type { DirectoryTreeProps } from "antd/es/tree";
import { useState } from "react";
import { transformFolderData, transformToEditorTab } from "../../utils";

const { DirectoryTree } = Tree;

const treeData = [
	{
		key: 0,
		title: "MySQL_Data",
		fileType: "RootFolder",
		location: "root",
		isLeaf: false,
		data: "",
		children: [
			{
				key: 1,
				title: "mysql.sql",
				name: "mysql.sql",
				location: "root/mysql.sql",
				fileType: "File",
				isLeaf: true,
				data: {
					language: "mysql",
					value: "select * from name",
				},
			},
			{
				key: 2,
				title: "flinkSQL.sql",
				name: "flinkSQL.sql",
				location: "root/flinkSQL.sql",
				fileType: "File",
				isLeaf: true,
				data: {
					language: "mysql",
					value: "select * from name",
				},
			},
			{
				key: 3,
				title: "index.html",
				name: "index.html",
				fileType: "File",
				location: "root/index.html",
				isLeaf: true,
				data: {
					language: "html",
					value: '<div id="molecule">Hello Molecule</div>',
				},
			},
			{
				key: 4,
				title: "test.json",
				name: "test.json",
				fileType: "File",
				location: "root/test.json",
				isLeaf: true,
				data: {
					language: "json",
					value: '{ "language": "json", "value": "{}" }',
				},
			},
			{
				key: 5,
				title: "Sub Folder",
				name: "Sub Folder",
				isLeaf: false,
				fileType: "Folder",
				location: "root/Sub Folder",
				children: [
					{
						key: 11,
						title: "test.js",
						name: "test.js",
						fileType: "File",
						location: "root/Sub Folder/test.js",
						isLeaf: true,
						data: {
							language: "javascript",
							value: "console.log('Hello World');",
						},
					},
					{
						key: 12,
						title: "test.css",
						name: "test.css",
						location: "root/Sub Folder/test.css",
						isLeaf: true,
						fileType: "File",
						data: {
							language: "css",
							value:
								"mo { background-color: var(--workbenchBackground); color: var(--foreground); }",
						},
					},
					{
						key: 13,
						title: "index.html",
						name: "index.html",
						location: "root/Sub Folder/index.html",
						isLeaf: true,
						fileType: "File",
						data: {
							language: "html",
							value: '<div id="molecule">Hello Molecule</div>',
						},
					},
					{
						key: 14,
						title: "test.json",
						name: "test.json",
						location: "root/Sub Folder/test.json",
						isLeaf: true,
						fileType: "File",
						data: {
							language: "json",
							value: '{ "language": "json", "value": "{}" }',
						},
					},
				],
			},
		],
	},
];

export const DTTree = () => {
	const {
		token: { colorBgLayout, colorTextTertiary },
	} = theme.useToken();

	const [menuType, setMenuType] = useState("");

	// 点击事件
	const handleOnSelect = (e: any, record: any) => {
		if (!record.children) {
			const tabData = transformToEditorTab(record);
			molecule.editor.open(tabData);
		}
	};

	const items: MenuProps["items"] =
		menuType === "folder"
			? [
					{
						label: "新建任务",
						key: "folder_新建任务",
					},
					{
						label: "新建子目录",
						key: "folder_新建子目录",
					},
					{
						label: "移动",
						key: "folder_移动",
					},
					{
						label: "重命名",
						key: "folder_重命名",
					},
					{
						label: "删除",
						key: "folder_删除",
					},
					{
						label: "刷新",
						key: "folder_刷新",
					},
			  ]
			: [
					{
						label: "重命名",
						key: "file_重命名",
					},
					{
						label: "删除",
						key: "file_删除",
					},
					{
						label: "复制",
						key: "file_复制",
					},
					{
						label: "移动",
						key: "file_移动",
					},
					{
						label: "操作日志",
						key: "file_操作日志",
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
					defaultExpandAll
					onSelect={onSelect}
					onExpand={onExpand}
					treeData={transformFolderData(treeData)}
					onClick={handleOnSelect}
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
			</div>
		</Dropdown>
	);
};
