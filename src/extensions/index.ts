import { IExtension } from "@dtinsight/molecule/esm/model";
import { ComfirmExtension } from "./comfirm";
import { DataDevExtension } from "./dataDev";
import { FunctionLibExtension } from "./functionLib";
import { InitSomethingExtension } from "./init";
import { MetaDataExtension } from "./metaData";
import { MoreExtension } from "./more";
import { RecycleBinExtension } from "./recycleBin";
import { ResourceLibExtension } from "./resourceLib";
import { TaskTemplateExtension } from "./taskTemplate";
import { TemporaryQueryExtension } from "./temporaryQuery";

// 所有extendsion的入口集合
const extensions: IExtension[] = [
    // new FolderTreeExtension(),
    DataDevExtension, // 数据开发
    TaskTemplateExtension, // 任务模板
    TemporaryQueryExtension, // 临时查询
    ResourceLibExtension, // 资源库
    MoreExtension, // 更多
    FunctionLibExtension, // 函数库
    RecycleBinExtension, // 回收站
    MetaDataExtension, // 元数据
    InitSomethingExtension, // 初始化主题、语言、用户信息等
    ComfirmExtension, // 提示用户操作相关的拓展。字面量形式，所以不需要实例化
]

export default extensions;