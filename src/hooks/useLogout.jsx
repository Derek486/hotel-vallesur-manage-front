import useToast from "./useToast";

const useLogout = () => {
    const [toast] = useToast()

    const logout = () => {
        toast.promise(new Promise((resolve, rejected) => {
            setTimeout(() => resolve(), 1000)
        }), {
            error: <p>No se pudo cerrar sesión</p>,
            loading: <p>Cerrando sesión</p>,
            success: <p>Sesión cerrada correctament</p>
        }).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        })
    }

    return [logout]
}

export default useLogout