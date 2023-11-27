import Perfil from "../pages/dashboard/Perfil"
import CheckIn from "../pages/dashboard/recepcionistas/CheckIn"
import CheckOut from "../pages/dashboard/recepcionistas/CheckOut"
import Huespedes from "../pages/dashboard/recepcionistas/Huespedes"

const routesRecepcionista = [
    {
        path: 'perfil',
        element: <Perfil />
    },
    {
        path: 'checkins',
        element: <CheckIn />
    },
    {
        path: 'checkouts',
        element: <CheckOut />
    },
    {
        path: 'huespedes',
        element: <Huespedes />
    }
]

export default routesRecepcionista