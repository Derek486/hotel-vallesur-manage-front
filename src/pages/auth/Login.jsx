import { useState } from 'react'
import { jwtDecode } from 'jwt-decode'
import { useNavigate } from 'react-router-dom'
import { EyeIcon, EyeSlashIcon } from '../../components/Icons'
import FormControl from '../../components/FormControl'
import vallesur from '../../assets/vallesur.png'
import useToast from '../../hooks/useToast'
import ButtonPrimary from '../../components/ButtonPrimary'
import useForm from '../../hooks/useForm'
import { login } from '../../services/auth'

const Login = () => {
    const navigate = useNavigate()
    const [form, handleInput] = useForm({})
    const [passwordHidden, setPasswordHidden] = useState(false)
    const [isSending, setIsSending] = useState(false)
    const [toast] = useToast()

    const handleSubmit = (e) => {
        e.preventDefault()

        setIsSending(true)
        toast.promise(login(form), {
            error: <p>No se pudo iniciar sesion</p>,
            loading: <p>Logeando</p>,
            success: <p>Inicio de sesion correcto</p>
        }).then((res) => {
            localStorage.setItem('token', res.data.token);
            const decode = jwtDecode(res.data.token)
            console.log(decode);
        }).catch((err) => {
            console.log(err);
        }).finally(() => {
            setIsSending(false)
        })
        
    }

    return (
        <>
            <main className="h-screen bg-background-hotel bg-cover bg-no-repeat dark:bg-neutral-700">
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

                            <div className="p-12 min-w-[450px] bg-stroke rounded-md shadow-card-3">
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
                                        name={'email'}
                                        value={form.email || ''}
                                        onInput={handleInput}
                                    />
                                    <FormControl
                                        id={'contrasena'}
                                        type={!passwordHidden ? 'password' : 'text'}
                                        label={'Contraseña'}
                                        name={'password'}
                                        value={form.password || ''}
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