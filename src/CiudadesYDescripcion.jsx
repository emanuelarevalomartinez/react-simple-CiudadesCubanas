import Descripcion from './DescripcionCiudad'
import ListaCiudades from './ListaCiudades'
import { ciudades } from "./ciudades";
import './CiudadesYDescripcion.css';
import { useState } from 'react';


const CiudadesYDescripcion = () => {

   const [id, setId] = useState(-1);

  
   function cambiarId(valor){
      setId(valor);
   }

  return (
    <>
      <div className='alineamiento'>
         <ListaCiudades ciudades={ciudades} identificadorCambiar={cambiarId}/>
         <Descripcion ciudades={ciudades} asignarId={id}/>
      </div>
    </>
  )
}

export default CiudadesYDescripcion
