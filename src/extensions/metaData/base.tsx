import { IActivityBarItem, ISidebarPane } from "@dtinsight/molecule/esm/model";
import { MetaDataPanel } from "../../pages/MetaDataPanel";

const MetaData_ID = "metaData";

const metaDataActivityBar: IActivityBarItem = {
	id: MetaData_ID,
	sortIndex: 2,
	name: "元数据",
	title: "元数据",
	icon: "database",
};

const metaDataSiderPanel: ISidebarPane = {
	id: MetaData_ID,
	title: "元数据",
	render: () => <MetaDataPanel />,
};

export { MetaData_ID, metaDataActivityBar, metaDataSiderPanel };
