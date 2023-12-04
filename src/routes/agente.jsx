import Perfil from "../pages/dashboard/Perfil"
import Contratos from "../pages/dashboard/agentes/contratos/Contratos"
import Pagos from "../pages/dashboard/agentes/pagos/Pagos"
import Inquilinos from "../pages/dashboard/agentes/inquilinos/Inquilinos"
import { redirect } from "react-router-dom"
import InquilinosRegister from "../pages/dashboard/agentes/inquilinos/InquilinosRegister"
import ContratosShow from "../pages/dashboard/agentes/contratos/ContratosShow"
import InquilinosShow from "../pages/dashboard/agentes/inquilinos/InquilinosShow"

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
        children: [
            {
                path: '',
                element: <Contratos />
            },
            {
                path: ':id',
                element: <ContratosShow />
            }
        ]
    },
    {
        path: 'pagos',
        element: <Pagos />
    },
    {
        path: 'inquilinos',
        children: [
            {
                path: '',
                element: <Inquilinos />
            },
            {
                path: 'register',
                element: <InquilinosRegister />
            },
            {
                path: ':id',
                element: <InquilinosShow />
            },
        ]
    }
]

export default routesAgente