import { useLocation, useParams } from "react-router-dom"

const titleLocations = {
    'gerente/perfil': 'Bienvenido gerente',
    'gerente/departamentos': 'Departamentos registrados',
    'gerente/departamentos/register': 'Registrar departamento',
    'gerente/agentes': 'Agentes actuales',
    'gerente/agentes/register': 'Registrar agente',

    'agente/perfil': 'Bienvenido agente',
    'agente/inquilinos': 'Inquilinos registrados',
    'agente/contratos': 'Contratos vigentes',
    'agente/pagos': 'Pagos realizados',

}

// Puedes establecer el título del header o sino se coloca por defecto
const useHeader = () => {
    const location = useLocation()
    const {id} = useParams()
    return [titleLocations[location.pathname.split('/dashboard/')[1]]]
}

export default useHeader