import { create } from "zustand";

// 定义store的类型
interface StoreProps {
    treeDatas: any[]; // 树形数据
    selectedTreeData: Record<string, any>; // 选中的树形数据
    setTreeData: (data: any) => void; // 设置树形数据
    setSelectedTreeData: (data: any) => void; // 设置选中的树形数据
}

// 创建store
export const useStore = create<StoreProps>()(set => ({
    treeDatas: [], // 树形数据
    selectedTreeData: {},// 选中的树形数据
    setTreeData: (data: any) => set({ treeDatas: data }), // 设置树形数据
    setSelectedTreeData: (data: any) => set({ selectedTreeData: data }), // 设置选中的树形数据
}))