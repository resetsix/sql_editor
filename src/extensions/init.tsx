import molecule from "@dtinsight/molecule";
import { UniqueId } from "@dtinsight/molecule/esm/common/types";
import { IExtension } from "@dtinsight/molecule/esm/model";
import { IExtensionService } from "@dtinsight/molecule/esm/services";
import { Button } from "antd";
import { CONSOLE, OPERATIONS } from "../constant";
import { RESOURCELIB_ID } from "./resourceLib/base";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const initMenuBarback = () => {
	molecule.menuBar.setState({
		logo: (
			<Button type="link">Logo</Button>
			// <Image
			// 	sizes="200"
			// 	preview={false}
			// 	src="https://lf-cdn-tos.bytescm.com/obj/static/dp/dorado_fe_c/ide3/bf54d3b02688acad047f..png"
			// />
			// <AppstoreOutlined />
		),
	});
	molecule.layout.setMenuBarMode("horizontal");
	const state = molecule.menuBar.getState();
	const nextData = state.data.concat();
	nextData.splice(1, 0, {
		id: "operation",
		name: "运维中心",
		data: [...OPERATIONS],
	});
	nextData.splice(2, 0, {
		id: "console",
		name: "控制台",
		data: [...CONSOLE],
	});
	const menuRunning = nextData.findIndex((menu) => menu.id === "Run");
	if (menuRunning > -1) {
		nextData.splice(menuRunning, 1);
	}
	molecule.menuBar.setState({
		data: nextData,
	});
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const initTheme = () => {
	molecule.colorTheme.setTheme("GitHub Plus");
};

const initActive = () => {
	// 默认选中的ActivityBar选项
	molecule.activityBar.setActive(RESOURCELIB_ID);
	// 默认选中的Siderbar选项
	molecule.sidebar.setActive(RESOURCELIB_ID);
};

const initMenuBar = () => {
	// current={MySidePane.id} panes={[MySidePane]}
	// 设置水平
	molecule.layout.setMenuBarMode("horizontal");
	// 重置默认数据
	molecule.menuBar.setMenus([]);
	// TODO 菜单栏 运维中心的图标在左边，应该设置到右边。
	molecule.menuBar.setState({
		logo: <Button type="link">Logo</Button>,
		data: [
			{ id: "数据开发", name: "数据开发" },
			{ id: "任务开发", name: "任务开发" },
			{ id: "发布中心", name: "发布中心" },
			{
				id: "运维中心",
				name: "运维中心(多)",
				data: [
					{
						id: "离线任务运维",
						name: "离线任务运维",
					},
					{
						id: "实时任务运维",
						name: "实时任务运维",
					},
				],
			},
			{ id: "地区", name: "地区" },
			{ id: "项目", name: "项目" },
		],
	});
};

export class InitSomethingExtension implements IExtension {
	id: UniqueId = "INIT_SOMETHING_ID";
	name = "初始化操作";

	activate(extensionCtx: IExtensionService): void {
		initActive(); // 初始化活动栏
		initMenuBar(); // 初始化菜单栏
		// initTheme(); // 初始化主题
	}

	dispose(extensionCtx: IExtensionService): void {
		throw new Error("Method not implemented.");
	}
}
