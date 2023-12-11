import { api } from "./api";

export const login = (credentials) => {
    return api.post('/auth/login', credentials)
}

export const getUser = () => {
    return api.get('/auth/user')
}

export const updateUser = (data) => {
    return api.put('/auth/user', data)
}

export const updatePassword = (data) => {
    return api.put('/auth/password', data)
}