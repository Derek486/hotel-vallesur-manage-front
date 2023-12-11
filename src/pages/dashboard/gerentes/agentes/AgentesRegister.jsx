import { Form, useNavigate } from "react-router-dom"
import ButtonPrimary from "../../../../components/ButtonPrimary"
import FormControl from "../../../../components/FormControl"
import { EyeIcon, EyeSlashIcon, ProfileIcon } from "../../../../components/Icons"
import { useState } from "react"
import useForm from "../../../../hooks/useForm"
import { register } from "../../../../services/agentes";
import useToast from "../../../../hooks/useToast"

const AgentesRegister = () => {
    const navigate = useNavigate()
    const [form, handleInput, setForm] = useForm({})
    const [passwordHidden, setPasswordHidden] = useState(true)
    const [errors, setErrors] = useState({})
    const [toast] = useToast()

    const registrarAgente = () => {
        setErrors({})
        setForm(prev => ({...prev, username: form?.email, role: 'MANAGER'}))
        if (form?.password !== form?.passwordConfirm) {
            setErrors({...errors, password: 'Las contraseñas no coinciden'})
            return;
        }

        toast.promise(
            register(form),
            {
                error: <p>No se pudo registrar al agente</p>,
                loading: <p>Registrando...</p>,
                success: <p>Se registró al agente correctamente</p>
            }
        ).then((res) => {
            navigate('..')
        }).catch((err) => {
            console.log(err);
            setErrors(err.response.data.data.reduce((acc, curr) => ({...acc,[curr.field]:curr.defaultMessage}),{}))
        })
    };

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
                    </div>
                </div>
                <div className="bg-white p-8 rounded text-black flex flex-col">
                    <header className="text-xl font-semibold mb-10">Datos de usuario</header>
                    <div className="flex flex-col gap-4">
                        <FormControl 
                            type={'email'}
                            name={'email'}
                            label={'Correo electrónico'}
                            value={form.email || ''}
                            onInput={handleInput}
                            error={errors?.email}
                        />
                        <FormControl 
                            type={!passwordHidden ? 'password' : 'text'}
                            name={'password'}
                            label={'Contraseña'}
                            value={form.password || ''}
                            onInput={handleInput}
                            className='mb-4'
                            onInputIcon={() => setPasswordHidden(!passwordHidden)}
                            error={errors?.password}
                            icon={!passwordHidden ? <EyeIcon /> : <EyeSlashIcon />}
                        />
                        <FormControl 
                            type={!passwordHidden ? 'password' : 'text'}
                            name={'passwordConfirm'}
                            label={'Confirmación de contraseña'}
                            value={form.passwordConfirm || ''}
                            onInput={handleInput}
                            onInputIcon={() => setPasswordHidden(!passwordHidden)}
                            error={errors?.passwordConfirm}
                            icon={!passwordHidden ? <EyeIcon /> : <EyeSlashIcon />}
                        />
                    </div>
                </div>
                <div className="bg-white p-8 rounded text-black flex flex-col">
                    <div className="flex flex-col w-full">
                        <header className="text-xl font-semibold mb-10">Datos de agente</header>
                        <div className="flex flex-col gap-4">
                            <FormControl 
                                name={'firstname'}
                                type={'text'}
                                value={form.firstname || ''}
                                label={'Nombres de agente'}
                                onInput={handleInput}
                                error={errors?.firstname}
                            />
                            <FormControl 
                                name={'lastname'}
                                type={'text'}
                                value={form.lastname || ''}
                                label={'Apellidos de agente'}
                                onInput={handleInput}
                                error={errors?.lastname}
                            />
                        </div>
                    </div>
                    <div className="flex gap-2 w-full flex-1 items-end justify-end">
                        <ButtonPrimary className="w-auto" onClick={registrarAgente}>
                            Registrar agente
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

export default AgentesRegister