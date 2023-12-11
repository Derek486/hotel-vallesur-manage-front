import { useNavigate } from "react-router-dom"
import ButtonPrimary from "../../../../components/ButtonPrimary"
import FormControl from "../../../../components/FormControl"
import useForm from "../../../../hooks/useForm"
import { crearDepartamento } from "../../../../services/departamentos"
import useToast from "../../../../hooks/useToast"
import { useState } from "react"

const DepartamentosRegister = () => {
    const navigate = useNavigate();
    const [form, handleInput] = useForm({
        estado: "Disponible",
    });
    const [errors, setErrors] = useState({})
    const [toast] = useToast();

    const handleSubmit = (e) => {
        e.preventDefault();
        toast.promise(
            crearDepartamento(form),
            {
                error: <p>No se pudo registrar el departamento</p>,
                loading: <p>Cargando</p>,
                success: <p>Se inició el departamento correctamente</p>
            }
        ).then((res) => {
            navigate('..')
        }).catch((err) => {
            setErrors(err.response.data.data.reduce((acc, curr) => ({...acc,[curr.field]:curr.defaultMessage}),{}))
        })
    };
    
 
    return (
        <>
            <div className="flex gap-4 h-full">
                <div className="bg-white p-8 rounded text-black basis-2/3 flex flex-col">
                    <div className="flex flex-col w-full">
                        <header className="text-xl font-semibold mb-10">Datos de departamento</header>
                        <div className="flex flex-col gap-4">
                        <section className="grid grid-cols-2 gap-4">
                                <FormControl 
                                    name={'ndepartamento'}
                                    type={'text'}
                                    label={'Número de departamento'}
                                    value={form.ndepartamento || ''}
                                    onInput={handleInput}
                                    error={errors.ndepartamento}
                                />
                                <FormControl 
                                    name={'nhabitaciones'}
                                    type={'number'}
                                    label={'Nro de cuartos'}
                                    value={form.nhabitaciones || ''}
                                    onInput={handleInput}
                                    error={errors.nhabitaciones}
                                />
                            </section>
                            <section className="grid grid-cols-2 gap-4">
                                <FormControl 
                                    name={'nbaños'}
                                    type={'number'}
                                    label={'Nro de baños'}
                                    value={form.nbaños || ''}
                                    onInput={handleInput}
                                    error={errors.nbaños}
                                />
                                <FormControl 
                                    name={'areatotal'}
                                    type={'number'}
                                    label={'Area total'}
                                    value={form.areatotal || ''}
                                    onInput={handleInput}
                                    error={errors.areatotal}
                                />
                            </section>
                            <section className="grid grid-cols-2 gap-4">
                                <FormControl 
                                    name={'precio'}
                                    type={'number'}
                                    label={'Precio de renta'}
                                    value={form.precio || ''}
                                    onInput={handleInput}
                                    error={errors.precio}
                                />
                                <FormControl 
                                    name={'estado'}
                                    type={'text'}
                                    label={'Estado'}
                                    value={'Disponible'}
                                    onInput={handleInput}
                                    readonly
                                />
                            </section>
                        </div>
                    </div>
                    <div className="flex gap-2 w-full flex-1 items-end justify-end">
                        <ButtonPrimary className="w-auto" onClick={handleSubmit}>
                            Registrar departamento
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

export default DepartamentosRegister