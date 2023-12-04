import { KeyCode, KeyMod } from '@dtinsight/molecule/esm/monaco';
import { Action2 } from '@dtinsight/molecule/esm/monaco/action';
import { KeybindingWeight } from '@dtinsight/molecule/esm/monaco/common';
import { message } from 'antd';

export class QuickRunSQLAction extends Action2 {
    static readonly ID = 'RunSQL';
    static readonly LABEL = 'Execute SQL';
    static readonly DESC = 'Run SQL';

    constructor() {
        super({
            id: QuickRunSQLAction.ID,
            title: {
                value: QuickRunSQLAction.LABEL,
                original: QuickRunSQLAction.DESC,
            },
            label: QuickRunSQLAction.LABEL,
            alias: QuickRunSQLAction.DESC,
            f1: true,
            keybinding: {
                when: undefined,
                weight: KeybindingWeight.WorkbenchContrib,
                primary: KeyMod.CtrlCmd | KeyCode.Enter,
            },
        });
    }

    run() {
        message.open({
            key: `success_save`,
            type: "success",
            content: "模拟运行成功",
        })
    }
}
