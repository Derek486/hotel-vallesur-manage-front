import LinkDashboard from "../components/LinkDashboard"
import DropdownUser from "../components/DropDownUser"
import { LogoutIcon, ProfileIcon } from "../components/Icons"
import vallesur from '../assets/vallesur.png'
import useLogout from "../hooks/useLogout"

const DashboardLayout = ({ role, sidebar, children }) => {
    
    const [logout] = useLogout()

    return (
        <div className="h-screen bg-gradient-to-l bg-stroke text-white">
            <div className="flex flex-row h-screen">
                <aside className="flex flex-col gap-4 w-64 bg-boxdark-2">
                    <div className="flex justify-center h-20 items-center shadow-card-3">
                        <img
                            className="w-24"
                            src={vallesur}
                            alt="logo"
                        />
                        <h1 className="text-2xl font-semibold">Vallesur</h1>
                    </div>
                    <div className="px-4">
                        <div className="flex flex-col">
                            <h2 className="text-lg font-semibold">Usuario</h2>
                            <div className="mt-1 mb-3">
                                <LinkDashboard text={"Perfil"} to={`/dashboard/${role}/perfil`} icon={<ProfileIcon />} />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <h2 className="text-lg font-semibold">Dashboard</h2>
                            <div className="mt-1 mb-3">
                                {sidebar}
                                <LinkDashboard text={"Cerrar sesion"} icon={<LogoutIcon />} onClick={logout} />
                            </div>
                        </div>
                    </div>
                </aside>
                <div className="flex-1 flex flex-col">
                    <header className="bg-white text-black h-20 flex justify-between items-center px-4 shadow-card-2">
                        <h1 className="text-xl font-semibold">Bienvenido recepcionista</h1>
                        <DropdownUser />
                    </header>
                    <main className="p-4">
                        {children}
                    </main>
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout