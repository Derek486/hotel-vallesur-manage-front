import DashboardLayout from "./DashboardLayout"
import SidebarGerente from "../components/SidebarGerente"
import { Outlet } from "react-router-dom"

const GerenteLayout = () => {
    return (
        <>
            <DashboardLayout role={'gerente'} sidebar={<SidebarGerente />} >
                Bienvenido gerente
                <Outlet />
            </DashboardLayout>
        </>
    )
}

export default GerenteLayout