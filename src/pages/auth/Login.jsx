import { useState } from 'react'
import { EyeIcon, EyeSlashIcon } from '../../components/Icons'
import FormControl from '../../components/FormControl'
import vallesur from '../../assets/vallesur.png'
import useToast from '../../hooks/useToast'
import ButtonPrimary from '../../components/ButtonPrimary'
import useForm from '../../hooks/useForm'

const Login = () => {

    const [form, handleInput] = useForm({})
    const [passwordHidden, setPasswordHidden] = useState(false)
    const [isSending, setIsSending] = useState(false)
    const [toast] = useToast()

    const handleSubmit = (e) => {
        e.preventDefault()

        setIsSending(true)
        toast.promise(new Promise((resolve, rejected) => {
            setTimeout(() => rejected({email: 'el email ya esta ocupado'}), 1000)
        }), {
            error: <p>No se pudo iniciar sesion</p>,
            loading: <p>Logeando</p>,
            success: <p>Inicio de sesion correcto</p>
        }).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        }).finally(() => {
            setIsSending(false)
        })
        
    }

    return (
        <>
            <main className="h-screen bg-bodydark3 dark:bg-neutral-700">
                <div className="g-6 flex h-full justify-center items-center">
                    <div className="rounded-lg w-auto">
                        <div className="g-0 flex flex-col lg:flex-row justify-center items-center">
                            <div className="flex items-center w-[400px] lg:h-[350px] p-8 bg-gradient-to-r from-black via-boxdark to-black rounded-t-lg lg:w-4/12 lg:rounded-l-lg lg:rounded-br-none lg:rounded-tr-none">
                                <div className="text-white text-center">
                                    <span className='opacity-95 text-xl'>Vallesur <br /> Departamentos</span>

                                    <img
                                        className="mx-auto w-48"
                                        src={vallesur}
                                        alt="logo"
                                    />
                                    
                                    <p className="text-lg">
                                        Proporcione un correo y una contraseña, será redireccionado a una vista dependiendo del rol que usted posea.
                                    </p>
                                </div>
                            </div>

                            <div className="p-12 min-w-[450px] shadow-card-3">
                                <div className="text-center">
                                    <h1 className="mb-6 text-2xl font-semibold">
                                        Inicio de sesion
                                    </h1>
                                </div>

                                <form onSubmit={handleSubmit} className='min-w-full flex flex-col gap-4'>
                                    <FormControl
                                        id={'correo'}
                                        type='email'
                                        label={'Correo electrónico'}
                                        name={'correo'}
                                        value={form.correo || ''}
                                        onInput={handleInput}
                                    />
                                    <FormControl
                                        id={'contrasena'}
                                        type={!passwordHidden ? 'password' : 'text'}
                                        label={'Contraseña'}
                                        name={'contrasena'}
                                        value={form.contrasena || ''}
                                        className='mb-4'
                                        onInput={handleInput}
                                        onInputIcon={() => setPasswordHidden(!passwordHidden)}
                                        icon={!passwordHidden ? <EyeIcon /> : <EyeSlashIcon />}
                                    />
                                    <ButtonPrimary type={'submit'} className='w-full mt-4'>
                                        {!isSending ? (
                                            <p className='font-medium uppercase'>Iniciar sesion</p>
                                        ) : (
                                            <div className='h-8 w-8 animate-spin-2 rounded-full border-4 border-solid border-white border-t-transparent'></div>
                                        )}
                                    </ButtonPrimary>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Login