import { useNavigate } from 'react-router-dom'
import { useCallback, useEffect, useRef, useState } from "react"
import TableLayout from "../../../../layouts/TableLayout"
import { EditIcon, FileIcon, SearchIcon, TrashIcon } from "../../../../components/Icons"
import ButtonPrimary from '../../../../components/ButtonPrimary'
import { listarDepartamentos } from '../../../../services/departamentos'
import FormControl from '../../../../components/FormControl'
import useSearch from '../../../../hooks/useSearch'
import useToast from '../../../../hooks/useToast'
import { borrarDepartamento } from '../../../../services/departamentos'

import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'

const Departamentos = () => {
    const navigate = useNavigate()
    const [departamentos, setDepartamentos] = useState([])
    const [filteredData, handleSearch] = useSearch(departamentos)
    const tableRef = useRef(null)
    const [toast] = useToast();

    useEffect(() => {
        toast.promise(listarDepartamentos(), {
            error: <p>Error al listar departamentos</p>,
            loading: <p>Cargando...</p>,
            success: <p>Departamentos listados correctamente</p>
        }).then((res) => {
            setDepartamentos(res.data.data);
        }).catch((err) => {
            console.error(err);
        })
    }, []);

    const handleDelete = (id) => {
        toast.promise(borrarDepartamento(id), {
            error: <p>Error al eliminar el departamento</p>,
            loading: <p>Eliminando...</p>,
            success: <p>Departamento eliminado correctamente</p>
        }).then((res) => {
            setDepartamentos(departamentos.filter(departamento => departamento.ndepartamento !== id));
            console.log(res)
        }).catch((err) => {
            console.error('Error al eliminar el departamento:', err);
        })
    };

    const generarReporte  = useCallback((id) => {
        const doc = new jsPDF()
        autoTable(doc, {
            startY: 45,
            head: [["Nro de departamento","Nro de cuartos","Nro de baños","Área total","Precio de renta","Estado"]],
            body: (id ? departamentos.filter(d => d.ndepartamento === id) : departamentos).map(p => [p.ndepartamento, p.nhabitaciones, p.nbaños, p.areatotal, p.precio, p.estado]),
            headStyles: {
                fillColor: '#313D4A'
            },
            theme: 'striped',
        })
        doc.text(`Fecha: ${new Date().toISOString()}`, 15, 40)
        if (id) {
            doc.text(`Departamento ${id}`, 90, 20)
            doc.save(`reporte_departamento_${id}.pdf`)
        } else if (tableRef) {
            doc.text('Departamentos', 90, 20)
            doc.save('reporte_departamentos.pdf')
        }
    })


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
                    <div className='flex gap-2'>
                        <ButtonPrimary onClick={() => generarReporte()}>
                            Generar reporte
                        </ButtonPrimary>
                        <ButtonPrimary onClick={() => navigate('register')}>
                            Registrar nuevo
                        </ButtonPrimary>
                    </div>
                </div>
                <div className="flex flex-1 w-full overflow-auto gap-2 ">
                    <div className="w-full px-4 pb-2">
                        {/* Tabla de departamentos */}
                        <TableLayout refTable={tableRef} header={[
                            "Nro de departamento",
                            "Nro de cuartos",
                            "Nro de baños",
                            "Área total",
                            "Precio de renta",
                            "Estado",
                            "Acción"
                        ]}>
                            {filteredData?.map (departamento => (
                                <tr key={departamento.ndepartamento} className="text-black text-center">
                                    <td className="p-4">{departamento.ndepartamento}</td>
                                    <td className="p-4">{departamento.nhabitaciones}</td>
                                    <td className="p-4">{departamento.nbaños}</td>
                                    <td className="p-4">{departamento.areatotal}</td>
                                    <td className="p-4">{departamento.precio}</td>
                                    <td className="p-4">{departamento.estado}</td>
                                    <td className="p-4 flex justify-center gap-2">
                                        <FileIcon 
                                            onClick={() => generarReporte(departamento.ndepartamento)} 
                                            className='cursor-pointer hover:fill-bodydark2 transition-colors'
                                        />
                                        <EditIcon 
                                            onClick={() => navigate(`${departamento.ndepartamento}`)} 
                                            className='cursor-pointer hover:fill-bodydark2 transition-colors' 
                                        />
                                        <TrashIcon 
                                            onClick={() => handleDelete(departamento.ndepartamento)}
                                            className='cursor-printer hover:fill-danger transition-colors' 
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

export default Departamentos