import { IActivityBarItem, ISidebarPane } from "@dtinsight/molecule/esm/model";
import { ID_COLLECTIONS } from "../../constant";
import { DataDevPanel } from "../../pages/DataDevPanel";

const RECOURCE_NAME = "数据开发";

const dataDevActivityBar: IActivityBarItem = {
	id: ID_COLLECTIONS.AC_DATADEV_ID,
	sortIndex: -1,
	name: RECOURCE_NAME,
	title: RECOURCE_NAME,
	icon: "code",
};

const dataDevSiderPanel: ISidebarPane = {
	id: dataDevActivityBar.id,
	title: RECOURCE_NAME,
	render: () => <DataDevPanel />,
};

export { dataDevActivityBar, dataDevSiderPanel };
