import molecule from "@dtinsight/molecule";
import { IExtension } from "@dtinsight/molecule/esm/model";
import { IExtensionService } from "@dtinsight/molecule/esm/services";
import { dataDevActivityBar, dataDevSiderPanel } from "./base";

// 数据开发
export const DataDevExtension: IExtension = {
    id: 'data_dev',
    name: '数据开发',

    activate(extensionCtx: IExtensionService): void {
        // 新增自定义组件
        molecule.activityBar.add(dataDevActivityBar);
        molecule.sidebar.add(dataDevSiderPanel);
    },

    dispose(extensionCtx: IExtensionService): void {
        molecule.sidebar.remove(dataDevSiderPanel.id);
        molecule.activityBar.remove(dataDevActivityBar.id);
    }
}

