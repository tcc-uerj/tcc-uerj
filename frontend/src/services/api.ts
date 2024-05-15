import axios from 'axios';
import { getSession } from 'next-auth/react';
import { BACKEND_BASE_URL } from '@/lib/consts';

export function getAPIClient() {
    const api = axios.create({
        baseURL: BACKEND_BASE_URL
    })

    api.interceptors.request.use(async (config) => {
        if (config.url?.includes("auth")) return config
        
        const session = await getSession();
        const token = session?.backendToken;

        if (token) {
            config.headers!['Authorization'] = "Bearer " + token
        }

        return config
    })

    return api;
}

export const api = getAPIClient();