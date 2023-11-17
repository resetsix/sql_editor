import molecule from "@dtinsight/molecule";
import { UniqueId } from "@dtinsight/molecule/esm/common/types";
import { IExtension } from "@dtinsight/molecule/esm/model";
import { IExtensionService } from "@dtinsight/molecule/esm/services";
import { MetaData_ID } from "./metaData/base";

export class InitSomethingExtension implements IExtension {
    id: UniqueId = "INIT_SOMETHING_ID";
    name = "初始化操作";

    activate(extensionCtx: IExtensionService): void {
        // 初始化主题
        // molecule.colorTheme.setTheme("GitHub Plus");

        // 默认选中的 活动栏Item
        molecule.activityBar.setActive(MetaData_ID);
        molecule.sidebar.setActive(MetaData_ID);

    }

    dispose(extensionCtx: IExtensionService): void {
        throw new Error("Method not implemented.");
    }
}

