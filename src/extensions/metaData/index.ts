import molecule from "@dtinsight/molecule";
import { IExtension } from "@dtinsight/molecule/esm/model";
import { IExtensionService } from "@dtinsight/molecule/esm/services";
import { metaDataActivityBar, metaDataSiderPanel } from "./base";

// 元数据
export const MetaDataExtension: IExtension = {
    id: 'medaData',
    name: '元数据',

    activate(extensionCtx: IExtensionService): void {
        // 新增自定义组件
        molecule.activityBar.add(metaDataActivityBar);
        molecule.sidebar.add(metaDataSiderPanel);
    },

    dispose(extensionCtx: IExtensionService): void {
        molecule.sidebar.remove(metaDataActivityBar.id);
        molecule.activityBar.remove(metaDataSiderPanel.id);
    }
}

