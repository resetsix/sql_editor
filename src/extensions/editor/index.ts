import molecule from "@dtinsight/molecule";
import { IExtension } from "@dtinsight/molecule/esm/model";
import { IExtensionService } from "@dtinsight/molecule/esm/services";
import { message } from "antd";
import { EDITOR_ACTION_RUNNING } from "./base";

const initActions = () => {
    const builtInEditorInitialActions = molecule.builtin.getModule('builtInEditorInitialActions');
    // 为editor添加 运行 按钮
    molecule.editor.setDefaultActions([
        { ...EDITOR_ACTION_RUNNING },
        ...builtInEditorInitialActions?.value
    ]);
}

const initContentMenu = () => {

    // 自定义 editor tab 右键菜单
    molecule.editor.setDefaultMenus([
        {
            id: 'tab_copy',
            name: '复制名称',
            onClick(e, item) {
                // 获取当前打开 tab 的名称
                const cname = molecule.editor.getState().current?.tab?.name
                navigator.clipboard.writeText(cname!)
                    .then(() => message.open({
                        key: "copy_name_success",
                        type: "success",
                        content: `名称 ${cname} 复制成功`,
                    }))
                    .catch(() => message.open({
                        key: "copy_name_error",
                        type: 'error',
                        content: `名称 ${cname} 复制失败`,
                    }))
            },
        },
        {
            id: "divider_first",
            type: 'divider', // 分割线
        },
        {
            id: 'tab_close_current',
            name: '关闭',
            keybinding: 'Ctrl+K',
            onClick(e, item) {
                const { current } = molecule.editor.getState()
                molecule.editor.closeTab(current?.tab?.id!, current?.id!)
            },
        },
        {
            id: 'tab_close_other',
            name: '关闭其他',
            keybinding: 'Ctrl+T',
            onClick(e, item) {
                const { current } = molecule.editor.getState()
                molecule.editor.closeOther(current?.tab!, current?.id!)
            },
        },
        {
            id: 'tab_close_left',
            name: '关闭左侧标签页',
            keybinding: 'Ctrl+Alt+L',
            onClick(e, item) {
                const { current } = molecule.editor.getState()
                molecule.editor.closeToLeft(current?.tab!, current?.id!)
            },
        },
        {
            id: 'tab_close_right',
            name: '关闭右侧标签页',
            keybinding: 'Ctrl+Alt+R',
            onClick(e, item) {
                const { current } = molecule.editor.getState()
                molecule.editor.closeToRight(current?.tab!, current?.id!)
            },
        },
        {
            id: 'tab_close_all',
            name: '全部关闭',
            keybinding: 'Ctrl+Alt+K',
            onClick(e, item) {
                const { current } = molecule.editor.getState()
                molecule.editor.closeAll(current?.id!)
            },
        },
    ])
}

const handleActions = () => {
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
        initActions(); // 初始化运行按钮等
        handleActions() // 处理事件
        initContentMenu() // 初始化右键菜单

    },

    dispose(extensionCtx: IExtensionService): void {
        throw new Error("Method not implemented.");
    }
}

