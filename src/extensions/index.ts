import { IExtension } from "@dtinsight/molecule/esm/model";
import { folderTreeExtension } from "./folderTree";

// 所有extendsion的入口集合
const extensions: IExtension[] = [
    new folderTreeExtension()
]

export default extensions;