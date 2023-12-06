import {API_URL} from './constants'
import axios from 'axios'

export const api = axios.create({baseURL: API_URL})

api.interceptors.request.use((config) => {
    const token = window.localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
        
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

api.interceptors.response.use((response) => {
    return response;
}, (error) => {
    // if (error.response && error.response.status === 401) {
    //     window.location.href = 'auth/login';
    // }
    return Promise.reject(error);
});