import molecule from "@dtinsight/molecule";
import { ListenerEventContext } from "@dtinsight/molecule/esm/common/event";
import { IExtension } from "@dtinsight/molecule/esm/model";
import { IExtensionService } from "@dtinsight/molecule/esm/services";
import NiceModal from "@ebay/nice-modal-react";
import { ComfirmModal } from "../../components/modals/ComfirmModal";

export const ComfirmExtension: IExtension = {
	id: "comfirm",
	name: "comfirm",
	activate(extensionCtx: IExtensionService): void {
		// onCloseTab：当用户点击关闭 editor tab 时触发
		molecule.editor.onCloseTab(function anonymous(
			this: ListenerEventContext,
			tabId,
			groupId
		) {
			NiceModal.register("ComfirmModal", ComfirmModal);
			// 获取： editor tab 数据
			const tab = molecule.editor.getTabById(tabId, groupId!);
			// 事件：阻止关闭
			this.stopDelivery();
			// 弹窗：提示用户保存数据。此处模拟的情况是用户只要关闭 tab 就会弹窗
			NiceModal.show("ComfirmModal", { data: tab, tabId, groupId });
		});
	},
	dispose(extensionCtx: IExtensionService): void {
		throw new Error("Method not implemented.");
	},
};
