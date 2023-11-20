import { IActivityBarItem, ISidebarPane } from "@dtinsight/molecule/esm/model";
import { FunctionLibPanel } from "../../pages/FunctionLibPanel";

const FUNCTIONLIB_ID = "functionLib_ID";

const FunctionLibActivityBar: IActivityBarItem = {
	id: FUNCTIONLIB_ID,
	sortIndex: 4,
	name: "函数库",
	title: "函数库",
	icon: "variable-group",
};

const FunctionLibSiderPanel: ISidebarPane = {
	id: FUNCTIONLIB_ID,
	title: "函数库",
	render: () => {
		return <FunctionLibPanel />;
	},
};

export { FUNCTIONLIB_ID, FunctionLibActivityBar, FunctionLibSiderPanel };
