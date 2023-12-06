import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from "react"
import TableLayout from "../../../../layouts/TableLayout"
import { EditIcon, SearchIcon, TrashIcon } from "../../../../components/Icons"
import ButtonPrimary from '../../../../components/ButtonPrimary'
import { listarDepartamentos } from '../../../../services/departamentos'
import FormControl from '../../../../components/FormControl'
import useSearch from '../../../../hooks/useSearch'

const Departamentos = () => {
    const navigate = useNavigate()
    const [departamentos, setDepartamentos] = useState([])
    const [filteredData, handleSearch] = useSearch(departamentos)

    useEffect(() => {
        // Se listan los departamentos
        listarDepartamentos()
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
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
                            placeholder={'Buscar departamento'}
                            onInput={handleSearch}
                        />
                    </div>
                    <ButtonPrimary onClick={() => navigate('register')}>
                        Registrar nuevo
                    </ButtonPrimary>
                </div>
                <div className="flex flex-1 w-full overflow-auto gap-2 ">
                    <div className="w-full px-4 pb-2">
                        {/* Tabla de departamentos */}
                        <TableLayout header={[
                            "Nro de departamento",
                            "Nro de cuartos",
                            "Nro de baños",
                            "Área total",
                            "Precio de renta",
                            "Estado",
                            "Acción"
                        ]}>
                            {filteredData?.map(departamento => (
                                <tr key={departamento.id} className="text-black text-center">
                                    <td className="p-4">{departamento.nDepartamento}</td>
                                    <td className="p-4">{departamento.nCuartos}</td>
                                    <td className="p-4">{departamento.nBaños}</td>
                                    <td className="p-4">{departamento.area}</td>
                                    <td className="p-4">{departamento.precio}</td>
                                    <td className="p-4">{departamento.estado}</td>
                                    <td className="p-4 flex justify-center gap-2">
                                        <EditIcon onClick={() => navigate(`${departamento.id}`)} className='cursor-pointer hover:fill-bodydark2 transition-colors' />
                                        <TrashIcon className='cursor-pointer hover:fill-danger transition-colors' />
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

export default Departamentos