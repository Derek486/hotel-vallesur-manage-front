// import useToast from "./useToast";

// const useLogout = () => {
//     const [toast] = useToast()

//     const logout = () => {
//         toast.promise(new Promise((resolve, rejected) => {
//             setTimeout(() => resolve(), 1000)
//         }), {
//             error: <p>No se pudo cerrar sesión</p>,
//             loading: <p>Cerrando sesión</p>,
//             success: <p>Sesión cerrada correctament</p>
//         }).then((res) => {
//             console.log(res);
//         }).catch((err) => {
//             console.log(err);
//         })
//     }

//     return [logout]
// }

// export default useLogout
import { useNavigate } from "react-router-dom";
import useToast from "./useToast";

const useLogout = () => {
    const [toast] = useToast();
    const navigate = useNavigate()

    const logout = () => {
        window.localStorage.removeItem('token')
        toast.success(<p>Sesión cerrada correctamente</p>)
        navigate('/login')
    };

    return [logout];
};

export default useLogout;