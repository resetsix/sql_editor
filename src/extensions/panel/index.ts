import molecule from "@dtinsight/molecule";
import { IExtension } from "@dtinsight/molecule/esm/model";
import { IExtensionService } from "@dtinsight/molecule/esm/services";
import { PanelClear } from "./base";


const initOptions = () => {

    // 获取：panel 初始的 toolbox
    const currentToolbox = molecule.panel.getState().toolbox;

    molecule.panel.setState({
        // 新增：panel 的 toolbox。如清除消息
        toolbox: [PanelClear, ...currentToolbox!],
    })
}

// 输入面板
export const PanelExtension: IExtension = {
    id: 'panel_extension',
    name: '编辑器',

    activate(extensionCtx: IExtensionService): void {
        initOptions()
    },

    dispose(extensionCtx: IExtensionService): void {
        throw new Error("Method not implemented.");
    }
}

