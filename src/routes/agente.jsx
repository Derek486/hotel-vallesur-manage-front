import Perfil from "../pages/dashboard/Perfil"
import Contratos from "../pages/dashboard/agentes/contratos/Contratos"
import Pagos from "../pages/dashboard/agentes/pagos/Pagos"
import Inquilinos from "../pages/dashboard/agentes/inquilinos/Inquilinos"
import { redirect } from "react-router-dom"

const routesAgente = [
    {
        path: '',
        loader: () => redirect('perfil')
    },
    {
        path: 'perfil',
        element: <Perfil />
    },
    {
        path: 'contratos',
        element: <Contratos />
    },
    {
        path: 'pagos',
        element: <Pagos />
    },
    {
        path: 'inquilinos',
        element: <Inquilinos />
    }
]

export default routesAgente