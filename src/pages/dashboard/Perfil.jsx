import { useState } from "react"
import ButtonPrimary from "../../components/ButtonPrimary"
import FormControl from "../../components/FormControl"
import { EyeIcon, EyeSlashIcon } from "../../components/Icons"
import useForm from "../../hooks/useForm"

const Perfil = () => {

    const [form, handleInput] = useForm({})
    const [formPassword, handleInputPassword] = useForm({})
    const [passwordHidden, setPasswordHidden] = useState(true)

    const [edit, setEdit] = useState(false)

    return (
        <>
            <div className="flex gap-4 h-full">
                <div className="bg-white p-8 rounded text-black basis-2/3 flex flex-col">
                    <header className="text-xl font-semibold mb-10">Mis datos</header>
                    <div className="flex flex-col gap-4">
                        <section className="grid grid-cols-2 gap-4">
                            <FormControl 
                                name={'nombres'}
                                type={'text'}
                                label={'Nombres'}
                                value={form.nombres || ''}
                                onInput={handleInput}
                                readonly={!edit}
                            />
                            <FormControl 
                                name={'apellidos'}
                                type={'text'}
                                label={'Apellidos'}
                                value={form.apellidos || ''}
                                onInput={handleInput}
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
                                readonly={!edit}
                            />
                            <FormControl 
                                name={'username'}
                                type={'text'}
                                label={'Nombre de usuario'}
                                value={form.username || ''}
                                onInput={handleInput}
                                readonly={!edit}
                            />
                        </section>
                        <section className="grid grid-cols-2 gap-4">
                            <FormControl 
                                name={'documentoIdentificacion'}
                                type={'number'}
                                label={'Documento de identificación'}
                                value={form.documentoIdentificacion || ''}
                                onInput={handleInput}
                                readonly={!edit}
                            />
                            <FormControl 
                                name={'telefono'}
                                type={'tel'}
                                label={'Telefono'}
                                value={form.telefono || ''}
                                onInput={handleInput}
                                readonly={!edit}
                            />
                        </section>
                    </div>
                    <div className="flex gap-2 flex-1 justify-end items-end">
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
                    </div>
                    <div className="flex gap-2 flex-1 justify-end items-end">
                        <ButtonPrimary className="w-auto" onClick={() => setEditPassword(true)}>
                            Modificar contraseña
                        </ButtonPrimary>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Perfil