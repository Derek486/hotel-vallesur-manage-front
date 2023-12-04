import { useNavigate } from "react-router-dom"
import ButtonPrimary from "../../../../components/ButtonPrimary"
import FormControl from "../../../../components/FormControl"
import useForm from "../../../../hooks/useForm"

const DepartamentosRegister = () => {
    const navigate = useNavigate()
    const [form, handleInput] = useForm()

    return (
        <>
            <div className="flex gap-4 h-full">
                <div className="bg-white p-8 rounded text-black basis-2/3 flex flex-col">
                    <div className="flex flex-col w-full">
                        <header className="text-xl font-semibold mb-10">Datos de departamento</header>
                        <div className="flex flex-col gap-4">
                            <section className="grid grid-cols-2 gap-4">
                                <FormControl 
                                    name={'nombreONumero'}
                                    type={'text'}
                                    label={'Nombre o número'}
                                    value={form.nombreONumero || ''}
                                    onInput={handleInput}
                                />
                                <FormControl 
                                    name={'nCuartos'}
                                    type={'number'}
                                    label={'Nro de cuartos'}
                                    value={form.nCuartos || ''}
                                    onInput={handleInput}
                                />
                            </section>
                            <section className="grid grid-cols-2 gap-4">
                                <FormControl 
                                    name={'nBaños'}
                                    type={'number'}
                                    label={'Nro de cuartos'}
                                    value={form.nBaños || ''}
                                    onInput={handleInput}
                                />
                                <FormControl 
                                    name={'areaTotal'}
                                    type={'number'}
                                    label={'Area total'}
                                    value={form.areaTotal || ''}
                                    onInput={handleInput}
                                />
                            </section>
                            <section className="grid grid-cols-2 gap-4">
                                <FormControl 
                                    name={'precioRenta'}
                                    type={'number'}
                                    label={'Precio de renta'}
                                    value={form.precioRenta || ''}
                                    onInput={handleInput}
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
                        <ButtonPrimary className="w-auto">
                            Registrar departamento
                        </ButtonPrimary>
                        <ButtonPrimary className="w-auto" onClick={() => navigate('..')}>
                            Cancelar
                        </ButtonPrimary>
                    </div>
                </div>
                <div className="bg-white p-8 rounded flex-1 text-black flex flex-col">
                    <header className="text-xl font-semibold mb-10">Inquilino actual</header>
                    <div className="flex-1 flex items-center justify-center">
                        <p className="text-2xl">Sin inquilino</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DepartamentosRegister