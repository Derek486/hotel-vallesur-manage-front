import { api } from "./api"

export const listarPagoAlquiler = () => {
    return api.get('/pagoalquiler')
}

export const crearPagoAlquiler = (nuevoPagoAlquiler) => {
    return api.post('/pagoalquiler', nuevoPagoAlquiler)
}

export const obtenerPagoAlquiler = (idPagoAlquiler) => {
    return api.get(`/pagoalquiler/mostrarPagoAlquiler/${idPagoAlquiler}`)
}

export const actualizarPagoAlquiler = (idPagoAlquiler, datosActualizados) => {
    return api.put(`/pagoalquiler/${idPagoAlquiler}`, datosActualizados)
}

export const borrarPagoAlquiler = (idPagoAlquiler) => {
    return api.delete(`/pagoalquiler/${idPagoAlquiler}`)
}
