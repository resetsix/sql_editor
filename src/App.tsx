import molecule, { create, Workbench } from "@dtinsight/molecule";
import "@dtinsight/molecule/esm/style/mo.css";
import NiceModal from "@ebay/nice-modal-react";
import { ConfigProvider, App as MessageApp, theme } from "antd";
import { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import extensions from "./extensions";
import { useMount } from "ahooks";

const moInstance = create({
	extensions: extensions,
});

moInstance.onBeforeInit(() => {
	molecule.builtin.inactiveModule("builtInExplorerActivityItem"); // 隐藏内置的资源管理器
	molecule.builtin.inactiveModule("builtInSearchActivityItem"); // 隐藏内置的搜索
});

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false, // 关闭重新获取窗口焦点重新请求
			retry: 3, // 最大重试次数
			retryDelay: 5000, // 重试间隔时间 5s
		},
	},
});

const App = () => {
	const mode = molecule.colorTheme.getColorThemeMode(); // 获取当前主题的 light or dark 模式
	const userTheme = window.localStorage.getItem("theme"); // 获取当前主题的名称

	const [currentMode, setCurrentMode] = useState(mode); // 主题的 light or dark 模式

	// 在组件挂载时，如果 localStorage 中有主题，则设置为当前主题
	useMount(() => {
		if (userTheme) {
			molecule.colorTheme.setTheme(userTheme);
		} else {
			window.localStorage.setItem(
				"theme",
				molecule.colorTheme.getColorTheme().id
			);
		}
	});

	// 当用户切换主题时，将主题模式存储到 localStorage 中
	// prev改变前的主题，next改变后的主题，currentmode当前主题的 light or dark 模式
	molecule.colorTheme.onChange((prev, next, currentmode) => {
		setCurrentMode(currentmode);
		// 只有在主题真正改变时才更新 localStorage
		if (next !== prev) {
			window.localStorage.setItem("themeMode", currentmode); // 将当前主题的（light or mode）模式状态存储到 localStorage 中
			window.localStorage.setItem("theme", next.id); // 将当前主题的名称存储到 localStorage 中
		}
	});

	useEffect(() => {
		setCurrentMode(mode);
		molecule.colorTheme.reload(); // 重新加载主题
	}, [mode]);

	return (
		<QueryClientProvider client={queryClient}>
			<ConfigProvider
				theme={{
					algorithm:
						currentMode === "dark"
							? theme.darkAlgorithm // antd组件的暗黑主题
							: theme.defaultAlgorithm, // antd组件的默认（明亮）主题
					components: {
						Modal: {
							wireframe: true, // 对话框：开启线框风格
						},
						Tree: {
							colorBgContainer:
								molecule.colorTheme.getColorTheme().colors?.[
									"sideBar.background"
								],
						},
					},
					token: {
						fontSize: 13,
					}, // 字体大小：默认13px
				}}
			>
				<MessageApp>
					<NiceModal.Provider>
						{moInstance.render(<Workbench />)}
					</NiceModal.Provider>
				</MessageApp>
			</ConfigProvider>
		</QueryClientProvider>
	);
};
export default App;
