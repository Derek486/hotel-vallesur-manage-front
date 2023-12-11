import { useParams } from "react-router-dom"
import ButtonPrimary from "../../../../components/ButtonPrimary"
import FormControl from "../../../../components/FormControl"
import { useEffect, useState } from "react"
import useToast from "../../../../hooks/useToast"
import { actualizarDepartamento, mostrarDepartamentosInquilino } from "../../../../services/departamentos"
import { mostrarDepartamentos } from '../../../../services/departamentos'
import useForm from "../../../../hooks/useForm"
import SelectControl from "../../../../components/SelectControl"
import { ProfileIcon } from "../../../../components/Icons"

const DepartamentoShow = () => {
    const {id} = useParams()
    const [edit, setEdit] = useState(false)
    const [departamentoData, handleInput, setDepartamentoData] = useForm()
    const [errors, setErrors] = useState({})
    const [toast] = useToast();

    useEffect(() => {
        toast.promise(mostrarDepartamentos(id),{
            error: <p>Error al listar departamentos</p>,
            loading: <p>Cargando...</p>,
            success: <p>Departamento mostrado correctamente</p>
        }).then((res) => {
            setDepartamentoData(res.data.data);
            mostrarDepartamentosInquilino(id)
                .then(res => {
                    setDepartamentoData(prev => ({...prev, inquilino: res.data.data}))
                })
        }).catch((err) => {
            console.log(err);
        })
    }, []);

    const handleUpdate = () => {
        setErrors({})
        toast.promise(actualizarDepartamento(id, departamentoData), {
            error: <p>Error al actualizar el departamento</p>,
            loading: <p>Actualizando...</p>,
            success: <p>Departamento actualizado correctamente</p>
        }).then(() => {
            setEdit(false);
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
                                    onInput={handleInput}
                                    value={departamentoData.ndepartamento || ''}
                                    type={'text'}
                                    label={'Numero de Departamento'}
                                    readonly={!edit}
                                    error={errors.ndepartamento}
                                />
                                <FormControl 
                                    name={'nhabitaciones'}
                                    onInput={handleInput}
                                    value={departamentoData.nhabitaciones || ''}
                                    type={'number'}
                                    label={'Nro de Habitaciones'}
                                    readonly={!edit}
                                    error={errors.nhabitaciones}
                                />
                            </section>
                            <section className="grid grid-cols-2 gap-4">
                                <FormControl 
                                    name={'nbaños'}
                                    onInput={handleInput}
                                    value={departamentoData.nbaños || ''}
                                    type={'number'}
                                    label={'Nro de Baños'}
                                    readonly={!edit}
                                    error={errors.nbaños}
                                />
                                <FormControl 
                                    name={'areatotal'}
                                    onInput={handleInput}
                                    value={departamentoData.areatotal || ''}
                                    type={'number'}
                                    label={'Area total'}
                                    readonly={!edit}
                                    error={errors.areatotal}
                                />
                            </section>
                            <section className="grid grid-cols-2 gap-4">
                                <FormControl 
                                    name={'precio'}
                                    onInput={handleInput}
                                    value={departamentoData.precio || ''}
                                    type={'number'}
                                    label={'Precio de renta'}
                                    readonly={!edit}
                                    error={errors.precio}
                                />
                                <SelectControl 
                                    name={'estado'}
                                    onInput={handleInput}
                                    value={departamentoData.estado || ''}
                                    options={[
                                        {Disponible: 'Disponible'},
                                        {Ocupado: 'Ocupado'},
                                        {Mantenimiento: 'Mantenimiento'}
                                    ]}
                                    type={'text'}
                                    label={'Estado'}
                                    disabled={!edit}
                                    error={errors.estado}
                                />
                            </section>
                        </div>
                    </div>
                    <div className="flex gap-2 w-full flex-1 items-end justify-end">
                        {edit ? (
                            <>
                                <ButtonPrimary className="w-auto" onClick={handleUpdate}>
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
                    <div className="bg-white rounded text-black flex flex-col">
                        <div className="bg-boxdark-2 h-32 relative flex justify-center" >
                            <ProfileIcon width={128} height={128} className="absolute fill-stroke drop-shadow-3 -bottom-16" />
                        </div>
                        <div className="p-8 mt-16 flex-1 flex flex-col">
                            <center className="font-semibold text-2xl text-graydark">
                                {departamentoData?.inquilino?.nombre} <br /> 
                                {departamentoData?.inquilino?.apellidos}
                            </center>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DepartamentoShow