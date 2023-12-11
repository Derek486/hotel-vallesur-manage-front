import { api } from "./api"

export const listarAgentes = () => {
    return api.get('/auth')
}

export const register = (credentials) => {
    return api.post('/auth/register', credentials)
}   

export const obtenerAgente = (id) => {
    return api.get(`/auth/${id}`)
}

export const modificarAgente = (id, data) => {
    return api.put(`/auth/${id}`, data)
}

export const modificarAgenteUsuario = (id, data) => {
    return api.put(`/auth/${id}/user`, data)
}