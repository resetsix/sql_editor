import molecule from "@dtinsight/molecule";
import { IExtension } from "@dtinsight/molecule/esm/model";
import { IExtensionService } from "@dtinsight/molecule/esm/services";
import { ResourceLibActivityBar, ResourceLibSiderPanel } from "./base";

// 资源库
export const ResourceLibExtension: IExtension = {
    id: 'task_template',
    name: '资源库',

    activate(extensionCtx: IExtensionService): void {
        // 新增自定义组件
        molecule.activityBar.add(ResourceLibActivityBar);
        molecule.sidebar.add(ResourceLibSiderPanel);
    },

    dispose(extensionCtx: IExtensionService): void {
        molecule.sidebar.remove(ResourceLibActivityBar.id);
        molecule.activityBar.remove(ResourceLibSiderPanel.id);
    }
}

