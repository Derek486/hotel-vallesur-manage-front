import DashboardLayout from "./DashboardLayout"
import SidebarAgente from "../components/SidebarAgente"
import { Outlet } from "react-router-dom"

const AgenteLayout = () => {
    return (
        <>
            <DashboardLayout role={'agente'} sidebar={<SidebarAgente />} >
                <Outlet />
            </DashboardLayout>
        </>
    )
}

export default AgenteLayout