import molecule, { create, Workbench } from "@dtinsight/molecule";
import "@dtinsight/molecule/esm/style/mo.css";
import extensions from "./extensions";

const moInstance = create({
	extensions: extensions,
});

moInstance.onBeforeInit(() => {
	molecule.builtin.inactiveModule("builtInExplorerActivityItem"); // 隐藏内置的资源管理器
});

const App = () => moInstance.render(<Workbench />);

export default App;
