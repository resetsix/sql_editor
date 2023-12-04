import molecule from "@dtinsight/molecule";
import { IExtension } from "@dtinsight/molecule/esm/model";
import { IExtensionService } from "@dtinsight/molecule/esm/services";
import { QuickRunSQLAction } from "./quickRunSQLAction";

// 快捷键
export const ActionsExtension: IExtension = {
    id: 'keybinding',
    name: '快捷键',

    activate(extensionCtx: IExtensionService): void {
        molecule.extension.registerAction(QuickRunSQLAction); // 注册自定义快捷键：执行SQL 
    },

    dispose(extensionCtx: IExtensionService): void {
        throw new Error("Method not implemented.");
    }
}

