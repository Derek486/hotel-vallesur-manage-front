import { redirect } from "react-router-dom"
import Perfil from "../pages/dashboard/Perfil"
import Agentes from "../pages/dashboard/gerentes/agentes/Agentes"
import AgentesRegister from "../pages/dashboard/gerentes/agentes/AgentesRegister"
import AgentesShow from "../pages/dashboard/gerentes/agentes/AgentesShow"
import Departamentos from "../pages/dashboard/gerentes/departamentos/Departamentos"
import DepartamentoShow from "../pages/dashboard/gerentes/departamentos/DepartamentoShow"
import DepartamentosRegister from "../pages/dashboard/gerentes/departamentos/DepartamentosRegister"

const routesGerente = [
    {
        path: '',
        loader: () => redirect('perfil')
    },
    {
        path: 'perfil',
        element: <Perfil />
    },
    {
        path: 'departamentos',
        children: [
            {
                path: '',
                element: <Departamentos />
            },
            {
                path: 'register',
                element: <DepartamentosRegister />
            },
            {
                path: ':id',
                element: <DepartamentoShow />
            }
        ]
    },
    {
        path: 'agentes',
        children: [
            {
                path: '',
                element: <Agentes />
            },
            {
                path: 'register',
                element: <AgentesRegister />
            },
            {
                path: ':id',
                element: <AgentesShow />
            }
        ]
    }
]

export default routesGerente