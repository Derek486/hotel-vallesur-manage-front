import ButtonPrimary from "../../components/ButtonPrimary"
import FormControl from "../../components/FormControl"

const Perfil = () => {
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
                            />
                            <FormControl 
                                name={'apellidos'}
                                type={'text'}
                                label={'Apellidos'}
                            />
                        </section>
                        <section className="grid grid-cols-2 gap-4">
                            <FormControl 
                                name={'email'}
                                type={'email'}
                                label={'Correo electrónico'}
                            />
                            <FormControl 
                                name={'username'}
                                type={'text'}
                                label={'Nombre de usuario'}
                            />
                        </section>
                        <section className="grid grid-cols-2 gap-4">
                            <FormControl 
                                name={'documentoIdentificacion'}
                                type={'number'}
                                label={'Documento de identificación'}
                            />
                            <FormControl 
                                name={'telefono'}
                                type={'tel'}
                                label={'Telefono'}
                            />
                        </section>
                    </div>
                    <div className="flex gap-2 flex-1 justify-end items-end">
                        <ButtonPrimary className=" ms-auto w-auto">
                            Actualizar contraseña
                        </ButtonPrimary>
                        <ButtonPrimary className="w-auto">
                            Editar campos
                        </ButtonPrimary>
                    </div>
                </div>
                <div className="bg-white p-8 rounded flex-1 text-black">
                    <header className="text-xl font-semibold mb-10">Mi cuenta de usuario</header>
                </div>
            </div>
        </>
    )
}

export default Perfil