import { IActivityBarItem, ISidebarPane } from "@dtinsight/molecule/esm/model";
import { ID_COLLECTIONS } from "../../constant";
import { MetaDataPanel } from "../../pages/MetaDataPanel";

const RECOURCE_NAME = "元数据";

const metaDataActivityBar: IActivityBarItem = {
	id: ID_COLLECTIONS.AC_METADATA,
	sortIndex: 2,
	name: RECOURCE_NAME,
	title: RECOURCE_NAME,
	icon: "database",
};

const metaDataSiderPanel: ISidebarPane = {
	id: metaDataActivityBar.id,
	title: RECOURCE_NAME,
	render: () => <MetaDataPanel />,
};

export { metaDataActivityBar, metaDataSiderPanel };
