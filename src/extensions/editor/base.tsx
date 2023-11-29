import { IEditorActionsProps } from "@dtinsight/molecule/esm/model";
import { ID_COLLECTIONS } from "../../constant";

const EDITOR_ACTION_RUNNING: IEditorActionsProps = {
	id: ID_COLLECTIONS.EDITOR_RUNNING_ID,
	name: "Run",
	icon: "play",
	place: "outer",
	disabled: false,
	title: "运行",
};

export { EDITOR_ACTION_RUNNING };
