import { useNavigate } from "react-router-dom"
import ButtonPrimary from "../../../../components/ButtonPrimary"
import FormControl from "../../../../components/FormControl"
import { EditIcon, SearchIcon, TrashIcon } from "../../../../components/Icons"
import TableLayout from "../../../../layouts/TableLayout"
import { useEffect, useState } from "react"

const Inquilinos = () => {
    const navigate = useNavigate()
    const [departamentos, setDepartamentos] = useState([])

    useEffect(() => {
        // Se listan los departamentos
        setDepartamentos(Array.from({length: 20}, (v, k) => (
            {
                id: k,
                nDepartamento: '23',
                nCuartos: '23',
                nBaños: '23',
                area: '23',
                precio: '23',
                estado: 'Ocupado',
             }
        )))
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
                            name={'dBusqueda'}
                            placeholder={'Buscar departamento'}
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
                            "Nombres",
                            "Apellidos",
                            "Identificación",
                            "Inicio de contrato",
                            "Fin de contrato",
                            "Departamento",
                            "Acción"
                        ]}>
                            {departamentos?.map(departamento => (
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

export default Inquilinos