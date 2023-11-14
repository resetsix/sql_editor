import { create, Workbench } from "@dtinsight/molecule";
import "@dtinsight/molecule/esm/style/mo.css";
import extensions from "./extensions";

const moInstance = create({
	extensions: extensions,
});

const App = () => moInstance.render(<Workbench />);

export default App;
