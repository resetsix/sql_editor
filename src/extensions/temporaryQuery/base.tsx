import { IActivityBarItem, ISidebarPane } from "@dtinsight/molecule/esm/model";
import { TemporaryQueryPanel } from "../../pages/TemporaryQueryPanel";

const TEMPORARYQUERY_ID = "temporaryQuery";

const temporaryQueryActivityBar: IActivityBarItem = {
	id: TEMPORARYQUERY_ID,
	sortIndex: 1,
	name: "临时查询",
	title: "临时查询",
	icon: "search",
};

const temporaryQuerySiderPanel: ISidebarPane = {
	id: TEMPORARYQUERY_ID,
	title: "临时查询",
	render: () => {
		return <TemporaryQueryPanel />;
	},
};

export {
	TEMPORARYQUERY_ID,
	temporaryQueryActivityBar,
	temporaryQuerySiderPanel,
};
