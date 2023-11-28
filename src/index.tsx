import NiceModal from "@ebay/nice-modal-react";
import { ConfigProvider, App as MessageApp, theme } from "antd";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	// <React.StrictMode>
	<ConfigProvider
		theme={{
			algorithm: theme.darkAlgorithm,
			components: {
				Modal: {
					wireframe: true,
				},
			},
		}}
	>
		<NiceModal.Provider>
			<MessageApp>
				<App />
			</MessageApp>
		</NiceModal.Provider>
	</ConfigProvider>
	// </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
