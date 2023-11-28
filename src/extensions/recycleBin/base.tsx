import { IActivityBarItem, ISidebarPane } from "@dtinsight/molecule/esm/model";
import { ID_COLLECTIONS } from "../../constant";
import { RecycleBinPanel } from "../../pages/RecycleBinPanel";

const RECOURCE_NAME = "回收站";

const RecycleBinActivityBar: IActivityBarItem = {
	id: ID_COLLECTIONS.AC_RECYCLEBIN,
	sortIndex: 4,
	name: RECOURCE_NAME,
	title: RECOURCE_NAME,
	icon: "trash",
};

const RecycleBinSiderPanel: ISidebarPane = {
	id: RecycleBinActivityBar.id,
	title: RECOURCE_NAME,
	render: () => {
		return <RecycleBinPanel />;
	},
};

export { RecycleBinActivityBar, RecycleBinSiderPanel };
