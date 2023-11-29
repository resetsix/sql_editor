import molecule from "@dtinsight/molecule";
import { IActionBarItemProps } from "@dtinsight/molecule/esm/components";

// 删除
const PanelClear: IActionBarItemProps = {
	id: "panel.delete",
	sortIndex: 3,
	title: "清除",
	icon: "trash",
	onClick(event, item) {
		molecule.panel.cleanOutput();
	},
};

export { PanelClear };
