import { getCookie } from '@/actions/cookies';
import { BACKEND_BASE_URL } from '@/lib/consts';
import axios from 'axios';

export function getAPIClient() {
    const api = axios.create({
        baseURL: BACKEND_BASE_URL
    })

    api.interceptors.request.use(async (config) => {
        if (config.url?.includes("auth")) return config

        const response = await fetch('/api/auth/token');

        if (!response.ok) return config;

        const token = await response.json();

        if (token) {
            config.headers!['Authorization'] = "Bearer " + token
        }

        return config
    })

    return api;
}

export const api = getAPIClient();