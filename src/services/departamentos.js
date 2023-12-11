import { api } from "./api"

export const listarDepartamentos = () => {
    return api.get('/departamentos')
}

export const crearDepartamento = (nuevoDepartamento) => {
    return api.post('/departamentos', nuevoDepartamento)
}

export const mostrarDepartamentos = (idDepartamento) => {
    return api.get(`/departamentos/${idDepartamento}`)
}

export const mostrarDepartamentosInquilino = (idDepartamento) => {
    return api.get(`/departamentos/${idDepartamento}/inquilino`)
}

export const actualizarDepartamento = (idDepartamento, datosActualizados) => {
    return api.put(`/departamentos/${idDepartamento}`, datosActualizados)
}

export const borrarDepartamento = (idDepartamento) => {
    return api.delete(`/departamentos/${idDepartamento}`)
}
