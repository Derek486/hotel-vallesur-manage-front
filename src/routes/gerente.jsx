import { createBrowserRouter, redirect } from "react-router-dom"
import Perfil from "../pages/dashboard/Perfil"
import Administradores from "../pages/dashboard/gerentes/Administradores"
import Habitaciones from "../pages/dashboard/gerentes/Habitaciones"

const routesGerente = [
    {
        path: 'perfil',
        element: <Perfil />
    },
    {
        path: 'habitaciones',
        element: <Habitaciones />
    },
    {
        path: 'administradores',
        element: <Administradores />
    }
]

export default routesGerente