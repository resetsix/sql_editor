import { IActivityBarItem, ISidebarPane } from "@dtinsight/molecule/esm/model";
import { MorePanel } from "../../pages/MorePanel";

const More_ID = "more";

const MoreActivityBar: IActivityBarItem = {
	id: More_ID,
	sortIndex: 6,
	name: "更多",
	title: "更多",
	icon: "ellipsis",
};

const MoreSiderPanel: ISidebarPane = {
	id: More_ID,
	title: "更多",
	render: () => <MorePanel />,
};

export { More_ID, MoreActivityBar, MoreSiderPanel };
