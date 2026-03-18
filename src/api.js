import axios from 'axios';

// Automatically choose backend URL based on environment.
const isProduction = process.env.NODE_ENV === 'production';
const BASE_URL = isProduction ? 'https://api.projectsmileonmarctv.com' : 'http://localhost:5000';

const api = axios.create({
    baseURL: `${BASE_URL}/api`,
    headers: {
        'Content-Type': 'application/json'
    }
});

// Intercept requests to attach auth token for admin routes
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('adminToken');
    if (token) {
        config.headers['x-auth-token'] = token;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

export const getBaseUrl = () => BASE_URL;

export default api;
