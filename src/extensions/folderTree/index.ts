import { UniqueId } from "@dtinsight/molecule/esm/common/types";
import { IExtension } from "@dtinsight/molecule/esm/model";
import { IExtensionService } from "@dtinsight/molecule/esm/services";
import { fetchFolderTreeData } from "../../api/folderTree";
import molecule from "@dtinsight/molecule";
import { transformToEditorTab } from "../../utils";

// 获取数据
const initData = () => {
	fetchFolderTreeData()
}

// 点击事件
const handleOnSelect = () => {
	molecule.folderTree.onSelectFile((item) => {
		const tabData = transformToEditorTab(item);
		molecule.editor.open(tabData);
	})
}

// 文件树 extension
export class folderTreeExtension implements IExtension {
	id: UniqueId = "folderTree";
	name = "folderTree";

	// 初始化操作
	activate(extensionCtx: IExtensionService): void {
		initData()
		handleOnSelect()
	}

	// 卸载组件时回收事件
	dispose(extensionCtx: IExtensionService): void {
		throw new Error("Method not implemented.");
	}
}

