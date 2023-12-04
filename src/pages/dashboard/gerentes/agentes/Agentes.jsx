import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { EditIcon, SearchIcon, TrashIcon } from "../../../../components/Icons"
import ButtonPrimary from "../../../../components/ButtonPrimary"
import FormControl from "../../../../components/FormControl"
import TableLayout from "../../../../layouts/TableLayout"

const Agentes = () => {
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
                            placeholder={'Buscar agente'}
                        />
                    </div>
                    <ButtonPrimary onClick={() => navigate('register')}>
                        Registrar nuevo
                    </ButtonPrimary>
                </div>
                <div className="flex flex-1 w-full overflow-auto gap-2">
                    <div className="w-full px-4 pb-2">
                        {/* Tabla de departamentos */}
                        <TableLayout header={[
                            "Nombres",
                            "Apellidos",
                            "Email",
                            "Username",
                            "Telefono",
                            "Nro de identificación",
                            "Acción"
                        ]}>
                            {agentes?.map(agente => (
                                <tr key={agente.id} className="text-black text-center">
                                    <td className="p-4">{agente.nombres}</td>
                                    <td className="p-4">{agente.apellidos}</td>
                                    <td className="p-4">{agente.email}</td>
                                    <td className="p-4">{agente.username}</td>
                                    <td className="p-4">{agente.telefono}</td>
                                    <td className="p-4">{agente.numeroIdentificacion}</td>
                                    <td className="p-4 flex justify-center gap-2">
                                        <EditIcon onClick={() => navigate(`${agente.id}`)} className='cursor-pointer hover:fill-bodydark2 transition-colors' />
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

export default Agentes