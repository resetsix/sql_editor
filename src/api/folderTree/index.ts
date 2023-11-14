import molecule from "@dtinsight/molecule";

const API_FOLDERTREE_URL = "http://localhost:3002/data";

const fetchFolderTreeData = async () => {

    return window.fetch(API_FOLDERTREE_URL)
        .then(res => res.json())
        .then((data) => molecule.folderTree.add(data))
        .catch((err) => { throw new Error(err) });
}

export {
    fetchFolderTreeData // 获取文件树数据
};
