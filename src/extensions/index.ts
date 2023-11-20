import { IExtension } from "@dtinsight/molecule/esm/model";
import { DataDevExtension } from "./dataDev";
import { FunctionLibExtension } from "./functionLib";
import { InitSomethingExtension } from "./init";
import { MetaDataExtension } from "./metaData";
import { ResourceLibExtension } from "./resourceLib";
import { TaskTemplateExtension } from "./taskTemplate";
import { TemporaryQueryExtension } from "./temporaryQuery";

// 所有extendsion的入口集合
const extensions: IExtension[] = [
    // new FolderTreeExtension(),
    new DataDevExtension(),
    new TaskTemplateExtension(),
    new TemporaryQueryExtension(),
    new ResourceLibExtension(),
    new FunctionLibExtension(),
    new MetaDataExtension(),
    new InitSomethingExtension(),
]

export default extensions;