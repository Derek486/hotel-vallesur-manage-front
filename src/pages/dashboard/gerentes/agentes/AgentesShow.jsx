import { useNavigate } from "react-router-dom"
import ButtonPrimary from "../../../../components/ButtonPrimary"
import FormControl from "../../../../components/FormControl"
import { EyeIcon, EyeSlashIcon, ProfileIcon } from "../../../../components/Icons"
import { useState } from "react"
import useForm from "../../../../hooks/useForm"


const AgentesShow = () => {
    const navigate = useNavigate()

    const [form, handleInput] = useForm({})
    const [edit, setEdit] = useState(false)

    const [formUser, handleInputUser] = useForm({})
    const [editUser, setEditUser] = useState(false)
    
    const [formPassword, handleInputPassword] = useForm({})
    const [editPassword, setEditPassword] = useState(false)

    const [passwordHidden, setPasswordHidden] = useState(true)

    const actualizarAgente = () => {
        // Aquí se envia el formulario de datos a spring para el registro
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
                            {form.nombres} <br /> 
                            {form.apellidos}
                        </center>
                        <center className="font-normal text-xl text-strokedark mt-20">
                            <h2 className="mb-2">Contacto:</h2>
                            {form.email} <br />
                            {form.telefono}
                        </center>
                    </div>
                </div>
                <div className="bg-white p-8 rounded text-black flex flex-col">
                    <header className="text-xl font-semibold mb-10">Datos de usuario</header>
                    <div className="flex flex-col gap-4">
                        {!editPassword ? (
                            <>
                                <FormControl 
                                    type={'email'}
                                    name={'email'}
                                    label={'Correo electrónico'}
                                    value={formUser.email || ''}
                                    onInput={handleInputUser}
                                    readonly={!editUser}
                                />
                                <FormControl 
                                    type={'text'}
                                    name={'username'}
                                    label={'Nombre de usuario'}
                                    value={formUser.username || ''}
                                    onInput={handleInputUser}
                                    readonly={!editUser}
                                />
                            </>
                        ) : (
                            <>
                                <FormControl 
                                    type={passwordHidden ? 'password' : 'text'}
                                    name={'password'}
                                    label={'Nueva contraseña'}
                                    value={formPassword.password || ''}
                                    onInput={handleInputPassword}
                                    onInputIcon={() => setPasswordHidden(!passwordHidden)}
                                    icon={!passwordHidden ? <EyeIcon /> : <EyeSlashIcon />}
                                />
                                <FormControl 
                                    type={passwordHidden ? 'password' : 'text'}
                                    name={'passwordConfirm'}
                                    label={'Confirme su contraseña nueva'}
                                    value={formPassword.passwordConfirm || ''}
                                    onInput={handleInputPassword}
                                    onInputIcon={() => setPasswordHidden(!passwordHidden)}
                                    icon={!passwordHidden ? <EyeIcon /> : <EyeSlashIcon />}
                                />
                            </>
                        )}
                    </div>
                    <div className="flex gap-2 w-full flex-1 items-end justify-end">
                        {editUser ? (
                            <>
                                <ButtonPrimary className="w-auto" onClick={actualizarAgente}>
                                    Actualizar datos
                                </ButtonPrimary>
                                <ButtonPrimary className="w-auto" onClick={() => setEditUser(false)}>
                                    Cancelar
                                </ButtonPrimary>
                            </>
                        ) : !editPassword ? (
                            <>
                                <ButtonPrimary className="w-auto" onClick={() => setEditPassword(true)}>
                                    Contraseña
                                </ButtonPrimary>
                                <ButtonPrimary className="w-auto" onClick={() => setEditUser(true)}>
                                    Editar campos
                                </ButtonPrimary>
                            </>
                        ) : (
                            <>
                                <ButtonPrimary className="w-auto">
                                    Actualizar Contraseña
                                </ButtonPrimary>
                                <ButtonPrimary className="w-auto" onClick={() => setEditPassword(false)}>
                                    Cancelar
                                </ButtonPrimary>
                            </>
                        )}
                    </div>
                </div>
                <div className="bg-white p-8 rounded text-black flex flex-col">
                    <div className="flex flex-col w-full">
                        <header className="text-xl font-semibold mb-10">Datos de agente</header>
                        <div className="flex flex-col gap-4">
                                <FormControl 
                                    name={'nombres'}
                                    type={'text'}
                                    value={form.nombres || ''}
                                    label={'Nombres de agente'}
                                    onInput={handleInput}
                                    readonly={!edit}
                                />
                                <FormControl 
                                    name={'apellidos'}
                                    type={'text'}
                                    value={form.apellidos || ''}
                                    label={'Apellidos de agente'}
                                    onInput={handleInput}
                                    readonly={!edit}
                                />
                                <FormControl 
                                    name={'telefono'}
                                    type={'tel'}
                                    value={form.telefono || ''}
                                    label={'Nro de telefono'}
                                    onInput={handleInput}
                                    readonly={!edit}
                                />
                                <FormControl 
                                    name={'numeroIdentificacion'}
                                    type={'number'}
                                    value={form.numeroIdentificacion || ''}
                                    label={'Número de identificación'}
                                    onInput={handleInput}
                                    readonly={!edit}
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