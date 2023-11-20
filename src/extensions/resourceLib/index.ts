import molecule from "@dtinsight/molecule";
import { UniqueId } from "@dtinsight/molecule/esm/common/types";
import { IExtension } from "@dtinsight/molecule/esm/model";
import { IExtensionService } from "@dtinsight/molecule/esm/services";
import { ResourceLibActivityBar, ResourceLibSiderPanel } from "./base";

// 资源库
export class ResourceLibExtension implements IExtension {
    id: UniqueId = 'task_template';
    name = '资源库'

    activate(extensionCtx: IExtensionService): void {
        // 新增自定义组件
        molecule.activityBar.add(ResourceLibActivityBar);
        molecule.sidebar.add(ResourceLibSiderPanel);
    }

    dispose(extensionCtx: IExtensionService): void {
        molecule.sidebar.remove(ResourceLibActivityBar.id);
        molecule.activityBar.remove(ResourceLibSiderPanel.id);
    }
}

