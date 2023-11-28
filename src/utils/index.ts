import { IEditorTab, IFolderTreeNodeProps } from '@dtinsight/molecule/esm/model';
import { cloneDeepWith, isObject } from 'lodash';

export const transformToEditorTab = (item: IFolderTreeNodeProps): IEditorTab => {
    const tabData: IEditorTab = {
        ...item,
        id: item?.id?.toString() || item.key?.toString(),
        data: {
            path: item.location,
            ...(item.data || {}),
        },
        breadcrumb: item.location
            ? item.location
                .split('/')
                .map((local: string) => ({ id: local, name: local }))
            : []
    };
    return tabData;
}

export const transformFolderData = (item: any) => {

    const newData = cloneDeepWith(item, (value: { [k: string]: string }) => {
        if (isObject(value) && ('key' in value || 'title' in value)) {
            return {
                ...value,
                id: value.key,
                name: value.title,
                data: {
                    path: item.location,
                    ...(item.data || {}),
                },
                breadcrumb: item.location
                    ? item.location
                        .split('/')
                        .map((local: string) => ({ id: local, name: local }))
                    : []
            };
        }
    });

    return newData
}