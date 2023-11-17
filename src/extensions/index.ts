import { IExtension } from "@dtinsight/molecule/esm/model";
import { DataDevExtension } from "./dataDev";
import { InitSomethingExtension } from "./init";
import { TaskTemplateExtension } from "./taskTemplate";
import { MetaDataExtension } from "./metaData";

// 所有extendsion的入口集合
const extensions: IExtension[] = [
    // new FolderTreeExtension(),
    new DataDevExtension(),
    new TaskTemplateExtension(),
    new MetaDataExtension(),
    new InitSomethingExtension(),
]

export default extensions;