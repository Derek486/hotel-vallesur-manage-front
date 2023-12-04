import { useNavigate } from "react-router-dom"
import ButtonPrimary from "../../../../components/ButtonPrimary"
import FormControl from "../../../../components/FormControl"
import useForm from "../../../../hooks/useForm"
import { useEffect, useState } from "react"
import TableLayout from "../../../../layouts/TableLayout"
import SelectControl from "../../../../components/SelectControl"

const InquilinosRegister = () => {
    const navigate = useNavigate()
    const [form, handleInput] = useForm({})

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

    const registrarAgente = () => {
        // Aquí se envia el formulario de datos a spring para el registro
    }

    return (
        <>
            <div className="flex gap-4 h-full">
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
                                />
                                <FormControl 
                                    type={'text'}
                                    name={'apellidos'}
                                    label={'Apellidos de inquilino'}
                                    value={form.apellido || ''}
                                    onInput={handleInput}
                                />
                            </section>
                            <section className="grid grid-cols-2 gap-4">
                                <FormControl 
                                    type={'number'}
                                    name={'documento_de_identificacion'}
                                    label={'Documento de identidad'}
                                    value={form.documento_de_identificacion || ''}
                                    onInput={handleInput}
                                />
                                <FormControl 
                                    type={'number'}
                                    name={'edad'}
                                    label={'Edad de inquilino'}
                                    value={form.edad || ''}
                                    onInput={handleInput}
                                />
                            </section>
                            <section className="grid grid-cols-2 gap-4">
                                <FormControl 
                                    type={'tel'}
                                    name={'telefono'}
                                    label={'Telefono de inquilino'}
                                    value={form.telefono || ''}
                                    onInput={handleInput}
                                />
                                <FormControl 
                                    type={'email'}
                                    name={'correoelectronico'}
                                    label={'Correo de inquilino'}
                                    value={form.correoelectronico || ''}
                                    onInput={handleInput}
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
                                    name={'fechainiciocontrato'}
                                    label={'Fecha de inicio de contrato'}
                                    value={form.fechainiciocontrato || ''}
                                    onInput={handleInput}
                                />
                                <FormControl 
                                    type={'date'}
                                    name={'fechafincontrato'}
                                    label={'Fecha de fin de contrato'}
                                    value={form.fechafincontrato || ''}
                                    onInput={handleInput}
                                />
                            </section>
                            <section className="grid grid-cols-2 gap-4">
                                <FormControl 
                                    type={'number'}
                                    name={'montodeposito'}
                                    label={'Monto de depósito'}
                                    value={form.montodeposito || ''}
                                    onInput={handleInput}
                                />
                                <SelectControl 
                                    name={'estadocontrato'}
                                    label={'Estado de contrato'}
                                    value={form.estadocontrato || 'Activo'}
                                    options={[{Activo: 'Activo'}, {Inactivo: 'Inactivo'}]}
                                    disabled
                                />
                            </section>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-8 rounded flex-1 text-black flex flex-col">
                    <div className="flex h-96 flex-col w-full">
                        <header className="text-xl font-semibold mb-10">Departamentos disponibles</header>
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
                                        <tr key={departamento.id} className={`text-black text-center cursor-pointer transition-colors ${departamento.id === form.departamento_id ? 'bg-bodydark1' : 'hover:bg-whiten'}`} onClick={(e) => {handleInput(e, {name:'departamento_id', value: departamento.id})}}>
                                            <td className="p-4">{departamento.nDepartamento}</td>
                                            <td className="p-4">{departamento.nCuartos}</td>
                                            <td className="p-4">{departamento.nBaños}</td>
                                            <td className="p-4">{departamento.area}</td>
                                            <td className="p-4">{departamento.precio}</td>
                                        </tr>
                                    ))}
                                </TableLayout>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-2 w-full py-20 items-end justify-end">
                        <ButtonPrimary className="w-auto" onClick={registrarAgente}>
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