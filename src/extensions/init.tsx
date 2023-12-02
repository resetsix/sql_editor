import molecule from "@dtinsight/molecule";
import { IExtension } from "@dtinsight/molecule/esm/model";
import { IExtensionService } from "@dtinsight/molecule/esm/services";
import { Button } from "antd";
import { ID_COLLECTIONS, OPERATIONS } from "../constant";
import { EditorEntry } from "../pages/EditorEntry";
import { dataDevActivityBar } from "./dataDev/base";
import { MoreActivityBar } from "./more/base";

const initTheme = () => {
	// 设置主题
	molecule.colorTheme.setTheme("One Dark Pro");
	// 将当前主题的（light or mode）模式状态存储到 localStorage 中
	window.localStorage.setItem("theme", molecule.colorTheme.getColorThemeMode());
};

const initEntry = () => {
	// 设置编辑器的入口页
	molecule.editor.setEntry(<EditorEntry />);
};

const initActive = () => {
	// 默认选中的ActivityBar选项
	molecule.activityBar.setActive(ID_COLLECTIONS.AC_DATADEV_ID);
	// 默认选中的Siderbar选项
	molecule.sidebar.setActive(dataDevActivityBar.id);
};

const initMenuBar = () => {
	// current={MySidePane.id} panes={[MySidePane]}
	// 设置水平
	molecule.layout.setMenuBarMode("horizontal");
	// 重置默认数据
	molecule.menuBar.setMenus([]);
	// TODO 菜单栏 运维中心的图标在左边，应该设置到右边。

	molecule.menuBar.render();
	molecule.menuBar.setState({
		logo: <Button type="link">Logo</Button>,
		data: [
			{ id: ID_COLLECTIONS.MENU_ALL_PROJECTS_ID, name: "全部产品" },
			{ id: ID_COLLECTIONS.MENU_DATA_DEV_ID, name: "数据开发" },
			{ id: ID_COLLECTIONS.MENU_TASK_DEV_ID, name: "任务开发" },
			{ id: ID_COLLECTIONS.MENU_PUBLISH_CENTER_ID, name: "发布中心" },
			{
				id: "operation",
				name: "运维中心(多)",
				data: [...OPERATIONS],
			},
			{ id: ID_COLLECTIONS.MENU_USER_CONFIG_ID, name: "其他配置" },
		],
	});
	molecule.menuBar.onSelect((record) => {
		switch (record) {
			case ID_COLLECTIONS.MENU_USER_CONFIG_ID:
			case ID_COLLECTIONS.MENU_ALL_PROJECTS_ID:
				molecule.activityBar.setActive(MoreActivityBar.id); // 活动栏：更多菜单选项
				molecule.sidebar.setActive(MoreActivityBar.id); // 边栏：更多菜单内容
				break;
			case ID_COLLECTIONS.MENU_DATA_DEV_ID:
			case ID_COLLECTIONS.MENU_TASK_DEV_ID:
				molecule.activityBar.setActive(dataDevActivityBar.id); // 活动栏：数据开发选项
				molecule.sidebar.setActive(dataDevActivityBar.id); // 边栏：数据开发内容
				break;
			default:
				break;
		}
	});
};

export const InitSomethingExtension: IExtension = {
	id: "INIT_SOMETHING_ID",
	name: "初始化操作",

	activate(extensionCtx: IExtensionService): void {
		initEntry(); // 初始化编辑器入口页
		initActive(); // 初始化活动栏
		initMenuBar(); // 初始化菜单栏
		initTheme(); // 初始化主题
	},

	dispose(extensionCtx: IExtensionService): void {
		throw new Error("Method not implemented.");
	},
};
