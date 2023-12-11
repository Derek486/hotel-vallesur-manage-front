import { useNavigate } from "react-router-dom"
import { EditIcon, SearchIcon, TrashIcon } from "../../../../components/Icons"
import TableLayout from "../../../../layouts/TableLayout"
import { useEffect, useState } from "react"
import FormControl from "../../../../components/FormControl"
import useSearch from "../../../../hooks/useSearch"
import { listarContratos } from "../../../../services/contratos"
import useToast from "../../../../hooks/useToast"

const Contratos = () => {

    const navigate = useNavigate()
    const [contratos, setContratos] = useState([])
    const [filteredData, handleSearch] = useSearch(contratos)
    const [toast] = useToast()

    useEffect(() => {
        toast.promise(listarContratos(),{
            error: <p>Error al listar contratos</p>,
            loading: <p>Cargando...</p>,
            success: <p>Contratos listados correctamente</p> 
        }).then((res) => {
            setContratos(res.data.data)
        }).catch((err) => {
            console.error(err);
        })
    }, [])

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
                            placeholder={'Buscar contrato'}
                            onInput={handleSearch}
                        />
                    </div>
                </div>
                <div className="flex flex-1 w-full overflow-auto gap-2 ">
                    <div className="w-full px-4 pb-2">
                        {/* Tabla de contratoalquiler */}
                        <TableLayout header={[
                            "#",
                            "Fecha de inicio",
                            "Fecha de fin",
                            "Monto de deposito",
                            "Renta mensual",
                            "Estado",
                        ]}>
                            {filteredData?.map(contratoalquiler => (
                                <tr key={contratoalquiler.id} className="text-black text-center">
                                    <td className="p-4">{contratoalquiler.id}</td>
                                    <td className="p-4">{new Date(contratoalquiler.fechainiciocontrato).toLocaleDateString()}</td>
                                    <td className="p-4">{new Date(contratoalquiler.fechafincontrato).toLocaleDateString()}</td>
                                    <td className="p-4">{contratoalquiler.montodeposito}</td>
                                    <td className="p-4">{contratoalquiler.montorentamensual}</td>
                                    <td className="p-4">{contratoalquiler.estadocontrato}</td>
                                </tr>
                            ))}
                        </TableLayout>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contratos