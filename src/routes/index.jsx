import {
    createBrowserRouter,
    redirect,
} from "react-router-dom";
import Login from "../pages/auth/Login";
import routesGerente from "./gerente";
import routesAgente from "./agente";
import GerenteLayout from "../layouts/GerenteLayout";
import AgenteLayout from "../layouts/AgenteLayout";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
    {
        path: '',
        loader: () => {
            // Aquí redirige a su home o al login (si esta o no autenticado)
            return redirect('/login')
        }
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: '/dashboard',
        index: true,
        loader: () => {
            // Aquí se redirige a su home (dependiendo de su rol)
            return redirect('/dashboard/gerente')
        },
    },
    {
        path: '/dashboard',
        children: [
            {
                path: 'gerente',
                element: <GerenteLayout />,
                children: routesGerente
            },
            {
                path: 'agente',
                element: <AgenteLayout />,
                children: routesAgente
            }
        ]
    },
    {
        path: '*',
        element: <NotFound />
    }
]);

export default router