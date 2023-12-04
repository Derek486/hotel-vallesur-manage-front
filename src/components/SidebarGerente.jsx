import { DoorIcon, PeopleIcon } from "./Icons"
import LinkDashboard from "./LinkDashboard"

const SidebarGerente = () => {
    return (
        <>
            <LinkDashboard text={"Departamentos"} to="departamentos" icon={<DoorIcon />} />
            <LinkDashboard text={"Agentes"} to="agentes" icon={<PeopleIcon />} />
        </>
    )
}

export default SidebarGerente