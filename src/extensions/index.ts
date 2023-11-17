import { IExtension } from "@dtinsight/molecule/esm/model";
import { DataDevExtension } from "./dataDev";

// 所有extendsion的入口集合
const extensions: IExtension[] = [
    // new FolderTreeExtension(),
    new DataDevExtension()
]

export default extensions;