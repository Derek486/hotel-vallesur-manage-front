import { CashIcon, CardIcon, PeopleIcon } from "./Icons"
import LinkDashboard from "./LinkDashboard"

const SidebarAgente = () => {
    return (
        <>
            <LinkDashboard text={"Inquilinos"} to="inquilinos" icon={<PeopleIcon />} />
            <LinkDashboard text={"Contratos"} to="contratos" icon={<CardIcon />} />
            <LinkDashboard text={"Pagos"} to="pagos" icon={<CashIcon />} />
        </>
    )
}

export default SidebarAgente