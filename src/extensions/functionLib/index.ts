import molecule from "@dtinsight/molecule";
import { UniqueId } from "@dtinsight/molecule/esm/common/types";
import { IExtension } from "@dtinsight/molecule/esm/model";
import { IExtensionService } from "@dtinsight/molecule/esm/services";
import { FunctionLibActivityBar, FunctionLibSiderPanel } from "./base";

// 函数库
export class FunctionLibExtension implements IExtension {
    id: UniqueId = 'fucntion_lib';
    name = '函数库'

    activate(extensionCtx: IExtensionService): void {
        // 新增自定义组件
        molecule.activityBar.add(FunctionLibActivityBar);
        molecule.sidebar.add(FunctionLibSiderPanel);
    }

    dispose(extensionCtx: IExtensionService): void {
        molecule.sidebar.remove(FunctionLibSiderPanel.id);
        molecule.activityBar.remove(FunctionLibActivityBar.id);
    }
}

