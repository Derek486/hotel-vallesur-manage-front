import DashboardLayout from "./DashboardLayout"
import SidebarRecepcionista from "../components/SidebarRecepcionista"
import { Outlet } from "react-router-dom"

const RecepcionistaLayout = () => {
    return (
        <>
            <DashboardLayout role={'recepcionista'} sidebar={<SidebarRecepcionista />} >
                Bienvenido recepcionista
                <Outlet />
            </DashboardLayout>
        </>
    )
}

export default RecepcionistaLayout