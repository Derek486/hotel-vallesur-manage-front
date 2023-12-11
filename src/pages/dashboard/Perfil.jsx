import { useEffect, useState } from "react"
import ButtonPrimary from "../../components/ButtonPrimary"
import FormControl from "../../components/FormControl"
import { EyeIcon, EyeSlashIcon } from "../../components/Icons"
import useForm from "../../hooks/useForm"
import { getUser, updatePassword, updateUser } from "../../services/auth"
import useToast from "../../hooks/useToast"
import { useNavigate } from "react-router-dom"

const Perfil = () => {

    const [form, handleInput, setForm] = useForm({})
    const [formPassword, handleInputPassword] = useForm({})
    const [errors, setErrors] = useState({})
    const [errorsPassword, setErrorsPassword] = useState({})
    const [passwordHidden, setPasswordHidden] = useState(true)
    const [toast] = useToast()
    const [edit, setEdit] = useState(false)
    const navigate = useNavigate()
    
    useEffect(() => {
        toast.promise(getUser(),{
            error: <p>Error al obtener datos</p>,
            loading: <p>Cargando...</p>,
            success: <p>Datos obtenidos correctamente</p> 
        }).then((res) => {
            setForm(res.data.data)
        }).catch((err) => {
            console.error(err);
        })
    }, [])

    const handleSubmit = () => {
        toast.promise(updateUser(form),{
            error: <p>Error al actualizar datos</p>,
            loading: <p>Cargando...</p>,
            success: <p>Datos actualizados correctamente, debe volver a iniciar sesion</p> 
        }).then(res => {
            localStorage.removeItem('token')
            navigate('/login')
        }).catch((err) => {
            setErrors(prev => ({...prev, ...err.response.data.data.reduce((acc, curr) => ({...acc,[curr.field]:curr.defaultMessage}),{})}))
        })
    }

    const handleSubmitPassword = () => {
        toast.promise(updatePassword(formPassword),{
            error: <p>Error al actualizar contraseña</p>,
            loading: <p>Cargando...</p>,
            success: <p>Contraseña actualizada correctamente, debe volver a iniciar sesion</p> 
        }).then(res => {
            localStorage.removeItem('token')
            navigate('/login')
        }).catch((err) => {
            setErrorsPassword(prev => ({...prev, ...err.response.data.data.reduce((acc, curr) => ({...acc,[curr.field]:curr.defaultMessage}),{})}))
        })
    }

    return (
        <>
            <div className="flex gap-4 h-full">
                <div className="bg-white p-8 rounded text-black basis-2/3 flex flex-col">
                    <header className="text-xl font-semibold mb-10">Mis datos</header>
                    <div className="flex flex-col gap-4">
                        <section className="grid grid-cols-2 gap-4">
                            <FormControl 
                                name={'firstname'}
                                type={'text'}
                                label={'Nombres'}
                                value={form.firstname || ''}
                                onInput={handleInput}
                                readonly={!edit}
                                error={errors.firstname}
                            />
                            <FormControl 
                                name={'lastname'}
                                type={'text'}
                                label={'Apellidos'}
                                value={form.lastname || ''}
                                onInput={handleInput}
                                error={errors.lastname}
                                readonly={!edit}
                            />
                        </section>
                        <section className="grid grid-cols-2 gap-4">
                            <FormControl 
                                name={'email'}
                                type={'email'}
                                label={'Correo electrónico'}
                                value={form.email || ''}
                                onInput={handleInput}
                                error={errors.email}
                                readonly={!edit}
                            />
                        </section>
                        
                    </div>
                    <div className="flex gap-2 flex-1 justify-end items-end">
                        {edit ? (
                            <>
                                <ButtonPrimary className="w-auto" onClick={handleSubmit}>
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
                <div className="bg-white p-8 rounded flex-1 text-black flex flex-col">
                    <header className="text-xl font-semibold mb-10">Mi contraseña</header>
                    <div className="flex flex-col gap-4">
                        <FormControl 
                            type={passwordHidden ? 'password' : 'text'}
                            name={'password'}
                            label={'Nueva contraseña'}
                            value={formPassword.password || ''}
                            onInput={handleInputPassword}
                            onInputIcon={() => setPasswordHidden(!passwordHidden)}
                            icon={!passwordHidden ? <EyeIcon /> : <EyeSlashIcon />}
                            error={errorsPassword.password}
                        />
                        <FormControl 
                            type={passwordHidden ? 'password' : 'text'}
                            name={'passwordConfirm'}
                            label={'Confirme su contraseña nueva'}
                            value={formPassword.passwordConfirm || ''}
                            onInput={handleInputPassword}
                            onInputIcon={() => setPasswordHidden(!passwordHidden)}
                            icon={!passwordHidden ? <EyeIcon /> : <EyeSlashIcon />}
                            error={errorsPassword.passwordConfirm}
                        />
                    </div>
                    <div className="flex gap-2 flex-1 justify-end items-end">
                        <ButtonPrimary className="w-auto" onClick={handleSubmitPassword}>
                            Modificar contraseña
                        </ButtonPrimary>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Perfil