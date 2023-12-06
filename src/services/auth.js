import { api } from "./api";

export const login = (credentials) => {
    return api.post('/auth/login', credentials)
}

export const register = (credentials) => {
    return api.post('/auth/register', credentials)
}   