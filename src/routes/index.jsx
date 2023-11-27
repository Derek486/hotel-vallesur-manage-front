import {
    Outlet,
    createBrowserRouter,
    redirect,
    useLocation,
} from "react-router-dom";
import Login from "../pages/auth/Login";
import routesGerente from "./gerente";
import routesRecepcionista from "./recepcionista";
import GerenteLayout from "../layouts/GerenteLayout";
import RecepcionistaLayout from "../layouts/RecepcionistaLayout";
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
                path: 'recepcionista',
                element: <RecepcionistaLayout />,
                children: routesRecepcionista
            }
        ]
    },
    {
        path: '*',
        element: <NotFound />
    }
]);

export default router