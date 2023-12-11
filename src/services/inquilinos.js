import { api } from "./api"

export const listarInquilinos = () => {
    return api.get('/inquilinos')
}

export const crearInquilino = (nuevoInquilino) => {
    return api.post('/inquilinos', nuevoInquilino)
}

export const obtenerInquilino = (idInquilino) => {
    return api.get(`/inquilinos/${idInquilino}`)
}

export const actualizarInquilino = (idInquilino, datosActualizados) => {
    return api.put(`/inquilinos/${idInquilino}`, datosActualizados)
}

export const borrarInquilino = (idInquilino) => {
    return api.delete(`/inquilinos/${idInquilino}`)
}
