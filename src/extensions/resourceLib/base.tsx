import { IActivityBarItem, ISidebarPane } from "@dtinsight/molecule/esm/model";
import { ResourceLibPanel } from "../../pages/ResourceLibPanel";

const RESOURCELIB_ID = "resourceLib";

const ResourceLibActivityBar: IActivityBarItem = {
	id: RESOURCELIB_ID,
	sortIndex: 3,
	name: "资源库",
	title: "资源库",
	icon: "archive",
};

const ResourceLibSiderPanel: ISidebarPane = {
	id: RESOURCELIB_ID,
	title: "资源库",
	render: () => {
		return <ResourceLibPanel />;
	},
};

export { RESOURCELIB_ID, ResourceLibActivityBar, ResourceLibSiderPanel };
