import { api } from "./api"

export const listarContratos = () => {
    return api.get('/contratoalquileres')
}

export const guardarContrato = (data) => {
    return api.post('/contratoalquileres', data)
} 

export const actualizarContrato = (id, data) => {
    return api.put(`/contratoalquileres/${id}`, data)
} 