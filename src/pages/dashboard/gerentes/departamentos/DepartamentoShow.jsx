import { useParams } from "react-router-dom"
import ButtonPrimary from "../../../../components/ButtonPrimary"
import FormControl from "../../../../components/FormControl"
import { useEffect, useState } from "react"

const DepartamentoShow = () => {
    const {id} = useParams()
    const [edit, setEdit] = useState(false)

    useEffect(() => {
        // Aquí se obtiene la data del departamento
    }, [])

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
                                    readonly={!edit}
                                />
                                <FormControl 
                                    name={'nCuartos'}
                                    type={'number'}
                                    label={'Nro de cuartos'}
                                    readonly={!edit}
                                />
                            </section>
                            <section className="grid grid-cols-2 gap-4">
                                <FormControl 
                                    name={'nBaños'}
                                    type={'number'}
                                    label={'Nro de cuartos'}
                                    readonly={!edit}
                                />
                                <FormControl 
                                    name={'areaTotal'}
                                    type={'number'}
                                    label={'Area total'}
                                    readonly={!edit}
                                />
                            </section>
                            <section className="grid grid-cols-2 gap-4">
                                <FormControl 
                                    name={'precioRenta'}
                                    type={'number'}
                                    label={'Precio de renta'}
                                    readonly={!edit}
                                />
                                <FormControl 
                                    name={'estado'}
                                    type={'text'}
                                    label={'Estado'}
                                    readonly={!edit}
                                />
                            </section>
                        </div>
                    </div>
                    <div className="flex gap-2 w-full flex-1 items-end justify-end">
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
                    <header className="text-xl font-semibold mb-10">Inquilino actual</header>
                    <div className="flex-1 flex items-center justify-center">
                        <p className="text-2xl">Sin inquilino</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DepartamentoShow