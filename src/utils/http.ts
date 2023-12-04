import qs from "qs";

interface ReqConfig extends RequestInit {
    token?: string
    data?: Record<string, any>
}

const API_SERVER_URL = "http://localhost:3002";

// 封装fetch请求
export const http = async (endpoint: string, { token, data, ...config }: ReqConfig = {}) => {
    config = { ...config }
    return window.fetch(`${API_SERVER_URL}/${endpoint}`, config).then(async resp => {
        const data = await resp.json();
        if (resp.ok) {
            return data;
        } else {
            return Promise.reject(data);
        }
    })
}

export const useHttp = () => {

    // 封装 GET 方法请求
    const GET = (...[endpoint, req]: Parameters<typeof http>) => {
        const cfg = {
            ...req,
            method: 'GET'
        }

        if (req) {
            endpoint += `?${qs.stringify(req.data)}`
        }
        return http(endpoint, cfg)
    }
    return { GET }
}