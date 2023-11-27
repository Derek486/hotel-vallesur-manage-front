import { GetInIcon, GetOutIcon, PeopleIcon } from "./Icons"
import LinkDashboard from "./LinkDashboard"

const SidebarRecepcionista = () => {
    return (
        <>
            <LinkDashboard text={"Huespedes"} to="huespedes" icon={<PeopleIcon />} />
            <LinkDashboard text={"Check-Ins"} to="checkins" icon={<GetInIcon />} />
            <LinkDashboard text={"Check-Outs"} to="checkouts" icon={<GetOutIcon />} />
        </>
    )
}

export default SidebarRecepcionista