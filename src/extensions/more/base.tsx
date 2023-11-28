import { IActivityBarItem, ISidebarPane } from "@dtinsight/molecule/esm/model";
import { ID_COLLECTIONS } from "../../constant";
import { MorePanel } from "../../pages/MorePanel";

const RECOURCE_NAME = "更多";

// 其他配置
const MoreActivityBar: IActivityBarItem = {
	id: ID_COLLECTIONS.AC_MORE,
	sortIndex: 6,
	name: RECOURCE_NAME,
	title: RECOURCE_NAME,
	icon: "ellipsis",
};

const MoreSiderPanel: ISidebarPane = {
	id: MoreActivityBar.id,
	title: RECOURCE_NAME,
	render: () => <MorePanel />,
};

export { MoreActivityBar, MoreSiderPanel };
