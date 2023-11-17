import { IActivityBarItem, ISidebarPane } from "@dtinsight/molecule/esm/model";
import { DataDevPanel } from "../../pages/DataDevPanel";

const DataDev_ID = "dataDev";

const dataDevActivityBar: IActivityBarItem = {
	id: DataDev_ID,
	sortIndex: -1,
	name: "数据开发",
	title: "数据开发",
	icon: "code",
};

const dataDevSiderPanel: ISidebarPane = {
	id: DataDev_ID,
	title: "数据开发",
	render: () => <DataDevPanel />,
};

export { DataDev_ID, dataDevActivityBar, dataDevSiderPanel };
