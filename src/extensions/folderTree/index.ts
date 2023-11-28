import molecule from "@dtinsight/molecule";
import { IExtension } from "@dtinsight/molecule/esm/model";
import { IExtensionService } from "@dtinsight/molecule/esm/services";
import { fetchFolderTreeData } from "../../api/folderTree";
import { transformToEditorTab } from "../../utils";

const init = () => {
	fetchFolderTreeData(); // 获取文件树数据
};

const handleEvenet = () => {
	// 点击事件

	molecule.folderTree.onSelectFile((item) => {
		const tabData = transformToEditorTab(item);
		molecule.editor.open(tabData);
	});
};

// 文件树 extension
export const FolderTreeExtension: IExtension = {
	id: "folderTree",
	name: "folderTree",

	// 初始化操作
	activate(extensionCtx: IExtensionService): void {
		init(); // 初始化
		handleEvenet(); // 事件处理
	},

	// 卸载组件时回收事件
	dispose(extensionCtx: IExtensionService): void {
		throw new Error("Method not implemented.");
	}
}
