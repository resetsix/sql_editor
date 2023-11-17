import molecule from "@dtinsight/molecule";
import { UniqueId } from "@dtinsight/molecule/esm/common/types";
import { IExtension } from "@dtinsight/molecule/esm/model";
import { IExtensionService } from "@dtinsight/molecule/esm/services";
import { TASKTEMPALTE_ID, taskTemplateActivityBar, taskTemplateSiderPanel } from "./base";

// 任务模板
export class TaskTemplateExtension implements IExtension {
    id: UniqueId = TASKTEMPALTE_ID;
    name = '任务模板'

    activate(extensionCtx: IExtensionService): void {
        // 新增自定义组件
        molecule.activityBar.add(taskTemplateActivityBar);
        molecule.sidebar.add(taskTemplateSiderPanel);
    }

    dispose(extensionCtx: IExtensionService): void {
        molecule.activityBar.remove(taskTemplateActivityBar.id);
        molecule.sidebar.remove(taskTemplateSiderPanel.id);
    }
}

