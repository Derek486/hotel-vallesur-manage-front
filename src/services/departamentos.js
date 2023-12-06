import { api } from "./api"

export const listarDepartamentos = () => {
    return api.get('/departamentos')
}