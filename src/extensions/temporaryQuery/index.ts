import molecule from "@dtinsight/molecule";
import { UniqueId } from "@dtinsight/molecule/esm/common/types";
import { IExtension } from "@dtinsight/molecule/esm/model";
import { IExtensionService } from "@dtinsight/molecule/esm/services";
import { temporaryQueryActivityBar, temporaryQuerySiderPanel } from "./base";

// 临时查询
export class TemporaryQueryExtension implements IExtension {
    id: UniqueId = 'temporary_query';
    name = '临时查询'

    activate(extensionCtx: IExtensionService): void {
        // 新增自定义组件
        molecule.activityBar.add(temporaryQueryActivityBar);
        molecule.sidebar.add(temporaryQuerySiderPanel);
    }

    dispose(extensionCtx: IExtensionService): void {
        molecule.sidebar.remove(temporaryQuerySiderPanel.id);
        molecule.activityBar.remove(temporaryQueryActivityBar.id);
    }
}

