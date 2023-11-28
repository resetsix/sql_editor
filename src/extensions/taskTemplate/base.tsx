import { IActivityBarItem, ISidebarPane } from "@dtinsight/molecule/esm/model";
import { ID_COLLECTIONS } from "../../constant";
import { TasktemplatePanel } from "../../pages/TasktemplatePanel";

const RECOURCE_NAME = "任务模板";

const taskTemplateActivityBar: IActivityBarItem = {
	id: ID_COLLECTIONS.AC_TASKTEMPLATE,
	sortIndex: 2,
	name: RECOURCE_NAME,
	title: RECOURCE_NAME,
	icon: "book",
};

const taskTemplateSiderPanel: ISidebarPane = {
	id: taskTemplateActivityBar.id,
	title: RECOURCE_NAME,
	render: () => {
		return <TasktemplatePanel />;
	},
};

export { taskTemplateActivityBar, taskTemplateSiderPanel };
