import molecule from "@dtinsight/molecule";
import { TreeNodeModel } from "@dtinsight/molecule/esm/model";

// mock-url
const API_FOLDERTREE_URL = "http://localhost:3002/data";

const fetchFolderTreeData = async () => {

    return window.fetch(API_FOLDERTREE_URL)
        .then(res => res.json())
        .then((data) => molecule.folderTree.add(new TreeNodeModel({ ...data })))
        .catch((err) => { throw new Error(err) });
}

export {
    fetchFolderTreeData // fetch folderTree data
};

