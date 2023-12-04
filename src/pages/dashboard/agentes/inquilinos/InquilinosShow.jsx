import { useNavigate } from "react-router-dom"
import ButtonPrimary from "../../../../components/ButtonPrimary"
import FormControl from "../../../../components/FormControl"
import TableLayout from "../../../../layouts/TableLayout"
import useForm from "../../../../hooks/useForm"
import { useEffect, useState } from "react"
import SelectControl from "../../../../components/SelectControl"

const InquilinosShow = () => {
    const navigate = useNavigate()

    const [form, handleInput] = useForm({})
    const [formContrato, handleInputContrato] = useForm({})

    const [edit, setEdit] = useState(false)
    const [editContrato, setEditContrato] = useState(false)

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
                <div className="bg-white p-8 rounded basis-1/2 text-black flex flex-col gap-8">
                    <header className="text-xl font-semibold">Datos de inquilino</header>
                    <div className="flex flex-col gap-4">
                        <section className="grid grid-cols-2 gap-4">
                            <FormControl 
                                type={'text'}
                                name={'nombre'}
                                label={'Nombres de inquilino'}
                                value={form.nombre || ''}
                                onInput={handleInput}
                                readonly={!edit}
                            />
                            <FormControl 
                                type={'text'}
                                name={'apellidos'}
                                label={'Apellidos de inquilino'}
                                value={form.apellido || ''}
                                onInput={handleInput}
                                readonly={!edit}
                            />
                        </section>
                        <section className="grid grid-cols-2 gap-4">
                            <FormControl 
                                type={'number'}
                                name={'documento_de_identificacion'}
                                label={'Documento de identidad'}
                                value={form.documento_de_identificacion || ''}
                                onInput={handleInput}
                                readonly={!edit}
                            />
                            <FormControl 
                                type={'number'}
                                name={'edad'}
                                label={'Edad de inquilino'}
                                value={form.edad || ''}
                                onInput={handleInput}
                                readonly={!edit}
                            />
                        </section>
                        <section className="grid grid-cols-2 gap-4">
                            <FormControl 
                                type={'tel'}
                                name={'telefono'}
                                label={'Telefono de inquilino'}
                                value={form.telefono || ''}
                                onInput={handleInput}
                                readonly={!edit}
                            />
                            <FormControl 
                                type={'email'}
                                name={'correoelectronico'}
                                label={'Correo de inquilino'}
                                value={form.correoelectronico || ''}
                                onInput={handleInput}
                                readonly={!edit}
                            />
                        </section>
                    </div>
                    <div className="flex gap-2 w-full flex-1 items-end justify-end">
                        {edit ? (
                            <>
                                <ButtonPrimary className="w-auto">
                                    Guardar cambios
                                </ButtonPrimary>
                                <ButtonPrimary className="w-auto" onClick={() => setEdit(false)}>
                                    Cancelar
                                </ButtonPrimary>
                            </>
                        ) : (
                            <>
                                <ButtonPrimary className="w-auto" onClick={() => setEdit(true)}>
                                    Editar campos
                                </ButtonPrimary>
                            </>
                        )}
                    </div>
                </div>
                <div className="bg-white p-8 rounded flex-1 text-black flex flex-col gap-8">
                    <header className="text-xl font-semibold">Datos de contrato</header>
                    <div className="flex flex-col gap-4">
                        <section className="grid grid-cols-2 gap-4">
                            <FormControl 
                                type={'date'}
                                name={'fechainiciocontrato'}
                                label={'Fecha de inicio de contrato'}
                                value={formContrato.fechainiciocontrato || ''}
                                onInput={handleInputContrato}
                                readonly={!editContrato}
                            />
                            <FormControl 
                                type={'date'}
                                name={'fechafincontrato'}
                                label={'Fecha de fin de contrato'}
                                value={formContrato.fechafincontrato || ''}
                                onInput={handleInputContrato}
                                readonly={!editContrato}
                            />
                        </section>
                        <section className="grid grid-cols-2 gap-4">
                            <FormControl 
                                type={'number'}
                                name={'montodeposito'}
                                label={'Monto de depósito'}
                                value={formContrato.montodeposito || ''}
                                onInput={handleInputContrato}
                                readonly={!editContrato}
                            />
                            <SelectControl 
                                name={'estadocontrato'}
                                label={'Estado de contrato'}
                                value={formContrato.estadocontrato || 'Activo'}
                                options={[{Activo: 'Activo'}, {Inactivo: 'Inactivo'}]}
                                onInput={handleInputContrato}
                                disabled={!editContrato}
                            />
                        </section>
                    </div>
                    <div className="flex gap-2 w-full flex-1 items-end justify-end">
                        {editContrato ? (
                            <>
                                <ButtonPrimary className="w-auto">
                                    Guardar cambios
                                </ButtonPrimary>
                                <ButtonPrimary className="w-auto" onClick={() => setEditContrato(false)}>
                                    Cancelar
                                </ButtonPrimary>
                            </>
                        ) : (
                            <>
                                <ButtonPrimary className="w-auto" onClick={() => setEditContrato(true)}>
                                    Editar contrato
                                </ButtonPrimary>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default InquilinosShow