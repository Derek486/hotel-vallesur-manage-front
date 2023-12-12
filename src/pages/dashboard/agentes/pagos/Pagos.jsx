import { useNavigate } from "react-router-dom"
import ButtonPrimary from "../../../../components/ButtonPrimary"
import FormControl from "../../../../components/FormControl"
import { FileIcon, SearchIcon, TrashIcon } from "../../../../components/Icons"
import TableLayout from "../../../../layouts/TableLayout"
import { useCallback, useEffect, useRef, useState } from "react"
import SelectControl from "../../../../components/SelectControl"
import useForm from "../../../../hooks/useForm"
import useSearch from "../../../../hooks/useSearch"
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'
import { borrarPagoAlquiler, crearPagoAlquiler, listarPagoAlquiler } from "../../../../services/pagoAlquiler"
import useToast from "../../../../hooks/useToast"
import { listarInquilinos } from "../../../../services/inquilinos"


const Pagos = () => {
    const [pagos, setPagos] = useState([])
    const [formPago, handleInputPago] = useForm({
        metodopago: 'Efectivo'
    })
    const [filteredData, handleSearch] = useSearch(pagos)
    const [errors, setErrors] = useState({})
    const [inquilinos, setInquilinos] = useState([])
    const tableRef = useRef(null)
    const [toast] = useToast()

    useEffect(() => {
        // Se listan los inquilinos
        toast.promise(listarInquilinos(), {
            error: <p>Error al listar los inquilinos</p>,
            loading: <p>Cargando...</p>,
            success: <p>Inquilinos listados correctamente</p>
        }).then((res) => {
            setInquilinos(res.data.data);
        }).catch((err) => {
            console.log(err);
        })
        // Se listan los pagos
        toast.promise(listarPagoAlquiler(), {
            error: <p>Error al listar los pagos</p>,
            loading: <p>Cargando...</p>,
            success: <p>Pagos listados correctamente</p>
        }).then((res) => {
            setPagos(res.data.data);
        }).catch((err) => {
            console.log(err);
        })
        
    }, [])

    const generarPago = () => {
        setErrors({})
        toast.promise(crearPagoAlquiler(formPago), {
            error: <p>Error al crear el pagos</p>,
            loading: <p>Cargando...</p>,
            success: <p>Pago creado correctamente</p>
        }).then((res) => {
            setPagos([...pagos, res.data.data]);
        }).catch((err) => {
            console.log(err);
            setErrors(prev => ({...prev, ...err.response.data.data.reduce((acc, curr) => ({...acc,[curr.field]:curr.defaultMessage}),{})}))
        })
        
    }
    
    const eliminarPago = (id) => {
        toast.promise(borrarPagoAlquiler(id), {
            error: <p>Error al eliminar el pago</p>,
            loading: <p>Cargando...</p>,
            success: <p>Pago eliminado correctamente</p>
        }).then((res) => {
            setPagos(pagos.filter(p => p.id !== id));
        }).catch((err) => {
            console.log(err);
        })
    }

    const generarReporte  = useCallback((id) => {
        const doc = new jsPDF()
        autoTable(doc, {
            startY: 45,
            head: [['ID', 'Nro Contrato', 'Fecha de pago', 'Monto']],
            body: (id ? pagos.filter(p => p.id === id) : pagos).map(p => [p.id, p?.contratoalquiler?.id, new Date(p.fechapago).toLocaleDateString(), p.montopago]),
            headStyles: {
                fillColor: '#313D4A'
            },
            theme: 'striped',
        })
        doc.text(`Fecha: ${new Date().toISOString()}`, 15, 40)
        if (id) {
            doc.text(`Factura ${id}`, 90, 20)
            doc.save(`reporte_pagos_${id}.pdf`)
        } else if (tableRef) {
            doc.text('Facturas', 90, 20)
            doc.save('reporte_pagos.pdf')
        }
    })


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
                        <ButtonPrimary onClick={() => generarReporte()}>
                            Generar reporte
                        </ButtonPrimary>
                    </div>
                    <div className="flex flex-1 w-full overflow-auto gap-2 ">
                        <div className="w-full px-4 pb-2">
                            {/* Tabla de departamentos */}
                            <TableLayout id="table" refTable={tableRef} header={[
                                "Contrato",
                                "Fecha de pago",
                                "Monto",
                                "Acción"
                            ]}>
                                {filteredData?.map(pago => (
                                    <tr key={pago.id} className="text-black text-center">
                                        <td className="p-4">{pago?.contratoalquiler?.id}</td>
                                        <td className="p-4">{new Date(pago.fechapago).toLocaleDateString()}</td>
                                        <td className="p-4">{pago.montopago}</td>
                                        <td className="p-4 flex justify-center gap-2">
                                            <FileIcon onClick={() => generarReporte(pago.id)} className='cursor-pointer hover:fill-bodydark2 transition-colors' />
                                            <TrashIcon onClick={() => eliminarPago(pago.id)} className='cursor-pointer hover:fill-danger transition-colors' />
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
                            error={errors.montopago}
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
                            error={errors.metodopago}
                            onInput={handleInputPago}
                        />

                    </div>
                    <div className="p-4 h-12 font-semibold text-lg flex justify-center items-center  bg-gradient-to-r from-black via-boxdark to-black">
                        Inquilino
                    </div>
                    <div className="flex flex-1 w-full flex-col px-8 overflow-auto gap-2">
                        <div className="flex items-center">
                            <p className="text-graydark py-2">Seleccione un inquilino</p>
                            {errors.contratoalquiler && <p className="text-danger ms-auto">Seleccione un inquilino</p>}
                        </div>
                        <div className="flex-1 overflow-auto">
                            <ul className=" max-h-full overflow-auto">
                                {inquilinos?.map(i => (
                                    <li key={i.id}>
                                        <button className={`flex w-full text-graydark justify-between transition-colors p-4 ${formPago?.contratoalquiler?.id === i?.contratoAlquiler?.id ? 'bg-bodydark1' : 'hover:bg-whiten'}`} onClick={(e) => {handleInputPago(e, {name: 'contratoalquiler', value: {id: i?.contratoAlquiler?.id}})}}>
                                            <p>{i.nombre}</p> 
                                            <p>{i.apellidos}</p>
                                            <p>Departamento: {i.departamento.ndepartamento}</p>
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