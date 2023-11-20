import { IActivityBarItem, ISidebarPane } from "@dtinsight/molecule/esm/model";
import { RecycleBinPanel } from "../../pages/RecycleBinPanel";

const RECYCLEBIN_ID = "recycleBin_id";

const RecycleBinActivityBar: IActivityBarItem = {
	id: RECYCLEBIN_ID,
	sortIndex: 4,
	name: "回收站",
	title: "回收站",
	icon: "trash",
};

const RecycleBinSiderPanel: ISidebarPane = {
	id: RECYCLEBIN_ID,
	title: "回收站",
	render: () => {
		return <RecycleBinPanel />;
	},
};

export { RECYCLEBIN_ID, RecycleBinActivityBar, RecycleBinSiderPanel };
