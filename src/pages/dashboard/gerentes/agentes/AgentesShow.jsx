import { useNavigate, useParams } from "react-router-dom"
import ButtonPrimary from "../../../../components/ButtonPrimary"
import FormControl from "../../../../components/FormControl"
import { EyeIcon, EyeSlashIcon, ProfileIcon } from "../../../../components/Icons"
import { useEffect, useState } from "react"
import useForm from "../../../../hooks/useForm"
import useToast from "../../../../hooks/useToast"
import { modificarAgente, modificarAgenteUsuario, obtenerAgente } from "../../../../services/agentes"


const AgentesShow = () => {
    const navigate = useNavigate()

    const [toast] = useToast()
    const {id} = useParams()

    const [form, handleInput, setForm] = useForm({})
    const [edit, setEdit] = useState(false)
    const [editUser, setEditUser] = useState(false)
    const [errors, setErrors] = useState({})

    const [passwordHidden, setPasswordHidden] = useState(true)

    useEffect(() => {
        toast.promise(
            obtenerAgente(id),
            {
                error: <p>No se pudo obtener al agente</p>,
                loading: <p>Obteniendo...</p>,
                success: <p>Se obtuvo al agente correctamente</p>
            }
        ).then(res => {
            const data = res.data.data
            setForm({
                datos: {
                    firstname: data.firstname,
                    lastname: data.lastname,
                },
                user: {
                    email: data.email,
                },
            })
        }).catch((err) => {
            setErrors({...errors, datos: err.response.data.data.reduce((acc, curr) => ({...acc,[curr.field]:curr.defaultMessage}),{})})
        })
    }, [])

    const actualizarAgente = () => {
        setErrors(prev => ({...prev, datos: {}}))
        toast.promise(
            modificarAgente(id, form.datos),
            {
                error: <p>No se pudo actualizar al agente</p>,
                loading: <p>Actualizando...</p>,
                success: <p>Se actualizó al agente correctamente</p>
            }
        ).catch((err) => {
            setErrors({...errors, datos: err.response.data.data.reduce((acc, curr) => ({...acc,[curr.field]:curr.defaultMessage}),{})})
        })
    }

    const actualizarAgenteUsuario = () => {
        setErrors({...errors, user: {}})

        if (form?.user?.password !== form?.user?.passwordConfirm) {
            setErrors({...errors, user: {password: 'Las contraseñas no coinciden'}})
            return;
        }

        toast.promise(
            modificarAgenteUsuario(id, form.user),
            {
                error: <p>No se pudo actualizar al agente</p>,
                loading: <p>Actualizando...</p>,
                success: <p>Se actualizó al agente correctamente</p>
            }
        ).catch((err) => {
            setErrors({...errors, user: err.response.data.data.reduce((acc, curr) => ({...acc,[curr.field]:curr.defaultMessage}),{})})
        })
    }

    return (
        <>
            <div className="grid grid-cols-3 gap-4 h-full">
                <div className="bg-white rounded text-black flex flex-col">
                    <div className="bg-boxdark-2 h-32 relative flex justify-center" >
                        <ProfileIcon width={128} height={128} className="absolute fill-stroke drop-shadow-3 -bottom-16" />
                    </div>
                    <div className="p-8 mt-16 flex-1 flex flex-col">
                    <center className="font-semibold text-2xl text-graydark">
                        {form?.datos?.nombres} <br /> 
                        {form?.datos?.apellidos}
                    </center>
                    </div>
                </div>
                <div className="bg-white p-8 rounded text-black flex flex-col">
                    <header className="text-xl font-semibold mb-10">Datos de usuario</header>
                    <div className="flex flex-col gap-4">
                        <FormControl 
                            type={'email'}
                            name={'email'}
                            label={'Correo electrónico'}
                            value={form?.user?.email || ''}
                            onInput={(e) => handleInput(e, {name: 'user', value: {...form?.user, email: e.target.value}})}
                            readonly={!editUser}
                            error={errors?.user?.email}
                        />
                        <FormControl 
                            type={passwordHidden ? 'password' : 'text'}
                            name={'password'}
                            label={'Nueva contraseña'}
                            value={form?.user?.password || ''}
                            onInput={(e) => handleInput(e, {name: 'user', value: {...form?.user, password: e.target.value}})}
                            onInputIcon={() => setPasswordHidden(!passwordHidden)}
                            icon={!passwordHidden ? <EyeIcon /> : <EyeSlashIcon />}
                            readonly={!editUser}
                            error={errors?.user?.password}
                        />
                        <FormControl 
                            type={passwordHidden ? 'password' : 'text'}
                            name={'passwordConfirm'}
                            label={'Confirme su contraseña nueva'}
                            onInput={(e) => handleInput(e, {name: 'user', value: {...form?.user, passwordConfirm: e.target.value}})}
                            value={form?.user?.passwordConfirm || ''}
                            onInputIcon={() => setPasswordHidden(!passwordHidden)}
                            icon={!passwordHidden ? <EyeIcon /> : <EyeSlashIcon />}
                            readonly={!editUser}
                            error={errors?.user?.passwordConfirm}
                        />
                    </div>
                    <div className="flex gap-2 w-full flex-1 items-end justify-end">
                        {editUser ? (
                            <>
                                <ButtonPrimary className="w-auto" onClick={actualizarAgenteUsuario}>
                                    Actualizar datos
                                </ButtonPrimary>
                                <ButtonPrimary className="w-auto" onClick={() => setEditUser(false)}>
                                    Cancelar
                                </ButtonPrimary>
                            </>
                        ) : 
                            <>
                                <ButtonPrimary className="w-auto" onClick={() => setEditUser(true)}>
                                    Editar campos
                                </ButtonPrimary>
                            </>
                        }
                    </div>
                </div>
                <div className="bg-white p-8 rounded text-black flex flex-col">
                    <div className="flex flex-col w-full">
                        <header className="text-xl font-semibold mb-10">Datos de agente</header>
                        <div className="flex flex-col gap-4">
                                <FormControl 
                                    name={'firstname'}
                                    type={'text'}
                                    value={form?.datos?.firstname || ''}
                                    label={'Nombres de agente'}
                                    onInput={(e) => handleInput(e, {name: 'datos', value: {...form?.datos, firstname: e.target.value}})}
                                    readonly={!edit}
                                    error={errors?.datos?.firstname}
                                />
                                <FormControl 
                                    name={'lastname'}
                                    type={'text'}
                                    value={form?.datos?.lastname || ''}
                                    label={'Apellidos de agente'}
                                    onInput={(e) => handleInput(e, {name: 'datos', value: {...form?.datos, lastname: e.target.value}})}
                                    readonly={!edit}
                                    error={errors?.datos?.lastname}
                                />
                        </div>
                    </div>
                    <div className="flex gap-2 w-full flex-1 items-end justify-end">
                        {edit ? (
                            <>
                                <ButtonPrimary className="w-auto" onClick={actualizarAgente}>
                                    Actualizar datos
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
            </div>
        </>
    )
}

export default AgentesShow