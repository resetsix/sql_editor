import { IActivityBarItem, ISidebarPane } from "@dtinsight/molecule/esm/model";
import { TasktemplatePanel } from "../../pages/TasktemplatePanel";

const TASKTEMPALTE_ID = "taskTemplate";

const taskTemplateActivityBar: IActivityBarItem = {
	id: TASKTEMPALTE_ID,
	sortIndex: 2,
	name: "任务模板",
	title: "任务模板",
	icon: "book",
};

const taskTemplateSiderPanel: ISidebarPane = {
	id: TASKTEMPALTE_ID,
	title: "任务模板",
	render: () => {
		return <TasktemplatePanel />;
	},
};

export { TASKTEMPALTE_ID, taskTemplateActivityBar, taskTemplateSiderPanel };
