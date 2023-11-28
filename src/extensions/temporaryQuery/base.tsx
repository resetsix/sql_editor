import { IActivityBarItem, ISidebarPane } from "@dtinsight/molecule/esm/model";
import { ID_COLLECTIONS } from "../../constant";
import { TemporaryQueryPanel } from "../../pages/TemporaryQueryPanel";

const RECOURCE_NAME = "临时查询";

const temporaryQueryActivityBar: IActivityBarItem = {
	id: ID_COLLECTIONS.AC_TEMPORARYQUERY,
	sortIndex: 1,
	name: RECOURCE_NAME,
	title: RECOURCE_NAME,
	icon: "search",
};

const temporaryQuerySiderPanel: ISidebarPane = {
	id: temporaryQueryActivityBar.id,
	title: RECOURCE_NAME,
	render: () => {
		return <TemporaryQueryPanel />;
	},
};

export { temporaryQueryActivityBar, temporaryQuerySiderPanel };
