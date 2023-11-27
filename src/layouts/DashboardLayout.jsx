import { Outlet } from "react-router-dom"
import LinkDashboard from "../components/LinkDashboard"
import { LogoutIcon, ProfileIcon } from "../components/Icons"

const DashboardLayout = ({ role, sidebar, children }) => {
    
    return (
        <div className="h-screen bg-gradient-to-l from-black via-boxdark to-black text-white flex items-center">
            <div className="mx-auto flex flex-row gap-4">
                <aside className="flex flex-col gap-2 w-64 p-4">
                    <div>
                        <h1 className="text-xl font-bold">Bienvenido /USUARIO/</h1>
                        <p className="my-2">Usted es un /ROL/, sus funciones son las de: /FUNCIONES/ </p>
                    </div>
                    <div className="flex flex-col">
                        <div className="mt-1 mb-3">
                            <LinkDashboard text={"Perfil"} to={`/dashboard/${role}/perfil`} icon={<ProfileIcon />} />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <h2 className="text-lg font-semibold">Dashboard</h2>
                        <div className="mt-1 mb-3">
                            {sidebar}
                            <LinkDashboard text={"Cerrar sesion"} icon={<LogoutIcon />} />
                        </div>
                    </div>
                </aside>
                <main className="w-96 p-4 h-96">
                    {children}
                </main>
            </div>
        </div>
    )
}

export default DashboardLayout