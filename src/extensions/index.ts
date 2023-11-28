import { IExtension } from "@dtinsight/molecule/esm/model";
import { DataDevExtension } from "./dataDev";
import { FunctionLibExtension } from "./functionLib";
import { InitSomethingExtension } from "./init";
import { MetaDataExtension } from "./metaData";
import { ResourceLibExtension } from "./resourceLib";
import { TaskTemplateExtension } from "./taskTemplate";
import { TemporaryQueryExtension } from "./temporaryQuery";
import { RecycleBinExtension } from "./recycleBin";
import { MoreExtension } from "./more";
import { ComfirmExtension } from "./comfirm";

// 所有extendsion的入口集合
const extensions: IExtension[] = [
    // new FolderTreeExtension(),
    new DataDevExtension(), // 数据开发
    new TaskTemplateExtension(), // 任务模板
    new TemporaryQueryExtension(), // 临时查询
    new ResourceLibExtension(), // 资源库
    new MoreExtension(), // 更多
    new FunctionLibExtension(), // 函数库
    new RecycleBinExtension(), // 回收站
    new MetaDataExtension(), // 元数据
    new InitSomethingExtension(), // 初始化主题、语言、用户信息等
    ComfirmExtension, // 提示用户操作相关的拓展。字面量形式，所以不需要实例化
]

export default extensions;