import molecule from "@dtinsight/molecule";
import { IExtension } from "@dtinsight/molecule/esm/model";
import { IExtensionService } from "@dtinsight/molecule/esm/services";
import { EDITOR_ACTION_RUNNING } from "./base";

const initUI = () => {
    const builtInEditorInitialActions = molecule.builtin.getModule('builtInEditorInitialActions');
    // 为editor添加 运行 按钮
    molecule.editor.setDefaultActions([
        { ...EDITOR_ACTION_RUNNING },
        ...builtInEditorInitialActions?.value
    ]);
}

const handleEvent = () => {
    molecule.editor.onActionsClick((menuId, event) => {
        molecule.panel.appendOutput('Start running...\n');
        molecule.panel.appendOutput('Running success!!!\n');
        molecule.panel.setActive('panel.output.title')
    })
}


// 编辑器
export const EditorExtension: IExtension = {
    id: 'editor_editor',
    name: '编辑器',

    activate(extensionCtx: IExtensionService): void {
        initUI(); // 初始化UI
        handleEvent() // 处理事件
    },

    dispose(extensionCtx: IExtensionService): void {
        throw new Error("Method not implemented.");
    }
}

