import NiceModal from "@ebay/nice-modal-react";
import { ConfigProvider, App as MessageApp, theme } from "antd";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false, // 关闭重新获取窗口焦点重新请求
			retry: 3, // 最大重试次数
			retryDelay: 5000, // 重试间隔时间 5s
		},
	},
});

root.render(
	// <React.StrictMode>
	<ConfigProvider
		theme={{
			algorithm:
				window.localStorage.getItem("theme") === "dark"
					? theme.darkAlgorithm
					: theme.defaultAlgorithm,
			components: {
				Modal: {
					wireframe: true, // 对话框：开启线框风格
				},
			},
			token: { fontSize: 13 }, // 字体大小：默认13px
		}}
	>
		<QueryClientProvider client={queryClient}>
			<NiceModal.Provider>
				<MessageApp>
					<App />
				</MessageApp>
			</NiceModal.Provider>
		</QueryClientProvider>
	</ConfigProvider>
	// </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
