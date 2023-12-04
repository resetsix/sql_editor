import { Utils } from "@dtinsight/dt-utils/lib";
import { KeybindingHelper } from "@dtinsight/molecule/esm/services/keybinding";
import { Flex, Typography } from "antd";
import { useEffect, useState } from "react";

const { Text, Title } = Typography;

const commands = [
	{ id: "sidebar", label: "切换侧边栏" },
	{ id: "workbench.action.showPanel", label: "切换面板" },
	{ id: "RunSQL", label: "运行 SQL" },
	{ id: "workbench.action.selectTheme", label: "切换主题颜色" },
];

export const EditorEntry = () => {
	const [keys, setKeys] = useState<
		{ id: string; label: string; keybindings: string }[]
	>([]);

	useEffect(() => {
		setKeys(
			commands
				.map((command) => {
					const simpleKeybindings = KeybindingHelper.queryGlobalKeybinding(
						command.id
					);
					if (simpleKeybindings?.length) {
						const keybindings =
							KeybindingHelper.convertSimpleKeybindingToString(
								simpleKeybindings
							);
						return { ...command, keybindings };
					}
					return null;
				})
				.filter(Boolean) as {
				id: string;
				label: string;
				keybindings: string;
			}[]
		);
	}, []);
	return (
		<Flex vertical style={{ width: "100%" }} justify="center" align="center">
			<Flex vertical gap="small" justify="flex-start">
				<Title level={3}>Welcome to DataWeave!</Title>
				<Text type="secondary">
					DataWeave 是一款基于 Kubesphere
					的大数据产品，主要在大数据领域提供数据治理、数据开发以及数据安全等功能。
				</Text>
				<Text style={{ width: "200px" }}>
					{keys.map((key) => (
						<Flex key={key.id} style={{ marginBottom: "15px" }}>
							<Text
								type="secondary"
								style={{
									width: "40%",
									marginRight: "10px",
									textAlign: "right",
								}}
							>
								{key.label}
							</Text>
							<Text type="secondary" style={{ textAlign: "left" }}>
								{key.keybindings
									.split(Utils.isMacOs() ? "" : "+")
									.filter(Boolean)
									.map((keyCode) => (
										<code key={keyCode}>{keyCode}</code>
									))}
							</Text>
						</Flex>
					))}
				</Text>
			</Flex>
		</Flex>
	);
};
