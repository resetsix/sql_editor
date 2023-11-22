import molecule from "@dtinsight/molecule";
import { UniqueId } from "@dtinsight/molecule/esm/common/types";
import { IExtension } from "@dtinsight/molecule/esm/model";
import { IExtensionService } from "@dtinsight/molecule/esm/services";
import { MoreActivityBar, MoreSiderPanel } from "./base";

// 更多
export class MoreExtension implements IExtension {
    id: UniqueId = 'more';
    name = '更多'

    activate(extensionCtx: IExtensionService): void {
        // 新增自定义组件
        molecule.activityBar.add(MoreActivityBar);
        molecule.sidebar.add(MoreSiderPanel);
    }

    dispose(extensionCtx: IExtensionService): void {
        molecule.sidebar.remove(MoreActivityBar.id);
        molecule.activityBar.remove(MoreSiderPanel.id);
    }
}

