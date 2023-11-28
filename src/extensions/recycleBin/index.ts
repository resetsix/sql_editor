import molecule from "@dtinsight/molecule";
import { IExtension } from "@dtinsight/molecule/esm/model";
import { IExtensionService } from "@dtinsight/molecule/esm/services";
import { RecycleBinActivityBar, RecycleBinSiderPanel } from "./base";

// 回收站
export const RecycleBinExtension: IExtension = {
    id: 'recycle_bin',
    name: '回收站',

    activate(extensionCtx: IExtensionService): void {
        // 新增自定义组件
        molecule.activityBar.add(RecycleBinActivityBar);
        molecule.sidebar.add(RecycleBinSiderPanel);
    },

    dispose(extensionCtx: IExtensionService): void {
        molecule.sidebar.remove(RecycleBinActivityBar.id);
        molecule.activityBar.remove(RecycleBinSiderPanel.id);
    }
}

