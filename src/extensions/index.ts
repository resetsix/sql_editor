import { IExtension } from "@dtinsight/molecule/esm/model";
import { DataDevExtension } from "./dataDev";
import { InitSomethingExtension } from "./init";
import { MetaDataExtension } from "./metaData";
import { TaskTemplateExtension } from "./taskTemplate";
import { TemporaryQueryExtension } from "./temporaryQuery";

// 所有extendsion的入口集合
const extensions: IExtension[] = [
    // new FolderTreeExtension(),
    new DataDevExtension(),
    new TaskTemplateExtension(),
    new TemporaryQueryExtension(),
    new MetaDataExtension(),
    new InitSomethingExtension(),
]

export default extensions;