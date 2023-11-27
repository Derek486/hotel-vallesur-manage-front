import { DoorIcon, PeopleIcon } from "./Icons"
import LinkDashboard from "./LinkDashboard"

const SidebarGerente = () => {
    return (
        <>
            <LinkDashboard text={"Habitaciones"} to="habitaciones" icon={<DoorIcon />} />
            <LinkDashboard text={"Recepcionistas"} to="administradores" icon={<PeopleIcon />} />
        </>
    )
}

export default SidebarGerente