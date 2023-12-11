import { useNavigate } from "react-router-dom"
import ButtonPrimary from "../../../../components/ButtonPrimary"
import FormControl from "../../../../components/FormControl"
import useForm from "../../../../hooks/useForm"
import { useEffect, useState } from "react"
import TableLayout from "../../../../layouts/TableLayout"
import SelectControl from "../../../../components/SelectControl"
import { listarDepartamentos } from "../../../../services/departamentos"
import { crearInquilino } from "../../../../services/inquilinos"
import useToast from "../../../../hooks/useToast"
import { guardarContrato } from "../../../../services/contratos"

const InquilinosRegister = () => {
    const navigate = useNavigate()
    const [toast] = useToast()
    const [form, handleInput, setForm] = useForm({
        estadocontrato: 'Activo'
    })
    const [departamentos, setDepartamentos] = useState([])
    const [errors, setErrors] = useState({})
    const [inquilinoGuardado, setInquilinoGuardado] = useState(false)

    useEffect(() => {
        listarDepartamentos()
            .then(res => {
                setDepartamentos(res.data.data?.filter(d => d.estado === 'Disponible'))
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    const registrarContrato = (data) => {
        toast.promise(guardarContrato(data || form), {
            error: <p>Error al generar contrato</p>,
            loading: <p>Generando contrato...</p>,
            success: <p>Contrato generado exitosamente</p>
        }).then((res) => {
            navigate('..')
        }).catch((err) => {
            setErrors(prev => ({...prev, ...err.response.data.data.reduce((acc, curr) => ({...acc,[curr.field]:curr.defaultMessage}),{})}))
        })
    }

    const registrarInquilino = () => {
        setErrors({})
        if (!inquilinoGuardado) {
            toast.promise(crearInquilino(form), {
                error: <p>Error al crear inquilino</p>,
                loading: <p>Creando...</p>,
                success: <p>Datos de inquilino correctos</p>
            }).then((res) => {
                setInquilinoGuardado(true)
                setForm(prev => ({...prev, inquilinos: {id: res.data.data.id}}))
                registrarContrato({...form, inquilinos: {id: res.data.data.id}})
            }).catch((err) => {
                setErrors(prev => ({...prev, ...err.response.data.data.reduce((acc, curr) => ({...acc,[curr.field]:curr.defaultMessage}),{})}))
            })
        } else {
            registrarContrato()
        }
    }

    return (
        <>
            <div className="flex gap-4 h-full overflow-hidden">
                <div className="bg-white p-8 rounded basis-1/2 text-black flex flex-col gap-8 overflow-auto">
                    <div className="flex flex-col gap-10">
                        <header className="text-xl font-semibold">Datos de inquilino</header>
                        <div className="flex flex-col gap-4">
                            <section className="grid grid-cols-2 gap-4">
                                <FormControl 
                                    type={'text'}
                                    name={'nombre'}
                                    label={'Nombres de inquilino'}
                                    value={form.nombre || ''}
                                    onInput={handleInput}
                                    error={errors.nombre}
                                />
                                <FormControl 
                                    type={'text'}
                                    name={'apellidos'}
                                    label={'Apellidos de inquilino'}
                                    value={form.apellidos || ''}
                                    onInput={handleInput}
                                    error={errors.apellidos}
                                />
                            </section>
                            <section className="grid grid-cols-2 gap-4">
                                <SelectControl 
                                    type={'number'}
                                    name={'docIden'}
                                    label={'Tipo de documento'}
                                    value={form.docIden || ''}
                                    onInput={handleInput}
                                    options={[
                                        {Seleccionar: '---'},
                                        {Dni: 'Dni'},
                                        {Pasaporte: 'Pasaporte'}
                                    ]}
                                    error={errors.docIden}
                                />
                                <FormControl 
                                    type={'number'}
                                    name={'edad'}
                                    label={'Edad de inquilino'}
                                    value={form.edad || ''}
                                    onInput={handleInput}
                                    error={errors.edad}
                                />
                            </section>
                            <section className="grid grid-cols-2 gap-4">
                                <FormControl 
                                    type={'tel'}
                                    name={'telefono'}
                                    label={'Telefono de inquilino'}
                                    value={form.telefono || ''}
                                    onInput={handleInput}
                                    error={errors.telefono}
                                />
                                <FormControl 
                                    type={'email'}
                                    name={'correoelectronico'}
                                    label={'Correo de inquilino'}
                                    value={form.correoelectronico || ''}
                                    onInput={handleInput}
                                    error={errors.correoelectronico}
                                />
                            </section>
                        </div>
                    </div>
                    <div className="flex flex-col gap-10">
                        <header className="text-xl font-semibold">Datos de contrato</header>
                        <div className="flex flex-col gap-4">
                            <section className="grid grid-cols-2 gap-4">
                                <FormControl 
                                    type={'date'}
                                    min={new Date().toLocaleDateString('en-GB').split('/').reverse().join('-')}
                                    name={'fechainiciocontrato'}
                                    label={'Fecha de inicio de contrato'}
                                    value={form.fechainiciocontrato || ''}
                                    onInput={handleInput}
                                    error={errors.fechainiciocontrato}
                                />
                                <FormControl 
                                    type={'date'}
                                    name={'fechafincontrato'}
                                    label={'Fecha de fin de contrato'}
                                    value={form.fechafincontrato || ''}
                                    onInput={handleInput}
                                    error={errors.fechafincontrato}
                                />
                            </section>
                            <section className="grid grid-cols-2 gap-4">
                                <FormControl 
                                    type={'number'}
                                    name={'montodeposito'}
                                    label={'Monto de depósito'}
                                    value={form.montodeposito || ''}
                                    onInput={handleInput}
                                    error={errors.montodeposito}
                                />
                                <FormControl 
                                    type={'number'}
                                    name={'montorentamensual'}
                                    label={'Monto mensual de deposito'}
                                    value={form.montorentamensual || ''}
                                    onInput={handleInput}
                                    error={errors.montorentamensual}
                                />
                            </section>
                            <section>
                                <SelectControl 
                                    name={'estadocontrato'}
                                    label={'Estado de contrato'}
                                    value={'Activo'}
                                    disabled
                                />
                            </section>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-8 rounded flex-1 text-black flex flex-col">
                    <div className="flex h-96 flex-col w-full">
                        <header className="text-xl font-semibold mb-10 flex items-center">
                            Departamentos disponibles
                            <p className="text-danger mx-auto text-sm">{errors.departamento}</p>
                        </header>
                        <div className="flex flex-1 w-full overflow-auto gap-2">
                            <div className="w-full px-4 pb-2">
                                <TableLayout
                                    header={[
                                        "#",
                                        "Habitaciones",
                                        "Baños",
                                        "Area total",
                                        "Precio",
                                    ]}
                                >
                                    {departamentos?.map(departamento => (
                                        <tr key={departamento.ndepartamento} className={`text-black text-center cursor-pointer transition-colors ${departamento.ndepartamento === form?.departamento?.ndepartamento ? 'bg-bodydark1' : 'hover:bg-whiten'}`} onClick={(e) => {handleInput(e, {name:'departamento', value: {...departamento}})}}>
                                            <td className="p-4">{departamento.ndepartamento}</td>
                                            <td className="p-4">{departamento.nhabitaciones}</td>
                                            <td className="p-4">{departamento.nbaños}</td>
                                            <td className="p-4">{departamento.areatotal}</td>
                                            <td className="p-4">{departamento.precio}</td>
                                        </tr>
                                    ))}
                                </TableLayout>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-2 w-full py-20 items-end justify-end">
                        <ButtonPrimary className="w-auto" onClick={registrarInquilino}>
                            Registrar inquilino
                        </ButtonPrimary>
                        <ButtonPrimary className="w-auto" onClick={() => navigate('..')}>
                            Cancelar
                        </ButtonPrimary>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InquilinosRegister