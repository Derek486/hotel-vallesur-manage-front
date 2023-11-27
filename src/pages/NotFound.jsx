import { Link } from "react-router-dom"

const NotFound = () => {
    return (
        <>
            <div className="flex items-center h-screen bg-gradient-to-tr from-bodydark via-bodydark3 to-bodydark w-full">
                <div className="mx-auto flex flex-col gap-4 justify-center">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold opacity-80 text-boxdark-2">404</h1>
                        <h2 className="text-3xl font-semibold text-boxdark">Pagina no encontrada</h2>
                    </div>
                    <Link to={'/dashboard/'} className="py-4 h-12 mx-auto flex items-center justify-center bg-gradient-to-r from-black via-boxdark to-black rounded px-6 leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]">
                        Volver a dashboard
                    </Link>
                </div>
            </div>
        </>
    )
}

export default NotFound