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
        loader: () => localStorage.getItem('token') ? redirect('/dashboard') : redirect('/login')
    },
    {
        path: "/login",
        element: <Login />,
        loader: () => {
            let rol = window.localStorage.getItem('rol')
            let decode = window.localStorage.getItem('token')
            if(rol && decode)
                return redirect('/dashboard');
            return null
        }
    },
    {
        path: '/dashboard',
        index: true,
        loader: () => {
            let rol = window.localStorage.getItem('rol')
            let decode = window.localStorage.getItem('token')

            if(decode && rol === 'ROLE_ADMIN'){
                return redirect('/dashboard/gerente'); 
            }else if (decode && rol === 'ROLE_MANAGER') {
                return redirect('/dashboard/agente');
            }
            return redirect('/login')
        },
    },
    {
        path: '/dashboard',
        children: [
            {
                path: 'gerente',
                element: <GerenteLayout />,
                loader: () => {
                    let rol = window.localStorage.getItem('rol')
                    let decode = window.localStorage.getItem('token')
                    if(rol && decode && rol !== 'ROLE_ADMIN')
                        return redirect('/dashboard/agente');
                    if(!rol || !decode)
                        return redirect('/login')
                    return null
                },
                children: routesGerente
            },
            {
                path: 'agente',
                element: <AgenteLayout />,
                loader: () => {
                    let rol = window.localStorage.getItem('rol')
                    let decode = window.localStorage.getItem('token')
                    if(rol && decode && rol !== 'ROLE_MANAGER')
                        return redirect('/dashboard/gerente');
                    if(!rol || !decode)
                        return redirect('/login')
                    return null
                },
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