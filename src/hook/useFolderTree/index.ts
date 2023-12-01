import { useQuery } from "react-query";
import { useHttp } from "../../utils/http";

// 封装 useFolderData hook
export const useFolderData = () => {
    const { GET } = useHttp()

    // 获取文件夹树形数据   
    return useQuery('folderTree', () => GET('data'))
}