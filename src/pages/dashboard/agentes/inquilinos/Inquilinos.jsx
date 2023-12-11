import { useNavigate } from "react-router-dom"
import ButtonPrimary from "../../../../components/ButtonPrimary"
import FormControl from "../../../../components/FormControl"
import { EditIcon, SearchIcon, TrashIcon } from "../../../../components/Icons"
import TableLayout from "../../../../layouts/TableLayout"
import { useEffect, useState } from "react"
import useSearch from "../../../../hooks/useSearch"
import useToast from "../../../../hooks/useToast"
import { borrarInquilino, listarInquilinos } from "../../../../services/inquilinos"
const Inquilinos = () => {
    const navigate = useNavigate()
    const [inquilinos, setInquilinos] = useState([])
    const [filteredData, handleSearch] = useSearch(inquilinos)
    const [toast] = useToast(); // Utiliza el hook de Toast


    useEffect(() => {
        toast.promise(listarInquilinos(), {
            error: <p>Error al listar los inquilinos</p>,
            loading: <p>Cargando...</p>,
            success: <p>inquilinos listados correctamente</p>
        }).then((res) => {
            setInquilinos(res.data.data);
        }).catch((err) => {
            console.log(err);
        })
        
    }, [])

    const handleDelete = (id) => {
        toast.promise(borrarInquilino(id), {
            error: <p>Error al eliminar el inquilino</p>,
            loading: <p>Eliminando...</p>,
            success: <p>Inquilino eliminado correctamente</p>
        }).then((res) => {
            const updatedInquilinos = inquilinos.filter(inquilino => inquilino.id !== id);
            setInquilinos(updatedInquilinos);
        }).catch((err) => {
            console.log(err);
        })
    };

    return (
        <>
            <div className='flex flex-col h-full bg-white gap-4'>
                <div className='bg-white w-full p-4 text-black border-b-2 border-stroke z-1 h-20 flex justify-between'>
                    <div className='flex items-center'>
                        <div className='mx-4'>
                            <SearchIcon />
                        </div>
                        <FormControl   
                            type='search'
                            placeholder={'Buscar inquilino'}
                            onInput={handleSearch}
                        />
                    </div>
                    <ButtonPrimary onClick={() => navigate('register')}>
                        Registrar nuevo inquilino
                    </ButtonPrimary>
                </div>
                <div className="flex flex-1 w-full overflow-auto gap-2 ">
                    <div className="w-full px-4 pb-2">
                        {/* Tabla de inquilinos */}
                        <TableLayout header={[
                            "Nombres",
                            "Apellidos",
                            "Correo electrónico",
                            "Doc. de identificacion",
                            "Nro de departamento",
                            "Edad",
                            "Telefono",
                            "Accion"
                        ]}>
                            {filteredData?.map((inquilino)=> (
                                <tr key={inquilino.id} className="text-black text-center">
                                    <td className="p-4">{inquilino.nombre}</td>
                                    <td className="p-4">{inquilino.apellidos}</td>
                                    <td className="p-4">{inquilino.correoelectronico}</td>
                                    <td className="p-4">{inquilino.docIden}</td>
                                    <td className="p-4">{inquilino?.departamento?.ndepartamento}</td>
                                    <td className="p-4">{inquilino.edad}</td>
                                    <td className="p-4">{inquilino.telefono}</td>
                                    <td className="p-4 flex justify-center gap-2">
                                        <EditIcon 
                                            onClick={() => navigate(`${inquilino.id}`)} 
                                            className='cursor-pointer hover:fill-bodydark2 transition-colors' 
                                        />
                                        <TrashIcon
                                            onClick={() => handleDelete(inquilino.id)}
                                            className='cursor-pointer hover:fill-danger transition-colors' 
                                        />
                                    </td>
                                </tr>
                            ))}
                        </TableLayout>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Inquilinos