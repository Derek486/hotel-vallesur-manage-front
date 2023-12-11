import { useParams } from "react-router-dom"
import ButtonPrimary from "../../../../components/ButtonPrimary"
import FormControl from "../../../../components/FormControl"
import useForm from "../../../../hooks/useForm"
import { useEffect, useState } from "react"
import SelectControl from "../../../../components/SelectControl"
import { actualizarInquilino, obtenerInquilino } from "../../../../services/inquilinos"
import useToast from "../../../../hooks/useToast"
import { actualizarContrato } from "../../../../services/contratos"

const InquilinosShow = () => {
    const {id} = useParams()
    const [edit, setEdit] = useState(false)

    const [form, handleInput, setForm] = useForm({})
    const [errorsForm, setErrorsForm] = useState({})

    const [formContrato, handleInputContrato, setFormContrato] = useForm({})
    const [errorsFormContrato, setErrorsFormContrato] = useState({})

    const [toast] = useToast()
    const [editContrato, setEditContrato] = useState(false)

    useEffect(() => {
        obtenerInquilino(id)
            .then(res => {
                setForm(res.data.data)
                setFormContrato(res.data.data.contratoAlquiler)
            })  
    }, [])

    const guardarCambios = (e) => {
        setErrorsForm({})
        toast.promise(actualizarInquilino(id, form),{
            error: <p>Error al actualizar inquilino</p>,
            loading: <p>Guardando...</p>,
            success: <p>Inquilino guardado correctamente</p>
        }).catch((err) => {
            setErrorsForm(prev => ({...prev, ...err.response.data.data.reduce((acc, curr) => ({...acc,[curr.field]:curr.defaultMessage}),{})}))
        })
    }

    const guardarCambiosContrato = (e) => {
        setErrorsFormContrato({})
        toast.promise(actualizarContrato(formContrato.id, formContrato),{
            error: <p>Error al actualizar contrato</p>,
            loading: <p>Guardando...</p>,
            success: <p>Contrato guardado correctamente</p>
        }).catch((err) => {
            setErrorsFormContrato(prev => ({...prev, ...err.response.data.data.reduce((acc, curr) => ({...acc,[curr.field]:curr.defaultMessage}),{})}))
        })
    }

    const getDateFormat = (date) => new Date(date).toLocaleDateString('en-GB').split('/').reverse().join('-')

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
                                error={errorsForm.nombre}
                            />
                            <FormControl 
                                type={'text'}
                                name={'apellidos'}
                                label={'Apellidos de inquilino'}
                                value={form.apellidos || ''}
                                onInput={handleInput}
                                readonly={!edit}
                                error={errorsForm.apellidos}
                            />
                        </section>
                        <section className="grid grid-cols-2 gap-4">
                            <SelectControl 
                                type={'number'}
                                name={'docIden'}
                                label={'Documento de identidad'}
                                value={form.docIden || ''}
                                onInput={handleInput}
                                disabled={!edit}
                                options={[
                                    {Seleccionar: '---'},
                                    {Dni: 'Dni'},
                                    {Pasaporte: 'Pasaporte'}
                                ]}
                                error={errorsForm.docIden}
                            />
                            <FormControl 
                                type={'number'}
                                name={'edad'}
                                label={'Edad de inquilino'}
                                value={form.edad || ''}
                                onInput={handleInput}
                                readonly={!edit}
                                error={errorsForm.edad}
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
                                error={errorsForm.telefono}
                            />
                            <FormControl 
                                type={'email'}
                                name={'correoelectronico'}
                                label={'Correo de inquilino'}
                                value={form.correoelectronico || ''}
                                onInput={handleInput}
                                readonly={!edit}
                                error={errorsForm.correoelectronico}
                            />
                        </section>
                    </div>
                    <div className="flex gap-2 w-full flex-1 items-end justify-end">
                        {edit ? (
                            <>
                                <ButtonPrimary className="w-auto" onClick={guardarCambios}>
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
                {formContrato && 
                    <div className="bg-white p-8 rounded flex-1 text-black flex flex-col gap-8">
                        <header className="text-xl font-semibold">Datos de contrato</header>
                        <div className="flex flex-col gap-4">
                            <section className="grid grid-cols-2 gap-4">
                                <FormControl 
                                    type={'date'}
                                    name={'fechainiciocontrato'}
                                    label={'Fecha de inicio'}
                                    value={getDateFormat(formContrato.fechainiciocontrato) || ''}
                                    onInput={handleInputContrato}
                                    min={new Date().toLocaleDateString('en-GB').split('/').reverse().join('-')}
                                    readonly={!editContrato}
                                    error={errorsFormContrato.fechainiciocontrato}
                                />
                                <FormControl 
                                    type={'date'}
                                    name={'fechafincontrato'}
                                    label={'Fecha de fin'}
                                    value={getDateFormat(formContrato.fechafincontrato) || ''}
                                    onInput={handleInputContrato}
                                    readonly={!editContrato}
                                    error={errorsFormContrato.fechafincontrato}
                                />
                            </section>
                            <section className="grid grid-cols-2 gap-4">
                                <FormControl 
                                    type={'number'}
                                    name={'montorentamensual'}
                                    label={'Monto de depósito mensual'}
                                    value={formContrato?.montorentamensual || ''}
                                    onInput={handleInputContrato}
                                    readonly={!editContrato}
                                    error={errorsFormContrato.montorentamensual}
                                />
                                <SelectControl 
                                    name={'estadocontrato'}
                                    label={'Estado de contrato'}
                                    value={formContrato?.estadocontrato || 'Activo'}
                                    options={[{Activo: 'Activo'}, {Inactivo: 'Inactivo'}]}
                                    onInput={handleInputContrato}
                                    disabled={!editContrato}
                                    error={errorsFormContrato.estadocontrato}
                                />
                            </section>
                        </div>
                        <div className="flex gap-2 w-full flex-1 items-end justify-end">
                            {editContrato ? (
                                <>
                                    <ButtonPrimary className="w-auto" onClick={guardarCambiosContrato}>
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
                }
            </div>
        </>
    )
}

export default InquilinosShow