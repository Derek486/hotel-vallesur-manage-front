import {API_URL} from './constants'
import axios from 'axios'

export const api = axios.create({baseURL: API_URL, withCredentials: false})

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
    // Obtener la respuesta y extraer el token y el rol, luego almacenarlos en el local storage
    const { token, user } = response.data;
    if (token && user) {
        window.localStorage.setItem('token', token);
        window.localStorage.setItem('userRole', user.role);
        window.localStorage.setItem('userFirstname', user.firstname);
        window.localStorage.setItem('userLastname', user.lastname);
        window.localStorage.setItem('userEmail', user.email);
        window.localStorage.setItem('userUsername', user.username);
    }
    return response;

}, (error) => {
    // if (error.response && error.response.status === 401) {
    //     window.location.href = 'auth/login';
    // }
    return Promise.reject(error);
});