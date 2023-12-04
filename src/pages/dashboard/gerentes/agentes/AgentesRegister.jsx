import { useNavigate } from "react-router-dom"
import ButtonPrimary from "../../../../components/ButtonPrimary"
import FormControl from "../../../../components/FormControl"
import { EyeIcon, EyeSlashIcon, ProfileIcon } from "../../../../components/Icons"
import { useState } from "react"
import useForm from "../../../../hooks/useForm"

const AgentesRegister = () => {
    const navigate = useNavigate()
    const [form, handleInput] = useForm({})
    const [passwordHidden, setPasswordHidden] = useState(true)

    const registrarAgente = () => {
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
                        <FormControl 
                            type={'email'}
                            name={'email'}
                            label={'Correo electrónico'}
                            value={form.email || ''}
                            onInput={handleInput}
                        />
                        <FormControl 
                            type={'text'}
                            name={'username'}
                            label={'Nombre de usuario'}
                            value={form.username || ''}
                            onInput={handleInput}
                        />
                        <FormControl 
                            type={!passwordHidden ? 'password' : 'text'}
                            name={'password'}
                            label={'Contraseña'}
                            value={form.password || ''}
                            onInput={handleInput}
                            className='mb-4'
                            onInputIcon={() => setPasswordHidden(!passwordHidden)}
                            icon={!passwordHidden ? <EyeIcon /> : <EyeSlashIcon />}
                        />
                        <FormControl 
                            type={!passwordHidden ? 'password' : 'text'}
                            name={'passwordConfirm'}
                            label={'Confirmación de contraseña'}
                            value={form.passwordConfirm || ''}
                            onInput={handleInput}
                            onInputIcon={() => setPasswordHidden(!passwordHidden)}
                            icon={!passwordHidden ? <EyeIcon /> : <EyeSlashIcon />}
                        />
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
                            />
                            <FormControl 
                                name={'apellidos'}
                                type={'text'}
                                value={form.apellidos || ''}
                                label={'Apellidos de agente'}
                                onInput={handleInput}
                            />
                            <FormControl 
                                name={'telefono'}
                                type={'tel'}
                                value={form.telefono || ''}
                                label={'Nro de telefono'}
                                onInput={handleInput}
                            />
                            <FormControl 
                                name={'numeroIdentificacion'}
                                type={'number'}
                                value={form.numeroIdentificacion || ''}
                                label={'Número de identificación'}
                                onInput={handleInput}
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