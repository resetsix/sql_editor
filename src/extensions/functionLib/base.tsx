import { IActivityBarItem, ISidebarPane } from "@dtinsight/molecule/esm/model";
import { ID_COLLECTIONS } from "../../constant";
import { FunctionLibPanel } from "../../pages/FunctionLibPanel";

const RECOURCE_NAME = "函数库";

const FunctionLibActivityBar: IActivityBarItem = {
	id: ID_COLLECTIONS.AC_FUNCTIONLIB,
	sortIndex: 4,
	name: RECOURCE_NAME,
	title: RECOURCE_NAME,
	icon: "variable-group",
};

const FunctionLibSiderPanel: ISidebarPane = {
	id: FunctionLibActivityBar.id,
	title: RECOURCE_NAME,
	render: () => {
		return <FunctionLibPanel />;
	},
};

export { FunctionLibActivityBar, FunctionLibSiderPanel };
