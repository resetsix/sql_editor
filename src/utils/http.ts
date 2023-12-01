import qs from "qs";

interface ReqConfig extends RequestInit {
    token?: string
    data?: Record<string, any>
}

const API_SERVER_URL = "http://localhost:3002";

// 封装fetch请求
const http = async (endpoint: string, { token, data, ...config }: ReqConfig = {}) => {
    config = { ...config }
    return window.fetch(`${API_SERVER_URL}/${endpoint}`, config).then(res => res.json())
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