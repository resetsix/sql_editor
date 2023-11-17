import molecule from "@dtinsight/molecule";
import { UniqueId } from "@dtinsight/molecule/esm/common/types";
import { IExtension } from "@dtinsight/molecule/esm/model";
import { IExtensionService } from "@dtinsight/molecule/esm/services";
import { DataDev_ID, dataDevActivityBar, dataDevSiderPanel } from "./base";

// 数据开发
export class DataDevExtension implements IExtension {
    id: UniqueId = DataDev_ID;
    name = DataDev_ID

    activate(extensionCtx: IExtensionService): void {
        // 新增自定义组件
        molecule.activityBar.add(dataDevActivityBar);
        molecule.sidebar.add(dataDevSiderPanel);
    }

    dispose(extensionCtx: IExtensionService): void {
        molecule.activityBar.remove(dataDevActivityBar.id);
        molecule.sidebar.remove(dataDevSiderPanel.id);
    }
}

