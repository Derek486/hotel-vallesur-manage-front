import { useNavigate } from "react-router-dom"
import ButtonPrimary from "../../../../components/ButtonPrimary"
import FormControl from "../../../../components/FormControl"
import { FileIcon, SearchIcon, TrashIcon } from "../../../../components/Icons"
import TableLayout from "../../../../layouts/TableLayout"
import { useEffect, useState } from "react"
import SelectControl from "../../../../components/SelectControl"
import useForm from "../../../../hooks/useForm"
import useSearch from "../../../../hooks/useSearch"

const Pagos = () => {
    const [pagos, setPagos] = useState([])
    const [formPago, handleInputPago] = useForm({})
    const [filteredData, handleSearch] = useSearch(pagos)


    const inquilinos = Array.from({length: 20}, (v, k) => (
        {
            id: k,
            nombres: 'mario',
            apellidos: 'castañeda',
            departamento: 201
         }
    ))
    useEffect(() => {
        // Se listan los departamentos
        setPagos(Array.from({length: 20}, (v, k) => (
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

    const generarPago = () => {
        console.log(formPago);
    }

    return (
        <>
            <div className="flex gap-4 h-full">
                <div className='flex flex-col h-full bg-white gap-4 basis-2/3'>
                    <div className='bg-white w-full p-4 text-black border-b-2 border-stroke z-1 h-20 flex justify-between'>
                        <div className='flex items-center'>
                            <div className='mx-4'>
                                <SearchIcon />
                            </div>
                            <FormControl   
                                type='search'
                                name={'dBusqueda'}
                                placeholder={'Buscar pago'}
                                onInput={handleSearch}
                            />
                        </div>
                        <ButtonPrimary>
                            Generar reporte
                        </ButtonPrimary>
                    </div>
                    <div className="flex flex-1 w-full overflow-auto gap-2 ">
                        <div className="w-full px-4 pb-2">
                            {/* Tabla de departamentos */}
                            <TableLayout header={[
                                "Inquilino",
                                "Fecha de pago",
                                "Monto",
                                "Acción"
                            ]}>
                                {filteredData?.map(departamento => (
                                    <tr key={departamento.id} className="text-black text-center">
                                        <td className="p-4">{departamento.nDepartamento}</td>
                                        <td className="p-4">{departamento.nCuartos}</td>
                                        <td className="p-4">{departamento.nBaños}</td>
                                        <td className="p-4 flex justify-center gap-2">
                                            <TrashIcon className='cursor-pointer hover:fill-danger transition-colors' />
                                        </td>
                                    </tr>
                                ))}
                            </TableLayout>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col h-full bg-white gap-4 flex-1">
                    <div className="p-4 h-12 font-semibold text-lg flex justify-center items-center  bg-gradient-to-r from-black via-boxdark to-black">
                        Registrar nuevo pago
                    </div>
                    <div className="px-8 flex flex-col gap-4">
                        <FormControl 
                            type="number"
                            name={'montopago'}
                            label={'Monto de pago'}
                            value={formPago.montopago || ''}
                            onInput={handleInputPago}
                        />
                        <SelectControl 
                            name={'metodopago'}
                            label={'Método de pago'}
                            options={[
                                {Efectivo: 'Efectivo'},
                                {Transferencia: 'Transferencia'},
                                {Tarjeta: 'Tarjeta'}
                            ]}
                            value={formPago.metodopago || ''}
                            onInput={handleInputPago}
                        />

                    </div>
                    <div className="p-4 h-12 font-semibold text-lg flex justify-center items-center  bg-gradient-to-r from-black via-boxdark to-black">
                        Inquilino
                    </div>
                    <div className="flex flex-1 w-full flex-col px-8 overflow-auto gap-2">
                        <p className="text-graydark py-2">Seleccione un inquilino</p>
                        <div className="flex-1 overflow-auto">
                            <ul className=" max-h-full overflow-auto">
                                {inquilinos.map(i => (
                                    <li key={i.id}>
                                        <button className={`flex w-full text-graydark justify-between transition-colors p-4 ${formPago.inquilino === i.id ? 'bg-bodydark1' : 'hover:bg-whiten'}`} onClick={(e) => {handleInputPago(e, {name: 'inquilino', value: i.id})}}>
                                            <p>{i.nombres}</p> 
                                            <p>{i.apellidos}</p>
                                            <p>Departamento: {i.departamento}</p>
                                        </button>
                                    </li> 
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="p-4 ms-auto">
                        <ButtonPrimary onClick={generarPago}>
                            Generar pago
                        </ButtonPrimary>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Pagos