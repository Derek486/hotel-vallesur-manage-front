import { NavLink } from "react-router-dom"

const LinkDashboard = ({ icon = null, text, to = null }) => {
    return (
        <NavLink to={to} className={({ isActive }) =>
                `${to && isActive ? "bg-stroke text-black font-semibold" : "hover:bg-graydark"} p-4 rounded-xl flex gap-4`
            }
        >
            {icon && (
                <span className="items-center flex justify-center">
                    {icon}
                </span>
            )}
            <p>{text}</p>
        </NavLink>  
    )
}

export default LinkDashboard