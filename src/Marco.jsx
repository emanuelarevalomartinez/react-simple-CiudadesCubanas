import './Marco.css';
import ListaCiudades from './ListaCiudades.jsx'
import DescripcionPrincipal from './DescripcionPrincipal.jsx'
import CiudadesYDescripcion from './CiudadesYDescripcion.jsx'

function Marco() {
  return (
    <>
    <div className="Marco">
      <DescripcionPrincipal/>
      <CiudadesYDescripcion/>
    </div>
    </>
  )
}

export default Marco
