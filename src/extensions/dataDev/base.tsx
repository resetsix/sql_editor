import { IActivityBarItem, ISidebarPane } from "@dtinsight/molecule/esm/model";
import { MyDataDevPanel } from "../../pages/FolderTree";

const DataDev_ID = "dataDev";

const dataDevActivityBar: IActivityBarItem = {
	id: DataDev_ID,
	sortIndex: -1,
	name: "数据开发",
	title: "数据开发",
	icon: "files",
};

const dataDevSiderPanel: ISidebarPane = {
	id: DataDev_ID,
	title: "数据开发",
	render: () => {
		return <MyDataDevPanel />;
	},
};

export { DataDev_ID, dataDevActivityBar, dataDevSiderPanel };
