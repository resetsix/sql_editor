import { IActivityBarItem, ISidebarPane } from "@dtinsight/molecule/esm/model";
import { ID_COLLECTIONS } from "../../constant";
import { ResourceLibPanel } from "../../pages/ResourceLibPanel";

const RECOURCE_NAME = "资源库";

const ResourceLibActivityBar: IActivityBarItem = {
	id: ID_COLLECTIONS.AC_RESOURCELIB,
	sortIndex: 3,
	name: RECOURCE_NAME,
	title: RECOURCE_NAME,
	icon: "archive",
};

const ResourceLibSiderPanel: ISidebarPane = {
	id: ResourceLibActivityBar.id,
	title: RECOURCE_NAME,
	render: () => {
		return <ResourceLibPanel />;
	},
};

export { ResourceLibActivityBar, ResourceLibSiderPanel };
