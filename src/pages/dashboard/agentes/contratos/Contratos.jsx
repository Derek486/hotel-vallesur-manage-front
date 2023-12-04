import { useNavigate } from "react-router-dom"
import { EditIcon, SearchIcon, TrashIcon } from "../../../../components/Icons"
import TableLayout from "../../../../layouts/TableLayout"
import { useEffect, useState } from "react"
import FormControl from "../../../../components/FormControl"
import ButtonPrimary from "../../../../components/ButtonPrimary"

const Contratos = () => {

    const navigate = useNavigate()
    const [agentes, setAgentes] = useState([])

    useEffect(() => {
        // Se listan los agentes
        setAgentes(Array.from({length: 20}, (v, k) => (
            {
                id: k,
                nombres: 'Mario',
                apellidos: 'Ezcurra Zegarra',
                email: 'admin@gmail.com',
                username: 'mario123',
                telefono: '967805223',
                numeroIdentificacion: '612567146',
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
                            placeholder={'Buscar contrato'}
                        />
                    </div>
                </div>
                <div className="flex flex-1 w-full overflow-auto gap-2 ">
                    <div className="w-full px-4 pb-2">
                        {/* Tabla de departamentos */}
                        <TableLayout header={[
                            "Fecha de inicio",
                            "Duración",
                            "Monto de deposito",
                            "Renta mensual",
                            "Estado",
                            "Inquilino",
                        ]}>
                            {agentes?.map(agente => (
                                <tr key={agente.id} className="text-black text-center">
                                    <td className="p-4">{agente.nombres}</td>
                                    <td className="p-4">{agente.apellidos}</td>
                                    <td className="p-4">{agente.email}</td>
                                    <td className="p-4">{agente.username}</td>
                                    <td className="p-4">{agente.telefono}</td>
                                    <td className="p-4">{agente.numeroIdentificacion}</td>
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